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
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgaudit`**](/ext/e/pgaudit) | `18.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7100  | [**`pgaudit`**](/ext/e/pgaudit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgauditlogtofile`](/ext/e/pgauditlogtofile) [`set_user`](/ext/e/set_user) [`pg_permissions`](/ext/e/pg_permissions) [`pg_auth_mon`](/ext/e/pg_auth_mon) [`pg_auditor`](/ext/e/pg_auditor) [`safeupdate`](/ext/e/safeupdate) [`pg_drop_events`](/ext/e/pg_drop_events) [`table_log`](/ext/e/table_log) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pg15=pgaudit17, pg14=pgaudit16


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `18.0` | {{< pgvers "18,17,16,15,14" >}} | `pgaudit` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `18.0` | {{< pgvers "18,17,16,15,14" >}} | `pgaudit_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `18.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgaudit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 2 | AVAIL PGDG 16.1 2 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.6.3 4 |
| el8.aarch64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 2 | AVAIL PGDG 16.1 2 | AVAIL PGDG 1.7.1 2 | AVAIL PGDG 1.6.3 2 |
| el9.x86_64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 2 | AVAIL PGDG 16.1 2 | AVAIL PGDG 1.7.1 3 | AVAIL PGDG 1.6.3 2 |
| el9.aarch64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 2 | AVAIL PGDG 16.1 2 | AVAIL PGDG 1.7.1 2 | AVAIL PGDG 1.6.3 2 |
| el10.x86_64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
| el10.aarch64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
| d12.x86_64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
| d12.aarch64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
| d13.x86_64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
| d13.aarch64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
| u22.x86_64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
| u22.aarch64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
| u24.x86_64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
| u24.aarch64 | AVAIL PGDG 18.0 1 | AVAIL PGDG 17.1 1 | AVAIL PGDG 16.1 1 | AVAIL PGDG 1.7.1 1 | AVAIL PGDG 1.6.3 1 |
@ el8.x86_64 18 pgaudit_18 pgaudit_18-18.0-1PGDG.rhel8.x86_64.rpm pgdg 18.0 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgaudit_18-18.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgaudit_18 pgaudit_18-18.0-1PGDG.rhel8.aarch64.rpm pgdg 18.0 27.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgaudit_18-18.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgaudit_18 pgaudit_18-18.0-1PGDG.rhel9.x86_64.rpm pgdg 18.0 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgaudit_18-18.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgaudit_18 pgaudit_18-18.0-1PGDG.rhel9.aarch64.rpm pgdg 18.0 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgaudit_18-18.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgaudit_18 pgaudit_18-18.0-1PGDG.rhel10.x86_64.rpm pgdg 18.0 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgaudit_18-18.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgaudit_18 pgaudit_18-18.0-1PGDG.rhel10.aarch64.rpm pgdg 18.0 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgaudit_18-18.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-2.pgdg12+1_amd64.deb pgdg 18.0 47.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-2.pgdg12+1_arm64.deb pgdg 18.0 46.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-2.pgdg13+1_amd64.deb pgdg 18.0 47.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-2.pgdg13+1_arm64.deb pgdg 18.0 46.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-2.pgdg22.04+1_amd64.deb pgdg 18.0 48.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-2.pgdg22.04+1_arm64.deb pgdg 18.0 47.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-2.pgdg24.04+1_amd64.deb pgdg 18.0 47.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgaudit postgresql-18-pgaudit_18.0-2.pgdg24.04+1_arm64.deb pgdg 18.0 46.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-18/postgresql-18-pgaudit_18.0-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgaudit_17 pgaudit_17-17.1-1PGDG.rhel8.x86_64.rpm pgdg 17.1 28.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgaudit_17-17.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgaudit_17 pgaudit_17-17.0-1PGDG.rhel8.x86_64.rpm pgdg 17.0 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgaudit_17-17.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgaudit_17 pgaudit_17-17.1-1PGDG.rhel8.aarch64.rpm pgdg 17.1 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgaudit_17-17.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgaudit_17 pgaudit_17-17.0-1PGDG.rhel8.aarch64.rpm pgdg 17.0 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgaudit_17-17.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgaudit_17 pgaudit_17-17.1-1PGDG.rhel9.x86_64.rpm pgdg 17.1 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgaudit_17-17.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgaudit_17 pgaudit_17-17.0-1PGDG.rhel9.x86_64.rpm pgdg 17.0 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgaudit_17-17.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgaudit_17 pgaudit_17-17.1-1PGDG.rhel9.aarch64.rpm pgdg 17.1 28.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgaudit_17-17.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgaudit_17 pgaudit_17-17.0-1PGDG.rhel9.aarch64.rpm pgdg 17.0 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgaudit_17-17.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgaudit_17 pgaudit_17-17.1-1PGDG.rhel10.x86_64.rpm pgdg 17.1 28.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgaudit_17-17.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgaudit_17 pgaudit_17-17.1-1PGDG.rhel10.aarch64.rpm pgdg 17.1 28.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgaudit_17-17.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg12+1_amd64.deb pgdg 17.1 46.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg12+1_arm64.deb pgdg 17.1 45.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg13+1_amd64.deb pgdg 17.1 46.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg13+1_arm64.deb pgdg 17.1 45.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg22.04+1_amd64.deb pgdg 17.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg22.04+1_arm64.deb pgdg 17.1 52.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg24.04+1_amd64.deb pgdg 17.1 46.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgaudit postgresql-17-pgaudit_17.1-2.pgdg24.04+1_arm64.deb pgdg 17.1 45.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-17/postgresql-17-pgaudit_17.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgaudit_16 pgaudit_16-16.1-1PGDG.rhel8.x86_64.rpm pgdg 16.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgaudit_16-16.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgaudit_16 pgaudit_16-16.0-1PGDG.rhel8.x86_64.rpm pgdg 16.0 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgaudit_16-16.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgaudit_16 pgaudit_16-16.1-1PGDG.rhel8.aarch64.rpm pgdg 16.1 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgaudit_16-16.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgaudit_16 pgaudit_16-16.0-1PGDG.rhel8.aarch64.rpm pgdg 16.0 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgaudit_16-16.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgaudit_16 pgaudit_16-16.1-1PGDG.rhel9.x86_64.rpm pgdg 16.1 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgaudit_16-16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgaudit_16 pgaudit_16-16.0-1PGDG.rhel9.x86_64.rpm pgdg 16.0 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgaudit_16-16.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgaudit_16 pgaudit_16-16.1-1PGDG.rhel9.aarch64.rpm pgdg 16.1 27.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgaudit_16-16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgaudit_16 pgaudit_16-16.0-1PGDG.rhel9.aarch64.rpm pgdg 16.0 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgaudit_16-16.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgaudit_16 pgaudit_16-16.1-1PGDG.rhel10.x86_64.rpm pgdg 16.1 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgaudit_16-16.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgaudit_16 pgaudit_16-16.1-1PGDG.rhel10.aarch64.rpm pgdg 16.1 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgaudit_16-16.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg12+1_amd64.deb pgdg 16.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg12+1_arm64.deb pgdg 16.1 44.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg13+1_amd64.deb pgdg 16.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg13+1_arm64.deb pgdg 16.1 45.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg22.04+1_amd64.deb pgdg 16.1 51.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg22.04+1_arm64.deb pgdg 16.1 50.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg24.04+1_amd64.deb pgdg 16.1 45.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgaudit postgresql-16-pgaudit_16.1-2.pgdg24.04+1_arm64.deb pgdg 16.1 45.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-16/postgresql-16-pgaudit_16.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgaudit17_15 pgaudit17_15-1.7.1-1PGDG.rhel8.x86_64.rpm pgdg 1.7.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgaudit17_15-1.7.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgaudit17_15 pgaudit17_15-1.7.0-1.rhel8.x86_64.rpm pgdg 1.7.0 55.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgaudit17_15-1.7.0-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgaudit17_15 pgaudit17_15-1.7-beta1_1.rhel8.x86_64.rpm pgdg 1.7 55.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgaudit17_15-1.7-beta1_1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgaudit17_15 pgaudit17_15-1.7.1-1PGDG.rhel8.aarch64.rpm pgdg 1.7.1 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgaudit17_15-1.7.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgaudit17_15 pgaudit17_15-1.7.0-1.rhel8.aarch64.rpm pgdg 1.7.0 55.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgaudit17_15-1.7.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgaudit17_15 pgaudit17_15-1.7.1-1PGDG.rhel9.x86_64.rpm pgdg 1.7.1 27.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgaudit17_15-1.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgaudit17_15 pgaudit17_15-1.7.0-1.rhel9.x86_64.rpm pgdg 1.7.0 57.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgaudit17_15-1.7.0-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgaudit17_15 pgaudit17_15-1.7-beta1_1.rhel9.x86_64.rpm pgdg 1.7 56.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgaudit17_15-1.7-beta1_1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgaudit17_15 pgaudit17_15-1.7.1-1PGDG.rhel9.aarch64.rpm pgdg 1.7.1 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgaudit17_15-1.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgaudit17_15 pgaudit17_15-1.7.0-1.rhel9.aarch64.rpm pgdg 1.7.0 56.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgaudit17_15-1.7.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgaudit17_15 pgaudit17_15-1.7.1-1PGDG.rhel10.x86_64.rpm pgdg 1.7.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgaudit17_15-1.7.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgaudit17_15 pgaudit17_15-1.7.1-1PGDG.rhel10.aarch64.rpm pgdg 1.7.1 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgaudit17_15-1.7.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg12+1_amd64.deb pgdg 1.7.1 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg12+1_arm64.deb pgdg 1.7.1 43.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg13+1_amd64.deb pgdg 1.7.1 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg13+1_arm64.deb pgdg 1.7.1 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg22.04+1_amd64.deb pgdg 1.7.1 50.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg22.04+1_arm64.deb pgdg 1.7.1 49.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg24.04+1_amd64.deb pgdg 1.7.1 44.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgaudit postgresql-15-pgaudit_1.7.1-2.pgdg24.04+1_arm64.deb pgdg 1.7.1 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.7/postgresql-15-pgaudit_1.7.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgaudit16_14 pgaudit16_14-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 27.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgaudit16_14-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgaudit16_14 pgaudit16_14-1.6.2-1.rhel8.x86_64.rpm pgdg 1.6.2 56.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgaudit16_14-1.6.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgaudit16_14 pgaudit16_14-1.6.0-1.rhel8.x86_64.rpm pgdg 1.6.0 55.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgaudit16_14-1.6.0-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgaudit16_14 pgaudit16_14-1.6-beta2_1.rhel8.x86_64.rpm pgdg 1.6 55.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgaudit16_14-1.6-beta2_1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgaudit16_14 pgaudit16_14-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgaudit16_14-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgaudit16_14 pgaudit16_14-1.6.2-1.rhel8.aarch64.rpm pgdg 1.6.2 54.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgaudit16_14-1.6.2-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgaudit16_14 pgaudit16_14-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgaudit16_14-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgaudit16_14 pgaudit16_14-1.6.2-1.rhel9.x86_64.rpm pgdg 1.6.2 56.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgaudit16_14-1.6.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgaudit16_14 pgaudit16_14-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 27.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgaudit16_14-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgaudit16_14 pgaudit16_14-1.6.2-1.rhel9.aarch64.rpm pgdg 1.6.2 55.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgaudit16_14-1.6.2-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgaudit16_14 pgaudit16_14-1.6.3-1PGDG.rhel10.x86_64.rpm pgdg 1.6.3 28.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgaudit16_14-1.6.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgaudit16_14 pgaudit16_14-1.6.3-1PGDG.rhel10.aarch64.rpm pgdg 1.6.3 28.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgaudit16_14-1.6.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgaudit postgresql-14-pgaudit_1.6.3-2.pgdg12+1_amd64.deb pgdg 1.6.3 44.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.6/postgresql-14-pgaudit_1.6.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgaudit postgresql-14-pgaudit_1.6.3-2.pgdg12+1_arm64.deb pgdg 1.6.3 43.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.6/postgresql-14-pgaudit_1.6.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgaudit postgresql-14-pgaudit_1.6.3-2.pgdg13+1_amd64.deb pgdg 1.6.3 44.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.6/postgresql-14-pgaudit_1.6.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgaudit postgresql-14-pgaudit_1.6.3-2.pgdg13+1_arm64.deb pgdg 1.6.3 43.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.6/postgresql-14-pgaudit_1.6.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgaudit postgresql-14-pgaudit_1.6.3-2.pgdg22.04+1_amd64.deb pgdg 1.6.3 49.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.6/postgresql-14-pgaudit_1.6.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgaudit postgresql-14-pgaudit_1.6.3-2.pgdg22.04+1_arm64.deb pgdg 1.6.3 48.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.6/postgresql-14-pgaudit_1.6.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgaudit postgresql-14-pgaudit_1.6.3-2.pgdg24.04+1_amd64.deb pgdg 1.6.3 44.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.6/postgresql-14-pgaudit_1.6.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgaudit postgresql-14-pgaudit_1.6.3-2.pgdg24.04+1_arm64.deb pgdg 1.6.3 43.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgaudit-1.6/postgresql-14-pgaudit_1.6.3-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgaudit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgaudit;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgaudit -v 18  # PG 18
pig ext install -y pgaudit -v 17  # PG 17
pig ext install -y pgaudit -v 16  # PG 16
pig ext install -y pgaudit -v 15  # PG 15
pig ext install -y pgaudit -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgaudit_18       # PG 18
dnf install -y pgaudit_17       # PG 17
dnf install -y pgaudit_16       # PG 16
dnf install -y pgaudit_15       # PG 15
dnf install -y pgaudit_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgaudit   # PG 18
apt install -y postgresql-17-pgaudit   # PG 17
apt install -y postgresql-16-pgaudit   # PG 16
apt install -y postgresql-15-pgaudit   # PG 15
apt install -y postgresql-14-pgaudit   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgaudit';
```


**创建扩展**：

```sql
CREATE EXTENSION pgaudit;
```



## 用法

> [pgaudit: 开源 PostgreSQL 审计日志](https://github.com/pgaudit/pgaudit)

pgAudit 通过标准 PostgreSQL 日志功能提供详细的会话和/或对象审计日志，生成政府、金融或 ISO 认证所需的审计追踪。

```sql
CREATE EXTENSION pgaudit;
```

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
```
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
