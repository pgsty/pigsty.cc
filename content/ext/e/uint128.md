---
title: "uint128"
linkTitle: "uint128"
description: "原生128位无符号整型数据类型"
weight: 3760
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pg-uint/pg-uint128">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pg-uint/pg-uint128</div>
    <div class="ext-card__desc">https://github.com/pg-uint/pg-uint128</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg-uint128-1.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg-uint128-1.3.0.tar.gz</div>
    <div class="ext-card__desc">pg-uint128-1.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_uint128`**](/ext/e/uint128) | `1.3.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3760  | [**`uint128`**](/ext/e/uint128) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table .wide .expand}

| **相关扩展** | [`uint`](/ext/e/uint) [`pgmp`](/ext/e/pgmp) [`numeral`](/ext/e/numeral) [`unit`](/ext/e/unit) [`pg_rational`](/ext/e/pg_rational) [`seg`](/ext/e/seg) [`cube`](/ext/e/cube) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> breaks on el8 since 1.1 ,fix el8 build problem by adding __has_builtin marco


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.0` | {{< pgvers "19,18,17,16,15" >}} | `pg_uint128` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.0` | {{< pgvers "19,18,17,16,15" >}} | `pg_uint128_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3.0` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pg-uint128` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 | AVAIL PIGSTY 1.3.0 1 |
@ el9.x86_64 19 pg_uint128_19 pg_uint128_19-1.3.0-1PGSTY.el9.x86_64.rpm pigsty 1.3.0 387.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uint128_19-1.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 pg_uint128_19 pg_uint128_19-1.3.0-1PGSTY.el9.aarch64.rpm pigsty 1.3.0 379.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uint128_19-1.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 pg_uint128_19 pg_uint128_19-1.3.0-1PGSTY.el10.x86_64.rpm pigsty 1.3.0 389.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uint128_19-1.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 pg_uint128_19 pg_uint128_19-1.3.0-1PGSTY.el10.aarch64.rpm pigsty 1.3.0 382.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uint128_19-1.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb pigsty 1.3.0 330.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb pigsty 1.3.0 320.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb pigsty 1.3.0 329.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb pigsty 1.3.0 323.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb pigsty 1.3.0 368.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb pigsty 1.3.0 360.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb pigsty 1.3.0 358.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb pigsty 1.3.0 355.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb pigsty 1.3.0 359.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-pg-uint128 postgresql-19-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb pigsty 1.3.0 353.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-19-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 pg_uint128_18 pg_uint128_18-1.3.0-1PGSTY.el8.x86_64.rpm pigsty 1.3.0 386.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uint128_18-1.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_uint128_18 pg_uint128_18-1.3.0-1PGSTY.el8.aarch64.rpm pigsty 1.3.0 372.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uint128_18-1.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_uint128_18 pg_uint128_18-1.3.0-1PGSTY.el9.x86_64.rpm pigsty 1.3.0 387.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uint128_18-1.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_uint128_18 pg_uint128_18-1.3.0-1PGSTY.el9.aarch64.rpm pigsty 1.3.0 379.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uint128_18-1.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_uint128_18 pg_uint128_18-1.3.0-1PGSTY.el10.x86_64.rpm pigsty 1.3.0 389.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uint128_18-1.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_uint128_18 pg_uint128_18-1.3.0-1PGSTY.el10.aarch64.rpm pigsty 1.3.0 382.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uint128_18-1.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb pigsty 1.3.0 331.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb pigsty 1.3.0 320.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb pigsty 1.3.0 330.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb pigsty 1.3.0 323.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb pigsty 1.3.0 368.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb pigsty 1.3.0 360.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb pigsty 1.3.0 357.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb pigsty 1.3.0 355.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb pigsty 1.3.0 359.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-uint128 postgresql-18-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb pigsty 1.3.0 353.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-18-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_uint128_17 pg_uint128_17-1.3.0-1PGSTY.el8.x86_64.rpm pigsty 1.3.0 385.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uint128_17-1.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_uint128_17 pg_uint128_17-1.3.0-1PGSTY.el8.aarch64.rpm pigsty 1.3.0 372.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uint128_17-1.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_uint128_17 pg_uint128_17-1.3.0-1PGSTY.el9.x86_64.rpm pigsty 1.3.0 387.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uint128_17-1.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_uint128_17 pg_uint128_17-1.3.0-1PGSTY.el9.aarch64.rpm pigsty 1.3.0 379.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uint128_17-1.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_uint128_17 pg_uint128_17-1.3.0-1PGSTY.el10.x86_64.rpm pigsty 1.3.0 389.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uint128_17-1.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_uint128_17 pg_uint128_17-1.3.0-1PGSTY.el10.aarch64.rpm pigsty 1.3.0 382.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uint128_17-1.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb pigsty 1.3.0 331.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb pigsty 1.3.0 320.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb pigsty 1.3.0 329.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb pigsty 1.3.0 322.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb pigsty 1.3.0 385.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb pigsty 1.3.0 375.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb pigsty 1.3.0 358.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb pigsty 1.3.0 355.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb pigsty 1.3.0 359.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-uint128 postgresql-17-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb pigsty 1.3.0 352.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-17-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_uint128_16 pg_uint128_16-1.3.0-1PGSTY.el8.x86_64.rpm pigsty 1.3.0 385.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uint128_16-1.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_uint128_16 pg_uint128_16-1.3.0-1PGSTY.el8.aarch64.rpm pigsty 1.3.0 372.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uint128_16-1.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_uint128_16 pg_uint128_16-1.3.0-1PGSTY.el9.x86_64.rpm pigsty 1.3.0 387.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uint128_16-1.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_uint128_16 pg_uint128_16-1.3.0-1PGSTY.el9.aarch64.rpm pigsty 1.3.0 379.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uint128_16-1.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_uint128_16 pg_uint128_16-1.3.0-1PGSTY.el10.x86_64.rpm pigsty 1.3.0 389.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uint128_16-1.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_uint128_16 pg_uint128_16-1.3.0-1PGSTY.el10.aarch64.rpm pigsty 1.3.0 382.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uint128_16-1.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb pigsty 1.3.0 331.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb pigsty 1.3.0 320.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb pigsty 1.3.0 329.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb pigsty 1.3.0 322.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb pigsty 1.3.0 383.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb pigsty 1.3.0 374.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb pigsty 1.3.0 357.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb pigsty 1.3.0 354.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb pigsty 1.3.0 358.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-uint128 postgresql-16-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb pigsty 1.3.0 352.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-16-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_uint128_15 pg_uint128_15-1.3.0-1PGSTY.el8.x86_64.rpm pigsty 1.3.0 387.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_uint128_15-1.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_uint128_15 pg_uint128_15-1.3.0-1PGSTY.el8.aarch64.rpm pigsty 1.3.0 373.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_uint128_15-1.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_uint128_15 pg_uint128_15-1.3.0-1PGSTY.el9.x86_64.rpm pigsty 1.3.0 388.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_uint128_15-1.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_uint128_15 pg_uint128_15-1.3.0-1PGSTY.el9.aarch64.rpm pigsty 1.3.0 381.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_uint128_15-1.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_uint128_15 pg_uint128_15-1.3.0-1PGSTY.el10.x86_64.rpm pigsty 1.3.0 391.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_uint128_15-1.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_uint128_15 pg_uint128_15-1.3.0-1PGSTY.el10.aarch64.rpm pigsty 1.3.0 384.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_uint128_15-1.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb pigsty 1.3.0 335.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb pigsty 1.3.0 324.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb pigsty 1.3.0 333.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb pigsty 1.3.0 326.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb pigsty 1.3.0 386.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb pigsty 1.3.0 377.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb pigsty 1.3.0 361.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb pigsty 1.3.0 358.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb pigsty 1.3.0 360.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-uint128 postgresql-15-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb pigsty 1.3.0 354.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-uint128/postgresql-15-pg-uint128_1.3.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_uint128` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_uint128         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_uint128` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_uint128;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_uint128 -v 19  # PG 19
pig ext install -y pg_uint128 -v 18  # PG 18
pig ext install -y pg_uint128 -v 17  # PG 17
pig ext install -y pg_uint128 -v 16  # PG 16
pig ext install -y pg_uint128 -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_uint128_19       # PG 19
dnf install -y pg_uint128_18       # PG 18
dnf install -y pg_uint128_17       # PG 17
dnf install -y pg_uint128_16       # PG 16
dnf install -y pg_uint128_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pg-uint128   # PG 19
apt install -y postgresql-18-pg-uint128   # PG 18
apt install -y postgresql-17-pg-uint128   # PG 17
apt install -y postgresql-16-pg-uint128   # PG 16
apt install -y postgresql-15-pg-uint128   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION uint128;
```

