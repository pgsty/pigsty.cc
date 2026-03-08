---
title: "pgmb"
linkTitle: "pgmb"
description: "一个简单的PostgreSQL消息代理系统"
weight: 2870
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fraruiz/pgmb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fraruiz/pgmb</div>
    <div class="ext-card__desc">https://github.com/fraruiz/pgmb</div>
  </a>
  <a class="ext-card ext-card--source" href="pgmb-1.0.0.tar.gz">
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
| 2870  | [**`pgmb`**](/ext/e/pgmb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgmb` |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`http`](/ext/e/http) [`pgmq`](/ext/e/pgmq) [`pgq`](/ext/e/pgq) [`pg_task`](/ext/e/pg_task) [`pg_cron`](/ext/e/pg_cron) [`pg_background`](/ext/e/pg_background) [`pg_later`](/ext/e/pg_later) [`pg_net`](/ext/e/pg_net) [`kafka_fdw`](/ext/e/kafka_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmb` | `pg_cron`, `http` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmb_$v` | `pg_cron_$v`, `pg_http_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmb` | `postgresql-$v-cron`, `postgresql-$v-http` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmb_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmb_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmb_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmb_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmb_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgmb_18 pgmb_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmb_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmb postgresql-18-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-18-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmb_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmb_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmb_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmb_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmb_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgmb_17 pgmb_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmb_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmb postgresql-17-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-17-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmb_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmb_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmb_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmb_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmb_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgmb_16 pgmb_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmb_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmb postgresql-16-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-16-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmb_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmb_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmb_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmb_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmb_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgmb_15 pgmb_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmb_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmb postgresql-15-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-15-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmb_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 12.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmb_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmb_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 12.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmb_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmb_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgmb_14 pgmb_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 12.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmb_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 8.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 8.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmb postgresql-14-pgmb_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 7.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmb/postgresql-14-pgmb_1.0.0-1PIGSTY~noble_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgmb;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgmb -v 18  # PG 18
pig ext install -y pgmb -v 17  # PG 17
pig ext install -y pgmb -v 16  # PG 16
pig ext install -y pgmb -v 15  # PG 15
pig ext install -y pgmb -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgmb_18       # PG 18
dnf install -y pgmb_17       # PG 17
dnf install -y pgmb_16       # PG 16
dnf install -y pgmb_15       # PG 15
dnf install -y pgmb_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgmb   # PG 18
apt install -y postgresql-17-pgmb   # PG 17
apt install -y postgresql-16-pgmb   # PG 16
apt install -y postgresql-15-pgmb   # PG 15
apt install -y postgresql-14-pgmb   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgmb CASCADE;  -- 依赖: pg_cron, http
```
