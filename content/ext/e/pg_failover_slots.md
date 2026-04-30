---
title: "pg_failover_slots"
linkTitle: "pg_failover_slots"
description: "在Failover过程中保留复制槽"
weight: 9540
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/EnterpriseDB/pg_failover_slots">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">EnterpriseDB/pg_failover_slots</div>
    <div class="ext-card__desc">https://github.com/EnterpriseDB/pg_failover_slots</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_failover_slots-1.2.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_failover_slots-1.2.1.tar.gz</div>
    <div class="ext-card__desc">pg_failover_slots-1.2.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_failover_slots`**](/ext/e/pg_failover_slots) | `1.2.1` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9540  | [**`pg_failover_slots`**](/ext/e/pg_failover_slots) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`pglogical_origin`](/ext/e/pglogical_origin) [`pglogical_ticker`](/ext/e/pglogical_ticker) [`pgactive`](/ext/e/pgactive) [`repmgr`](/ext/e/repmgr) [`bgw_replstatus`](/ext/e/bgw_replstatus) [`pgl_ddl_deploy`](/ext/e/pgl_ddl_deploy) [`decoderbufs`](/ext/e/decoderbufs) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Load via shared_preload_libraries on both primary and standby nodes.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_failover_slots` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_failover_slots_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-failover-slots` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 3 | AVAIL PIGSTY 1.2.1 4 | AVAIL PIGSTY 1.2.1 4 |
| el8.aarch64 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 3 | AVAIL PIGSTY 1.2.1 4 | AVAIL PIGSTY 1.2.1 4 |
| el9.x86_64 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 3 | AVAIL PIGSTY 1.2.1 4 | AVAIL PIGSTY 1.2.1 4 |
| el9.aarch64 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 3 | AVAIL PIGSTY 1.2.1 4 | AVAIL PIGSTY 1.2.1 4 |
| el10.x86_64 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 |
| el10.aarch64 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 | AVAIL PIGSTY 1.2.1 2 |
| d12.x86_64 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 |
| d12.aarch64 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 |
| d13.x86_64 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 |
| d13.aarch64 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 |
| u22.x86_64 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 |
| u22.aarch64 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 |
| u24.x86_64 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 |
| u24.aarch64 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 | AVAIL PGDG 1.2.1 3 |
| u26.x86_64 | AVAIL PGDG 1.2.1 2 | AVAIL PGDG 1.2.1 2 | AVAIL PGDG 1.2.1 2 | AVAIL PGDG 1.2.1 2 | AVAIL PGDG 1.2.1 2 |
| u26.aarch64 | AVAIL PGDG 1.2.1 2 | AVAIL PGDG 1.2.1 2 | AVAIL PGDG 1.2.1 2 | AVAIL PGDG 1.2.1 2 | AVAIL PGDG 1.2.1 2 |
@ el8.x86_64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_failover_slots_18-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.0-1PGDG.rhel8.x86_64.rpm pgdg 1.2.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_failover_slots_18-1.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 24.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_failover_slots_18-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.0-1PGDG.rhel8.aarch64.rpm pgdg 1.2.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_failover_slots_18-1.2.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 24.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_failover_slots_18-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.0-1PGDG.rhel9.x86_64.rpm pgdg 1.2.0 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_failover_slots_18-1.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 24.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_failover_slots_18-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.0-1PGDG.rhel9.aarch64.rpm pgdg 1.2.0 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_failover_slots_18-1.2.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 25.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_failover_slots_18-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.0-1PGDG.rhel10.x86_64.rpm pgdg 1.2.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_failover_slots_18-1.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_failover_slots_18-1.2.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_failover_slots_18 pg_failover_slots_18-1.2.0-1PGDG.rhel10.aarch64.rpm pgdg 1.2.0 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_failover_slots_18-1.2.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb pgdg 1.2.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 38.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb pgdg 1.2.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 37.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb pgdg 1.2.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 38.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 39.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb pgdg 1.2.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 38.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb pgdg 1.2.1 40.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 41.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 39.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb pgdg 1.2.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 40.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb pgdg 1.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 40.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb pgdg 1.2.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 39.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb pgdg 1.2.1 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb pgdg 1.2.1 38.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-failover-slots postgresql-18-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 38.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-18-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_failover_slots_17 pg_failover_slots_17-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_failover_slots_17-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_failover_slots_17 pg_failover_slots_17-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_failover_slots_17-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_failover_slots_17 pg_failover_slots_17-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 24.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_failover_slots_17-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_failover_slots_17 pg_failover_slots_17-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_failover_slots_17-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_failover_slots_17 pg_failover_slots_17-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 24.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_failover_slots_17-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_failover_slots_17 pg_failover_slots_17-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_failover_slots_17-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_failover_slots_17 pg_failover_slots_17-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 24.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_failover_slots_17-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_failover_slots_17 pg_failover_slots_17-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_failover_slots_17-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_failover_slots_17 pg_failover_slots_17-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_failover_slots_17-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_failover_slots_17 pg_failover_slots_17-1.1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.1.0 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_failover_slots_17-1.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_failover_slots_17 pg_failover_slots_17-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_failover_slots_17-1.2.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_failover_slots_17 pg_failover_slots_17-1.1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.1.0 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_failover_slots_17-1.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb pgdg 1.2.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 38.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb pgdg 1.2.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 37.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb pgdg 1.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 38.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb pgdg 1.2.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 38.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb pgdg 1.2.1 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 45.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb pgdg 1.2.1 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 45.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 43.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb pgdg 1.2.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 40.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb pgdg 1.2.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 39.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb pgdg 1.2.1 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb pgdg 1.2.1 38.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-failover-slots postgresql-17-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 38.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-17-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_failover_slots_16 pg_failover_slots_16-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_failover_slots_16-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_failover_slots_16 pg_failover_slots_16-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_failover_slots_16-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_failover_slots_16 pg_failover_slots_16-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_failover_slots_16-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_failover_slots_16 pg_failover_slots_16-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 24.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_failover_slots_16-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_failover_slots_16 pg_failover_slots_16-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_failover_slots_16-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_failover_slots_16 pg_failover_slots_16-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_failover_slots_16-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_failover_slots_16 pg_failover_slots_16-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 24.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_failover_slots_16-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_failover_slots_16 pg_failover_slots_16-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_failover_slots_16-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_failover_slots_16 pg_failover_slots_16-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_failover_slots_16-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_failover_slots_16 pg_failover_slots_16-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 24.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_failover_slots_16-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_failover_slots_16 pg_failover_slots_16-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_failover_slots_16-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_failover_slots_16 pg_failover_slots_16-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_failover_slots_16-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_failover_slots_16 pg_failover_slots_16-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_failover_slots_16-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_failover_slots_16 pg_failover_slots_16-1.1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.1.0 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_failover_slots_16-1.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_failover_slots_16 pg_failover_slots_16-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_failover_slots_16-1.2.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_failover_slots_16 pg_failover_slots_16-1.1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.1.0 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_failover_slots_16-1.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb pgdg 1.2.1 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 38.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 39.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb pgdg 1.2.1 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 37.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb pgdg 1.2.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 38.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb pgdg 1.2.1 39.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 37.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb pgdg 1.2.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 44.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 42.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb pgdg 1.2.1 42.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 43.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 41.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb pgdg 1.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 40.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb pgdg 1.2.1 38.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 39.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb pgdg 1.2.1 39.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb pgdg 1.2.1 38.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-failover-slots postgresql-16-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 38.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-16-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_failover_slots_15-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_failover_slots_15-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_failover_slots_15-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.0.0-1.rhel8.x86_64.rpm pgdg 1.0.0 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_failover_slots_15-1.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 24.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_failover_slots_15-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_failover_slots_15-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_failover_slots_15-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.0.0-1.rhel8.aarch64.rpm pgdg 1.0.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_failover_slots_15-1.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 24.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_failover_slots_15-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_failover_slots_15-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_failover_slots_15-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.0.0-1.rhel9.x86_64.rpm pgdg 1.0.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_failover_slots_15-1.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 24.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_failover_slots_15-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_failover_slots_15-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_failover_slots_15-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.0.0-1.rhel9.aarch64.rpm pgdg 1.0.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_failover_slots_15-1.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_failover_slots_15-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_failover_slots_15 pg_failover_slots_15-1.1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.1.0 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_failover_slots_15-1.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_failover_slots_15-1.2.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_failover_slots_15 pg_failover_slots_15-1.1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.1.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_failover_slots_15-1.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb pgdg 1.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 38.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb pgdg 1.2.1 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 37.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb pgdg 1.2.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 38.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 39.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb pgdg 1.2.1 39.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 37.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb pgdg 1.2.1 42.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 44.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 42.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb pgdg 1.2.1 41.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 43.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 41.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb pgdg 1.2.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 40.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb pgdg 1.2.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 39.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb pgdg 1.2.1 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb pgdg 1.2.1 38.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-failover-slots postgresql-15-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 38.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-15-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.2.1-1PIGSTY.el8.x86_64.rpm pigsty 1.2.1 24.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_failover_slots_14-1.2.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.1.0-1PGDG.rhel8.x86_64.rpm pgdg 1.1.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_failover_slots_14-1.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_failover_slots_14-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.0.0-1.rhel8.x86_64.rpm pgdg 1.0.0 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_failover_slots_14-1.0.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.2.1-1PIGSTY.el8.aarch64.rpm pigsty 1.2.1 24.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_failover_slots_14-1.2.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.1.0-1PGDG.rhel8.aarch64.rpm pgdg 1.1.0 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_failover_slots_14-1.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_failover_slots_14-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.0.0-1.rhel8.aarch64.rpm pgdg 1.0.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_failover_slots_14-1.0.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.2.1-1PIGSTY.el9.x86_64.rpm pigsty 1.2.1 24.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_failover_slots_14-1.2.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.1.0-1PGDG.rhel9.x86_64.rpm pgdg 1.1.0 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_failover_slots_14-1.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_failover_slots_14-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.0.0-1.rhel9.x86_64.rpm pgdg 1.0.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_failover_slots_14-1.0.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.2.1-1PIGSTY.el9.aarch64.rpm pigsty 1.2.1 24.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_failover_slots_14-1.2.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.1.0-1PGDG.rhel9.aarch64.rpm pgdg 1.1.0 24.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_failover_slots_14-1.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_failover_slots_14-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.0.0-1.rhel9.aarch64.rpm pgdg 1.0.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_failover_slots_14-1.0.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.2.1-1PIGSTY.el10.x86_64.rpm pigsty 1.2.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_failover_slots_14-1.2.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_failover_slots_14 pg_failover_slots_14-1.1.0-3PGDG.rhel10.x86_64.rpm pgdg 1.1.0 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_failover_slots_14-1.1.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.2.1-1PIGSTY.el10.aarch64.rpm pigsty 1.2.1 25.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_failover_slots_14-1.2.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_failover_slots_14 pg_failover_slots_14-1.1.0-3PGDG.rhel10.aarch64.rpm pgdg 1.1.0 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_failover_slots_14-1.1.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb pgdg 1.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb pigsty 1.2.1 38.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb pgdg 1.2.0 39.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb pgdg 1.2.1 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb pigsty 1.2.1 37.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb pgdg 1.2.0 38.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb pgdg 1.2.1 39.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb pigsty 1.2.1 38.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb pgdg 1.2.0 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb pgdg 1.2.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb pigsty 1.2.1 37.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb pgdg 1.2.0 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb pgdg 1.2.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb pigsty 1.2.1 44.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb pgdg 1.2.0 42.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb pgdg 1.2.1 41.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb pigsty 1.2.1 43.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb pgdg 1.2.0 41.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb pgdg 1.2.1 39.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb pigsty 1.2.1 40.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb pgdg 1.2.0 39.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb pgdg 1.2.1 38.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb pigsty 1.2.1 39.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb pgdg 1.2.0 38.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb pgdg 1.2.1 39.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb pgdg 1.2.0 39.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb pgdg 1.2.1 38.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pg-failover-slots postgresql-14-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb pgdg 1.2.0 38.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-failover-slots/postgresql-14-pg-failover-slots_1.2.0-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_failover_slots` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_failover_slots         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_failover_slots` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_failover_slots;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_failover_slots -v 18  # PG 18
pig ext install -y pg_failover_slots -v 17  # PG 17
pig ext install -y pg_failover_slots -v 16  # PG 16
pig ext install -y pg_failover_slots -v 15  # PG 15
pig ext install -y pg_failover_slots -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_failover_slots_18       # PG 18
dnf install -y pg_failover_slots_17       # PG 17
dnf install -y pg_failover_slots_16       # PG 16
dnf install -y pg_failover_slots_15       # PG 15
dnf install -y pg_failover_slots_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-failover-slots   # PG 18
apt install -y postgresql-17-pg-failover-slots   # PG 17
apt install -y postgresql-16-pg-failover-slots   # PG 16
apt install -y postgresql-15-pg-failover-slots   # PG 15
apt install -y postgresql-14-pg-failover-slots   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_failover_slots';
```


