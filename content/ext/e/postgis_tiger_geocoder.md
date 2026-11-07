---
title: "postgis_tiger_geocoder"
linkTitle: "postgis_tiger_geocoder"
description: "PostGIS tiger 地理编码器和反向地理编码器"
weight: 1504
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://gitea.osgeo.org/postgis/postgis_tiger_geocoder">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://gitea.osgeo.org/postgis/postgis_tiger_geocoder</div>
    <div class="ext-card__desc">https://gitea.osgeo.org/postgis/postgis_tiger_geocoder</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/postgis_tiger_geocoder-2025.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">postgis_tiger_geocoder-2025.2.tar.gz</div>
    <div class="ext-card__desc">postgis_tiger_geocoder-2025.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`postgis_tiger_geocoder`**](/ext/e/postgis_tiger_geocoder) | `2025.2` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang plpgsql" href="/ext/language#plpgsql">PLpgSQL</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1504  | [**`postgis_tiger_geocoder`**](/ext/e/postgis_tiger_geocoder) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `tiger` |
{.ext-table .wide .expand}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`nominatim_fdw`](/ext/e/nominatim_fdw) [`geoip`](/ext/e/geoip) [`tzf`](/ext/e/tzf) [`pg_geohash`](/ext/e/pg_geohash) [`ogr_fdw`](/ext/e/ogr_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Pigsty fills EL8 gaps.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2025.2` | {{< pgvers "18,17,16" >}} | `postgis_tiger_geocoder` | `postgis`, `fuzzystrmatch` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2025.2` | {{< pgvers "18,17,16" >}} | `postgis_tiger_geocoder_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2025.2` | {{< pgvers "18,17,16" >}} | `postgresql-$v-postgis-tiger-geocoder` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2025.2 1 | AVAIL PIGSTY 2025.2 1 | AVAIL PIGSTY 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| el8.aarch64 | AVAIL PIGSTY 2025.2 1 | AVAIL PIGSTY 2025.2 1 | AVAIL PIGSTY 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| el9.aarch64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| el10.aarch64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| d12.x86_64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| d12.aarch64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| d13.x86_64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| d13.aarch64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u22.x86_64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u22.aarch64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u24.x86_64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u24.aarch64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u26.x86_64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
| u26.aarch64 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | AVAIL PGDG 2025.2 1 | N/A PGDG - 0 | N/A PGDG - 0 |
@ el8.x86_64 18 postgis_tiger_geocoder_18 postgis_tiger_geocoder_18-2025.2-1PGSTY.el8.noarch.rpm pigsty 2025.2 123.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgis_tiger_geocoder_18-2025.2-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 postgis_tiger_geocoder_18 postgis_tiger_geocoder_18-2025.2-1PGSTY.el8.noarch.rpm pigsty 2025.2 123.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgis_tiger_geocoder_18-2025.2-1PGSTY.el8.noarch.rpm
@ el9.x86_64 18 postgis_tiger_geocoder_18 postgis_tiger_geocoder_18-2025.2-1PGDG.rhel9.8.noarch.rpm pgdg 2025.2 104.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/postgis_tiger_geocoder_18-2025.2-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 18 postgis_tiger_geocoder_18 postgis_tiger_geocoder_18-2025.2-1PGDG.rhel9.8.noarch.rpm pgdg 2025.2 104.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/postgis_tiger_geocoder_18-2025.2-1PGDG.rhel9.8.noarch.rpm
@ el10.x86_64 18 postgis_tiger_geocoder_18 postgis_tiger_geocoder_18-2025.2-1PGDG.rhel10.2.noarch.rpm pgdg 2025.2 104.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/postgis_tiger_geocoder_18-2025.2-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 postgis_tiger_geocoder_18 postgis_tiger_geocoder_18-2025.2-1PGDG.rhel10.2.noarch.rpm pgdg 2025.2 104.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgis_tiger_geocoder_18-2025.2-1PGDG.rhel10.2.noarch.rpm
@ d12.x86_64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb
@ d13.x86_64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb pgdg 2025.2 95.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb pgdg 2025.2 95.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb
@ u22.x86_64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb pgdg 2025.2 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb
@ u22.aarch64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb pgdg 2025.2 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb
@ u24.x86_64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb pgdg 2025.2 95.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb pgdg 2025.2 95.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb
@ u26.x86_64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb pgdg 2025.2 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb
@ u26.aarch64 18 postgresql-18-postgis-tiger-geocoder postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb pgdg 2025.2 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-18-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb
@ el8.x86_64 17 postgis_tiger_geocoder_17 postgis_tiger_geocoder_17-2025.2-1PGSTY.el8.noarch.rpm pigsty 2025.2 123.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgis_tiger_geocoder_17-2025.2-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 postgis_tiger_geocoder_17 postgis_tiger_geocoder_17-2025.2-1PGSTY.el8.noarch.rpm pigsty 2025.2 123.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgis_tiger_geocoder_17-2025.2-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 postgis_tiger_geocoder_17 postgis_tiger_geocoder_17-2025.2-1PGDG.rhel9.8.noarch.rpm pgdg 2025.2 104.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/postgis_tiger_geocoder_17-2025.2-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 17 postgis_tiger_geocoder_17 postgis_tiger_geocoder_17-2025.2-1PGDG.rhel9.8.noarch.rpm pgdg 2025.2 104.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/postgis_tiger_geocoder_17-2025.2-1PGDG.rhel9.8.noarch.rpm
@ el10.x86_64 17 postgis_tiger_geocoder_17 postgis_tiger_geocoder_17-2025.2-1PGDG.rhel10.2.noarch.rpm pgdg 2025.2 104.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/postgis_tiger_geocoder_17-2025.2-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 postgis_tiger_geocoder_17 postgis_tiger_geocoder_17-2025.2-1PGDG.rhel10.2.noarch.rpm pgdg 2025.2 104.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgis_tiger_geocoder_17-2025.2-1PGDG.rhel10.2.noarch.rpm
@ d12.x86_64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb
@ d13.x86_64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb
@ u22.x86_64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb pgdg 2025.2 95.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb
@ u22.aarch64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb pgdg 2025.2 95.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb
@ u24.x86_64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb
@ u26.x86_64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb
@ u26.aarch64 17 postgresql-17-postgis-tiger-geocoder postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-17-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb
@ el8.x86_64 16 postgis_tiger_geocoder_16 postgis_tiger_geocoder_16-2025.2-1PGSTY.el8.noarch.rpm pigsty 2025.2 123.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/postgis_tiger_geocoder_16-2025.2-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 postgis_tiger_geocoder_16 postgis_tiger_geocoder_16-2025.2-1PGSTY.el8.noarch.rpm pigsty 2025.2 123.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/postgis_tiger_geocoder_16-2025.2-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 postgis_tiger_geocoder_16 postgis_tiger_geocoder_16-2025.2-1PGDG.rhel9.8.noarch.rpm pgdg 2025.2 104.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/postgis_tiger_geocoder_16-2025.2-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 16 postgis_tiger_geocoder_16 postgis_tiger_geocoder_16-2025.2-1PGDG.rhel9.8.noarch.rpm pgdg 2025.2 104.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/postgis_tiger_geocoder_16-2025.2-1PGDG.rhel9.8.noarch.rpm
@ el10.x86_64 16 postgis_tiger_geocoder_16 postgis_tiger_geocoder_16-2025.2-1PGDG.rhel10.2.noarch.rpm pgdg 2025.2 104.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/postgis_tiger_geocoder_16-2025.2-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 postgis_tiger_geocoder_16 postgis_tiger_geocoder_16-2025.2-1PGDG.rhel10.2.noarch.rpm pgdg 2025.2 104.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgis_tiger_geocoder_16-2025.2-1PGDG.rhel10.2.noarch.rpm
@ d12.x86_64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb pgdg 2025.2 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb pgdg 2025.2 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg12+1_all.deb
@ d13.x86_64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb pgdg 2025.2 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb pgdg 2025.2 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg13+1_all.deb
@ u22.x86_64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb
@ u22.aarch64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg22.04+1_all.deb
@ u24.x86_64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb pgdg 2025.2 95.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb pgdg 2025.2 95.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg24.04+1_all.deb
@ u26.x86_64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb
@ u26.aarch64 16 postgresql-16-postgis-tiger-geocoder postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb pgdg 2025.2 94.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgis-tiger-geocoder/postgresql-16-postgis-tiger-geocoder_2025.2-1.pgdg26.04+1_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `postgis_tiger_geocoder` 扩展的 RPM / DEB 包：

```bash
pig build pkg postgis_tiger_geocoder         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `postgis_tiger_geocoder` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install postgis_tiger_geocoder;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y postgis_tiger_geocoder -v 18  # PG 18
pig ext install -y postgis_tiger_geocoder -v 17  # PG 17
pig ext install -y postgis_tiger_geocoder -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y postgis_tiger_geocoder_18       # PG 18
dnf install -y postgis_tiger_geocoder_17       # PG 17
dnf install -y postgis_tiger_geocoder_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-postgis-tiger-geocoder   # PG 18
apt install -y postgresql-17-postgis-tiger-geocoder   # PG 17
apt install -y postgresql-16-postgis-tiger-geocoder   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION postgis_tiger_geocoder CASCADE;  -- 依赖: postgis, fuzzystrmatch
```




## 用法

> [PostGIS TIGER Geocoder：基于美国人口普查 TIGER/Line 数据的 PostGIS 地理编码](https://github.com/postgis/postgis)

PostGIS TIGER Geocoder 利用美国人口普查 TIGER/Line 数据提供地理编码和反向地理编码功能。它可以将地址字符串解析为标准化格式、查找地理坐标，以及将坐标反向解析为地址。

- [TIGER Geocoder 参考手册](https://postgis.net/docs/Extras.html)

### 安装

```sql
CREATE EXTENSION postgis_tiger_geocoder CASCADE;
```

这将创建包含地理编码器表和函数的 `tiger` 模式。

--------

## 加载 TIGER 数据

在进行地理编码之前，必须先加载所需州的 TIGER/Line 数据。该扩展提供了辅助函数来生成加载脚本：

```sql
-- 生成下载和加载某个州数据的脚本
-- （例如，马萨诸塞州 = 'MA'）
SELECT loader_generate_script(ARRAY['MA'], 'sh');
```

这会生成一个使用 `shp2pgsql` 加载 TIGER 形状文件的 shell 脚本。运行生成的脚本可将地址范围、边、面等数据填充到 `tiger_data` 模式中。

加载完成后：

```sql
-- 安装缺失的索引以提升性能
SELECT install_missing_indexes();

-- 更新统计信息
ANALYZE tiger.addr;
ANALYZE tiger.edges;
ANALYZE tiger.faces;
```

--------

## 地理编码

将美国地址字符串转换为地理坐标：

```sql
-- 基本地理编码
SELECT g.rating, ST_X(g.geomout) AS lon, ST_Y(g.geomout) AS lat,
       pprint_addy(g.addy) AS address
FROM geocode('1600 Pennsylvania Ave NW, Washington, DC 20500') AS g;
```

`rating` 表示匹配质量（越低越好，0 = 精确匹配）。

```sql
-- 限制返回结果数量的地理编码
SELECT g.rating, ST_AsText(g.geomout), pprint_addy(g.addy)
FROM geocode('100 Main St, Boston, MA', 3) AS g;

-- 从表中批量地理编码
SELECT a.id, g.rating, g.geomout, pprint_addy(g.addy)
FROM addresses a, LATERAL geocode(a.address_string, 1) AS g;
```

--------

## 反向地理编码

将坐标转换回街道地址：

```sql
SELECT pprint_addy(r.addy[1]) AS address
FROM reverse_geocode(ST_SetSRID(ST_MakePoint(-77.0365, 38.8977), 4326)) AS r;
```

--------

## 地址标准化

无需地理编码即可解析和标准化地址字符串：

```sql
SELECT *
FROM normalize_address('1600 Pennsylvania Avenue NW, Washington, DC 20500');
```

返回的组件包括：`address`（门牌号）、`predirAbbrev`、`streetName`、`streetTypeAbbrev`、`postdirAbbrev`、`internal`、`location`（城市）、`stateAbbrev`、`zip`、`parsed`。

```sql
-- 格式化输出标准化地址
SELECT pprint_addy(normalize_address('100 main street boston ma 02101'));
```

--------

## 配置

`tiger.geocode_settings` 表控制地理编码器的行为：

```sql
-- 查看当前设置
SELECT * FROM tiger.geocode_settings;

-- 调整设置（例如，增加调试级别）
UPDATE tiger.geocode_settings SET val = 'true' WHERE name = 'debug_geocode_address';
```
