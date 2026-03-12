---
title: "hdfs_fdw"
linkTitle: "hdfs_fdw"
description: "hdfs 外部数据包装器"
weight: 8740
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/EnterpriseDB/hdfs_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">EnterpriseDB/hdfs_fdw</div>
    <div class="ext-card__desc">https://github.com/EnterpriseDB/hdfs_fdw</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`hdfs_fdw`**](/ext/e/hdfs_fdw) | `2.3.3` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8740  | [**`hdfs_fdw`**](/ext/e/hdfs_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_parquet`](/ext/e/pg_parquet) [`mongo_fdw`](/ext/e/mongo_fdw) [`kafka_fdw`](/ext/e/kafka_fdw) [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`aws_s3`](/ext/e/aws_s3) [`duckdb_fdw`](/ext/e/duckdb_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.3.3` | {{< pgvers "18,17,16,15,14" >}} | `hdfs_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.3.3` | {{< pgvers "18,17,16,15,14" >}} | `hdfs_fdw_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.3.3 1 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 5 | AVAIL PGDG 2.3.3 7 |
| el8.aarch64 | AVAIL PGDG 2.3.3 1 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 4 | AVAIL PGDG 2.3.3 4 |
| el9.x86_64 | AVAIL PGDG 2.3.3 1 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 5 | AVAIL PGDG 2.3.3 6 |
| el9.aarch64 | AVAIL PGDG 2.3.3 1 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 5 | AVAIL PGDG 2.3.3 5 |
| el10.x86_64 | AVAIL PGDG 2.3.3 1 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 |
| el10.aarch64 | AVAIL PGDG 2.3.3 1 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 | AVAIL PGDG 2.3.3 2 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 hdfs_fdw_18 hdfs_fdw_18-2.3.3-1PGDG.rhel8.x86_64.rpm pgdg 2.3.3 116.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/hdfs_fdw_18-2.3.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 hdfs_fdw_18 hdfs_fdw_18-2.3.3-1PGDG.rhel8.aarch64.rpm pgdg 2.3.3 113.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/hdfs_fdw_18-2.3.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 hdfs_fdw_18 hdfs_fdw_18-2.3.3-1PGDG.rhel9.x86_64.rpm pgdg 2.3.3 116.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/hdfs_fdw_18-2.3.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 hdfs_fdw_18 hdfs_fdw_18-2.3.3-1PGDG.rhel9.aarch64.rpm pgdg 2.3.3 114.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/hdfs_fdw_18-2.3.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 hdfs_fdw_18 hdfs_fdw_18-2.3.3-1PGDG.rhel10.x86_64.rpm pgdg 2.3.3 116.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/hdfs_fdw_18-2.3.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 hdfs_fdw_18 hdfs_fdw_18-2.3.3-1PGDG.rhel10.aarch64.rpm pgdg 2.3.3 115.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/hdfs_fdw_18-2.3.3-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.3-1PGDG.rhel8.x86_64.rpm pgdg 2.3.3 116.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/hdfs_fdw_17-2.3.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.2-3PGDG.rhel8.x86_64.rpm pgdg 2.3.2 117.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/hdfs_fdw_17-2.3.2-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.3-1PGDG.rhel8.aarch64.rpm pgdg 2.3.3 113.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/hdfs_fdw_17-2.3.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.2-3PGDG.rhel8.aarch64.rpm pgdg 2.3.2 115.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/hdfs_fdw_17-2.3.2-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.3-1PGDG.rhel9.x86_64.rpm pgdg 2.3.3 116.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/hdfs_fdw_17-2.3.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.2-3PGDG.rhel9.x86_64.rpm pgdg 2.3.2 118.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/hdfs_fdw_17-2.3.2-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.3-1PGDG.rhel9.aarch64.rpm pgdg 2.3.3 113.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/hdfs_fdw_17-2.3.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.2-3PGDG.rhel9.aarch64.rpm pgdg 2.3.2 116.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/hdfs_fdw_17-2.3.2-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.3-1PGDG.rhel10.x86_64.rpm pgdg 2.3.3 116.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/hdfs_fdw_17-2.3.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.2-5PGDG.rhel10.x86_64.rpm pgdg 2.3.2 116.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/hdfs_fdw_17-2.3.2-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.3-1PGDG.rhel10.aarch64.rpm pgdg 2.3.3 115.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/hdfs_fdw_17-2.3.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 hdfs_fdw_17 hdfs_fdw_17-2.3.2-5PGDG.rhel10.aarch64.rpm pgdg 2.3.2 114.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/hdfs_fdw_17-2.3.2-5PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.3-1PGDG.rhel8.x86_64.rpm pgdg 2.3.3 116.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/hdfs_fdw_16-2.3.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.1-1PGDG.rhel8.x86_64.rpm pgdg 2.3.1 129.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/hdfs_fdw_16-2.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.3-1PGDG.rhel8.aarch64.rpm pgdg 2.3.3 113.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/hdfs_fdw_16-2.3.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.1-1PGDG.rhel8.aarch64.rpm pgdg 2.3.1 126.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/hdfs_fdw_16-2.3.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.3-1PGDG.rhel9.x86_64.rpm pgdg 2.3.3 116.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/hdfs_fdw_16-2.3.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.1-1PGDG.rhel9.x86_64.rpm pgdg 2.3.1 130.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/hdfs_fdw_16-2.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.3-1PGDG.rhel9.aarch64.rpm pgdg 2.3.3 114.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/hdfs_fdw_16-2.3.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.1-1PGDG.rhel9.aarch64.rpm pgdg 2.3.1 128.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/hdfs_fdw_16-2.3.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.3-1PGDG.rhel10.x86_64.rpm pgdg 2.3.3 116.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/hdfs_fdw_16-2.3.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.2-5PGDG.rhel10.x86_64.rpm pgdg 2.3.2 115.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/hdfs_fdw_16-2.3.2-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.3-1PGDG.rhel10.aarch64.rpm pgdg 2.3.3 115.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/hdfs_fdw_16-2.3.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 hdfs_fdw_16 hdfs_fdw_16-2.3.2-5PGDG.rhel10.aarch64.rpm pgdg 2.3.2 114.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/hdfs_fdw_16-2.3.2-5PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.3-1PGDG.rhel8.x86_64.rpm pgdg 2.3.3 115.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/hdfs_fdw_15-2.3.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.2-1PGDG.rhel8.x86_64.rpm pgdg 2.3.2 117.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/hdfs_fdw_15-2.3.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.1-1PGDG.rhel8.x86_64.rpm pgdg 2.3.1 129.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/hdfs_fdw_15-2.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.0-1.rhel8.x86_64.rpm pgdg 2.3.0 127.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/hdfs_fdw_15-2.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.2.0-1.rhel8.x86_64.rpm pgdg 2.2.0 117.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/hdfs_fdw_15-2.2.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.3-1PGDG.rhel8.aarch64.rpm pgdg 2.3.3 112.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/hdfs_fdw_15-2.3.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.2-1PGDG.rhel8.aarch64.rpm pgdg 2.3.2 114.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/hdfs_fdw_15-2.3.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.1-1PGDG.rhel8.aarch64.rpm pgdg 2.3.1 113.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/hdfs_fdw_15-2.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.0-1.rhel8.aarch64.rpm pgdg 2.3.0 124.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/hdfs_fdw_15-2.3.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.3-1PGDG.rhel9.x86_64.rpm pgdg 2.3.3 116.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/hdfs_fdw_15-2.3.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.2-1PGDG.rhel9.x86_64.rpm pgdg 2.3.2 119.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/hdfs_fdw_15-2.3.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.1-1PGDG.rhel9.x86_64.rpm pgdg 2.3.1 130.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/hdfs_fdw_15-2.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.0-1.rhel9.x86_64.rpm pgdg 2.3.0 130.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/hdfs_fdw_15-2.3.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.2.0-1.rhel9.x86_64.rpm pgdg 2.2.0 119.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/hdfs_fdw_15-2.2.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.3-1PGDG.rhel9.aarch64.rpm pgdg 2.3.3 114.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/hdfs_fdw_15-2.3.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.2-1PGDG.rhel9.aarch64.rpm pgdg 2.3.2 116.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/hdfs_fdw_15-2.3.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.1-1PGDG.rhel9.aarch64.rpm pgdg 2.3.1 115.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/hdfs_fdw_15-2.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.0-1.rhel9.aarch64.rpm pgdg 2.3.0 127.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/hdfs_fdw_15-2.3.0-1.rhel9.aarch64.rpm
@ el9.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.2.0-1.rhel9.aarch64.rpm pgdg 2.2.0 117.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/hdfs_fdw_15-2.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.3-1PGDG.rhel10.x86_64.rpm pgdg 2.3.3 117.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/hdfs_fdw_15-2.3.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.2-5PGDG.rhel10.x86_64.rpm pgdg 2.3.2 115.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/hdfs_fdw_15-2.3.2-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.3-1PGDG.rhel10.aarch64.rpm pgdg 2.3.3 115.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/hdfs_fdw_15-2.3.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 hdfs_fdw_15 hdfs_fdw_15-2.3.2-5PGDG.rhel10.aarch64.rpm pgdg 2.3.2 114.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/hdfs_fdw_15-2.3.2-5PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.3-1PGDG.rhel8.x86_64.rpm pgdg 2.3.3 115.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/hdfs_fdw_14-2.3.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.2-1PGDG.rhel8.x86_64.rpm pgdg 2.3.2 117.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/hdfs_fdw_14-2.3.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.1-1PGDG.rhel8.x86_64.rpm pgdg 2.3.1 128.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/hdfs_fdw_14-2.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.0-1.rhel8.x86_64.rpm pgdg 2.3.0 127.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/hdfs_fdw_14-2.3.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.2.0-1.rhel8.x86_64.rpm pgdg 2.2.0 117.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/hdfs_fdw_14-2.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.1.0-1.rhel8.x86_64.rpm pgdg 2.1.0 112.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/hdfs_fdw_14-2.1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.0.9-2.rhel8.x86_64.rpm pgdg 2.0.9 94.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/hdfs_fdw_14-2.0.9-2.rhel8.x86_64.rpm
@ el8.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.3-1PGDG.rhel8.aarch64.rpm pgdg 2.3.3 112.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/hdfs_fdw_14-2.3.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.2-1PGDG.rhel8.aarch64.rpm pgdg 2.3.2 114.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/hdfs_fdw_14-2.3.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.1-1PGDG.rhel8.aarch64.rpm pgdg 2.3.1 113.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/hdfs_fdw_14-2.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.0-1.rhel8.aarch64.rpm pgdg 2.3.0 124.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/hdfs_fdw_14-2.3.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.3-1PGDG.rhel9.x86_64.rpm pgdg 2.3.3 116.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/hdfs_fdw_14-2.3.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.2-1PGDG.rhel9.x86_64.rpm pgdg 2.3.2 119.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/hdfs_fdw_14-2.3.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.1-1PGDG.rhel9.x86_64.rpm pgdg 2.3.1 130.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/hdfs_fdw_14-2.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.0-1.rhel9.x86_64.rpm pgdg 2.3.0 129.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/hdfs_fdw_14-2.3.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.2.0-1.rhel9.x86_64.rpm pgdg 2.2.0 119.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/hdfs_fdw_14-2.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.1.0-1.rhel9.x86_64.rpm pgdg 2.1.0 114.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/hdfs_fdw_14-2.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.3-1PGDG.rhel9.aarch64.rpm pgdg 2.3.3 114.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/hdfs_fdw_14-2.3.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.2-1PGDG.rhel9.aarch64.rpm pgdg 2.3.2 116.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/hdfs_fdw_14-2.3.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.1-1PGDG.rhel9.aarch64.rpm pgdg 2.3.1 115.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/hdfs_fdw_14-2.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.0-1.rhel9.aarch64.rpm pgdg 2.3.0 127.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/hdfs_fdw_14-2.3.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.2.0-1.rhel9.aarch64.rpm pgdg 2.2.0 117.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/hdfs_fdw_14-2.2.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.3-1PGDG.rhel10.x86_64.rpm pgdg 2.3.3 117.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/hdfs_fdw_14-2.3.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.2-5PGDG.rhel10.x86_64.rpm pgdg 2.3.2 115.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/hdfs_fdw_14-2.3.2-5PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.3-1PGDG.rhel10.aarch64.rpm pgdg 2.3.3 115.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/hdfs_fdw_14-2.3.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 hdfs_fdw_14 hdfs_fdw_14-2.3.2-5PGDG.rhel10.aarch64.rpm pgdg 2.3.2 114.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/hdfs_fdw_14-2.3.2-5PGDG.rhel10.aarch64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `hdfs_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install hdfs_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y hdfs_fdw -v 18  # PG 18
pig ext install -y hdfs_fdw -v 17  # PG 17
pig ext install -y hdfs_fdw -v 16  # PG 16
pig ext install -y hdfs_fdw -v 15  # PG 15
pig ext install -y hdfs_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y hdfs_fdw_18       # PG 18
dnf install -y hdfs_fdw_17       # PG 17
dnf install -y hdfs_fdw_16       # PG 16
dnf install -y hdfs_fdw_15       # PG 15
dnf install -y hdfs_fdw_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION hdfs_fdw;
```