## 用法

来源：

- [README.md](https://api.pgxn.org/src/uint128/uint128-1.3.0/README.md)
- [uint128.control](https://api.pgxn.org/src/uint128/uint128-1.3.0/uint128.control)
- [uint128--1.2.0--1.3.0.sql](https://api.pgxn.org/src/uint128/uint128-1.3.0/uint128--1.2.0--1.3.0.sql)
- [1.3.0](https://github.com/pg-uint/pg-uint128/releases/tag/1.3.0)


`uint128` 提供无符号整数，以及有符号 8 位和 128 位整数类型。1.3.0 支持 PostgreSQL 12–18，并修复了可能使索引比较返回错误结果的操作符元数据。

### 保存与查询整数

安装需要超级用户；控制文件未将扩展标记为可信。扩展可迁移模式，不要求预加载。

```sql
CREATE EXTENSION uint128;
CREATE TABLE ids (id uint16 PRIMARY KEY);
INSERT INTO ids VALUES ('340282366920938463463374607431768211455'::uint16);
SELECT * FROM ids WHERE id > '18446744073709551615'::uint16;
SELECT * FROM generate_series(1::uint4, 3::uint4);
```

无符号类型 `uint1`、`uint2`、`uint4`、`uint8` 和 `uint16` 分别占用 1、2、4、8 和 16 字节，范围为零至 2 的相应位数次方减一。`int1` 和 `int16` 则是有符号的 1 字节和 16 字节类型。

### 操作符与索引

这些类型提供算术、比较、位运算、B-tree 和哈希索引、二进制输入输出、类型转换及 `generate_series`。对应范围类型（包括 `uint1range` 和 `uint16range`）支持 GiST 索引；多范围类型取决于服务器支持。`SUM` 和 `AVG` 内部使用 `numeric`，也提供 `MIN` 和 `MAX`。

有符号与无符号整数的混合运算受操作数顺序和结果类型影响。结果可能为负数时应显式转换类型，因为无符号结果无法表示负数。转换和算术运算可能报越界错误，不能假设数值会回绕。

### 升级至 1.3.0

安装匹配的文件后，以超级用户执行：

```sql
ALTER EXTENSION uint128 UPDATE TO '1.3.0';
```

该更新修正比较操作符的交换关系，并移除混合类型加减运算中无效的交换关系；同时修复 PostgreSQL 17.12 更严格的操作符检查导致的安装问题。提供的 SQL 原地更新操作符元数据，保留数据、索引、视图和物化视图。升级后应检查已安装版本，并验证有代表性的索引比较查询。
