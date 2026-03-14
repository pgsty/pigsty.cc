---
title: "redis"
linkTitle: "redis"
description: "从PG向Redis发送Pub/Sub消息"
weight: 8720
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/brettlaforge/pg_redis_pubsub">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">brettlaforge/pg_redis_pubsub</div>
    <div class="ext-card__desc">https://github.com/brettlaforge/pg_redis_pubsub</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_redis_pubsub-0.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_redis_pubsub-0.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_redis_pubsub-0.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_redis_pubsub`**](/ext/e/redis) | `0.0.1` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8720  | [**`redis`**](/ext/e/redis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`redis_fdw`](/ext/e/redis_fdw) [`spat`](/ext/e/spat) [`pgmemcache`](/ext/e/pgmemcache) [`pg_net`](/ext/e/pg_net) [`wrappers`](/ext/e/wrappers) [`kafka_fdw`](/ext/e/kafka_fdw) [`pgmq`](/ext/e/pgmq) [`multicorn`](/ext/e/multicorn) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_redis_pubsub` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_redis_pubsub_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-redis-pubsub` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 | AVAIL PIGSTY 0.0.1 1 |
@ el8.x86_64 18 pg_redis_pubsub_18 pg_redis_pubsub_18-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_redis_pubsub_18-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_redis_pubsub_18 pg_redis_pubsub_18-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 14.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_redis_pubsub_18-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_redis_pubsub_18 pg_redis_pubsub_18-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_redis_pubsub_18-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_redis_pubsub_18 pg_redis_pubsub_18-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_redis_pubsub_18-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_redis_pubsub_18 pg_redis_pubsub_18-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_redis_pubsub_18-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_redis_pubsub_18 pg_redis_pubsub_18-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_redis_pubsub_18-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-redis-pubsub postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-redis-pubsub postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-redis-pubsub postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-redis-pubsub postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-redis-pubsub postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 12.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-redis-pubsub postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 12.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-redis-pubsub postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-redis-pubsub postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-18-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_redis_pubsub_17 pg_redis_pubsub_17-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_redis_pubsub_17-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_redis_pubsub_17 pg_redis_pubsub_17-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 14.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_redis_pubsub_17-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_redis_pubsub_17 pg_redis_pubsub_17-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_redis_pubsub_17-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_redis_pubsub_17 pg_redis_pubsub_17-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_redis_pubsub_17-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_redis_pubsub_17 pg_redis_pubsub_17-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_redis_pubsub_17-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_redis_pubsub_17 pg_redis_pubsub_17-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_redis_pubsub_17-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-redis-pubsub postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-redis-pubsub postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-redis-pubsub postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-redis-pubsub postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-redis-pubsub postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-redis-pubsub postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-redis-pubsub postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-redis-pubsub postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-17-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_redis_pubsub_16 pg_redis_pubsub_16-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_redis_pubsub_16-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_redis_pubsub_16 pg_redis_pubsub_16-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 14.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_redis_pubsub_16-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_redis_pubsub_16 pg_redis_pubsub_16-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_redis_pubsub_16-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_redis_pubsub_16 pg_redis_pubsub_16-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_redis_pubsub_16-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_redis_pubsub_16 pg_redis_pubsub_16-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_redis_pubsub_16-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_redis_pubsub_16 pg_redis_pubsub_16-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_redis_pubsub_16-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-redis-pubsub postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-redis-pubsub postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-redis-pubsub postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-redis-pubsub postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-redis-pubsub postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-redis-pubsub postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-redis-pubsub postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-redis-pubsub postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-16-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_redis_pubsub_15 pg_redis_pubsub_15-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_redis_pubsub_15-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_redis_pubsub_15 pg_redis_pubsub_15-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 14.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_redis_pubsub_15-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_redis_pubsub_15 pg_redis_pubsub_15-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_redis_pubsub_15-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_redis_pubsub_15 pg_redis_pubsub_15-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_redis_pubsub_15-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_redis_pubsub_15 pg_redis_pubsub_15-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_redis_pubsub_15-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_redis_pubsub_15 pg_redis_pubsub_15-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 14.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_redis_pubsub_15-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-redis-pubsub postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-redis-pubsub postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-redis-pubsub postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-redis-pubsub postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-redis-pubsub postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-redis-pubsub postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-redis-pubsub postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-redis-pubsub postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-15-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_redis_pubsub_14 pg_redis_pubsub_14-0.0.1-1PIGSTY.el8.x86_64.rpm pigsty 0.0.1 13.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_redis_pubsub_14-0.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_redis_pubsub_14 pg_redis_pubsub_14-0.0.1-1PIGSTY.el8.aarch64.rpm pigsty 0.0.1 14.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_redis_pubsub_14-0.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_redis_pubsub_14 pg_redis_pubsub_14-0.0.1-1PIGSTY.el9.x86_64.rpm pigsty 0.0.1 13.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_redis_pubsub_14-0.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_redis_pubsub_14 pg_redis_pubsub_14-0.0.1-1PIGSTY.el9.aarch64.rpm pigsty 0.0.1 13.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_redis_pubsub_14-0.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_redis_pubsub_14 pg_redis_pubsub_14-0.0.1-1PIGSTY.el10.x86_64.rpm pigsty 0.0.1 13.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_redis_pubsub_14-0.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_redis_pubsub_14 pg_redis_pubsub_14-0.0.1-1PIGSTY.el10.aarch64.rpm pigsty 0.0.1 14.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_redis_pubsub_14-0.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-redis-pubsub postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-redis-pubsub postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-redis-pubsub/postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-redis-pubsub postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb pigsty 0.0.1 12.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-redis-pubsub postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb pigsty 0.0.1 12.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-redis-pubsub/postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-redis-pubsub postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb pigsty 0.0.1 13.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-redis-pubsub postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb pigsty 0.0.1 13.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-redis-pubsub/postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-redis-pubsub postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb pigsty 0.0.1 12.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-redis-pubsub postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb pigsty 0.0.1 12.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-redis-pubsub/postgresql-14-pg-redis-pubsub_0.0.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_redis_pubsub` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_redis_pubsub         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_redis_pubsub` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_redis_pubsub;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_redis_pubsub -v 18  # PG 18
pig ext install -y pg_redis_pubsub -v 17  # PG 17
pig ext install -y pg_redis_pubsub -v 16  # PG 16
pig ext install -y pg_redis_pubsub -v 15  # PG 15
pig ext install -y pg_redis_pubsub -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_redis_pubsub_18       # PG 18
dnf install -y pg_redis_pubsub_17       # PG 17
dnf install -y pg_redis_pubsub_16       # PG 16
dnf install -y pg_redis_pubsub_15       # PG 15
dnf install -y pg_redis_pubsub_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-redis-pubsub   # PG 18
apt install -y postgresql-17-pg-redis-pubsub   # PG 17
apt install -y postgresql-16-pg-redis-pubsub   # PG 16
apt install -y postgresql-15-pg-redis-pubsub   # PG 15
apt install -y postgresql-14-pg-redis-pubsub   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION redis;
```



## 用法

> [redis: 从 PostgreSQL 直接向 Redis 发送发布/订阅消息](https://github.com/brettlaforge/pg_redis_pubsub)

`redis` 扩展（pg_redis_pubsub）允许 PostgreSQL 向 Redis 发布/订阅频道发布消息。目前仅支持发布端。

### 配置

通过 GUC 变量设置 Redis 连接参数：

```sql
ALTER SYSTEM SET redis.host = '127.0.0.1';
ALTER SYSTEM SET redis.port = '6379';
SELECT pg_reload_conf();
```

也可以在数据库、角色或会话级别设置：

```sql
SET redis.host = '127.0.0.1';
SET redis.port = '6379';
```

### 基本用法

```sql
CREATE EXTENSION redis;

SELECT redis_connect();
SELECT redis_publish('mychannel', 'Hello World');
SELECT redis_disconnect();
```

### 可用函数

| 函数 | 描述 |
|----------|-------------|
| `redis_connect()` | 使用 `redis.host` 和 `redis.port` 设置连接 Redis |
| `redis_disconnect()` | 断开 Redis 连接 |
| `redis_publish(channel text, message text)` | 在指定频道发布消息 |
| `redis_status()` | 返回 Redis 客户端状态 |

注意：`redis_publish` 在没有连接时会自动连接。

### 触发器示例

当表被修改时向 Redis 发布变更事件：

```sql
CREATE OR REPLACE FUNCTION notify_changes()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM redis_publish(
    'products:' || NEW.id::text,
    to_jsonb(NEW)::text
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_product_change
  AFTER INSERT OR UPDATE ON products
  FOR EACH ROW EXECUTE PROCEDURE notify_changes();
```

这允许监听 Redis 频道的外部订阅者实时响应 PostgreSQL 数据变更。
