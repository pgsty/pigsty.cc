---
title: "pg_partman"
linkTitle: "pg_partman"
description: "用于按时间或 ID 管理分区表的扩展"
weight: 2510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgpartman/pg_partman">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgpartman/pg_partman</div>
    <div class="ext-card__desc">https://github.com/pgpartman/pg_partman</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_partman-5.4.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_partman-5.4.2.tar.gz</div>
    <div class="ext-card__desc">pg_partman-5.4.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_partman`**](/ext/e/pg_partman) | `5.4.2` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2510  | [**`pg_partman`**](/ext/e/pg_partman) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`citus`](/ext/e/citus) [`pg_fkpart`](/ext/e/pg_fkpart) [`timescaledb`](/ext/e/timescaledb) [`periods`](/ext/e/periods) [`emaj`](/ext/e/emaj) [`pg_cron`](/ext/e/pg_cron) [`plproxy`](/ext/e/plproxy) [`temporal_tables`](/ext/e/temporal_tables) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`timeseries`](/ext/e/timeseries) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.4.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_partman` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.4.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_partman_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.4.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-partman` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 11 | AVAIL PGDG 5.4.2 15 | AVAIL PGDG 5.4.2 19 | AVAIL PGDG 5.4.2 23 |
| el8.aarch64 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 11 | AVAIL PGDG 5.4.2 15 | AVAIL PGDG 5.4.2 18 | AVAIL PGDG 5.4.2 18 |
| el9.x86_64 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 11 | AVAIL PGDG 5.4.2 15 | AVAIL PGDG 5.4.2 19 | AVAIL PGDG 5.4.2 21 |
| el9.aarch64 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 11 | AVAIL PGDG 5.4.2 15 | AVAIL PGDG 5.4.2 18 | AVAIL PGDG 5.4.2 18 |
| el10.x86_64 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 6 |
| el10.aarch64 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 6 | AVAIL PGDG 5.4.2 6 |
| d12.x86_64 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 |
| d12.aarch64 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 |
| d13.x86_64 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 |
| d13.aarch64 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 |
| u22.x86_64 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 |
| u22.aarch64 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 |
| u24.x86_64 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 |
| u24.aarch64 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 | AVAIL PGDG 5.4.2 1 |
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel8.x86_64.rpm pgdg 5.2.4 262.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_partman_18-5.2.4-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 279.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel8.aarch64.rpm pgdg 5.2.4 262.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_partman_18-5.2.4-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 213.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel9.x86_64.rpm pgdg 5.2.4 208.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_partman_18-5.2.4-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_partman_18-5.2.4-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_partman_18-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 220.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_partman_18 pg_partman_18-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_partman_18-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 231.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 230.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-partman postgresql-18-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-18-partman_5.4.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.4-1PGDG.rhel8.x86_64.rpm pgdg 5.2.4 261.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.3-1PGDG.rhel8.x86_64.rpm pgdg 5.2.3 260.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 260.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.1-1PGDG.rhel8.x86_64.rpm pgdg 5.2.1 259.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.2.0-1PGDG.rhel8.x86_64.rpm pgdg 5.2.0 259.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_partman_17 pg_partman_17-5.1.0-2PGDG.rhel8.x86_64.rpm pgdg 5.1.0 254.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_partman_17-5.1.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 279.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.4-1PGDG.rhel8.aarch64.rpm pgdg 5.2.4 261.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.3-1PGDG.rhel8.aarch64.rpm pgdg 5.2.3 260.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.2-1PGDG.rhel8.aarch64.rpm pgdg 5.2.2 260.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.1-1PGDG.rhel8.aarch64.rpm pgdg 5.2.1 259.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.2.0-1PGDG.rhel8.aarch64.rpm pgdg 5.2.0 259.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_partman_17 pg_partman_17-5.1.0-2PGDG.rhel8.aarch64.rpm pgdg 5.1.0 254.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_partman_17-5.1.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 212.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.4-1PGDG.rhel9.x86_64.rpm pgdg 5.2.4 207.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.3-1PGDG.rhel9.x86_64.rpm pgdg 5.2.3 206.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 206.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.1-1PGDG.rhel9.x86_64.rpm pgdg 5.2.1 205.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.2.0-1PGDG.rhel9.x86_64.rpm pgdg 5.2.0 205.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_partman_17 pg_partman_17-5.1.0-2PGDG.rhel9.x86_64.rpm pgdg 5.1.0 201.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_partman_17-5.1.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.4-1PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.3-1PGDG.rhel9.aarch64.rpm pgdg 5.2.3 207.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.2-1PGDG.rhel9.aarch64.rpm pgdg 5.2.2 206.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.1-1PGDG.rhel9.aarch64.rpm pgdg 5.2.1 205.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.2.0-1PGDG.rhel9.aarch64.rpm pgdg 5.2.0 205.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_partman_17 pg_partman_17-5.1.0-2PGDG.rhel9.aarch64.rpm pgdg 5.1.0 201.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_partman_17-5.1.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_partman_17 pg_partman_17-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_partman_17-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 220.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_partman_17 pg_partman_17-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_partman_17-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 235.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 235.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-partman postgresql-17-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-17-partman_5.4.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.4-1PGDG.rhel8.x86_64.rpm pgdg 5.2.4 261.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.3-1PGDG.rhel8.x86_64.rpm pgdg 5.2.3 260.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 260.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.1-1PGDG.rhel8.x86_64.rpm pgdg 5.2.1 259.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.2.0-1PGDG.rhel8.x86_64.rpm pgdg 5.2.0 259.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.1.0-1PGDG.rhel8.x86_64.rpm pgdg 5.1.0 254.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 249.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-5.0.0-1PGDG.rhel8.x86_64.rpm pgdg 5.0.0 248.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-5.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-4.7.4-1PGDG.rhel8.x86_64.rpm pgdg 4.7.4 246.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-4.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_partman_16 pg_partman_16-4.7.3-3.rhel8.x86_64.rpm pgdg 4.7.3 246.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_partman_16-4.7.3-3.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 278.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.4-1PGDG.rhel8.aarch64.rpm pgdg 5.2.4 261.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.3-1PGDG.rhel8.aarch64.rpm pgdg 5.2.3 260.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.2-1PGDG.rhel8.aarch64.rpm pgdg 5.2.2 260.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.1-1PGDG.rhel8.aarch64.rpm pgdg 5.2.1 259.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.2.0-1PGDG.rhel8.aarch64.rpm pgdg 5.2.0 259.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.1.0-1PGDG.rhel8.aarch64.rpm pgdg 5.1.0 254.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 249.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-5.0.0-1PGDG.rhel8.aarch64.rpm pgdg 5.0.0 248.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-5.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-4.7.4-1PGDG.rhel8.aarch64.rpm pgdg 4.7.4 246.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-4.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_partman_16 pg_partman_16-4.7.3-3.rhel8.aarch64.rpm pgdg 4.7.3 246.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_partman_16-4.7.3-3.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 212.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.4-1PGDG.rhel9.x86_64.rpm pgdg 5.2.4 207.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.3-1PGDG.rhel9.x86_64.rpm pgdg 5.2.3 206.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 206.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.1-1PGDG.rhel9.x86_64.rpm pgdg 5.2.1 206.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.2.0-1PGDG.rhel9.x86_64.rpm pgdg 5.2.0 205.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.1.0-1PGDG.rhel9.x86_64.rpm pgdg 5.1.0 201.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 197.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-5.0.0-1PGDG.rhel9.x86_64.rpm pgdg 5.0.0 197.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-5.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-4.7.4-1PGDG.rhel9.x86_64.rpm pgdg 4.7.4 198.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-4.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_partman_16 pg_partman_16-4.7.3-3.rhel9.x86_64.rpm pgdg 4.7.3 194.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_partman_16-4.7.3-3.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.4-1PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.3-1PGDG.rhel9.aarch64.rpm pgdg 5.2.3 207.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.2-1PGDG.rhel9.aarch64.rpm pgdg 5.2.2 206.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.1-1PGDG.rhel9.aarch64.rpm pgdg 5.2.1 205.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.2.0-1PGDG.rhel9.aarch64.rpm pgdg 5.2.0 205.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.1.0-1PGDG.rhel9.aarch64.rpm pgdg 5.1.0 201.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 197.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-5.0.0-1PGDG.rhel9.aarch64.rpm pgdg 5.0.0 197.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-5.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-4.7.4-1PGDG.rhel9.aarch64.rpm pgdg 4.7.4 198.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-4.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_partman_16 pg_partman_16-4.7.3-3.rhel9.aarch64.rpm pgdg 4.7.3 194.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_partman_16-4.7.3-3.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_partman_16 pg_partman_16-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_partman_16-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 220.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_partman_16 pg_partman_16-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_partman_16-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 235.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 234.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-partman postgresql-16-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-16-partman_5.4.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.4-1PGDG.rhel8.x86_64.rpm pgdg 5.2.4 261.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.3-1PGDG.rhel8.x86_64.rpm pgdg 5.2.3 260.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 260.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.1-1PGDG.rhel8.x86_64.rpm pgdg 5.2.1 259.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.2.0-1PGDG.rhel8.x86_64.rpm pgdg 5.2.0 259.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.1.0-1PGDG.rhel8.x86_64.rpm pgdg 5.1.0 254.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 249.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-5.0.0-1PGDG.rhel8.x86_64.rpm pgdg 5.0.0 248.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-5.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.4-1PGDG.rhel8.x86_64.rpm pgdg 4.7.4 246.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.3-3.rhel8.x86_64.rpm pgdg 4.7.3 246.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.3-3.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.3-1.rhel8.x86_64.rpm pgdg 4.7.3 246.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.3-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.2-1.rhel8.x86_64.rpm pgdg 4.7.2 245.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.1-1.rhel8.x86_64.rpm pgdg 4.7.1 260.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_partman_15 pg_partman_15-4.7.0-2.rhel8.x86_64.rpm pgdg 4.7.0 260.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_partman_15-4.7.0-2.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 278.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.4-1PGDG.rhel8.aarch64.rpm pgdg 5.2.4 261.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.3-1PGDG.rhel8.aarch64.rpm pgdg 5.2.3 260.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.2-1PGDG.rhel8.aarch64.rpm pgdg 5.2.2 260.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.1-1PGDG.rhel8.aarch64.rpm pgdg 5.2.1 259.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.2.0-1PGDG.rhel8.aarch64.rpm pgdg 5.2.0 259.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.1.0-1PGDG.rhel8.aarch64.rpm pgdg 5.1.0 254.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 249.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-5.0.0-1PGDG.rhel8.aarch64.rpm pgdg 5.0.0 248.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-5.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.4-1PGDG.rhel8.aarch64.rpm pgdg 4.7.4 246.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.3-3.rhel8.aarch64.rpm pgdg 4.7.3 246.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.3-3.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.3-1.rhel8.aarch64.rpm pgdg 4.7.3 246.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.3-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.2-1.rhel8.aarch64.rpm pgdg 4.7.2 245.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_partman_15 pg_partman_15-4.7.1-1.rhel8.aarch64.rpm pgdg 4.7.1 260.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_partman_15-4.7.1-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 213.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.4-1PGDG.rhel9.x86_64.rpm pgdg 5.2.4 207.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.3-1PGDG.rhel9.x86_64.rpm pgdg 5.2.3 206.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 206.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.1-1PGDG.rhel9.x86_64.rpm pgdg 5.2.1 206.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.2.0-1PGDG.rhel9.x86_64.rpm pgdg 5.2.0 205.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.1.0-1PGDG.rhel9.x86_64.rpm pgdg 5.1.0 201.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 197.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-5.0.0-1PGDG.rhel9.x86_64.rpm pgdg 5.0.0 197.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-5.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.4-1PGDG.rhel9.x86_64.rpm pgdg 4.7.4 198.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.3-3.rhel9.x86_64.rpm pgdg 4.7.3 198.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.3-3.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.3-1.rhel9.x86_64.rpm pgdg 4.7.3 198.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.3-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.2-1.rhel9.x86_64.rpm pgdg 4.7.2 198.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.1-1.rhel9.x86_64.rpm pgdg 4.7.1 213.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_partman_15 pg_partman_15-4.7.0-2.rhel9.x86_64.rpm pgdg 4.7.0 213.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_partman_15-4.7.0-2.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.4-1PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.3-1PGDG.rhel9.aarch64.rpm pgdg 5.2.3 206.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.2-1PGDG.rhel9.aarch64.rpm pgdg 5.2.2 206.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.1-1PGDG.rhel9.aarch64.rpm pgdg 5.2.1 205.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.2.0-1PGDG.rhel9.aarch64.rpm pgdg 5.2.0 205.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.1.0-1PGDG.rhel9.aarch64.rpm pgdg 5.1.0 201.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 197.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-5.0.0-1PGDG.rhel9.aarch64.rpm pgdg 5.0.0 197.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-5.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.4-1PGDG.rhel9.aarch64.rpm pgdg 4.7.4 198.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.3-3.rhel9.aarch64.rpm pgdg 4.7.3 198.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.3-3.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.3-1.rhel9.aarch64.rpm pgdg 4.7.3 198.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.3-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.2-1.rhel9.aarch64.rpm pgdg 4.7.2 197.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_partman_15 pg_partman_15-4.7.1-1.rhel9.aarch64.rpm pgdg 4.7.1 212.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_partman_15-4.7.1-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_partman_15 pg_partman_15-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_partman_15-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 219.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_partman_15 pg_partman_15-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_partman_15-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 235.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 234.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-partman postgresql-15-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-15-partman_5.4.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.2 279.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.4.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.4.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel8.10.x86_64.rpm pgdg 5.4.0 275.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.4.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel8.x86_64.rpm pgdg 5.3.1 271.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel8.x86_64.rpm pgdg 5.3.0 270.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.4-1PGDG.rhel8.x86_64.rpm pgdg 5.2.4 261.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.3-1PGDG.rhel8.x86_64.rpm pgdg 5.2.3 260.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.2-1PGDG.rhel8.x86_64.rpm pgdg 5.2.2 260.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.1-1PGDG.rhel8.x86_64.rpm pgdg 5.2.1 259.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.2.0-1PGDG.rhel8.x86_64.rpm pgdg 5.2.0 259.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.1.0-1PGDG.rhel8.x86_64.rpm pgdg 5.1.0 254.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.0.1-1PGDG.rhel8.x86_64.rpm pgdg 5.0.1 249.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-5.0.0-1PGDG.rhel8.x86_64.rpm pgdg 5.0.0 248.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-5.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.4-1PGDG.rhel8.x86_64.rpm pgdg 4.7.4 246.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.3-3.rhel8.x86_64.rpm pgdg 4.7.3 246.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.3-3.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.3-1.rhel8.x86_64.rpm pgdg 4.7.3 246.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.2-1.rhel8.x86_64.rpm pgdg 4.7.2 245.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.1-1.rhel8.x86_64.rpm pgdg 4.7.1 260.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.7.0-1.rhel8.x86_64.rpm pgdg 4.7.0 259.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.7.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.6.2-1.rhel8.x86_64.rpm pgdg 4.6.2 256.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.6.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.6.1-1.rhel8.x86_64.rpm pgdg 4.6.1 255.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.6.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.6.0-1.rhel8.x86_64.rpm pgdg 4.6.0 252.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.6.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_partman_14 pg_partman_14-4.5.1-2.rhel8.x86_64.rpm pgdg 4.5.1 246.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_partman_14-4.5.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.2 279.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.4.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.1 278.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.4.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel8.10.aarch64.rpm pgdg 5.4.0 275.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.4.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel8.aarch64.rpm pgdg 5.3.1 271.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel8.aarch64.rpm pgdg 5.3.0 270.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.4-1PGDG.rhel8.aarch64.rpm pgdg 5.2.4 261.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.3-1PGDG.rhel8.aarch64.rpm pgdg 5.2.3 260.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.2-1PGDG.rhel8.aarch64.rpm pgdg 5.2.2 260.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.1-1PGDG.rhel8.aarch64.rpm pgdg 5.2.1 259.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.2.0-1PGDG.rhel8.aarch64.rpm pgdg 5.2.0 259.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.1.0-1PGDG.rhel8.aarch64.rpm pgdg 5.1.0 254.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.0.1-1PGDG.rhel8.aarch64.rpm pgdg 5.0.1 249.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-5.0.0-1PGDG.rhel8.aarch64.rpm pgdg 5.0.0 248.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-5.0.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.4-1PGDG.rhel8.aarch64.rpm pgdg 4.7.4 246.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.3-3.rhel8.aarch64.rpm pgdg 4.7.3 246.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.3-3.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.3-1.rhel8.aarch64.rpm pgdg 4.7.3 246.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.3-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.2-1.rhel8.aarch64.rpm pgdg 4.7.2 245.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_partman_14 pg_partman_14-4.7.1-1.rhel8.aarch64.rpm pgdg 4.7.1 260.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_partman_14-4.7.1-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.2 218.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.1 217.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel9.7.x86_64.rpm pgdg 5.4.0 216.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.4.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel9.x86_64.rpm pgdg 5.3.1 213.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel9.x86_64.rpm pgdg 5.3.0 212.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.4-1PGDG.rhel9.x86_64.rpm pgdg 5.2.4 207.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.3-1PGDG.rhel9.x86_64.rpm pgdg 5.2.3 206.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.2-1PGDG.rhel9.x86_64.rpm pgdg 5.2.2 206.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.1-1PGDG.rhel9.x86_64.rpm pgdg 5.2.1 205.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.2.0-1PGDG.rhel9.x86_64.rpm pgdg 5.2.0 205.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.1.0-1PGDG.rhel9.x86_64.rpm pgdg 5.1.0 201.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.0.1-1PGDG.rhel9.x86_64.rpm pgdg 5.0.1 197.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-5.0.0-1PGDG.rhel9.x86_64.rpm pgdg 5.0.0 197.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-5.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.4-1PGDG.rhel9.x86_64.rpm pgdg 4.7.4 198.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.3-3.rhel9.x86_64.rpm pgdg 4.7.3 198.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.3-3.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.3-1.rhel9.x86_64.rpm pgdg 4.7.3 198.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.2-1.rhel9.x86_64.rpm pgdg 4.7.2 198.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.1-1.rhel9.x86_64.rpm pgdg 4.7.1 213.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.7.0-1.rhel9.x86_64.rpm pgdg 4.7.0 213.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.7.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.6.2-1.rhel9.x86_64.rpm pgdg 4.6.2 211.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.6.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_partman_14 pg_partman_14-4.6.1-1.rhel9.x86_64.rpm pgdg 4.6.1 210.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_partman_14-4.6.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.2 218.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.1 217.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel9.7.aarch64.rpm pgdg 5.4.0 216.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.4.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel9.aarch64.rpm pgdg 5.3.1 213.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel9.aarch64.rpm pgdg 5.3.0 212.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.4-1PGDG.rhel9.aarch64.rpm pgdg 5.2.4 207.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.3-1PGDG.rhel9.aarch64.rpm pgdg 5.2.3 206.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.2-1PGDG.rhel9.aarch64.rpm pgdg 5.2.2 206.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.1-1PGDG.rhel9.aarch64.rpm pgdg 5.2.1 205.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.2.0-1PGDG.rhel9.aarch64.rpm pgdg 5.2.0 205.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.1.0-1PGDG.rhel9.aarch64.rpm pgdg 5.1.0 201.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.0.1-1PGDG.rhel9.aarch64.rpm pgdg 5.0.1 197.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-5.0.0-1PGDG.rhel9.aarch64.rpm pgdg 5.0.0 197.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-5.0.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.4-1PGDG.rhel9.aarch64.rpm pgdg 4.7.4 198.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.3-3.rhel9.aarch64.rpm pgdg 4.7.3 198.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.3-3.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.3-1.rhel9.aarch64.rpm pgdg 4.7.3 198.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.3-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.2-1.rhel9.aarch64.rpm pgdg 4.7.2 197.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_partman_14 pg_partman_14-4.7.1-1.rhel9.aarch64.rpm pgdg 4.7.1 212.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_partman_14-4.7.1-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.2 220.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.1 220.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel10.1.x86_64.rpm pgdg 5.4.0 218.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.4.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel10.x86_64.rpm pgdg 5.3.1 216.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.3.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel10.x86_64.rpm pgdg 5.3.0 215.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.3.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_partman_14 pg_partman_14-5.2.4-2PGDG.rhel10.x86_64.rpm pgdg 5.2.4 210.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_partman_14-5.2.4-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.2-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.2 220.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.1-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.1 220.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.4.0-1PGDG.rhel10.1.aarch64.rpm pgdg 5.4.0 218.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.4.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.3.1-1PGDG.rhel10.aarch64.rpm pgdg 5.3.1 216.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.3.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.3.0-1PGDG.rhel10.aarch64.rpm pgdg 5.3.0 215.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.3.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_partman_14 pg_partman_14-5.2.4-2PGDG.rhel10.aarch64.rpm pgdg 5.2.4 210.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_partman_14-5.2.4-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg12+1_amd64.deb pgdg 5.4.2 237.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg12+1_arm64.deb pgdg 5.4.2 237.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg13+1_amd64.deb pgdg 5.4.2 237.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg13+1_arm64.deb pgdg 5.4.2 237.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg22.04+1_amd64.deb pgdg 5.4.2 233.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg22.04+1_arm64.deb pgdg 5.4.2 233.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg24.04+1_amd64.deb pgdg 5.4.2 230.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-partman postgresql-14-partman_5.4.2-1.pgdg24.04+1_arm64.deb pgdg 5.4.2 230.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-partman/postgresql-14-partman_5.4.2-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_partman` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_partman         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_partman` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_partman;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_partman -v 18  # PG 18
pig ext install -y pg_partman -v 17  # PG 17
pig ext install -y pg_partman -v 16  # PG 16
pig ext install -y pg_partman -v 15  # PG 15
pig ext install -y pg_partman -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_partman_18       # PG 18
dnf install -y pg_partman_17       # PG 17
dnf install -y pg_partman_16       # PG 16
dnf install -y pg_partman_15       # PG 15
dnf install -y pg_partman_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-partman   # PG 18
apt install -y postgresql-17-partman   # PG 17
apt install -y postgresql-16-partman   # PG 16
apt install -y postgresql-15-partman   # PG 15
apt install -y postgresql-14-partman   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_partman;
```
