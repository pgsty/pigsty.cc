---
title: "orafce"
linkTitle: "orafce"
description: "模拟 Oracle RDBMS 的一部分函数和包的函数和运算符"
weight: 9100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/orafce/orafce">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">orafce/orafce</div>
    <div class="ext-card__desc">https://github.com/orafce/orafce</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`orafce`**](/ext/e/orafce) | `4.17.1` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license 0bsd" href="/ext/license#0bsd">0BSD</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9100  | [**`orafce`**](/ext/e/orafce) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`ivorysql_ora`](/ext/e/ivorysql_ora) [`db2fce`](/ext/e/db2fce) [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_statement_rollback`](/ext/e/pg_statement_rollback) [`pgtt`](/ext/e/pgtt) [`session_variable`](/ext/e/session_variable) [`tds_fdw`](/ext/e/tds_fdw) [`pg_dbms_lock`](/ext/e/pg_dbms_lock) [`pg_dbms_job`](/ext/e/pg_dbms_job) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Distribution 4.17.1 uses SQL/control version 4.17 and adds UTL_RAW; current PGDG RPM and DEB package baseline is 4.17.1.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.17.1` | {{< pgvers "18,17,16,15,14" >}} | `orafce` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.17.1` | {{< pgvers "18,17,16,15,14" >}} | `orafce_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.17.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-orafce` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.17.1 11 | AVAIL PGDG 4.17.1 19 | AVAIL PGDG 4.17.1 28 | AVAIL PGDG 4.17.1 28 | AVAIL PGDG 4.17.1 28 |
