---
title: "pgrouting"
linkTitle: "pgrouting"
description: "提供寻路能力"
weight: 1510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgRouting/pgrouting">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgRouting/pgrouting</div>
    <div class="ext-card__desc">https://github.com/pgRouting/pgrouting</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgrouting`**](/ext/e/pgrouting) | `4.0.1` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1510  | [**`pgrouting`**](/ext/e/pgrouting) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`postgis_topology`](/ext/e/postgis_topology) [`mobilitydb`](/ext/e/mobilitydb) [`pg_polyline`](/ext/e/pg_polyline) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) [`address_standardizer_data_us`](/ext/e/address_standardizer_data_us) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pgrouting` | `postgis` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pgrouting_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgrouting` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 7 | AVAIL PGDG 4.0.1 8 | AVAIL PGDG 4.0.1 15 | AVAIL PGDG 4.0.1 19 |
| el8.aarch64 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 7 | AVAIL PGDG 4.0.1 8 | AVAIL PGDG 4.0.1 13 | AVAIL PGDG 4.0.1 15 |
| el9.x86_64 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 7 | AVAIL PGDG 4.0.1 8 | AVAIL PGDG 4.0.1 15 | AVAIL PGDG 4.0.1 15 |
| el9.aarch64 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 7 | AVAIL PGDG 4.0.1 8 | AVAIL PGDG 4.0.1 13 | AVAIL PGDG 4.0.1 15 |
| el10.x86_64 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 2 |
| el10.aarch64 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 2 | AVAIL PGDG 4.0.1 2 |
| d12.x86_64 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 |
| d12.aarch64 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 |
| d13.x86_64 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 |
| d13.aarch64 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 |
| u22.x86_64 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 |
| u22.aarch64 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 |
| u24.x86_64 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 |
| u24.aarch64 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 | AVAIL PGDG 4.0.1 1 |
@ el8.x86_64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgrouting_18-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgrouting_18-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgrouting_18-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgrouting_18-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgrouting_18-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgrouting_18-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgrouting_18-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgrouting_18-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 727.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgrouting_18-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 773.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgrouting_18-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgrouting_18-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 718.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgrouting_18-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 773.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 521.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.7.3-1PGDG.rhel8.x86_64.rpm pgdg 3.7.3 921.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.7.1-1PGDG.rhel8.x86_64.rpm pgdg 3.7.1 965.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.7.0-1PGDG.rhel8.x86_64.rpm pgdg 3.7.0 968.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.6.3-1PGDG.rhel8.x86_64.rpm pgdg 3.6.3 958.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.6.2-2PGDG.rhel8.x86_64.rpm pgdg 3.6.2 958.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.6.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.7.3-1PGDG.rhel8.aarch64.rpm pgdg 3.7.3 810.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.7.1-1PGDG.rhel8.aarch64.rpm pgdg 3.7.1 849.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.7.0-1PGDG.rhel8.aarch64.rpm pgdg 3.7.0 852.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.6.3-1PGDG.rhel8.aarch64.rpm pgdg 3.6.3 840.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.6.2-2PGDG.rhel8.aarch64.rpm pgdg 3.6.2 839.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.6.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.7.3-1PGDG.rhel9.x86_64.rpm pgdg 3.7.3 719.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.7.1-1PGDG.rhel9.x86_64.rpm pgdg 3.7.1 748.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.7.0-1PGDG.rhel9.x86_64.rpm pgdg 3.7.0 752.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.6.3-1PGDG.rhel9.x86_64.rpm pgdg 3.6.3 738.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.6.2-2PGDG.rhel9.x86_64.rpm pgdg 3.6.2 737.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.6.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.7.3-1PGDG.rhel9.aarch64.rpm pgdg 3.7.3 671.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.7.1-1PGDG.rhel9.aarch64.rpm pgdg 3.7.1 699.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.7.0-1PGDG.rhel9.aarch64.rpm pgdg 3.7.0 701.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.6.3-1PGDG.rhel9.aarch64.rpm pgdg 3.6.3 688.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.6.2-2PGDG.rhel9.aarch64.rpm pgdg 3.6.2 688.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.6.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 726.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgrouting_17-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 772.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgrouting_17-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgrouting_17-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 719.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgrouting_17-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 772.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 522.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.7.3-1PGDG.rhel8.x86_64.rpm pgdg 3.7.3 921.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.7.1-1PGDG.rhel8.x86_64.rpm pgdg 3.7.1 965.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.7.0-1PGDG.rhel8.x86_64.rpm pgdg 3.7.0 968.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.6.3-1PGDG.rhel8.x86_64.rpm pgdg 3.6.3 958.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 956.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.5.0-1.rhel8.x86_64.rpm pgdg 3.5.0 939.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.5.0-1.rhel8.x86_64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.7.3-1PGDG.rhel8.aarch64.rpm pgdg 3.7.3 810.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.7.1-1PGDG.rhel8.aarch64.rpm pgdg 3.7.1 849.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.7.0-1PGDG.rhel8.aarch64.rpm pgdg 3.7.0 852.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.6.3-1PGDG.rhel8.aarch64.rpm pgdg 3.6.3 840.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 837.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.5.0-1.rhel8.aarch64.rpm pgdg 3.5.0 818.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.5.0-1.rhel8.aarch64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.7.3-1PGDG.rhel9.x86_64.rpm pgdg 3.7.3 719.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.7.1-1PGDG.rhel9.x86_64.rpm pgdg 3.7.1 749.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.7.0-1PGDG.rhel9.x86_64.rpm pgdg 3.7.0 752.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.6.3-1PGDG.rhel9.x86_64.rpm pgdg 3.6.3 738.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 736.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.5.0-1.rhel9.x86_64.rpm pgdg 3.5.0 732.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.5.0-1.rhel9.x86_64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.7.3-1PGDG.rhel9.aarch64.rpm pgdg 3.7.3 671.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.7.1-1PGDG.rhel9.aarch64.rpm pgdg 3.7.1 698.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.7.0-1PGDG.rhel9.aarch64.rpm pgdg 3.7.0 702.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.6.3-1PGDG.rhel9.aarch64.rpm pgdg 3.6.3 688.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 688.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.5.0-1.rhel9.aarch64.rpm pgdg 3.5.0 688.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.5.0-1.rhel9.aarch64.rpm
@ el10.x86_64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 726.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgrouting_16-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 772.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgrouting_16-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgrouting_16-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 718.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgrouting_16-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 772.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 521.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.7.3-1PGDG.rhel8.x86_64.rpm pgdg 3.7.3 921.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.7.1-1PGDG.rhel8.x86_64.rpm pgdg 3.7.1 965.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.7.0-1PGDG.rhel8.x86_64.rpm pgdg 3.7.0 968.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.6.3-1PGDG.rhel8.x86_64.rpm pgdg 3.6.3 958.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 956.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.5.0-1.rhel8.x86_64.rpm pgdg 3.5.0 938.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.4.2-2.rhel8.x86_64.rpm pgdg 3.4.2 918.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.4.2-2.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.4.1-1.rhel8.x86_64.rpm pgdg 3.4.1 917.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.4.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.4.0-1.rhel8.x86_64.rpm pgdg 3.4.0 915.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.3.4-1.rhel8.x86_64.rpm pgdg 3.3.4 868.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.3.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.3.3-1.rhel8.x86_64.rpm pgdg 3.3.3 868.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.3.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.2.2-1.rhel8.x86_64.rpm pgdg 3.2.2 847.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.1.4-1.rhel8.x86_64.rpm pgdg 3.1.4 789.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.1.4-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.7.3-1PGDG.rhel8.aarch64.rpm pgdg 3.7.3 810.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.7.1-1PGDG.rhel8.aarch64.rpm pgdg 3.7.1 849.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.7.0-1PGDG.rhel8.aarch64.rpm pgdg 3.7.0 852.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.6.3-1PGDG.rhel8.aarch64.rpm pgdg 3.6.3 840.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 837.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.5.0-1.rhel8.aarch64.rpm pgdg 3.5.0 818.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.5.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.4.2-2.rhel8.aarch64.rpm pgdg 3.4.2 821.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.4.2-2.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.4.1-1.rhel8.aarch64.rpm pgdg 3.4.1 821.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.4.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.4.0-1.rhel8.aarch64.rpm pgdg 3.4.0 819.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.4.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.3.4-1.rhel8.aarch64.rpm pgdg 3.3.4 775.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.3.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.1.4-1.rhel8.aarch64.rpm pgdg 3.1.4 710.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.1.4-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.7.3-1PGDG.rhel9.x86_64.rpm pgdg 3.7.3 719.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.7.1-1PGDG.rhel9.x86_64.rpm pgdg 3.7.1 749.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.7.0-1PGDG.rhel9.x86_64.rpm pgdg 3.7.0 752.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.6.3-1PGDG.rhel9.x86_64.rpm pgdg 3.6.3 738.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 736.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.5.0-1.rhel9.x86_64.rpm pgdg 3.5.0 732.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.5.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.4.2-2.rhel9.x86_64.rpm pgdg 3.4.2 733.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.4.2-2.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.4.1-1.rhel9.x86_64.rpm pgdg 3.4.1 732.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.4.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.4.0-1.rhel9.x86_64.rpm pgdg 3.4.0 729.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.3.4-1.rhel9.x86_64.rpm pgdg 3.3.4 698.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.3.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.3.3-1.rhel9.x86_64.rpm pgdg 3.3.3 698.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.3.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.2.2-1.rhel9.x86_64.rpm pgdg 3.2.2 684.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.2.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.1.4-1.rhel9.x86_64.rpm pgdg 3.1.4 654.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.1.4-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.7.3-1PGDG.rhel9.aarch64.rpm pgdg 3.7.3 671.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.7.1-1PGDG.rhel9.aarch64.rpm pgdg 3.7.1 698.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.7.0-1PGDG.rhel9.aarch64.rpm pgdg 3.7.0 701.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.6.3-1PGDG.rhel9.aarch64.rpm pgdg 3.6.3 688.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 689.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.5.0-1.rhel9.aarch64.rpm pgdg 3.5.0 688.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.5.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.4.2-2.rhel9.aarch64.rpm pgdg 3.4.2 686.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.4.2-2.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.4.1-1.rhel9.aarch64.rpm pgdg 3.4.1 688.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.4.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.4.0-1.rhel9.aarch64.rpm pgdg 3.4.0 683.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.4.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.3.4-1.rhel9.aarch64.rpm pgdg 3.3.4 654.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.3.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.1.4-1.rhel9.aarch64.rpm pgdg 3.1.4 613.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.1.4-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 726.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgrouting_15-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 772.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgrouting_15-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgrouting_15-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 718.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgrouting_15-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 772.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 522.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.7.3-1PGDG.rhel8.x86_64.rpm pgdg 3.7.3 921.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.7.1-1PGDG.rhel8.x86_64.rpm pgdg 3.7.1 965.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.7.0-1PGDG.rhel8.x86_64.rpm pgdg 3.7.0 968.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.6.3-1PGDG.rhel8.x86_64.rpm pgdg 3.6.3 958.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 956.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.5.0-1.rhel8.x86_64.rpm pgdg 3.5.0 938.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.4.2-2.rhel8.x86_64.rpm pgdg 3.4.2 918.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.4.2-2.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.4.1-1.rhel8.x86_64.rpm pgdg 3.4.1 917.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.4.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.4.0-1.rhel8.x86_64.rpm pgdg 3.4.0 915.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.4-1.rhel8.x86_64.rpm pgdg 3.3.4 868.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.3-1.rhel8.x86_64.rpm pgdg 3.3.3 868.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.2-1.rhel8.x86_64.rpm pgdg 3.3.2 868.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.1-1.rhel8.x86_64.rpm pgdg 3.3.1 870.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.0-1.rhel8.x86_64.rpm pgdg 3.3.0 861.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.2.1-1.rhel8.x86_64.rpm pgdg 3.2.1 846.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.1.3-1.rhel8.x86_64.rpm pgdg 3.1.3 788.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.0.5-1.rhel8.x86_64.rpm pgdg 3.0.5 780.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.0.5-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.7.3-1PGDG.rhel8.aarch64.rpm pgdg 3.7.3 810.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.7.1-1PGDG.rhel8.aarch64.rpm pgdg 3.7.1 849.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.7.0-1PGDG.rhel8.aarch64.rpm pgdg 3.7.0 852.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.6.3-1PGDG.rhel8.aarch64.rpm pgdg 3.6.3 839.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 837.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.5.0-1.rhel8.aarch64.rpm pgdg 3.5.0 818.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.5.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.4.2-2.rhel8.aarch64.rpm pgdg 3.4.2 821.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.4.2-2.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.4.1-1.rhel8.aarch64.rpm pgdg 3.4.1 821.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.4.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.4.0-1.rhel8.aarch64.rpm pgdg 3.4.0 819.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.4.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.3.4-1.rhel8.aarch64.rpm pgdg 3.3.4 775.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.3.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.2.2-1.rhel8.aarch64.rpm pgdg 3.2.2 758.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.2.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.1.4-1.rhel8.aarch64.rpm pgdg 3.1.4 710.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.0.6-1.rhel8.aarch64.rpm pgdg 3.0.6 702.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.0.6-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.7.3-1PGDG.rhel9.x86_64.rpm pgdg 3.7.3 719.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.7.1-1PGDG.rhel9.x86_64.rpm pgdg 3.7.1 748.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.7.0-1PGDG.rhel9.x86_64.rpm pgdg 3.7.0 752.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.6.3-1PGDG.rhel9.x86_64.rpm pgdg 3.6.3 738.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 736.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.5.0-1.rhel9.x86_64.rpm pgdg 3.5.0 732.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.5.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.4.2-2.rhel9.x86_64.rpm pgdg 3.4.2 733.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.4.2-2.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.4.1-1.rhel9.x86_64.rpm pgdg 3.4.1 732.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.4.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.4.0-1.rhel9.x86_64.rpm pgdg 3.4.0 729.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.3.4-1.rhel9.x86_64.rpm pgdg 3.3.4 697.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.3.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.3.3-1.rhel9.x86_64.rpm pgdg 3.3.3 697.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.3.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.3.2-1.rhel9.x86_64.rpm pgdg 3.3.2 697.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.3.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.3.1-1.rhel9.x86_64.rpm pgdg 3.3.1 699.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.3.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.7.3-1PGDG.rhel9.aarch64.rpm pgdg 3.7.3 671.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.7.1-1PGDG.rhel9.aarch64.rpm pgdg 3.7.1 699.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.7.0-1PGDG.rhel9.aarch64.rpm pgdg 3.7.0 701.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.6.3-1PGDG.rhel9.aarch64.rpm pgdg 3.6.3 688.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 689.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.5.0-1.rhel9.aarch64.rpm pgdg 3.5.0 688.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.5.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.4.2-2.rhel9.aarch64.rpm pgdg 3.4.2 687.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.4.2-2.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.4.1-1.rhel9.aarch64.rpm pgdg 3.4.1 688.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.4.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.4.0-1.rhel9.aarch64.rpm pgdg 3.4.0 684.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.4.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.3.4-1.rhel9.aarch64.rpm pgdg 3.3.4 654.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.3.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.2.2-1.rhel9.aarch64.rpm pgdg 3.2.2 642.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.2.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.1.4-1.rhel9.aarch64.rpm pgdg 3.1.4 613.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.0.6-1.rhel9.aarch64.rpm pgdg 3.0.6 607.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.0.6-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 726.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgrouting_14-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 773.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgrouting_14-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgrouting_14-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 718.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgrouting_14-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 773.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 521.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgrouting` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgrouting;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgrouting -v 18  # PG 18
pig ext install -y pgrouting -v 17  # PG 17
pig ext install -y pgrouting -v 16  # PG 16
pig ext install -y pgrouting -v 15  # PG 15
pig ext install -y pgrouting -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgrouting_18       # PG 18
dnf install -y pgrouting_17       # PG 17
dnf install -y pgrouting_16       # PG 16
dnf install -y pgrouting_15       # PG 15
dnf install -y pgrouting_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgrouting   # PG 18
apt install -y postgresql-17-pgrouting   # PG 17
apt install -y postgresql-16-pgrouting   # PG 16
apt install -y postgresql-15-pgrouting   # PG 15
apt install -y postgresql-14-pgrouting   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgrouting CASCADE;  -- 依赖: postgis
```
