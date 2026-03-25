---
title: "pgauditlogtofile"
linkTitle: "pgauditlogtofile"
description: "pgAudit 子扩展，将审计日志写入单独的文件中"
weight: 7120
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fmbiete/pgauditlogtofile">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fmbiete/pgauditlogtofile</div>
    <div class="ext-card__desc">https://github.com/fmbiete/pgauditlogtofile</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgauditlogtofile`**](/ext/e/pgauditlogtofile) | `1.8.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7120  | [**`pgauditlogtofile`**](/ext/e/pgauditlogtofile) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pgaudit`](/ext/e/pgaudit) [`pg_auth_mon`](/ext/e/pg_auth_mon) [`logerrors`](/ext/e/logerrors) [`pg_permissions`](/ext/e/pg_permissions) [`login_hook`](/ext/e/login_hook) [`set_user`](/ext/e/set_user) [`pg_drop_events`](/ext/e/pg_drop_events) [`table_log`](/ext/e/table_log) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.8.0` | {{< pgvers "18,17,16,15,14" >}} | `pgauditlogtofile` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.8.0` | {{< pgvers "18,17,16,15,14" >}} | `pgauditlogtofile_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.8.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgauditlogtofile` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.8.1 6 | AVAIL PGDG 1.8.1 9 | AVAIL PGDG 1.8.1 11 | AVAIL PGDG 1.8.1 13 | AVAIL PGDG 1.8.1 18 |
