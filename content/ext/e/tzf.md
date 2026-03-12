---
title: "tzf"
linkTitle: "tzf"
description: "快速根据GPS经纬度坐标查找时区"
weight: 1680
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ringsaturn/pg-tzf">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ringsaturn/pg-tzf</div>
    <div class="ext-card__desc">https://github.com/ringsaturn/pg-tzf</div>
  </a>
  <a class="ext-card ext-card--source" href="pg-tzf-0.2.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-tzf-0.2.3.tar.gz</div>
    <div class="ext-card__desc">pg-tzf-0.2.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_tzf`**](/ext/e/tzf) | `0.2.3` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1680  | [**`tzf`**](/ext/e/tzf) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`geoip`](/ext/e/geoip) [`pg_cron`](/ext/e/pg_cron) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_tzf` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_tzf_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-tzf` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 | AVAIL PIGSTY 0.2.3 1 |
@ el8.x86_64 18 pg_tzf_18 pg_tzf_18-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tzf_18-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_tzf_18 pg_tzf_18-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 3.4MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tzf_18-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_tzf_18 pg_tzf_18-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 3.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tzf_18-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_tzf_18 pg_tzf_18-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tzf_18-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_tzf_18 pg_tzf_18-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 3.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tzf_18-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_tzf_18 pg_tzf_18-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tzf_18-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-tzf postgresql-18-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-18-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-tzf postgresql-18-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.1MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-18-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-tzf postgresql-18-tzf_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-18-tzf_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-tzf postgresql-18-tzf_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.1MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-18-tzf_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-tzf postgresql-18-tzf_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-18-tzf_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-tzf postgresql-18-tzf_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-18-tzf_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-tzf postgresql-18-tzf_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-18-tzf_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-tzf postgresql-18-tzf_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-18-tzf_0.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_tzf_17 pg_tzf_17-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tzf_17-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_tzf_17 pg_tzf_17-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 3.4MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tzf_17-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_tzf_17 pg_tzf_17-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 3.6MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tzf_17-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_tzf_17 pg_tzf_17-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tzf_17-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_tzf_17 pg_tzf_17-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 3.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tzf_17-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_tzf_17 pg_tzf_17-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tzf_17-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-tzf postgresql-17-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-17-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-tzf postgresql-17-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.1MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-17-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-tzf postgresql-17-tzf_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-17-tzf_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-tzf postgresql-17-tzf_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.1MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-17-tzf_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-tzf postgresql-17-tzf_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-17-tzf_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-tzf postgresql-17-tzf_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-17-tzf_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-tzf postgresql-17-tzf_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-17-tzf_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-tzf postgresql-17-tzf_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-17-tzf_0.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_tzf_16 pg_tzf_16-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tzf_16-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_tzf_16 pg_tzf_16-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 3.4MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tzf_16-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_tzf_16 pg_tzf_16-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 3.6MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tzf_16-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_tzf_16 pg_tzf_16-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tzf_16-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_tzf_16 pg_tzf_16-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 3.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tzf_16-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_tzf_16 pg_tzf_16-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tzf_16-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-tzf postgresql-16-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-16-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-tzf postgresql-16-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.1MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-16-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-tzf postgresql-16-tzf_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-16-tzf_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-tzf postgresql-16-tzf_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.1MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-16-tzf_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-tzf postgresql-16-tzf_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-16-tzf_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-tzf postgresql-16-tzf_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-16-tzf_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-tzf postgresql-16-tzf_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-16-tzf_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-tzf postgresql-16-tzf_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-16-tzf_0.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_tzf_15 pg_tzf_15-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tzf_15-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_tzf_15 pg_tzf_15-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 3.4MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tzf_15-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_tzf_15 pg_tzf_15-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 3.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tzf_15-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_tzf_15 pg_tzf_15-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tzf_15-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_tzf_15 pg_tzf_15-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 3.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tzf_15-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_tzf_15 pg_tzf_15-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tzf_15-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-tzf postgresql-15-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-15-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-tzf postgresql-15-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-15-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-tzf postgresql-15-tzf_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-15-tzf_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-tzf postgresql-15-tzf_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.1MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-15-tzf_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-tzf postgresql-15-tzf_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 3.9MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-15-tzf_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-tzf postgresql-15-tzf_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-15-tzf_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-tzf postgresql-15-tzf_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-15-tzf_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-tzf postgresql-15-tzf_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-15-tzf_0.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_tzf_14 pg_tzf_14-0.2.3-1PIGSTY.el8.x86_64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_tzf_14-0.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_tzf_14 pg_tzf_14-0.2.3-1PIGSTY.el8.aarch64.rpm pigsty 0.2.3 3.4MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_tzf_14-0.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_tzf_14 pg_tzf_14-0.2.3-1PIGSTY.el9.x86_64.rpm pigsty 0.2.3 3.7MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_tzf_14-0.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_tzf_14 pg_tzf_14-0.2.3-1PIGSTY.el9.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_tzf_14-0.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_tzf_14 pg_tzf_14-0.2.3-1PIGSTY.el10.x86_64.rpm pigsty 0.2.3 3.7MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_tzf_14-0.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_tzf_14 pg_tzf_14-0.2.3-1PIGSTY.el10.aarch64.rpm pigsty 0.2.3 3.5MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_tzf_14-0.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-tzf postgresql-14-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-14-tzf_0.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-tzf postgresql-14-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb pigsty 0.2.3 3.1MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/t/tzf/postgresql-14-tzf_0.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-tzf postgresql-14-tzf_0.2.3-1PIGSTY~trixie_amd64.deb pigsty 0.2.3 3.2MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-14-tzf_0.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-tzf postgresql-14-tzf_0.2.3-1PIGSTY~trixie_arm64.deb pigsty 0.2.3 3.1MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/t/tzf/postgresql-14-tzf_0.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-tzf postgresql-14-tzf_0.2.3-1PIGSTY~jammy_amd64.deb pigsty 0.2.3 3.8MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-14-tzf_0.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-tzf postgresql-14-tzf_0.2.3-1PIGSTY~jammy_arm64.deb pigsty 0.2.3 4.0MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/t/tzf/postgresql-14-tzf_0.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-tzf postgresql-14-tzf_0.2.3-1PIGSTY~noble_amd64.deb pigsty 0.2.3 3.7MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-14-tzf_0.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-tzf postgresql-14-tzf_0.2.3-1PIGSTY~noble_arm64.deb pigsty 0.2.3 3.6MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/t/tzf/postgresql-14-tzf_0.2.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_tzf` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_tzf         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_tzf` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_tzf;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_tzf -v 18  # PG 18
pig ext install -y pg_tzf -v 17  # PG 17
pig ext install -y pg_tzf -v 16  # PG 16
pig ext install -y pg_tzf -v 15  # PG 15
pig ext install -y pg_tzf -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_tzf_18       # PG 18
dnf install -y pg_tzf_17       # PG 17
dnf install -y pg_tzf_16       # PG 16
dnf install -y pg_tzf_15       # PG 15
dnf install -y pg_tzf_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-tzf   # PG 18
apt install -y postgresql-17-tzf   # PG 17
apt install -y postgresql-16-tzf   # PG 16
apt install -y postgresql-15-tzf   # PG 15
apt install -y postgresql-14-tzf   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION tzf;
```



