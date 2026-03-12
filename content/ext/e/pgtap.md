---
title: "pgtap"
linkTitle: "pgtap"
description: "PostgreSQL单元测试框架"
weight: 3200
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/theory/pgtap">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">theory/pgtap</div>
    <div class="ext-card__desc">https://github.com/theory/pgtap</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgtap`**](/ext/e/pgtap) | `1.3.4` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3200  | [**`pgtap`**](/ext/e/pgtap) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql_check`](/ext/e/plpgsql_check) [`plpgsql`](/ext/e/plpgsql) [`pldbgapi`](/ext/e/pldbgapi) [`plprofiler`](/ext/e/plprofiler) [`faker`](/ext/e/faker) [`unit`](/ext/e/unit) [`dbt2`](/ext/e/dbt2) [`plperl`](/ext/e/plperl) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> missing pg17 el9, breaking perl deps


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.4` | {{< pgvers "18,17,16,15,14" >}} | `pgtap` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.4` | {{< pgvers "18,17,16,15,14" >}} | `pgtap_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgtap` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 3 | AVAIL PGDG 1.3.4 4 |
| el8.aarch64 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 |
| el9.x86_64 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 |
| el9.aarch64 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 3 | AVAIL PGDG 1.3.4 3 | AVAIL PGDG 1.3.4 3 |
| el10.x86_64 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 |
| el10.aarch64 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 | AVAIL PGDG 1.3.4 2 |
| d12.x86_64 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 |
| d12.aarch64 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 |
| d13.x86_64 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 |
| d13.aarch64 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 |
| u22.x86_64 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 |
| u22.aarch64 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 |
| u24.x86_64 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 |
| u24.aarch64 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 | AVAIL PGDG 1.3.4 1 |
@ el8.x86_64 18 pgtap_18 pgtap_18-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgtap_18-1.3.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 18 pgtap_18 pgtap_18-1.3.3-1PGDG.rhel8.noarch.rpm pgdg 1.3.3 117.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgtap_18-1.3.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pgtap_18 pgtap_18-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgtap_18-1.3.4-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 18 pgtap_18 pgtap_18-1.3.3-1PGDG.rhel8.noarch.rpm pgdg 1.3.3 117.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgtap_18-1.3.3-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 18 pgtap_18 pgtap_18-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgtap_18-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 18 pgtap_18 pgtap_18-1.3.3-1PGDG.rhel9.noarch.rpm pgdg 1.3.3 106.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgtap_18-1.3.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pgtap_18 pgtap_18-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgtap_18-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 18 pgtap_18 pgtap_18-1.3.3-1PGDG.rhel9.noarch.rpm pgdg 1.3.3 106.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgtap_18-1.3.3-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 18 pgtap_18 pgtap_18-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgtap_18-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 18 pgtap_18 pgtap_18-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 107.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgtap_18-1.3.3-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pgtap_18 pgtap_18-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgtap_18-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 18 pgtap_18 pgtap_18-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 106.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgtap_18-1.3.3-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pgtap postgresql-18-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-18-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d12.aarch64 18 postgresql-18-pgtap postgresql-18-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-18-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d13.x86_64 18 postgresql-18-pgtap postgresql-18-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-18-pgtap_1.3.4-1.pgdg13+1_all.deb
@ d13.aarch64 18 postgresql-18-pgtap postgresql-18-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-18-pgtap_1.3.4-1.pgdg13+1_all.deb
@ u22.x86_64 18 postgresql-18-pgtap postgresql-18-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-18-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u22.aarch64 18 postgresql-18-pgtap postgresql-18-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-18-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u24.x86_64 18 postgresql-18-pgtap postgresql-18-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-18-pgtap_1.3.4-1.pgdg24.04+1_all.deb
@ u24.aarch64 18 postgresql-18-pgtap postgresql-18-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-18-pgtap_1.3.4-1.pgdg24.04+1_all.deb
@ el8.x86_64 17 pgtap_17 pgtap_17-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgtap_17-1.3.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 17 pgtap_17 pgtap_17-1.3.3-1PGDG.rhel8.noarch.rpm pgdg 1.3.3 117.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgtap_17-1.3.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 17 pgtap_17 pgtap_17-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgtap_17-1.3.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 17 pgtap_17 pgtap_17-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgtap_17-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 17 pgtap_17 pgtap_17-1.3.3-1PGDG.rhel9.noarch.rpm pgdg 1.3.3 106.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgtap_17-1.3.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgtap_17 pgtap_17-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgtap_17-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 17 pgtap_17 pgtap_17-1.3.3-1PGDG.rhel9.noarch.rpm pgdg 1.3.3 106.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgtap_17-1.3.3-1PGDG.rhel9.noarch.rpm
@ el10.x86_64 17 pgtap_17 pgtap_17-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgtap_17-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 17 pgtap_17 pgtap_17-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 107.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgtap_17-1.3.3-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pgtap_17 pgtap_17-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgtap_17-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 17 pgtap_17 pgtap_17-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 106.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgtap_17-1.3.3-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pgtap postgresql-17-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-17-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d12.aarch64 17 postgresql-17-pgtap postgresql-17-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-17-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d13.x86_64 17 postgresql-17-pgtap postgresql-17-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-17-pgtap_1.3.4-1.pgdg13+1_all.deb
@ d13.aarch64 17 postgresql-17-pgtap postgresql-17-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-17-pgtap_1.3.4-1.pgdg13+1_all.deb
@ u22.x86_64 17 postgresql-17-pgtap postgresql-17-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-17-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u22.aarch64 17 postgresql-17-pgtap postgresql-17-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-17-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u24.x86_64 17 postgresql-17-pgtap postgresql-17-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-17-pgtap_1.3.4-1.pgdg24.04+1_all.deb
@ u24.aarch64 17 postgresql-17-pgtap postgresql-17-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-17-pgtap_1.3.4-1.pgdg24.04+1_all.deb
@ el8.x86_64 16 pgtap_16 pgtap_16-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgtap_16-1.3.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 16 pgtap_16 pgtap_16-1.3.3-1PGDG.rhel8.noarch.rpm pgdg 1.3.3 117.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgtap_16-1.3.3-1PGDG.rhel8.noarch.rpm
@ el8.aarch64 16 pgtap_16 pgtap_16-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgtap_16-1.3.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 16 pgtap_16 pgtap_16-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgtap_16-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 16 pgtap_16 pgtap_16-1.3.1-1PGDG.rhel9.x86_64.rpm pgdg 1.3.1 109.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgtap_16-1.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgtap_16 pgtap_16-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgtap_16-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgtap_16 pgtap_16-1.3.3-1PGDG.rhel9.noarch.rpm pgdg 1.3.3 106.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgtap_16-1.3.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 16 pgtap_16 pgtap_16-1.3.1-1PGDG.rhel9.aarch64.rpm pgdg 1.3.1 109.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgtap_16-1.3.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgtap_16 pgtap_16-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgtap_16-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 16 pgtap_16 pgtap_16-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 107.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgtap_16-1.3.3-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pgtap_16 pgtap_16-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgtap_16-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 16 pgtap_16 pgtap_16-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 106.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgtap_16-1.3.3-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pgtap postgresql-16-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-16-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d12.aarch64 16 postgresql-16-pgtap postgresql-16-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-16-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d13.x86_64 16 postgresql-16-pgtap postgresql-16-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-16-pgtap_1.3.4-1.pgdg13+1_all.deb
@ d13.aarch64 16 postgresql-16-pgtap postgresql-16-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-16-pgtap_1.3.4-1.pgdg13+1_all.deb
@ u22.x86_64 16 postgresql-16-pgtap postgresql-16-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-16-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u22.aarch64 16 postgresql-16-pgtap postgresql-16-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-16-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u24.x86_64 16 postgresql-16-pgtap postgresql-16-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-16-pgtap_1.3.4-1.pgdg24.04+1_all.deb
@ u24.aarch64 16 postgresql-16-pgtap postgresql-16-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-16-pgtap_1.3.4-1.pgdg24.04+1_all.deb
@ el8.x86_64 15 pgtap_15 pgtap_15-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgtap_15-1.3.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pgtap_15 pgtap_15-1.3.3-1PGDG.rhel8.noarch.rpm pgdg 1.3.3 117.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgtap_15-1.3.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 15 pgtap_15 pgtap_15-1.2.0-1.rhel8.noarch.rpm pgdg 1.2.0 113.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgtap_15-1.2.0-1.rhel8.noarch.rpm
@ el8.aarch64 15 pgtap_15 pgtap_15-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgtap_15-1.3.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 15 pgtap_15 pgtap_15-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgtap_15-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 15 pgtap_15 pgtap_15-1.3.1-1PGDG.rhel9.x86_64.rpm pgdg 1.3.1 109.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgtap_15-1.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pgtap_15 pgtap_15-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgtap_15-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgtap_15 pgtap_15-1.3.3-1PGDG.rhel9.noarch.rpm pgdg 1.3.3 106.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgtap_15-1.3.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 15 pgtap_15 pgtap_15-1.3.1-1PGDG.rhel9.aarch64.rpm pgdg 1.3.1 109.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgtap_15-1.3.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pgtap_15 pgtap_15-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgtap_15-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 15 pgtap_15 pgtap_15-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 107.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgtap_15-1.3.3-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pgtap_15 pgtap_15-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgtap_15-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 15 pgtap_15 pgtap_15-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 106.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgtap_15-1.3.3-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pgtap postgresql-15-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-15-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d12.aarch64 15 postgresql-15-pgtap postgresql-15-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-15-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d13.x86_64 15 postgresql-15-pgtap postgresql-15-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-15-pgtap_1.3.4-1.pgdg13+1_all.deb
@ d13.aarch64 15 postgresql-15-pgtap postgresql-15-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-15-pgtap_1.3.4-1.pgdg13+1_all.deb
@ u22.x86_64 15 postgresql-15-pgtap postgresql-15-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-15-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u22.aarch64 15 postgresql-15-pgtap postgresql-15-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-15-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u24.x86_64 15 postgresql-15-pgtap postgresql-15-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-15-pgtap_1.3.4-1.pgdg24.04+1_all.deb
@ u24.aarch64 15 postgresql-15-pgtap postgresql-15-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-15-pgtap_1.3.4-1.pgdg24.04+1_all.deb
@ el8.x86_64 14 pgtap_14 pgtap_14-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgtap_14-1.3.4-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pgtap_14 pgtap_14-1.3.3-1PGDG.rhel8.noarch.rpm pgdg 1.3.3 117.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgtap_14-1.3.3-1PGDG.rhel8.noarch.rpm
@ el8.x86_64 14 pgtap_14 pgtap_14-1.2.0-1.rhel8.noarch.rpm pgdg 1.2.0 113.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgtap_14-1.2.0-1.rhel8.noarch.rpm
@ el8.x86_64 14 pgtap_14 pgtap_14-1.1.0-3.rhel8.noarch.rpm pgdg 1.1.0 111.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgtap_14-1.1.0-3.rhel8.noarch.rpm
@ el8.aarch64 14 pgtap_14 pgtap_14-1.3.4-1PGDG.rhel8.noarch.rpm pgdg 1.3.4 118.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgtap_14-1.3.4-1PGDG.rhel8.noarch.rpm
@ el9.x86_64 14 pgtap_14 pgtap_14-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgtap_14-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.x86_64 14 pgtap_14 pgtap_14-1.3.1-1PGDG.rhel9.x86_64.rpm pgdg 1.3.1 109.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgtap_14-1.3.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pgtap_14 pgtap_14-1.3.4-1PGDG.rhel9.noarch.rpm pgdg 1.3.4 106.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgtap_14-1.3.4-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgtap_14 pgtap_14-1.3.3-1PGDG.rhel9.noarch.rpm pgdg 1.3.3 106.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgtap_14-1.3.3-1PGDG.rhel9.noarch.rpm
@ el9.aarch64 14 pgtap_14 pgtap_14-1.3.1-1PGDG.rhel9.aarch64.rpm pgdg 1.3.1 109.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgtap_14-1.3.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pgtap_14 pgtap_14-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgtap_14-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.x86_64 14 pgtap_14 pgtap_14-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 107.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgtap_14-1.3.3-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pgtap_14 pgtap_14-1.3.4-1PGDG.rhel10.noarch.rpm pgdg 1.3.4 107.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgtap_14-1.3.4-1PGDG.rhel10.noarch.rpm
@ el10.aarch64 14 pgtap_14 pgtap_14-1.3.3-1PGDG.rhel10.noarch.rpm pgdg 1.3.3 106.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgtap_14-1.3.3-1PGDG.rhel10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pgtap postgresql-14-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-14-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d12.aarch64 14 postgresql-14-pgtap postgresql-14-pgtap_1.3.4-1.pgdg12+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-14-pgtap_1.3.4-1.pgdg12+1_all.deb
@ d13.x86_64 14 postgresql-14-pgtap postgresql-14-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-14-pgtap_1.3.4-1.pgdg13+1_all.deb
@ d13.aarch64 14 postgresql-14-pgtap postgresql-14-pgtap_1.3.4-1.pgdg13+1_all.deb pgdg 1.3.4 62.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-14-pgtap_1.3.4-1.pgdg13+1_all.deb
@ u22.x86_64 14 postgresql-14-pgtap postgresql-14-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-14-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u22.aarch64 14 postgresql-14-pgtap postgresql-14-pgtap_1.3.4-1.pgdg22.04+1_all.deb pgdg 1.3.4 46.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-14-pgtap_1.3.4-1.pgdg22.04+1_all.deb
@ u24.x86_64 14 postgresql-14-pgtap postgresql-14-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-14-pgtap_1.3.4-1.pgdg24.04+1_all.deb
@ u24.aarch64 14 postgresql-14-pgtap postgresql-14-pgtap_1.3.4-1.pgdg24.04+1_all.deb pgdg 1.3.4 44.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgtap/postgresql-14-pgtap_1.3.4-1.pgdg24.04+1_all.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgtap` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgtap;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgtap -v 18  # PG 18
pig ext install -y pgtap -v 17  # PG 17
pig ext install -y pgtap -v 16  # PG 16
pig ext install -y pgtap -v 15  # PG 15
pig ext install -y pgtap -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgtap_18       # PG 18
dnf install -y pgtap_17       # PG 17
dnf install -y pgtap_16       # PG 16
dnf install -y pgtap_15       # PG 15
dnf install -y pgtap_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgtap   # PG 18
apt install -y postgresql-17-pgtap   # PG 17
apt install -y postgresql-16-pgtap   # PG 16
apt install -y postgresql-15-pgtap   # PG 15
apt install -y postgresql-14-pgtap   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgtap;
```



