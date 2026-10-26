---
title: "pg_stat_log"
linkTitle: "pg_stat_log"
description: "按后端类型、数据库、用户、日志级别与 SQLSTATE 统计 PostgreSQL 日志消息。"
weight: 6040
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fabriziomello/pg_stat_log">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fabriziomello/pg_stat_log</div>
    <div class="ext-card__desc">https://github.com/fabriziomello/pg_stat_log</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stat_log`**](/ext/e/pg_stat_log) | `0.3` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6040  | [**`pg_stat_log`**](/ext/e/pg_stat_log) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgelog`](/ext/e/pgelog) [`logerrors`](/ext/e/logerrors) [`pg_sqlog`](/ext/e/pg_sqlog) [`log_fdw`](/ext/e/log_fdw) [`pgaudit`](/ext/e/pgaudit) [`pgdisablelogerror`](/ext/e/pgdisablelogerror) [`pg_auth_mon`](/ext/e/pg_auth_mon) [`pg_tracing`](/ext/e/pg_tracing) [`pg_stat_backtrace`](/ext/e/pg_stat_backtrace) [`pgfr_record`](/ext/e/pgfr_record) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PostgreSQL 18+; shared preload and restart required. Upgrading 0.1/0.2 to 0.3 resets all cumulative statistics; SQL upgrade recreates the view/function, requiring dependent views and custom grants to be restored.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.3` | {{< pgvers "18" >}} | `pg_stat_log` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.3` | {{< pgvers "18" >}} | `pg_stat_log_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.2` | {{< pgvers "18" >}} | `postgresql-$v-stat-log` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.3 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el8.aarch64 | AVAIL PGDG 0.3 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 0.3 5 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el9.aarch64 | AVAIL PGDG 0.3 5 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 0.3 5 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| el10.aarch64 | AVAIL PGDG 0.3 5 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| d12.x86_64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| d12.aarch64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| d13.x86_64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| d13.aarch64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u22.x86_64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u22.aarch64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u24.x86_64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u24.aarch64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u26.x86_64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
| u26.aarch64 | AVAIL PGDG 0.2 3 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 | N/A PGDG - 0 |
@ el8.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.3-1PGDG.rhel8.10.x86_64.rpm pgdg 0.3 29.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_stat_log_18-0.3-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.2-1PGDG.rhel8.10.x86_64.rpm pgdg 0.2 24.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_stat_log_18-0.2-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.1 23.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_stat_log_18-0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.3-1PGDG.rhel8.10.aarch64.rpm pgdg 0.3 28.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_stat_log_18-0.3-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.2-1PGDG.rhel8.10.aarch64.rpm pgdg 0.2 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_stat_log_18-0.2-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.1 23.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_stat_log_18-0.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.3-1PGDG.rhel9.8.x86_64.rpm pgdg 0.3 29.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_log_18-0.3-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.2-1PGDG.rhel9.8.x86_64.rpm pgdg 0.2 24.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_log_18-0.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.8.x86_64.rpm pgdg 0.1 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_log_18-0.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 0.1 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_log_18-0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.6.x86_64.rpm pgdg 0.1 23.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_log_18-0.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.3-1PGDG.rhel9.8.aarch64.rpm pgdg 0.3 29.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_log_18-0.3-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.2-1PGDG.rhel9.8.aarch64.rpm pgdg 0.2 24.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_log_18-0.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.8.aarch64.rpm pgdg 0.1 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_log_18-0.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 0.1 23.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_log_18-0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.6.aarch64.rpm pgdg 0.1 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_log_18-0.1-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.3-1PGDG.rhel10.2.x86_64.rpm pgdg 0.3 29.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_log_18-0.3-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.2-1PGDG.rhel10.2.x86_64.rpm pgdg 0.2 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_log_18-0.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.2.x86_64.rpm pgdg 0.1 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_log_18-0.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 0.1 23.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_log_18-0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.0.x86_64.rpm pgdg 0.1 23.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_log_18-0.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.3-1PGDG.rhel10.2.aarch64.rpm pgdg 0.3 29.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_log_18-0.3-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.2-1PGDG.rhel10.2.aarch64.rpm pgdg 0.2 24.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_log_18-0.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.1 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_log_18-0.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 0.1 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_log_18-0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.0.aarch64.rpm pgdg 0.1 23.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_log_18-0.1-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg12+2_amd64.deb pgdg 0.2 42.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg12+2_amd64.deb
@ d12.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg12+1_amd64.deb pgdg 0.2 42.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg12+1_amd64.deb pgdg 0.1 42.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg12+2_arm64.deb pgdg 0.2 42.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg12+2_arm64.deb
@ d12.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg12+1_arm64.deb pgdg 0.2 42.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg12+1_arm64.deb pgdg 0.1 42.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg13+2_amd64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg13+2_amd64.deb
@ d13.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg13+1_amd64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg13+1_amd64.deb pgdg 0.1 42.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg13+2_arm64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg13+2_arm64.deb
@ d13.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg13+1_arm64.deb pgdg 0.2 42.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg13+1_arm64.deb pgdg 0.1 42.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg22.04+2_amd64.deb pgdg 0.2 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg22.04+2_amd64.deb
@ u22.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg22.04+1_amd64.deb pgdg 0.2 43.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg22.04+1_amd64.deb pgdg 0.1 42.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg22.04+2_arm64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg22.04+2_arm64.deb
@ u22.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg22.04+1_arm64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg22.04+1_arm64.deb pgdg 0.1 42.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg24.04+2_amd64.deb pgdg 0.2 42.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg24.04+2_amd64.deb
@ u24.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg24.04+1_amd64.deb pgdg 0.2 42.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg24.04+1_amd64.deb pgdg 0.1 42.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg24.04+2_arm64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg24.04+2_arm64.deb
@ u24.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg24.04+1_arm64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg24.04+1_arm64.deb pgdg 0.1 42.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg26.04+2_amd64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg26.04+2_amd64.deb
@ u26.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg26.04+1_amd64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg26.04+1_amd64.deb pgdg 0.1 42.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg26.04+2_arm64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg26.04+2_arm64.deb
@ u26.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.2-1.pgdg26.04+1_arm64.deb pgdg 0.2 42.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg26.04+1_arm64.deb pgdg 0.1 42.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_stat_log` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_stat_log;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_stat_log -v 18  # PG 18
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_stat_log_18       # PG 18
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-stat-log   # PG 18
```


