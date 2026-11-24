---
title: "mobilitydb"
linkTitle: "mobilitydb"
description: "MobilityDB 地理空间轨迹数据管理与分析平台"
weight: 1650
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/MobilityDB/MobilityDB">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">MobilityDB/MobilityDB</div>
    <div class="ext-card__desc">https://github.com/MobilityDB/MobilityDB</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/mobilitydb-1.3.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">mobilitydb-1.3.2.tar.gz</div>
    <div class="ext-card__desc">mobilitydb-1.3.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`mobilitydb`**](/ext/e/mobilitydb) | `1.3.2` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1650  | [**`mobilitydb`**](/ext/e/mobilitydb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 1651  | [**`mobilitydb_datagen`**](/ext/e/mobilitydb_datagen) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`h3`](/ext/e/h3) [`pgrouting`](/ext/e/pgrouting) [`postgis`](/ext/e/postgis) [`pg_polyline`](/ext/e/pg_polyline) [`q3c`](/ext/e/q3c) [`pg_sphere`](/ext/e/pg_sphere) [`pointcloud`](/ext/e/pointcloud) [`pg_geohash`](/ext/e/pg_geohash) [`qdgc`](/ext/e/qdgc) [`pg_eviltransform`](/ext/e/pg_eviltransform) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`mobilitydb_datagen`](/ext/e/mobilitydb_datagen) |
{.ext-table .ext-table--rel}


