---
title: "pg_stat_monitor"
linkTitle: "pg_stat_monitor"
description: "提供查询聚合统计、客户端信息、执行计划详细信息和直方图"
weight: 6230
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/percona/pg_stat_monitor">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">percona/pg_stat_monitor</div>
    <div class="ext-card__desc">https://github.com/percona/pg_stat_monitor</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_stat_monitor-2.3.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_stat_monitor-2.3.2.tar.gz</div>
    <div class="ext-card__desc">pg_stat_monitor-2.3.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stat_monitor`**](/ext/e/pg_stat_monitor) | `2.3.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6230  | [**`pg_stat_monitor`**](/ext/e/pg_stat_monitor) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) [`pgsentinel`](/ext/e/pgsentinel) [`auto_explain`](/ext/e/auto_explain) [`logerrors`](/ext/e/logerrors) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.3.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_stat_monitor` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.3.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_stat_monitor_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.3.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-stat-monitor` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.3.2 3 | AVAIL PGDG 2.3.2 6 | AVAIL PGDG 2.3.2 8 | AVAIL PGDG 2.3.2 9 | AVAIL PGDG 2.3.2 13 |
| el8.aarch64 | AVAIL PGDG 2.3.2 3 | AVAIL PGDG 2.3.2 6 | AVAIL PGDG 2.3.2 8 | AVAIL PGDG 2.3.2 9 | AVAIL PGDG 2.3.2 9 |
| el9.x86_64 | AVAIL PGDG 2.3.2 3 | AVAIL PGDG 2.3.2 6 | AVAIL PGDG 2.3.2 8 | AVAIL PGDG 2.3.2 9 | AVAIL PGDG 2.3.2 12 |
| el9.aarch64 | AVAIL PGDG 2.3.2 3 | AVAIL PGDG 2.3.2 6 | AVAIL PGDG 2.3.2 8 | AVAIL PGDG 2.3.2 9 | AVAIL PGDG 2.3.2 9 |
| el10.x86_64 | AVAIL PGDG 2.3.2 3 | AVAIL PGDG 2.3.2 5 | AVAIL PGDG 2.3.2 5 | AVAIL PGDG 2.3.2 5 | AVAIL PGDG 2.3.2 5 |
| el10.aarch64 | AVAIL PGDG 2.3.2 3 | AVAIL PGDG 2.3.2 5 | AVAIL PGDG 2.3.2 5 | AVAIL PGDG 2.3.2 5 | AVAIL PGDG 2.3.2 5 |
| d12.x86_64 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 |
| d12.aarch64 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 |
| d13.x86_64 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 |
| d13.aarch64 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 |
| u22.x86_64 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 |
| u22.aarch64 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 |
| u24.x86_64 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 |
| u24.aarch64 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 | AVAIL PIGSTY 2.3.2 1 |
@ el8.x86_64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.2 43.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_stat_monitor_18-2.3.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PIGSTY.el8.x86_64.rpm pigsty 2.3.1 43.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_stat_monitor_18-2.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.1 43.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_stat_monitor_18-2.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.2 42.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_stat_monitor_18-2.3.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PIGSTY.el8.aarch64.rpm pigsty 2.3.1 42.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_stat_monitor_18-2.3.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.1 42.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_stat_monitor_18-2.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.2 42.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_monitor_18-2.3.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PIGSTY.el9.x86_64.rpm pigsty 2.3.1 42.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_stat_monitor_18-2.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.1 42.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_monitor_18-2.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.2 41.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_monitor_18-2.3.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PIGSTY.el9.aarch64.rpm pigsty 2.3.1 41.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_stat_monitor_18-2.3.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.1 41.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_monitor_18-2.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.3.2 42.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_monitor_18-2.3.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PIGSTY.el10.x86_64.rpm pigsty 2.3.1 42.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_stat_monitor_18-2.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PGDGrhel10.1.x86_64.rpm pgdg 2.3.1 42.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_monitor_18-2.3.1-1PGDGrhel10.1.x86_64.rpm
@ el10.aarch64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.3.2 42.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_monitor_18-2.3.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PIGSTY.el10.aarch64.rpm pigsty 2.3.1 42.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_stat_monitor_18-2.3.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pg_stat_monitor_18 pg_stat_monitor_18-2.3.1-1PGDGrhel10.1.aarch64.rpm pgdg 2.3.1 42.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_monitor_18-2.3.1-1PGDGrhel10.1.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-stat-monitor postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb pigsty 2.3.2 74.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-stat-monitor postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb pigsty 2.3.2 72.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-stat-monitor postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb pigsty 2.3.2 74.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-stat-monitor postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb pigsty 2.3.2 73.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-stat-monitor postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb pigsty 2.3.2 80.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-stat-monitor postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb pigsty 2.3.2 79.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-stat-monitor postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb pigsty 2.3.2 77.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-stat-monitor postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb pigsty 2.3.2 76.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-18-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.2 43.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_stat_monitor_17-2.3.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PIGSTY.el8.x86_64.rpm pigsty 2.3.1 43.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_stat_monitor_17-2.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.1 43.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_stat_monitor_17-2.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.2.0-1PGDG.rhel8.x86_64.rpm pgdg 2.2.0 42.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_stat_monitor_17-2.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1.1 41.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_stat_monitor_17-2.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 40.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_stat_monitor_17-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.2 42.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_stat_monitor_17-2.3.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PIGSTY.el8.aarch64.rpm pigsty 2.3.1 42.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_stat_monitor_17-2.3.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.1 42.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_stat_monitor_17-2.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.2.0-1PGDG.rhel8.aarch64.rpm pgdg 2.2.0 40.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_stat_monitor_17-2.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1.1 40.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_stat_monitor_17-2.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 38.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_stat_monitor_17-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.2 42.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_monitor_17-2.3.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PIGSTY.el9.x86_64.rpm pigsty 2.3.1 42.0KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_stat_monitor_17-2.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.1 42.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_monitor_17-2.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.2.0-1PGDG.rhel9.x86_64.rpm pgdg 2.2.0 41.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_monitor_17-2.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1.1 40.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_monitor_17-2.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 39.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_stat_monitor_17-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.2 41.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_monitor_17-2.3.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PIGSTY.el9.aarch64.rpm pigsty 2.3.1 41.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_stat_monitor_17-2.3.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.1 41.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_monitor_17-2.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.2.0-1PGDG.rhel9.aarch64.rpm pgdg 2.2.0 40.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_monitor_17-2.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1.1 39.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_monitor_17-2.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 38.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_stat_monitor_17-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.3.2 42.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_stat_monitor_17-2.3.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PIGSTY.el10.x86_64.rpm pigsty 2.3.1 42.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_stat_monitor_17-2.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PGDGrhel10.1.x86_64.rpm pgdg 2.3.1 42.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_stat_monitor_17-2.3.1-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.2.0-1PGDG.rhel10.x86_64.rpm pgdg 2.2.0 41.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_stat_monitor_17-2.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.1-1PGDG.rhel10.x86_64.rpm pgdg 2.1.1 41.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_stat_monitor_17-2.1.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.3.2 42.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_monitor_17-2.3.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PIGSTY.el10.aarch64.rpm pigsty 2.3.1 42.1KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_stat_monitor_17-2.3.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.3.1-1PGDGrhel10.1.aarch64.rpm pgdg 2.3.1 41.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_monitor_17-2.3.1-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.2.0-1PGDG.rhel10.aarch64.rpm pgdg 2.2.0 41.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_monitor_17-2.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pg_stat_monitor_17 pg_stat_monitor_17-2.1.1-1PGDG.rhel10.aarch64.rpm pgdg 2.1.1 40.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_stat_monitor_17-2.1.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-stat-monitor postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb pigsty 2.3.2 74.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-stat-monitor postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb pigsty 2.3.2 72.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-stat-monitor postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb pigsty 2.3.2 74.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-stat-monitor postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb pigsty 2.3.2 73.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-stat-monitor postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb pigsty 2.3.2 86.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-stat-monitor postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb pigsty 2.3.2 85.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-stat-monitor postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb pigsty 2.3.2 77.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-stat-monitor postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb pigsty 2.3.2 76.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-17-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.2 43.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_monitor_16-2.3.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PIGSTY.el8.x86_64.rpm pigsty 2.3.1 43.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_stat_monitor_16-2.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.1 43.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_monitor_16-2.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.2.0-1PGDG.rhel8.x86_64.rpm pgdg 2.2.0 42.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_monitor_16-2.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1.1 41.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_monitor_16-2.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 40.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_monitor_16-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.0.4-1PGDG.rhel8.x86_64.rpm pgdg 2.0.4 38.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_monitor_16-2.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.0.2-1PGDG.rhel8.x86_64.rpm pgdg 2.0.2 38.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_stat_monitor_16-2.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.2 42.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_monitor_16-2.3.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PIGSTY.el8.aarch64.rpm pigsty 2.3.1 41.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_stat_monitor_16-2.3.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.1 42.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_monitor_16-2.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.2.0-1PGDG.rhel8.aarch64.rpm pgdg 2.2.0 40.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_monitor_16-2.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1.1 40.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_monitor_16-2.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 38.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_monitor_16-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.0.4-1PGDG.rhel8.aarch64.rpm pgdg 2.0.4 37.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_monitor_16-2.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.0.2-1PGDG.rhel8.aarch64.rpm pgdg 2.0.2 37.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_stat_monitor_16-2.0.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.2 42.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_monitor_16-2.3.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PIGSTY.el9.x86_64.rpm pigsty 2.3.1 41.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_stat_monitor_16-2.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.1 42.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_monitor_16-2.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.2.0-1PGDG.rhel9.x86_64.rpm pgdg 2.2.0 41.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_monitor_16-2.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1.1 40.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_monitor_16-2.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 39.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_monitor_16-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.0.4-1PGDG.rhel9.x86_64.rpm pgdg 2.0.4 38.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_monitor_16-2.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.0.2-1PGDG.rhel9.x86_64.rpm pgdg 2.0.2 38.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_stat_monitor_16-2.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.2 41.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_monitor_16-2.3.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PIGSTY.el9.aarch64.rpm pigsty 2.3.1 41.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_stat_monitor_16-2.3.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.1 41.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_monitor_16-2.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.2.0-1PGDG.rhel9.aarch64.rpm pgdg 2.2.0 40.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_monitor_16-2.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1.1 39.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_monitor_16-2.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 38.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_monitor_16-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.0.4-1PGDG.rhel9.aarch64.rpm pgdg 2.0.4 37.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_monitor_16-2.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.0.2-1PGDG.rhel9.aarch64.rpm pgdg 2.0.2 36.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_stat_monitor_16-2.0.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.3.2 42.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_stat_monitor_16-2.3.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PIGSTY.el10.x86_64.rpm pigsty 2.3.1 42.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_stat_monitor_16-2.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PGDGrhel10.1.x86_64.rpm pgdg 2.3.1 42.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_stat_monitor_16-2.3.1-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.2.0-1PGDG.rhel10.x86_64.rpm pgdg 2.2.0 41.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_stat_monitor_16-2.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.1-1PGDG.rhel10.x86_64.rpm pgdg 2.1.1 41.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_stat_monitor_16-2.1.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.3.2 42.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_monitor_16-2.3.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PIGSTY.el10.aarch64.rpm pigsty 2.3.1 42.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_stat_monitor_16-2.3.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.3.1-1PGDGrhel10.1.aarch64.rpm pgdg 2.3.1 41.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_monitor_16-2.3.1-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.2.0-1PGDG.rhel10.aarch64.rpm pgdg 2.2.0 41.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_monitor_16-2.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pg_stat_monitor_16 pg_stat_monitor_16-2.1.1-1PGDG.rhel10.aarch64.rpm pgdg 2.1.1 40.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_stat_monitor_16-2.1.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-stat-monitor postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb pigsty 2.3.2 73.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-stat-monitor postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb pigsty 2.3.2 72.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-stat-monitor postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb pigsty 2.3.2 74.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-stat-monitor postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb pigsty 2.3.2 72.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-stat-monitor postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb pigsty 2.3.2 86.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-stat-monitor postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb pigsty 2.3.2 84.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-stat-monitor postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb pigsty 2.3.2 77.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-stat-monitor postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb pigsty 2.3.2 76.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-16-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.2 44.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_monitor_15-2.3.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PIGSTY.el8.x86_64.rpm pigsty 2.3.1 44.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_stat_monitor_15-2.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.1 44.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_monitor_15-2.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.2.0-1PGDG.rhel8.x86_64.rpm pgdg 2.2.0 43.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_monitor_15-2.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1.1 42.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_monitor_15-2.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 41.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_monitor_15-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.0.4-1PGDG.rhel8.x86_64.rpm pgdg 2.0.4 39.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_monitor_15-2.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 39.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_monitor_15-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-1.1.0-1.rhel8.x86_64.rpm pgdg 1.1.0 87.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_stat_monitor_15-1.1.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.2 42.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_monitor_15-2.3.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PIGSTY.el8.aarch64.rpm pigsty 2.3.1 42.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_stat_monitor_15-2.3.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.1 42.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_monitor_15-2.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.2.0-1PGDG.rhel8.aarch64.rpm pgdg 2.2.0 41.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_monitor_15-2.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1.1 41.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_monitor_15-2.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 39.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_monitor_15-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.0.4-1PGDG.rhel8.aarch64.rpm pgdg 2.0.4 38.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_monitor_15-2.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 37.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_monitor_15-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-1.1.0-1.rhel8.aarch64.rpm pgdg 1.1.0 84.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_stat_monitor_15-1.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.2 43.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_monitor_15-2.3.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PIGSTY.el9.x86_64.rpm pigsty 2.3.1 43.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_stat_monitor_15-2.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.1 43.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_monitor_15-2.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.2.0-1PGDG.rhel9.x86_64.rpm pgdg 2.2.0 42.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_monitor_15-2.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1.1 42.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_monitor_15-2.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 41.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_monitor_15-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.0.4-1PGDG.rhel9.x86_64.rpm pgdg 2.0.4 40.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_monitor_15-2.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 39.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_monitor_15-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-1.1.0-1.rhel9.x86_64.rpm pgdg 1.1.0 88.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_stat_monitor_15-1.1.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.2 43.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_monitor_15-2.3.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PIGSTY.el9.aarch64.rpm pigsty 2.3.1 43.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_stat_monitor_15-2.3.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.1 43.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_monitor_15-2.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.2.0-1PGDG.rhel9.aarch64.rpm pgdg 2.2.0 41.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_monitor_15-2.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1.1 41.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_monitor_15-2.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 40.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_monitor_15-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.0.4-1PGDG.rhel9.aarch64.rpm pgdg 2.0.4 38.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_monitor_15-2.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 38.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_monitor_15-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-1.1.0-1.rhel9.aarch64.rpm pgdg 1.1.0 87.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_stat_monitor_15-1.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.3.2 43.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_stat_monitor_15-2.3.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PIGSTY.el10.x86_64.rpm pigsty 2.3.1 43.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_stat_monitor_15-2.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PGDGrhel10.1.x86_64.rpm pgdg 2.3.1 43.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_stat_monitor_15-2.3.1-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.2.0-1PGDG.rhel10.x86_64.rpm pgdg 2.2.0 43.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_stat_monitor_15-2.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.1-1PGDG.rhel10.x86_64.rpm pgdg 2.1.1 42.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_stat_monitor_15-2.1.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.3.2 43.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_stat_monitor_15-2.3.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PIGSTY.el10.aarch64.rpm pigsty 2.3.1 43.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_stat_monitor_15-2.3.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.3.1-1PGDGrhel10.1.aarch64.rpm pgdg 2.3.1 43.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_stat_monitor_15-2.3.1-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.2.0-1PGDG.rhel10.aarch64.rpm pgdg 2.2.0 42.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_stat_monitor_15-2.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pg_stat_monitor_15 pg_stat_monitor_15-2.1.1-1PGDG.rhel10.aarch64.rpm pgdg 2.1.1 42.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_stat_monitor_15-2.1.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-stat-monitor postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb pigsty 2.3.2 75.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-stat-monitor postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb pigsty 2.3.2 73.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-stat-monitor postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb pigsty 2.3.2 75.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-stat-monitor postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb pigsty 2.3.2 73.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-stat-monitor postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb pigsty 2.3.2 88.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-stat-monitor postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb pigsty 2.3.2 86.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-stat-monitor postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb pigsty 2.3.2 78.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-stat-monitor postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb pigsty 2.3.2 77.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-15-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.2-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.2 44.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-2.3.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PIGSTY.el8.x86_64.rpm pigsty 2.3.1 44.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_stat_monitor_14-2.3.1-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PGDG.rhel8.10.x86_64.rpm pgdg 2.3.1 44.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-2.3.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.2.0-1PGDG.rhel8.x86_64.rpm pgdg 2.2.0 43.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-2.2.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.1-1PGDG.rhel8.x86_64.rpm pgdg 2.1.1 42.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-2.1.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.0-1PGDG.rhel8.x86_64.rpm pgdg 2.1.0 41.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-2.1.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.0.4-1PGDG.rhel8.x86_64.rpm pgdg 2.0.4 39.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-2.0.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.0.1-1PGDG.rhel8.x86_64.rpm pgdg 2.0.1 39.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-2.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.1.0-1.rhel8.x86_64.rpm pgdg 1.1.0 87.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-1.1.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.0.1-1.rhel8.x86_64.rpm pgdg 1.0.1 106.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-1.0.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.0.0-1.rhel8.x86_64.rpm pgdg 1.0.0 107.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-1.0.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.0.0-rc.1_1.rhel8.x86_64.rpm pgdg 1.0.0 93.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-1.0.0-rc.1_1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-0.9.2-beta1_1.rhel8.x86_64.rpm pgdg 0.9.2 86.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_stat_monitor_14-0.9.2-beta1_1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.2-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.2 42.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_monitor_14-2.3.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PIGSTY.el8.aarch64.rpm pigsty 2.3.1 42.7KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_stat_monitor_14-2.3.1-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PGDG.rhel8.10.aarch64.rpm pgdg 2.3.1 42.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_monitor_14-2.3.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.2.0-1PGDG.rhel8.aarch64.rpm pgdg 2.2.0 41.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_monitor_14-2.2.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.1-1PGDG.rhel8.aarch64.rpm pgdg 2.1.1 40.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_monitor_14-2.1.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.0-1PGDG.rhel8.aarch64.rpm pgdg 2.1.0 39.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_monitor_14-2.1.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.0.4-1PGDG.rhel8.aarch64.rpm pgdg 2.0.4 38.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_monitor_14-2.0.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.0.1-1PGDG.rhel8.aarch64.rpm pgdg 2.0.1 37.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_monitor_14-2.0.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.1.0-1.rhel8.aarch64.rpm pgdg 1.1.0 84.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_stat_monitor_14-1.1.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.2-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.2 43.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-2.3.2-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PIGSTY.el9.x86_64.rpm pigsty 2.3.1 43.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_stat_monitor_14-2.3.1-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PGDG.rhel9.7.x86_64.rpm pgdg 2.3.1 43.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-2.3.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.2.0-1PGDG.rhel9.x86_64.rpm pgdg 2.2.0 42.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-2.2.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.1-1PGDG.rhel9.x86_64.rpm pgdg 2.1.1 42.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-2.1.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.0-1PGDG.rhel9.x86_64.rpm pgdg 2.1.0 40.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-2.1.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.0.4-1PGDG.rhel9.x86_64.rpm pgdg 2.0.4 39.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-2.0.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.0.1-1PGDG.rhel9.x86_64.rpm pgdg 2.0.1 39.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-2.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.1.0-1.rhel9.x86_64.rpm pgdg 1.1.0 88.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-1.1.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.0.1-1.rhel9.x86_64.rpm pgdg 1.0.1 108.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-1.0.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.0.0-1.rhel9.x86_64.rpm pgdg 1.0.0 107.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-1.0.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.0.0-rc.1_1.rhel9.x86_64.rpm pgdg 1.0.0 94.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_stat_monitor_14-1.0.0-rc.1_1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.2-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.2 43.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_monitor_14-2.3.2-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PIGSTY.el9.aarch64.rpm pigsty 2.3.1 43.0KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_stat_monitor_14-2.3.1-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PGDG.rhel9.7.aarch64.rpm pgdg 2.3.1 43.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_monitor_14-2.3.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.2.0-1PGDG.rhel9.aarch64.rpm pgdg 2.2.0 41.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_monitor_14-2.2.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.1-1PGDG.rhel9.aarch64.rpm pgdg 2.1.1 41.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_monitor_14-2.1.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.0-1PGDG.rhel9.aarch64.rpm pgdg 2.1.0 40.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_monitor_14-2.1.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.0.4-1PGDG.rhel9.aarch64.rpm pgdg 2.0.4 38.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_monitor_14-2.0.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.0.1-1PGDG.rhel9.aarch64.rpm pgdg 2.0.1 38.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_monitor_14-2.0.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-1.1.0-1.rhel9.aarch64.rpm pgdg 1.1.0 87.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_stat_monitor_14-1.1.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.2-1PGDG.rhel10.1.x86_64.rpm pgdg 2.3.2 43.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_stat_monitor_14-2.3.2-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PIGSTY.el10.x86_64.rpm pigsty 2.3.1 43.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_stat_monitor_14-2.3.1-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PGDGrhel10.1.x86_64.rpm pgdg 2.3.1 43.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_stat_monitor_14-2.3.1-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.2.0-1PGDG.rhel10.x86_64.rpm pgdg 2.2.0 42.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_stat_monitor_14-2.2.0-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.1-1PGDG.rhel10.x86_64.rpm pgdg 2.1.1 42.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_stat_monitor_14-2.1.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.2-1PGDG.rhel10.1.aarch64.rpm pgdg 2.3.2 43.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_stat_monitor_14-2.3.2-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PIGSTY.el10.aarch64.rpm pigsty 2.3.1 43.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_stat_monitor_14-2.3.1-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.3.1-1PGDGrhel10.1.aarch64.rpm pgdg 2.3.1 43.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_stat_monitor_14-2.3.1-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.2.0-1PGDG.rhel10.aarch64.rpm pgdg 2.2.0 42.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_stat_monitor_14-2.2.0-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pg_stat_monitor_14 pg_stat_monitor_14-2.1.1-1PGDG.rhel10.aarch64.rpm pgdg 2.1.1 42.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_stat_monitor_14-2.1.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-stat-monitor postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb pigsty 2.3.2 74.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-stat-monitor postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb pigsty 2.3.2 73.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-stat-monitor/postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-stat-monitor postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb pigsty 2.3.2 74.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-stat-monitor postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb pigsty 2.3.2 73.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-stat-monitor/postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-stat-monitor postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb pigsty 2.3.2 87.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-stat-monitor postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb pigsty 2.3.2 86.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-stat-monitor/postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-stat-monitor postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb pigsty 2.3.2 78.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-stat-monitor postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb pigsty 2.3.2 77.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-stat-monitor/postgresql-14-pg-stat-monitor_2.3.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_stat_monitor` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_stat_monitor         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_stat_monitor` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_stat_monitor;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_stat_monitor -v 18  # PG 18
pig ext install -y pg_stat_monitor -v 17  # PG 17
pig ext install -y pg_stat_monitor -v 16  # PG 16
pig ext install -y pg_stat_monitor -v 15  # PG 15
pig ext install -y pg_stat_monitor -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_stat_monitor_18       # PG 18
dnf install -y pg_stat_monitor_17       # PG 17
dnf install -y pg_stat_monitor_16       # PG 16
dnf install -y pg_stat_monitor_15       # PG 15
dnf install -y pg_stat_monitor_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-stat-monitor   # PG 18
apt install -y postgresql-17-pg-stat-monitor   # PG 17
apt install -y postgresql-16-pg-stat-monitor   # PG 16
apt install -y postgresql-15-pg-stat-monitor   # PG 15
apt install -y postgresql-14-pg-stat-monitor   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_stat_monitor';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_stat_monitor;
```
