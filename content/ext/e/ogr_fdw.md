---
title: "ogr_fdw"
linkTitle: "ogr_fdw"
description: "GIS 数据外部数据源包装器"
weight: 1550
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pramsey/pgsql-ogr-fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pramsey/pgsql-ogr-fdw</div>
    <div class="ext-card__desc">https://github.com/pramsey/pgsql-ogr-fdw</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`ogr_fdw`**](/ext/e/ogr_fdw) | `1.1.7` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1550  | [**`ogr_fdw`**](/ext/e/ogr_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`file_fdw`](/ext/e/file_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.7` | {{< pgvers "18,17,16,15,14" >}} | `ogr_fdw` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.7` | {{< pgvers "18,17,16,15,14" >}} | `ogr_fdw_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ogr-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 3 | AVAIL PGDG 1.1.7 4 | AVAIL PGDG 1.1.7 7 | AVAIL PGDG 1.1.7 9 |
| el8.aarch64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 3 | AVAIL PGDG 1.1.7 4 | AVAIL PGDG 1.1.7 5 | AVAIL PGDG 1.1.7 5 |
| el9.x86_64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 4 | AVAIL PGDG 1.1.7 5 | AVAIL PGDG 1.1.7 8 | AVAIL PGDG 1.1.7 9 |
| el9.aarch64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 4 | AVAIL PGDG 1.1.7 4 | AVAIL PGDG 1.1.7 5 | AVAIL PGDG 1.1.7 5 |
| el10.x86_64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 2 | AVAIL PGDG 1.1.7 2 | AVAIL PGDG 1.1.7 2 | AVAIL PGDG 1.1.7 2 |
| el10.aarch64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 |
| d12.x86_64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 |
| d12.aarch64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 |
| d13.x86_64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 |
| d13.aarch64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 |
| u22.x86_64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 |
| u22.aarch64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 |
| u24.x86_64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 |
| u24.aarch64 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 | AVAIL PGDG 1.1.7 1 |
@ el8.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/ogr_fdw_18-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/ogr_fdw_18-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ogr_fdw_18-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ogr_fdw_18-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ogr_fdw_18-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ogr_fdw_18-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb pgdg 1.1.7 90.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb pgdg 1.1.7 88.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb pgdg 1.1.7 90.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb pgdg 1.1.7 89.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb pgdg 1.1.7 92.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb pgdg 1.1.7 89.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb pgdg 1.1.7 89.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb pgdg 1.1.7 87.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ogr_fdw_17-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ogr_fdw_17-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-4PGDG.rhel8.x86_64.rpm pgdg 1.1.5 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ogr_fdw_17-1.1.5-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ogr_fdw_17-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ogr_fdw_17-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-4PGDG.rhel8.aarch64.rpm pgdg 1.1.5 48.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ogr_fdw_17-1.1.5-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-4PGDG.rhel9.x86_64.rpm pgdg 1.1.5 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.5-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-3PGDG.rhel9.x86_64.rpm pgdg 1.1.5 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.5-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 48.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-4PGDG.rhel9.aarch64.rpm pgdg 1.1.5 48.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.5-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-3PGDG.rhel9.aarch64.rpm pgdg 1.1.5 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.5-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ogr_fdw_17-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel10.x86_64.rpm pgdg 1.1.6 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ogr_fdw_17-1.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ogr_fdw_17-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb pgdg 1.1.7 89.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb pgdg 1.1.7 88.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb pgdg 1.1.7 90.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb pgdg 1.1.7 88.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb pgdg 1.1.7 106.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb pgdg 1.1.7 103.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb pgdg 1.1.7 89.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb pgdg 1.1.7 87.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 51.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-4PGDG.rhel8.x86_64.rpm pgdg 1.1.5 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.5-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.4-2PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.4-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-4PGDG.rhel8.aarch64.rpm pgdg 1.1.5 48.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.5-4PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.4-2PGDG.rhel8.aarch64.rpm pgdg 1.1.4 47.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.4-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-4PGDG.rhel9.x86_64.rpm pgdg 1.1.5 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.5-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.1.5 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.4-2PGDG.rhel9.x86_64.rpm pgdg 1.1.4 48.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.4-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 48.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 48.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-4PGDG.rhel9.aarch64.rpm pgdg 1.1.5 48.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.5-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.4-2PGDG.rhel9.aarch64.rpm pgdg 1.1.4 46.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.4-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ogr_fdw_16-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel10.x86_64.rpm pgdg 1.1.6 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ogr_fdw_16-1.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ogr_fdw_16-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb pgdg 1.1.7 90.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb pgdg 1.1.7 88.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb pgdg 1.1.7 90.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb pgdg 1.1.7 88.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb pgdg 1.1.7 105.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb pgdg 1.1.7 103.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb pgdg 1.1.7 89.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb pgdg 1.1.7 87.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-4PGDG.rhel8.x86_64.rpm pgdg 1.1.5 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.5-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-2PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.4-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.3-1.rhel8.x86_64.rpm pgdg 1.1.3 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.2-2.rhel8.x86_64.rpm pgdg 1.1.2 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.2-2.rhel8.x86_64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 49.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-4PGDG.rhel8.aarch64.rpm pgdg 1.1.5 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.5-4PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-2PGDG.rhel8.aarch64.rpm pgdg 1.1.4 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.4-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.1.4 47.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 50.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-4PGDG.rhel9.x86_64.rpm pgdg 1.1.5 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.5-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.1.5 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-2PGDG.rhel9.x86_64.rpm pgdg 1.1.4 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.4-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.1.4 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.3-1.rhel9.x86_64.rpm pgdg 1.1.3 49.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.2-2.rhel9.x86_64.rpm pgdg 1.1.2 49.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.2-2.rhel9.x86_64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-4PGDG.rhel9.aarch64.rpm pgdg 1.1.5 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.5-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-2PGDG.rhel9.aarch64.rpm pgdg 1.1.4 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.4-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.1.4 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ogr_fdw_15-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel10.x86_64.rpm pgdg 1.1.6 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ogr_fdw_15-1.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 51.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ogr_fdw_15-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb pgdg 1.1.7 90.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb pgdg 1.1.7 88.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb pgdg 1.1.7 91.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb pgdg 1.1.7 89.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb pgdg 1.1.7 107.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb pgdg 1.1.7 104.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb pgdg 1.1.7 90.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb pgdg 1.1.7 88.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-4PGDG.rhel8.x86_64.rpm pgdg 1.1.5 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.5-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-2PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.4-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.3-1.rhel8.x86_64.rpm pgdg 1.1.3 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.2-2.rhel8.x86_64.rpm pgdg 1.1.2 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.2-2.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.2-1.rhel8.x86_64.rpm pgdg 1.1.2 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.1-1.rhel8.x86_64.rpm pgdg 1.1.1 48.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.1-1.rhel8.x86_64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 49.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-4PGDG.rhel8.aarch64.rpm pgdg 1.1.5 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.5-4PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-2PGDG.rhel8.aarch64.rpm pgdg 1.1.4 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.4-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.1.4 47.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-4PGDG.rhel9.x86_64.rpm pgdg 1.1.5 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.5-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.1.5 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-2PGDG.rhel9.x86_64.rpm pgdg 1.1.4 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.4-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.1.4 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.3-1.rhel9.x86_64.rpm pgdg 1.1.3 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.2-2.rhel9.x86_64.rpm pgdg 1.1.2 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.2-2.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.2-1.rhel9.x86_64.rpm pgdg 1.1.2 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-4PGDG.rhel9.aarch64.rpm pgdg 1.1.5 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.5-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-2PGDG.rhel9.aarch64.rpm pgdg 1.1.4 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.4-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.1.4 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ogr_fdw_14-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel10.x86_64.rpm pgdg 1.1.6 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ogr_fdw_14-1.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 51.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ogr_fdw_14-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb pgdg 1.1.7 90.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb pgdg 1.1.7 88.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb pgdg 1.1.7 91.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb pgdg 1.1.7 89.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb pgdg 1.1.7 106.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb pgdg 1.1.7 104.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb pgdg 1.1.7 90.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb pgdg 1.1.7 88.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `ogr_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install ogr_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y ogr_fdw -v 18  # PG 18
pig ext install -y ogr_fdw -v 17  # PG 17
pig ext install -y ogr_fdw -v 16  # PG 16
pig ext install -y ogr_fdw -v 15  # PG 15
pig ext install -y ogr_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y ogr_fdw_18       # PG 18
dnf install -y ogr_fdw_17       # PG 17
dnf install -y ogr_fdw_16       # PG 16
dnf install -y ogr_fdw_15       # PG 15
dnf install -y ogr_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-ogr-fdw   # PG 18
apt install -y postgresql-17-ogr-fdw   # PG 17
apt install -y postgresql-16-ogr-fdw   # PG 16
apt install -y postgresql-15-ogr-fdw   # PG 15
apt install -y postgresql-14-ogr-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION ogr_fdw;
```



