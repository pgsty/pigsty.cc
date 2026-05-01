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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_ddl_historization-0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_ddl_historization-0.2.tar.gz</div>
    <div class="ext-card__desc">pg_ddl_historization-0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`ddl_historization`**](/ext/e/ddl_historization) | `0.2` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
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
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2` | {{< pgvers "18,17,16,15,14" >}} | `ddl_historization` | `plpgsql` |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2` | {{< pgvers "18,17,16,15,14" >}} | `ddl_historization_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ddl-historization` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u26.x86_64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
| u26.aarch64 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 | AVAIL PIGSTY 0.2 1 |
@ el8.x86_64 18 ddl_historization_18 ddl_historization_18-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddl_historization_18-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 ddl_historization_18 ddl_historization_18-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddl_historization_18-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 ddl_historization_18 ddl_historization_18-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddl_historization_18-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 ddl_historization_18 ddl_historization_18-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddl_historization_18-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 ddl_historization_18 ddl_historization_18-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddl_historization_18-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 ddl_historization_18 ddl_historization_18-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddl_historization_18-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-ddl-historization postgresql-18-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-18-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 ddl_historization_17 ddl_historization_17-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddl_historization_17-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 ddl_historization_17 ddl_historization_17-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddl_historization_17-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 ddl_historization_17 ddl_historization_17-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddl_historization_17-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 ddl_historization_17 ddl_historization_17-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddl_historization_17-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 ddl_historization_17 ddl_historization_17-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddl_historization_17-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 ddl_historization_17 ddl_historization_17-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddl_historization_17-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-ddl-historization postgresql-17-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-17-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 ddl_historization_16 ddl_historization_16-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddl_historization_16-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 ddl_historization_16 ddl_historization_16-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddl_historization_16-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 ddl_historization_16 ddl_historization_16-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddl_historization_16-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 ddl_historization_16 ddl_historization_16-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddl_historization_16-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 ddl_historization_16 ddl_historization_16-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddl_historization_16-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 ddl_historization_16 ddl_historization_16-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddl_historization_16-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-ddl-historization postgresql-16-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-16-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 ddl_historization_15 ddl_historization_15-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddl_historization_15-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 ddl_historization_15 ddl_historization_15-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddl_historization_15-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 ddl_historization_15 ddl_historization_15-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddl_historization_15-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 ddl_historization_15 ddl_historization_15-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddl_historization_15-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 ddl_historization_15 ddl_historization_15-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddl_historization_15-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 ddl_historization_15 ddl_historization_15-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddl_historization_15-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-ddl-historization postgresql-15-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-15-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 ddl_historization_14 ddl_historization_14-0.2-1PIGSTY.el8.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddl_historization_14-0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 ddl_historization_14 ddl_historization_14-0.2-1PIGSTY.el8.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddl_historization_14-0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 ddl_historization_14 ddl_historization_14-0.2-1PIGSTY.el9.x86_64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddl_historization_14-0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 ddl_historization_14 ddl_historization_14-0.2-1PIGSTY.el9.aarch64.rpm pigsty 0.2 15.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddl_historization_14-0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 ddl_historization_14 ddl_historization_14-0.2-1PIGSTY.el10.x86_64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddl_historization_14-0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 ddl_historization_14 ddl_historization_14-0.2-1PIGSTY.el10.aarch64.rpm pigsty 0.2 15.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddl_historization_14-0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb pigsty 0.2 2.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~noble_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~noble_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-ddl-historization postgresql-14-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb pigsty 0.2 2.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/d/ddl-historization/postgresql-14-ddl-historization_0.2-1PIGSTY~resolute_arm64.deb
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

来源：[README](https://github.com/rodo/pg_ddl_historization/blob/master/README.md)，[releases](https://github.com/rodo/pg_ddl_historization/releases)

`ddl_historization` 是一个 PostgreSQL 扩展，用于把数据库中的 DDL 变更记录到历史化表中。上游 README 说明可通过 `make install`、`pgxn install ddl_historization`，以及 AWS RDS 上的 `pg_tle` 路径完成安装。

### 启用日志

```sql
CREATE EXTENSION ddl_historization;
```

README 将该扩展描述为使用 PostgreSQL event trigger 对数据库中的 DDL 变更做历史化记录。

### 上游当前文档

- 集群本地安装：`make install`
- PGXN 安装：`pgxn install ddl_historization`
- AWS RDS / `pg_tle`：用 `make pgtle` 构建 `pgtle.ddl_historization-0.3.sql`
- 测试套件：使用 pgTAP 的 `make test`

### 值得关注的发布说明

- `0.2` 是这次刷新任务要求对应的版本。
- `0.0.4` 的发布说明提到新增了启动和停止日志记录的函数。
- `0.0.6` 的发布说明提到新增了 `ddl_history_column` 表。
- `0.0.7` 的发布说明提到修复了与外键相关的日志记录问题。

### 注意事项

当前上游 README 仍较简略，没有给出 start/stop logging 函数的精确 SQL 签名，也没有完整说明后续版本新增历史化表的 schema。除非 README 或发布说明更明确，否则这里应保持保守描述。
