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
| [**`ogr_fdw`**](/ext/e/ogr_fdw) | `1.1.9` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.9` | {{< pgvers "18,17,16,15,14" >}} | `ogr_fdw` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.9` | {{< pgvers "18,17,16,15,14" >}} | `ogr_fdw_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.9` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ogr-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 6 | AVAIL PGDG 1.1.9 9 | AVAIL PGDG 1.1.9 11 |
| el8.aarch64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 6 | AVAIL PGDG 1.1.9 7 | AVAIL PGDG 1.1.9 7 |
| el9.x86_64 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 8 | AVAIL PGDG 1.1.9 9 | AVAIL PGDG 1.1.9 12 | AVAIL PGDG 1.1.9 13 |
| el9.aarch64 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 8 | AVAIL PGDG 1.1.9 8 | AVAIL PGDG 1.1.9 9 | AVAIL PGDG 1.1.9 9 |
| el10.x86_64 | AVAIL PGDG 1.1.9 5 | AVAIL PGDG 1.1.9 6 | AVAIL PGDG 1.1.9 6 | AVAIL PGDG 1.1.9 6 | AVAIL PGDG 1.1.9 6 |
| el10.aarch64 | AVAIL PGDG 1.1.7 4 | AVAIL PGDG 1.1.7 4 | AVAIL PGDG 1.1.7 4 | AVAIL PGDG 1.1.7 4 | AVAIL PGDG 1.1.7 4 |
| d12.x86_64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
| d12.aarch64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
| d13.x86_64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
| d13.aarch64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
| u22.x86_64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
| u22.aarch64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
| u24.x86_64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
| u24.aarch64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
| u26.x86_64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
| u26.aarch64 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 | AVAIL PGDG 1.1.9 3 |
@ el8.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.9-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.9 52.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/ogr_fdw_18-1.1.9-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel8.10.x86_64.rpm pgdg 1.1.7 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/ogr_fdw_18-1.1.7-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/ogr_fdw_18-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.9-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.9 50.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/ogr_fdw_18-1.1.9-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel8.10.aarch64.rpm pgdg 1.1.7 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/ogr_fdw_18-1.1.7-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/ogr_fdw_18-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.9-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.9 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ogr_fdw_18-1.1.9-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel9.8.x86_64.rpm pgdg 1.1.7 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ogr_fdw_18-1.1.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel9.7.x86_64.rpm pgdg 1.1.7 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ogr_fdw_18-1.1.7-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel9.6.x86_64.rpm pgdg 1.1.7 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ogr_fdw_18-1.1.7-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/ogr_fdw_18-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.9-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.9 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ogr_fdw_18-1.1.9-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel9.8.aarch64.rpm pgdg 1.1.7 48.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ogr_fdw_18-1.1.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel9.7.aarch64.rpm pgdg 1.1.7 48.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ogr_fdw_18-1.1.7-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel9.6.aarch64.rpm pgdg 1.1.7 48.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ogr_fdw_18-1.1.7-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/ogr_fdw_18-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.9-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.9 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ogr_fdw_18-1.1.9-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel10.2.x86_64.rpm pgdg 1.1.7 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ogr_fdw_18-1.1.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel10.1.x86_64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ogr_fdw_18-1.1.7-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel10.0.x86_64.rpm pgdg 1.1.7 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ogr_fdw_18-1.1.7-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/ogr_fdw_18-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel10.2.aarch64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ogr_fdw_18-1.1.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel10.1.aarch64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ogr_fdw_18-1.1.7-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-6PGDG.rhel10.0.aarch64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ogr_fdw_18-1.1.7-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 ogr_fdw_18 ogr_fdw_18-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/ogr_fdw_18-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb pgdg 1.1.9 90.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb pgdg 1.1.8 90.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb pgdg 1.1.7 90.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb pgdg 1.1.9 88.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb pgdg 1.1.8 88.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb pgdg 1.1.7 88.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb pgdg 1.1.9 90.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb pgdg 1.1.8 90.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb pgdg 1.1.7 90.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb pgdg 1.1.9 89.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb pgdg 1.1.8 89.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb pgdg 1.1.7 89.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb pgdg 1.1.9 92.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb pgdg 1.1.8 92.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb pgdg 1.1.7 92.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb pgdg 1.1.9 90.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb pgdg 1.1.8 89.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb pgdg 1.1.7 89.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb pgdg 1.1.9 89.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb pgdg 1.1.8 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb pgdg 1.1.7 89.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb pgdg 1.1.9 87.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb pgdg 1.1.8 87.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb pgdg 1.1.7 87.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb pgdg 1.1.9 88.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb pgdg 1.1.8 88.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb pgdg 1.1.7 88.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb pgdg 1.1.9 87.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb pgdg 1.1.8 87.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-ogr-fdw postgresql-18-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb pgdg 1.1.7 87.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-18-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.9-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.9 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ogr_fdw_17-1.1.9-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel8.10.x86_64.rpm pgdg 1.1.7 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ogr_fdw_17-1.1.7-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ogr_fdw_17-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ogr_fdw_17-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-4PGDG.rhel8.x86_64.rpm pgdg 1.1.5 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/ogr_fdw_17-1.1.5-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.9-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.9 50.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ogr_fdw_17-1.1.9-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel8.10.aarch64.rpm pgdg 1.1.7 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ogr_fdw_17-1.1.7-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ogr_fdw_17-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ogr_fdw_17-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-4PGDG.rhel8.aarch64.rpm pgdg 1.1.5 48.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/ogr_fdw_17-1.1.5-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.9-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.9 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.9-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel9.8.x86_64.rpm pgdg 1.1.7 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel9.7.x86_64.rpm pgdg 1.1.7 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.7-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel9.6.x86_64.rpm pgdg 1.1.7 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.7-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-4PGDG.rhel9.x86_64.rpm pgdg 1.1.5 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.5-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-3PGDG.rhel9.x86_64.rpm pgdg 1.1.5 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/ogr_fdw_17-1.1.5-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.9-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.9 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.9-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel9.8.aarch64.rpm pgdg 1.1.7 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel9.7.aarch64.rpm pgdg 1.1.7 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.7-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel9.6.aarch64.rpm pgdg 1.1.7 48.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.7-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 48.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-4PGDG.rhel9.aarch64.rpm pgdg 1.1.5 48.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.5-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.5-3PGDG.rhel9.aarch64.rpm pgdg 1.1.5 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/ogr_fdw_17-1.1.5-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.9-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.9 50.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ogr_fdw_17-1.1.9-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel10.2.x86_64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ogr_fdw_17-1.1.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel10.1.x86_64.rpm pgdg 1.1.7 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ogr_fdw_17-1.1.7-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel10.0.x86_64.rpm pgdg 1.1.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ogr_fdw_17-1.1.7-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ogr_fdw_17-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 ogr_fdw_17 ogr_fdw_17-1.1.6-1PGDG.rhel10.x86_64.rpm pgdg 1.1.6 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/ogr_fdw_17-1.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel10.2.aarch64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ogr_fdw_17-1.1.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel10.1.aarch64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ogr_fdw_17-1.1.7-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-6PGDG.rhel10.0.aarch64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ogr_fdw_17-1.1.7-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 ogr_fdw_17 ogr_fdw_17-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/ogr_fdw_17-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb pgdg 1.1.9 90.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb pgdg 1.1.8 90.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb pgdg 1.1.7 90.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb pgdg 1.1.9 88.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb pgdg 1.1.8 88.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb pgdg 1.1.7 88.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb pgdg 1.1.9 90.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb pgdg 1.1.8 90.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb pgdg 1.1.7 90.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb pgdg 1.1.9 89.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb pgdg 1.1.8 89.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb pgdg 1.1.7 89.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb pgdg 1.1.9 106.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb pgdg 1.1.8 106.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb pgdg 1.1.7 106.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb pgdg 1.1.9 104.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb pgdg 1.1.8 104.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb pgdg 1.1.7 104.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb pgdg 1.1.9 89.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb pgdg 1.1.8 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb pgdg 1.1.7 89.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb pgdg 1.1.9 88.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb pgdg 1.1.8 88.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb pgdg 1.1.7 88.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb pgdg 1.1.9 88.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb pgdg 1.1.8 88.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb pgdg 1.1.7 88.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb pgdg 1.1.9 87.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb pgdg 1.1.8 87.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-ogr-fdw postgresql-17-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb pgdg 1.1.7 86.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-17-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.9-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.9 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.9-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel8.10.x86_64.rpm pgdg 1.1.7 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.7-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 51.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-4PGDG.rhel8.x86_64.rpm pgdg 1.1.5 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.5-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.4-2PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/ogr_fdw_16-1.1.4-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.9-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.9 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.9-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel8.10.aarch64.rpm pgdg 1.1.7 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.7-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-4PGDG.rhel8.aarch64.rpm pgdg 1.1.5 48.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.5-4PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.4-2PGDG.rhel8.aarch64.rpm pgdg 1.1.4 47.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/ogr_fdw_16-1.1.4-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.9-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.9 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.9-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel9.8.x86_64.rpm pgdg 1.1.7 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel9.7.x86_64.rpm pgdg 1.1.7 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.7-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel9.6.x86_64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.7-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 49.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-4PGDG.rhel9.x86_64.rpm pgdg 1.1.5 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.5-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.1.5 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.4-2PGDG.rhel9.x86_64.rpm pgdg 1.1.4 48.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/ogr_fdw_16-1.1.4-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.9-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.9 48.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.9-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel9.8.aarch64.rpm pgdg 1.1.7 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel9.7.aarch64.rpm pgdg 1.1.7 48.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.7-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel9.6.aarch64.rpm pgdg 1.1.7 48.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.7-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 48.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 48.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.5-4PGDG.rhel9.aarch64.rpm pgdg 1.1.5 48.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.5-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.4-2PGDG.rhel9.aarch64.rpm pgdg 1.1.4 46.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/ogr_fdw_16-1.1.4-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.9-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.9 50.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ogr_fdw_16-1.1.9-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel10.2.x86_64.rpm pgdg 1.1.7 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ogr_fdw_16-1.1.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel10.1.x86_64.rpm pgdg 1.1.7 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ogr_fdw_16-1.1.7-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel10.0.x86_64.rpm pgdg 1.1.7 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ogr_fdw_16-1.1.7-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ogr_fdw_16-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 ogr_fdw_16 ogr_fdw_16-1.1.6-1PGDG.rhel10.x86_64.rpm pgdg 1.1.6 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/ogr_fdw_16-1.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel10.2.aarch64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ogr_fdw_16-1.1.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel10.1.aarch64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ogr_fdw_16-1.1.7-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-6PGDG.rhel10.0.aarch64.rpm pgdg 1.1.7 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ogr_fdw_16-1.1.7-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 ogr_fdw_16 ogr_fdw_16-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 49.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/ogr_fdw_16-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb pgdg 1.1.9 90.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb pgdg 1.1.8 90.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb pgdg 1.1.7 90.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb pgdg 1.1.9 88.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb pgdg 1.1.8 88.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb pgdg 1.1.7 88.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb pgdg 1.1.9 90.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb pgdg 1.1.8 90.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb pgdg 1.1.7 90.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb pgdg 1.1.9 89.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb pgdg 1.1.8 88.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb pgdg 1.1.7 89.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb pgdg 1.1.9 106.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb pgdg 1.1.8 106.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb pgdg 1.1.7 106.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb pgdg 1.1.9 103.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb pgdg 1.1.8 103.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb pgdg 1.1.7 103.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb pgdg 1.1.9 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb pgdg 1.1.8 89.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb pgdg 1.1.7 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb pgdg 1.1.9 87.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb pgdg 1.1.8 87.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb pgdg 1.1.7 87.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb pgdg 1.1.9 88.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb pgdg 1.1.8 88.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb pgdg 1.1.7 88.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb pgdg 1.1.9 87.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb pgdg 1.1.8 86.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-ogr-fdw postgresql-16-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb pgdg 1.1.7 87.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-16-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.9-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.9 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.9-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel8.10.x86_64.rpm pgdg 1.1.7 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.7-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-4PGDG.rhel8.x86_64.rpm pgdg 1.1.5 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.5-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-2PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.4-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.3-1.rhel8.x86_64.rpm pgdg 1.1.3 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.2-2.rhel8.x86_64.rpm pgdg 1.1.2 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/ogr_fdw_15-1.1.2-2.rhel8.x86_64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.9-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.9 50.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.9-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel8.10.aarch64.rpm pgdg 1.1.7 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.7-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 49.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-4PGDG.rhel8.aarch64.rpm pgdg 1.1.5 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.5-4PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-2PGDG.rhel8.aarch64.rpm pgdg 1.1.4 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.4-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.1.4 47.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/ogr_fdw_15-1.1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.9-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.9 51.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.9-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel9.8.x86_64.rpm pgdg 1.1.7 50.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel9.7.x86_64.rpm pgdg 1.1.7 50.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.7-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel9.6.x86_64.rpm pgdg 1.1.7 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.7-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 50.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-4PGDG.rhel9.x86_64.rpm pgdg 1.1.5 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.5-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.1.5 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-2PGDG.rhel9.x86_64.rpm pgdg 1.1.4 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.4-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.1.4 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.3-1.rhel9.x86_64.rpm pgdg 1.1.3 49.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.2-2.rhel9.x86_64.rpm pgdg 1.1.2 49.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/ogr_fdw_15-1.1.2-2.rhel9.x86_64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.9-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.9 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.9-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel9.8.aarch64.rpm pgdg 1.1.7 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel9.7.aarch64.rpm pgdg 1.1.7 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.7-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel9.6.aarch64.rpm pgdg 1.1.7 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.7-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.5-4PGDG.rhel9.aarch64.rpm pgdg 1.1.5 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.5-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-2PGDG.rhel9.aarch64.rpm pgdg 1.1.4 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.4-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.1.4 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/ogr_fdw_15-1.1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.9-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.9 51.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ogr_fdw_15-1.1.9-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel10.2.x86_64.rpm pgdg 1.1.7 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ogr_fdw_15-1.1.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel10.1.x86_64.rpm pgdg 1.1.7 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ogr_fdw_15-1.1.7-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel10.0.x86_64.rpm pgdg 1.1.7 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ogr_fdw_15-1.1.7-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ogr_fdw_15-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 ogr_fdw_15 ogr_fdw_15-1.1.6-1PGDG.rhel10.x86_64.rpm pgdg 1.1.6 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/ogr_fdw_15-1.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel10.2.aarch64.rpm pgdg 1.1.7 50.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ogr_fdw_15-1.1.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel10.1.aarch64.rpm pgdg 1.1.7 50.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ogr_fdw_15-1.1.7-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-6PGDG.rhel10.0.aarch64.rpm pgdg 1.1.7 50.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ogr_fdw_15-1.1.7-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 ogr_fdw_15 ogr_fdw_15-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 51.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/ogr_fdw_15-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb pgdg 1.1.9 90.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb pgdg 1.1.8 91.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb pgdg 1.1.7 91.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb pgdg 1.1.9 89.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb pgdg 1.1.8 89.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb pgdg 1.1.7 88.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb pgdg 1.1.9 91.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb pgdg 1.1.8 91.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb pgdg 1.1.7 91.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb pgdg 1.1.9 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb pgdg 1.1.8 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb pgdg 1.1.7 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb pgdg 1.1.9 107.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb pgdg 1.1.8 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb pgdg 1.1.7 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb pgdg 1.1.9 104.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb pgdg 1.1.8 104.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb pgdg 1.1.7 104.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb pgdg 1.1.9 90.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb pgdg 1.1.8 90.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb pgdg 1.1.7 90.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb pgdg 1.1.9 88.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb pgdg 1.1.8 88.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb pgdg 1.1.7 88.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb pgdg 1.1.9 89.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb pgdg 1.1.8 89.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb pgdg 1.1.7 89.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb pgdg 1.1.9 88.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb pgdg 1.1.8 88.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-ogr-fdw postgresql-15-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb pgdg 1.1.7 88.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-15-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.9-1PGDG.rhel8.10.x86_64.rpm pgdg 1.1.9 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.9-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel8.10.x86_64.rpm pgdg 1.1.7 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.7-6PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.1.7 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.1.6 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-4PGDG.rhel8.x86_64.rpm pgdg 1.1.5 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.5-4PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-2PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.4-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-1PGDG.rhel8.x86_64.rpm pgdg 1.1.4 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.3-1.rhel8.x86_64.rpm pgdg 1.1.3 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.2-2.rhel8.x86_64.rpm pgdg 1.1.2 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.2-2.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.2-1.rhel8.x86_64.rpm pgdg 1.1.2 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.1-1.rhel8.x86_64.rpm pgdg 1.1.1 48.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/ogr_fdw_14-1.1.1-1.rhel8.x86_64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.9-1PGDG.rhel8.10.aarch64.rpm pgdg 1.1.9 50.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.9-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel8.10.aarch64.rpm pgdg 1.1.7 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.7-6PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.1.6 49.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-4PGDG.rhel8.aarch64.rpm pgdg 1.1.5 49.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.5-4PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-2PGDG.rhel8.aarch64.rpm pgdg 1.1.4 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.4-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-1PGDG.rhel8.aarch64.rpm pgdg 1.1.4 47.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/ogr_fdw_14-1.1.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.9-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.9 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.9-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel9.8.x86_64.rpm pgdg 1.1.7 51.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.7-6PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel9.7.x86_64.rpm pgdg 1.1.7 51.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.7-6PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel9.6.x86_64.rpm pgdg 1.1.7 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.7-6PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.1.7 51.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.1.6 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-4PGDG.rhel9.x86_64.rpm pgdg 1.1.5 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.5-4PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.1.5 50.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-2PGDG.rhel9.x86_64.rpm pgdg 1.1.4 49.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.4-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-1PGDG.rhel9.x86_64.rpm pgdg 1.1.4 49.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.3-1.rhel9.x86_64.rpm pgdg 1.1.3 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.2-2.rhel9.x86_64.rpm pgdg 1.1.2 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.2-2.rhel9.x86_64.rpm
@ el9.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.2-1.rhel9.x86_64.rpm pgdg 1.1.2 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/ogr_fdw_14-1.1.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.9-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.9 49.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.9-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel9.8.aarch64.rpm pgdg 1.1.7 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.7-6PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel9.7.aarch64.rpm pgdg 1.1.7 50.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.7-6PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel9.6.aarch64.rpm pgdg 1.1.7 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.7-6PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.1.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.1.6 50.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.5-4PGDG.rhel9.aarch64.rpm pgdg 1.1.5 49.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.5-4PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-2PGDG.rhel9.aarch64.rpm pgdg 1.1.4 48.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.4-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.4-1PGDG.rhel9.aarch64.rpm pgdg 1.1.4 48.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/ogr_fdw_14-1.1.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.9-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.9 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ogr_fdw_14-1.1.9-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel10.2.x86_64.rpm pgdg 1.1.7 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ogr_fdw_14-1.1.7-6PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel10.1.x86_64.rpm pgdg 1.1.7 51.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ogr_fdw_14-1.1.7-6PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel10.0.x86_64.rpm pgdg 1.1.7 52.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ogr_fdw_14-1.1.7-6PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.1.7 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ogr_fdw_14-1.1.7-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 ogr_fdw_14 ogr_fdw_14-1.1.6-1PGDG.rhel10.x86_64.rpm pgdg 1.1.6 52.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/ogr_fdw_14-1.1.6-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel10.2.aarch64.rpm pgdg 1.1.7 50.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ogr_fdw_14-1.1.7-6PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel10.1.aarch64.rpm pgdg 1.1.7 50.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ogr_fdw_14-1.1.7-6PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-6PGDG.rhel10.0.aarch64.rpm pgdg 1.1.7 50.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ogr_fdw_14-1.1.7-6PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 ogr_fdw_14 ogr_fdw_14-1.1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.1.7 51.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/ogr_fdw_14-1.1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb pgdg 1.1.9 90.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb pgdg 1.1.8 91.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb pgdg 1.1.7 90.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb pgdg 1.1.9 88.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb pgdg 1.1.8 89.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb pgdg 1.1.7 88.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb pgdg 1.1.9 91.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb pgdg 1.1.8 91.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb pgdg 1.1.7 91.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb pgdg 1.1.9 89.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb pgdg 1.1.8 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb pgdg 1.1.7 89.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb pgdg 1.1.9 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb pgdg 1.1.8 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb pgdg 1.1.7 107.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb pgdg 1.1.9 105.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb pgdg 1.1.8 104.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb pgdg 1.1.7 104.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb pgdg 1.1.9 90.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb pgdg 1.1.8 90.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb pgdg 1.1.7 90.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb pgdg 1.1.9 88.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb pgdg 1.1.8 88.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb pgdg 1.1.7 88.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb pgdg 1.1.9 89.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb pgdg 1.1.8 89.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb pgdg 1.1.7 89.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb pgdg 1.1.9 88.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.9-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb pgdg 1.1.8 88.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.8-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-ogr-fdw postgresql-14-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb pgdg 1.1.7 88.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgsql-ogr-fdw/postgresql-14-ogr-fdw_1.1.7-3.pgdg26.04+1_arm64.deb
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