> RPM fixes input mutation; 1.2 to 1.3 needs backup/restore.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.2` | {{< pgvers "19,18,17,16,15" >}} | `mobilitydb` | `postgis` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.2` | {{< pgvers "19,18,17,16,15" >}} | `mobilitydb_$v` | `postgis37_$v` |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.2` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-mobilitydb` | `postgresql-$v-postgis-3` |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 |
| d12.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 |
| d12.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 |
| d13.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 |
| d13.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 |
| u22.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 2 | AVAIL PIGSTY 1.3.2 2 | AVAIL PIGSTY 1.3.2 2 |
| u22.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 1 | AVAIL PIGSTY 1.3.2 2 | AVAIL PIGSTY 1.3.2 2 | AVAIL PIGSTY 1.3.2 2 |
| u24.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 |
| u24.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 |
| u26.x86_64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 |
| u26.aarch64 | AVAIL PIGSTY 1.3.2 1 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 | AVAIL PGDG 1.3.2 4 |
@ el9.x86_64 19 mobilitydb_19 mobilitydb_19-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 692.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_19-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 mobilitydb_19 mobilitydb_19-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 677.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_19-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 mobilitydb_19 mobilitydb_19-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 707.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_19-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 mobilitydb_19 mobilitydb_19-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 683.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_19-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 716.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 648.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 717.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 658.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 667.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 657.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 664.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 661.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 661.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-mobilitydb postgresql-19-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 650.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-19-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 mobilitydb_18 mobilitydb_18-1.3.2-1PGSTY.el8.x86_64.rpm pigsty 1.3.2 790.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/mobilitydb_18-1.3.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 mobilitydb_18 mobilitydb_18-1.3.2-1PGSTY.el8.aarch64.rpm pigsty 1.3.2 737.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/mobilitydb_18-1.3.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 mobilitydb_18 mobilitydb_18-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 691.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_18-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 mobilitydb_18 mobilitydb_18-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 676.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_18-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 mobilitydb_18 mobilitydb_18-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 708.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_18-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 mobilitydb_18 mobilitydb_18-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 682.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_18-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1.pgdg12+1_amd64.deb pgdg 1.3.2 716.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 715.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-2.pgdg12+1_amd64.deb pgdg 1.3.1 717.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-1.pgdg12+1_amd64.deb pgdg 1.3.1 714.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1.pgdg12+1_arm64.deb pgdg 1.3.2 650.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 649.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-2.pgdg12+1_arm64.deb pgdg 1.3.1 649.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-1.pgdg12+1_arm64.deb pgdg 1.3.1 648.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1.pgdg13+1_amd64.deb pgdg 1.3.2 717.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 717.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-2.pgdg13+1_amd64.deb pgdg 1.3.1 718.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-1.pgdg13+1_amd64.deb pgdg 1.3.1 717.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1.pgdg13+1_arm64.deb pgdg 1.3.2 660.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 659.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-2.pgdg13+1_arm64.deb pgdg 1.3.1 660.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-1.pgdg13+1_arm64.deb pgdg 1.3.1 658.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 668.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 656.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1.pgdg24.04+1_amd64.deb pgdg 1.3.2 619.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 664.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-2.pgdg24.04+1_amd64.deb pgdg 1.3.1 619.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-1.pgdg24.04+1_amd64.deb pgdg 1.3.1 619.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1.pgdg24.04+1_arm64.deb pgdg 1.3.2 582.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 661.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-2.pgdg24.04+1_arm64.deb pgdg 1.3.1 581.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-1.pgdg24.04+1_arm64.deb pgdg 1.3.1 581.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1.pgdg26.04+1_amd64.deb pgdg 1.3.2 624.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 661.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-2.pgdg26.04+1_amd64.deb pgdg 1.3.1 624.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-1.pgdg26.04+1_amd64.deb pgdg 1.3.1 623.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1.pgdg26.04+1_arm64.deb pgdg 1.3.2 582.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 649.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-2.pgdg26.04+1_arm64.deb pgdg 1.3.1 581.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-mobilitydb postgresql-18-mobilitydb_1.3.1-1.pgdg26.04+1_arm64.deb pgdg 1.3.1 581.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-18-mobilitydb_1.3.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 mobilitydb_17 mobilitydb_17-1.3.2-1PGSTY.el8.x86_64.rpm pigsty 1.3.2 790.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/mobilitydb_17-1.3.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 mobilitydb_17 mobilitydb_17-1.3.2-1PGSTY.el8.aarch64.rpm pigsty 1.3.2 738.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/mobilitydb_17-1.3.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 mobilitydb_17 mobilitydb_17-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 691.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_17-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 mobilitydb_17 mobilitydb_17-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 676.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_17-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 mobilitydb_17 mobilitydb_17-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 708.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_17-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 mobilitydb_17 mobilitydb_17-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 683.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_17-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1.pgdg12+1_amd64.deb pgdg 1.3.2 716.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 716.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-2.pgdg12+1_amd64.deb pgdg 1.3.1 716.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-1.pgdg12+1_amd64.deb pgdg 1.3.1 716.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1.pgdg12+1_arm64.deb pgdg 1.3.2 649.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 649.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-2.pgdg12+1_arm64.deb pgdg 1.3.1 649.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-1.pgdg12+1_arm64.deb pgdg 1.3.1 649.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1.pgdg13+1_amd64.deb pgdg 1.3.2 717.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 717.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-2.pgdg13+1_amd64.deb pgdg 1.3.1 716.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-2.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-1.pgdg13+1_amd64.deb pgdg 1.3.1 716.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1.pgdg13+1_arm64.deb pgdg 1.3.2 660.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 658.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-2.pgdg13+1_arm64.deb pgdg 1.3.1 659.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-2.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-1.pgdg13+1_arm64.deb pgdg 1.3.1 658.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 666.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 574.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 660.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 535.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1.pgdg24.04+1_amd64.deb pgdg 1.3.2 619.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 666.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-2.pgdg24.04+1_amd64.deb pgdg 1.3.1 619.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-1.pgdg24.04+1_amd64.deb pgdg 1.3.1 619.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1.pgdg24.04+1_arm64.deb pgdg 1.3.2 581.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 661.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-2.pgdg24.04+1_arm64.deb pgdg 1.3.1 581.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-1.pgdg24.04+1_arm64.deb pgdg 1.3.1 581.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1.pgdg26.04+1_amd64.deb pgdg 1.3.2 623.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 661.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-2.pgdg26.04+1_amd64.deb pgdg 1.3.1 624.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-1.pgdg26.04+1_amd64.deb pgdg 1.3.1 623.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1.pgdg26.04+1_arm64.deb pgdg 1.3.2 581.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 649.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-2.pgdg26.04+1_arm64.deb pgdg 1.3.1 581.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-mobilitydb postgresql-17-mobilitydb_1.3.1-1.pgdg26.04+1_arm64.deb pgdg 1.3.1 581.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-17-mobilitydb_1.3.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 mobilitydb_16 mobilitydb_16-1.3.2-1PGSTY.el8.x86_64.rpm pigsty 1.3.2 790.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/mobilitydb_16-1.3.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 mobilitydb_16 mobilitydb_16-1.3.2-1PGSTY.el8.aarch64.rpm pigsty 1.3.2 738.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/mobilitydb_16-1.3.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 mobilitydb_16 mobilitydb_16-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 691.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_16-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 mobilitydb_16 mobilitydb_16-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 676.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_16-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 mobilitydb_16 mobilitydb_16-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 708.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_16-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 mobilitydb_16 mobilitydb_16-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 682.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_16-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1.pgdg12+1_amd64.deb pgdg 1.3.2 717.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 715.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-2.pgdg12+1_amd64.deb pgdg 1.3.1 716.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-1.pgdg12+1_amd64.deb pgdg 1.3.1 715.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1.pgdg12+1_arm64.deb pgdg 1.3.2 649.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 649.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-2.pgdg12+1_arm64.deb pgdg 1.3.1 649.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-1.pgdg12+1_arm64.deb pgdg 1.3.1 648.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1.pgdg13+1_amd64.deb pgdg 1.3.2 718.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 716.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-2.pgdg13+1_amd64.deb pgdg 1.3.1 716.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-2.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-1.pgdg13+1_amd64.deb pgdg 1.3.1 716.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1.pgdg13+1_arm64.deb pgdg 1.3.2 660.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 659.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-2.pgdg13+1_arm64.deb pgdg 1.3.1 660.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-2.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-1.pgdg13+1_arm64.deb pgdg 1.3.1 659.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 667.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 574.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 657.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 535.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1.pgdg24.04+1_amd64.deb pgdg 1.3.2 619.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 664.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-2.pgdg24.04+1_amd64.deb pgdg 1.3.1 619.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-1.pgdg24.04+1_amd64.deb pgdg 1.3.1 618.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1.pgdg24.04+1_arm64.deb pgdg 1.3.2 581.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 661.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-2.pgdg24.04+1_arm64.deb pgdg 1.3.1 581.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-1.pgdg24.04+1_arm64.deb pgdg 1.3.1 581.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1.pgdg26.04+1_amd64.deb pgdg 1.3.2 623.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 661.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-2.pgdg26.04+1_amd64.deb pgdg 1.3.1 622.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-1.pgdg26.04+1_amd64.deb pgdg 1.3.1 623.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1.pgdg26.04+1_arm64.deb pgdg 1.3.2 581.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 649.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-2.pgdg26.04+1_arm64.deb pgdg 1.3.1 581.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-mobilitydb postgresql-16-mobilitydb_1.3.1-1.pgdg26.04+1_arm64.deb pgdg 1.3.1 582.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-16-mobilitydb_1.3.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 mobilitydb_15 mobilitydb_15-1.3.2-1PGSTY.el8.x86_64.rpm pigsty 1.3.2 789.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/mobilitydb_15-1.3.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 mobilitydb_15 mobilitydb_15-1.3.2-1PGSTY.el8.aarch64.rpm pigsty 1.3.2 737.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/mobilitydb_15-1.3.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 mobilitydb_15 mobilitydb_15-1.3.2-1PGSTY.el9.x86_64.rpm pigsty 1.3.2 691.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/mobilitydb_15-1.3.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 mobilitydb_15 mobilitydb_15-1.3.2-1PGSTY.el9.aarch64.rpm pigsty 1.3.2 676.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/mobilitydb_15-1.3.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 mobilitydb_15 mobilitydb_15-1.3.2-1PGSTY.el10.x86_64.rpm pigsty 1.3.2 707.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/mobilitydb_15-1.3.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 mobilitydb_15 mobilitydb_15-1.3.2-1PGSTY.el10.aarch64.rpm pigsty 1.3.2 682.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/mobilitydb_15-1.3.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1.pgdg12+1_amd64.deb pgdg 1.3.2 716.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb pigsty 1.3.2 715.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-2.pgdg12+1_amd64.deb pgdg 1.3.1 716.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-1.pgdg12+1_amd64.deb pgdg 1.3.1 715.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1.pgdg12+1_arm64.deb pgdg 1.3.2 649.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb pigsty 1.3.2 648.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-2.pgdg12+1_arm64.deb pgdg 1.3.1 649.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-1.pgdg12+1_arm64.deb pgdg 1.3.1 648.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1.pgdg13+1_amd64.deb pgdg 1.3.2 717.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb pigsty 1.3.2 716.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-2.pgdg13+1_amd64.deb pgdg 1.3.1 717.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-2.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-1.pgdg13+1_amd64.deb pgdg 1.3.1 717.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1.pgdg13+1_arm64.deb pgdg 1.3.2 659.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb pigsty 1.3.2 659.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-2.pgdg13+1_arm64.deb pgdg 1.3.1 659.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-2.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-1.pgdg13+1_arm64.deb pgdg 1.3.1 659.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb pigsty 1.3.2 667.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb pgdg 1.2.0 573.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb pigsty 1.3.2 662.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb pgdg 1.2.0 536.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.2.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1.pgdg24.04+1_amd64.deb pgdg 1.3.2 619.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb pigsty 1.3.2 664.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-2.pgdg24.04+1_amd64.deb pgdg 1.3.1 618.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-1.pgdg24.04+1_amd64.deb pgdg 1.3.1 618.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1.pgdg24.04+1_arm64.deb pgdg 1.3.2 582.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb pigsty 1.3.2 662.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-2.pgdg24.04+1_arm64.deb pgdg 1.3.1 581.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-1.pgdg24.04+1_arm64.deb pgdg 1.3.1 581.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1.pgdg26.04+1_amd64.deb pgdg 1.3.2 623.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb pigsty 1.3.2 661.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-2.pgdg26.04+1_amd64.deb pgdg 1.3.1 622.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-1.pgdg26.04+1_amd64.deb pgdg 1.3.1 622.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1.pgdg26.04+1_arm64.deb pgdg 1.3.2 584.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb pigsty 1.3.2 649.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.2-1PGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-2.pgdg26.04+1_arm64.deb pgdg 1.3.1 581.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-mobilitydb postgresql-15-mobilitydb_1.3.1-1.pgdg26.04+1_arm64.deb pgdg 1.3.1 581.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/m/mobilitydb/postgresql-15-mobilitydb_1.3.1-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `mobilitydb` 扩展的 RPM / DEB 包：

