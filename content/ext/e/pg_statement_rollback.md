---
title: "pg_statement_rollback"
linkTitle: "pg_statement_rollback"
description: "在服务端提供类似Oracle/DB2的语句级回滚能力"
weight: 9130
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/lzlabs/pg_statement_rollback">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">lzlabs/pg_statement_rollback</div>
    <div class="ext-card__desc">https://github.com/lzlabs/pg_statement_rollback</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_statement_rollback-1.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_statement_rollback-1.5.tar.gz</div>
    <div class="ext-card__desc">pg_statement_rollback-1.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_statement_rollback`**](/ext/e/pg_statement_rollback) | `1.6` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9130  | [**`pg_statement_rollback`**](/ext/e/pg_statement_rollback) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`oracle_fdw`](/ext/e/oracle_fdw) [`orafce`](/ext/e/orafce) [`pgtt`](/ext/e/pgtt) [`session_variable`](/ext/e/session_variable) [`safeupdate`](/ext/e/safeupdate) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_dbms_lock`](/ext/e/pg_dbms_lock) [`pg_hint_plan`](/ext/e/pg_hint_plan) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pg_dbms_errlog`](/ext/e/pg_dbms_errlog) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `1.6` | {{< pgvers "18,17,16,15,14" >}} | `pg_statement_rollback` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.6` | {{< pgvers "18,17,16,15,14" >}} | `pg_statement_rollback_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-statement-rollback` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.6 2 | AVAIL PGDG 1.6 2 | AVAIL PGDG 1.6 2 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 |
