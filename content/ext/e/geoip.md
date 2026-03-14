---
title: "geoip"
linkTitle: "geoip"
description: "IP 地理位置扩展（围绕 MaxMind GeoLite 数据集的包装器）"
weight: 1560
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tvondra/geoip">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tvondra/geoip</div>
    <div class="ext-card__desc">https://github.com/tvondra/geoip</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/geoip-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">geoip-0.3.0.tar.gz</div>
    <div class="ext-card__desc">geoip-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`geoip`**](/ext/e/geoip) | `0.3.0` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1560  | [**`geoip`**](/ext/e/geoip) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `geoip` |
{.ext-table}

| **相关扩展** | [`ip4r`](/ext/e/ip4r) [`postgis`](/ext/e/postgis) [`tzf`](/ext/e/tzf) [`country`](/ext/e/country) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> no pg17 on el9, no legacy branch on el8


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `geoip` | `ip4r` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `geoip_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-geoip` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 2 | AVAIL PIGSTY 0.3.0 2 |
| el8.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 2 | AVAIL PIGSTY 0.3.0 2 |
| el9.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 2 | AVAIL PIGSTY 0.3.0 2 |
| el9.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 2 | AVAIL PIGSTY 0.3.0 2 |
| el10.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 | AVAIL PIGSTY 0.3.0 1 |
@ el8.x86_64 18 geoip_18 geoip_18-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/geoip_18-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 geoip_18 geoip_18-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/geoip_18-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 geoip_18 geoip_18-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/geoip_18-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 geoip_18 geoip_18-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/geoip_18-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 geoip_18 geoip_18-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/geoip_18-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 geoip_18 geoip_18-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/geoip_18-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-geoip postgresql-18-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-18-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-geoip postgresql-18-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-18-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-geoip postgresql-18-geoip_0.3.0-1PIGSTY~trixie_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-18-geoip_0.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-geoip postgresql-18-geoip_0.3.0-1PIGSTY~trixie_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-18-geoip_0.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-geoip postgresql-18-geoip_0.3.0-1PIGSTY~jammy_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-18-geoip_0.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-geoip postgresql-18-geoip_0.3.0-1PIGSTY~jammy_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-18-geoip_0.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-geoip postgresql-18-geoip_0.3.0-1PIGSTY~noble_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-18-geoip_0.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-geoip postgresql-18-geoip_0.3.0-1PIGSTY~noble_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-18-geoip_0.3.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 geoip_17 geoip_17-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/geoip_17-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 geoip_17 geoip_17-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/geoip_17-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 geoip_17 geoip_17-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/geoip_17-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 geoip_17 geoip_17-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/geoip_17-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 geoip_17 geoip_17-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/geoip_17-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 geoip_17 geoip_17-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/geoip_17-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-geoip postgresql-17-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-17-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-geoip postgresql-17-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-17-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-geoip postgresql-17-geoip_0.3.0-1PIGSTY~trixie_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-17-geoip_0.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-geoip postgresql-17-geoip_0.3.0-1PIGSTY~trixie_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-17-geoip_0.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-geoip postgresql-17-geoip_0.3.0-1PIGSTY~jammy_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-17-geoip_0.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-geoip postgresql-17-geoip_0.3.0-1PIGSTY~jammy_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-17-geoip_0.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-geoip postgresql-17-geoip_0.3.0-1PIGSTY~noble_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-17-geoip_0.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-geoip postgresql-17-geoip_0.3.0-1PIGSTY~noble_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-17-geoip_0.3.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 geoip_16 geoip_16-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/geoip_16-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 geoip_16 geoip_16-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/geoip_16-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 geoip_16 geoip_16-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/geoip_16-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 geoip_16 geoip_16-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/geoip_16-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 geoip_16 geoip_16-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/geoip_16-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 geoip_16 geoip_16-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/geoip_16-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-geoip postgresql-16-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-16-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-geoip postgresql-16-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-16-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-geoip postgresql-16-geoip_0.3.0-1PIGSTY~trixie_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-16-geoip_0.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-geoip postgresql-16-geoip_0.3.0-1PIGSTY~trixie_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-16-geoip_0.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-geoip postgresql-16-geoip_0.3.0-1PIGSTY~jammy_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-16-geoip_0.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-geoip postgresql-16-geoip_0.3.0-1PIGSTY~jammy_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-16-geoip_0.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-geoip postgresql-16-geoip_0.3.0-1PIGSTY~noble_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-16-geoip_0.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-geoip postgresql-16-geoip_0.3.0-1PIGSTY~noble_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-16-geoip_0.3.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 geoip_15 geoip_15-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/geoip_15-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 geoip_15 geoip_15-0.2.4-3.rhel8.noarch.rpm pgdg 0.2.4 11.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/geoip_15-0.2.4-3.rhel8.noarch.rpm
@ el8.aarch64 15 geoip_15 geoip_15-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/geoip_15-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 geoip_15 geoip_15-0.2.4-3.rhel8.noarch.rpm pgdg 0.2.4 11.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/geoip_15-0.2.4-3.rhel8.noarch.rpm
@ el9.x86_64 15 geoip_15 geoip_15-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/geoip_15-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 geoip_15 geoip_15-0.2.4-3.rhel9.noarch.rpm pgdg 0.2.4 11.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/geoip_15-0.2.4-3.rhel9.noarch.rpm
@ el9.aarch64 15 geoip_15 geoip_15-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/geoip_15-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 geoip_15 geoip_15-0.2.4-3.rhel9.noarch.rpm pgdg 0.2.4 10.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/geoip_15-0.2.4-3.rhel9.noarch.rpm
@ el10.x86_64 15 geoip_15 geoip_15-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/geoip_15-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 geoip_15 geoip_15-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/geoip_15-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-geoip postgresql-15-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-15-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-geoip postgresql-15-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-15-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-geoip postgresql-15-geoip_0.3.0-1PIGSTY~trixie_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-15-geoip_0.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-geoip postgresql-15-geoip_0.3.0-1PIGSTY~trixie_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-15-geoip_0.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-geoip postgresql-15-geoip_0.3.0-1PIGSTY~jammy_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-15-geoip_0.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-geoip postgresql-15-geoip_0.3.0-1PIGSTY~jammy_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-15-geoip_0.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-geoip postgresql-15-geoip_0.3.0-1PIGSTY~noble_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-15-geoip_0.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-geoip postgresql-15-geoip_0.3.0-1PIGSTY~noble_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-15-geoip_0.3.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 geoip_14 geoip_14-0.3.0-1PIGSTY.el8.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/geoip_14-0.3.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 geoip_14 geoip_14-0.2.4-3.rhel8.noarch.rpm pgdg 0.2.4 11.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/geoip_14-0.2.4-3.rhel8.noarch.rpm
@ el8.aarch64 14 geoip_14 geoip_14-0.3.0-1PIGSTY.el8.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/geoip_14-0.3.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 geoip_14 geoip_14-0.2.4-3.rhel8.noarch.rpm pgdg 0.2.4 11.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/geoip_14-0.2.4-3.rhel8.noarch.rpm
@ el9.x86_64 14 geoip_14 geoip_14-0.3.0-1PIGSTY.el9.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/geoip_14-0.3.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 geoip_14 geoip_14-0.2.4-3.rhel9.noarch.rpm pgdg 0.2.4 11.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/geoip_14-0.2.4-3.rhel9.noarch.rpm
@ el9.aarch64 14 geoip_14 geoip_14-0.3.0-1PIGSTY.el9.aarch64.rpm pigsty 0.3.0 11.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/geoip_14-0.3.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 geoip_14 geoip_14-0.2.4-3.rhel9.noarch.rpm pgdg 0.2.4 10.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/geoip_14-0.2.4-3.rhel9.noarch.rpm
@ el10.x86_64 14 geoip_14 geoip_14-0.3.0-1PIGSTY.el10.x86_64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/geoip_14-0.3.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 geoip_14 geoip_14-0.3.0-1PIGSTY.el10.aarch64.rpm pigsty 0.3.0 11.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/geoip_14-0.3.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-geoip postgresql-14-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-14-geoip_0.3.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-geoip postgresql-14-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/g/geoip/postgresql-14-geoip_0.3.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-geoip postgresql-14-geoip_0.3.0-1PIGSTY~trixie_amd64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-14-geoip_0.3.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-geoip postgresql-14-geoip_0.3.0-1PIGSTY~trixie_arm64.deb pigsty 0.3.0 6.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/g/geoip/postgresql-14-geoip_0.3.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-geoip postgresql-14-geoip_0.3.0-1PIGSTY~jammy_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-14-geoip_0.3.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-geoip postgresql-14-geoip_0.3.0-1PIGSTY~jammy_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/g/geoip/postgresql-14-geoip_0.3.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-geoip postgresql-14-geoip_0.3.0-1PIGSTY~noble_amd64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-14-geoip_0.3.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-geoip postgresql-14-geoip_0.3.0-1PIGSTY~noble_arm64.deb pigsty 0.3.0 6.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/g/geoip/postgresql-14-geoip_0.3.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `geoip` 扩展的 RPM / DEB 包：

