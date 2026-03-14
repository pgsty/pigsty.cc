---
title: "pgpool_adm"
linkTitle: "pgpool_adm"
description: "PGPool 管理函数"
weight: 5900
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://pgpool.net/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://pgpool.net/</div>
    <div class="ext-card__desc">https://pgpool.net/</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgpool`**](/ext/e/pgpool_adm) | `4.7.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5900  | [**`pgpool_adm`**](/ext/e/pgpool_adm) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 5910  | [**`pgpool_recovery`**](/ext/e/pgpool_recovery) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 5920  | [**`pgpool_regclass`**](/ext/e/pgpool_regclass) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgautofailover`](/ext/e/pgautofailover) [`pg_failover_slots`](/ext/e/pg_failover_slots) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_squeeze`](/ext/e/pg_squeeze) [`pg_dirtyread`](/ext/e/pg_dirtyread) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.7.1` | {{< pgvers "18,17,16,15,14" >}} | `pgpool` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.7.1` | {{< pgvers "18,17,16,15,14" >}} | `pgpool-II-pg$v-extensions` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.7.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgpool2` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 13 | AVAIL PGDG 4.7.1 16 | AVAIL PGDG 4.7.1 19 |
| el8.aarch64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 13 | AVAIL PGDG 4.7.1 15 | AVAIL PGDG 4.7.1 15 |
| el9.x86_64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 13 | AVAIL PGDG 4.7.1 16 | AVAIL PGDG 4.7.1 18 |
| el9.aarch64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 10 | AVAIL PGDG 4.7.1 13 | AVAIL PGDG 4.7.1 16 | AVAIL PGDG 4.7.1 16 |
| el10.x86_64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 |
| el10.aarch64 | AVAIL PGDG 4.7.1 5 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 | AVAIL PGDG 4.7.1 8 |
| d12.x86_64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| d12.aarch64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| d13.x86_64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| d13.aarch64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| u22.x86_64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| u22.aarch64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| u24.x86_64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
| u24.aarch64 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 | AVAIL PGDG 4.7.1 2 |
@ el8.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.1 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.0 33.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.5 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.4 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgpool-II-pg18-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel8.x86_64.rpm pgdg 4.6.3 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.0 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.5 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.4 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgpool-II-pg18-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel8.aarch64.rpm pgdg 4.6.3 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.1 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.5 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgpool-II-pg18-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel9.x86_64.rpm pgdg 4.6.3 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.1 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.0 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.5 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.4 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgpool-II-pg18-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel9.aarch64.rpm pgdg 4.6.3 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.0 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.6.5 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm pgdg 4.6.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgpool-II-pg18-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel10.x86_64.rpm pgdg 4.6.3 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgpool-II-pg18-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.0 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgpool-II-pg18-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6.5 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgpool-II-pg18-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm pgdg 4.6.4 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgpool-II-pg18-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 18 pgpool-II-pg18-extensions pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel10.aarch64.rpm pgdg 4.6.3 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgpool-II-pg18-extensions-4.6.3-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.1-1.pgdg12+1_amd64.deb pgdg 4.7.1 155.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.0-1.pgdg12+1_amd64.deb pgdg 4.7.0 155.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.1-1.pgdg12+1_arm64.deb pgdg 4.7.1 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.0-1.pgdg12+1_arm64.deb pgdg 4.7.0 155.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.1-1.pgdg13+1_amd64.deb pgdg 4.7.1 155.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.0-1.pgdg13+1_amd64.deb pgdg 4.7.0 155.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.1-1.pgdg13+1_arm64.deb pgdg 4.7.1 155.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.0-1.pgdg13+1_arm64.deb pgdg 4.7.0 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb pgdg 4.7.1 161.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb pgdg 4.7.0 160.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb pgdg 4.7.1 160.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb pgdg 4.7.0 159.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb pgdg 4.7.1 155.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb pgdg 4.7.0 155.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb pgdg 4.7.1 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pgpool2 postgresql-18-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb pgdg 4.7.0 155.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-18-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.1 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.0 33.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.5 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.4 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel8.x86_64.rpm pgdg 4.6.3 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel8.x86_64.rpm pgdg 4.6.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel8.x86_64.rpm pgdg 4.6.1 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel8.x86_64.rpm pgdg 4.6.0 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.5.5-1PGDG.rhel8.x86_64.rpm pgdg 4.5.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.5.4-1PGDG.rhel8.x86_64.rpm pgdg 4.5.4 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgpool-II-pg17-extensions-4.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.0 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.5 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.4 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel8.aarch64.rpm pgdg 4.6.3 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel8.aarch64.rpm pgdg 4.6.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel8.aarch64.rpm pgdg 4.6.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel8.aarch64.rpm pgdg 4.6.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.5.5-1PGDG.rhel8.aarch64.rpm pgdg 4.5.5 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.5.4-1PGDG.rhel8.aarch64.rpm pgdg 4.5.4 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgpool-II-pg17-extensions-4.5.4-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.0 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.5 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel9.x86_64.rpm pgdg 4.6.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel9.x86_64.rpm pgdg 4.6.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel9.x86_64.rpm pgdg 4.6.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel9.x86_64.rpm pgdg 4.6.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.5.5-1PGDG.rhel9.x86_64.rpm pgdg 4.5.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.5.4-1PGDG.rhel9.x86_64.rpm pgdg 4.5.4 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgpool-II-pg17-extensions-4.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.1 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.0 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.5 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.4 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel9.aarch64.rpm pgdg 4.6.3 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel9.aarch64.rpm pgdg 4.6.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel9.aarch64.rpm pgdg 4.6.1 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel9.aarch64.rpm pgdg 4.6.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.5.5-1PGDG.rhel9.aarch64.rpm pgdg 4.5.5 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.5.4-1PGDG.rhel9.aarch64.rpm pgdg 4.5.4 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgpool-II-pg17-extensions-4.5.4-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.0 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.6.5 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm pgdg 4.6.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgpool-II-pg17-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel10.x86_64.rpm pgdg 4.6.3 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel10.x86_64.rpm pgdg 4.6.2 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel10.x86_64.rpm pgdg 4.6.1 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel10.x86_64.rpm pgdg 4.6.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgpool-II-pg17-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgpool-II-pg17-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6.5 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgpool-II-pg17-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm pgdg 4.6.4 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgpool-II-pg17-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel10.aarch64.rpm pgdg 4.6.3 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgpool-II-pg17-extensions-4.6.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel10.aarch64.rpm pgdg 4.6.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgpool-II-pg17-extensions-4.6.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel10.aarch64.rpm pgdg 4.6.1 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgpool-II-pg17-extensions-4.6.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 17 pgpool-II-pg17-extensions pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel10.aarch64.rpm pgdg 4.6.0 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgpool-II-pg17-extensions-4.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.1-1.pgdg12+1_amd64.deb pgdg 4.7.1 155.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.0-1.pgdg12+1_amd64.deb pgdg 4.7.0 155.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.1-1.pgdg12+1_arm64.deb pgdg 4.7.1 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.0-1.pgdg12+1_arm64.deb pgdg 4.7.0 155.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.1-1.pgdg13+1_amd64.deb pgdg 4.7.1 155.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.0-1.pgdg13+1_amd64.deb pgdg 4.7.0 155.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.1-1.pgdg13+1_arm64.deb pgdg 4.7.1 155.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.0-1.pgdg13+1_arm64.deb pgdg 4.7.0 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb pgdg 4.7.1 165.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb pgdg 4.7.0 165.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb pgdg 4.7.1 164.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb pgdg 4.7.0 164.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb pgdg 4.7.1 155.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb pgdg 4.7.0 155.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb pgdg 4.7.1 155.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pgpool2 postgresql-17-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb pgdg 4.7.0 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-17-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.1 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.0 33.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.5 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.4 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel8.x86_64.rpm pgdg 4.6.3 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel8.x86_64.rpm pgdg 4.6.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel8.x86_64.rpm pgdg 4.6.1 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel8.x86_64.rpm pgdg 4.6.0 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.5-1PGDG.rhel8.x86_64.rpm pgdg 4.5.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.4-1PGDG.rhel8.x86_64.rpm pgdg 4.5.4 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.3-1PGDG.rhel8.x86_64.rpm pgdg 4.5.3 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.5.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.2-1PGDG.rhel8.x86_64.rpm pgdg 4.5.2 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.5.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.1-1PGDG.rhel8.x86_64.rpm pgdg 4.5.1 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgpool-II-pg16-extensions-4.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.0 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.5 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.4 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel8.aarch64.rpm pgdg 4.6.3 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel8.aarch64.rpm pgdg 4.6.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel8.aarch64.rpm pgdg 4.6.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel8.aarch64.rpm pgdg 4.6.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.5-1PGDG.rhel8.aarch64.rpm pgdg 4.5.5 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.4-1PGDG.rhel8.aarch64.rpm pgdg 4.5.4 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.5.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.3-1PGDG.rhel8.aarch64.rpm pgdg 4.5.3 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.5.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.2-1PGDG.rhel8.aarch64.rpm pgdg 4.5.2 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.5.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.1-1PGDG.rhel8.aarch64.rpm pgdg 4.5.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgpool-II-pg16-extensions-4.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.0 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.5 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel9.x86_64.rpm pgdg 4.6.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel9.x86_64.rpm pgdg 4.6.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel9.x86_64.rpm pgdg 4.6.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel9.x86_64.rpm pgdg 4.6.0 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.5-1PGDG.rhel9.x86_64.rpm pgdg 4.5.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.4-1PGDG.rhel9.x86_64.rpm pgdg 4.5.4 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.3-1PGDG.rhel9.x86_64.rpm pgdg 4.5.3 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.5.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.2-1PGDG.rhel9.x86_64.rpm pgdg 4.5.2 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.5.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.1-1PGDG.rhel9.x86_64.rpm pgdg 4.5.1 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgpool-II-pg16-extensions-4.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.1 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.0 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.5 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.4 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel9.aarch64.rpm pgdg 4.6.3 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel9.aarch64.rpm pgdg 4.6.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel9.aarch64.rpm pgdg 4.6.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel9.aarch64.rpm pgdg 4.6.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.5-1PGDG.rhel9.aarch64.rpm pgdg 4.5.5 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.4-1PGDG.rhel9.aarch64.rpm pgdg 4.5.4 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.5.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.3-1PGDG.rhel9.aarch64.rpm pgdg 4.5.3 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.5.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.2-1PGDG.rhel9.aarch64.rpm pgdg 4.5.2 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.5.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.5.1-1PGDG.rhel9.aarch64.rpm pgdg 4.5.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgpool-II-pg16-extensions-4.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.0 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.6.5 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm pgdg 4.6.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgpool-II-pg16-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel10.x86_64.rpm pgdg 4.6.3 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel10.x86_64.rpm pgdg 4.6.2 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel10.x86_64.rpm pgdg 4.6.1 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel10.x86_64.rpm pgdg 4.6.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgpool-II-pg16-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.0 32.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgpool-II-pg16-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6.5 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgpool-II-pg16-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm pgdg 4.6.4 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgpool-II-pg16-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel10.aarch64.rpm pgdg 4.6.3 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgpool-II-pg16-extensions-4.6.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel10.aarch64.rpm pgdg 4.6.2 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgpool-II-pg16-extensions-4.6.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel10.aarch64.rpm pgdg 4.6.1 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgpool-II-pg16-extensions-4.6.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 16 pgpool-II-pg16-extensions pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel10.aarch64.rpm pgdg 4.6.0 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgpool-II-pg16-extensions-4.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.1-1.pgdg12+1_amd64.deb pgdg 4.7.1 155.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.0-1.pgdg12+1_amd64.deb pgdg 4.7.0 155.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.1-1.pgdg12+1_arm64.deb pgdg 4.7.1 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.0-1.pgdg12+1_arm64.deb pgdg 4.7.0 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.1-1.pgdg13+1_amd64.deb pgdg 4.7.1 155.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.0-1.pgdg13+1_amd64.deb pgdg 4.7.0 155.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.1-1.pgdg13+1_arm64.deb pgdg 4.7.1 155.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.0-1.pgdg13+1_arm64.deb pgdg 4.7.0 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb pgdg 4.7.1 165.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb pgdg 4.7.0 165.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb pgdg 4.7.1 164.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb pgdg 4.7.0 164.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb pgdg 4.7.1 155.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb pgdg 4.7.0 155.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb pgdg 4.7.1 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pgpool2 postgresql-16-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb pgdg 4.7.0 155.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-16-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.1 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.0 33.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.5 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.4 32.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel8.x86_64.rpm pgdg 4.6.3 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel8.x86_64.rpm pgdg 4.6.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel8.x86_64.rpm pgdg 4.6.1 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel8.x86_64.rpm pgdg 4.6.0 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.5-1PGDG.rhel8.x86_64.rpm pgdg 4.5.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.4-1PGDG.rhel8.x86_64.rpm pgdg 4.5.4 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.3-1PGDG.rhel8.x86_64.rpm pgdg 4.5.3 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.5.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.1-1PGDG.rhel8.x86_64.rpm pgdg 4.5.1 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.0-1PGDG.rhel8.x86_64.rpm pgdg 4.5.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.4.2-1.rhel8.x86_64.rpm pgdg 4.4.2 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.4.2-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.4.1-1.rhel8.x86_64.rpm pgdg 4.4.1 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.4.1-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.3.3-1.rhel8.x86_64.rpm pgdg 4.3.3 28.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgpool-II-pg15-extensions-4.3.3-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.1 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.0 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.5 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.4 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel8.aarch64.rpm pgdg 4.6.3 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel8.aarch64.rpm pgdg 4.6.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel8.aarch64.rpm pgdg 4.6.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel8.aarch64.rpm pgdg 4.6.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.5-1PGDG.rhel8.aarch64.rpm pgdg 4.5.5 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.4-1PGDG.rhel8.aarch64.rpm pgdg 4.5.4 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.5.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.3-1PGDG.rhel8.aarch64.rpm pgdg 4.5.3 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.5.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.1-1PGDG.rhel8.aarch64.rpm pgdg 4.5.1 29.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.0-1PGDG.rhel8.aarch64.rpm pgdg 4.5.0 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.4.2-1.rhel8.aarch64.rpm pgdg 4.4.2 28.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.4.2-1.rhel8.aarch64.rpm
@ el8.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.4.1-1.rhel8.aarch64.rpm pgdg 4.4.1 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgpool-II-pg15-extensions-4.4.1-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.0 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.5 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel9.x86_64.rpm pgdg 4.6.3 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel9.x86_64.rpm pgdg 4.6.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel9.x86_64.rpm pgdg 4.6.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel9.x86_64.rpm pgdg 4.6.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.5-1PGDG.rhel9.x86_64.rpm pgdg 4.5.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.4-1PGDG.rhel9.x86_64.rpm pgdg 4.5.4 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.3-1PGDG.rhel9.x86_64.rpm pgdg 4.5.3 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.5.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.1-1PGDG.rhel9.x86_64.rpm pgdg 4.5.1 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.0-1PGDG.rhel9.x86_64.rpm pgdg 4.5.0 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.4.2-1.rhel9.x86_64.rpm pgdg 4.4.2 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.4.2-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.4.1-1.rhel9.x86_64.rpm pgdg 4.4.1 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.4.1-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.3.3-1.rhel9.x86_64.rpm pgdg 4.3.3 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgpool-II-pg15-extensions-4.3.3-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.1 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.0 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.5 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.4 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel9.aarch64.rpm pgdg 4.6.3 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel9.aarch64.rpm pgdg 4.6.2 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel9.aarch64.rpm pgdg 4.6.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel9.aarch64.rpm pgdg 4.6.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.5-1PGDG.rhel9.aarch64.rpm pgdg 4.5.5 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.4-1PGDG.rhel9.aarch64.rpm pgdg 4.5.4 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.5.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.3-1PGDG.rhel9.aarch64.rpm pgdg 4.5.3 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.5.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.1-1PGDG.rhel9.aarch64.rpm pgdg 4.5.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.5.0-1PGDG.rhel9.aarch64.rpm pgdg 4.5.0 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.4.2-1.rhel9.aarch64.rpm pgdg 4.4.2 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.4.2-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.4.1-1.rhel9.aarch64.rpm pgdg 4.4.1 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.4.1-1.rhel9.aarch64.rpm
@ el9.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.3.3-1.rhel9.aarch64.rpm pgdg 4.3.3 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgpool-II-pg15-extensions-4.3.3-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.0 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.6.5 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm pgdg 4.6.4 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgpool-II-pg15-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel10.x86_64.rpm pgdg 4.6.3 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel10.x86_64.rpm pgdg 4.6.2 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel10.x86_64.rpm pgdg 4.6.1 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel10.x86_64.rpm pgdg 4.6.0 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgpool-II-pg15-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.0 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgpool-II-pg15-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6.5 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgpool-II-pg15-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm pgdg 4.6.4 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgpool-II-pg15-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel10.aarch64.rpm pgdg 4.6.3 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgpool-II-pg15-extensions-4.6.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel10.aarch64.rpm pgdg 4.6.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgpool-II-pg15-extensions-4.6.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel10.aarch64.rpm pgdg 4.6.1 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgpool-II-pg15-extensions-4.6.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 15 pgpool-II-pg15-extensions pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel10.aarch64.rpm pgdg 4.6.0 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgpool-II-pg15-extensions-4.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.1-1.pgdg12+1_amd64.deb pgdg 4.7.1 155.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.0-1.pgdg12+1_amd64.deb pgdg 4.7.0 155.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.1-1.pgdg12+1_arm64.deb pgdg 4.7.1 155.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.0-1.pgdg12+1_arm64.deb pgdg 4.7.0 155.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.1-1.pgdg13+1_amd64.deb pgdg 4.7.1 155.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.0-1.pgdg13+1_amd64.deb pgdg 4.7.0 155.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.1-1.pgdg13+1_arm64.deb pgdg 4.7.1 155.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.0-1.pgdg13+1_arm64.deb pgdg 4.7.0 155.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb pgdg 4.7.1 165.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb pgdg 4.7.0 165.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb pgdg 4.7.1 164.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb pgdg 4.7.0 164.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb pgdg 4.7.1 155.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb pgdg 4.7.0 155.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb pgdg 4.7.1 155.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pgpool2 postgresql-15-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb pgdg 4.7.0 155.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-15-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.1 33.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm pgdg 4.7.0 33.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.5 32.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm pgdg 4.6.4 31.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.6.4-1PGDG.rhel8.10.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel8.x86_64.rpm pgdg 4.6.3 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel8.x86_64.rpm pgdg 4.6.2 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel8.x86_64.rpm pgdg 4.6.1 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel8.x86_64.rpm pgdg 4.6.0 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.5-1PGDG.rhel8.x86_64.rpm pgdg 4.5.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.5.5-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.4-1PGDG.rhel8.x86_64.rpm pgdg 4.5.4 30.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.5.4-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.3-1PGDG.rhel8.x86_64.rpm pgdg 4.5.3 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.5.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.1-1PGDG.rhel8.x86_64.rpm pgdg 4.5.1 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.0-1PGDG.rhel8.x86_64.rpm pgdg 4.5.0 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.5.0-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.4.2-1.rhel8.x86_64.rpm pgdg 4.4.2 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.4.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.4.1-1.rhel8.x86_64.rpm pgdg 4.4.1 28.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.4.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.3.3-1.rhel8.x86_64.rpm pgdg 4.3.3 28.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.3.3-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.3.2-1.rhel8.x86_64.rpm pgdg 4.3.2 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.3.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.3.1-1.rhel8.x86_64.rpm pgdg 4.3.1 28.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.3.1-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.3.0-1.rhel8.x86_64.rpm pgdg 4.3.0 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgpool-II-pg14-extensions-4.3.0-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.1 32.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm pgdg 4.7.0 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.5 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm pgdg 4.6.4 31.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.6.4-1PGDG.rhel8.10.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel8.aarch64.rpm pgdg 4.6.3 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel8.aarch64.rpm pgdg 4.6.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel8.aarch64.rpm pgdg 4.6.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel8.aarch64.rpm pgdg 4.6.0 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.5-1PGDG.rhel8.aarch64.rpm pgdg 4.5.5 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.5.5-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.4-1PGDG.rhel8.aarch64.rpm pgdg 4.5.4 29.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.5.4-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.3-1PGDG.rhel8.aarch64.rpm pgdg 4.5.3 29.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.5.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.1-1PGDG.rhel8.aarch64.rpm pgdg 4.5.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.0-1PGDG.rhel8.aarch64.rpm pgdg 4.5.0 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.5.0-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.4.2-1.rhel8.aarch64.rpm pgdg 4.4.2 28.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.4.2-1.rhel8.aarch64.rpm
@ el8.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.4.1-1.rhel8.aarch64.rpm pgdg 4.4.1 28.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgpool-II-pg14-extensions-4.4.1-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm pgdg 4.7.0 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.5 31.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm pgdg 4.6.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.6.4-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel9.x86_64.rpm pgdg 4.6.3 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel9.x86_64.rpm pgdg 4.6.2 30.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel9.x86_64.rpm pgdg 4.6.1 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel9.x86_64.rpm pgdg 4.6.0 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.5-1PGDG.rhel9.x86_64.rpm pgdg 4.5.5 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.5.5-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.4-1PGDG.rhel9.x86_64.rpm pgdg 4.5.4 30.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.5.4-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.3-1PGDG.rhel9.x86_64.rpm pgdg 4.5.3 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.5.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.1-1PGDG.rhel9.x86_64.rpm pgdg 4.5.1 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.0-1PGDG.rhel9.x86_64.rpm pgdg 4.5.0 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.5.0-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.4.2-1.rhel9.x86_64.rpm pgdg 4.4.2 29.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.4.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.4.1-1.rhel9.x86_64.rpm pgdg 4.4.1 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.4.1-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.3.3-1.rhel9.x86_64.rpm pgdg 4.3.3 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.3.3-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.3.2-1.rhel9.x86_64.rpm pgdg 4.3.2 29.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.3.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.3.1-1.rhel9.x86_64.rpm pgdg 4.3.1 29.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgpool-II-pg14-extensions-4.3.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.1 32.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm pgdg 4.7.0 32.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.5 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm pgdg 4.6.4 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.6.4-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel9.aarch64.rpm pgdg 4.6.3 30.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel9.aarch64.rpm pgdg 4.6.2 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel9.aarch64.rpm pgdg 4.6.1 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel9.aarch64.rpm pgdg 4.6.0 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.5-1PGDG.rhel9.aarch64.rpm pgdg 4.5.5 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.5.5-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.4-1PGDG.rhel9.aarch64.rpm pgdg 4.5.4 30.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.5.4-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.3-1PGDG.rhel9.aarch64.rpm pgdg 4.5.3 29.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.5.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.1-1PGDG.rhel9.aarch64.rpm pgdg 4.5.1 29.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.5.0-1PGDG.rhel9.aarch64.rpm pgdg 4.5.0 29.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.5.0-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.4.2-1.rhel9.aarch64.rpm pgdg 4.4.2 29.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.4.2-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.4.1-1.rhel9.aarch64.rpm pgdg 4.4.1 29.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.4.1-1.rhel9.aarch64.rpm
@ el9.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.3.3-1.rhel9.aarch64.rpm pgdg 4.3.3 28.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgpool-II-pg14-extensions-4.3.3-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm pgdg 4.7.0 33.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm pgdg 4.6.5 31.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm pgdg 4.6.4 31.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgpool-II-pg14-extensions-4.6.4-1PGDGrhel10.1.x86_64.rpm
@ el10.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel10.x86_64.rpm pgdg 4.6.3 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel10.x86_64.rpm pgdg 4.6.2 31.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel10.x86_64.rpm pgdg 4.6.1 30.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel10.x86_64.rpm
@ el10.x86_64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel10.x86_64.rpm pgdg 4.6.0 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.1 32.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgpool-II-pg14-extensions-4.7.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm pgdg 4.7.0 32.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgpool-II-pg14-extensions-4.7.0-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm pgdg 4.6.5 31.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgpool-II-pg14-extensions-4.6.5-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm pgdg 4.6.4 31.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgpool-II-pg14-extensions-4.6.4-1PGDGrhel10.1.aarch64.rpm
@ el10.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel10.aarch64.rpm pgdg 4.6.3 30.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgpool-II-pg14-extensions-4.6.3-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel10.aarch64.rpm pgdg 4.6.2 30.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgpool-II-pg14-extensions-4.6.2-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel10.aarch64.rpm pgdg 4.6.1 30.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgpool-II-pg14-extensions-4.6.1-1PGDG.rhel10.aarch64.rpm
@ el10.aarch64 14 pgpool-II-pg14-extensions pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel10.aarch64.rpm pgdg 4.6.0 30.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgpool-II-pg14-extensions-4.6.0-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.1-1.pgdg12+1_amd64.deb pgdg 4.7.1 155.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.0-1.pgdg12+1_amd64.deb pgdg 4.7.0 155.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.0-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.1-1.pgdg12+1_arm64.deb pgdg 4.7.1 155.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.0-1.pgdg12+1_arm64.deb pgdg 4.7.0 155.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.0-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.1-1.pgdg13+1_amd64.deb pgdg 4.7.1 155.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.0-1.pgdg13+1_amd64.deb pgdg 4.7.0 155.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.0-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.1-1.pgdg13+1_arm64.deb pgdg 4.7.1 155.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.0-1.pgdg13+1_arm64.deb pgdg 4.7.0 155.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.0-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb pgdg 4.7.1 165.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb pgdg 4.7.0 165.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.0-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb pgdg 4.7.1 164.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb pgdg 4.7.0 164.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.0-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb pgdg 4.7.1 155.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb pgdg 4.7.0 155.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.0-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb pgdg 4.7.1 155.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pgpool2 postgresql-14-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb pgdg 4.7.0 155.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pgpool2/postgresql-14-pgpool2_4.7.0-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgpool` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgpool;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgpool -v 18  # PG 18
pig ext install -y pgpool -v 17  # PG 17
pig ext install -y pgpool -v 16  # PG 16
pig ext install -y pgpool -v 15  # PG 15
pig ext install -y pgpool -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgpool-II-pg18-extensions       # PG 18
dnf install -y pgpool-II-pg17-extensions       # PG 17
dnf install -y pgpool-II-pg16-extensions       # PG 16
dnf install -y pgpool-II-pg15-extensions       # PG 15
dnf install -y pgpool-II-pg14-extensions       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgpool2   # PG 18
apt install -y postgresql-17-pgpool2   # PG 17
apt install -y postgresql-16-pgpool2   # PG 16
apt install -y postgresql-15-pgpool2   # PG 15
apt install -y postgresql-14-pgpool2   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgpool_adm;
```



