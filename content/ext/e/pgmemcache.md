---
title: "pgmemcache"
linkTitle: "pgmemcache"
description: "为PG提供memcached兼容接口"
weight: 9410
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ohmu/pgmemcache">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ohmu/pgmemcache</div>
    <div class="ext-card__desc">https://github.com/ohmu/pgmemcache</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmemcache`**](/ext/e/pgmemcache) | `2.3.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9410  | [**`pgmemcache`**](/ext/e/pgmemcache) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`redis_fdw`](/ext/e/redis_fdw) [`redis`](/ext/e/redis) [`spat`](/ext/e/spat) [`mongo_fdw`](/ext/e/mongo_fdw) [`kafka_fdw`](/ext/e/kafka_fdw) [`documentdb`](/ext/e/documentdb) [`documentdb_core`](/ext/e/documentdb_core) [`documentdb_distributed`](/ext/e/documentdb_distributed) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> missing pg12-14 on el.aarch64


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.3.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmemcache` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.3.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmemcache_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmemcache` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| el8.aarch64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | MISS PGDG - 0 |
| el9.aarch64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| el10.aarch64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| d12.x86_64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| d12.aarch64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| d13.x86_64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| d13.aarch64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| u22.x86_64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| u22.aarch64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| u24.x86_64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
| u24.aarch64 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 | AVAIL PGDG 2.3.0 1 |
@ el8.x86_64 18 pgmemcache_18 pgmemcache_18-2.3.0-9PGDG.rhel8.x86_64.rpm pgdg 2.3.0 26.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgmemcache_18-2.3.0-9PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgmemcache_18 pgmemcache_18-2.3.0-9PGDG.rhel8.aarch64.rpm pgdg 2.3.0 26.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgmemcache_18-2.3.0-9PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgmemcache_18 pgmemcache_18-2.3.0-9PGDG.rhel9.x86_64.rpm pgdg 2.3.0 25.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgmemcache_18-2.3.0-9PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgmemcache_18 pgmemcache_18-2.3.0-9PGDG.rhel9.aarch64.rpm pgdg 2.3.0 25.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgmemcache_18-2.3.0-9PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgmemcache_18 pgmemcache_18-2.3.0-9PGDG.rhel10.x86_64.rpm pgdg 2.3.0 26.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgmemcache_18-2.3.0-9PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgmemcache_18 pgmemcache_18-2.3.0-9PGDG.rhel10.aarch64.rpm pgdg 2.3.0 26.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgmemcache_18-2.3.0-9PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmemcache postgresql-18-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb pgdg 2.3.0 45.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-18-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmemcache postgresql-18-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb pgdg 2.3.0 45.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-18-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmemcache postgresql-18-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb pgdg 2.3.0 45.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-18-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmemcache postgresql-18-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb pgdg 2.3.0 45.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-18-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmemcache postgresql-18-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb pgdg 2.3.0 46.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-18-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmemcache postgresql-18-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb pgdg 2.3.0 46.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-18-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmemcache postgresql-18-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb pgdg 2.3.0 45.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-18-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmemcache postgresql-18-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb pgdg 2.3.0 45.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-18-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgmemcache_17 pgmemcache_17-2.3.0-8PGDG.rhel8.x86_64.rpm pgdg 2.3.0 26.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgmemcache_17-2.3.0-8PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgmemcache_17 pgmemcache_17-2.3.0-8PGDG.rhel8.aarch64.rpm pgdg 2.3.0 25.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgmemcache_17-2.3.0-8PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgmemcache_17 pgmemcache_17-2.3.0-8PGDG.rhel9.x86_64.rpm pgdg 2.3.0 26.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgmemcache_17-2.3.0-8PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgmemcache_17 pgmemcache_17-2.3.0-8PGDG.rhel9.aarch64.rpm pgdg 2.3.0 25.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgmemcache_17-2.3.0-8PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgmemcache_17 pgmemcache_17-2.3.0-9PGDG.rhel10.x86_64.rpm pgdg 2.3.0 26.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgmemcache_17-2.3.0-9PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgmemcache_17 pgmemcache_17-2.3.0-9PGDG.rhel10.aarch64.rpm pgdg 2.3.0 26.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgmemcache_17-2.3.0-9PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmemcache postgresql-17-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb pgdg 2.3.0 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-17-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmemcache postgresql-17-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb pgdg 2.3.0 45.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-17-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmemcache postgresql-17-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb pgdg 2.3.0 45.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-17-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmemcache postgresql-17-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb pgdg 2.3.0 45.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-17-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmemcache postgresql-17-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb pgdg 2.3.0 52.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-17-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmemcache postgresql-17-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb pgdg 2.3.0 51.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-17-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmemcache postgresql-17-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb pgdg 2.3.0 45.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-17-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmemcache postgresql-17-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb pgdg 2.3.0 45.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-17-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgmemcache_16 pgmemcache_16-2.3.0-6.rhel8.1.x86_64.rpm pgdg 2.3.0 26.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgmemcache_16-2.3.0-6.rhel8.1.x86_64.rpm
@ el8.aarch64 16 pgmemcache_16 pgmemcache_16-2.3.0-6.rhel8.1.aarch64.rpm pgdg 2.3.0 25.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgmemcache_16-2.3.0-6.rhel8.1.aarch64.rpm
@ el9.x86_64 16 pgmemcache_16 pgmemcache_16-2.3.0-6.rhel9.1.x86_64.rpm pgdg 2.3.0 25.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgmemcache_16-2.3.0-6.rhel9.1.x86_64.rpm
@ el9.aarch64 16 pgmemcache_16 pgmemcache_16-2.3.0-6.rhel9.1.aarch64.rpm pgdg 2.3.0 25.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgmemcache_16-2.3.0-6.rhel9.1.aarch64.rpm
@ el10.x86_64 16 pgmemcache_16 pgmemcache_16-2.3.0-9PGDG.rhel10.x86_64.rpm pgdg 2.3.0 26.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgmemcache_16-2.3.0-9PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgmemcache_16 pgmemcache_16-2.3.0-9PGDG.rhel10.aarch64.rpm pgdg 2.3.0 26.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgmemcache_16-2.3.0-9PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmemcache postgresql-16-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb pgdg 2.3.0 45.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-16-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmemcache postgresql-16-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb pgdg 2.3.0 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-16-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmemcache postgresql-16-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb pgdg 2.3.0 45.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-16-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmemcache postgresql-16-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb pgdg 2.3.0 45.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-16-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmemcache postgresql-16-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb pgdg 2.3.0 51.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-16-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmemcache postgresql-16-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb pgdg 2.3.0 51.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-16-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmemcache postgresql-16-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb pgdg 2.3.0 45.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-16-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmemcache postgresql-16-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb pgdg 2.3.0 45.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-16-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgmemcache_15 pgmemcache_15-2.3.0-5.rhel8.x86_64.rpm pgdg 2.3.0 56.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgmemcache_15-2.3.0-5.rhel8.x86_64.rpm
@ el9.x86_64 15 pgmemcache_15 pgmemcache_15-2.3.0-5.rhel9.x86_64.rpm pgdg 2.3.0 57.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgmemcache_15-2.3.0-5.rhel9.x86_64.rpm
@ el10.x86_64 15 pgmemcache_15 pgmemcache_15-2.3.0-9PGDG.rhel10.x86_64.rpm pgdg 2.3.0 26.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgmemcache_15-2.3.0-9PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgmemcache_15 pgmemcache_15-2.3.0-9PGDG.rhel10.aarch64.rpm pgdg 2.3.0 26.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgmemcache_15-2.3.0-9PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmemcache postgresql-15-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb pgdg 2.3.0 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-15-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmemcache postgresql-15-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb pgdg 2.3.0 45.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-15-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmemcache postgresql-15-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb pgdg 2.3.0 45.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-15-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmemcache postgresql-15-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb pgdg 2.3.0 45.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-15-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmemcache postgresql-15-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb pgdg 2.3.0 51.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-15-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmemcache postgresql-15-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb pgdg 2.3.0 51.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-15-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmemcache postgresql-15-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb pgdg 2.3.0 45.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-15-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmemcache postgresql-15-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb pgdg 2.3.0 45.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-15-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgmemcache_14 pgmemcache_14-2.3.0-5.rhel8.x86_64.rpm pgdg 2.3.0 56.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgmemcache_14-2.3.0-5.rhel8.x86_64.rpm
@ el10.x86_64 14 pgmemcache_14 pgmemcache_14-2.3.0-9PGDG.rhel10.x86_64.rpm pgdg 2.3.0 26.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgmemcache_14-2.3.0-9PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgmemcache_14 pgmemcache_14-2.3.0-9PGDG.rhel10.aarch64.rpm pgdg 2.3.0 26.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgmemcache_14-2.3.0-9PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmemcache postgresql-14-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb pgdg 2.3.0 45.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-14-pgmemcache_2.3.0-15.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmemcache postgresql-14-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb pgdg 2.3.0 45.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-14-pgmemcache_2.3.0-15.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmemcache postgresql-14-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb pgdg 2.3.0 45.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-14-pgmemcache_2.3.0-15.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmemcache postgresql-14-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb pgdg 2.3.0 45.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-14-pgmemcache_2.3.0-15.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmemcache postgresql-14-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb pgdg 2.3.0 51.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-14-pgmemcache_2.3.0-15.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmemcache postgresql-14-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb pgdg 2.3.0 51.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-14-pgmemcache_2.3.0-15.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmemcache postgresql-14-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb pgdg 2.3.0 45.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-14-pgmemcache_2.3.0-15.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmemcache postgresql-14-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb pgdg 2.3.0 45.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgmemcache/postgresql-14-pgmemcache_2.3.0-15.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgmemcache` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgmemcache;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgmemcache -v 18  # PG 18
pig ext install -y pgmemcache -v 17  # PG 17
pig ext install -y pgmemcache -v 16  # PG 16
pig ext install -y pgmemcache -v 15  # PG 15
pig ext install -y pgmemcache -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgmemcache_18       # PG 18
dnf install -y pgmemcache_17       # PG 17
dnf install -y pgmemcache_16       # PG 16
dnf install -y pgmemcache_15       # PG 15
dnf install -y pgmemcache_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgmemcache   # PG 18
apt install -y postgresql-17-pgmemcache   # PG 17
apt install -y postgresql-16-pgmemcache   # PG 16
apt install -y postgresql-15-pgmemcache   # PG 15
apt install -y postgresql-14-pgmemcache   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgmemcache;
```