## 用法

> [tzf: PostgreSQL 快速时区查找](https://github.com/ringsaturn/pg-tzf)

根据坐标查找时区名称。基于 [tzf-rs](https://github.com/ringsaturn/tzf-rs) 构建，使用来自 [timezone-boundary-builder](https://github.com/evansiroky/timezone-boundary-builder) 的时区边界数据。

```sql
CREATE EXTENSION tzf;
```

### 函数

根据坐标（经度、纬度）查找时区：

```sql
SELECT tzf_tzname(116.3883, 39.9289) AS timezone;
-- Asia/Shanghai
```

批量查找坐标的时区：

```sql
SELECT unnest(
  tzf_tzname_batch(
    ARRAY[-74.0060, -118.2437, 139.6917],
    ARRAY[40.7128, 34.0522, 35.6895]
  )
) AS timezones;
-- America/New_York
-- America/Los_Angeles
-- Asia/Tokyo
```

根据点查找时区：

```sql
SELECT tzf_tzname_point(point(-74.0060, 40.7128)) AS timezone;
-- America/New_York
```

批量查找点的时区：

```sql
SELECT unnest(
  tzf_tzname_batch_points(
    ARRAY[
      point(-74.0060, 40.7128),
      point(-118.2437, 34.0522),
      point(139.6917, 35.6895)
    ]
  )
) AS timezones;
-- America/New_York
-- America/Los_Angeles
-- Asia/Tokyo
```

### 性能

| 函数 | TPS | 备注 |
|------|-----|------|
| `tzf_tzname` | ~17,700 | 单坐标查找 |
| `tzf_tzname_point` | ~17,600 | 单点查找 |
| `tzf_tzname_batch` | ~51 | 1000 个一批 ≈ ~51,000 TPS |
| `tzf_tzname_batch_points` | ~32 | 1000 个一批 ≈ ~32,000 TPS |
