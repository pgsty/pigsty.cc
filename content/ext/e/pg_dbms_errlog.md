---
title: "pg_dbms_errlog"
linkTitle: "pg_dbms_errlog"
description: "模仿 Oracle DBMS_ERRLOG 模块来记录特定表的DML错误"
weight: 9270
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/HexaCluster/pg_dbms_errlog">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">HexaCluster/pg_dbms_errlog</div>
    <div class="ext-card__desc">https://github.com/HexaCluster/pg_dbms_errlog</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_dbms_errlog-2.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_dbms_errlog-2.4.tar.gz</div>
    <div class="ext-card__desc">pg_dbms_errlog-2.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_dbms_errlog`**](/ext/e/pg_dbms_errlog) | `2.4` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9270  | [**`pg_dbms_errlog`**](/ext/e/pg_dbms_errlog) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `dbms_errlog` |
{.ext-table}

| **相关扩展** | [`pg_statement_rollback`](/ext/e/pg_statement_rollback) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_dbms_lock`](/ext/e/pg_dbms_lock) [`pg_dbms_job`](/ext/e/pg_dbms_job) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires pg_statement_rollback and shared_preload_libraries=pg_dbms_errlog; restart required.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `2.4` | {{< pgvers "18,17,16,15,14" >}} | `pg_dbms_errlog` | `pg_statement_rollback` |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_dbms_errlog_$v` | `pg_statement_rollback_$v` |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-dbms-errlog` | `postgresql-$v-pg-statement-rollback` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| el8.aarch64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| el9.x86_64 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 |
| el9.aarch64 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 |
| el10.x86_64 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 |
| el10.aarch64 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 | AVAIL PGDG 2.2 2 |
| d12.x86_64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
| d12.aarch64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
| d13.x86_64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
| d13.aarch64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
| u22.x86_64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
| u22.aarch64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
| u24.x86_64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
| u24.aarch64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
| u26.x86_64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
| u26.aarch64 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 | AVAIL PIGSTY 2.4 1 |
@ el8.x86_64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_dbms_errlog_18-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_dbms_errlog_18-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_dbms_errlog_18-2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_dbms_errlog_18-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_dbms_errlog_18-2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_dbms_errlog_18-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_dbms_errlog_18-2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_dbms_errlog_18-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_errlog_18-2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_errlog_18-2.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb pigsty 2.4 62.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb pigsty 2.4 61.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb pigsty 2.4 62.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb pigsty 2.4 61.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb pigsty 2.4 67.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb pigsty 2.4 66.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb pigsty 2.4 64.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb pigsty 2.4 64.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb pigsty 2.4 64.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-dbms-errlog postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb pigsty 2.4 64.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-18-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_dbms_errlog_17-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_dbms_errlog_17-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_dbms_errlog_17-2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_dbms_errlog_17-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_dbms_errlog_17-2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_dbms_errlog_17-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_dbms_errlog_17-2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_dbms_errlog_17-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_errlog_17-2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_errlog_17-2.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb pigsty 2.4 62.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb pigsty 2.4 61.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb pigsty 2.4 62.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb pigsty 2.4 61.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb pigsty 2.4 73.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb pigsty 2.4 73.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb pigsty 2.4 64.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb pigsty 2.4 64.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb pigsty 2.4 64.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-dbms-errlog postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb pigsty 2.4 64.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-17-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_dbms_errlog_16-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_dbms_errlog_16-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_dbms_errlog_16-2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_dbms_errlog_16-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_dbms_errlog_16-2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_dbms_errlog_16-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_dbms_errlog_16-2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_dbms_errlog_16-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_errlog_16-2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_errlog_16-2.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb pigsty 2.4 62.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb pigsty 2.4 60.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb pigsty 2.4 62.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb pigsty 2.4 61.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb pigsty 2.4 73.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb pigsty 2.4 72.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb pigsty 2.4 64.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb pigsty 2.4 64.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb pigsty 2.4 64.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-dbms-errlog postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb pigsty 2.4 63.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-16-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_dbms_errlog_15-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_dbms_errlog_15-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_dbms_errlog_15-2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_dbms_errlog_15-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_dbms_errlog_15-2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_dbms_errlog_15-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_dbms_errlog_15-2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 33.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_dbms_errlog_15-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_errlog_15-2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 33.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_errlog_15-2.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb pigsty 2.4 62.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb pigsty 2.4 61.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb pigsty 2.4 62.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb pigsty 2.4 61.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb pigsty 2.4 74.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb pigsty 2.4 73.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb pigsty 2.4 65.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb pigsty 2.4 64.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb pigsty 2.4 64.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-dbms-errlog postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb pigsty 2.4 64.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-15-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_dbms_errlog_14-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_dbms_errlog_14-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel9.8.x86_64.rpm pgdg 2.2 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_dbms_errlog_14-2.2-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_dbms_errlog_14-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel9.8.aarch64.rpm pgdg 2.2 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_dbms_errlog_14-2.2-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_dbms_errlog_14-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel10.2.x86_64.rpm pgdg 2.2 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_dbms_errlog_14-2.2-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_dbms_errlog_14-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel10.2.aarch64.rpm pgdg 2.2 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_dbms_errlog_14-2.2-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 33.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_dbms_errlog_14-2.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb pigsty 2.4 62.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb pigsty 2.4 61.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb pigsty 2.4 62.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb pigsty 2.4 61.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb pigsty 2.4 73.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb pigsty 2.4 72.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb pigsty 2.4 64.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb pigsty 2.4 64.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb pigsty 2.4 64.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-dbms-errlog postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb pigsty 2.4 64.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-dbms-errlog/postgresql-14-pg-dbms-errlog_2.4-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_dbms_errlog` 扩展的 DEB 包：

```bash
pig build pkg pg_dbms_errlog         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_dbms_errlog` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_dbms_errlog;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_dbms_errlog -v 18  # PG 18
pig ext install -y pg_dbms_errlog -v 17  # PG 17
pig ext install -y pg_dbms_errlog -v 16  # PG 16
pig ext install -y pg_dbms_errlog -v 15  # PG 15
pig ext install -y pg_dbms_errlog -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_dbms_errlog_18       # PG 18
dnf install -y pg_dbms_errlog_17       # PG 17
dnf install -y pg_dbms_errlog_16       # PG 16
dnf install -y pg_dbms_errlog_15       # PG 15
dnf install -y pg_dbms_errlog_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-dbms-errlog   # PG 18
apt install -y postgresql-17-pg-dbms-errlog   # PG 17
apt install -y postgresql-16-pg-dbms-errlog   # PG 16
apt install -y postgresql-15-pg-dbms-errlog   # PG 15
apt install -y postgresql-14-pg-dbms-errlog   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_statement_rollback, pg_dbms_errlog';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_dbms_errlog CASCADE;  -- 依赖: pg_statement_rollback
```

