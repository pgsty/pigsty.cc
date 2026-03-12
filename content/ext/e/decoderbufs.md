---
title: "decoderbufs"
linkTitle: "decoderbufs"
description: "将WAL逻辑解码为ProtocolBuffer协议的消息"
weight: 9650
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/debezium/postgres-decoderbufs">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">debezium/postgres-decoderbufs</div>
    <div class="ext-card__desc">https://github.com/debezium/postgres-decoderbufs</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`decoderbufs`**](/ext/e/decoderbufs) | `3.4.1` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9650  | [**`decoderbufs`**](/ext/e/decoderbufs) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`wal2json`](/ext/e/wal2json) [`decoder_raw`](/ext/e/decoder_raw) [`test_decoding`](/ext/e/test_decoding) [`kafka_fdw`](/ext/e/kafka_fdw) [`pglogical_origin`](/ext/e/pglogical_origin) [`pglogical_ticker`](/ext/e/pglogical_ticker) [`pg_failover_slots`](/ext/e/pg_failover_slots) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.4.1` | {{< pgvers "18,17,16,15,14" >}} | `decoderbufs` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.4.1` | {{< pgvers "18,17,16,15,14" >}} | `postgres-decoderbufs_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.4.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-decoderbufs` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.4.1 3 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 9 | AVAIL PGDG 3.4.1 9 | AVAIL PGDG 3.4.1 14 |
