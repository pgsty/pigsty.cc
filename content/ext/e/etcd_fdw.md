---
title: "etcd_fdw"
linkTitle: "etcd_fdw"
description: "etcd分布式键值存储外部数据包装器"
weight: 8660
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/cybertec-postgresql/etcd_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">cybertec-postgresql/etcd_fdw</div>
    <div class="ext-card__desc">https://github.com/cybertec-postgresql/etcd_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/etcd_fdw-0.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">etcd_fdw-0.0.0.tar.gz</div>
    <div class="ext-card__desc">etcd_fdw-0.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`etcd_fdw`**](/ext/e/etcd_fdw) | `0.0.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8660  | [**`etcd_fdw`**](/ext/e/etcd_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`wrappers`](/ext/e/wrappers) [`redis_fdw`](/ext/e/redis_fdw) [`kafka_fdw`](/ext/e/kafka_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`mysql_fdw`](/ext/e/mysql_fdw) [`mongo_fdw`](/ext/e/mongo_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.0` | {{< pgvers "18,17,16,15,14" >}} | `etcd_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.0` | {{< pgvers "18,17,16,15,14" >}} | `etcd_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-etcd-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 | AVAIL PIGSTY 0.0.0 1 |
@ el8.x86_64 18 etcd_fdw_18 etcd_fdw_18-0.0.0-1PIGSTY.el8.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/etcd_fdw_18-0.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 etcd_fdw_18 etcd_fdw_18-0.0.0-1PIGSTY.el8.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/etcd_fdw_18-0.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 etcd_fdw_18 etcd_fdw_18-0.0.0-1PIGSTY.el9.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/etcd_fdw_18-0.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 etcd_fdw_18 etcd_fdw_18-0.0.0-1PIGSTY.el9.aarch64.rpm pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/etcd_fdw_18-0.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 etcd_fdw_18 etcd_fdw_18-0.0.0-1PIGSTY.el10.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/etcd_fdw_18-0.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 etcd_fdw_18 etcd_fdw_18-0.0.0-1PIGSTY.el10.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/etcd_fdw_18-0.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-etcd-fdw postgresql-18-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-18-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-etcd-fdw postgresql-18-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-18-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-etcd-fdw postgresql-18-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-18-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-etcd-fdw postgresql-18-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-18-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-etcd-fdw postgresql-18-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-18-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-etcd-fdw postgresql-18-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-18-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-etcd-fdw postgresql-18-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-18-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-etcd-fdw postgresql-18-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-18-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 etcd_fdw_17 etcd_fdw_17-0.0.0-1PIGSTY.el8.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/etcd_fdw_17-0.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 etcd_fdw_17 etcd_fdw_17-0.0.0-1PIGSTY.el8.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/etcd_fdw_17-0.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 etcd_fdw_17 etcd_fdw_17-0.0.0-1PIGSTY.el9.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/etcd_fdw_17-0.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 etcd_fdw_17 etcd_fdw_17-0.0.0-1PIGSTY.el9.aarch64.rpm pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/etcd_fdw_17-0.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 etcd_fdw_17 etcd_fdw_17-0.0.0-1PIGSTY.el10.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/etcd_fdw_17-0.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 etcd_fdw_17 etcd_fdw_17-0.0.0-1PIGSTY.el10.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/etcd_fdw_17-0.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-etcd-fdw postgresql-17-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-17-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-etcd-fdw postgresql-17-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-17-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-etcd-fdw postgresql-17-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-17-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-etcd-fdw postgresql-17-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-17-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-etcd-fdw postgresql-17-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-17-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-etcd-fdw postgresql-17-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-17-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-etcd-fdw postgresql-17-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-17-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-etcd-fdw postgresql-17-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-17-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 etcd_fdw_16 etcd_fdw_16-0.0.0-1PIGSTY.el8.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/etcd_fdw_16-0.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 etcd_fdw_16 etcd_fdw_16-0.0.0-1PIGSTY.el8.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/etcd_fdw_16-0.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 etcd_fdw_16 etcd_fdw_16-0.0.0-1PIGSTY.el9.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/etcd_fdw_16-0.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 etcd_fdw_16 etcd_fdw_16-0.0.0-1PIGSTY.el9.aarch64.rpm pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/etcd_fdw_16-0.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 etcd_fdw_16 etcd_fdw_16-0.0.0-1PIGSTY.el10.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/etcd_fdw_16-0.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 etcd_fdw_16 etcd_fdw_16-0.0.0-1PIGSTY.el10.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/etcd_fdw_16-0.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-etcd-fdw postgresql-16-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-16-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-etcd-fdw postgresql-16-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-16-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-etcd-fdw postgresql-16-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-16-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-etcd-fdw postgresql-16-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-16-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-etcd-fdw postgresql-16-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-16-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-etcd-fdw postgresql-16-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-16-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-etcd-fdw postgresql-16-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-16-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-etcd-fdw postgresql-16-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-16-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 etcd_fdw_15 etcd_fdw_15-0.0.0-1PIGSTY.el8.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/etcd_fdw_15-0.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 etcd_fdw_15 etcd_fdw_15-0.0.0-1PIGSTY.el8.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/etcd_fdw_15-0.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 etcd_fdw_15 etcd_fdw_15-0.0.0-1PIGSTY.el9.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/etcd_fdw_15-0.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 etcd_fdw_15 etcd_fdw_15-0.0.0-1PIGSTY.el9.aarch64.rpm pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/etcd_fdw_15-0.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 etcd_fdw_15 etcd_fdw_15-0.0.0-1PIGSTY.el10.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/etcd_fdw_15-0.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 etcd_fdw_15 etcd_fdw_15-0.0.0-1PIGSTY.el10.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/etcd_fdw_15-0.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-etcd-fdw postgresql-15-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-15-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-etcd-fdw postgresql-15-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-15-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-etcd-fdw postgresql-15-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-15-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-etcd-fdw postgresql-15-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-15-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-etcd-fdw postgresql-15-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-15-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-etcd-fdw postgresql-15-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-15-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-etcd-fdw postgresql-15-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-15-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-etcd-fdw postgresql-15-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-15-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 etcd_fdw_14 etcd_fdw_14-0.0.0-1PIGSTY.el8.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/etcd_fdw_14-0.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 etcd_fdw_14 etcd_fdw_14-0.0.0-1PIGSTY.el8.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/etcd_fdw_14-0.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 etcd_fdw_14 etcd_fdw_14-0.0.0-1PIGSTY.el9.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/etcd_fdw_14-0.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 etcd_fdw_14 etcd_fdw_14-0.0.0-1PIGSTY.el9.aarch64.rpm pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/etcd_fdw_14-0.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 etcd_fdw_14 etcd_fdw_14-0.0.0-1PIGSTY.el10.x86_64.rpm pigsty 0.0.0 1.7MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/etcd_fdw_14-0.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 etcd_fdw_14 etcd_fdw_14-0.0.0-1PIGSTY.el10.aarch64.rpm pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/etcd_fdw_14-0.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-etcd-fdw postgresql-14-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-14-etcd-fdw_0.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-etcd-fdw postgresql-14-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/e/etcd-fdw/postgresql-14-etcd-fdw_0.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-etcd-fdw postgresql-14-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-14-etcd-fdw_0.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-etcd-fdw postgresql-14-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb pigsty 0.0.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/e/etcd-fdw/postgresql-14-etcd-fdw_0.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-etcd-fdw postgresql-14-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb pigsty 0.0.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-14-etcd-fdw_0.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-etcd-fdw postgresql-14-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/e/etcd-fdw/postgresql-14-etcd-fdw_0.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-etcd-fdw postgresql-14-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb pigsty 0.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-14-etcd-fdw_0.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-etcd-fdw postgresql-14-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb pigsty 0.0.0 1.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/e/etcd-fdw/postgresql-14-etcd-fdw_0.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `etcd_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg etcd_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `etcd_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install etcd_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y etcd_fdw -v 18  # PG 18
pig ext install -y etcd_fdw -v 17  # PG 17
pig ext install -y etcd_fdw -v 16  # PG 16
pig ext install -y etcd_fdw -v 15  # PG 15
pig ext install -y etcd_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y etcd_fdw_18       # PG 18
dnf install -y etcd_fdw_17       # PG 17
dnf install -y etcd_fdw_16       # PG 16
dnf install -y etcd_fdw_15       # PG 15
dnf install -y etcd_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-etcd-fdw   # PG 18
apt install -y postgresql-17-etcd-fdw   # PG 17
apt install -y postgresql-16-etcd-fdw   # PG 16
apt install -y postgresql-15-etcd-fdw   # PG 15
apt install -y postgresql-14-etcd-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION etcd_fdw;
```




