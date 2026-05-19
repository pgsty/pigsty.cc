---
title: "provsql"
linkTitle: "provsql"
description: "PostgreSQL 半环溯源与不确定性管理扩展"
weight: 2900
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/PierreSenellart/provsql">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">PierreSenellart/provsql</div>
    <div class="ext-card__desc">https://github.com/PierreSenellart/provsql</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/provsql-1.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">provsql-1.4.0.tar.gz</div>
    <div class="ext-card__desc">provsql-1.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`provsql`**](/ext/e/provsql) | `1.4.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2900  | [**`provsql`**](/ext/e/provsql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`uuid-ossp`](/ext/e/uuid-ossp) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `provsql` | `uuid-ossp` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `provsql_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.4.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-provsql` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 | AVAIL PIGSTY 1.4.0 1 |
@ el8.x86_64 18 provsql_18 provsql_18-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 368.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_18-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 provsql_18 provsql_18-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 340.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_18-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 provsql_18 provsql_18-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 381.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_18-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 provsql_18 provsql_18-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 365.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_18-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 provsql_18 provsql_18-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 392.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_18-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 provsql_18 provsql_18-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 361.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_18-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 330.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 292.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 359.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 314.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 342.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 322.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 354.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 336.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~resolute_amd64.deb pigsty 1.4.0 365.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.4.0-1PIGSTY~resolute_arm64.deb pigsty 1.4.0 341.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-18-provsql_1.4.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 provsql_17 provsql_17-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 368.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_17-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 provsql_17 provsql_17-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 340.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_17-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 provsql_17 provsql_17-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 380.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_17-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 provsql_17 provsql_17-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 365.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_17-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 provsql_17 provsql_17-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 391.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_17-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 provsql_17 provsql_17-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 361.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_17-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 330.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 291.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 358.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 314.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 340.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 321.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 357.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 336.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~resolute_amd64.deb pigsty 1.4.0 365.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.4.0-1PIGSTY~resolute_arm64.deb pigsty 1.4.0 341.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-17-provsql_1.4.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 provsql_16 provsql_16-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 368.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_16-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 provsql_16 provsql_16-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 340.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_16-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 provsql_16 provsql_16-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 380.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_16-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 provsql_16 provsql_16-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 365.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_16-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 provsql_16 provsql_16-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 392.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_16-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 provsql_16 provsql_16-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 361.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_16-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 330.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 292.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 358.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 314.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 341.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 322.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 354.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 336.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~resolute_amd64.deb pigsty 1.4.0 365.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.4.0-1PIGSTY~resolute_arm64.deb pigsty 1.4.0 341.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-16-provsql_1.4.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 provsql_15 provsql_15-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 399.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_15-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 provsql_15 provsql_15-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 371.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_15-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 provsql_15 provsql_15-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 409.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_15-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 provsql_15 provsql_15-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 394.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_15-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 provsql_15 provsql_15-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 416.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_15-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 provsql_15 provsql_15-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 386.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_15-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 366.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 328.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 391.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 347.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 379.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 363.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 391.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 372.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~resolute_amd64.deb pigsty 1.4.0 400.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.4.0-1PIGSTY~resolute_arm64.deb pigsty 1.4.0 377.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-15-provsql_1.4.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 provsql_14 provsql_14-1.4.0-1PIGSTY.el8.x86_64.rpm pigsty 1.4.0 398.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_14-1.4.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 provsql_14 provsql_14-1.4.0-1PIGSTY.el8.aarch64.rpm pigsty 1.4.0 371.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_14-1.4.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 provsql_14 provsql_14-1.4.0-1PIGSTY.el9.x86_64.rpm pigsty 1.4.0 409.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_14-1.4.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 provsql_14 provsql_14-1.4.0-1PIGSTY.el9.aarch64.rpm pigsty 1.4.0 394.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_14-1.4.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 provsql_14 provsql_14-1.4.0-1PIGSTY.el10.x86_64.rpm pigsty 1.4.0 416.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_14-1.4.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 provsql_14 provsql_14-1.4.0-1PIGSTY.el10.aarch64.rpm pigsty 1.4.0 385.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_14-1.4.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb pigsty 1.4.0 365.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb pigsty 1.4.0 327.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~trixie_amd64.deb pigsty 1.4.0 392.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~trixie_arm64.deb pigsty 1.4.0 348.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~jammy_amd64.deb pigsty 1.4.0 379.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~jammy_arm64.deb pigsty 1.4.0 364.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~noble_amd64.deb pigsty 1.4.0 391.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~noble_arm64.deb pigsty 1.4.0 372.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~resolute_amd64.deb pigsty 1.4.0 400.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.4.0-1PIGSTY~resolute_arm64.deb pigsty 1.4.0 377.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-14-provsql_1.4.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `provsql` 扩展的 RPM / DEB 包：

```bash
pig build pkg provsql         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `provsql` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install provsql;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y provsql -v 18  # PG 18
pig ext install -y provsql -v 17  # PG 17
pig ext install -y provsql -v 16  # PG 16
pig ext install -y provsql -v 15  # PG 15
pig ext install -y provsql -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y provsql_18       # PG 18
dnf install -y provsql_17       # PG 17
dnf install -y provsql_16       # PG 16
dnf install -y provsql_15       # PG 15
dnf install -y provsql_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-provsql   # PG 18
apt install -y postgresql-17-provsql   # PG 17
apt install -y postgresql-16-provsql   # PG 16
apt install -y postgresql-15-provsql   # PG 15
apt install -y postgresql-14-provsql   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'provsql';
```


**创建扩展**：

```sql
CREATE EXTENSION provsql CASCADE;  -- 依赖: uuid-ossp
```

## 用法

来源：[README](https://github.com/PierreSenellart/provsql/blob/master/README.md), [v1.4.0 release](https://github.com/PierreSenellart/provsql/releases/tag/v1.4.0), [latest release](https://github.com/PierreSenellart/provsql/releases/tag/v1.6.0), [v1.4.0 control](https://github.com/PierreSenellart/provsql/blob/v1.4.0/provsql.common.control), [getting started](https://provsql.org/docs/user/getting-provsql.html), [configuration](https://provsql.org/docs/user/configuration.html), [semirings](https://provsql.org/docs/user/semirings.html), [v1.4.0 upgrade](https://github.com/PierreSenellart/provsql/blob/v1.4.0/sql/upgrades/provsql--1.3.1--1.4.0.sql)

`provsql` 为 PostgreSQL 添加 semiring provenance 和 uncertainty management。上游文档覆盖 provenance tracking、semiring evaluation、probabilities、Shapley 和 Banzhaf values、where-provenance、update provenance，以及 temporal features。

### 加载并跟踪 Provenance

```ini
shared_preload_libraries = 'provsql'
```

```sql
CREATE EXTENSION provsql CASCADE;
```

`CASCADE` 形式会在需要时自动安装 `uuid-ossp`。getting-started guide 说明 preload 步骤是强制的，因为 ProvSQL 安装了 planner hook。

```sql
SELECT provsql.add_provenance('mytable');

