---
title: "pgwasm"
linkTitle: "pgwasm"
description: "将沙箱化 WebAssembly 组件映射为强类型 PostgreSQL SQL 函数。"
weight: 3150
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/jnicholls/pgwasm">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">jnicholls/pgwasm</div>
    <div class="ext-card__desc">https://github.com/jnicholls/pgwasm</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgwasm-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgwasm-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pgwasm-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgwasm`**](/ext/e/pgwasm) | `0.1.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license bsd3clause" href="/ext/license#bsd3clause">BSD-3-Clause</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3150  | [**`pgwasm`**](/ext/e/pgwasm) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgwasm` |
{.ext-table}

| **相关扩展** | [`plv8`](/ext/e/plv8) [`pljs`](/ext/e/pljs) [`pllua`](/ext/e/pllua) [`pg_tle`](/ext/e/pg_tle) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> No upstream tag or release; package pins commit 535b5336, ports pgrx 0.18 to 0.19.1, and supports PostgreSQL 14-18. Preloading is optional and enables shared metrics.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgwasm` | - |
| [**RPM**](/ext/rpm#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `pgwasm_$v` | - |
| [**DEB**](/ext/deb#lang) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgwasm` | - |
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
@ el8.x86_64 18 pgwasm_18 pgwasm_18-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 7.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgwasm_18-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pgwasm_18 pgwasm_18-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgwasm_18-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pgwasm_18 pgwasm_18-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 7.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgwasm_18-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pgwasm_18 pgwasm_18-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 6.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgwasm_18-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pgwasm_18 pgwasm_18-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgwasm_18-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pgwasm_18 pgwasm_18-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgwasm_18-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgwasm postgresql-18-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-18-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgwasm_17 pgwasm_17-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 7.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgwasm_17-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pgwasm_17 pgwasm_17-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgwasm_17-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pgwasm_17 pgwasm_17-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 7.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgwasm_17-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pgwasm_17 pgwasm_17-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 6.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgwasm_17-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pgwasm_17 pgwasm_17-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgwasm_17-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pgwasm_17 pgwasm_17-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgwasm_17-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgwasm postgresql-17-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-17-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgwasm_16 pgwasm_16-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 7.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgwasm_16-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pgwasm_16 pgwasm_16-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgwasm_16-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pgwasm_16 pgwasm_16-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 7.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgwasm_16-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pgwasm_16 pgwasm_16-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 6.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgwasm_16-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pgwasm_16 pgwasm_16-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgwasm_16-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pgwasm_16 pgwasm_16-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgwasm_16-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgwasm postgresql-16-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-16-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgwasm_15 pgwasm_15-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 7.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgwasm_15-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pgwasm_15 pgwasm_15-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgwasm_15-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pgwasm_15 pgwasm_15-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 7.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgwasm_15-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pgwasm_15 pgwasm_15-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 6.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgwasm_15-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pgwasm_15 pgwasm_15-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgwasm_15-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pgwasm_15 pgwasm_15-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgwasm_15-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgwasm postgresql-15-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-15-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgwasm_14 pgwasm_14-0.1.0-1PIGSTY.el8.x86_64.rpm pigsty 0.1.0 7.3MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgwasm_14-0.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pgwasm_14 pgwasm_14-0.1.0-1PIGSTY.el8.aarch64.rpm pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgwasm_14-0.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pgwasm_14 pgwasm_14-0.1.0-1PIGSTY.el9.x86_64.rpm pigsty 0.1.0 7.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgwasm_14-0.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pgwasm_14 pgwasm_14-0.1.0-1PIGSTY.el9.aarch64.rpm pigsty 0.1.0 6.3MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgwasm_14-0.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pgwasm_14 pgwasm_14-0.1.0-1PIGSTY.el10.x86_64.rpm pigsty 0.1.0 7.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgwasm_14-0.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pgwasm_14 pgwasm_14-0.1.0-1PIGSTY.el10.aarch64.rpm pigsty 0.1.0 6.2MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgwasm_14-0.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb pigsty 0.1.0 6.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb pigsty 0.1.0 4.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb pigsty 0.1.0 6.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgwasm postgresql-14-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb pigsty 0.1.0 5.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgwasm/postgresql-14-pgwasm_0.1.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgwasm` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgwasm         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgwasm` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install pgwasm;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pgwasm -v 18  # PG 18
pig ext install -y pgwasm -v 17  # PG 17
pig ext install -y pgwasm -v 16  # PG 16
pig ext install -y pgwasm -v 15  # PG 15
pig ext install -y pgwasm -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pgwasm_18       # PG 18
dnf install -y pgwasm_17       # PG 17
dnf install -y pgwasm_16       # PG 16
dnf install -y pgwasm_15       # PG 15
dnf install -y pgwasm_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pgwasm   # PG 18
apt install -y postgresql-17-pgwasm   # PG 17
apt install -y postgresql-16-pgwasm   # PG 16
apt install -y postgresql-15-pgwasm   # PG 15
apt install -y postgresql-14-pgwasm   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pgwasm;
```

## 用法

来源：

- [指定修订版的 pgwasm README](https://github.com/jnicholls/pgwasm/blob/535b53363f8208af139e757e508e66c46309ee29/README.md)
- [pgwasm 架构与 SQL 生命周期](https://github.com/jnicholls/pgwasm/blob/535b53363f8208af139e757e508e66c46309ee29/docs/architecture.md)
- [pgwasm GUC 参考](https://github.com/jnicholls/pgwasm/blob/535b53363f8208af139e757e508e66c46309ee29/docs/guc.md)
- [pgwasm WIT 类型映射](https://github.com/jnicholls/pgwasm/blob/535b53363f8208af139e757e508e66c46309ee29/docs/wit-mapping.md)
- [pgwasm 控制文件](https://github.com/jnicholls/pgwasm/blob/535b53363f8208af139e757e508e66c46309ee29/pgwasm/pgwasm.control)

`pgwasm` 把 WebAssembly component 加载到 PostgreSQL，并把 WIT export 注册为带类型的 PostgreSQL 函数。编译产物保存在集群数据目录下，并由后端本地实例池复用。本文基于固定修订 `535b53363f8208af139e757e508e66c46309ee29`；源码声明版本 0.1.0，但没有提供带标签的 0.1.0 发行版。

### 核心流程

由超级用户创建扩展。使用以下文件加载流程前，管理员必须显式启用并限制其目录：

```sql
CREATE EXTENSION pgwasm;

