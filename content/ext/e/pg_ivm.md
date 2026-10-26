---
title: "pg_ivm"
linkTitle: "pg_ivm"
description: "增量维护的物化视图"
weight: 2840
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/sraoss/pg_ivm">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">sraoss/pg_ivm</div>
    <div class="ext-card__desc">https://github.com/sraoss/pg_ivm</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_ivm-1.17.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_ivm-1.17.tar.gz</div>
    <div class="ext-card__desc">pg_ivm-1.17.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_ivm`**](/ext/e/pg_ivm) | `1.17` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2840  | [**`pg_ivm`**](/ext/e/pg_ivm) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`pg_incremental`](/ext/e/pg_incremental) [`pg_trickle`](/ext/e/pg_trickle) [`timescaledb`](/ext/e/timescaledb) [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_partman`](/ext/e/pg_partman) [`pg_ttl_index`](/ext/e/pg_ttl_index) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_lake`](/ext/e/pg_lake) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Preload in every writing session; restore_immv(replace=true) needs superuser.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.17` | {{< pgvers "18,17,16,15,14" >}} | `pg_ivm` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.17` | {{< pgvers "18,17,16,15,14" >}} | `pg_ivm_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.17` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-ivm` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.17 7 | AVAIL PIGSTY 1.17 9 | AVAIL PIGSTY 1.17 10 | AVAIL PIGSTY 1.17 15 | AVAIL PIGSTY 1.17 19 |
