---
title: "pg_csv"
linkTitle: "pg_csv"
description: "灵活的CSV聚合处理函数"
weight: 4760
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/PostgREST/pg_csv">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">PostgREST/pg_csv</div>
    <div class="ext-card__desc">https://github.com/PostgREST/pg_csv</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_csv-1.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_csv-1.0.1.tar.gz</div>
    <div class="ext-card__desc">pg_csv-1.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_csv`**](/ext/e/pg_csv) | `1.0.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4760  | [**`pg_csv`**](/ext/e/pg_csv) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`aggs_for_vecs`](/ext/e/aggs_for_vecs) [`first_last_agg`](/ext/e/first_last_agg) [`arraymath`](/ext/e/arraymath) [`intarray`](/ext/e/intarray) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_csv` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_csv_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-csv` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 |
| el8.aarch64 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 |
| el9.x86_64 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 |
| el9.aarch64 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 |
| el10.x86_64 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 |
| el10.aarch64 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 | AVAIL PGDG 1.0.1 1 |
| d12.x86_64 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 |
| d12.aarch64 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 |
| d13.x86_64 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 |
| d13.aarch64 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 |
| u22.x86_64 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 |
| u22.aarch64 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 |
| u24.x86_64 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 |
| u24.aarch64 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 | AVAIL PGDG 1.0.2 3 |
| u26.x86_64 | AVAIL PGDG 1.0.2 2 | AVAIL PGDG 1.0.2 2 | AVAIL PGDG 1.0.2 2 | AVAIL PGDG 1.0.2 2 | AVAIL PGDG 1.0.2 2 |
| u26.aarch64 | AVAIL PGDG 1.0.2 2 | AVAIL PGDG 1.0.2 2 | AVAIL PGDG 1.0.2 2 | AVAIL PGDG 1.0.2 2 | AVAIL PGDG 1.0.2 2 |
@ el8.x86_64 18 pg_csv_18 pg_csv_18-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 14.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_csv_18-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_csv_18 pg_csv_18-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 14.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_csv_18-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_csv_18 pg_csv_18-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 14.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_csv_18-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_csv_18 pg_csv_18-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 13.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_csv_18-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_csv_18 pg_csv_18-1.0.1-1PGDG.rhel10.x86_64.rpm pgdg 1.0.1 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_csv_18-1.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_csv_18 pg_csv_18-1.0.1-1PGDG.rhel10.aarch64.rpm pgdg 1.0.1 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_csv_18-1.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg12+1_amd64.deb pgdg 1.0.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg12+1_amd64.deb pgdg 1.0.1 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 16.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg12+1_arm64.deb pgdg 1.0.2 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg12+1_arm64.deb pgdg 1.0.1 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 16.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg13+1_amd64.deb pgdg 1.0.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg13+1_amd64.deb pgdg 1.0.1 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 16.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg13+1_arm64.deb pgdg 1.0.2 17.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg13+1_arm64.deb pgdg 1.0.1 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb pgdg 1.0.2 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb pgdg 1.0.1 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb pgdg 1.0.2 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb pgdg 1.0.1 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 16.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb pgdg 1.0.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb pgdg 1.0.1 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 16.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb pgdg 1.0.2 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb pgdg 1.0.1 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 16.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb pgdg 1.0.2 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb pgdg 1.0.1 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb pgdg 1.0.2 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-pg-csv postgresql-18-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb pgdg 1.0.1 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-18-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 17 pg_csv_17 pg_csv_17-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 14.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pg_csv_17-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_csv_17 pg_csv_17-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 14.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pg_csv_17-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_csv_17 pg_csv_17-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 14.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pg_csv_17-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_csv_17 pg_csv_17-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 13.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pg_csv_17-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_csv_17 pg_csv_17-1.0.1-1PGDG.rhel10.x86_64.rpm pgdg 1.0.1 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pg_csv_17-1.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_csv_17 pg_csv_17-1.0.1-1PGDG.rhel10.aarch64.rpm pgdg 1.0.1 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pg_csv_17-1.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg12+1_amd64.deb pgdg 1.0.2 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg12+1_amd64.deb pgdg 1.0.1 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 16.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg12+1_arm64.deb pgdg 1.0.2 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg12+1_arm64.deb pgdg 1.0.1 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 15.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg13+1_amd64.deb pgdg 1.0.2 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg13+1_amd64.deb pgdg 1.0.1 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 16.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg13+1_arm64.deb pgdg 1.0.2 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg13+1_arm64.deb pgdg 1.0.1 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 16.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb pgdg 1.0.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb pgdg 1.0.1 18.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 17.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb pgdg 1.0.2 17.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb pgdg 1.0.1 17.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 17.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb pgdg 1.0.2 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb pgdg 1.0.1 17.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb pgdg 1.0.2 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb pgdg 1.0.1 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 16.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb pgdg 1.0.2 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb pgdg 1.0.1 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb pgdg 1.0.2 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 17 postgresql-17-pg-csv postgresql-17-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb pgdg 1.0.1 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-17-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 16 pg_csv_16 pg_csv_16-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 14.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pg_csv_16-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_csv_16 pg_csv_16-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 14.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pg_csv_16-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_csv_16 pg_csv_16-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 14.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pg_csv_16-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_csv_16 pg_csv_16-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 13.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pg_csv_16-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_csv_16 pg_csv_16-1.0.1-1PGDG.rhel10.x86_64.rpm pgdg 1.0.1 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pg_csv_16-1.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_csv_16 pg_csv_16-1.0.1-1PGDG.rhel10.aarch64.rpm pgdg 1.0.1 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pg_csv_16-1.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg12+1_amd64.deb pgdg 1.0.2 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg12+1_amd64.deb pgdg 1.0.1 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 16.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg12+1_arm64.deb pgdg 1.0.2 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg12+1_arm64.deb pgdg 1.0.1 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 15.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg13+1_amd64.deb pgdg 1.0.2 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg13+1_amd64.deb pgdg 1.0.1 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 16.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg13+1_arm64.deb pgdg 1.0.2 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg13+1_arm64.deb pgdg 1.0.1 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 16.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb pgdg 1.0.2 18.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb pgdg 1.0.1 18.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 17.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb pgdg 1.0.2 17.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb pgdg 1.0.1 17.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 17.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb pgdg 1.0.2 17.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb pgdg 1.0.1 17.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 16.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb pgdg 1.0.2 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb pgdg 1.0.1 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 16.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb pgdg 1.0.2 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb pgdg 1.0.1 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb pgdg 1.0.2 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 16 postgresql-16-pg-csv postgresql-16-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb pgdg 1.0.1 16.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-16-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 15 pg_csv_15 pg_csv_15-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pg_csv_15-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_csv_15 pg_csv_15-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 14.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pg_csv_15-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_csv_15 pg_csv_15-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 14.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pg_csv_15-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_csv_15 pg_csv_15-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 14.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pg_csv_15-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_csv_15 pg_csv_15-1.0.1-1PGDG.rhel10.x86_64.rpm pgdg 1.0.1 14.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pg_csv_15-1.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_csv_15 pg_csv_15-1.0.1-1PGDG.rhel10.aarch64.rpm pgdg 1.0.1 15.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pg_csv_15-1.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg12+1_amd64.deb pgdg 1.0.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg12+1_amd64.deb pgdg 1.0.1 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 16.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg12+1_arm64.deb pgdg 1.0.2 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg12+1_arm64.deb pgdg 1.0.1 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 16.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg13+1_amd64.deb pgdg 1.0.2 17.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg13+1_amd64.deb pgdg 1.0.1 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 16.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg13+1_arm64.deb pgdg 1.0.2 17.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg13+1_arm64.deb pgdg 1.0.1 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 16.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb pgdg 1.0.2 18.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb pgdg 1.0.1 18.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb pgdg 1.0.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb pgdg 1.0.1 18.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 17.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb pgdg 1.0.2 17.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb pgdg 1.0.1 17.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 16.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb pgdg 1.0.2 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb pgdg 1.0.1 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb pgdg 1.0.2 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb pgdg 1.0.1 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb pgdg 1.0.2 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 15 postgresql-15-pg-csv postgresql-15-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb pgdg 1.0.1 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-15-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb
@ el8.x86_64 14 pg_csv_14 pg_csv_14-1.0.1-1PGDG.rhel8.x86_64.rpm pgdg 1.0.1 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pg_csv_14-1.0.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_csv_14 pg_csv_14-1.0.1-1PGDG.rhel8.aarch64.rpm pgdg 1.0.1 14.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pg_csv_14-1.0.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_csv_14 pg_csv_14-1.0.1-1PGDG.rhel9.x86_64.rpm pgdg 1.0.1 14.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pg_csv_14-1.0.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_csv_14 pg_csv_14-1.0.1-1PGDG.rhel9.aarch64.rpm pgdg 1.0.1 14.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pg_csv_14-1.0.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_csv_14 pg_csv_14-1.0.1-1PGDG.rhel10.x86_64.rpm pgdg 1.0.1 14.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pg_csv_14-1.0.1-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_csv_14 pg_csv_14-1.0.1-1PGDG.rhel10.aarch64.rpm pgdg 1.0.1 14.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pg_csv_14-1.0.1-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg12+1_amd64.deb pgdg 1.0.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg12+1_amd64.deb pgdg 1.0.1 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg12+1_amd64.deb
@ d12.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 16.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg12+1_arm64.deb pgdg 1.0.2 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg12+1_arm64.deb pgdg 1.0.1 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg12+1_arm64.deb
@ d12.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 16.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg13+1_amd64.deb pgdg 1.0.2 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg13+1_amd64.deb pgdg 1.0.1 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg13+1_amd64.deb
@ d13.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 16.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg13+1_arm64.deb pgdg 1.0.2 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg13+1_arm64.deb pgdg 1.0.1 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg13+1_arm64.deb
@ d13.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 16.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb pgdg 1.0.2 18.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb pgdg 1.0.1 18.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg22.04+1_amd64.deb
@ u22.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 17.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb pgdg 1.0.2 18.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb pgdg 1.0.1 18.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg22.04+1_arm64.deb
@ u22.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 17.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb pgdg 1.0.2 17.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb pgdg 1.0.1 17.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg24.04+1_amd64.deb
@ u24.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 16.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb pgdg 1.0.2 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb pgdg 1.0.1 17.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg24.04+1_arm64.deb
@ u24.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 16.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb pgdg 1.0.2 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg26.04+1_amd64.deb
@ u26.x86_64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb pgdg 1.0.1 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb pgdg 1.0.2 17.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.2-1.pgdg26.04+1_arm64.deb
@ u26.aarch64 14 postgresql-14-pg-csv postgresql-14-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb pgdg 1.0.1 16.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-csv/postgresql-14-pg-csv_1.0.1-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_csv` 扩展的 DEB 包：

```bash
pig build pkg pg_csv         # 构建 DEB 包
```


## 安装

您可以直接安装 `pg_csv` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_csv;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_csv -v 18  # PG 18
pig ext install -y pg_csv -v 17  # PG 17
pig ext install -y pg_csv -v 16  # PG 16
pig ext install -y pg_csv -v 15  # PG 15
pig ext install -y pg_csv -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_csv_18       # PG 18
dnf install -y pg_csv_17       # PG 17
dnf install -y pg_csv_16       # PG 16
dnf install -y pg_csv_15       # PG 15
dnf install -y pg_csv_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-csv   # PG 18
apt install -y postgresql-17-pg-csv   # PG 17
apt install -y postgresql-16-pg-csv   # PG 16
apt install -y postgresql-15-pg-csv   # PG 15
apt install -y postgresql-14-pg-csv   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_csv;
```



