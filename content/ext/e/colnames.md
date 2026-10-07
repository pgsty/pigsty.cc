---
title: "colnames"
linkTitle: "colnames"
description: "返回记录或复合类型值的列名数组"
weight: 4360
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/theory/colnames">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">theory/colnames</div>
    <div class="ext-card__desc">https://github.com/theory/colnames</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/colnames-1.7.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">colnames-1.7.1.tar.gz</div>
    <div class="ext-card__desc">colnames-1.7.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`colnames`**](/ext/e/colnames) | `1.7.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4360  | [**`colnames`**](/ext/e/colnames) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_describe`](/ext/e/pg_describe) `describe_resultset` `get_column` `pltoolbox` [`hstore`](/ext/e/hstore) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Distribution 1.7.1 retains extension version 1.7.0; colnames(record) returns name[]. No preload or runtime extension dependencies. Upstream release lists PG8.2-17; PG14-18 verified across all 16 PGSTY target platforms.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.0` | {{< pgvers "14,15,16,17,18" >}} | `colnames` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.1` | {{< pgvers "18,17,16,15,14" >}} | `colnames_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.7.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-colnames` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| u26.x86_64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
| u26.aarch64 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 | AVAIL PIGSTY 1.7.1 1 |
@ el8.x86_64 18 colnames_18 colnames_18-1.7.1-1PGSTY.el8.x86_64.rpm pigsty 1.7.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/colnames_18-1.7.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 colnames_18 colnames_18-1.7.1-1PGSTY.el8.aarch64.rpm pigsty 1.7.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/colnames_18-1.7.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 colnames_18 colnames_18-1.7.1-1PGSTY.el9.x86_64.rpm pigsty 1.7.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/colnames_18-1.7.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 colnames_18 colnames_18-1.7.1-1PGSTY.el9.aarch64.rpm pigsty 1.7.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/colnames_18-1.7.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 colnames_18 colnames_18-1.7.1-1PGSTY.el10.x86_64.rpm pigsty 1.7.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/colnames_18-1.7.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 colnames_18 colnames_18-1.7.1-1PGSTY.el10.aarch64.rpm pigsty 1.7.1 19.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/colnames_18-1.7.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~bookworm_amd64.deb pigsty 1.7.1 8.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~bookworm_arm64.deb pigsty 1.7.1 8.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~trixie_amd64.deb pigsty 1.7.1 8.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~trixie_arm64.deb pigsty 1.7.1 8.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~jammy_amd64.deb pigsty 1.7.1 7.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~jammy_arm64.deb pigsty 1.7.1 7.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~noble_amd64.deb pigsty 1.7.1 7.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~noble_arm64.deb pigsty 1.7.1 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~resolute_amd64.deb pigsty 1.7.1 7.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-colnames postgresql-18-colnames_1.7.1-1PGSTY~resolute_arm64.deb pigsty 1.7.1 8.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-18-colnames_1.7.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 colnames_17 colnames_17-1.7.1-1PGSTY.el8.x86_64.rpm pigsty 1.7.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/colnames_17-1.7.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 colnames_17 colnames_17-1.7.1-1PGSTY.el8.aarch64.rpm pigsty 1.7.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/colnames_17-1.7.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 colnames_17 colnames_17-1.7.1-1PGSTY.el9.x86_64.rpm pigsty 1.7.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/colnames_17-1.7.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 colnames_17 colnames_17-1.7.1-1PGSTY.el9.aarch64.rpm pigsty 1.7.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/colnames_17-1.7.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 colnames_17 colnames_17-1.7.1-1PGSTY.el10.x86_64.rpm pigsty 1.7.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/colnames_17-1.7.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 colnames_17 colnames_17-1.7.1-1PGSTY.el10.aarch64.rpm pigsty 1.7.1 19.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/colnames_17-1.7.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~bookworm_amd64.deb pigsty 1.7.1 8.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~bookworm_arm64.deb pigsty 1.7.1 8.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~trixie_amd64.deb pigsty 1.7.1 8.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~trixie_arm64.deb pigsty 1.7.1 8.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~jammy_amd64.deb pigsty 1.7.1 8.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~jammy_arm64.deb pigsty 1.7.1 7.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~noble_amd64.deb pigsty 1.7.1 7.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~noble_arm64.deb pigsty 1.7.1 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~resolute_amd64.deb pigsty 1.7.1 7.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-colnames postgresql-17-colnames_1.7.1-1PGSTY~resolute_arm64.deb pigsty 1.7.1 8.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-17-colnames_1.7.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 colnames_16 colnames_16-1.7.1-1PGSTY.el8.x86_64.rpm pigsty 1.7.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/colnames_16-1.7.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 colnames_16 colnames_16-1.7.1-1PGSTY.el8.aarch64.rpm pigsty 1.7.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/colnames_16-1.7.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 colnames_16 colnames_16-1.7.1-1PGSTY.el9.x86_64.rpm pigsty 1.7.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/colnames_16-1.7.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 colnames_16 colnames_16-1.7.1-1PGSTY.el9.aarch64.rpm pigsty 1.7.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/colnames_16-1.7.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 colnames_16 colnames_16-1.7.1-1PGSTY.el10.x86_64.rpm pigsty 1.7.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/colnames_16-1.7.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 colnames_16 colnames_16-1.7.1-1PGSTY.el10.aarch64.rpm pigsty 1.7.1 19.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/colnames_16-1.7.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~bookworm_amd64.deb pigsty 1.7.1 8.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~bookworm_arm64.deb pigsty 1.7.1 8.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~trixie_amd64.deb pigsty 1.7.1 8.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~trixie_arm64.deb pigsty 1.7.1 8.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~jammy_amd64.deb pigsty 1.7.1 7.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~jammy_arm64.deb pigsty 1.7.1 7.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~noble_amd64.deb pigsty 1.7.1 7.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~noble_arm64.deb pigsty 1.7.1 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~resolute_amd64.deb pigsty 1.7.1 7.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-colnames postgresql-16-colnames_1.7.1-1PGSTY~resolute_arm64.deb pigsty 1.7.1 8.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-16-colnames_1.7.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 colnames_15 colnames_15-1.7.1-1PGSTY.el8.x86_64.rpm pigsty 1.7.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/colnames_15-1.7.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 colnames_15 colnames_15-1.7.1-1PGSTY.el8.aarch64.rpm pigsty 1.7.1 19.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/colnames_15-1.7.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 colnames_15 colnames_15-1.7.1-1PGSTY.el9.x86_64.rpm pigsty 1.7.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/colnames_15-1.7.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 colnames_15 colnames_15-1.7.1-1PGSTY.el9.aarch64.rpm pigsty 1.7.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/colnames_15-1.7.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 colnames_15 colnames_15-1.7.1-1PGSTY.el10.x86_64.rpm pigsty 1.7.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/colnames_15-1.7.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 colnames_15 colnames_15-1.7.1-1PGSTY.el10.aarch64.rpm pigsty 1.7.1 19.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/colnames_15-1.7.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~bookworm_amd64.deb pigsty 1.7.1 8.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~bookworm_arm64.deb pigsty 1.7.1 8.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~trixie_amd64.deb pigsty 1.7.1 8.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~trixie_arm64.deb pigsty 1.7.1 8.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~jammy_amd64.deb pigsty 1.7.1 8.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~jammy_arm64.deb pigsty 1.7.1 8.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~noble_amd64.deb pigsty 1.7.1 7.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~noble_arm64.deb pigsty 1.7.1 7.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~resolute_amd64.deb pigsty 1.7.1 7.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-colnames postgresql-15-colnames_1.7.1-1PGSTY~resolute_arm64.deb pigsty 1.7.1 8.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-15-colnames_1.7.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 colnames_14 colnames_14-1.7.1-1PGSTY.el8.x86_64.rpm pigsty 1.7.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/colnames_14-1.7.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 colnames_14 colnames_14-1.7.1-1PGSTY.el8.aarch64.rpm pigsty 1.7.1 19.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/colnames_14-1.7.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 colnames_14 colnames_14-1.7.1-1PGSTY.el9.x86_64.rpm pigsty 1.7.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/colnames_14-1.7.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 colnames_14 colnames_14-1.7.1-1PGSTY.el9.aarch64.rpm pigsty 1.7.1 19.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/colnames_14-1.7.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 colnames_14 colnames_14-1.7.1-1PGSTY.el10.x86_64.rpm pigsty 1.7.1 19.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/colnames_14-1.7.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 colnames_14 colnames_14-1.7.1-1PGSTY.el10.aarch64.rpm pigsty 1.7.1 19.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/colnames_14-1.7.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~bookworm_amd64.deb pigsty 1.7.1 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~bookworm_arm64.deb pigsty 1.7.1 11.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~trixie_amd64.deb pigsty 1.7.1 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~trixie_arm64.deb pigsty 1.7.1 11.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~jammy_amd64.deb pigsty 1.7.1 12.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~jammy_arm64.deb pigsty 1.7.1 12.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~noble_amd64.deb pigsty 1.7.1 11.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~noble_arm64.deb pigsty 1.7.1 11.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~resolute_amd64.deb pigsty 1.7.1 11.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-colnames postgresql-14-colnames_1.7.1-1PGSTY~resolute_arm64.deb pigsty 1.7.1 12.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/c/colnames/postgresql-14-colnames_1.7.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `colnames` 扩展的 RPM / DEB 包：