## 用法

- [介绍博客](https://www.cybertec-postgresql.com/en/bringing-etcd-to-the-database-with-rust-and-pgrx/)
- [Github 仓库](https://github.com/cybertec-postgresql/etcd_fdw)


-----------

## 快速上手

### 1. 启用扩展

```sql
CREATE EXTENSION etcd_fdw;
```

### 2. 创建外部数据包装器

```sql
CREATE FOREIGN DATA WRAPPER etcd_fdw
  HANDLER etcd_fdw_handler
  VALIDATOR etcd_fdw_validator;
```

### 3. 创建服务器

```sql
-- 基本连接
CREATE SERVER etcd_plain
  FOREIGN DATA WRAPPER etcd_fdw
  OPTIONS (connstr '127.0.0.1:2379');

-- 生产环境 etcd，启用认证和 SSL
CREATE SERVER etcd FOREIGN DATA WRAPPER etcd_fdw OPTIONS (
    connstr '127.0.0.1:2379',
    username 'root',
    password 'Etcd.Root',
    ssl_ca '/pg/cert/ca.crt',
    ssl_cert '/pg/cert/server.crt',
    ssl_key '/pg/cert/server.key'
);
```

### 4. 创建外部表

```sql
-- 基本表，映射所有键
CREATE FOREIGN TABLE etcd_kv (key TEXT, value TEXT) SERVER etcd OPTIONS (rowid_column 'key');

-- 带前缀过滤的表（仅包含以 '/config/' 开头的键）
CREATE FOREIGN TABLE etcd_config (key TEXT, value TEXT)
  SERVER etcd OPTIONS (rowid_column 'key', prefix '/config/');
```

### 5. 查询数据

```sql
-- 读取所有键
SELECT * FROM etcd_kv;

-- 按键模式过滤（支持下推）
SELECT * FROM etcd_kv WHERE key LIKE '/app/%';

-- 范围查询
SELECT * FROM etcd_kv WHERE key >= '/a' AND key < '/b';

-- 插入新键
INSERT INTO etcd_kv (key, value) VALUES ('/mykey', 'myvalue');

-- 删除键
DELETE FROM etcd_kv WHERE key = '/mykey';
```

### 6. 与 etcd 实时同步

在 PostgreSQL 外部所做的变更会立即可见：

```bash
# 通过 etcdctl 插入
etcdctl put '/config/db_pool_size' '20'
```

```sql
-- 在 PostgreSQL 中即时可见
SELECT * FROM etcd_config;
     key               | value
-----------------------+-------
 /config/db_pool_size  | 20
(1 row)
```

-----------

## 参考

### 服务器选项

| 选项              | 必填     | 说明                                   |
|-------------------|----------|----------------------------------------|
| `connstr`         | 是       | etcd 端点地址（例如 `127.0.0.1:2379`） |
| `username`        | 否       | 认证用户名                             |
| `password`        | 否       | 认证密码                               |
| `ssl_ca`          | 否       | CA 证书文件路径                        |
| `ssl_cert`        | 否       | 客户端证书文件路径                     |
| `ssl_key`         | 否       | 客户端私钥文件路径                     |
| `ssl_servername`  | 否       | TLS 验证使用的域名                     |
| `connect_timeout` | 否       | 连接超时时间（默认：`10s`）            |
| `request_timeout` | 否       | 请求超时时间（默认：`30s`）            |

### 外部表选项

| 选项           | 默认值   | 说明                                     |
|----------------|----------|------------------------------------------|
| `rowid_column` | 必填     | 用作唯一行标识符的列                     |
| `prefix`       | 无       | 仅包含具有此前缀的键                     |
| `keys_only`    | `false`  | 仅获取键，跳过值                         |
| `revision`     | `0`      | 从指定的 etcd 修订版本读取               |
| `key`          | `\0`     | 范围扫描的起始键                         |
| `range_end`    | 无       | 范围扫描的终止键（不包含）               |
| `consistency`  | `l`      | `l`（线性一致性）或 `s`（串行化）        |

### 查询下推

以下操作会下推至 etcd 执行以提升性能：

- **WHERE**：`=`、`>=`、`>`、`<=`、`<`、`BETWEEN`、`LIKE 'prefix%'`
- **ORDER BY**：远程排序
- **LIMIT/OFFSET**：远程分页

### 限制

- 不支持对键列执行 `UPDATE` 操作。替代方案：先 `INSERT` 新键，再 `DELETE` 旧键。
- 需要 etcd v3 API。
