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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/q3c-2.0.2.tar.gz">
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
| u26.x86_64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
| u26.aarch64 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 | AVAIL PGDG 2.0.2 1 |
@ el8.x86_64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 99.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/q3c_18-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 104.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/q3c_18-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/q3c_18-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/q3c_18-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/q3c_18-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/q3c_18-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 97.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/q3c_18-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 109.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/q3c_18-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/q3c_18-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 126.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/q3c_18-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 112.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/q3c_18-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 105.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/q3c_18-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 133.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/q3c_18-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 115.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/q3c_18-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 127.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/q3c_18-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 q3c_18 q3c_18-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 128.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/q3c_18-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 q3c_18 q3c_18-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 132.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/q3c_18-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 q3c_18 q3c_18-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 106.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/q3c_18-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 126.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 134.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 136.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 157.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 145.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 153.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 127.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 155.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg26.04+1_amd64.deb pgdg 2.0.2 143.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-q3c postgresql-18-q3c_2.0.2-1.pgdg26.04+1_arm64.deb pgdg 2.0.2 148.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-18-q3c_2.0.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 99.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/q3c_17-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 104.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/q3c_17-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/q3c_17-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/q3c_17-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/q3c_17-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/q3c_17-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 97.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/q3c_17-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 136.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/q3c_17-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 101.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/q3c_17-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 94.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/q3c_17-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/q3c_17-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 105.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/q3c_17-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 133.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/q3c_17-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 112.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/q3c_17-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 127.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/q3c_17-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 q3c_17 q3c_17-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 128.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/q3c_17-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 q3c_17 q3c_17-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 132.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/q3c_17-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 q3c_17 q3c_17-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 107.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/q3c_17-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 142.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 152.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 149.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 130.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 148.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 136.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 126.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 148.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg26.04+1_amd64.deb pgdg 2.0.2 140.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-q3c postgresql-17-q3c_2.0.2-1.pgdg26.04+1_arm64.deb pgdg 2.0.2 150.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-17-q3c_2.0.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 99.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/q3c_16-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 104.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/q3c_16-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/q3c_16-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/q3c_16-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/q3c_16-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/q3c_16-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 97.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/q3c_16-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 136.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/q3c_16-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 103.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/q3c_16-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 94.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/q3c_16-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 103.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/q3c_16-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 105.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/q3c_16-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 133.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/q3c_16-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 112.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/q3c_16-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 127.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/q3c_16-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 q3c_16 q3c_16-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 128.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/q3c_16-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 q3c_16 q3c_16-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 132.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/q3c_16-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 q3c_16 q3c_16-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 107.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/q3c_16-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 132.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 143.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 130.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 159.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 136.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 158.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 126.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 154.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg26.04+1_amd64.deb pgdg 2.0.2 133.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-q3c postgresql-16-q3c_2.0.2-1.pgdg26.04+1_arm64.deb pgdg 2.0.2 165.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-16-q3c_2.0.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 98.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/q3c_15-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/q3c_15-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 102.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/q3c_15-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/q3c_15-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/q3c_15-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/q3c_15-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 109.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/q3c_15-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 140.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/q3c_15-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 109.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/q3c_15-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 102.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/q3c_15-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/q3c_15-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/q3c_15-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 106.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/q3c_15-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 112.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/q3c_15-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 92.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/q3c_15-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 q3c_15 q3c_15-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 100.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/q3c_15-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 q3c_15 q3c_15-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 113.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/q3c_15-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 q3c_15 q3c_15-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 104.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/q3c_15-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 135.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 149.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 148.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 124.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 140.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 162.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 158.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 153.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg26.04+1_amd64.deb pgdg 2.0.2 156.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-q3c postgresql-15-q3c_2.0.2-1.pgdg26.04+1_arm64.deb pgdg 2.0.2 141.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-15-q3c_2.0.2-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el8.x86_64.rpm pigsty 2.0.2 98.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/q3c_14-2.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 103.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/q3c_14-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 102.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/q3c_14-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el8.aarch64.rpm pigsty 2.0.2 93.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/q3c_14-2.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 98.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/q3c_14-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 97.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/q3c_14-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el9.x86_64.rpm pigsty 2.0.2 109.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/q3c_14-2.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.0.2 91.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/q3c_14-2.0.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 109.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/q3c_14-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el9.aarch64.rpm pigsty 2.0.2 101.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/q3c_14-2.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.0.2 108.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/q3c_14-2.0.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 103.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/q3c_14-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el10.x86_64.rpm pigsty 2.0.2 106.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/q3c_14-2.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.0.2 112.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/q3c_14-2.0.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel10.x86_64.rpm pgdg 2.0.1 92.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/q3c_14-2.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 q3c_14 q3c_14-2.0.2-1PIGSTY.el10.aarch64.rpm pigsty 2.0.2 127.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/q3c_14-2.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 q3c_14 q3c_14-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 115.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/q3c_14-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 q3c_14 q3c_14-2.0.1-1PGDG.rhel10.aarch64.rpm pgdg 2.0.1 104.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/q3c_14-2.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg12+1_amd64.deb pgdg 2.0.2 135.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg12+1_arm64.deb pgdg 2.0.2 161.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg13+1_amd64.deb pgdg 2.0.2 127.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg13+1_arm64.deb pgdg 2.0.2 160.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg22.04+1_amd64.deb pgdg 2.0.2 137.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg22.04+1_arm64.deb pgdg 2.0.2 162.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg24.04+1_amd64.deb pgdg 2.0.2 145.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg24.04+1_arm64.deb pgdg 2.0.2 147.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg26.04+1_amd64.deb pgdg 2.0.2 135.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-q3c postgresql-14-q3c_2.0.2-1.pgdg26.04+1_arm64.deb pgdg 2.0.2 137.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-q3c/postgresql-14-q3c_2.0.2-1.pgdg26.04+1_arm64.deb
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



