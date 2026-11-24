---
title: "pg_background"
linkTitle: "pg_background"
description: "在后台运行 SQL 查询"
weight: 1110
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/vibhorkum/pg_background">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">vibhorkum/pg_background</div>
    <div class="ext-card__desc">https://github.com/vibhorkum/pg_background</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_background-2.0.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_background-2.0.5.tar.gz</div>
    <div class="ext-card__desc">pg_background-2.0.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_background`**](/ext/e/pg_background) | `2.0.5` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1110  | [**`pg_background`**](/ext/e/pg_background) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_task`](/ext/e/pg_task) [`pg_durable`](/ext/e/pg_durable) [`pg_later`](/ext/e/pg_later) [`pg_dispatch`](/ext/e/pg_dispatch) [`pg_retry`](/ext/e/pg_retry) [`pglock`](/ext/e/pglock) [`pgmq`](/ext/e/pgmq) [`ulak`](/ext/e/ulak) [`omni_worker`](/ext/e/omni_worker) [`pg_cron`](/ext/e/pg_cron) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pg_dbms_lock`](/ext/e/pg_dbms_lock) |
{.ext-table .ext-table--rel}


> SQL 2.0.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.5` | {{< pgvers "19,18,17,16,15" >}} | `pg_background` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.5` | {{< pgvers "19,18,17,16,15" >}} | `pg_background_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.0.5` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pg-background` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PGDG - 0 | AVAIL PGDG 2.0.5 12 | AVAIL PGDG 2.0.5 13 | AVAIL PGDG 2.0.5 13 | AVAIL PGDG 2.0.5 14 |
| el8.aarch64 | N/A PGDG - 0 | AVAIL PGDG 2.0.5 13 | AVAIL PGDG 2.0.5 14 | AVAIL PGDG 2.0.5 14 | AVAIL PGDG 2.0.5 15 |
| el9.x86_64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| el9.aarch64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| el10.x86_64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 | AVAIL PGDG 2.0.5 2 |
| el10.aarch64 | AVAIL PGDG 2.0.5 1 | AVAIL PGDG 2.0.5 24 | AVAIL PGDG 2.0.5 24 | AVAIL PGDG 2.0.5 24 | AVAIL PGDG 2.0.5 24 |
| d12.x86_64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
| d12.aarch64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
| d13.x86_64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
| d13.aarch64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
| u22.x86_64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
| u22.aarch64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
| u24.x86_64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
| u24.aarch64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
| u26.x86_64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
| u26.aarch64 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 | AVAIL PIGSTY 2.0.5 4 |
@ el9.x86_64 19 pg_background_19 pg_background_19-2.0.5-1PGDG.rhel9.9.x86_64.rpm pgdg 2.0.5 67.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-x86_64/pg_background_19-2.0.5-1PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 19 pg_background_19 pg_background_19-2.0.5-1PGDG.rhel9.9.aarch64.rpm pgdg 2.0.5 65.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-aarch64/pg_background_19-2.0.5-1PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 19 pg_background_19 pg_background_19-2.0.5-1PGDG.rhel10.3.x86_64.rpm pgdg 2.0.5 67.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-x86_64/pg_background_19-2.0.5-1PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 19 pg_background_19 pg_background_19-2.0.5-1PGDG.rhel10.3.aarch64.rpm pgdg 2.0.5 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-aarch64/pg_background_19-2.0.5-1PGDG.rhel10.3.aarch64.rpm
@ d12.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb pigsty 2.0.5 97.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg12+3_amd64.deb pgdg 2.0.3 94.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg12+3_amd64.deb
@ d12.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg12+2_amd64.deb pgdg 2.0.3 69.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg12+2_amd64.deb
@ d12.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg12+1_amd64.deb pgdg 2.0.3 94.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb pigsty 2.0.5 96.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg12+3_arm64.deb pgdg 2.0.3 93.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg12+3_arm64.deb
@ d12.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg12+2_arm64.deb pgdg 2.0.3 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg12+2_arm64.deb
@ d12.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg12+1_arm64.deb pgdg 2.0.3 93.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~trixie_amd64.deb pigsty 2.0.5 98.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~trixie_amd64.deb
@ d13.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg13+3_amd64.deb pgdg 2.0.3 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg13+3_amd64.deb
@ d13.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg13+2_amd64.deb pgdg 2.0.3 70.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg13+2_amd64.deb
@ d13.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg13+1_amd64.deb pgdg 2.0.3 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~trixie_arm64.deb pigsty 2.0.5 96.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~trixie_arm64.deb
@ d13.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg13+3_arm64.deb pgdg 2.0.3 93.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg13+3_arm64.deb
@ d13.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg13+2_arm64.deb pgdg 2.0.3 68.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg13+2_arm64.deb
@ d13.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg13+1_arm64.deb pgdg 2.0.3 93.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~jammy_amd64.deb pigsty 2.0.5 104.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~jammy_amd64.deb
@ u22.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb pgdg 2.0.3 96.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb
@ u22.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb pgdg 2.0.3 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb pgdg 2.0.3 96.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~jammy_arm64.deb pigsty 2.0.5 102.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~jammy_arm64.deb
@ u22.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb pgdg 2.0.3 94.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb
@ u22.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb pgdg 2.0.3 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb pgdg 2.0.3 94.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~noble_amd64.deb pigsty 2.0.5 100.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~noble_amd64.deb
@ u24.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb pgdg 2.0.3 95.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb
@ u24.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb pgdg 2.0.3 70.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb pgdg 2.0.3 95.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~noble_arm64.deb pigsty 2.0.5 100.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~noble_arm64.deb
@ u24.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb pgdg 2.0.3 93.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb
@ u24.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb pgdg 2.0.3 93.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~resolute_amd64.deb pigsty 2.0.5 99.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~resolute_amd64.deb
@ u26.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb pgdg 2.0.3 94.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb
@ u26.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb pgdg 2.0.3 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb pgdg 2.0.3 94.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.5-1PGSTY~resolute_arm64.deb pigsty 2.0.5 99.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-19-pg-background_2.0.5-1PGSTY~resolute_arm64.deb
@ u26.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb pgdg 2.0.3 92.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb
@ u26.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb pgdg 2.0.3 67.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 19 postgresql-19-pg-background postgresql-19-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb pgdg 2.0.3 92.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-19-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.5 68.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-2.0.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0.4-3PGDG.rhel8.10.x86_64.rpm pgdg 2.0.4 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-2.0.4-3PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0.4-1PGSTY.el8.x86_64.rpm pigsty 2.0.4 106.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_background_18-2.0.4-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.4 67.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-2.0.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.3 66.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-2.0.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 65.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.3 58.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.1 55.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 22.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_background_18-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.5 67.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-2.0.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0.4-3PGDG.rhel8.10.aarch64.rpm pgdg 2.0.4 66.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-2.0.4-3PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0.4-1PGSTY.el8.aarch64.rpm pigsty 2.0.4 104.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_background_18-2.0.4-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.4 66.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-2.0.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.3 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-2.0.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 63.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0 61.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.3 57.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 54.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.1 53.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 22.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_background_18-1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-2.0.5-1PGDG.rhel9.9.x86_64.rpm pgdg 2.0.5 67.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_background_18-2.0.5-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 18 pg_background_18 pg_background_18-2.0.4-1PGSTY.el9.x86_64.rpm pigsty 2.0.4 105.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_background_18-2.0.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-2.0.5-1PGDG.rhel9.9.aarch64.rpm pgdg 2.0.5 65.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_background_18-2.0.5-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 18 pg_background_18 pg_background_18-2.0.4-1PGSTY.el9.aarch64.rpm pigsty 2.0.4 105.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_background_18-2.0.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-2.0.5-1PGDG.rhel10.3.x86_64.rpm pgdg 2.0.5 67.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_background_18-2.0.5-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 18 pg_background_18 pg_background_18-2.0.4-1PGSTY.el10.x86_64.rpm pigsty 2.0.4 106.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_background_18-2.0.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.5-1PGDG.rhel10.3.aarch64.rpm pgdg 2.0.5 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0.5-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.5 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.0.4 65.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.4-1PGSTY.el10.aarch64.rpm pigsty 2.0.4 105.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_background_18-2.0.4-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.4-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.4 65.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.3 63.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.2 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0.2 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0 61.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0 61.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-2.0-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0 61.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-2.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.9.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.9.3-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.9.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.9.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.2 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.9.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.9.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.2 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.9.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.1 53.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.1 53.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.8-1PGDG.rhel10.0.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.6-1PGDG.rhel10.0.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_background_18 pg_background_18-1.5-1PGDG.rhel10.aarch64.rpm pgdg 1.5 22.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_background_18-1.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb pigsty 2.0.5 97.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg12+3_amd64.deb pgdg 2.0.3 69.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg12+3_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg12+2_amd64.deb pgdg 2.0.3 69.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg12+2_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg12+1_amd64.deb pgdg 2.0.3 69.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb pigsty 2.0.5 96.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg12+3_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg12+3_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg12+2_arm64.deb pgdg 2.0.3 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg12+2_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg12+1_arm64.deb pgdg 2.0.3 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~trixie_amd64.deb pigsty 2.0.5 97.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg13+3_amd64.deb pgdg 2.0.3 69.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg13+3_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg13+2_amd64.deb pgdg 2.0.3 69.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg13+2_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg13+1_amd64.deb pgdg 2.0.3 69.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~trixie_arm64.deb pigsty 2.0.5 96.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg13+3_arm64.deb pgdg 2.0.3 68.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg13+3_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg13+2_arm64.deb pgdg 2.0.3 68.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg13+2_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg13+1_arm64.deb pgdg 2.0.3 68.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~jammy_amd64.deb pigsty 2.0.5 104.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb pgdg 2.0.3 71.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb pgdg 2.0.3 71.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb pgdg 2.0.3 71.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~jammy_arm64.deb pigsty 2.0.5 102.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb pgdg 2.0.3 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb pgdg 2.0.3 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb pgdg 2.0.3 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~noble_amd64.deb pigsty 2.0.5 100.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb pgdg 2.0.3 70.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~noble_arm64.deb pigsty 2.0.5 100.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb pgdg 2.0.3 68.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~resolute_amd64.deb pigsty 2.0.5 99.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb pgdg 2.0.3 69.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb pgdg 2.0.3 69.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb pgdg 2.0.3 69.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.5-1PGSTY~resolute_arm64.deb pigsty 2.0.5 99.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-18-pg-background_2.0.5-1PGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb pgdg 2.0.3 67.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb pgdg 2.0.3 67.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-background postgresql-18-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb pgdg 2.0.3 67.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-18-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.5 68.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-2.0.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0.4-3PGDG.rhel8.10.x86_64.rpm pgdg 2.0.4 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-2.0.4-3PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0.4-1PGSTY.el8.x86_64.rpm pigsty 2.0.4 106.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_background_17-2.0.4-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.4 67.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-2.0.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.3 66.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-2.0.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 65.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.3 58.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.1 55.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel8.x86_64.rpm pgdg 1.2 20.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_background_17-1.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.5 67.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-2.0.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0.4-3PGDG.rhel8.10.aarch64.rpm pgdg 2.0.4 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-2.0.4-3PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0.4-1PGSTY.el8.aarch64.rpm pigsty 2.0.4 104.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_background_17-2.0.4-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.4 66.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-2.0.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.3 64.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-2.0.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 63.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0 61.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.3 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 54.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.1 53.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_background_17 pg_background_17-1.2-2PGDG.rhel8.aarch64.rpm pgdg 1.2 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_background_17-1.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-2.0.5-1PGDG.rhel9.9.x86_64.rpm pgdg 2.0.5 66.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_background_17-2.0.5-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 17 pg_background_17 pg_background_17-2.0.4-1PGSTY.el9.x86_64.rpm pigsty 2.0.4 106.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_background_17-2.0.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-2.0.5-1PGDG.rhel9.9.aarch64.rpm pgdg 2.0.5 65.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_background_17-2.0.5-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 17 pg_background_17 pg_background_17-2.0.4-1PGSTY.el9.aarch64.rpm pigsty 2.0.4 105.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_background_17-2.0.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-2.0.5-1PGDG.rhel10.3.x86_64.rpm pgdg 2.0.5 67.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_background_17-2.0.5-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 17 pg_background_17 pg_background_17-2.0.4-1PGSTY.el10.x86_64.rpm pigsty 2.0.4 106.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_background_17-2.0.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.5-1PGDG.rhel10.3.aarch64.rpm pgdg 2.0.5 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0.5-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.5 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.0.4 65.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.4-1PGSTY.el10.aarch64.rpm pigsty 2.0.4 105.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_background_17-2.0.4-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.4-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.4 65.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.3 63.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.2 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0.2 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0 61.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0 61.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-2.0-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0 61.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-2.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.9.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.9.3-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.9.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.9.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.2 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.9.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.9.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.2 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.9.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.1 53.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.1 53.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.8-1PGDG.rhel10.0.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.6-1PGDG.rhel10.0.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_background_17 pg_background_17-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_background_17-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb pigsty 2.0.5 97.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg12+3_amd64.deb pgdg 2.0.3 69.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg12+3_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg12+2_amd64.deb pgdg 2.0.3 69.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg12+2_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg12+1_amd64.deb pgdg 2.0.3 69.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb pigsty 2.0.5 96.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg12+3_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg12+3_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg12+2_arm64.deb pgdg 2.0.3 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg12+2_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg12+1_arm64.deb pgdg 2.0.3 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~trixie_amd64.deb pigsty 2.0.5 97.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg13+3_amd64.deb pgdg 2.0.3 69.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg13+3_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg13+2_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg13+2_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg13+1_amd64.deb pgdg 2.0.3 69.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~trixie_arm64.deb pigsty 2.0.5 96.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg13+3_arm64.deb pgdg 2.0.3 68.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg13+3_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg13+2_arm64.deb pgdg 2.0.3 68.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg13+2_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg13+1_arm64.deb pgdg 2.0.3 68.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~jammy_amd64.deb pigsty 2.0.5 112.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb pgdg 2.0.3 78.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb pgdg 2.0.3 78.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb pgdg 2.0.3 78.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~jammy_arm64.deb pigsty 2.0.5 110.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb pgdg 2.0.3 77.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb pgdg 2.0.3 76.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb pgdg 2.0.3 76.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~noble_amd64.deb pigsty 2.0.5 100.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb pgdg 2.0.3 70.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~noble_arm64.deb pigsty 2.0.5 99.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb pgdg 2.0.3 68.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~resolute_amd64.deb pigsty 2.0.5 99.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb pgdg 2.0.3 68.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb pgdg 2.0.3 69.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb pgdg 2.0.3 68.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.5-1PGSTY~resolute_arm64.deb pigsty 2.0.5 98.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-17-pg-background_2.0.5-1PGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb pgdg 2.0.3 67.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb pgdg 2.0.3 67.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-background postgresql-17-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb pgdg 2.0.3 67.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-17-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.5 68.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-2.0.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0.4-3PGDG.rhel8.10.x86_64.rpm pgdg 2.0.4 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-2.0.4-3PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0.4-1PGSTY.el8.x86_64.rpm pigsty 2.0.4 106.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_background_16-2.0.4-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.4 67.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-2.0.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.3 66.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-2.0.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 65.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.3 58.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 55.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.1 55.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 19.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_background_16-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.5 67.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-2.0.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0.4-3PGDG.rhel8.10.aarch64.rpm pgdg 2.0.4 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-2.0.4-3PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0.4-1PGSTY.el8.aarch64.rpm pigsty 2.0.4 104.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_background_16-2.0.4-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.4 65.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-2.0.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.3 64.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-2.0.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 63.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0 61.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.3 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 54.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.1 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_background_16 pg_background_16-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 19.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_background_16-1.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-2.0.5-1PGDG.rhel9.9.x86_64.rpm pgdg 2.0.5 66.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_background_16-2.0.5-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 16 pg_background_16 pg_background_16-2.0.4-1PGSTY.el9.x86_64.rpm pigsty 2.0.4 106.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_background_16-2.0.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-2.0.5-1PGDG.rhel9.9.aarch64.rpm pgdg 2.0.5 65.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_background_16-2.0.5-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 16 pg_background_16 pg_background_16-2.0.4-1PGSTY.el9.aarch64.rpm pigsty 2.0.4 105.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_background_16-2.0.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-2.0.5-1PGDG.rhel10.3.x86_64.rpm pgdg 2.0.5 67.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_background_16-2.0.5-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 16 pg_background_16 pg_background_16-2.0.4-1PGSTY.el10.x86_64.rpm pigsty 2.0.4 106.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_background_16-2.0.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.5-1PGDG.rhel10.3.aarch64.rpm pgdg 2.0.5 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0.5-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.5 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.0.4 65.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.4-1PGSTY.el10.aarch64.rpm pigsty 2.0.4 105.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_background_16-2.0.4-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.4-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.4 65.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.3 63.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.2 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0.2 63.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0 61.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0 61.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-2.0-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0 61.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-2.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.9.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.9.3-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.9.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.9.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.2 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.9.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.9.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.2 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.9.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.1 53.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.1 53.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.8-1PGDG.rhel10.0.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.6-1PGDG.rhel10.0.aarch64.rpm pgdg 1.6 40.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_background_16 pg_background_16-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_background_16-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb pigsty 2.0.5 97.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg12+3_amd64.deb pgdg 2.0.3 69.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg12+3_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg12+2_amd64.deb pgdg 2.0.3 69.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg12+2_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg12+1_amd64.deb pgdg 2.0.3 69.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb pigsty 2.0.5 96.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg12+3_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg12+3_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg12+2_arm64.deb pgdg 2.0.3 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg12+2_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg12+1_arm64.deb pgdg 2.0.3 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~trixie_amd64.deb pigsty 2.0.5 97.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg13+3_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg13+3_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg13+2_amd64.deb pgdg 2.0.3 69.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg13+2_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg13+1_amd64.deb pgdg 2.0.3 69.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~trixie_arm64.deb pigsty 2.0.5 96.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg13+3_arm64.deb pgdg 2.0.3 68.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg13+3_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg13+2_arm64.deb pgdg 2.0.3 68.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg13+2_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg13+1_arm64.deb pgdg 2.0.3 68.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~jammy_amd64.deb pigsty 2.0.5 112.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb pgdg 2.0.3 78.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb pgdg 2.0.3 78.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb pgdg 2.0.3 78.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~jammy_arm64.deb pigsty 2.0.5 110.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb pgdg 2.0.3 76.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb pgdg 2.0.3 76.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb pgdg 2.0.3 76.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~noble_amd64.deb pigsty 2.0.5 100.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb pgdg 2.0.3 69.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~noble_arm64.deb pigsty 2.0.5 99.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb pgdg 2.0.3 68.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb pgdg 2.0.3 68.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~resolute_amd64.deb pigsty 2.0.5 99.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb pgdg 2.0.3 69.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb pgdg 2.0.3 69.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb pgdg 2.0.3 69.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.5-1PGSTY~resolute_arm64.deb pigsty 2.0.5 98.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-16-pg-background_2.0.5-1PGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb pgdg 2.0.3 67.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb pgdg 2.0.3 67.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-background postgresql-16-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb pgdg 2.0.3 67.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-16-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0.5-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.5 68.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-2.0.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0.4-3PGDG.rhel8.10.x86_64.rpm pgdg 2.0.4 68.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-2.0.4-3PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0.4-1PGSTY.el8.x86_64.rpm pigsty 2.0.4 105.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_background_15-2.0.4-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0.4-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.4 67.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-2.0.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0.3-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.3 66.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-2.0.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0.2 65.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-2.0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel8.10.x86_64.rpm pgdg 2.0 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-2.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.3 58.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.9.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.9.2-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.2 55.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.9.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.9.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.9.1 55.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.9.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 41.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel8.x86_64.rpm pgdg 1.3 21.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel8.x86_64.rpm pgdg 1.2 19.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_background_15 pg_background_15-1.0-1.rhel8.x86_64.rpm pgdg 1.0 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_background_15-1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0.5-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.5 67.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-2.0.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0.4-3PGDG.rhel8.10.aarch64.rpm pgdg 2.0.4 66.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-2.0.4-3PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0.4-1PGSTY.el8.aarch64.rpm pigsty 2.0.4 104.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_background_15-2.0.4-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0.4-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.4 65.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-2.0.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0.3-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.3 64.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-2.0.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0.2 63.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-2.0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel8.10.aarch64.rpm pgdg 2.0 61.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-2.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.3 57.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.9.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.9.2-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.2 54.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.9.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.9.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.9.1 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.9.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8 45.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.3-1PGDG.rhel8.aarch64.rpm pgdg 1.3 21.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.2-1PGDG.rhel8.aarch64.rpm pgdg 1.2 19.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_background_15 pg_background_15-1.0-1.rhel8.aarch64.rpm pgdg 1.0 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_background_15-1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-2.0.5-1PGDG.rhel9.9.x86_64.rpm pgdg 2.0.5 67.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_background_15-2.0.5-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 15 pg_background_15 pg_background_15-2.0.4-1PGSTY.el9.x86_64.rpm pigsty 2.0.4 105.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_background_15-2.0.4-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-2.0.5-1PGDG.rhel9.9.aarch64.rpm pgdg 2.0.5 65.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_background_15-2.0.5-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 15 pg_background_15 pg_background_15-2.0.4-1PGSTY.el9.aarch64.rpm pigsty 2.0.4 105.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_background_15-2.0.4-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-2.0.5-1PGDG.rhel10.3.x86_64.rpm pgdg 2.0.5 67.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_background_15-2.0.5-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 15 pg_background_15 pg_background_15-2.0.4-1PGSTY.el10.x86_64.rpm pigsty 2.0.4 106.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_background_15-2.0.4-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.5-1PGDG.rhel10.3.aarch64.rpm pgdg 2.0.5 66.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0.5-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.5-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.5 66.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.4-3PGDG.rhel10.2.aarch64.rpm pgdg 2.0.4 65.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0.4-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.4-1PGSTY.el10.aarch64.rpm pigsty 2.0.4 105.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_background_15-2.0.4-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.4-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.4 65.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0.4-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.3-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.3 63.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0.2 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0.2 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0.2-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0.2 63.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel10.2.aarch64.rpm pgdg 2.0 61.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel10.1.aarch64.rpm pgdg 2.0 61.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-2.0-1PGDG.rhel10.0.aarch64.rpm pgdg 2.0 61.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-2.0-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel10.2.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.9.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.9.3-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.9.3-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.3 56.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.9.3-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.9.2-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.2 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.9.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.9.2-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.2 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.9.2-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.9.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.9.1 53.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.9.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.9.1-1PGDG.rhel10.0.aarch64.rpm pgdg 1.9.1 53.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.9.1-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.8-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.8-1PGDG.rhel10.0.aarch64.rpm pgdg 1.8 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.8-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel10.1.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.6-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.6-1PGDG.rhel10.0.aarch64.rpm pgdg 1.6 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.6-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_background_15 pg_background_15-1.3-3PGDG.rhel10.aarch64.rpm pgdg 1.3 22.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_background_15-1.3-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb pigsty 2.0.5 97.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg12+3_amd64.deb pgdg 2.0.3 70.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg12+3_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg12+2_amd64.deb pgdg 2.0.3 69.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg12+2_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg12+1_amd64.deb pgdg 2.0.3 69.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb pigsty 2.0.5 95.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg12+3_arm64.deb pgdg 2.0.3 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg12+3_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg12+2_arm64.deb pgdg 2.0.3 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg12+2_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg12+1_arm64.deb pgdg 2.0.3 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~trixie_amd64.deb pigsty 2.0.5 98.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg13+3_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg13+3_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg13+2_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg13+2_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg13+1_amd64.deb pgdg 2.0.3 70.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~trixie_arm64.deb pigsty 2.0.5 96.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg13+3_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg13+3_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg13+2_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg13+2_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg13+1_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~jammy_amd64.deb pigsty 2.0.5 112.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb pgdg 2.0.3 79.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg22.04+3_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb pgdg 2.0.3 78.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb pgdg 2.0.3 79.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~jammy_arm64.deb pigsty 2.0.5 110.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb pgdg 2.0.3 77.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg22.04+3_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb pgdg 2.0.3 76.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb pgdg 2.0.3 76.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~noble_amd64.deb pigsty 2.0.5 100.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb pgdg 2.0.3 69.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg24.04+3_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb pgdg 2.0.3 69.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb pgdg 2.0.3 69.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~noble_arm64.deb pigsty 2.0.5 99.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb pgdg 2.0.3 68.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg24.04+3_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb pgdg 2.0.3 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~resolute_amd64.deb pigsty 2.0.5 99.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb pgdg 2.0.3 69.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg26.04+3_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb pgdg 2.0.3 69.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb pgdg 2.0.3 69.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.5-1PGSTY~resolute_arm64.deb pigsty 2.0.5 99.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-background/postgresql-15-pg-background_2.0.5-1PGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb pgdg 2.0.3 67.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg26.04+3_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb pgdg 2.0.3 67.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-background postgresql-15-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb pgdg 2.0.3 67.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-background/postgresql-15-pg-background_2.0.3-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_background` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_background         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_background` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_background;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_background -v 19  # PG 19
pig ext install -y pg_background -v 18  # PG 18
pig ext install -y pg_background -v 17  # PG 17
pig ext install -y pg_background -v 16  # PG 16
pig ext install -y pg_background -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_background_19       # PG 19
dnf install -y pg_background_18       # PG 18
dnf install -y pg_background_17       # PG 17
dnf install -y pg_background_16       # PG 16
dnf install -y pg_background_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pg-background   # PG 19
apt install -y postgresql-18-pg-background   # PG 18
apt install -y postgresql-17-pg-background   # PG 17
apt install -y postgresql-16-pg-background   # PG 16
apt install -y postgresql-15-pg-background   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION pg_background;
```

## 用法

来源：

- [v2.0.5 README](https://github.com/vibhorkum/pg_background/blob/v2.0.5/README.md)
- [v2.0.5 release](https://github.com/vibhorkum/pg_background/releases/tag/v2.0.5)
- [v2.0.5 SQL API](https://github.com/vibhorkum/pg_background/blob/v2.0.5/extension/pg_background--2.0.sql)

`pg_background` 在 PostgreSQL 后台工作进程中执行 SQL。工作进程在服务器内部运行独立事务，适合异步维护、自主副作用、有边界的长时间任务，以及可跟踪进度的作业。

2.0 版本将不带后缀的 API 作为标准接口。旧的 `_v2` 名称在 2.x 系列中仍保留为已弃用别名，但新代码应使用 `pg_background_launch`、`pg_background_result`、`pg_background_run` 等名称。

### 一次性执行

当 SQL 只有副作用，而你只需要执行元数据时，使用 `pg_background_run`：

```sql
CREATE EXTENSION pg_background;

