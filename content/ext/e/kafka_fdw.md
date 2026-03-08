---
title: "kafka_fdw"
linkTitle: "kafka_fdw"
description: "Kafka外部数据源包装器"
weight: 8730
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/adjust/kafka_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">adjust/kafka_fdw</div>
    <div class="ext-card__desc">https://github.com/adjust/kafka_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="kafka_fdw-0.0.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">kafka_fdw-0.0.3.tar.gz</div>
    <div class="ext-card__desc">kafka_fdw-0.0.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`kafka_fdw`**](/ext/e/kafka_fdw) | `0.0.3` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8730  | [**`kafka_fdw`**](/ext/e/kafka_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgmq`](/ext/e/pgmq) [`mongo_fdw`](/ext/e/mongo_fdw) [`redis_fdw`](/ext/e/redis_fdw) [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`redis`](/ext/e/redis) [`hdfs_fdw`](/ext/e/hdfs_fdw) [`wal2json`](/ext/e/wal2json) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `kafka_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `kafka_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-kafka-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 2 | AVAIL PIGSTY 0.0.3 2 | AVAIL PIGSTY 0.0.3 2 |
| el8.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 2 | AVAIL PIGSTY 0.0.3 2 | AVAIL PIGSTY 0.0.3 2 |
| el9.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 2 | AVAIL PIGSTY 0.0.3 2 | AVAIL PIGSTY 0.0.3 2 |
| el9.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 2 | AVAIL PIGSTY 0.0.3 2 | AVAIL PIGSTY 0.0.3 2 |
| el10.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 | AVAIL PIGSTY 0.0.3 1 |
@ el8.x86_64 18 kafka_fdw_18 kafka_fdw_18-0.0.3-2PIGSTY.el8.x86_64.rpm pigsty 0.0.3 34.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/kafka_fdw_18-0.0.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 kafka_fdw_18 kafka_fdw_18-0.0.3-2PIGSTY.el8.aarch64.rpm pigsty 0.0.3 33.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/kafka_fdw_18-0.0.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 kafka_fdw_18 kafka_fdw_18-0.0.3-2PIGSTY.el9.x86_64.rpm pigsty 0.0.3 33.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/kafka_fdw_18-0.0.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 kafka_fdw_18 kafka_fdw_18-0.0.3-2PIGSTY.el9.aarch64.rpm pigsty 0.0.3 33.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/kafka_fdw_18-0.0.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 kafka_fdw_18 kafka_fdw_18-0.0.3-2PIGSTY.el10.x86_64.rpm pigsty 0.0.3 34.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/kafka_fdw_18-0.0.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 kafka_fdw_18 kafka_fdw_18-0.0.3-2PIGSTY.el10.aarch64.rpm pigsty 0.0.3 33.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/kafka_fdw_18-0.0.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-kafka-fdw postgresql-18-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb pigsty 0.0.3 79.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-18-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-kafka-fdw postgresql-18-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb pigsty 0.0.3 76.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-18-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-kafka-fdw postgresql-18-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb pigsty 0.0.3 79.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-18-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-kafka-fdw postgresql-18-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb pigsty 0.0.3 77.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-18-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-kafka-fdw postgresql-18-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb pigsty 0.0.3 84.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-18-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-kafka-fdw postgresql-18-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb pigsty 0.0.3 83.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-18-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-kafka-fdw postgresql-18-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb pigsty 0.0.3 82.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-18-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-kafka-fdw postgresql-18-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb pigsty 0.0.3 81.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-18-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb
@ el8.x86_64 17 kafka_fdw_17 kafka_fdw_17-0.0.3-2PIGSTY.el8.x86_64.rpm pigsty 0.0.3 34.6KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/kafka_fdw_17-0.0.3-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 kafka_fdw_17 kafka_fdw_17-0.0.3-2PIGSTY.el8.aarch64.rpm pigsty 0.0.3 33.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/kafka_fdw_17-0.0.3-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 kafka_fdw_17 kafka_fdw_17-0.0.3-2PIGSTY.el9.x86_64.rpm pigsty 0.0.3 33.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/kafka_fdw_17-0.0.3-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 kafka_fdw_17 kafka_fdw_17-0.0.3-2PIGSTY.el9.aarch64.rpm pigsty 0.0.3 33.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/kafka_fdw_17-0.0.3-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 kafka_fdw_17 kafka_fdw_17-0.0.3-2PIGSTY.el10.x86_64.rpm pigsty 0.0.3 34.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/kafka_fdw_17-0.0.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 kafka_fdw_17 kafka_fdw_17-0.0.3-2PIGSTY.el10.aarch64.rpm pigsty 0.0.3 33.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/kafka_fdw_17-0.0.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-kafka-fdw postgresql-17-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb pigsty 0.0.3 78.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-17-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-kafka-fdw postgresql-17-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb pigsty 0.0.3 76.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-17-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-kafka-fdw postgresql-17-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb pigsty 0.0.3 78.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-17-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-kafka-fdw postgresql-17-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb pigsty 0.0.3 77.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-17-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-kafka-fdw postgresql-17-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb pigsty 0.0.3 106.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-17-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-kafka-fdw postgresql-17-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb pigsty 0.0.3 104.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-17-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-kafka-fdw postgresql-17-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb pigsty 0.0.3 82.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-17-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-kafka-fdw postgresql-17-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb pigsty 0.0.3 80.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-17-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb
@ el8.x86_64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-2PIGSTY.el8.x86_64.rpm pigsty 0.0.3 37.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/kafka_fdw_16-0.0.3-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 35.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/kafka_fdw_16-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-2PIGSTY.el8.aarch64.rpm pigsty 0.0.3 35.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/kafka_fdw_16-0.0.3-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 33.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/kafka_fdw_16-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-2PIGSTY.el9.x86_64.rpm pigsty 0.0.3 36.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/kafka_fdw_16-0.0.3-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 35.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/kafka_fdw_16-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-2PIGSTY.el9.aarch64.rpm pigsty 0.0.3 35.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/kafka_fdw_16-0.0.3-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 34.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/kafka_fdw_16-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-2PIGSTY.el10.x86_64.rpm pigsty 0.0.3 36.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/kafka_fdw_16-0.0.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 kafka_fdw_16 kafka_fdw_16-0.0.3-2PIGSTY.el10.aarch64.rpm pigsty 0.0.3 36.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/kafka_fdw_16-0.0.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-kafka-fdw postgresql-16-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb pigsty 0.0.3 84.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-16-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-kafka-fdw postgresql-16-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb pigsty 0.0.3 81.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-16-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-kafka-fdw postgresql-16-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb pigsty 0.0.3 84.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-16-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-kafka-fdw postgresql-16-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb pigsty 0.0.3 82.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-16-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-kafka-fdw postgresql-16-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb pigsty 0.0.3 112.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-16-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-kafka-fdw postgresql-16-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb pigsty 0.0.3 110.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-16-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-kafka-fdw postgresql-16-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb pigsty 0.0.3 88.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-16-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-kafka-fdw postgresql-16-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb pigsty 0.0.3 86.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-16-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb
@ el8.x86_64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-2PIGSTY.el8.x86_64.rpm pigsty 0.0.3 37.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/kafka_fdw_15-0.0.3-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 35.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/kafka_fdw_15-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-2PIGSTY.el8.aarch64.rpm pigsty 0.0.3 35.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/kafka_fdw_15-0.0.3-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 33.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/kafka_fdw_15-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-2PIGSTY.el9.x86_64.rpm pigsty 0.0.3 36.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/kafka_fdw_15-0.0.3-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 36.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/kafka_fdw_15-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-2PIGSTY.el9.aarch64.rpm pigsty 0.0.3 35.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/kafka_fdw_15-0.0.3-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 35.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/kafka_fdw_15-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-2PIGSTY.el10.x86_64.rpm pigsty 0.0.3 37.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/kafka_fdw_15-0.0.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 kafka_fdw_15 kafka_fdw_15-0.0.3-2PIGSTY.el10.aarch64.rpm pigsty 0.0.3 36.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/kafka_fdw_15-0.0.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-kafka-fdw postgresql-15-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb pigsty 0.0.3 84.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-15-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-kafka-fdw postgresql-15-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb pigsty 0.0.3 81.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-15-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-kafka-fdw postgresql-15-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb pigsty 0.0.3 84.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-15-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-kafka-fdw postgresql-15-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb pigsty 0.0.3 82.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-15-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-kafka-fdw postgresql-15-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb pigsty 0.0.3 111.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-15-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-kafka-fdw postgresql-15-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb pigsty 0.0.3 109.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-15-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-kafka-fdw postgresql-15-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb pigsty 0.0.3 88.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-15-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-kafka-fdw postgresql-15-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb pigsty 0.0.3 87.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-15-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb
@ el8.x86_64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-2PIGSTY.el8.x86_64.rpm pigsty 0.0.3 37.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/kafka_fdw_14-0.0.3-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-1PIGSTY.el8.x86_64.rpm pigsty 0.0.3 35.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/kafka_fdw_14-0.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-2PIGSTY.el8.aarch64.rpm pigsty 0.0.3 35.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/kafka_fdw_14-0.0.3-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-1PIGSTY.el8.aarch64.rpm pigsty 0.0.3 33.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/kafka_fdw_14-0.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-2PIGSTY.el9.x86_64.rpm pigsty 0.0.3 36.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/kafka_fdw_14-0.0.3-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-1PIGSTY.el9.x86_64.rpm pigsty 0.0.3 36.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/kafka_fdw_14-0.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-2PIGSTY.el9.aarch64.rpm pigsty 0.0.3 35.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/kafka_fdw_14-0.0.3-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-1PIGSTY.el9.aarch64.rpm pigsty 0.0.3 35.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/kafka_fdw_14-0.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-2PIGSTY.el10.x86_64.rpm pigsty 0.0.3 37.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/kafka_fdw_14-0.0.3-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 kafka_fdw_14 kafka_fdw_14-0.0.3-2PIGSTY.el10.aarch64.rpm pigsty 0.0.3 36.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/kafka_fdw_14-0.0.3-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-kafka-fdw postgresql-14-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb pigsty 0.0.3 84.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-14-kafka-fdw_0.0.3-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-kafka-fdw postgresql-14-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb pigsty 0.0.3 81.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/k/kafka-fdw/postgresql-14-kafka-fdw_0.0.3-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-kafka-fdw postgresql-14-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb pigsty 0.0.3 84.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-14-kafka-fdw_0.0.3-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-kafka-fdw postgresql-14-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb pigsty 0.0.3 82.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/k/kafka-fdw/postgresql-14-kafka-fdw_0.0.3-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-kafka-fdw postgresql-14-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb pigsty 0.0.3 111.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-14-kafka-fdw_0.0.3-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-kafka-fdw postgresql-14-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb pigsty 0.0.3 109.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/k/kafka-fdw/postgresql-14-kafka-fdw_0.0.3-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-kafka-fdw postgresql-14-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb pigsty 0.0.3 88.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-14-kafka-fdw_0.0.3-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-kafka-fdw postgresql-14-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb pigsty 0.0.3 86.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/k/kafka-fdw/postgresql-14-kafka-fdw_0.0.3-2PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `kafka_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg kafka_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `kafka_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install kafka_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y kafka_fdw -v 18  # PG 18
pig ext install -y kafka_fdw -v 17  # PG 17
pig ext install -y kafka_fdw -v 16  # PG 16
pig ext install -y kafka_fdw -v 15  # PG 15
pig ext install -y kafka_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y kafka_fdw_18       # PG 18
dnf install -y kafka_fdw_17       # PG 17
dnf install -y kafka_fdw_16       # PG 16
dnf install -y kafka_fdw_15       # PG 15
dnf install -y kafka_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-kafka-fdw   # PG 18
apt install -y postgresql-17-kafka-fdw   # PG 17
apt install -y postgresql-16-kafka-fdw   # PG 16
apt install -y postgresql-15-kafka-fdw   # PG 15
apt install -y postgresql-14-kafka-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION kafka_fdw;
```
