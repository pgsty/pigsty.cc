---
title: "address_standardizer"
linkTitle: "address_standardizer"
description: "地址标准化函数。"
weight: 1505
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgis/address_standardizer">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgis/address_standardizer</div>
    <div class="ext-card__desc">https://github.com/postgis/address_standardizer</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`address_standardizer`**](/ext/e/address_standardizer) | `3.7` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1505  | [**`address_standardizer`**](/ext/e/address_standardizer) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1506  | [**`address_standardizer_data_us`**](/ext/e/address_standardizer_data_us) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`nominatim_fdw`](/ext/e/nominatim_fdw) [`geoip`](/ext/e/geoip) [`country`](/ext/e/country) [`tzf`](/ext/e/tzf) [`pg_geohash`](/ext/e/pg_geohash) [`ogr_fdw`](/ext/e/ogr_fdw) [`addressing_dictionary`](/ext/e/addressing_dictionary) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Standalone since PostGIS 3.7; control 3.7; PGDG package 3.7.0; no local recipe.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.7` | {{< pgvers "18,17,16,15,14" >}} | `address_standardizer` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.7.0` | {{< pgvers "18,17,16,15,14" >}} | `address_standardizer_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.7.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-address-standardizer` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| el9.aarch64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| el10.x86_64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| el10.aarch64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| d12.x86_64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| d12.aarch64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| d13.x86_64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| d13.aarch64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| u22.x86_64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| u22.aarch64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| u24.x86_64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| u24.aarch64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| u26.x86_64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