| el8.aarch64 | AVAIL PGDG 3.4.1 3 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 9 | AVAIL PGDG 3.4.1 9 | AVAIL PGDG 3.4.1 13 |
| el9.x86_64 | AVAIL PGDG 3.4.1 3 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 9 | AVAIL PGDG 3.4.1 9 | AVAIL PGDG 3.4.1 13 |
| el9.aarch64 | AVAIL PGDG 3.4.1 3 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 9 | AVAIL PGDG 3.4.1 9 | AVAIL PGDG 3.4.1 13 |
| el10.x86_64 | AVAIL PGDG 3.4.1 3 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 5 |
| el10.aarch64 | AVAIL PGDG 3.4.1 3 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 5 | AVAIL PGDG 3.4.1 5 |
| d12.x86_64 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 |
| d12.aarch64 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 |
| d13.x86_64 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 |
| d13.aarch64 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 |
| u22.x86_64 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 |
| u22.aarch64 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 |
| u24.x86_64 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 |
| u24.aarch64 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 | AVAIL PGDG 3.4.0 1 |
@ el8.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.4.1 24.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.3.0 24.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/postgres-decoderbufs_18-3.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.2.0-1PGDG.rhel8.x86_64.rpm pgdg 3.2.0 24.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/postgres-decoderbufs_18-3.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.4.1 24.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.3.0 24.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/postgres-decoderbufs_18-3.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.2.0-1PGDG.rhel8.aarch64.rpm pgdg 3.2.0 23.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/postgres-decoderbufs_18-3.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.4.1 23.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.3.0 23.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/postgres-decoderbufs_18-3.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.2.0-1PGDG.rhel9.x86_64.rpm pgdg 3.2.0 23.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/postgres-decoderbufs_18-3.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.4.1 23.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.3.0 23.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/postgres-decoderbufs_18-3.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.2.0-1PGDG.rhel9.aarch64.rpm pgdg 3.2.0 22.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/postgres-decoderbufs_18-3.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.4.1 23.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.3.0-1PGDG.rhel10.x86_64.rpm pgdg 3.3.0 24.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/postgres-decoderbufs_18-3.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.2.0-1PGDG.rhel10.x86_64.rpm pgdg 3.2.0 23.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/postgres-decoderbufs_18-3.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.4.1 23.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.3.0-1PGDG.rhel10.aarch64.rpm pgdg 3.3.0 24.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.2.0-1PGDG.rhel10.aarch64.rpm pgdg 3.2.0 23.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.2.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb pgdg 3.4.0 39.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb pgdg 3.4.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb pgdg 3.4.0 39.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb pgdg 3.4.0 38.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb pgdg 3.4.0 39.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb pgdg 3.4.0 39.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb pgdg 3.4.0 38.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb pgdg 3.4.0 38.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.4.1 25.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.3.0 24.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.2.0-1PGDG.rhel8.x86_64.rpm pgdg 3.2.0 24.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.1.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1.1 24.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.0.2-1PGDG.rhel8.x86_64.rpm pgdg 3.0.2 23.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.4.1 24.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.3.0 24.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.2.0-1PGDG.rhel8.aarch64.rpm pgdg 3.2.0 23.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.1.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1.1 23.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.0.2-1PGDG.rhel8.aarch64.rpm pgdg 3.0.2 23.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.0.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.4.1 23.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.3.0 23.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgres-decoderbufs_17-3.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.2.0-1PGDG.rhel9.x86_64.rpm pgdg 3.2.0 23.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgres-decoderbufs_17-3.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.1.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1.1 23.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgres-decoderbufs_17-3.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.0.2-1PGDG.rhel9.x86_64.rpm pgdg 3.0.2 23.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/postgres-decoderbufs_17-3.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.4.1 23.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.3.0 23.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgres-decoderbufs_17-3.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.2.0-1PGDG.rhel9.aarch64.rpm pgdg 3.2.0 23.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgres-decoderbufs_17-3.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.1.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1.1 23.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgres-decoderbufs_17-3.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.0.2-1PGDG.rhel9.aarch64.rpm pgdg 3.0.2 23.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/postgres-decoderbufs_17-3.0.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.4.1 23.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.3.0-1PGDG.rhel10.x86_64.rpm pgdg 3.3.0 24.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgres-decoderbufs_17-3.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.2.0-1PGDG.rhel10.x86_64.rpm pgdg 3.2.0 23.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgres-decoderbufs_17-3.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.1.1-1PGDG.rhel10.x86_64.rpm pgdg 3.1.1 23.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgres-decoderbufs_17-3.1.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.0.2-1PGDG.rhel10.x86_64.rpm pgdg 3.0.2 23.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/postgres-decoderbufs_17-3.0.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.4.1 23.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.3.0-1PGDG.rhel10.aarch64.rpm pgdg 3.3.0 24.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.2.0-1PGDG.rhel10.aarch64.rpm pgdg 3.2.0 23.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.1.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1.1 23.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.1.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 23.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb pgdg 3.4.0 39.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb pgdg 3.4.0 38.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb pgdg 3.4.0 39.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb pgdg 3.4.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb pgdg 3.4.0 45.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb pgdg 3.4.0 44.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb pgdg 3.4.0 38.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb pgdg 3.4.0 38.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.4.1 25.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.3.0 24.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.2.0-1PGDG.rhel8.x86_64.rpm pgdg 3.2.0 24.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.1.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1.1 24.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.0.2-1PGDG.rhel8.x86_64.rpm pgdg 3.0.2 23.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 23.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 23.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.5.2-1PGDG.rhel8.x86_64.rpm pgdg 2.5.2 23.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-2.5.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.4.0-1PGDG.rhel8.x86_64.rpm pgdg 2.4.0 22.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-2.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.4.1 24.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.3.0 24.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.2.0-1PGDG.rhel8.aarch64.rpm pgdg 3.2.0 24.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.1.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1.1 23.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.0.2-1PGDG.rhel8.aarch64.rpm pgdg 3.0.2 23.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 23.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 23.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.5.2-1PGDG.rhel8.aarch64.rpm pgdg 2.5.2 22.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-2.5.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.4.0-1PGDG.rhel8.aarch64.rpm pgdg 2.4.0 22.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-2.4.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.4.1 23.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.3.0 23.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-3.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.2.0-1PGDG.rhel9.x86_64.rpm pgdg 3.2.0 23.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-3.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.1.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1.1 23.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-3.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.0.2-1PGDG.rhel9.x86_64.rpm pgdg 3.0.2 23.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-3.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.7.0-1PGDG.rhel9.x86_64.rpm pgdg 2.7.0 23.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-2.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.6.1-1PGDG.rhel9.x86_64.rpm pgdg 2.6.1 22.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-2.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.5.2-1PGDG.rhel9.x86_64.rpm pgdg 2.5.2 22.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-2.5.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.4.0-1PGDG.rhel9.x86_64.rpm pgdg 2.4.0 22.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-2.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.4.1 23.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.3.0 23.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-3.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.2.0-1PGDG.rhel9.aarch64.rpm pgdg 3.2.0 23.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-3.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.1.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1.1 23.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-3.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.0.2-1PGDG.rhel9.aarch64.rpm pgdg 3.0.2 23.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-3.0.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.7.0-1PGDG.rhel9.aarch64.rpm pgdg 2.7.0 22.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-2.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.6.1-1PGDG.rhel9.aarch64.rpm pgdg 2.6.1 22.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-2.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.5.2-1PGDG.rhel9.aarch64.rpm pgdg 2.5.2 22.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-2.5.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.4.0-1PGDG.rhel9.aarch64.rpm pgdg 2.4.0 21.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-2.4.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.4.1 23.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.3.0-1PGDG.rhel10.x86_64.rpm pgdg 3.3.0 24.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgres-decoderbufs_16-3.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.2.0-1PGDG.rhel10.x86_64.rpm pgdg 3.2.0 23.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgres-decoderbufs_16-3.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.1.1-1PGDG.rhel10.x86_64.rpm pgdg 3.1.1 23.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgres-decoderbufs_16-3.1.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.0.2-1PGDG.rhel10.x86_64.rpm pgdg 3.0.2 23.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/postgres-decoderbufs_16-3.0.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.4.1 23.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.3.0-1PGDG.rhel10.aarch64.rpm pgdg 3.3.0 24.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.2.0-1PGDG.rhel10.aarch64.rpm pgdg 3.2.0 23.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.1.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1.1 23.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.1.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 23.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb pgdg 3.4.0 39.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb pgdg 3.4.0 38.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb pgdg 3.4.0 39.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb pgdg 3.4.0 38.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb pgdg 3.4.0 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb pgdg 3.4.0 44.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb pgdg 3.4.0 38.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb pgdg 3.4.0 38.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.4.1 25.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.3.0 24.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.2.0-1PGDG.rhel8.x86_64.rpm pgdg 3.2.0 24.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.1.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1.1 24.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.0.2-1PGDG.rhel8.x86_64.rpm pgdg 3.0.2 24.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 23.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 23.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.5.2-1PGDG.rhel8.x86_64.rpm pgdg 2.5.2 23.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-2.5.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.4.0-1PGDG.rhel8.x86_64.rpm pgdg 2.4.0 23.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-2.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.4.1 24.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.3.0 24.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.2.0-1PGDG.rhel8.aarch64.rpm pgdg 3.2.0 24.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.1.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1.1 23.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.0.2-1PGDG.rhel8.aarch64.rpm pgdg 3.0.2 23.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 23.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 23.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.5.2-1PGDG.rhel8.aarch64.rpm pgdg 2.5.2 23.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-2.5.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.4.0-1PGDG.rhel8.aarch64.rpm pgdg 2.4.0 22.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-2.4.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.4.1 24.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.3.0 24.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-3.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.2.0-1PGDG.rhel9.x86_64.rpm pgdg 3.2.0 24.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-3.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.1.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1.1 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-3.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.0.2-1PGDG.rhel9.x86_64.rpm pgdg 3.0.2 24.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-3.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.7.0-1PGDG.rhel9.x86_64.rpm pgdg 2.7.0 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-2.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.6.1-1PGDG.rhel9.x86_64.rpm pgdg 2.6.1 23.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-2.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.5.2-1PGDG.rhel9.x86_64.rpm pgdg 2.5.2 23.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-2.5.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.4.0-1PGDG.rhel9.x86_64.rpm pgdg 2.4.0 23.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-2.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.4.1 24.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.3.0 24.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-3.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.2.0-1PGDG.rhel9.aarch64.rpm pgdg 3.2.0 23.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-3.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.1.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1.1 23.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-3.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.0.2-1PGDG.rhel9.aarch64.rpm pgdg 3.0.2 24.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-3.0.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.7.0-1PGDG.rhel9.aarch64.rpm pgdg 2.7.0 23.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-2.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.6.1-1PGDG.rhel9.aarch64.rpm pgdg 2.6.1 23.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-2.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.5.2-1PGDG.rhel9.aarch64.rpm pgdg 2.5.2 23.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-2.5.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.4.0-1PGDG.rhel9.aarch64.rpm pgdg 2.4.0 22.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-2.4.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.4.1 24.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.3.0-1PGDG.rhel10.x86_64.rpm pgdg 3.3.0 24.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgres-decoderbufs_15-3.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.2.0-1PGDG.rhel10.x86_64.rpm pgdg 3.2.0 24.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgres-decoderbufs_15-3.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.1.1-1PGDG.rhel10.x86_64.rpm pgdg 3.1.1 24.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgres-decoderbufs_15-3.1.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.0.2-1PGDG.rhel10.x86_64.rpm pgdg 3.0.2 24.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/postgres-decoderbufs_15-3.0.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.4.1 24.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.3.0-1PGDG.rhel10.aarch64.rpm pgdg 3.3.0 24.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.2.0-1PGDG.rhel10.aarch64.rpm pgdg 3.2.0 24.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.1.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1.1 24.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.1.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 24.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb pgdg 3.4.0 39.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb pgdg 3.4.0 38.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb pgdg 3.4.0 39.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb pgdg 3.4.0 39.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb pgdg 3.4.0 45.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb pgdg 3.4.0 44.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb pgdg 3.4.0 39.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb pgdg 3.4.0 38.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.4.1 25.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-3.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.3.0 24.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-3.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.2.0-1PGDG.rhel8.x86_64.rpm pgdg 3.2.0 24.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-3.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.1.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1.1 24.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-3.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.0.2-1PGDG.rhel8.x86_64.rpm pgdg 3.0.2 24.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-3.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 23.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 23.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.5.2-1PGDG.rhel8.x86_64.rpm pgdg 2.5.2 23.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-2.5.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.4.0-1PGDG.rhel8.x86_64.rpm pgdg 2.4.0 23.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-2.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.3.0-1PGDG.rhel8.x86_64.rpm pgdg 2.3.0 22.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-2.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.2.1-1.rhel8.x86_64.rpm pgdg 2.2.1 22.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-2.2.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.2.0-1.rhel8.x86_64.rpm pgdg 2.2.0 22.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-2.2.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.1.2-1.rhel8.x86_64.rpm pgdg 2.1.2 22.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-2.1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-1.5.2-1.rhel8.x86_64.rpm pgdg 1.5.2 51.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/postgres-decoderbufs_14-1.5.2-1.rhel8.x86_64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.4.1 24.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-3.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.3.0 24.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-3.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.2.0-1PGDG.rhel8.aarch64.rpm pgdg 3.2.0 24.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-3.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.1.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1.1 23.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-3.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.0.2-1PGDG.rhel8.aarch64.rpm pgdg 3.0.2 23.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-3.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 23.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 23.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.5.2-1PGDG.rhel8.aarch64.rpm pgdg 2.5.2 23.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-2.5.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.4.0-1PGDG.rhel8.aarch64.rpm pgdg 2.4.0 22.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-2.4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.3.0-1PGDG.rhel8.aarch64.rpm pgdg 2.3.0 22.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-2.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.2.1-1.rhel8.aarch64.rpm pgdg 2.2.1 22.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-2.2.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.2.0-1.rhel8.aarch64.rpm pgdg 2.2.0 22.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-2.2.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.1.2-1.rhel8.aarch64.rpm pgdg 2.1.2 22.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/postgres-decoderbufs_14-2.1.2-1.rhel8.aarch64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 3.4.1 24.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-3.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.3.0 24.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-3.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.2.0-1PGDG.rhel9.x86_64.rpm pgdg 3.2.0 24.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-3.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.1.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1.1 24.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-3.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.0.2-1PGDG.rhel9.x86_64.rpm pgdg 3.0.2 24.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-3.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.7.0-1PGDG.rhel9.x86_64.rpm pgdg 2.7.0 24.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-2.7.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.6.1-1PGDG.rhel9.x86_64.rpm pgdg 2.6.1 23.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-2.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.5.2-1PGDG.rhel9.x86_64.rpm pgdg 2.5.2 23.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-2.5.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.4.0-1PGDG.rhel9.x86_64.rpm pgdg 2.4.0 22.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-2.4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.3.0-1PGDG.rhel9.x86_64.rpm pgdg 2.3.0 22.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-2.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.2.1-1.rhel9.x86_64.rpm pgdg 2.2.1 23.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-2.2.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.2.0-1.rhel9.x86_64.rpm pgdg 2.2.0 22.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-2.2.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.1.2-1.rhel9.x86_64.rpm pgdg 2.1.2 22.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/postgres-decoderbufs_14-2.1.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 3.4.1 24.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-3.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.3.0 24.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-3.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.2.0-1PGDG.rhel9.aarch64.rpm pgdg 3.2.0 23.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-3.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.1.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1.1 23.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-3.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.0.2-1PGDG.rhel9.aarch64.rpm pgdg 3.0.2 24.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-3.0.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.7.0-1PGDG.rhel9.aarch64.rpm pgdg 2.7.0 23.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-2.7.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.6.1-1PGDG.rhel9.aarch64.rpm pgdg 2.6.1 23.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-2.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.5.2-1PGDG.rhel9.aarch64.rpm pgdg 2.5.2 23.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-2.5.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.4.0-1PGDG.rhel9.aarch64.rpm pgdg 2.4.0 22.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-2.4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.3.0-1PGDG.rhel9.aarch64.rpm pgdg 2.3.0 22.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-2.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.2.1-1.rhel9.aarch64.rpm pgdg 2.2.1 22.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-2.2.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.2.0-1.rhel9.aarch64.rpm pgdg 2.2.0 22.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-2.2.0-1.rhel9.aarch64.rpm
@ el9.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-2.1.2-1.rhel9.aarch64.rpm pgdg 2.1.2 22.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/postgres-decoderbufs_14-2.1.2-1.rhel9.aarch64.rpm
@ el10.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 3.4.1 24.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgres-decoderbufs_14-3.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.3.0-1PGDG.rhel10.x86_64.rpm pgdg 3.3.0 24.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgres-decoderbufs_14-3.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.2.0-1PGDG.rhel10.x86_64.rpm pgdg 3.2.0 24.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgres-decoderbufs_14-3.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.1.1-1PGDG.rhel10.x86_64.rpm pgdg 3.1.1 24.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgres-decoderbufs_14-3.1.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.0.2-1PGDG.rhel10.x86_64.rpm pgdg 3.0.2 24.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/postgres-decoderbufs_14-3.0.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.4.1 24.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgres-decoderbufs_14-3.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.3.0-1PGDG.rhel10.aarch64.rpm pgdg 3.3.0 24.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgres-decoderbufs_14-3.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.2.0-1PGDG.rhel10.aarch64.rpm pgdg 3.2.0 24.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgres-decoderbufs_14-3.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.1.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1.1 24.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgres-decoderbufs_14-3.1.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 postgres-decoderbufs_14 postgres-decoderbufs_14-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 24.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/postgres-decoderbufs_14-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-decoderbufs postgresql-14-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb pgdg 3.4.0 39.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-14-decoderbufs_3.4.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-decoderbufs postgresql-14-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb pgdg 3.4.0 38.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-14-decoderbufs_3.4.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-decoderbufs postgresql-14-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb pgdg 3.4.0 39.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-14-decoderbufs_3.4.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-decoderbufs postgresql-14-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb pgdg 3.4.0 38.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-14-decoderbufs_3.4.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-decoderbufs postgresql-14-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb pgdg 3.4.0 43.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-14-decoderbufs_3.4.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-decoderbufs postgresql-14-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb pgdg 3.4.0 43.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-14-decoderbufs_3.4.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-decoderbufs postgresql-14-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb pgdg 3.4.0 39.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-14-decoderbufs_3.4.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-decoderbufs postgresql-14-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb pgdg 3.4.0 38.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-14-decoderbufs_3.4.0-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `decoderbufs` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install decoderbufs;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y decoderbufs -v 18  # PG 18
pig ext install -y decoderbufs -v 17  # PG 17
pig ext install -y decoderbufs -v 16  # PG 16
pig ext install -y decoderbufs -v 15  # PG 15
pig ext install -y decoderbufs -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y postgres-decoderbufs_18       # PG 18
dnf install -y postgres-decoderbufs_17       # PG 17
dnf install -y postgres-decoderbufs_16       # PG 16
dnf install -y postgres-decoderbufs_15       # PG 15
dnf install -y postgres-decoderbufs_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-decoderbufs   # PG 18
apt install -y postgresql-17-decoderbufs   # PG 17
apt install -y postgresql-16-decoderbufs   # PG 16
apt install -y postgresql-15-decoderbufs   # PG 15
apt install -y postgresql-14-decoderbufs   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}

