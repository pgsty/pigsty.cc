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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgactive-2.1.10.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgactive-2.1.10.tar.gz</div>
    <div class="ext-card__desc">pgactive-2.1.10.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgactive`**](/ext/e/pgactive) | `2.1.10` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9560  | [**`pgactive`**](/ext/e/pgactive) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table .wide .expand}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`spock`](/ext/e/spock) [`mimeo`](/ext/e/mimeo) [`pgoutput`](/ext/e/pgoutput) [`postgres_fdw`](/ext/e/postgres_fdw) [`repmgr`](/ext/e/repmgr) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`citus`](/ext/e/citus) [`pgautofailover`](/ext/e/pgautofailover) [`bgw_replstatus`](/ext/e/bgw_replstatus) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> SQL 2.1.8.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.10` | {{< pgvers "19,18,17,16,15" >}} | `pgactive` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.10` | {{< pgvers "19,18,17,16,15" >}} | `pgactive_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.1.10` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pgactive` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| el9.x86_64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| el9.aarch64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| el10.x86_64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| el10.aarch64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| d12.x86_64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| d12.aarch64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| d13.x86_64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| d13.aarch64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| u22.x86_64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| u22.aarch64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| u24.x86_64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| u24.aarch64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| u26.x86_64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
| u26.aarch64 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 | AVAIL PIGSTY 2.1.10 1 |
@ el9.x86_64 19 pgactive_19 pgactive_19-2.1.10-1PGSTY.el9.x86_64.rpm pigsty 2.1.10 639.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_19-2.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 pgactive_19 pgactive_19-2.1.10-1PGSTY.el9.aarch64.rpm pigsty 2.1.10 627.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_19-2.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 pgactive_19 pgactive_19-2.1.10-1PGSTY.el10.x86_64.rpm pigsty 2.1.10 646.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_19-2.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 pgactive_19 pgactive_19-2.1.10-1PGSTY.el10.aarch64.rpm pigsty 2.1.10 636.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_19-2.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb pigsty 2.1.10 597.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb pigsty 2.1.10 572.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~trixie_amd64.deb pigsty 2.1.10 599.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~trixie_arm64.deb pigsty 2.1.10 576.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~jammy_amd64.deb pigsty 2.1.10 651.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~jammy_arm64.deb pigsty 2.1.10 641.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~noble_amd64.deb pigsty 2.1.10 631.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~noble_arm64.deb pigsty 2.1.10 625.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~resolute_amd64.deb pigsty 2.1.10 628.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-pgactive postgresql-19-pgactive_2.1.10-1PGSTY~resolute_arm64.deb pigsty 2.1.10 619.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-19-pgactive_2.1.10-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 pgactive_18 pgactive_18-2.1.10-1PGSTY.el8.x86_64.rpm pigsty 2.1.10 646.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgactive_18-2.1.10-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgactive_18 pgactive_18-2.1.10-1PGSTY.el8.aarch64.rpm pigsty 2.1.10 624.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgactive_18-2.1.10-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgactive_18 pgactive_18-2.1.10-1PGSTY.el9.x86_64.rpm pigsty 2.1.10 636.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_18-2.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgactive_18 pgactive_18-2.1.10-1PGSTY.el9.aarch64.rpm pigsty 2.1.10 624.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_18-2.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgactive_18 pgactive_18-2.1.10-1PGSTY.el10.x86_64.rpm pigsty 2.1.10 643.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_18-2.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgactive_18 pgactive_18-2.1.10-1PGSTY.el10.aarch64.rpm pigsty 2.1.10 632.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_18-2.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb pigsty 2.1.10 595.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb pigsty 2.1.10 569.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~trixie_amd64.deb pigsty 2.1.10 596.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~trixie_arm64.deb pigsty 2.1.10 571.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~jammy_amd64.deb pigsty 2.1.10 647.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~jammy_arm64.deb pigsty 2.1.10 635.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~noble_amd64.deb pigsty 2.1.10 628.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~noble_arm64.deb pigsty 2.1.10 621.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~resolute_amd64.deb pigsty 2.1.10 624.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgactive postgresql-18-pgactive_2.1.10-1PGSTY~resolute_arm64.deb pigsty 2.1.10 616.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-18-pgactive_2.1.10-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgactive_17 pgactive_17-2.1.10-1PGSTY.el8.x86_64.rpm pigsty 2.1.10 637.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgactive_17-2.1.10-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgactive_17 pgactive_17-2.1.10-1PGSTY.el8.aarch64.rpm pigsty 2.1.10 617.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgactive_17-2.1.10-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgactive_17 pgactive_17-2.1.10-1PGSTY.el9.x86_64.rpm pigsty 2.1.10 628.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_17-2.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgactive_17 pgactive_17-2.1.10-1PGSTY.el9.aarch64.rpm pigsty 2.1.10 616.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_17-2.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgactive_17 pgactive_17-2.1.10-1PGSTY.el10.x86_64.rpm pigsty 2.1.10 633.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_17-2.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgactive_17 pgactive_17-2.1.10-1PGSTY.el10.aarch64.rpm pigsty 2.1.10 624.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_17-2.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb pigsty 2.1.10 587.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb pigsty 2.1.10 561.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~trixie_amd64.deb pigsty 2.1.10 589.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~trixie_arm64.deb pigsty 2.1.10 564.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~jammy_amd64.deb pigsty 2.1.10 714.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~jammy_arm64.deb pigsty 2.1.10 704.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~noble_amd64.deb pigsty 2.1.10 620.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~noble_arm64.deb pigsty 2.1.10 614.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~resolute_amd64.deb pigsty 2.1.10 616.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgactive postgresql-17-pgactive_2.1.10-1PGSTY~resolute_arm64.deb pigsty 2.1.10 608.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-17-pgactive_2.1.10-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgactive_16 pgactive_16-2.1.10-1PGSTY.el8.x86_64.rpm pigsty 2.1.10 632.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgactive_16-2.1.10-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgactive_16 pgactive_16-2.1.10-1PGSTY.el8.aarch64.rpm pigsty 2.1.10 611.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgactive_16-2.1.10-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgactive_16 pgactive_16-2.1.10-1PGSTY.el9.x86_64.rpm pigsty 2.1.10 623.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_16-2.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgactive_16 pgactive_16-2.1.10-1PGSTY.el9.aarch64.rpm pigsty 2.1.10 611.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_16-2.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgactive_16 pgactive_16-2.1.10-1PGSTY.el10.x86_64.rpm pigsty 2.1.10 629.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_16-2.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgactive_16 pgactive_16-2.1.10-1PGSTY.el10.aarch64.rpm pigsty 2.1.10 619.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_16-2.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb pigsty 2.1.10 583.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb pigsty 2.1.10 557.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~trixie_amd64.deb pigsty 2.1.10 585.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~trixie_arm64.deb pigsty 2.1.10 559.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~jammy_amd64.deb pigsty 2.1.10 703.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~jammy_arm64.deb pigsty 2.1.10 693.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~noble_amd64.deb pigsty 2.1.10 615.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~noble_arm64.deb pigsty 2.1.10 608.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~resolute_amd64.deb pigsty 2.1.10 612.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgactive postgresql-16-pgactive_2.1.10-1PGSTY~resolute_arm64.deb pigsty 2.1.10 603.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-16-pgactive_2.1.10-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgactive_15 pgactive_15-2.1.10-1PGSTY.el8.x86_64.rpm pigsty 2.1.10 623.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgactive_15-2.1.10-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgactive_15 pgactive_15-2.1.10-1PGSTY.el8.aarch64.rpm pigsty 2.1.10 601.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgactive_15-2.1.10-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgactive_15 pgactive_15-2.1.10-1PGSTY.el9.x86_64.rpm pigsty 2.1.10 617.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgactive_15-2.1.10-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgactive_15 pgactive_15-2.1.10-1PGSTY.el9.aarch64.rpm pigsty 2.1.10 607.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgactive_15-2.1.10-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgactive_15 pgactive_15-2.1.10-1PGSTY.el10.x86_64.rpm pigsty 2.1.10 623.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgactive_15-2.1.10-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgactive_15 pgactive_15-2.1.10-1PGSTY.el10.aarch64.rpm pigsty 2.1.10 613.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgactive_15-2.1.10-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb pigsty 2.1.10 577.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb pigsty 2.1.10 550.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~trixie_amd64.deb pigsty 2.1.10 578.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~trixie_arm64.deb pigsty 2.1.10 553.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~jammy_amd64.deb pigsty 2.1.10 697.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~jammy_arm64.deb pigsty 2.1.10 689.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~noble_amd64.deb pigsty 2.1.10 609.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~noble_arm64.deb pigsty 2.1.10 604.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~resolute_amd64.deb pigsty 2.1.10 607.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgactive postgresql-15-pgactive_2.1.10-1PGSTY~resolute_arm64.deb pigsty 2.1.10 599.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgactive/postgresql-15-pgactive_2.1.10-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgactive;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgactive -v 19  # PG 19
pig ext install -y pgactive -v 18  # PG 18
pig ext install -y pgactive -v 17  # PG 17
pig ext install -y pgactive -v 16  # PG 16
pig ext install -y pgactive -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgactive_19       # PG 19
dnf install -y pgactive_18       # PG 18
dnf install -y pgactive_17       # PG 17
dnf install -y pgactive_16       # PG 16
dnf install -y pgactive_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pgactive   # PG 19
apt install -y postgresql-18-pgactive   # PG 18
apt install -y postgresql-17-pgactive   # PG 17
apt install -y postgresql-16-pgactive   # PG 16
apt install -y postgresql-15-pgactive   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'pgactive';
```


**创建扩展**：

```sql
CREATE EXTENSION pgactive;
```

## 用法

来源：

- [Official source](https://github.com/aws/pgactive/blob/v2.1.10/README.md)
- [Official source](https://github.com/aws/pgactive/blob/v2.1.10/docs/quickstart.md)
- [Official source](https://github.com/aws/pgactive/blob/v2.1.10/docs/README.md)
- [Official source](https://github.com/aws/pgactive/blob/v2.1.10/docs/referenceguide.md)
- [Official source](https://github.com/aws/pgactive/blob/v2.1.10/pgactive.control.in)
- [Official source](https://github.com/aws/pgactive/blob/v2.1.10/include/pgactive_version.h.in)
- [Official source](https://github.com/aws/pgactive/blob/v2.1.10/pgactive--2.1.10.sql)
- [Official source](https://github.com/aws/pgactive/releases/tag/v2.1.10)

`pgactive` 2.1.10 在数据库之间以全互联拓扑提供多主逻辑复制。写入先本地提交再复制到其他节点；应用必须处理延迟、冲突和节点本地锁，不能假定具备全局可串行化能力。

### 配置复制组

此版本要求 PostgreSQL 18.7、17.12、16.16、15.20 或 14.25，以及对应分支的更新次版本；发布说明还列出即将到来的 PostgreSQL 19。预加载库，配置逻辑 WAL 和足够的复制槽及工作进程，再重启。安装和管理函数需要超级用户权限。

```ini
shared_preload_libraries = 'pgactive'
wal_level = logical
```

```sql
CREATE EXTENSION pgactive;
SELECT pgactive.pgactive_create_group(
  node_name := 'node1-app',
  node_dsn := 'user_mapping=postgres pgactive_foreign_server=node1'
);
SELECT pgactive.pgactive_wait_for_node_ready();
```

示例假定已经存在使用 pgactive_fdw 的 node1 外部服务器、受保护的用户映射，以及连接自身数据库和所有其他节点的通路。实际凭据应通过受保护的映射或密码文件配置。对新加入的空数据库，先创建扩展，再用自身 node_dsn 和对端 join_using_dsn 调用 pgactive.pgactive_join_group，并等待就绪。内置加入流程负责协调初始化，独立制作的普通转储不能替代它。

### 运维与升级

加入节点时所有对端都必须可达。提前规划唯一键、序列分配、冲突处理和复制槽保留。DDL 复制默认关闭，启用时要求发送端和接收端采用一致策略。应用工作进程默认以表所有者身份执行 DML，但复制连接及工作进程管理仍具备高权限。

2.1.10 加固复制名称和元组处理，并修复冲突处理器 ABI 与共享内存锁偏移。2.1.10 节点可以加入旧版本组，但 2.1.9 及更早节点必须先升级，才能加入 2.1.10 节点。安装匹配文件，在每个数据库执行随附 SQL 升级，并协调组内的重启、重连和加入顺序。