| el8.aarch64 | AVAIL PIGSTY 1.17 7 | AVAIL PIGSTY 1.17 9 | AVAIL PIGSTY 1.17 10 | AVAIL PIGSTY 1.17 15 | AVAIL PIGSTY 1.17 15 |
| el9.x86_64 | AVAIL PIGSTY 1.17 9 | AVAIL PIGSTY 1.17 11 | AVAIL PIGSTY 1.17 12 | AVAIL PIGSTY 1.17 17 | AVAIL PIGSTY 1.17 20 |
| el9.aarch64 | AVAIL PIGSTY 1.17 9 | AVAIL PIGSTY 1.17 11 | AVAIL PIGSTY 1.17 12 | AVAIL PIGSTY 1.17 17 | AVAIL PIGSTY 1.17 17 |
| el10.x86_64 | AVAIL PIGSTY 1.17 9 | AVAIL PIGSTY 1.17 10 | AVAIL PIGSTY 1.17 10 | AVAIL PIGSTY 1.17 10 | AVAIL PIGSTY 1.17 10 |
| el10.aarch64 | AVAIL PIGSTY 1.17 9 | AVAIL PIGSTY 1.17 10 | AVAIL PIGSTY 1.17 10 | AVAIL PIGSTY 1.17 10 | AVAIL PIGSTY 1.17 10 |
| d12.x86_64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
| d12.aarch64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
| d13.x86_64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
| d13.aarch64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
| u22.x86_64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
| u22.aarch64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
| u24.x86_64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
| u24.aarch64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
| u26.x86_64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
| u26.aarch64 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 | AVAIL PIGSTY 1.17 4 |
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.17-1PGSTY.el8.x86_64.rpm pigsty 1.17 138.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_18-1.17-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.17-1PGDG.rhel8.10.x86_64.rpm pgdg 1.17 54.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_ivm_18-1.17-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.16-1PGDG.rhel8.10.x86_64.rpm pgdg 1.16 53.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_ivm_18-1.16-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.15-1PGDG.rhel8.10.x86_64.rpm pgdg 1.15 52.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_ivm_18-1.15-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 50.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_ivm_18-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 49.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_ivm_18-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel8.x86_64.rpm pgdg 1.12 43.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_ivm_18-1.12-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.17-1PGSTY.el8.aarch64.rpm pigsty 1.17 135.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_18-1.17-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.17-1PGDG.rhel8.10.aarch64.rpm pgdg 1.17 51.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_ivm_18-1.17-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.16-1PGDG.rhel8.10.aarch64.rpm pgdg 1.16 51.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_ivm_18-1.16-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.15-1PGDG.rhel8.10.aarch64.rpm pgdg 1.15 50.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_ivm_18-1.15-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 48.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_ivm_18-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 47.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_ivm_18-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel8.aarch64.rpm pgdg 1.12 41.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_ivm_18-1.12-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.17-1PGSTY.el9.x86_64.rpm pigsty 1.17 140.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_18-1.17-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.17-1PGDG.rhel9.8.x86_64.rpm pgdg 1.17 53.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.17-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.16-1PGDG.rhel9.8.x86_64.rpm pgdg 1.16 53.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.16-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.15-1PGDG.rhel9.8.x86_64.rpm pgdg 1.15 52.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.15-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel9.8.x86_64.rpm pgdg 1.14 49.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.14-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel9.6.x86_64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.14-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 49.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel9.x86_64.rpm pgdg 1.12 43.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_ivm_18-1.12-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.17-1PGSTY.el9.aarch64.rpm pigsty 1.17 139.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_18-1.17-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.17-1PGDG.rhel9.8.aarch64.rpm pgdg 1.17 52.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.17-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.16-1PGDG.rhel9.8.aarch64.rpm pgdg 1.16 51.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.16-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.15-1PGDG.rhel9.8.aarch64.rpm pgdg 1.15 50.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.15-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel9.8.aarch64.rpm pgdg 1.14 48.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.14-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 48.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel9.6.aarch64.rpm pgdg 1.14 48.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.14-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 48.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel9.aarch64.rpm pgdg 1.12 42.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_ivm_18-1.12-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.17-1PGSTY.el10.x86_64.rpm pigsty 1.17 142.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_18-1.17-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.17-1PGDG.rhel10.2.x86_64.rpm pgdg 1.17 54.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.17-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.16-1PGDG.rhel10.2.x86_64.rpm pgdg 1.16 54.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.16-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.15-1PGDG.rhel10.2.x86_64.rpm pgdg 1.15 53.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.15-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel10.2.x86_64.rpm pgdg 1.14 50.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.14-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 50.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel10.0.x86_64.rpm pgdg 1.14 51.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.14-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 50.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel10.x86_64.rpm pgdg 1.12 44.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_ivm_18-1.12-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.17-1PGSTY.el10.aarch64.rpm pigsty 1.17 140.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_18-1.17-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.17-1PGDG.rhel10.2.aarch64.rpm pgdg 1.17 53.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.17-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.16-1PGDG.rhel10.2.aarch64.rpm pgdg 1.16 53.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.16-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.15-1PGDG.rhel10.2.aarch64.rpm pgdg 1.15 52.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.15-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel10.2.aarch64.rpm pgdg 1.14 49.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.14-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 49.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.14-1PGDG.rhel10.0.aarch64.rpm pgdg 1.14 49.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.14-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pg_ivm_18 pg_ivm_18-1.12-1PGDG.rhel10.aarch64.rpm pgdg 1.12 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_ivm_18-1.12-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb pigsty 1.17 126.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg12+1_amd64.deb pgdg 1.15 124.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg12+1_amd64.deb pgdg 1.15 124.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 118.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb pigsty 1.17 122.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg12+1_arm64.deb pgdg 1.15 120.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg12+1_arm64.deb pgdg 1.15 121.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 115.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~trixie_amd64.deb pigsty 1.17 126.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg13+1_amd64.deb pgdg 1.15 124.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg13+1_amd64.deb pgdg 1.15 124.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 118.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~trixie_arm64.deb pigsty 1.17 122.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg13+1_arm64.deb pgdg 1.15 120.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg13+1_arm64.deb pgdg 1.15 120.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 114.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~jammy_amd64.deb pigsty 1.17 138.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~jammy_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb pgdg 1.15 127.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb pgdg 1.15 127.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 121.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~jammy_arm64.deb pigsty 1.17 135.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~jammy_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb pgdg 1.15 123.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb pgdg 1.15 124.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 117.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~noble_amd64.deb pigsty 1.17 131.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb pgdg 1.15 124.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb pgdg 1.15 124.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 118.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~noble_arm64.deb pigsty 1.17 130.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb pgdg 1.15 120.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb pgdg 1.15 120.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 114.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~resolute_amd64.deb pigsty 1.17 130.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~resolute_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb pgdg 1.15 122.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb pgdg 1.15 123.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb pgdg 1.13 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.17-1PGSTY~resolute_arm64.deb pigsty 1.17 128.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.17-1PGSTY~resolute_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb pgdg 1.15 119.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb pgdg 1.15 119.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-ivm postgresql-18-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb pgdg 1.13 113.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-18-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.17-1PGSTY.el8.x86_64.rpm pigsty 1.17 137.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_17-1.17-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.17-1PGDG.rhel8.10.x86_64.rpm pgdg 1.17 54.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.17-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.16-1PGDG.rhel8.10.x86_64.rpm pgdg 1.16 53.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.16-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.15-1PGDG.rhel8.10.x86_64.rpm pgdg 1.15 52.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.15-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 50.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 49.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel8.x86_64.rpm pgdg 1.11 42.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel8.x86_64.rpm pgdg 1.10 42.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_ivm_17 pg_ivm_17-1.9-1PGDG.rhel8.x86_64.rpm pgdg 1.9 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_ivm_17-1.9-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.17-1PGSTY.el8.aarch64.rpm pigsty 1.17 134.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_17-1.17-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.17-1PGDG.rhel8.10.aarch64.rpm pgdg 1.17 51.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.17-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.16-1PGDG.rhel8.10.aarch64.rpm pgdg 1.16 51.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.16-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.15-1PGDG.rhel8.10.aarch64.rpm pgdg 1.15 50.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.15-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 48.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 47.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel8.aarch64.rpm pgdg 1.11 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel8.aarch64.rpm pgdg 1.10 40.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_ivm_17 pg_ivm_17-1.9-1PGDG.rhel8.aarch64.rpm pgdg 1.9 38.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_ivm_17-1.9-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.17-1PGSTY.el9.x86_64.rpm pigsty 1.17 140.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_17-1.17-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.17-1PGDG.rhel9.8.x86_64.rpm pgdg 1.17 53.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.17-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.16-1PGDG.rhel9.8.x86_64.rpm pgdg 1.16 53.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.16-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.15-1PGDG.rhel9.8.x86_64.rpm pgdg 1.15 52.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.15-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel9.8.x86_64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.14-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel9.6.x86_64.rpm pgdg 1.14 49.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.14-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 49.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel9.x86_64.rpm pgdg 1.11 43.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel9.x86_64.rpm pgdg 1.10 42.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_ivm_17 pg_ivm_17-1.9-1PGDG.rhel9.x86_64.rpm pgdg 1.9 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_ivm_17-1.9-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.17-1PGSTY.el9.aarch64.rpm pigsty 1.17 138.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_17-1.17-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.17-1PGDG.rhel9.8.aarch64.rpm pgdg 1.17 52.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.17-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.16-1PGDG.rhel9.8.aarch64.rpm pgdg 1.16 51.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.16-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.15-1PGDG.rhel9.8.aarch64.rpm pgdg 1.15 50.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.15-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel9.8.aarch64.rpm pgdg 1.14 48.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.14-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 48.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel9.6.aarch64.rpm pgdg 1.14 48.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.14-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 48.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel9.aarch64.rpm pgdg 1.11 41.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel9.aarch64.rpm pgdg 1.10 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_ivm_17 pg_ivm_17-1.9-1PGDG.rhel9.aarch64.rpm pgdg 1.9 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_ivm_17-1.9-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.17-1PGSTY.el10.x86_64.rpm pigsty 1.17 141.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_17-1.17-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.17-1PGDG.rhel10.2.x86_64.rpm pgdg 1.17 54.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.17-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.16-1PGDG.rhel10.2.x86_64.rpm pgdg 1.16 54.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.16-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.15-1PGDG.rhel10.2.x86_64.rpm pgdg 1.15 53.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.15-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel10.2.x86_64.rpm pgdg 1.14 50.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.14-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 50.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel10.0.x86_64.rpm pgdg 1.14 51.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.14-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 50.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel10.x86_64.rpm pgdg 1.11 44.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.11-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel10.x86_64.rpm pgdg 1.10 43.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_ivm_17-1.10-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.17-1PGSTY.el10.aarch64.rpm pigsty 1.17 140.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_17-1.17-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.17-1PGDG.rhel10.2.aarch64.rpm pgdg 1.17 54.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.17-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.16-1PGDG.rhel10.2.aarch64.rpm pgdg 1.16 53.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.16-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.15-1PGDG.rhel10.2.aarch64.rpm pgdg 1.15 52.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.15-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel10.2.aarch64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.14-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.14-1PGDG.rhel10.0.aarch64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.14-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 49.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.11-1PGDG.rhel10.aarch64.rpm pgdg 1.11 42.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.11-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_ivm_17 pg_ivm_17-1.10-1PGDG.rhel10.aarch64.rpm pgdg 1.10 42.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_ivm_17-1.10-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb pigsty 1.17 125.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg12+1_amd64.deb pgdg 1.15 123.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg12+1_amd64.deb pgdg 1.15 124.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 118.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb pigsty 1.17 122.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg12+1_arm64.deb pgdg 1.15 120.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg12+1_arm64.deb pgdg 1.15 120.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 115.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~trixie_amd64.deb pigsty 1.17 126.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg13+1_amd64.deb pgdg 1.15 123.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg13+1_amd64.deb pgdg 1.15 124.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 118.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~trixie_arm64.deb pigsty 1.17 121.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg13+1_arm64.deb pgdg 1.15 120.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg13+1_arm64.deb pgdg 1.15 120.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 114.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~jammy_amd64.deb pigsty 1.17 158.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~jammy_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb pgdg 1.15 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb pgdg 1.15 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 141.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~jammy_arm64.deb pigsty 1.17 156.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~jammy_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb pgdg 1.15 143.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb pgdg 1.15 144.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 137.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~noble_amd64.deb pigsty 1.17 131.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb pgdg 1.15 124.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb pgdg 1.15 124.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 118.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~noble_arm64.deb pigsty 1.17 130.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb pgdg 1.15 120.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb pgdg 1.15 120.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 114.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~resolute_amd64.deb pigsty 1.17 129.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~resolute_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb pgdg 1.15 122.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb pgdg 1.15 123.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb pgdg 1.13 116.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.17-1PGSTY~resolute_arm64.deb pigsty 1.17 127.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.17-1PGSTY~resolute_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb pgdg 1.15 118.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb pgdg 1.15 119.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-ivm postgresql-17-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb pgdg 1.13 113.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-17-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.17-1PGSTY.el8.x86_64.rpm pigsty 1.17 138.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_16-1.17-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.17-1PGDG.rhel8.10.x86_64.rpm pgdg 1.17 54.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.17-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.16-1PGDG.rhel8.10.x86_64.rpm pgdg 1.16 53.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.16-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.15-1PGDG.rhel8.10.x86_64.rpm pgdg 1.15 52.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.15-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 50.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 49.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel8.x86_64.rpm pgdg 1.11 43.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel8.x86_64.rpm pgdg 1.10 42.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_ivm_16 pg_ivm_16-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 41.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_ivm_16-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.17-1PGSTY.el8.aarch64.rpm pigsty 1.17 134.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_16-1.17-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.17-1PGDG.rhel8.10.aarch64.rpm pgdg 1.17 51.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.17-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.16-1PGDG.rhel8.10.aarch64.rpm pgdg 1.16 51.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.16-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.15-1PGDG.rhel8.10.aarch64.rpm pgdg 1.15 50.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.15-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 48.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 47.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel8.aarch64.rpm pgdg 1.11 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel8.aarch64.rpm pgdg 1.10 40.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 37.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_ivm_16 pg_ivm_16-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_ivm_16-1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.17-1PGSTY.el9.x86_64.rpm pigsty 1.17 140.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_16-1.17-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.17-1PGDG.rhel9.8.x86_64.rpm pgdg 1.17 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.17-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.16-1PGDG.rhel9.8.x86_64.rpm pgdg 1.16 53.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.16-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.15-1PGDG.rhel9.8.x86_64.rpm pgdg 1.15 52.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.15-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel9.8.x86_64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.14-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel9.6.x86_64.rpm pgdg 1.14 49.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.14-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 49.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel9.x86_64.rpm pgdg 1.11 43.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel9.x86_64.rpm pgdg 1.10 43.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 40.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_ivm_16 pg_ivm_16-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 42.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_ivm_16-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.17-1PGSTY.el9.aarch64.rpm pigsty 1.17 139.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_16-1.17-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.17-1PGDG.rhel9.8.aarch64.rpm pgdg 1.17 52.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.17-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.16-1PGDG.rhel9.8.aarch64.rpm pgdg 1.16 51.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.16-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.15-1PGDG.rhel9.8.aarch64.rpm pgdg 1.15 50.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.15-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel9.8.aarch64.rpm pgdg 1.14 48.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.14-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 48.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel9.6.aarch64.rpm pgdg 1.14 48.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.14-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 48.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel9.aarch64.rpm pgdg 1.11 42.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel9.aarch64.rpm pgdg 1.10 41.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 39.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_ivm_16 pg_ivm_16-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 41.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_ivm_16-1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.17-1PGSTY.el10.x86_64.rpm pigsty 1.17 141.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_16-1.17-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.17-1PGDG.rhel10.2.x86_64.rpm pgdg 1.17 55.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.17-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.16-1PGDG.rhel10.2.x86_64.rpm pgdg 1.16 54.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.16-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.15-1PGDG.rhel10.2.x86_64.rpm pgdg 1.15 53.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.15-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel10.2.x86_64.rpm pgdg 1.14 50.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.14-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 50.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel10.0.x86_64.rpm pgdg 1.14 51.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.14-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 50.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel10.x86_64.rpm pgdg 1.11 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.11-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel10.x86_64.rpm pgdg 1.10 43.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_ivm_16-1.10-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.17-1PGSTY.el10.aarch64.rpm pigsty 1.17 140.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_16-1.17-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.17-1PGDG.rhel10.2.aarch64.rpm pgdg 1.17 54.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.17-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.16-1PGDG.rhel10.2.aarch64.rpm pgdg 1.16 53.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.16-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.15-1PGDG.rhel10.2.aarch64.rpm pgdg 1.15 52.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.15-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel10.2.aarch64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.14-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.14-1PGDG.rhel10.0.aarch64.rpm pgdg 1.14 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.14-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 49.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.11-1PGDG.rhel10.aarch64.rpm pgdg 1.11 42.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.11-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_ivm_16 pg_ivm_16-1.10-1PGDG.rhel10.aarch64.rpm pgdg 1.10 42.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_ivm_16-1.10-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb pigsty 1.17 125.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg12+1_amd64.deb pgdg 1.15 124.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg12+1_amd64.deb pgdg 1.15 124.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 118.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb pigsty 1.17 122.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg12+1_arm64.deb pgdg 1.15 120.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg12+1_arm64.deb pgdg 1.15 121.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 115.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~trixie_amd64.deb pigsty 1.17 125.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg13+1_amd64.deb pgdg 1.15 123.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg13+1_amd64.deb pgdg 1.15 124.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 118.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~trixie_arm64.deb pigsty 1.17 122.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg13+1_arm64.deb pgdg 1.15 120.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg13+1_arm64.deb pgdg 1.15 120.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 114.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~jammy_amd64.deb pigsty 1.17 157.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~jammy_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb pgdg 1.15 146.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb pgdg 1.15 147.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 140.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~jammy_arm64.deb pigsty 1.17 155.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~jammy_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb pgdg 1.15 142.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb pgdg 1.15 143.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 136.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~noble_amd64.deb pigsty 1.17 131.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb pgdg 1.15 124.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb pgdg 1.15 124.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 118.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~noble_arm64.deb pigsty 1.17 133.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb pgdg 1.15 120.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb pgdg 1.15 120.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 114.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~resolute_amd64.deb pigsty 1.17 130.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~resolute_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb pgdg 1.15 122.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb pgdg 1.15 123.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb pgdg 1.13 117.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.17-1PGSTY~resolute_arm64.deb pigsty 1.17 127.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.17-1PGSTY~resolute_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb pgdg 1.15 118.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb pgdg 1.15 119.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-ivm postgresql-16-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb pgdg 1.13 113.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-16-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.17-1PGSTY.el8.x86_64.rpm pigsty 1.17 137.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_15-1.17-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.17-1PGDG.rhel8.10.x86_64.rpm pgdg 1.17 54.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.17-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.16-1PGDG.rhel8.10.x86_64.rpm pgdg 1.16 53.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.16-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.15-1PGDG.rhel8.10.x86_64.rpm pgdg 1.15 52.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.15-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 50.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 49.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel8.x86_64.rpm pgdg 1.11 43.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel8.x86_64.rpm pgdg 1.10 43.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 41.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.6 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.5.1-1.rhel8.x86_64.rpm pgdg 1.5.1 39.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.5.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.5-1.rhel8.x86_64.rpm pgdg 1.5 39.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.4-1.rhel8.x86_64.rpm pgdg 1.4 38.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_ivm_15 pg_ivm_15-1.3-1.rhel8.x86_64.rpm pgdg 1.3 37.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_ivm_15-1.3-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.17-1PGSTY.el8.aarch64.rpm pigsty 1.17 134.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_15-1.17-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.17-1PGDG.rhel8.10.aarch64.rpm pgdg 1.17 52.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.17-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.16-1PGDG.rhel8.10.aarch64.rpm pgdg 1.16 51.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.16-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.15-1PGDG.rhel8.10.aarch64.rpm pgdg 1.15 50.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.15-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 48.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 47.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel8.aarch64.rpm pgdg 1.11 41.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel8.aarch64.rpm pgdg 1.10 40.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 38.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 40.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.6 39.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.5.1-1.rhel8.aarch64.rpm pgdg 1.5.1 37.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.5.1-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.5-1.rhel8.aarch64.rpm pgdg 1.5 37.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.4-1.rhel8.aarch64.rpm pgdg 1.4 36.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_ivm_15 pg_ivm_15-1.3-1.rhel8.aarch64.rpm pgdg 1.3 36.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_ivm_15-1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.17-1PGSTY.el9.x86_64.rpm pigsty 1.17 140.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_15-1.17-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.17-1PGDG.rhel9.8.x86_64.rpm pgdg 1.17 54.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.17-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.16-1PGDG.rhel9.8.x86_64.rpm pgdg 1.16 53.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.16-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.15-1PGDG.rhel9.8.x86_64.rpm pgdg 1.15 52.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.15-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel9.8.x86_64.rpm pgdg 1.14 50.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.14-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 50.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel9.6.x86_64.rpm pgdg 1.14 50.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.14-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 50.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel9.x86_64.rpm pgdg 1.11 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel9.x86_64.rpm pgdg 1.10 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 41.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 43.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6 43.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.5.1-1.rhel9.x86_64.rpm pgdg 1.5.1 41.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.5.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.5-1.rhel9.x86_64.rpm pgdg 1.5 41.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.4-1.rhel9.x86_64.rpm pgdg 1.4 40.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_ivm_15 pg_ivm_15-1.3-1.rhel9.x86_64.rpm pgdg 1.3 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_ivm_15-1.3-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.17-1PGSTY.el9.aarch64.rpm pigsty 1.17 139.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_15-1.17-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.17-1PGDG.rhel9.8.aarch64.rpm pgdg 1.17 53.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.17-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.16-1PGDG.rhel9.8.aarch64.rpm pgdg 1.16 52.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.16-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.15-1PGDG.rhel9.8.aarch64.rpm pgdg 1.15 51.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.15-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel9.8.aarch64.rpm pgdg 1.14 49.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.14-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 49.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel9.6.aarch64.rpm pgdg 1.14 49.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.14-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 48.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel9.aarch64.rpm pgdg 1.11 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel9.aarch64.rpm pgdg 1.10 42.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 39.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 42.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6 42.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.5.1-1.rhel9.aarch64.rpm pgdg 1.5.1 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.5.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.5-1.rhel9.aarch64.rpm pgdg 1.5 39.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.4-1.rhel9.aarch64.rpm pgdg 1.4 38.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_ivm_15 pg_ivm_15-1.3-1.rhel9.aarch64.rpm pgdg 1.3 38.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_ivm_15-1.3-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.17-1PGSTY.el10.x86_64.rpm pigsty 1.17 141.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_15-1.17-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.17-1PGDG.rhel10.2.x86_64.rpm pgdg 1.17 55.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.17-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.16-1PGDG.rhel10.2.x86_64.rpm pgdg 1.16 54.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.16-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.15-1PGDG.rhel10.2.x86_64.rpm pgdg 1.15 53.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.15-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel10.2.x86_64.rpm pgdg 1.14 51.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.14-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 51.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel10.0.x86_64.rpm pgdg 1.14 52.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.14-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 51.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel10.x86_64.rpm pgdg 1.11 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.11-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel10.x86_64.rpm pgdg 1.10 44.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_ivm_15-1.10-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.17-1PGSTY.el10.aarch64.rpm pigsty 1.17 140.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_15-1.17-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.17-1PGDG.rhel10.2.aarch64.rpm pgdg 1.17 54.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.17-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.16-1PGDG.rhel10.2.aarch64.rpm pgdg 1.16 53.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.16-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.15-1PGDG.rhel10.2.aarch64.rpm pgdg 1.15 52.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.15-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel10.2.aarch64.rpm pgdg 1.14 50.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.14-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 50.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.14-1PGDG.rhel10.0.aarch64.rpm pgdg 1.14 50.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.14-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 50.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.11-1PGDG.rhel10.aarch64.rpm pgdg 1.11 43.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.11-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_ivm_15 pg_ivm_15-1.10-1PGDG.rhel10.aarch64.rpm pgdg 1.10 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_ivm_15-1.10-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb pigsty 1.17 125.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg12+1_amd64.deb pgdg 1.15 124.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg12+1_amd64.deb pgdg 1.15 124.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 118.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb pigsty 1.17 145.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg12+1_arm64.deb pgdg 1.15 120.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg12+1_arm64.deb pgdg 1.15 120.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 115.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~trixie_amd64.deb pigsty 1.17 125.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg13+1_amd64.deb pgdg 1.15 124.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg13+1_amd64.deb pgdg 1.15 124.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 118.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~trixie_arm64.deb pigsty 1.17 121.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg13+1_arm64.deb pgdg 1.15 119.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg13+1_arm64.deb pgdg 1.15 120.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 114.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~jammy_amd64.deb pigsty 1.17 157.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~jammy_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb pgdg 1.15 146.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb pgdg 1.15 146.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 140.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~jammy_arm64.deb pigsty 1.17 155.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~jammy_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb pgdg 1.15 142.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb pgdg 1.15 143.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 136.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~noble_amd64.deb pigsty 1.17 131.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb pgdg 1.15 124.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb pgdg 1.15 124.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 118.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~noble_arm64.deb pigsty 1.17 130.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb pgdg 1.15 120.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb pgdg 1.15 120.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 115.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~resolute_amd64.deb pigsty 1.17 129.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~resolute_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb pgdg 1.15 122.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb pgdg 1.15 123.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb pgdg 1.13 117.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.17-1PGSTY~resolute_arm64.deb pigsty 1.17 127.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.17-1PGSTY~resolute_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb pgdg 1.15 118.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb pgdg 1.15 119.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-ivm postgresql-15-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb pgdg 1.13 113.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-15-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.17-1PGSTY.el8.x86_64.rpm pigsty 1.17 229.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_ivm_14-1.17-1PGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.17-1PGDG.rhel8.10.x86_64.rpm pgdg 1.17 82.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.17-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.16-1PGDG.rhel8.10.x86_64.rpm pgdg 1.16 82.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.16-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.15-1PGDG.rhel8.10.x86_64.rpm pgdg 1.15 80.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.15-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel8.10.x86_64.rpm pgdg 1.14 78.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.14-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel8.x86_64.rpm pgdg 1.13 78.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.13-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel8.x86_64.rpm pgdg 1.11 71.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.11-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel8.x86_64.rpm pgdg 1.10 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.10-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.8-1PGDG.rhel8.x86_64.rpm pgdg 1.8 68.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.6-1PGDG.rhel8.x86_64.rpm pgdg 1.6 71.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.5.1-1.rhel8.x86_64.rpm pgdg 1.5.1 69.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.5.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.5-1.rhel8.x86_64.rpm pgdg 1.5 69.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.4-1.rhel8.x86_64.rpm pgdg 1.4 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.3-1.rhel8.x86_64.rpm pgdg 1.3 67.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.2-1.rhel8.x86_64.rpm pgdg 1.2 66.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.1-1.rhel8.x86_64.rpm pgdg 1.1 32.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.0-.rhel8.x86_64.rpm pgdg 1.0 74.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.0-.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_ivm_14 pg_ivm_14-1.0-alpha1.rhel8.x86_64.rpm pgdg 1.0 62.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_ivm_14-1.0-alpha1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.17-1PGSTY.el8.aarch64.rpm pigsty 1.17 223.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_ivm_14-1.17-1PGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.17-1PGDG.rhel8.10.aarch64.rpm pgdg 1.17 77.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.17-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.16-1PGDG.rhel8.10.aarch64.rpm pgdg 1.16 77.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.16-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.15-1PGDG.rhel8.10.aarch64.rpm pgdg 1.15 76.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.15-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel8.10.aarch64.rpm pgdg 1.14 74.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.14-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel8.aarch64.rpm pgdg 1.13 73.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.13-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel8.aarch64.rpm pgdg 1.11 67.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.11-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel8.aarch64.rpm pgdg 1.10 66.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.10-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.8-1PGDG.rhel8.aarch64.rpm pgdg 1.8 64.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 67.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.6-1PGDG.rhel8.aarch64.rpm pgdg 1.6 66.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.5.1-1.rhel8.aarch64.rpm pgdg 1.5.1 64.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.5.1-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.5-1.rhel8.aarch64.rpm pgdg 1.5 64.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.5-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.4-1.rhel8.aarch64.rpm pgdg 1.4 63.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_ivm_14 pg_ivm_14-1.3-1.rhel8.aarch64.rpm pgdg 1.3 63.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_ivm_14-1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.17-1PGSTY.el9.x86_64.rpm pigsty 1.17 234.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_ivm_14-1.17-1PGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.17-1PGDG.rhel9.8.x86_64.rpm pgdg 1.17 83.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.17-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.16-1PGDG.rhel9.8.x86_64.rpm pgdg 1.16 82.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.16-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.15-1PGDG.rhel9.8.x86_64.rpm pgdg 1.15 81.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.15-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel9.8.x86_64.rpm pgdg 1.14 79.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.14-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel9.7.x86_64.rpm pgdg 1.14 79.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.14-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel9.6.x86_64.rpm pgdg 1.14 80.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.14-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel9.x86_64.rpm pgdg 1.13 79.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.13-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel9.x86_64.rpm pgdg 1.11 73.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.11-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel9.x86_64.rpm pgdg 1.10 73.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.10-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.8-1PGDG.rhel9.x86_64.rpm pgdg 1.8 71.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 74.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.6-1PGDG.rhel9.x86_64.rpm pgdg 1.6 74.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.5.1-1.rhel9.x86_64.rpm pgdg 1.5.1 72.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.5.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.5-1.rhel9.x86_64.rpm pgdg 1.5 72.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.4-1.rhel9.x86_64.rpm pgdg 1.4 71.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.3-1.rhel9.x86_64.rpm pgdg 1.3 71.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.2-1.rhel9.x86_64.rpm pgdg 1.2 69.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.1-1.rhel9.x86_64.rpm pgdg 1.1 34.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_ivm_14 pg_ivm_14-1.0-.rhel9.x86_64.rpm pgdg 1.0 77.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_ivm_14-1.0-.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.17-1PGSTY.el9.aarch64.rpm pigsty 1.17 231.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_ivm_14-1.17-1PGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.17-1PGDG.rhel9.8.aarch64.rpm pgdg 1.17 81.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.17-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.16-1PGDG.rhel9.8.aarch64.rpm pgdg 1.16 80.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.16-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.15-1PGDG.rhel9.8.aarch64.rpm pgdg 1.15 79.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.15-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel9.8.aarch64.rpm pgdg 1.14 77.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.14-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel9.7.aarch64.rpm pgdg 1.14 77.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.14-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel9.6.aarch64.rpm pgdg 1.14 77.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.14-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel9.aarch64.rpm pgdg 1.13 77.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.13-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel9.aarch64.rpm pgdg 1.11 70.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.11-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel9.aarch64.rpm pgdg 1.10 70.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.10-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.8-1PGDG.rhel9.aarch64.rpm pgdg 1.8 68.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 71.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.6-1PGDG.rhel9.aarch64.rpm pgdg 1.6 71.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.5.1-1.rhel9.aarch64.rpm pgdg 1.5.1 69.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.5.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.5-1.rhel9.aarch64.rpm pgdg 1.5 69.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.5-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.4-1.rhel9.aarch64.rpm pgdg 1.4 68.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_ivm_14 pg_ivm_14-1.3-1.rhel9.aarch64.rpm pgdg 1.3 68.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_ivm_14-1.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.17-1PGSTY.el10.x86_64.rpm pigsty 1.17 235.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_ivm_14-1.17-1PGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.17-1PGDG.rhel10.2.x86_64.rpm pgdg 1.17 84.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.17-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.16-1PGDG.rhel10.2.x86_64.rpm pgdg 1.16 84.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.16-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.15-1PGDG.rhel10.2.x86_64.rpm pgdg 1.15 83.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.15-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel10.2.x86_64.rpm pgdg 1.14 81.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.14-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel10.1.x86_64.rpm pgdg 1.14 81.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.14-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel10.0.x86_64.rpm pgdg 1.14 81.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.14-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel10.x86_64.rpm pgdg 1.13 80.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.13-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel10.x86_64.rpm pgdg 1.11 74.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.11-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel10.x86_64.rpm pgdg 1.10 74.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_ivm_14-1.10-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.17-1PGSTY.el10.aarch64.rpm pigsty 1.17 232.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_ivm_14-1.17-1PGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.17-1PGDG.rhel10.2.aarch64.rpm pgdg 1.17 82.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.17-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.16-1PGDG.rhel10.2.aarch64.rpm pgdg 1.16 81.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.16-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.15-1PGDG.rhel10.2.aarch64.rpm pgdg 1.15 81.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.15-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel10.2.aarch64.rpm pgdg 1.14 78.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.14-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel10.1.aarch64.rpm pgdg 1.14 78.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.14-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.14-1PGDG.rhel10.0.aarch64.rpm pgdg 1.14 78.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.14-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.13-1PGDG.rhel10.aarch64.rpm pgdg 1.13 79.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.13-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.11-1PGDG.rhel10.aarch64.rpm pgdg 1.11 72.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.11-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_ivm_14 pg_ivm_14-1.10-1PGDG.rhel10.aarch64.rpm pgdg 1.10 72.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_ivm_14-1.10-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb pigsty 1.17 216.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~bookworm_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg12+1_amd64.deb pgdg 1.15 214.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg12+1_amd64.deb pgdg 1.15 214.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg12+1_amd64.deb pgdg 1.13 209.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb pigsty 1.17 208.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~bookworm_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg12+1_arm64.deb pgdg 1.15 206.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg12+1_arm64.deb pgdg 1.15 207.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg12+1_arm64.deb pgdg 1.13 201.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~trixie_amd64.deb pigsty 1.17 215.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg13+1_amd64.deb pgdg 1.15 213.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg13+1_amd64.deb pgdg 1.15 214.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg13+1_amd64.deb pgdg 1.13 208.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~trixie_arm64.deb pigsty 1.17 208.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg13+1_arm64.deb pgdg 1.15 207.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg13+1_arm64.deb pgdg 1.15 207.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg13+1_arm64.deb pgdg 1.13 201.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~jammy_amd64.deb pigsty 1.17 260.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~jammy_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb pgdg 1.15 244.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb pgdg 1.15 245.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb pgdg 1.13 238.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~jammy_arm64.deb pigsty 1.17 258.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~jammy_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb pgdg 1.15 236.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb pgdg 1.15 237.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb pgdg 1.13 230.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~noble_amd64.deb pigsty 1.17 225.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb pgdg 1.15 214.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb pgdg 1.15 214.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb pgdg 1.13 208.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~noble_arm64.deb pigsty 1.17 222.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb pgdg 1.15 207.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb pgdg 1.15 207.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb pgdg 1.13 202.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~resolute_amd64.deb pigsty 1.17 222.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~resolute_amd64.deb
@ u26.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb pgdg 1.15 211.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb pgdg 1.15 211.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb pgdg 1.13 206.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.17-1PGSTY~resolute_arm64.deb pigsty 1.17 218.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.17-1PGSTY~resolute_arm64.deb
@ u26.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb pgdg 1.15 203.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb pgdg 1.15 204.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.15-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pg-ivm postgresql-14-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb pgdg 1.13 198.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-ivm/postgresql-14-pg-ivm_1.13-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_ivm` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_ivm         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_ivm` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_ivm;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_ivm -v 18  # PG 18
pig ext install -y pg_ivm -v 17  # PG 17
pig ext install -y pg_ivm -v 16  # PG 16
pig ext install -y pg_ivm -v 15  # PG 15
pig ext install -y pg_ivm -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_ivm_18       # PG 18
dnf install -y pg_ivm_17       # PG 17
dnf install -y pg_ivm_16       # PG 16
dnf install -y pg_ivm_15       # PG 15
dnf install -y pg_ivm_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-ivm   # PG 18
apt install -y postgresql-17-pg-ivm   # PG 17
apt install -y postgresql-16-pg-ivm   # PG 16
apt install -y postgresql-15-pg-ivm   # PG 15
apt install -y postgresql-14-pg-ivm   # PG 14
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_ivm';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_ivm;
```

## 用法

来源：

- [官方 v1.17 README](https://github.com/sraoss/pg_ivm/blob/v1.17/README.md)
- [v1.17 发行说明](https://github.com/sraoss/pg_ivm/releases/tag/v1.17)
- [1.16 to 1.17 upgrade SQL](https://github.com/sraoss/pg_ivm/blob/v1.17/pg_ivm--1.16--1.17.sql)
- [pg_ivm_dump_metadata 工具](https://github.com/sraoss/pg_ivm/blob/v1.17/scripts/pg_ivm_dump_metadata)

`pg_ivm` 为 PostgreSQL 提供了即时增量视图维护功能。增量可维护材料化视图（IMMV）以表的形式存储在 `pgivm` 模式中，带有触发器和元数据；基表的变化会在同一个事务中更新 IMMV 而不是重新计算整个查询。

### 启用并创建一个 IMMV

为可以修改 IMMV 基表的每个会话加载库。集群级设置需要重启：

```ini
shared_preload_libraries = 'pg_ivm'
```

`session_preload_libraries = 'pg_ivm'` 也可以在所有相关会话中一致管理时使用。

```sql
CREATE EXTENSION pg_ivm;

