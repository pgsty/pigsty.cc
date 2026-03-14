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

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) [`postgis_topology`](/ext/e/postgis_topology) [`mobilitydb`](/ext/e/mobilitydb) [`pg_polyline`](/ext/e/pg_polyline) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) [`address_standardizer_data_us`](/ext/e/address_standardizer_data_us) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pgrouting` | `plpgsql`, `postgis` |
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
@ el8.x86_64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgrouting_18-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgrouting_18-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgrouting_18-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgrouting_18-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgrouting_18-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgrouting_18-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgrouting_18-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgrouting_18-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 727.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgrouting_18-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 773.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgrouting_18-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgrouting_18 pgrouting_18-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgrouting_18-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgrouting_18 pgrouting_18-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 718.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgrouting_18-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 773.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 521.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgrouting postgresql-18-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-18-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.7.3-1PGDG.rhel8.x86_64.rpm pgdg 3.7.3 921.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.7.1-1PGDG.rhel8.x86_64.rpm pgdg 3.7.1 965.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.7.0-1PGDG.rhel8.x86_64.rpm pgdg 3.7.0 968.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.6.3-1PGDG.rhel8.x86_64.rpm pgdg 3.6.3 958.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgrouting_17 pgrouting_17-3.6.2-2PGDG.rhel8.x86_64.rpm pgdg 3.6.2 958.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgrouting_17-3.6.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.7.3-1PGDG.rhel8.aarch64.rpm pgdg 3.7.3 810.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.7.1-1PGDG.rhel8.aarch64.rpm pgdg 3.7.1 849.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.7.0-1PGDG.rhel8.aarch64.rpm pgdg 3.7.0 852.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.6.3-1PGDG.rhel8.aarch64.rpm pgdg 3.6.3 840.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgrouting_17 pgrouting_17-3.6.2-2PGDG.rhel8.aarch64.rpm pgdg 3.6.2 839.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgrouting_17-3.6.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.7.3-1PGDG.rhel9.x86_64.rpm pgdg 3.7.3 719.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.7.1-1PGDG.rhel9.x86_64.rpm pgdg 3.7.1 748.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.7.0-1PGDG.rhel9.x86_64.rpm pgdg 3.7.0 752.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.6.3-1PGDG.rhel9.x86_64.rpm pgdg 3.6.3 738.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgrouting_17 pgrouting_17-3.6.2-2PGDG.rhel9.x86_64.rpm pgdg 3.6.2 737.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgrouting_17-3.6.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.7.3-1PGDG.rhel9.aarch64.rpm pgdg 3.7.3 671.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.7.1-1PGDG.rhel9.aarch64.rpm pgdg 3.7.1 699.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.7.0-1PGDG.rhel9.aarch64.rpm pgdg 3.7.0 701.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.6.3-1PGDG.rhel9.aarch64.rpm pgdg 3.6.3 688.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgrouting_17 pgrouting_17-3.6.2-2PGDG.rhel9.aarch64.rpm pgdg 3.6.2 688.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgrouting_17-3.6.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 726.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgrouting_17-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 772.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgrouting_17-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgrouting_17 pgrouting_17-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgrouting_17-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgrouting_17 pgrouting_17-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 719.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgrouting_17-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 772.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 522.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgrouting postgresql-17-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-17-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.7.3-1PGDG.rhel8.x86_64.rpm pgdg 3.7.3 921.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.7.1-1PGDG.rhel8.x86_64.rpm pgdg 3.7.1 965.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.7.0-1PGDG.rhel8.x86_64.rpm pgdg 3.7.0 968.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.6.3-1PGDG.rhel8.x86_64.rpm pgdg 3.6.3 958.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 956.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgrouting_16 pgrouting_16-3.5.0-1.rhel8.x86_64.rpm pgdg 3.5.0 939.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgrouting_16-3.5.0-1.rhel8.x86_64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.7.3-1PGDG.rhel8.aarch64.rpm pgdg 3.7.3 810.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.7.1-1PGDG.rhel8.aarch64.rpm pgdg 3.7.1 849.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.7.0-1PGDG.rhel8.aarch64.rpm pgdg 3.7.0 852.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.6.3-1PGDG.rhel8.aarch64.rpm pgdg 3.6.3 840.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 837.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgrouting_16 pgrouting_16-3.5.0-1.rhel8.aarch64.rpm pgdg 3.5.0 818.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgrouting_16-3.5.0-1.rhel8.aarch64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.7.3-1PGDG.rhel9.x86_64.rpm pgdg 3.7.3 719.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.7.1-1PGDG.rhel9.x86_64.rpm pgdg 3.7.1 749.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.7.0-1PGDG.rhel9.x86_64.rpm pgdg 3.7.0 752.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.6.3-1PGDG.rhel9.x86_64.rpm pgdg 3.6.3 738.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 736.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgrouting_16 pgrouting_16-3.5.0-1.rhel9.x86_64.rpm pgdg 3.5.0 732.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgrouting_16-3.5.0-1.rhel9.x86_64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.7.3-1PGDG.rhel9.aarch64.rpm pgdg 3.7.3 671.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.7.1-1PGDG.rhel9.aarch64.rpm pgdg 3.7.1 698.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.7.0-1PGDG.rhel9.aarch64.rpm pgdg 3.7.0 702.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.6.3-1PGDG.rhel9.aarch64.rpm pgdg 3.6.3 688.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 688.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgrouting_16 pgrouting_16-3.5.0-1.rhel9.aarch64.rpm pgdg 3.5.0 688.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgrouting_16-3.5.0-1.rhel9.aarch64.rpm
@ el10.x86_64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 726.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgrouting_16-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 772.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgrouting_16-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgrouting_16 pgrouting_16-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgrouting_16-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgrouting_16 pgrouting_16-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 718.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgrouting_16-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 772.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 521.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgrouting postgresql-16-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-16-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.7.3-1PGDG.rhel8.x86_64.rpm pgdg 3.7.3 921.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.7.1-1PGDG.rhel8.x86_64.rpm pgdg 3.7.1 965.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.7.0-1PGDG.rhel8.x86_64.rpm pgdg 3.7.0 968.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.6.3-1PGDG.rhel8.x86_64.rpm pgdg 3.6.3 958.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 956.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.5.0-1.rhel8.x86_64.rpm pgdg 3.5.0 938.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.4.2-2.rhel8.x86_64.rpm pgdg 3.4.2 918.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.4.2-2.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.4.1-1.rhel8.x86_64.rpm pgdg 3.4.1 917.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.4.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.4.0-1.rhel8.x86_64.rpm pgdg 3.4.0 915.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.3.4-1.rhel8.x86_64.rpm pgdg 3.3.4 868.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.3.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.3.3-1.rhel8.x86_64.rpm pgdg 3.3.3 868.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.3.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.2.2-1.rhel8.x86_64.rpm pgdg 3.2.2 847.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgrouting_15 pgrouting_15-3.1.4-1.rhel8.x86_64.rpm pgdg 3.1.4 789.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgrouting_15-3.1.4-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.7.3-1PGDG.rhel8.aarch64.rpm pgdg 3.7.3 810.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.7.1-1PGDG.rhel8.aarch64.rpm pgdg 3.7.1 849.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.7.0-1PGDG.rhel8.aarch64.rpm pgdg 3.7.0 852.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.6.3-1PGDG.rhel8.aarch64.rpm pgdg 3.6.3 840.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 837.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.5.0-1.rhel8.aarch64.rpm pgdg 3.5.0 818.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.5.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.4.2-2.rhel8.aarch64.rpm pgdg 3.4.2 821.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.4.2-2.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.4.1-1.rhel8.aarch64.rpm pgdg 3.4.1 821.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.4.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.4.0-1.rhel8.aarch64.rpm pgdg 3.4.0 819.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.4.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.3.4-1.rhel8.aarch64.rpm pgdg 3.3.4 775.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.3.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgrouting_15 pgrouting_15-3.1.4-1.rhel8.aarch64.rpm pgdg 3.1.4 710.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgrouting_15-3.1.4-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.7.3-1PGDG.rhel9.x86_64.rpm pgdg 3.7.3 719.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.7.1-1PGDG.rhel9.x86_64.rpm pgdg 3.7.1 749.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.7.0-1PGDG.rhel9.x86_64.rpm pgdg 3.7.0 752.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.6.3-1PGDG.rhel9.x86_64.rpm pgdg 3.6.3 738.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 736.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.5.0-1.rhel9.x86_64.rpm pgdg 3.5.0 732.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.5.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.4.2-2.rhel9.x86_64.rpm pgdg 3.4.2 733.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.4.2-2.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.4.1-1.rhel9.x86_64.rpm pgdg 3.4.1 732.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.4.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.4.0-1.rhel9.x86_64.rpm pgdg 3.4.0 729.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.3.4-1.rhel9.x86_64.rpm pgdg 3.3.4 698.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.3.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.3.3-1.rhel9.x86_64.rpm pgdg 3.3.3 698.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.3.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.2.2-1.rhel9.x86_64.rpm pgdg 3.2.2 684.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.2.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgrouting_15 pgrouting_15-3.1.4-1.rhel9.x86_64.rpm pgdg 3.1.4 654.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgrouting_15-3.1.4-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.7.3-1PGDG.rhel9.aarch64.rpm pgdg 3.7.3 671.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.7.1-1PGDG.rhel9.aarch64.rpm pgdg 3.7.1 698.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.7.0-1PGDG.rhel9.aarch64.rpm pgdg 3.7.0 701.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.6.3-1PGDG.rhel9.aarch64.rpm pgdg 3.6.3 688.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 689.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.5.0-1.rhel9.aarch64.rpm pgdg 3.5.0 688.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.5.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.4.2-2.rhel9.aarch64.rpm pgdg 3.4.2 686.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.4.2-2.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.4.1-1.rhel9.aarch64.rpm pgdg 3.4.1 688.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.4.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.4.0-1.rhel9.aarch64.rpm pgdg 3.4.0 683.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.4.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.3.4-1.rhel9.aarch64.rpm pgdg 3.3.4 654.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.3.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgrouting_15 pgrouting_15-3.1.4-1.rhel9.aarch64.rpm pgdg 3.1.4 613.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgrouting_15-3.1.4-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 726.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgrouting_15-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 772.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgrouting_15-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgrouting_15 pgrouting_15-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgrouting_15-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgrouting_15 pgrouting_15-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 718.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgrouting_15-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 772.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 522.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgrouting postgresql-15-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-15-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.0.1 904.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-4.0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel8.x86_64.rpm pgdg 3.8.0 943.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.8.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.7.3-1PGDG.rhel8.x86_64.rpm pgdg 3.7.3 921.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.7.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.7.1-1PGDG.rhel8.x86_64.rpm pgdg 3.7.1 965.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.7.0-1PGDG.rhel8.x86_64.rpm pgdg 3.7.0 968.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.6.3-1PGDG.rhel8.x86_64.rpm pgdg 3.6.3 958.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.6.0-1PGDG.rhel8.x86_64.rpm pgdg 3.6.0 956.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.5.0-1.rhel8.x86_64.rpm pgdg 3.5.0 938.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.4.2-2.rhel8.x86_64.rpm pgdg 3.4.2 918.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.4.2-2.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.4.1-1.rhel8.x86_64.rpm pgdg 3.4.1 917.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.4.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.4.0-1.rhel8.x86_64.rpm pgdg 3.4.0 915.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.4-1.rhel8.x86_64.rpm pgdg 3.3.4 868.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.3-1.rhel8.x86_64.rpm pgdg 3.3.3 868.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.2-1.rhel8.x86_64.rpm pgdg 3.3.2 868.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.1-1.rhel8.x86_64.rpm pgdg 3.3.1 870.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.3.0-1.rhel8.x86_64.rpm pgdg 3.3.0 861.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.2.1-1.rhel8.x86_64.rpm pgdg 3.2.1 846.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.1.3-1.rhel8.x86_64.rpm pgdg 3.1.3 788.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgrouting_14 pgrouting_14-3.0.5-1.rhel8.x86_64.rpm pgdg 3.0.5 780.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgrouting_14-3.0.5-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.0.1 797.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-4.0.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel8.aarch64.rpm pgdg 3.8.0 830.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.8.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.7.3-1PGDG.rhel8.aarch64.rpm pgdg 3.7.3 810.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.7.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.7.1-1PGDG.rhel8.aarch64.rpm pgdg 3.7.1 849.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.7.0-1PGDG.rhel8.aarch64.rpm pgdg 3.7.0 852.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.6.3-1PGDG.rhel8.aarch64.rpm pgdg 3.6.3 839.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.6.0-1PGDG.rhel8.aarch64.rpm pgdg 3.6.0 837.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.5.0-1.rhel8.aarch64.rpm pgdg 3.5.0 818.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.5.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.4.2-2.rhel8.aarch64.rpm pgdg 3.4.2 821.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.4.2-2.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.4.1-1.rhel8.aarch64.rpm pgdg 3.4.1 821.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.4.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.4.0-1.rhel8.aarch64.rpm pgdg 3.4.0 819.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.4.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.3.4-1.rhel8.aarch64.rpm pgdg 3.3.4 775.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.3.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.2.2-1.rhel8.aarch64.rpm pgdg 3.2.2 758.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.2.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.1.4-1.rhel8.aarch64.rpm pgdg 3.1.4 710.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgrouting_14 pgrouting_14-3.0.6-1.rhel8.aarch64.rpm pgdg 3.0.6 702.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgrouting_14-3.0.6-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.0.1 696.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-4.0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel9.x86_64.rpm pgdg 3.8.0 741.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.8.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.7.3-1PGDG.rhel9.x86_64.rpm pgdg 3.7.3 719.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.7.1-1PGDG.rhel9.x86_64.rpm pgdg 3.7.1 748.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.7.0-1PGDG.rhel9.x86_64.rpm pgdg 3.7.0 752.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.6.3-1PGDG.rhel9.x86_64.rpm pgdg 3.6.3 738.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.6.0-1PGDG.rhel9.x86_64.rpm pgdg 3.6.0 736.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.5.0-1.rhel9.x86_64.rpm pgdg 3.5.0 732.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.5.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.4.2-2.rhel9.x86_64.rpm pgdg 3.4.2 733.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.4.2-2.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.4.1-1.rhel9.x86_64.rpm pgdg 3.4.1 732.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.4.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.4.0-1.rhel9.x86_64.rpm pgdg 3.4.0 729.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.3.4-1.rhel9.x86_64.rpm pgdg 3.3.4 697.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.3.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.3.3-1.rhel9.x86_64.rpm pgdg 3.3.3 697.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.3.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.3.2-1.rhel9.x86_64.rpm pgdg 3.3.2 697.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.3.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgrouting_14 pgrouting_14-3.3.1-1.rhel9.x86_64.rpm pgdg 3.3.1 699.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgrouting_14-3.3.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.0.1 648.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-4.0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel9.aarch64.rpm pgdg 3.8.0 693.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.8.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.7.3-1PGDG.rhel9.aarch64.rpm pgdg 3.7.3 671.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.7.1-1PGDG.rhel9.aarch64.rpm pgdg 3.7.1 699.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.7.0-1PGDG.rhel9.aarch64.rpm pgdg 3.7.0 701.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.6.3-1PGDG.rhel9.aarch64.rpm pgdg 3.6.3 688.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.6.0-1PGDG.rhel9.aarch64.rpm pgdg 3.6.0 689.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.5.0-1.rhel9.aarch64.rpm pgdg 3.5.0 688.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.5.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.4.2-2.rhel9.aarch64.rpm pgdg 3.4.2 687.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.4.2-2.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.4.1-1.rhel9.aarch64.rpm pgdg 3.4.1 688.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.4.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.4.0-1.rhel9.aarch64.rpm pgdg 3.4.0 684.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.4.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.3.4-1.rhel9.aarch64.rpm pgdg 3.3.4 654.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.3.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.2.2-1.rhel9.aarch64.rpm pgdg 3.2.2 642.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.2.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.1.4-1.rhel9.aarch64.rpm pgdg 3.1.4 613.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgrouting_14 pgrouting_14-3.0.6-1.rhel9.aarch64.rpm pgdg 3.0.6 607.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgrouting_14-3.0.6-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.0.1 726.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgrouting_14-4.0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel10.x86_64.rpm pgdg 3.8.0 773.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgrouting_14-3.8.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgrouting_14 pgrouting_14-4.0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.0.1 670.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgrouting_14-4.0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgrouting_14 pgrouting_14-3.8.0-1PGDG.rhel10.aarch64.rpm pgdg 3.8.0 718.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgrouting_14-3.8.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg12+1_amd64.deb pgdg 4.0.1 813.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg12+1_arm64.deb pgdg 4.0.1 695.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg13+1_amd64.deb pgdg 4.0.1 902.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg13+1_arm64.deb pgdg 4.0.1 773.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb pgdg 4.0.1 614.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb pgdg 4.0.1 521.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb pgdg 4.0.1 596.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgrouting postgresql-14-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb pgdg 4.0.1 518.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgrouting/postgresql-14-pgrouting_4.0.1-1.pgdg24.04+1_arm64.deb
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
CREATE EXTENSION pgrouting CASCADE;  -- 依赖: plpgsql, postgis
```



