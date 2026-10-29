---
title: "pgmb"
linkTitle: "pgmb"
description: "一个简单的PostgreSQL消息代理系统"
weight: 2670
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fraruiz/pgmb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fraruiz/pgmb</div>
    <div class="ext-card__desc">https://github.com/fraruiz/pgmb</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgmb-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmb-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pgmb-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmb`**](/ext/e/pgmb) | `1.0.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2670  | [**`pgmb`**](/ext/e/pgmb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgmb` |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`http`](/ext/e/http) [`pgmq`](/ext/e/pgmq) [`redis`](/ext/e/redis) [`ulak`](/ext/e/ulak) [`pgq`](/ext/e/pgq) [`pgmqtt`](/ext/e/pgmqtt) [`redis_fdw`](/ext/e/redis_fdw) [`tcn`](/ext/e/tcn) [`pg_durable`](/ext/e/pg_durable) [`fsm_core`](/ext/e/fsm_core) [`kafka_fdw`](/ext/e/kafka_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Archived upstream. Requires pg_cron and http; preload pg_cron in its configured database. RPM 1.0.0-2PGSTY fixes schema creation and requires pgsql_http; existing DEBs retain the upstream schema-creation failure. Delay arguments do not delay dispatch; retries have no exponential backoff.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmb` | `pg_cron`, `http` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmb_$v` | `pg_cron_$v`, `pgsql_http_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmb` | `postgresql-$v-cron`, `postgresql-$v-http` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 | AVAIL PIGSTY 1.0.0 2 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 pgmb_18 pgmb_18-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_18-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.x86_64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgmb_18 pgmb_18-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_18-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.aarch64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgmb_18 pgmb_18-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_18-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.x86_64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgmb_18 pgmb_18-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_18-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.aarch64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgmb_18 pgmb_18-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_18-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.x86_64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgmb_18 pgmb_18-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_18-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.aarch64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgmb_17 pgmb_17-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_17-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.x86_64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgmb_17 pgmb_17-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_17-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.aarch64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgmb_17 pgmb_17-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_17-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.x86_64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgmb_17 pgmb_17-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_17-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.aarch64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgmb_17 pgmb_17-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_17-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.x86_64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgmb_17 pgmb_17-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_17-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.aarch64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgmb_16 pgmb_16-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_16-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.x86_64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgmb_16 pgmb_16-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_16-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.aarch64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgmb_16 pgmb_16-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_16-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.x86_64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgmb_16 pgmb_16-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_16-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.aarch64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgmb_16 pgmb_16-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_16-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.x86_64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgmb_16 pgmb_16-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_16-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.aarch64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgmb_15 pgmb_15-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_15-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.x86_64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgmb_15 pgmb_15-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_15-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.aarch64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgmb_15 pgmb_15-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_15-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.x86_64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgmb_15 pgmb_15-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_15-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.aarch64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgmb_15 pgmb_15-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_15-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.x86_64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgmb_15 pgmb_15-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_15-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.aarch64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgmb_14 pgmb_14-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_14-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.x86_64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmb_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgmb_14 pgmb_14-1.0.0-2PGSTY.el8.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_14-1.0.0-2PGSTY.el8.noarch.rpm
@ el8.aarch64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmb_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgmb_14 pgmb_14-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_14-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.x86_64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmb_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgmb_14 pgmb_14-1.0.0-2PGSTY.el9.noarch.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_14-1.0.0-2PGSTY.el9.noarch.rpm
@ el9.aarch64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmb_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgmb_14 pgmb_14-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_14-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.x86_64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmb_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgmb_14 pgmb_14-1.0.0-2PGSTY.el10.noarch.rpm pigsty 1.0.0 12.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_14-1.0.0-2PGSTY.el10.noarch.rpm
@ el10.aarch64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmb_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgmb` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgmb         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgmb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgmb;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgmb -v 18  # PG 18
pig ext install -y pgmb -v 17  # PG 17
pig ext install -y pgmb -v 16  # PG 16
pig ext install -y pgmb -v 15  # PG 15
pig ext install -y pgmb -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgmb_18       # PG 18
dnf install -y pgmb_17       # PG 17
dnf install -y pgmb_16       # PG 16
dnf install -y pgmb_15       # PG 15
dnf install -y pgmb_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgmb   # PG 18
apt install -y postgresql-17-pgmb   # PG 17
apt install -y postgresql-16-pgmb   # PG 16
apt install -y postgresql-15-pgmb   # PG 15
apt install -y postgresql-14-pgmb   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pgmb CASCADE;  -- 依赖: pg_cron, http
```

