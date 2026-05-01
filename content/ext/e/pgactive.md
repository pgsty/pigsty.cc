---
title: "pgactive"
linkTitle: "pgactive"
description: "PostgreSQL多主逻辑复制"
weight: 9560
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/aws/pgactive">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">aws/pgactive</div>
    <div class="ext-card__desc">https://github.com/aws/pgactive</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgactive-2.1.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgactive-2.1.7.tar.gz</div>
    <div class="ext-card__desc">pgactive-2.1.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgactive`**](/ext/e/pgactive) | `2.1.7` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9560  | [**`pgactive`**](/ext/e/pgactive) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`repmgr`](/ext/e/repmgr) [`bgw_replstatus`](/ext/e/bgw_replstatus) [`pglogical_origin`](/ext/e/pglogical_origin) [`pglogical_ticker`](/ext/e/pglogical_ticker) [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) [`decoderbufs`](/ext/e/decoderbufs) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> require libpgfeutils


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.7` | {{< pgvers "18,17,16,15,14" >}} | `pgactive` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.7` | {{< pgvers "18,17,16,15,14" >}} | `pgactive_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgactive` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| el8.aarch64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| el9.x86_64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| el9.aarch64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| el10.x86_64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| el10.aarch64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| d12.x86_64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| d12.aarch64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| d13.x86_64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| d13.aarch64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| u22.x86_64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| u22.aarch64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| u24.x86_64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| u24.aarch64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| u26.x86_64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
| u26.aarch64 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 | AVAIL PIGSTY 2.1.7 1 |
@ el8.x86_64 18 pgactive_18 pgactive_18-2.1.7-1PIGSTY.el8.x86_64.rpm pigsty 2.1.7 376.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgactive_18-2.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgactive_18 pgactive_18-2.1.7-1PIGSTY.el8.aarch64.rpm pigsty 2.1.7 360.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgactive_18-2.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgactive_18 pgactive_18-2.1.7-1PIGSTY.el9.x86_64.rpm pigsty 2.1.7 346.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_18-2.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgactive_18 pgactive_18-2.1.7-1PIGSTY.el9.aarch64.rpm pigsty 2.1.7 338.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_18-2.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgactive_18 pgactive_18-2.1.7-1PIGSTY.el10.x86_64.rpm pigsty 2.1.7 350.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_18-2.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgactive_18 pgactive_18-2.1.7-1PIGSTY.el10.aarch64.rpm pigsty 2.1.7 343.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_18-2.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb pigsty 2.1.7 593.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb pigsty 2.1.7 567.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb pigsty 2.1.7 594.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb pigsty 2.1.7 570.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb pigsty 2.1.7 644.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb pigsty 2.1.7 634.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~noble_amd64.deb pigsty 2.1.7 625.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~noble_arm64.deb pigsty 2.1.7 619.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb pigsty 2.1.7 622.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb pigsty 2.1.7 614.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-18-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgactive_17 pgactive_17-2.1.7-1PIGSTY.el8.x86_64.rpm pigsty 2.1.7 367.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgactive_17-2.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgactive_17 pgactive_17-2.1.7-1PIGSTY.el8.aarch64.rpm pigsty 2.1.7 352.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgactive_17-2.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgactive_17 pgactive_17-2.1.7-1PIGSTY.el9.x86_64.rpm pigsty 2.1.7 339.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_17-2.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgactive_17 pgactive_17-2.1.7-1PIGSTY.el9.aarch64.rpm pigsty 2.1.7 330.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_17-2.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgactive_17 pgactive_17-2.1.7-1PIGSTY.el10.x86_64.rpm pigsty 2.1.7 343.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_17-2.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgactive_17 pgactive_17-2.1.7-1PIGSTY.el10.aarch64.rpm pigsty 2.1.7 335.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_17-2.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb pigsty 2.1.7 586.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb pigsty 2.1.7 561.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb pigsty 2.1.7 588.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb pigsty 2.1.7 564.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb pigsty 2.1.7 711.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb pigsty 2.1.7 702.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~noble_amd64.deb pigsty 2.1.7 618.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~noble_arm64.deb pigsty 2.1.7 613.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb pigsty 2.1.7 615.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb pigsty 2.1.7 606.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-17-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgactive_16 pgactive_16-2.1.7-1PIGSTY.el8.x86_64.rpm pigsty 2.1.7 361.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgactive_16-2.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgactive_16 pgactive_16-2.1.7-1PIGSTY.el8.aarch64.rpm pigsty 2.1.7 346.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgactive_16-2.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgactive_16 pgactive_16-2.1.7-1PIGSTY.el9.x86_64.rpm pigsty 2.1.7 333.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_16-2.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgactive_16 pgactive_16-2.1.7-1PIGSTY.el9.aarch64.rpm pigsty 2.1.7 325.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_16-2.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgactive_16 pgactive_16-2.1.7-1PIGSTY.el10.x86_64.rpm pigsty 2.1.7 338.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_16-2.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgactive_16 pgactive_16-2.1.7-1PIGSTY.el10.aarch64.rpm pigsty 2.1.7 329.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_16-2.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb pigsty 2.1.7 581.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb pigsty 2.1.7 557.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb pigsty 2.1.7 583.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb pigsty 2.1.7 559.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb pigsty 2.1.7 701.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb pigsty 2.1.7 692.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~noble_amd64.deb pigsty 2.1.7 613.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~noble_arm64.deb pigsty 2.1.7 607.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb pigsty 2.1.7 610.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb pigsty 2.1.7 602.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-16-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgactive_15 pgactive_15-2.1.7-1PIGSTY.el8.x86_64.rpm pigsty 2.1.7 353.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgactive_15-2.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgactive_15 pgactive_15-2.1.7-1PIGSTY.el8.aarch64.rpm pigsty 2.1.7 338.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgactive_15-2.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgactive_15 pgactive_15-2.1.7-1PIGSTY.el9.x86_64.rpm pigsty 2.1.7 330.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_15-2.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgactive_15 pgactive_15-2.1.7-1PIGSTY.el9.aarch64.rpm pigsty 2.1.7 322.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_15-2.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgactive_15 pgactive_15-2.1.7-1PIGSTY.el10.x86_64.rpm pigsty 2.1.7 333.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_15-2.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgactive_15 pgactive_15-2.1.7-1PIGSTY.el10.aarch64.rpm pigsty 2.1.7 327.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_15-2.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb pigsty 2.1.7 577.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb pigsty 2.1.7 551.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb pigsty 2.1.7 580.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb pigsty 2.1.7 555.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb pigsty 2.1.7 698.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb pigsty 2.1.7 690.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~noble_amd64.deb pigsty 2.1.7 610.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~noble_arm64.deb pigsty 2.1.7 606.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb pigsty 2.1.7 607.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb pigsty 2.1.7 599.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-15-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgactive_14 pgactive_14-2.1.7-1PIGSTY.el8.x86_64.rpm pigsty 2.1.7 352.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgactive_14-2.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgactive_14 pgactive_14-2.1.7-1PIGSTY.el8.aarch64.rpm pigsty 2.1.7 339.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgactive_14-2.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgactive_14 pgactive_14-2.1.7-1PIGSTY.el9.x86_64.rpm pigsty 2.1.7 332.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_14-2.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgactive_14 pgactive_14-2.1.7-1PIGSTY.el9.aarch64.rpm pigsty 2.1.7 325.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_14-2.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgactive_14 pgactive_14-2.1.7-1PIGSTY.el10.x86_64.rpm pigsty 2.1.7 338.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_14-2.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgactive_14 pgactive_14-2.1.7-1PIGSTY.el10.aarch64.rpm pigsty 2.1.7 329.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_14-2.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb pigsty 2.1.7 581.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb pigsty 2.1.7 554.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb pigsty 2.1.7 582.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb pigsty 2.1.7 555.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb pigsty 2.1.7 701.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb pigsty 2.1.7 693.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~noble_amd64.deb pigsty 2.1.7 613.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~noble_arm64.deb pigsty 2.1.7 607.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb pigsty 2.1.7 609.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgactive postgresql-14-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb pigsty 2.1.7 601.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-14-pgactive_2.1.7-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgactive` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgactive         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgactive` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgactive;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgactive -v 18  # PG 18
pig ext install -y pgactive -v 17  # PG 17
pig ext install -y pgactive -v 16  # PG 16
pig ext install -y pgactive -v 15  # PG 15
pig ext install -y pgactive -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgactive_18       # PG 18
dnf install -y pgactive_17       # PG 17
dnf install -y pgactive_16       # PG 16
dnf install -y pgactive_15       # PG 15
dnf install -y pgactive_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgactive   # PG 18
apt install -y postgresql-17-pgactive   # PG 17
apt install -y postgresql-16-pgactive   # PG 16
apt install -y postgresql-15-pgactive   # PG 15
apt install -y postgresql-14-pgactive   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgactive';
```


