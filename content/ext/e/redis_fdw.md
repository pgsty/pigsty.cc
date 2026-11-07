---
title: "redis_fdw"
linkTitle: "redis_fdw"
description: "查询外部Redis数据源"
weight: 8710
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pg-redis-fdw/redis_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pg-redis-fdw/redis_fdw</div>
    <div class="ext-card__desc">https://github.com/pg-redis-fdw/redis_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/redis_fdw-2.0+git20260808.ff37a7c8.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">redis_fdw-2.0+git20260808.ff37a7c8.tar.gz</div>
    <div class="ext-card__desc">redis_fdw-2.0+git20260808.ff37a7c8.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`redis_fdw`**](/ext/e/redis_fdw) | `2.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8710  | [**`redis_fdw`**](/ext/e/redis_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pgmq`](/ext/e/pgmq) [`redis`](/ext/e/redis) [`pgmb`](/ext/e/pgmb) [`pgmemcache`](/ext/e/pgmemcache) [`ulak`](/ext/e/ulak) [`pgq`](/ext/e/pgq) [`tcn`](/ext/e/tcn) [`pgmqtt`](/ext/e/pgmqtt) [`mongo_fdw`](/ext/e/mongo_fdw) [`pg_durable`](/ext/e/pg_durable) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0` | {{< pgvers "18,17,16,15,14" >}} | `redis_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0` | {{< pgvers "18,17,16,15,14" >}} | `redis_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-redis-fdw` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 | AVAIL PIGSTY 2.0 1 |
@ el8.x86_64 18 redis_fdw_18 redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm pigsty 2.0 95.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 redis_fdw_18 redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm pigsty 2.0 93.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 redis_fdw_18 redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm pigsty 2.0 97.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 redis_fdw_18 redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm pigsty 2.0 95.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 redis_fdw_18 redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm pigsty 2.0 97.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 redis_fdw_18 redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm pigsty 2.0 96.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/redis_fdw_18-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb pigsty 2.0 87.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb pigsty 2.0 84.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb pigsty 2.0 87.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb pigsty 2.0 85.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb pigsty 2.0 93.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb pigsty 2.0 92.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb pigsty 2.0 90.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb pigsty 2.0 89.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb pigsty 2.0 89.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-redis-fdw postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb pigsty 2.0 88.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-18-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 redis_fdw_17 redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm pigsty 2.0 95.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 redis_fdw_17 redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm pigsty 2.0 93.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 redis_fdw_17 redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm pigsty 2.0 97.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 redis_fdw_17 redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm pigsty 2.0 95.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 redis_fdw_17 redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm pigsty 2.0 97.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 redis_fdw_17 redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm pigsty 2.0 96.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/redis_fdw_17-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb pigsty 2.0 87.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb pigsty 2.0 84.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb pigsty 2.0 87.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb pigsty 2.0 85.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb pigsty 2.0 102.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb pigsty 2.0 101.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb pigsty 2.0 90.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb pigsty 2.0 89.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb pigsty 2.0 89.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-redis-fdw postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb pigsty 2.0 88.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-17-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 redis_fdw_16 redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm pigsty 2.0 95.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 redis_fdw_16 redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm pigsty 2.0 93.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 redis_fdw_16 redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm pigsty 2.0 97.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 redis_fdw_16 redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm pigsty 2.0 95.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 redis_fdw_16 redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm pigsty 2.0 97.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 redis_fdw_16 redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm pigsty 2.0 96.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/redis_fdw_16-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb pigsty 2.0 87.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb pigsty 2.0 84.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb pigsty 2.0 87.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb pigsty 2.0 85.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb pigsty 2.0 101.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb pigsty 2.0 100.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb pigsty 2.0 90.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb pigsty 2.0 90.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb pigsty 2.0 89.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-redis-fdw postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb pigsty 2.0 88.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-16-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 redis_fdw_15 redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm pigsty 2.0 95.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 redis_fdw_15 redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm pigsty 2.0 93.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 redis_fdw_15 redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm pigsty 2.0 96.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 redis_fdw_15 redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm pigsty 2.0 95.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 redis_fdw_15 redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm pigsty 2.0 97.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 redis_fdw_15 redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm pigsty 2.0 95.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/redis_fdw_15-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb pigsty 2.0 87.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb pigsty 2.0 94.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb pigsty 2.0 87.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb pigsty 2.0 84.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb pigsty 2.0 101.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb pigsty 2.0 100.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb pigsty 2.0 90.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb pigsty 2.0 88.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb pigsty 2.0 89.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-redis-fdw postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb pigsty 2.0 88.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-15-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 redis_fdw_14 redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm pigsty 2.0 95.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 redis_fdw_14 redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm pigsty 2.0 93.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 redis_fdw_14 redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm pigsty 2.0 97.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 redis_fdw_14 redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm pigsty 2.0 95.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 redis_fdw_14 redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm pigsty 2.0 97.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 redis_fdw_14 redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm pigsty 2.0 95.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/redis_fdw_14-2.0-1.git20260808.ff37a7c8PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb pigsty 2.0 87.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb pigsty 2.0 84.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb pigsty 2.0 87.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb pigsty 2.0 84.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb pigsty 2.0 101.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb pigsty 2.0 100.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb pigsty 2.0 90.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb pigsty 2.0 88.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb pigsty 2.0 89.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-redis-fdw postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb pigsty 2.0 87.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/redis-fdw/postgresql-14-redis-fdw_2.0+git20260808.ff37a7c8-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `redis_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg redis_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `redis_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install redis_fdw;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y redis_fdw -v 18  # PG 18
pig ext install -y redis_fdw -v 17  # PG 17
pig ext install -y redis_fdw -v 16  # PG 16
pig ext install -y redis_fdw -v 15  # PG 15
pig ext install -y redis_fdw -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y redis_fdw_18       # PG 18
dnf install -y redis_fdw_17       # PG 17
dnf install -y redis_fdw_16       # PG 16
dnf install -y redis_fdw_15       # PG 15
dnf install -y redis_fdw_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-redis-fdw   # PG 18
apt install -y postgresql-17-redis-fdw   # PG 17
apt install -y postgresql-16-redis-fdw   # PG 16
apt install -y postgresql-15-redis-fdw   # PG 15
apt install -y postgresql-14-redis-fdw   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION redis_fdw;
```




