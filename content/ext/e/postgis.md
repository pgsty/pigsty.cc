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
| [**`postgis`**](/ext/e/postgis) | `3.6.3` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| **下游依赖** | [`documentdb`](/ext/e/documentdb) [`h3_postgis`](/ext/e/h3_postgis) [`mobilitydb`](/ext/e/mobilitydb) [`pgrouting`](/ext/e/pgrouting) [`pointcloud_postgis`](/ext/e/pointcloud_postgis) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`postgis_topology`](/ext/e/postgis_topology) [`pg_eviltransform`](/ext/e/pg_eviltransform) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.3` | {{< pgvers "18,17,16,15,14" >}} | `postgis` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.3` | {{< pgvers "18,17,16,15,14" >}} | `postgis36_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-postgis-3` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.6.3 3 | AVAIL PGDG 3.6.3 3 | AVAIL PGDG 3.6.3 3 | AVAIL PGDG 3.6.3 3 | AVAIL PGDG 3.6.3 3 |
| el8.aarch64 | AVAIL PGDG 3.6.3 4 | AVAIL PGDG 3.6.3 4 | AVAIL PGDG 3.6.3 4 | AVAIL PGDG 3.6.3 4 | AVAIL PGDG 3.6.3 4 |
| el9.x86_64 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 |
| el9.aarch64 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 |
| el10.x86_64 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 |
| el10.aarch64 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 |
| d12.x86_64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| d12.aarch64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| d13.x86_64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| d13.aarch64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u22.x86_64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u22.aarch64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u24.x86_64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u24.aarch64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
@ el8.x86_64 18 postgis36_18 postgis36_18-3.6.3-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.3 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/postgis36_18-3.6.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/postgis36_18-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel8.1.x86_64.rpm pgdg 3.6.0 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/postgis36_18-3.6.0-1PGDG.rhel8.1.x86_64.rpm
@ el8.aarch64 18 postgis36_18 postgis36_18-3.6.3-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.3 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgis36_18-3.6.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgis36_18-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 postgis36_18 postgis36_18-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgis36_18-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel8.1.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgis36_18-3.6.0-1PGDG.rhel8.1.aarch64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.3-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel9.1.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/postgis36_18-3.6.0-1PGDG.rhel9.1.x86_64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.3-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel9.1.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/postgis36_18-3.6.0-1PGDG.rhel9.1.aarch64.rpm
@ el10.x86_64 18 postgis36_18 postgis36_18-3.6.3-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.3 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/postgis36_18-3.6.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 postgis36_18 postgis36_18-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/postgis36_18-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/postgis36_18-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 postgis36_18 postgis36_18-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/postgis36_18-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/postgis36_18-3.6.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.aarch64 18 postgis36_18 postgis36_18-3.6.3-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgis36_18-3.6.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 postgis36_18 postgis36_18-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgis36_18-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 postgis36_18 postgis36_18-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgis36_18-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 postgis36_18 postgis36_18-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgis36_18-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 postgis36_18 postgis36_18-3.6.0-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgis36_18-3.6.0-1PGDG.rhel10.1.aarch64.rpm
@ d12.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.3 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.3 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.3 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.3 5.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-postgis-3 postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-18-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 postgis36_17 postgis36_17-3.6.3-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.3 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgis36_17-3.6.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgis36_17-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgis36_17-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 postgis36_17 postgis36_17-3.6.3-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.3 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgis36_17-3.6.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgis36_17-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 postgis36_17 postgis36_17-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgis36_17-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgis36_17-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.3-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/postgis36_17-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.3-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/postgis36_17-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 postgis36_17 postgis36_17-3.6.3-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.3 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/postgis36_17-3.6.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 postgis36_17 postgis36_17-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/postgis36_17-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/postgis36_17-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 postgis36_17 postgis36_17-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/postgis36_17-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/postgis36_17-3.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 postgis36_17 postgis36_17-3.6.3-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgis36_17-3.6.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 postgis36_17 postgis36_17-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgis36_17-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 postgis36_17 postgis36_17-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgis36_17-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 postgis36_17 postgis36_17-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgis36_17-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 postgis36_17 postgis36_17-3.6.0-1PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgis36_17-3.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.3 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.3 3.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.3 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.3 5.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-postgis-3 postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-17-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 postgis36_16 postgis36_16-3.6.3-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.3 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgis36_16-3.6.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgis36_16-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgis36_16-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 postgis36_16 postgis36_16-3.6.3-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.3 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgis36_16-3.6.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgis36_16-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 postgis36_16 postgis36_16-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgis36_16-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgis36_16-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.3-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/postgis36_16-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.3-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/postgis36_16-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 postgis36_16 postgis36_16-3.6.3-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.3 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/postgis36_16-3.6.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 postgis36_16 postgis36_16-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/postgis36_16-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/postgis36_16-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 postgis36_16 postgis36_16-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/postgis36_16-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/postgis36_16-3.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 postgis36_16 postgis36_16-3.6.3-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgis36_16-3.6.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 postgis36_16 postgis36_16-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgis36_16-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 postgis36_16 postgis36_16-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgis36_16-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 postgis36_16 postgis36_16-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgis36_16-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 postgis36_16 postgis36_16-3.6.0-1PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgis36_16-3.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.3 3.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.7MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.3 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.3 5.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-postgis-3 postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-16-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 postgis36_15 postgis36_15-3.6.3-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.3 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgis36_15-3.6.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgis36_15-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgis36_15-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 postgis36_15 postgis36_15-3.6.3-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.3 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgis36_15-3.6.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgis36_15-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 postgis36_15 postgis36_15-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgis36_15-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgis36_15-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.3-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.3 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/postgis36_15-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.3-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/postgis36_15-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 postgis36_15 postgis36_15-3.6.3-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.3 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/postgis36_15-3.6.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 postgis36_15 postgis36_15-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/postgis36_15-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/postgis36_15-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 postgis36_15 postgis36_15-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/postgis36_15-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/postgis36_15-3.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 postgis36_15 postgis36_15-3.6.3-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgis36_15-3.6.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 postgis36_15 postgis36_15-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgis36_15-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 postgis36_15 postgis36_15-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgis36_15-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 postgis36_15 postgis36_15-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgis36_15-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 postgis36_15 postgis36_15-3.6.0-1PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgis36_15-3.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.3 3.2MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.2MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.3 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.3 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.3 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.3 5.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-postgis-3 postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-15-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 postgis36_14 postgis36_14-3.6.3-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.3 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/postgis36_14-3.6.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 5.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/postgis36_14-3.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/postgis36_14-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 postgis36_14 postgis36_14-3.6.3-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.3 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/postgis36_14-3.6.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 5.1MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/postgis36_14-3.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 postgis36_14 postgis36_14-3.6.0-6PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/postgis36_14-3.6.0-6PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 5.0MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/postgis36_14-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.3-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.3 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.3-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.2-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.0-6PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.0-6PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.0-4PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.0-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/postgis36_14-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.3-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.3-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.2-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.0-6PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.0-6PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.0-4PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.0-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/postgis36_14-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 postgis36_14 postgis36_14-3.6.3-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.3 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/postgis36_14-3.6.3-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 postgis36_14 postgis36_14-3.6.2-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.2 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/postgis36_14-3.6.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.6.1 4.3MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/postgis36_14-3.6.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 postgis36_14 postgis36_14-3.6.0-4PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/postgis36_14-3.6.0-4PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel10.x86_64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/postgis36_14-3.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 postgis36_14 postgis36_14-3.6.3-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.3 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/postgis36_14-3.6.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 postgis36_14 postgis36_14-3.6.2-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.2 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/postgis36_14-3.6.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 postgis36_14 postgis36_14-3.6.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.6.1 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/postgis36_14-3.6.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 postgis36_14 postgis36_14-3.6.0-4PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/postgis36_14-3.6.0-4PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 postgis36_14 postgis36_14-3.6.0-1PGDG.rhel10.aarch64.rpm pgdg 3.6.0 4.2MiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/postgis36_14-3.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb pgdg 3.6.2 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.3 3.2MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb pgdg 3.6.2 3.2MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb pgdg 3.6.2 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.3 3.2MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb pgdg 3.6.2 3.2MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.3 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb pgdg 3.6.2 3.6MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.3 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb pgdg 3.6.2 3.5MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.3 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb pgdg 3.6.2 3.3MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.3 5.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.3+dfsg-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-postgis-3 postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb pgdg 3.6.2 5.4MiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgis/postgresql-14-postgis-3_3.6.2+dfsg-1.pgdg24.04+1_arm64.deb
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

