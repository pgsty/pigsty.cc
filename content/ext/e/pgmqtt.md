---
title: "pgmqtt"
linkTitle: "pgmqtt"
description: "PostgreSQL 的 CDC 到 MQTT 代理扩展"
weight: 9620
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/RayElg/pgmqtt">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">RayElg/pgmqtt</div>
    <div class="ext-card__desc">https://github.com/RayElg/pgmqtt</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgmqtt-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmqtt-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pgmqtt-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmqtt`**](/ext/e/pgmqtt) | `0.1.0` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license elastic license 20" href="/ext/license#elasticlicense20">Elastic License 2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9620  | [**`pgmqtt`**](/ext/e/pgmqtt) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> manually upgraded PGRX from 0.16.1 to 0.17.0 by Vonng; requires wal_level = logical for CDC.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14,13" >}} | `pgmqtt` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14,13" >}} | `pgmqtt_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14,13" >}} | `postgresql-$v-pgmqtt` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pgmqtt_18 pgmqtt_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgmqtt_18 pgmqtt_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgmqtt_18 pgmqtt_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgmqtt_18 pgmqtt_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgmqtt_18 pgmqtt_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgmqtt_18 pgmqtt_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgmqtt_17 pgmqtt_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgmqtt_17 pgmqtt_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgmqtt_17 pgmqtt_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgmqtt_17 pgmqtt_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgmqtt_17 pgmqtt_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgmqtt_17 pgmqtt_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgmqtt_16 pgmqtt_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgmqtt_16 pgmqtt_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgmqtt_16 pgmqtt_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgmqtt_16 pgmqtt_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgmqtt_16 pgmqtt_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgmqtt_16 pgmqtt_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgmqtt_15 pgmqtt_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgmqtt_15 pgmqtt_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgmqtt_15 pgmqtt_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgmqtt_15 pgmqtt_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgmqtt_15 pgmqtt_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgmqtt_15 pgmqtt_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgmqtt_14 pgmqtt_14-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_14-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgmqtt_14 pgmqtt_14-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_14-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgmqtt_14 pgmqtt_14-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_14-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgmqtt_14 pgmqtt_14-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_14-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgmqtt_14 pgmqtt_14-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_14-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgmqtt_14 pgmqtt_14-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_14-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.1.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgmqtt` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgmqtt         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgmqtt` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgmqtt;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgmqtt -v 18  # PG 18
pig ext install -y pgmqtt -v 17  # PG 17
pig ext install -y pgmqtt -v 16  # PG 16
pig ext install -y pgmqtt -v 15  # PG 15
pig ext install -y pgmqtt -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgmqtt_18       # PG 18
dnf install -y pgmqtt_17       # PG 17
dnf install -y pgmqtt_16       # PG 16
dnf install -y pgmqtt_15       # PG 15
dnf install -y pgmqtt_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgmqtt   # PG 18
apt install -y postgresql-17-pgmqtt   # PG 17
apt install -y postgresql-16-pgmqtt   # PG 16
apt install -y postgresql-15-pgmqtt   # PG 15
apt install -y postgresql-14-pgmqtt   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgmqtt;
```

## 用法

来源: [official README](https://github.com/RayElg/pgmqtt/blob/main/README.md), [official repo](https://github.com/RayElg/pgmqtt)

`pgmqtt` 是一个 `pgrx` 扩展，它把 MQTT broker 嵌入 PostgreSQL，并使用 change data capture 将表变更转换为 MQTT 消息。它也支持入站 topic 映射，使 MQTT publish 可以向 PostgreSQL 表插入行。

```sql
CREATE EXTENSION pgmqtt;
```

### 出站映射

把表变更发布到 topic：

```sql
SELECT pgmqtt_add_outbound_mapping(
  'public',
  'my_table',
  'topics/{{ op | lower }}',
  '{{ columns | tojson }}'
);
```

使用这条映射后，`INSERT`、`UPDATE` 和 `DELETE` 会把 JSON 负载发布到 `topics/insert` 之类的 topic。

### 入站映射

把 MQTT publish 写入表：

```sql
SELECT pgmqtt_add_inbound_mapping(
  'sensor/{site_id}/temperature',
  'sensor_readings',
  '{"site_id": "{site_id}", "value": "$.temperature"}'::jsonb
);
```

向 `sensor/site-1/temperature` 发布 `{"temperature": 22.5}` 会向 `sensor_readings` 插入一行。

### MQTT 客户端示例

```bash
mosquitto_sub -h localhost -t 'topics/#'
mosquitto_pub -h localhost -t 'sensor/site-1/temperature' -m '{"temperature": 22.5}'
```

### 注意事项

- README 要求 `wal_level = logical`；没有 logical decoding，CDC 部分就无法工作。
- 上游文档目前只有 README 级别，因此已记录的 SQL 接口主要限于入站和出站映射工作流。
