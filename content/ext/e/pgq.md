---
title: "pgq"
linkTitle: "pgq"
description: "通用队列的PG实现"
weight: 2890
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgq/pgq">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgq/pgq</div>
    <div class="ext-card__desc">https://github.com/pgq/pgq</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgq`**](/ext/e/pgq) | `3.5.1` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2890  | [**`pgq`**](/ext/e/pgq) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`hypopg`](/ext/e/hypopg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.5.1` | {{< pgvers "18,17,16,15,14" >}} | `pgq` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.5.1` | {{< pgvers "18,17,16,15,14" >}} | `pgq_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.5.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgq3` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 2 | AVAIL PGDG 3.5.1 4 |
| el8.aarch64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 2 | AVAIL PGDG 3.5.1 2 |
| el9.x86_64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 2 | AVAIL PGDG 3.5.1 3 |
| el9.aarch64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 2 | AVAIL PGDG 3.5.1 2 |
| el10.x86_64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
| el10.aarch64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
| d12.x86_64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
| d12.aarch64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
| d13.x86_64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
| d13.aarch64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
| u22.x86_64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
| u22.aarch64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
| u24.x86_64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
| u24.aarch64 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 | AVAIL PGDG 3.5.1 1 |
@ el8.x86_64 18 pgq_18 pgq_18-3.5.1-4PGDG.rhel8.x86_64.rpm pgdg 3.5.1 54.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgq_18-3.5.1-4PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgq_18 pgq_18-3.5.1-4PGDG.rhel8.aarch64.rpm pgdg 3.5.1 53.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgq_18-3.5.1-4PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgq_18 pgq_18-3.5.1-4PGDG.rhel9.x86_64.rpm pgdg 3.5.1 51.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgq_18-3.5.1-4PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgq_18 pgq_18-3.5.1-4PGDG.rhel9.aarch64.rpm pgdg 3.5.1 51.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgq_18-3.5.1-4PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgq_18 pgq_18-3.5.1-4PGDG.rhel10.x86_64.rpm pgdg 3.5.1 52.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgq_18-3.5.1-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgq_18 pgq_18-3.5.1-4PGDG.rhel10.aarch64.rpm pgdg 3.5.1 52.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgq_18-3.5.1-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgq3 postgresql-18-pgq3_3.5.1-2.pgdg12+1_amd64.deb pgdg 3.5.1 123.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-18-pgq3_3.5.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-pgq3 postgresql-18-pgq3_3.5.1-2.pgdg12+1_arm64.deb pgdg 3.5.1 122.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-18-pgq3_3.5.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-pgq3 postgresql-18-pgq3_3.5.1-2.pgdg13+1_amd64.deb pgdg 3.5.1 123.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-18-pgq3_3.5.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-pgq3 postgresql-18-pgq3_3.5.1-2.pgdg13+1_arm64.deb pgdg 3.5.1 122.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-18-pgq3_3.5.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-pgq3 postgresql-18-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb pgdg 3.5.1 125.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-18-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-pgq3 postgresql-18-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb pgdg 3.5.1 124.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-18-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-pgq3 postgresql-18-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb pgdg 3.5.1 123.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-18-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-pgq3 postgresql-18-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb pgdg 3.5.1 122.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-18-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 17 pgq_17 pgq_17-3.5.1-3PGDG.rhel8.x86_64.rpm pgdg 3.5.1 54.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgq_17-3.5.1-3PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgq_17 pgq_17-3.5.1-3PGDG.rhel8.aarch64.rpm pgdg 3.5.1 53.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgq_17-3.5.1-3PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgq_17 pgq_17-3.5.1-3PGDG.rhel9.x86_64.rpm pgdg 3.5.1 51.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgq_17-3.5.1-3PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgq_17 pgq_17-3.5.1-3PGDG.rhel9.aarch64.rpm pgdg 3.5.1 51.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgq_17-3.5.1-3PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgq_17 pgq_17-3.5.1-4PGDG.rhel10.x86_64.rpm pgdg 3.5.1 52.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgq_17-3.5.1-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgq_17 pgq_17-3.5.1-4PGDG.rhel10.aarch64.rpm pgdg 3.5.1 52.1KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgq_17-3.5.1-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgq3 postgresql-17-pgq3_3.5.1-2.pgdg12+1_amd64.deb pgdg 3.5.1 123.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-17-pgq3_3.5.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 17 postgresql-17-pgq3 postgresql-17-pgq3_3.5.1-2.pgdg12+1_arm64.deb pgdg 3.5.1 122.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-17-pgq3_3.5.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 17 postgresql-17-pgq3 postgresql-17-pgq3_3.5.1-2.pgdg13+1_amd64.deb pgdg 3.5.1 123.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-17-pgq3_3.5.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-pgq3 postgresql-17-pgq3_3.5.1-2.pgdg13+1_arm64.deb pgdg 3.5.1 122.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-17-pgq3_3.5.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 17 postgresql-17-pgq3 postgresql-17-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb pgdg 3.5.1 145.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-17-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 17 postgresql-17-pgq3 postgresql-17-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb pgdg 3.5.1 143.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-17-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 17 postgresql-17-pgq3 postgresql-17-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb pgdg 3.5.1 123.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-17-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-pgq3 postgresql-17-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb pgdg 3.5.1 122.3KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-17-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 16 pgq_16 pgq_16-3.5.1-1PGDG.rhel8.x86_64.rpm pgdg 3.5.1 54.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgq_16-3.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pgq_16 pgq_16-3.5.1-1PGDG.rhel8.aarch64.rpm pgdg 3.5.1 55.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgq_16-3.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pgq_16 pgq_16-3.5.1-1PGDG.rhel9.x86_64.rpm pgdg 3.5.1 52.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgq_16-3.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pgq_16 pgq_16-3.5.1-1PGDG.rhel9.aarch64.rpm pgdg 3.5.1 52.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgq_16-3.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pgq_16 pgq_16-3.5.1-4PGDG.rhel10.x86_64.rpm pgdg 3.5.1 52.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgq_16-3.5.1-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgq_16 pgq_16-3.5.1-4PGDG.rhel10.aarch64.rpm pgdg 3.5.1 52.1KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgq_16-3.5.1-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgq3 postgresql-16-pgq3_3.5.1-2.pgdg12+1_amd64.deb pgdg 3.5.1 123.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-16-pgq3_3.5.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 16 postgresql-16-pgq3 postgresql-16-pgq3_3.5.1-2.pgdg12+1_arm64.deb pgdg 3.5.1 122.6KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-16-pgq3_3.5.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 16 postgresql-16-pgq3 postgresql-16-pgq3_3.5.1-2.pgdg13+1_amd64.deb pgdg 3.5.1 123.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-16-pgq3_3.5.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-pgq3 postgresql-16-pgq3_3.5.1-2.pgdg13+1_arm64.deb pgdg 3.5.1 122.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-16-pgq3_3.5.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-pgq3 postgresql-16-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb pgdg 3.5.1 143.7KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-16-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-pgq3 postgresql-16-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb pgdg 3.5.1 142.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-16-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-pgq3 postgresql-16-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb pgdg 3.5.1 123.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-16-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-pgq3 postgresql-16-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb pgdg 3.5.1 122.4KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-16-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 15 pgq_15 pgq_15-3.5.1-1PGDG.rhel8.x86_64.rpm pgdg 3.5.1 55.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgq_15-3.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgq_15 pgq_15-3.5-1.rhel8.x86_64.rpm pgdg 3.5 54.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgq_15-3.5-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgq_15 pgq_15-3.5.1-1PGDG.rhel8.aarch64.rpm pgdg 3.5.1 55.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgq_15-3.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgq_15 pgq_15-3.5-1.rhel8.aarch64.rpm pgdg 3.5 55.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgq_15-3.5-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgq_15 pgq_15-3.5.1-1PGDG.rhel9.x86_64.rpm pgdg 3.5.1 53.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgq_15-3.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgq_15 pgq_15-3.5-1.rhel9.x86_64.rpm pgdg 3.5 53.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgq_15-3.5-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgq_15 pgq_15-3.5.1-1PGDG.rhel9.aarch64.rpm pgdg 3.5.1 53.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgq_15-3.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgq_15 pgq_15-3.5-1.rhel9.aarch64.rpm pgdg 3.5 53.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgq_15-3.5-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgq_15 pgq_15-3.5.1-4PGDG.rhel10.x86_64.rpm pgdg 3.5.1 53.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgq_15-3.5.1-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgq_15 pgq_15-3.5.1-4PGDG.rhel10.aarch64.rpm pgdg 3.5.1 53.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgq_15-3.5.1-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgq3 postgresql-15-pgq3_3.5.1-2.pgdg12+1_amd64.deb pgdg 3.5.1 124.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-15-pgq3_3.5.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 15 postgresql-15-pgq3 postgresql-15-pgq3_3.5.1-2.pgdg12+1_arm64.deb pgdg 3.5.1 123.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-15-pgq3_3.5.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 15 postgresql-15-pgq3 postgresql-15-pgq3_3.5.1-2.pgdg13+1_amd64.deb pgdg 3.5.1 124.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-15-pgq3_3.5.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-pgq3 postgresql-15-pgq3_3.5.1-2.pgdg13+1_arm64.deb pgdg 3.5.1 123.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-15-pgq3_3.5.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-pgq3 postgresql-15-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb pgdg 3.5.1 144.2KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-15-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-pgq3 postgresql-15-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb pgdg 3.5.1 142.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-15-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-pgq3 postgresql-15-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb pgdg 3.5.1 124.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-15-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-pgq3 postgresql-15-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb pgdg 3.5.1 123.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-15-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb
@ el8.x86_64 14 pgq_14 pgq_14-3.5.1-1PGDG.rhel8.x86_64.rpm pgdg 3.5.1 55.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgq_14-3.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgq_14 pgq_14-3.5-1.rhel8.x86_64.rpm pgdg 3.5 54.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgq_14-3.5-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgq_14 pgq_14-3.4.2-1.rhel8.x86_64.rpm pgdg 3.4.2 54.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgq_14-3.4.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgq_14 pgq_14-3.4.1-2.rhel8.x86_64.rpm pgdg 3.4.1 108.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgq_14-3.4.1-2.rhel8.x86_64.rpm
@ el8.aarch64 14 pgq_14 pgq_14-3.5.1-1PGDG.rhel8.aarch64.rpm pgdg 3.5.1 55.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgq_14-3.5.1-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgq_14 pgq_14-3.5-1.rhel8.aarch64.rpm pgdg 3.5 55.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgq_14-3.5-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgq_14 pgq_14-3.5.1-1PGDG.rhel9.x86_64.rpm pgdg 3.5.1 53.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgq_14-3.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgq_14 pgq_14-3.5-1.rhel9.x86_64.rpm pgdg 3.5 53.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgq_14-3.5-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgq_14 pgq_14-3.4.2-1.rhel9.x86_64.rpm pgdg 3.4.2 107.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgq_14-3.4.2-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgq_14 pgq_14-3.5.1-1PGDG.rhel9.aarch64.rpm pgdg 3.5.1 53.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgq_14-3.5.1-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgq_14 pgq_14-3.5-1.rhel9.aarch64.rpm pgdg 3.5 53.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgq_14-3.5-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgq_14 pgq_14-3.5.1-4PGDG.rhel10.x86_64.rpm pgdg 3.5.1 53.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgq_14-3.5.1-4PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgq_14 pgq_14-3.5.1-4PGDG.rhel10.aarch64.rpm pgdg 3.5.1 52.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgq_14-3.5.1-4PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgq3 postgresql-14-pgq3_3.5.1-2.pgdg12+1_amd64.deb pgdg 3.5.1 124.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-14-pgq3_3.5.1-2.pgdg12+1_amd64.deb
@ d12.aarch64 14 postgresql-14-pgq3 postgresql-14-pgq3_3.5.1-2.pgdg12+1_arm64.deb pgdg 3.5.1 123.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-14-pgq3_3.5.1-2.pgdg12+1_arm64.deb
@ d13.x86_64 14 postgresql-14-pgq3 postgresql-14-pgq3_3.5.1-2.pgdg13+1_amd64.deb pgdg 3.5.1 124.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-14-pgq3_3.5.1-2.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-pgq3 postgresql-14-pgq3_3.5.1-2.pgdg13+1_arm64.deb pgdg 3.5.1 123.1KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-14-pgq3_3.5.1-2.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-pgq3 postgresql-14-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb pgdg 3.5.1 134.8KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-14-pgq3_3.5.1-2.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-pgq3 postgresql-14-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb pgdg 3.5.1 133.5KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-14-pgq3_3.5.1-2.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-pgq3 postgresql-14-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb pgdg 3.5.1 124.0KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-14-pgq3_3.5.1-2.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-pgq3 postgresql-14-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb pgdg 3.5.1 122.9KiB https://apt.postgresql.org/pub/repos/apt/pool/main/p/pgq/postgresql-14-pgq3_3.5.1-2.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgq` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgq;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgq -v 18  # PG 18
pig ext install -y pgq -v 17  # PG 17
pig ext install -y pgq -v 16  # PG 16
pig ext install -y pgq -v 15  # PG 15
pig ext install -y pgq -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgq_18       # PG 18
dnf install -y pgq_17       # PG 17
dnf install -y pgq_16       # PG 16
dnf install -y pgq_15       # PG 15
dnf install -y pgq_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgq3   # PG 18
apt install -y postgresql-17-pgq3   # PG 17
apt install -y postgresql-16-pgq3   # PG 16
apt install -y postgresql-15-pgq3   # PG 15
apt install -y postgresql-14-pgq3   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgq;
```