来源：

- [ogr_fdw v1.1.9 README](https://github.com/pramsey/pgsql-ogr-fdw/blob/v1.1.9/README.md)
- [扩展控制文件](https://github.com/pramsey/pgsql-ogr-fdw/blob/v1.1.9/ogr_fdw.control)
- [v1.1.8 到 v1.1.9 的变更对比](https://github.com/pramsey/pgsql-ogr-fdw/compare/v1.1.8...v1.1.9)
- [GDAL 矢量驱动](https://gdal.org/en/stable/drivers/vector/index.html)

`ogr_fdw` 将 GDAL/OGR 支持的矢量数据公开为 PostgreSQL 外部表。它可以通过 OGR 驱动读取文件和远程数据源；当所选驱动及数据源支持更新时，也可以写入。应先安装 PostGIS，再安装 `ogr_fdw`，以获得原生 geometry 列；否则 geometry 会以 WKB `bytea` 形式公开。

### 发现并导入图层

使用随扩展安装的辅助工具检查数据源并生成匹配的 SQL：

```console
ogr_fdw_info -s /srv/gis/cities.gpkg
ogr_fdw_info -s /srv/gis/cities.gpkg -l cities
```

等价的最小定义如下：

```sql
CREATE EXTENSION postgis;
CREATE EXTENSION ogr_fdw;

CREATE SERVER city_source
  FOREIGN DATA WRAPPER ogr_fdw
  OPTIONS (
    datasource '/srv/gis/cities.gpkg',
    format 'GPKG'
  );

CREATE FOREIGN TABLE city (
  fid bigint,
  geom geometry,
  name text
) SERVER city_source
  OPTIONS (layer 'cities');

SELECT fid, name FROM city WHERE geom && ST_MakeEnvelope(-10, 35, 30, 60, 4326);
```

对于文件型数据源，PostgreSQL 服务器账号需要相应的文件系统权限；对于远程驱动，还需要网络和凭据访问权限。

### 导入与映射

```sql
CREATE SCHEMA gis_import;

IMPORT FOREIGN SCHEMA ogr_all
  LIMIT TO (cities)
  FROM SERVER city_source
  INTO gis_import;
```

`ogr_all` 表示全部 OGR 图层。导入通常会规范化表名和列名；需要保留远端原名时，使用 `launder_table_names` 与 `launder_column_names` 选项。外部列可以通过 `OPTIONS (column_name 'RemoteName')` 映射到不同的源字段名。

### 重要选项与对象

- 服务器选项：必需的 `datasource`，以及可选的 `format`、`updateable`、`config_options`、`open_options` 和 `character_encoding`。
- 表选项：`layer` 指定 OGR 图层，`updateable` 可用于禁用写入。
- `fid` 标识要素；可写外部表必须提供该字段。
- `ogr_fdw_info` 列出驱动与图层，并输出服务器/外部表定义。
- `ogr_fdw_version()` 返回扩展与 GDAL 版本。
- `ogr_fdw_drivers()` 列出编译进来的 OGR 驱动。

### 性能与写入边界

简单比较和边界框 `&&` 谓词可以下推，但复杂过滤条件可能在本地执行。该 FDW 会取回所有选中的源字段，并为每条查询打开两个 OGR 连接，而不会进行连接池化。请使用 `EXPLAIN`，只投影所需字段，并针对实际驱动和数据源做基准测试。

写入能力取决于驱动，并要求数据源级写权限以及 `fid`。必须保持只读的数据源应设置 `updateable = false`。1.1.9 相比 1.1.8 简化了版本字符串，没有记录 SQL 工作流变化；控制文件中的 SQL 扩展版本仍为 1.1。