## 用法

来源：

- [官方v2.4 README](https://github.com/HexaCluster/pg_dbms_errlog/blob/v2.4/README.md)
- [v2.4版本发布日志](https://github.com/HexaCluster/pg_dbms_errlog/blob/v2.4/ChangeLog)
- [v2.4扩展控制文件](https://github.com/HexaCluster/pg_dbms_errlog/blob/v2.4/pg_dbms_errlog.control)
- [v2.4扩展SQL脚本](https://github.com/HexaCluster/pg_dbms_errlog/blob/v2.4/sql/pg_dbms_errlog--2.4.sql)

`pg_dbms_errlog` 为 PostgreSQL 提供了类似 Oracle 的 DML 错误日志功能。它会将 `INSERT`, `UPDATE`, 或 `DELETE` 失败时产生的错误排队，通过后台工作进程写入注册的 `ERR$_...` 表，并允许脚本在回滚到保存点后继续执行。这需要 `pg_statement_rollback` 权限或由调用方显式管理保存点。

### 启用扩展

将库添加到 `shared_preload_libraries`，确保 `max_worker_processes` 能容纳 `pg_dbms_errlog.max_workers` 加上固定的工作进程数，并重启 PostgreSQL：

```conf
shared_preload_libraries = 'pg_dbms_errlog'
```

```sql
CREATE EXTENSION pg_dbms_errlog;
```

为每个 DML 目标创建并注册一个错误表：

```sql
CREATE TABLE raises (
    employee_id integer,
    salary integer CHECK (salary > 8000)
);

CALL dbms_errlog.create_error_log('raises');
-- Creates and registers public."ERR$_raises" by default.
```

### 错误发生后记录和继续

```sql
LOAD 'pg_statement_rollback';

SET pg_statement_rollback.enabled = on;
SET pg_dbms_errlog.enabled = on;
SET pg_dbms_errlog.query_tag = 'daily_load';
SET pg_dbms_errlog.reject_limit = 10;

BEGIN;
INSERT INTO raises VALUES (145, 15400);
INSERT INTO raises VALUES (161, 7700);  -- logged failure
ROLLBACK TO SAVEPOINT "PgSLRAutoSvpt";
INSERT INTO raises VALUES (175, 9680);
COMMIT;

SELECT * FROM "ERR$_raises";
```

错误表包含 `pg_err_number$`, `pg_err_mesg$`, `pg_err_optyp$`, `pg_err_tag$`, `pg_err_query$` 和 `pg_err_detail$`。

### API 和配置索引

- `dbms_errlog.create_error_log(dml_table_name, err_log_table_name, err_log_table_owner, err_log_table_space)`: 创建并注册一个错误表。
- `dbms_errlog.publish_queue(wait_for_completion)`: 请求工作进程处理排队的错误；默认情况下，`PUBLIC` 无法执行此操作。
- `dbms_errlog.queue_size()`: 报告排队中的错误数量。
- `pg_dbms_errlog.synchronous`: 默认为 `transaction`，可选值为 `query` 或 `off`。事务模式确保仅记录已提交事务的错误。
- `pg_dbms_errlog.reject_limit`: 事务范围内的错误限制；`-1` 表示无限制，`0` 不记录任何错误并回滚。
- `pg_dbms_errlog.no_client_error`: 抑制客户端错误消息的同时保留服务器日志；默认启用。
- `pg_dbms_errlog.frequency` 和 `pg_dbms_errlog.max_workers`: 异步工作进程的执行频率和并发数。

### 注意事项

- 调用方需要对目标表和错误表具有 DML 权限；创建错误表还需要上游描述的执行和注册表权限。
- `INSERT INTO ... SELECT ...` 是一个 PostgreSQL 语句，无法像 Oracle 那样仅保留成功行。
- 语法和其他解析时错误不会被记录。存储查询文本必须保持在 PostgreSQL 的 1 GB 值限制以下。
- 版本 `2.4` 没有更改 SQL API；它修复了工作进程关闭循环和动态后台工作进程崩溃的问题。