| el8.aarch64 | AVAIL PGDG 1.8.1 6 | AVAIL PGDG 1.8.1 9 | AVAIL PGDG 1.8.1 11 | AVAIL PGDG 1.8.1 13 | AVAIL PGDG 1.8.1 14 |
| el9.x86_64 | AVAIL PGDG 1.8.1 7 | AVAIL PGDG 1.8.1 12 | AVAIL PGDG 1.8.1 14 | AVAIL PGDG 1.8.1 14 | AVAIL PGDG 1.8.1 16 |
| el9.aarch64 | AVAIL PGDG 1.8.1 7 | AVAIL PGDG 1.8.1 12 | AVAIL PGDG 1.8.1 14 | AVAIL PGDG 1.8.1 14 | AVAIL PGDG 1.8.1 14 |
| el10.x86_64 | AVAIL PGDG 1.8.1 7 | AVAIL PGDG 1.8.1 10 | AVAIL PGDG 1.8.1 10 | AVAIL PGDG 1.8.1 8 | AVAIL PGDG 1.8.1 8 |
| el10.aarch64 | AVAIL PGDG 1.8.1 7 | AVAIL PGDG 1.8.1 10 | AVAIL PGDG 1.8.1 10 | AVAIL PGDG 1.8.1 8 | AVAIL PGDG 1.8.1 8 |
| d12.x86_64 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 |
| d12.aarch64 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 |
| d13.x86_64 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 |
| d13.aarch64 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 |
| u22.x86_64 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 |
| u22.aarch64 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 |
| u24.x86_64 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 |
| u24.aarch64 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 | AVAIL PGDG 1.8.0 2 |
@ el8.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgauditlogtofile_18-1.8.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgauditlogtofile_18-1.8.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.7-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.7 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgauditlogtofile_18-1.7.7-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.6-2PGDG.rhel8.x86_64.rpm pgdg 1.7.6 27.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgauditlogtofile_18-1.7.6-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.5-1PGDG.rhel8.x86_64.rpm pgdg 1.7.5 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgauditlogtofile_18-1.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.4-1PGDG.rhel8.x86_64.rpm pgdg 1.7.4 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgauditlogtofile_18-1.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.1 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgauditlogtofile_18-1.8.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.0 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgauditlogtofile_18-1.8.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.7-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.7 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgauditlogtofile_18-1.7.7-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.6-2PGDG.rhel8.aarch64.rpm pgdg 1.7.6 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgauditlogtofile_18-1.7.6-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.5-1PGDG.rhel8.aarch64.rpm pgdg 1.7.5 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgauditlogtofile_18-1.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.4-1PGDG.rhel8.aarch64.rpm pgdg 1.7.4 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgauditlogtofile_18-1.7.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.1 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgauditlogtofile_18-1.8.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.0 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgauditlogtofile_18-1.8.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.7-2PGDG.rhel9.7.x86_64.rpm pgdg 1.7.7 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgauditlogtofile_18-1.7.7-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.6-2PGDG.rhel9.x86_64.rpm pgdg 1.7.6 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgauditlogtofile_18-1.7.6-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.5-1PGDG.rhel9.x86_64.rpm pgdg 1.7.5 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgauditlogtofile_18-1.7.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.3-2PGDG.rhel9.x86_64.rpm pgdg 1.7.3 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgauditlogtofile_18-1.7.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.3-1PGDG.rhel9.x86_64.rpm pgdg 1.7.3 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgauditlogtofile_18-1.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.1 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgauditlogtofile_18-1.8.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.0 28.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgauditlogtofile_18-1.8.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.7-2PGDG.rhel9.7.aarch64.rpm pgdg 1.7.7 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgauditlogtofile_18-1.7.7-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.6-2PGDG.rhel9.aarch64.rpm pgdg 1.7.6 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgauditlogtofile_18-1.7.6-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.5-1PGDG.rhel9.aarch64.rpm pgdg 1.7.5 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgauditlogtofile_18-1.7.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.3-2PGDG.rhel9.aarch64.rpm pgdg 1.7.3 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgauditlogtofile_18-1.7.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.3-1PGDG.rhel9.aarch64.rpm pgdg 1.7.3 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgauditlogtofile_18-1.7.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.1 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgauditlogtofile_18-1.8.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.0 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgauditlogtofile_18-1.8.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.7-2PGDG.rhel10.1.x86_64.rpm pgdg 1.7.7 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgauditlogtofile_18-1.7.7-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.6-2PGDG.rhel10.x86_64.rpm pgdg 1.7.6 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgauditlogtofile_18-1.7.6-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.5-1PGDG.rhel10.x86_64.rpm pgdg 1.7.5 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgauditlogtofile_18-1.7.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.3-2PGDG.rhel10.x86_64.rpm pgdg 1.7.3 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgauditlogtofile_18-1.7.3-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.3-1PGDG.rhel10.x86_64.rpm pgdg 1.7.3 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgauditlogtofile_18-1.7.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.1 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgauditlogtofile_18-1.8.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.8.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.0 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgauditlogtofile_18-1.8.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.7-2PGDG.rhel10.1.aarch64.rpm pgdg 1.7.7 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgauditlogtofile_18-1.7.7-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.6-2PGDG.rhel10.aarch64.rpm pgdg 1.7.6 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgauditlogtofile_18-1.7.6-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.5-1PGDG.rhel10.aarch64.rpm pgdg 1.7.5 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgauditlogtofile_18-1.7.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.3-2PGDG.rhel10.aarch64.rpm pgdg 1.7.3 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgauditlogtofile_18-1.7.3-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 pgauditlogtofile_18 pgauditlogtofile_18-1.7.3-1PGDG.rhel10.aarch64.rpm pgdg 1.7.3 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgauditlogtofile_18-1.7.3-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb pgdg 1.8.0 58.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb pgdg 1.7.7 51.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb pgdg 1.8.0 57.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb pgdg 1.7.7 50.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb pgdg 1.8.0 58.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb pgdg 1.7.7 51.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb pgdg 1.8.0 58.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb pgdg 1.7.7 50.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb pgdg 1.8.0 59.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb pgdg 1.7.7 51.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb pgdg 1.8.0 58.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb pgdg 1.7.7 50.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb pgdg 1.8.0 58.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb pgdg 1.7.7 50.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb pgdg 1.8.0 57.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgauditlogtofile postgresql-18-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb pgdg 1.7.7 49.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-18-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.1 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgauditlogtofile_17-1.8.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgauditlogtofile_17-1.8.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.7-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.7 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgauditlogtofile_17-1.7.7-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.6-2PGDG.rhel8.x86_64.rpm pgdg 1.7.6 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgauditlogtofile_17-1.7.6-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.5-1PGDG.rhel8.x86_64.rpm pgdg 1.7.5 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgauditlogtofile_17-1.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.4-1PGDG.rhel8.x86_64.rpm pgdg 1.7.4 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgauditlogtofile_17-1.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.4-1PGDG.rhel8.x86_64.rpm pgdg 1.6.4 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgauditlogtofile_17-1.6.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgauditlogtofile_17-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgauditlogtofile_17-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.1 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgauditlogtofile_17-1.8.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.0 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgauditlogtofile_17-1.8.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.7-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.7 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgauditlogtofile_17-1.7.7-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.6-2PGDG.rhel8.aarch64.rpm pgdg 1.7.6 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgauditlogtofile_17-1.7.6-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.5-1PGDG.rhel8.aarch64.rpm pgdg 1.7.5 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgauditlogtofile_17-1.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.4-1PGDG.rhel8.aarch64.rpm pgdg 1.7.4 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgauditlogtofile_17-1.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.4-1PGDG.rhel8.aarch64.rpm pgdg 1.6.4 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgauditlogtofile_17-1.6.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgauditlogtofile_17-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgauditlogtofile_17-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.1 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.8.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.0 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.8.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.7-2PGDG.rhel9.7.x86_64.rpm pgdg 1.7.7 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.7.7-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.6-2PGDG.rhel9.x86_64.rpm pgdg 1.7.6 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.7.6-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.5-1PGDG.rhel9.x86_64.rpm pgdg 1.7.5 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.7.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.3-2PGDG.rhel9.x86_64.rpm pgdg 1.7.3 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.7.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.3-1PGDG.rhel9.x86_64.rpm pgdg 1.7.3 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.1-2PGDG.rhel9.x86_64.rpm pgdg 1.7.1 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.7.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.1-1PGDG.rhel9.x86_64.rpm pgdg 1.7.1 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.4-1PGDG.rhel9.x86_64.rpm pgdg 1.6.4 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.6.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgauditlogtofile_17-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.1 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.8.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.0 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.8.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.7-2PGDG.rhel9.7.aarch64.rpm pgdg 1.7.7 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.7.7-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.6-2PGDG.rhel9.aarch64.rpm pgdg 1.7.6 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.7.6-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.5-1PGDG.rhel9.aarch64.rpm pgdg 1.7.5 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.7.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.3-2PGDG.rhel9.aarch64.rpm pgdg 1.7.3 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.7.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.3-1PGDG.rhel9.aarch64.rpm pgdg 1.7.3 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.1-2PGDG.rhel9.aarch64.rpm pgdg 1.7.1 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.7.1-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.1-1PGDG.rhel9.aarch64.rpm pgdg 1.7.1 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.4-1PGDG.rhel9.aarch64.rpm pgdg 1.6.4 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.6.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 22.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgauditlogtofile_17-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.1 28.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.8.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.0 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.8.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.7-2PGDG.rhel10.1.x86_64.rpm pgdg 1.7.7 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.7.7-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.6-2PGDG.rhel10.x86_64.rpm pgdg 1.7.6 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.7.6-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.5-1PGDG.rhel10.x86_64.rpm pgdg 1.7.5 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.7.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.3-2PGDG.rhel10.x86_64.rpm pgdg 1.7.3 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.7.3-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.3-1PGDG.rhel10.x86_64.rpm pgdg 1.7.3 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.7.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.1-2PGDG.rhel10.x86_64.rpm pgdg 1.7.1 25.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.7.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.1-1PGDG.rhel10.x86_64.rpm pgdg 1.7.1 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.7.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.4-4PGDG.rhel10.x86_64.rpm pgdg 1.6.4 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgauditlogtofile_17-1.6.4-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.1 28.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.8.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.8.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.0 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.8.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.7-2PGDG.rhel10.1.aarch64.rpm pgdg 1.7.7 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.7.7-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.6-2PGDG.rhel10.aarch64.rpm pgdg 1.7.6 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.7.6-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.5-1PGDG.rhel10.aarch64.rpm pgdg 1.7.5 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.7.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.3-2PGDG.rhel10.aarch64.rpm pgdg 1.7.3 25.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.7.3-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.3-1PGDG.rhel10.aarch64.rpm pgdg 1.7.3 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.7.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.1-2PGDG.rhel10.aarch64.rpm pgdg 1.7.1 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.7.1-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.7.1-1PGDG.rhel10.aarch64.rpm pgdg 1.7.1 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.7.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgauditlogtofile_17 pgauditlogtofile_17-1.6.4-4PGDG.rhel10.aarch64.rpm pgdg 1.6.4 22.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgauditlogtofile_17-1.6.4-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb pgdg 1.8.0 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb pgdg 1.7.7 50.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb pgdg 1.8.0 57.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb pgdg 1.7.7 50.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb pgdg 1.8.0 58.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb pgdg 1.7.7 51.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb pgdg 1.8.0 58.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb pgdg 1.7.7 50.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb pgdg 1.8.0 70.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb pgdg 1.7.7 55.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb pgdg 1.8.0 69.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb pgdg 1.7.7 54.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb pgdg 1.8.0 58.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb pgdg 1.7.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb pgdg 1.8.0 57.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgauditlogtofile postgresql-17-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb pgdg 1.7.7 49.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-17-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.1 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.8.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.8.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.7-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.7 27.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.7.7-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.6-2PGDG.rhel8.x86_64.rpm pgdg 1.7.6 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.7.6-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.5-1PGDG.rhel8.x86_64.rpm pgdg 1.7.5 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.4-1PGDG.rhel8.x86_64.rpm pgdg 1.7.4 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.4-1PGDG.rhel8.x86_64.rpm pgdg 1.6.4 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.6.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.5.12-1PGDG.rhel8.x86_64.rpm pgdg 1.5.12 19.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgauditlogtofile_16-1.5.12-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.1 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.8.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.0 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.8.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.7-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.7 27.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.7.7-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.6-2PGDG.rhel8.aarch64.rpm pgdg 1.7.6 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.7.6-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.5-1PGDG.rhel8.aarch64.rpm pgdg 1.7.5 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.4-1PGDG.rhel8.aarch64.rpm pgdg 1.7.4 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.4-1PGDG.rhel8.aarch64.rpm pgdg 1.6.4 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.6.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 22.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.5.12-1PGDG.rhel8.aarch64.rpm pgdg 1.5.12 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgauditlogtofile_16-1.5.12-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.1 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.8.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.0 27.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.8.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.7-2PGDG.rhel9.7.x86_64.rpm pgdg 1.7.7 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.7.7-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.6-2PGDG.rhel9.x86_64.rpm pgdg 1.7.6 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.7.6-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.5-1PGDG.rhel9.x86_64.rpm pgdg 1.7.5 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.7.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.3-2PGDG.rhel9.x86_64.rpm pgdg 1.7.3 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.7.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.3-1PGDG.rhel9.x86_64.rpm pgdg 1.7.3 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.1-2PGDG.rhel9.x86_64.rpm pgdg 1.7.1 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.7.1-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.1-1PGDG.rhel9.x86_64.rpm pgdg 1.7.1 24.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.4-1PGDG.rhel9.x86_64.rpm pgdg 1.6.4 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.6.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 22.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 21.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.5.12-1PGDG.rhel9.x86_64.rpm pgdg 1.5.12 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgauditlogtofile_16-1.5.12-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.1 28.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.8.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.0 27.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.8.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.7-2PGDG.rhel9.7.aarch64.rpm pgdg 1.7.7 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.7.7-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.6-2PGDG.rhel9.aarch64.rpm pgdg 1.7.6 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.7.6-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.5-1PGDG.rhel9.aarch64.rpm pgdg 1.7.5 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.7.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.3-2PGDG.rhel9.aarch64.rpm pgdg 1.7.3 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.7.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.3-1PGDG.rhel9.aarch64.rpm pgdg 1.7.3 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.1-2PGDG.rhel9.aarch64.rpm pgdg 1.7.1 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.7.1-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.1-1PGDG.rhel9.aarch64.rpm pgdg 1.7.1 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.4-1PGDG.rhel9.aarch64.rpm pgdg 1.6.4 22.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.6.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 22.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 21.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.5.12-1PGDG.rhel9.aarch64.rpm pgdg 1.5.12 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgauditlogtofile_16-1.5.12-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.1 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.8.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.0 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.8.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.7-2PGDG.rhel10.1.x86_64.rpm pgdg 1.7.7 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.7.7-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.6-2PGDG.rhel10.x86_64.rpm pgdg 1.7.6 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.7.6-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.5-1PGDG.rhel10.x86_64.rpm pgdg 1.7.5 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.7.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.3-2PGDG.rhel10.x86_64.rpm pgdg 1.7.3 25.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.7.3-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.3-1PGDG.rhel10.x86_64.rpm pgdg 1.7.3 25.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.7.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.1-2PGDG.rhel10.x86_64.rpm pgdg 1.7.1 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.7.1-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.1-1PGDG.rhel10.x86_64.rpm pgdg 1.7.1 24.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.7.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.4-3PGDG.rhel10.x86_64.rpm pgdg 1.6.4 22.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgauditlogtofile_16-1.6.4-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.1 28.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.8.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.8.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.0 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.8.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.7-2PGDG.rhel10.1.aarch64.rpm pgdg 1.7.7 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.7.7-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.6-2PGDG.rhel10.aarch64.rpm pgdg 1.7.6 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.7.6-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.5-1PGDG.rhel10.aarch64.rpm pgdg 1.7.5 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.7.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.3-2PGDG.rhel10.aarch64.rpm pgdg 1.7.3 25.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.7.3-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.3-1PGDG.rhel10.aarch64.rpm pgdg 1.7.3 24.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.7.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.1-2PGDG.rhel10.aarch64.rpm pgdg 1.7.1 24.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.7.1-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.7.1-1PGDG.rhel10.aarch64.rpm pgdg 1.7.1 24.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.7.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgauditlogtofile_16 pgauditlogtofile_16-1.6.4-3PGDG.rhel10.aarch64.rpm pgdg 1.6.4 22.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgauditlogtofile_16-1.6.4-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb pgdg 1.8.0 58.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb pgdg 1.7.7 50.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb pgdg 1.8.0 57.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb pgdg 1.7.7 50.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb pgdg 1.8.0 58.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb pgdg 1.7.7 51.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb pgdg 1.8.0 58.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb pgdg 1.7.7 50.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb pgdg 1.8.0 70.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb pgdg 1.7.7 55.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb pgdg 1.8.0 69.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb pgdg 1.7.7 54.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb pgdg 1.8.0 58.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb pgdg 1.7.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb pgdg 1.8.0 57.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgauditlogtofile postgresql-16-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb pgdg 1.7.7 49.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-16-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.8.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.0 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.8.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.7-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.7 28.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.7.7-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.6-1PGDG.rhel8.x86_64.rpm pgdg 1.7.6 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.7.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.5-1PGDG.rhel8.x86_64.rpm pgdg 1.7.5 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.4-1PGDG.rhel8.x86_64.rpm pgdg 1.7.4 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.4-1PGDG.rhel8.x86_64.rpm pgdg 1.6.4 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.6.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.12-2PGDG.rhel8.x86_64.rpm pgdg 1.5.12 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.5.12-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.10-1.rhel8.x86_64.rpm pgdg 1.5.10 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.5.10-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.6-2.rhel8.x86_64.rpm pgdg 1.5.6 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgauditlogtofile_15-1.5.6-2.rhel8.x86_64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.8.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.0 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.8.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.7-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.7 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.7.7-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.6-1PGDG.rhel8.aarch64.rpm pgdg 1.7.6 27.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.7.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.5-1PGDG.rhel8.aarch64.rpm pgdg 1.7.5 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.4-1PGDG.rhel8.aarch64.rpm pgdg 1.7.4 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.4-1PGDG.rhel8.aarch64.rpm pgdg 1.6.4 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.6.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 22.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.12-2PGDG.rhel8.aarch64.rpm pgdg 1.5.12 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.5.12-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.10-1.rhel8.aarch64.rpm pgdg 1.5.10 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.5.10-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.6-2.rhel8.aarch64.rpm pgdg 1.5.6 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgauditlogtofile_15-1.5.6-2.rhel8.aarch64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.1 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.8.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.8.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.7-2PGDG.rhel9.7.x86_64.rpm pgdg 1.7.7 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.7.7-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.6-1PGDG.rhel9.x86_64.rpm pgdg 1.7.6 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.7.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.5-1PGDG.rhel9.x86_64.rpm pgdg 1.7.5 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.7.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.3-1PGDG.rhel9.x86_64.rpm pgdg 1.7.3 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.1-1PGDG.rhel9.x86_64.rpm pgdg 1.7.1 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.4-1PGDG.rhel9.x86_64.rpm pgdg 1.6.4 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.6.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 23.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.12-1PGDG.rhel9.x86_64.rpm pgdg 1.5.12 19.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.5.12-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.10-1.rhel9.x86_64.rpm pgdg 1.5.10 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.5.10-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.6-2.rhel9.x86_64.rpm pgdg 1.5.6 18.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgauditlogtofile_15-1.5.6-2.rhel9.x86_64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.1 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.8.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.0 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.8.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.7-2PGDG.rhel9.7.aarch64.rpm pgdg 1.7.7 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.7.7-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.6-1PGDG.rhel9.aarch64.rpm pgdg 1.7.6 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.7.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.5-1PGDG.rhel9.aarch64.rpm pgdg 1.7.5 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.7.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.3-1PGDG.rhel9.aarch64.rpm pgdg 1.7.3 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.1-1PGDG.rhel9.aarch64.rpm pgdg 1.7.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.4-1PGDG.rhel9.aarch64.rpm pgdg 1.6.4 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.6.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.12-1PGDG.rhel9.aarch64.rpm pgdg 1.5.12 19.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.5.12-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.10-1.rhel9.aarch64.rpm pgdg 1.5.10 18.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.5.10-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.5.6-2.rhel9.aarch64.rpm pgdg 1.5.6 18.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgauditlogtofile_15-1.5.6-2.rhel9.aarch64.rpm
@ el10.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.1 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgauditlogtofile_15-1.8.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgauditlogtofile_15-1.8.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.7-2PGDG.rhel10.1.x86_64.rpm pgdg 1.7.7 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgauditlogtofile_15-1.7.7-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.6-1PGDG.rhel10.x86_64.rpm pgdg 1.7.6 27.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgauditlogtofile_15-1.7.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.5-1PGDG.rhel10.x86_64.rpm pgdg 1.7.5 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgauditlogtofile_15-1.7.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.3-1PGDG.rhel10.x86_64.rpm pgdg 1.7.3 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgauditlogtofile_15-1.7.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.1-1PGDG.rhel10.x86_64.rpm pgdg 1.7.1 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgauditlogtofile_15-1.7.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.4-3PGDG.rhel10.x86_64.rpm pgdg 1.6.4 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgauditlogtofile_15-1.6.4-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.1 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgauditlogtofile_15-1.8.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.8.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgauditlogtofile_15-1.8.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.7-2PGDG.rhel10.1.aarch64.rpm pgdg 1.7.7 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgauditlogtofile_15-1.7.7-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.6-1PGDG.rhel10.aarch64.rpm pgdg 1.7.6 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgauditlogtofile_15-1.7.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.5-1PGDG.rhel10.aarch64.rpm pgdg 1.7.5 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgauditlogtofile_15-1.7.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.3-1PGDG.rhel10.aarch64.rpm pgdg 1.7.3 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgauditlogtofile_15-1.7.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.7.1-1PGDG.rhel10.aarch64.rpm pgdg 1.7.1 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgauditlogtofile_15-1.7.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgauditlogtofile_15 pgauditlogtofile_15-1.6.4-3PGDG.rhel10.aarch64.rpm pgdg 1.6.4 24.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgauditlogtofile_15-1.6.4-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb pgdg 1.8.0 60.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb pgdg 1.7.7 51.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb pgdg 1.8.0 58.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb pgdg 1.7.7 50.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb pgdg 1.8.0 60.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb pgdg 1.7.7 51.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb pgdg 1.8.0 59.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb pgdg 1.7.7 50.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb pgdg 1.8.0 72.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb pgdg 1.7.7 56.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb pgdg 1.8.0 71.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb pgdg 1.7.7 55.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb pgdg 1.8.0 60.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb pgdg 1.7.7 51.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb pgdg 1.8.0 59.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgauditlogtofile postgresql-15-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb pgdg 1.7.7 50.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-15-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.1-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.8.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.0-1PGDG.rhel8.10.x86_64.rpm pgdg 1.8.0 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.8.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.7-2PGDG.rhel8.10.x86_64.rpm pgdg 1.7.7 28.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.7.7-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.6-1PGDG.rhel8.x86_64.rpm pgdg 1.7.6 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.7.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.5-1PGDG.rhel8.x86_64.rpm pgdg 1.7.5 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.7.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.4-1PGDG.rhel8.x86_64.rpm pgdg 1.7.4 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.7.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.4-1PGDG.rhel8.x86_64.rpm pgdg 1.6.4 24.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.6.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.3-1PGDG.rhel8.x86_64.rpm pgdg 1.6.3 24.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.2-1PGDG.rhel8.x86_64.rpm pgdg 1.6.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.0-1PGDG.rhel8.x86_64.rpm pgdg 1.6.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.12-2PGDG.rhel8.x86_64.rpm pgdg 1.5.12 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.5.12-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.12-1PGDG.rhel8.x86_64.rpm pgdg 1.5.12 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.5.12-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.10-1.rhel8.x86_64.rpm pgdg 1.5.10 19.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.5.10-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.6-1.rhel8.x86_64.rpm pgdg 1.5.6 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.5.6-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.5-1.rhel8.x86_64.rpm pgdg 1.5.5 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.5.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.1-1.rhel8.x86_64.rpm pgdg 1.5.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.5.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.4-1.rhel8.x86_64.rpm pgdg 1.4 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.3-1.rhel8.x86_64.rpm pgdg 1.3 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgauditlogtofile_14-1.3-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.1-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.1 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.8.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.0-1PGDG.rhel8.10.aarch64.rpm pgdg 1.8.0 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.8.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.7-2PGDG.rhel8.10.aarch64.rpm pgdg 1.7.7 27.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.7.7-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.6-1PGDG.rhel8.aarch64.rpm pgdg 1.7.6 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.7.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.5-1PGDG.rhel8.aarch64.rpm pgdg 1.7.5 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.7.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.4-1PGDG.rhel8.aarch64.rpm pgdg 1.7.4 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.7.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.4-1PGDG.rhel8.aarch64.rpm pgdg 1.6.4 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.6.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.3-1PGDG.rhel8.aarch64.rpm pgdg 1.6.3 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.2-1PGDG.rhel8.aarch64.rpm pgdg 1.6.2 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.0-1PGDG.rhel8.aarch64.rpm pgdg 1.6.0 22.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.12-2PGDG.rhel8.aarch64.rpm pgdg 1.5.12 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.5.12-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.12-1PGDG.rhel8.aarch64.rpm pgdg 1.5.12 19.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.5.12-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.10-1.rhel8.aarch64.rpm pgdg 1.5.10 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.5.10-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.6-1.rhel8.aarch64.rpm pgdg 1.5.6 17.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgauditlogtofile_14-1.5.6-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.1-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.1 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.8.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.0-1PGDG.rhel9.7.x86_64.rpm pgdg 1.8.0 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.8.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.7-2PGDG.rhel9.7.x86_64.rpm pgdg 1.7.7 27.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.7.7-2PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.6-1PGDG.rhel9.x86_64.rpm pgdg 1.7.6 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.7.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.5-1PGDG.rhel9.x86_64.rpm pgdg 1.7.5 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.7.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.3-1PGDG.rhel9.x86_64.rpm pgdg 1.7.3 26.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.7.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.1-1PGDG.rhel9.x86_64.rpm pgdg 1.7.1 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.7.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.4-1PGDG.rhel9.x86_64.rpm pgdg 1.6.4 23.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.6.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.3-1PGDG.rhel9.x86_64.rpm pgdg 1.6.3 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.2-1PGDG.rhel9.x86_64.rpm pgdg 1.6.2 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.0-1PGDG.rhel9.x86_64.rpm pgdg 1.6.0 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.12-1PGDG.rhel9.x86_64.rpm pgdg 1.5.12 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.5.12-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.10-1.rhel9.x86_64.rpm pgdg 1.5.10 19.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.5.10-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.6-1.rhel9.x86_64.rpm pgdg 1.5.6 18.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.5.6-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.5-1.rhel9.x86_64.rpm pgdg 1.5.5 33.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.5.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.1-1.rhel9.x86_64.rpm pgdg 1.5.1 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgauditlogtofile_14-1.5.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.1-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.1 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.8.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.0-1PGDG.rhel9.7.aarch64.rpm pgdg 1.8.0 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.8.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.7-2PGDG.rhel9.7.aarch64.rpm pgdg 1.7.7 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.7.7-2PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.6-1PGDG.rhel9.aarch64.rpm pgdg 1.7.6 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.7.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.5-1PGDG.rhel9.aarch64.rpm pgdg 1.7.5 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.7.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.3-1PGDG.rhel9.aarch64.rpm pgdg 1.7.3 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.7.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.1-1PGDG.rhel9.aarch64.rpm pgdg 1.7.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.7.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.4-1PGDG.rhel9.aarch64.rpm pgdg 1.6.4 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.6.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.3-1PGDG.rhel9.aarch64.rpm pgdg 1.6.3 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.2-1PGDG.rhel9.aarch64.rpm pgdg 1.6.2 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.0-1PGDG.rhel9.aarch64.rpm pgdg 1.6.0 23.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.12-1PGDG.rhel9.aarch64.rpm pgdg 1.5.12 19.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.5.12-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.10-1.rhel9.aarch64.rpm pgdg 1.5.10 18.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.5.10-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.5.6-1.rhel9.aarch64.rpm pgdg 1.5.6 17.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgauditlogtofile_14-1.5.6-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.1-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.1 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgauditlogtofile_14-1.8.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.0-1PGDG.rhel10.1.x86_64.rpm pgdg 1.8.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgauditlogtofile_14-1.8.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.7-2PGDG.rhel10.1.x86_64.rpm pgdg 1.7.7 27.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgauditlogtofile_14-1.7.7-2PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.6-1PGDG.rhel10.x86_64.rpm pgdg 1.7.6 26.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgauditlogtofile_14-1.7.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.5-1PGDG.rhel10.x86_64.rpm pgdg 1.7.5 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgauditlogtofile_14-1.7.5-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.3-1PGDG.rhel10.x86_64.rpm pgdg 1.7.3 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgauditlogtofile_14-1.7.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.1-1PGDG.rhel10.x86_64.rpm pgdg 1.7.1 26.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgauditlogtofile_14-1.7.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.4-3PGDG.rhel10.x86_64.rpm pgdg 1.6.4 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgauditlogtofile_14-1.6.4-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.1-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.1 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgauditlogtofile_14-1.8.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.8.0-1PGDG.rhel10.1.aarch64.rpm pgdg 1.8.0 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgauditlogtofile_14-1.8.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.7-2PGDG.rhel10.1.aarch64.rpm pgdg 1.7.7 27.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgauditlogtofile_14-1.7.7-2PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.6-1PGDG.rhel10.aarch64.rpm pgdg 1.7.6 26.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgauditlogtofile_14-1.7.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.5-1PGDG.rhel10.aarch64.rpm pgdg 1.7.5 26.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgauditlogtofile_14-1.7.5-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.3-1PGDG.rhel10.aarch64.rpm pgdg 1.7.3 26.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgauditlogtofile_14-1.7.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.7.1-1PGDG.rhel10.aarch64.rpm pgdg 1.7.1 26.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgauditlogtofile_14-1.7.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgauditlogtofile_14 pgauditlogtofile_14-1.6.4-3PGDG.rhel10.aarch64.rpm pgdg 1.6.4 24.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgauditlogtofile_14-1.6.4-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb pgdg 1.8.0 59.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.8.0-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb pgdg 1.7.7 51.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.7.7-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb pgdg 1.8.0 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.8.0-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb pgdg 1.7.7 50.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.7.7-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb pgdg 1.8.0 60.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.8.0-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb pgdg 1.7.7 51.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.7.7-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb pgdg 1.8.0 58.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.8.0-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb pgdg 1.7.7 50.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.7.7-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb pgdg 1.8.0 72.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.8.0-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb pgdg 1.7.7 56.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.7.7-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb pgdg 1.8.0 70.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.8.0-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb pgdg 1.7.7 55.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.7.7-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb pgdg 1.8.0 60.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.8.0-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb pgdg 1.7.7 51.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.7.7-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb pgdg 1.8.0 58.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.8.0-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgauditlogtofile postgresql-14-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb pgdg 1.7.7 50.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgauditlogtofile/postgresql-14-pgauditlogtofile_1.7.7-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgauditlogtofile` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgauditlogtofile;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgauditlogtofile -v 18  # PG 18
pig ext install -y pgauditlogtofile -v 17  # PG 17
pig ext install -y pgauditlogtofile -v 16  # PG 16
pig ext install -y pgauditlogtofile -v 15  # PG 15
pig ext install -y pgauditlogtofile -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgauditlogtofile_18       # PG 18
dnf install -y pgauditlogtofile_17       # PG 17
dnf install -y pgauditlogtofile_16       # PG 16
dnf install -y pgauditlogtofile_15       # PG 15
dnf install -y pgauditlogtofile_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgauditlogtofile   # PG 18
apt install -y postgresql-17-pgauditlogtofile   # PG 17
apt install -y postgresql-16-pgauditlogtofile   # PG 16
apt install -y postgresql-15-pgauditlogtofile   # PG 15
apt install -y postgresql-14-pgauditlogtofile   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pgauditlogtofile';
```