## 用法

> [pgRouting - 基于 PostgreSQL 的路径规划](https://github.com/pgRouting/pgrouting)

pgRouting 扩展 PostGIS/PostgreSQL 地理空间数据库，提供地理空间路径规划和其他网络分析功能。

该库包含以下特性：

- 全对最短路径（Floyd-Warshall、Johnson）
- A* 算法（含双向变体）
- Dijkstra 算法（代价、代价矩阵、行驶距离、K 条最短路径、经由路由、最近点）
- 双向 Dijkstra
- 旅行商问题（TSP）
- 网络流（最大流、Boykov-Kolmogorov、Edmonds-Karp、预流推进）
- 生成树（Kruskal、Prim 及其 BFS/DFS/行驶距离变体）
- 图组件（连通分量、强连通分量、双连通分量、关节点、桥）
- 转弯限制最短路径（TRSP）
- WithPoints 路由（边上任意位置）
- 图压缩与实用函数

### 快速开始

启用扩展（需要 PostGIS）：

```sql
CREATE EXTENSION pgrouting CASCADE;
```

### 图的表示

pgRouting 使用返回边数据的 SQL 查询来表示图。标准边查询格式：

```sql
SELECT id, source, target, cost, reverse_cost FROM edges;
```

| 列 | 类型 | 说明 |
|----|------|------|
| `id` | ANY-INTEGER | 边标识符 |
| `source` | ANY-INTEGER | 起始顶点标识符 |
| `target` | ANY-INTEGER | 终止顶点标识符 |
| `cost` | ANY-NUMERICAL | 权重（source 到 target）；负值表示排除该边 |
| `reverse_cost` | ANY-NUMERICAL | 权重（target 到 source）；默认 -1（不存在） |

### 无几何体的简单示例

创建一个图并查找最短路径：

```sql
CREATE TABLE wiki (
  id SERIAL,
  source INTEGER,
  target INTEGER,
  cost INTEGER
);

INSERT INTO wiki (source, target, cost) VALUES
  (1, 2, 7),  (1, 3, 9), (1, 6, 14),
  (2, 3, 10), (2, 4, 15),
  (3, 6, 2),  (3, 4, 11),
  (4, 5, 6),
  (5, 6, 9);

SELECT * FROM pgr_dijkstra(
  'SELECT id, source, target, cost FROM wiki',
  1, 5, false);
```

--------

## 函数族

### Dijkstra - 最短路径

核心路由函数。支持一对一、一对多、多对一、多对多及组合签名。

```sql
pgr_dijkstra(Edges SQL, start_vid,  end_vid,  [directed])
pgr_dijkstra(Edges SQL, start_vid,  end_vids, [directed])
pgr_dijkstra(Edges SQL, start_vids, end_vid,  [directed])
pgr_dijkstra(Edges SQL, start_vids, end_vids, [directed])
pgr_dijkstra(Edges SQL, Combinations SQL,     [directed])
```

返回：`(seq, path_seq, start_vid, end_vid, node, edge, cost, agg_cost)`

**一对一：**

```sql
SELECT * FROM pgr_dijkstra(
  'SELECT id, source, target, cost, reverse_cost FROM edges',
  6, 10, true);
```

**一对多：**

```sql
SELECT * FROM pgr_dijkstra(
  'SELECT id, source, target, cost, reverse_cost FROM edges',
  6, ARRAY[10, 17]);
```

**多对多（无向）：**

```sql
SELECT * FROM pgr_dijkstra(
  'SELECT id, source, target, cost, reverse_cost FROM edges',
  ARRAY[6, 1], ARRAY[10, 17],
  directed => false);
```

**组合：**

```sql
SELECT * FROM pgr_dijkstra(
  'SELECT id, source, target, cost, reverse_cost FROM edges',
  'SELECT source, target FROM combinations',
  false);
```

#### Dijkstra 代价

仅返回聚合代价，不含路径详情：

```sql
pgr_dijkstraCost(Edges SQL, start_vid, end_vid, [directed])
```

返回：`(start_vid, end_vid, agg_cost)`

#### Dijkstra 代价矩阵

为一组顶点生成代价矩阵：

```sql
pgr_dijkstraCostMatrix(Edges SQL, vids, [directed])
```

#### Dijkstra 经由

按有序顶点序列规划路径：

```sql
pgr_dijkstraVia(Edges SQL, via_vertices, [directed, strict, U_turn_on_edge])
```

#### Dijkstra 最近点

查找距离一组目标最近的顶点：

```sql
pgr_dijkstraNear(Edges SQL, start_vid, end_vids, [directed])
```

### A* - 最短路径

使用 A* 启发式算法。需要边查询中包含额外的坐标列（`x1`、`y1`、`x2`、`y2`）。

```sql
pgr_aStar(Edges SQL, start_vid, end_vid, [directed, heuristic, factor, epsilon])
```

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `directed` | BOOLEAN | `true` | 图方向 |
| `heuristic` | INTEGER | `5` | 距离启发式（0-5） |
| `factor` | FLOAT | `1` | 单位换算因子 |
| `epsilon` | FLOAT | `1` | 近似因子 |

```sql
SELECT * FROM pgr_aStar(
  'SELECT id, source, target, cost, reverse_cost, x1, y1, x2, y2 FROM edges',
  6, 12,
  directed => true, heuristic => 2);
```

另有：`pgr_aStarCost`、`pgr_aStarCostMatrix`

### 双向算法

双向变体从两端同时搜索：

- `pgr_bdDijkstra`、`pgr_bdDijkstraCost`、`pgr_bdDijkstraCostMatrix`
- `pgr_bdAstar`、`pgr_bdAstarCost`、`pgr_bdAstarCostMatrix`

```sql
SELECT * FROM pgr_bdDijkstra(
  'SELECT id, source, target, cost, reverse_cost FROM edges',
  6, 10);
```

### K 条最短路径（Yen 算法）

查找两个顶点之间的 K 条最短路径：

```sql
pgr_KSP(Edges SQL, start_vid, end_vid, K, [directed, heap_paths])
```

返回：`(seq, path_id, path_seq, start_vid, end_vid, node, edge, cost, agg_cost)`

```sql
SELECT * FROM pgr_KSP(
  'SELECT id, source, target, cost, reverse_cost FROM edges',
  6, 17, 2);
```

### 行驶距离

查找给定距离内可达的所有顶点：

```sql
pgr_drivingDistance(Edges SQL, start_vid, distance, [directed])
pgr_drivingDistance(Edges SQL, start_vids, distance, [directed, equicost])
```

返回：`(seq, depth, start_vid, pred, node, edge, cost, agg_cost)`

```sql
SELECT * FROM pgr_drivingDistance(
  'SELECT id, source, target, cost, reverse_cost FROM edges',
  11, 3.0);
```

### 旅行商问题

**基于矩阵的 TSP：**

```sql
pgr_TSP(Matrix SQL, [start_id, end_id])
```

返回：`(seq, node, cost, agg_cost)`

```sql
SELECT * FROM pgr_TSP(
  $$SELECT * FROM pgr_dijkstraCostMatrix(
    'SELECT id, source, target, cost, reverse_cost FROM edges',
    ARRAY[1, 3, 5, 6, 7, 8, 9, 10, 11, 15, 16, 17],
    directed => false)$$,
  start_id => 1);
```

**欧几里得 TSP**（直接使用坐标）：

```sql
pgr_TSPeuclidean(Coordinates SQL, [start_id, end_id])
```

### 网络流

计算最大流及相关属性：

```sql
-- 最大流
pgr_maxFlow(Edges SQL, source, sink)

-- 特定算法
pgr_boykovKolmogorov(Edges SQL, source, sink)
pgr_edmondsKarp(Edges SQL, source, sink)
pgr_pushRelabel(Edges SQL, source, sink)

-- 边不相交路径
pgr_edgeDisjointPaths(Edges SQL, source, sink)

-- 最大基数匹配
pgr_maxCardinalityMatch(Edges SQL, [directed])
```

网络流的边 SQL 使用 `capacity` 和 `reverse_capacity` 替代 `cost`/`reverse_cost`。

### 生成树

**Kruskal 算法：**

```sql
pgr_kruskal(Edges SQL)         -- 最小生成树
pgr_kruskalBFS(Edges SQL, root_vid, [max_depth])
pgr_kruskalDFS(Edges SQL, root_vid, [max_depth])
pgr_kruskalDD(Edges SQL, root_vid, distance)
```

**Prim 算法：**

```sql
pgr_prim(Edges SQL)            -- 最小生成树
pgr_primBFS(Edges SQL, root_vid, [max_depth])
pgr_primDFS(Edges SQL, root_vid, [max_depth])
pgr_primDD(Edges SQL, root_vid, distance)
```

### 图组件

```sql
-- 连通分量（无向）
pgr_connectedComponents(Edges SQL)

-- 强连通分量（有向）
pgr_strongComponents(Edges SQL)

-- 双连通分量
pgr_biconnectedComponents(Edges SQL)

-- 关节点（割点）
pgr_articulationPoints(Edges SQL)

-- 桥（割边）
pgr_bridges(Edges SQL)
```

### 转弯限制最短路径（TRSP）

带禁止路径限制的路由：

```sql
pgr_trsp(Edges SQL, Restrictions SQL, start_vid, end_vid, [directed])
pgr_trspVia(Edges SQL, Restrictions SQL, via_vertices, [directed, strict, U_turn_on_edge])
pgr_trsp_withPoints(Edges SQL, Restrictions SQL, Points SQL, start_pid, end_pid, [options])
```

限制条件 SQL 格式：

| 列 | 类型 | 说明 |
|----|------|------|
| `path` | ARRAY[ANY-INTEGER] | 禁止的边 ID 序列 |
| `cost` | ANY-NUMERICAL | 禁止路径的代价 |

### WithPoints - 任意位置路由

在边上任意点（不仅是顶点）之间路由：

```sql
pgr_withPoints(Edges SQL, Points SQL, start_pid, end_pid, [options])
pgr_withPointsCost(Edges SQL, Points SQL, start_pid, end_pid, [options])
pgr_withPointsCostMatrix(Edges SQL, Points SQL, pids, [options])
pgr_withPointsKSP(Edges SQL, Points SQL, start_pid, end_pid, K, [options])
pgr_withPointsDD(Edges SQL, Points SQL, start_pid, distance, [options])
```

点 SQL 格式：

| 列 | 类型 | 默认值 | 说明 |
|----|------|--------|------|
| `pid` | ANY-INTEGER | | 点标识符 |
| `edge_id` | ANY-INTEGER | | 最近的边 |
| `fraction` | ANY-NUMERICAL | | 在边上的位置（0-1） |
| `side` | CHAR | `b` | `r`(右侧)、`l`(左侧)、`b`(两侧) |

### 图压缩

通过压缩顶点简化图：

```sql
pgr_contraction(Edges SQL, contraction_order, [options])
```

### 实用函数

```sql
-- 从边数据中提取顶点
pgr_extractVertices(Edges SQL)

-- 查找点附近的边
pgr_findCloseEdges(Edges SQL, point, tolerance, [options])

-- 分离交叉几何体
pgr_separateCrossing(Edges SQL)

-- 分离相切几何体
pgr_separateTouching(Edges SQL)

-- 版本信息
pgr_version()
pgr_full_version()
```

--------

## 使用几何体

### 构建路由拓扑

从空间边中提取顶点并构建拓扑：

```sql
-- 从边几何体中提取顶点
SELECT * INTO vertices
FROM pgr_extractVertices('SELECT id, geom FROM edges ORDER BY id');

-- 设置起始顶点
UPDATE edges AS e
SET source = v.id, x1 = x, y1 = y
FROM vertices AS v
WHERE ST_StartPoint(e.geom) = v.geom;

-- 设置终止顶点
UPDATE edges AS e
SET target = v.id, x2 = x, y2 = y
FROM vertices AS v
WHERE ST_EndPoint(e.geom) = v.geom;
```

### 基于几何体长度设置代价

```sql
UPDATE edges SET
  cost = sign(cost) * ST_Length(geom),
  reverse_cost = sign(reverse_cost) * ST_Length(geom);
```

### 获取路径几何体

将路由结果与边几何体结合：

```sql
SELECT seq, node, edge, cost, agg_cost, geom
FROM pgr_dijkstra(
  'SELECT id, source, target, cost, reverse_cost FROM edges',
  6, 10
) AS r
LEFT JOIN edges AS e ON r.edge = e.id;
```

--------

## 性能优化

将查询限制在感兴趣的区域内，减少处理的边数：

```sql
SELECT * FROM pgr_dijkstra($$
  SELECT id, source, target, cost, reverse_cost
  FROM edges
  WHERE geom && (
    SELECT ST_Buffer(ST_Union(geom), 1)
    FROM edges WHERE source IN (7) OR target IN (8))$$,
  7, 8);
```

--------

## 全对最短路径

用于计算所有顶点对之间的距离：

```sql
-- Floyd-Warshall（不需要边 ID）
pgr_floydWarshall(Edges SQL, [directed])

-- Johnson（不需要边 ID）
pgr_johnson(Edges SQL, [directed])
```

返回：`(start_vid, end_vid, agg_cost)`

```sql
SELECT * FROM pgr_floydWarshall(
  'SELECT id, source, target, cost, reverse_cost FROM edges');
```
