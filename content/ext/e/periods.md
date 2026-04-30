---
title: "periods"
linkTitle: "periods"
description: "为 PERIODs 和 SYSTEM VERSIONING 提供标准 SQL 功能"
weight: 1030
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/xocolatl/periods">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">xocolatl/periods</div>
    <div class="ext-card__desc">https://github.com/xocolatl/periods</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/periods-1.2.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">periods-1.2.3.tar.gz</div>
    <div class="ext-card__desc">periods-1.2.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`periods`**](/ext/e/periods) | `1.2.3` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1030  | [**`periods`**](/ext/e/periods) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`btree_gist`](/ext/e/btree_gist) [`timescaledb_toolkit`](/ext/e/timescaledb_toolkit) [`timescaledb`](/ext/e/timescaledb) [`timeseries`](/ext/e/timeseries) [`temporal_tables`](/ext/e/temporal_tables) [`emaj`](/ext/e/emaj) [`table_version`](/ext/e/table_version) [`pg_cron`](/ext/e/pg_cron) [`pg_partman`](/ext/e/pg_partman) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `periods` | `btree_gist` |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `periods_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-periods` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 3 | AVAIL PIGSTY 1.2.3 3 |
| el8.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 3 | AVAIL PIGSTY 1.2.3 3 |
| el9.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 3 | AVAIL PIGSTY 1.2.3 2 |
| el9.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 3 | AVAIL PIGSTY 1.2.3 3 |
| el10.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 |
| el10.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 | AVAIL PIGSTY 1.2.3 2 |
| d12.x86_64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| d12.aarch64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| d13.x86_64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| d13.aarch64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u22.x86_64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u22.aarch64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u24.x86_64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u24.aarch64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u26.x86_64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
| u26.aarch64 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 | AVAIL PGDG 1.2.3 1 |
@ el8.x86_64 18 periods_18 periods_18-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/periods_18-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 periods_18 periods_18-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/periods_18-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 periods_18 periods_18-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/periods_18-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 periods_18 periods_18-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/periods_18-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 periods_18 periods_18-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/periods_18-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 periods_18 periods_18-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/periods_18-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 47.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 45.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg26.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-periods postgresql-18-periods_1.2.3-2.pgdg26.04+1_arm64.deb pgdg 1.2.3 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-18-periods_1.2.3-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 periods_17 periods_17-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/periods_17-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 periods_17 periods_17-1.2.2-3PGDG.rhel8.x86_64.rpm pgdg 1.2.2 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/periods_17-1.2.2-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 periods_17 periods_17-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/periods_17-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 periods_17 periods_17-1.2.2-3PGDG.rhel8.aarch64.rpm pgdg 1.2.2 44.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/periods_17-1.2.2-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 periods_17 periods_17-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/periods_17-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 periods_17 periods_17-1.2.2-3PGDG.rhel9.x86_64.rpm pgdg 1.2.2 42.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/periods_17-1.2.2-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 periods_17 periods_17-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 41.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/periods_17-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 periods_17 periods_17-1.2.2-3PGDG.rhel9.aarch64.rpm pgdg 1.2.2 42.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/periods_17-1.2.2-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 periods_17 periods_17-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/periods_17-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 periods_17 periods_17-1.2.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2.2 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/periods_17-1.2.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 periods_17 periods_17-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/periods_17-1.2.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 periods_17 periods_17-1.2.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2.2 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/periods_17-1.2.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 47.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 50.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 49.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg26.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-periods postgresql-17-periods_1.2.3-2.pgdg26.04+1_arm64.deb pgdg 1.2.3 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-17-periods_1.2.3-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 periods_16 periods_16-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/periods_16-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 periods_16 periods_16-1.2.2-1.rhel8.1.x86_64.rpm pgdg 1.2.2 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/periods_16-1.2.2-1.rhel8.1.x86_64.rpm
@ el8.aarch64 16 periods_16 periods_16-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/periods_16-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 periods_16 periods_16-1.2.2-1.rhel8.1.aarch64.rpm pgdg 1.2.2 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/periods_16-1.2.2-1.rhel8.1.aarch64.rpm
@ el9.x86_64 16 periods_16 periods_16-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/periods_16-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 periods_16 periods_16-1.2.2-1.rhel9.1.x86_64.rpm pgdg 1.2.2 42.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/periods_16-1.2.2-1.rhel9.1.x86_64.rpm
@ el9.aarch64 16 periods_16 periods_16-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/periods_16-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 periods_16 periods_16-1.2.2-1.rhel9.1.aarch64.rpm pgdg 1.2.2 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/periods_16-1.2.2-1.rhel9.1.aarch64.rpm
@ el10.x86_64 16 periods_16 periods_16-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/periods_16-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 periods_16 periods_16-1.2.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2.2 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/periods_16-1.2.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 periods_16 periods_16-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/periods_16-1.2.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 periods_16 periods_16-1.2.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2.2 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/periods_16-1.2.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 47.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 49.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 49.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg26.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-periods postgresql-16-periods_1.2.3-2.pgdg26.04+1_arm64.deb pgdg 1.2.3 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-16-periods_1.2.3-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 periods_15 periods_15-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/periods_15-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 periods_15 periods_15-1.2.2-1.rhel8.x86_64.rpm pgdg 1.2.2 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/periods_15-1.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 periods_15 periods_15-1.2-2.rhel8.x86_64.rpm pgdg 1.2 60.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/periods_15-1.2-2.rhel8.x86_64.rpm
@ el8.aarch64 15 periods_15 periods_15-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/periods_15-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 periods_15 periods_15-1.2.2-1.rhel8.aarch64.rpm pgdg 1.2.2 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/periods_15-1.2.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 periods_15 periods_15-1.2-2.rhel8.aarch64.rpm pgdg 1.2 60.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/periods_15-1.2-2.rhel8.aarch64.rpm
@ el9.x86_64 15 periods_15 periods_15-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/periods_15-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 periods_15 periods_15-1.2.2-1.rhel9.x86_64.rpm pgdg 1.2.2 42.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/periods_15-1.2.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 periods_15 periods_15-1.2-2.rhel9.x86_64.rpm pgdg 1.2 59.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/periods_15-1.2-2.rhel9.x86_64.rpm
@ el9.aarch64 15 periods_15 periods_15-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/periods_15-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 periods_15 periods_15-1.2.2-1.rhel9.aarch64.rpm pgdg 1.2.2 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/periods_15-1.2.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 periods_15 periods_15-1.2-2.rhel9.aarch64.rpm pgdg 1.2 59.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/periods_15-1.2-2.rhel9.aarch64.rpm
@ el10.x86_64 15 periods_15 periods_15-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/periods_15-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 periods_15 periods_15-1.2.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2.2 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/periods_15-1.2.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 periods_15 periods_15-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/periods_15-1.2.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 periods_15 periods_15-1.2.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2.2 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/periods_15-1.2.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 46.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 49.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 49.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg26.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-periods postgresql-15-periods_1.2.3-2.pgdg26.04+1_arm64.deb pgdg 1.2.3 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-15-periods_1.2.3-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 periods_14 periods_14-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 43.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/periods_14-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 periods_14 periods_14-1.2.2-1.rhel8.x86_64.rpm pgdg 1.2.2 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/periods_14-1.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 periods_14 periods_14-1.2-2.rhel8.x86_64.rpm pgdg 1.2 61.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/periods_14-1.2-2.rhel8.x86_64.rpm
@ el8.aarch64 14 periods_14 periods_14-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 43.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/periods_14-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 periods_14 periods_14-1.2.2-1.rhel8.aarch64.rpm pgdg 1.2.2 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/periods_14-1.2.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 periods_14 periods_14-1.2-2.rhel8.aarch64.rpm pgdg 1.2 60.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/periods_14-1.2-2.rhel8.aarch64.rpm
@ el9.x86_64 14 periods_14 periods_14-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/periods_14-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 periods_14 periods_14-1.2.2-1.rhel9.x86_64.rpm pgdg 1.2.2 42.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/periods_14-1.2.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 periods_14 periods_14-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 41.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/periods_14-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 periods_14 periods_14-1.2.2-1.rhel9.aarch64.rpm pgdg 1.2.2 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/periods_14-1.2.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 periods_14 periods_14-1.2-2.rhel9.aarch64.rpm pgdg 1.2 59.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/periods_14-1.2-2.rhel9.aarch64.rpm
@ el10.x86_64 14 periods_14 periods_14-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/periods_14-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 periods_14 periods_14-1.2.2-4PGDG.rhel10.x86_64.rpm pgdg 1.2.2 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/periods_14-1.2.2-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 periods_14 periods_14-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 42.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/periods_14-1.2.3-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 periods_14 periods_14-1.2.2-4PGDG.rhel10.aarch64.rpm pgdg 1.2.2 42.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/periods_14-1.2.2-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg12+1_amd64.deb pgdg 1.2.3 46.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg12+1_arm64.deb pgdg 1.2.3 46.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg13+1_amd64.deb pgdg 1.2.3 47.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg13+1_arm64.deb pgdg 1.2.3 46.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg22.04+1_amd64.deb pgdg 1.2.3 49.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg22.04+1_arm64.deb pgdg 1.2.3 49.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg24.04+1_amd64.deb pgdg 1.2.3 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg24.04+1_arm64.deb pgdg 1.2.3 45.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg26.04+1_amd64.deb pgdg 1.2.3 45.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-periods postgresql-14-periods_1.2.3-2.pgdg26.04+1_arm64.deb pgdg 1.2.3 45.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/postgresql-periods/postgresql-14-periods_1.2.3-2.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `periods` 扩展的 RPM 包：

