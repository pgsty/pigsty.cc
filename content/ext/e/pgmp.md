---
title: "pgmp"
linkTitle: "pgmp"
description: "多精度算术扩展"
weight: 3700
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dvarrazzo/pgmp/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dvarrazzo/pgmp</div>
    <div class="ext-card__desc">https://github.com/dvarrazzo/pgmp/</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmp`**](/ext/e/pgmp) | `1.0.5` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3700  | [**`pgmp`**](/ext/e/pgmp) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`numeral`](/ext/e/numeral) [`unit`](/ext/e/unit) [`pguecc`](/ext/e/pguecc) [`pgcrypto`](/ext/e/pgcrypto) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> missing pg14 on el pgdg repo


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.5` | {{< pgvers "18,17,16,15,14" >}} | `pgmp` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.5` | {{< pgvers "18,17,16,15,14" >}} | `pgmp_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmp` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| el8.aarch64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| el9.x86_64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.4 1 | MISS PGDG - 0 |
| el9.aarch64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.4 1 | AVAIL PGDG 1.0.4 1 |
| el10.x86_64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| el10.aarch64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| d12.x86_64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| d12.aarch64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| d13.x86_64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| d13.aarch64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| u22.x86_64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| u22.aarch64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| u24.x86_64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
| u24.aarch64 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 | AVAIL PGDG 1.0.5 1 |
@ el8.x86_64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel8.x86_64.rpm pgdg 1.0.5 41.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgmp_18-1.0.5-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel8.aarch64.rpm pgdg 1.0.5 39.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgmp_18-1.0.5-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel9.x86_64.rpm pgdg 1.0.5 42.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgmp_18-1.0.5-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel9.aarch64.rpm pgdg 1.0.5 41.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgmp_18-1.0.5-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 44.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgmp_18-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgmp_18 pgmp_18-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgmp_18-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 102.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 100.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmp postgresql-18-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-18-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgmp_17 pgmp_17-1.0.5-3PGDG.rhel8.x86_64.rpm pgdg 1.0.5 41.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgmp_17-1.0.5-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgmp_17 pgmp_17-1.0.5-3PGDG.rhel8.aarch64.rpm pgdg 1.0.5 39.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgmp_17-1.0.5-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgmp_17 pgmp_17-1.0.5-3PGDG.rhel9.x86_64.rpm pgdg 1.0.5 43.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgmp_17-1.0.5-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgmp_17 pgmp_17-1.0.5-3PGDG.rhel9.aarch64.rpm pgdg 1.0.5 41.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgmp_17-1.0.5-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgmp_17 pgmp_17-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 44.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgmp_17-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgmp_17 pgmp_17-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgmp_17-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 109.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmp postgresql-17-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 100.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-17-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgmp_16 pgmp_16-1.0.5-1PGDG.rhel8.x86_64.rpm pgdg 1.0.5 41.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgmp_16-1.0.5-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgmp_16 pgmp_16-1.0.5-1PGDG.rhel8.aarch64.rpm pgdg 1.0.5 39.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgmp_16-1.0.5-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgmp_16 pgmp_16-1.0.5-1PGDG.rhel9.x86_64.rpm pgdg 1.0.5 42.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgmp_16-1.0.5-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgmp_16 pgmp_16-1.0.5-1PGDG.rhel9.aarch64.rpm pgdg 1.0.5 41.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgmp_16-1.0.5-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgmp_16 pgmp_16-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 44.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgmp_16-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgmp_16 pgmp_16-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgmp_16-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 109.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 101.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmp postgresql-16-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-16-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgmp_15 pgmp_15-1.0.4-4.rhel8.x86_64.rpm pgdg 1.0.4 106.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgmp_15-1.0.4-4.rhel8.x86_64.rpm
@ el8.aarch64 15 pgmp_15 pgmp_15-1.0.4-4.rhel8.aarch64.rpm pgdg 1.0.4 104.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgmp_15-1.0.4-4.rhel8.aarch64.rpm
@ el9.x86_64 15 pgmp_15 pgmp_15-1.0.4-4.rhel9.x86_64.rpm pgdg 1.0.4 109.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgmp_15-1.0.4-4.rhel9.x86_64.rpm
@ el9.aarch64 15 pgmp_15 pgmp_15-1.0.4-4.rhel9.aarch64.rpm pgdg 1.0.4 107.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgmp_15-1.0.4-4.rhel9.aarch64.rpm
@ el10.x86_64 15 pgmp_15 pgmp_15-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 43.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgmp_15-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgmp_15 pgmp_15-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgmp_15-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 108.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 100.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmp postgresql-15-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-15-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgmp_14 pgmp_14-1.0.4-4.rhel8.x86_64.rpm pgdg 1.0.4 107.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgmp_14-1.0.4-4.rhel8.x86_64.rpm
@ el8.aarch64 14 pgmp_14 pgmp_14-1.0.4-4.rhel8.aarch64.rpm pgdg 1.0.4 104.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgmp_14-1.0.4-4.rhel8.aarch64.rpm
@ el9.aarch64 14 pgmp_14 pgmp_14-1.0.4-4.rhel9.aarch64.rpm pgdg 1.0.4 107.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgmp_14-1.0.4-4.rhel9.aarch64.rpm
@ el10.x86_64 14 pgmp_14 pgmp_14-1.0.5-4PGDG.rhel10.x86_64.rpm pgdg 1.0.5 43.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgmp_14-1.0.5-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgmp_14 pgmp_14-1.0.5-4PGDG.rhel10.aarch64.rpm pgdg 1.0.5 42.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgmp_14-1.0.5-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg12+1_amd64.deb pgdg 1.0.5 100.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg12+1_arm64.deb pgdg 1.0.5 99.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg13+1_amd64.deb pgdg 1.0.5 100.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg13+1_arm64.deb pgdg 1.0.5 99.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb pgdg 1.0.5 108.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb pgdg 1.0.5 107.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb pgdg 1.0.5 100.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmp postgresql-14-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb pgdg 1.0.5 99.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-pgmp/postgresql-14-pgmp_1.0.5-4.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgmp` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgmp;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgmp -v 18  # PG 18
pig ext install -y pgmp -v 17  # PG 17
pig ext install -y pgmp -v 16  # PG 16
pig ext install -y pgmp -v 15  # PG 15
pig ext install -y pgmp -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgmp_18       # PG 18
dnf install -y pgmp_17       # PG 17
dnf install -y pgmp_16       # PG 16
dnf install -y pgmp_15       # PG 15
dnf install -y pgmp_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgmp   # PG 18
apt install -y postgresql-17-pgmp   # PG 17
apt install -y postgresql-16-pgmp   # PG 16
apt install -y postgresql-15-pgmp   # PG 15
apt install -y postgresql-14-pgmp   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgmp;
```
