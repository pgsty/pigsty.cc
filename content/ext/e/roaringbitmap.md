---
title: "roaringbitmap"
linkTitle: "roaringbitmap"
description: "支持RoaringBitmap数据类型"
weight: 3630
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ChenHuajun/pg_roaringbitmap">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ChenHuajun/pg_roaringbitmap</div>
    <div class="ext-card__desc">https://github.com/ChenHuajun/pg_roaringbitmap</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_roaringbitmap-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_roaringbitmap-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_roaringbitmap-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_roaringbitmap`**](/ext/e/roaringbitmap) | `1.1.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3630  | [**`roaringbitmap`**](/ext/e/roaringbitmap) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`rum`](/ext/e/rum) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pgfaceting`](/ext/e/pgfaceting) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_roaringbitmap` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_roaringbitmap_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-roaringbitmap` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.0 4 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 4 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 4 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 4 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 4 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 4 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 | AVAIL PIGSTY 1.1.0 5 |
| d12.x86_64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| d12.aarch64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| d13.x86_64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| d13.aarch64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| u22.x86_64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| u22.aarch64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| u24.x86_64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
| u24.aarch64 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 | AVAIL PGDG 1.1.0 1 |
@ el8.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 182.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_18-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 171.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 170.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 159.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 153.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_18-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 144.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 144.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 133.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 114.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_18-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 116.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 84.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 101.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_18-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 103.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 103.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 72.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 116.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_18-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 118.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 118.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 86.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 102.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_18-1.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 73.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 462.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 420.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 465.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 421.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 416.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 384.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 409.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 378.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 182.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_17-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 171.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 171.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 159.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel8.x86_64.rpm pgdg 0.5.4 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 153.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_17-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 144.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 144.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 133.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel8.aarch64.rpm pgdg 0.5.4 98.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 114.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_17-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 116.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 84.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel9.x86_64.rpm pgdg 0.5.4 72.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 101.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_17-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 103.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 102.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 72.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel9.aarch64.rpm pgdg 0.5.4 69.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 116.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_17-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 118.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 118.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 86.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel10.x86_64.rpm pgdg 0.5.4 82.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 102.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_17-1.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 73.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel10.aarch64.rpm pgdg 0.5.4 71.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 462.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 420.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 464.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 423.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 448.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 413.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 410.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 378.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 182.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_16-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 171.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 171.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 159.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel8.x86_64.rpm pgdg 0.5.4 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 153.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_16-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 144.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 144.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 133.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel8.aarch64.rpm pgdg 0.5.4 98.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 114.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_16-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 116.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 84.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel9.x86_64.rpm pgdg 0.5.4 72.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 101.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_16-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 103.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 102.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 72.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel9.aarch64.rpm pgdg 0.5.4 69.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 116.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_16-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 118.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 118.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 86.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel10.x86_64.rpm pgdg 0.5.4 82.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 102.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_16-1.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 73.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel10.aarch64.rpm pgdg 0.5.4 71.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 462.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 420.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 464.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 423.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 447.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 413.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 410.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 379.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 188.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_15-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 174.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 174.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 162.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel8.x86_64.rpm pgdg 0.5.4 109.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 158.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_15-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 146.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 146.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 135.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel8.aarch64.rpm pgdg 0.5.4 99.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 176.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_15-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 175.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 174.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 161.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel9.x86_64.rpm pgdg 0.5.4 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 156.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_15-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 154.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 154.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 142.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel9.aarch64.rpm pgdg 0.5.4 105.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 181.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_15-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 181.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 181.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 167.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel10.x86_64.rpm pgdg 0.5.4 121.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 159.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_15-1.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 157.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 158.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 145.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel10.aarch64.rpm pgdg 0.5.4 108.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 464.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 423.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 467.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 425.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 499.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 455.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 462.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 422.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 188.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_14-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 174.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 174.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 162.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel8.x86_64.rpm pgdg 0.5.4 109.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 158.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_14-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 146.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 146.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 135.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel8.aarch64.rpm pgdg 0.5.4 99.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 177.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_14-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 175.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 174.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 161.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel9.x86_64.rpm pgdg 0.5.4 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 156.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_14-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 155.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 155.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 142.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel9.aarch64.rpm pgdg 0.5.4 105.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 181.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_14-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 180.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 181.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 167.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel10.x86_64.rpm pgdg 0.5.4 121.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 159.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_14-1.1.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 157.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 157.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 145.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel10.aarch64.rpm pgdg 0.5.4 108.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 464.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 423.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 466.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 425.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 498.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 455.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 462.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 421.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_roaringbitmap` 扩展的 RPM 包：

```bash
pig build pkg pg_roaringbitmap         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_roaringbitmap` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_roaringbitmap;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_roaringbitmap -v 18  # PG 18
pig ext install -y pg_roaringbitmap -v 17  # PG 17
pig ext install -y pg_roaringbitmap -v 16  # PG 16
pig ext install -y pg_roaringbitmap -v 15  # PG 15
pig ext install -y pg_roaringbitmap -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_roaringbitmap_18       # PG 18
dnf install -y pg_roaringbitmap_17       # PG 17
dnf install -y pg_roaringbitmap_16       # PG 16
dnf install -y pg_roaringbitmap_15       # PG 15
dnf install -y pg_roaringbitmap_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-roaringbitmap   # PG 18
apt install -y postgresql-17-roaringbitmap   # PG 17
apt install -y postgresql-16-roaringbitmap   # PG 16
apt install -y postgresql-15-roaringbitmap   # PG 15
apt install -y postgresql-14-roaringbitmap   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION roaringbitmap;
```



