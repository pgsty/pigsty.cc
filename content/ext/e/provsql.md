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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/provsql-1.11.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">provsql-1.11.0.tar.gz</div>
    <div class="ext-card__desc">provsql-1.11.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`provsql`**](/ext/e/provsql) | `1.11.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
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
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.11.0` | {{< pgvers "18,17,16,15,14" >}} | `provsql` | `uuid-ossp` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.11.0` | {{< pgvers "18,17,16,15,14" >}} | `provsql_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.11.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-provsql` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
@ el8.x86_64 18 provsql_18 provsql_18-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_18-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 provsql_18 provsql_18-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_18-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 provsql_18 provsql_18-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_18-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 provsql_18 provsql_18-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_18-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 provsql_18 provsql_18-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_18-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 provsql_18 provsql_18-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_18-1.11.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~resolute_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.11.0-1PIGSTY~resolute_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-18-provsql_1.11.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 provsql_17 provsql_17-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_17-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 provsql_17 provsql_17-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_17-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 provsql_17 provsql_17-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_17-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 provsql_17 provsql_17-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_17-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 provsql_17 provsql_17-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_17-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 provsql_17 provsql_17-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_17-1.11.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~resolute_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.11.0-1PIGSTY~resolute_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-17-provsql_1.11.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 provsql_16 provsql_16-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_16-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 provsql_16 provsql_16-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_16-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 provsql_16 provsql_16-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_16-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 provsql_16 provsql_16-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_16-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 provsql_16 provsql_16-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_16-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 provsql_16 provsql_16-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_16-1.11.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 1.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~resolute_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.11.0-1PIGSTY~resolute_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-16-provsql_1.11.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 provsql_15 provsql_15-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_15-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 provsql_15 provsql_15-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_15-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 provsql_15 provsql_15-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_15-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 provsql_15 provsql_15-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_15-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 provsql_15 provsql_15-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 1.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_15-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 provsql_15 provsql_15-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_15-1.11.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~resolute_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.11.0-1PIGSTY~resolute_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-15-provsql_1.11.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 provsql_14 provsql_14-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_14-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 provsql_14 provsql_14-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_14-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 provsql_14 provsql_14-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_14-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 provsql_14 provsql_14-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_14-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 provsql_14 provsql_14-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_14-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 provsql_14 provsql_14-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_14-1.11.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 1.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~resolute_amd64.deb pigsty 1.11.0 1.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.11.0-1PIGSTY~resolute_arm64.deb pigsty 1.11.0 1.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/provsql/postgresql-14-provsql_1.11.0-1PIGSTY~resolute_arm64.deb
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

来源：

- [ProvSQL 1.11.0 文档](https://github.com/PierreSenellart/provsql/blob/v1.11.0/doc/provsql.md)
- [ProvSQL 1.11.0 发行版](https://github.com/PierreSenellart/provsql/releases/tag/v1.11.0)
- [ProvSQL 1.10.0 发行版](https://github.com/PierreSenellart/provsql/releases/tag/v1.10.0)
- [ProvSQL 1.11.0 控制文件](https://github.com/PierreSenellart/provsql/blob/v1.11.0/provsql.common.control)
- [ProvSQL 用户文档](https://provsql.org/docs/user/introduction.html)

`provsql` 将半环证明和不确定性管理添加到 PostgreSQL 中。上游文档介绍了证明跟踪、半环评估、概率、Shapley 和 Banzhaf 值、来源证明、更新证明以及时间特征。

### 加载并追踪证明

```ini
shared_preload_libraries = 'provsql'
```

```sql
CREATE EXTENSION provsql CASCADE;
```

`CASCADE` 形式会自动安装 `uuid-ossp`（如果需要）。入门指南指出，预加载步骤是必需的，因为 ProvSQL 安装了一个计划器挂钩。

```sql
SELECT provsql.add_provenance('mytable');

SELECT name, provenance()
FROM mytable;

SELECT provsql.remove_provenance('mytable');
```

用户文档还描述了证明映射：

```sql
SELECT create_provenance_mapping('my_mapping', 'mytable', 'column_name');
SELECT create_provenance_mapping_view('my_mapping_view', 'mytable', 'column_name');
```

### 概率与影响

为元组标记分配概率：

```sql
SELECT set_prob(provenance(), 0.8)
FROM mytable
WHERE id = 1;

SELECT name, probability_evaluate(provenance()) AS prob
FROM mytable;
```

计算影响得分：

```sql
SELECT shapley(provenance(), m.token)
FROM mytable, my_mapping AS m;

SELECT banzhaf(provenance(), m.token)
FROM mytable, my_mapping AS m;
```

文档中也介绍了 `shapley_all_vars` 和 `banzhaf_all_vars`，用于一次性计算所有输入变量的得分。

### 内置半环

内置半环函数使用证明标记和证明映射表：

```sql
SELECT name, sr_boolean(provenance(), 'my_mapping')
FROM mytable;

