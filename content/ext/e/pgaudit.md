---
title: "pgaudit"
linkTitle: "pgaudit"
description: "提供审计功能"
weight: 7100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgaudit/pgaudit">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgaudit/pgaudit</div>
    <div class="ext-card__desc">https://github.com/pgaudit/pgaudit</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgaudit-1.7.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgaudit-1.7.2.tar.gz</div>
    <div class="ext-card__desc">pgaudit-1.7.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgaudit`**](/ext/e/pgaudit) | `19.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7100  | [**`pgaudit`**](/ext/e/pgaudit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`pgauditlogtofile`](/ext/e/pgauditlogtofile) [`pg_auditor`](/ext/e/pg_auditor) [`pg_roast`](/ext/e/pg_roast) [`pgmemento`](/ext/e/pgmemento) [`table_log`](/ext/e/table_log) [`pg_drop_events`](/ext/e/pg_drop_events) [`pgelog`](/ext/e/pgelog) [`logerrors`](/ext/e/logerrors) [`pg_stat_log`](/ext/e/pg_stat_log) [`pg_auth_mon`](/ext/e/pg_auth_mon) [`data_historization`](/ext/e/data_historization) [`table_version`](/ext/e/table_version) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Preload; PG14/15 RPM names differ.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `19.0` | {{< pgvers "19,18,17,16,15" >}} | `pgaudit` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `19.0` | {{< pgvers "19,18,17,16,15" >}} | `pgaudit_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `19.0` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pgaudit` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PGDG - 0 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 4 | AVAIL PGDG 16.2 4 | AVAIL PIGSTY 1.7.2 1 |