## 用法

> [ogr_fdw: PostgreSQL 的 OGR 外部数据包装器](https://github.com/pramsey/pgsql-ogr-fdw)

OGR 是 [GDAL](http://www.gdal.org/) 空间数据访问库的**矢量**部分。它允许通过简单的 C API 访问[大量 GIS 数据格式](http://www.gdal.org/ogr_formats.html)。由于 OGR 暴露了简单的表结构，而 PostgreSQL 外部数据包装器允许访问表结构，两者的契合非常完美。

### 快速开始

```sql
CREATE EXTENSION postgis;
CREATE EXTENSION ogr_fdw;
```

使用 `ogr_fdw_info` 工具读取 OGR 数据源并输出服务器/表定义：

```bash
ogr_fdw_info -s /tmp/test -l pt_two
```

```sql
CREATE SERVER "myserver"
  FOREIGN DATA WRAPPER ogr_fdw
  OPTIONS (
    datasource '/tmp/test',
    format 'ESRI Shapefile' );

CREATE FOREIGN TABLE "pt_two" (
  fid integer,
  "geom" geometry(Point, 4326),
  "name" varchar,
  "age" integer,
  "height" real,
  "birthdate" date )
  SERVER "myserver"
  OPTIONS (layer 'pt_two');

SELECT * FROM pt_two;
```

支持过滤下推——包括简单谓词和边界框过滤（`&&`）：

```sql
SET client_min_messages = debug1;

SELECT name, age, height
FROM pt_two
WHERE height < 5.7
AND geom && ST_MakeEnvelope(0, 0, 1, 1);
```

```
DEBUG:  OGR SQL: (height < 5.7)
DEBUG:  OGR spatial filter (0 0, 1 1)
```


## 限制

- 需要 PostgreSQL 11 或更高版本
- 仅有限的非空间查询限制会下推到 OGR（仅 `>`、`<`、`<=`、`>=`、`=`）
- 仅边界框过滤（`&&`）会下推到空间过滤
- OGR 连接每次查询都会创建（无连接池）
- 每次都会检索所有列


## 示例

### WFS（Web 要素服务）

```sql
CREATE SERVER geoserver
  FOREIGN DATA WRAPPER ogr_fdw
  OPTIONS (
    datasource 'WFS:https://demo.geo-solutions.it/geoserver/wfs',
    format 'WFS' );

CREATE FOREIGN TABLE topp_states (
  fid bigint,
  the_geom Geometry(MultiSurface,4326),
  gml_id varchar,
  state_name varchar,
  state_fips varchar,
  state_abbr varchar,
  land_km double precision,
  persons double precision )
  SERVER "geoserver"
  OPTIONS (layer 'topp:states');
```

### 文件地理数据库

```sql
CREATE SERVER fgdbtest
  FOREIGN DATA WRAPPER ogr_fdw
  OPTIONS (
    datasource '/tmp/Querying.gdb',
    format 'OpenFileGDB' );

CREATE FOREIGN TABLE cities (
  fid integer,
  geom geometry(Point, 4326),
  city_name varchar,
  state_name varchar,
  elevation integer,
  pop1990 integer )
  SERVER fgdbtest
  OPTIONS (layer 'Cities');
```


## 高级功能

### 可写表

如果 OGR 驱动支持，你可以插入/更新/删除记录。可写表需要在表定义中包含 `fid` 列。

```sql
ALTER SERVER myserver
  OPTIONS (ADD updateable 'true');
```

### 列名映射

将远程列名映射到本地列名：

```sql
CREATE FOREIGN TABLE typetest_fdw_mapped (
  fid bigint,
  supertime time OPTIONS (column_name 'clock'),
  thebestname varchar OPTIONS (column_name 'name') )
  SERVER wraparound
  OPTIONS (layer 'typetest');
```

### 自动表导入

使用 `IMPORT FOREIGN SCHEMA` 自动创建外部表定义：

```sql
CREATE SCHEMA fgdball;

-- 导入所有表
IMPORT FOREIGN SCHEMA ogr_all
  FROM SERVER fgdbtest
  INTO fgdball;

-- 导入指定表
IMPORT FOREIGN SCHEMA ogr_all
  LIMIT TO(cities)
  FROM SERVER fgdbtest
  INTO fgdball;
```

### GDAL 选项

通过配置和打开选项控制驱动行为：

```sql
CREATE SERVER myserver_latin1
  FOREIGN DATA WRAPPER ogr_fdw
  OPTIONS (
    datasource '/tmp/test',
    format 'ESRI Shapefile',
    config_options 'SHAPE_ENCODING=LATIN1' );
```

多个配置选项可以作为空格分隔的列表传递。