| u26.aarch64 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 | AVAIL PGDG 3.7.0 1 |
@ el9.x86_64 18 address_standardizer_18 address_standardizer_18-3.7.0-4PGDG.rhel9.8.x86_64.rpm pgdg 3.7.0 216.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/address_standardizer_18-3.7.0-4PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 18 address_standardizer_18 address_standardizer_18-3.7.0-4PGDG.rhel9.8.aarch64.rpm pgdg 3.7.0 214.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/address_standardizer_18-3.7.0-4PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 18 address_standardizer_18 address_standardizer_18-3.7.0-4PGDG.rhel10.2.x86_64.rpm pgdg 3.7.0 216.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/address_standardizer_18-3.7.0-4PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 18 address_standardizer_18 address_standardizer_18-3.7.0-4PGDG.rhel10.2.aarch64.rpm pgdg 3.7.0 215.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/address_standardizer_18-3.7.0-4PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb pgdg 3.7.0 528.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb pgdg 3.7.0 524.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb pgdg 3.7.0 529.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb pgdg 3.7.0 526.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb pgdg 3.7.0 526.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb pgdg 3.7.0 523.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb pgdg 3.7.0 523.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb pgdg 3.7.0 520.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb pgdg 3.7.0 522.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-address-standardizer postgresql-18-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb pgdg 3.7.0 519.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-18-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb
@ el9.x86_64 17 address_standardizer_17 address_standardizer_17-3.7.0-4PGDG.rhel9.8.x86_64.rpm pgdg 3.7.0 215.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/address_standardizer_17-3.7.0-4PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 17 address_standardizer_17 address_standardizer_17-3.7.0-4PGDG.rhel9.8.aarch64.rpm pgdg 3.7.0 214.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/address_standardizer_17-3.7.0-4PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 17 address_standardizer_17 address_standardizer_17-3.7.0-4PGDG.rhel10.2.x86_64.rpm pgdg 3.7.0 216.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/address_standardizer_17-3.7.0-4PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 17 address_standardizer_17 address_standardizer_17-3.7.0-4PGDG.rhel10.2.aarch64.rpm pgdg 3.7.0 215.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/address_standardizer_17-3.7.0-4PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb pgdg 3.7.0 528.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb pgdg 3.7.0 524.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb pgdg 3.7.0 529.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb pgdg 3.7.0 526.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb pgdg 3.7.0 546.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb pgdg 3.7.0 542.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb pgdg 3.7.0 523.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb pgdg 3.7.0 520.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb pgdg 3.7.0 522.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-address-standardizer postgresql-17-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb pgdg 3.7.0 518.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-17-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb
@ el9.x86_64 16 address_standardizer_16 address_standardizer_16-3.7.0-4PGDG.rhel9.8.x86_64.rpm pgdg 3.7.0 215.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/address_standardizer_16-3.7.0-4PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 16 address_standardizer_16 address_standardizer_16-3.7.0-4PGDG.rhel9.8.aarch64.rpm pgdg 3.7.0 214.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/address_standardizer_16-3.7.0-4PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 16 address_standardizer_16 address_standardizer_16-3.7.0-4PGDG.rhel10.2.x86_64.rpm pgdg 3.7.0 216.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/address_standardizer_16-3.7.0-4PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 16 address_standardizer_16 address_standardizer_16-3.7.0-4PGDG.rhel10.2.aarch64.rpm pgdg 3.7.0 215.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/address_standardizer_16-3.7.0-4PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb pgdg 3.7.0 528.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb pgdg 3.7.0 524.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb pgdg 3.7.0 529.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb pgdg 3.7.0 526.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb pgdg 3.7.0 545.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb pgdg 3.7.0 542.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb pgdg 3.7.0 523.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb pgdg 3.7.0 520.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb pgdg 3.7.0 522.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-address-standardizer postgresql-16-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb pgdg 3.7.0 518.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-16-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb
@ el9.x86_64 15 address_standardizer_15 address_standardizer_15-3.7.0-4PGDG.rhel9.8.x86_64.rpm pgdg 3.7.0 224.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/address_standardizer_15-3.7.0-4PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 15 address_standardizer_15 address_standardizer_15-3.7.0-4PGDG.rhel9.8.aarch64.rpm pgdg 3.7.0 222.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/address_standardizer_15-3.7.0-4PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 15 address_standardizer_15 address_standardizer_15-3.7.0-4PGDG.rhel10.2.x86_64.rpm pgdg 3.7.0 225.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/address_standardizer_15-3.7.0-4PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 15 address_standardizer_15 address_standardizer_15-3.7.0-4PGDG.rhel10.2.aarch64.rpm pgdg 3.7.0 222.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/address_standardizer_15-3.7.0-4PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb pgdg 3.7.0 528.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb pgdg 3.7.0 525.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb pgdg 3.7.0 529.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb pgdg 3.7.0 527.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb pgdg 3.7.0 551.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb pgdg 3.7.0 548.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb pgdg 3.7.0 528.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb pgdg 3.7.0 525.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb pgdg 3.7.0 527.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-address-standardizer postgresql-15-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb pgdg 3.7.0 524.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-15-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb
@ el9.x86_64 14 address_standardizer_14 address_standardizer_14-3.7.0-4PGDG.rhel9.8.x86_64.rpm pgdg 3.7.0 224.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/address_standardizer_14-3.7.0-4PGDG.rhel9.8.x86_64.rpm
@ el9.aarch64 14 address_standardizer_14 address_standardizer_14-3.7.0-4PGDG.rhel9.8.aarch64.rpm pgdg 3.7.0 222.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/address_standardizer_14-3.7.0-4PGDG.rhel9.8.aarch64.rpm
@ el10.x86_64 14 address_standardizer_14 address_standardizer_14-3.7.0-4PGDG.rhel10.2.x86_64.rpm pgdg 3.7.0 224.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/address_standardizer_14-3.7.0-4PGDG.rhel10.2.x86_64.rpm
@ el10.aarch64 14 address_standardizer_14 address_standardizer_14-3.7.0-4PGDG.rhel10.2.aarch64.rpm pgdg 3.7.0 222.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/address_standardizer_14-3.7.0-4PGDG.rhel10.2.aarch64.rpm
@ d12.x86_64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb pgdg 3.7.0 528.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb pgdg 3.7.0 525.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb pgdg 3.7.0 529.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb pgdg 3.7.0 527.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb pgdg 3.7.0 550.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb pgdg 3.7.0 547.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb pgdg 3.7.0 528.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb pgdg 3.7.0 525.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb pgdg 3.7.0 527.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-address-standardizer postgresql-14-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb pgdg 3.7.0 524.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/a/address-standardizer/postgresql-14-address-standardizer_3.7.0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `address_standardizer` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install address_standardizer;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y address_standardizer -v 18  # PG 18
pig ext install -y address_standardizer -v 17  # PG 17
pig ext install -y address_standardizer -v 16  # PG 16
pig ext install -y address_standardizer -v 15  # PG 15
pig ext install -y address_standardizer -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y address_standardizer_18       # PG 18
dnf install -y address_standardizer_17       # PG 17
dnf install -y address_standardizer_16       # PG 16
dnf install -y address_standardizer_15       # PG 15
dnf install -y address_standardizer_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-address-standardizer   # PG 18
apt install -y postgresql-17-address-standardizer   # PG 17
apt install -y postgresql-16-address-standardizer   # PG 16
apt install -y postgresql-15-address-standardizer   # PG 15
apt install -y postgresql-14-address-standardizer   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION address_standardizer;
```




## 用法

> [Address Standardizer：PostGIS 的地址解析与标准化](https://github.com/postgis/postgis)

Address Standardizer 是一个 PostGIS 扩展，使用可配置的词典、语法和规则表将单行地址字符串解析为结构化形式。它是 TIGER 地理编码器中内置 `normalize_address` 函数的更灵活替代方案。

- [Address Standardizer 参考手册](https://postgis.net/docs/Extras.html#Address_Standardizer)

### 安装

```sql
CREATE EXTENSION address_standardizer;
```

--------

## 标准化地址

核心函数接收一个地址字符串和三个表引用（lex、gaz、rules）：

```sql
SELECT *
FROM standardize_address(
    'us_lex',        -- 词典表
    'us_gaz',        -- 地名表
    'us_rules',      -- 规则表
    '1600 Pennsylvania Ave NW, Washington, DC 20500'
);
```

返回结果包含以下结构化字段：

| 字段 | 描述 |
|------|------|
| `building` | 建筑名称或标识 |
| `house_num` | 门牌号 |
| `predir` | 前缀方向（N、S、E、W） |
| `qual` | 限定符 |
| `pretype` | 前缀类型 |
| `name` | 街道名称 |
| `suftype` | 后缀类型（St、Ave、Blvd） |
| `sufdir` | 后缀方向 |
| `ruralroute` | 乡村路线 |
| `extra` | 附加信息 |
| `city` | 城市名 |
| `state` | 州 |
| `country` | 国家 |
| `postcode` | 邮政编码 |
| `box` | 邮政信箱 |
| `unit` | 单元/公寓号 |

--------

## 词典、地名和规则表

标准化器由三个用户可配置的表驱动：

**词典（lex）** -- 将输入词元映射为标准化形式和词元类别：

```sql
CREATE TABLE us_lex (
    id serial PRIMARY KEY,
    seq integer,
    word text,
    stdword text,
    token integer
);
```

**地名表（gaz）** -- 将地名（城市、州）映射为标准形式：

```sql
CREATE TABLE us_gaz (
    id serial PRIMARY KEY,
    seq integer,
    word text,
    stdword text,
    token integer
);
```

**规则（rules）** -- 定义地址解析的语法规则：

```sql
CREATE TABLE us_rules (
    id serial PRIMARY KEY,
    rule text
);
```

对于美国地址，`address_standardizer_data_us` 扩展提供了这些表的预置数据。