```bash
pig build pkg periods         # 构建 RPM 包
```


## 安装

您可以直接安装 `periods` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install periods;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y periods -v 18  # PG 18
pig ext install -y periods -v 17  # PG 17
pig ext install -y periods -v 16  # PG 16
pig ext install -y periods -v 15  # PG 15
pig ext install -y periods -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y periods_18       # PG 18
dnf install -y periods_17       # PG 17
dnf install -y periods_16       # PG 16
dnf install -y periods_15       # PG 15
dnf install -y periods_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-periods   # PG 18
apt install -y postgresql-17-periods   # PG 17
apt install -y postgresql-16-periods   # PG 16
apt install -y postgresql-15-periods   # PG 15
apt install -y postgresql-14-periods   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION periods CASCADE;  -- 依赖: btree_gist
```



## 用法

> [periods: PostgreSQL 的时间段与系统版本控制](https://github.com/xocolatl/periods)

本扩展实现了 SQL:2016 标准（最初于 SQL:2011 引入）中关于时间段（Period）和 `SYSTEM VERSIONING` 系统版本控制的行为。

### 什么是时间段？

时间段是表上的一个定义，指定一个名称和两个列。时间段的值包含起始值，但不包含结束值。

```sql
-- 标准 SQL 语法
CREATE TABLE example (
    id bigint,
    start_date date,
    end_date date,
    PERIOD FOR validity (start_date, end_date)
);
```

由于扩展无法修改 PostgreSQL 的语法，我们通过函数、视图和触发器来尽可能模拟相同的行为：

```sql
CREATE TABLE example (
    id bigint,
    start_date date,
    end_date date
);
SELECT periods.add_period('example', 'validity', 'start_date', 'end_date');
```

定义时间段后，会约束两列：起始值必须严格小于结束值，且两列均不能为空。

## 唯一约束

时间段可以作为 `PRIMARY KEY` 和 `UNIQUE` 约束的一部分：

```sql
CREATE TABLE example (
    id bigint,
    start_date date,
    end_date date
);
SELECT periods.add_period('example', 'validity', 'start_date', 'end_date');
SELECT periods.add_unique_key('example', ARRAY['id'], 'validity');
```

扩展会创建一个覆盖所有指定列和时间段两列的唯一约束，并通过 GiST 排他约束实现 `WITHOUT OVERLAPS` 语义。

## 外键

有了带时间段的唯一键，就可以创建指向它们的外键：

```sql
SELECT periods.add_foreign_key('example2', 'ARRAY[ex_id]', 'validity', 'example_id_validity');
```

## 部分操作

SQL 标准允许对时间段的一部分进行更新或删除，扩展通过 `INSTEAD OF` 触发器的视图来实现：

```sql
UPDATE example__for_portion_of_validity
SET ...,
    start_date = ...,
    end_date = ...
