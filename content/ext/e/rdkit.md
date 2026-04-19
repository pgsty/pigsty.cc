---
title: "rdkit"
linkTitle: "rdkit"
description: "在PostgreSQL化学领域数据管理功能"
weight: 2930
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rdkit/rdkit">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rdkit/rdkit</div>
    <div class="ext-card__desc">https://github.com/rdkit/rdkit</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/rdkit_202503.6.orig.tar.xz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">rdkit_202503.6.orig.tar.xz</div>
    <div class="ext-card__desc">rdkit_202503.6.orig.tar.xz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`rdkit`**](/ext/e/rdkit) | `202503.6` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2930  | [**`rdkit`**](/ext/e/rdkit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`hypopg`](/ext/e/hypopg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> d13/u24/el10 rdkit build by pigsty, u24/el10 deps on inchi 


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `202503.6` | {{< pgvers "18,17,16,15,14" >}} | `rdkit` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `202503.6` | {{< pgvers "18,17,16,15,14" >}} | `rdkit_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `202503.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-rdkit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 202503.6 1 | AVAIL PIGSTY 202503.6 1 | AVAIL PIGSTY 202503.6 1 | AVAIL PIGSTY 202503.6 1 | AVAIL PIGSTY 202503.6 1 |
| el10.aarch64 | AVAIL PIGSTY 202503.6 1 | AVAIL PIGSTY 202503.6 1 | AVAIL PIGSTY 202503.6 1 | AVAIL PIGSTY 202503.6 1 | AVAIL PIGSTY 202503.6 1 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 |
| d13.x86_64 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 |
| d13.aarch64 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 |
| u24.x86_64 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 |
| u24.aarch64 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 | AVAIL PIGSTY 202503.6 2 |
@ el10.x86_64 18 rdkit_18 rdkit_18-202503.6-1PIGSTY.el10.x86_64.rpm pigsty 202503.6 143.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdkit_18-202503.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 rdkit_18 rdkit_18-202503.6-1PIGSTY.el10.aarch64.rpm pigsty 202503.6 135.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdkit_18-202503.6-1PIGSTY.el10.aarch64.rpm
@ d13.x86_64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.6-4PIGSTY~trixie_amd64.deb pigsty 202503.6 102.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-18-rdkit_202503.6-4PIGSTY~trixie_amd64.deb
@ d13.x86_64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-18-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.6-4PIGSTY~trixie_arm64.deb pigsty 202503.6 94.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-18-rdkit_202503.6-4PIGSTY~trixie_arm64.deb
@ d13.aarch64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-18-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u24.x86_64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.6-4PIGSTY~noble_amd64.deb pigsty 202503.6 108.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-18-rdkit_202503.6-4PIGSTY~noble_amd64.deb
@ u24.x86_64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 243.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-18-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.6-4PIGSTY~noble_arm64.deb pigsty 202503.6 105.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-18-rdkit_202503.6-4PIGSTY~noble_arm64.deb
@ u24.aarch64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-18-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
@ el10.x86_64 17 rdkit_17 rdkit_17-202503.6-1PIGSTY.el10.x86_64.rpm pigsty 202503.6 143.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdkit_17-202503.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 rdkit_17 rdkit_17-202503.6-1PIGSTY.el10.aarch64.rpm pigsty 202503.6 135.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdkit_17-202503.6-1PIGSTY.el10.aarch64.rpm
@ d13.x86_64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.6-4PIGSTY~trixie_amd64.deb pigsty 202503.6 103.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-17-rdkit_202503.6-4PIGSTY~trixie_amd64.deb
@ d13.x86_64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-17-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.6-4PIGSTY~trixie_arm64.deb pigsty 202503.6 94.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-17-rdkit_202503.6-4PIGSTY~trixie_arm64.deb
@ d13.aarch64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-17-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u24.x86_64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.6-4PIGSTY~noble_amd64.deb pigsty 202503.6 108.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-17-rdkit_202503.6-4PIGSTY~noble_amd64.deb
@ u24.x86_64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 243.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-17-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.6-4PIGSTY~noble_arm64.deb pigsty 202503.6 105.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-17-rdkit_202503.6-4PIGSTY~noble_arm64.deb
@ u24.aarch64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-17-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
@ el10.x86_64 16 rdkit_16 rdkit_16-202503.6-1PIGSTY.el10.x86_64.rpm pigsty 202503.6 143.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdkit_16-202503.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 rdkit_16 rdkit_16-202503.6-1PIGSTY.el10.aarch64.rpm pigsty 202503.6 135.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdkit_16-202503.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202303.3-3.pgdg120+1_amd64.deb pgdg 202303.3 393.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202303.3-3.pgdg120+1_amd64.deb
@ d12.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202303.3-3.pgdg120+1_arm64.deb pgdg 202303.3 384.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202303.3-3.pgdg120+1_arm64.deb
@ d13.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.6-4PIGSTY~trixie_amd64.deb pigsty 202503.6 102.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-16-rdkit_202503.6-4PIGSTY~trixie_amd64.deb
@ d13.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.6-4PIGSTY~trixie_arm64.deb pigsty 202503.6 94.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-16-rdkit_202503.6-4PIGSTY~trixie_arm64.deb
@ d13.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202303.3-3.pgdg22.04+1_amd64.deb pgdg 202303.3 395.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202303.3-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202303.3-3.pgdg22.04+1_arm64.deb pgdg 202303.3 387.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202303.3-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.6-4PIGSTY~noble_amd64.deb pigsty 202503.6 108.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-16-rdkit_202503.6-4PIGSTY~noble_amd64.deb
@ u24.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 243.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.6-4PIGSTY~noble_arm64.deb pigsty 202503.6 105.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-16-rdkit_202503.6-4PIGSTY~noble_arm64.deb
@ u24.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
@ el10.x86_64 15 rdkit_15 rdkit_15-202503.6-1PIGSTY.el10.x86_64.rpm pigsty 202503.6 143.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdkit_15-202503.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 rdkit_15 rdkit_15-202503.6-1PIGSTY.el10.aarch64.rpm pigsty 202503.6 135.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdkit_15-202503.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202303.3-3.pgdg120+1_amd64.deb pgdg 202303.3 394.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202303.3-3.pgdg120+1_amd64.deb
@ d12.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202303.3-3.pgdg120+1_arm64.deb pgdg 202303.3 385.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202303.3-3.pgdg120+1_arm64.deb
@ d13.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.6-4PIGSTY~trixie_amd64.deb pigsty 202503.6 103.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-15-rdkit_202503.6-4PIGSTY~trixie_amd64.deb
@ d13.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.6-4PIGSTY~trixie_arm64.deb pigsty 202503.6 94.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-15-rdkit_202503.6-4PIGSTY~trixie_arm64.deb
@ d13.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202303.3-3.pgdg22.04+1_amd64.deb pgdg 202303.3 395.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202303.3-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202303.3-3.pgdg22.04+1_arm64.deb pgdg 202303.3 387.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202303.3-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.6-4PIGSTY~noble_amd64.deb pigsty 202503.6 108.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-15-rdkit_202503.6-4PIGSTY~noble_amd64.deb
@ u24.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 243.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.6-4PIGSTY~noble_arm64.deb pigsty 202503.6 105.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-15-rdkit_202503.6-4PIGSTY~noble_arm64.deb
@ u24.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
@ el10.x86_64 14 rdkit_14 rdkit_14-202503.6-1PIGSTY.el10.x86_64.rpm pigsty 202503.6 143.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdkit_14-202503.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 rdkit_14 rdkit_14-202503.6-1PIGSTY.el10.aarch64.rpm pigsty 202503.6 135.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdkit_14-202503.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202303.3-3.pgdg120+1_amd64.deb pgdg 202303.3 394.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202303.3-3.pgdg120+1_amd64.deb
@ d12.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202303.3-3.pgdg120+1_arm64.deb pgdg 202303.3 385.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202303.3-3.pgdg120+1_arm64.deb
@ d13.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.6-4PIGSTY~trixie_amd64.deb pigsty 202503.6 102.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-14-rdkit_202503.6-4PIGSTY~trixie_amd64.deb
@ d13.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.6-4PIGSTY~trixie_arm64.deb pigsty 202503.6 94.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdkit/postgresql-14-rdkit_202503.6-4PIGSTY~trixie_arm64.deb
@ d13.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202303.3-3.pgdg22.04+1_amd64.deb pgdg 202303.3 395.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202303.3-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202303.3-3.pgdg22.04+1_arm64.deb pgdg 202303.3 387.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202303.3-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.6-4PIGSTY~noble_amd64.deb pigsty 202503.6 108.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-14-rdkit_202503.6-4PIGSTY~noble_amd64.deb
@ u24.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 242.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.6-4PIGSTY~noble_arm64.deb pigsty 202503.6 105.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdkit/postgresql-14-rdkit_202503.6-4PIGSTY~noble_arm64.deb
@ u24.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `rdkit` 扩展的 RPM / DEB 包：

```bash
pig build pkg rdkit         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `rdkit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install rdkit;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y rdkit -v 18  # PG 18
pig ext install -y rdkit -v 17  # PG 17
pig ext install -y rdkit -v 16  # PG 16
pig ext install -y rdkit -v 15  # PG 15
pig ext install -y rdkit -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y rdkit_18       # PG 18
dnf install -y rdkit_17       # PG 17
dnf install -y rdkit_16       # PG 16
dnf install -y rdkit_15       # PG 15
dnf install -y rdkit_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-rdkit   # PG 18
apt install -y postgresql-17-rdkit   # PG 17
apt install -y postgresql-16-rdkit   # PG 16
apt install -y postgresql-15-rdkit   # PG 15
apt install -y postgresql-14-rdkit   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION rdkit;
```

## 用法

- 来源：[project README](https://github.com/rdkit/rdkit/blob/master/README.md)，[cartridge docs](https://www.rdkit.org/docs/Cartridge.html)，[2025.03.6 release](https://github.com/rdkit/rdkit/releases/tag/Release_2025.03.6)

RDKit 自带 PostgreSQL cartridge，用于化学信息学场景下的分子存储、检索、指纹和描述符计算。cartridge docs 仍然是主要的上游用法参考；2025.03.6 release note 没有提到 cartridge 相关的用户侧变化。

### 创建扩展

```sql
CREATE EXTENSION rdkit;
```

该 cartridge 会增加 `mol`、`bfp` 和 `sfp` 等化学类型。

### 核心搜索操作符

cartridge 文档覆盖了以下内容：

- `@>` 和 `<@`：用于子结构匹配。
- `@=`：用于分子精确相等判断。
- `%`、`<%>` 和 `<#>` 这一类指纹相似度与 KNN 操作符：用于相似性搜索。

这些操作通常会和建在指纹列上的 GiST 索引一起使用。

### 指纹与相似度

文档中常见的 SQL 指纹函数包括 `morgan_fp`、`morganbv_fp`、`featmorgan_fp`、`rdkit_fp`、`atompair_fp`、`torsion_fp`、`layered_fp` 和 `maccs_fp`。

cartridge docs 中的示例：

```sql
SELECT tanimoto_sml(
  morganbv_fp('c1ccccc1'::mol),
  morganbv_fp('c1ccccc1O'::mol)
);
```

### 描述符与校验

cartridge docs 还公开了校验与描述符辅助函数，例如：

- `is_valid_smiles()`
- `is_valid_ctab()`
- `is_valid_smarts()`
- `mol_amw()`
- `mol_hba()`
- `mol_numrings()`

这些函数构成了 SQL 层面对分子结构做分析时最主要的用户接口。
