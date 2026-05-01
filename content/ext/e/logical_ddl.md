---
title: "logical_ddl"
linkTitle: "logical_ddl"
description: "在 PostgreSQL 逻辑复制中复制受支持的 DDL 变更"
weight: 9530
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/samedyildirim/logical_ddl">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">samedyildirim/logical_ddl</div>
    <div class="ext-card__desc">https://github.com/samedyildirim/logical_ddl</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/logical_ddl-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">logical_ddl-0.1.0.tar.gz</div>
    <div class="ext-card__desc">logical_ddl-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`logical_ddl`**](/ext/e/logical_ddl) | `0.1.0` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9530  | [**`logical_ddl`**](/ext/e/logical_ddl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `logical_ddl` |
{.ext-table}


> Pigsty carries the upstream RAISE WARNING typo fix for 0.1.0.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `logical_ddl` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `logical_ddl_$v` | - |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-logical-ddl` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 logical_ddl_18 logical_ddl_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/logical_ddl_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 logical_ddl_18 logical_ddl_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/logical_ddl_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 logical_ddl_18 logical_ddl_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/logical_ddl_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 logical_ddl_18 logical_ddl_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/logical_ddl_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 logical_ddl_18 logical_ddl_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/logical_ddl_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 logical_ddl_18 logical_ddl_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/logical_ddl_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-logical-ddl postgresql-18-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-18-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 logical_ddl_17 logical_ddl_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/logical_ddl_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 logical_ddl_17 logical_ddl_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/logical_ddl_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 logical_ddl_17 logical_ddl_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/logical_ddl_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 logical_ddl_17 logical_ddl_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/logical_ddl_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 logical_ddl_17 logical_ddl_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/logical_ddl_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 logical_ddl_17 logical_ddl_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/logical_ddl_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 18.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-logical-ddl postgresql-17-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-17-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 logical_ddl_16 logical_ddl_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/logical_ddl_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 logical_ddl_16 logical_ddl_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/logical_ddl_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 logical_ddl_16 logical_ddl_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/logical_ddl_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 logical_ddl_16 logical_ddl_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/logical_ddl_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 logical_ddl_16 logical_ddl_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/logical_ddl_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 logical_ddl_16 logical_ddl_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/logical_ddl_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 15.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-logical-ddl postgresql-16-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-16-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 logical_ddl_15 logical_ddl_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/logical_ddl_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 logical_ddl_15 logical_ddl_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/logical_ddl_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 logical_ddl_15 logical_ddl_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/logical_ddl_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 logical_ddl_15 logical_ddl_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/logical_ddl_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 logical_ddl_15 logical_ddl_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/logical_ddl_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 logical_ddl_15 logical_ddl_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/logical_ddl_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 18.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 15.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 16.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-logical-ddl postgresql-15-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-15-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 logical_ddl_14 logical_ddl_14-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/logical_ddl_14-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 logical_ddl_14 logical_ddl_14-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/logical_ddl_14-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 logical_ddl_14 logical_ddl_14-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 17.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/logical_ddl_14-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 logical_ddl_14 logical_ddl_14-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 17.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/logical_ddl_14-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 logical_ddl_14 logical_ddl_14-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 17.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/logical_ddl_14-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 logical_ddl_14 logical_ddl_14-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 17.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/logical_ddl_14-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 15.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 18.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 15.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 16.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-logical-ddl postgresql-14-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 15.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/l/logical-ddl/postgresql-14-logical-ddl_0.1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `logical_ddl` 扩展的 RPM / DEB 包：

```bash
pig build pkg logical_ddl         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `logical_ddl` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install logical_ddl;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y logical_ddl -v 18  # PG 18
pig ext install -y logical_ddl -v 17  # PG 17
pig ext install -y logical_ddl -v 16  # PG 16
pig ext install -y logical_ddl -v 15  # PG 15
pig ext install -y logical_ddl -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y logical_ddl_18       # PG 18
dnf install -y logical_ddl_17       # PG 17
dnf install -y logical_ddl_16       # PG 16
dnf install -y logical_ddl_15       # PG 15
dnf install -y logical_ddl_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-logical-ddl   # PG 18
apt install -y postgresql-17-logical-ddl   # PG 17
apt install -y postgresql-16-logical-ddl   # PG 16
apt install -y postgresql-15-logical-ddl   # PG 15
apt install -y postgresql-14-logical-ddl   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION logical_ddl;
```

## 用法

来源：[README](https://github.com/samedyildirim/logical_ddl/blob/master/README.md)

`logical_ddl` 会捕获一组受限的 `ALTER TABLE` 变更，将其写入可复制的 shadow table，并在 logical replication 的 subscriber 上回放等价 DDL。

### 支持的 DDL

- `ALTER TABLE ... RENAME TO ...`
- `ALTER TABLE ... RENAME COLUMN ... TO ...`
- `ALTER TABLE ... ADD COLUMN ...`
- `ALTER TABLE ... ALTER COLUMN ... TYPE ...`
- `ALTER TABLE ... DROP COLUMN ...`

内建类型、arrays、composite types、domains 与 enums 可以作为列类型使用，但该扩展不会复制这些自定义类型本身的定义。

### 发布端与订阅端设置

```sql
CREATE EXTENSION logical_ddl;

-- Publisher
INSERT INTO logical_ddl.settings VALUES (true, 'source1');
INSERT INTO logical_ddl.publish_tablelist (relid) VALUES ('table1'::regclass);
ALTER PUBLICATION log_pub_1 ADD TABLE logical_ddl.shadow_table;

-- Subscriber
INSERT INTO logical_ddl.settings VALUES (false, 'source1');
INSERT INTO logical_ddl.subscribe_tablelist (source, relid)
VALUES ('source1', 'table1'::regclass);
ALTER SUBSCRIPTION log_sub_1 REFRESH PUBLICATION;
```

### 主要表

- `logical_ddl.settings`：声明当前节点是 publisher 还是 subscriber，以及 source name。
- `logical_ddl.publish_tablelist`：定义要捕获的表与命令类型。
- `logical_ddl.subscribe_tablelist`：定义要回放的目标表与命令类型。
- `logical_ddl.shadow_table`：复制用的命令日志。
- `logical_ddl.applied_commands`：回放历史与失败跟踪。

### 注意事项

- 该扩展在 superuser 权限下工作。
- 类型变更的 `USING` 表达式、default expressions、constraints 与 indexes 均未实现。
- Pigsty 提到上游在 `0.1.0` 修复了一个 `RAISE WARNING` 拼写错误，但这不影响这里记录的用户用法。
