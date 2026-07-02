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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_roaringbitmap-1.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_roaringbitmap-1.2.0.tar.gz</div>
    <div class="ext-card__desc">pg_roaringbitmap-1.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_roaringbitmap`**](/ext/e/roaringbitmap) | `1.2.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_roaringbitmap` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_roaringbitmap_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-roaringbitmap` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.0 5 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 6 |
| el8.aarch64 | AVAIL PIGSTY 1.2.0 5 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 6 |
| el9.x86_64 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 |
| el9.aarch64 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 |
| el10.x86_64 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 |
| el10.aarch64 | AVAIL PIGSTY 1.2.0 6 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 | AVAIL PIGSTY 1.2.0 7 |
| d12.x86_64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
| d12.aarch64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
| d13.x86_64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
| d13.aarch64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
| u22.x86_64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
| u22.aarch64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
| u24.x86_64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
| u24.aarch64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
| u26.x86_64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
| u26.aarch64 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 | AVAIL PIGSTY 1.2.0 3 |
@ el8.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-2PIGSTY.el8.x86_64.rpm pigsty 1.2.0 183.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_18-1.2.0-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.0 172.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_roaringbitmap_18-1.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 171.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 170.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 159.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-2PIGSTY.el8.aarch64.rpm pigsty 1.2.0 153.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_18-1.2.0-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.0 145.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_roaringbitmap_18-1.2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 144.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 144.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 133.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-2PIGSTY.el9.x86_64.rpm pigsty 1.2.0 116.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_18-1.2.0-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.2.0 118.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_roaringbitmap_18-1.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.0 116.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 116.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 84.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-2PIGSTY.el9.aarch64.rpm pigsty 1.2.0 103.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_18-1.2.0-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.2.0 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_roaringbitmap_18-1.2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.0 103.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 103.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 103.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 72.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-2PIGSTY.el10.x86_64.rpm pigsty 1.2.0 118.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_18-1.2.0-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.2.0 120.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_roaringbitmap_18-1.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.0 118.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 118.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 118.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 86.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-2PIGSTY.el10.aarch64.rpm pigsty 1.2.0 104.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_18-1.2.0-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.2.0 106.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_roaringbitmap_18-1.2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1.0 104.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_roaringbitmap_18-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_roaringbitmap_18-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_roaringbitmap_18 pg_roaringbitmap_18-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 73.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_roaringbitmap_18-0.5.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb pigsty 1.2.0 465.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 462.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 462.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb pigsty 1.2.0 424.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 423.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 420.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb pigsty 1.2.0 468.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 464.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 465.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb pigsty 1.2.0 427.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 423.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 421.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb pigsty 1.2.0 448.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 420.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 416.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb pigsty 1.2.0 418.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 388.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 384.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb pigsty 1.2.0 436.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 412.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 409.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb pigsty 1.2.0 408.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 380.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 378.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb pigsty 1.2.0 431.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 409.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb pgdg 1.1.0 406.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb pigsty 1.2.0 401.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-18-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 377.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-roaringbitmap postgresql-18-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb pgdg 1.1.0 373.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-18-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-2PIGSTY.el8.x86_64.rpm pigsty 1.2.0 183.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_17-1.2.0-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.0 172.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_roaringbitmap_17-1.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 171.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 171.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 159.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel8.x86_64.rpm pgdg 0.5.4 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-2PIGSTY.el8.aarch64.rpm pigsty 1.2.0 153.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_17-1.2.0-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.0 145.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_roaringbitmap_17-1.2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 144.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 144.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 133.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel8.aarch64.rpm pgdg 0.5.4 98.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-2PIGSTY.el9.x86_64.rpm pigsty 1.2.0 116.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_17-1.2.0-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.2.0 118.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-1.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.0 116.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 116.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 84.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel9.x86_64.rpm pgdg 0.5.4 72.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-2PIGSTY.el9.aarch64.rpm pigsty 1.2.0 103.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_17-1.2.0-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.2.0 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-1.2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.0 103.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 103.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 102.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 72.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel9.aarch64.rpm pgdg 0.5.4 69.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-2PIGSTY.el10.x86_64.rpm pigsty 1.2.0 118.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_17-1.2.0-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.2.0 120.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-1.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.0 118.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 118.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 118.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 86.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel10.x86_64.rpm pgdg 0.5.4 82.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-2PIGSTY.el10.aarch64.rpm pigsty 1.2.0 104.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_17-1.2.0-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.2.0 106.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-1.2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 73.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-0.5.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_roaringbitmap_17 pg_roaringbitmap_17-0.5.4-1PGDG.rhel10.aarch64.rpm pgdg 0.5.4 71.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_roaringbitmap_17-0.5.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb pigsty 1.2.0 466.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 463.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 462.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb pigsty 1.2.0 424.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 421.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 420.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb pigsty 1.2.0 467.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 465.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 464.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb pigsty 1.2.0 426.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 423.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 423.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb pigsty 1.2.0 480.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 450.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 448.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb pigsty 1.2.0 446.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 416.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 413.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb pigsty 1.2.0 436.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 412.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 410.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb pigsty 1.2.0 408.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 380.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 378.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb pigsty 1.2.0 431.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 408.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb pgdg 1.1.0 405.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb pigsty 1.2.0 401.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-17-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 376.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-roaringbitmap postgresql-17-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb pgdg 1.1.0 373.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-17-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-2PIGSTY.el8.x86_64.rpm pigsty 1.2.0 183.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_16-1.2.0-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.0 172.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_roaringbitmap_16-1.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 171.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 171.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 159.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel8.x86_64.rpm pgdg 0.5.4 107.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-2PIGSTY.el8.aarch64.rpm pigsty 1.2.0 153.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_16-1.2.0-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.0 145.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_roaringbitmap_16-1.2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 144.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 144.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 133.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel8.aarch64.rpm pgdg 0.5.4 98.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-2PIGSTY.el9.x86_64.rpm pigsty 1.2.0 116.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_16-1.2.0-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.2.0 118.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-1.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.0 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 116.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 84.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel9.x86_64.rpm pgdg 0.5.4 72.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-2PIGSTY.el9.aarch64.rpm pigsty 1.2.0 103.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_16-1.2.0-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.2.0 105.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-1.2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.0 103.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 103.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 102.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 72.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel9.aarch64.rpm pgdg 0.5.4 69.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-2PIGSTY.el10.x86_64.rpm pigsty 1.2.0 118.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_16-1.2.0-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.2.0 120.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-1.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.0 118.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 118.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 118.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 86.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel10.x86_64.rpm pgdg 0.5.4 82.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-2PIGSTY.el10.aarch64.rpm pigsty 1.2.0 104.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_16-1.2.0-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.2.0 106.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-1.2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 104.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 73.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-0.5.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_roaringbitmap_16 pg_roaringbitmap_16-0.5.4-1PGDG.rhel10.aarch64.rpm pgdg 0.5.4 71.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_roaringbitmap_16-0.5.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb pigsty 1.2.0 465.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 463.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 462.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb pigsty 1.2.0 424.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 421.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 420.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb pigsty 1.2.0 468.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 464.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 464.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb pigsty 1.2.0 426.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 423.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 423.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb pigsty 1.2.0 480.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 451.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 447.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb pigsty 1.2.0 446.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 416.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 413.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb pigsty 1.2.0 436.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 412.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 410.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb pigsty 1.2.0 408.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 380.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 379.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb pigsty 1.2.0 431.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 408.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb pgdg 1.1.0 405.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb pigsty 1.2.0 401.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-16-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 376.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-roaringbitmap postgresql-16-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb pgdg 1.1.0 373.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-16-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-2PIGSTY.el8.x86_64.rpm pigsty 1.2.0 189.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_15-1.2.0-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.0 175.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_roaringbitmap_15-1.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 174.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 174.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 162.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel8.x86_64.rpm pgdg 0.5.4 109.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-2PIGSTY.el8.aarch64.rpm pigsty 1.2.0 159.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_15-1.2.0-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.0 147.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_roaringbitmap_15-1.2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 146.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 146.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 135.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel8.aarch64.rpm pgdg 0.5.4 99.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-2PIGSTY.el9.x86_64.rpm pigsty 1.2.0 178.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_15-1.2.0-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.2.0 176.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-1.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.0 175.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 175.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 174.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 161.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel9.x86_64.rpm pgdg 0.5.4 114.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-2PIGSTY.el9.aarch64.rpm pigsty 1.2.0 157.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_15-1.2.0-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.2.0 156.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-1.2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.0 155.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 154.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 154.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 142.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel9.aarch64.rpm pgdg 0.5.4 105.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-2PIGSTY.el10.x86_64.rpm pigsty 1.2.0 182.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_15-1.2.0-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.2.0 181.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-1.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.0 181.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 181.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 181.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 167.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel10.x86_64.rpm pgdg 0.5.4 121.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-2PIGSTY.el10.aarch64.rpm pigsty 1.2.0 159.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_15-1.2.0-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.2.0 158.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-1.2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1.0 157.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 157.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 158.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 145.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-0.5.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_roaringbitmap_15 pg_roaringbitmap_15-0.5.4-1PGDG.rhel10.aarch64.rpm pgdg 0.5.4 108.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_roaringbitmap_15-0.5.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb pigsty 1.2.0 469.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 466.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 464.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb pigsty 1.2.0 427.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 425.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 423.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb pigsty 1.2.0 471.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 468.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 467.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb pigsty 1.2.0 429.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 427.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 425.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb pigsty 1.2.0 536.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 500.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 499.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb pigsty 1.2.0 495.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 458.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 455.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb pigsty 1.2.0 492.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 462.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 462.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb pigsty 1.2.0 457.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 424.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 422.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb pigsty 1.2.0 489.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 462.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb pgdg 1.1.0 460.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb pigsty 1.2.0 452.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-15-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 421.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-roaringbitmap postgresql-15-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb pgdg 1.1.0 418.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-15-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-2PIGSTY.el8.x86_64.rpm pigsty 1.2.0 189.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_roaringbitmap_14-1.2.0-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.2.0 175.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_roaringbitmap_14-1.2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 174.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 174.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel8.x86_64.rpm pgdg 0.5.5 162.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel8.x86_64.rpm pgdg 0.5.4 109.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-2PIGSTY.el8.aarch64.rpm pigsty 1.2.0 159.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_roaringbitmap_14-1.2.0-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.2.0 147.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_roaringbitmap_14-1.2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 146.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 146.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel8.aarch64.rpm pgdg 0.5.5 135.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel8.aarch64.rpm pgdg 0.5.4 99.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-2PIGSTY.el9.x86_64.rpm pigsty 1.2.0 178.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_roaringbitmap_14-1.2.0-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.2.0 176.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-1.2.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.1.0 175.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 175.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 174.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel9.x86_64.rpm pgdg 0.5.5 161.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel9.x86_64.rpm pgdg 0.5.4 114.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-2PIGSTY.el9.aarch64.rpm pigsty 1.2.0 157.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_roaringbitmap_14-1.2.0-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.2.0 156.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-1.2.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.1.0 155.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 155.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 155.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel9.aarch64.rpm pgdg 0.5.5 142.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel9.aarch64.rpm pgdg 0.5.4 105.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-2PIGSTY.el10.x86_64.rpm pigsty 1.2.0 182.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_roaringbitmap_14-1.2.0-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.2.0 182.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-1.2.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.1.0 181.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.x86_64.rpm pgdg 1.1.0 180.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 181.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel10.x86_64.rpm pgdg 0.5.5 167.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel10.x86_64.rpm pgdg 0.5.4 121.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-2PIGSTY.el10.aarch64.rpm pigsty 1.2.0 159.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_roaringbitmap_14-1.2.0-2PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.2.0 158.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-1.2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.1.0 157.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.aarch64.rpm pgdg 1.1.0 157.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-1.1.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 157.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-1.0.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.5-1PGDG.rhel10.aarch64.rpm pgdg 0.5.5 145.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-0.5.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_roaringbitmap_14 pg_roaringbitmap_14-0.5.4-1PGDG.rhel10.aarch64.rpm pgdg 0.5.4 108.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_roaringbitmap_14-0.5.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb pigsty 1.2.0 468.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 467.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb pgdg 1.1.0 464.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb pigsty 1.2.0 427.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 426.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb pgdg 1.1.0 423.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb pigsty 1.2.0 470.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 468.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb pgdg 1.1.0 466.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb pigsty 1.2.0 429.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 427.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb pgdg 1.1.0 425.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb pigsty 1.2.0 536.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 502.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb pgdg 1.1.0 498.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb pigsty 1.2.0 495.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 458.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb pgdg 1.1.0 455.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb pigsty 1.2.0 492.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 463.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb pgdg 1.1.0 462.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb pigsty 1.2.0 457.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 423.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb pgdg 1.1.0 421.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb pigsty 1.2.0 489.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 462.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb pgdg 1.1.0 459.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb pigsty 1.2.0 452.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/roaringbitmap/postgresql-14-roaringbitmap_1.2.0-2PIGSTY~resolute_arm64.deb
@ u26.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 421.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.2.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-roaringbitmap postgresql-14-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb pgdg 1.1.0 419.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-roaringbitmap/postgresql-14-roaringbitmap_1.1.0-1.pgdg26.04+1_arm64.deb
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