| el8.aarch64 | AVAIL PGDG 1.6 2 | AVAIL PGDG 1.6 2 | AVAIL PGDG 1.6 2 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 |
| el9.x86_64 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 4 | AVAIL PGDG 1.6 3 |
| el9.aarch64 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 4 | AVAIL PGDG 1.6 4 |
| el10.x86_64 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 |
| el10.aarch64 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 | AVAIL PGDG 1.6 3 |
| d12.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| d12.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| d13.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| d13.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u22.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u22.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u24.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u24.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u26.x86_64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
| u26.aarch64 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 | AVAIL PIGSTY 1.5 1 |
@ el8.x86_64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_statement_rollback_18-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-1PGDG.rhel8.x86_64.rpm pgdg 1.5 20.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_statement_rollback_18-1.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 20.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_statement_rollback_18-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-1PGDG.rhel8.aarch64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_statement_rollback_18-1.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_statement_rollback_18-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_statement_rollback_18-1.5-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-1PGDG.rhel9.x86_64.rpm pgdg 1.5 19.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_statement_rollback_18-1.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_statement_rollback_18-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5 19.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_statement_rollback_18-1.5-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-1PGDG.rhel9.aarch64.rpm pgdg 1.5 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_statement_rollback_18-1.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_statement_rollback_18-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_statement_rollback_18-1.5-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-1PGDG.rhel10.x86_64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_statement_rollback_18-1.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_statement_rollback_18-1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_statement_rollback_18-1.5-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_statement_rollback_18 pg_statement_rollback_18-1.5-1PGDG.rhel10.aarch64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_statement_rollback_18-1.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 28.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 28.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 28.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 28.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 28.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 28.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 28.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb pigsty 1.5 28.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-statement-rollback postgresql-18-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb pigsty 1.5 28.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-18-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_statement_rollback_17-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.4-3PGDG.rhel8.x86_64.rpm pgdg 1.4 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_statement_rollback_17-1.4-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 20.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_statement_rollback_17-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.4-3PGDG.rhel8.aarch64.rpm pgdg 1.4 19.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_statement_rollback_17-1.4-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_statement_rollback_17-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.5-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_statement_rollback_17-1.5-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.4-3PGDG.rhel9.x86_64.rpm pgdg 1.4 19.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_statement_rollback_17-1.4-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_statement_rollback_17-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.5-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_statement_rollback_17-1.5-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.4-3PGDG.rhel9.aarch64.rpm pgdg 1.4 19.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_statement_rollback_17-1.4-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_statement_rollback_17-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.5-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_statement_rollback_17-1.5-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.4-4PGDG.rhel10.x86_64.rpm pgdg 1.4 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_statement_rollback_17-1.4-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_statement_rollback_17-1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.5-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_statement_rollback_17-1.5-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 pg_statement_rollback_17 pg_statement_rollback_17-1.4-4PGDG.rhel10.aarch64.rpm pgdg 1.4 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_statement_rollback_17-1.4-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 28.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 28.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 31.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 31.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 28.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 28.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb pigsty 1.5 28.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-statement-rollback postgresql-17-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb pigsty 1.5 28.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-17-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 20.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_statement_rollback_16-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.4-2PGDG.rhel8.x86_64.rpm pgdg 1.4 19.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_statement_rollback_16-1.4-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 20.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_statement_rollback_16-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.4-2PGDG.rhel8.aarch64.rpm pgdg 1.4 19.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_statement_rollback_16-1.4-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_statement_rollback_16-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.5-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_statement_rollback_16-1.5-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.4-2PGDG.rhel9.x86_64.rpm pgdg 1.4 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_statement_rollback_16-1.4-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_statement_rollback_16-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.5-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_statement_rollback_16-1.5-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.4-2PGDG.rhel9.aarch64.rpm pgdg 1.4 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_statement_rollback_16-1.4-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_statement_rollback_16-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.5-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_statement_rollback_16-1.5-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.4-4PGDG.rhel10.x86_64.rpm pgdg 1.4 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_statement_rollback_16-1.4-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_statement_rollback_16-1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.5-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_statement_rollback_16-1.5-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 pg_statement_rollback_16 pg_statement_rollback_16-1.4-4PGDG.rhel10.aarch64.rpm pgdg 1.4 19.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_statement_rollback_16-1.4-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 28.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 28.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 31.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 31.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 28.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 28.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb pigsty 1.5 28.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-statement-rollback postgresql-16-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb pigsty 1.5 28.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-16-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_statement_rollback_15-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.4-1.rhel8.x86_64.rpm pgdg 1.4 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_statement_rollback_15-1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.3-1.rhel8.x86_64.rpm pgdg 1.3 36.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_statement_rollback_15-1.3-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_statement_rollback_15-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.4-1.rhel8.aarch64.rpm pgdg 1.4 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_statement_rollback_15-1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.3-1.rhel8.aarch64.rpm pgdg 1.3 36.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_statement_rollback_15-1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_statement_rollback_15-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.5-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_statement_rollback_15-1.5-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.4-1.rhel9.x86_64.rpm pgdg 1.4 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_statement_rollback_15-1.4-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.3-1.rhel9.x86_64.rpm pgdg 1.3 37.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_statement_rollback_15-1.3-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 19.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_statement_rollback_15-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.5-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5 19.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_statement_rollback_15-1.5-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.4-1.rhel9.aarch64.rpm pgdg 1.4 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_statement_rollback_15-1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.3-1.rhel9.aarch64.rpm pgdg 1.3 36.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_statement_rollback_15-1.3-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_statement_rollback_15-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.5-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_statement_rollback_15-1.5-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.4-4PGDG.rhel10.x86_64.rpm pgdg 1.4 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_statement_rollback_15-1.4-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_statement_rollback_15-1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.5-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_statement_rollback_15-1.5-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 pg_statement_rollback_15 pg_statement_rollback_15-1.4-4PGDG.rhel10.aarch64.rpm pgdg 1.4 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_statement_rollback_15-1.4-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 27.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 27.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 31.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 30.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 28.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb pigsty 1.5 28.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-statement-rollback postgresql-15-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb pigsty 1.5 27.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-15-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.6-1PGDG.rhel8.10.x86_64.rpm pgdg 1.6 20.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_statement_rollback_14-1.6-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.4-1.rhel8.x86_64.rpm pgdg 1.4 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_statement_rollback_14-1.4-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.3-1.rhel8.x86_64.rpm pgdg 1.3 37.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_statement_rollback_14-1.3-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.6-1PGDG.rhel8.10.aarch64.rpm pgdg 1.6 20.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_statement_rollback_14-1.6-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.4-1.rhel8.aarch64.rpm pgdg 1.4 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_statement_rollback_14-1.4-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.3-1.rhel8.aarch64.rpm pgdg 1.3 36.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_statement_rollback_14-1.3-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.6-1PGDG.rhel9.8.x86_64.rpm pgdg 1.6 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_statement_rollback_14-1.6-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.5-3PGDG.rhel9.8.x86_64.rpm pgdg 1.5 19.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_statement_rollback_14-1.5-3PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.4-1.rhel9.x86_64.rpm pgdg 1.4 19.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_statement_rollback_14-1.4-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.6-1PGDG.rhel9.8.aarch64.rpm pgdg 1.6 19.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_statement_rollback_14-1.6-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.5-3PGDG.rhel9.8.aarch64.rpm pgdg 1.5 19.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_statement_rollback_14-1.5-3PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.4-1.rhel9.aarch64.rpm pgdg 1.4 19.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_statement_rollback_14-1.4-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.3-1.rhel9.aarch64.rpm pgdg 1.3 36.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_statement_rollback_14-1.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.6-1PGDG.rhel10.2.x86_64.rpm pgdg 1.6 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_statement_rollback_14-1.6-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.5-3PGDG.rhel10.2.x86_64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_statement_rollback_14-1.5-3PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.4-4PGDG.rhel10.x86_64.rpm pgdg 1.4 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_statement_rollback_14-1.4-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.6-1PGDG.rhel10.2.aarch64.rpm pgdg 1.6 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_statement_rollback_14-1.6-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.5-3PGDG.rhel10.2.aarch64.rpm pgdg 1.5 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_statement_rollback_14-1.5-3PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 pg_statement_rollback_14 pg_statement_rollback_14-1.4-4PGDG.rhel10.aarch64.rpm pgdg 1.4 19.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_statement_rollback_14-1.4-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb pigsty 1.5 27.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb pigsty 1.5 27.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb pigsty 1.5 31.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb pigsty 1.5 30.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb pigsty 1.5 28.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb pigsty 1.5 27.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb pigsty 1.5 28.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-statement-rollback postgresql-14-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb pigsty 1.5 27.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statement-rollback/postgresql-14-pg-statement-rollback_1.5-2PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_statement_rollback` 扩展的 DEB 包：

```bash
pig build pkg pg_statement_rollback         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_statement_rollback` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_statement_rollback;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_statement_rollback -v 18  # PG 18
pig ext install -y pg_statement_rollback -v 17  # PG 17
pig ext install -y pg_statement_rollback -v 16  # PG 16
pig ext install -y pg_statement_rollback -v 15  # PG 15
pig ext install -y pg_statement_rollback -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_statement_rollback_18       # PG 18
dnf install -y pg_statement_rollback_17       # PG 17
dnf install -y pg_statement_rollback_16       # PG 16
dnf install -y pg_statement_rollback_15       # PG 15
dnf install -y pg_statement_rollback_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-statement-rollback   # PG 18
apt install -y postgresql-17-pg-statement-rollback   # PG 17
apt install -y postgresql-16-pg-statement-rollback   # PG 16
apt install -y postgresql-15-pg-statement-rollback   # PG 15
apt install -y postgresql-14-pg-statement-rollback   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_statement_rollback';
```