## 用法

来源：
- [README](https://github.com/fraruiz/pgmb/blob/release/README.md)
- [Control](https://github.com/fraruiz/pgmb/blob/release/pgmb.control)
- [SQL](https://github.com/fraruiz/pgmb/blob/release/pgmb--1.0.0.sql)
- [META.json](https://github.com/fraruiz/pgmb/blob/release/META.json)

`pgmb` 是一个 SQL 消息代理，提供工作端点、路由键模式、队列，以及通过 `pg_cron` 调度的 HTTP 投递。上游仓库已归档。

### 安装与兼容性

RPM 修订版 `1.0.0-2PGSTY` 将 `pgsql_http_N` 声明为必需依赖，并移除了重复创建 schema 的语句。较早的 RPM 与现有 DEB 包仍使用上游 SQL，control 文件与安装脚本都会创建 schema，因而可能在 `CREATE EXTENSION pgmb` 时失败。软件包安装成功不代表扩展创建成功。

使用超级用户安装。必需扩展为 `pg_cron` 和 `http`；`pgmb` 本身不需要预加载。将调度器配置为扩展所在数据库：

```ini
shared_preload_libraries = 'pg_cron'
cron.database_name = 'postgres'
```

重启 PostgreSQL，连接该数据库，先创建依赖，再创建扩展：

```sql
CREATE EXTENSION pg_cron;
CREATE EXTENSION http;
CREATE EXTENSION pgmb;
```

### 注册队列并发送消息

工作端点接收来自数据库服务器的 HTTP 请求。使用可信端点，并限制可注册工作端点的角色。

```sql
SELECT pgmb.create(
    'orders', 'order.*', 3,
    pgmb.worker('order_worker', 'http://127.0.0.1:8080/worker', 100)
);

SELECT pgmb.send(
    gen_random_uuid(), 'order.created', '{"order_id": 123}'::jsonb
);

SELECT * FROM pgmb.workers;
SELECT * FROM pgmb.queues;
SELECT * FROM pgmb.orders_queue;
SELECT * FROM pgmb.orders_dead_letter_queue;
```

`pgmb.create` 的参数顺序是名称、绑定模式、最大重试次数、工作端点 UUID。触发器将消息路由到匹配的队列，创建队列时会注册调度任务。

### API

| 函数 | 用途 |
|---|---|
| `pgmb.worker(name, endpoint, rps)` | 注册工作端点并返回 UUID；rps 限制每次投递的批量大小。 |
| `pgmb.create(name, binding_key, max_retries, worker_id)` | 创建队列、死信表和调度任务，返回队列 UUID。 |
| `pgmb.send(id, routing_key, body)` | 保存 JSONB 消息，并路由到匹配的队列。 |
| `pgmb.send` 重载 | 接受可选的消息头，以及整数秒数或时间戳形式的延迟。 |
| `pgmb.dispatch_messages(queue_id)` | 批量投递；成功的 HTTP 响应标记为已确认，失败则重试，达到限制后移入死信表。 |

### 1.0.0 版本限制

- 延迟参数会填写 `enqueued_at`，但投递函数不排除未来时间戳，因此这些重载不能保证延迟投递。
- 消息头会随消息保存，但投递函数仅通过 `http_post` 发送消息体，不会转发为自定义 HTTP 请求头。
- 重试在后续投递时使用计数器；SQL 没有实现指数退避。
- HTTP 操作的副作用不受数据库事务控制。使用这个已归档项目之前，应核对投递与数据保留需求。