## 用法

> [pg_csv: 灵活的 CSV 处理聚合函数](https://github.com/PostgREST/pg_csv)

提供 CSV 聚合函数，可与 SQL 表达式组合使用，不同于需要特殊协议的 COPY 命令。符合 RFC 4180 标准，正确处理引号。

```sql
CREATE EXTENSION pg_csv;
```

### 函数

| 函数 | 说明 |
|---|---|
| `csv_agg(record)` | 将行聚合为带表头的 CSV 文本 |
| `csv_agg(record, csv_options(...))` | 使用自定义选项进行聚合 |
| `csv_options(delimiter, bom, header, nullstr)` | 配置 CSV 输出选项 |

### 示例

```sql
CREATE TABLE projects AS SELECT * FROM (VALUES
  (1, 'Death Star OS', 1),
  (2, 'Windows 95 Rebooted', 1),
  (3, 'Project "Comma,Please"', 2)
) AS _(id, name, client_id);

-- 基本 CSV 输出
SELECT csv_agg(x) FROM projects x;
-- id,name,client_id
-- 1,Death Star OS,1
-- 2,Windows 95 Rebooted,1
-- 3,"Project ""Comma,Please""",2

-- 管道符分隔
SELECT csv_agg(x, csv_options(delimiter := '|')) FROM projects x;

-- 制表符分隔
SELECT csv_agg(x, csv_options(delimiter := E'\t')) FROM projects x;

-- 添加 BOM 以兼容 Excel
SELECT csv_agg(x, csv_options(bom := true)) FROM projects x;
```