WHERE ...;
```

使用此功能前，表必须有主键。

## 谓词函数

SQL 标准定义了多种时间段谓词，以内联函数形式实现：

```sql
-- "t" 和 "u" 是具有时间段 "p" 和 "q" 的表
-- 两个时间段的底层列为 "s" 和 "e"

WHERE periods.contains(t.s, t.e, 42)            -- t.p CONTAINS 42
WHERE periods.contains(t.s, t.e, u.s, u.e)      -- t.p CONTAINS u.q
WHERE periods.equals(t.s, t.e, u.s, u.e)        -- t.p EQUALS u.q
WHERE periods.overlaps(t.s, t.e, u.s, u.e)      -- t.p OVERLAPS u.q
WHERE periods.precedes(t.s, t.e, u.s, u.e)      -- t.p PRECEDES u.q
WHERE periods.succeeds(t.s, t.e, u.s, u.e)      -- t.p SUCCEEDS u.q
WHERE periods.immediately_precedes(t.s, t.e, u.s, u.e)  -- t.p IMMEDIATELY PRECEDES u.q
WHERE periods.immediately_succeeds(t.s, t.e, u.s, u.e)  -- t.p IMMEDIATELY SUCCEEDS u.q
```


## 系统版本控制表

### SYSTEM_TIME

如果时间段名为 `SYSTEM_TIME`，则适用特殊规则。列类型必须是 `date`、`timestamp without time zone` 或 `timestamp with time zone`，且用户不可修改。扩展使用触发器将起始列设为 `transaction_timestamp()`，结束列始终为 `'infinity'`。

***注意：*** 一般建议使用 `timestamp with time zone`，因为时区配置参数或夏令时变更可能导致历史记录失真。

```sql
CREATE TABLE example (
    id bigint PRIMARY KEY,
    value text
);
SELECT periods.add_system_time_period('example', 'row_start', 'row_end');
```

这些列无需预先存在——扩展会自动创建。

### 排除列

可以阻止某些列的更新触发 `SYSTEM_TIME` 值变化：

```sql
SELECT periods.add_system_time_period(
            'example',
            excluded_column_names => ARRAY['foo', 'bar']);