SELECT name, sr_formula(provenance(), 'my_mapping')
FROM mytable;

SELECT name, sr_how(provenance(), 'my_mapping')
FROM mytable;
```

当前文档包括编译后的包装器：`sr_how`、`sr_which`、`sr_tropical`、`sr_viterbi`、`sr_lukasiewicz`、`sr_minmax` 和 `sr_maxmin`。对于 PostgreSQL 14 及以上版本，它们还包括对多范围值的 `sr_temporal`、`sr_interval_num` 和 `sr_interval_int`。

```sql
SELECT city,
       sr_minmax(provenance(), 'personnel_level',
                 'unclassified'::classification_level) AS clearance
FROM (SELECT DISTINCT city FROM personnel) AS t;

SELECT entity_id, sr_temporal(provenance(), 'validity_mapping')
FROM mytable;
```

高级用户仍然可以定义自定义半环，并使用 `provenance_evaluate` 或 `aggregation_evaluate` 评估它们；上游建议当一个半环匹配所需的代数时，使用编译的半环。

### 额外模式和助手

上游文档中记录的会话 GUC 包括：

```sql
SET provsql.active = on;
SET provsql.where_provenance = on;
SET provsql.update_provenance = on;
SET provsql.last_eval_method = on;
SET provsql.tool_search_path = '/opt/d4:/home/postgres/bin';
SET provsql.aggtoken_text_as_uuid = on;
```

`provsql.tool_search_path` 用于外部概率和可视化工具，如 `d4`、`c2d`、`dsharp`、`minic2d`、`weightmc` 和 `graph-easy`。`provsql.last_eval_method` 存储最后选择的概率评估方法。`provsql.aggtoken_text_as_uuid` 使聚合标记单元格显示为其证明 UUID；`agg_token_value_text(token)` 可以恢复这些聚合标记的显示文本。

用户指南单独记录了来源证明助手、更新证明、时间助手，如 `get_valid_time`、`timetravel`、`timeslice`、`history` 和 `undo`，电路检查助手 `circuit_subgraph(root, max_depth)` 和 `resolve_input(uuid)` 以及用于准备助手搜索路径的 `setup_search_path()`。

### 当前概率和推理界面

从 1.9 到 1.11 的多次发布显著扩展了 SQL 覆盖范围和概率评估：

- `FROM` 之外的子查询，包括 `EXISTS`、`NOT EXISTS`、`IN`、`NOT IN`、`ANY`、`ALL`、行值 `IN` 子查询和 `ARRAY(SELECT ...)`；
- `LEFT`、`RIGHT` 和 `FULL` 外连接，以及修正的 `EXCEPT` 和 `EXCEPT ALL` 证明；
- 遵循 SQL 的聚合处理方法和精确 `HAVING` 聚合概率，适用于 `COUNT`、`SUM`、`MIN`、`MAX` 和 `AVG`；
- 通过方法目录和成本选择器进行概率方法的选择，包括 `karp-luby`、`stopping-rule`、`sieve`、`d-tree` 和 `probability_bounds`；
- 精确的有界树宽递归可达性、不安全-UCQ 联合宽度编译、安全 UCQ 的 Möbius 反演以及循环递归的吸收证明；
- 通过 `target | evidence` 操作符和整个元组的 `given()`/前缀形式进行条件事件和分布处理；
- 连续和离散 `random_variable` 家族，包括正态、伽玛、对数正态、贝塔、威布尔、帕累托、逆伽玛、逆高斯、逻辑斯谛、泊松、二项式、几何、超几何和负二项分布；
- 分层贝叶斯模型，其中分布参数本身是随机变量，在可用闭合形式时进行共轭后验更新；
- 随着源数据变化而保持正确的维护证明映射，以及对 `NULL` 和可为空的随机变量的 SQL 合规 `NOT IN` 行为。

例如，根据观察到的证据条件化一个连续值并读取后验期望：

```sql
WITH model AS (
  SELECT normal(20, 5) AS reading
)
SELECT expected(reading | (reading > 25))
FROM model;
```

`agg_token` 类型支持概率聚合表达式的算术、一元负号和比较。使用官方的概率和连续分布章节来选择精确、编译或基于采样的评估方法。

### 备注

- 1.11.0 控制文件设置了 `default_version = '1.11.0'`，要求 `uuid-ossp`，标记扩展为受信任的，并且不可重定位。
- 上游文档指出 ProvSQL 已在 PostgreSQL 10 至 18 版本上进行了测试。
- `provsql.update_provenance` 和多范围半环需要 PostgreSQL 14 或更高版本。
- 更新证明追踪仍处于实验阶段；启用之前请验证其存储和性能成本。

还应分别验证 `NULL` 与 `EXCEPT` 的 SQL 语义是否符合应用预期。
