---
title: "rdf_fdw"
linkTitle: "rdf_fdw"
description: "通过 SPARQL 端点访问 RDF 三元组存储的 FDW"
weight: 8760
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/jimjonesbr/rdf_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">jimjonesbr/rdf_fdw</div>
    <div class="ext-card__desc">https://github.com/jimjonesbr/rdf_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/rdf_fdw-2.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">rdf_fdw-2.5.0.tar.gz</div>
    <div class="ext-card__desc">rdf_fdw-2.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`rdf_fdw`**](/ext/e/rdf_fdw) | `2.5.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8760  | [**`rdf_fdw`**](/ext/e/rdf_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`postgres_fdw`](/ext/e/postgres_fdw) [`sparql`](/ext/e/sparql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `rdf_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `rdf_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-rdf-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 | AVAIL PIGSTY 2.5.0 1 |
@ el8.x86_64 18 rdf_fdw_18 rdf_fdw_18-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 145.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_18-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 rdf_fdw_18 rdf_fdw_18-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 137.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_18-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 rdf_fdw_18 rdf_fdw_18-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 139.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_18-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 rdf_fdw_18 rdf_fdw_18-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 135.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_18-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 rdf_fdw_18 rdf_fdw_18-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 140.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_18-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 rdf_fdw_18 rdf_fdw_18-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 137.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_18-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 332.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 322.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 332.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 323.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 355.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 349.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 341.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 337.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 339.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 335.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 rdf_fdw_17 rdf_fdw_17-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 145.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_17-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 rdf_fdw_17 rdf_fdw_17-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 137.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_17-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 rdf_fdw_17 rdf_fdw_17-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 139.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_17-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 rdf_fdw_17 rdf_fdw_17-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 135.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_17-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 rdf_fdw_17 rdf_fdw_17-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 140.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_17-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 rdf_fdw_17 rdf_fdw_17-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 137.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_17-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 331.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 322.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 331.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 323.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 376.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 371.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 341.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 336.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 338.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 334.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 rdf_fdw_16 rdf_fdw_16-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 145.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_16-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 rdf_fdw_16 rdf_fdw_16-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 137.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_16-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 rdf_fdw_16 rdf_fdw_16-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 139.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_16-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 rdf_fdw_16 rdf_fdw_16-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 135.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_16-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 rdf_fdw_16 rdf_fdw_16-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 140.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_16-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 rdf_fdw_16 rdf_fdw_16-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 137.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_16-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 332.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 322.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 331.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 322.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 374.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 368.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 341.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 337.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 339.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 334.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 rdf_fdw_15 rdf_fdw_15-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 147.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_15-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 rdf_fdw_15 rdf_fdw_15-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 138.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_15-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 rdf_fdw_15 rdf_fdw_15-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 142.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_15-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 rdf_fdw_15 rdf_fdw_15-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 137.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_15-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 rdf_fdw_15 rdf_fdw_15-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 142.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_15-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 rdf_fdw_15 rdf_fdw_15-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 139.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_15-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 333.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 323.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 332.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 323.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 375.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 370.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 341.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 338.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 340.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 335.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 rdf_fdw_14 rdf_fdw_14-2.5.0-2PIGSTY.el8.x86_64.rpm pigsty 2.5.0 147.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_14-2.5.0-2PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 rdf_fdw_14 rdf_fdw_14-2.5.0-2PIGSTY.el8.aarch64.rpm pigsty 2.5.0 138.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_14-2.5.0-2PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 rdf_fdw_14 rdf_fdw_14-2.5.0-2PIGSTY.el9.x86_64.rpm pigsty 2.5.0 142.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_14-2.5.0-2PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 rdf_fdw_14 rdf_fdw_14-2.5.0-2PIGSTY.el9.aarch64.rpm pigsty 2.5.0 137.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_14-2.5.0-2PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 rdf_fdw_14 rdf_fdw_14-2.5.0-2PIGSTY.el10.x86_64.rpm pigsty 2.5.0 142.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_14-2.5.0-2PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 rdf_fdw_14 rdf_fdw_14-2.5.0-2PIGSTY.el10.aarch64.rpm pigsty 2.5.0 139.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_14-2.5.0-2PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb pigsty 2.5.0 332.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb pigsty 2.5.0 323.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb pigsty 2.5.0 331.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb pigsty 2.5.0 323.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb pigsty 2.5.0 375.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb pigsty 2.5.0 369.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb pigsty 2.5.0 341.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb pigsty 2.5.0 338.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb pigsty 2.5.0 340.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb pigsty 2.5.0 335.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.5.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `rdf_fdw` 扩展的 RPM / DEB 包：

```bash
pig build pkg rdf_fdw         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `rdf_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install rdf_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y rdf_fdw -v 18  # PG 18
pig ext install -y rdf_fdw -v 17  # PG 17
pig ext install -y rdf_fdw -v 16  # PG 16
pig ext install -y rdf_fdw -v 15  # PG 15
pig ext install -y rdf_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y rdf_fdw_18       # PG 18
dnf install -y rdf_fdw_17       # PG 17
dnf install -y rdf_fdw_16       # PG 16
dnf install -y rdf_fdw_15       # PG 15
dnf install -y rdf_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-rdf-fdw   # PG 18
apt install -y postgresql-17-rdf-fdw   # PG 17
apt install -y postgresql-16-rdf-fdw   # PG 16
apt install -y postgresql-15-rdf-fdw   # PG 15
apt install -y postgresql-14-rdf-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION rdf_fdw;
```


