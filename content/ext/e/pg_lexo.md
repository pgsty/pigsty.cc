---
title: "pg_lexo"
linkTitle: "pg_lexo"
description: "用于列表插入与重排的字典序位置类型"
weight: 3530
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Blad3Mak3r/pg_lexo">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Blad3Mak3r/pg_lexo</div>
    <div class="ext-card__desc">https://github.com/Blad3Mak3r/pg_lexo</div>
  </a>
  <div class="ext-card ext-card--source">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title"><a href="https://repo.pigsty.cc/ext/src/pg_lexo-0.6.1.tar.gz">pg_lexo-0.6.1.tar.gz</a></div>
    <div class="ext-card__desc"><a href="https://repo.pigsty.cc/ext/src/pg_lexo-0.6.1-Cargo.lock">pg_lexo-0.6.1-Cargo.lock</a>
    </div>
  </div>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_lexo`**](/ext/e/pg_lexo) | `0.6.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3530  | [**`pg_lexo`**](/ext/e/pg_lexo) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`base62`](/ext/e/base62) [`pg_hashids`](/ext/e/pg_hashids) [`typeid`](/ext/e/typeid) [`sequential_uuids`](/ext/e/sequential_uuids) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Release/package 0.6.1 ships SQL/control version 0.6.0. Objects use the chosen installation schema; the old lexo schema was removed. superuser=false is not trusted=true. PGSTY patches lexo_next for native-type ordering and empty tables, and lexo_rebalance to preserve order independently of text collation.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.0` | {{< pgvers "18,17,16" >}} | `pg_lexo` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "18,17,16" >}} | `pg_lexo_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.6.1` | {{< pgvers "18,17,16" >}} | `postgresql-$v-pg-lexo` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | AVAIL PIGSTY 0.6.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_lexo_18 pg_lexo_18-0.6.1-1PGSTY.el8.x86_64.rpm pigsty 0.6.1 378.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lexo_18-0.6.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_lexo_18 pg_lexo_18-0.6.1-1PGSTY.el8.aarch64.rpm pigsty 0.6.1 265.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lexo_18-0.6.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_lexo_18 pg_lexo_18-0.6.1-1PGSTY.el9.x86_64.rpm pigsty 0.6.1 395.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lexo_18-0.6.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_lexo_18 pg_lexo_18-0.6.1-1PGSTY.el9.aarch64.rpm pigsty 0.6.1 284.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lexo_18-0.6.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_lexo_18 pg_lexo_18-0.6.1-1PGSTY.el10.x86_64.rpm pigsty 0.6.1 395.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lexo_18-0.6.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_lexo_18 pg_lexo_18-0.6.1-1PGSTY.el10.aarch64.rpm pigsty 0.6.1 285.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lexo_18-0.6.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~bookworm_amd64.deb pigsty 0.6.1 323.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~bookworm_arm64.deb pigsty 0.6.1 216.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~trixie_amd64.deb pigsty 0.6.1 323.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~trixie_arm64.deb pigsty 0.6.1 216.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~jammy_amd64.deb pigsty 0.6.1 364.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~jammy_arm64.deb pigsty 0.6.1 251.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~noble_amd64.deb pigsty 0.6.1 357.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~noble_arm64.deb pigsty 0.6.1 250.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~resolute_amd64.deb pigsty 0.6.1 356.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-lexo postgresql-18-pg-lexo_0.6.1-1PGSTY~resolute_arm64.deb pigsty 0.6.1 249.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lexo/postgresql-18-pg-lexo_0.6.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_lexo_17 pg_lexo_17-0.6.1-1PGSTY.el8.x86_64.rpm pigsty 0.6.1 378.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lexo_17-0.6.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_lexo_17 pg_lexo_17-0.6.1-1PGSTY.el8.aarch64.rpm pigsty 0.6.1 265.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lexo_17-0.6.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_lexo_17 pg_lexo_17-0.6.1-1PGSTY.el9.x86_64.rpm pigsty 0.6.1 395.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lexo_17-0.6.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_lexo_17 pg_lexo_17-0.6.1-1PGSTY.el9.aarch64.rpm pigsty 0.6.1 285.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lexo_17-0.6.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_lexo_17 pg_lexo_17-0.6.1-1PGSTY.el10.x86_64.rpm pigsty 0.6.1 395.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lexo_17-0.6.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_lexo_17 pg_lexo_17-0.6.1-1PGSTY.el10.aarch64.rpm pigsty 0.6.1 285.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lexo_17-0.6.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~bookworm_amd64.deb pigsty 0.6.1 323.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~bookworm_arm64.deb pigsty 0.6.1 215.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~trixie_amd64.deb pigsty 0.6.1 323.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~trixie_arm64.deb pigsty 0.6.1 215.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~jammy_amd64.deb pigsty 0.6.1 364.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~jammy_arm64.deb pigsty 0.6.1 250.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~noble_amd64.deb pigsty 0.6.1 357.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~noble_arm64.deb pigsty 0.6.1 250.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~resolute_amd64.deb pigsty 0.6.1 356.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-lexo postgresql-17-pg-lexo_0.6.1-1PGSTY~resolute_arm64.deb pigsty 0.6.1 249.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lexo/postgresql-17-pg-lexo_0.6.1-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_lexo_16 pg_lexo_16-0.6.1-1PGSTY.el8.x86_64.rpm pigsty 0.6.1 378.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lexo_16-0.6.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_lexo_16 pg_lexo_16-0.6.1-1PGSTY.el8.aarch64.rpm pigsty 0.6.1 265.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lexo_16-0.6.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_lexo_16 pg_lexo_16-0.6.1-1PGSTY.el9.x86_64.rpm pigsty 0.6.1 395.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lexo_16-0.6.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_lexo_16 pg_lexo_16-0.6.1-1PGSTY.el9.aarch64.rpm pigsty 0.6.1 284.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lexo_16-0.6.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_lexo_16 pg_lexo_16-0.6.1-1PGSTY.el10.x86_64.rpm pigsty 0.6.1 395.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lexo_16-0.6.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_lexo_16 pg_lexo_16-0.6.1-1PGSTY.el10.aarch64.rpm pigsty 0.6.1 285.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lexo_16-0.6.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~bookworm_amd64.deb pigsty 0.6.1 329.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~bookworm_arm64.deb pigsty 0.6.1 222.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~trixie_amd64.deb pigsty 0.6.1 329.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~trixie_arm64.deb pigsty 0.6.1 222.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~jammy_amd64.deb pigsty 0.6.1 370.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~jammy_arm64.deb pigsty 0.6.1 257.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~noble_amd64.deb pigsty 0.6.1 364.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~noble_arm64.deb pigsty 0.6.1 256.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~resolute_amd64.deb pigsty 0.6.1 362.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-lexo postgresql-16-pg-lexo_0.6.1-1PGSTY~resolute_arm64.deb pigsty 0.6.1 256.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-lexo/postgresql-16-pg-lexo_0.6.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_lexo` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_lexo         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_lexo` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_lexo;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_lexo -v 18  # PG 18
pig ext install -y pg_lexo -v 17  # PG 17
pig ext install -y pg_lexo -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_lexo_18       # PG 18
dnf install -y pg_lexo_17       # PG 17
dnf install -y pg_lexo_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-lexo   # PG 18
apt install -y postgresql-17-pg-lexo   # PG 17
apt install -y postgresql-16-pg-lexo   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION pg_lexo;
```