## 用法

> [pgmemcache: memcached 接口](https://github.com/ohmu/pgmemcache)

提供与 memcached 服务器交互的 PostgreSQL 用户自定义函数。

### 启用

```sql
CREATE EXTENSION pgmemcache;
```

在 `postgresql.conf` 中配置默认服务器：

```ini
shared_preload_libraries = 'pgmemcache'
pgmemcache.default_servers = 'localhost:11211'
pgmemcache.default_behavior = 'DEAD_TIMEOUT:2'
```

### 服务器管理

```sql
SELECT memcache_server_add('localhost:11211');
SELECT memcache_server_add('cache-host');  -- 使用默认端口 11211
```

### 设置和获取值

```sql
-- 设置键（存在则覆盖）
SELECT memcache_set('user:1:name', 'John Doe');
SELECT memcache_set('session:abc', 'data', now() + interval '1 hour');

-- 添加键（存在则失败）
SELECT memcache_add('user:2:name', 'Jane Doe');
SELECT memcache_add('temp_key', 'value', interval '5 minutes');

-- 替换（键不存在则失败）
SELECT memcache_replace('user:1:name', 'John Smith');

-- 获取值
SELECT memcache_get('user:1:name');  -- 返回 text 或 NULL

-- 获取多个值
SELECT key, value FROM memcache_get_multi('{key1,key2,key3}'::text[]);
```

### 原子计数器

```sql
SELECT memcache_incr('counter');        -- 增加 1
SELECT memcache_incr('counter', 5);     -- 增加 5
SELECT memcache_decr('counter');        -- 减少 1
SELECT memcache_decr('counter', 3);     -- 减少 3
```

### 删除和刷新

```sql
SELECT memcache_delete('user:1:name');
SELECT memcache_flush_all();  -- 刷新所有服务器
```

### 统计信息

```sql
SELECT memcache_stats();  -- 返回所有服务器的统计信息
```

### 触发器示例

表更新时失效缓存：

```sql
CREATE OR REPLACE FUNCTION auth_passwd_upd()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
    IF OLD.passwd <> NEW.passwd THEN
        PERFORM memcache_delete('user_id_' || NEW.user_id || '_password');
    END IF;
    RETURN NEW;
END;
$$;

CREATE TRIGGER auth_passwd_upd_trg AFTER UPDATE ON passwd
    FOR EACH ROW EXECUTE PROCEDURE auth_passwd_upd();
```
