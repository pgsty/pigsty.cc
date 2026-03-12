---
title: "ddl_historization"
linkTitle: "ddl_historization"
description: "用SQL将所有DDL变更写入到数据库表中"
weight: 4310
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rodo/pg_ddl_historization">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rodo/pg_ddl_historization</div>
    <div class="ext-card__desc">https://github.com/rodo/pg_ddl_historization</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_ddl_historization-0.0.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_ddl_historization-0.0.7.tar.gz</div>
    <div class="ext-card__desc">pg_ddl_historization-0.0.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`ddl_historization`**](/ext/e/ddl_historization) | `0.0.7` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4310  | [**`ddl_historization`**](/ext/e/ddl_historization) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pg_readme`](/ext/e/pg_readme) [`data_historization`](/ext/e/data_historization) [`table_version`](/ext/e/table_version) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`schedoc`](/ext/e/schedoc) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.7` | {{< pgvers "18,17,16,15,14" >}} | `ddl_historization` | `plpgsql` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.7` | {{< pgvers "18,17,16,15,14" >}} | `ddl_historization_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.0.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ddl-historization` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el8.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el9.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el9.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el10.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| el10.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| d12.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| d12.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| d13.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| d13.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u22.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u22.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u24.x86_64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
| u24.aarch64 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 | AVAIL PIGSTY 0.0.7 1 |
@ el8.x86_64 18 ddl_historization_18 ddl_historization_18-0.0.7-1PIGSTY.el8.x86_64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/ddl_historization_18-0.0.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 ddl_historization_18 ddl_historization_18-0.0.7-1PIGSTY.el8.aarch64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/ddl_historization_18-0.0.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 ddl_historization_18 ddl_historization_18-0.0.7-1PIGSTY.el9.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/ddl_historization_18-0.0.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 ddl_historization_18 ddl_historization_18-0.0.7-1PIGSTY.el9.aarch64.rpm pigsty 0.0.7 15.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/ddl_historization_18-0.0.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 ddl_historization_18 ddl_historization_18-0.0.7-1PIGSTY.el10.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/ddl_historization_18-0.0.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 ddl_historization_18 ddl_historization_18-0.0.7-1PIGSTY.el10.aarch64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/ddl_historization_18-0.0.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 ddl_historization_17 ddl_historization_17-0.0.7-1PIGSTY.el8.x86_64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/ddl_historization_17-0.0.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 ddl_historization_17 ddl_historization_17-0.0.7-1PIGSTY.el8.aarch64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/ddl_historization_17-0.0.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 ddl_historization_17 ddl_historization_17-0.0.7-1PIGSTY.el9.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/ddl_historization_17-0.0.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 ddl_historization_17 ddl_historization_17-0.0.7-1PIGSTY.el9.aarch64.rpm pigsty 0.0.7 15.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/ddl_historization_17-0.0.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 ddl_historization_17 ddl_historization_17-0.0.7-1PIGSTY.el10.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/ddl_historization_17-0.0.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 ddl_historization_17 ddl_historization_17-0.0.7-1PIGSTY.el10.aarch64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/ddl_historization_17-0.0.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 ddl_historization_16 ddl_historization_16-0.0.7-1PIGSTY.el8.x86_64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/ddl_historization_16-0.0.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 ddl_historization_16 ddl_historization_16-0.0.7-1PIGSTY.el8.aarch64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/ddl_historization_16-0.0.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 ddl_historization_16 ddl_historization_16-0.0.7-1PIGSTY.el9.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/ddl_historization_16-0.0.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 ddl_historization_16 ddl_historization_16-0.0.7-1PIGSTY.el9.aarch64.rpm pigsty 0.0.7 15.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/ddl_historization_16-0.0.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 ddl_historization_16 ddl_historization_16-0.0.7-1PIGSTY.el10.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/ddl_historization_16-0.0.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 ddl_historization_16 ddl_historization_16-0.0.7-1PIGSTY.el10.aarch64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/ddl_historization_16-0.0.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 ddl_historization_15 ddl_historization_15-0.0.7-1PIGSTY.el8.x86_64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/ddl_historization_15-0.0.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 ddl_historization_15 ddl_historization_15-0.0.7-1PIGSTY.el8.aarch64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/ddl_historization_15-0.0.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 ddl_historization_15 ddl_historization_15-0.0.7-1PIGSTY.el9.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/ddl_historization_15-0.0.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 ddl_historization_15 ddl_historization_15-0.0.7-1PIGSTY.el9.aarch64.rpm pigsty 0.0.7 15.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/ddl_historization_15-0.0.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 ddl_historization_15 ddl_historization_15-0.0.7-1PIGSTY.el10.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/ddl_historization_15-0.0.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 ddl_historization_15 ddl_historization_15-0.0.7-1PIGSTY.el10.aarch64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/ddl_historization_15-0.0.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 ddl_historization_14 ddl_historization_14-0.0.7-1PIGSTY.el8.x86_64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/ddl_historization_14-0.0.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 ddl_historization_14 ddl_historization_14-0.0.7-1PIGSTY.el8.aarch64.rpm pigsty 0.0.7 16.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/ddl_historization_14-0.0.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 ddl_historization_14 ddl_historization_14-0.0.7-1PIGSTY.el9.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/ddl_historization_14-0.0.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 ddl_historization_14 ddl_historization_14-0.0.7-1PIGSTY.el9.aarch64.rpm pigsty 0.0.7 15.8KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/ddl_historization_14-0.0.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 ddl_historization_14 ddl_historization_14-0.0.7-1PIGSTY.el10.x86_64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/ddl_historization_14-0.0.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 ddl_historization_14 ddl_historization_14-0.0.7-1PIGSTY.el10.aarch64.rpm pigsty 0.0.7 15.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/ddl_historization_14-0.0.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.0.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.0.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.0.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb pigsty 0.0.7 3.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.0.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.0.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.0.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.0.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb pigsty 0.0.7 2.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.0.7-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `ddl_historization` 扩展的 RPM / DEB 包：

```bash
pig build pkg ddl_historization         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `ddl_historization` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install ddl_historization;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y ddl_historization -v 18  # PG 18
pig ext install -y ddl_historization -v 17  # PG 17
pig ext install -y ddl_historization -v 16  # PG 16
pig ext install -y ddl_historization -v 15  # PG 15
pig ext install -y ddl_historization -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y ddl_historization_18       # PG 18
dnf install -y ddl_historization_17       # PG 17
dnf install -y ddl_historization_16       # PG 16
dnf install -y ddl_historization_15       # PG 15
dnf install -y ddl_historization_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-ddl-historization   # PG 18
apt install -y postgresql-17-ddl-historization   # PG 17
apt install -y postgresql-16-ddl-historization   # PG 16
apt install -y postgresql-15-ddl-historization   # PG 15
apt install -y postgresql-14-ddl-historization   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION ddl_historization CASCADE;  -- 依赖: plpgsql
```



## 用法

> [ddl_historization: 跟踪 PostgreSQL 数据库中的所有 DDL 变更](https://github.com/rodo/pg_ddl_historization)

将数据库上所有的 DDL 变更（CREATE、ALTER、DROP 等）记录到历史化表中，用于审计和跟踪。

### 安装

```sql
CREATE EXTENSION ddl_historization;
```

该扩展安装事件触发器，自动捕获 DDL 语句并将其存储在历史化表中。

### 查询 DDL 历史

安装后，所有 DDL 变更会自动记录。查询历史表以查看已发生的变更：

```sql
SELECT * FROM ddl_history ORDER BY ddl_date DESC;
```

### 与 pg_tle 集成

在 AWS RDS 环境中，可以通过 `pg_tle` 部署该扩展：

```sql
-- 构建 pg_tle 部署文件
-- $ make pgtle
-- 然后在实例上执行 pgtle.ddl_historization-0.3.sql
```

### 注意事项

- DDL 语句通过 PostgreSQL 事件触发器捕获
- 支持 `CREATE`、`ALTER`、`DROP` 及其他 DDL 命令
- 被 `schedoc` 扩展用作依赖项，用于模式文档化
