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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgmqtt-0.4.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmqtt-0.4.1.tar.gz</div>
    <div class="ext-card__desc">pgmqtt-0.4.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmqtt`**](/ext/e/pgmqtt) | `0.4.1` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license elastic20" href="/ext/license#elastic20">Elastic-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9620  | [**`pgmqtt`**](/ext/e/pgmqtt) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> requires wal_level = logical for CDC.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pgmqtt` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pgmqtt_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmqtt` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
@ el8.x86_64 18 pgmqtt_18 pgmqtt_18-0.4.1-1PIGSTY.el8.x86_64.rpm pigsty 0.4.1 3.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_18-0.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgmqtt_18 pgmqtt_18-0.4.1-1PIGSTY.el8.aarch64.rpm pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_18-0.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgmqtt_18 pgmqtt_18-0.4.1-1PIGSTY.el9.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_18-0.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgmqtt_18 pgmqtt_18-0.4.1-1PIGSTY.el9.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_18-0.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgmqtt_18 pgmqtt_18-0.4.1-1PIGSTY.el10.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_18-0.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgmqtt_18 pgmqtt_18-0.4.1-1PIGSTY.el10.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_18-0.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb pigsty 0.4.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb pigsty 0.4.1 3.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgmqtt postgresql-18-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-18-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgmqtt_17 pgmqtt_17-0.4.1-1PIGSTY.el8.x86_64.rpm pigsty 0.4.1 3.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_17-0.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgmqtt_17 pgmqtt_17-0.4.1-1PIGSTY.el8.aarch64.rpm pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_17-0.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgmqtt_17 pgmqtt_17-0.4.1-1PIGSTY.el9.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_17-0.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgmqtt_17 pgmqtt_17-0.4.1-1PIGSTY.el9.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_17-0.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgmqtt_17 pgmqtt_17-0.4.1-1PIGSTY.el10.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_17-0.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgmqtt_17 pgmqtt_17-0.4.1-1PIGSTY.el10.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_17-0.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgmqtt postgresql-17-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-17-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgmqtt_16 pgmqtt_16-0.4.1-1PIGSTY.el8.x86_64.rpm pigsty 0.4.1 3.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_16-0.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgmqtt_16 pgmqtt_16-0.4.1-1PIGSTY.el8.aarch64.rpm pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_16-0.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgmqtt_16 pgmqtt_16-0.4.1-1PIGSTY.el9.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_16-0.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgmqtt_16 pgmqtt_16-0.4.1-1PIGSTY.el9.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_16-0.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgmqtt_16 pgmqtt_16-0.4.1-1PIGSTY.el10.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_16-0.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgmqtt_16 pgmqtt_16-0.4.1-1PIGSTY.el10.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_16-0.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgmqtt postgresql-16-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-16-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgmqtt_15 pgmqtt_15-0.4.1-1PIGSTY.el8.x86_64.rpm pigsty 0.4.1 3.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_15-0.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgmqtt_15 pgmqtt_15-0.4.1-1PIGSTY.el8.aarch64.rpm pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_15-0.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgmqtt_15 pgmqtt_15-0.4.1-1PIGSTY.el9.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_15-0.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgmqtt_15 pgmqtt_15-0.4.1-1PIGSTY.el9.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_15-0.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgmqtt_15 pgmqtt_15-0.4.1-1PIGSTY.el10.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_15-0.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgmqtt_15 pgmqtt_15-0.4.1-1PIGSTY.el10.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_15-0.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgmqtt postgresql-15-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-15-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgmqtt_14 pgmqtt_14-0.4.1-1PIGSTY.el8.x86_64.rpm pigsty 0.4.1 3.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmqtt_14-0.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgmqtt_14 pgmqtt_14-0.4.1-1PIGSTY.el8.aarch64.rpm pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmqtt_14-0.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgmqtt_14 pgmqtt_14-0.4.1-1PIGSTY.el9.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmqtt_14-0.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgmqtt_14 pgmqtt_14-0.4.1-1PIGSTY.el9.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmqtt_14-0.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgmqtt_14 pgmqtt_14-0.4.1-1PIGSTY.el10.x86_64.rpm pigsty 0.4.1 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmqtt_14-0.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgmqtt_14 pgmqtt_14-0.4.1-1PIGSTY.el10.aarch64.rpm pigsty 0.4.1 3.3MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmqtt_14-0.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb pigsty 0.4.1 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb pigsty 0.4.1 3.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgmqtt postgresql-14-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb pigsty 0.4.1 2.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmqtt/postgresql-14-pgmqtt_0.4.1-1PIGSTY~resolute_arm64.deb
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

来源：

- [pgmqtt 0.4.1 README](https://github.com/RayElg/pgmqtt/blob/0.4.1/README.md)
- [pgmqtt 0.4.1 interfaces](https://github.com/RayElg/pgmqtt/blob/0.4.1/docs/interfaces.md)
- [pgmqtt 0.4.1 configuration](https://github.com/RayElg/pgmqtt/blob/0.4.1/docs/configuration.md)
- [pgmqtt 0.4.1 limitations](https://github.com/RayElg/pgmqtt/blob/0.4.1/docs/limitations.md)
- [pgmqtt 0.4.1 release notes](https://github.com/RayElg/pgmqtt/releases/tag/0.4.1)

pgmqtt 将一个 MQTT 代理嵌入到 PostgreSQL 中。它可以通过逻辑解码发布 INSERT、UPDATE 和 DELETE 变化，并可以将传入的 MQTT 主题和 JSON 载荷映射到表写入操作。当数据库与 MQTT 的集成值得在 PostgreSQL 服务器进程中运行网络代理时，请使用此扩展。

### 预加载并创建扩展

设置逻辑 WAL 并预加载工作进程，然后重启 PostgreSQL：

    wal_level = logical
    shared_preload_libraries = 'pgmqtt'

重启后创建扩展：

    CREATE EXTENSION pgmqtt;

监听地址、端口、认证和 TLS 设置由后台工作进程读取。文档中注明仅在启动时需要的设置需要重新启动工作进程或服务器，而不是仅仅使用 pg_reload_conf()。

### 发布表变化

创建一个传出映射：

    SELECT pgmqtt_add_outbound_mapping(
      'public',
      'orders',
      'orders/{{ op | lower }}',
      '{{ columns | tojson }}',
      1
    );

该映射将行变化发布到如 orders/insert 这样的主题。接口还接受 QoS 和模板类型（在支持时）。版本 0.4.1 每次最多处理 4096 条 CDC 变化。

检查或移除传出映射：

    SELECT * FROM pgmqtt_list_outbound_mappings();
    SELECT pgmqtt_remove_outbound_mapping('public', 'orders');

### 从 MQTT 写入行

将捕获的主题片段和 JSON 字段映射到目标表：

    SELECT pgmqtt_add_inbound_mapping(
      'sensor/{site_id}/temperature',
      'sensor_readings',
      '{"site_id":"{site_id}","value":"$.temperature"}'::jsonb
    );

传出映射支持插入和文档中描述的 UPSERT 或 DELETE 模式，具有如目标模式、冲突列、映射名称和模板类型等选项。仅授予工作进程所需的表权限，并验证数据包类型和约束。

    SELECT * FROM pgmqtt_list_inbound_mappings();
    SELECT pgmqtt_remove_inbound_mapping('temp_readings');

### 管理与状态

    SELECT * FROM pgmqtt_status();
    SELECT pgmqtt_disconnect_client('device-42');
    SELECT pgmqtt_disconnect_role('mqtt_devices');
    SELECT pgmqtt_reload_acls('*');

pgmqtt_status 报告监听器、客户端、订阅、保留消息、CDC、传出写入和死信队列状态。管理调用由工作进程异步处理并排队。

### 配置索引

- pgmqtt.mqtt_enabled 和 pgmqtt.mqtt_port: TCP MQTT 监听器。
- pgmqtt.ws_enabled 和 pgmqtt.ws_port: WebSocket 监听器。
- pgmqtt.tick_interval_ms 和 pgmqtt.cdc_every_n_ticks: 工作进程的节拍频率。
- pgmqtt.max_client_buffer_bytes: 每个客户端的流控边界。
- pgmqtt.debug_log 和 pgmqtt.metrics_*: 调试和指标集成。
- pgmqtt TLS, JWT, 密码认证和 ACL 设置: 传输和客户端访问控制；社区版与企业版之间有所不同。在设置监听器期望之前，请验证版本。

### 协议与 CDC 边界

- 支持 MQTT 5.0 和 3.1.1 版本。实现了 QoS 0 和 1，请求的 QoS 2 被降级为 QoS 1。
- CDC 包括 INSERT、UPDATE 和 DELETE 操作，不包括 DDL 或 TRUNCATE。DELETE 数据包可能需要 REPLICA IDENTITY FULL。
- CDC 环有有限容量 8192，并在溢出时丢弃最旧的记录。QoS 0 主题缓冲区限制为 4096 并也丢弃最旧条目；QoS 1 缓冲区可以无固定上限增长。
- 社区版通过代理文档 TLS，而原生 TLS 和一些 JWT 特性是企业版边界。在设置监听器期望之前，请验证版本。

### v0.4.1 及操作

0.4 系列统一了 HTTP/工作进程处理，并减少了恐慌路径；0.4.1 提高了 CDC 批次处理到 4096 条记录。这些更改提高了吞吐量和结构，但并不保证在所有负载或崩溃情况下嵌入的代理是无损的。

将代理运行在 PostgreSQL 中扩展了数据库网络和资源边界。隔离监听接口、强制执行认证和主题 ACL、监控工作进程滞后和丢失缓冲区，并在生产使用前测试故障转移和重启行为。