CREATE TABLE accounts (
    account_id bigint PRIMARY KEY,
    branch_id integer NOT NULL,
    balance numeric NOT NULL
);
INSERT INTO accounts VALUES (42, 1, 1000);

SELECT pgivm.create_immv(
    'account_totals',
    'SELECT branch_id, count(*) AS accounts, sum(balance) AS balance
     FROM accounts
     GROUP BY branch_id'
);

UPDATE accounts
SET balance = balance + 100
WHERE account_id = 42;

SELECT * FROM account_totals;
```

### 管理和检查 IMMV

- `pgivm.create_immv(name, query)`: 创建并填充一个 IMMV，返回其行数。
- `pgivm.refresh_immv(name, with_data)`: 完全重建 IMMV；`false` 在后续填充刷新之前禁用维护。
- `pgivm.get_immv_def(regclass)`: 返回存储的视图定义。
- `pgivm.restore_immv(name, query, populate, replace)`: 重建现有 IMMV 表的元数据、触发器和索引；1.17 新增可选的替换标志。
- `pgivm.get_create_immv_commands()` 和 `pgivm.get_restore_immv_commands()`: 发出重建 IMMV 或恢复其元数据所需的 SQL。

1.15 版包括一个用于导出或 `pg_upgrade` 工作流的辅助工具：

```bash
pg_ivm_dump_metadata -d application > pg_ivm_metadata.sql
```

该脚本发出 `pgivm.restore_immv()` 调用。先恢复表数据，然后执行保存的元数据 SQL 以使增量维护继续进行而不必重新创建表。

### 限制和操作注意事项

- 支持的定义包括选择性连接、`DISTINCT`、简单的子查询/CTE 和内置 `count`、`sum`、`avg`、`min` 和 `max` 聚合。不支持的结构包括 `HAVING`、窗口函数、`ORDER BY`、`LIMIT/OFFSET`、集合操作、`DISTINCT ON` 和用户定义的聚合。
- 高效维护依赖于合适的唯一索引。当定义提供可用分组、去重或基表主键列时，`create_immv()` 会自动创建一个。
- 创建和刷新需要 `AccessExclusiveLock`。上游警告在 `REPEATABLE READ` 或 `SERIALIZABLE` 下创建的一致性风险；使用 `READ COMMITTED` 或者在之后进行刷新。
- 关系已注册时，`restore_immv()` 默认失败；设置 `replace = true` 可以替换，但要求超级用户。未启用替换时，调用者须为 IMMV 所有者。表定义不匹配时仍会失败。
- 1.15 版还修复了多次触发驱动修改后的不正确维护和 v1.14 的外连接维护崩溃问题。

### 1.16 升级

1.16 增加 PostgreSQL 19 支持，修复同一事务内维护后删除 IMMV 时的崩溃、无默认等值操作符列导致的维护失败、大 OID 处理以及增量维护锁释放时序问题。安装匹配的新文件并确保相关会话加载新动态库后，执行：

```sql
ALTER EXTENSION pg_ivm UPDATE TO '1.16';
```

### 升级至 1.17

上游支持 PostgreSQL 13–19。1.17 修复恢复后 IMMV 的填充状态，避免后续刷新创建重复维护触发器；同时改进自动唯一索引推导、拒绝目标列表中的集合返回函数，并修复 LATERAL 子查询的索引创建崩溃。

安装匹配文件，确保修改数据的会话使用新库，然后逐库更新：

```sql
ALTER EXTENSION pg_ivm UPDATE TO '1.17';
```

执行 PostgreSQL 大版本升级前导出元数据时，把新增选项放在首个参数位置：

```bash
pg_ivm_dump_metadata --pg-upgrade application > pg_ivm_metadata.sql
```

生成的恢复调用会替换大版本升级后残留的旧目录记录。完成升级后，以超级用户执行保存的 SQL。IMMV 表及其数据必须已经存在；替换元数据不能代替数据恢复。