> 此扩展不需要执行 `CREATE EXTENSION` 语句



## 用法

> [decoderbufs: 使用 Protocol Buffer 格式传递 WAL 流变更的逻辑解码插件](https://github.com/debezium/postgres-decoderbufs)

一个 PostgreSQL 逻辑解码输出插件，将 WAL 变更序列化为 Protocol Buffers 格式，主要由 Debezium PostgreSQL 连接器用于变更数据捕获。

### 配置

在 `postgresql.conf` 中：

```ini
shared_preload_libraries = 'decoderbufs'
wal_level = logical
max_wal_senders = 8
max_replication_slots = 4
```

### 使用 SQL（调试模式）

```sql
-- 创建逻辑复制槽
SELECT * FROM pg_create_logical_replication_slot('decoderbufs_demo', 'decoderbufs');

-- 执行表修改
INSERT INTO my_table VALUES (1, 'test');
UPDATE my_table SET col = 'updated' WHERE id = 1;

-- 以调试文本模式查看变更
SELECT data FROM pg_logical_slot_peek_changes(
    'decoderbufs_demo', NULL, NULL, 'debug-mode', '1');

-- 消费变更
SELECT data FROM pg_logical_slot_get_changes(
    'decoderbufs_demo', NULL, NULL, 'debug-mode', '1');

-- 检查槽状态
SELECT * FROM pg_replication_slots WHERE slot_type = 'logical';
```

### 类型映射

| PostgreSQL 类型    | Protobuf 字段   |
|--------------------|------------------|
| BOOL               | datum_boolean    |
| INT2, INT4         | datum_int32      |
| INT8, OID          | datum_int64      |
| FLOAT4             | datum_float      |
| FLOAT8, NUMERIC    | datum_double     |
| CHAR, VARCHAR, TEXT | datum_string    |
| JSON, XML, UUID    | datum_string     |
| TIMESTAMP(TZ)      | datum_string     |
| BYTEA              | datum_bytes      |
| POINT, PostGIS     | datum_point      |

### 注意事项

- 对于 UPDATE/DELETE，需要适当设置 [REPLICA IDENTITY](https://www.postgresql.org/docs/current/sql-altertable.html#SQL-CREATETABLE-REPLICA-IDENTITY)
- 二进制 Protocol Buffer 输出由 Debezium Postgres Connector 消费
- `debug-mode` 选项提供人类可读的文本输出，用于 SQL 控制台测试
- 编译需要 `protobuf-c` 库和 PostGIS 开发包
