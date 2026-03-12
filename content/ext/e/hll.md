---
title: "hll"
linkTitle: "hll"
description: "hyperloglog 数据类型"
weight: 2710
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/citusdata/postgresql-hll">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">citusdata/postgresql-hll</div>
    <div class="ext-card__desc">https://github.com/citusdata/postgresql-hll</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`hll`**](/ext/e/hll) | `2.19` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2710  | [**`hll`**](/ext/e/hll) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`topn`](/ext/e/topn) [`count_distinct`](/ext/e/count_distinct) [`omnisketch`](/ext/e/omnisketch) [`bloom`](/ext/e/bloom) [`roaringbitmap`](/ext/e/roaringbitmap) [`ddsketch`](/ext/e/ddsketch) [`tdigest`](/ext/e/tdigest) [`citus`](/ext/e/citus) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.19` | {{< pgvers "18,17,16,15,14" >}} | `hll` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.19` | {{< pgvers "18,17,16,15,14" >}} | `hll_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.19` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-hll` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 2 | AVAIL PGDG 2.18 2 |
| el8.aarch64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 2 | AVAIL PGDG 2.18 2 |
| el9.x86_64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 2 | AVAIL PGDG 2.18 1 |
| el9.aarch64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 2 | AVAIL PGDG 2.18 2 |
| el10.x86_64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 |
| el10.aarch64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 | AVAIL PGDG 2.18 1 |
| d12.x86_64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 |
| d12.aarch64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 |
| d13.x86_64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 |
| d13.aarch64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 |
| u22.x86_64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 |
| u22.aarch64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 |
| u24.x86_64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 |
| u24.aarch64 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 | AVAIL PGDG 2.19 1 |
@ el8.x86_64 18 hll_18 hll_18-2.19-1PGDG.rhel8.x86_64.rpm pgdg 2.19 42.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/hll_18-2.19-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 hll_18 hll_18-2.19-1PGDG.rhel8.aarch64.rpm pgdg 2.19 42.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/hll_18-2.19-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 hll_18 hll_18-2.19-1PGDG.rhel9.x86_64.rpm pgdg 2.19 42.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/hll_18-2.19-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 hll_18 hll_18-2.19-1PGDG.rhel9.aarch64.rpm pgdg 2.19 41.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/hll_18-2.19-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 hll_18 hll_18-2.19-1PGDG.rhel10.x86_64.rpm pgdg 2.19 42.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/hll_18-2.19-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 hll_18 hll_18-2.19-1PGDG.rhel10.aarch64.rpm pgdg 2.19 41.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/hll_18-2.19-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-hll postgresql-18-hll_2.19-2.pgdg12+2_amd64.deb pgdg 2.19 76.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-18-hll_2.19-2.pgdg12+2_amd64.deb
@ d12.aarch64 18 postgresql-18-hll postgresql-18-hll_2.19-2.pgdg12+2_arm64.deb pgdg 2.19 75.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-18-hll_2.19-2.pgdg12+2_arm64.deb
@ d13.x86_64 18 postgresql-18-hll postgresql-18-hll_2.19-2.pgdg13+2_amd64.deb pgdg 2.19 76.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-18-hll_2.19-2.pgdg13+2_amd64.deb
@ d13.aarch64 18 postgresql-18-hll postgresql-18-hll_2.19-2.pgdg13+2_arm64.deb pgdg 2.19 75.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-18-hll_2.19-2.pgdg13+2_arm64.deb
@ u22.x86_64 18 postgresql-18-hll postgresql-18-hll_2.19-2.pgdg22.04+2_amd64.deb pgdg 2.19 76.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-18-hll_2.19-2.pgdg22.04+2_amd64.deb
@ u22.aarch64 18 postgresql-18-hll postgresql-18-hll_2.19-2.pgdg22.04+2_arm64.deb pgdg 2.19 75.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-18-hll_2.19-2.pgdg22.04+2_arm64.deb
@ u24.x86_64 18 postgresql-18-hll postgresql-18-hll_2.19-2.pgdg24.04+2_amd64.deb pgdg 2.19 75.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-18-hll_2.19-2.pgdg24.04+2_amd64.deb
@ u24.aarch64 18 postgresql-18-hll postgresql-18-hll_2.19-2.pgdg24.04+2_arm64.deb pgdg 2.19 74.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-18-hll_2.19-2.pgdg24.04+2_arm64.deb
@ el8.x86_64 17 hll_17 hll_17-2.18-2PGDG.rhel8.x86_64.rpm pgdg 2.18 41.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/hll_17-2.18-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 hll_17 hll_17-2.18-2PGDG.rhel8.aarch64.rpm pgdg 2.18 41.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/hll_17-2.18-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 hll_17 hll_17-2.18-2PGDG.rhel9.x86_64.rpm pgdg 2.18 41.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/hll_17-2.18-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 hll_17 hll_17-2.18-2PGDG.rhel9.aarch64.rpm pgdg 2.18 41.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/hll_17-2.18-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 hll_17 hll_17-2.18-3PGDG.rhel10.x86_64.rpm pgdg 2.18 42.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/hll_17-2.18-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 hll_17 hll_17-2.18-3PGDG.rhel10.aarch64.rpm pgdg 2.18 41.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/hll_17-2.18-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-hll postgresql-17-hll_2.19-2.pgdg12+2_amd64.deb pgdg 2.19 76.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-17-hll_2.19-2.pgdg12+2_amd64.deb
@ d12.aarch64 17 postgresql-17-hll postgresql-17-hll_2.19-2.pgdg12+2_arm64.deb pgdg 2.19 75.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-17-hll_2.19-2.pgdg12+2_arm64.deb
@ d13.x86_64 17 postgresql-17-hll postgresql-17-hll_2.19-2.pgdg13+2_amd64.deb pgdg 2.19 76.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-17-hll_2.19-2.pgdg13+2_amd64.deb
@ d13.aarch64 17 postgresql-17-hll postgresql-17-hll_2.19-2.pgdg13+2_arm64.deb pgdg 2.19 75.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-17-hll_2.19-2.pgdg13+2_arm64.deb
@ u22.x86_64 17 postgresql-17-hll postgresql-17-hll_2.19-2.pgdg22.04+2_amd64.deb pgdg 2.19 82.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-17-hll_2.19-2.pgdg22.04+2_amd64.deb
@ u22.aarch64 17 postgresql-17-hll postgresql-17-hll_2.19-2.pgdg22.04+2_arm64.deb pgdg 2.19 81.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-17-hll_2.19-2.pgdg22.04+2_arm64.deb
@ u24.x86_64 17 postgresql-17-hll postgresql-17-hll_2.19-2.pgdg24.04+2_amd64.deb pgdg 2.19 75.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-17-hll_2.19-2.pgdg24.04+2_amd64.deb
@ u24.aarch64 17 postgresql-17-hll postgresql-17-hll_2.19-2.pgdg24.04+2_arm64.deb pgdg 2.19 74.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-17-hll_2.19-2.pgdg24.04+2_arm64.deb
@ el8.x86_64 16 hll_16 hll_16-2.18-1PGDG.rhel8.x86_64.rpm pgdg 2.18 41.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/hll_16-2.18-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 hll_16 hll_16-2.18-1PGDG.rhel8.aarch64.rpm pgdg 2.18 41.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/hll_16-2.18-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 hll_16 hll_16-2.18-1PGDG.rhel9.x86_64.rpm pgdg 2.18 41.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/hll_16-2.18-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 hll_16 hll_16-2.18-1PGDG.rhel9.aarch64.rpm pgdg 2.18 41.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/hll_16-2.18-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 hll_16 hll_16-2.18-3PGDG.rhel10.x86_64.rpm pgdg 2.18 42.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/hll_16-2.18-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 hll_16 hll_16-2.18-3PGDG.rhel10.aarch64.rpm pgdg 2.18 41.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/hll_16-2.18-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-hll postgresql-16-hll_2.19-2.pgdg12+2_amd64.deb pgdg 2.19 76.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-16-hll_2.19-2.pgdg12+2_amd64.deb
@ d12.aarch64 16 postgresql-16-hll postgresql-16-hll_2.19-2.pgdg12+2_arm64.deb pgdg 2.19 75.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-16-hll_2.19-2.pgdg12+2_arm64.deb
@ d13.x86_64 16 postgresql-16-hll postgresql-16-hll_2.19-2.pgdg13+2_amd64.deb pgdg 2.19 76.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-16-hll_2.19-2.pgdg13+2_amd64.deb
@ d13.aarch64 16 postgresql-16-hll postgresql-16-hll_2.19-2.pgdg13+2_arm64.deb pgdg 2.19 75.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-16-hll_2.19-2.pgdg13+2_arm64.deb
@ u22.x86_64 16 postgresql-16-hll postgresql-16-hll_2.19-2.pgdg22.04+2_amd64.deb pgdg 2.19 82.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-16-hll_2.19-2.pgdg22.04+2_amd64.deb
@ u22.aarch64 16 postgresql-16-hll postgresql-16-hll_2.19-2.pgdg22.04+2_arm64.deb pgdg 2.19 81.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-16-hll_2.19-2.pgdg22.04+2_arm64.deb
@ u24.x86_64 16 postgresql-16-hll postgresql-16-hll_2.19-2.pgdg24.04+2_amd64.deb pgdg 2.19 75.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-16-hll_2.19-2.pgdg24.04+2_amd64.deb
@ u24.aarch64 16 postgresql-16-hll postgresql-16-hll_2.19-2.pgdg24.04+2_arm64.deb pgdg 2.19 74.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-16-hll_2.19-2.pgdg24.04+2_arm64.deb
@ el8.x86_64 15 hll_15 hll_15-2.18-1PGDG.rhel8.x86_64.rpm pgdg 2.18 42.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/hll_15-2.18-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 hll_15 hll_15-2.17-1.rhel8.x86_64.rpm pgdg 2.17 89.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/hll_15-2.17-1.rhel8.x86_64.rpm
@ el8.aarch64 15 hll_15 hll_15-2.18-1PGDG.rhel8.aarch64.rpm pgdg 2.18 41.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/hll_15-2.18-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 hll_15 hll_15-2.17-1.rhel8.aarch64.rpm pgdg 2.17 89.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/hll_15-2.17-1.rhel8.aarch64.rpm
@ el9.x86_64 15 hll_15 hll_15-2.18-1PGDG.rhel9.x86_64.rpm pgdg 2.18 41.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/hll_15-2.18-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 hll_15 hll_15-2.17-1.rhel9.x86_64.rpm pgdg 2.17 90.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/hll_15-2.17-1.rhel9.x86_64.rpm
@ el9.aarch64 15 hll_15 hll_15-2.18-1PGDG.rhel9.aarch64.rpm pgdg 2.18 41.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/hll_15-2.18-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 hll_15 hll_15-2.17-1.rhel9.aarch64.rpm pgdg 2.17 91.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/hll_15-2.17-1.rhel9.aarch64.rpm
@ el10.x86_64 15 hll_15 hll_15-2.18-3PGDG.rhel10.x86_64.rpm pgdg 2.18 43.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/hll_15-2.18-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 hll_15 hll_15-2.18-3PGDG.rhel10.aarch64.rpm pgdg 2.18 42.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/hll_15-2.18-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-hll postgresql-15-hll_2.19-2.pgdg12+2_amd64.deb pgdg 2.19 77.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-15-hll_2.19-2.pgdg12+2_amd64.deb
@ d12.aarch64 15 postgresql-15-hll postgresql-15-hll_2.19-2.pgdg12+2_arm64.deb pgdg 2.19 76.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-15-hll_2.19-2.pgdg12+2_arm64.deb
@ d13.x86_64 15 postgresql-15-hll postgresql-15-hll_2.19-2.pgdg13+2_amd64.deb pgdg 2.19 77.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-15-hll_2.19-2.pgdg13+2_amd64.deb
@ d13.aarch64 15 postgresql-15-hll postgresql-15-hll_2.19-2.pgdg13+2_arm64.deb pgdg 2.19 76.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-15-hll_2.19-2.pgdg13+2_arm64.deb
@ u22.x86_64 15 postgresql-15-hll postgresql-15-hll_2.19-2.pgdg22.04+2_amd64.deb pgdg 2.19 83.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-15-hll_2.19-2.pgdg22.04+2_amd64.deb
@ u22.aarch64 15 postgresql-15-hll postgresql-15-hll_2.19-2.pgdg22.04+2_arm64.deb pgdg 2.19 82.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-15-hll_2.19-2.pgdg22.04+2_arm64.deb
@ u24.x86_64 15 postgresql-15-hll postgresql-15-hll_2.19-2.pgdg24.04+2_amd64.deb pgdg 2.19 76.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-15-hll_2.19-2.pgdg24.04+2_amd64.deb
@ u24.aarch64 15 postgresql-15-hll postgresql-15-hll_2.19-2.pgdg24.04+2_arm64.deb pgdg 2.19 75.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-15-hll_2.19-2.pgdg24.04+2_arm64.deb
@ el8.x86_64 14 hll_14 hll_14-2.18-1PGDG.rhel8.x86_64.rpm pgdg 2.18 42.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/hll_14-2.18-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 hll_14 hll_14-2.16-1.rhel8.x86_64.rpm pgdg 2.16 90.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/hll_14-2.16-1.rhel8.x86_64.rpm
@ el8.aarch64 14 hll_14 hll_14-2.18-1PGDG.rhel8.aarch64.rpm pgdg 2.18 41.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/hll_14-2.18-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 hll_14 hll_14-2.17-1.rhel8.aarch64.rpm pgdg 2.17 89.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/hll_14-2.17-1.rhel8.aarch64.rpm
@ el9.x86_64 14 hll_14 hll_14-2.18-1PGDG.rhel9.x86_64.rpm pgdg 2.18 41.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/hll_14-2.18-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 hll_14 hll_14-2.18-1PGDG.rhel9.aarch64.rpm pgdg 2.18 41.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/hll_14-2.18-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 hll_14 hll_14-2.17-1.rhel9.aarch64.rpm pgdg 2.17 90.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/hll_14-2.17-1.rhel9.aarch64.rpm
@ el10.x86_64 14 hll_14 hll_14-2.18-3PGDG.rhel10.x86_64.rpm pgdg 2.18 43.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/hll_14-2.18-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 hll_14 hll_14-2.18-3PGDG.rhel10.aarch64.rpm pgdg 2.18 42.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/hll_14-2.18-3PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-hll postgresql-14-hll_2.19-2.pgdg12+2_amd64.deb pgdg 2.19 77.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-14-hll_2.19-2.pgdg12+2_amd64.deb
@ d12.aarch64 14 postgresql-14-hll postgresql-14-hll_2.19-2.pgdg12+2_arm64.deb pgdg 2.19 75.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-14-hll_2.19-2.pgdg12+2_arm64.deb
@ d13.x86_64 14 postgresql-14-hll postgresql-14-hll_2.19-2.pgdg13+2_amd64.deb pgdg 2.19 76.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-14-hll_2.19-2.pgdg13+2_amd64.deb
@ d13.aarch64 14 postgresql-14-hll postgresql-14-hll_2.19-2.pgdg13+2_arm64.deb pgdg 2.19 75.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-14-hll_2.19-2.pgdg13+2_arm64.deb
@ u22.x86_64 14 postgresql-14-hll postgresql-14-hll_2.19-2.pgdg22.04+2_amd64.deb pgdg 2.19 83.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-14-hll_2.19-2.pgdg22.04+2_amd64.deb
@ u22.aarch64 14 postgresql-14-hll postgresql-14-hll_2.19-2.pgdg22.04+2_arm64.deb pgdg 2.19 82.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-14-hll_2.19-2.pgdg22.04+2_arm64.deb
@ u24.x86_64 14 postgresql-14-hll postgresql-14-hll_2.19-2.pgdg24.04+2_amd64.deb pgdg 2.19 76.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-14-hll_2.19-2.pgdg24.04+2_amd64.deb
@ u24.aarch64 14 postgresql-14-hll postgresql-14-hll_2.19-2.pgdg24.04+2_arm64.deb pgdg 2.19 75.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/postgresql-hll/postgresql-14-hll_2.19-2.pgdg24.04+2_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `hll` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install hll;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y hll -v 18  # PG 18
pig ext install -y hll -v 17  # PG 17
pig ext install -y hll -v 16  # PG 16
pig ext install -y hll -v 15  # PG 15
pig ext install -y hll -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y hll_18       # PG 18
dnf install -y hll_17       # PG 17
dnf install -y hll_16       # PG 16
dnf install -y hll_15       # PG 15
dnf install -y hll_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-hll   # PG 18
apt install -y postgresql-17-hll   # PG 17
apt install -y postgresql-16-hll   # PG 16
apt install -y postgresql-15-hll   # PG 15
apt install -y postgresql-14-hll   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION hll;
```




## 用法

> [hll: 用于存储 HyperLogLog 数据的类型](https://github.com/citusdata/postgresql-hll)

`hll` 扩展提供了 HyperLogLog 数据类型，用于概率性的去重计数。它能够高效地近似 `COUNT(DISTINCT)` 操作，支持可配置的精度，并支持集合合并操作，使预聚合数据可以无损合并。

### 数据类型

- **`hll`** -- HyperLogLog 累加器，参数：`hll(log2m, regwidth, expthresh, sparseon)`
- **`hll_hashval`** -- 用于插入 HLL 结构的哈希值类型

### 核心函数

| 函数 | 描述 |
|------|------|
| `hll_empty()` | 创建空的 HLL |
| `hll_add(hll, hll_hashval)` | 向 HLL 添加一个哈希值 |
| `hll_cardinality(hll)` | 估算去重计数 |
| `hll_union(hll, hll)` | 合并两个 HLL |
| `hll_add_agg(hll_hashval)` | 将哈希值聚合为单个 HLL |
| `hll_union_agg(hll)` | 将多个 HLL 合并为一个 |
| `hll_print(hll)` | 显示 HLL 参数和内容 |

### 哈希函数

| 函数 | 输入类型 |
|------|---------|
| `hll_hash_boolean(boolean [, seed])` | boolean |
| `hll_hash_smallint(smallint [, seed])` | smallint |
| `hll_hash_integer(integer [, seed])` | integer |
| `hll_hash_bigint(bigint [, seed])` | bigint |
| `hll_hash_bytea(bytea [, seed])` | bytea |
| `hll_hash_text(text [, seed])` | text |
| `hll_hash_any(any [, seed])` | any（动态分发，较慢） |

### 运算符

| 运算符 | 功能 | 示例 |
|--------|------|------|
| `\|\|` | `hll_add` / `hll_union` | `users \|\| hll_hash_integer(123)` |
| `#` | `hll_cardinality` | `#users` |