```

### 启用系统版本控制

```sql
SELECT periods.add_system_time_period('example', 'row_start', 'row_end');
SELECT periods.add_system_versioning('example');
```

系统会将所有变更记录到一张独立的历史表中。你也可以自行创建历史表（例如添加分区）并指定扩展使用它。

### 时态查询

SQL 标准扩展了 `FROM` 和 `JOIN` 子句以支持时间点或时间范围查询，扩展通过内联函数实现：

```sql
SELECT * FROM t__as_of('...');                       -- FOR system_time AS OF '...'
SELECT * FROM t__from_to('...', '...');              -- FOR system_time FROM '...' TO '...'
SELECT * FROM t__between('...', '...');              -- FOR system_time BETWEEN '...' AND '...'
SELECT * FROM t__between_symmetric('...', '...');    -- FOR system_time BETWEEN SYMMETRIC '...' AND '...'
```

### 访问控制

历史表及辅助函数遵循基表的所有权和访问权限。历史数据为只读。如需清理旧数据，必须先暂停系统版本控制：

```sql
BEGIN;
SELECT periods.drop_system_versioning('t');
GRANT DELETE ON TABLE t TO CURRENT_USER;
DELETE FROM t_history WHERE system_time_end < now() - interval '1 year';
SELECT periods.add_system_versioning('t');
COMMIT;
```