来源：

- [PGXN pg_roaringbitmap 1.2.0](https://pgxn.org/dist/pg_roaringbitmap/1.2.0/)
- [pg_roaringbitmap README](https://github.com/ChenHuajun/pg_roaringbitmap)
- [pg_roaringbitmap CHANGELOG](https://github.com/ChenHuajun/pg_roaringbitmap/blob/master/CHANGELOG.md)
- [本地包元数据](../db/extension.csv)

`pg_roaringbitmap` 安装的 PostgreSQL 扩展名是 `roaringbitmap`，它提供基于 Roaring Bitmap 的压缩位图类型和集合运算函数。适合紧凑存储整数集合、快速并集/交集、用户分群、faceting 和位图聚合。

v1.2.0 增加了 `rb_runoptimize()` / `rb64_runoptimize()` 用于缩小位图二进制尺寸，保留旧拼写 `rb_exsit` 以兼容老版本，加入 PostgreSQL 19 兼容，并在 receive 函数中校验不可信位图输入。

### 创建扩展

```sql
CREATE EXTENSION IF NOT EXISTS roaringbitmap;

SET roaringbitmap.output_format = 'array';
SELECT rb_build(ARRAY[1, 2, 3, 4, 5]);
```

`roaringbitmap.output_format` 可设为 `bytea` 或 `array`。默认输出格式是 `bytea`，更适合大位图；`array` 适合交互式查看。

### 数据类型

- `roaringbitmap` 存储无符号 32 位整数集合，逻辑范围为 `[0, 4294967296)`。
- `roaringbitmap64` 存储无符号 64 位整数集合，使用 `rb64_` 函数族。

```sql
CREATE TABLE cohorts (
  segment text PRIMARY KEY,
  users32 roaringbitmap,
  users64 roaringbitmap64
);
```

### 构建与转换

```sql
INSERT INTO cohorts(segment, users32)
VALUES ('trial', rb_build(ARRAY[1, 2, 3, 100, 200]));

INSERT INTO cohorts(segment, users32)
SELECT 'active', rb_build_agg(id)
FROM generate_series(1, 100000) AS id;

SELECT rb_cardinality(users32) FROM cohorts WHERE segment = 'active';
SELECT rb_to_array(users32) FROM cohorts WHERE segment = 'trial';
SELECT rb_iterate(users32) FROM cohorts WHERE segment = 'trial';
```

64 位值使用 `rb64_build()`、`rb64_build_agg()`、`rb64_to_array()` 和 `rb64_iterate()`。

### 集合运算

```sql
SELECT rb_build(ARRAY[1,2,3]) | rb_build(ARRAY[3,4,5]);  -- 并集
SELECT rb_build(ARRAY[1,2,3]) & rb_build(ARRAY[3,4,5]);  -- 交集
SELECT rb_build(ARRAY[1,2,3]) # rb_build(ARRAY[3,4,5]);  -- 异或
SELECT rb_build(ARRAY[1,2,3]) - rb_build(ARRAY[3,4,5]);  -- 差集

SELECT rb_build(ARRAY[1,2,3]) | 9;                       -- 添加元素
SELECT rb_build(ARRAY[1,2,3]) - 2;                       -- 移除元素
```

也支持包含与重叠操作符：

```sql
SELECT rb_build(ARRAY[1,2,3]) @> rb_build(ARRAY[2,3]);
SELECT rb_build(ARRAY[2,3]) <@ rb_build(ARRAY[1,2,3]);
SELECT rb_build(ARRAY[1,2,3]) && rb_build(ARRAY[3,4,5]);
```

### 基数与范围函数

```sql
SELECT rb_and_cardinality(a.users32, b.users32);
SELECT rb_or_cardinality(a.users32, b.users32);
SELECT rb_xor_cardinality(a.users32, b.users32);
SELECT rb_andnot_cardinality(a.users32, b.users32);

SELECT rb_range(users32, 100, 1000);
SELECT rb_range_cardinality(users32, 100, 1000);
SELECT rb_fill(users32, 100, 200);
SELECT rb_clear(users32, 100, 200);
SELECT rb_flip(users32, 100, 200);

SELECT rb_min(users32), rb_max(users32), rb_rank(users32, 500), rb_index(users32, 500);
SELECT rb_jaccard_dist(a.users32, b.users32);
```

64 位范围函数使用 `rb64_` 前缀。自 v1.1.0 起，多个 `rb64_` range/select 函数中 `range_end = 0` 表示无限上界。

### 聚合函数

```sql
SELECT rb_build_agg(user_id) FROM events;
SELECT rb_or_agg(users32) FROM cohorts;
SELECT rb_and_agg(users32) FROM cohorts;
SELECT rb_xor_agg(users32) FROM cohorts;

SELECT rb64_build_agg(user_id::bigint) FROM events;
SELECT rb64_or_agg(users64) FROM cohorts;
```

### 优化序列化尺寸

```sql
UPDATE cohorts
SET users32 = rb_runoptimize(users32);

UPDATE cohorts
SET users64 = rb64_runoptimize(users64);
```

`rb_runoptimize()` 和 `rb64_runoptimize()` 可在适合的数据分布下减小位图序列化尺寸。不要在高频写入路径中未经测试直接使用。

### 注意事项

- Pigsty 使用扩展文件名 `roaringbitmap.md`；上游包名是 `pg_roaringbitmap`。
- 源码构建需要 PostgreSQL 头文件和 CRoaring 依赖。README 提到发布前回归测试覆盖 PostgreSQL 13 及以上版本。
- `Makefile_native` 可以用 SIMD 指令编译，在匹配 CPU 上可能更快；但这种二进制放到缺少对应 CPU 特性的机器上可能触发 `SIGILL`。
- 大位图建议使用 `bytea` 输出；人工查看时再切到 `array` 输出。