**预加载配置**：

```bash
shared_preload_libraries = '$libdir/pg_stat_log';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_stat_log;
```

## 用法

来源：

- [README.md](https://github.com/fabriziomello/pg_stat_log/blob/20b57e2e2eff884bfcf3ede3c095762e614c51d1/README.md)
- [pg_stat_log.control](https://github.com/fabriziomello/pg_stat_log/blob/20b57e2e2eff884bfcf3ede3c095762e614c51d1/pg_stat_log.control)
- [pg_stat_log--0.1.sql](https://github.com/fabriziomello/pg_stat_log/blob/20b57e2e2eff884bfcf3ede3c095762e614c51d1/pg_stat_log--0.1.sql)
- [pg_stat_log--0.1--0.3.sql](https://github.com/fabriziomello/pg_stat_log/blob/20b57e2e2eff884bfcf3ede3c095762e614c51d1/pg_stat_log--0.1--0.3.sql)

`pg_stat_log` 0.3 按后端进程、数据库、角色、严重程度和 SQLSTATE 汇总 PostgreSQL 18+ 日志消息，并可按查询标识符分组。将共享库加入既有预加载列表，重启后再创建 SQL 扩展。默认 SQL 授权允许 `pg_read_all_stats` 查看计数。

### 核心用法

```ini
shared_preload_libraries = 'pg_stat_log'
```

```sql
CREATE EXTENSION pg_stat_log;
SELECT database_name, user_name, query_id, elevel, sqlerrcode_name, count
FROM pg_stat_log
ORDER BY count DESC;
SELECT * FROM pg_stat_log_info();
```

### 运行边界

视图 `pg_stat_log` 在 `pg_stat_log_data()` 的基础上解析名称。`pg_stat_log_info()` 返回 `max_entries`、`num_entries`、`n_dropped` 和 `stats_reset`；`pg_stat_log_reset()` 清空计数并释放容量，其执行权限默认受限。`pg_stat_log.enabled` 和 `pg_stat_log.min_error_level` 控制收集，默认值分别为 true 和 warning。只有进入服务器日志的消息才会计数：`log_min_messages` 可以提前过滤消息，被捕获的异常也不会计入。并行工作进程的消息可能让同一次逻辑故障被多次统计。

`pg_stat_log.compute_query_id` 默认关闭，修改需要重启；PostgreSQL 的 `compute_query_id` 不能设为 off。没有查询标识符时显示 NULL。`pg_stat_log.max_entries` 默认 1024，修改需要重启，容量用尽后会丢弃新的组合，可通过 `n_dropped` 监测。修改容量会在下次启动时重置 PostgreSQL 的全部累积统计。计数可跨正常重启保留，丢弃遥测信息不会保留；崩溃恢复会丢弃累积统计。

0.3 将连接认证、授权和断开分别映射到 `PSL01`、`PSL02`、`PSL03`。收集需要开启对应的服务器日志，并设置 `pg_stat_log.min_error_level = 'log'` 或更低阈值；角色归属于登录角色。

上游 0.1 和 0.2 发布均安装 SQL 版本 0.1。升级到 0.3 需要替换匹配的共享库并重启，首次启动会重置 PostgreSQL 的全部累积统计。随后在每个已安装的数据库中执行 `ALTER EXTENSION pg_stat_log UPDATE TO '0.3'`。升级会重建统计视图和函数：需先删除再重建依赖视图，并重新授予自定义权限；默认的 `pg_read_all_stats` 授权会恢复。
