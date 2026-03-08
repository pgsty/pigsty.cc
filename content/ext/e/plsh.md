---
title: "plsh"
linkTitle: "plsh"
description: "PL/sh 程序语言"
weight: 3080
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/petere/plsh">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">petere/plsh</div>
    <div class="ext-card__desc">https://github.com/petere/plsh</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plsh`**](/ext/e/plsh) | `1.20220917` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3080  | [**`plsh`**](/ext/e/plsh) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`pg_tle`](/ext/e/pg_tle) [`plperl`](/ext/e/plperl) [`plperlu`](/ext/e/plperlu) [`plpython3u`](/ext/e/plpython3u) [`plv8`](/ext/e/plv8) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.20220917` | {{< pgvers "18,17,16,15,14" >}} | `plsh` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.20220917` | {{< pgvers "18,17,16,15,14" >}} | `plsh_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.20220917` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plsh` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 2 |
| el8.aarch64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| el9.x86_64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| el9.aarch64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| el10.x86_64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| el10.aarch64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| d12.x86_64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| d12.aarch64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| d13.x86_64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| d13.aarch64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| u22.x86_64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| u22.aarch64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| u24.x86_64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
| u24.aarch64 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 | AVAIL PGDG 1.20220917 1 |
@ el8.x86_64 18 plsh_18 plsh_18-1.20220917-7PGDG.rhel8.x86_64.rpm pgdg 1.20220917 22.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/plsh_18-1.20220917-7PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 plsh_18 plsh_18-1.20220917-7PGDG.rhel8.aarch64.rpm pgdg 1.20220917 22.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/plsh_18-1.20220917-7PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 plsh_18 plsh_18-1.20220917-7PGDG.rhel9.x86_64.rpm pgdg 1.20220917 21.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/plsh_18-1.20220917-7PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 plsh_18 plsh_18-1.20220917-7PGDG.rhel9.aarch64.rpm pgdg 1.20220917 20.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/plsh_18-1.20220917-7PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 plsh_18 plsh_18-1.20220917-7PGDG.rhel10.x86_64.rpm pgdg 1.20220917 21.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/plsh_18-1.20220917-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 plsh_18 plsh_18-1.20220917-7PGDG.rhel10.aarch64.rpm pgdg 1.20220917 21.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/plsh_18-1.20220917-7PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plsh postgresql-18-plsh_1.20220917-4.pgdg12+1_amd64.deb pgdg 1.20220917 27.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-18-plsh_1.20220917-4.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-plsh postgresql-18-plsh_1.20220917-4.pgdg12+1_arm64.deb pgdg 1.20220917 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-18-plsh_1.20220917-4.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-plsh postgresql-18-plsh_1.20220917-4.pgdg13+1_amd64.deb pgdg 1.20220917 27.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-18-plsh_1.20220917-4.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-plsh postgresql-18-plsh_1.20220917-4.pgdg13+1_arm64.deb pgdg 1.20220917 27.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-18-plsh_1.20220917-4.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-plsh postgresql-18-plsh_1.20220917-4.pgdg22.04+1_amd64.deb pgdg 1.20220917 29.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-18-plsh_1.20220917-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-plsh postgresql-18-plsh_1.20220917-4.pgdg22.04+1_arm64.deb pgdg 1.20220917 28.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-18-plsh_1.20220917-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-plsh postgresql-18-plsh_1.20220917-4.pgdg24.04+1_amd64.deb pgdg 1.20220917 27.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-18-plsh_1.20220917-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-plsh postgresql-18-plsh_1.20220917-4.pgdg24.04+1_arm64.deb pgdg 1.20220917 27.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-18-plsh_1.20220917-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 plsh_17 plsh_17-1.20220917-6PGDG.rhel8.x86_64.rpm pgdg 1.20220917 22.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/plsh_17-1.20220917-6PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 plsh_17 plsh_17-1.20220917-6PGDG.rhel8.aarch64.rpm pgdg 1.20220917 22.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/plsh_17-1.20220917-6PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 plsh_17 plsh_17-1.20220917-6PGDG.rhel9.x86_64.rpm pgdg 1.20220917 21.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/plsh_17-1.20220917-6PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 plsh_17 plsh_17-1.20220917-6PGDG.rhel9.aarch64.rpm pgdg 1.20220917 21.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/plsh_17-1.20220917-6PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 plsh_17 plsh_17-1.20220917-7PGDG.rhel10.x86_64.rpm pgdg 1.20220917 21.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/plsh_17-1.20220917-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 plsh_17 plsh_17-1.20220917-7PGDG.rhel10.aarch64.rpm pgdg 1.20220917 21.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/plsh_17-1.20220917-7PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plsh postgresql-17-plsh_1.20220917-4.pgdg12+1_amd64.deb pgdg 1.20220917 27.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-17-plsh_1.20220917-4.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-plsh postgresql-17-plsh_1.20220917-4.pgdg12+1_arm64.deb pgdg 1.20220917 27.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-17-plsh_1.20220917-4.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-plsh postgresql-17-plsh_1.20220917-4.pgdg13+1_amd64.deb pgdg 1.20220917 27.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-17-plsh_1.20220917-4.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-plsh postgresql-17-plsh_1.20220917-4.pgdg13+1_arm64.deb pgdg 1.20220917 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-17-plsh_1.20220917-4.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-plsh postgresql-17-plsh_1.20220917-4.pgdg22.04+1_amd64.deb pgdg 1.20220917 33.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-17-plsh_1.20220917-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-plsh postgresql-17-plsh_1.20220917-4.pgdg22.04+1_arm64.deb pgdg 1.20220917 33.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-17-plsh_1.20220917-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-plsh postgresql-17-plsh_1.20220917-4.pgdg24.04+1_amd64.deb pgdg 1.20220917 27.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-17-plsh_1.20220917-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-plsh postgresql-17-plsh_1.20220917-4.pgdg24.04+1_arm64.deb pgdg 1.20220917 27.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-17-plsh_1.20220917-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 plsh_16 plsh_16-1.20220917-4PGDG.rhel8.x86_64.rpm pgdg 1.20220917 22.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/plsh_16-1.20220917-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 plsh_16 plsh_16-1.20220917-4PGDG.rhel8.aarch64.rpm pgdg 1.20220917 22.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/plsh_16-1.20220917-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 plsh_16 plsh_16-1.20220917-4PGDG.rhel9.x86_64.rpm pgdg 1.20220917 21.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/plsh_16-1.20220917-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 plsh_16 plsh_16-1.20220917-4PGDG.rhel9.aarch64.rpm pgdg 1.20220917 20.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/plsh_16-1.20220917-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 plsh_16 plsh_16-1.20220917-7PGDG.rhel10.x86_64.rpm pgdg 1.20220917 21.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/plsh_16-1.20220917-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 plsh_16 plsh_16-1.20220917-7PGDG.rhel10.aarch64.rpm pgdg 1.20220917 21.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/plsh_16-1.20220917-7PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plsh postgresql-16-plsh_1.20220917-4.pgdg12+1_amd64.deb pgdg 1.20220917 27.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-16-plsh_1.20220917-4.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-plsh postgresql-16-plsh_1.20220917-4.pgdg12+1_arm64.deb pgdg 1.20220917 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-16-plsh_1.20220917-4.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-plsh postgresql-16-plsh_1.20220917-4.pgdg13+1_amd64.deb pgdg 1.20220917 27.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-16-plsh_1.20220917-4.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-plsh postgresql-16-plsh_1.20220917-4.pgdg13+1_arm64.deb pgdg 1.20220917 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-16-plsh_1.20220917-4.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-plsh postgresql-16-plsh_1.20220917-4.pgdg22.04+1_amd64.deb pgdg 1.20220917 33.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-16-plsh_1.20220917-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-plsh postgresql-16-plsh_1.20220917-4.pgdg22.04+1_arm64.deb pgdg 1.20220917 32.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-16-plsh_1.20220917-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-plsh postgresql-16-plsh_1.20220917-4.pgdg24.04+1_amd64.deb pgdg 1.20220917 27.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-16-plsh_1.20220917-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-plsh postgresql-16-plsh_1.20220917-4.pgdg24.04+1_arm64.deb pgdg 1.20220917 27.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-16-plsh_1.20220917-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 plsh_15 plsh_15-1.20220917-1.rhel8.x86_64.rpm pgdg 1.20220917 21.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plsh_15-1.20220917-1.rhel8.x86_64.rpm
@ el8.aarch64 15 plsh_15 plsh_15-1.20220917-1.rhel8.aarch64.rpm pgdg 1.20220917 21.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plsh_15-1.20220917-1.rhel8.aarch64.rpm
@ el9.x86_64 15 plsh_15 plsh_15-1.20220917-1.rhel9.x86_64.rpm pgdg 1.20220917 21.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plsh_15-1.20220917-1.rhel9.x86_64.rpm
@ el9.aarch64 15 plsh_15 plsh_15-1.20220917-1.rhel9.aarch64.rpm pgdg 1.20220917 20.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plsh_15-1.20220917-1.rhel9.aarch64.rpm
@ el10.x86_64 15 plsh_15 plsh_15-1.20220917-7PGDG.rhel10.x86_64.rpm pgdg 1.20220917 21.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/plsh_15-1.20220917-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 plsh_15 plsh_15-1.20220917-7PGDG.rhel10.aarch64.rpm pgdg 1.20220917 21.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/plsh_15-1.20220917-7PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plsh postgresql-15-plsh_1.20220917-4.pgdg12+1_amd64.deb pgdg 1.20220917 27.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-15-plsh_1.20220917-4.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-plsh postgresql-15-plsh_1.20220917-4.pgdg12+1_arm64.deb pgdg 1.20220917 26.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-15-plsh_1.20220917-4.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-plsh postgresql-15-plsh_1.20220917-4.pgdg13+1_amd64.deb pgdg 1.20220917 27.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-15-plsh_1.20220917-4.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-plsh postgresql-15-plsh_1.20220917-4.pgdg13+1_arm64.deb pgdg 1.20220917 26.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-15-plsh_1.20220917-4.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-plsh postgresql-15-plsh_1.20220917-4.pgdg22.04+1_amd64.deb pgdg 1.20220917 33.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-15-plsh_1.20220917-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-plsh postgresql-15-plsh_1.20220917-4.pgdg22.04+1_arm64.deb pgdg 1.20220917 32.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-15-plsh_1.20220917-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-plsh postgresql-15-plsh_1.20220917-4.pgdg24.04+1_amd64.deb pgdg 1.20220917 27.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-15-plsh_1.20220917-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-plsh postgresql-15-plsh_1.20220917-4.pgdg24.04+1_arm64.deb pgdg 1.20220917 26.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-15-plsh_1.20220917-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 plsh_14 plsh_14-1.20220917-1.rhel8.x86_64.rpm pgdg 1.20220917 21.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plsh_14-1.20220917-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plsh_14 plsh_14-1.20200522-3.rhel8.x86_64.rpm pgdg 1.20200522 41.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plsh_14-1.20200522-3.rhel8.x86_64.rpm
@ el8.aarch64 14 plsh_14 plsh_14-1.20220917-1.rhel8.aarch64.rpm pgdg 1.20220917 21.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plsh_14-1.20220917-1.rhel8.aarch64.rpm
@ el9.x86_64 14 plsh_14 plsh_14-1.20220917-1.rhel9.x86_64.rpm pgdg 1.20220917 21.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plsh_14-1.20220917-1.rhel9.x86_64.rpm
@ el9.aarch64 14 plsh_14 plsh_14-1.20220917-1.rhel9.aarch64.rpm pgdg 1.20220917 20.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plsh_14-1.20220917-1.rhel9.aarch64.rpm
@ el10.x86_64 14 plsh_14 plsh_14-1.20220917-7PGDG.rhel10.x86_64.rpm pgdg 1.20220917 21.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/plsh_14-1.20220917-7PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 plsh_14 plsh_14-1.20220917-7PGDG.rhel10.aarch64.rpm pgdg 1.20220917 21.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/plsh_14-1.20220917-7PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plsh postgresql-14-plsh_1.20220917-4.pgdg12+1_amd64.deb pgdg 1.20220917 27.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-14-plsh_1.20220917-4.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-plsh postgresql-14-plsh_1.20220917-4.pgdg12+1_arm64.deb pgdg 1.20220917 26.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-14-plsh_1.20220917-4.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-plsh postgresql-14-plsh_1.20220917-4.pgdg13+1_amd64.deb pgdg 1.20220917 27.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-14-plsh_1.20220917-4.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-plsh postgresql-14-plsh_1.20220917-4.pgdg13+1_arm64.deb pgdg 1.20220917 26.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-14-plsh_1.20220917-4.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-plsh postgresql-14-plsh_1.20220917-4.pgdg22.04+1_amd64.deb pgdg 1.20220917 33.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-14-plsh_1.20220917-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-plsh postgresql-14-plsh_1.20220917-4.pgdg22.04+1_arm64.deb pgdg 1.20220917 32.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-14-plsh_1.20220917-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-plsh postgresql-14-plsh_1.20220917-4.pgdg24.04+1_amd64.deb pgdg 1.20220917 27.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-14-plsh_1.20220917-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-plsh postgresql-14-plsh_1.20220917-4.pgdg24.04+1_arm64.deb pgdg 1.20220917 26.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-plsh/postgresql-14-plsh_1.20220917-4.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `plsh` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plsh;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plsh -v 18  # PG 18
pig ext install -y plsh -v 17  # PG 17
pig ext install -y plsh -v 16  # PG 16
pig ext install -y plsh -v 15  # PG 15
pig ext install -y plsh -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plsh_18       # PG 18
dnf install -y plsh_17       # PG 17
dnf install -y plsh_16       # PG 16
dnf install -y plsh_15       # PG 15
dnf install -y plsh_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plsh   # PG 18
apt install -y postgresql-17-plsh   # PG 17
apt install -y postgresql-16-plsh   # PG 16
apt install -y postgresql-15-plsh   # PG 15
apt install -y postgresql-14-plsh   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION plsh;
```