SELECT completed, has_error, sqlstate, error_message,
       row_count, command_tag, elapsed_ms, timed_out
FROM pg_background_run(
  'INSERT INTO audit_log(ts, who) VALUES (clock_timestamp(), current_user)',
  queue_size := 0,
  timeout_ms := 30000,
  label := 'audit-login'
);
```

### 启动并获取结果

当后台 SQL 返回行时，使用 launch/result 模式。在 psql 中，`\gset` 将句柄保存为后续命令可用的变量：

```sql
SELECT pid, cookie FROM pg_background_launch(
  'SELECT count(*) FROM large_table',
  queue_size := 65536,
  label := 'count-large-table'
) \gset bg_

SELECT * FROM pg_background_result(:bg_pid, :bg_cookie) AS (count bigint);
```

结果只能消费一次。请同时保存 `pid` 和 `cookie`；cookie 用来避免后续调用受到 PID 重用影响。

### 即发即忘

对于不需要消费结果行的副作用：

```sql
SELECT * FROM pg_background_submit(
  $$VACUUM (ANALYZE) public.events$$,
  queue_size := 65536,
  label := 'vacuum-events'
);
```

### 核心 API

- `pg_background_launch(sql, queue_size, label)` 启动工作进程，并返回 `pg_background_handle(pid, cookie)`。
- `pg_background_submit(sql, queue_size, label)` 启动即发即忘的工作，并返回一个句柄。
- `pg_background_result(pid, cookie)` 一次性消费结果行。
- `pg_background_result_info(pid, cookie)` 返回完成状态和行数元数据，但不消费结果行。
- `pg_background_error_info(pid, cookie)` 返回结构化 SQL 错误详情。
- `pg_background_wait(pid, cookie, timeout_ms DEFAULT 0)` 等待完成；`timeout_ms <= 0` 表示无限期阻塞。
- `pg_background_cancel(pid, cookie, grace_ms DEFAULT 0)` 请求协作式取消。
- `pg_background_detach(pid, cookie)` 停止跟踪工作进程，但允许它继续运行。
- `pg_background_outcome(pid, cookie)` 返回合并后的状态快照，即使状态缺失也不会抛错。
- `pg_background_list` 和 `pg_background_activity` 是监控视图；`pg_background_stats()` 返回会话计数器。

便捷辅助函数包括 `pg_background_run_query`、`pg_background_drain`、`pg_background_wait_any`、`pg_background_cancel_by_label` 和 `pg_background_purge`。

### 进度报告

在工作进程 SQL 内报告进度，再由启动方轮询：

```sql
SELECT pid, cookie FROM pg_background_launch($$
  SELECT pg_background_report_progress(0, 'starting');
  SELECT pg_sleep(1);
  SELECT pg_background_report_progress(100, 'done');
$$) \gset bg_

