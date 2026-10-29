---
title: "pg_incremental"
linkTitle: "pg_incremental"
description: "增量处理流式事件"
weight: 2850
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrunchyData/pg_incremental">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrunchyData/pg_incremental</div>
    <div class="ext-card__desc">https://github.com/CrunchyData/pg_incremental</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_incremental-1.6.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_incremental-1.6.1.tar.gz</div>
    <div class="ext-card__desc">pg_incremental-1.6.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_incremental`**](/ext/e/pg_incremental) | `1.6` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2850  | [**`pg_incremental`**](/ext/e/pg_incremental) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`pg_ivm`](/ext/e/pg_ivm) [`pg_trickle`](/ext/e/pg_trickle) [`timescaledb`](/ext/e/timescaledb) [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_partman`](/ext/e/pg_partman) [`pg_ttl_index`](/ext/e/pg_ttl_index) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_lake`](/ext/e/pg_lake) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Package 1.6.1; SQL/control 1.6. Fixes _drop_trigger search_path injection. Sequence pipelines require SELECT or USAGE at creation and execution; file-list functions run as the pipeline executor. pg_cron is optional except for scheduled pipelines.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6` | {{< pgvers "18,17,16" >}} | `pg_incremental` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6.1` | {{< pgvers "18,17,16" >}} | `pg_incremental_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.6.1` | {{< pgvers "18,17,16" >}} | `postgresql-$v-pg-incremental` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.6.1 4 | AVAIL PGDG 1.6.1 4 | AVAIL PGDG 1.6.1 4 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PGDG 1.6.1 4 | AVAIL PGDG 1.6.1 4 | AVAIL PGDG 1.6.1 4 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PGDG 1.6.1 5 | AVAIL PGDG 1.6.1 5 | AVAIL PGDG 1.6.1 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PGDG 1.6.1 5 | AVAIL PGDG 1.6.1 5 | AVAIL PGDG 1.6.1 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PGDG 1.6.1 5 | AVAIL PGDG 1.6.1 5 | AVAIL PGDG 1.6.1 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PGDG 1.6.1 5 | AVAIL PGDG 1.6.1 5 | AVAIL PGDG 1.6.1 5 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | AVAIL PIGSTY 1.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_incremental_18 pg_incremental_18-1.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6.1 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_incremental_18-1.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el8.x86_64.rpm pigsty 1.5.0 33.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_incremental_18-1.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.0 33.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_incremental_18-1.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 26.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_incremental_18-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_incremental_18 pg_incremental_18-1.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6.1 37.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_incremental_18-1.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el8.aarch64.rpm pigsty 1.5.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_incremental_18-1.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.0 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_incremental_18-1.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_incremental_18-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_incremental_18 pg_incremental_18-1.6.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6.1 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_incremental_18-1.6.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el9.x86_64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_incremental_18-1.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.0 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_incremental_18-1.5.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.0.0 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_incremental_18-1.0.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_incremental_18-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_incremental_18 pg_incremental_18-1.6.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6.1 37.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_incremental_18-1.6.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el9.aarch64.rpm pigsty 1.5.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_incremental_18-1.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.0 32.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_incremental_18-1.5.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.0.0 25.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_incremental_18-1.0.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 25.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_incremental_18-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_incremental_18 pg_incremental_18-1.6.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6.1 38.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_incremental_18-1.6.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el10.x86_64.rpm pigsty 1.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_incremental_18-1.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.0 33.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_incremental_18-1.5.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.0.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_incremental_18-1.0.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_incremental_18-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_incremental_18 pg_incremental_18-1.6.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6.1 37.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_incremental_18-1.6.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PIGSTY.el10.aarch64.rpm pigsty 1.5.0 31.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_incremental_18-1.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_incremental_18 pg_incremental_18-1.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.5.0 32.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_incremental_18-1.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.0.0 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_incremental_18-1.0.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_incremental_18 pg_incremental_18-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_incremental_18-1.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~bookworm_amd64.deb pigsty 1.6.1 70.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~bookworm_arm64.deb pigsty 1.6.1 69.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~trixie_amd64.deb pigsty 1.6.1 70.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~trixie_arm64.deb pigsty 1.6.1 69.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~jammy_amd64.deb pigsty 1.6.1 71.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~jammy_arm64.deb pigsty 1.6.1 70.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~noble_amd64.deb pigsty 1.6.1 70.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~noble_arm64.deb pigsty 1.6.1 69.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~resolute_amd64.deb pigsty 1.6.1 69.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-incremental postgresql-18-pg-incremental_1.6.1-1PGSTY~resolute_arm64.deb pigsty 1.6.1 69.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-incremental/postgresql-18-pg-incremental_1.6.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_incremental_17 pg_incremental_17-1.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6.1 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_incremental_17-1.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el8.x86_64.rpm pigsty 1.5.0 33.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_incremental_17-1.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.0 33.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_incremental_17-1.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 26.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_incremental_17-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_incremental_17 pg_incremental_17-1.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6.1 37.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_incremental_17-1.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el8.aarch64.rpm pigsty 1.5.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_incremental_17-1.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.0 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_incremental_17-1.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_incremental_17-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_incremental_17 pg_incremental_17-1.6.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6.1 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_incremental_17-1.6.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el9.x86_64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_incremental_17-1.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.0 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_incremental_17-1.5.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.0.0 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_incremental_17-1.0.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_incremental_17-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_incremental_17 pg_incremental_17-1.6.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6.1 37.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_incremental_17-1.6.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el9.aarch64.rpm pigsty 1.5.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_incremental_17-1.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.0 32.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_incremental_17-1.5.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.0.0 25.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_incremental_17-1.0.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 25.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_incremental_17-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_incremental_17 pg_incremental_17-1.6.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6.1 38.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_incremental_17-1.6.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el10.x86_64.rpm pigsty 1.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_incremental_17-1.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.0 33.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_incremental_17-1.5.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.0.0 26.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_incremental_17-1.0.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_incremental_17-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_incremental_17 pg_incremental_17-1.6.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6.1 37.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_incremental_17-1.6.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PIGSTY.el10.aarch64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_incremental_17-1.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_incremental_17 pg_incremental_17-1.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.5.0 32.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_incremental_17-1.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.0.0 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_incremental_17-1.0.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_incremental_17 pg_incremental_17-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_incremental_17-1.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~bookworm_amd64.deb pigsty 1.6.1 70.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~bookworm_arm64.deb pigsty 1.6.1 69.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~trixie_amd64.deb pigsty 1.6.1 70.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~trixie_arm64.deb pigsty 1.6.1 69.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~jammy_amd64.deb pigsty 1.6.1 78.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~jammy_arm64.deb pigsty 1.6.1 77.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~noble_amd64.deb pigsty 1.6.1 70.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~noble_arm64.deb pigsty 1.6.1 69.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~resolute_amd64.deb pigsty 1.6.1 69.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-incremental postgresql-17-pg-incremental_1.6.1-1PGSTY~resolute_arm64.deb pigsty 1.6.1 69.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-incremental/postgresql-17-pg-incremental_1.6.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_incremental_16 pg_incremental_16-1.6.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6.1 38.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_incremental_16-1.6.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el8.x86_64.rpm pigsty 1.5.0 33.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_incremental_16-1.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.5.0 33.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_incremental_16-1.5.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel8.x86_64.rpm pgdg 1.0.0 26.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_incremental_16-1.0.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_incremental_16 pg_incremental_16-1.6.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6.1 37.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_incremental_16-1.6.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el8.aarch64.rpm pigsty 1.5.0 33.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_incremental_16-1.5.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.5.0 32.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_incremental_16-1.5.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel8.aarch64.rpm pgdg 1.0.0 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_incremental_16-1.0.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_incremental_16 pg_incremental_16-1.6.1-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6.1 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_incremental_16-1.6.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el9.x86_64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_incremental_16-1.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PGDG.rhel9.8.x86_64.rpm pgdg 1.5.0 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_incremental_16-1.5.0-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-3PGDG.rhel9.8.x86_64.rpm pgdg 1.0.0 26.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_incremental_16-1.0.0-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel9.x86_64.rpm pgdg 1.0.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_incremental_16-1.0.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_incremental_16 pg_incremental_16-1.6.1-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6.1 37.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_incremental_16-1.6.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el9.aarch64.rpm pigsty 1.5.0 31.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_incremental_16-1.5.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PGDG.rhel9.8.aarch64.rpm pgdg 1.5.0 32.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_incremental_16-1.5.0-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-3PGDG.rhel9.8.aarch64.rpm pgdg 1.0.0 25.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_incremental_16-1.0.0-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel9.aarch64.rpm pgdg 1.0.0 25.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_incremental_16-1.0.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_incremental_16 pg_incremental_16-1.6.1-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6.1 38.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_incremental_16-1.6.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el10.x86_64.rpm pigsty 1.5.0 32.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_incremental_16-1.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PGDG.rhel10.2.x86_64.rpm pgdg 1.5.0 33.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_incremental_16-1.5.0-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-3PGDG.rhel10.2.x86_64.rpm pgdg 1.0.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_incremental_16-1.0.0-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel10.x86_64.rpm pgdg 1.0.0 26.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_incremental_16-1.0.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_incremental_16 pg_incremental_16-1.6.1-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6.1 37.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_incremental_16-1.6.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PIGSTY.el10.aarch64.rpm pigsty 1.5.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_incremental_16-1.5.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_incremental_16 pg_incremental_16-1.5.0-1PGDG.rhel10.2.aarch64.rpm pgdg 1.5.0 32.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_incremental_16-1.5.0-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-3PGDG.rhel10.2.aarch64.rpm pgdg 1.0.0 26.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_incremental_16-1.0.0-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_incremental_16 pg_incremental_16-1.0.0-1PGDG.rhel10.aarch64.rpm pgdg 1.0.0 26.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_incremental_16-1.0.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~bookworm_amd64.deb pigsty 1.6.1 70.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~bookworm_arm64.deb pigsty 1.6.1 69.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~trixie_amd64.deb pigsty 1.6.1 70.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~trixie_arm64.deb pigsty 1.6.1 69.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~jammy_amd64.deb pigsty 1.6.1 78.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~jammy_arm64.deb pigsty 1.6.1 77.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~noble_amd64.deb pigsty 1.6.1 70.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~noble_arm64.deb pigsty 1.6.1 70.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~resolute_amd64.deb pigsty 1.6.1 69.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-incremental postgresql-16-pg-incremental_1.6.1-1PGSTY~resolute_arm64.deb pigsty 1.6.1 69.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-incremental/postgresql-16-pg-incremental_1.6.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_incremental` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_incremental         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_incremental` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_incremental;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_incremental -v 18  # PG 18
pig ext install -y pg_incremental -v 17  # PG 17
pig ext install -y pg_incremental -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_incremental_18       # PG 18
dnf install -y pg_incremental_17       # PG 17
dnf install -y pg_incremental_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-incremental   # PG 18
apt install -y postgresql-17-pg-incremental   # PG 17
apt install -y postgresql-16-pg-incremental   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION pg_incremental;
```

