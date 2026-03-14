---
title: "pgnodemx"
linkTitle: "pgnodemx"
description: "使用SQL查询获取操作系统指标"
weight: 6440
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrunchyData/pgnodemx">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrunchyData/pgnodemx</div>
    <div class="ext-card__desc">https://github.com/CrunchyData/pgnodemx</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgnodemx-1.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgnodemx-1.7.tar.gz</div>
    <div class="ext-card__desc">pgnodemx-1.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgnodemx`**](/ext/e/pgnodemx) | `1.7` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6440  | [**`pgnodemx`**](/ext/e/pgnodemx) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 6450  | [**`pg_proctab`**](/ext/e/pg_proctab) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`system_stats`](/ext/e/system_stats) [`pg_wait_sampling`](/ext/e/pg_wait_sampling) [`pgsentinel`](/ext/e/pgsentinel) [`pgmeminfo`](/ext/e/pgmeminfo) [`pgfincore`](/ext/e/pgfincore) [`prioritize`](/ext/e/prioritize) [`pg_buffercache`](/ext/e/pg_buffercache) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `pgnodemx` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `pgnodemx_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgnodemx` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el8.aarch64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el9.x86_64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el9.aarch64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el10.x86_64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| el10.aarch64 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 | AVAIL PIGSTY 1.7 2 |
| d12.x86_64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| d12.aarch64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| d13.x86_64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| d13.aarch64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u22.x86_64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u22.aarch64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u24.x86_64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
| u24.aarch64 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 | AVAIL PGDG 2.0.1 3 |
@ el8.x86_64 18 pgnodemx_18 pgnodemx_18-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 37.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgnodemx_18-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pgnodemx_18 pgnodemx_18-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgnodemx_18-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgnodemx_18 pgnodemx_18-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 37.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgnodemx_18-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pgnodemx_18 pgnodemx_18-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgnodemx_18-1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgnodemx_18 pgnodemx_18-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 35.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgnodemx_18-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pgnodemx_18 pgnodemx_18-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgnodemx_18-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgnodemx_18 pgnodemx_18-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 35.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgnodemx_18-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pgnodemx_18 pgnodemx_18-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgnodemx_18-1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgnodemx_18 pgnodemx_18-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 36.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgnodemx_18-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pgnodemx_18 pgnodemx_18-1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.7 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgnodemx_18-1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgnodemx_18 pgnodemx_18-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 35.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgnodemx_18-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pgnodemx_18 pgnodemx_18-1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.7 41.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgnodemx_18-1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb pgdg 2.0.1 95.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-2.pgdg12+1_amd64.deb pgdg 1.7 82.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb pigsty 1.7 84.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb pgdg 2.0.1 94.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-2.pgdg12+1_arm64.deb pgdg 1.7 81.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb pigsty 1.7 83.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb pgdg 2.0.1 95.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-2.pgdg13+1_amd64.deb pgdg 1.7 82.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb pigsty 1.7 84.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb pgdg 2.0.1 94.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-2.pgdg13+1_arm64.deb pgdg 1.7 81.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb pigsty 1.7 83.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb pgdg 2.0.1 94.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb pgdg 1.7 81.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb pigsty 1.7 89.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb pgdg 2.0.1 93.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb pgdg 1.7 80.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb pigsty 1.7 88.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb pgdg 2.0.1 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb pgdg 1.7 81.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-1PIGSTY~noble_amd64.deb pigsty 1.7 87.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb pgdg 2.0.1 93.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb pgdg 1.7 80.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgnodemx postgresql-18-pgnodemx_1.7-1PIGSTY~noble_arm64.deb pigsty 1.7 87.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-18-pgnodemx_1.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgnodemx_17 pgnodemx_17-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 37.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgnodemx_17-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pgnodemx_17 pgnodemx_17-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgnodemx_17-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgnodemx_17 pgnodemx_17-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 37.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgnodemx_17-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pgnodemx_17 pgnodemx_17-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgnodemx_17-1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgnodemx_17 pgnodemx_17-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 35.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgnodemx_17-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pgnodemx_17 pgnodemx_17-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgnodemx_17-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgnodemx_17 pgnodemx_17-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 35.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgnodemx_17-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pgnodemx_17 pgnodemx_17-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 41.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgnodemx_17-1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgnodemx_17 pgnodemx_17-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 36.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgnodemx_17-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pgnodemx_17 pgnodemx_17-1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.7 42.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgnodemx_17-1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgnodemx_17 pgnodemx_17-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 35.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgnodemx_17-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pgnodemx_17 pgnodemx_17-1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.7 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgnodemx_17-1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb pgdg 2.0.1 95.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-2.pgdg12+1_amd64.deb pgdg 1.7 82.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb pigsty 1.7 84.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb pgdg 2.0.1 94.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-2.pgdg12+1_arm64.deb pgdg 1.7 81.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb pigsty 1.7 83.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb pgdg 2.0.1 95.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-2.pgdg13+1_amd64.deb pgdg 1.7 82.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-2.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb pigsty 1.7 84.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb pgdg 2.0.1 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-2.pgdg13+1_arm64.deb pgdg 1.7 81.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-2.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb pigsty 1.7 83.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb pgdg 2.0.1 103.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb pgdg 1.7 88.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb pigsty 1.7 96.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb pgdg 2.0.1 101.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb pgdg 1.7 87.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb pigsty 1.7 95.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb pgdg 2.0.1 94.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb pgdg 1.7 81.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-1PIGSTY~noble_amd64.deb pigsty 1.7 87.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb pgdg 2.0.1 93.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb pgdg 1.7 80.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgnodemx postgresql-17-pgnodemx_1.7-1PIGSTY~noble_arm64.deb pigsty 1.7 87.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-17-pgnodemx_1.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgnodemx_16 pgnodemx_16-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 37.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgnodemx_16-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgnodemx_16 pgnodemx_16-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 41.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgnodemx_16-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgnodemx_16 pgnodemx_16-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 37.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgnodemx_16-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgnodemx_16 pgnodemx_16-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgnodemx_16-1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgnodemx_16 pgnodemx_16-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 35.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgnodemx_16-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgnodemx_16 pgnodemx_16-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 41.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgnodemx_16-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgnodemx_16 pgnodemx_16-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 35.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgnodemx_16-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgnodemx_16 pgnodemx_16-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 41.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgnodemx_16-1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgnodemx_16 pgnodemx_16-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 36.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgnodemx_16-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pgnodemx_16 pgnodemx_16-1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.7 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgnodemx_16-1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgnodemx_16 pgnodemx_16-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 35.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgnodemx_16-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pgnodemx_16 pgnodemx_16-1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.7 41.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgnodemx_16-1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb pgdg 2.0.1 95.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-2.pgdg12+1_amd64.deb pgdg 1.7 82.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb pigsty 1.7 84.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb pgdg 2.0.1 94.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-2.pgdg12+1_arm64.deb pgdg 1.7 81.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb pigsty 1.7 83.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb pgdg 2.0.1 95.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-2.pgdg13+1_amd64.deb pgdg 1.7 82.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-2.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb pigsty 1.7 84.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb pgdg 2.0.1 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-2.pgdg13+1_arm64.deb pgdg 1.7 81.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-2.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb pigsty 1.7 83.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb pgdg 2.0.1 103.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb pgdg 1.7 88.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb pigsty 1.7 96.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb pgdg 2.0.1 101.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb pgdg 1.7 87.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb pigsty 1.7 95.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb pgdg 2.0.1 94.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb pgdg 1.7 81.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-1PIGSTY~noble_amd64.deb pigsty 1.7 87.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb pgdg 2.0.1 93.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb pgdg 1.7 80.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgnodemx postgresql-16-pgnodemx_1.7-1PIGSTY~noble_arm64.deb pigsty 1.7 87.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-16-pgnodemx_1.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgnodemx_15 pgnodemx_15-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 38.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgnodemx_15-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgnodemx_15 pgnodemx_15-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 43.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgnodemx_15-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pgnodemx_15 pgnodemx_15-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 38.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgnodemx_15-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgnodemx_15 pgnodemx_15-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgnodemx_15-1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pgnodemx_15 pgnodemx_15-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 38.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgnodemx_15-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgnodemx_15 pgnodemx_15-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 43.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgnodemx_15-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pgnodemx_15 pgnodemx_15-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 37.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgnodemx_15-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgnodemx_15 pgnodemx_15-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgnodemx_15-1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pgnodemx_15 pgnodemx_15-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 38.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgnodemx_15-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pgnodemx_15 pgnodemx_15-1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.7 44.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgnodemx_15-1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgnodemx_15 pgnodemx_15-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 37.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgnodemx_15-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pgnodemx_15 pgnodemx_15-1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.7 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgnodemx_15-1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb pgdg 2.0.1 96.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-2.pgdg12+1_amd64.deb pgdg 1.7 83.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb pigsty 1.7 85.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb pgdg 2.0.1 95.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-2.pgdg12+1_arm64.deb pgdg 1.7 82.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb pigsty 1.7 84.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb pgdg 2.0.1 96.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-2.pgdg13+1_amd64.deb pgdg 1.7 83.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-2.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb pigsty 1.7 85.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb pgdg 2.0.1 95.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-2.pgdg13+1_arm64.deb pgdg 1.7 83.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-2.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb pigsty 1.7 84.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb pgdg 2.0.1 105.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb pgdg 1.7 90.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb pigsty 1.7 98.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb pgdg 2.0.1 103.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb pgdg 1.7 89.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb pigsty 1.7 97.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb pgdg 2.0.1 96.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb pgdg 1.7 83.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-1PIGSTY~noble_amd64.deb pigsty 1.7 89.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb pgdg 2.0.1 95.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb pgdg 1.7 82.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgnodemx postgresql-15-pgnodemx_1.7-1PIGSTY~noble_arm64.deb pigsty 1.7 89.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-15-pgnodemx_1.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgnodemx_14 pgnodemx_14-1.7-1PIGSTY.el8.x86_64.rpm pigsty 1.7 38.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgnodemx_14-1.7-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgnodemx_14 pgnodemx_14-1.7-1PGDG.rhel8.x86_64.rpm pgdg 1.7 43.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgnodemx_14-1.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pgnodemx_14 pgnodemx_14-1.7-1PIGSTY.el8.aarch64.rpm pigsty 1.7 38.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgnodemx_14-1.7-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgnodemx_14 pgnodemx_14-1.7-1PGDG.rhel8.aarch64.rpm pgdg 1.7 42.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgnodemx_14-1.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pgnodemx_14 pgnodemx_14-1.7-1PIGSTY.el9.x86_64.rpm pigsty 1.7 37.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgnodemx_14-1.7-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgnodemx_14 pgnodemx_14-1.7-1PGDG.rhel9.x86_64.rpm pgdg 1.7 43.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgnodemx_14-1.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pgnodemx_14 pgnodemx_14-1.7-1PIGSTY.el9.aarch64.rpm pigsty 1.7 37.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgnodemx_14-1.7-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgnodemx_14 pgnodemx_14-1.7-1PGDG.rhel9.aarch64.rpm pgdg 1.7 43.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgnodemx_14-1.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pgnodemx_14 pgnodemx_14-1.7-1PIGSTY.el10.x86_64.rpm pigsty 1.7 37.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgnodemx_14-1.7-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pgnodemx_14 pgnodemx_14-1.7-1PGDG.rhel10.x86_64.rpm pgdg 1.7 44.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgnodemx_14-1.7-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgnodemx_14 pgnodemx_14-1.7-1PIGSTY.el10.aarch64.rpm pigsty 1.7 37.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgnodemx_14-1.7-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pgnodemx_14 pgnodemx_14-1.7-1PGDG.rhel10.aarch64.rpm pgdg 1.7 44.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgnodemx_14-1.7-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb pgdg 2.0.1 95.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_2.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-2.pgdg12+1_amd64.deb pgdg 1.7 83.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-2.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb pigsty 1.7 85.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb pgdg 2.0.1 94.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_2.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-2.pgdg12+1_arm64.deb pgdg 1.7 82.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-2.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb pigsty 1.7 84.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb pgdg 2.0.1 95.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_2.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-2.pgdg13+1_amd64.deb pgdg 1.7 83.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-2.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb pigsty 1.7 85.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb pgdg 2.0.1 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_2.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-2.pgdg13+1_arm64.deb pgdg 1.7 82.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-2.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb pigsty 1.7 84.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb pgdg 2.0.1 103.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_2.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb pgdg 1.7 90.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb pigsty 1.7 97.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb pgdg 2.0.1 102.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_2.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb pgdg 1.7 89.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb pigsty 1.7 97.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb pgdg 2.0.1 95.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_2.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb pgdg 1.7 83.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-1PIGSTY~noble_amd64.deb pigsty 1.7 88.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb pgdg 2.0.1 94.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_2.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb pgdg 1.7 82.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgnodemx postgresql-14-pgnodemx_1.7-1PIGSTY~noble_arm64.deb pigsty 1.7 89.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgnodemx/postgresql-14-pgnodemx_1.7-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgnodemx` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgnodemx         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgnodemx` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgnodemx;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgnodemx -v 18  # PG 18
pig ext install -y pgnodemx -v 17  # PG 17
pig ext install -y pgnodemx -v 16  # PG 16
pig ext install -y pgnodemx -v 15  # PG 15
pig ext install -y pgnodemx -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgnodemx_18       # PG 18
dnf install -y pgnodemx_17       # PG 17
dnf install -y pgnodemx_16       # PG 16
dnf install -y pgnodemx_15       # PG 15
dnf install -y pgnodemx_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgnodemx   # PG 18
apt install -y postgresql-17-pgnodemx   # PG 17
apt install -y postgresql-16-pgnodemx   # PG 16
apt install -y postgresql-15-pgnodemx   # PG 15
apt install -y postgresql-14-pgnodemx   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgnodemx';
```


