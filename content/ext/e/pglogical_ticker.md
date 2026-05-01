---
title: "pglogical_ticker"
linkTitle: "pglogical_ticker"
description: "pglogical复制延迟以秒计的精确视图"
weight: 9510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/enova/pglogical_ticker">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">enova/pglogical_ticker</div>
    <div class="ext-card__desc">https://github.com/enova/pglogical_ticker</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pglogical_ticker-1.4.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pglogical_ticker-1.4.1.tar.gz</div>
    <div class="ext-card__desc">pglogical_ticker-1.4.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pglogical_ticker`**](/ext/e/pglogical_ticker) | `1.4.1` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9510  | [**`pglogical_ticker`**](/ext/e/pglogical_ticker) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pglogical_ticker` |
{.ext-table}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`pglogical_origin`](/ext/e/pglogical_origin) [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pgactive`](/ext/e/pgactive) [`wal2json`](/ext/e/wal2json) [`decoderbufs`](/ext/e/decoderbufs) [`repmgr`](/ext/e/repmgr) [`decoder_raw`](/ext/e/decoder_raw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require a patch on el, pg18 break on el


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pglogical_ticker` | `pglogical` |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pglogical_ticker_$v` | `pglogical_$v` |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pglogical-ticker` | `postgresql-$v-pglogical` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| d13.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| u22.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| u24.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 | AVAIL PIGSTY 1.4.1 1 |
@ el8.x86_64 18 pglogical_ticker_18 pglogical_ticker_18-1.4.1-2PIGSTY.el8.x86_64.rpm pigsty 1.4.1 17.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglogical_ticker_18-1.4.1-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pglogical_ticker_18 pglogical_ticker_18-1.4.1-2PIGSTY.el8.aarch64.rpm pigsty 1.4.1 17.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglogical_ticker_18-1.4.1-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pglogical_ticker_18 pglogical_ticker_18-1.4.1-2PIGSTY.el9.x86_64.rpm pigsty 1.4.1 17.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglogical_ticker_18-1.4.1-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pglogical_ticker_18 pglogical_ticker_18-1.4.1-2PIGSTY.el9.aarch64.rpm pigsty 1.4.1 17.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglogical_ticker_18-1.4.1-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pglogical_ticker_18 pglogical_ticker_18-1.4.1-2PIGSTY.el10.x86_64.rpm pigsty 1.4.1 17.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglogical_ticker_18-1.4.1-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pglogical_ticker_18 pglogical_ticker_18-1.4.1-2PIGSTY.el10.aarch64.rpm pigsty 1.4.1 17.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglogical_ticker_18-1.4.1-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~bookworm_amd64.deb pigsty 1.4.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~bookworm_arm64.deb pigsty 1.4.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb pigsty 1.4.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb pigsty 1.4.1 19.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~jammy_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~jammy_arm64.deb pigsty 1.4.1 19.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~noble_arm64.deb pigsty 1.4.1 20.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pglogical-ticker postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb pigsty 1.4.1 20.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-18-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pglogical_ticker_17 pglogical_ticker_17-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglogical_ticker_17-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pglogical_ticker_17 pglogical_ticker_17-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 17.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglogical_ticker_17-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pglogical_ticker_17 pglogical_ticker_17-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglogical_ticker_17-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pglogical_ticker_17 pglogical_ticker_17-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglogical_ticker_17-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pglogical_ticker_17 pglogical_ticker_17-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglogical_ticker_17-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pglogical_ticker_17 pglogical_ticker_17-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 17.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglogical_ticker_17-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-8.pgdg120+1_amd64.deb pgdg 1.4.1 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-8.pgdg120+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-8.pgdg120+1_arm64.deb pgdg 1.4.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-8.pgdg120+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-8.pgdg130+2_amd64.deb pgdg 1.4.1 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-8.pgdg130+2_amd64.deb
@ d13.x86_64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb pigsty 1.4.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-8.pgdg130+2_arm64.deb pgdg 1.4.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-8.pgdg130+2_arm64.deb
@ d13.aarch64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb pigsty 1.4.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-8.pgdg22.04+1_amd64.deb pgdg 1.4.1 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-8.pgdg22.04+1_arm64.deb pgdg 1.4.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-8.pgdg24.04+1_amd64.deb pgdg 1.4.1 20.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-8.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-8.pgdg24.04+1_arm64.deb pgdg 1.4.1 20.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pglogical-ticker postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb pigsty 1.4.1 20.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-17-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pglogical_ticker_16 pglogical_ticker_16-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglogical_ticker_16-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pglogical_ticker_16 pglogical_ticker_16-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 17.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglogical_ticker_16-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pglogical_ticker_16 pglogical_ticker_16-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglogical_ticker_16-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pglogical_ticker_16 pglogical_ticker_16-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglogical_ticker_16-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pglogical_ticker_16 pglogical_ticker_16-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglogical_ticker_16-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pglogical_ticker_16 pglogical_ticker_16-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 17.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglogical_ticker_16-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-8.pgdg120+1_amd64.deb pgdg 1.4.1 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-8.pgdg120+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-8.pgdg120+1_arm64.deb pgdg 1.4.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-8.pgdg120+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-8.pgdg130+2_amd64.deb pgdg 1.4.1 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-8.pgdg130+2_amd64.deb
@ d13.x86_64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb pigsty 1.4.1 19.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-8.pgdg130+2_arm64.deb pgdg 1.4.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-8.pgdg130+2_arm64.deb
@ d13.aarch64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb pigsty 1.4.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-8.pgdg22.04+1_amd64.deb pgdg 1.4.1 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-8.pgdg22.04+1_arm64.deb pgdg 1.4.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-8.pgdg24.04+1_amd64.deb pgdg 1.4.1 20.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-8.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-8.pgdg24.04+1_arm64.deb pgdg 1.4.1 20.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pglogical-ticker postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb pigsty 1.4.1 20.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-16-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pglogical_ticker_15 pglogical_ticker_15-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglogical_ticker_15-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pglogical_ticker_15 pglogical_ticker_15-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 17.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglogical_ticker_15-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pglogical_ticker_15 pglogical_ticker_15-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglogical_ticker_15-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pglogical_ticker_15 pglogical_ticker_15-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglogical_ticker_15-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pglogical_ticker_15 pglogical_ticker_15-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglogical_ticker_15-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pglogical_ticker_15 pglogical_ticker_15-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 17.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglogical_ticker_15-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-8.pgdg120+1_amd64.deb pgdg 1.4.1 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-8.pgdg120+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-8.pgdg120+1_arm64.deb pgdg 1.4.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-8.pgdg120+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-8.pgdg130+2_amd64.deb pgdg 1.4.1 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-8.pgdg130+2_amd64.deb
@ d13.x86_64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb pigsty 1.4.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-8.pgdg130+2_arm64.deb pgdg 1.4.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-8.pgdg130+2_arm64.deb
@ d13.aarch64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb pigsty 1.4.1 19.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-8.pgdg22.04+1_amd64.deb pgdg 1.4.1 20.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-8.pgdg22.04+1_arm64.deb pgdg 1.4.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-8.pgdg24.04+1_amd64.deb pgdg 1.4.1 20.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-8.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-8.pgdg24.04+1_arm64.deb pgdg 1.4.1 20.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pglogical-ticker postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb pigsty 1.4.1 20.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-15-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pglogical_ticker_14 pglogical_ticker_14-1.4.1-1PIGSTY.el8.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pglogical_ticker_14-1.4.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pglogical_ticker_14 pglogical_ticker_14-1.4.1-1PIGSTY.el8.aarch64.rpm pigsty 1.4.1 17.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pglogical_ticker_14-1.4.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pglogical_ticker_14 pglogical_ticker_14-1.4.1-1PIGSTY.el9.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pglogical_ticker_14-1.4.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pglogical_ticker_14 pglogical_ticker_14-1.4.1-1PIGSTY.el9.aarch64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pglogical_ticker_14-1.4.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pglogical_ticker_14 pglogical_ticker_14-1.4.1-1PIGSTY.el10.x86_64.rpm pigsty 1.4.1 17.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pglogical_ticker_14-1.4.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pglogical_ticker_14 pglogical_ticker_14-1.4.1-1PIGSTY.el10.aarch64.rpm pigsty 1.4.1 17.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pglogical_ticker_14-1.4.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-8.pgdg120+1_amd64.deb pgdg 1.4.1 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-8.pgdg120+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-8.pgdg120+1_arm64.deb pgdg 1.4.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-8.pgdg120+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-8.pgdg130+2_amd64.deb pgdg 1.4.1 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-8.pgdg130+2_amd64.deb
@ d13.x86_64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb pigsty 1.4.1 19.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-8.pgdg130+2_arm64.deb pgdg 1.4.1 20.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-8.pgdg130+2_arm64.deb
@ d13.aarch64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb pigsty 1.4.1 19.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-8.pgdg22.04+1_amd64.deb pgdg 1.4.1 20.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-8.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-8.pgdg22.04+1_arm64.deb pgdg 1.4.1 20.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-8.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-8.pgdg24.04+1_amd64.deb pgdg 1.4.1 20.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-8.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-8.pgdg24.04+1_arm64.deb pgdg 1.4.1 20.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-8.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb pigsty 1.4.1 19.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pglogical-ticker postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb pigsty 1.4.1 20.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pglogical-ticker/postgresql-14-pglogical-ticker_1.4.1-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pglogical_ticker` 扩展的 RPM / DEB 包：

```bash
pig build pkg pglogical_ticker         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pglogical_ticker` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pglogical_ticker;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pglogical_ticker -v 18  # PG 18
pig ext install -y pglogical_ticker -v 17  # PG 17
pig ext install -y pglogical_ticker -v 16  # PG 16
pig ext install -y pglogical_ticker -v 15  # PG 15
pig ext install -y pglogical_ticker -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pglogical_ticker_18       # PG 18
dnf install -y pglogical_ticker_17       # PG 17
dnf install -y pglogical_ticker_16       # PG 16
dnf install -y pglogical_ticker_15       # PG 15
dnf install -y pglogical_ticker_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pglogical-ticker   # PG 18
apt install -y postgresql-17-pglogical-ticker   # PG 17
apt install -y postgresql-16-pglogical-ticker   # PG 16
apt install -y postgresql-15-pglogical-ticker   # PG 15
apt install -y postgresql-14-pglogical-ticker   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pglogical, pglogical_ticker';
```


**创建扩展**：

```sql
CREATE EXTENSION pglogical_ticker CASCADE;  -- 依赖: pglogical
```



## 用法

> [pglogical_ticker: 准确查看 pglogical 复制延迟](https://github.com/enova/pglogical_ticker)

一个后台工作进程，定期更新 ticker 表以从提供者角度测量 pglogical 复制延迟。

### 启用

添加到 `postgresql.conf`：

```ini
shared_preload_libraries = 'pglogical,pglogical_ticker'
pglogical_ticker.database = 'mydb'
pglogical_ticker.naptime = 10      -- tick 间隔（秒，默认 10）
```

在提供者和所有订阅者上安装：

```sql
CREATE EXTENSION pglogical_ticker;
```

### 部署 Ticker 表

仅在**提供者**上运行（通过 pglogical 传播到订阅者）：

```sql
-- 部署 ticker 表（每个复制集一个）
SELECT pglogical_ticker.deploy_ticker_tables();

-- 将 ticker 表添加到复制
SELECT pglogical_ticker.add_ticker_tables_to_replication();
```

用于级联复制：

```sql
SELECT pglogical_ticker.deploy_ticker_tables('my_cascaded_set_name');
SELECT pglogical_ticker.add_ticker_tables_to_replication('my_cascaded_set_name');
```

### 手动 Tick

```sql
SELECT pglogical_ticker.tick();
```

### 启动 Ticker

如果在 `shared_preload_libraries` 中配置，ticker 在服务器启动时自动启动。否则：

```sql
SELECT pglogical_ticker.launch();

-- 或者，仅在复制集表存在时启动
SELECT pglogical_ticker.launch_if_repset_tables();
```

### 查看复制延迟

在**提供者**上：

```sql
SELECT * FROM pglogical_ticker.all_repset_tickers();
```

在**订阅者**上：

```sql
SELECT * FROM pglogical_ticker.all_subscription_tickers();
```

### 配置

- `pglogical_ticker.database` - 运行 ticker 的数据库
- `pglogical_ticker.naptime` - tick 间隔（秒，默认 10）
- `pglogical_ticker.restart_time` - 自动重启前等待秒数（默认 10，-1 禁用）