## 用法

来源：[README](https://github.com/EnterpriseDB/pg_failover_slots/blob/master/README.md)，[releases](https://github.com/EnterpriseDB/pg_failover_slots/releases)

`pg_failover_slots` 通过把逻辑复制槽的定义和位置从 primary 同步到 standby，使这些复制槽在故障转移后仍可继续使用。

### 在两端启用

```ini
shared_preload_libraries = 'pg_failover_slots'
```

README 给出的 standby 必要设置是：

```ini
hot_standby_feedback = on
primary_slot_name = 'my_physical_slot'
```

### 主要配置

```ini
pg_failover_slots.synchronize_slot_names = 'name_like:%'
pg_failover_slots.drop_extra_slots = true
pg_failover_slots.primary_dsn = 'host=primary dbname=mydb'
pg_failover_slots.standby_slot_names = 'standby_physical_slot'
pg_failover_slots.standby_slots_min_confirmed = -1
pg_failover_slots.worker_nap_time = 60000
pg_failover_slots.maintenance_db = 'postgres'
```

README 说明 `synchronize_slot_names` 支持按精确槽名、`LIKE` 模式或 plugin 名称过滤。

### 故障转移前检查 standby 是否就绪

```sql
SELECT slot_name, active
FROM pg_replication_slots
WHERE slot_type = 'logical';
```

在 standby 上，逻辑槽只有“存在且 `active = false`”时才算准备完成。README 明确说明 `active = true` 表示该槽仍在初始化过程中。

### 说明

- 上游要求 PostgreSQL 11+。
- `v1.2.1` 是 bug-fix 发布，没有新增面向用户的 SQL 或 GUC。
- `v1.2.0` 增加了 PostgreSQL 18 支持，并补充说明了 `drop_extra_slots` 的行为。