## 用法

> [pgtap: PostgreSQL 单元测试框架](https://github.com/theory/pgtap)

`pgtap` 是一个 PostgreSQL 单元测试框架，输出 TAP（Test Anything Protocol）格式的结果，提供数百个断言函数用于测试数据库对象和查询结果。

```sql
CREATE EXTENSION pgtap;
```

### 测试结构

```sql
BEGIN;
SELECT plan(3);  -- 声明要运行的测试数量

SELECT ok(1 = 1, 'one equals one');
SELECT is(1 + 1, 2, 'addition works');
SELECT isnt(1, 2, 'one is not two');

SELECT * FROM finish();
ROLLBACK;
```

当测试数量未知时使用 `no_plan()`：

```sql
BEGIN;
SELECT * FROM no_plan();
-- ... 测试 ...
SELECT * FROM finish();
ROLLBACK;
```

### 基本断言

```sql
SELECT ok(expression, description);           -- 布尔测试
SELECT is(got, expected, description);         -- 相等测试
SELECT isnt(got, unexpected, description);     -- 不等测试
SELECT matches(value, regex, description);     -- 正则匹配
```

### 模式测试

```sql
SELECT has_table('users');
SELECT has_table('myschema', 'users', 'users table exists');
SELECT has_column('users', 'email');
SELECT col_type_is('users', 'email', 'text');
SELECT col_not_null('users', 'id');
SELECT col_has_default('users', 'created_at');
SELECT has_function('calculate_total');
SELECT has_function('calculate_total', ARRAY['integer', 'numeric']);
SELECT has_index('users', 'users_email_idx');
SELECT has_pk('users');
SELECT has_fk('orders');
```

### 错误测试

```sql
SELECT lives_ok('INSERT INTO t(id) VALUES (1)', 'insert succeeds');
SELECT throws_ok(
  'SELECT 1/0',
  '22012',          -- 除零错误的 SQLSTATE
  'division by zero'
);
```

### 查询结果测试

```sql
-- 比较有序结果集
SELECT results_eq(
  'SELECT * FROM active_users()',
  'SELECT * FROM users WHERE active',
  'active_users returns correct rows'
);

-- 比较无序结果集
SELECT set_eq(
  'SELECT * FROM active_ids()',
  ARRAY[2, 3, 4, 5]
);

-- 检查查询返回空结果
SELECT is_empty('SELECT * FROM users WHERE id = -1');

-- 比较多重集结果
SELECT bag_eq(
  'SELECT color FROM items',
  $$VALUES ('red'), ('blue'), ('red')$$
);
```

### 使用 pg_prove 运行测试

```bash
pg_prove -d mydb tests/*.sql
pg_prove -d mydb --ext .sql --recurse tests/
```

### xUnit 风格

```sql
CREATE FUNCTION test_my_feature() RETURNS SETOF text AS $$
  RETURN NEXT ok(1 = 1, 'basic check');
  RETURN NEXT is(my_func(1), 42, 'function works');
$$ LANGUAGE plpgsql;

SELECT * FROM runtests('test_my_feature');
```
