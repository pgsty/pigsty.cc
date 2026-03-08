---
title: "q3c"
linkTitle: "q3c"
description: "Q3C天空索引插件"
weight: 1540
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/segasai/q3c">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">segasai/q3c</div>
    <div class="ext-card__desc">https://github.com/segasai/q3c</div>
  </a>
  <a class="ext-card ext-card--source" href="q3c-2.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">q3c-2.0.2.tar.gz</div>
    <div class="ext-card__desc">q3c-2.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`q3c`**](/ext/e/q3c) | `2.0.2` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1540  | [**`q3c`**](/ext/e/q3c) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`h3`](/ext/e/h3) [`pg_geohash`](/ext/e/pg_geohash) [`earthdistance`](/ext/e/earthdistance) [`pg_sphere`](/ext/e/pg_sphere) [`postgis`](/ext/e/postgis) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.2` | {{< pgvers "18,17,16,15,14" >}} | `q3c` | - |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.2` | {{< pgvers "18,17,16,15,14" >}} | `q3c_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-q3c` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 |
| el8.aarch64 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 |
| el9.x86_64 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 |
| el9.aarch64 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 |
| el10.x86_64 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 |
| el10.aarch64 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 | AVAIL PIGSTY 2.0.2 3 |
| d12.x86_64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
| d12.aarch64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
| d13.x86_64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
| d13.aarch64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
| u22.x86_64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
| u22.aarch64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
| u24.x86_64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
| u24.aarch64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
@ el8.x86_64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 99.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/q3c_18-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 104.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/q3c_18-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 103.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/q3c_18-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/q3c_18-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/q3c_18-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/q3c_18-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 97.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/q3c_18-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 109.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/q3c_18-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 108.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/q3c_18-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 126.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/q3c_18-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 112.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/q3c_18-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 105.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/q3c_18-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 133.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/q3c_18-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 115.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/q3c_18-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 127.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/q3c_18-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 128.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/q3c_18-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 132.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/q3c_18-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 106.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/q3c_18-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 126.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 134.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 136.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 157.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 145.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 153.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 127.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 155.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 99.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/q3c_17-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 104.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/q3c_17-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 103.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/q3c_17-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/q3c_17-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/q3c_17-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/q3c_17-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 97.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/q3c_17-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 136.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/q3c_17-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 101.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/q3c_17-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 94.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/q3c_17-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 107.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/q3c_17-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 105.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/q3c_17-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 133.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/q3c_17-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 112.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/q3c_17-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 127.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/q3c_17-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 128.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/q3c_17-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 132.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/q3c_17-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 107.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/q3c_17-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 142.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 152.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 149.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 130.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 148.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 136.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 126.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 148.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 99.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/q3c_16-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 104.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/q3c_16-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 103.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/q3c_16-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/q3c_16-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/q3c_16-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/q3c_16-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 97.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/q3c_16-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 136.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/q3c_16-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 103.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/q3c_16-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 94.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/q3c_16-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 103.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/q3c_16-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 105.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/q3c_16-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 133.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/q3c_16-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 112.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/q3c_16-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 127.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/q3c_16-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 128.2KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/q3c_16-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 132.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/q3c_16-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 107.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/q3c_16-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 132.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 143.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 130.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 159.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 136.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 158.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 126.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 154.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 98.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/q3c_15-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 103.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/q3c_15-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 102.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/q3c_15-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/q3c_15-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/q3c_15-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/q3c_15-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 109.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/q3c_15-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 140.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/q3c_15-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 109.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/q3c_15-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 102.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/q3c_15-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 108.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/q3c_15-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 103.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/q3c_15-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 106.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/q3c_15-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 112.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/q3c_15-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 92.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/q3c_15-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 100.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/q3c_15-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 113.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/q3c_15-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 104.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/q3c_15-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 135.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 149.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 148.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 124.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 140.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 162.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 158.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 153.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 98.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/q3c_14-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 103.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/q3c_14-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 102.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/q3c_14-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/q3c_14-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/q3c_14-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/q3c_14-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 109.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/q3c_14-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 91.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/q3c_14-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 109.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/q3c_14-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 101.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/q3c_14-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 108.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/q3c_14-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 103.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/q3c_14-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 106.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/q3c_14-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 112.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/q3c_14-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 92.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/q3c_14-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 127.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/q3c_14-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 115.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/q3c_14-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 104.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/q3c_14-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 135.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 161.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 127.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 160.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 137.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 162.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 145.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 147.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `q3c` 扩展的 RPM 包：

```bash
pig build pkg q3c         # 构建 RPM 包
```


## 安装

您可以直接安装 `q3c` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install q3c;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y q3c -v 18  # PG 18
pig ext install -y q3c -v 17  # PG 17
pig ext install -y q3c -v 16  # PG 16
pig ext install -y q3c -v 15  # PG 15
pig ext install -y q3c -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y q3c_18       # PG 18
dnf install -y q3c_17       # PG 17
dnf install -y q3c_16       # PG 16
dnf install -y q3c_15       # PG 15
dnf install -y q3c_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-q3c   # PG 18
apt install -y postgresql-17-q3c   # PG 17
apt install -y postgresql-16-q3c   # PG 16
apt install -y postgresql-15-q3c   # PG 15
apt install -y postgresql-14-q3c   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION q3c;
```