```bash
pig build pkg mobilitydb         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `mobilitydb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install mobilitydb;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y mobilitydb -v 19  # PG 19
pig ext install -y mobilitydb -v 18  # PG 18
pig ext install -y mobilitydb -v 17  # PG 17
pig ext install -y mobilitydb -v 16  # PG 16
pig ext install -y mobilitydb -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y mobilitydb_19       # PG 19
dnf install -y mobilitydb_18       # PG 18
dnf install -y mobilitydb_17       # PG 17
dnf install -y mobilitydb_16       # PG 16
dnf install -y mobilitydb_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-mobilitydb   # PG 19
apt install -y postgresql-18-mobilitydb   # PG 18
apt install -y postgresql-17-mobilitydb   # PG 17
apt install -y postgresql-16-mobilitydb   # PG 16
apt install -y postgresql-15-mobilitydb   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'postgis-3';
```


**创建扩展**：

```sql
CREATE EXTENSION mobilitydb CASCADE;  -- 依赖: postgis
```

## 用法

来源：

- [1.3.2 发布说明](https://github.com/MobilityDB/MobilityDB/releases/tag/v1.3.2)
- [1.3.1 至 1.3.2 SQL 迁移](https://github.com/MobilityDB/MobilityDB/blob/v1.3.2/mobilitydb/sql/mobilitydb--1.3.1--1.3.2.sql)
- [MobilityDB v1.3.1 README](https://github.com/MobilityDB/MobilityDB/blob/v1.3.1/README.md)
- [扩展控制文件](https://github.com/MobilityDB/MobilityDB/blob/v1.3.1/mobilitydb/sql/mobilitydb.in.control)
- [1.3 版迁移手册](https://github.com/MobilityDB/MobilityDB/blob/v1.3.1/doc/introduction.xml)
- [时空 API](https://github.com/MobilityDB/MobilityDB/blob/v1.3.1/doc/temporal_spatial_p1.xml)
- [1.3.1 发布与升级说明](https://github.com/MobilityDB/MobilityDB/releases/tag/v1.3.1)
- [1.3.0 至 1.3.1 SQL 迁移](https://github.com/MobilityDB/MobilityDB/blob/v1.3.1/mobilitydb/sql/mobilitydb--1.3.0--1.3.1.sql)

`mobilitydb` 1.3.2 为 PostgreSQL 与 PostGIS 增加时态值和移动对象轨迹，可存储随时间变化的属性、还原指定时刻的位置，并为时空边界建立索引。1.3.2 修正了日期跨度集合的求交结果，并修复在 PostgreSQL 18.7 及同期小版本上的扩展安装问题。

### 启用扩展

该发布要求 PostgreSQL 14 及以上、PostGIS 3 及以上，并新增 PostgreSQL 19 构建支持。软件包可用性另行记录。上游要求加载匹配的 PostGIS 动态库，并建议采用以下锁配额：

```conf
shared_preload_libraries = 'postgis-3'
max_locks_per_transaction = 128
```

将 PostGIS 库加入现有预加载列表，重启 PostgreSQL，再使用获授权的管理角色在目标数据库启用两个扩展：

```sql
CREATE EXTENSION postgis;
CREATE EXTENSION mobilitydb;
```

### 存储与查询轨迹

示例使用投影坐标和完整 UTC 时间戳。应用应选择合适的坐标参考系；地理坐标采用不同的距离语义。

```sql
CREATE TABLE trips (
    trip_id bigint PRIMARY KEY,
    trip tgeompoint NOT NULL
);

