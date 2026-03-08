---
title: "mongo_fdw"
linkTitle: "mongo_fdw"
description: "MongoDB 外部数据包装器"
weight: 8700
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/EnterpriseDB/mongo_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">EnterpriseDB/mongo_fdw</div>
    <div class="ext-card__desc">https://github.com/EnterpriseDB/mongo_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="mongo_fdw-REL-5_5_3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">mongo_fdw-REL-5_5_3.tar.gz</div>
    <div class="ext-card__desc">mongo_fdw-REL-5_5_3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`mongo_fdw`**](/ext/e/mongo_fdw) | `5.5.3` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8700  | [**`mongo_fdw`**](/ext/e/mongo_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`wrappers`](/ext/e/wrappers) [`redis_fdw`](/ext/e/redis_fdw) [`kafka_fdw`](/ext/e/kafka_fdw) [`hdfs_fdw`](/ext/e/hdfs_fdw) [`documentdb_core`](/ext/e/documentdb_core) [`documentdb_distributed`](/ext/e/documentdb_distributed) [`multicorn`](/ext/e/multicorn) [`jdbc_fdw`](/ext/e/jdbc_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.3` | {{< pgvers "18,17,16,15,14" >}} | `mongo_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.3` | {{< pgvers "16,15,14" >}} | `mongo_fdw_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 2 | AVAIL PGDG 5.5.3 4 | AVAIL PGDG 5.5.3 6 |
| el8.aarch64 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 2 | AVAIL PGDG 5.5.3 2 | AVAIL PGDG 5.5.3 2 |
| el9.x86_64 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 2 | AVAIL PGDG 5.5.3 4 | AVAIL PGDG 5.5.3 5 |
| el9.aarch64 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 2 | AVAIL PGDG 5.5.3 2 | AVAIL PGDG 5.5.3 2 |
| el10.x86_64 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 |
| el10.aarch64 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 | AVAIL PGDG 5.5.3 1 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-2PGDG.rhel8.x86_64.rpm pgdg 5.5.3 54.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/mongo_fdw_18-5.5.3-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-2PGDG.rhel8.aarch64.rpm pgdg 5.5.3 52.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/mongo_fdw_18-5.5.3-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-2PGDG.rhel9.x86_64.rpm pgdg 5.5.3 52.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/mongo_fdw_18-5.5.3-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-2PGDG.rhel9.aarch64.rpm pgdg 5.5.3 50.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/mongo_fdw_18-5.5.3-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-2PGDG.rhel10.x86_64.rpm pgdg 5.5.3 53.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/mongo_fdw_18-5.5.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 mongo_fdw_18 mongo_fdw_18-5.5.3-2PGDG.rhel10.aarch64.rpm pgdg 5.5.3 52.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/mongo_fdw_18-5.5.3-2PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-2PGDG.rhel8.x86_64.rpm pgdg 5.5.3 54.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/mongo_fdw_17-5.5.3-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-2PGDG.rhel8.aarch64.rpm pgdg 5.5.3 52.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/mongo_fdw_17-5.5.3-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-2PGDG.rhel9.x86_64.rpm pgdg 5.5.3 52.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/mongo_fdw_17-5.5.3-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-2PGDG.rhel9.aarch64.rpm pgdg 5.5.3 50.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/mongo_fdw_17-5.5.3-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-2PGDG.rhel10.x86_64.rpm pgdg 5.5.3 53.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/mongo_fdw_17-5.5.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 mongo_fdw_17 mongo_fdw_17-5.5.3-2PGDG.rhel10.aarch64.rpm pgdg 5.5.3 52.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/mongo_fdw_17-5.5.3-2PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-2PGDG.rhel8.x86_64.rpm pgdg 5.5.3 54.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/mongo_fdw_16-5.5.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.1-1PGDG.rhel8.x86_64.rpm pgdg 5.5.1 74.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/mongo_fdw_16-5.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-2PGDG.rhel8.aarch64.rpm pgdg 5.5.3 52.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/mongo_fdw_16-5.5.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.1-1PGDG.rhel8.aarch64.rpm pgdg 5.5.1 70.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/mongo_fdw_16-5.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-2PGDG.rhel9.x86_64.rpm pgdg 5.5.3 52.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/mongo_fdw_16-5.5.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.1-1PGDG.rhel9.x86_64.rpm pgdg 5.5.1 65.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/mongo_fdw_16-5.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-2PGDG.rhel9.aarch64.rpm pgdg 5.5.3 50.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/mongo_fdw_16-5.5.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.1-1PGDG.rhel9.aarch64.rpm pgdg 5.5.1 63.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/mongo_fdw_16-5.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-2PGDG.rhel10.x86_64.rpm pgdg 5.5.3 53.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/mongo_fdw_16-5.5.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 mongo_fdw_16 mongo_fdw_16-5.5.3-2PGDG.rhel10.aarch64.rpm pgdg 5.5.3 52.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/mongo_fdw_16-5.5.3-2PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-2PGDG.rhel8.x86_64.rpm pgdg 5.5.3 56.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.5.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.1-1PGDG.rhel8.x86_64.rpm pgdg 5.5.1 77.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.0-1.rhel8.x86_64.rpm pgdg 5.5.0 74.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.4.0-1.rhel8.x86_64.rpm pgdg 5.4.0 74.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/mongo_fdw_15-5.4.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-2PGDG.rhel8.aarch64.rpm pgdg 5.5.3 53.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/mongo_fdw_15-5.5.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.1-1PGDG.rhel8.aarch64.rpm pgdg 5.5.1 73.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/mongo_fdw_15-5.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-2PGDG.rhel9.x86_64.rpm pgdg 5.5.3 55.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/mongo_fdw_15-5.5.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.1-1PGDG.rhel9.x86_64.rpm pgdg 5.5.1 79.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/mongo_fdw_15-5.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.0-1.rhel9.x86_64.rpm pgdg 5.5.0 75.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/mongo_fdw_15-5.5.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.4.0-1.rhel9.x86_64.rpm pgdg 5.4.0 76.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/mongo_fdw_15-5.4.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-2PGDG.rhel9.aarch64.rpm pgdg 5.5.3 53.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/mongo_fdw_15-5.5.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.1-1PGDG.rhel9.aarch64.rpm pgdg 5.5.1 75.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/mongo_fdw_15-5.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-2PGDG.rhel10.x86_64.rpm pgdg 5.5.3 56.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/mongo_fdw_15-5.5.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 mongo_fdw_15 mongo_fdw_15-5.5.3-2PGDG.rhel10.aarch64.rpm pgdg 5.5.3 54.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/mongo_fdw_15-5.5.3-2PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.5.3-2PGDG.rhel8.x86_64.rpm pgdg 5.5.3 56.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/mongo_fdw_14-5.5.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.5.1-1PGDG.rhel8.x86_64.rpm pgdg 5.5.1 77.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/mongo_fdw_14-5.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.5.0-1.rhel8.x86_64.rpm pgdg 5.5.0 74.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/mongo_fdw_14-5.5.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.4.0-1.rhel8.x86_64.rpm pgdg 5.4.0 74.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/mongo_fdw_14-5.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.3.0-1.rhel8.x86_64.rpm pgdg 5.3.0 70.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/mongo_fdw_14-5.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.2.10-2.rhel8.x86_64.rpm pgdg 5.2.10 63.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/mongo_fdw_14-5.2.10-2.rhel8.x86_64.rpm
@ el8.aarch64 14 mongo_fdw_14 mongo_fdw_14-5.5.3-2PGDG.rhel8.aarch64.rpm pgdg 5.5.3 53.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/mongo_fdw_14-5.5.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 mongo_fdw_14 mongo_fdw_14-5.5.1-1PGDG.rhel8.aarch64.rpm pgdg 5.5.1 73.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/mongo_fdw_14-5.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.5.3-2PGDG.rhel9.x86_64.rpm pgdg 5.5.3 55.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/mongo_fdw_14-5.5.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.5.1-1PGDG.rhel9.x86_64.rpm pgdg 5.5.1 79.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/mongo_fdw_14-5.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.5.0-1.rhel9.x86_64.rpm pgdg 5.5.0 75.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/mongo_fdw_14-5.5.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.4.0-1.rhel9.x86_64.rpm pgdg 5.4.0 76.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/mongo_fdw_14-5.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.3.0-1.rhel9.x86_64.rpm pgdg 5.3.0 72.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/mongo_fdw_14-5.3.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 mongo_fdw_14 mongo_fdw_14-5.5.3-2PGDG.rhel9.aarch64.rpm pgdg 5.5.3 53.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/mongo_fdw_14-5.5.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 mongo_fdw_14 mongo_fdw_14-5.5.1-1PGDG.rhel9.aarch64.rpm pgdg 5.5.1 75.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/mongo_fdw_14-5.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 mongo_fdw_14 mongo_fdw_14-5.5.3-2PGDG.rhel10.x86_64.rpm pgdg 5.5.3 56.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/mongo_fdw_14-5.5.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 mongo_fdw_14 mongo_fdw_14-5.5.3-2PGDG.rhel10.aarch64.rpm pgdg 5.5.3 54.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/mongo_fdw_14-5.5.3-2PGDG.rhel10.aarch64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `mongo_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install mongo_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y mongo_fdw -v 18  # PG 18
pig ext install -y mongo_fdw -v 17  # PG 17
pig ext install -y mongo_fdw -v 16  # PG 16
pig ext install -y mongo_fdw -v 15  # PG 15
pig ext install -y mongo_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y mongo_fdw_18       # PG 18
dnf install -y mongo_fdw_17       # PG 17
dnf install -y mongo_fdw_16       # PG 16
dnf install -y mongo_fdw_15       # PG 15
dnf install -y mongo_fdw_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION mongo_fdw;
```
