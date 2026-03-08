---
title: "pllua"
linkTitle: "pllua"
description: "Lua 程序语言"
weight: 3020
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pllua/pllua">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pllua/pllua</div>
    <div class="ext-card__desc">https://github.com/pllua/pllua</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pllua`**](/ext/e/pllua) | `2.0.12` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3020  | [**`pllua`**](/ext/e/pllua) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 3021  | [**`hstore_pllua`**](/ext/e/hstore_pllua) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 3030  | [**`plluau`**](/ext/e/plluau) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 3031  | [**`hstore_plluau`**](/ext/e/hstore_plluau) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`plperl`](/ext/e/plperl) [`plpgsql`](/ext/e/plpgsql) [`plpython3u`](/ext/e/plpython3u) [`pg_tle`](/ext/e/pg_tle) [`plv8`](/ext/e/plv8) [`pljava`](/ext/e/pljava) [`plperlu`](/ext/e/plperlu) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`hstore_pllua`](/ext/e/hstore_pllua) |
{.ext-table .ext-table--rel}


> missing pg12-15 on el.aarch64


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.12` | {{< pgvers "18,17,16,15,14" >}} | `pllua` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.12` | {{< pgvers "17,16,15,14" >}} | `pllua_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.0.12` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pllua` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.11 2 | AVAIL PGDG 2.0.11 2 |
| el8.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.11 2 | AVAIL PGDG 2.0.11 1 |
| el9.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| el10.aarch64 | MISS PGDG - 0 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| d12.x86_64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| d12.aarch64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| d13.x86_64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| d13.aarch64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| u22.x86_64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| u22.aarch64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| u24.x86_64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
| u24.aarch64 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 | AVAIL PGDG 2.0.12 1 |
@ d12.x86_64 18 postgresql-18-pllua postgresql-18-pllua_2.0.12-7.pgdg12+1_amd64.deb pgdg 2.0.12 347.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-18-pllua_2.0.12-7.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pllua postgresql-18-pllua_2.0.12-7.pgdg12+1_arm64.deb pgdg 2.0.12 336.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-18-pllua_2.0.12-7.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pllua postgresql-18-pllua_2.0.12-7.pgdg13+1_amd64.deb pgdg 2.0.12 348.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-18-pllua_2.0.12-7.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pllua postgresql-18-pllua_2.0.12-7.pgdg13+1_arm64.deb pgdg 2.0.12 336.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-18-pllua_2.0.12-7.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pllua postgresql-18-pllua_2.0.12-7.pgdg22.04+1_amd64.deb pgdg 2.0.12 354.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-18-pllua_2.0.12-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pllua postgresql-18-pllua_2.0.12-7.pgdg22.04+1_arm64.deb pgdg 2.0.12 341.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-18-pllua_2.0.12-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pllua postgresql-18-pllua_2.0.12-7.pgdg24.04+1_amd64.deb pgdg 2.0.12 347.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-18-pllua_2.0.12-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pllua postgresql-18-pllua_2.0.12-7.pgdg24.04+1_arm64.deb pgdg 2.0.12 335.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-18-pllua_2.0.12-7.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pllua_17 pllua_17-2.0.12-3PGDG.rhel8.x86_64.rpm pgdg 2.0.12 119.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pllua_17-2.0.12-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pllua_17 pllua_17-2.0.12-3PGDG.rhel8.aarch64.rpm pgdg 2.0.12 110.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pllua_17-2.0.12-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pllua_17 pllua_17-2.0.12-3PGDG.rhel9.x86_64.rpm pgdg 2.0.12 120.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pllua_17-2.0.12-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pllua_17 pllua_17-2.0.12-3PGDG.rhel9.aarch64.rpm pgdg 2.0.12 115.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pllua_17-2.0.12-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pllua_17 pllua_17-2.0.12-4PGDG.rhel10.x86_64.rpm pgdg 2.0.12 122.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pllua_17-2.0.12-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pllua_17 pllua_17-2.0.12-4PGDG.rhel10.aarch64.rpm pgdg 2.0.12 117.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pllua_17-2.0.12-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pllua postgresql-17-pllua_2.0.12-7.pgdg12+1_amd64.deb pgdg 2.0.12 347.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-17-pllua_2.0.12-7.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pllua postgresql-17-pllua_2.0.12-7.pgdg12+1_arm64.deb pgdg 2.0.12 335.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-17-pllua_2.0.12-7.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pllua postgresql-17-pllua_2.0.12-7.pgdg13+1_amd64.deb pgdg 2.0.12 347.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-17-pllua_2.0.12-7.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pllua postgresql-17-pllua_2.0.12-7.pgdg13+1_arm64.deb pgdg 2.0.12 336.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-17-pllua_2.0.12-7.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pllua postgresql-17-pllua_2.0.12-7.pgdg22.04+1_amd64.deb pgdg 2.0.12 391.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-17-pllua_2.0.12-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pllua postgresql-17-pllua_2.0.12-7.pgdg22.04+1_arm64.deb pgdg 2.0.12 379.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-17-pllua_2.0.12-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pllua postgresql-17-pllua_2.0.12-7.pgdg24.04+1_amd64.deb pgdg 2.0.12 347.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-17-pllua_2.0.12-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pllua postgresql-17-pllua_2.0.12-7.pgdg24.04+1_arm64.deb pgdg 2.0.12 335.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-17-pllua_2.0.12-7.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pllua_16 pllua_16-2.0.12-1PGDG.rhel8.x86_64.rpm pgdg 2.0.12 119.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pllua_16-2.0.12-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pllua_16 pllua_16-2.0.12-1PGDG.rhel8.aarch64.rpm pgdg 2.0.12 110.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pllua_16-2.0.12-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pllua_16 pllua_16-2.0.12-1PGDG.rhel9.x86_64.rpm pgdg 2.0.12 120.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pllua_16-2.0.12-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pllua_16 pllua_16-2.0.12-1PGDG.rhel9.aarch64.rpm pgdg 2.0.12 115.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pllua_16-2.0.12-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pllua_16 pllua_16-2.0.12-4PGDG.rhel10.x86_64.rpm pgdg 2.0.12 122.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pllua_16-2.0.12-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pllua_16 pllua_16-2.0.12-4PGDG.rhel10.aarch64.rpm pgdg 2.0.12 117.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pllua_16-2.0.12-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pllua postgresql-16-pllua_2.0.12-7.pgdg12+1_amd64.deb pgdg 2.0.12 346.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-16-pllua_2.0.12-7.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pllua postgresql-16-pllua_2.0.12-7.pgdg12+1_arm64.deb pgdg 2.0.12 335.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-16-pllua_2.0.12-7.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pllua postgresql-16-pllua_2.0.12-7.pgdg13+1_amd64.deb pgdg 2.0.12 347.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-16-pllua_2.0.12-7.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pllua postgresql-16-pllua_2.0.12-7.pgdg13+1_arm64.deb pgdg 2.0.12 335.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-16-pllua_2.0.12-7.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pllua postgresql-16-pllua_2.0.12-7.pgdg22.04+1_amd64.deb pgdg 2.0.12 389.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-16-pllua_2.0.12-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pllua postgresql-16-pllua_2.0.12-7.pgdg22.04+1_arm64.deb pgdg 2.0.12 377.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-16-pllua_2.0.12-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pllua postgresql-16-pllua_2.0.12-7.pgdg24.04+1_amd64.deb pgdg 2.0.12 347.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-16-pllua_2.0.12-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pllua postgresql-16-pllua_2.0.12-7.pgdg24.04+1_arm64.deb pgdg 2.0.12 335.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-16-pllua_2.0.12-7.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pllua_15 pllua_15-2.0.11-1.rhel8.x86_64.rpm pgdg 2.0.11 120.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pllua_15-2.0.11-1.rhel8.x86_64.rpm
@ el8.x86_64 15 pllua_15 pllua_15-2.0.10-1.rhel8.x86_64.rpm pgdg 2.0.10 120.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pllua_15-2.0.10-1.rhel8.x86_64.rpm
@ el9.x86_64 15 pllua_15 pllua_15-2.0.11-1.rhel9.x86_64.rpm pgdg 2.0.11 123.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pllua_15-2.0.11-1.rhel9.x86_64.rpm
@ el9.x86_64 15 pllua_15 pllua_15-2.0.10-1.rhel9.x86_64.rpm pgdg 2.0.10 123.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pllua_15-2.0.10-1.rhel9.x86_64.rpm
@ el10.x86_64 15 pllua_15 pllua_15-2.0.12-4PGDG.rhel10.x86_64.rpm pgdg 2.0.12 125.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pllua_15-2.0.12-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pllua_15 pllua_15-2.0.12-4PGDG.rhel10.aarch64.rpm pgdg 2.0.12 120.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pllua_15-2.0.12-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pllua postgresql-15-pllua_2.0.12-7.pgdg12+1_amd64.deb pgdg 2.0.12 348.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-15-pllua_2.0.12-7.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pllua postgresql-15-pllua_2.0.12-7.pgdg12+1_arm64.deb pgdg 2.0.12 337.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-15-pllua_2.0.12-7.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pllua postgresql-15-pllua_2.0.12-7.pgdg13+1_amd64.deb pgdg 2.0.12 349.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-15-pllua_2.0.12-7.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pllua postgresql-15-pllua_2.0.12-7.pgdg13+1_arm64.deb pgdg 2.0.12 337.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-15-pllua_2.0.12-7.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pllua postgresql-15-pllua_2.0.12-7.pgdg22.04+1_amd64.deb pgdg 2.0.12 392.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-15-pllua_2.0.12-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pllua postgresql-15-pllua_2.0.12-7.pgdg22.04+1_arm64.deb pgdg 2.0.12 380.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-15-pllua_2.0.12-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pllua postgresql-15-pllua_2.0.12-7.pgdg24.04+1_amd64.deb pgdg 2.0.12 348.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-15-pllua_2.0.12-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pllua postgresql-15-pllua_2.0.12-7.pgdg24.04+1_arm64.deb pgdg 2.0.12 337.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-15-pllua_2.0.12-7.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pllua_14 pllua_14-2.0.11-1.rhel8.x86_64.rpm pgdg 2.0.11 121.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pllua_14-2.0.11-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pllua_14 pllua_14-2.0.10-1.rhel8.x86_64.rpm pgdg 2.0.10 120.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pllua_14-2.0.10-1.rhel8.x86_64.rpm
@ el9.x86_64 14 pllua_14 pllua_14-2.0.11-1.rhel9.x86_64.rpm pgdg 2.0.11 123.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pllua_14-2.0.11-1.rhel9.x86_64.rpm
@ el10.x86_64 14 pllua_14 pllua_14-2.0.12-4PGDG.rhel10.x86_64.rpm pgdg 2.0.12 125.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pllua_14-2.0.12-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pllua_14 pllua_14-2.0.12-4PGDG.rhel10.aarch64.rpm pgdg 2.0.12 120.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pllua_14-2.0.12-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pllua postgresql-14-pllua_2.0.12-7.pgdg12+1_amd64.deb pgdg 2.0.12 348.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-14-pllua_2.0.12-7.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pllua postgresql-14-pllua_2.0.12-7.pgdg12+1_arm64.deb pgdg 2.0.12 336.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-14-pllua_2.0.12-7.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pllua postgresql-14-pllua_2.0.12-7.pgdg13+1_amd64.deb pgdg 2.0.12 349.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-14-pllua_2.0.12-7.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pllua postgresql-14-pllua_2.0.12-7.pgdg13+1_arm64.deb pgdg 2.0.12 337.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-14-pllua_2.0.12-7.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pllua postgresql-14-pllua_2.0.12-7.pgdg22.04+1_amd64.deb pgdg 2.0.12 388.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-14-pllua_2.0.12-7.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pllua postgresql-14-pllua_2.0.12-7.pgdg22.04+1_arm64.deb pgdg 2.0.12 375.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-14-pllua_2.0.12-7.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pllua postgresql-14-pllua_2.0.12-7.pgdg24.04+1_amd64.deb pgdg 2.0.12 348.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-14-pllua_2.0.12-7.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pllua postgresql-14-pllua_2.0.12-7.pgdg24.04+1_arm64.deb pgdg 2.0.12 336.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pllua/postgresql-14-pllua_2.0.12-7.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pllua` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pllua;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pllua -v 18  # PG 18
pig ext install -y pllua -v 17  # PG 17
pig ext install -y pllua -v 16  # PG 16
pig ext install -y pllua -v 15  # PG 15
pig ext install -y pllua -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pllua_18       # PG 18
dnf install -y pllua_17       # PG 17
dnf install -y pllua_16       # PG 16
dnf install -y pllua_15       # PG 15
dnf install -y pllua_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pllua   # PG 18
apt install -y postgresql-17-pllua   # PG 17
apt install -y postgresql-16-pllua   # PG 16
apt install -y postgresql-15-pllua   # PG 15
apt install -y postgresql-14-pllua   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pllua;
```