## 用法

> 来源：[`segasai/q3c`](https://github.com/segasai/q3c) | [ADASS 论文](http://adsabs.harvard.edu/abs/2006ASPC..351..735K) | [ASCL](https://ascl.net/1905.008)

Q3C（Quad Tree Cube）是一个用于天文星表快速天球索引的 PostgreSQL 扩展。它能够对球面坐标（赤经和赤纬）进行高效的空间查询，包括锥形搜索、椭圆搜索、多边形查询、位置交叉匹配和最近邻查找。

所有角度（ra、dec、距离）单位为**度**，自行单位为**毫角秒/年**，历元单位为**年**（如 2000.5、2010.5）。所有 Q3C 函数名以 `q3c_` 为前缀。

### 表准备

要使用 Q3C，在包含 `ra` 和 `dec` 列（单位为度）的表上创建空间索引：

```sql
CREATE INDEX ON mytable (q3c_ang2ipix(ra, dec));
```

可选择按索引对表进行聚簇，以确保大数据集上更快的查询：

```sql
CLUSTER mytable_q3c_ang2ipix_idx ON mytable;
```

或在建索引前重新排列表：

```sql
CREATE TABLE mytable1 AS SELECT * FROM mytable ORDER BY q3c_ang2ipix(ra, dec);
```

建索引后，分析表：

```sql
ANALYZE mytable;
```


## 函数

- `q3c_ang2ipix(ra, dec)` -- 返回给定 ra 和 dec 对应的 ipix 值（64 位整数像素标识符）

- `q3c_dist(ra1, dec1, ra2, dec2)` -- 返回两点之间的距离（度）

- `q3c_dist_pm(ra1, dec1, pmra1, pmdec1, cosdec_flag, epoch1, ra2, dec2, epoch2)` -- 返回考虑自行的两点距离（度）。`cosdec_flag`（0 或 1）指示自行是否包含 cos(dec) 项（1）或不包含（0）

- `q3c_join(ra1, dec1, ra2, dec2, radius)` -- 如果 (ra1, dec1) 在 (ra2, dec2) 的 `radius` 球面距离内则返回 true。需要在 `q3c_ang2ipix(ra2, dec2)` 上创建索引

- `q3c_join_pm(ra1, dec1, pmra1, pmdec1, cosdec_flag, epoch1, ra2, dec2, epoch2, max_delta_epoch, radius)` -- 类似 `q3c_join` 但考虑自行。`max_delta_epoch` 是两个表之间可能的最大历元差

- `q3c_ellipse_join(ra1, dec1, ra2, dec2, major, ratio, pa)` -- 类似 `q3c_join`，但 (ra1, dec1) 必须在以半长轴 `major`、轴比 `ratio` 和位置角 `pa`（从北向东）定义的椭圆内

- `q3c_radial_query(ra, dec, center_ra, center_dec, radius)` -- 如果 (ra, dec) 在 (center_ra, center_dec) 的 `radius` 度范围内则返回 true。锥形搜索的主要函数。需要在 `q3c_ang2ipix(ra, dec)` 上建索引

- `q3c_ellipse_query(ra, dec, center_ra, center_dec, maj_ax, axis_ratio, PA)` -- 如果 (ra, dec) 在以 (center_ra, center_dec) 为中心、由半长轴、轴比和位置角定义的椭圆内则返回 true

- `q3c_poly_query(ra, dec, poly)` -- 如果 (ra, dec) 在以 RA/DEC 值数组或 PostgreSQL polygon 类型指定的球面多边形内则返回 true。使用索引

- `q3c_ipix2ang(ipix)` -- 返回给定 ipix 对应的 (ra, dec) 两元素数组

- `q3c_pixarea(ipix, bits)` -- 返回给定 ipix 在 `bits` 指定的像素化级别对应的球面面积（1 最小，30 是立方体面）

- `q3c_ipixcenter(ra, dec, bits)` -- 返回覆盖指定 (ra, dec) 的特定像素深度的像素中心 ipix 值

- `q3c_in_poly(ra, dec, poly)` -- 返回点是否在多边形内。**不**使用 q3c 索引

- `q3c_version()` -- 返回安装的 Q3C 版本


## 示例

### 锥形搜索

查询 (ra, dec) = (11, 12) 附近 0.1 度内的所有天体：

```sql
SELECT * FROM mytable WHERE q3c_radial_query(ra, dec, 11, 12, 0.1);
```

表的列名必须在前，搜索位置在后，否则索引不会被使用。

使用 `q3c_join` 的替代锥形搜索（对小表可能更快）：

```sql
SELECT * FROM mytable WHERE q3c_join(11, 12, ra, dec, 0.1);
```

### 椭圆搜索

搜索以 (10, 20) 为中心、半长轴 1 度、轴比 0.5、位置角 10 度的椭圆内的天体：

```sql
SELECT * FROM mytable WHERE q3c_ellipse_query(ra, dec, 10, 20, 1, 0.5, 10);
```

### 多边形搜索

查询顶点为 (0,0)、(2,0)、(2,1)、(0,1) 的球面多边形内的天体：

```sql
SELECT * FROM mytable WHERE
    q3c_poly_query(ra, dec, ARRAY[0, 0, 2, 0, 2, 1, 0, 1]);
```

使用 PostgreSQL polygon 类型：

```sql
SELECT * FROM mytable WHERE
    q3c_poly_query(ra, dec, '((0, 0), (2, 0), (2, 1), (0, 1))'::polygon);
```

### 位置交叉匹配

在 0.001 度范围内交叉匹配 `table1` 和 `table2`。索引需存在于 `table2` 的 `q3c_ang2ipix(ra, dec)` 上：

```sql
SELECT * FROM table1 AS a, table2 AS b WHERE
    q3c_join(a.ra, a.dec, b.ra, b.dec, 0.001);
```

索引表的 ra/dec 列必须是第 3 和第 4 个参数。这会返回匹配距离内的**所有**配对，而不仅是最近邻。

使用逐对象误差半径：

```sql
SELECT * FROM table1 AS a, table2 AS b WHERE
    q3c_join(a.ra, a.dec, b.ra, b.dec, a.err);
```

### 椭圆交叉匹配

使用椭圆误差区域进行交叉匹配（如在星系椭圆体内匹配）：

```sql
SELECT * FROM table1 AS a, table2 AS b WHERE
    q3c_ellipse_join(a.ra, a.dec, b.ra, b.dec, a.maj_ax, a.axis_ratio, a.PA);
```

### 含自行的交叉匹配

考虑自行修正的交叉匹配。假设 `table1` 有 `pmra`、`pmdec`（毫角秒/年）和 `epoch` 列，pmra 包含 cos(dec) 因子，最大历元差为 30 年：

```sql
SELECT * FROM table1 AS a, table2 AS b WHERE
    q3c_join_pm(a.ra, a.dec, a.pmra, a.pmdec, 1,
    a.epoch, b.ra, b.dec, b.epoch, 30, 0.001);
```

### 最近邻（未匹配返回 NULL）

为每行返回最近邻，1 角秒内无匹配则返回 NULL：

```sql
SELECT t.*, ss.* FROM mytable AS t
LEFT JOIN LATERAL (
    SELECT s.*
    FROM sdssdr9.phototag AS s
    WHERE q3c_join(t.ra, t.dec, s.ra, s.dec, 1./3600)
    ORDER BY q3c_dist(t.ra, t.dec, s.ra, s.dec) ASC
    LIMIT 1
) AS ss ON true;
```

### 最近邻（仅匹配项）

仅返回有邻居的天体：

```sql
SELECT t.*, ss.* FROM mytable AS t,
LATERAL (
    SELECT s.*
    FROM sdssdr9.phototag AS s
    WHERE q3c_join(t.ra, t.dec, s.ra, s.dec, 1./3600)
    ORDER BY q3c_dist(t.ra, t.dec, s.ra, s.dec) ASC
    LIMIT 1
) AS ss;
```

### 最近邻（CTE 变体）

使用带有对象 ID 列的 CTE（需要在 ID 列上建索引）：

```sql
WITH x AS MATERIALIZED (
    SELECT *, (
        SELECT objid FROM sdssdr9.phototag AS p
        WHERE q3c_join(m.ra, m.dec, p.ra, p.dec, 1./3600)
        ORDER BY q3c_dist(m.ra, m.dec, p.ra, p.dec) ASC
        LIMIT 1
    ) AS match_objid
    FROM mytable AS m
)
SELECT * FROM x, sdssdr9.phototag AS s WHERE x.match_objid = s.objid;
```

### 密度估计

使用像素化深度 25 估计天体密度：

```sql
SELECT (q3c_ipix2ang(i))[1] AS ra,
       (q3c_ipix2ang(i))[2] AS dec,
       c,
       q3c_pixarea(i, 25) AS area
FROM (
    SELECT q3c_ipixcenter(ra, dec, 25) AS i, count(*) AS c
    FROM mytable
    GROUP BY i
) AS x;
```

注意：Q3C 的像素面积不均匀（与 HEALPIX 不同）。


## 限制

- 不支持查询直径大于约 25 度的超大多边形
- 不支持超过 100 个顶点的多边形


## 性能提示

- 确保 Q3C 函数中的参数顺序正确（如 `q3c_radial_query(ra, dec, 120, 3, 1)` 而非 `q3c_radial_query(120, 3, ra, dec, 1)`）
- 使用 `EXPLAIN` 验证查询计划使用了 Q3C 索引的位图扫描
- 如果规划器选择了不佳的计划，尝试：`SET enable_mergejoin TO off; SET enable_seqscan TO off; SET enable_hashjoin TO off;`
- 按 Q3C 索引聚簇表以获得最佳性能
- 当 `q3c_join()` 与额外的过滤条件结合使用时，使用 `MATERIALIZED` CTE 避免计划问题：

```sql
WITH x AS MATERIALIZED (SELECT * FROM t1 WHERE t1.mag < 1),
     y AS (SELECT *, t2.mag AS t2mag FROM x, t2 WHERE q3c_join(x.ra, x.dec, t2.ra, t2.dec, 1./3600))
SELECT * FROM y WHERE t2mag > 33;
```
