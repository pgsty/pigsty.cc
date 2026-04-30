---
title: "pgtt"
linkTitle: "pgtt"
description: "类似Oracle的全局临时表功能"
weight: 9110
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/darold/pgtt">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">darold/pgtt</div>
    <div class="ext-card__desc">https://github.com/darold/pgtt</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgtt-4.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgtt-4.4.tar.gz</div>
    <div class="ext-card__desc">pgtt-4.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgtt`**](/ext/e/pgtt) | `4.4` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9110  | [**`pgtt`**](/ext/e/pgtt) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgtt_schema` |
{.ext-table}

| **相关扩展** | [`oracle_fdw`](/ext/e/oracle_fdw) [`orafce`](/ext/e/orafce) [`session_variable`](/ext/e/session_variable) [`pg_statement_rollback`](/ext/e/pg_statement_rollback) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_dbms_lock`](/ext/e/pg_dbms_lock) [`pg_dbms_job`](/ext/e/pg_dbms_job) [`periods`](/ext/e/periods) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.4` | {{< pgvers "18,17,16,15,14" >}} | `pgtt` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.4` | {{< pgvers "18,17,16,15,14" >}} | `pgtt_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgtt` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 4 | AVAIL PGDG 4.4 6 | AVAIL PGDG 4.4 8 | AVAIL PGDG 4.4 10 |
| el8.aarch64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 4 | AVAIL PGDG 4.4 6 | AVAIL PGDG 4.4 8 | AVAIL PGDG 4.4 8 |
| el9.x86_64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 4 | AVAIL PGDG 4.4 6 | AVAIL PGDG 4.4 8 | AVAIL PGDG 4.4 9 |
| el9.aarch64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 4 | AVAIL PGDG 4.4 6 | AVAIL PGDG 4.4 8 | AVAIL PGDG 4.4 8 |
| el10.x86_64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 3 | AVAIL PGDG 4.4 3 | AVAIL PGDG 4.4 3 | AVAIL PGDG 4.4 3 |
| el10.aarch64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 3 | AVAIL PGDG 4.4 3 | AVAIL PGDG 4.4 3 | AVAIL PGDG 4.4 3 |
| d12.x86_64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 |
| d12.aarch64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 |
| d13.x86_64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 |
| d13.aarch64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 |
| u22.x86_64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 |
| u22.aarch64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 |
| u24.x86_64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 |
| u24.aarch64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 | AVAIL PGDG 4.4 2 |
| u26.x86_64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 |
| u26.aarch64 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 | AVAIL PGDG 4.4 1 |
@ el8.x86_64 18 pgtt_18 pgtt_18-4.4-1PGDG.rhel8.x86_64.rpm pgdg 4.4 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgtt_18-4.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgtt_18 pgtt_18-4.4-1PGDG.rhel8.aarch64.rpm pgdg 4.4 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgtt_18-4.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgtt_18 pgtt_18-4.4-1PGDG.rhel9.x86_64.rpm pgdg 4.4 37.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgtt_18-4.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgtt_18 pgtt_18-4.4-1PGDG.rhel9.aarch64.rpm pgdg 4.4 36.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgtt_18-4.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgtt_18 pgtt_18-4.4-1PGDG.rhel10.x86_64.rpm pgdg 4.4 38.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgtt_18-4.4-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgtt_18 pgtt_18-4.4-1PGDG.rhel10.aarch64.rpm pgdg 4.4 37.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgtt_18-4.4-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg12+1_amd64.deb pgdg 4.4 58.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg12+1_arm64.deb pgdg 4.4 56.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg13+1_amd64.deb pgdg 4.4 57.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg13+1_arm64.deb pgdg 4.4 56.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg22.04+1_amd64.deb pgdg 4.4 54.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg22.04+1_arm64.deb pgdg 4.4 52.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg24.04+1_amd64.deb pgdg 4.4 53.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg24.04+1_arm64.deb pgdg 4.4 51.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg26.04+1_amd64.deb pgdg 4.4 52.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pgtt postgresql-18-pgtt_4.4-2.pgdg26.04+1_arm64.deb pgdg 4.4 51.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-18-pgtt_4.4-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pgtt_17 pgtt_17-4.4-1PGDG.rhel8.x86_64.rpm pgdg 4.4 38.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgtt_17-4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgtt_17 pgtt_17-4.3-1PGDG.rhel8.x86_64.rpm pgdg 4.3 38.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgtt_17-4.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgtt_17 pgtt_17-4.0-3PGDG.rhel8.x86_64.rpm pgdg 4.0 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgtt_17-4.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgtt_17 pgtt_17-4.0-2PGDG.rhel8.x86_64.rpm pgdg 4.0 36.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgtt_17-4.0-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgtt_17 pgtt_17-4.4-1PGDG.rhel8.aarch64.rpm pgdg 4.4 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgtt_17-4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgtt_17 pgtt_17-4.3-1PGDG.rhel8.aarch64.rpm pgdg 4.3 36.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgtt_17-4.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgtt_17 pgtt_17-4.0-3PGDG.rhel8.aarch64.rpm pgdg 4.0 35.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgtt_17-4.0-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgtt_17 pgtt_17-4.0-2PGDG.rhel8.aarch64.rpm pgdg 4.0 35.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgtt_17-4.0-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgtt_17 pgtt_17-4.4-1PGDG.rhel9.x86_64.rpm pgdg 4.4 37.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgtt_17-4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgtt_17 pgtt_17-4.3-1PGDG.rhel9.x86_64.rpm pgdg 4.3 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgtt_17-4.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgtt_17 pgtt_17-4.0-3PGDG.rhel9.x86_64.rpm pgdg 4.0 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgtt_17-4.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgtt_17 pgtt_17-4.0-2PGDG.rhel9.x86_64.rpm pgdg 4.0 36.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgtt_17-4.0-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgtt_17 pgtt_17-4.4-1PGDG.rhel9.aarch64.rpm pgdg 4.4 36.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgtt_17-4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgtt_17 pgtt_17-4.3-1PGDG.rhel9.aarch64.rpm pgdg 4.3 35.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgtt_17-4.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgtt_17 pgtt_17-4.0-3PGDG.rhel9.aarch64.rpm pgdg 4.0 34.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgtt_17-4.0-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgtt_17 pgtt_17-4.0-2PGDG.rhel9.aarch64.rpm pgdg 4.0 35.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgtt_17-4.0-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgtt_17 pgtt_17-4.4-1PGDG.rhel10.x86_64.rpm pgdg 4.4 38.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgtt_17-4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgtt_17 pgtt_17-4.3-1PGDG.rhel10.x86_64.rpm pgdg 4.3 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgtt_17-4.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgtt_17 pgtt_17-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 36.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgtt_17-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgtt_17 pgtt_17-4.4-1PGDG.rhel10.aarch64.rpm pgdg 4.4 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgtt_17-4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgtt_17 pgtt_17-4.3-1PGDG.rhel10.aarch64.rpm pgdg 4.3 36.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgtt_17-4.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgtt_17 pgtt_17-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgtt_17-4.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg12+1_amd64.deb pgdg 4.4 58.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgtt postgresql-17-pgtt_4.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0 57.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtt/postgresql-17-pgtt_4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg12+1_arm64.deb pgdg 4.4 56.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgtt postgresql-17-pgtt_4.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0 56.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtt/postgresql-17-pgtt_4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg13+1_amd64.deb pgdg 4.4 57.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg13+1_arm64.deb pgdg 4.4 56.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg22.04+1_amd64.deb pgdg 4.4 60.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgtt postgresql-17-pgtt_4.0-1PIGSTY~jammy_amd64.deb pigsty 4.0 56.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtt/postgresql-17-pgtt_4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg22.04+1_arm64.deb pgdg 4.4 59.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgtt postgresql-17-pgtt_4.0-1PIGSTY~jammy_arm64.deb pigsty 4.0 55.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtt/postgresql-17-pgtt_4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg24.04+1_amd64.deb pgdg 4.4 53.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgtt postgresql-17-pgtt_4.0-1PIGSTY~noble_amd64.deb pigsty 4.0 49.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtt/postgresql-17-pgtt_4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg24.04+1_arm64.deb pgdg 4.4 51.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgtt postgresql-17-pgtt_4.0-1PIGSTY~noble_arm64.deb pigsty 4.0 48.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtt/postgresql-17-pgtt_4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg26.04+1_amd64.deb pgdg 4.4 52.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pgtt postgresql-17-pgtt_4.4-2.pgdg26.04+1_arm64.deb pgdg 4.4 51.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-17-pgtt_4.4-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pgtt_16 pgtt_16-4.4-1PGDG.rhel8.x86_64.rpm pgdg 4.4 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgtt_16-4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgtt_16 pgtt_16-4.3-1PGDG.rhel8.x86_64.rpm pgdg 4.3 38.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgtt_16-4.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgtt_16 pgtt_16-4.0-3PGDG.rhel8.x86_64.rpm pgdg 4.0 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgtt_16-4.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgtt_16 pgtt_16-4.0-1PGDG.rhel8.x86_64.rpm pgdg 4.0 36.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgtt_16-4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgtt_16 pgtt_16-3.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgtt_16-3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgtt_16 pgtt_16-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 33.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgtt_16-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgtt_16 pgtt_16-4.4-1PGDG.rhel8.aarch64.rpm pgdg 4.4 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgtt_16-4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgtt_16 pgtt_16-4.3-1PGDG.rhel8.aarch64.rpm pgdg 4.3 36.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgtt_16-4.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgtt_16 pgtt_16-4.0-3PGDG.rhel8.aarch64.rpm pgdg 4.0 35.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgtt_16-4.0-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgtt_16 pgtt_16-4.0-1PGDG.rhel8.aarch64.rpm pgdg 4.0 35.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgtt_16-4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgtt_16 pgtt_16-3.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgtt_16-3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgtt_16 pgtt_16-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgtt_16-3.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgtt_16 pgtt_16-4.4-1PGDG.rhel9.x86_64.rpm pgdg 4.4 37.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgtt_16-4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgtt_16 pgtt_16-4.3-1PGDG.rhel9.x86_64.rpm pgdg 4.3 37.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgtt_16-4.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgtt_16 pgtt_16-4.0-3PGDG.rhel9.x86_64.rpm pgdg 4.0 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgtt_16-4.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgtt_16 pgtt_16-4.0-1PGDG.rhel9.x86_64.rpm pgdg 4.0 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgtt_16-4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgtt_16 pgtt_16-3.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgtt_16-3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgtt_16 pgtt_16-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgtt_16-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgtt_16 pgtt_16-4.4-1PGDG.rhel9.aarch64.rpm pgdg 4.4 36.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgtt_16-4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgtt_16 pgtt_16-4.3-1PGDG.rhel9.aarch64.rpm pgdg 4.3 35.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgtt_16-4.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgtt_16 pgtt_16-4.0-3PGDG.rhel9.aarch64.rpm pgdg 4.0 34.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgtt_16-4.0-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgtt_16 pgtt_16-4.0-1PGDG.rhel9.aarch64.rpm pgdg 4.0 34.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgtt_16-4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgtt_16 pgtt_16-3.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgtt_16-3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgtt_16 pgtt_16-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgtt_16-3.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgtt_16 pgtt_16-4.4-1PGDG.rhel10.x86_64.rpm pgdg 4.4 38.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgtt_16-4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgtt_16 pgtt_16-4.3-1PGDG.rhel10.x86_64.rpm pgdg 4.3 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgtt_16-4.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgtt_16 pgtt_16-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 36.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgtt_16-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgtt_16 pgtt_16-4.4-1PGDG.rhel10.aarch64.rpm pgdg 4.4 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgtt_16-4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgtt_16 pgtt_16-4.3-1PGDG.rhel10.aarch64.rpm pgdg 4.3 36.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgtt_16-4.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgtt_16 pgtt_16-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgtt_16-4.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg12+1_amd64.deb pgdg 4.4 58.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgtt postgresql-16-pgtt_4.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0 57.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtt/postgresql-16-pgtt_4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg12+1_arm64.deb pgdg 4.4 56.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgtt postgresql-16-pgtt_4.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0 56.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtt/postgresql-16-pgtt_4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg13+1_amd64.deb pgdg 4.4 57.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg13+1_arm64.deb pgdg 4.4 56.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg22.04+1_amd64.deb pgdg 4.4 60.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgtt postgresql-16-pgtt_4.0-1PIGSTY~jammy_amd64.deb pigsty 4.0 56.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtt/postgresql-16-pgtt_4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg22.04+1_arm64.deb pgdg 4.4 59.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgtt postgresql-16-pgtt_4.0-1PIGSTY~jammy_arm64.deb pigsty 4.0 55.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtt/postgresql-16-pgtt_4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg24.04+1_amd64.deb pgdg 4.4 53.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgtt postgresql-16-pgtt_4.0-1PIGSTY~noble_amd64.deb pigsty 4.0 49.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtt/postgresql-16-pgtt_4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg24.04+1_arm64.deb pgdg 4.4 52.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgtt postgresql-16-pgtt_4.0-1PIGSTY~noble_arm64.deb pigsty 4.0 48.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtt/postgresql-16-pgtt_4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg26.04+1_amd64.deb pgdg 4.4 52.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pgtt postgresql-16-pgtt_4.4-2.pgdg26.04+1_arm64.deb pgdg 4.4 51.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-16-pgtt_4.4-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pgtt_15 pgtt_15-4.4-1PGDG.rhel8.x86_64.rpm pgdg 4.4 38.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgtt_15-4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgtt_15 pgtt_15-4.3-1PGDG.rhel8.x86_64.rpm pgdg 4.3 38.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgtt_15-4.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgtt_15 pgtt_15-4.0-3PGDG.rhel8.x86_64.rpm pgdg 4.0 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgtt_15-4.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgtt_15 pgtt_15-4.0-1PGDG.rhel8.x86_64.rpm pgdg 4.0 37.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgtt_15-4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgtt_15 pgtt_15-3.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1 34.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgtt_15-3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgtt_15 pgtt_15-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgtt_15-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgtt_15 pgtt_15-2.10-1.rhel8.x86_64.rpm pgdg 2.10 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgtt_15-2.10-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgtt_15 pgtt_15-2.9-1.rhel8.x86_64.rpm pgdg 2.9 69.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgtt_15-2.9-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgtt_15 pgtt_15-4.4-1PGDG.rhel8.aarch64.rpm pgdg 4.4 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgtt_15-4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgtt_15 pgtt_15-4.3-1PGDG.rhel8.aarch64.rpm pgdg 4.3 37.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgtt_15-4.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgtt_15 pgtt_15-4.0-3PGDG.rhel8.aarch64.rpm pgdg 4.0 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgtt_15-4.0-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgtt_15 pgtt_15-4.0-1PGDG.rhel8.aarch64.rpm pgdg 4.0 35.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgtt_15-4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgtt_15 pgtt_15-3.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgtt_15-3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgtt_15 pgtt_15-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgtt_15-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgtt_15 pgtt_15-2.10-1.rhel8.aarch64.rpm pgdg 2.10 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgtt_15-2.10-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgtt_15 pgtt_15-2.9-1.rhel8.aarch64.rpm pgdg 2.9 67.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgtt_15-2.9-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgtt_15 pgtt_15-4.4-1PGDG.rhel9.x86_64.rpm pgdg 4.4 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgtt_15-4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgtt_15 pgtt_15-4.3-1PGDG.rhel9.x86_64.rpm pgdg 4.3 38.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgtt_15-4.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgtt_15 pgtt_15-4.0-3PGDG.rhel9.x86_64.rpm pgdg 4.0 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgtt_15-4.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgtt_15 pgtt_15-4.0-1PGDG.rhel9.x86_64.rpm pgdg 4.0 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgtt_15-4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgtt_15 pgtt_15-3.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1 34.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgtt_15-3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgtt_15 pgtt_15-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 34.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgtt_15-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgtt_15 pgtt_15-2.10-1.rhel9.x86_64.rpm pgdg 2.10 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgtt_15-2.10-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgtt_15 pgtt_15-2.9-1.rhel9.x86_64.rpm pgdg 2.9 70.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgtt_15-2.9-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgtt_15 pgtt_15-4.4-1PGDG.rhel9.aarch64.rpm pgdg 4.4 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgtt_15-4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgtt_15 pgtt_15-4.3-1PGDG.rhel9.aarch64.rpm pgdg 4.3 36.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgtt_15-4.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgtt_15 pgtt_15-4.0-3PGDG.rhel9.aarch64.rpm pgdg 4.0 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgtt_15-4.0-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgtt_15 pgtt_15-4.0-1PGDG.rhel9.aarch64.rpm pgdg 4.0 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgtt_15-4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgtt_15 pgtt_15-3.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgtt_15-3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgtt_15 pgtt_15-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgtt_15-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgtt_15 pgtt_15-2.10-1.rhel9.aarch64.rpm pgdg 2.10 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgtt_15-2.10-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgtt_15 pgtt_15-2.9-1.rhel9.aarch64.rpm pgdg 2.9 69.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgtt_15-2.9-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgtt_15 pgtt_15-4.4-1PGDG.rhel10.x86_64.rpm pgdg 4.4 38.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgtt_15-4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgtt_15 pgtt_15-4.3-1PGDG.rhel10.x86_64.rpm pgdg 4.3 38.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgtt_15-4.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgtt_15 pgtt_15-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 37.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgtt_15-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgtt_15 pgtt_15-4.4-1PGDG.rhel10.aarch64.rpm pgdg 4.4 37.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgtt_15-4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgtt_15 pgtt_15-4.3-1PGDG.rhel10.aarch64.rpm pgdg 4.3 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgtt_15-4.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgtt_15 pgtt_15-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 36.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgtt_15-4.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg12+1_amd64.deb pgdg 4.4 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgtt postgresql-15-pgtt_4.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0 58.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtt/postgresql-15-pgtt_4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg12+1_arm64.deb pgdg 4.4 57.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgtt postgresql-15-pgtt_4.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0 56.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtt/postgresql-15-pgtt_4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg13+1_amd64.deb pgdg 4.4 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg13+1_arm64.deb pgdg 4.4 57.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg22.04+1_amd64.deb pgdg 4.4 61.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgtt postgresql-15-pgtt_4.0-1PIGSTY~jammy_amd64.deb pigsty 4.0 57.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtt/postgresql-15-pgtt_4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg22.04+1_arm64.deb pgdg 4.4 60.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgtt postgresql-15-pgtt_4.0-1PIGSTY~jammy_arm64.deb pigsty 4.0 56.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtt/postgresql-15-pgtt_4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg24.04+1_amd64.deb pgdg 4.4 54.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgtt postgresql-15-pgtt_4.0-1PIGSTY~noble_amd64.deb pigsty 4.0 50.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtt/postgresql-15-pgtt_4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg24.04+1_arm64.deb pgdg 4.4 52.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgtt postgresql-15-pgtt_4.0-1PIGSTY~noble_arm64.deb pigsty 4.0 49.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtt/postgresql-15-pgtt_4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg26.04+1_amd64.deb pgdg 4.4 54.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pgtt postgresql-15-pgtt_4.4-2.pgdg26.04+1_arm64.deb pgdg 4.4 52.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-15-pgtt_4.4-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pgtt_14 pgtt_14-4.4-1PGDG.rhel8.x86_64.rpm pgdg 4.4 38.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-4.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgtt_14 pgtt_14-4.3-1PGDG.rhel8.x86_64.rpm pgdg 4.3 38.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-4.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgtt_14 pgtt_14-4.0-3PGDG.rhel8.x86_64.rpm pgdg 4.0 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-4.0-3PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgtt_14 pgtt_14-4.0-1PGDG.rhel8.x86_64.rpm pgdg 4.0 37.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-4.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgtt_14 pgtt_14-3.1-1PGDG.rhel8.x86_64.rpm pgdg 3.1 34.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-3.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgtt_14 pgtt_14-3.0-1PGDG.rhel8.x86_64.rpm pgdg 3.0 33.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-3.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgtt_14 pgtt_14-2.10-1.rhel8.x86_64.rpm pgdg 2.10 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-2.10-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgtt_14 pgtt_14-2.9-1.rhel8.x86_64.rpm pgdg 2.9 69.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-2.9-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgtt_14 pgtt_14-2.8-1.rhel8.x86_64.rpm pgdg 2.8 68.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-2.8-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgtt_14 pgtt_14-2.6-1.rhel8.x86_64.rpm pgdg 2.6 68.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgtt_14-2.6-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgtt_14 pgtt_14-4.4-1PGDG.rhel8.aarch64.rpm pgdg 4.4 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgtt_14-4.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgtt_14 pgtt_14-4.3-1PGDG.rhel8.aarch64.rpm pgdg 4.3 37.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgtt_14-4.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgtt_14 pgtt_14-4.0-3PGDG.rhel8.aarch64.rpm pgdg 4.0 35.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgtt_14-4.0-3PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgtt_14 pgtt_14-4.0-1PGDG.rhel8.aarch64.rpm pgdg 4.0 35.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgtt_14-4.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgtt_14 pgtt_14-3.1-1PGDG.rhel8.aarch64.rpm pgdg 3.1 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgtt_14-3.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgtt_14 pgtt_14-3.0-1PGDG.rhel8.aarch64.rpm pgdg 3.0 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgtt_14-3.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgtt_14 pgtt_14-2.10-1.rhel8.aarch64.rpm pgdg 2.10 31.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgtt_14-2.10-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgtt_14 pgtt_14-2.9-1.rhel8.aarch64.rpm pgdg 2.9 67.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgtt_14-2.9-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgtt_14 pgtt_14-4.4-1PGDG.rhel9.x86_64.rpm pgdg 4.4 38.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgtt_14-4.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgtt_14 pgtt_14-4.3-1PGDG.rhel9.x86_64.rpm pgdg 4.3 38.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgtt_14-4.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgtt_14 pgtt_14-4.0-3PGDG.rhel9.x86_64.rpm pgdg 4.0 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgtt_14-4.0-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgtt_14 pgtt_14-4.0-1PGDG.rhel9.x86_64.rpm pgdg 4.0 37.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgtt_14-4.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgtt_14 pgtt_14-3.1-1PGDG.rhel9.x86_64.rpm pgdg 3.1 34.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgtt_14-3.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgtt_14 pgtt_14-3.0-1PGDG.rhel9.x86_64.rpm pgdg 3.0 34.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgtt_14-3.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgtt_14 pgtt_14-2.10-1.rhel9.x86_64.rpm pgdg 2.10 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgtt_14-2.10-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgtt_14 pgtt_14-2.9-1.rhel9.x86_64.rpm pgdg 2.9 70.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgtt_14-2.9-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgtt_14 pgtt_14-2.8-1.rhel9.x86_64.rpm pgdg 2.8 70.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgtt_14-2.8-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgtt_14 pgtt_14-4.4-1PGDG.rhel9.aarch64.rpm pgdg 4.4 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgtt_14-4.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgtt_14 pgtt_14-4.3-1PGDG.rhel9.aarch64.rpm pgdg 4.3 36.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgtt_14-4.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgtt_14 pgtt_14-4.0-3PGDG.rhel9.aarch64.rpm pgdg 4.0 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgtt_14-4.0-3PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgtt_14 pgtt_14-4.0-1PGDG.rhel9.aarch64.rpm pgdg 4.0 35.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgtt_14-4.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgtt_14 pgtt_14-3.1-1PGDG.rhel9.aarch64.rpm pgdg 3.1 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgtt_14-3.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgtt_14 pgtt_14-3.0-1PGDG.rhel9.aarch64.rpm pgdg 3.0 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgtt_14-3.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgtt_14 pgtt_14-2.10-1.rhel9.aarch64.rpm pgdg 2.10 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgtt_14-2.10-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgtt_14 pgtt_14-2.9-1.rhel9.aarch64.rpm pgdg 2.9 69.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgtt_14-2.9-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgtt_14 pgtt_14-4.4-1PGDG.rhel10.x86_64.rpm pgdg 4.4 38.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgtt_14-4.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgtt_14 pgtt_14-4.3-1PGDG.rhel10.x86_64.rpm pgdg 4.3 38.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgtt_14-4.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgtt_14 pgtt_14-4.1-1PGDG.rhel10.x86_64.rpm pgdg 4.1 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgtt_14-4.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgtt_14 pgtt_14-4.4-1PGDG.rhel10.aarch64.rpm pgdg 4.4 37.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgtt_14-4.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgtt_14 pgtt_14-4.3-1PGDG.rhel10.aarch64.rpm pgdg 4.3 37.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgtt_14-4.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgtt_14 pgtt_14-4.1-1PGDG.rhel10.aarch64.rpm pgdg 4.1 36.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgtt_14-4.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg12+1_amd64.deb pgdg 4.4 58.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgtt postgresql-14-pgtt_4.0-1PIGSTY~bookworm_amd64.deb pigsty 4.0 57.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtt/postgresql-14-pgtt_4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg12+1_arm64.deb pgdg 4.4 57.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgtt postgresql-14-pgtt_4.0-1PIGSTY~bookworm_arm64.deb pigsty 4.0 56.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgtt/postgresql-14-pgtt_4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg13+1_amd64.deb pgdg 4.4 58.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg13+1_arm64.deb pgdg 4.4 57.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg22.04+1_amd64.deb pgdg 4.4 61.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgtt postgresql-14-pgtt_4.0-1PIGSTY~jammy_amd64.deb pigsty 4.0 57.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtt/postgresql-14-pgtt_4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg22.04+1_arm64.deb pgdg 4.4 60.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgtt postgresql-14-pgtt_4.0-1PIGSTY~jammy_arm64.deb pigsty 4.0 56.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgtt/postgresql-14-pgtt_4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg24.04+1_amd64.deb pgdg 4.4 54.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgtt postgresql-14-pgtt_4.0-1PIGSTY~noble_amd64.deb pigsty 4.0 50.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtt/postgresql-14-pgtt_4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg24.04+1_arm64.deb pgdg 4.4 52.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgtt postgresql-14-pgtt_4.0-1PIGSTY~noble_arm64.deb pigsty 4.0 49.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgtt/postgresql-14-pgtt_4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg26.04+1_amd64.deb pgdg 4.4 54.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pgtt postgresql-14-pgtt_4.4-2.pgdg26.04+1_arm64.deb pgdg 4.4 52.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgtt/postgresql-14-pgtt_4.4-2.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgtt` 扩展的 DEB 包：