SELECT name, provenance()
FROM mytable;

SELECT provsql.remove_provenance('mytable');
```

用户文档还描述了 provenance mappings：

```sql
SELECT create_provenance_mapping('my_mapping', 'mytable', 'column_name');
SELECT create_provenance_mapping_view('my_mapping_view', 'mytable', 'column_name');
```

### 概率与影响力

为 tuple tokens 分配概率：

```sql
SELECT set_prob(provenance(), 0.8)
FROM mytable
WHERE id = 1;

SELECT name, probability_evaluate(provenance()) AS prob
FROM mytable;
```

计算 influence scores：

```sql
SELECT shapley(provenance(), m.token)
FROM mytable, my_mapping AS m;

SELECT banzhaf(provenance(), m.token)
FROM mytable, my_mapping AS m;
```

文档还描述了 `shapley_all_vars` 和 `banzhaf_all_vars`，用于一次性为所有输入变量计算分数。

### 内置 Semirings

内置 semiring 函数使用 provenance token 和 provenance mapping table：

```sql
SELECT name, sr_boolean(provenance(), 'my_mapping')
FROM mytable;

SELECT name, sr_formula(provenance(), 'my_mapping')
FROM mytable;

SELECT name, sr_how(provenance(), 'my_mapping')
FROM mytable;
```

`provsql` 1.4.0 为 `sr_how`、`sr_which`、`sr_tropical`、`sr_viterbi`、`sr_lukasiewicz`、`sr_minmax` 和 `sr_maxmin` 增加 compiled wrappers。对于 PostgreSQL 14 及之后版本，它还增加了基于 multirange values 的 `sr_temporal`、`sr_interval_num` 和 `sr_interval_int`。

```sql
SELECT city,
       sr_minmax(provenance(), 'personnel_level',
                 'unclassified'::classification_level) AS clearance
FROM (SELECT DISTINCT city FROM personnel) AS t;

SELECT entity_id, sr_temporal(provenance(), 'validity_mapping')
FROM mytable;
```

高级用户仍可定义 custom semirings，并使用 `provenance_evaluate` 或 `aggregation_evaluate` 进行求值；当所需代数已有对应 compiled semiring 时，上游推荐使用 compiled semirings。

### 额外模式与辅助函数

上游文档化的 session GUC 包括：

```sql
SET provsql.active = on;
SET provsql.where_provenance = on;
SET provsql.update_provenance = on;
SET provsql.tool_search_path = '/opt/d4:/home/postgres/bin';
SET provsql.aggtoken_text_as_uuid = on;
```

`provsql.tool_search_path` 用于 `d4`、`c2d`、`dsharp`、`minic2d`、`weightmc` 和 `graph-easy` 等外部概率与可视化工具。`provsql.aggtoken_text_as_uuid` 会让 aggregate-token cells 显示为 provenance UUID；`agg_token_value_text(token)` 可恢复这些 aggregate tokens 的显示文本。

用户指南还单独记录了 where-provenance helpers、update provenance，以及 `get_valid_time`、`timetravel`、`timeslice`、`history`、`undo` 等 temporal helpers。版本 1.4.0 还增加了 circuit inspection helpers `circuit_subgraph(root, max_depth)` 和 `resolve_input(uuid)`，它们供 ProvSQL Studio 使用，也可用于浏览 circuit fragments。

### 说明

- `db/extension.csv` 中的包行列出版本 `1.4.0`、package `provsql`、依赖 `uuid-ossp`，并支持 PostgreSQL 14 到 18。
- 上游文档说明 ProvSQL 已在 PostgreSQL 10 到 18 上测试。即使上游 GitHub 现在已有 `v1.6.0`，Pigsty row 仍跟踪 `1.4.0`，因此对 Pigsty 构建应以 package metadata 作为安装版本。
- `provsql.update_provenance` 和 multirange semirings 要求 PostgreSQL 14 或之后版本。
