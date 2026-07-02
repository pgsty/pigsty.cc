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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/rdf_fdw-2.6.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">rdf_fdw-2.6.0.tar.gz</div>
    <div class="ext-card__desc">rdf_fdw-2.6.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`rdf_fdw`**](/ext/e/rdf_fdw) | `2.6.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.6.0` | {{< pgvers "18,17,16,15,14" >}} | `rdf_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.6.0` | {{< pgvers "18,17,16,15,14" >}} | `rdf_fdw_$v` | - |
| [**DEB**](/ext/deb#fdw) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.6.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-rdf-fdw` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| el8.aarch64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| el9.x86_64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| el9.aarch64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| el10.x86_64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| el10.aarch64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| d12.x86_64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| d12.aarch64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| d13.x86_64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| d13.aarch64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| u22.x86_64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| u22.aarch64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| u24.x86_64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| u24.aarch64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| u26.x86_64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
| u26.aarch64 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 | AVAIL PIGSTY 2.6.0 1 |
@ el8.x86_64 18 rdf_fdw_18 rdf_fdw_18-2.6.0-1PIGSTY.el8.x86_64.rpm pigsty 2.6.0 150.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_18-2.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 rdf_fdw_18 rdf_fdw_18-2.6.0-1PIGSTY.el8.aarch64.rpm pigsty 2.6.0 141.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_18-2.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 rdf_fdw_18 rdf_fdw_18-2.6.0-1PIGSTY.el9.x86_64.rpm pigsty 2.6.0 145.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_18-2.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 rdf_fdw_18 rdf_fdw_18-2.6.0-1PIGSTY.el9.aarch64.rpm pigsty 2.6.0 140.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_18-2.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 rdf_fdw_18 rdf_fdw_18-2.6.0-1PIGSTY.el10.x86_64.rpm pigsty 2.6.0 146.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_18-2.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 rdf_fdw_18 rdf_fdw_18-2.6.0-1PIGSTY.el10.aarch64.rpm pigsty 2.6.0 142.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_18-2.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb pigsty 2.6.0 350.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb pigsty 2.6.0 339.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb pigsty 2.6.0 348.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb pigsty 2.6.0 339.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb pigsty 2.6.0 367.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb pigsty 2.6.0 362.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb pigsty 2.6.0 354.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb pigsty 2.6.0 350.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb pigsty 2.6.0 352.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-rdf-fdw postgresql-18-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb pigsty 2.6.0 347.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-18-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 rdf_fdw_17 rdf_fdw_17-2.6.0-1PIGSTY.el8.x86_64.rpm pigsty 2.6.0 151.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_17-2.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 rdf_fdw_17 rdf_fdw_17-2.6.0-1PIGSTY.el8.aarch64.rpm pigsty 2.6.0 141.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_17-2.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 rdf_fdw_17 rdf_fdw_17-2.6.0-1PIGSTY.el9.x86_64.rpm pigsty 2.6.0 145.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_17-2.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 rdf_fdw_17 rdf_fdw_17-2.6.0-1PIGSTY.el9.aarch64.rpm pigsty 2.6.0 140.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_17-2.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 rdf_fdw_17 rdf_fdw_17-2.6.0-1PIGSTY.el10.x86_64.rpm pigsty 2.6.0 146.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_17-2.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 rdf_fdw_17 rdf_fdw_17-2.6.0-1PIGSTY.el10.aarch64.rpm pigsty 2.6.0 142.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_17-2.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb pigsty 2.6.0 348.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb pigsty 2.6.0 339.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb pigsty 2.6.0 348.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb pigsty 2.6.0 339.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb pigsty 2.6.0 388.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb pigsty 2.6.0 383.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb pigsty 2.6.0 353.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb pigsty 2.6.0 349.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb pigsty 2.6.0 351.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-rdf-fdw postgresql-17-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb pigsty 2.6.0 346.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-17-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 rdf_fdw_16 rdf_fdw_16-2.6.0-1PIGSTY.el8.x86_64.rpm pigsty 2.6.0 151.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_16-2.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 rdf_fdw_16 rdf_fdw_16-2.6.0-1PIGSTY.el8.aarch64.rpm pigsty 2.6.0 141.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_16-2.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 rdf_fdw_16 rdf_fdw_16-2.6.0-1PIGSTY.el9.x86_64.rpm pigsty 2.6.0 144.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_16-2.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 rdf_fdw_16 rdf_fdw_16-2.6.0-1PIGSTY.el9.aarch64.rpm pigsty 2.6.0 140.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_16-2.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 rdf_fdw_16 rdf_fdw_16-2.6.0-1PIGSTY.el10.x86_64.rpm pigsty 2.6.0 146.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_16-2.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 rdf_fdw_16 rdf_fdw_16-2.6.0-1PIGSTY.el10.aarch64.rpm pigsty 2.6.0 142.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_16-2.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb pigsty 2.6.0 348.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb pigsty 2.6.0 339.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb pigsty 2.6.0 348.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb pigsty 2.6.0 340.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb pigsty 2.6.0 387.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb pigsty 2.6.0 381.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb pigsty 2.6.0 353.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb pigsty 2.6.0 349.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb pigsty 2.6.0 351.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-rdf-fdw postgresql-16-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb pigsty 2.6.0 346.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-16-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 rdf_fdw_15 rdf_fdw_15-2.6.0-1PIGSTY.el8.x86_64.rpm pigsty 2.6.0 152.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_15-2.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 rdf_fdw_15 rdf_fdw_15-2.6.0-1PIGSTY.el8.aarch64.rpm pigsty 2.6.0 143.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_15-2.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 rdf_fdw_15 rdf_fdw_15-2.6.0-1PIGSTY.el9.x86_64.rpm pigsty 2.6.0 147.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_15-2.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 rdf_fdw_15 rdf_fdw_15-2.6.0-1PIGSTY.el9.aarch64.rpm pigsty 2.6.0 142.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_15-2.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 rdf_fdw_15 rdf_fdw_15-2.6.0-1PIGSTY.el10.x86_64.rpm pigsty 2.6.0 148.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_15-2.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 rdf_fdw_15 rdf_fdw_15-2.6.0-1PIGSTY.el10.aarch64.rpm pigsty 2.6.0 144.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_15-2.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb pigsty 2.6.0 350.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb pigsty 2.6.0 340.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb pigsty 2.6.0 350.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb pigsty 2.6.0 341.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb pigsty 2.6.0 388.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb pigsty 2.6.0 383.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb pigsty 2.6.0 353.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb pigsty 2.6.0 350.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb pigsty 2.6.0 352.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-rdf-fdw postgresql-15-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb pigsty 2.6.0 347.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-15-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 rdf_fdw_14 rdf_fdw_14-2.6.0-1PIGSTY.el8.x86_64.rpm pigsty 2.6.0 152.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/rdf_fdw_14-2.6.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 rdf_fdw_14 rdf_fdw_14-2.6.0-1PIGSTY.el8.aarch64.rpm pigsty 2.6.0 143.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/rdf_fdw_14-2.6.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 rdf_fdw_14 rdf_fdw_14-2.6.0-1PIGSTY.el9.x86_64.rpm pigsty 2.6.0 147.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/rdf_fdw_14-2.6.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 rdf_fdw_14 rdf_fdw_14-2.6.0-1PIGSTY.el9.aarch64.rpm pigsty 2.6.0 142.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/rdf_fdw_14-2.6.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 rdf_fdw_14 rdf_fdw_14-2.6.0-1PIGSTY.el10.x86_64.rpm pigsty 2.6.0 147.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/rdf_fdw_14-2.6.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 rdf_fdw_14 rdf_fdw_14-2.6.0-1PIGSTY.el10.aarch64.rpm pigsty 2.6.0 144.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/rdf_fdw_14-2.6.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb pigsty 2.6.0 350.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb pigsty 2.6.0 339.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb pigsty 2.6.0 349.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb pigsty 2.6.0 341.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb pigsty 2.6.0 387.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb pigsty 2.6.0 382.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb pigsty 2.6.0 353.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb pigsty 2.6.0 350.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb pigsty 2.6.0 352.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-rdf-fdw postgresql-14-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb pigsty 2.6.0 347.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/r/rdf-fdw/postgresql-14-rdf-fdw_2.6.0-1PIGSTY~resolute_arm64.deb
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

来源：

- [PGXN rdf_fdw 2.6.0](https://pgxn.org/dist/rdf_fdw/2.6.0/)
- [rdf_fdw README](https://github.com/jimjonesbr/rdf_fdw)
- [rdf_fdw CHANGELOG](https://github.com/jimjonesbr/rdf_fdw/blob/master/CHANGELOG.md)
- [rdf_fdw control file](https://pgxn.org/dist/rdf_fdw/2.6.0/)
- [本地包元数据](../db/extension.csv)

`rdf_fdw` 是通过 SPARQL endpoint 查询 RDF triplestore 的 PostgreSQL foreign data wrapper。它把 SPARQL 结果变量暴露为外部表列，支持常见 SQL 子句下推，提供用于 RDF term 的原生 `rdfnode` 类型，实现了多种 SPARQL 1.1 辅助函数，并可通过可写外部表执行 SPARQL `INSERT`、`UPDATE` 和 `DELETE`。

v2.6.0 增加了通过 `USER MAPPING` 配置 Bearer token 认证、用于限制 HTTP 响应体大小的 `max_response_size` server option、BCE date/timestamp cast 支持，以及大量 `rdfnode` 解析和比较修复。v2.5 增加了 `request_timeout` 与 `readonly` 选项。

### 创建扩展

```sql
CREATE EXTENSION IF NOT EXISTS rdf_fdw;

SELECT rdf_fdw_version();
SELECT * FROM rdf_fdw_settings();
```

安装或升级到指定 SQL 版本：

```sql
CREATE EXTENSION rdf_fdw WITH VERSION '2.6';
ALTER EXTENSION rdf_fdw UPDATE TO '2.6';
```

### 注册 SPARQL Endpoint

```sql
CREATE SERVER dbpedia
FOREIGN DATA WRAPPER rdf_fdw
OPTIONS (
  endpoint          'https://dbpedia.org/sparql',
  enable_pushdown   'true',
  request_timeout   '60',
  max_response_size '104857600',
  readonly          'true'
);
```

常用 server options：

- `endpoint`：SPARQL endpoint URL，必需。
- `batch_size`：每批 SPARQL UPDATE 的行数。
- `enable_pushdown`：启用 SQL 到 SPARQL 的下推。
- `format`：期望的 SPARQL 结果 MIME 类型。
- `http_proxy`：代理 URL；代理凭据应放在 `USER MAPPING`。
- `connect_timeout`：连接超时。
- `request_timeout`：完整 HTTP 请求超时。
- `max_response_size`：最大响应体字节数；`0` 表示不限制。
- `readonly`：在请求到达 endpoint 前阻止 `INSERT`、`UPDATE` 和 `DELETE`。
- `request_redirect` 与 `request_max_redirect`：重定向行为。

连接公共或不可信 endpoint 时建议设置 `max_response_size`，因为 `rdf_fdw` 会先把取回的 RDF 数据载入内存，再转换为 PostgreSQL 表示。

### 用户映射

```sql
CREATE USER MAPPING FOR postgres
SERVER dbpedia
OPTIONS (
  user 'sparql_user',
  password 'secret'
);
```

v2.6.0 增加了 Bearer token 认证：

```sql
CREATE USER MAPPING FOR postgres
SERVER dbpedia
OPTIONS (
  token 'eyJhbGciOi...'
);
```

代理凭据也应放在 `USER MAPPING`：

```sql
CREATE USER MAPPING FOR app_user
SERVER dbpedia
OPTIONS (
  proxy_user 'proxy-user',
  proxy_password 'proxy-secret'
);
```

### 使用 rdfnode 列的外部表

外部表列应声明为 `rdfnode`，以保留 RDF term、IRI、blank node、语言标签和 XSD datatype。

```sql
CREATE FOREIGN TABLE dbpedia_films (
  film rdfnode OPTIONS (variable '?film'),
  name rdfnode OPTIONS (variable '?name'),
  year rdfnode OPTIONS (variable '?year')
)
SERVER dbpedia
OPTIONS (
  sparql $$
    SELECT ?film ?name ?year
    WHERE {
      ?film a dbo:Film ;
            rdfs:label ?name ;
            dbo:releaseDate ?year .
      FILTER (lang(?name) = 'en')
    }
  $$
);
```

v2.6.0 中，RDF 值使用原生 PostgreSQL 列类型的方式已被弃用。已有 native-typed 表仍可工作，但会发出 warning，并且会丢失 RDF term 细节。

### 查询与下推

```sql
SELECT film, sparql.lex(name) AS title
FROM dbpedia_films
WHERE name = '"The Matrix"@en'::rdfnode
ORDER BY year
LIMIT 10;

EXPLAIN (VERBOSE, COSTS OFF)
SELECT *
FROM dbpedia_films
WHERE film = '<http://dbpedia.org/resource/The_Matrix>'::rdfnode;
```

`rdf_fdw` 可下推 `WHERE`、`LIMIT`、`ORDER BY`、`DISTINCT` 以及受支持的比较和函数。使用 `EXPLAIN VERBOSE` 查看生成的远端 SPARQL。

### Prefix 管理

`rdf_fdw` 在 `sparql` schema 下提供 catalog 表和辅助函数，用于复用 SPARQL prefix：

```sql
SELECT sparql.add_context('default', 'Default SPARQL prefix context');
SELECT sparql.add_prefix('default', 'rdf',  'http://www.w3.org/1999/02/22-rdf-syntax-ns#');
SELECT sparql.add_prefix('default', 'rdfs', 'http://www.w3.org/2000/01/rdf-schema#');
SELECT sparql.add_prefix('default', 'xsd',  'http://www.w3.org/2001/XMLSchema#');
```

### 数据修改

当外部表具备所需 SPARQL update pattern 时，可写外部表可以把 PostgreSQL `INSERT`、`UPDATE` 和 `DELETE` 翻译为 SPARQL UPDATE 请求。

```sql
ALTER FOREIGN TABLE dbpedia_films OPTIONS (ADD readonly 'false');

INSERT INTO dbpedia_films(film, name)
VALUES (
  '<http://example.org/film/1>'::rdfnode,
  '"Example Film"@en'::rdfnode
);
```

如果 endpoint 不应接收写请求，应在 server 或 table 级别设置 `readonly = true`。

### 克隆外部表

```sql
CALL rdf_fdw_clone_table(
  foreign_table := 'dbpedia_films',
  target_table  := 'dbpedia_films_local',
  fetch_size    := 1000,
  create_table  := true
);
```

`rdf_fdw_clone_table()` 会把外部表数据分批复制成本地表。v2.5 修复了克隆 RDF term 时的多项往返问题。

### SPARQL 函数

`sparql` schema 实现了许多 SPARQL 1.1 函数和聚合，包括：

- `sparql.sum`、`sparql.avg`、`sparql.min`、`sparql.max`、`sparql.group_concat`、`sparql.sample` 等聚合
- `sparql.isiri`、`sparql.isblank`、`sparql.isliteral`、`sparql.datatype`、`sparql.iri`、`sparql.strdt`、`sparql.strlang` 等 RDF term 函数
- `sparql.strlen`、`sparql.substr`、`sparql.ucase`、`sparql.lcase`、`sparql.contains`、`sparql.replace` 等字符串函数
- 数值、日期时间、哈希和其他便利函数

### 注意事项

- 上游最低基线为 PostgreSQL 9.5+；Pigsty 包则面向本地元数据中列出的现代 PostgreSQL 大版本。
- 取回的 RDF 数据会在转换前累积到内存中。应设置 `max_response_size`、使用 `LIMIT`，并限制远端结果集规模。
- 优先使用 `rdfnode` 列。RDF term 使用 PostgreSQL 原生类型已被弃用，并会丢失 IRI、语言和 datatype 信息。
- 密钥应放在 `USER MAPPING`；不要把代理凭据或 endpoint token 写进 `SERVER` options。
- 公共 SPARQL endpoint 可能慢或有速率限制。需要时使用 `connect_timeout`、`request_timeout`、重试和本地物化。
