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
| [**`pgmqtt`**](/ext/e/pgmqtt) | `0.1.0` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license elv2" href="/ext/license#elv2">ELv2</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9620  | [**`pgmqtt`**](/ext/e/pgmqtt) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> manually upgraded PGRX from 0.16.1 to 0.17.0 by Vonng; requires wal_level = logical for CDC.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmqtt` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmqtt_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmqtt` | - |
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
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
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
@ u26.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb
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
@ u26.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb
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
@ u26.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb
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
@ u26.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb
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
@ u26.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb pigsty 0.1.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.1.0-2PIGSTY~resolute_arm64.deb
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

来源：[README](https://github.com/RayElg/pgmqtt/blob/main/README.md), [interfaces](https://github.com/RayElg/pgmqtt/blob/main/docs/interfaces.md), [configuration](https://github.com/RayElg/pgmqtt/blob/main/docs/configuration.md), [limitations](https://github.com/RayElg/pgmqtt/blob/main/docs/limitations.md), [Cargo.toml](https://github.com/RayElg/pgmqtt/blob/main/extension/Cargo.toml)

`pgmqtt` 是一个 `pgrx` 扩展，会在 PostgreSQL 中嵌入 MQTT broker，并使用 change data capture 将表变更转为 MQTT 消息。它也支持 inbound topic mappings，让 MQTT publish 可向 PostgreSQL 表插入行。

```sql
CREATE EXTENSION pgmqtt;
```

### Outbound Mapping

将表变更发布到 topic：

```sql
SELECT pgmqtt_add_outbound_mapping(
  'public',
  'my_table',
  'topics/{{ op | lower }}',
  '{{ columns | tojson }}',
  1
);
```

有了该 mapping 后，`INSERT`、`UPDATE` 和 `DELETE` 会把 JSON payload 发布到 `topics/insert` 等 topic。文档化函数签名还接受可选的 `qos integer DEFAULT 0` 和 `template_type text DEFAULT 'jinja2'`。

### Inbound Mapping

从 MQTT publish 插入行：

```sql
SELECT pgmqtt_add_inbound_mapping(
  'sensor/{site_id}/temperature',
  'sensor_readings',
  '{"site_id": "{site_id}", "value": "$.temperature"}'::jsonb
);
```

向 `sensor/site-1/temperature` 发布 `{"temperature": 22.5}` 会向 `sensor_readings` 插入一行。

Inbound mappings 也可通过传入 `op`、`conflict_columns`、`target_schema`、`mapping_name` 和 `template_type` 执行 `upsert` 与 `delete` 操作。Topic patterns 使用 `{variable}` 捕获；JSON payload fields 使用 `$.temperature`、`$payload`、`$topic` 等表达式。

### 查看和删除 Mappings

```sql
SELECT * FROM pgmqtt_list_outbound_mappings();
SELECT pgmqtt_remove_outbound_mapping('public', 'my_table');

SELECT * FROM pgmqtt_list_inbound_mappings();
SELECT pgmqtt_remove_inbound_mapping('temp_readings');

SELECT * FROM pgmqtt_status();
```

`pgmqtt_status()` 报告 active connections、subscriptions、retained messages、pending session messages、CDC mappings、CDC slot state、inbound mappings、pending inbound writes 和 dead letters。

### MQTT Client 示例

```bash
mosquitto_sub -h localhost -t 'topics/#'
mosquitto_pub -h localhost -t 'sensor/site-1/temperature' -m '{"temperature": 22.5}'
```

### 配置

文档化 GUC 位于 `pgmqtt` namespace 下：

```sql
ALTER SYSTEM SET pgmqtt.cdc_every_n_ticks = 16;
SELECT pg_reload_conf();
```

Listener GUC 包括 `pgmqtt.mqtt_enabled`、`pgmqtt.mqtt_port`（`1883`）、`pgmqtt.ws_enabled`、`pgmqtt.ws_port`（`9001`）、`pgmqtt.mqtts_enabled`、`pgmqtt.mqtts_port`（`8883`）、`pgmqtt.wss_enabled`、`pgmqtt.wss_port`（`9002`）。TLS 和认证设置包括 `pgmqtt.tls_cert_file`、`pgmqtt.tls_key_file`、`pgmqtt.license_key`、`pgmqtt.jwt_public_key`、`pgmqtt.jwt_required`、`pgmqtt.jwt_required_ws`。

性能和可观测性 GUC 包括 `pgmqtt.tick_interval_ms`、`pgmqtt.max_client_buffer_bytes`、`pgmqtt.cdc_every_n_ticks`、`pgmqtt.debug_log`、`pgmqtt.metrics_snapshot_interval`、`pgmqtt.metrics_retention_days`、`pgmqtt.metrics_connections_cache_interval`、`pgmqtt.metrics_hook_function`、`pgmqtt.metrics_notify_channel`。Listener 和 TLS 设置在 MQTT background worker 启动时读取，因此需要重启 worker，而不是只执行 `pg_reload_conf()`。

### 注意事项

- README 要求 `wal_level = logical`；没有 logical decoding 时 CDC 侧无法工作。
- 本项目 CSV 跟踪版本 `0.1.0`、PostgreSQL 14-18，以及包侧 `pgrx` `0.17.0` rebuild note。上游 `Cargo.toml` 仍展示较旧的 build defaults，因此这里以 CSV 作为 package/platform 权威来源。
- 文档记录支持 MQTT 5.0 和 MQTT 3.1.1 clients。QoS 0 和 QoS 1 受支持；QoS 2 未实现，请求 QoS 2 的 subscriptions 会降级到 QoS 1。
- CDC 捕获 `INSERT`、`UPDATE` 和 `DELETE`；不捕获 DDL changes 和 `TRUNCATE`。`DELETE` 可能需要 `REPLICA IDENTITY FULL`。
