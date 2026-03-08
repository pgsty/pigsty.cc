---
title: "pg_dirtyread"
linkTitle: "pg_dirtyread"
description: "从表中读取尚未垃圾回收的行"
weight: 5050
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/df7cb/pg_dirtyread">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">df7cb/pg_dirtyread</div>
    <div class="ext-card__desc">https://github.com/df7cb/pg_dirtyread</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_dirtyread-2.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_dirtyread-2.7.tar.gz</div>
    <div class="ext-card__desc">pg_dirtyread-2.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_dirtyread`**](/ext/e/pg_dirtyread) | `2.7` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5050  | [**`pg_dirtyread`**](/ext/e/pg_dirtyread) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_orphaned`](/ext/e/pg_orphaned) [`pg_surgery`](/ext/e/pg_surgery) [`pageinspect`](/ext/e/pageinspect) [`pg_visibility`](/ext/e/pg_visibility) [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs) [`amcheck`](/ext/e/amcheck) [`pg_repack`](/ext/e/pg_repack) [`pg_squeeze`](/ext/e/pg_squeeze) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_dirtyread` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_dirtyread_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-dirtyread` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| el8.aarch64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| el9.x86_64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| el9.aarch64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| el10.x86_64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| el10.aarch64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| d12.x86_64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| d12.aarch64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| d13.x86_64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| d13.aarch64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| u22.x86_64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| u22.aarch64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| u24.x86_64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
| u24.aarch64 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 | AVAIL PGDG 2.7 1 |
@ el8.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel8.x86_64.rpm pgdg 2.7 17.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_dirtyread_18-2.7-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel8.aarch64.rpm pgdg 2.7 16.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_dirtyread_18-2.7-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel9.x86_64.rpm pgdg 2.7 17.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_dirtyread_18-2.7-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel9.aarch64.rpm pgdg 2.7 16.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_dirtyread_18-2.7-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_dirtyread_18-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_dirtyread_18 pg_dirtyread_18-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_dirtyread_18-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 21.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 21.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 22.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 21.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-dirtyread postgresql-18-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-18-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-2PGDG.rhel8.x86_64.rpm pgdg 2.7 16.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_dirtyread_17-2.7-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-2PGDG.rhel8.aarch64.rpm pgdg 2.7 16.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_dirtyread_17-2.7-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-2PGDG.rhel9.x86_64.rpm pgdg 2.7 17.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_dirtyread_17-2.7-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-2PGDG.rhel9.aarch64.rpm pgdg 2.7 16.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_dirtyread_17-2.7-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_dirtyread_17-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_dirtyread_17 pg_dirtyread_17-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_dirtyread_17-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 26.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 25.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-dirtyread postgresql-17-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-17-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 16.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_dirtyread_16-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 16.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_dirtyread_16-2.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 16.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_dirtyread_16-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 16.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_dirtyread_16-2.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_dirtyread_16-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_dirtyread_16 pg_dirtyread_16-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_dirtyread_16-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 21.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 25.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 24.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-dirtyread postgresql-16-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-16-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 16.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_dirtyread_15-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 16.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_dirtyread_15-2.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 17.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_dirtyread_15-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 16.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_dirtyread_15-2.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_dirtyread_15-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_dirtyread_15 pg_dirtyread_15-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_dirtyread_15-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 21.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 21.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 25.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 25.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-dirtyread postgresql-15-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-15-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-1PGDG.rhel8.x86_64.rpm pgdg 2.7 16.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_dirtyread_14-2.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-1PGDG.rhel8.aarch64.rpm pgdg 2.7 16.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_dirtyread_14-2.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-1PGDG.rhel9.x86_64.rpm pgdg 2.7 17.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_dirtyread_14-2.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-1PGDG.rhel9.aarch64.rpm pgdg 2.7 16.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_dirtyread_14-2.7-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-4PGDG.rhel10.x86_64.rpm pgdg 2.7 17.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_dirtyread_14-2.7-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_dirtyread_14 pg_dirtyread_14-2.7-4PGDG.rhel10.aarch64.rpm pgdg 2.7 17.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_dirtyread_14-2.7-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg12+1_amd64.deb pgdg 2.7 21.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg12+1_arm64.deb pgdg 2.7 20.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg13+1_amd64.deb pgdg 2.7 21.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg13+1_arm64.deb pgdg 2.7 20.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg22.04+1_amd64.deb pgdg 2.7 25.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg22.04+1_arm64.deb pgdg 2.7 25.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg24.04+1_amd64.deb pgdg 2.7 21.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-dirtyread postgresql-14-dirtyread_2.7-3.pgdg24.04+1_arm64.deb pgdg 2.7 20.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pg-dirtyread/postgresql-14-dirtyread_2.7-3.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_dirtyread` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_dirtyread;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_dirtyread -v 18  # PG 18
pig ext install -y pg_dirtyread -v 17  # PG 17
pig ext install -y pg_dirtyread -v 16  # PG 16
pig ext install -y pg_dirtyread -v 15  # PG 15
pig ext install -y pg_dirtyread -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_dirtyread_18       # PG 18
dnf install -y pg_dirtyread_17       # PG 17
dnf install -y pg_dirtyread_16       # PG 16
dnf install -y pg_dirtyread_15       # PG 15
dnf install -y pg_dirtyread_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-dirtyread   # PG 18
apt install -y postgresql-17-dirtyread   # PG 17
apt install -y postgresql-16-dirtyread   # PG 16
apt install -y postgresql-15-dirtyread   # PG 15
apt install -y postgresql-14-dirtyread   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_dirtyread;
```