**创建扩展**：

```sql
CREATE EXTENSION pgactive;
```



## 用法

> [pgactive: PostgreSQL 双活复制扩展](https://github.com/aws/pgactive)

`pgactive` 扩展为 PostgreSQL 提供双活（多主）复制，多个数据库实例可以同时接受写入并相互复制变更。

### 启用

```sql
CREATE EXTENSION pgactive;
```

### 概述

pgactive 使用逻辑复制作为基础实现双活复制。集群中的多个数据库可以接受变更并双向复制。

### 关键概念

- **双活**：所有节点同时接受读写
- **异步**：变更在节点之间异步复制
- **冲突解决**：应用程序必须处理来自多个写入者的冲突变更
- **逻辑复制**：使用 PostgreSQL 的逻辑解码来解释和应用变更

### 使用场景

- 多区域高可用数据库集群
- 减少应用程序与数据库之间的写入延迟
- 蓝绿应用更新
- 必须保持双方可写的系统间数据迁移

### 设计注意事项

使用 pgactive 的应用程序必须能够处理：

- **写冲突**：不同节点上对同一行的并发修改
- **复制延迟**：变更可能不会立即在所有节点上可见
- **功能限制**：某些功能如自增序列在跨节点时需要特殊处理

### 注意事项

- 基于 PostgreSQL 的原生逻辑复制基础设施构建
- 需要 PostgreSQL 10+（原生逻辑复制支持）
- 详细设置和冲突解决策略请参阅项目文档
