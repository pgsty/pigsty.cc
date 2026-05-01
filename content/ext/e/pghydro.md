---
title: "pghydro"
linkTitle: "pghydro"
description: "PostgreSQL/PostGIS 排水网络分析核心扩展"
weight: 1600
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pghydro/pghydro">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pghydro/pghydro</div>
    <div class="ext-card__desc">https://github.com/pghydro/pghydro</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pghydro-6.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pghydro-6.6.tar.gz</div>
    <div class="ext-card__desc">pghydro-6.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pghydro`**](/ext/e/pghydro) | `6.6` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1600  | [**`pghydro`**](/ext/e/pghydro) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pghydro` |
| 1601  | [**`pgh_raster`**](/ext/e/pgh_raster) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgh_raster` |
| 1602  | [**`pgh_hgm`**](/ext/e/pgh_hgm) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgh_hgm` |
| 1603  | [**`pgh_output`**](/ext/e/pgh_output) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgh_output` |
| 1604  | [**`pgh_output_en_au`**](/ext/e/pgh_output_en_au) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgh_output_en_au` |
| 1605  | [**`pgh_output_pt_br`**](/ext/e/pgh_output_pt_br) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgh_output_pt_br` |
| 1606  | [**`pgh_consistency`**](/ext/e/pgh_consistency) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgh_consistency` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`postgis`](/ext/e/postgis) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Lead row; package also ships pgh_raster, pgh_hgm, pgh_output, pgh_output_en_au, pgh_output_pt_br, and pgh_consistency.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `6.6` | {{< pgvers "18,17,16,15,14" >}} | `pghydro` | `plpgsql`, `postgis` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `6.6` | {{< pgvers "18,17,16,15,14" >}} | `pghydro_$v` | `postgis36_$v` |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `6.6` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pghydro` | `postgresql-$v-postgis-3` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| el8.aarch64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| el9.x86_64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| el9.aarch64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| el10.x86_64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| el10.aarch64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| d12.x86_64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| d12.aarch64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| d13.x86_64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| d13.aarch64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| u22.x86_64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| u22.aarch64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| u24.x86_64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| u24.aarch64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| u26.x86_64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
| u26.aarch64 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 | AVAIL PIGSTY 6.6 1 |
@ el8.x86_64 18 pghydro_18 pghydro_18-6.6-1PIGSTY.el8.x86_64.rpm pigsty 6.6 145.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pghydro_18-6.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pghydro_18 pghydro_18-6.6-1PIGSTY.el8.aarch64.rpm pigsty 6.6 144.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pghydro_18-6.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pghydro_18 pghydro_18-6.6-1PIGSTY.el9.x86_64.rpm pigsty 6.6 138.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pghydro_18-6.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pghydro_18 pghydro_18-6.6-1PIGSTY.el9.aarch64.rpm pigsty 6.6 138.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pghydro_18-6.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pghydro_18 pghydro_18-6.6-1PIGSTY.el10.x86_64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pghydro_18-6.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pghydro_18 pghydro_18-6.6-1PIGSTY.el10.aarch64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pghydro_18-6.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~bookworm_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~bookworm_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~trixie_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~trixie_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~jammy_amd64.deb pigsty 6.6 135.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~jammy_arm64.deb pigsty 6.6 135.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~noble_amd64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~noble_arm64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~resolute_amd64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pghydro postgresql-18-pghydro_6.6-1PIGSTY~resolute_arm64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-18-pghydro_6.6-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pghydro_17 pghydro_17-6.6-1PIGSTY.el8.x86_64.rpm pigsty 6.6 145.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pghydro_17-6.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pghydro_17 pghydro_17-6.6-1PIGSTY.el8.aarch64.rpm pigsty 6.6 144.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pghydro_17-6.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pghydro_17 pghydro_17-6.6-1PIGSTY.el9.x86_64.rpm pigsty 6.6 138.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pghydro_17-6.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pghydro_17 pghydro_17-6.6-1PIGSTY.el9.aarch64.rpm pigsty 6.6 138.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pghydro_17-6.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pghydro_17 pghydro_17-6.6-1PIGSTY.el10.x86_64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pghydro_17-6.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pghydro_17 pghydro_17-6.6-1PIGSTY.el10.aarch64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pghydro_17-6.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~bookworm_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~bookworm_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~trixie_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~trixie_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~jammy_amd64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~jammy_arm64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~noble_amd64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~noble_arm64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~resolute_amd64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pghydro postgresql-17-pghydro_6.6-1PIGSTY~resolute_arm64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-17-pghydro_6.6-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pghydro_16 pghydro_16-6.6-1PIGSTY.el8.x86_64.rpm pigsty 6.6 145.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pghydro_16-6.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pghydro_16 pghydro_16-6.6-1PIGSTY.el8.aarch64.rpm pigsty 6.6 144.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pghydro_16-6.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pghydro_16 pghydro_16-6.6-1PIGSTY.el9.x86_64.rpm pigsty 6.6 138.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pghydro_16-6.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pghydro_16 pghydro_16-6.6-1PIGSTY.el9.aarch64.rpm pigsty 6.6 138.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pghydro_16-6.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pghydro_16 pghydro_16-6.6-1PIGSTY.el10.x86_64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pghydro_16-6.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pghydro_16 pghydro_16-6.6-1PIGSTY.el10.aarch64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pghydro_16-6.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~bookworm_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~bookworm_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~trixie_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~trixie_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~jammy_amd64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~jammy_arm64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~noble_amd64.deb pigsty 6.6 135.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~noble_arm64.deb pigsty 6.6 135.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~resolute_amd64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pghydro postgresql-16-pghydro_6.6-1PIGSTY~resolute_arm64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-16-pghydro_6.6-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pghydro_15 pghydro_15-6.6-1PIGSTY.el8.x86_64.rpm pigsty 6.6 145.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pghydro_15-6.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pghydro_15 pghydro_15-6.6-1PIGSTY.el8.aarch64.rpm pigsty 6.6 144.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pghydro_15-6.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pghydro_15 pghydro_15-6.6-1PIGSTY.el9.x86_64.rpm pigsty 6.6 138.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pghydro_15-6.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pghydro_15 pghydro_15-6.6-1PIGSTY.el9.aarch64.rpm pigsty 6.6 138.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pghydro_15-6.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pghydro_15 pghydro_15-6.6-1PIGSTY.el10.x86_64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pghydro_15-6.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pghydro_15 pghydro_15-6.6-1PIGSTY.el10.aarch64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pghydro_15-6.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~bookworm_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~bookworm_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~trixie_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~trixie_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~jammy_amd64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~jammy_arm64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~noble_amd64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~noble_arm64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~resolute_amd64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pghydro postgresql-15-pghydro_6.6-1PIGSTY~resolute_arm64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-15-pghydro_6.6-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pghydro_14 pghydro_14-6.6-1PIGSTY.el8.x86_64.rpm pigsty 6.6 145.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pghydro_14-6.6-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pghydro_14 pghydro_14-6.6-1PIGSTY.el8.aarch64.rpm pigsty 6.6 144.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pghydro_14-6.6-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pghydro_14 pghydro_14-6.6-1PIGSTY.el9.x86_64.rpm pigsty 6.6 138.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pghydro_14-6.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pghydro_14 pghydro_14-6.6-1PIGSTY.el9.aarch64.rpm pigsty 6.6 138.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pghydro_14-6.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pghydro_14 pghydro_14-6.6-1PIGSTY.el10.x86_64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pghydro_14-6.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pghydro_14 pghydro_14-6.6-1PIGSTY.el10.aarch64.rpm pigsty 6.6 138.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pghydro_14-6.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~bookworm_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~bookworm_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~trixie_amd64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~trixie_arm64.deb pigsty 6.6 135.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~jammy_amd64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~jammy_arm64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~noble_amd64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~noble_arm64.deb pigsty 6.6 135.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~resolute_amd64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pghydro postgresql-14-pghydro_6.6-1PIGSTY~resolute_arm64.deb pigsty 6.6 136.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pghydro/postgresql-14-pghydro_6.6-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pghydro` 扩展的 RPM / DEB 包：

