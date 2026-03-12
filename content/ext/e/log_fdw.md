---
title: "log_fdw"
linkTitle: "log_fdw"
description: "访问PostgreSQL日志文件的FDW"
weight: 8810
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/aws/postgresql-logfdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">aws/postgresql-logfdw</div>
    <div class="ext-card__desc">https://github.com/aws/postgresql-logfdw</div>
  </a>
  <a class="ext-card ext-card--source" href="log_fdw-1.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">log_fdw-1.4.tar.gz</div>
    <div class="ext-card__desc">log_fdw-1.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`log_fdw`**](/ext/e/log_fdw) | `1.4` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8810  | [**`log_fdw`**](/ext/e/log_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_sqlog`](/ext/e/pg_sqlog) [`pgaudit`](/ext/e/pgaudit) [`file_fdw`](/ext/e/file_fdw) [`auto_explain`](/ext/e/auto_explain) [`pgauditlogtofile`](/ext/e/pgauditlogtofile) [`logerrors`](/ext/e/logerrors) [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG18 fixed by vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `log_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `log_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-log-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el8.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el9.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el9.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el10.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 | AVAIL PIGSTY 1.4 2 |
| el10.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d12.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 | AVAIL PIGSTY 1.4 1 |
@ el8.x86_64 18 log_fdw_18 log_fdw_18-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 20.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/log_fdw_18-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 log_fdw_18 log_fdw_18-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/log_fdw_18-1.4-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 log_fdw_18 log_fdw_18-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/log_fdw_18-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 log_fdw_18 log_fdw_18-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/log_fdw_18-1.4-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 log_fdw_18 log_fdw_18-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/log_fdw_18-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 log_fdw_18 log_fdw_18-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/log_fdw_18-1.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-log-fdw postgresql-18-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb pigsty 1.4 27.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-18-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-log-fdw postgresql-18-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb pigsty 1.4 27.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-18-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-log-fdw postgresql-18-log-fdw_1.4-1PIGSTY~trixie_amd64.deb pigsty 1.4 27.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-18-log-fdw_1.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-log-fdw postgresql-18-log-fdw_1.4-1PIGSTY~trixie_arm64.deb pigsty 1.4 27.4KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-18-log-fdw_1.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-log-fdw postgresql-18-log-fdw_1.4-1PIGSTY~jammy_amd64.deb pigsty 1.4 29.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-18-log-fdw_1.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-log-fdw postgresql-18-log-fdw_1.4-1PIGSTY~jammy_arm64.deb pigsty 1.4 29.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-18-log-fdw_1.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-log-fdw postgresql-18-log-fdw_1.4-1PIGSTY~noble_amd64.deb pigsty 1.4 28.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-18-log-fdw_1.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-log-fdw postgresql-18-log-fdw_1.4-1PIGSTY~noble_arm64.deb pigsty 1.4 28.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-18-log-fdw_1.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 log_fdw_17 log_fdw_17-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 20.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/log_fdw_17-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 log_fdw_17 log_fdw_17-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 19.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/log_fdw_17-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 log_fdw_17 log_fdw_17-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/log_fdw_17-1.4-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 log_fdw_17 log_fdw_17-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 19.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/log_fdw_17-1.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 log_fdw_17 log_fdw_17-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/log_fdw_17-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 log_fdw_17 log_fdw_17-1.4-1PIGSTY.el9.x86_64.rpm pigsty 1.4 19.8KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/log_fdw_17-1.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 log_fdw_17 log_fdw_17-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/log_fdw_17-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 log_fdw_17 log_fdw_17-1.4-1PIGSTY.el9.aarch64.rpm pigsty 1.4 19.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/log_fdw_17-1.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 log_fdw_17 log_fdw_17-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/log_fdw_17-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 log_fdw_17 log_fdw_17-1.4-1PIGSTY.el10.x86_64.rpm pigsty 1.4 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/log_fdw_17-1.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 log_fdw_17 log_fdw_17-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/log_fdw_17-1.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-log-fdw postgresql-17-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb pigsty 1.4 27.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-17-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-log-fdw postgresql-17-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb pigsty 1.4 27.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-17-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-log-fdw postgresql-17-log-fdw_1.4-1PIGSTY~trixie_amd64.deb pigsty 1.4 27.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-17-log-fdw_1.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-log-fdw postgresql-17-log-fdw_1.4-1PIGSTY~trixie_arm64.deb pigsty 1.4 27.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-17-log-fdw_1.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-log-fdw postgresql-17-log-fdw_1.4-1PIGSTY~jammy_amd64.deb pigsty 1.4 34.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-17-log-fdw_1.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-log-fdw postgresql-17-log-fdw_1.4-1PIGSTY~jammy_arm64.deb pigsty 1.4 34.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-17-log-fdw_1.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-log-fdw postgresql-17-log-fdw_1.4-1PIGSTY~noble_amd64.deb pigsty 1.4 28.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-17-log-fdw_1.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-log-fdw postgresql-17-log-fdw_1.4-1PIGSTY~noble_arm64.deb pigsty 1.4 28.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-17-log-fdw_1.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 log_fdw_16 log_fdw_16-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 20.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/log_fdw_16-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 log_fdw_16 log_fdw_16-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 19.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/log_fdw_16-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 log_fdw_16 log_fdw_16-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/log_fdw_16-1.4-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 log_fdw_16 log_fdw_16-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 19.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/log_fdw_16-1.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 log_fdw_16 log_fdw_16-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/log_fdw_16-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 log_fdw_16 log_fdw_16-1.4-1PIGSTY.el9.x86_64.rpm pigsty 1.4 19.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/log_fdw_16-1.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 log_fdw_16 log_fdw_16-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/log_fdw_16-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 log_fdw_16 log_fdw_16-1.4-1PIGSTY.el9.aarch64.rpm pigsty 1.4 19.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/log_fdw_16-1.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 log_fdw_16 log_fdw_16-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/log_fdw_16-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 log_fdw_16 log_fdw_16-1.4-1PIGSTY.el10.x86_64.rpm pigsty 1.4 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/log_fdw_16-1.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 log_fdw_16 log_fdw_16-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/log_fdw_16-1.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-log-fdw postgresql-16-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb pigsty 1.4 27.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-16-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-log-fdw postgresql-16-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb pigsty 1.4 27.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-16-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-log-fdw postgresql-16-log-fdw_1.4-1PIGSTY~trixie_amd64.deb pigsty 1.4 27.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-16-log-fdw_1.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-log-fdw postgresql-16-log-fdw_1.4-1PIGSTY~trixie_arm64.deb pigsty 1.4 27.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-16-log-fdw_1.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-log-fdw postgresql-16-log-fdw_1.4-1PIGSTY~jammy_amd64.deb pigsty 1.4 34.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-16-log-fdw_1.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-log-fdw postgresql-16-log-fdw_1.4-1PIGSTY~jammy_arm64.deb pigsty 1.4 34.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-16-log-fdw_1.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-log-fdw postgresql-16-log-fdw_1.4-1PIGSTY~noble_amd64.deb pigsty 1.4 28.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-16-log-fdw_1.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-log-fdw postgresql-16-log-fdw_1.4-1PIGSTY~noble_arm64.deb pigsty 1.4 28.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-16-log-fdw_1.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 log_fdw_15 log_fdw_15-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/log_fdw_15-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 log_fdw_15 log_fdw_15-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 19.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/log_fdw_15-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 log_fdw_15 log_fdw_15-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/log_fdw_15-1.4-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 log_fdw_15 log_fdw_15-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 19.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/log_fdw_15-1.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 log_fdw_15 log_fdw_15-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/log_fdw_15-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 log_fdw_15 log_fdw_15-1.4-1PIGSTY.el9.x86_64.rpm pigsty 1.4 19.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/log_fdw_15-1.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 log_fdw_15 log_fdw_15-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/log_fdw_15-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 log_fdw_15 log_fdw_15-1.4-1PIGSTY.el9.aarch64.rpm pigsty 1.4 19.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/log_fdw_15-1.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 log_fdw_15 log_fdw_15-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/log_fdw_15-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 log_fdw_15 log_fdw_15-1.4-1PIGSTY.el10.x86_64.rpm pigsty 1.4 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/log_fdw_15-1.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 log_fdw_15 log_fdw_15-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/log_fdw_15-1.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-log-fdw postgresql-15-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb pigsty 1.4 27.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-15-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-log-fdw postgresql-15-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb pigsty 1.4 27.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-15-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-log-fdw postgresql-15-log-fdw_1.4-1PIGSTY~trixie_amd64.deb pigsty 1.4 27.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-15-log-fdw_1.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-log-fdw postgresql-15-log-fdw_1.4-1PIGSTY~trixie_arm64.deb pigsty 1.4 27.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-15-log-fdw_1.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-log-fdw postgresql-15-log-fdw_1.4-1PIGSTY~jammy_amd64.deb pigsty 1.4 34.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-15-log-fdw_1.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-log-fdw postgresql-15-log-fdw_1.4-1PIGSTY~jammy_arm64.deb pigsty 1.4 34.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-15-log-fdw_1.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-log-fdw postgresql-15-log-fdw_1.4-1PIGSTY~noble_amd64.deb pigsty 1.4 28.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-15-log-fdw_1.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-log-fdw postgresql-15-log-fdw_1.4-1PIGSTY~noble_arm64.deb pigsty 1.4 28.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-15-log-fdw_1.4-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 log_fdw_14 log_fdw_14-1.4-2PIGSTY.el8.x86_64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/log_fdw_14-1.4-2PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 log_fdw_14 log_fdw_14-1.4-1PIGSTY.el8.x86_64.rpm pigsty 1.4 19.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/log_fdw_14-1.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 log_fdw_14 log_fdw_14-1.4-2PIGSTY.el8.aarch64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/log_fdw_14-1.4-2PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 log_fdw_14 log_fdw_14-1.4-1PIGSTY.el8.aarch64.rpm pigsty 1.4 19.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/log_fdw_14-1.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 log_fdw_14 log_fdw_14-1.4-2PIGSTY.el9.x86_64.rpm pigsty 1.4 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/log_fdw_14-1.4-2PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 log_fdw_14 log_fdw_14-1.4-1PIGSTY.el9.x86_64.rpm pigsty 1.4 19.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/log_fdw_14-1.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 log_fdw_14 log_fdw_14-1.4-2PIGSTY.el9.aarch64.rpm pigsty 1.4 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/log_fdw_14-1.4-2PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 log_fdw_14 log_fdw_14-1.4-1PIGSTY.el9.aarch64.rpm pigsty 1.4 19.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/log_fdw_14-1.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 log_fdw_14 log_fdw_14-1.4-2PIGSTY.el10.x86_64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/log_fdw_14-1.4-2PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 log_fdw_14 log_fdw_14-1.4-1PIGSTY.el10.x86_64.rpm pigsty 1.4 19.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/log_fdw_14-1.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 log_fdw_14 log_fdw_14-1.4-2PIGSTY.el10.aarch64.rpm pigsty 1.4 20.3KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/log_fdw_14-1.4-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-log-fdw postgresql-14-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb pigsty 1.4 27.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-14-log-fdw_1.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-log-fdw postgresql-14-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb pigsty 1.4 27.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/l/log-fdw/postgresql-14-log-fdw_1.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-log-fdw postgresql-14-log-fdw_1.4-1PIGSTY~trixie_amd64.deb pigsty 1.4 27.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-14-log-fdw_1.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-log-fdw postgresql-14-log-fdw_1.4-1PIGSTY~trixie_arm64.deb pigsty 1.4 27.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/l/log-fdw/postgresql-14-log-fdw_1.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-log-fdw postgresql-14-log-fdw_1.4-1PIGSTY~jammy_amd64.deb pigsty 1.4 34.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-14-log-fdw_1.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-log-fdw postgresql-14-log-fdw_1.4-1PIGSTY~jammy_arm64.deb pigsty 1.4 34.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/l/log-fdw/postgresql-14-log-fdw_1.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-log-fdw postgresql-14-log-fdw_1.4-1PIGSTY~noble_amd64.deb pigsty 1.4 28.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-14-log-fdw_1.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-log-fdw postgresql-14-log-fdw_1.4-1PIGSTY~noble_arm64.deb pigsty 1.4 28.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/l/log-fdw/postgresql-14-log-fdw_1.4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `log_fdw` 扩展的 DEB 包：

```bash
pig build pkg log_fdw         # 构建 DEB 包
```


## 安装

您可以直接安装 `log_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install log_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y log_fdw -v 18  # PG 18
pig ext install -y log_fdw -v 17  # PG 17
pig ext install -y log_fdw -v 16  # PG 16
pig ext install -y log_fdw -v 15  # PG 15
pig ext install -y log_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y log_fdw_18       # PG 18
dnf install -y log_fdw_17       # PG 17
dnf install -y log_fdw_16       # PG 16
dnf install -y log_fdw_15       # PG 15
dnf install -y log_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-log-fdw   # PG 18
apt install -y postgresql-17-log-fdw   # PG 17
apt install -y postgresql-16-log-fdw   # PG 16
apt install -y postgresql-15-log-fdw   # PG 15
apt install -y postgresql-14-log-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION log_fdw;
```



## 用法

> [log_fdw: 访问 Postgres 日志文件的外部数据包装器](https://github.com/aws/postgresql-logfdw)

### 创建服务器

```sql
CREATE EXTENSION log_fdw;

CREATE SERVER log_fdw_server FOREIGN DATA WRAPPER log_fdw;
```

### 列出可用日志文件

```sql
SELECT * FROM list_postgres_log_files();
```

返回 PostgreSQL 日志目录中每个日志文件的文件名和大小。

### 为 CSV 日志创建外部表

```sql
SELECT * FROM create_foreign_table_for_log_file(
  'postgresql_2024_01_15_csv',   -- 外部表名
  'log_fdw_server',               -- 服务器名
  'postgresql-2024-01-15.csv'     -- 日志文件名
);
```

### 为纯文本日志创建外部表

```sql
SELECT * FROM create_foreign_table_for_log_file(
  'postgresql_2024_01_15_log',
  'log_fdw_server',
  'postgresql-2024-01-15.log'
);
```

### 查询日志数据

```sql
-- 查询 CSV 格式日志（结构化列）
SELECT log_time, error_severity, message
FROM postgresql_2024_01_15_csv
WHERE error_severity = 'ERROR'
ORDER BY log_time DESC
LIMIT 20;

-- 查询纯文本日志
SELECT * FROM postgresql_2024_01_15_log LIMIT 10;
```

### 授权非超级用户访问

只有超级用户可以创建该扩展，但可以授予访问权限：

```sql
GRANT pg_monitor TO monitoring_user;
GRANT CREATE ON SCHEMA public TO monitoring_user;
GRANT USAGE ON FOREIGN SERVER log_fdw_server TO monitoring_user;
```

### 函数参考

| 函数 | 描述 |
|----------|-------------|
| `list_postgres_log_files()` | 列出可用日志文件及其大小 |
| `create_foreign_table_for_log_file(table_name, server_name, file_name)` | 从日志文件创建外部表 |
