---
title: "pgfr_record"
linkTitle: "pgfr_record"
description: "基于 pg_cron 的服务端 PostgreSQL 性能飞行记录器"
weight: 6060
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dventimisupabase/pg_flight_recorder">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dventimisupabase/pg_flight_recorder</div>
    <div class="ext-card__desc">https://github.com/dventimisupabase/pg_flight_recorder</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_flight_recorder-2.29.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_flight_recorder-2.29.2.tar.gz</div>
    <div class="ext-card__desc">pg_flight_recorder-2.29.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_flight_recorder`**](/ext/e/pgfr_record) | `2.29.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6060  | [**`pgfr_record`**](/ext/e/pgfr_record) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgfr_record` |
| 6061  | [**`pgfr_analyze`**](/ext/e/pgfr_analyze) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgfr_analyze` |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_cron`](/ext/e/pg_cron) [`pg_profile`](/ext/e/pg_profile) [`pgmonitor`](/ext/e/pgmonitor) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pgfr_analyze`](/ext/e/pgfr_analyze) |
{.ext-table .ext-table--rel}


> Package normalizes the upstream 0.0.0 control version to 2.29.2; run SELECT pgfr_record.enable() after CREATE EXTENSION. The downstream install patch defers scheduling until the CREATE transaction commits and guards optional pg_stat_statements.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.29.2` | {{< pgvers "18,17,16,15" >}} | `pg_flight_recorder` | `pg_cron` |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.29.2` | {{< pgvers "18,17,16,15" >}} | `pg_flight_recorder_$v` | `pg_cron_$v` |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.29.2` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-flight-recorder` | `postgresql-$v-cron` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_flight_recorder_18 pg_flight_recorder_18-2.29.2-1PIGSTY.el8.noarch.rpm pigsty 2.29.2 92.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_flight_recorder_18-2.29.2-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_flight_recorder_18 pg_flight_recorder_18-2.29.2-1PIGSTY.el8.noarch.rpm pigsty 2.29.2 92.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_flight_recorder_18-2.29.2-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_flight_recorder_18 pg_flight_recorder_18-2.29.2-1PIGSTY.el9.noarch.rpm pigsty 2.29.2 86.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_flight_recorder_18-2.29.2-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_flight_recorder_18 pg_flight_recorder_18-2.29.2-1PIGSTY.el9.noarch.rpm pigsty 2.29.2 86.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_flight_recorder_18-2.29.2-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_flight_recorder_18 pg_flight_recorder_18-2.29.2-1PIGSTY.el10.noarch.rpm pigsty 2.29.2 86.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_flight_recorder_18-2.29.2-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_flight_recorder_18 pg_flight_recorder_18-2.29.2-1PIGSTY.el10.noarch.rpm pigsty 2.29.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_flight_recorder_18-2.29.2-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb pigsty 2.29.2 81.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb pigsty 2.29.2 81.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-flight-recorder postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-flight-recorder/postgresql-18-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 pg_flight_recorder_17 pg_flight_recorder_17-2.29.2-1PIGSTY.el8.noarch.rpm pigsty 2.29.2 92.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_flight_recorder_17-2.29.2-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_flight_recorder_17 pg_flight_recorder_17-2.29.2-1PIGSTY.el8.noarch.rpm pigsty 2.29.2 92.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_flight_recorder_17-2.29.2-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_flight_recorder_17 pg_flight_recorder_17-2.29.2-1PIGSTY.el9.noarch.rpm pigsty 2.29.2 86.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_flight_recorder_17-2.29.2-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_flight_recorder_17 pg_flight_recorder_17-2.29.2-1PIGSTY.el9.noarch.rpm pigsty 2.29.2 86.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_flight_recorder_17-2.29.2-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_flight_recorder_17 pg_flight_recorder_17-2.29.2-1PIGSTY.el10.noarch.rpm pigsty 2.29.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_flight_recorder_17-2.29.2-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_flight_recorder_17 pg_flight_recorder_17-2.29.2-1PIGSTY.el10.noarch.rpm pigsty 2.29.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_flight_recorder_17-2.29.2-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb pigsty 2.29.2 81.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb pigsty 2.29.2 81.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-flight-recorder postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-flight-recorder/postgresql-17-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 pg_flight_recorder_16 pg_flight_recorder_16-2.29.2-1PIGSTY.el8.noarch.rpm pigsty 2.29.2 92.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_flight_recorder_16-2.29.2-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_flight_recorder_16 pg_flight_recorder_16-2.29.2-1PIGSTY.el8.noarch.rpm pigsty 2.29.2 92.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_flight_recorder_16-2.29.2-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_flight_recorder_16 pg_flight_recorder_16-2.29.2-1PIGSTY.el9.noarch.rpm pigsty 2.29.2 86.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_flight_recorder_16-2.29.2-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_flight_recorder_16 pg_flight_recorder_16-2.29.2-1PIGSTY.el9.noarch.rpm pigsty 2.29.2 86.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_flight_recorder_16-2.29.2-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_flight_recorder_16 pg_flight_recorder_16-2.29.2-1PIGSTY.el10.noarch.rpm pigsty 2.29.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_flight_recorder_16-2.29.2-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_flight_recorder_16 pg_flight_recorder_16-2.29.2-1PIGSTY.el10.noarch.rpm pigsty 2.29.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_flight_recorder_16-2.29.2-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb pigsty 2.29.2 81.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb pigsty 2.29.2 81.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-flight-recorder postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-flight-recorder/postgresql-16-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 pg_flight_recorder_15 pg_flight_recorder_15-2.29.2-1PIGSTY.el8.noarch.rpm pigsty 2.29.2 92.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_flight_recorder_15-2.29.2-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_flight_recorder_15 pg_flight_recorder_15-2.29.2-1PIGSTY.el8.noarch.rpm pigsty 2.29.2 92.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_flight_recorder_15-2.29.2-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_flight_recorder_15 pg_flight_recorder_15-2.29.2-1PIGSTY.el9.noarch.rpm pigsty 2.29.2 86.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_flight_recorder_15-2.29.2-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_flight_recorder_15 pg_flight_recorder_15-2.29.2-1PIGSTY.el9.noarch.rpm pigsty 2.29.2 86.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_flight_recorder_15-2.29.2-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_flight_recorder_15 pg_flight_recorder_15-2.29.2-1PIGSTY.el10.noarch.rpm pigsty 2.29.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_flight_recorder_15-2.29.2-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_flight_recorder_15 pg_flight_recorder_15-2.29.2-1PIGSTY.el10.noarch.rpm pigsty 2.29.2 86.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_flight_recorder_15-2.29.2-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb pigsty 2.29.2 79.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb pigsty 2.29.2 81.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb pigsty 2.29.2 81.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-flight-recorder postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb pigsty 2.29.2 80.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-flight-recorder/postgresql-15-pg-flight-recorder_2.29.2-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_flight_recorder` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_flight_recorder         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_flight_recorder` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_flight_recorder;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_flight_recorder -v 18  # PG 18
pig ext install -y pg_flight_recorder -v 17  # PG 17
pig ext install -y pg_flight_recorder -v 16  # PG 16
pig ext install -y pg_flight_recorder -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_flight_recorder_18       # PG 18
dnf install -y pg_flight_recorder_17       # PG 17
dnf install -y pg_flight_recorder_16       # PG 16
dnf install -y pg_flight_recorder_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-flight-recorder   # PG 18
apt install -y postgresql-17-pg-flight-recorder   # PG 17
apt install -y postgresql-16-pg-flight-recorder   # PG 16
apt install -y postgresql-15-pg-flight-recorder   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgfr_record CASCADE;  -- 依赖: pg_cron
```

## 用法

来源：

- [pgfr_record v2.29.2 README](https://github.com/dventimisupabase/pg_flight_recorder/blob/v2.29.2/pgfr_record/README.md)
- [pgfr_record control file](https://github.com/dventimisupabase/pg_flight_recorder/blob/v2.29.2/pgfr_record/extension.control)
- [pg_flight_recorder v2.29.2 reference](https://github.com/dventimisupabase/pg_flight_recorder/blob/v2.29.2/REFERENCE.md)
- [v2.29.2 release notes](https://github.com/dventimisupabase/pg_flight_recorder/releases/tag/v2.29.2)

pgfr_record 是 PostgreSQL Flight Recorder 的记录部分。它定期采样 PostgreSQL 活动、等待、锁、复制、真空及相关健康数据，并将其存储在数据库内的有界缓冲区中，然后保留快照以供事故分析使用。当需要短生命周期的数据库条件能够存活足够长的时间以便后续诊断时，请使用此功能。

### 安装和启用记录

pgfr_record 需要 pg_cron：

    CREATE EXTENSION pg_cron;
    CREATE EXTENSION pgfr_record;
    SELECT pgfr_record.enable();

enable() 会安装并调度收集器任务。它还会报告配置警告；请务必查看这些警告，而不要将成功调用视为所有指标都被收集的证明。

### 检查记录器健康状况

    SELECT * FROM pgfr_record.health_check();
    SELECT * FROM pgfr_record.ring_buffer_health();
    SELECT * FROM pgfr_record.list_profiles();

在发生事故前使用 set_mode 或 apply_profile 选择所需的采集配置文件：

    SELECT pgfr_record.set_mode('normal');

可用的采集模式包括正常、轻量级、紧急和终止。配置文件名称和采样间隔可能会发生变化，因此请列出已安装的配置文件而不是硬编码未记录的名称。

### 记录数据索引

- deltas：累积 PostgreSQL 计数器的时间间隔变化。
- recent_activity 和 recent_waits：采样的会话和等待事件。
- recent_locks 和 recent_idle：锁和空闲会话观察结果。
- recent_replication 和 recent_vacuum：复制和维护状态。
- archiver_status：WAL 归档健康状况。
- snapshot 和 ring-buffer 表：用于 pgfr_analyze 的保留历史记录。

许多工作缓冲区是 UNLOGGED 的，以减少写入放大。它们在崩溃后不可用，并且不会像普通已记录的表那样进行复制；持久化的快照提供了更长生命周期的分析表面。

### 管理函数

- pgfr_record.enable()：创建或激活计划收集器。
- pgfr_record.disable()：停止计划采集。
- pgfr_record.health_check()：报告收集器和配置健康状况。
- pgfr_record.set_mode(...)：更改采集模式。
- pgfr_record.apply_profile(...)：应用预定义的配置文件。
- pgfr_record.list_profiles()：列出可用的配置文件。
- pgfr_record.ring_buffer_health()：检查容量和保留压力。
- pgfr_record.cleanup(...)：根据 API 删除保留的历史记录。

### 保留和开销

默认设计保持短周期环形缓冲区历史记录，并且更持久化的快照通常在安装的配置文件不同而有所变化，大约为7天到30天。请验证实际表大小、作业调度以及保留设置。

pgfr_record 创建约十个 pg_cron 任务。pg_cron.log_run 每天可能会生成数千行记录；当额外的审计跟踪不再需要时，请禁用该日志或清除 cron 历史记录。采样还会增加 SQL、存储和目录流量，因此请在目标工作负载上测量开销。

版本 2.29.2 处理无法更新 cron.job 的管理服务角色：任务仍然可以被调度，而可选的 nodename 正则化会在警告中跳过。

### 注意事项

- pg_stat_statements 可丰富多种分析但为可选项；当需要时，请单独启用并调整其大小。
- 采集无法重建从未采样的时间周期。在发生事故前请启用并验证记录器。
- UNLOGGED 缓冲区可能在崩溃恢复后被截断。
- 记录器表可以包含查询文本、角色名称、客户端数据和操作细节。请应用适当的权限和保留控制。