## 用法

来源：

- [pg_statement_rollback v1.6 README](https://github.com/lzlabs/pg_statement_rollback/blob/v1.6/README.md)
- [v1.5 到 v1.6 的变更](https://github.com/lzlabs/pg_statement_rollback/compare/v1.5...v1.6)

pg_statement_rollback 会在每条符合条件的语句之前自动创建保存点，使显式事务在某条语句报错后仍可继续使用。它模拟部分其他数据库的语句级回滚行为，但客户端在出错后仍必须执行 ROLLBACK TO SAVEPOINT。

该模块加载到后端进程中，不需要 CREATE EXTENSION。

### 加载模块

仅为当前会话加载：

    LOAD 'pg_statement_rollback.so';

如需针对指定角色或数据库启用，请将其加入 session_preload_libraries，然后重新连接：

    session_preload_libraries = 'pg_statement_rollback'

只有部署确实需要服务器级全局加载时才应使用 shared_preload_libraries；在服务器范围修改任一预加载列表，都必须遵守相应的重启或重新连接边界。

### 从失败语句中恢复

    BEGIN;
    INSERT INTO accounts(id, balance) VALUES (1, 100);
    INSERT INTO accounts(id, balance) VALUES (1, 200);
    -- duplicate-key error
    ROLLBACK TO SAVEPOINT "PgSLRAutoSvpt";
    UPDATE accounts SET balance = 150 WHERE id = 1;
    COMMIT;

保存点名称在使用引号时区分大小写。应用程序必须检测语句错误，并在继续执行前发送回滚命令。

### 配置索引

- pg_statement_rollback.enabled 为当前会话启用自动保存点。
- pg_statement_rollback.savepoint_name 更改自动保存点名称，并且只能由超级用户控制。
- pg_statement_rollback.enable_writeonly 将保存点创建限制在可能执行写入的语句。

### 1.6 版本行为

1.6 版增加 PostgreSQL 19 构建支持，并改进了只读事务检测。该模块不再在只读事务中创建自动保存点，并会在 SET TRANSACTION ... READ ONLY 之前释放初始保存点，避免干扰备份导出及其他只读会话。

### 注意事项

- 这不是透明重试机制：客户端必须显式回滚到自动保存点。
- 保存点会给每条受覆盖语句增加开销。大范围启用前，应先测量写密集型工作负载。
- 上游 README 警告该模块在启用断言的 PostgreSQL 构建上可能崩溃；未经测试，不要把开发构建的行为视为生产环境安全。
- 跨整个事务的错误、连接故障以及使会话失效的错误，都无法通过保存点修复。