| el8.aarch64 | N/A PGDG - 0 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 4 | AVAIL PGDG 16.2 4 | AVAIL PIGSTY 1.7.2 1 |
| el9.x86_64 | AVAIL PGDG 19.0 1 | AVAIL PGDG 18.1 2 | AVAIL PGDG 17.2 2 | AVAIL PGDG 16.2 2 | AVAIL PIGSTY 1.7.2 1 |
| el9.aarch64 | AVAIL PGDG 19.0 1 | AVAIL PGDG 18.1 2 | AVAIL PGDG 17.2 2 | AVAIL PGDG 16.2 2 | AVAIL PIGSTY 1.7.2 1 |
| el10.x86_64 | AVAIL PGDG 19.0 1 | AVAIL PGDG 18.1 2 | AVAIL PGDG 17.2 2 | AVAIL PGDG 16.2 2 | AVAIL PIGSTY 1.7.2 1 |
| el10.aarch64 | AVAIL PGDG 19.0 1 | AVAIL PGDG 18.1 6 | AVAIL PGDG 17.2 6 | AVAIL PGDG 16.2 6 | AVAIL PIGSTY 1.7.2 1 |
| d12.x86_64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
| d12.aarch64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
| d13.x86_64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
| d13.aarch64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
| u22.x86_64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
| u22.aarch64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
| u24.x86_64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
| u24.aarch64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
| u26.x86_64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
| u26.aarch64 | AVAIL PGDG 19.0 3 | AVAIL PGDG 18.1 3 | AVAIL PGDG 17.2 3 | AVAIL PGDG 16.2 3 | AVAIL PGDG 1.7.2 3 |
@ el9.x86_64 19 pgaudit_19 pgaudit_19-19.0-1PGDG.rhel9.9.x86_64.rpm pgdg 19.0 29.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-x86_64/pgaudit_19-19.0-1PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 19 pgaudit_19 pgaudit_19-19.0-1PGDG.rhel9.9.aarch64.rpm pgdg 19.0 29.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-9-aarch64/pgaudit_19-19.0-1PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 19 pgaudit_19 pgaudit_19-19.0-1PGDG.rhel10.3.x86_64.rpm pgdg 19.0 29.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-x86_64/pgaudit_19-19.0-1PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 19 pgaudit_19 pgaudit_19-19.0-1PGDG.rhel10.3.aarch64.rpm pgdg 19.0 29.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/19/redhat/rhel-10-aarch64/pgaudit_19-19.0-1PGDG.rhel10.3.aarch64.rpm
@ d12.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg12+1_amd64.deb pgdg 19.0 47.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg12+2_amd64.deb pgdg 19 47.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg12+2_amd64.deb
@ d12.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg12+1_amd64.deb pgdg 19 47.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg12+1_amd64.deb
@ d12.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg12+1_arm64.deb pgdg 19.0 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg12+2_arm64.deb pgdg 19 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg12+2_arm64.deb
@ d12.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg12+1_arm64.deb pgdg 19 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg12+1_arm64.deb
@ d13.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg13+1_amd64.deb pgdg 19.0 47.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg13+2_amd64.deb pgdg 19 47.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg13+2_amd64.deb
@ d13.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg13+1_amd64.deb pgdg 19 47.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg13+1_amd64.deb
@ d13.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg13+1_arm64.deb pgdg 19.0 47.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg13+2_arm64.deb pgdg 19 47.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg13+2_arm64.deb
@ d13.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg13+1_arm64.deb pgdg 19 47.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg13+1_arm64.deb
@ u22.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg22.04+1_amd64.deb pgdg 19.0 49.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg22.04+2_amd64.deb pgdg 19 49.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg22.04+1_amd64.deb pgdg 19 49.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg22.04+1_arm64.deb pgdg 19.0 48.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg22.04+2_arm64.deb pgdg 19 48.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg22.04+1_arm64.deb pgdg 19 48.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg24.04+1_amd64.deb pgdg 19.0 48.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg24.04+2_amd64.deb pgdg 19 48.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg24.04+1_amd64.deb pgdg 19 47.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg24.04+1_arm64.deb pgdg 19.0 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg24.04+2_arm64.deb pgdg 19 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg24.04+1_arm64.deb pgdg 19 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg26.04+1_amd64.deb pgdg 19.0 47.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg26.04+2_amd64.deb pgdg 19 47.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg26.04+1_amd64.deb pgdg 19 47.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19.0-1.pgdg26.04+1_arm64.deb pgdg 19.0 46.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19.0-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg26.04+2_arm64.deb pgdg 19 46.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 19 postgresql-19-pgaudit postgresql-19-pgaudit_19~rc1-1.pgdg26.04+1_arm64.deb pgdg 19 46.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-19/postgresql-19-pgaudit_19~rc1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 18 pgaudit_18 pgaudit_18-18.1-1PGDG.rhel8.10.x86_64.rpm pgdg 18.1 29.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgaudit_18-18.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgaudit_18 pgaudit_18-18.0-9PGDG.rhel8.10.x86_64.rpm pgdg 18.0 28.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgaudit_18-18.0-9PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgaudit_18 pgaudit_18-18.0-1PGDG.rhel8.x86_64.rpm pgdg 18.0 27.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgaudit_18-18.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgaudit_18 pgaudit_18-18.1-1PGDG.rhel8.10.aarch64.rpm pgdg 18.1 29.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgaudit_18-18.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgaudit_18 pgaudit_18-18.0-9PGDG.rhel8.10.aarch64.rpm pgdg 18.0 28.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgaudit_18-18.0-9PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgaudit_18 pgaudit_18-18.0-1PGDG.rhel8.aarch64.rpm pgdg 18.0 27.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgaudit_18-18.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgaudit_18 pgaudit_18-18.1-1PGDG.rhel9.9.x86_64.rpm pgdg 18.1 30.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgaudit_18-18.1-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 18 pgaudit_18 pgaudit_18-18.0-9PGDG.rhel9.9.x86_64.rpm pgdg 18.0 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgaudit_18-18.0-9PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 18 pgaudit_18 pgaudit_18-18.1-1PGDG.rhel9.9.aarch64.rpm pgdg 18.1 29.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgaudit_18-18.1-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 18 pgaudit_18 pgaudit_18-18.0-9PGDG.rhel9.9.aarch64.rpm pgdg 18.0 28.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgaudit_18-18.0-9PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 18 pgaudit_18 pgaudit_18-18.1-1PGDG.rhel10.3.x86_64.rpm pgdg 18.1 30.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgaudit_18-18.1-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 18 pgaudit_18 pgaudit_18-18.0-9PGDG.rhel10.3.x86_64.rpm pgdg 18.0 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgaudit_18-18.0-9PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 18 pgaudit_18 pgaudit_18-18.1-1PGDG.rhel10.3.aarch64.rpm pgdg 18.1 30.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgaudit_18-18.1-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 pgaudit_18 pgaudit_18-18.1-1PGDG.rhel10.2.aarch64.rpm pgdg 18.1 30.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgaudit_18-18.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgaudit_18 pgaudit_18-18.0-9PGDG.rhel10.3.aarch64.rpm pgdg 18.0 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgaudit_18-18.0-9PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 18 pgaudit_18 pgaudit_18-18.0-9PGDG.rhel10.2.aarch64.rpm pgdg 18.0 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgaudit_18-18.0-9PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgaudit_18 pgaudit_18-18.0-4PGDG.rhel10.2.aarch64.rpm pgdg 18.0 28.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgaudit_18-18.0-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pgaudit_18 pgaudit_18-18.0-1PGDG.rhel10.aarch64.rpm pgdg 18.0 28.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgaudit_18-18.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg12+1_amd64.deb pgdg 18.1 48.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg12+2_amd64.deb pgdg 18.0 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg12+2_amd64.deb
@ d12.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg12+1_amd64.deb pgdg 18.0 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg12+1_arm64.deb pgdg 18.1 47.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg12+2_arm64.deb pgdg 18.0 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg12+2_arm64.deb
@ d12.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg12+1_arm64.deb pgdg 18.0 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg13+1_amd64.deb pgdg 18.1 48.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg13+2_amd64.deb pgdg 18.0 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg13+2_amd64.deb
@ d13.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg13+1_amd64.deb pgdg 18.0 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg13+1_arm64.deb pgdg 18.1 47.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg13+2_arm64.deb pgdg 18.0 46.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg13+2_arm64.deb
@ d13.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg13+1_arm64.deb pgdg 18.0 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg22.04+1_amd64.deb pgdg 18.1 49.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg22.04+2_amd64.deb pgdg 18.0 48.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg22.04+2_amd64.deb
@ u22.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg22.04+1_amd64.deb pgdg 18.0 48.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg22.04+1_arm64.deb pgdg 18.1 49.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg22.04+2_arm64.deb pgdg 18.0 48.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg22.04+2_arm64.deb
@ u22.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg22.04+1_arm64.deb pgdg 18.0 48.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg24.04+1_amd64.deb pgdg 18.1 48.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg24.04+2_amd64.deb pgdg 18.0 47.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg24.04+2_amd64.deb
@ u24.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg24.04+1_amd64.deb pgdg 18.0 47.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg24.04+1_arm64.deb pgdg 18.1 47.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg24.04+2_arm64.deb pgdg 18.0 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg24.04+2_arm64.deb
@ u24.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg24.04+1_arm64.deb pgdg 18.0 46.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg26.04+1_amd64.deb pgdg 18.1 47.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg26.04+2_amd64.deb pgdg 18.0 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg26.04+2_amd64.deb
@ u26.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg26.04+1_amd64.deb pgdg 18.0 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.1-1.pgdg26.04+1_arm64.deb pgdg 18.1 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg26.04+2_arm64.deb pgdg 18.0 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg26.04+2_arm64.deb
@ u26.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-3.pgdg26.04+1_arm64.deb pgdg 18.0 46.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-3.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pgaudit_17 pgaudit_17-17.2-1PGDG.rhel8.10.x86_64.rpm pgdg 17.2 30.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgaudit_17-17.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgaudit_17 pgaudit_17-17.1-9PGDG.rhel8.10.x86_64.rpm pgdg 17.1 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgaudit_17-17.1-9PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgaudit_17 pgaudit_17-17.1-1PGDG.rhel8.x86_64.rpm pgdg 17.1 28.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgaudit_17-17.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgaudit_17 pgaudit_17-17.0-1PGDG.rhel8.x86_64.rpm pgdg 17.0 27.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgaudit_17-17.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgaudit_17 pgaudit_17-17.2-1PGDG.rhel8.10.aarch64.rpm pgdg 17.2 29.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgaudit_17-17.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgaudit_17 pgaudit_17-17.1-9PGDG.rhel8.10.aarch64.rpm pgdg 17.1 28.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgaudit_17-17.1-9PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgaudit_17 pgaudit_17-17.1-1PGDG.rhel8.aarch64.rpm pgdg 17.1 27.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgaudit_17-17.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgaudit_17 pgaudit_17-17.0-1PGDG.rhel8.aarch64.rpm pgdg 17.0 27.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgaudit_17-17.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgaudit_17 pgaudit_17-17.2-1PGDG.rhel9.9.x86_64.rpm pgdg 17.2 30.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgaudit_17-17.2-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 17 pgaudit_17 pgaudit_17-17.1-9PGDG.rhel9.9.x86_64.rpm pgdg 17.1 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgaudit_17-17.1-9PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 17 pgaudit_17 pgaudit_17-17.2-1PGDG.rhel9.9.aarch64.rpm pgdg 17.2 30.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgaudit_17-17.2-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 17 pgaudit_17 pgaudit_17-17.1-9PGDG.rhel9.9.aarch64.rpm pgdg 17.1 28.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgaudit_17-17.1-9PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 17 pgaudit_17 pgaudit_17-17.2-1PGDG.rhel10.3.x86_64.rpm pgdg 17.2 30.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgaudit_17-17.2-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 17 pgaudit_17 pgaudit_17-17.1-9PGDG.rhel10.3.x86_64.rpm pgdg 17.1 29.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgaudit_17-17.1-9PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 17 pgaudit_17 pgaudit_17-17.2-1PGDG.rhel10.3.aarch64.rpm pgdg 17.2 30.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgaudit_17-17.2-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 pgaudit_17 pgaudit_17-17.2-1PGDG.rhel10.2.aarch64.rpm pgdg 17.2 30.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgaudit_17-17.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgaudit_17 pgaudit_17-17.1-9PGDG.rhel10.3.aarch64.rpm pgdg 17.1 29.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgaudit_17-17.1-9PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 17 pgaudit_17 pgaudit_17-17.1-9PGDG.rhel10.2.aarch64.rpm pgdg 17.1 29.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgaudit_17-17.1-9PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgaudit_17 pgaudit_17-17.1-4PGDG.rhel10.2.aarch64.rpm pgdg 17.1 28.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgaudit_17-17.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pgaudit_17 pgaudit_17-17.1-1PGDG.rhel10.aarch64.rpm pgdg 17.1 28.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgaudit_17-17.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg12+1_amd64.deb pgdg 17.2 47.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg12+2_amd64.deb pgdg 17.1 46.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg12+2_amd64.deb
@ d12.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg12+1_amd64.deb pgdg 17.1 46.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg12+1_arm64.deb pgdg 17.2 47.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg12+2_arm64.deb pgdg 17.1 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg12+2_arm64.deb
@ d12.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg12+1_arm64.deb pgdg 17.1 45.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg13+1_amd64.deb pgdg 17.2 47.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg13+2_amd64.deb pgdg 17.1 46.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg13+2_amd64.deb
@ d13.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg13+1_amd64.deb pgdg 17.1 46.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg13+1_arm64.deb pgdg 17.2 47.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg13+2_arm64.deb pgdg 17.1 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg13+2_arm64.deb
@ d13.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg13+1_arm64.deb pgdg 17.1 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg22.04+1_amd64.deb pgdg 17.2 53.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg22.04+2_amd64.deb pgdg 17.1 52.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg22.04+2_amd64.deb
@ u22.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg22.04+1_amd64.deb pgdg 17.1 52.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg22.04+1_arm64.deb pgdg 17.2 53.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg22.04+2_arm64.deb pgdg 17.1 52.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg22.04+2_arm64.deb
@ u22.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg22.04+1_arm64.deb pgdg 17.1 52.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg24.04+1_amd64.deb pgdg 17.2 47.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg24.04+2_amd64.deb pgdg 17.1 46.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg24.04+2_amd64.deb
@ u24.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg24.04+1_amd64.deb pgdg 17.1 46.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg24.04+1_arm64.deb pgdg 17.2 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg24.04+2_arm64.deb pgdg 17.1 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg24.04+2_arm64.deb
@ u24.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg24.04+1_arm64.deb pgdg 17.1 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg26.04+1_amd64.deb pgdg 17.2 47.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg26.04+2_amd64.deb pgdg 17.1 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg26.04+2_amd64.deb
@ u26.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg26.04+1_amd64.deb pgdg 17.1 46.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.2-1.pgdg26.04+1_arm64.deb pgdg 17.2 46.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg26.04+2_arm64.deb pgdg 17.1 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg26.04+2_arm64.deb
@ u26.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg26.04+1_arm64.deb pgdg 17.1 45.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pgaudit_16 pgaudit_16-16.2-1PGDG.rhel8.10.x86_64.rpm pgdg 16.2 29.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgaudit_16-16.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgaudit_16 pgaudit_16-16.1-9PGDG.rhel8.10.x86_64.rpm pgdg 16.1 28.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgaudit_16-16.1-9PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgaudit_16 pgaudit_16-16.1-1PGDG.rhel8.x86_64.rpm pgdg 16.1 27.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgaudit_16-16.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgaudit_16 pgaudit_16-16.0-1PGDG.rhel8.x86_64.rpm pgdg 16.0 26.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgaudit_16-16.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgaudit_16 pgaudit_16-16.2-1PGDG.rhel8.10.aarch64.rpm pgdg 16.2 29.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgaudit_16-16.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgaudit_16 pgaudit_16-16.1-9PGDG.rhel8.10.aarch64.rpm pgdg 16.1 28.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgaudit_16-16.1-9PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgaudit_16 pgaudit_16-16.1-1PGDG.rhel8.aarch64.rpm pgdg 16.1 27.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgaudit_16-16.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgaudit_16 pgaudit_16-16.0-1PGDG.rhel8.aarch64.rpm pgdg 16.0 26.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgaudit_16-16.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgaudit_16 pgaudit_16-16.2-1PGDG.rhel9.9.x86_64.rpm pgdg 16.2 30.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgaudit_16-16.2-1PGDG.rhel9.9.x86_64.rpm
@ el9.x86_64 16 pgaudit_16 pgaudit_16-16.1-9PGDG.rhel9.9.x86_64.rpm pgdg 16.1 28.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgaudit_16-16.1-9PGDG.rhel9.9.x86_64.rpm
@ el9.aarch64 16 pgaudit_16 pgaudit_16-16.2-1PGDG.rhel9.9.aarch64.rpm pgdg 16.2 29.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgaudit_16-16.2-1PGDG.rhel9.9.aarch64.rpm
@ el9.aarch64 16 pgaudit_16 pgaudit_16-16.1-9PGDG.rhel9.9.aarch64.rpm pgdg 16.1 28.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgaudit_16-16.1-9PGDG.rhel9.9.aarch64.rpm
@ el10.x86_64 16 pgaudit_16 pgaudit_16-16.2-1PGDG.rhel10.3.x86_64.rpm pgdg 16.2 30.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgaudit_16-16.2-1PGDG.rhel10.3.x86_64.rpm
@ el10.x86_64 16 pgaudit_16 pgaudit_16-16.1-9PGDG.rhel10.3.x86_64.rpm pgdg 16.1 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgaudit_16-16.1-9PGDG.rhel10.3.x86_64.rpm
@ el10.aarch64 16 pgaudit_16 pgaudit_16-16.2-1PGDG.rhel10.3.aarch64.rpm pgdg 16.2 30.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgaudit_16-16.2-1PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 pgaudit_16 pgaudit_16-16.2-1PGDG.rhel10.2.aarch64.rpm pgdg 16.2 30.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgaudit_16-16.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgaudit_16 pgaudit_16-16.1-9PGDG.rhel10.3.aarch64.rpm pgdg 16.1 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgaudit_16-16.1-9PGDG.rhel10.3.aarch64.rpm
@ el10.aarch64 16 pgaudit_16 pgaudit_16-16.1-9PGDG.rhel10.2.aarch64.rpm pgdg 16.1 29.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgaudit_16-16.1-9PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgaudit_16 pgaudit_16-16.1-4PGDG.rhel10.2.aarch64.rpm pgdg 16.1 28.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgaudit_16-16.1-4PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pgaudit_16 pgaudit_16-16.1-1PGDG.rhel10.aarch64.rpm pgdg 16.1 28.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgaudit_16-16.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg12+1_amd64.deb pgdg 16.2 46.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg12+2_amd64.deb pgdg 16.1 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg12+2_amd64.deb
@ d12.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg12+1_amd64.deb pgdg 16.1 45.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg12+1_arm64.deb pgdg 16.2 46.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg12+2_arm64.deb pgdg 16.1 44.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg12+2_arm64.deb
@ d12.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg12+1_arm64.deb pgdg 16.1 44.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg13+1_amd64.deb pgdg 16.2 46.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg13+2_amd64.deb pgdg 16.1 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg13+2_amd64.deb
@ d13.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg13+1_amd64.deb pgdg 16.1 45.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg13+1_arm64.deb pgdg 16.2 46.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg13+2_arm64.deb pgdg 16.1 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg13+2_arm64.deb
@ d13.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg13+1_arm64.deb pgdg 16.1 45.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg22.04+1_amd64.deb pgdg 16.2 52.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg22.04+2_amd64.deb pgdg 16.1 51.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg22.04+2_amd64.deb
@ u22.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg22.04+1_amd64.deb pgdg 16.1 51.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg22.04+1_arm64.deb pgdg 16.2 51.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg22.04+2_arm64.deb pgdg 16.1 50.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg22.04+2_arm64.deb
@ u22.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg22.04+1_arm64.deb pgdg 16.1 50.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg24.04+1_amd64.deb pgdg 16.2 46.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg24.04+2_amd64.deb pgdg 16.1 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg24.04+2_amd64.deb
@ u24.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg24.04+1_amd64.deb pgdg 16.1 45.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg24.04+1_arm64.deb pgdg 16.2 46.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg24.04+2_arm64.deb pgdg 16.1 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg24.04+2_arm64.deb
@ u24.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg24.04+1_arm64.deb pgdg 16.1 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg26.04+1_amd64.deb pgdg 16.2 46.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg26.04+2_amd64.deb pgdg 16.1 44.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg26.04+2_amd64.deb
@ u26.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg26.04+1_amd64.deb pgdg 16.1 45.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.2-1.pgdg26.04+1_arm64.deb pgdg 16.2 45.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg26.04+2_arm64.deb pgdg 16.1 44.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg26.04+2_arm64.deb
@ u26.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg26.04+1_arm64.deb pgdg 16.1 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pgaudit_15 pgaudit_15-1.7.2-1PGSTY.el8.x86_64.rpm pigsty 1.7.2 52.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgaudit_15-1.7.2-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgaudit_15 pgaudit_15-1.7.2-1PGSTY.el8.aarch64.rpm pigsty 1.7.2 51.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgaudit_15-1.7.2-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgaudit_15 pgaudit_15-1.7.2-1PGSTY.el9.x86_64.rpm pigsty 1.7.2 53.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgaudit_15-1.7.2-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgaudit_15 pgaudit_15-1.7.2-1PGSTY.el9.aarch64.rpm pigsty 1.7.2 53.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgaudit_15-1.7.2-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgaudit_15 pgaudit_15-1.7.2-1PGSTY.el10.x86_64.rpm pigsty 1.7.2 53.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgaudit_15-1.7.2-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgaudit_15 pgaudit_15-1.7.2-1PGSTY.el10.aarch64.rpm pigsty 1.7.2 53.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgaudit_15-1.7.2-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg12+1_amd64.deb pgdg 1.7.2 45.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg12+2_amd64.deb pgdg 1.7.1 44.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg12+2_amd64.deb
@ d12.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg12+1_amd64.deb pgdg 1.7.1 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg12+1_arm64.deb pgdg 1.7.2 44.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg12+2_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg12+2_arm64.deb
@ d12.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg12+1_arm64.deb pgdg 1.7.1 43.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg13+1_amd64.deb pgdg 1.7.2 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg13+2_amd64.deb pgdg 1.7.1 44.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg13+2_amd64.deb
@ d13.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg13+1_amd64.deb pgdg 1.7.1 44.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg13+1_arm64.deb pgdg 1.7.2 45.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg13+2_arm64.deb pgdg 1.7.1 43.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg13+2_arm64.deb
@ d13.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg13+1_arm64.deb pgdg 1.7.1 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg22.04+1_amd64.deb pgdg 1.7.2 51.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg22.04+2_amd64.deb pgdg 1.7.1 50.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg22.04+2_amd64.deb
@ u22.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg22.04+1_amd64.deb pgdg 1.7.1 50.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg22.04+1_arm64.deb pgdg 1.7.2 50.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg22.04+2_arm64.deb pgdg 1.7.1 49.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg22.04+2_arm64.deb
@ u22.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg22.04+1_arm64.deb pgdg 1.7.1 49.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg24.04+1_amd64.deb pgdg 1.7.2 45.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg24.04+2_amd64.deb pgdg 1.7.1 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg24.04+2_amd64.deb
@ u24.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg24.04+1_amd64.deb pgdg 1.7.1 44.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg24.04+1_arm64.deb pgdg 1.7.2 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg24.04+2_arm64.deb pgdg 1.7.1 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg24.04+2_arm64.deb
@ u24.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg24.04+1_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg26.04+1_amd64.deb pgdg 1.7.2 45.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg26.04+2_amd64.deb pgdg 1.7.1 43.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg26.04+2_amd64.deb
@ u26.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg26.04+1_amd64.deb pgdg 1.7.1 44.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.2-1.pgdg26.04+1_arm64.deb pgdg 1.7.2 44.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg26.04+2_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg26.04+2_arm64.deb
@ u26.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg26.04+1_arm64.deb pgdg 1.7.1 44.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgaudit` 扩展的 RPM 包：

```bash
pig build pkg pgaudit         # 构建 RPM 包
```


## 安装

您可以直接安装 `pgaudit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pgaudit;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgaudit -v 19  # PG 19
pig ext install -y pgaudit -v 18  # PG 18
pig ext install -y pgaudit -v 17  # PG 17
pig ext install -y pgaudit -v 16  # PG 16
pig ext install -y pgaudit -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgaudit_19       # PG 19
dnf install -y pgaudit_18       # PG 18
dnf install -y pgaudit_17       # PG 17
dnf install -y pgaudit_16       # PG 16
dnf install -y pgaudit_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pgaudit   # PG 19
apt install -y postgresql-18-pgaudit   # PG 18
apt install -y postgresql-17-pgaudit   # PG 17
apt install -y postgresql-16-pgaudit   # PG 16
apt install -y postgresql-15-pgaudit   # PG 15
```


**预加载配置**：

```bash
shared_preload_libraries = 'pgaudit';
```


**创建扩展**：

```sql
CREATE EXTENSION pgaudit;
```

## 用法

来源：

- [pgAudit 19.0 README](https://github.com/pgaudit/pgaudit/blob/19.0/README.md)
- [PostgreSQL 19 发行版](https://github.com/pgaudit/pgaudit/releases/tag/19.0)
- [发行版控制文件](https://github.com/pgaudit/pgaudit/blob/19.0/pgaudit.control)

`pgaudit` 通过 PostgreSQL 日志记录会话和对象事件。应选择匹配服务器的分支：PostgreSQL 19 对应 19.0，18 对应 18.1，17 对应 17.2，16 对应 16.2，15 对应 1.7.2，14 对应 1.6.4。各分支分别针对对应服务器构建，升级 PostgreSQL 不会使旧库自动具备 ABI 兼容性。

### 启用审计

将 `pgaudit` 加入 `shared_preload_libraries` 并重启服务器，再以超级用户创建扩展，之后才能设置 `pgaudit.log`：

```sql
CREATE EXTENSION pgaudit;
```

只有超级用户能修改审计设置。应规划并保护日志卷：SQL 文本和参数可能含敏感信息，广泛记录会占用大量磁盘。扩展提供审计记录，但本身并不等于满足合规要求。

### 配置参数

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pgaudit.log` | `none` | 要记录的语句类别：`READ`、`WRITE`、`FUNCTION`、`ROLE`、`DDL`、`MISC`、`MISC_SET`、`ALL` |
| `pgaudit.log_catalog` | `on` | 当所有关系都在 pg_catalog 中时记录语句 |
| `pgaudit.log_client` | `off` | 向客户端显示审计日志消息 |
| `pgaudit.log_level` | `log` | 审计条目的日志级别 |
| `pgaudit.log_parameter` | `off` | 在日志中包含语句参数 |
| `pgaudit.log_parameter_max_size` | `0` | 参数最大字节数（0=无限制） |
| `pgaudit.log_relation` | `off` | 在 SELECT/DML 中为每个关系生成单独的日志条目 |
| `pgaudit.log_rows` | `off` | 在日志中包含行数 |
| `pgaudit.log_statement` | `on` | 在日志中包含语句文本 |
| `pgaudit.log_statement_once` | `off` | 仅在第一个条目中记录语句文本 |
| `pgaudit.role` | (无) | 对象审计日志的主角色 |
{.wide .expand}

