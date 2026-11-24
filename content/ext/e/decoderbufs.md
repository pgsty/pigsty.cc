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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/decoderbufs-3.7.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">decoderbufs-3.7.1.tar.gz</div>
    <div class="ext-card__desc">decoderbufs-3.7.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`decoderbufs`**](/ext/e/decoderbufs) | `3.7.1` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9650  | [**`decoderbufs`**](/ext/e/decoderbufs) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`wal2json`](/ext/e/wal2json) [`decoder_raw`](/ext/e/decoder_raw) [`pgoutput`](/ext/e/pgoutput) [`pgmqtt`](/ext/e/pgmqtt) [`pg_protobuf`](/ext/e/pg_protobuf) [`pgq`](/ext/e/pgq) [`kafka_fdw`](/ext/e/kafka_fdw) [`test_decoding`](/ext/e/test_decoding) [`wal2mongo`](/ext/e/wal2mongo) [`pgproto`](/ext/e/pgproto) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Output plugin; no CREATE EXTENSION.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.7.1` | {{< pgvers "19,18,17,16,15" >}} | `decoderbufs` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.7.1` | {{< pgvers "19,18,17,16,15" >}} | `postgres-decoderbufs_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.7.1` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-decoderbufs` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PGDG - 0 | AVAIL PGDG 3.6.1 5 | AVAIL PGDG 3.6.1 7 | AVAIL PGDG 3.6.1 11 | AVAIL PGDG 3.6.1 11 |
| el8.aarch64 | N/A PGDG - 0 | AVAIL PGDG 3.6.1 5 | AVAIL PGDG 3.6.1 7 | AVAIL PGDG 3.6.1 11 | AVAIL PGDG 3.6.1 11 |
| el9.x86_64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.6.1 1 | AVAIL PGDG 3.6.1 1 | AVAIL PGDG 3.6.1 1 | AVAIL PGDG 3.6.1 1 |
| el9.aarch64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.6.1 1 | AVAIL PGDG 3.6.1 1 | AVAIL PGDG 3.6.1 1 | AVAIL PGDG 3.6.1 1 |
| el10.x86_64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.6.1 1 | AVAIL PGDG 3.6.1 1 | AVAIL PGDG 3.6.1 1 | AVAIL PGDG 3.6.1 1 |
| el10.aarch64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.6.1 9 | AVAIL PGDG 3.6.1 11 | AVAIL PGDG 3.6.1 11 | AVAIL PGDG 3.6.1 11 |
| d12.x86_64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
| d12.aarch64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
| d13.x86_64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
| d13.aarch64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
| u22.x86_64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
| u22.aarch64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
| u24.x86_64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
| u24.aarch64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
| u26.x86_64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
| u26.aarch64 | AVAIL PIGSTY 3.7.1 1 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 | AVAIL PGDG 3.7.0 3 |
@ el9.x86_64 19 postgres-decoderbufs_19 postgres-decoderbufs_19-3.7.1-1PGSTY.el9.x86_64.rpm pigsty 3.7.1 47.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/postgres-decoderbufs_19-3.7.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 postgres-decoderbufs_19 postgres-decoderbufs_19-3.7.1-1PGSTY.el9.aarch64.rpm pigsty 3.7.1 47.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/postgres-decoderbufs_19-3.7.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 postgres-decoderbufs_19 postgres-decoderbufs_19-3.7.1-1PGSTY.el10.x86_64.rpm pigsty 3.7.1 47.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/postgres-decoderbufs_19-3.7.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 postgres-decoderbufs_19 postgres-decoderbufs_19-3.7.1-1PGSTY.el10.aarch64.rpm pigsty 3.7.1 47.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/postgres-decoderbufs_19-3.7.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~bookworm_amd64.deb pigsty 3.7.1 38.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~bookworm_arm64.deb pigsty 3.7.1 37.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~trixie_amd64.deb pigsty 3.7.1 38.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~trixie_arm64.deb pigsty 3.7.1 37.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~jammy_amd64.deb pigsty 3.7.1 40.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~jammy_arm64.deb pigsty 3.7.1 40.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~noble_amd64.deb pigsty 3.7.1 39.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~noble_arm64.deb pigsty 3.7.1 39.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~resolute_amd64.deb pigsty 3.7.1 39.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-decoderbufs postgresql-19-decoderbufs_3.7.1-1PGSTY~resolute_arm64.deb pigsty 3.7.1 39.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/decoderbufs/postgresql-19-decoderbufs_3.7.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.6.1-4PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/postgres-decoderbufs_18-3.6.1-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 3.5.0 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/postgres-decoderbufs_18-3.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.4.1 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.3.0 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/postgres-decoderbufs_18-3.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.2.0-1PGDG.rhel8.x86_64.rpm pgdg 3.2.0 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/postgres-decoderbufs_18-3.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.6.1-4PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgres-decoderbufs_18-3.6.1-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 3.5.0 24.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgres-decoderbufs_18-3.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.4.1 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.3.0 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgres-decoderbufs_18-3.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.2.0-1PGDG.rhel8.aarch64.rpm pgdg 3.2.0 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/postgres-decoderbufs_18-3.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.6.1-4PGDG.rhel9.9.x86_64.rpm pgdg 3.6.1 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/postgres-decoderbufs_18-3.6.1-4PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.6.1-4PGDG.rhel9.9.aarch64.rpm pgdg 3.6.1 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/postgres-decoderbufs_18-3.6.1-4PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.6.1-4PGDG.rhel10.3.x86_64.rpm pgdg 3.6.1 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/postgres-decoderbufs_18-3.6.1-4PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.6.1-4PGDG.rhel10.3.aarch64.rpm pgdg 3.6.1 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.6.1-4PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.6.1-4PGDG.rhel10.2.aarch64.rpm pgdg 3.6.1 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.6.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 3.5.0 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.5.0-1PGDG.rhel10.1.aarch64.rpm pgdg 3.5.0 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.5.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.5.0-1PGDG.rhel10.0.aarch64.rpm pgdg 3.5.0 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.5.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.4.1 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.4.1-1PGDG.rhel10.0.aarch64.rpm pgdg 3.4.1 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.4.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.3.0-1PGDG.rhel10.aarch64.rpm pgdg 3.3.0 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 postgres-decoderbufs_18 postgres-decoderbufs_18-3.2.0-1PGDG.rhel10.aarch64.rpm pgdg 3.2.0 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/postgres-decoderbufs_18-3.2.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg12+2_amd64.deb pgdg 3.7.0 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg12+2_amd64.deb
@ d12.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg12+1_amd64.deb pgdg 3.7.0 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg12+1_amd64.deb pgdg 3.6.1 39.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg12+2_arm64.deb pgdg 3.7.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg12+2_arm64.deb
@ d12.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg12+1_arm64.deb pgdg 3.7.0 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg12+1_arm64.deb pgdg 3.6.1 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg13+2_amd64.deb pgdg 3.7.0 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg13+2_amd64.deb
@ d13.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg13+1_amd64.deb pgdg 3.7.0 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg13+1_amd64.deb pgdg 3.6.1 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg13+2_arm64.deb pgdg 3.7.0 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg13+2_arm64.deb
@ d13.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg13+1_arm64.deb pgdg 3.7.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg13+1_arm64.deb pgdg 3.6.1 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg22.04+2_amd64.deb pgdg 3.7.0 40.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg22.04+1_amd64.deb pgdg 3.7.0 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg22.04+1_amd64.deb pgdg 3.6.1 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg22.04+2_arm64.deb pgdg 3.7.0 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg22.04+1_arm64.deb pgdg 3.7.0 39.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg22.04+1_arm64.deb pgdg 3.6.1 39.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg24.04+2_amd64.deb pgdg 3.7.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg24.04+1_amd64.deb pgdg 3.7.0 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg24.04+1_amd64.deb pgdg 3.6.1 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg24.04+2_arm64.deb pgdg 3.7.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg24.04+1_arm64.deb pgdg 3.7.0 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg24.04+1_arm64.deb pgdg 3.6.1 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg26.04+2_amd64.deb pgdg 3.7.0 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg26.04+1_amd64.deb pgdg 3.7.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg26.04+1_amd64.deb pgdg 3.6.1 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg26.04+2_arm64.deb pgdg 3.7.0 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.7.0-1.pgdg26.04+1_arm64.deb pgdg 3.7.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.7.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-decoderbufs postgresql-18-decoderbufs_3.6.1-1.pgdg26.04+1_arm64.deb pgdg 3.6.1 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-18-decoderbufs_3.6.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.6.1-4PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.6.1-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 3.5.0 25.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.4.1 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.3.0 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.2.0-1PGDG.rhel8.x86_64.rpm pgdg 3.2.0 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.1.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1.1 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.0.2-1PGDG.rhel8.x86_64.rpm pgdg 3.0.2 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/postgres-decoderbufs_17-3.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.6.1-4PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.6.1-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 3.5.0 24.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.4.1 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.3.0 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.2.0-1PGDG.rhel8.aarch64.rpm pgdg 3.2.0 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.1.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1.1 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.0.2-1PGDG.rhel8.aarch64.rpm pgdg 3.0.2 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/postgres-decoderbufs_17-3.0.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.6.1-4PGDG.rhel9.9.x86_64.rpm pgdg 3.6.1 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/postgres-decoderbufs_17-3.6.1-4PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.6.1-4PGDG.rhel9.9.aarch64.rpm pgdg 3.6.1 24.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/postgres-decoderbufs_17-3.6.1-4PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.6.1-4PGDG.rhel10.3.x86_64.rpm pgdg 3.6.1 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/postgres-decoderbufs_17-3.6.1-4PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.6.1-4PGDG.rhel10.3.aarch64.rpm pgdg 3.6.1 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.6.1-4PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.6.1-4PGDG.rhel10.2.aarch64.rpm pgdg 3.6.1 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.6.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 3.5.0 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.5.0-1PGDG.rhel10.1.aarch64.rpm pgdg 3.5.0 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.5.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.5.0-1PGDG.rhel10.0.aarch64.rpm pgdg 3.5.0 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.5.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.4.1 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.4.1-1PGDG.rhel10.0.aarch64.rpm pgdg 3.4.1 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.4.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.3.0-1PGDG.rhel10.aarch64.rpm pgdg 3.3.0 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.2.0-1PGDG.rhel10.aarch64.rpm pgdg 3.2.0 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.1.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1.1 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.1.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 postgres-decoderbufs_17 postgres-decoderbufs_17-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/postgres-decoderbufs_17-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg12+2_amd64.deb pgdg 3.7.0 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg12+2_amd64.deb
@ d12.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg12+1_amd64.deb pgdg 3.7.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg12+1_amd64.deb pgdg 3.6.1 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg12+2_arm64.deb pgdg 3.7.0 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg12+2_arm64.deb
@ d12.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg12+1_arm64.deb pgdg 3.7.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg12+1_arm64.deb pgdg 3.6.1 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg13+2_amd64.deb pgdg 3.7.0 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg13+2_amd64.deb
@ d13.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg13+1_amd64.deb pgdg 3.7.0 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg13+1_amd64.deb pgdg 3.6.1 39.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg13+2_arm64.deb pgdg 3.7.0 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg13+2_arm64.deb
@ d13.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg13+1_arm64.deb pgdg 3.7.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg13+1_arm64.deb pgdg 3.6.1 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg22.04+2_amd64.deb pgdg 3.7.0 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg22.04+1_amd64.deb pgdg 3.7.0 45.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg22.04+1_amd64.deb pgdg 3.6.1 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg22.04+2_arm64.deb pgdg 3.7.0 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg22.04+1_arm64.deb pgdg 3.7.0 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg22.04+1_arm64.deb pgdg 3.6.1 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg24.04+2_amd64.deb pgdg 3.7.0 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg24.04+1_amd64.deb pgdg 3.7.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg24.04+1_amd64.deb pgdg 3.6.1 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg24.04+2_arm64.deb pgdg 3.7.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg24.04+1_arm64.deb pgdg 3.7.0 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg24.04+1_arm64.deb pgdg 3.6.1 38.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg26.04+2_amd64.deb pgdg 3.7.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg26.04+1_amd64.deb pgdg 3.7.0 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg26.04+1_amd64.deb pgdg 3.6.1 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg26.04+2_arm64.deb pgdg 3.7.0 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.7.0-1.pgdg26.04+1_arm64.deb pgdg 3.7.0 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.7.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-decoderbufs postgresql-17-decoderbufs_3.6.1-1.pgdg26.04+1_arm64.deb pgdg 3.6.1 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-17-decoderbufs_3.6.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.6.1-4PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 26.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.6.1-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 3.5.0 25.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.4.1 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.3.0 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.2.0-1PGDG.rhel8.x86_64.rpm pgdg 3.2.0 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.1.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1.1 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.0.2-1PGDG.rhel8.x86_64.rpm pgdg 3.0.2 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-3.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.5.2-1PGDG.rhel8.x86_64.rpm pgdg 2.5.2 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-2.5.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.4.0-1PGDG.rhel8.x86_64.rpm pgdg 2.4.0 22.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/postgres-decoderbufs_16-2.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.6.1-4PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.6.1-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 3.5.0 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.4.1 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.3.0 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.2.0-1PGDG.rhel8.aarch64.rpm pgdg 3.2.0 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.1.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1.1 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.0.2-1PGDG.rhel8.aarch64.rpm pgdg 3.0.2 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-3.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 23.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 23.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.5.2-1PGDG.rhel8.aarch64.rpm pgdg 2.5.2 22.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-2.5.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-2.4.0-1PGDG.rhel8.aarch64.rpm pgdg 2.4.0 22.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/postgres-decoderbufs_16-2.4.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.6.1-4PGDG.rhel9.9.x86_64.rpm pgdg 3.6.1 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/postgres-decoderbufs_16-3.6.1-4PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.6.1-4PGDG.rhel9.9.aarch64.rpm pgdg 3.6.1 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/postgres-decoderbufs_16-3.6.1-4PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.6.1-4PGDG.rhel10.3.x86_64.rpm pgdg 3.6.1 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/postgres-decoderbufs_16-3.6.1-4PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.6.1-4PGDG.rhel10.3.aarch64.rpm pgdg 3.6.1 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.6.1-4PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.6.1-4PGDG.rhel10.2.aarch64.rpm pgdg 3.6.1 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.6.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 3.5.0 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.5.0-1PGDG.rhel10.1.aarch64.rpm pgdg 3.5.0 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.5.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.5.0-1PGDG.rhel10.0.aarch64.rpm pgdg 3.5.0 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.5.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.4.1 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.4.1-1PGDG.rhel10.0.aarch64.rpm pgdg 3.4.1 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.4.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.3.0-1PGDG.rhel10.aarch64.rpm pgdg 3.3.0 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.2.0-1PGDG.rhel10.aarch64.rpm pgdg 3.2.0 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.1.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1.1 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.1.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 postgres-decoderbufs_16 postgres-decoderbufs_16-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/postgres-decoderbufs_16-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg12+2_amd64.deb pgdg 3.7.0 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg12+2_amd64.deb
@ d12.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg12+1_amd64.deb pgdg 3.7.0 39.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg12+1_amd64.deb pgdg 3.6.1 39.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg12+2_arm64.deb pgdg 3.7.0 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg12+2_arm64.deb
@ d12.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg12+1_arm64.deb pgdg 3.7.0 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg12+1_arm64.deb pgdg 3.6.1 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg13+2_amd64.deb pgdg 3.7.0 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg13+2_amd64.deb
@ d13.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg13+1_amd64.deb pgdg 3.7.0 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg13+1_amd64.deb pgdg 3.6.1 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg13+2_arm64.deb pgdg 3.7.0 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg13+2_arm64.deb
@ d13.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg13+1_arm64.deb pgdg 3.7.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg13+1_arm64.deb pgdg 3.6.1 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg22.04+2_amd64.deb pgdg 3.7.0 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg22.04+1_amd64.deb pgdg 3.7.0 45.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg22.04+1_amd64.deb pgdg 3.6.1 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg22.04+2_arm64.deb pgdg 3.7.0 44.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg22.04+1_arm64.deb pgdg 3.7.0 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg22.04+1_arm64.deb pgdg 3.6.1 44.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg24.04+2_amd64.deb pgdg 3.7.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg24.04+1_amd64.deb pgdg 3.7.0 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg24.04+1_amd64.deb pgdg 3.6.1 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg24.04+2_arm64.deb pgdg 3.7.0 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg24.04+1_arm64.deb pgdg 3.7.0 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg24.04+1_arm64.deb pgdg 3.6.1 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg26.04+2_amd64.deb pgdg 3.7.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg26.04+1_amd64.deb pgdg 3.7.0 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg26.04+1_amd64.deb pgdg 3.6.1 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg26.04+2_arm64.deb pgdg 3.7.0 38.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.7.0-1.pgdg26.04+1_arm64.deb pgdg 3.7.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.7.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-decoderbufs postgresql-16-decoderbufs_3.6.1-1.pgdg26.04+1_arm64.deb pgdg 3.6.1 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-16-decoderbufs_3.6.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.6.1-4PGDG.rhel8.10.x86_64.rpm pgdg 3.6.1 26.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.6.1-4PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 3.5.0 25.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 3.4.1 25.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.3.0 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.2.0-1PGDG.rhel8.x86_64.rpm pgdg 3.2.0 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.1.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1.1 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.0.2-1PGDG.rhel8.x86_64.rpm pgdg 3.0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-3.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.7.0-1PGDG.rhel8.x86_64.rpm pgdg 2.7.0 23.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-2.7.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.6.1-1PGDG.rhel8.x86_64.rpm pgdg 2.6.1 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-2.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.5.2-1PGDG.rhel8.x86_64.rpm pgdg 2.5.2 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-2.5.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.4.0-1PGDG.rhel8.x86_64.rpm pgdg 2.4.0 23.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/postgres-decoderbufs_15-2.4.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.6.1-4PGDG.rhel8.10.aarch64.rpm pgdg 3.6.1 26.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.6.1-4PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 3.5.0 25.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 3.4.1 24.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.3.0 24.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.2.0-1PGDG.rhel8.aarch64.rpm pgdg 3.2.0 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.1.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1.1 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.0.2-1PGDG.rhel8.aarch64.rpm pgdg 3.0.2 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-3.0.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.7.0-1PGDG.rhel8.aarch64.rpm pgdg 2.7.0 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-2.7.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.6.1-1PGDG.rhel8.aarch64.rpm pgdg 2.6.1 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-2.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.5.2-1PGDG.rhel8.aarch64.rpm pgdg 2.5.2 23.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-2.5.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-2.4.0-1PGDG.rhel8.aarch64.rpm pgdg 2.4.0 22.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/postgres-decoderbufs_15-2.4.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.6.1-4PGDG.rhel9.9.x86_64.rpm pgdg 3.6.1 25.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/postgres-decoderbufs_15-3.6.1-4PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.6.1-4PGDG.rhel9.9.aarch64.rpm pgdg 3.6.1 25.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/postgres-decoderbufs_15-3.6.1-4PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.6.1-4PGDG.rhel10.3.x86_64.rpm pgdg 3.6.1 25.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/postgres-decoderbufs_15-3.6.1-4PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.6.1-4PGDG.rhel10.3.aarch64.rpm pgdg 3.6.1 25.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.6.1-4PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.6.1-4PGDG.rhel10.2.aarch64.rpm pgdg 3.6.1 25.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.6.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 3.5.0 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.5.0-1PGDG.rhel10.1.aarch64.rpm pgdg 3.5.0 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.5.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.5.0-1PGDG.rhel10.0.aarch64.rpm pgdg 3.5.0 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.5.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 3.4.1 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.4.1-1PGDG.rhel10.0.aarch64.rpm pgdg 3.4.1 24.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.4.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.3.0-1PGDG.rhel10.aarch64.rpm pgdg 3.3.0 24.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.2.0-1PGDG.rhel10.aarch64.rpm pgdg 3.2.0 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.1.1-1PGDG.rhel10.aarch64.rpm pgdg 3.1.1 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.1.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 postgres-decoderbufs_15 postgres-decoderbufs_15-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 24.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/postgres-decoderbufs_15-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg12+2_amd64.deb pgdg 3.7.0 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg12+2_amd64.deb
@ d12.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg12+1_amd64.deb pgdg 3.7.0 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg12+1_amd64.deb pgdg 3.6.1 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg12+2_arm64.deb pgdg 3.7.0 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg12+2_arm64.deb
@ d12.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg12+1_arm64.deb pgdg 3.7.0 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg12+1_arm64.deb pgdg 3.6.1 38.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg13+2_amd64.deb pgdg 3.7.0 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg13+2_amd64.deb
@ d13.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg13+1_amd64.deb pgdg 3.7.0 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg13+1_amd64.deb pgdg 3.6.1 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg13+2_arm64.deb pgdg 3.7.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg13+2_arm64.deb
@ d13.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg13+1_arm64.deb pgdg 3.7.0 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg13+1_arm64.deb pgdg 3.6.1 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg22.04+2_amd64.deb pgdg 3.7.0 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg22.04+1_amd64.deb pgdg 3.7.0 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg22.04+1_amd64.deb pgdg 3.6.1 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg22.04+2_arm64.deb pgdg 3.7.0 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg22.04+1_arm64.deb pgdg 3.7.0 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg22.04+1_arm64.deb pgdg 3.6.1 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg24.04+2_amd64.deb pgdg 3.7.0 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg24.04+1_amd64.deb pgdg 3.7.0 39.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg24.04+1_amd64.deb pgdg 3.6.1 39.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg24.04+2_arm64.deb pgdg 3.7.0 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg24.04+1_arm64.deb pgdg 3.7.0 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg24.04+1_arm64.deb pgdg 3.6.1 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg26.04+2_amd64.deb pgdg 3.7.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg26.04+1_amd64.deb pgdg 3.7.0 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg26.04+1_amd64.deb pgdg 3.6.1 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg26.04+2_arm64.deb pgdg 3.7.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.7.0-1.pgdg26.04+1_arm64.deb pgdg 3.7.0 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.7.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-decoderbufs postgresql-15-decoderbufs_3.6.1-1.pgdg26.04+1_arm64.deb pgdg 3.6.1 39.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/postgres-decoderbufs/postgresql-15-decoderbufs_3.6.1-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `decoderbufs` 扩展的 RPM / DEB 包：

```bash
pig build pkg decoderbufs         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `decoderbufs` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install decoderbufs;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y decoderbufs -v 19  # PG 19
pig ext install -y decoderbufs -v 18  # PG 18
pig ext install -y decoderbufs -v 17  # PG 17
pig ext install -y decoderbufs -v 16  # PG 16
pig ext install -y decoderbufs -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y postgres-decoderbufs_19       # PG 19
dnf install -y postgres-decoderbufs_18       # PG 18
dnf install -y postgres-decoderbufs_17       # PG 17
dnf install -y postgres-decoderbufs_16       # PG 16
dnf install -y postgres-decoderbufs_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-decoderbufs   # PG 19
apt install -y postgresql-18-decoderbufs   # PG 18
apt install -y postgresql-17-decoderbufs   # PG 17
apt install -y postgresql-16-decoderbufs   # PG 16
apt install -y postgresql-15-decoderbufs   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'decoderbufs';
```


## 用法

来源：

- [Debezium decoderbufs 3.6.0.Final README](https://github.com/debezium/postgres-decoderbufs/blob/v3.6.0.Final/README.md)
- [Output-plugin控制文件](https://github.com/debezium/postgres-decoderbufs/blob/v3.6.0.Final/decoderbufs.control)
- [Protocol Buffers模式](https://github.com/debezium/postgres-decoderbufs/blob/v3.6.0.Final/proto/pg_logicaldec.proto)

`decoderbufs` 是一个无头的PostgreSQL逻辑复制输出插件，由Debezium PostgreSQL连接器使用。它将WAL更改转换为Protocol Buffers消息；它不会创建用户SQL模式，并不需要 `CREATE EXTENSION`。

### 配置PostgreSQL

在 `postgresql.conf` 中启用该插件和逻辑复制，根据预期的消费者调整发送者和槽限制，然后重启PostgreSQL：

```conf
shared_preload_libraries = 'decoderbufs'
wal_level = logical
max_wal_senders = 8
max_replication_slots = 4
```

复制登录也需要具有 `REPLICATION` 属性，并且需要一个匹配的 `pg_hba.conf` 规则。使用适用于网络的安全认证方式，而不是README中的本地演示设置。

### 核心工作流程

创建一个输出插件为 `decoderbufs` 的逻辑槽：

```sql
SELECT *
FROM pg_create_logical_replication_slot('decoderbufs_demo', 'decoderbufs');
```

在 `psql` 中检查时，请向插件请求调试文本：

```sql
SELECT data
FROM pg_logical_slot_peek_changes(
  'decoderbufs_demo', NULL, NULL, 'debug-mode', '1'
);