### 示例：每日唯一用户跟踪

```sql
-- 存储每日唯一用户计数
CREATE TABLE daily_uniques (
    date  date UNIQUE,
    users hll
);

-- 聚合每日数据
INSERT INTO daily_uniques(date, users)
    SELECT date, hll_add_agg(hll_hash_integer(user_id))
    FROM facts GROUP BY 1;

-- 每周独立用户数（合并操作无损）
SELECT hll_cardinality(hll_union_agg(users))
FROM daily_uniques
WHERE date >= '2012-01-02' AND date <= '2012-01-08';

-- 按月统计
SELECT EXTRACT(MONTH FROM date) AS month,
       #hll_union_agg(users) AS approx_uniques
FROM daily_uniques
WHERE date >= '2012-01-01' AND date < '2013-01-01'
GROUP BY 1;

-- 7 天滑动窗口
SELECT date, #hll_union_agg(users) OVER seven_days
FROM daily_uniques
WINDOW seven_days AS (ORDER BY date ASC ROWS 6 PRECEDING);
```

### 配置参数

- **`log2m`**（4--31）：寄存器数量的以 2 为底的对数。控制精度，相对误差为 +/-1.04/sqrt(2^log2m)。默认值：11。
- **`regwidth`**（1--8）：每个寄存器的位数。与 log2m 配合调整最大基数估算。默认值：5。
- **`expthresh`**（-1 到 18）：控制 EXPLICIT 到 SPARSE 的转换。`-1` 为自动模式，`0` 跳过 EXPLICIT。默认值：-1。
- **`sparseon`**（0 或 1）：启用/禁用 SPARSE 表示。默认值：1。

同一 HLL 的所有输入必须使用相同的哈希种子。需要进行合并操作的 HLL 必须使用相同种子的哈希值填充。