```bash
pig build pkg colnames         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `colnames` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install colnames;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y colnames -v 18  # PG 18
pig ext install -y colnames -v 17  # PG 17
pig ext install -y colnames -v 16  # PG 16
pig ext install -y colnames -v 15  # PG 15
pig ext install -y colnames -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y colnames_18       # PG 18
dnf install -y colnames_17       # PG 17
dnf install -y colnames_16       # PG 16
dnf install -y colnames_15       # PG 15
dnf install -y colnames_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-colnames   # PG 18
apt install -y postgresql-17-colnames   # PG 17
apt install -y postgresql-16-colnames   # PG 16
apt install -y postgresql-15-colnames   # PG 15
apt install -y postgresql-14-colnames   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION colnames;
```

## 用法

来源：

- [版本文档](https://github.com/theory/colnames/blob/v1.7.1/doc/colnames.md)
- [SQL 函数定义](https://github.com/theory/colnames/blob/v1.7.1/sql/colnames.sql)
- [C 实现](https://github.com/theory/colnames/blob/v1.7.1/src/colnames.c)
- [扩展控制文件](https://github.com/theory/colnames/blob/v1.7.1/colnames.control)
- [发行说明](https://github.com/theory/colnames/blob/v1.7.1/Changes)

`colnames` 提供 `colnames(record)`，以 `name[]` 返回输入记录的字段名。通用触发器或动态 SQL 辅助函数需要了解复合值的结构、又不想把字段值转换为 JSON 时，可以使用它。发行版本 `1.7.1` 保留了扩展版本 `1.7.0`。

### 核心用法

```sql
CREATE EXTENSION colnames;

SELECT colnames(ROW(1, 'foo', 458.0));
SELECT colnames(t)
FROM (SELECT 1 AS id, 'Ada'::text AS name) AS t;

CREATE TYPE contact AS (id integer, name text);
SELECT colnames(NULL::contact);
```

三个调用分别返回 `{f1,f2,f3}`、`{id,name}` 和 `{id,name}`。匿名行使用生成的名称，具名行保留属性名。带类型的空值可由复合类型提供描述信息；不带类型的空值无法确定复合类型。

### 函数行为

`colnames(record)` 返回 `name[]`，标记为 `STABLE`，并且有意不声明为 `STRICT`。它保留列顺序和带引号标识符的拼写，忽略已删除的列，对空复合类型返回空数组。它读取行描述信息，无须读取表数据。

### 运行说明

扩展没有运行时扩展依赖，无须预加载或重启。调用函数时才加载 C 库。控制文件未将扩展标记为可信，因此创建扩展需要超级用户。扩展可重定位，支持安装到指定模式，或通过 `ALTER EXTENSION colnames SET SCHEMA` 移动。

发行版 `1.7.1` 的文档声明兼容 PostgreSQL 8.2–17。PGSTY 软件包面向 PostgreSQL 14–18；PostgreSQL 18 的验收依据是软件包与回归测试，不是该发行版的兼容性声明。

PostgreSQL 9.3 及以后也可以结合 `row_to_json` 和 `json_object_keys` 使用纯 SQL 方案。若把取得的名称用于动态 SQL，必须正确引用标识符，并对值保持参数化。