```bash
pig build pkg pghydro         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pghydro` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pghydro;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pghydro -v 18  # PG 18
pig ext install -y pghydro -v 17  # PG 17
pig ext install -y pghydro -v 16  # PG 16
pig ext install -y pghydro -v 15  # PG 15
pig ext install -y pghydro -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pghydro_18       # PG 18
dnf install -y pghydro_17       # PG 17
dnf install -y pghydro_16       # PG 16
dnf install -y pghydro_15       # PG 15
dnf install -y pghydro_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pghydro   # PG 18
apt install -y postgresql-17-pghydro   # PG 17
apt install -y postgresql-16-pghydro   # PG 16
apt install -y postgresql-15-pghydro   # PG 15
apt install -y postgresql-14-pghydro   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pghydro CASCADE;  -- 依赖: plpgsql, postgis
```

## 用法

来源：[README](https://github.com/pghydro/pghydro/blob/master/README.md)，[repo](https://github.com/pghydro/pghydro)，[releases](https://github.com/pghydro/pghydro/releases)

`pghydro` 是 PgHydro 套件中的核心扩展，用于在 PostgreSQL 和 PostGIS 之上做排水网络分析与水资源决策支持。

### 安装 PgHydro 套件

```sql
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_raster;
CREATE EXTENSION pghydro;
CREATE EXTENSION pgh_raster;
CREATE EXTENSION pgh_hgm;
CREATE EXTENSION pgh_consistency;
CREATE EXTENSION pgh_output;
```

上游 README 将这些配套扩展一起介绍：

- `pghydro`：排水网络分析
- `pgh_raster`：基于 DEM 派生水文产品
- `pgh_hgm`：水文地貌分析
- `pgh_consistency`：Pfafstetter 一致性检查
- `pgh_output`：报表对象

### 上游覆盖的能力

- 河网中的流向修正
- Otto Pfafstetter 流域编码
- 上游和下游河段选择
- 距河口距离计算
- 上游汇水面积计算
- 河流等级和流域层级分析

### 环境要求

- PostgreSQL 9.1+
- PostGIS 3.x
- PostGIS Raster

### 说明

- 当前 README 的状态说明仍写明 master 分支跟踪 `6.6`，develop 分支跟踪 `6.7-dev`。
- 仓库里已经发布了更高版本的 tag，但面向用户的 README 仍以 `6.6` 的安装和教程流程为主。
