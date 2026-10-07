---
title: "pg_statkit"
linkTitle: "pg_statkit"
description: "针对数组的描述统计与临床效应量计算函数"
weight: 4690
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/kirdmi/pg_statkit">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">kirdmi/pg_statkit</div>
    <div class="ext-card__desc">https://github.com/kirdmi/pg_statkit</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_statkit-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_statkit-1.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_statkit-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_statkit`**](/ext/e/pg_statkit) | `1.1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4690  | [**`pg_statkit`**](/ext/e/pg_statkit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`weighted_statistics`](/ext/e/weighted_statistics) [`quantile`](/ext/e/quantile) [`pg_math`](/ext/e/pg_math) [`xicor`](/ext/e/xicor) [`plr`](/ext/e/plr) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Release Cargo/CI support PostgreSQL 13-17 with pgrx 0.18.1; no PG18 feature. This is statistical computation, not server monitoring.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "17,16,15,14" >}} | `pg_statkit` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "17,16,15,14" >}} | `pg_statkit_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-pg-statkit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el9.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| el10.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d12.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| d13.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u22.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u24.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u26.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
| u26.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 |
@ el8.x86_64 17 pg_statkit_17 pg_statkit_17-1.1.0-1PGSTY.el8.x86_64.rpm pigsty 1.1.0 196.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statkit_17-1.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_statkit_17 pg_statkit_17-1.1.0-1PGSTY.el8.aarch64.rpm pigsty 1.1.0 175.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statkit_17-1.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_statkit_17 pg_statkit_17-1.1.0-1PGSTY.el9.x86_64.rpm pigsty 1.1.0 200.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statkit_17-1.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_statkit_17 pg_statkit_17-1.1.0-1PGSTY.el9.aarch64.rpm pigsty 1.1.0 188.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statkit_17-1.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_statkit_17 pg_statkit_17-1.1.0-1PGSTY.el10.x86_64.rpm pigsty 1.1.0 200.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statkit_17-1.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_statkit_17 pg_statkit_17-1.1.0-1PGSTY.el10.aarch64.rpm pigsty 1.1.0 189.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statkit_17-1.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 164.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 143.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 163.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 143.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 177.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 166.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 174.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 166.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 174.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-statkit postgresql-17-pg-statkit_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 165.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statkit/postgresql-17-pg-statkit_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_statkit_16 pg_statkit_16-1.1.0-1PGSTY.el8.x86_64.rpm pigsty 1.1.0 196.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statkit_16-1.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_statkit_16 pg_statkit_16-1.1.0-1PGSTY.el8.aarch64.rpm pigsty 1.1.0 175.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statkit_16-1.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_statkit_16 pg_statkit_16-1.1.0-1PGSTY.el9.x86_64.rpm pigsty 1.1.0 200.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statkit_16-1.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_statkit_16 pg_statkit_16-1.1.0-1PGSTY.el9.aarch64.rpm pigsty 1.1.0 189.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statkit_16-1.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_statkit_16 pg_statkit_16-1.1.0-1PGSTY.el10.x86_64.rpm pigsty 1.1.0 200.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statkit_16-1.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_statkit_16 pg_statkit_16-1.1.0-1PGSTY.el10.aarch64.rpm pigsty 1.1.0 189.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statkit_16-1.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 164.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 144.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 164.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 144.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 177.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 166.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 174.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 166.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 174.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-statkit postgresql-16-pg-statkit_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 165.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statkit/postgresql-16-pg-statkit_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_statkit_15 pg_statkit_15-1.1.0-1PGSTY.el8.x86_64.rpm pigsty 1.1.0 196.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statkit_15-1.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_statkit_15 pg_statkit_15-1.1.0-1PGSTY.el8.aarch64.rpm pigsty 1.1.0 175.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statkit_15-1.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_statkit_15 pg_statkit_15-1.1.0-1PGSTY.el9.x86_64.rpm pigsty 1.1.0 200.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statkit_15-1.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_statkit_15 pg_statkit_15-1.1.0-1PGSTY.el9.aarch64.rpm pigsty 1.1.0 188.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statkit_15-1.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_statkit_15 pg_statkit_15-1.1.0-1PGSTY.el10.x86_64.rpm pigsty 1.1.0 200.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statkit_15-1.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_statkit_15 pg_statkit_15-1.1.0-1PGSTY.el10.aarch64.rpm pigsty 1.1.0 189.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statkit_15-1.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 164.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 143.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 164.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 144.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 177.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 166.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 174.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 166.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 174.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-statkit postgresql-15-pg-statkit_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 165.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statkit/postgresql-15-pg-statkit_1.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_statkit_14 pg_statkit_14-1.1.0-1PGSTY.el8.x86_64.rpm pigsty 1.1.0 196.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statkit_14-1.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_statkit_14 pg_statkit_14-1.1.0-1PGSTY.el8.aarch64.rpm pigsty 1.1.0 175.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statkit_14-1.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_statkit_14 pg_statkit_14-1.1.0-1PGSTY.el9.x86_64.rpm pigsty 1.1.0 200.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statkit_14-1.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_statkit_14 pg_statkit_14-1.1.0-1PGSTY.el9.aarch64.rpm pigsty 1.1.0 189.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statkit_14-1.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_statkit_14 pg_statkit_14-1.1.0-1PGSTY.el10.x86_64.rpm pigsty 1.1.0 200.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statkit_14-1.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_statkit_14 pg_statkit_14-1.1.0-1PGSTY.el10.aarch64.rpm pigsty 1.1.0 189.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statkit_14-1.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~bookworm_amd64.deb pigsty 1.1.0 166.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~bookworm_arm64.deb pigsty 1.1.0 146.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~trixie_amd64.deb pigsty 1.1.0 166.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~trixie_arm64.deb pigsty 1.1.0 146.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~jammy_amd64.deb pigsty 1.1.0 180.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~jammy_arm64.deb pigsty 1.1.0 168.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~noble_amd64.deb pigsty 1.1.0 176.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~noble_arm64.deb pigsty 1.1.0 168.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~resolute_amd64.deb pigsty 1.1.0 176.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-statkit postgresql-14-pg-statkit_1.1.0-1PGSTY~resolute_arm64.deb pigsty 1.1.0 167.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statkit/postgresql-14-pg-statkit_1.1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_statkit` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_statkit         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_statkit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_statkit;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_statkit -v 17  # PG 17
pig ext install -y pg_statkit -v 16  # PG 16
pig ext install -y pg_statkit -v 15  # PG 15
pig ext install -y pg_statkit -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_statkit_17       # PG 17
dnf install -y pg_statkit_16       # PG 16
dnf install -y pg_statkit_15       # PG 15
dnf install -y pg_statkit_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-17-pg-statkit   # PG 17
apt install -y postgresql-16-pg-statkit   # PG 16
apt install -y postgresql-15-pg-statkit   # PG 15
apt install -y postgresql-14-pg-statkit   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_statkit;
```