INSERT INTO trips VALUES (
    1,
    tgeompoint 'SRID=3857;[Point(0 0)@2026-01-01 08:00:00+00,
                         Point(1000 0)@2026-01-01 09:00:00+00]'
);

SELECT valueAtTimestamp(trip, '2026-01-01 08:30:00+00'),
       ST_AsText(trajectory(trip)),
       length(trip),
       speed(trip)
FROM trips;

CREATE INDEX trips_space_time_idx ON trips USING gist (trip);

SELECT trip_id
FROM trips
WHERE trip && stbox(
    ST_MakeEnvelope(-100, -100, 1100, 100, 3857),
    tstzspan '[2026-01-01 08:00:00+00, 2026-01-01 09:00:00+00]'
);
```

边界框操作符可提供索引过滤。若边界重叠不足以满足业务条件，还应补充相应的精确时态或空间谓词。

### 类型与函数索引

- `tbool`、`tint`、`tfloat`、`ttext`：随时间变化的标量值。
- `tgeompoint`、`tgeogpoint`：移动的几何或地理点；构建了可选类型族时，`tnpoint` 表示路网点。
- `tgeometry`、`tgeography`：任意变化的空间值，支持离散或阶梯插值。
- `tcbuffer`、`tpose`、`trgeometry`：1.3 系列的可选实验性空间类型族，不应假定所有构建都包含它们。
- 瞬时值、序列和序列集分别表示一个时间点、一个序列或多个互不重叠的序列。线性插值是否可用取决于类型。
- `valueAtTimestamp`、`startTimestamp`、`endTimestamp`、`duration`：查看时态范围及值。
- `atTime`、`atGeometry`：按时间域或几何范围裁剪值。
- `trajectory`、`length`、`speed`：查看空间路径与运动情况。
- `twAvg`、`tUnion`：时间加权汇总与时态聚合。
- GiST 与 SP-GiST 操作符类可加速其支持的时间与时空边界查询。

### 升级与安全边界

安装新动态库与 SQL 文件后，在每个数据库执行更新：

```sql
ALTER EXTENSION mobilitydb UPDATE TO '1.3.2';
SELECT extversion FROM pg_extension WHERE extname = 'mobilitydb';
```

- 1.3.2 将 `* (datespanset, date)` 和 `span_intersection(datespanset, date)` 重建为返回 `datespanset` 的定义，与实际计算值及交换操作符一致。更新前应检查对这些对象的依赖。若要备份后恢复到 PostgreSQL 18.7，应先更新扩展：旧定义会在该版本创建扩展时失败。
- 1.3.1 修复 CVE-2026-102639：畸形 WKB 时态值、集合或跨度输入可能越界读取并导致后端崩溃。仅执行 SQL 迁移不能替换有漏洞的动态库；应重新连接或重启已加载旧二进制的进程。
- 更早的 1.3.0 至 1.3.1 迁移会移除五个同基础类型间的 `<->` 操作符及其 `set_distance` 函数，因为它们与 `btree_gist` 提供的操作符冲突。更新前应检查依赖对象，必要时使用对应的 `btree_gist` 操作符。
- 从 1.2 系列升级到 1.3 会改变时态值的二进制格式，必须按照上游流程备份与恢复。1.3.0 至 1.3.1 的原地 SQL 更新不能替代跨主系列迁移。
- 坐标系、插值、时间空洞、包含边界及单位都会影响结果。应按数据模型验证，不能将所有轨迹都视为连续的地理路径。
