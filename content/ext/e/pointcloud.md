---
title: "pointcloud"
linkTitle: "pointcloud"
description: "提供激光雷达点云数据类型支持"
weight: 1520
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgpointcloud/pointcloud">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgpointcloud/pointcloud</div>
    <div class="ext-card__desc">https://github.com/pgpointcloud/pointcloud</div>
  </a>
  <a class="ext-card ext-card--source" href="pointcloud-1.2.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pointcloud-1.2.5.tar.gz</div>
    <div class="ext-card__desc">pointcloud-1.2.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pointcloud`**](/ext/e/pointcloud) | `1.2.5` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1520  | [**`pointcloud`**](/ext/e/pointcloud) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 1521  | [**`pointcloud_postgis`**](/ext/e/pointcloud_postgis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) [`address_standardizer_data_us`](/ext/e/address_standardizer_data_us) [`pgrouting`](/ext/e/pgrouting) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pointcloud_postgis`](/ext/e/pointcloud_postgis) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `pointcloud` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `pointcloud_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pointcloud` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el8.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el9.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el9.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el10.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el10.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| d12.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| d12.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| d13.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| d13.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| u22.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| u22.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| u24.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| u24.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
@ el8.x86_64 18 pointcloud_18 pointcloud_18-1.2.5-3PGDG.rhel8.x86_64.rpm pgdg 1.2.5 67.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pointcloud_18-1.2.5-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pointcloud_18 pointcloud_18-1.2.5-3PGDG.rhel8.aarch64.rpm pgdg 1.2.5 65.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pointcloud_18-1.2.5-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pointcloud_18 pointcloud_18-1.2.5-3PGDG.rhel9.x86_64.rpm pgdg 1.2.5 69.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pointcloud_18-1.2.5-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pointcloud_18 pointcloud_18-1.2.5-3PGDG.rhel9.aarch64.rpm pgdg 1.2.5 68.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pointcloud_18-1.2.5-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pointcloud_18 pointcloud_18-1.2.5-3PGDG.rhel10.x86_64.rpm pgdg 1.2.5 70.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pointcloud_18-1.2.5-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pointcloud_18 pointcloud_18-1.2.5-3PGDG.rhel10.aarch64.rpm pgdg 1.2.5 69.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pointcloud_18-1.2.5-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pointcloud postgresql-18-pointcloud_1.2.5-3.pgdg12+1_amd64.deb pgdg 1.2.5 97.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-18-pointcloud_1.2.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pointcloud postgresql-18-pointcloud_1.2.5-3.pgdg12+1_arm64.deb pgdg 1.2.5 94.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-18-pointcloud_1.2.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pointcloud postgresql-18-pointcloud_1.2.5-3.pgdg13+1_amd64.deb pgdg 1.2.5 98.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-18-pointcloud_1.2.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pointcloud postgresql-18-pointcloud_1.2.5-3.pgdg13+1_arm64.deb pgdg 1.2.5 95.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-18-pointcloud_1.2.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pointcloud postgresql-18-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb pgdg 1.2.5 97.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-18-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pointcloud postgresql-18-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb pgdg 1.2.5 94.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-18-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pointcloud postgresql-18-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb pgdg 1.2.5 96.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-18-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pointcloud postgresql-18-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb pgdg 1.2.5 94.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-18-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pointcloud_17 pointcloud_17-1.2.5-2PGDG.rhel8.x86_64.rpm pgdg 1.2.5 67.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pointcloud_17-1.2.5-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pointcloud_17 pointcloud_17-1.2.5-2PGDG.rhel8.aarch64.rpm pgdg 1.2.5 65.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pointcloud_17-1.2.5-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pointcloud_17 pointcloud_17-1.2.5-2PGDG.rhel9.x86_64.rpm pgdg 1.2.5 69.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pointcloud_17-1.2.5-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pointcloud_17 pointcloud_17-1.2.5-2PGDG.rhel9.aarch64.rpm pgdg 1.2.5 68.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pointcloud_17-1.2.5-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pointcloud_17 pointcloud_17-1.2.5-3PGDG.rhel10.x86_64.rpm pgdg 1.2.5 70.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pointcloud_17-1.2.5-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pointcloud_17 pointcloud_17-1.2.5-3PGDG.rhel10.aarch64.rpm pgdg 1.2.5 69.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pointcloud_17-1.2.5-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pointcloud postgresql-17-pointcloud_1.2.5-3.pgdg12+1_amd64.deb pgdg 1.2.5 97.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-17-pointcloud_1.2.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pointcloud postgresql-17-pointcloud_1.2.5-3.pgdg12+1_arm64.deb pgdg 1.2.5 94.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-17-pointcloud_1.2.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pointcloud postgresql-17-pointcloud_1.2.5-3.pgdg13+1_amd64.deb pgdg 1.2.5 98.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-17-pointcloud_1.2.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pointcloud postgresql-17-pointcloud_1.2.5-3.pgdg13+1_arm64.deb pgdg 1.2.5 95.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-17-pointcloud_1.2.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pointcloud postgresql-17-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb pgdg 1.2.5 107.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-17-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pointcloud postgresql-17-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb pgdg 1.2.5 104.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-17-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pointcloud postgresql-17-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb pgdg 1.2.5 96.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-17-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pointcloud postgresql-17-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb pgdg 1.2.5 94.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-17-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pointcloud_16 pointcloud_16-1.2.5-1PGDG.rhel8.x86_64.rpm pgdg 1.2.5 67.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pointcloud_16-1.2.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pointcloud_16 pointcloud_16-1.2.5-1PGDG.rhel8.aarch64.rpm pgdg 1.2.5 65.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pointcloud_16-1.2.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pointcloud_16 pointcloud_16-1.2.5-1PGDG.rhel9.x86_64.rpm pgdg 1.2.5 69.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pointcloud_16-1.2.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pointcloud_16 pointcloud_16-1.2.5-1PGDG.rhel9.aarch64.rpm pgdg 1.2.5 67.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pointcloud_16-1.2.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pointcloud_16 pointcloud_16-1.2.5-3PGDG.rhel10.x86_64.rpm pgdg 1.2.5 70.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pointcloud_16-1.2.5-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pointcloud_16 pointcloud_16-1.2.5-3PGDG.rhel10.aarch64.rpm pgdg 1.2.5 69.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pointcloud_16-1.2.5-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pointcloud postgresql-16-pointcloud_1.2.5-3.pgdg12+1_amd64.deb pgdg 1.2.5 97.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-16-pointcloud_1.2.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pointcloud postgresql-16-pointcloud_1.2.5-3.pgdg12+1_arm64.deb pgdg 1.2.5 94.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-16-pointcloud_1.2.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pointcloud postgresql-16-pointcloud_1.2.5-3.pgdg13+1_amd64.deb pgdg 1.2.5 98.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-16-pointcloud_1.2.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pointcloud postgresql-16-pointcloud_1.2.5-3.pgdg13+1_arm64.deb pgdg 1.2.5 95.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-16-pointcloud_1.2.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pointcloud postgresql-16-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb pgdg 1.2.5 107.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-16-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pointcloud postgresql-16-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb pgdg 1.2.5 104.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-16-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pointcloud postgresql-16-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb pgdg 1.2.5 96.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-16-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pointcloud postgresql-16-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb pgdg 1.2.5 94.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-16-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pointcloud_15 pointcloud_15-1.2.5-1PGDG.rhel8.x86_64.rpm pgdg 1.2.5 67.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pointcloud_15-1.2.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pointcloud_15 pointcloud_15-1.2.5-1PGDG.rhel8.aarch64.rpm pgdg 1.2.5 65.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pointcloud_15-1.2.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pointcloud_15 pointcloud_15-1.2.5-1PGDG.rhel9.x86_64.rpm pgdg 1.2.5 69.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pointcloud_15-1.2.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pointcloud_15 pointcloud_15-1.2.5-1PGDG.rhel9.aarch64.rpm pgdg 1.2.5 68.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pointcloud_15-1.2.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pointcloud_15 pointcloud_15-1.2.5-3PGDG.rhel10.x86_64.rpm pgdg 1.2.5 70.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pointcloud_15-1.2.5-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pointcloud_15 pointcloud_15-1.2.5-3PGDG.rhel10.aarch64.rpm pgdg 1.2.5 70.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pointcloud_15-1.2.5-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pointcloud postgresql-15-pointcloud_1.2.5-3.pgdg12+1_amd64.deb pgdg 1.2.5 98.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-15-pointcloud_1.2.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pointcloud postgresql-15-pointcloud_1.2.5-3.pgdg12+1_arm64.deb pgdg 1.2.5 94.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-15-pointcloud_1.2.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pointcloud postgresql-15-pointcloud_1.2.5-3.pgdg13+1_amd64.deb pgdg 1.2.5 98.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-15-pointcloud_1.2.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pointcloud postgresql-15-pointcloud_1.2.5-3.pgdg13+1_arm64.deb pgdg 1.2.5 95.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-15-pointcloud_1.2.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pointcloud postgresql-15-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb pgdg 1.2.5 107.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-15-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pointcloud postgresql-15-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb pgdg 1.2.5 104.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-15-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pointcloud postgresql-15-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb pgdg 1.2.5 96.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-15-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pointcloud postgresql-15-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb pgdg 1.2.5 94.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-15-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pointcloud_14 pointcloud_14-1.2.5-1PGDG.rhel8.x86_64.rpm pgdg 1.2.5 67.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pointcloud_14-1.2.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pointcloud_14 pointcloud_14-1.2.5-1PGDG.rhel8.aarch64.rpm pgdg 1.2.5 65.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pointcloud_14-1.2.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pointcloud_14 pointcloud_14-1.2.5-1PGDG.rhel9.x86_64.rpm pgdg 1.2.5 69.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pointcloud_14-1.2.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pointcloud_14 pointcloud_14-1.2.5-1PGDG.rhel9.aarch64.rpm pgdg 1.2.5 68.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pointcloud_14-1.2.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pointcloud_14 pointcloud_14-1.2.5-3PGDG.rhel10.x86_64.rpm pgdg 1.2.5 70.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pointcloud_14-1.2.5-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pointcloud_14 pointcloud_14-1.2.5-3PGDG.rhel10.aarch64.rpm pgdg 1.2.5 70.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pointcloud_14-1.2.5-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pointcloud postgresql-14-pointcloud_1.2.5-3.pgdg12+1_amd64.deb pgdg 1.2.5 98.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-14-pointcloud_1.2.5-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pointcloud postgresql-14-pointcloud_1.2.5-3.pgdg12+1_arm64.deb pgdg 1.2.5 94.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-14-pointcloud_1.2.5-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pointcloud postgresql-14-pointcloud_1.2.5-3.pgdg13+1_amd64.deb pgdg 1.2.5 98.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-14-pointcloud_1.2.5-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pointcloud postgresql-14-pointcloud_1.2.5-3.pgdg13+1_arm64.deb pgdg 1.2.5 95.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-14-pointcloud_1.2.5-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pointcloud postgresql-14-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb pgdg 1.2.5 107.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-14-pointcloud_1.2.5-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pointcloud postgresql-14-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb pgdg 1.2.5 104.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-14-pointcloud_1.2.5-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pointcloud postgresql-14-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb pgdg 1.2.5 96.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-14-pointcloud_1.2.5-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pointcloud postgresql-14-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb pgdg 1.2.5 94.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgpointcloud/postgresql-14-pointcloud_1.2.5-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pointcloud` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pointcloud;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pointcloud -v 18  # PG 18
pig ext install -y pointcloud -v 17  # PG 17
pig ext install -y pointcloud -v 16  # PG 16
pig ext install -y pointcloud -v 15  # PG 15
pig ext install -y pointcloud -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pointcloud_18       # PG 18
dnf install -y pointcloud_17       # PG 17
dnf install -y pointcloud_16       # PG 16
dnf install -y pointcloud_15       # PG 15
dnf install -y pointcloud_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pointcloud   # PG 18
apt install -y postgresql-17-pointcloud   # PG 17
apt install -y postgresql-16-pointcloud   # PG 16
apt install -y postgresql-15-pointcloud   # PG 15
apt install -y postgresql-14-pointcloud   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pointcloud;
```