### 会话审计日志

记录所有 DML 和 DDL，按关系详细记录：

```sql
SET pgaudit.log = 'write, ddl';
SET pgaudit.log_relation = on;
```

记录除杂项命令外的所有内容：

```sql
SET pgaudit.log = 'all, -misc';
```

输出示例：
```text
AUDIT: SESSION,1,1,DDL,CREATE TABLE,TABLE,public.account,create table account(...)
AUDIT: SESSION,2,1,READ,SELECT,,,select * from account
```

### 对象审计日志

向审计角色授予权限以控制记录哪些关系：

```sql
SET pgaudit.role = 'auditor';

GRANT SELECT, DELETE
   ON public.account
   TO auditor;
```

现在对 `account` 表的任何 `SELECT` 或 `DELETE` 操作都会被审计记录。

### 日志格式

条目为 CSV 格式，包含以下字段：`AUDIT_TYPE`、`STATEMENT_ID`、`SUBSTATEMENT_ID`、`CLASS`、`COMMAND`、`OBJECT_TYPE`、`OBJECT_NAME`、`STATEMENT`、`PARAMETER`。

### 日志边界

审计输出使用尽力而为的 PostgreSQL 日志机制，不具备事务持久性。回滚的语句可能留下记录，已提交事务也不保证具有持久化审计记录。应单独保护和收集日志，不能将其视为事务完整的账本。