**创建扩展**：

```sql
CREATE EXTENSION pgnodemx;
```




## 用法

> [pgnodemx: 从 PostgreSQL 通过 SQL 访问节点操作系统指标](https://github.com/CrunchyData/pgnodemx)

pgnodemx 提供 SQL 访问操作系统级指标的能力，包括 cgroup 统计、`/proc` 文件系统数据和系统信息。需要 `pg_monitor` 角色成员身份。

### cgroup 函数

```sql
-- 检查 cgroup 支持状态
SELECT current_setting('pgnodemx.cgroup_enabled');
SELECT cgroup_mode();  -- 'legacy'、'unified'、'hybrid' 或 'disabled'

-- 读取 cgroup 标量值
SELECT cgroup_scalar_bigint('memory.current');
SELECT cgroup_scalar_float8('cpu.uclamp.max');
SELECT cgroup_scalar_text('cgroup.type');

-- 读取 cgroup 键值文件
SELECT * FROM cgroup_setof_kv('memory.stat');
SELECT * FROM cgroup_setof_kv('cpu.stat');

-- 读取 cgroup 嵌套键值文件
SELECT * FROM cgroup_setof_nkv('memory.pressure');
SELECT * FROM cgroup_setof_nkv('cpu.pressure');

-- 获取 cgroup 路径和进程数
SELECT * FROM cgroup_path();
SELECT cgroup_process_count();
```

### /proc 函数

```sql
SELECT * FROM proc_diskstats();       -- /proc/diskstats
SELECT * FROM proc_mountinfo();       -- /proc/self/mountinfo
SELECT * FROM proc_meminfo();         -- /proc/meminfo
SELECT * FROM proc_network_stats();   -- /proc/self/net/dev
SELECT * FROM proc_pid_io();          -- 所有 PG 进程的 /proc/<pid>/io
SELECT * FROM proc_pid_cmdline();     -- 所有 PG 进程的命令行
SELECT * FROM proc_pid_stat();        -- 所有 PG 进程的 /proc/<pid>/stat
SELECT * FROM proc_cputime();         -- /proc/stat 的第一行
SELECT * FROM proc_loadavg();         -- /proc/loadavg
```

### 系统信息

```sql
SELECT * FROM fsinfo('/pgdata');      -- 路径的文件系统信息
SELECT fips_mode();                   -- OpenSSL FIPS 模式状态
SELECT openssl_version();             -- OpenSSL 版本
SELECT exec_path();                   -- 当前 PostgreSQL 可执行文件路径
SELECT kpages_to_bytes(1024);         -- 将内核页转换为字节
SELECT * FROM stat_file('/path');     -- 文件的 uid、gid、mode 信息
```

### 环境变量

```sql
SELECT envvar_text('PGDATA');
SELECT envvar_bigint('PGPORT');
```

### Kubernetes DownwardAPI

```sql
SELECT * FROM kdapi_setof_kv('labels');
SELECT kdapi_scalar_bigint('cpu_limit');
```

### 配置

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pgnodemx.cgroup_enabled` | `on` | 启用 cgroup 函数 |
| `pgnodemx.containerized` | `off` | 强制使用容器化 cgroup 路径 |
| `pgnodemx.cgrouproot` | `/sys/fs/cgroup` | cgroup 挂载位置 |
| `pgnodemx.kdapi_enabled` | `on` | 启用 Kubernetes DownwardAPI |
| `pgnodemx.kdapi_path` | `/etc/podinfo` | DownwardAPI 文件位置 |
