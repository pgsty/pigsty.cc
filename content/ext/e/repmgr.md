---
title: "repmgr"
linkTitle: "repmgr"
description: "PostgreSQL复制管理组件"
weight: 9710
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/EnterpriseDB/repmgr">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">EnterpriseDB/repmgr</div>
    <div class="ext-card__desc">https://github.com/EnterpriseDB/repmgr</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`repmgr`**](/ext/e/repmgr) | `5.5.0` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9710  | [**`repmgr`**](/ext/e/repmgr) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `repmgr` |
{.ext-table}

| **相关扩展** | [`pglogical`](/ext/e/pglogical) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pgactive`](/ext/e/pgactive) [`bgw_replstatus`](/ext/e/bgw_replstatus) [`postgres_fdw`](/ext/e/postgres_fdw) [`pglogical_origin`](/ext/e/pglogical_origin) [`pglogical_ticker`](/ext/e/pglogical_ticker) [`dblink`](/ext/e/dblink) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.0` | {{< pgvers "18,17,16,15,14" >}} | `repmgr` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.0` | {{< pgvers "18,17,16,15,14" >}} | `repmgr_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `5.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-repmgr` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 2 | AVAIL PGDG 5.5.0 4 | AVAIL PGDG 5.5.0 7 |
| el8.aarch64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 2 | AVAIL PGDG 5.5.0 4 | AVAIL PGDG 5.5.0 4 |
| el9.x86_64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 2 | AVAIL PGDG 5.5.0 4 | AVAIL PGDG 5.5.0 6 |
| el9.aarch64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 2 | AVAIL PGDG 5.5.0 3 | AVAIL PGDG 5.5.0 3 |
| el10.x86_64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
| el10.aarch64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
| d12.x86_64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
| d12.aarch64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
| d13.x86_64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
| d13.aarch64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
| u22.x86_64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
| u22.aarch64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
| u24.x86_64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
| u24.aarch64 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 | AVAIL PGDG 5.5.0 1 |
@ el8.x86_64 18 repmgr_18 repmgr_18-5.5.0-6PGDG.rhel8.10.x86_64.rpm pgdg 5.5.0 295.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/repmgr_18-5.5.0-6PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 repmgr_18 repmgr_18-5.5.0-6PGDG.rhel8.10.aarch64.rpm pgdg 5.5.0 285.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/repmgr_18-5.5.0-6PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 repmgr_18 repmgr_18-5.5.0-6PGDG.rhel9.7.x86_64.rpm pgdg 5.5.0 266.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/repmgr_18-5.5.0-6PGDG.rhel9.7.x86_64.rpm
@ el9.aarch64 18 repmgr_18 repmgr_18-5.5.0-6PGDG.rhel9.7.aarch64.rpm pgdg 5.5.0 260.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/repmgr_18-5.5.0-6PGDG.rhel9.7.aarch64.rpm
@ el10.x86_64 18 repmgr_18 repmgr_18-5.5.0-6PGDGrhel10.1.x86_64.rpm pgdg 5.5.0 269.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/repmgr_18-5.5.0-6PGDGrhel10.1.x86_64.rpm
@ el10.aarch64 18 repmgr_18 repmgr_18-5.5.0-6PGDGrhel10.1.aarch64.rpm pgdg 5.5.0 261.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/repmgr_18-5.5.0-6PGDGrhel10.1.aarch64.rpm
@ d12.x86_64 18 postgresql-18-repmgr postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb pgdg 5.5.0 246.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-repmgr postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb pgdg 5.5.0 225.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-repmgr postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb pgdg 5.5.0 246.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-repmgr postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb pgdg 5.5.0 224.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-repmgr postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb pgdg 5.5.0 235.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-repmgr postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb pgdg 5.5.0 211.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-repmgr postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb pgdg 5.5.0 231.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-repmgr postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb pgdg 5.5.0 208.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-18-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 repmgr_17 repmgr_17-5.5.0-1PGDG.rhel8.x86_64.rpm pgdg 5.5.0 295.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/repmgr_17-5.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 repmgr_17 repmgr_17-5.5.0-1PGDG.rhel8.aarch64.rpm pgdg 5.5.0 285.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/repmgr_17-5.5.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 repmgr_17 repmgr_17-5.5.0-1PGDG.rhel9.x86_64.rpm pgdg 5.5.0 267.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/repmgr_17-5.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 repmgr_17 repmgr_17-5.5.0-1PGDG.rhel9.aarch64.rpm pgdg 5.5.0 261.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/repmgr_17-5.5.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 repmgr_17 repmgr_17-5.5.0-3PGDG.rhel10.x86_64.rpm pgdg 5.5.0 270.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/repmgr_17-5.5.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 repmgr_17 repmgr_17-5.5.0-3PGDG.rhel10.aarch64.rpm pgdg 5.5.0 261.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/repmgr_17-5.5.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-repmgr postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb pgdg 5.5.0 246.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-repmgr postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb pgdg 5.5.0 225.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-repmgr postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb pgdg 5.5.0 246.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-repmgr postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb pgdg 5.5.0 224.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-repmgr postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb pgdg 5.5.0 236.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-repmgr postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb pgdg 5.5.0 212.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-repmgr postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb pgdg 5.5.0 231.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-repmgr postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb pgdg 5.5.0 207.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-17-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 repmgr_16 repmgr_16-5.5.0-1PGDG.rhel8.x86_64.rpm pgdg 5.5.0 293.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/repmgr_16-5.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 repmgr_16 repmgr_16-5.4.1-1PGDG.rhel8.x86_64.rpm pgdg 5.4.1 291.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/repmgr_16-5.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 repmgr_16 repmgr_16-5.5.0-1PGDG.rhel8.aarch64.rpm pgdg 5.5.0 282.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/repmgr_16-5.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 repmgr_16 repmgr_16-5.4.1-1PGDG.rhel8.aarch64.rpm pgdg 5.4.1 280.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/repmgr_16-5.4.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 repmgr_16 repmgr_16-5.5.0-1PGDG.rhel9.x86_64.rpm pgdg 5.5.0 268.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/repmgr_16-5.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 repmgr_16 repmgr_16-5.4.1-1PGDG.rhel9.x86_64.rpm pgdg 5.4.1 266.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/repmgr_16-5.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 repmgr_16 repmgr_16-5.5.0-1PGDG.rhel9.aarch64.rpm pgdg 5.5.0 261.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/repmgr_16-5.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 repmgr_16 repmgr_16-5.4.1-1PGDG.rhel9.aarch64.rpm pgdg 5.4.1 261.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/repmgr_16-5.4.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 repmgr_16 repmgr_16-5.5.0-3PGDG.rhel10.x86_64.rpm pgdg 5.5.0 270.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/repmgr_16-5.5.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 repmgr_16 repmgr_16-5.5.0-3PGDG.rhel10.aarch64.rpm pgdg 5.5.0 261.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/repmgr_16-5.5.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-repmgr postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb pgdg 5.5.0 244.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-repmgr postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb pgdg 5.5.0 223.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-repmgr postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb pgdg 5.5.0 244.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-repmgr postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb pgdg 5.5.0 222.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-repmgr postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb pgdg 5.5.0 233.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-repmgr postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb pgdg 5.5.0 209.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-repmgr postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb pgdg 5.5.0 229.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-repmgr postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb pgdg 5.5.0 205.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-16-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 repmgr_15 repmgr_15-5.5.0-1PGDG.rhel8.x86_64.rpm pgdg 5.5.0 291.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/repmgr_15-5.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 repmgr_15 repmgr_15-5.4.1-1PGDG.rhel8.x86_64.rpm pgdg 5.4.1 290.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/repmgr_15-5.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 repmgr_15 repmgr_15-5.4.0-1.rhel8.x86_64.rpm pgdg 5.4.0 289.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/repmgr_15-5.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 repmgr_15 repmgr_15-5.3.3-1.rhel8.x86_64.rpm pgdg 5.3.3 286.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/repmgr_15-5.3.3-1.rhel8.x86_64.rpm
@ el8.aarch64 15 repmgr_15 repmgr_15-5.5.0-1PGDG.rhel8.aarch64.rpm pgdg 5.5.0 282.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/repmgr_15-5.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 repmgr_15 repmgr_15-5.4.1-1PGDG.rhel8.aarch64.rpm pgdg 5.4.1 280.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/repmgr_15-5.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 repmgr_15 repmgr_15-5.4.0-1.rhel8.aarch64.rpm pgdg 5.4.0 280.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/repmgr_15-5.4.0-1.rhel8.aarch64.rpm
@ el8.aarch64 15 repmgr_15 repmgr_15-5.3.3-1.rhel8.aarch64.rpm pgdg 5.3.3 276.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/repmgr_15-5.3.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 repmgr_15 repmgr_15-5.5.0-1PGDG.rhel9.x86_64.rpm pgdg 5.5.0 270.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/repmgr_15-5.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 repmgr_15 repmgr_15-5.4.1-1PGDG.rhel9.x86_64.rpm pgdg 5.4.1 268.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/repmgr_15-5.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 repmgr_15 repmgr_15-5.4.0-1.rhel9.x86_64.rpm pgdg 5.4.0 268.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/repmgr_15-5.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 repmgr_15 repmgr_15-5.3.3-1.rhel9.x86_64.rpm pgdg 5.3.3 266.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/repmgr_15-5.3.3-1.rhel9.x86_64.rpm
@ el9.aarch64 15 repmgr_15 repmgr_15-5.5.0-1PGDG.rhel9.aarch64.rpm pgdg 5.5.0 263.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/repmgr_15-5.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 repmgr_15 repmgr_15-5.4.1-1PGDG.rhel9.aarch64.rpm pgdg 5.4.1 263.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/repmgr_15-5.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 repmgr_15 repmgr_15-5.4.0-1.rhel9.aarch64.rpm pgdg 5.4.0 262.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/repmgr_15-5.4.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 repmgr_15 repmgr_15-5.5.0-3PGDG.rhel10.x86_64.rpm pgdg 5.5.0 270.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/repmgr_15-5.5.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 repmgr_15 repmgr_15-5.5.0-3PGDG.rhel10.aarch64.rpm pgdg 5.5.0 262.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/repmgr_15-5.5.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-repmgr postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb pgdg 5.5.0 243.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-repmgr postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb pgdg 5.5.0 222.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-repmgr postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb pgdg 5.5.0 242.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-repmgr postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb pgdg 5.5.0 221.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-repmgr postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb pgdg 5.5.0 234.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-repmgr postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb pgdg 5.5.0 211.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-repmgr postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb pgdg 5.5.0 230.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-repmgr postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb pgdg 5.5.0 206.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-15-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 repmgr_14 repmgr_14-5.5.0-1PGDG.rhel8.x86_64.rpm pgdg 5.5.0 289.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/repmgr_14-5.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 repmgr_14 repmgr_14-5.4.1-1PGDG.rhel8.x86_64.rpm pgdg 5.4.1 288.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/repmgr_14-5.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 repmgr_14 repmgr_14-5.4.0-1.rhel8.x86_64.rpm pgdg 5.4.0 288.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/repmgr_14-5.4.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 repmgr_14 repmgr_14-5.3.3-1.rhel8.x86_64.rpm pgdg 5.3.3 284.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/repmgr_14-5.3.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 repmgr_14 repmgr_14-5.3.2-1.rhel8.x86_64.rpm pgdg 5.3.2 296.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/repmgr_14-5.3.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 repmgr_14 repmgr_14-5.3.1-1.rhel8.x86_64.rpm pgdg 5.3.1 296.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/repmgr_14-5.3.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 repmgr_14 repmgr_14-5.3.0-1.rhel8.x86_64.rpm pgdg 5.3.0 296.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/repmgr_14-5.3.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 repmgr_14 repmgr_14-5.5.0-1PGDG.rhel8.aarch64.rpm pgdg 5.5.0 280.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/repmgr_14-5.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 repmgr_14 repmgr_14-5.4.1-1PGDG.rhel8.aarch64.rpm pgdg 5.4.1 279.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/repmgr_14-5.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 repmgr_14 repmgr_14-5.4.0-1.rhel8.aarch64.rpm pgdg 5.4.0 278.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/repmgr_14-5.4.0-1.rhel8.aarch64.rpm
@ el8.aarch64 14 repmgr_14 repmgr_14-5.3.3-1.rhel8.aarch64.rpm pgdg 5.3.3 275.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/repmgr_14-5.3.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 repmgr_14 repmgr_14-5.5.0-1PGDG.rhel9.x86_64.rpm pgdg 5.5.0 269.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/repmgr_14-5.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 repmgr_14 repmgr_14-5.4.1-1PGDG.rhel9.x86_64.rpm pgdg 5.4.1 268.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/repmgr_14-5.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 repmgr_14 repmgr_14-5.4.0-1.rhel9.x86_64.rpm pgdg 5.4.0 267.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/repmgr_14-5.4.0-1.rhel9.x86_64.rpm
@ el9.x86_64 14 repmgr_14 repmgr_14-5.3.3-1.rhel9.x86_64.rpm pgdg 5.3.3 266.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/repmgr_14-5.3.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 repmgr_14 repmgr_14-5.3.2-1.rhel9.x86_64.rpm pgdg 5.3.2 279.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/repmgr_14-5.3.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 repmgr_14 repmgr_14-5.3.1-1.rhel9.x86_64.rpm pgdg 5.3.1 278.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/repmgr_14-5.3.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 repmgr_14 repmgr_14-5.5.0-1PGDG.rhel9.aarch64.rpm pgdg 5.5.0 262.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/repmgr_14-5.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 repmgr_14 repmgr_14-5.4.1-1PGDG.rhel9.aarch64.rpm pgdg 5.4.1 262.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/repmgr_14-5.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 repmgr_14 repmgr_14-5.4.0-1.rhel9.aarch64.rpm pgdg 5.4.0 262.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/repmgr_14-5.4.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 repmgr_14 repmgr_14-5.5.0-3PGDG.rhel10.x86_64.rpm pgdg 5.5.0 269.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/repmgr_14-5.5.0-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 repmgr_14 repmgr_14-5.5.0-3PGDG.rhel10.aarch64.rpm pgdg 5.5.0 261.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/repmgr_14-5.5.0-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-repmgr postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb pgdg 5.5.0 243.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-repmgr postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb pgdg 5.5.0 222.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-repmgr postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb pgdg 5.5.0 241.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-repmgr postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb pgdg 5.5.0 221.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-repmgr postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb pgdg 5.5.0 233.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-repmgr postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb pgdg 5.5.0 209.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-repmgr postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb pgdg 5.5.0 229.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-repmgr postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb pgdg 5.5.0 205.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/repmgr/postgresql-14-repmgr_5.5.0+debpgdg-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `repmgr` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install repmgr;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y repmgr -v 18  # PG 18
pig ext install -y repmgr -v 17  # PG 17
pig ext install -y repmgr -v 16  # PG 16
pig ext install -y repmgr -v 15  # PG 15
pig ext install -y repmgr -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y repmgr_18       # PG 18
dnf install -y repmgr_17       # PG 17
dnf install -y repmgr_16       # PG 16
dnf install -y repmgr_15       # PG 15
dnf install -y repmgr_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-repmgr   # PG 18
apt install -y postgresql-17-repmgr   # PG 17
apt install -y postgresql-16-repmgr   # PG 16
apt install -y postgresql-15-repmgr   # PG 15
apt install -y postgresql-14-repmgr   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'repmgr';
```


**创建扩展**：

```sql
CREATE EXTENSION repmgr;
```



## 用法

> [repmgr: PostgreSQL 复制管理器](https://github.com/EnterpriseDB/repmgr)

一套用于管理 PostgreSQL 集群复制和故障转移的工具。支持搭建备库服务器、监控复制状态以及执行故障转移/计划切换。

### 启用

```sql
CREATE EXTENSION repmgr;
```

### 配置

在每个节点上创建 `repmgr.conf`：

```ini
node_id=1
node_name='node1'
conninfo='host=node1 dbname=repmgr user=repmgr'
data_directory='/var/lib/postgresql/data'
```

### 注册主节点

```bash
repmgr -f /etc/repmgr.conf primary register
```

### 克隆并注册备节点

```bash
# 从主节点克隆
repmgr -h primary-host -U repmgr -d repmgr -f /etc/repmgr.conf standby clone

