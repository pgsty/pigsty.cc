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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/provsql-1.2.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">provsql-1.2.3.tar.gz</div>
    <div class="ext-card__desc">provsql-1.2.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`provsql`**](/ext/e/provsql) | `1.2.3` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
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
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `provsql` | `uuid-ossp` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `provsql_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-provsql` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 | AVAIL PIGSTY 1.2.3 1 |
@ el8.x86_64 18 provsql_18 provsql_18-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 313.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_18-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 provsql_18 provsql_18-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 289.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_18-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 provsql_18 provsql_18-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 321.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_18-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 provsql_18 provsql_18-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 307.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_18-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 provsql_18 provsql_18-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 323.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_18-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 provsql_18 provsql_18-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 296.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_18-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 271.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-18-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 239.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-18-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 295.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-18-provsql_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 257.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-18-provsql_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 285.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-18-provsql_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 268.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-18-provsql_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-provsql postgresql-18-provsql_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 297.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-18-provsql_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-provsql postgresql-18-provsql_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 279.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-18-provsql_1.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 provsql_17 provsql_17-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 312.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_17-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 provsql_17 provsql_17-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 289.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_17-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 provsql_17 provsql_17-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 321.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_17-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 provsql_17 provsql_17-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 306.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_17-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 provsql_17 provsql_17-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 323.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_17-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 provsql_17 provsql_17-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 296.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_17-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 270.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-17-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 239.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-17-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 294.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-17-provsql_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 257.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-17-provsql_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 285.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-17-provsql_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 268.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-17-provsql_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-provsql postgresql-17-provsql_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 298.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-17-provsql_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-provsql postgresql-17-provsql_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 279.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-17-provsql_1.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 provsql_16 provsql_16-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 312.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_16-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 provsql_16 provsql_16-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 290.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_16-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 provsql_16 provsql_16-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 321.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_16-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 provsql_16 provsql_16-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 307.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_16-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 provsql_16 provsql_16-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 323.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_16-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 provsql_16 provsql_16-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 296.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_16-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 270.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-16-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 239.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-16-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 295.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-16-provsql_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 257.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-16-provsql_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 286.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-16-provsql_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 268.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-16-provsql_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-provsql postgresql-16-provsql_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 300.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-16-provsql_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-provsql postgresql-16-provsql_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 280.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-16-provsql_1.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 provsql_15 provsql_15-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 340.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_15-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 provsql_15 provsql_15-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 317.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_15-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 provsql_15 provsql_15-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 347.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_15-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 provsql_15 provsql_15-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 333.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_15-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 provsql_15 provsql_15-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 347.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_15-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 provsql_15 provsql_15-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 320.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_15-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 302.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-15-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 271.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-15-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 325.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-15-provsql_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 288.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-15-provsql_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 319.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-15-provsql_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 302.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-15-provsql_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-provsql postgresql-15-provsql_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 331.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-15-provsql_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-provsql postgresql-15-provsql_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 314.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-15-provsql_1.2.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 provsql_14 provsql_14-1.2.3-1PIGSTY.el8.x86_64.rpm pigsty 1.2.3 339.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/provsql_14-1.2.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 provsql_14 provsql_14-1.2.3-1PIGSTY.el8.aarch64.rpm pigsty 1.2.3 317.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/provsql_14-1.2.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 provsql_14 provsql_14-1.2.3-1PIGSTY.el9.x86_64.rpm pigsty 1.2.3 347.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/provsql_14-1.2.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 provsql_14 provsql_14-1.2.3-1PIGSTY.el9.aarch64.rpm pigsty 1.2.3 333.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/provsql_14-1.2.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 provsql_14 provsql_14-1.2.3-1PIGSTY.el10.x86_64.rpm pigsty 1.2.3 347.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/provsql_14-1.2.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 provsql_14 provsql_14-1.2.3-1PIGSTY.el10.aarch64.rpm pigsty 1.2.3 319.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/provsql_14-1.2.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb pigsty 1.2.3 302.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-14-provsql_1.2.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb pigsty 1.2.3 270.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/provsql/postgresql-14-provsql_1.2.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.2.3-1PIGSTY~trixie_amd64.deb pigsty 1.2.3 324.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-14-provsql_1.2.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.2.3-1PIGSTY~trixie_arm64.deb pigsty 1.2.3 287.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/provsql/postgresql-14-provsql_1.2.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.2.3-1PIGSTY~jammy_amd64.deb pigsty 1.2.3 318.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-14-provsql_1.2.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.2.3-1PIGSTY~jammy_arm64.deb pigsty 1.2.3 303.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/provsql/postgresql-14-provsql_1.2.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-provsql postgresql-14-provsql_1.2.3-1PIGSTY~noble_amd64.deb pigsty 1.2.3 330.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-14-provsql_1.2.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-provsql postgresql-14-provsql_1.2.3-1PIGSTY~noble_arm64.deb pigsty 1.2.3 312.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/provsql/postgresql-14-provsql_1.2.3-1PIGSTY~noble_arm64.deb
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

- 来源: [GitHub 仓库](https://github.com/PierreSenellart/provsql), [项目文档](https://provsql.org/docs/), [入门指南](https://provsql.org/docs/user/getting-provsql.html)
- ProvSQL 为 PostgreSQL 增加 m-semiring 溯源和不确定性管理能力，支持概率、Shapley 值以及半环求值。

```sql
shared_preload_libraries = 'provsql'
CREATE EXTENSION provsql CASCADE;
```

上游快速安装说明还列出了这些前置条件：PostgreSQL 10 及以上版本、C++17 编译器、PostgreSQL 头文件、`uuid-ossp` 以及 Boost 库。

## 核心流程

ProvSQL 通过 `shared_preload_libraries` 加载，然后使用 `CREATE EXTENSION provsql CASCADE;` 安装。

典型用途包括：

- 在不同半环上计算溯源
- 计算概率和期望值
- 计算 Shapley 值等博弈论贡献
- 使用内置的编译型半环处理常见场景

## 备注

项目主页和文档位于 [provsql.org](https://provsql.org/)。README 指向用户指南，涵盖完整的安装和测试流程。