```bash
pig build pkg pgtt         # 构建 DEB 包
```


## 安装

您可以直接安装 `pgtt` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgtt;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgtt -v 18  # PG 18
pig ext install -y pgtt -v 17  # PG 17
pig ext install -y pgtt -v 16  # PG 16
pig ext install -y pgtt -v 15  # PG 15
pig ext install -y pgtt -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgtt_18       # PG 18
dnf install -y pgtt_17       # PG 17
dnf install -y pgtt_16       # PG 16
dnf install -y pgtt_15       # PG 15
dnf install -y pgtt_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgtt   # PG 18
apt install -y postgresql-17-pgtt   # PG 17
apt install -y postgresql-16-pgtt   # PG 16
apt install -y postgresql-15-pgtt   # PG 15
apt install -y postgresql-14-pgtt   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgtt';
```


**创建扩展**：

```sql
CREATE EXTENSION pgtt;
```



## 用法

> [pgtt: 为 PostgreSQL 添加全局临时表功能的扩展](https://github.com/darold/pgtt)

### 创建全局临时表

```sql
CREATE EXTENSION pgtt;

-- ON COMMIT PRESERVE ROWS：数据在会话内跨事务保持
CREATE GLOBAL TEMPORARY TABLE test_gtt (
    id integer,
    lbl text
) ON COMMIT PRESERVE ROWS;