# 启动备节点
pg_ctl -D /var/lib/postgresql/data start

# 注册备节点
repmgr -f /etc/repmgr.conf standby register
```

### 监控

```bash
# 显示集群状态
repmgr -f /etc/repmgr.conf cluster show

# 显示复制状态
repmgr -f /etc/repmgr.conf node status
```

### 手动切换

将备节点提升为主节点（计划性切换）：

```bash
repmgr -f /etc/repmgr.conf standby switchover
```

### 使用 repmgrd 自动故障转移

在每个节点上启动 repmgr 守护进程：

```bash
repmgrd -f /etc/repmgr.conf
```

在 `repmgr.conf` 中配置故障转移：

```ini
failover='automatic'
promote_command='repmgr standby promote -f /etc/repmgr.conf'
follow_command='repmgr standby follow -f /etc/repmgr.conf --upstream-node-id=%n'
```

### 关键命令

- `repmgr primary register` - 注册主节点
- `repmgr standby clone` - 从主节点克隆备节点
- `repmgr standby register` - 注册备节点
- `repmgr standby promote` - 将备节点提升为主节点
- `repmgr standby follow` - 跟随新的主节点
- `repmgr standby switchover` - 计划性切换
- `repmgr cluster show` - 显示集群状态
- `repmgr cluster event` - 显示集群事件
- `repmgr node check` - 节点健康检查