## 用法

来源：

- [官方 README](https://github.com/blad3mak3r/pg_lexo/blob/v0.6.1/README.md)
- [0.6 版本 SQL 说明](https://github.com/blad3mak3r/pg_lexo/blob/v0.6.1/sql/pg_lexo--0.6.0.sql)
- [公共函数实现](https://github.com/blad3mak3r/pg_lexo/blob/v0.6.1/src/schema.rs)

`pg_lexo` 0.6.0 提供 Base62 `lexo` 类型，用于稳定的用户可控排序。它可以在已有位置之前、之后或之间生成短值，使项目移动时不必重新编号全部行。该类型提供比较操作符，以及默认 B-tree 和哈希操作符类。

### 核心流程

```sql
CREATE EXTENSION pg_lexo;

CREATE TABLE items (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    position lexo NOT NULL UNIQUE DEFERRABLE
);

INSERT INTO items (title, position)
VALUES ('first', lexo_first());

INSERT INTO items (title, position)
SELECT 'last', lexo_after(position)
FROM items ORDER BY position DESC LIMIT 1;

INSERT INTO items (title, position)
VALUES ('middle', lexo_between('H'::lexo, 'I'::lexo));

SELECT * FROM items ORDER BY position;
```

`lexo_first()` 从 `H` 开始。`lexo_after(lexo)`、`lexo_before(lexo)` 和 `lexo_between(lexo, lexo)` 生成相邻位置；`lexo_between` 的任一参数可以为 NULL，表示开放的一端。输入只能包含 `0-9`、`A-Z` 和 `a-z`，其 ASCII 顺序与该类型的排序一致。

### 表辅助函数

`lexo_next(table, position_column, key_column, key_value)` 查找当前最大值并返回下一个位置，可选限定到某个分组。`lexo_add_column(table, column)` 添加 `lexo` 列。`lexo_rebalance(table, position_column, key_column, key_value)` 用均匀分布的位置重写匹配行，并返回更新行数。

这些辅助函数执行动态 SQL，调用者必须拥有相应表权限。重平衡会更新每条选中行，应与应用写入协调执行。如果位置列有唯一约束，应使用可延迟约束，并在重平衡事务中延迟检查，允许更新过程中出现临时重叠。位置生成本身不会预留值：并发会话可能得到相同位置，因此应建立合适的唯一约束，并在冲突时重试或串行化移动。当相邻位置之间（或最小值之前）没有可用 Base62 值时，应先重平衡。

### 0.6 版本边界

0.6 版移除了专用 `lexo` 模式。原来的 `lexo.lexorank` 类型改名为 `lexo`，`lexo.first()` 等模式限定函数改为 `lexo_first()` 等名称。旧示例必须迁移后才能使用。发行包版本 0.6.1 保留 SQL/control 版本 0.6.0，通过 pgrx 0.16.1 面向 PostgreSQL 16–18。Pigsty 软件包为 `lexo_next` 添加补丁，使用原生排序替代不存在的 `max(lexo)` 聚合，并让 `lexo_rebalance` 的顺序不受文本排序规则影响。