## 用法

来源：

- [官方 README](https://github.com/CrunchyData/pg_incremental/blob/v1.6.1/README.md)
- [v1.6.1 发行版](https://github.com/CrunchyData/pg_incremental/releases/tag/v1.6.1)
- [控制文件](https://github.com/CrunchyData/pg_incremental/blob/v1.6.1/pg_incremental.control)

`pg_incremental` 为只追加表和文件数据源定义恰好一次语义的增量流水线。它依赖 `pg_cron`，上游核验矩阵覆盖 PostgreSQL 17–18，支持序列、时间区间和文件列表三类流水线。

### 安装与调度

```sql
CREATE EXTENSION pg_incremental CASCADE;
GRANT USAGE ON SCHEMA cron TO app_user;
```

流水线默认创建时立即执行，随后由 `pg_cron` 调度；需要推迟首次运行时设置 `execute_immediately := false`。进度更新与流水线命令在同一事务中提交，命令失败不会推进已处理范围。

### 流水线类型

```sql
SELECT incremental.create_sequence_pipeline('event-aggregation', 'events', $$
  INSERT INTO events_agg
  SELECT date_trunc('day', event_time), count(*)
  FROM events
  WHERE event_id BETWEEN $1 AND $2
  GROUP BY 1
  ON CONFLICT (day) DO UPDATE
  SET event_count = events_agg.event_count + excluded.event_count
$$);

SELECT incremental.create_time_interval_pipeline('hourly-export', '1 hour', $$
  SELECT export_events($1, $2)
$$);

SELECT incremental.create_file_list_pipeline('event-import', 's3://bucket/events/*.csv', $$
  SELECT import_events($1)
$$);
```

序列流水线传入安全的 `$1`/`$2` 范围，时间流水线传入区间边界，文件列表流水线传入新发现的文件。`max_batch_size`、`max_batches_per_run` 和 `batched := false` 可调整批次行为。`incremental.execute_pipeline`、`reset_pipeline`、`drop_pipeline` 以及状态视图用于运维控制。

### 1.6.1 安全修复

1.6.1 修复 `_drop_trigger` 的 `search_path` 注入问题，要求创建和执行序列流水线的角色拥有序列 `SELECT` 或 `USAGE` 权限，并让文件列表函数以调用者身份执行。升级前应复核对象所有权和授权；本地包事实与该上游发行版分开维护。