ALTER SYSTEM SET pgwasm.allow_load_from_file = on;
ALTER SYSTEM SET pgwasm.module_path = '/srv/pgwasm';
ALTER SYSTEM SET pgwasm.allowed_path_prefixes = '/srv/pgwasm';
SELECT pg_reload_conf();

GRANT pgwasm_loader TO app_runtime;

SELECT pgwasm.pgwasm_load(
    'arith',
    '{"path":"arith.component.wasm"}'::json,
    '{}'::json
);

SELECT * FROM pgwasm.pgwasm_functions();
SELECT * FROM pgwasm.pgwasm_modules();

SELECT pgwasm.pgwasm_unload('arith');
```

`pgwasm_load(module_name text, bytes_or_path json, options json)` 只接受一个 `bytes` 或 `path` 来源。文件加载默认关闭。模块名会成为持久 catalog 键，也是经过清理后生成的 SQL 函数名前缀。

### 生命周期与类型映射

- `pgwasm_load` 执行校验、解析策略、创建所需 PostgreSQL 类型和函数、编译 AOT 产物并记录模块。
- `pgwasm_reload` 替换模块字节；签名兼容时会保留稳定标识。
- `pgwasm_reconfigure` 收窄或修改策略与资源限制。
- `pgwasm_unload` 删除生成函数、类型、catalog 行与产物；存在依赖时会阻止删除，除非显式选择级联。
- WIT record 映射为 composite type，enum 映射为 PostgreSQL enum，list 映射为数组或 `bytea`，受支持的 variant、flag、option、result 与 resource 则映射为文档规定的 PostgreSQL 表示。
- `pgwasm_modules()`、`pgwasm_functions()`、`pgwasm_wit_types()`、`pgwasm_policy_effective()` 与 `pgwasm_stats()` 用于检查。

授予执行权限或调用新加载 component 前，应先检查生成函数签名。涉及不兼容 WIT 变化的 reload 需要显式策略决策与依赖复核。

### 沙箱与权限

扩展创建 `pgwasm_loader` 用于生命周期变更，并创建 `pgwasm_reader` 用于可观测性。加载、重载、重配置和卸载要求超级用户或 loader 角色成员身份。

WASI 文件系统、环境变量、socket、HTTP 与 SPI host-query 访问默认全部关闭。管理员通过 `pgwasm.*` GUC 设置集群能力上限；每个模块的选项只能收窄，不能扩大该上限。应明确并尽量缩小 `pgwasm.allowed_hosts`、路径前缀与文件系统预开放范围。

### 资源与运维边界

- 默认模块大小限制是 32 MiB，调用内存为 1,024 个 WebAssembly page，墙钟时间限制为 5 秒。可以启用 fuel 计量，但默认关闭。
- `$PGDATA/pgwasm/<module_id>/` 下的产物由模块字节与 Wasmtime 构建生成。遇到不兼容的 Wasmtime 或 PostgreSQL 升级时应重新编译，不能把这些产物当作权威数据直接复制。
- 共享计数器依赖 postmaster 启动时分配共享内存。需要共享指标时应预加载 `pgwasm`；否则可观测性会退化到非共享计数器，并报告该状态。
- 源码提供 PostgreSQL 13 到 18 的构建 feature，默认使用 PostgreSQL 17，但该固定修订没有公开的支持矩阵。部署前应验证确切 PostgreSQL 大版本构建与全部所需 WIT 映射。
- 即使有沙箱，也应把 guest 代码视为靠近数据库的特权代码：限制模块加载者、约束每项能力与资源，并测试 trap、取消、reload、重启和回滚行为。