SELECT data
FROM pg_logical_slot_get_changes(
  'decoderbufs_demo', NULL, NULL, 'debug-mode', '1'
);
```

`peek` 不改变已确认的位置；`get` 会将其向前推进。正常的Debezium操作将消费由 `pg_logicaldec.proto` 定义的二进制消息，而不是启用调试模式。

### 关键对象和边界

- `decoderbufs` 是创建槽时传递的逻辑复制输出插件名称。
- `debug-mode = 1` 只用于故障排除的人类可读输出。
- Protobuf 消息携带事务元数据、关系和列信息、操作类型、旧键以及带类型的值。
- 需要为 `UPDATE` 和 `DELETE` 表提供足够的数据的表需要适当的 `REPLICA IDENTITY`。

逻辑槽保留WAL直到消费者确认进度。监控 `pg_replication_slots` 并故意删除废弃的槽以防止磁盘耗尽。模式变更、复制标识符、不支持的数据类型映射和大事务应与匹配的Debezium连接器版本一起进行测试。

上游构建需要PostgreSQL 9.6或更高版本以及protobuf-c；当可用时，会编译PostGIS支持。包发布跟随Debezium到3.6.0.Final，而插件控制元数据保持SQL版本0.1.0，因为这是一个输出插件而不是基于迁移的SQL扩展。
