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
| [**`orafce`**](/ext/e/orafce) | `4.16.5` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license bsd 0clause" href="/ext/license#bsd0clause">BSD 0-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9100  | [**`orafce`**](/ext/e/orafce) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`oracle_fdw`](/ext/e/oracle_fdw) [`pgtt`](/ext/e/pgtt) [`session_variable`](/ext/e/session_variable) [`pg_statement_rollback`](/ext/e/pg_statement_rollback) [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_dbms_lock`](/ext/e/pg_dbms_lock) [`pg_dbms_job`](/ext/e/pg_dbms_job) [`db_migrator`](/ext/e/db_migrator) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> el llvmjit deps break


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.16.5` | {{< pgvers "18,17,16,15,14" >}} | `orafce` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.16.5` | {{< pgvers "18,17,16,15,14" >}} | `orafce_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.16.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-orafce` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.16.5 4 | AVAIL PGDG 4.16.5 12 | AVAIL PGDG 4.16.5 21 | AVAIL PGDG 4.16.5 21 | AVAIL PGDG 4.16.5 21 |
| el8.aarch64 | AVAIL PGDG 4.16.5 4 | AVAIL PGDG 4.16.5 12 | AVAIL PGDG 4.16.5 21 | AVAIL PGDG 4.16.5 21 | AVAIL PGDG 4.16.5 21 |
| el9.x86_64 | AVAIL PGDG 4.16.5 5 | AVAIL PGDG 4.16.5 13 | AVAIL PGDG 4.16.5 22 | AVAIL PGDG 4.16.5 22 | AVAIL PGDG 4.16.5 22 |
| el9.aarch64 | AVAIL PGDG 4.16.5 5 | AVAIL PGDG 4.16.5 13 | AVAIL PGDG 4.16.5 22 | AVAIL PGDG 4.16.5 22 | AVAIL PGDG 4.16.5 22 |
| el10.x86_64 | AVAIL PGDG 4.16.5 5 | AVAIL PGDG 4.16.5 6 | AVAIL PGDG 4.16.5 6 | AVAIL PGDG 4.16.5 6 | AVAIL PGDG 4.16.5 6 |
| el10.aarch64 | AVAIL PGDG 4.16.5 5 | AVAIL PGDG 4.16.5 6 | AVAIL PGDG 4.16.5 6 | AVAIL PGDG 4.16.5 6 | AVAIL PGDG 4.16.5 6 |
| d12.x86_64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
| d12.aarch64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
| d13.x86_64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
| d13.aarch64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
| u22.x86_64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
| u22.aarch64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
| u24.x86_64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
| u24.aarch64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
| u26.x86_64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
| u26.aarch64 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 | AVAIL PGDG 4.16.5 3 |
@ el8.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 153.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 152.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 151.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel8.x86_64.rpm pgdg 4.14.5 151.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/orafce_18-4.14.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 148.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 148.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 146.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel8.aarch64.rpm pgdg 4.14.5 147.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/orafce_18-4.14.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 150.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 150.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 150.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 148.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel9.x86_64.rpm pgdg 4.14.5 148.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/orafce_18-4.14.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 148.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 148.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 147.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 146.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel9.aarch64.rpm pgdg 4.14.5 146.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/orafce_18-4.14.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 150.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 150.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 150.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 150.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel10.x86_64.rpm pgdg 4.14.5 149.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/orafce_18-4.14.5-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 149.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 149.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 149.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 148.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 18 orafce_18 orafce_18-4.14.5-1PGDG.rhel10.aarch64.rpm pgdg 4.14.5 148.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/orafce_18-4.14.5-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg12+1_amd64.deb pgdg 4.16.5 362.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg12+1_amd64.deb pgdg 4.16.4 362.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg12+1_amd64.deb pgdg 4.16.3 362.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg12+1_arm64.deb pgdg 4.16.5 355.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg12+1_arm64.deb pgdg 4.16.4 355.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg12+1_arm64.deb pgdg 4.16.3 355.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg13+1_amd64.deb pgdg 4.16.5 363.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg13+1_amd64.deb pgdg 4.16.4 364.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg13+1_amd64.deb pgdg 4.16.3 363.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg13+1_arm64.deb pgdg 4.16.5 356.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg13+1_arm64.deb pgdg 4.16.4 356.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg13+1_arm64.deb pgdg 4.16.3 356.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg22.04+1_amd64.deb pgdg 4.16.5 368.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg22.04+1_amd64.deb pgdg 4.16.4 368.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg22.04+1_amd64.deb pgdg 4.16.3 368.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg22.04+1_arm64.deb pgdg 4.16.5 360.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg22.04+1_arm64.deb pgdg 4.16.4 360.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg22.04+1_arm64.deb pgdg 4.16.3 360.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg24.04+1_amd64.deb pgdg 4.16.5 360.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg24.04+1_amd64.deb pgdg 4.16.4 360.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg24.04+1_amd64.deb pgdg 4.16.3 360.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg24.04+1_arm64.deb pgdg 4.16.5 354.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg24.04+1_arm64.deb pgdg 4.16.4 354.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg24.04+1_arm64.deb pgdg 4.16.3 355.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg26.04+1_amd64.deb pgdg 4.16.5 357.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg26.04+1_amd64.deb pgdg 4.16.4 358.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg26.04+1_amd64.deb pgdg 4.16.3 358.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.5-1.pgdg26.04+1_arm64.deb pgdg 4.16.5 351.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.4-1.pgdg26.04+1_arm64.deb pgdg 4.16.4 351.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-orafce postgresql-18-orafce_4.16.3-1.pgdg26.04+1_arm64.deb pgdg 4.16.3 351.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-18-orafce_4.16.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 153.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 152.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 151.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel8.x86_64.rpm pgdg 4.14.4 150.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.3-1PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.2-1PGDG.rhel8.x86_64.rpm pgdg 4.14.2 150.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.14.0-1PGDG.rhel8.x86_64.rpm pgdg 4.14.0 148.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.14.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.13.5-1PGDG.rhel8.x86_64.rpm pgdg 4.13.5 148.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.13.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.13.3-1PGDG.rhel8.x86_64.rpm pgdg 4.13.3 147.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.13.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.13.2-1PGDG.rhel8.x86_64.rpm pgdg 4.13.2 147.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.13.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 orafce_17 orafce_17-4.13.0-1PGDG.rhel8.x86_64.rpm pgdg 4.13.0 147.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/orafce_17-4.13.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 148.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 148.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 146.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel8.aarch64.rpm pgdg 4.14.4 146.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.3-1PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.2-1PGDG.rhel8.aarch64.rpm pgdg 4.14.2 146.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.14.0-1PGDG.rhel8.aarch64.rpm pgdg 4.14.0 143.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.14.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.13.5-1PGDG.rhel8.aarch64.rpm pgdg 4.13.5 143.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.13.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.13.3-1PGDG.rhel8.aarch64.rpm pgdg 4.13.3 142.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.13.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.13.2-1PGDG.rhel8.aarch64.rpm pgdg 4.13.2 142.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.13.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 orafce_17 orafce_17-4.13.0-1PGDG.rhel8.aarch64.rpm pgdg 4.13.0 142.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/orafce_17-4.13.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 150.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 150.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 150.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 148.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel9.x86_64.rpm pgdg 4.14.4 148.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.3-1PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.2-1PGDG.rhel9.x86_64.rpm pgdg 4.14.2 148.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.14.0-1PGDG.rhel9.x86_64.rpm pgdg 4.14.0 143.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.14.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.13.5-1PGDG.rhel9.x86_64.rpm pgdg 4.13.5 143.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.13.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.13.3-1PGDG.rhel9.x86_64.rpm pgdg 4.13.3 143.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.13.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.13.2-1PGDG.rhel9.x86_64.rpm pgdg 4.13.2 143.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.13.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 orafce_17 orafce_17-4.13.0-1PGDG.rhel9.x86_64.rpm pgdg 4.13.0 143.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/orafce_17-4.13.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 147.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 147.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 147.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 146.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel9.aarch64.rpm pgdg 4.14.4 146.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.3-1PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.2-1PGDG.rhel9.aarch64.rpm pgdg 4.14.2 146.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.14.0-1PGDG.rhel9.aarch64.rpm pgdg 4.14.0 141.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.14.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.13.5-1PGDG.rhel9.aarch64.rpm pgdg 4.13.5 141.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.13.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.13.3-1PGDG.rhel9.aarch64.rpm pgdg 4.13.3 141.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.13.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.13.2-1PGDG.rhel9.aarch64.rpm pgdg 4.13.2 141.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.13.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 orafce_17 orafce_17-4.13.0-1PGDG.rhel9.aarch64.rpm pgdg 4.13.0 140.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/orafce_17-4.13.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 150.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 150.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 150.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 150.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel10.x86_64.rpm pgdg 4.14.4 149.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.14.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel10.x86_64.rpm pgdg 4.14.3 149.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/orafce_17-4.14.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 148.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 149.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 148.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.14.4-1PGDG.rhel10.aarch64.rpm pgdg 4.14.4 148.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.14.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 orafce_17 orafce_17-4.14.3-2PGDG.rhel10.aarch64.rpm pgdg 4.14.3 148.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/orafce_17-4.14.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg12+1_amd64.deb pgdg 4.16.5 362.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg12+1_amd64.deb pgdg 4.16.4 362.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg12+1_amd64.deb pgdg 4.16.3 362.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg12+1_arm64.deb pgdg 4.16.5 355.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg12+1_arm64.deb pgdg 4.16.4 354.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg12+1_arm64.deb pgdg 4.16.3 355.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg13+1_amd64.deb pgdg 4.16.5 363.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg13+1_amd64.deb pgdg 4.16.4 363.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg13+1_amd64.deb pgdg 4.16.3 364.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg13+1_arm64.deb pgdg 4.16.5 356.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg13+1_arm64.deb pgdg 4.16.4 356.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg13+1_arm64.deb pgdg 4.16.3 356.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg22.04+1_amd64.deb pgdg 4.16.5 398.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg22.04+1_amd64.deb pgdg 4.16.4 398.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg22.04+1_amd64.deb pgdg 4.16.3 398.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg22.04+1_arm64.deb pgdg 4.16.5 390.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg22.04+1_arm64.deb pgdg 4.16.4 389.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg22.04+1_arm64.deb pgdg 4.16.3 390.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg24.04+1_amd64.deb pgdg 4.16.5 359.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg24.04+1_amd64.deb pgdg 4.16.4 359.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg24.04+1_amd64.deb pgdg 4.16.3 360.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg24.04+1_arm64.deb pgdg 4.16.5 354.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg24.04+1_arm64.deb pgdg 4.16.4 354.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg24.04+1_arm64.deb pgdg 4.16.3 355.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg26.04+1_amd64.deb pgdg 4.16.5 358.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg26.04+1_amd64.deb pgdg 4.16.4 358.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg26.04+1_amd64.deb pgdg 4.16.3 358.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.5-1.pgdg26.04+1_arm64.deb pgdg 4.16.5 351.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.4-1.pgdg26.04+1_arm64.deb pgdg 4.16.4 352.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-orafce postgresql-17-orafce_4.16.3-1.pgdg26.04+1_arm64.deb pgdg 4.16.3 351.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-17-orafce_4.16.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 153.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 152.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 151.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel8.x86_64.rpm pgdg 4.14.4 150.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.3-1PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.2-1PGDG.rhel8.x86_64.rpm pgdg 4.14.2 150.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.14.0-1PGDG.rhel8.x86_64.rpm pgdg 4.14.0 148.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.14.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.13.5-1PGDG.rhel8.x86_64.rpm pgdg 4.13.5 148.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.13.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.13.3-1PGDG.rhel8.x86_64.rpm pgdg 4.13.3 147.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.13.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.13.2-1PGDG.rhel8.x86_64.rpm pgdg 4.13.2 147.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.13.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.12.0-1PGDG.rhel8.x86_64.rpm pgdg 4.12.0 146.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.12.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.11.0-1PGDG.rhel8.x86_64.rpm pgdg 4.11.0 145.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.11.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.10.3-1PGDG.rhel8.x86_64.rpm pgdg 4.10.3 145.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.10.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.10.2-1PGDG.rhel8.x86_64.rpm pgdg 4.10.2 145.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.10.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.10.0-1PGDG.rhel8.x86_64.rpm pgdg 4.10.0 144.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.10.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.4-1PGDG.rhel8.x86_64.rpm pgdg 4.9.4 143.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.3-1PGDG.rhel8.x86_64.rpm pgdg 4.9.3 143.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.2-1PGDG.rhel8.x86_64.rpm pgdg 4.9.2 143.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.1-1PGDG.rhel8.x86_64.rpm pgdg 4.9.1 143.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 orafce_16 orafce_16-4.9.0-1PGDG.rhel8.x86_64.rpm pgdg 4.9.0 143.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/orafce_16-4.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 148.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 148.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 147.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel8.aarch64.rpm pgdg 4.14.4 146.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.3-1PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.2-1PGDG.rhel8.aarch64.rpm pgdg 4.14.2 146.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.14.0-1PGDG.rhel8.aarch64.rpm pgdg 4.14.0 143.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.14.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.13.5-1PGDG.rhel8.aarch64.rpm pgdg 4.13.5 142.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.13.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.13.3-1PGDG.rhel8.aarch64.rpm pgdg 4.13.3 142.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.13.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.13.2-1PGDG.rhel8.aarch64.rpm pgdg 4.13.2 142.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.13.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.12.0-1PGDG.rhel8.aarch64.rpm pgdg 4.12.0 141.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.12.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.11.0-1PGDG.rhel8.aarch64.rpm pgdg 4.11.0 140.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.11.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.10.3-1PGDG.rhel8.aarch64.rpm pgdg 4.10.3 140.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.10.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.10.2-1PGDG.rhel8.aarch64.rpm pgdg 4.10.2 140.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.10.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.10.0-1PGDG.rhel8.aarch64.rpm pgdg 4.10.0 139.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.10.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.4-1PGDG.rhel8.aarch64.rpm pgdg 4.9.4 139.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.3-1PGDG.rhel8.aarch64.rpm pgdg 4.9.3 138.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.2-1PGDG.rhel8.aarch64.rpm pgdg 4.9.2 138.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.1-1PGDG.rhel8.aarch64.rpm pgdg 4.9.1 138.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 orafce_16 orafce_16-4.9.0-1PGDG.rhel8.aarch64.rpm pgdg 4.9.0 138.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/orafce_16-4.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 149.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 149.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 149.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 148.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel9.x86_64.rpm pgdg 4.14.4 148.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.3-1PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.2-1PGDG.rhel9.x86_64.rpm pgdg 4.14.2 148.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.14.0-1PGDG.rhel9.x86_64.rpm pgdg 4.14.0 143.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.14.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.13.5-1PGDG.rhel9.x86_64.rpm pgdg 4.13.5 143.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.13.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.13.3-1PGDG.rhel9.x86_64.rpm pgdg 4.13.3 143.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.13.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.13.2-1PGDG.rhel9.x86_64.rpm pgdg 4.13.2 143.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.13.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.12.0-1PGDG.rhel9.x86_64.rpm pgdg 4.12.0 142.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.12.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.11.0-1PGDG.rhel9.x86_64.rpm pgdg 4.11.0 141.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.11.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.10.3-1PGDG.rhel9.x86_64.rpm pgdg 4.10.3 141.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.10.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.10.2-1PGDG.rhel9.x86_64.rpm pgdg 4.10.2 141.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.10.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.10.0-1PGDG.rhel9.x86_64.rpm pgdg 4.10.0 141.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.10.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.4-1PGDG.rhel9.x86_64.rpm pgdg 4.9.4 140.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.3-1PGDG.rhel9.x86_64.rpm pgdg 4.9.3 140.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.2-1PGDG.rhel9.x86_64.rpm pgdg 4.9.2 139.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.1-1PGDG.rhel9.x86_64.rpm pgdg 4.9.1 139.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 orafce_16 orafce_16-4.9.0-1PGDG.rhel9.x86_64.rpm pgdg 4.9.0 139.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/orafce_16-4.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 147.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 147.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 147.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 146.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel9.aarch64.rpm pgdg 4.14.4 146.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.3-1PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.2-1PGDG.rhel9.aarch64.rpm pgdg 4.14.2 146.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.14.0-1PGDG.rhel9.aarch64.rpm pgdg 4.14.0 141.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.14.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.13.5-1PGDG.rhel9.aarch64.rpm pgdg 4.13.5 141.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.13.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.13.3-1PGDG.rhel9.aarch64.rpm pgdg 4.13.3 141.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.13.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.13.2-1PGDG.rhel9.aarch64.rpm pgdg 4.13.2 141.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.13.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.12.0-1PGDG.rhel9.aarch64.rpm pgdg 4.12.0 140.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.12.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.11.0-1PGDG.rhel9.aarch64.rpm pgdg 4.11.0 139.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.11.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.10.3-1PGDG.rhel9.aarch64.rpm pgdg 4.10.3 139.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.10.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.10.2-1PGDG.rhel9.aarch64.rpm pgdg 4.10.2 139.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.10.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.10.0-1PGDG.rhel9.aarch64.rpm pgdg 4.10.0 138.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.10.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.4-1PGDG.rhel9.aarch64.rpm pgdg 4.9.4 137.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.3-1PGDG.rhel9.aarch64.rpm pgdg 4.9.3 137.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.2-1PGDG.rhel9.aarch64.rpm pgdg 4.9.2 137.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.1-1PGDG.rhel9.aarch64.rpm pgdg 4.9.1 137.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 orafce_16 orafce_16-4.9.0-1PGDG.rhel9.aarch64.rpm pgdg 4.9.0 137.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/orafce_16-4.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 150.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 150.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 150.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 149.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel10.x86_64.rpm pgdg 4.14.4 149.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.14.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel10.x86_64.rpm pgdg 4.14.3 149.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/orafce_16-4.14.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 148.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 149.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 148.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.14.4-1PGDG.rhel10.aarch64.rpm pgdg 4.14.4 148.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.14.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 orafce_16 orafce_16-4.14.3-2PGDG.rhel10.aarch64.rpm pgdg 4.14.3 148.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/orafce_16-4.14.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg12+1_amd64.deb pgdg 4.16.5 362.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg12+1_amd64.deb pgdg 4.16.4 362.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg12+1_amd64.deb pgdg 4.16.3 362.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg12+1_arm64.deb pgdg 4.16.5 354.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg12+1_arm64.deb pgdg 4.16.4 354.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg12+1_arm64.deb pgdg 4.16.3 355.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg13+1_amd64.deb pgdg 4.16.5 362.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg13+1_amd64.deb pgdg 4.16.4 363.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg13+1_amd64.deb pgdg 4.16.3 363.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg13+1_arm64.deb pgdg 4.16.5 356.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg13+1_arm64.deb pgdg 4.16.4 355.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg13+1_arm64.deb pgdg 4.16.3 356.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg22.04+1_amd64.deb pgdg 4.16.5 397.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg22.04+1_amd64.deb pgdg 4.16.4 397.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg22.04+1_amd64.deb pgdg 4.16.3 397.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg22.04+1_arm64.deb pgdg 4.16.5 389.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg22.04+1_arm64.deb pgdg 4.16.4 389.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg22.04+1_arm64.deb pgdg 4.16.3 389.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg24.04+1_amd64.deb pgdg 4.16.5 360.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg24.04+1_amd64.deb pgdg 4.16.4 359.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg24.04+1_amd64.deb pgdg 4.16.3 360.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg24.04+1_arm64.deb pgdg 4.16.5 354.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg24.04+1_arm64.deb pgdg 4.16.4 354.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg24.04+1_arm64.deb pgdg 4.16.3 354.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg26.04+1_amd64.deb pgdg 4.16.5 358.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg26.04+1_amd64.deb pgdg 4.16.4 358.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg26.04+1_amd64.deb pgdg 4.16.3 358.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.5-1.pgdg26.04+1_arm64.deb pgdg 4.16.5 350.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.4-1.pgdg26.04+1_arm64.deb pgdg 4.16.4 351.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-orafce postgresql-16-orafce_4.16.3-1.pgdg26.04+1_arm64.deb pgdg 4.16.3 351.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-16-orafce_4.16.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 153.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 152.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 151.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel8.x86_64.rpm pgdg 4.14.4 150.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.3-1PGDG.rhel8.x86_64.rpm pgdg 4.14.3 150.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.2-1PGDG.rhel8.x86_64.rpm pgdg 4.14.2 150.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.14.0-1PGDG.rhel8.x86_64.rpm pgdg 4.14.0 149.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.14.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.13.5-1PGDG.rhel8.x86_64.rpm pgdg 4.13.5 149.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.13.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.13.3-1PGDG.rhel8.x86_64.rpm pgdg 4.13.3 149.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.13.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.13.2-1PGDG.rhel8.x86_64.rpm pgdg 4.13.2 148.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.13.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.12.0-1PGDG.rhel8.x86_64.rpm pgdg 4.12.0 147.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.12.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.11.0-1PGDG.rhel8.x86_64.rpm pgdg 4.11.0 147.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.11.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.10.3-1PGDG.rhel8.x86_64.rpm pgdg 4.10.3 146.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.10.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.10.2-1PGDG.rhel8.x86_64.rpm pgdg 4.10.2 146.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.10.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.10.0-1PGDG.rhel8.x86_64.rpm pgdg 4.10.0 146.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.10.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.4-1PGDG.rhel8.x86_64.rpm pgdg 4.9.4 145.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.3-1PGDG.rhel8.x86_64.rpm pgdg 4.9.3 145.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.2-1PGDG.rhel8.x86_64.rpm pgdg 4.9.2 145.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.1-1PGDG.rhel8.x86_64.rpm pgdg 4.9.1 145.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 orafce_15 orafce_15-4.9.0-1PGDG.rhel8.x86_64.rpm pgdg 4.9.0 144.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/orafce_15-4.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 148.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 148.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 147.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel8.aarch64.rpm pgdg 4.14.4 146.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.3-1PGDG.rhel8.aarch64.rpm pgdg 4.14.3 146.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.2-1PGDG.rhel8.aarch64.rpm pgdg 4.14.2 146.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.14.0-1PGDG.rhel8.aarch64.rpm pgdg 4.14.0 144.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.14.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.13.5-1PGDG.rhel8.aarch64.rpm pgdg 4.13.5 144.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.13.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.13.3-1PGDG.rhel8.aarch64.rpm pgdg 4.13.3 144.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.13.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.13.2-1PGDG.rhel8.aarch64.rpm pgdg 4.13.2 144.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.13.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.12.0-1PGDG.rhel8.aarch64.rpm pgdg 4.12.0 142.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.12.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.11.0-1PGDG.rhel8.aarch64.rpm pgdg 4.11.0 142.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.11.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.10.3-1PGDG.rhel8.aarch64.rpm pgdg 4.10.3 142.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.10.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.10.2-1PGDG.rhel8.aarch64.rpm pgdg 4.10.2 141.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.10.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.10.0-1PGDG.rhel8.aarch64.rpm pgdg 4.10.0 141.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.10.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.4-1PGDG.rhel8.aarch64.rpm pgdg 4.9.4 140.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.3-1PGDG.rhel8.aarch64.rpm pgdg 4.9.3 140.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.2-1PGDG.rhel8.aarch64.rpm pgdg 4.9.2 140.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.1-1PGDG.rhel8.aarch64.rpm pgdg 4.9.1 140.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 orafce_15 orafce_15-4.9.0-1PGDG.rhel8.aarch64.rpm pgdg 4.9.0 140.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/orafce_15-4.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 150.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 150.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 150.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 148.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel9.x86_64.rpm pgdg 4.14.4 148.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.3-1PGDG.rhel9.x86_64.rpm pgdg 4.14.3 148.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.2-1PGDG.rhel9.x86_64.rpm pgdg 4.14.2 148.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.14.0-1PGDG.rhel9.x86_64.rpm pgdg 4.14.0 148.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.14.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.13.5-1PGDG.rhel9.x86_64.rpm pgdg 4.13.5 148.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.13.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.13.3-1PGDG.rhel9.x86_64.rpm pgdg 4.13.3 148.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.13.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.13.2-1PGDG.rhel9.x86_64.rpm pgdg 4.13.2 147.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.13.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.12.0-1PGDG.rhel9.x86_64.rpm pgdg 4.12.0 146.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.12.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.11.0-1PGDG.rhel9.x86_64.rpm pgdg 4.11.0 146.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.11.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.10.3-1PGDG.rhel9.x86_64.rpm pgdg 4.10.3 146.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.10.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.10.2-1PGDG.rhel9.x86_64.rpm pgdg 4.10.2 146.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.10.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.10.0-1PGDG.rhel9.x86_64.rpm pgdg 4.10.0 145.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.10.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.4-1PGDG.rhel9.x86_64.rpm pgdg 4.9.4 144.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.3-1PGDG.rhel9.x86_64.rpm pgdg 4.9.3 144.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.2-1PGDG.rhel9.x86_64.rpm pgdg 4.9.2 144.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.1-1PGDG.rhel9.x86_64.rpm pgdg 4.9.1 144.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 orafce_15 orafce_15-4.9.0-1PGDG.rhel9.x86_64.rpm pgdg 4.9.0 144.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/orafce_15-4.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 148.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 148.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 147.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 146.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel9.aarch64.rpm pgdg 4.14.4 146.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.3-1PGDG.rhel9.aarch64.rpm pgdg 4.14.3 146.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.2-1PGDG.rhel9.aarch64.rpm pgdg 4.14.2 146.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.14.0-1PGDG.rhel9.aarch64.rpm pgdg 4.14.0 146.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.14.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.13.5-1PGDG.rhel9.aarch64.rpm pgdg 4.13.5 145.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.13.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.13.3-1PGDG.rhel9.aarch64.rpm pgdg 4.13.3 145.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.13.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.13.2-1PGDG.rhel9.aarch64.rpm pgdg 4.13.2 145.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.13.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.12.0-1PGDG.rhel9.aarch64.rpm pgdg 4.12.0 143.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.12.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.11.0-1PGDG.rhel9.aarch64.rpm pgdg 4.11.0 143.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.11.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.10.3-1PGDG.rhel9.aarch64.rpm pgdg 4.10.3 143.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.10.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.10.2-1PGDG.rhel9.aarch64.rpm pgdg 4.10.2 143.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.10.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.10.0-1PGDG.rhel9.aarch64.rpm pgdg 4.10.0 142.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.10.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.4-1PGDG.rhel9.aarch64.rpm pgdg 4.9.4 142.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.3-1PGDG.rhel9.aarch64.rpm pgdg 4.9.3 142.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.2-1PGDG.rhel9.aarch64.rpm pgdg 4.9.2 141.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.1-1PGDG.rhel9.aarch64.rpm pgdg 4.9.1 141.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 orafce_15 orafce_15-4.9.0-1PGDG.rhel9.aarch64.rpm pgdg 4.9.0 141.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/orafce_15-4.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 150.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 150.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 150.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 150.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel10.x86_64.rpm pgdg 4.14.4 150.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.14.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel10.x86_64.rpm pgdg 4.14.3 150.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/orafce_15-4.14.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 149.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 149.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 149.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 148.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.14.4-1PGDG.rhel10.aarch64.rpm pgdg 4.14.4 148.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.14.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 orafce_15 orafce_15-4.14.3-2PGDG.rhel10.aarch64.rpm pgdg 4.14.3 148.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/orafce_15-4.14.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg12+1_amd64.deb pgdg 4.16.5 364.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg12+1_amd64.deb pgdg 4.16.4 364.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg12+1_amd64.deb pgdg 4.16.3 364.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg12+1_arm64.deb pgdg 4.16.5 357.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg12+1_arm64.deb pgdg 4.16.4 357.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg12+1_arm64.deb pgdg 4.16.3 357.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg13+1_amd64.deb pgdg 4.16.5 365.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg13+1_amd64.deb pgdg 4.16.4 366.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg13+1_amd64.deb pgdg 4.16.3 366.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg13+1_arm64.deb pgdg 4.16.5 358.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg13+1_arm64.deb pgdg 4.16.4 358.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg13+1_arm64.deb pgdg 4.16.3 358.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg22.04+1_amd64.deb pgdg 4.16.5 404.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg22.04+1_amd64.deb pgdg 4.16.4 404.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg22.04+1_amd64.deb pgdg 4.16.3 403.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg22.04+1_arm64.deb pgdg 4.16.5 395.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg22.04+1_arm64.deb pgdg 4.16.4 395.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg22.04+1_arm64.deb pgdg 4.16.3 395.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg24.04+1_amd64.deb pgdg 4.16.5 364.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg24.04+1_amd64.deb pgdg 4.16.4 364.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg24.04+1_amd64.deb pgdg 4.16.3 364.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg24.04+1_arm64.deb pgdg 4.16.5 358.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg24.04+1_arm64.deb pgdg 4.16.4 358.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg24.04+1_arm64.deb pgdg 4.16.3 358.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg26.04+1_amd64.deb pgdg 4.16.5 363.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg26.04+1_amd64.deb pgdg 4.16.4 364.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg26.04+1_amd64.deb pgdg 4.16.3 363.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.5-1.pgdg26.04+1_arm64.deb pgdg 4.16.5 355.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.4-1.pgdg26.04+1_arm64.deb pgdg 4.16.4 356.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-orafce postgresql-15-orafce_4.16.3-1.pgdg26.04+1_arm64.deb pgdg 4.16.3 356.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-15-orafce_4.16.3-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.16.5 154.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel8.x86_64.rpm pgdg 4.16.2 153.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.16.2-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel8.x86_64.rpm pgdg 4.14.6 152.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel8.x86_64.rpm pgdg 4.14.4 152.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel8.x86_64.rpm pgdg 4.14.3 151.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.3-2PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.3-1PGDG.rhel8.x86_64.rpm pgdg 4.14.3 151.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.2-1PGDG.rhel8.x86_64.rpm pgdg 4.14.2 151.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.14.0-1PGDG.rhel8.x86_64.rpm pgdg 4.14.0 150.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.14.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.13.5-1PGDG.rhel8.x86_64.rpm pgdg 4.13.5 150.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.13.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.13.3-1PGDG.rhel8.x86_64.rpm pgdg 4.13.3 150.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.13.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.13.2-1PGDG.rhel8.x86_64.rpm pgdg 4.13.2 149.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.13.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.12.0-1PGDG.rhel8.x86_64.rpm pgdg 4.12.0 148.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.12.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.11.0-1PGDG.rhel8.x86_64.rpm pgdg 4.11.0 148.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.11.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.10.3-1PGDG.rhel8.x86_64.rpm pgdg 4.10.3 148.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.10.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.10.2-1PGDG.rhel8.x86_64.rpm pgdg 4.10.2 147.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.10.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.10.0-1PGDG.rhel8.x86_64.rpm pgdg 4.10.0 147.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.10.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.4-1PGDG.rhel8.x86_64.rpm pgdg 4.9.4 146.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.3-1PGDG.rhel8.x86_64.rpm pgdg 4.9.3 146.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.2-1PGDG.rhel8.x86_64.rpm pgdg 4.9.2 146.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.1-1PGDG.rhel8.x86_64.rpm pgdg 4.9.1 146.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 orafce_14 orafce_14-4.9.0-1PGDG.rhel8.x86_64.rpm pgdg 4.9.0 146.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/orafce_14-4.9.0-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.16.5 149.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel8.aarch64.rpm pgdg 4.16.2 149.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.16.2-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel8.aarch64.rpm pgdg 4.14.6 147.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.6-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel8.aarch64.rpm pgdg 4.14.4 147.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel8.aarch64.rpm pgdg 4.14.3 147.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.3-2PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.3-1PGDG.rhel8.aarch64.rpm pgdg 4.14.3 147.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.2-1PGDG.rhel8.aarch64.rpm pgdg 4.14.2 146.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.14.0-1PGDG.rhel8.aarch64.rpm pgdg 4.14.0 145.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.14.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.13.5-1PGDG.rhel8.aarch64.rpm pgdg 4.13.5 145.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.13.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.13.3-1PGDG.rhel8.aarch64.rpm pgdg 4.13.3 145.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.13.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.13.2-1PGDG.rhel8.aarch64.rpm pgdg 4.13.2 145.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.13.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.12.0-1PGDG.rhel8.aarch64.rpm pgdg 4.12.0 143.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.12.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.11.0-1PGDG.rhel8.aarch64.rpm pgdg 4.11.0 143.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.11.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.10.3-1PGDG.rhel8.aarch64.rpm pgdg 4.10.3 143.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.10.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.10.2-1PGDG.rhel8.aarch64.rpm pgdg 4.10.2 142.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.10.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.10.0-1PGDG.rhel8.aarch64.rpm pgdg 4.10.0 142.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.10.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.4-1PGDG.rhel8.aarch64.rpm pgdg 4.9.4 141.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.3-1PGDG.rhel8.aarch64.rpm pgdg 4.9.3 141.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.2-1PGDG.rhel8.aarch64.rpm pgdg 4.9.2 141.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.1-1PGDG.rhel8.aarch64.rpm pgdg 4.9.1 140.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 orafce_14 orafce_14-4.9.0-1PGDG.rhel8.aarch64.rpm pgdg 4.9.0 140.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/orafce_14-4.9.0-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.16.5 151.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel9.x86_64.rpm pgdg 4.16.2 151.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.2-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.16.1-1PGDG.rhel9.x86_64.rpm pgdg 4.16.1 151.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.16.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel9.x86_64.rpm pgdg 4.14.6 150.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel9.x86_64.rpm pgdg 4.14.4 149.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel9.x86_64.rpm pgdg 4.14.3 149.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.3-2PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.3-1PGDG.rhel9.x86_64.rpm pgdg 4.14.3 149.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.2-1PGDG.rhel9.x86_64.rpm pgdg 4.14.2 149.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.14.0-1PGDG.rhel9.x86_64.rpm pgdg 4.14.0 149.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.14.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.13.5-1PGDG.rhel9.x86_64.rpm pgdg 4.13.5 149.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.13.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.13.3-1PGDG.rhel9.x86_64.rpm pgdg 4.13.3 149.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.13.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.13.2-1PGDG.rhel9.x86_64.rpm pgdg 4.13.2 149.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.13.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.12.0-1PGDG.rhel9.x86_64.rpm pgdg 4.12.0 147.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.12.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.11.0-1PGDG.rhel9.x86_64.rpm pgdg 4.11.0 147.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.11.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.10.3-1PGDG.rhel9.x86_64.rpm pgdg 4.10.3 147.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.10.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.10.2-1PGDG.rhel9.x86_64.rpm pgdg 4.10.2 147.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.10.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.10.0-1PGDG.rhel9.x86_64.rpm pgdg 4.10.0 147.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.10.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.4-1PGDG.rhel9.x86_64.rpm pgdg 4.9.4 146.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.3-1PGDG.rhel9.x86_64.rpm pgdg 4.9.3 145.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.2-1PGDG.rhel9.x86_64.rpm pgdg 4.9.2 145.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.1-1PGDG.rhel9.x86_64.rpm pgdg 4.9.1 145.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 orafce_14 orafce_14-4.9.0-1PGDG.rhel9.x86_64.rpm pgdg 4.9.0 145.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/orafce_14-4.9.0-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.16.5 149.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel9.aarch64.rpm pgdg 4.16.2 149.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.2-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.16.1-1PGDG.rhel9.aarch64.rpm pgdg 4.16.1 148.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.16.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel9.aarch64.rpm pgdg 4.14.6 147.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.6-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel9.aarch64.rpm pgdg 4.14.4 147.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel9.aarch64.rpm pgdg 4.14.3 147.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.3-2PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.3-1PGDG.rhel9.aarch64.rpm pgdg 4.14.3 147.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.2-1PGDG.rhel9.aarch64.rpm pgdg 4.14.2 147.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.14.0-1PGDG.rhel9.aarch64.rpm pgdg 4.14.0 146.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.14.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.13.5-1PGDG.rhel9.aarch64.rpm pgdg 4.13.5 146.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.13.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.13.3-1PGDG.rhel9.aarch64.rpm pgdg 4.13.3 146.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.13.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.13.2-1PGDG.rhel9.aarch64.rpm pgdg 4.13.2 146.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.13.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.12.0-1PGDG.rhel9.aarch64.rpm pgdg 4.12.0 145.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.12.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.11.0-1PGDG.rhel9.aarch64.rpm pgdg 4.11.0 144.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.11.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.10.3-1PGDG.rhel9.aarch64.rpm pgdg 4.10.3 144.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.10.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.10.2-1PGDG.rhel9.aarch64.rpm pgdg 4.10.2 144.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.10.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.10.0-1PGDG.rhel9.aarch64.rpm pgdg 4.10.0 143.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.10.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.4-1PGDG.rhel9.aarch64.rpm pgdg 4.9.4 142.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.3-1PGDG.rhel9.aarch64.rpm pgdg 4.9.3 142.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.2-1PGDG.rhel9.aarch64.rpm pgdg 4.9.2 142.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.1-1PGDG.rhel9.aarch64.rpm pgdg 4.9.1 142.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 orafce_14 orafce_14-4.9.0-1PGDG.rhel9.aarch64.rpm pgdg 4.9.0 142.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/orafce_14-4.9.0-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.16.5 152.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel10.x86_64.rpm pgdg 4.16.2 152.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.2-2PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.16.1-1PGDG.rhel10.x86_64.rpm pgdg 4.16.1 152.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.16.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel10.x86_64.rpm pgdg 4.14.6 151.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.14.6-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel10.x86_64.rpm pgdg 4.14.4 151.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.14.4-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel10.x86_64.rpm pgdg 4.14.3 151.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/orafce_14-4.14.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.16.5 150.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.2-2PGDG.rhel10.aarch64.rpm pgdg 4.16.2 150.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.2-2PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.16.1-1PGDG.rhel10.aarch64.rpm pgdg 4.16.1 150.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.16.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.14.6-1PGDG.rhel10.aarch64.rpm pgdg 4.14.6 149.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.14.6-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.14.4-1PGDG.rhel10.aarch64.rpm pgdg 4.14.4 149.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.14.4-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 orafce_14 orafce_14-4.14.3-2PGDG.rhel10.aarch64.rpm pgdg 4.14.3 149.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/orafce_14-4.14.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg12+1_amd64.deb pgdg 4.16.5 367.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg12+1_amd64.deb pgdg 4.16.4 368.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg12+1_amd64.deb pgdg 4.16.3 367.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg12+1_arm64.deb pgdg 4.16.5 360.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg12+1_arm64.deb pgdg 4.16.4 360.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg12+1_arm64.deb pgdg 4.16.3 360.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg13+1_amd64.deb pgdg 4.16.5 368.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg13+1_amd64.deb pgdg 4.16.4 369.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg13+1_amd64.deb pgdg 4.16.3 369.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg13+1_arm64.deb pgdg 4.16.5 361.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg13+1_arm64.deb pgdg 4.16.4 361.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg13+1_arm64.deb pgdg 4.16.3 362.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg22.04+1_amd64.deb pgdg 4.16.5 404.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg22.04+1_amd64.deb pgdg 4.16.4 404.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg22.04+1_amd64.deb pgdg 4.16.3 404.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg22.04+1_arm64.deb pgdg 4.16.5 395.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg22.04+1_arm64.deb pgdg 4.16.4 394.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg22.04+1_arm64.deb pgdg 4.16.3 395.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg24.04+1_amd64.deb pgdg 4.16.5 367.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg24.04+1_amd64.deb pgdg 4.16.4 367.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg24.04+1_amd64.deb pgdg 4.16.3 368.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg24.04+1_arm64.deb pgdg 4.16.5 361.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg24.04+1_arm64.deb pgdg 4.16.4 361.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg24.04+1_arm64.deb pgdg 4.16.3 361.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg26.04+1_amd64.deb pgdg 4.16.5 365.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg26.04+1_amd64.deb pgdg 4.16.4 366.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg26.04+1_amd64.deb pgdg 4.16.3 366.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.5-1.pgdg26.04+1_arm64.deb pgdg 4.16.5 358.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.5-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.4-1.pgdg26.04+1_arm64.deb pgdg 4.16.4 358.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.4-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-orafce postgresql-14-orafce_4.16.3-1.pgdg26.04+1_arm64.deb pgdg 4.16.3 359.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/o/orafce/postgresql-14-orafce_4.16.3-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `orafce` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install orafce;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y orafce -v 18  # PG 18
pig ext install -y orafce -v 17  # PG 17
pig ext install -y orafce -v 16  # PG 16
pig ext install -y orafce -v 15  # PG 15
pig ext install -y orafce -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y orafce_18       # PG 18
dnf install -y orafce_17       # PG 17
dnf install -y orafce_16       # PG 16
dnf install -y orafce_15       # PG 15
dnf install -y orafce_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-orafce   # PG 18
apt install -y postgresql-17-orafce   # PG 17
apt install -y postgresql-16-orafce   # PG 16
apt install -y postgresql-15-orafce   # PG 15
apt install -y postgresql-14-orafce   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION orafce;
```



## 用法

> [orafce: 模拟 Oracle RDBMS 部分函数和包的函数与操作符](https://github.com/orafce/orafce)

### 日期函数

```sql
SELECT add_months(date '2005-05-31', 1);        -- 2005-06-30
SELECT last_day(date '2005-05-24');              -- 2005-05-31
SELECT next_day(date '2005-05-24', 'monday');    -- 2005-05-30
SELECT months_between(date '1995-02-02', date '1995-01-01'); -- 1.032...
SELECT trunc(date '2005-07-12', 'iw');           -- 2005-07-11
SELECT round(date '2005-07-12', 'yyyy');         -- 2006-01-01
```

### Oracle DATE 数据类型

```sql
SET search_path TO oracle, "$user", public, pg_catalog;
CREATE TABLE t (col1 date);
INSERT INTO t VALUES('2014-06-24 12:12:11'::date);  -- 包含时间部分
```

### 字符串函数（NVL、DECODE 等）

```sql
SELECT nvl('A', 'B');            -- A
SELECT nvl(NULL, 'B');           -- B
SELECT decode(1, 1, 'one', 2, 'two', 'other');  -- one
SELECT lnnvl(true);              -- false
SELECT nanvl(0.0/0.0, 999);     -- 999
```

### DUAL 表

```sql
SELECT * FROM dual;
```

### DBMS_OUTPUT 包

```sql
SELECT dbms_output.enable();
SELECT dbms_output.put_line('Hello');
SELECT dbms_output.get_line(line, status);  -- 获取输出
```

### DBMS_PIPE 包

```sql
SELECT dbms_pipe.create_pipe('my_pipe');
SELECT dbms_pipe.pack_message('message text');
SELECT dbms_pipe.send_message('my_pipe');
-- 在另一个会话中：
SELECT dbms_pipe.receive_message('my_pipe');
SELECT dbms_pipe.unpack_message_text();
```

### DBMS_ALERT 包

```sql
CALL dbms_alert.register('my_alert');
-- 在另一个会话中：
CALL dbms_alert.signal('my_alert', 'Alert message');
-- 回到第一个会话：
CALL dbms_alert.waitone('my_alert', name, message, status, 60);
```

### DBMS_UTILITY 包

```sql
SELECT dbms_utility.format_call_stack();
```

### UTL_FILE 包

```sql
CALL utl_file.fopen('/tmp', 'test.txt', 'w');
CALL utl_file.put_line(f, 'Hello World');
CALL utl_file.fclose(f);
```

### PLVstr / PLVchr 包

```sql
SELECT plvstr.left('Hello World', 5);     -- Hello
SELECT plvstr.right('Hello World', 5);    -- World
SELECT plvstr.rvrs('Hello');              -- olleH
SELECT plvchr.nth('Hello', 3);            -- l
SELECT plvchr.first('Hello');             -- H
SELECT plvchr.last('Hello');              -- o
```

### PLVsubst 包

```sql
SELECT plvsubst.string('My name is %s %s.', ARRAY['Pavel','Stehule']);
-- My name is Pavel Stehule.
```

### DBMS_ASSERT（SQL 注入防护）

```sql
SELECT dbms_assert.enquote_literal('some value');
SELECT dbms_assert.schema_name('public');
SELECT dbms_assert.object_name('my_table');
```

### VARCHAR2 和 NVARCHAR2 类型

该扩展提供 Oracle 兼容的 `varchar2` 和 `nvarchar2` 数据类型，分别以字节（varchar2）或字符（nvarchar2）为单位强制执行声明的长度。