SELECT * FROM pg_background_get_progress(:bg_pid, :bg_cookie);
```

`pg_background_report_progress` 是 2.0 名称；更早的 `pg_background_progress` 名称已经硬重命名。

### GUC 与加载

`pg_background` 不要求配置 `shared_preload_libraries`。预加载是可选的，主要用于希望会话首次加载扩展前就能使用其 GUC 的场景。

```sql
SET pg_background.max_workers = 10;
SET pg_background.default_queue_size = '256KB';
SET pg_background.worker_timeout = '5min';
```

- `pg_background.max_workers` 默认值为 `16`。
- `pg_background.default_queue_size` 默认值为 `65536` 字节。
- `pg_background.worker_timeout` 默认值为 `0`，表示没有执行超时。

### 注意事项

- 上游发行版 2.0.5 保留 SQL/control 版本 2.0，面向 PostgreSQL 14-18 和 PostgreSQL 19 beta。
- 从 1.8 之前的安装升级时，必须先升级到 1.8/1.10 发布线，再更新到 2.0。
- 原始 v1 的仅 PID API 已移除。不带后缀的名称现在具备 cookie 保护语义，并返回/使用 `(pid, cookie)`。
- `pg_background_cancel_v2_grace` 和 `pg_background_wait_v2_timeout` 已合并进 `pg_background_cancel(..., grace_ms)` 和 `pg_background_wait(..., timeout_ms)`。
- `pg_background_status_v2` 已移除；请使用 `pg_background_outcome(pid, cookie)`。

### 2.0.4 更新与权限

2.0.4 修复同一工作进程内多条命令之间的数据可见性、复杂结果类型的传输和命令完成标签。`pg_background.worker_timeout` 非零时限制整个 SQL 字符串的执行时间（不含提交）；为零时由 `statement_timeout` 分别限制每条语句。安装新版库后启动新的工作进程才能使用修复。

安装需要超级用户。默认不向 PUBLIC 开放调用权限；由管理员授予 `pgbackground_role`，或使用 `pg_background_grant_privileges`。后台事务独立提交，调用者回滚不会撤销已经完成的后台操作。

### 2.0.5 启动句柄修复

2.0.5 修复了工作进程在启动检查前已结束、导致启动调用返回错误 PID 的竞态。新工作进程应使用更新后的库，并继续保存句柄的两个字段。SQL/control 仍为 2.0，此补丁没有新增 API 或 SQL 迁移。