| el8.aarch64 | AVAIL PGDG 4.17.1 11 | AVAIL PGDG 4.17.1 19 | AVAIL PGDG 4.17.1 28 | AVAIL PGDG 4.17.1 28 | AVAIL PGDG 4.17.1 28 |
| el9.x86_64 | AVAIL PGDG 4.17.1 16 | AVAIL PGDG 4.17.1 24 | AVAIL PGDG 4.17.1 33 | AVAIL PGDG 4.17.1 33 | AVAIL PGDG 4.17.1 33 |
| el9.aarch64 | AVAIL PGDG 4.17.1 16 | AVAIL PGDG 4.17.1 24 | AVAIL PGDG 4.17.1 33 | AVAIL PGDG 4.17.1 33 | AVAIL PGDG 4.17.1 33 |
| el10.x86_64 | AVAIL PGDG 4.17.1 16 | AVAIL PGDG 4.17.1 17 | AVAIL PGDG 4.17.1 17 | AVAIL PGDG 4.17.1 17 | AVAIL PGDG 4.17.1 17 |
| el10.aarch64 | AVAIL PGDG 4.17.1 16 | AVAIL PGDG 4.17.1 17 | AVAIL PGDG 4.17.1 17 | AVAIL PGDG 4.17.1 17 | AVAIL PGDG 4.17.1 17 |
| d12.x86_64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
| d12.aarch64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
| d13.x86_64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
| d13.aarch64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
| u22.x86_64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
| u22.aarch64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
| u24.x86_64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
| u24.aarch64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
| u26.x86_64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
| u26.aarch64 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 | AVAIL PGDG 4.17.1 3 |
@ el8.x86_64 18 orafce_18 orafce_18-4.17.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.17.1 162.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.17.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.16.12-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.12 156.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.12-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.16.11-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.11 155.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.16.10-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.10 154.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.16.9-2PGDG.rhel8.10.x86_64.rpm pgdg 4.16.9 154.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.9-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.16.8-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.8 154.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.7 153.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 153.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 152.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 151.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel8.x86_64.rpm pgdg 4.14.5 151.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.14.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.17.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.17.1 154.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.17.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.12-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.12 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.12-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.11-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.11 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.10-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.10 150.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.9-2PGDG.rhel8.10.aarch64.rpm pgdg 4.16.9 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.9-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.8-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.8 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.7 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 148.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 148.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 146.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel8.aarch64.rpm pgdg 4.14.5 147.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.14.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.17.1-1PGDG.rhel9.8.x86_64.rpm pgdg 4.17.1 157.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.17.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.12-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.12 152.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.12-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.11-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.11 151.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.10-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.10 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.9-2PGDG.rhel9.8.x86_64.rpm pgdg 4.16.9 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.9-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.8-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.8 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.8-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.7 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.7 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.7 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.5 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.5 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 148.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel9.x86_64.rpm pgdg 4.14.5 148.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.14.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.17.1-1PGDG.rhel9.8.aarch64.rpm pgdg 4.17.1 152.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.17.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.12-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.12 147.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.12-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.11-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.11 149.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.10-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.10 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.9-2PGDG.rhel9.8.aarch64.rpm pgdg 4.16.9 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.9-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.8-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.8 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.8-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.7 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.7 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.7 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.5 148.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.5 148.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 146.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel9.aarch64.rpm pgdg 4.14.5 146.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.14.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.17.1-1PGDG.rhel10.2.x86_64.rpm pgdg 4.17.1 157.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.17.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.12-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.12 153.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.12-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.11-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.11 152.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.10-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.10 151.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.9-2PGDG.rhel10.2.x86_64.rpm pgdg 4.16.9 151.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.9-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.8-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.8 151.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.8-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.7 150.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.7 150.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.7 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.5 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.5 151.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel10.x86_64.rpm pgdg 4.14.5 149.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.14.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.17.1-1PGDG.rhel10.2.aarch64.rpm pgdg 4.17.1 153.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.17.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.12-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.12 149.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.12-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.11-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.11 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.10-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.10 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.9-2PGDG.rhel10.2.aarch64.rpm pgdg 4.16.9 149.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.9-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.8-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.8 149.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.8-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.7 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.7 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.7 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.5 149.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 149.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.5 149.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 149.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel10.aarch64.rpm pgdg 4.14.5 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.14.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg12+1_amd64.deb pgdg 4.17.1 378.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg12+1_amd64.deb pgdg 4.16.13 374.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg12+1_amd64.deb pgdg 4.16.12 371.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg12+1_arm64.deb pgdg 4.17.1 368.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg12+1_arm64.deb pgdg 4.16.13 364.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg12+1_arm64.deb pgdg 4.16.12 361.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg13+1_amd64.deb pgdg 4.17.1 378.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg13+1_amd64.deb pgdg 4.16.13 375.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg13+1_amd64.deb pgdg 4.16.12 372.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg13+1_arm64.deb pgdg 4.17.1 369.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg13+1_arm64.deb pgdg 4.16.13 365.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg13+1_arm64.deb pgdg 4.16.12 362.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg22.04+1_amd64.deb pgdg 4.17.1 383.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg22.04+1_amd64.deb pgdg 4.16.13 379.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg22.04+1_amd64.deb pgdg 4.16.12 376.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg22.04+1_arm64.deb pgdg 4.17.1 372.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg22.04+1_arm64.deb pgdg 4.16.13 368.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg22.04+1_arm64.deb pgdg 4.16.12 365.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg24.04+1_amd64.deb pgdg 4.17.1 375.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg24.04+1_amd64.deb pgdg 4.16.13 371.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg24.04+1_amd64.deb pgdg 4.16.12 368.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg24.04+1_arm64.deb pgdg 4.17.1 367.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg24.04+1_arm64.deb pgdg 4.16.13 363.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg24.04+1_arm64.deb pgdg 4.16.12 360.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg26.04+1_amd64.deb pgdg 4.17.1 373.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg26.04+1_amd64.deb pgdg 4.16.13 369.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg26.04+1_amd64.deb pgdg 4.16.12 365.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.17.1-1.pgdg26.04+1_arm64.deb pgdg 4.17.1 364.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.17.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.13-1.pgdg26.04+1_arm64.deb pgdg 4.16.13 359.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.13-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.12-1.pgdg26.04+1_arm64.deb pgdg 4.16.12 357.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.12-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 orafce_17 orafce_17-4.17.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.17.1 162.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.17.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.16.12-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.12 156.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.12-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.16.11-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.11 155.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.16.10-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.10 155.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.16.9-2PGDG.rhel8.10.x86_64.rpm pgdg 4.16.9 154.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.9-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.16.8-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.8 154.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.7 153.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 153.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 152.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel8.x86_64.rpm pgdg 4.14.4 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.3-1PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.2-1PGDG.rhel8.x86_64.rpm pgdg 4.14.2 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.0-1PGDG.rhel8.x86_64.rpm pgdg 4.14.0 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.13.5-1PGDG.rhel8.x86_64.rpm pgdg 4.13.5 148.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.13.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.13.3-1PGDG.rhel8.x86_64.rpm pgdg 4.13.3 147.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.13.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.13.2-1PGDG.rhel8.x86_64.rpm pgdg 4.13.2 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.13.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.13.0-1PGDG.rhel8.x86_64.rpm pgdg 4.13.0 147.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.13.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.17.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.17.1 154.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.17.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.12-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.12 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.12-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.11-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.11 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.10-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.10 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.9-2PGDG.rhel8.10.aarch64.rpm pgdg 4.16.9 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.9-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.8-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.8 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.7 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 148.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 148.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 146.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel8.aarch64.rpm pgdg 4.14.4 146.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.3-1PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.2-1PGDG.rhel8.aarch64.rpm pgdg 4.14.2 146.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.0-1PGDG.rhel8.aarch64.rpm pgdg 4.14.0 143.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.13.5-1PGDG.rhel8.aarch64.rpm pgdg 4.13.5 143.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.13.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.13.3-1PGDG.rhel8.aarch64.rpm pgdg 4.13.3 142.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.13.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.13.2-1PGDG.rhel8.aarch64.rpm pgdg 4.13.2 142.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.13.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.13.0-1PGDG.rhel8.aarch64.rpm pgdg 4.13.0 142.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.13.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.17.1-1PGDG.rhel9.8.x86_64.rpm pgdg 4.17.1 156.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.17.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.12-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.12 152.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.12-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.11-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.11 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.10-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.10 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.9-2PGDG.rhel9.8.x86_64.rpm pgdg 4.16.9 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.9-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.8-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.8 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.8-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.7 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.7 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.7 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.5 149.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.5 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel9.x86_64.rpm pgdg 4.14.4 148.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.3-1PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.2-1PGDG.rhel9.x86_64.rpm pgdg 4.14.2 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.0-1PGDG.rhel9.x86_64.rpm pgdg 4.14.0 143.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.13.5-1PGDG.rhel9.x86_64.rpm pgdg 4.13.5 143.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.13.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.13.3-1PGDG.rhel9.x86_64.rpm pgdg 4.13.3 143.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.13.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.13.2-1PGDG.rhel9.x86_64.rpm pgdg 4.13.2 143.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.13.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.13.0-1PGDG.rhel9.x86_64.rpm pgdg 4.13.0 143.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.13.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.17.1-1PGDG.rhel9.8.aarch64.rpm pgdg 4.17.1 152.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.17.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.12-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.12 147.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.12-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.11-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.11 149.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.10-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.10 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.9-2PGDG.rhel9.8.aarch64.rpm pgdg 4.16.9 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.9-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.8-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.8 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.8-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.7 147.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.7 147.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.7 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.5 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 147.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.5 148.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 147.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 146.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel9.aarch64.rpm pgdg 4.14.4 146.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.3-1PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.2-1PGDG.rhel9.aarch64.rpm pgdg 4.14.2 146.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.0-1PGDG.rhel9.aarch64.rpm pgdg 4.14.0 141.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.13.5-1PGDG.rhel9.aarch64.rpm pgdg 4.13.5 141.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.13.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.13.3-1PGDG.rhel9.aarch64.rpm pgdg 4.13.3 141.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.13.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.13.2-1PGDG.rhel9.aarch64.rpm pgdg 4.13.2 141.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.13.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.13.0-1PGDG.rhel9.aarch64.rpm pgdg 4.13.0 140.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.13.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.17.1-1PGDG.rhel10.2.x86_64.rpm pgdg 4.17.1 158.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.17.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.12-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.12 153.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.12-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.11-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.11 151.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.10-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.10 151.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.9-2PGDG.rhel10.2.x86_64.rpm pgdg 4.16.9 151.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.9-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.8-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.8 151.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.8-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.7 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.7 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.7 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.5 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.5 151.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 150.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel10.x86_64.rpm pgdg 4.14.4 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.14.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel10.x86_64.rpm pgdg 4.14.3 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.14.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.17.1-1PGDG.rhel10.2.aarch64.rpm pgdg 4.17.1 153.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.17.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.12-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.12 148.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.12-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.11-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.11 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.10-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.10 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.9-2PGDG.rhel10.2.aarch64.rpm pgdg 4.16.9 149.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.9-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.8-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.8 149.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.8-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.7 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.7 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.7 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 148.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel10.aarch64.rpm pgdg 4.14.4 148.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.14.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel10.aarch64.rpm pgdg 4.14.3 148.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.14.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg12+1_amd64.deb pgdg 4.17.1 378.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg12+1_amd64.deb pgdg 4.16.13 373.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg12+1_amd64.deb pgdg 4.16.12 371.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg12+1_arm64.deb pgdg 4.17.1 367.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg12+1_arm64.deb pgdg 4.16.13 364.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg12+1_arm64.deb pgdg 4.16.12 361.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg13+1_amd64.deb pgdg 4.17.1 379.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg13+1_amd64.deb pgdg 4.16.13 375.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg13+1_amd64.deb pgdg 4.16.12 372.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg13+1_arm64.deb pgdg 4.17.1 369.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg13+1_arm64.deb pgdg 4.16.13 365.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg13+1_arm64.deb pgdg 4.16.12 362.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg22.04+1_amd64.deb pgdg 4.17.1 415.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg22.04+1_amd64.deb pgdg 4.16.13 410.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg22.04+1_amd64.deb pgdg 4.16.12 407.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg22.04+1_arm64.deb pgdg 4.17.1 403.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg22.04+1_arm64.deb pgdg 4.16.13 399.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg22.04+1_arm64.deb pgdg 4.16.12 396.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg24.04+1_amd64.deb pgdg 4.17.1 376.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg24.04+1_amd64.deb pgdg 4.16.13 371.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg24.04+1_amd64.deb pgdg 4.16.12 368.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg24.04+1_arm64.deb pgdg 4.17.1 367.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg24.04+1_arm64.deb pgdg 4.16.13 363.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg24.04+1_arm64.deb pgdg 4.16.12 360.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg26.04+1_amd64.deb pgdg 4.17.1 373.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg26.04+1_amd64.deb pgdg 4.16.13 369.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg26.04+1_amd64.deb pgdg 4.16.12 365.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.17.1-1.pgdg26.04+1_arm64.deb pgdg 4.17.1 364.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.17.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.13-1.pgdg26.04+1_arm64.deb pgdg 4.16.13 359.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.13-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.12-1.pgdg26.04+1_arm64.deb pgdg 4.16.12 356.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.12-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 orafce_16 orafce_16-4.17.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.17.1 162.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.17.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.16.12-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.12 157.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.12-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.16.11-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.11 155.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.16.10-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.10 155.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.16.9-2PGDG.rhel8.10.x86_64.rpm pgdg 4.16.9 154.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.9-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.16.8-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.8 154.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.7 153.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 153.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 152.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 151.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel8.x86_64.rpm pgdg 4.14.4 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.3-1PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.2-1PGDG.rhel8.x86_64.rpm pgdg 4.14.2 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.0-1PGDG.rhel8.x86_64.rpm pgdg 4.14.0 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.13.5-1PGDG.rhel8.x86_64.rpm pgdg 4.13.5 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.13.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.13.3-1PGDG.rhel8.x86_64.rpm pgdg 4.13.3 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.13.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.13.2-1PGDG.rhel8.x86_64.rpm pgdg 4.13.2 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.13.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.12.0-1PGDG.rhel8.x86_64.rpm pgdg 4.12.0 146.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.12.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.11.0-1PGDG.rhel8.x86_64.rpm pgdg 4.11.0 145.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.11.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.10.3-1PGDG.rhel8.x86_64.rpm pgdg 4.10.3 145.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.10.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.10.2-1PGDG.rhel8.x86_64.rpm pgdg 4.10.2 145.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.10.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.10.0-1PGDG.rhel8.x86_64.rpm pgdg 4.10.0 144.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.10.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.4-1PGDG.rhel8.x86_64.rpm pgdg 4.9.4 143.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.3-1PGDG.rhel8.x86_64.rpm pgdg 4.9.3 143.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.2-1PGDG.rhel8.x86_64.rpm pgdg 4.9.2 143.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.1-1PGDG.rhel8.x86_64.rpm pgdg 4.9.1 143.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.0-1PGDG.rhel8.x86_64.rpm pgdg 4.9.0 143.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.17.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.17.1 154.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.17.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.12-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.12 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.12-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.11-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.11 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.10-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.10 150.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.9-2PGDG.rhel8.10.aarch64.rpm pgdg 4.16.9 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.9-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.8-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.8 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.7 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 148.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 147.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel8.aarch64.rpm pgdg 4.14.4 146.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.3-1PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.2-1PGDG.rhel8.aarch64.rpm pgdg 4.14.2 146.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.0-1PGDG.rhel8.aarch64.rpm pgdg 4.14.0 143.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.13.5-1PGDG.rhel8.aarch64.rpm pgdg 4.13.5 142.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.13.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.13.3-1PGDG.rhel8.aarch64.rpm pgdg 4.13.3 142.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.13.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.13.2-1PGDG.rhel8.aarch64.rpm pgdg 4.13.2 142.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.13.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.12.0-1PGDG.rhel8.aarch64.rpm pgdg 4.12.0 141.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.12.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.11.0-1PGDG.rhel8.aarch64.rpm pgdg 4.11.0 140.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.11.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.10.3-1PGDG.rhel8.aarch64.rpm pgdg 4.10.3 140.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.10.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.10.2-1PGDG.rhel8.aarch64.rpm pgdg 4.10.2 140.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.10.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.10.0-1PGDG.rhel8.aarch64.rpm pgdg 4.10.0 139.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.10.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.4-1PGDG.rhel8.aarch64.rpm pgdg 4.9.4 139.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.3-1PGDG.rhel8.aarch64.rpm pgdg 4.9.3 138.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.2-1PGDG.rhel8.aarch64.rpm pgdg 4.9.2 138.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.1-1PGDG.rhel8.aarch64.rpm pgdg 4.9.1 138.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.0-1PGDG.rhel8.aarch64.rpm pgdg 4.9.0 138.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.17.1-1PGDG.rhel9.8.x86_64.rpm pgdg 4.17.1 157.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.17.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.12-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.12 152.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.12-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.11-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.11 151.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.10-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.10 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.9-2PGDG.rhel9.8.x86_64.rpm pgdg 4.16.9 150.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.9-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.8-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.8 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.8-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.7 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.7 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.7 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.5 149.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 149.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.5 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 148.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel9.x86_64.rpm pgdg 4.14.4 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.3-1PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.2-1PGDG.rhel9.x86_64.rpm pgdg 4.14.2 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.0-1PGDG.rhel9.x86_64.rpm pgdg 4.14.0 143.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.13.5-1PGDG.rhel9.x86_64.rpm pgdg 4.13.5 143.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.13.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.13.3-1PGDG.rhel9.x86_64.rpm pgdg 4.13.3 143.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.13.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.13.2-1PGDG.rhel9.x86_64.rpm pgdg 4.13.2 143.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.13.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.12.0-1PGDG.rhel9.x86_64.rpm pgdg 4.12.0 142.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.12.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.11.0-1PGDG.rhel9.x86_64.rpm pgdg 4.11.0 141.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.11.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.10.3-1PGDG.rhel9.x86_64.rpm pgdg 4.10.3 141.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.10.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.10.2-1PGDG.rhel9.x86_64.rpm pgdg 4.10.2 141.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.10.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.10.0-1PGDG.rhel9.x86_64.rpm pgdg 4.10.0 141.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.10.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.4-1PGDG.rhel9.x86_64.rpm pgdg 4.9.4 140.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.3-1PGDG.rhel9.x86_64.rpm pgdg 4.9.3 140.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.2-1PGDG.rhel9.x86_64.rpm pgdg 4.9.2 139.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.1-1PGDG.rhel9.x86_64.rpm pgdg 4.9.1 139.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.0-1PGDG.rhel9.x86_64.rpm pgdg 4.9.0 139.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.17.1-1PGDG.rhel9.8.aarch64.rpm pgdg 4.17.1 151.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.17.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.12-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.12 147.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.12-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.11-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.11 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.10-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.10 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.9-2PGDG.rhel9.8.aarch64.rpm pgdg 4.16.9 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.9-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.8-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.8 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.8-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.7 147.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.7 147.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.7 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.5 147.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 147.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.5 148.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 147.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 146.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel9.aarch64.rpm pgdg 4.14.4 146.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.3-1PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.2-1PGDG.rhel9.aarch64.rpm pgdg 4.14.2 146.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.0-1PGDG.rhel9.aarch64.rpm pgdg 4.14.0 141.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.13.5-1PGDG.rhel9.aarch64.rpm pgdg 4.13.5 141.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.13.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.13.3-1PGDG.rhel9.aarch64.rpm pgdg 4.13.3 141.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.13.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.13.2-1PGDG.rhel9.aarch64.rpm pgdg 4.13.2 141.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.13.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.12.0-1PGDG.rhel9.aarch64.rpm pgdg 4.12.0 140.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.12.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.11.0-1PGDG.rhel9.aarch64.rpm pgdg 4.11.0 139.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.11.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.10.3-1PGDG.rhel9.aarch64.rpm pgdg 4.10.3 139.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.10.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.10.2-1PGDG.rhel9.aarch64.rpm pgdg 4.10.2 139.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.10.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.10.0-1PGDG.rhel9.aarch64.rpm pgdg 4.10.0 138.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.10.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.4-1PGDG.rhel9.aarch64.rpm pgdg 4.9.4 137.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.3-1PGDG.rhel9.aarch64.rpm pgdg 4.9.3 137.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.2-1PGDG.rhel9.aarch64.rpm pgdg 4.9.2 137.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.1-1PGDG.rhel9.aarch64.rpm pgdg 4.9.1 137.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.0-1PGDG.rhel9.aarch64.rpm pgdg 4.9.0 137.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.17.1-1PGDG.rhel10.2.x86_64.rpm pgdg 4.17.1 158.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.17.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.12-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.12 153.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.12-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.11-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.11 151.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.10-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.10 151.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.9-2PGDG.rhel10.2.x86_64.rpm pgdg 4.16.9 151.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.9-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.8-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.8 151.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.8-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.7 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.7 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.7 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.5 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.5 151.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel10.x86_64.rpm pgdg 4.14.4 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.14.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel10.x86_64.rpm pgdg 4.14.3 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.14.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.17.1-1PGDG.rhel10.2.aarch64.rpm pgdg 4.17.1 153.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.17.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.12-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.12 148.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.12-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.11-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.11 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.10-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.10 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.9-2PGDG.rhel10.2.aarch64.rpm pgdg 4.16.9 149.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.9-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.8-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.8 149.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.8-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.7 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.7 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.7 148.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 148.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel10.aarch64.rpm pgdg 4.14.4 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.14.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel10.aarch64.rpm pgdg 4.14.3 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.14.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg12+1_amd64.deb pgdg 4.17.1 378.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg12+1_amd64.deb pgdg 4.16.13 373.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg12+1_amd64.deb pgdg 4.16.12 371.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg12+1_arm64.deb pgdg 4.17.1 367.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg12+1_arm64.deb pgdg 4.16.13 363.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg12+1_arm64.deb pgdg 4.16.12 360.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg13+1_amd64.deb pgdg 4.17.1 379.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg13+1_amd64.deb pgdg 4.16.13 374.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg13+1_amd64.deb pgdg 4.16.12 372.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg13+1_arm64.deb pgdg 4.17.1 369.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg13+1_arm64.deb pgdg 4.16.13 365.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg13+1_arm64.deb pgdg 4.16.12 362.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg22.04+1_amd64.deb pgdg 4.17.1 414.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg22.04+1_amd64.deb pgdg 4.16.13 410.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg22.04+1_amd64.deb pgdg 4.16.12 405.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg22.04+1_arm64.deb pgdg 4.17.1 402.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg22.04+1_arm64.deb pgdg 4.16.13 398.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg22.04+1_arm64.deb pgdg 4.16.12 394.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg24.04+1_amd64.deb pgdg 4.17.1 375.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg24.04+1_amd64.deb pgdg 4.16.13 371.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg24.04+1_amd64.deb pgdg 4.16.12 368.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg24.04+1_arm64.deb pgdg 4.17.1 367.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg24.04+1_arm64.deb pgdg 4.16.13 363.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg24.04+1_arm64.deb pgdg 4.16.12 360.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg26.04+1_amd64.deb pgdg 4.17.1 373.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg26.04+1_amd64.deb pgdg 4.16.13 368.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg26.04+1_amd64.deb pgdg 4.16.12 365.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.17.1-1.pgdg26.04+1_arm64.deb pgdg 4.17.1 364.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.17.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.13-1.pgdg26.04+1_arm64.deb pgdg 4.16.13 359.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.13-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.12-1.pgdg26.04+1_arm64.deb pgdg 4.16.12 356.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.12-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 orafce_15 orafce_15-4.17.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.17.1 162.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.17.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.16.12-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.12 157.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.12-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.16.11-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.11 155.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.16.10-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.10 155.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.16.9-2PGDG.rhel8.10.x86_64.rpm pgdg 4.16.9 154.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.9-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.16.8-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.8 155.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.7 153.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 153.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 152.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 151.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel8.x86_64.rpm pgdg 4.14.4 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.3-1PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.2-1PGDG.rhel8.x86_64.rpm pgdg 4.14.2 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.0-1PGDG.rhel8.x86_64.rpm pgdg 4.14.0 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.13.5-1PGDG.rhel8.x86_64.rpm pgdg 4.13.5 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.13.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.13.3-1PGDG.rhel8.x86_64.rpm pgdg 4.13.3 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.13.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.13.2-1PGDG.rhel8.x86_64.rpm pgdg 4.13.2 148.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.13.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.12.0-1PGDG.rhel8.x86_64.rpm pgdg 4.12.0 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.12.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.11.0-1PGDG.rhel8.x86_64.rpm pgdg 4.11.0 147.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.11.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.10.3-1PGDG.rhel8.x86_64.rpm pgdg 4.10.3 146.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.10.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.10.2-1PGDG.rhel8.x86_64.rpm pgdg 4.10.2 146.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.10.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.10.0-1PGDG.rhel8.x86_64.rpm pgdg 4.10.0 146.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.10.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.4-1PGDG.rhel8.x86_64.rpm pgdg 4.9.4 145.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.3-1PGDG.rhel8.x86_64.rpm pgdg 4.9.3 145.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.2-1PGDG.rhel8.x86_64.rpm pgdg 4.9.2 145.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.1-1PGDG.rhel8.x86_64.rpm pgdg 4.9.1 145.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.0-1PGDG.rhel8.x86_64.rpm pgdg 4.9.0 144.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.17.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.17.1 154.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.17.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.12-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.12 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.12-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.11-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.11 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.10-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.10 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.9-2PGDG.rhel8.10.aarch64.rpm pgdg 4.16.9 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.9-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.8-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.8 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.7 149.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 147.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel8.aarch64.rpm pgdg 4.14.4 146.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.3-1PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.2-1PGDG.rhel8.aarch64.rpm pgdg 4.14.2 146.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.0-1PGDG.rhel8.aarch64.rpm pgdg 4.14.0 144.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.13.5-1PGDG.rhel8.aarch64.rpm pgdg 4.13.5 144.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.13.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.13.3-1PGDG.rhel8.aarch64.rpm pgdg 4.13.3 144.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.13.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.13.2-1PGDG.rhel8.aarch64.rpm pgdg 4.13.2 144.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.13.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.12.0-1PGDG.rhel8.aarch64.rpm pgdg 4.12.0 142.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.12.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.11.0-1PGDG.rhel8.aarch64.rpm pgdg 4.11.0 142.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.11.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.10.3-1PGDG.rhel8.aarch64.rpm pgdg 4.10.3 142.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.10.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.10.2-1PGDG.rhel8.aarch64.rpm pgdg 4.10.2 141.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.10.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.10.0-1PGDG.rhel8.aarch64.rpm pgdg 4.10.0 141.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.10.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.4-1PGDG.rhel8.aarch64.rpm pgdg 4.9.4 140.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.3-1PGDG.rhel8.aarch64.rpm pgdg 4.9.3 140.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.2-1PGDG.rhel8.aarch64.rpm pgdg 4.9.2 140.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.1-1PGDG.rhel8.aarch64.rpm pgdg 4.9.1 140.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.0-1PGDG.rhel8.aarch64.rpm pgdg 4.9.0 140.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.17.1-1PGDG.rhel9.8.x86_64.rpm pgdg 4.17.1 157.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.17.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.12-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.12 152.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.12-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.11-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.11 151.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.10-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.10 151.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.9-2PGDG.rhel9.8.x86_64.rpm pgdg 4.16.9 151.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.9-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.8-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.8 151.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.8-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.7 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.7 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.7 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.5 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.5 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 148.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel9.x86_64.rpm pgdg 4.14.4 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.3-1PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.2-1PGDG.rhel9.x86_64.rpm pgdg 4.14.2 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.0-1PGDG.rhel9.x86_64.rpm pgdg 4.14.0 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.13.5-1PGDG.rhel9.x86_64.rpm pgdg 4.13.5 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.13.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.13.3-1PGDG.rhel9.x86_64.rpm pgdg 4.13.3 148.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.13.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.13.2-1PGDG.rhel9.x86_64.rpm pgdg 4.13.2 147.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.13.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.12.0-1PGDG.rhel9.x86_64.rpm pgdg 4.12.0 146.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.12.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.11.0-1PGDG.rhel9.x86_64.rpm pgdg 4.11.0 146.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.11.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.10.3-1PGDG.rhel9.x86_64.rpm pgdg 4.10.3 146.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.10.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.10.2-1PGDG.rhel9.x86_64.rpm pgdg 4.10.2 146.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.10.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.10.0-1PGDG.rhel9.x86_64.rpm pgdg 4.10.0 145.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.10.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.4-1PGDG.rhel9.x86_64.rpm pgdg 4.9.4 144.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.3-1PGDG.rhel9.x86_64.rpm pgdg 4.9.3 144.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.2-1PGDG.rhel9.x86_64.rpm pgdg 4.9.2 144.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.1-1PGDG.rhel9.x86_64.rpm pgdg 4.9.1 144.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.0-1PGDG.rhel9.x86_64.rpm pgdg 4.9.0 144.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.17.1-1PGDG.rhel9.8.aarch64.rpm pgdg 4.17.1 151.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.17.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.12-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.12 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.12-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.11-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.11 149.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.10-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.10 148.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.9-2PGDG.rhel9.8.aarch64.rpm pgdg 4.16.9 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.9-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.8-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.8 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.8-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.7 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.7 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.7 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.5 148.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.5 148.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 146.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel9.aarch64.rpm pgdg 4.14.4 146.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.3-1PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.2-1PGDG.rhel9.aarch64.rpm pgdg 4.14.2 146.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.0-1PGDG.rhel9.aarch64.rpm pgdg 4.14.0 146.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.13.5-1PGDG.rhel9.aarch64.rpm pgdg 4.13.5 145.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.13.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.13.3-1PGDG.rhel9.aarch64.rpm pgdg 4.13.3 145.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.13.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.13.2-1PGDG.rhel9.aarch64.rpm pgdg 4.13.2 145.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.13.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.12.0-1PGDG.rhel9.aarch64.rpm pgdg 4.12.0 143.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.12.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.11.0-1PGDG.rhel9.aarch64.rpm pgdg 4.11.0 143.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.11.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.10.3-1PGDG.rhel9.aarch64.rpm pgdg 4.10.3 143.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.10.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.10.2-1PGDG.rhel9.aarch64.rpm pgdg 4.10.2 143.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.10.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.10.0-1PGDG.rhel9.aarch64.rpm pgdg 4.10.0 142.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.10.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.4-1PGDG.rhel9.aarch64.rpm pgdg 4.9.4 142.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.3-1PGDG.rhel9.aarch64.rpm pgdg 4.9.3 142.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.2-1PGDG.rhel9.aarch64.rpm pgdg 4.9.2 141.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.1-1PGDG.rhel9.aarch64.rpm pgdg 4.9.1 141.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.0-1PGDG.rhel9.aarch64.rpm pgdg 4.9.0 141.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.17.1-1PGDG.rhel10.2.x86_64.rpm pgdg 4.17.1 158.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.17.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.12-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.12 154.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.12-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.11-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.11 152.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.10-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.10 151.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.9-2PGDG.rhel10.2.x86_64.rpm pgdg 4.16.9 151.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.9-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.8-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.8 151.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.8-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.7 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.7 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.7 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.5 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 150.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.5 151.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel10.x86_64.rpm pgdg 4.14.4 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.14.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel10.x86_64.rpm pgdg 4.14.3 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.14.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.17.1-1PGDG.rhel10.2.aarch64.rpm pgdg 4.17.1 153.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.17.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.12-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.12 149.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.12-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.11-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.11 150.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.10-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.10 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.9-2PGDG.rhel10.2.aarch64.rpm pgdg 4.16.9 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.9-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.8-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.8 149.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.8-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.7 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.7 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.7 148.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.5 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.5 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 149.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 148.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel10.aarch64.rpm pgdg 4.14.4 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.14.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel10.aarch64.rpm pgdg 4.14.3 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.14.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg12+1_amd64.deb pgdg 4.17.1 380.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg12+1_amd64.deb pgdg 4.16.13 376.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg12+1_amd64.deb pgdg 4.16.12 373.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg12+1_arm64.deb pgdg 4.17.1 370.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg12+1_arm64.deb pgdg 4.16.13 366.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg12+1_arm64.deb pgdg 4.16.12 363.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg13+1_amd64.deb pgdg 4.17.1 381.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg13+1_amd64.deb pgdg 4.16.13 377.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg13+1_amd64.deb pgdg 4.16.12 374.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg13+1_arm64.deb pgdg 4.17.1 372.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg13+1_arm64.deb pgdg 4.16.13 368.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg13+1_arm64.deb pgdg 4.16.12 364.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg22.04+1_amd64.deb pgdg 4.17.1 420.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg22.04+1_amd64.deb pgdg 4.16.13 416.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg22.04+1_amd64.deb pgdg 4.16.12 412.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg22.04+1_arm64.deb pgdg 4.17.1 409.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg22.04+1_arm64.deb pgdg 4.16.13 405.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg22.04+1_arm64.deb pgdg 4.16.12 401.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg24.04+1_amd64.deb pgdg 4.17.1 380.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg24.04+1_amd64.deb pgdg 4.16.13 375.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg24.04+1_amd64.deb pgdg 4.16.12 373.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg24.04+1_arm64.deb pgdg 4.17.1 371.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg24.04+1_arm64.deb pgdg 4.16.13 367.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg24.04+1_arm64.deb pgdg 4.16.12 364.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg26.04+1_amd64.deb pgdg 4.17.1 378.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg26.04+1_amd64.deb pgdg 4.16.13 374.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg26.04+1_amd64.deb pgdg 4.16.12 371.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.17.1-1.pgdg26.04+1_arm64.deb pgdg 4.17.1 368.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.17.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.13-1.pgdg26.04+1_arm64.deb pgdg 4.16.13 364.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.13-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.12-1.pgdg26.04+1_arm64.deb pgdg 4.16.12 361.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.12-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 orafce_14 orafce_14-4.17.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.17.1 163.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.17.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.16.12-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.12 158.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.12-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.16.11-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.11 157.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.11-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.16.10-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.10 156.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.10-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.16.9-2PGDG.rhel8.10.x86_64.rpm pgdg 4.16.9 155.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.9-2PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.16.8-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.8 156.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.8-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.7 154.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.7-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 154.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 153.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 152.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel8.x86_64.rpm pgdg 4.14.4 152.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel8.x86_64.rpm pgdg 4.14.3 151.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.3-1PGDG.rhel8.x86_64.rpm pgdg 4.14.3 151.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.2-1PGDG.rhel8.x86_64.rpm pgdg 4.14.2 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.0-1PGDG.rhel8.x86_64.rpm pgdg 4.14.0 150.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.13.5-1PGDG.rhel8.x86_64.rpm pgdg 4.13.5 150.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.13.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.13.3-1PGDG.rhel8.x86_64.rpm pgdg 4.13.3 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.13.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.13.2-1PGDG.rhel8.x86_64.rpm pgdg 4.13.2 149.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.13.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.12.0-1PGDG.rhel8.x86_64.rpm pgdg 4.12.0 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.12.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.11.0-1PGDG.rhel8.x86_64.rpm pgdg 4.11.0 148.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.11.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.10.3-1PGDG.rhel8.x86_64.rpm pgdg 4.10.3 148.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.10.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.10.2-1PGDG.rhel8.x86_64.rpm pgdg 4.10.2 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.10.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.10.0-1PGDG.rhel8.x86_64.rpm pgdg 4.10.0 147.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.10.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.4-1PGDG.rhel8.x86_64.rpm pgdg 4.9.4 146.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.3-1PGDG.rhel8.x86_64.rpm pgdg 4.9.3 146.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.2-1PGDG.rhel8.x86_64.rpm pgdg 4.9.2 146.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.1-1PGDG.rhel8.x86_64.rpm pgdg 4.9.1 146.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.0-1PGDG.rhel8.x86_64.rpm pgdg 4.9.0 146.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.17.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.17.1 155.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.17.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.12-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.12 150.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.12-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.11-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.11 152.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.11-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.10-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.10 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.10-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.9-2PGDG.rhel8.10.aarch64.rpm pgdg 4.16.9 151.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.9-2PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.8-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.8 151.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.8-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.7 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.7-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 149.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 147.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel8.aarch64.rpm pgdg 4.14.4 147.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel8.aarch64.rpm pgdg 4.14.3 147.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.3-1PGDG.rhel8.aarch64.rpm pgdg 4.14.3 147.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.2-1PGDG.rhel8.aarch64.rpm pgdg 4.14.2 146.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.0-1PGDG.rhel8.aarch64.rpm pgdg 4.14.0 145.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.13.5-1PGDG.rhel8.aarch64.rpm pgdg 4.13.5 145.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.13.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.13.3-1PGDG.rhel8.aarch64.rpm pgdg 4.13.3 145.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.13.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.13.2-1PGDG.rhel8.aarch64.rpm pgdg 4.13.2 145.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.13.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.12.0-1PGDG.rhel8.aarch64.rpm pgdg 4.12.0 143.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.12.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.11.0-1PGDG.rhel8.aarch64.rpm pgdg 4.11.0 143.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.11.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.10.3-1PGDG.rhel8.aarch64.rpm pgdg 4.10.3 143.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.10.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.10.2-1PGDG.rhel8.aarch64.rpm pgdg 4.10.2 142.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.10.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.10.0-1PGDG.rhel8.aarch64.rpm pgdg 4.10.0 142.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.10.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.4-1PGDG.rhel8.aarch64.rpm pgdg 4.9.4 141.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.3-1PGDG.rhel8.aarch64.rpm pgdg 4.9.3 141.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.2-1PGDG.rhel8.aarch64.rpm pgdg 4.9.2 141.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.1-1PGDG.rhel8.aarch64.rpm pgdg 4.9.1 140.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.0-1PGDG.rhel8.aarch64.rpm pgdg 4.9.0 140.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.17.1-1PGDG.rhel9.8.x86_64.rpm pgdg 4.17.1 158.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.17.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.12-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.12 153.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.12-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.11-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.11 152.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.11-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.10-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.10 152.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.10-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.9-2PGDG.rhel9.8.x86_64.rpm pgdg 4.16.9 151.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.9-2PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.8-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.8 152.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.8-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.7 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.7-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.7 150.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.7-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.7 151.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.7-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel9.8.x86_64.rpm pgdg 4.16.5 151.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.5-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 151.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel9.6.x86_64.rpm pgdg 4.16.5 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.5-1PGDG.rhel9.6.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 150.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel9.x86_64.rpm pgdg 4.14.4 149.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel9.x86_64.rpm pgdg 4.14.3 149.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.3-1PGDG.rhel9.x86_64.rpm pgdg 4.14.3 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.2-1PGDG.rhel9.x86_64.rpm pgdg 4.14.2 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.0-1PGDG.rhel9.x86_64.rpm pgdg 4.14.0 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.13.5-1PGDG.rhel9.x86_64.rpm pgdg 4.13.5 149.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.13.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.13.3-1PGDG.rhel9.x86_64.rpm pgdg 4.13.3 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.13.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.13.2-1PGDG.rhel9.x86_64.rpm pgdg 4.13.2 149.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.13.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.12.0-1PGDG.rhel9.x86_64.rpm pgdg 4.12.0 147.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.12.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.11.0-1PGDG.rhel9.x86_64.rpm pgdg 4.11.0 147.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.11.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.10.3-1PGDG.rhel9.x86_64.rpm pgdg 4.10.3 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.10.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.10.2-1PGDG.rhel9.x86_64.rpm pgdg 4.10.2 147.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.10.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.10.0-1PGDG.rhel9.x86_64.rpm pgdg 4.10.0 147.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.10.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.4-1PGDG.rhel9.x86_64.rpm pgdg 4.9.4 146.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.3-1PGDG.rhel9.x86_64.rpm pgdg 4.9.3 145.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.2-1PGDG.rhel9.x86_64.rpm pgdg 4.9.2 145.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.1-1PGDG.rhel9.x86_64.rpm pgdg 4.9.1 145.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.0-1PGDG.rhel9.x86_64.rpm pgdg 4.9.0 145.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.17.1-1PGDG.rhel9.8.aarch64.rpm pgdg 4.17.1 153.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.17.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.12-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.12 148.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.12-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.11-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.11 150.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.11-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.10-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.10 150.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.10-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.9-2PGDG.rhel9.8.aarch64.rpm pgdg 4.16.9 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.9-2PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.8-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.8 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.8-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.7 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.7-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.7 148.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.7-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.7 148.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.7-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel9.8.aarch64.rpm pgdg 4.16.5 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.5-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel9.6.aarch64.rpm pgdg 4.16.5 149.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.5-1PGDG.rhel9.6.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 149.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 148.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel9.aarch64.rpm pgdg 4.14.4 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel9.aarch64.rpm pgdg 4.14.3 147.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.3-1PGDG.rhel9.aarch64.rpm pgdg 4.14.3 147.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.2-1PGDG.rhel9.aarch64.rpm pgdg 4.14.2 147.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.0-1PGDG.rhel9.aarch64.rpm pgdg 4.14.0 146.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.13.5-1PGDG.rhel9.aarch64.rpm pgdg 4.13.5 146.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.13.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.13.3-1PGDG.rhel9.aarch64.rpm pgdg 4.13.3 146.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.13.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.13.2-1PGDG.rhel9.aarch64.rpm pgdg 4.13.2 146.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.13.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.12.0-1PGDG.rhel9.aarch64.rpm pgdg 4.12.0 145.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.12.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.11.0-1PGDG.rhel9.aarch64.rpm pgdg 4.11.0 144.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.11.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.10.3-1PGDG.rhel9.aarch64.rpm pgdg 4.10.3 144.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.10.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.10.2-1PGDG.rhel9.aarch64.rpm pgdg 4.10.2 144.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.10.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.10.0-1PGDG.rhel9.aarch64.rpm pgdg 4.10.0 143.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.10.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.4-1PGDG.rhel9.aarch64.rpm pgdg 4.9.4 142.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.3-1PGDG.rhel9.aarch64.rpm pgdg 4.9.3 142.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.2-1PGDG.rhel9.aarch64.rpm pgdg 4.9.2 142.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.1-1PGDG.rhel9.aarch64.rpm pgdg 4.9.1 142.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.0-1PGDG.rhel9.aarch64.rpm pgdg 4.9.0 142.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.17.1-1PGDG.rhel10.2.x86_64.rpm pgdg 4.17.1 159.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.17.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.12-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.12 155.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.12-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.11-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.11 153.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.11-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.10-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.10 153.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.10-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.9-2PGDG.rhel10.2.x86_64.rpm pgdg 4.16.9 152.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.9-2PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.8-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.8 152.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.8-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.7 151.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.7-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.7 151.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.7-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.7 152.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.7-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel10.2.x86_64.rpm pgdg 4.16.5 152.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.5-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 152.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel10.0.x86_64.rpm pgdg 4.16.5 152.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.5-1PGDG.rhel10.0.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 152.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 152.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 151.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel10.x86_64.rpm pgdg 4.14.4 151.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.14.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel10.x86_64.rpm pgdg 4.14.3 151.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.14.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.17.1-1PGDG.rhel10.2.aarch64.rpm pgdg 4.17.1 154.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.17.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.12-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.12 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.12-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.11-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.11 151.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.11-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.10-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.10 151.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.10-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.9-2PGDG.rhel10.2.aarch64.rpm pgdg 4.16.9 150.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.9-2PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.8-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.8 150.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.8-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.7 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.7-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.7 149.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.7-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.7-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.7 149.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.7-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel10.2.aarch64.rpm pgdg 4.16.5 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.5-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel10.0.aarch64.rpm pgdg 4.16.5 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.5-1PGDG.rhel10.0.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 150.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 150.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 149.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel10.aarch64.rpm pgdg 4.14.4 149.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.14.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel10.aarch64.rpm pgdg 4.14.3 149.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.14.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg12+1_amd64.deb pgdg 4.17.1 383.8KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg12+1_amd64.deb pgdg 4.16.13 379.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg12+1_amd64.deb pgdg 4.16.12 376.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg12+1_arm64.deb pgdg 4.17.1 373.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg12+1_arm64.deb pgdg 4.16.13 369.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg12+1_arm64.deb pgdg 4.16.12 367.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg13+1_amd64.deb pgdg 4.17.1 385.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg13+1_amd64.deb pgdg 4.16.13 381.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg13+1_amd64.deb pgdg 4.16.12 378.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg13+1_arm64.deb pgdg 4.17.1 375.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg13+1_arm64.deb pgdg 4.16.13 371.0KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg13+1_arm64.deb pgdg 4.16.12 368.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg22.04+1_amd64.deb pgdg 4.17.1 420.4KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg22.04+1_amd64.deb pgdg 4.16.13 416.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg22.04+1_amd64.deb pgdg 4.16.12 412.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg22.04+1_arm64.deb pgdg 4.17.1 408.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg22.04+1_arm64.deb pgdg 4.16.13 404.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg22.04+1_arm64.deb pgdg 4.16.12 401.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg24.04+1_amd64.deb pgdg 4.17.1 383.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg24.04+1_amd64.deb pgdg 4.16.13 379.2KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg24.04+1_amd64.deb pgdg 4.16.12 376.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg24.04+1_arm64.deb pgdg 4.17.1 374.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg24.04+1_arm64.deb pgdg 4.16.13 370.7KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg24.04+1_arm64.deb pgdg 4.16.12 367.6KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg26.04+1_amd64.deb pgdg 4.17.1 381.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg26.04+1_amd64.deb pgdg 4.16.13 377.1KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg26.04+1_amd64.deb pgdg 4.16.12 373.9KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.17.1-1.pgdg26.04+1_arm64.deb pgdg 4.17.1 371.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.17.1-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.13-1.pgdg26.04+1_arm64.deb pgdg 4.16.13 367.5KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.13-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.12-1.pgdg26.04+1_arm64.deb pgdg 4.16.12 364.3KiB https://mirrors.cloud.tencent.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.12-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `orafce` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install orafce;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y orafce -v 18  # PG 18
pig ext install -y orafce -v 17  # PG 17
pig ext install -y orafce -v 16  # PG 16
pig ext install -y orafce -v 15  # PG 15
pig ext install -y orafce -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y orafce_18       # PG 18
dnf install -y orafce_17       # PG 17
dnf install -y orafce_16       # PG 16
dnf install -y orafce_15       # PG 15
dnf install -y orafce_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-orafce   # PG 18
apt install -y postgresql-17-orafce   # PG 17
apt install -y postgresql-16-orafce   # PG 16
apt install -y postgresql-15-orafce   # PG 15
apt install -y postgresql-14-orafce   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION orafce;
```

## 用法

来源：

- [README.asciidoc](https://github.com/orafce/orafce/blob/542aed2e0297898cc9844fede3c4452f894b37ed/README.asciidoc)
- [orafce.control](https://github.com/orafce/orafce/blob/542aed2e0297898cc9844fede3c4452f894b37ed/orafce.control)
- [orafce--4.17.sql](https://github.com/orafce/orafce/blob/542aed2e0297898cc9844fede3c4452f894b37ed/orafce--4.17.sql)
- [orafce--4.16--4.17.sql](https://github.com/orafce/orafce/blob/542aed2e0297898cc9844fede3c4452f894b37ed/orafce--4.16--4.17.sql)
- [file.c](https://github.com/orafce/orafce/blob/542aed2e0297898cc9844fede3c4452f894b37ed/file.c)

`orafce` 提供兼容 Oracle 的函数、类型与工具包。发行版 4.17.1 使用控制文件和 SQL 扩展版本 4.17；两个版本号分别描述不同层次。

### 核心工作流

```sql
CREATE EXTENSION orafce;
SELECT oracle.add_months(date '2026-01-31', 1);
SELECT oracle.nvl(NULL::text, 'fallback');
SELECT oracle.decode(1, 1, 'one', 2, 'two', 'other');
SELECT dbms_output.enable();
SELECT dbms_output.put_line('Hello');
SELECT * FROM dbms_output.get_line();
```

### 类型与工具包

需要在 Oracle 风格日期中保留时分秒时，应使用 `oracle.date`。日期函数包括 `oracle.add_months`、`oracle.last_day`、`oracle.next_day`、`oracle.months_between` 及舍入、截断操作。应显式限定 `oracle.decode`、`oracle.greatest` 和 `oracle.least` 的模式，否则 PostgreSQL 解析器可能采用内置语义。

`dbms_output` 管理缓冲输出；`dbms_pipe` 与 `dbms_alert` 支持会话通信。`dbms_sql` 提供动态游标和带类型的列值读取。`dbms_utility`、`dbms_assert`、`plvstr`、`plvchr` 与 `plvsubst` 提供诊断、校验及字符串辅助功能。这些兼容函数不会将 PostgreSQL 变成 Oracle，也不提供 Oracle 过程语言运行时。

### 文件访问与 4.16.12 变更

`utl_file` 在管理员配置的允许目录内访问服务端文件；应限制授权与文件系统权限。实现会拒绝路径规范化后仍然存在的父目录引用，文件路径应避免使用父目录引用。4.16.12 发布说明明确列出的修复是 `dbms_sql` 可能发生的崩溃。

安装需要超级用户，并创建固定模式；无需预加载。修改 `search_path` 前应遵循上游配置说明。4.16 系列修补版没有改变 SQL 版本；升级到 4.17 系列则需要执行对应的 SQL 升级。应按需重新连接以使用更新后的共享库，并对照实际安装的发行版验证行为。

### 4.16.13 修补

发行版 4.16.13 进一步修复可能发生的 `dbms_sql` 崩溃。control 版本仍为 4.16，应更新共享库发行版，不要使用不存在的 4.16.13 SQL 升级版本。

### 4.17 兼容对象

发行版 4.17.1 新增 `utl_raw` 字节操作，包括 `utl_raw.cast_to_raw`、`utl_raw.cast_to_varchar2`、`utl_raw.substr` 和按位函数。`utl_raw.substr` 会拒绝空值、非法起点、非正长度及越过末尾的范围。还新增 `oracle.hextoraw`、`oracle.rawtohex`、`oracle.empty_clob`、`oracle.empty_blob` 和 `oracle.from_tz`。USER_TABLES 与 USER_TAB_COLUMNS 现仅返回当前模式的对象。安装新发行版后执行 `ALTER EXTENSION orafce UPDATE TO '4.17'`，并重新连接以使用新库。
