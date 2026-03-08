---
title: "bgw_replstatus"
linkTitle: "bgw_replstatus"
description: "用于汇报本机主从状态的后台工作进程"
weight: 6510
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/mhagander/bgw_replstatus">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">mhagander/bgw_replstatus</div>
    <div class="ext-card__desc">https://github.com/mhagander/bgw_replstatus</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`bgw_replstatus`**](/ext/e/bgw_replstatus) | `1.0.8` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6510  | [**`bgw_replstatus`**](/ext/e/bgw_replstatus) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgautofailover`](/ext/e/pgautofailover) [`pglogical`](/ext/e/pglogical) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pgpool_recovery`](/ext/e/pgpool_recovery) [`pgsentinel`](/ext/e/pgsentinel) [`pglogical_origin`](/ext/e/pglogical_origin) [`repmgr`](/ext/e/repmgr) [`pg_jobmon`](/ext/e/pg_jobmon) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.8` | {{< pgvers "18,17,16,15,14" >}} | `bgw_replstatus` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.8` | {{< pgvers "18,17,16,15,14" >}} | `bgw_replstatus_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.8` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-bgw-replstatus` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 3 |
| el8.aarch64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 2 |
| el9.x86_64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 3 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 2 |
| el9.aarch64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 2 | AVAIL PGDG 1.0.8 2 |
| el10.x86_64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
| el10.aarch64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
| d12.x86_64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
| d12.aarch64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
| d13.x86_64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
| d13.aarch64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
| u22.x86_64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
| u22.aarch64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
| u24.x86_64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
| u24.aarch64 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 | AVAIL PGDG 1.0.8 1 |
@ el8.x86_64 18 bgw_replstatus_18 bgw_replstatus_18-1.0.8-1PGDG.rhel8.x86_64.rpm pgdg 1.0.8 16.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/bgw_replstatus_18-1.0.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 bgw_replstatus_18 bgw_replstatus_18-1.0.8-1PGDG.rhel8.aarch64.rpm pgdg 1.0.8 15.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/bgw_replstatus_18-1.0.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 bgw_replstatus_18 bgw_replstatus_18-1.0.8-1PGDG.rhel9.x86_64.rpm pgdg 1.0.8 15.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/bgw_replstatus_18-1.0.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 bgw_replstatus_18 bgw_replstatus_18-1.0.8-1PGDG.rhel9.aarch64.rpm pgdg 1.0.8 14.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/bgw_replstatus_18-1.0.8-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 bgw_replstatus_18 bgw_replstatus_18-1.0.8-1PGDG.rhel10.x86_64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/bgw_replstatus_18-1.0.8-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 bgw_replstatus_18 bgw_replstatus_18-1.0.8-1PGDG.rhel10.aarch64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/bgw_replstatus_18-1.0.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-bgw-replstatus postgresql-18-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-18-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-bgw-replstatus postgresql-18-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb pgdg 1.0.8 14.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-18-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-bgw-replstatus postgresql-18-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-18-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-bgw-replstatus postgresql-18-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb pgdg 1.0.8 14.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-18-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-bgw-replstatus postgresql-18-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb pgdg 1.0.8 15.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-18-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-bgw-replstatus postgresql-18-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb pgdg 1.0.8 14.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-18-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-bgw-replstatus postgresql-18-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-18-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-bgw-replstatus postgresql-18-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb pgdg 1.0.8 14.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-18-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.8-1PGDG.rhel8.x86_64.rpm pgdg 1.0.8 16.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/bgw_replstatus_17-1.0.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.6-4PGDG.rhel8.x86_64.rpm pgdg 1.0.6 15.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/bgw_replstatus_17-1.0.6-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.8-1PGDG.rhel8.aarch64.rpm pgdg 1.0.8 15.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/bgw_replstatus_17-1.0.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.6-4PGDG.rhel8.aarch64.rpm pgdg 1.0.6 15.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/bgw_replstatus_17-1.0.6-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.8-1PGDG.rhel9.x86_64.rpm pgdg 1.0.8 15.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/bgw_replstatus_17-1.0.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.6-4PGDG.rhel9.x86_64.rpm pgdg 1.0.6 13.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/bgw_replstatus_17-1.0.6-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.8-1PGDG.rhel9.aarch64.rpm pgdg 1.0.8 15.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/bgw_replstatus_17-1.0.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.6-4PGDG.rhel9.aarch64.rpm pgdg 1.0.6 13.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/bgw_replstatus_17-1.0.6-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.8-1PGDG.rhel10.x86_64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/bgw_replstatus_17-1.0.8-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 bgw_replstatus_17 bgw_replstatus_17-1.0.8-1PGDG.rhel10.aarch64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/bgw_replstatus_17-1.0.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-bgw-replstatus postgresql-17-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-17-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-bgw-replstatus postgresql-17-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-17-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-bgw-replstatus postgresql-17-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-17-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-bgw-replstatus postgresql-17-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-17-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-bgw-replstatus postgresql-17-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb pgdg 1.0.8 15.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-17-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-bgw-replstatus postgresql-17-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb pgdg 1.0.8 15.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-17-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-bgw-replstatus postgresql-17-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-17-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-bgw-replstatus postgresql-17-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-17-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.8-1PGDG.rhel8.x86_64.rpm pgdg 1.0.8 16.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/bgw_replstatus_16-1.0.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.6-2.rhel8.1.x86_64.rpm pgdg 1.0.6 15.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/bgw_replstatus_16-1.0.6-2.rhel8.1.x86_64.rpm
@ el8.aarch64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.8-1PGDG.rhel8.aarch64.rpm pgdg 1.0.8 15.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/bgw_replstatus_16-1.0.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.6-2.rhel8.1.aarch64.rpm pgdg 1.0.6 15.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/bgw_replstatus_16-1.0.6-2.rhel8.1.aarch64.rpm
@ el9.x86_64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.8-1PGDG.rhel9.x86_64.rpm pgdg 1.0.8 15.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/bgw_replstatus_16-1.0.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.6-3PGDG.rhel9.x86_64.rpm pgdg 1.0.6 13.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/bgw_replstatus_16-1.0.6-3PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.6-2.rhel9.1.x86_64.rpm pgdg 1.0.6 13.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/bgw_replstatus_16-1.0.6-2.rhel9.1.x86_64.rpm
@ el9.aarch64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.8-1PGDG.rhel9.aarch64.rpm pgdg 1.0.8 14.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/bgw_replstatus_16-1.0.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.6-2.rhel9.1.aarch64.rpm pgdg 1.0.6 13.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/bgw_replstatus_16-1.0.6-2.rhel9.1.aarch64.rpm
@ el10.x86_64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.8-1PGDG.rhel10.x86_64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/bgw_replstatus_16-1.0.8-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 bgw_replstatus_16 bgw_replstatus_16-1.0.8-1PGDG.rhel10.aarch64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/bgw_replstatus_16-1.0.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-bgw-replstatus postgresql-16-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-16-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-bgw-replstatus postgresql-16-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-16-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-bgw-replstatus postgresql-16-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-16-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-bgw-replstatus postgresql-16-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-16-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-bgw-replstatus postgresql-16-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb pgdg 1.0.8 15.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-16-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-bgw-replstatus postgresql-16-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb pgdg 1.0.8 15.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-16-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-bgw-replstatus postgresql-16-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-16-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-bgw-replstatus postgresql-16-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-16-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.8-1PGDG.rhel8.x86_64.rpm pgdg 1.0.8 16.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/bgw_replstatus_15-1.0.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.6-1.rhel8.x86_64.rpm pgdg 1.0.6 15.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/bgw_replstatus_15-1.0.6-1.rhel8.x86_64.rpm
@ el8.aarch64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.8-1PGDG.rhel8.aarch64.rpm pgdg 1.0.8 15.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/bgw_replstatus_15-1.0.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.6-1.rhel8.aarch64.rpm pgdg 1.0.6 15.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/bgw_replstatus_15-1.0.6-1.rhel8.aarch64.rpm
@ el9.x86_64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.8-1PGDG.rhel9.x86_64.rpm pgdg 1.0.8 15.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/bgw_replstatus_15-1.0.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.6-1.rhel9.x86_64.rpm pgdg 1.0.6 15.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/bgw_replstatus_15-1.0.6-1.rhel9.x86_64.rpm
@ el9.aarch64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.8-1PGDG.rhel9.aarch64.rpm pgdg 1.0.8 15.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/bgw_replstatus_15-1.0.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.6-1.rhel9.aarch64.rpm pgdg 1.0.6 14.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/bgw_replstatus_15-1.0.6-1.rhel9.aarch64.rpm
@ el10.x86_64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.8-1PGDG.rhel10.x86_64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/bgw_replstatus_15-1.0.8-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 bgw_replstatus_15 bgw_replstatus_15-1.0.8-1PGDG.rhel10.aarch64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/bgw_replstatus_15-1.0.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-bgw-replstatus postgresql-15-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-15-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-bgw-replstatus postgresql-15-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-15-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-bgw-replstatus postgresql-15-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-15-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-bgw-replstatus postgresql-15-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-15-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-bgw-replstatus postgresql-15-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb pgdg 1.0.8 15.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-15-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-bgw-replstatus postgresql-15-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb pgdg 1.0.8 15.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-15-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-bgw-replstatus postgresql-15-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-15-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-bgw-replstatus postgresql-15-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-15-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.8-1PGDG.rhel8.x86_64.rpm pgdg 1.0.8 16.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/bgw_replstatus_14-1.0.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.6-1.rhel8.x86_64.rpm pgdg 1.0.6 15.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/bgw_replstatus_14-1.0.6-1.rhel8.x86_64.rpm
@ el8.x86_64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.3-3.rhel8.x86_64.rpm pgdg 1.0.3 23.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/bgw_replstatus_14-1.0.3-3.rhel8.x86_64.rpm
@ el8.aarch64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.8-1PGDG.rhel8.aarch64.rpm pgdg 1.0.8 15.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/bgw_replstatus_14-1.0.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.6-1.rhel8.aarch64.rpm pgdg 1.0.6 15.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/bgw_replstatus_14-1.0.6-1.rhel8.aarch64.rpm
@ el9.x86_64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.8-1PGDG.rhel9.x86_64.rpm pgdg 1.0.8 15.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/bgw_replstatus_14-1.0.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.6-1.rhel9.x86_64.rpm pgdg 1.0.6 15.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/bgw_replstatus_14-1.0.6-1.rhel9.x86_64.rpm
@ el9.aarch64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.8-1PGDG.rhel9.aarch64.rpm pgdg 1.0.8 15.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/bgw_replstatus_14-1.0.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.6-1.rhel9.aarch64.rpm pgdg 1.0.6 14.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/bgw_replstatus_14-1.0.6-1.rhel9.aarch64.rpm
@ el10.x86_64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.8-1PGDG.rhel10.x86_64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/bgw_replstatus_14-1.0.8-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 bgw_replstatus_14 bgw_replstatus_14-1.0.8-1PGDG.rhel10.aarch64.rpm pgdg 1.0.8 15.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/bgw_replstatus_14-1.0.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-bgw-replstatus postgresql-14-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-14-bgw-replstatus_1.0.8-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-bgw-replstatus postgresql-14-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-14-bgw-replstatus_1.0.8-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-bgw-replstatus postgresql-14-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-14-bgw-replstatus_1.0.8-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-bgw-replstatus postgresql-14-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-14-bgw-replstatus_1.0.8-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-bgw-replstatus postgresql-14-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb pgdg 1.0.8 15.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-14-bgw-replstatus_1.0.8-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-bgw-replstatus postgresql-14-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb pgdg 1.0.8 15.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-14-bgw-replstatus_1.0.8-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-bgw-replstatus postgresql-14-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb pgdg 1.0.8 14.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-14-bgw-replstatus_1.0.8-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-bgw-replstatus postgresql-14-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb pgdg 1.0.8 14.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/b/bgw-replstatus/postgresql-14-bgw-replstatus_1.0.8-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `bgw_replstatus` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install bgw_replstatus;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y bgw_replstatus -v 18  # PG 18
pig ext install -y bgw_replstatus -v 17  # PG 17
pig ext install -y bgw_replstatus -v 16  # PG 16
pig ext install -y bgw_replstatus -v 15  # PG 15
pig ext install -y bgw_replstatus -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y bgw_replstatus_18       # PG 18
dnf install -y bgw_replstatus_17       # PG 17
dnf install -y bgw_replstatus_16       # PG 16
dnf install -y bgw_replstatus_15       # PG 15
dnf install -y bgw_replstatus_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-bgw-replstatus   # PG 18
apt install -y postgresql-17-bgw-replstatus   # PG 17
apt install -y postgresql-16-bgw-replstatus   # PG 16
apt install -y postgresql-15-bgw-replstatus   # PG 15
apt install -y postgresql-14-bgw-replstatus   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'bgw_replstatus';
```