## 用法

> [redis_fdw: 查询 Redis 服务器的外部数据包装器](https://github.com/pg-redis-fdw/redis_fdw)

### 创建服务器

```sql
CREATE EXTENSION redis_fdw;

CREATE SERVER redis_server FOREIGN DATA WRAPPER redis_fdw
  OPTIONS (address '127.0.0.1', port '6379');
```

**服务器选项：** `address`（默认 `127.0.0.1`）、`port`（默认 `6379`）。

### 创建用户映射

```sql
CREATE USER MAPPING FOR pguser SERVER redis_server
  OPTIONS (password 'secret');
```

### 标量键值对

```sql
CREATE FOREIGN TABLE redis_db0 (
  key text,
  val text
)
SERVER redis_server
OPTIONS (database '0');

SELECT * FROM redis_db0;
```

### 哈希表（带键前缀）

```sql
CREATE FOREIGN TABLE redis_hash (
  key text,
  val text[]
)
SERVER redis_server
OPTIONS (database '0', tabletype 'hash', tablekeyprefix 'mytable:');

INSERT INTO redis_hash VALUES ('mytable:r1', '{prop1,val1,prop2,val2}');
UPDATE redis_hash SET val = '{prop3,val3}' WHERE key = 'mytable:r1';
DELETE FROM redis_hash WHERE key = 'mytable:r1';
SELECT * FROM redis_hash;
```

### 哈希表（单键）

```sql
CREATE FOREIGN TABLE redis_singleton (
  key text,
  val text
)
SERVER redis_server
OPTIONS (database '0', tabletype 'hash', singleton_key 'myhash');

INSERT INTO redis_singleton VALUES ('field1', 'value1');
UPDATE redis_singleton SET val = 'newvalue' WHERE key = 'field1';
DELETE FROM redis_singleton WHERE key = 'field1';
```

### 表选项

| 选项 | 描述 |
|--------|-------------|
| `database` | Redis 数据库编号（默认 `0`） |
| `tabletype` | `hash`、`list`、`set` 或 `zset`（省略则为标量键值） |
| `tablekeyprefix` | 按键前缀过滤项目 |
| `tablekeyset` | 从特定 Redis 集合中获取键 |
| `singleton_key` | 从单个 Redis 键访问所有值 |

只能使用 `tablekeyset` 或 `tablekeyprefix` 其中之一。不要与 `singleton_key` 组合使用。

哈希值以交替键值对的形式在 `text[]` 数组中返回。列表、集合和有序集合也以数组形式返回值。