## 用法

> [hdfs_fdw: 远程 HDFS 服务器的外部数据包装器](https://github.com/EnterpriseDB/hdfs_fdw)

### 创建服务器

```sql
CREATE EXTENSION hdfs_fdw;

CREATE SERVER hdfs_server FOREIGN DATA WRAPPER hdfs_fdw
  OPTIONS (host '127.0.0.1', port '10000', client_type 'hiveserver2');
```

**服务器选项：** `host`（默认 `localhost`）、`port`（默认 `10000`）、`client_type`（`hiveserver2` 或 `spark`，默认 `hiveserver2`）、`auth_type`（`NOSASL` 或 `LDAP`）、`connect_timeout`（默认 300）、`fetch_size`（默认 10000）、`log_remote_sql`（默认 `false`）、`use_remote_estimate`（默认 `false`）、`enable_join_pushdown`（默认 `true`）、`enable_aggregate_pushdown`（默认 `true`）、`enable_order_by_pushdown`（默认 `true`）。

### 创建用户映射

```sql
CREATE USER MAPPING FOR postgres SERVER hdfs_server
  OPTIONS (username 'hive_user', password 'hive_password');
```

对于 NOSASL 认证，完全省略 OPTIONS 子句。

### 创建外部表

```sql
CREATE FOREIGN TABLE weblogs (
  client_ip text,
  http_status_code text,
  uri text,
  request_count bigint
)
SERVER hdfs_server
OPTIONS (dbname 'default', table_name 'weblogs');
```

**表选项：** `dbname`（默认 `default`）、`table_name`（默认为外部表名）、`enable_join_pushdown`、`enable_aggregate_pushdown`、`enable_order_by_pushdown`。

### 查询

```sql
SELECT client_ip, count(*) FROM weblogs GROUP BY client_ip ORDER BY count(*) DESC LIMIT 10;
```

### Spark 示例

```sql
CREATE SERVER spark_server FOREIGN DATA WRAPPER hdfs_fdw
  OPTIONS (host '127.0.0.1', port '10000', client_type 'spark');

CREATE USER MAPPING FOR postgres SERVER spark_server
  OPTIONS (username 'spark_user', password 'spark_pass');

CREATE FOREIGN TABLE spark_table (
  id int,
  name text,
  value double precision
)
SERVER spark_server
OPTIONS (dbname 'default', table_name 'my_table');
```

### 下推特性

hdfs_fdw 将 WHERE 子句、JOIN、聚合函数、ORDER BY 和 LIMIT/OFFSET 下推到远程 Hive/Spark 服务器。在会话级别控制下推：

```sql
SET hdfs_fdw.enable_join_pushdown = on;
SET hdfs_fdw.enable_aggregate_pushdown = on;
SET hdfs_fdw.enable_order_by_pushdown = on;
SET hdfs_fdw.enable_limit_pushdown = on;
```