## 用法

> 来源：[README](https://github.com/jimjonesbr/rdf_fdw/blob/main/README.md), [v2.4 release](https://github.com/jimjonesbr/rdf_fdw/releases/tag/v2.4)

`rdf_fdw` 是面向 RDF triplestore 的 foreign data wrapper，通过 SPARQL endpoint 暴露数据。它允许 PostgreSQL 用 SQL 查询 RDF 数据，支持 SQL 子句下推，提供用于 RDF term 的 `rdfnode` 类型，并包含 SPARQL 1.1 函数支持。

### 注册 SPARQL Endpoint

使用 `CREATE SERVER` 注册一个 SPARQL endpoint：

```sql
CREATE SERVER dbpedia
FOREIGN DATA WRAPPER rdf_fdw
OPTIONS (endpoint 'https://dbpedia.org/sparql');
```

README 记录的 server options 包括：

- `endpoint`（必需）
- `batch_size`
- `enable_pushdown`
- `format`
- `http_proxy`
- `connect_timeout`

`v2.4` 把代理凭据从 `SERVER` options 挪到了 `USER MAPPING`，以降低凭据暴露风险。

### 用户映射与外部表

```sql
CREATE USER MAPPING FOR postgres
SERVER dbpedia
OPTIONS (user 'admin', password 'secret');
```

`rdf_fdw` 通过声明外部表来嵌入 SPARQL 查询，并把结果变量映射到 PostgreSQL 列。README 也特别强调了通过自定义 `rdfnode` 类型对 RDF node 的原生处理。

```sql
CREATE FOREIGN TABLE film (
  film_id text OPTIONS (variable '?film', nodetype 'iri'),
  name text OPTIONS (variable '?name', nodetype 'literal', literal_type 'xsd:string')
)
SERVER dbpedia
OPTIONS (sparql 'SELECT ?film ?name WHERE { ?film dbp:name ?name }');
```

### 下推、DML 与辅助函数

上游文档明确点名支持这些下推：

- `WHERE`
- `LIMIT`
- `ORDER BY`
- `DISTINCT`

它也记录了数据修改支持：

- `INSERT`
- `UPDATE`
- `DELETE`

SPARQL UPDATE 的批处理粒度由 `batch_size` 控制。

README 列出的工具函数包括：

- `rdf_fdw_version()`
- `rdf_fdw_settings()`
- `rdf_fdw_clone_table()`

它还说明扩展覆盖了更广泛的 SPARQL 函数，包括 aggregates、string functions、numeric functions、date/time functions、hash functions 和 custom functions。

### 注意事项

当前 README 警告：检索到的 RDF 数据会先完整载入内存，再转换为 PostgreSQL 表示，因此大结果集需要足够的 PostgreSQL 内存。文档声明的最低支持版本是 PostgreSQL 9.5+。