-- ON COMMIT DELETE ROWS：数据在事务提交时删除
CREATE GLOBAL TEMPORARY TABLE session_data (
    id integer,
    value text
) ON COMMIT DELETE ROWS;
```

`GLOBAL` 关键字也可以作为注释使用以避免警告：

```sql
CREATE /*GLOBAL*/ TEMPORARY TABLE test_gtt (
    LIKE other_table INCLUDING DEFAULTS INCLUDING CONSTRAINTS INCLUDING INDEXES
) ON COMMIT PRESERVE ROWS;
```

### CREATE AS 形式

```sql
CREATE /*GLOBAL*/ TEMPORARY TABLE gtt_copy
AS SELECT * FROM source_table WITH DATA;
```

### 使用全局临时表

```sql
INSERT INTO test_gtt VALUES (1, 'one'), (2, 'two');
SELECT * FROM test_gtt;  -- 仅在当前会话中可见
```

### 创建索引

```sql
CREATE INDEX ON test_gtt (id);
```

### 约束

支持除外键以外的所有约束：

```sql
CREATE GLOBAL TEMPORARY TABLE t2 (
    c1 serial PRIMARY KEY,
    c2 VARCHAR(50) UNIQUE NOT NULL,
    c3 boolean DEFAULT false
);
```

### 删除

```sql
DROP TABLE test_gtt;  -- 即使其他会话正在使用也可以删除
```

### 配置

```sql
SET pgtt.enabled TO off;   -- 禁用 GTT 重路由
SET pgtt.enabled TO on;    -- 重新启用 GTT 重路由
```

### 关键行为

- GTT 内容是会话局部的；其他会话无法看到您的数据
- 表结构是持久的（对所有用户可见），但数据是按会话的
- 需要通过 `session_preload_libraries = 'pgtt'` 加载
- 不支持对 GTT 进行分区
