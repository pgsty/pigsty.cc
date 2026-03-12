---
title: "tdigest"
linkTitle: "tdigest"
description: "tdigest 聚合函数"
weight: 4700
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tvondra/tdigest">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tvondra/tdigest</div>
    <div class="ext-card__desc">https://github.com/tvondra/tdigest</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`tdigest`**](/ext/e/tdigest) | `1.4.3` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4700  | [**`tdigest`**](/ext/e/tdigest) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) [`lower_quantile`](/ext/e/lower_quantile) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.3` | {{< pgvers "18,17,16,15,14" >}} | `tdigest` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.2` | {{< pgvers "18,17,16,15,14" >}} | `tdigest_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.4.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-tdigest` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 2 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| el8.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 2 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| el9.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 2 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| el9.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 2 | AVAIL PGDG 1.4.1 1 | AVAIL PGDG 1.4.1 2 | AVAIL PGDG 1.4.1 2 |
| el10.x86_64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| el10.aarch64 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 | AVAIL PGDG 1.4.2 1 |
| d12.x86_64 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 |
| d12.aarch64 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 |
| d13.x86_64 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 |
| d13.aarch64 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 |
| u22.x86_64 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 |
| u22.aarch64 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 |
| u24.x86_64 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 |
| u24.aarch64 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 | AVAIL PGDG 1.4.3 1 |
@ el8.x86_64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel8.x86_64.rpm pgdg 1.4.2 33.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/tdigest_18-1.4.2-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel8.aarch64.rpm pgdg 1.4.2 32.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/tdigest_18-1.4.2-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel9.x86_64.rpm pgdg 1.4.2 33.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/tdigest_18-1.4.2-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel9.aarch64.rpm pgdg 1.4.2 32.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/tdigest_18-1.4.2-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/tdigest_18-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 tdigest_18 tdigest_18-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/tdigest_18-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.3-2.pgdg12+1_amd64.deb pgdg 1.4.3 57.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.3-2.pgdg12+1_arm64.deb pgdg 1.4.3 56.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.3-2.pgdg13+1_amd64.deb pgdg 1.4.3 57.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.3-2.pgdg13+1_arm64.deb pgdg 1.4.3 56.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb pgdg 1.4.3 58.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb pgdg 1.4.3 57.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb pgdg 1.4.3 57.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-tdigest postgresql-18-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb pgdg 1.4.3 56.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-18-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 tdigest_17 tdigest_17-1.4.2-1PGDG.rhel8.x86_64.rpm pgdg 1.4.2 33.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/tdigest_17-1.4.2-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 tdigest_17 tdigest_17-1.4.1-3PGDG.rhel8.x86_64.rpm pgdg 1.4.1 33.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/tdigest_17-1.4.1-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 tdigest_17 tdigest_17-1.4.2-1PGDG.rhel8.aarch64.rpm pgdg 1.4.2 32.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/tdigest_17-1.4.2-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 tdigest_17 tdigest_17-1.4.1-3PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/tdigest_17-1.4.1-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 tdigest_17 tdigest_17-1.4.2-1PGDG.rhel9.x86_64.rpm pgdg 1.4.2 33.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/tdigest_17-1.4.2-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 tdigest_17 tdigest_17-1.4.1-3PGDG.rhel9.x86_64.rpm pgdg 1.4.1 33.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/tdigest_17-1.4.1-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 tdigest_17 tdigest_17-1.4.2-1PGDG.rhel9.aarch64.rpm pgdg 1.4.2 32.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/tdigest_17-1.4.2-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 tdigest_17 tdigest_17-1.4.1-3PGDG.rhel9.aarch64.rpm pgdg 1.4.1 32.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/tdigest_17-1.4.1-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 tdigest_17 tdigest_17-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/tdigest_17-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 tdigest_17 tdigest_17-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/tdigest_17-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.3-2.pgdg12+1_amd64.deb pgdg 1.4.3 57.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.3-2.pgdg12+1_arm64.deb pgdg 1.4.3 56.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.3-2.pgdg13+1_amd64.deb pgdg 1.4.3 57.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.3-2.pgdg13+1_arm64.deb pgdg 1.4.3 57.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb pgdg 1.4.3 60.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb pgdg 1.4.3 59.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb pgdg 1.4.3 57.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-tdigest postgresql-17-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb pgdg 1.4.3 56.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-17-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 tdigest_16 tdigest_16-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 33.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/tdigest_16-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 tdigest_16 tdigest_16-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/tdigest_16-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 tdigest_16 tdigest_16-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 33.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/tdigest_16-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 tdigest_16 tdigest_16-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 31.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/tdigest_16-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 tdigest_16 tdigest_16-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/tdigest_16-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 tdigest_16 tdigest_16-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/tdigest_16-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.3-2.pgdg12+1_amd64.deb pgdg 1.4.3 57.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.3-2.pgdg12+1_arm64.deb pgdg 1.4.3 56.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.3-2.pgdg13+1_amd64.deb pgdg 1.4.3 57.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.3-2.pgdg13+1_arm64.deb pgdg 1.4.3 57.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb pgdg 1.4.3 60.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb pgdg 1.4.3 59.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb pgdg 1.4.3 57.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-tdigest postgresql-16-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb pgdg 1.4.3 56.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-16-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 tdigest_15 tdigest_15-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 33.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/tdigest_15-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 tdigest_15 tdigest_15-1.4.0-1.rhel8.x86_64.rpm pgdg 1.4.0 70.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/tdigest_15-1.4.0-1.rhel8.x86_64.rpm
@ el8.aarch64 15 tdigest_15 tdigest_15-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/tdigest_15-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 tdigest_15 tdigest_15-1.4.0-1.rhel8.aarch64.rpm pgdg 1.4.0 68.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/tdigest_15-1.4.0-1.rhel8.aarch64.rpm
@ el9.x86_64 15 tdigest_15 tdigest_15-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 33.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/tdigest_15-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 tdigest_15 tdigest_15-1.4.0-1.rhel9.x86_64.rpm pgdg 1.4.0 72.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/tdigest_15-1.4.0-1.rhel9.x86_64.rpm
@ el9.aarch64 15 tdigest_15 tdigest_15-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 31.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/tdigest_15-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 tdigest_15 tdigest_15-1.4.0-1.rhel9.aarch64.rpm pgdg 1.4.0 70.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/tdigest_15-1.4.0-1.rhel9.aarch64.rpm
@ el10.x86_64 15 tdigest_15 tdigest_15-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/tdigest_15-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 tdigest_15 tdigest_15-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/tdigest_15-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.3-2.pgdg12+1_amd64.deb pgdg 1.4.3 57.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.3-2.pgdg12+1_arm64.deb pgdg 1.4.3 56.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.3-2.pgdg13+1_amd64.deb pgdg 1.4.3 57.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.3-2.pgdg13+1_arm64.deb pgdg 1.4.3 57.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb pgdg 1.4.3 60.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb pgdg 1.4.3 59.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb pgdg 1.4.3 57.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-tdigest postgresql-15-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb pgdg 1.4.3 56.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-15-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 tdigest_14 tdigest_14-1.4.1-1PGDG.rhel8.x86_64.rpm pgdg 1.4.1 33.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/tdigest_14-1.4.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 tdigest_14 tdigest_14-1.2.0-2.rhel8.x86_64.rpm pgdg 1.2.0 60.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/tdigest_14-1.2.0-2.rhel8.x86_64.rpm
@ el8.aarch64 14 tdigest_14 tdigest_14-1.4.1-1PGDG.rhel8.aarch64.rpm pgdg 1.4.1 31.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/tdigest_14-1.4.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 tdigest_14 tdigest_14-1.4.0-1.rhel8.aarch64.rpm pgdg 1.4.0 68.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/tdigest_14-1.4.0-1.rhel8.aarch64.rpm
@ el9.x86_64 14 tdigest_14 tdigest_14-1.4.1-1PGDG.rhel9.x86_64.rpm pgdg 1.4.1 33.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/tdigest_14-1.4.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 tdigest_14 tdigest_14-1.4.0-1.rhel9.x86_64.rpm pgdg 1.4.0 72.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/tdigest_14-1.4.0-1.rhel9.x86_64.rpm
@ el9.aarch64 14 tdigest_14 tdigest_14-1.4.1-1PGDG.rhel9.aarch64.rpm pgdg 1.4.1 31.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/tdigest_14-1.4.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 tdigest_14 tdigest_14-1.4.0-1.rhel9.aarch64.rpm pgdg 1.4.0 70.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/tdigest_14-1.4.0-1.rhel9.aarch64.rpm
@ el10.x86_64 14 tdigest_14 tdigest_14-1.4.2-2PGDG.rhel10.x86_64.rpm pgdg 1.4.2 33.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/tdigest_14-1.4.2-2PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 tdigest_14 tdigest_14-1.4.2-2PGDG.rhel10.aarch64.rpm pgdg 1.4.2 33.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/tdigest_14-1.4.2-2PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.3-2.pgdg12+1_amd64.deb pgdg 1.4.3 57.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.3-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.3-2.pgdg12+1_arm64.deb pgdg 1.4.3 56.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.3-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.3-2.pgdg13+1_amd64.deb pgdg 1.4.3 57.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.3-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.3-2.pgdg13+1_arm64.deb pgdg 1.4.3 56.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.3-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb pgdg 1.4.3 60.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.3-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb pgdg 1.4.3 59.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.3-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb pgdg 1.4.3 57.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.3-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-tdigest postgresql-14-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb pgdg 1.4.3 56.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/t/tdigest/postgresql-14-tdigest_1.4.3-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `tdigest` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install tdigest;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y tdigest -v 18  # PG 18
pig ext install -y tdigest -v 17  # PG 17
pig ext install -y tdigest -v 16  # PG 16
pig ext install -y tdigest -v 15  # PG 15
pig ext install -y tdigest -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y tdigest_18       # PG 18
dnf install -y tdigest_17       # PG 17
dnf install -y tdigest_16       # PG 16
dnf install -y tdigest_15       # PG 15
dnf install -y tdigest_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-tdigest   # PG 18
apt install -y postgresql-17-tdigest   # PG 17
apt install -y postgresql-16-tdigest   # PG 16
apt install -y postgresql-15-tdigest   # PG 15
apt install -y postgresql-14-tdigest   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION tdigest;
```



## 用法

> [tdigest: PostgreSQL 的 t-digest 百分位估算](https://github.com/tvondra/tdigest)

实现 t-digest 算法，用于在线累积基于排名的统计量，如分位数和截尾均值。比 `percentile_cont` 快得多，支持并行处理，并允许预聚合。

```sql
CREATE EXTENSION tdigest;
```

### 直接聚合函数

| 函数 | 说明 |
|---|---|
| `tdigest_percentile(value, compression, quantile)` | 估算单个百分位数 |
| `tdigest_percentile(value, compression, quantiles[])` | 估算多个百分位数 |
| `tdigest_percentile_of(value, compression, value)` | 估算某个值的百分位排名 |
| `tdigest_percentile_of(value, compression, values[])` | 估算多个值的百分位排名 |

### 预聚合函数

| 函数 | 说明 |
|---|---|
| `tdigest(value, compression)` | 从数据值构建 t-digest |
| `tdigest_percentile(digest, quantile)` | 从预构建的摘要中估算百分位数 |
| `tdigest_percentile(digest, quantiles[])` | 从预构建的摘要中估算多个百分位数 |

### 增量更新函数

| 函数 | 说明 |
|---|---|
| `tdigest_add(digest, value)` | 向现有摘要中添加单个值 |
| `tdigest_add(digest, values[])` | 向现有摘要中添加一组值 |
| `tdigest_union(digest, digest)` | 合并两个摘要 |

### 工具函数

| 函数 | 说明 |
|---|---|
| `tdigest_count(digest)` | 返回摘要中的元素数量 |
| `tdigest_sum(digest, low, high)` | 指定值范围内的截尾求和 |
| `tdigest_avg(digest, low, high)` | 指定值范围内的截尾均值 |

### 参数

- `compression` -- 控制精度（值越大越精确，摘要越大）。误差大约为 `1/compression`。

### 示例

```sql
-- 替代: SELECT percentile_cont(0.95) WITHIN GROUP (ORDER BY a) FROM t;
SELECT tdigest_percentile(a, 100, 0.95) FROM t;

-- 多个百分位数
SELECT tdigest_percentile(a, 100, ARRAY[0.5, 0.95, 0.99]) FROM t;

-- 预聚合以实现快速重复查询
CREATE TABLE p AS SELECT a, b, tdigest(c, 100) AS d FROM t GROUP BY a, b;

-- 查询预聚合数据（约 1.5ms vs 精确计算约 7s）
SELECT a, tdigest_percentile(d, 0.95) FROM p GROUP BY a ORDER BY a;
```