**创建扩展**：

```sql
CREATE EXTENSION pgauditlogtofile;
```



## 用法

> [pgauditlogtofile: 将 pgAudit 日志重定向到独立文件](https://github.com/fmbiete/pgauditlogtofile)

`pgauditlogtofile` 是 pgAudit 的附加组件，将审计日志行重定向到单独的文件而非 PostgreSQL 服务器日志，并支持自动轮转。

```sql
CREATE EXTENSION pgauditlogtofile;
```

### 配置参数

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pgaudit.log_format` | `csv` | 输出格式：`csv` 或 `json` |
| `pgaudit.log_directory` | `log` | 审计文件目录（为空则禁用） |
| `pgaudit.log_filename` | `audit-%Y%m%d_%H%M.log` | 文件名模式（支持时间模式） |
| `pgaudit.log_file_mode` | `0600` | 审计日志的文件权限 |
| `pgaudit.log_rotation_age` | `1440` | 轮转间隔（分钟，1天） |
| `pgaudit.log_connections` | `off` | 记录连接事件（需要 `log_connections = on`） |
| `pgaudit.log_disconnections` | `off` | 记录断开事件（需要 `log_disconnections = on`） |
| `pgaudit.log_autoclose_minutes` | `0` | 不活动 N 分钟后自动关闭文件句柄 |
| `pgaudit.log_execution_time` | `off` | 测量语句执行时间 |
| `pgaudit.log_execution_memory` | `off` | 测量语句内存占用 |

### 设置

添加到 `postgresql.conf`：

```ini
shared_preload_libraries = 'pgaudit, pgauditlogtofile'
pgaudit.log_directory = 'log'
pgaudit.log_filename = 'audit-%Y%m%d_%H%M.log'
pgaudit.log_rotation_age = 1440
```

审计条目将写入单独的文件，服务器日志保持整洁。