## 用法

> [pgpool_adm: Pgpool 管理函数](https://pgpool.net/)

`pgpool_adm` 扩展为 Pgpool-II PCP（Pgpool 控制协议）命令提供可从 SQL 调用的包装函数，允许在 PostgreSQL 内管理 Pgpool-II。

### 可用函数

| 函数 | 描述 |
|----------|-------------|
| `pgpool_adm_pcp_node_info` | 显示给定后端节点的信息 |
| `pgpool_adm_pcp_health_check_stats` | 显示节点的健康检查统计 |
| `pgpool_adm_pcp_pool_status` | 从 pgpool.conf 获取参数 |
| `pgpool_adm_pcp_node_count` | 获取后端节点数量 |
| `pgpool_adm_pcp_attach_node` | 附加后端节点 |
| `pgpool_adm_pcp_detach_node` | 分离后端节点 |
| `pgpool_adm_pcp_proc_info` | 显示 Pgpool-II 子进程信息 |

### 调用方式

函数支持两种调用约定：

**直接参数**（主机名、端口、用户名、密码，加上函数特定参数）：

```sql
SELECT * FROM pgpool_adm_pcp_node_info('localhost', 9898, 'admin', 'password', 0);
SELECT * FROM pgpool_adm_pcp_node_count('localhost', 9898, 'admin', 'password');
SELECT * FROM pgpool_adm_pcp_pool_status('localhost', 9898, 'admin', 'password');
```

**外部服务器引用**（使用端口 9898 和 `~/.pcppass` 中的凭据）：

```sql
SELECT * FROM pgpool_adm_pcp_node_info(server_name := 'pgpool_server', node_id := 0);
SELECT * FROM pgpool_adm_pcp_node_count(server_name := 'pgpool_server');
```

### 节点管理

```sql
-- 分离后端节点
SELECT pgpool_adm_pcp_detach_node('localhost', 9898, 'admin', 'password', 1);

-- 重新附加后端节点
SELECT pgpool_adm_pcp_attach_node('localhost', 9898, 'admin', 'password', 1);
```

默认 PCP 通信端口为 9898。凭据可通过用户主目录中的 `.pcppass` 文件管理。
