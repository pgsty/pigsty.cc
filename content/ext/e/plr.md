---
title: "plr"
linkTitle: "plr"
description: "从数据库中加载R语言解释器并执行R脚本"
weight: 3100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgres-plr/plr">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgres-plr/plr</div>
    <div class="ext-card__desc">https://github.com/postgres-plr/plr</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plr`**](/ext/e/plr) | `8.4.8` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3100  | [**`plr`**](/ext/e/plr) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pgml`](/ext/e/pgml) [`plpython3u`](/ext/e/plpython3u) [`pg_tle`](/ext/e/pg_tle) [`plv8`](/ext/e/plv8) [`pljava`](/ext/e/pljava) [`plperl`](/ext/e/plperl) [`pllua`](/ext/e/pllua) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> missing el10.x86_64


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `8.4.8` | {{< pgvers "18,17,16,15,14" >}} | `plr` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `8.4.8` | {{< pgvers "18,17,16,15,14" >}} | `plr_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `8.4.8` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-plr` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 8.4.8 1 | AVAIL PGDG 8.4.8 2 | AVAIL PGDG 8.4.8 3 | AVAIL PGDG 8.4.8 4 | AVAIL PGDG 8.4.8 5 |
| el8.aarch64 | AVAIL PGDG 8.4.8 1 | AVAIL PGDG 8.4.8 2 | AVAIL PGDG 8.4.8 3 | AVAIL PGDG 8.4.8 3 | AVAIL PGDG 8.4.8 3 |
| el9.x86_64 | AVAIL PGDG 8.4.8 1 | AVAIL PGDG 8.4.8 2 | AVAIL PGDG 8.4.8 5 | AVAIL PGDG 8.4.8 4 | AVAIL PGDG 8.4.8 4 |
| el9.aarch64 | AVAIL PGDG 8.4.8 1 | AVAIL PGDG 8.4.8 2 | AVAIL PGDG 8.4.8 3 | AVAIL PGDG 8.4.8 3 | AVAIL PGDG 8.4.8 3 |
| el10.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.aarch64 | AVAIL PGDG 8.4.8 1 | AVAIL PGDG 8.4.8 1 | AVAIL PGDG 8.4.8 1 | AVAIL PGDG 8.4.8 1 | AVAIL PGDG 8.4.8 1 |
| d12.x86_64 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 |
| d12.aarch64 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 |
| d13.x86_64 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 |
| d13.aarch64 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 |
| u22.x86_64 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 |
| u22.aarch64 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 |
| u24.x86_64 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 |
| u24.aarch64 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 | AVAIL PGDG 8.4.8.2 1 |
@ el8.x86_64 18 plr_18 plr_18-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/plr_18-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 plr_18 plr_18-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 73.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/plr_18-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 plr_18 plr_18-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 73.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/plr_18-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 plr_18 plr_18-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/plr_18-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el10.aarch64 18 plr_18 plr_18-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 73.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/plr_18-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.2-1.pgdg12+1_amd64.deb pgdg 8.4.8.2 135.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.2-1.pgdg12+1_arm64.deb pgdg 8.4.8.2 132.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.2-1.pgdg13+1_amd64.deb pgdg 8.4.8.2 136.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.2-1.pgdg13+1_arm64.deb pgdg 8.4.8.2 132.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.2 131.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.2 128.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-plr postgresql-18-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.2 127.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-plr postgresql-18-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.2 123.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-18-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 plr_17 plr_17-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/plr_17-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 plr_17 plr_17-8.4.7-1PGDG.rhel8.x86_64.rpm pgdg 8.4.7 75.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/plr_17-8.4.7-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 plr_17 plr_17-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 73.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/plr_17-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 plr_17 plr_17-8.4.7-1PGDG.rhel8.aarch64.rpm pgdg 8.4.7 73.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/plr_17-8.4.7-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 plr_17 plr_17-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 73.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/plr_17-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 plr_17 plr_17-8.4.7-1PGDG.rhel9.x86_64.rpm pgdg 8.4.7 73.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/plr_17-8.4.7-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 plr_17 plr_17-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/plr_17-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 plr_17 plr_17-8.4.7-1PGDG.rhel9.aarch64.rpm pgdg 8.4.7 72.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/plr_17-8.4.7-1PGDG.rhel9.aarch64.rpm
@ el10.aarch64 17 plr_17 plr_17-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 73.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/plr_17-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.2-1.pgdg12+1_amd64.deb pgdg 8.4.8.2 135.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.2-1.pgdg12+1_arm64.deb pgdg 8.4.8.2 132.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.2-1.pgdg13+1_amd64.deb pgdg 8.4.8.2 135.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.2-1.pgdg13+1_arm64.deb pgdg 8.4.8.2 132.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.2 155.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.2 152.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-plr postgresql-17-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.2 127.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-plr postgresql-17-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.2 123.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-17-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 plr_16 plr_16-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/plr_16-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plr_16 plr_16-8.4.7-1PGDG.rhel8.x86_64.rpm pgdg 8.4.7 75.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/plr_16-8.4.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 plr_16 plr_16-8.4.6-1PGDG.rhel8.x86_64.rpm pgdg 8.4.6 74.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/plr_16-8.4.6-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 plr_16 plr_16-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 73.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/plr_16-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plr_16 plr_16-8.4.7-1PGDG.rhel8.aarch64.rpm pgdg 8.4.7 73.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/plr_16-8.4.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 plr_16 plr_16-8.4.6-1PGDG.rhel8.aarch64.rpm pgdg 8.4.6 72.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/plr_16-8.4.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 73.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.7-1PGDG.rhel9.x86_64.rpm pgdg 8.4.7 73.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 72.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 73.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 plr_16 plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 73.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plr_16-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.7-1PGDG.rhel9.aarch64.rpm pgdg 8.4.7 72.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 plr_16 plr_16-8.4.6-1PGDG.rhel9.aarch64.rpm pgdg 8.4.6 71.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/plr_16-8.4.6-1PGDG.rhel9.aarch64.rpm
@ el10.aarch64 16 plr_16 plr_16-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 73.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/plr_16-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.2-1.pgdg12+1_amd64.deb pgdg 8.4.8.2 135.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.2-1.pgdg12+1_arm64.deb pgdg 8.4.8.2 132.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.2-1.pgdg13+1_amd64.deb pgdg 8.4.8.2 135.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.2-1.pgdg13+1_arm64.deb pgdg 8.4.8.2 132.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.2 151.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.2 148.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-plr postgresql-16-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.2 127.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-plr postgresql-16-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.2 123.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-16-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 plr_15 plr_15-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plr_15 plr_15-8.4.7-1PGDG.rhel8.x86_64.rpm pgdg 8.4.7 76.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plr_15 plr_15-8.4.6-1PGDG.rhel8.x86_64.rpm pgdg 8.4.6 75.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 plr_15 plr_15-8.4.5-1.rhel8.x86_64.rpm pgdg 8.4.5 167.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/plr_15-8.4.5-1.rhel8.x86_64.rpm
@ el8.aarch64 15 plr_15 plr_15-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 74.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plr_15-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plr_15 plr_15-8.4.7-1PGDG.rhel8.aarch64.rpm pgdg 8.4.7 73.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plr_15-8.4.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 plr_15 plr_15-8.4.6-1PGDG.rhel8.aarch64.rpm pgdg 8.4.6 73.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/plr_15-8.4.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 74.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.7-1PGDG.rhel9.x86_64.rpm pgdg 8.4.7 74.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 73.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 plr_15 plr_15-8.4.5-1.rhel9.x86_64.rpm pgdg 8.4.5 167.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/plr_15-8.4.5-1.rhel9.x86_64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.7-1PGDG.rhel9.aarch64.rpm pgdg 8.4.7 72.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 plr_15 plr_15-8.4.6-1PGDG.rhel9.aarch64.rpm pgdg 8.4.6 71.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/plr_15-8.4.6-1PGDG.rhel9.aarch64.rpm
@ el10.aarch64 15 plr_15 plr_15-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 74.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/plr_15-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.2-1.pgdg12+1_amd64.deb pgdg 8.4.8.2 136.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.2-1.pgdg12+1_arm64.deb pgdg 8.4.8.2 132.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.2-1.pgdg13+1_amd64.deb pgdg 8.4.8.2 136.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.2-1.pgdg13+1_arm64.deb pgdg 8.4.8.2 132.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.2 151.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.2 148.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-plr postgresql-15-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.2 127.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-plr postgresql-15-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.2 123.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-15-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 plr_14 plr_14-8.4.8-1PGDG.rhel8.x86_64.rpm pgdg 8.4.8 76.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.8-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.7-1PGDG.rhel8.x86_64.rpm pgdg 8.4.7 76.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.7-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.6-1PGDG.rhel8.x86_64.rpm pgdg 8.4.6 75.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.6-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.5-1.rhel8.x86_64.rpm pgdg 8.4.5 166.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 plr_14 plr_14-8.4.3-1.rhel8.x86_64.rpm pgdg 8.4.3 166.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/plr_14-8.4.3-1.rhel8.x86_64.rpm
@ el8.aarch64 14 plr_14 plr_14-8.4.8-1PGDG.rhel8.aarch64.rpm pgdg 8.4.8 74.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plr_14-8.4.8-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plr_14 plr_14-8.4.7-1PGDG.rhel8.aarch64.rpm pgdg 8.4.7 73.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plr_14-8.4.7-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 plr_14 plr_14-8.4.6-1PGDG.rhel8.aarch64.rpm pgdg 8.4.6 73.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/plr_14-8.4.6-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.8-1PGDG.rhel9.x86_64.rpm pgdg 8.4.8 74.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.8-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.7-1PGDG.rhel9.x86_64.rpm pgdg 8.4.7 74.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.7-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.6-1PGDG.rhel9.x86_64.rpm pgdg 8.4.6 73.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.6-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 plr_14 plr_14-8.4.5-1.rhel9.x86_64.rpm pgdg 8.4.5 167.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/plr_14-8.4.5-1.rhel9.x86_64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.8-1PGDG.rhel9.aarch64.rpm pgdg 8.4.8 72.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.8-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.7-1PGDG.rhel9.aarch64.rpm pgdg 8.4.7 72.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.7-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 plr_14 plr_14-8.4.6-1PGDG.rhel9.aarch64.rpm pgdg 8.4.6 71.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/plr_14-8.4.6-1PGDG.rhel9.aarch64.rpm
@ el10.aarch64 14 plr_14 plr_14-8.4.8-1PGDG.rhel10.aarch64.rpm pgdg 8.4.8 74.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/plr_14-8.4.8-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.2-1.pgdg12+1_amd64.deb pgdg 8.4.8.2 136.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.2-1.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.2-1.pgdg12+1_arm64.deb pgdg 8.4.8.2 132.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.2-1.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.2-1.pgdg13+1_amd64.deb pgdg 8.4.8.2 136.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.2-1.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.2-1.pgdg13+1_arm64.deb pgdg 8.4.8.2 132.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.2-1.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb pgdg 8.4.8.2 151.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.2-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb pgdg 8.4.8.2 148.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.2-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-plr postgresql-14-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb pgdg 8.4.8.2 127.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.2-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-plr postgresql-14-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb pgdg 8.4.8.2 123.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/plr/postgresql-14-plr_8.4.8.2-1.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `plr` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install plr;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y plr -v 18  # PG 18
pig ext install -y plr -v 17  # PG 17
pig ext install -y plr -v 16  # PG 16
pig ext install -y plr -v 15  # PG 15
pig ext install -y plr -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y plr_18       # PG 18
dnf install -y plr_17       # PG 17
dnf install -y plr_16       # PG 16
dnf install -y plr_15       # PG 15
dnf install -y plr_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-plr   # PG 18
apt install -y postgresql-17-plr   # PG 17
apt install -y postgresql-16-plr   # PG 16
apt install -y postgresql-15-plr   # PG 15
apt install -y postgresql-14-plr   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION plr;
```