## 用法

> [roaringbitmap: PostgreSQL 的压缩位图数据类型](https://github.com/ChenHuajun/pg_roaringbitmap)

`roaringbitmap` 扩展提供了压缩位图数据类型，用于对整数集合进行高效的集合运算。

```sql
CREATE EXTENSION roaringbitmap;
SET roaringbitmap.output_format = 'array';

SELECT rb_build('{1,2,3,4,5}'::int[]);  -- {1,2,3,4,5}
```

### 数据类型

- **`roaringbitmap`**：32 位位图，范围 [0, 4294967296)
- **`roaringbitmap64`**：64 位位图，范围 [0, 18446744073709551615)

输出格式通过以下方式控制：`SET roaringbitmap.output_format = 'array'` 或 `'bytea'`

### 运算符

| 运算符 | 说明 |
|----------|-------------|
| `\|` | 按位或（并集） |
| `&` | 按位与（交集） |
| `#` | 按位异或 |
| `-` | 差集（与非） |
| `\|`（与 int） | 添加元素 |
| `-`（与 int） | 移除元素 |
| `@>` | 包含 |
| `<@` | 被包含于 |
| `&&` | 重叠 |
| `=`, `<>` | 相等/不等 |

### 核心函数

```sql
-- 构建
SELECT rb_build(ARRAY[1,2,3,4,5]);

-- 分析
SELECT rb_cardinality(rb_build('{1,2,3}'::int[]));   -- 3
SELECT rb_to_array(rb_build('{1,2,3}'::int[]));      -- {1,2,3}
SELECT rb_iterate(rb_build('{1,2,3}'::int[]));        -- 返回集合

-- 集合运算基数
SELECT rb_and_cardinality(a, b);
SELECT rb_or_cardinality(a, b);
SELECT rb_xor_cardinality(a, b);
SELECT rb_andnot_cardinality(a, b);

-- 范围操作
SELECT rb_range(bitmap, 2, 5);   -- 提取范围 [2, 5)
SELECT rb_fill(bitmap, 0, 10);   -- 添加范围 [0, 10)
SELECT rb_clear(bitmap, 3, 7);   -- 移除范围 [3, 7)
SELECT rb_flip(bitmap, 0, 10);   -- 翻转范围 [0, 10)

-- 元素访问
SELECT rb_min(bitmap);            -- 最小元素
SELECT rb_max(bitmap);            -- 最大元素
SELECT rb_rank(bitmap, 5);        -- 统计 <= 5 的元素数量
SELECT rb_index(bitmap, 3);       -- 元素的从零开始的位置

-- 工具函数
SELECT rb_is_empty(bitmap);
SELECT rb_jaccard_dist(a, b);     -- Jaccard 相似度
```

### 聚合函数

```sql
SELECT rb_build_agg(id) FROM table;       -- 从行构建位图
SELECT rb_or_agg(bitmap) FROM table;      -- 合并所有位图（并集）
SELECT rb_and_agg(bitmap) FROM table;     -- 合并所有位图（交集）
SELECT rb_xor_agg(bitmap) FROM table;     -- 合并所有位图（异或）
```

64 位版本使用 `rb64_` 前缀。