```bash
pig build pkg geoip         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `geoip` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install geoip;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y geoip -v 18  # PG 18
pig ext install -y geoip -v 17  # PG 17
pig ext install -y geoip -v 16  # PG 16
pig ext install -y geoip -v 15  # PG 15
pig ext install -y geoip -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y geoip_18       # PG 18
dnf install -y geoip_17       # PG 17
dnf install -y geoip_16       # PG 16
dnf install -y geoip_15       # PG 15
dnf install -y geoip_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-geoip   # PG 18
apt install -y postgresql-17-geoip   # PG 17
apt install -y postgresql-16-geoip   # PG 16
apt install -y postgresql-15-geoip   # PG 15
apt install -y postgresql-14-geoip   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION geoip CASCADE;  -- 依赖: ip4r
```



## 用法

> [geoip: 基于 IP 的 PostgreSQL 地理定位](https://github.com/tvondra/geoip)

该扩展提供基于 IP 的地理定位——你提供一个 IPv4 或 IPv6 地址，扩展会查找国家、城市、GPS 坐标、ASN 等信息。它需要 `ip4r` 扩展和来自 [MaxMind](https://www.maxmind.com) 的 GeoLite2 数据。

```sql
CREATE EXTENSION ip4r;
CREATE EXTENSION geoip;
```

### 函数

| 函数 | 说明 |
|------|------|
| `geoip_country_code(ip4\|ip6)` | 返回国家代码（2 字符） |
| `geoip_country(ip4\|ip6)` | 返回所有国家信息（代码、名称、网络） |
| `geoip_city_location(ip4\|ip6)` | 仅返回位置 ID（INT） |
| `geoip_city(ip4\|ip6)` | 返回所有城市信息（GPS、邮编等） |
| `geoip_asn(ip4\|ip6)` | 返回 ASN 名称和 IP 范围 |

### 示例

```sql
SELECT geoip_country_code('78.45.133.255'::ip4);
-- CZ

SELECT * FROM geoip.geoip_city('78.45.133.255'::ip4);
--  geoname_id | country_iso_code | city_name | postal_code | ...
-- ------------+------------------+-----------+-------------+----
--     3066399 | CZ               | Sardice   | 696 13      | ...

SELECT * FROM geoip.geoip_country('78.45.133.255'::ip4);
--     network     | country_iso_code | country_name
-- ----------------+------------------+--------------
--  78.45.128.0/17 | CZ               | Czechia

SELECT * FROM geoip.geoip_asn('78.45.133.255'::ip4);
--    network    | asn_number |      asn_name
-- --------------+------------+---------------------
--  78.44.0.0/15 |       6830 | Liberty Global B.V.
```


## 加载数据

该扩展需要来自 MaxMind 的 GeoLite2 CSV 数据。从 [MaxMind GeoLite2](https://dev.maxmind.com/geoip/geoip2/geolite2/) 下载 City、Country 和 ASN 数据集的 CSV 格式，然后加载：

```bash
cat GeoLite2-Country-Locations-en.csv | \
  psql $DBNAME -c 'COPY geoip.geoip_country_locations FROM stdin WITH (FORMAT CSV, HEADER)'

cat GeoLite2-Country-Blocks-IPv4.csv | \
  psql $DBNAME -c 'COPY geoip.geoip_country_blocks FROM stdin WITH (FORMAT CSV, HEADER)'

cat GeoLite2-Country-Blocks-IPv6.csv | \
  psql $DBNAME -c 'COPY geoip.geoip_country_blocks FROM stdin WITH (FORMAT CSV, HEADER)'

cat GeoLite2-City-Locations-en.csv | \
  psql $DBNAME -c 'COPY geoip.geoip_city_locations FROM stdin WITH (FORMAT CSV, HEADER)'

cat GeoLite2-City-Blocks-IPv4.csv | \
  psql $DBNAME -c 'COPY geoip.geoip_city_blocks FROM stdin WITH (FORMAT CSV, HEADER)'

cat GeoLite2-City-Blocks-IPv6.csv | \
  psql $DBNAME -c 'COPY geoip.geoip_city_blocks FROM stdin WITH (FORMAT CSV, HEADER)'

cat GeoLite2-ASN-Blocks-IPv4.csv | \
  psql $DBNAME -c 'COPY geoip.geoip_asn_blocks FROM stdin WITH (FORMAT CSV, HEADER)'

cat GeoLite2-ASN-Blocks-IPv6.csv | \
  psql $DBNAME -c 'COPY geoip.geoip_asn_blocks FROM stdin WITH (FORMAT CSV, HEADER)'
```

"locations" 文件有多种语言版本——选择适合你的即可。