## 用法

来源：[Official manual](https://postgis.net/documentation/manual/)，[current manual HTML](https://postgis.net/docs/postgis-en.html)，[release notes](https://postgis.net/docs/release_notes.html)，[patch release announcement](https://postgis.net/2026/04/PostGIS-Patch-Releases/)

`postgis` 为 PostgreSQL 增加空间类型、索引与 SQL 函数。对用户来说，最主要的区分是：`geometry` 用于平面或投影坐标工作，`geography` 用于经纬度数据上的球面计算。

### 基本设置

```sql
CREATE EXTENSION postgis;
SELECT PostGIS_Full_Version();
```

### 核心类型与函数

```sql
CREATE TABLE sensors (
  id bigserial PRIMARY KEY,
  geom geometry(Point, 4326),
  geog geography(Point, 4326)
);

SELECT ST_SetSRID(ST_MakePoint(-73.985, 40.748), 4326);
SELECT ST_Intersects(a.geom, b.geom) FROM a, b;
SELECT ST_DWithin(a.geom, b.geom, 100);
SELECT ST_Distance(a.geog, b.geog);
SELECT ST_Transform(geom, 3857) FROM sensors;
```

- 构造函数：`ST_MakePoint`、`ST_GeomFromText`、`ST_GeomFromGeoJSON`
- 空间关系：`ST_Intersects`、`ST_Contains`、`ST_Within`、`ST_DWithin`
- 度量与坐标变换：`ST_Distance`、`ST_Area`、`ST_Length`、`ST_Transform`
- 几何处理：`ST_Buffer`、`ST_Intersection`、`ST_Union`

### 空间索引

```sql
CREATE INDEX idx_sensors_geom ON sensors USING GIST (geom);
```

官方手册仍将 GiST 作为通用空间索引的首选建议；对于特定数据分布与权衡，也可以考虑 BRIN 与 SP-GiST。

### 注意事项

- 进行平面距离与面积计算时，应在合适的投影 SRID 中使用 `geometry`；需要以米为单位的球面计算时，应使用 `geography`。
- `PostGIS 3.6.3` 是一个发布日期为 `2026-04-14` 的补丁版本。release notes 描述的是修复项与一项安全加固变更，而不是新的 stub 级使用接口，因此这次刷新主要是裁剪并对齐当前手册。