## 用法

来源：

- [官方 README](https://github.com/kirdmi/pg_statkit/blob/v1.1.0/README.md)
- [扩展控制文件](https://github.com/kirdmi/pg_statkit/blob/v1.1.0/pg_statkit.control)
- [pgrx 清单](https://github.com/kirdmi/pg_statkit/blob/v1.1.0/Cargo.toml)

`pg_statkit` 在 PostgreSQL 数组上提供描述统计与临床效应量函数，无需把源数据导出到独立分析进程。

### 启用

1.1.0 版本通过 pgrx 0.18.1 构建并测试 PostgreSQL 13–17。安装匹配的原生构件后，以超级用户创建不可迁移、非 trusted 的扩展：

```sql
CREATE EXTENSION pg_statkit;
```

它不要求预加载或重启。

### 描述统计

函数接收 `double precision[]`；应显式转换数组字面量，因为小数字面量默认会形成 `numeric[]`。

```sql
SELECT statkit_mean('{1,2,3,4,5}'::float8[]);
SELECT statkit_median('{1,2,3,4,5}'::float8[]);
SELECT statkit_iqr('{1,2,3,4,5}'::float8[]);
SELECT statkit_percentile('{1,2,3,4,5}'::float8[], 40);

SELECT patient_id,
       statkit_median(array_agg(value::float8)) AS median_value
FROM measurements
GROUP BY patient_id;
```

函数面还包括 variance、population/sample standard deviation、MAD、coefficient of variation 与 standard error。

### 效应量与解释

`statkit_risk_difference`、`statkit_risk_ratio` 与 `statkit_odds_ratio` 用四个 `bigint` count 表示 2×2 表。`statkit_cohens_d`、`statkit_hedges_g` 与 `statkit_glass_delta` 接收两组 sample。

```sql
SELECT statkit_odds_ratio(a => 8, b => 2, c => 2, d => 8);

SELECT statkit_cohens_d(
  array_agg(value::float8) FILTER (WHERE arm = 'treatment'),
  array_agg(value::float8) FILTER (WHERE arm = 'control')
)
FROM trial;
```

若任一单元格为零，odds-ratio function 会应用 0.5 修正。未定义输入返回 `NULL`。1.1.0 不提供 confidence interval、hypothesis test 或 assumption check；研究结论需要这些能力时，应使用完整统计软件包。
