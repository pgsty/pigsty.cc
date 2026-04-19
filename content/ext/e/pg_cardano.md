---
title: "pg_cardano"
linkTitle: "pg_cardano"
description: "Cardano相关工具包：加密函数，地址编解码，区块链处理"
weight: 2920
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Fell-x27/pg_cardano">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Fell-x27/pg_cardano</div>
    <div class="ext-card__desc">https://github.com/Fell-x27/pg_cardano</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_cardano-1.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_cardano-1.2.0.tar.gz</div>
    <div class="ext-card__desc">pg_cardano-1.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_cardano`**](/ext/e/pg_cardano) | `1.2.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2920  | [**`pg_cardano`**](/ext/e/pg_cardano) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`hypopg`](/ext/e/hypopg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG18 fix by https://github.com/Vonng/pg_cardano


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15" >}} | `pg_cardano` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15" >}} | `pg_cardano_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-cardano` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.1.1 1 |
@ el8.x86_64 18 pg_cardano_18 pg_cardano_18-1.2.0-1PIGSTY.el8.x86_64.rpm pigsty 1.2.0 518.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cardano_18-1.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_cardano_18 pg_cardano_18-1.2.0-1PIGSTY.el8.aarch64.rpm pigsty 1.2.0 379.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cardano_18-1.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_cardano_18 pg_cardano_18-1.2.0-1PIGSTY.el9.x86_64.rpm pigsty 1.2.0 536.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cardano_18-1.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_cardano_18 pg_cardano_18-1.2.0-1PIGSTY.el9.aarch64.rpm pigsty 1.2.0 404.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cardano_18-1.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_cardano_18 pg_cardano_18-1.2.0-1PIGSTY.el10.x86_64.rpm pigsty 1.2.0 537.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cardano_18-1.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_cardano_18 pg_cardano_18-1.2.0-1PIGSTY.el10.aarch64.rpm pigsty 1.2.0 404.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cardano_18-1.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.2.0-1PIGSTY~bookworm_amd64.deb pigsty 1.2.0 434.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.2.0-1PIGSTY~bookworm_arm64.deb pigsty 1.2.0 305.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.2.0-1PIGSTY~trixie_amd64.deb pigsty 1.2.0 434.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.2.0-1PIGSTY~trixie_arm64.deb pigsty 1.2.0 305.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.2.0-1PIGSTY~jammy_amd64.deb pigsty 1.2.0 483.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.2.0-1PIGSTY~jammy_arm64.deb pigsty 1.2.0 351.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.2.0-1PIGSTY~noble_amd64.deb pigsty 1.2.0 478.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.2.0-1PIGSTY~noble_arm64.deb pigsty 1.2.0 346.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_cardano_17 pg_cardano_17-1.2.0-1PIGSTY.el8.x86_64.rpm pigsty 1.2.0 518.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cardano_17-1.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_cardano_17 pg_cardano_17-1.2.0-1PIGSTY.el8.aarch64.rpm pigsty 1.2.0 379.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cardano_17-1.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_cardano_17 pg_cardano_17-1.2.0-1PIGSTY.el9.x86_64.rpm pigsty 1.2.0 535.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cardano_17-1.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_cardano_17 pg_cardano_17-1.2.0-1PIGSTY.el9.aarch64.rpm pigsty 1.2.0 404.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cardano_17-1.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_cardano_17 pg_cardano_17-1.2.0-1PIGSTY.el10.x86_64.rpm pigsty 1.2.0 536.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cardano_17-1.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_cardano_17 pg_cardano_17-1.2.0-1PIGSTY.el10.aarch64.rpm pigsty 1.2.0 403.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cardano_17-1.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.2.0-1PIGSTY~bookworm_amd64.deb pigsty 1.2.0 434.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.2.0-1PIGSTY~bookworm_arm64.deb pigsty 1.2.0 305.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.2.0-1PIGSTY~trixie_amd64.deb pigsty 1.2.0 434.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.2.0-1PIGSTY~trixie_arm64.deb pigsty 1.2.0 304.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.2.0-1PIGSTY~jammy_amd64.deb pigsty 1.2.0 482.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.2.0-1PIGSTY~jammy_arm64.deb pigsty 1.2.0 351.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.2.0-1PIGSTY~noble_amd64.deb pigsty 1.2.0 477.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.2.0-1PIGSTY~noble_arm64.deb pigsty 1.2.0 345.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_cardano_16 pg_cardano_16-1.2.0-1PIGSTY.el8.x86_64.rpm pigsty 1.2.0 518.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cardano_16-1.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_cardano_16 pg_cardano_16-1.2.0-1PIGSTY.el8.aarch64.rpm pigsty 1.2.0 379.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cardano_16-1.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_cardano_16 pg_cardano_16-1.2.0-1PIGSTY.el9.x86_64.rpm pigsty 1.2.0 536.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cardano_16-1.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_cardano_16 pg_cardano_16-1.2.0-1PIGSTY.el9.aarch64.rpm pigsty 1.2.0 404.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cardano_16-1.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_cardano_16 pg_cardano_16-1.2.0-1PIGSTY.el10.x86_64.rpm pigsty 1.2.0 537.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cardano_16-1.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_cardano_16 pg_cardano_16-1.2.0-1PIGSTY.el10.aarch64.rpm pigsty 1.2.0 404.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cardano_16-1.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.2.0-1PIGSTY~bookworm_amd64.deb pigsty 1.2.0 434.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.2.0-1PIGSTY~bookworm_arm64.deb pigsty 1.2.0 305.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.2.0-1PIGSTY~trixie_amd64.deb pigsty 1.2.0 434.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.2.0-1PIGSTY~trixie_arm64.deb pigsty 1.2.0 305.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.2.0-1PIGSTY~jammy_amd64.deb pigsty 1.2.0 483.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.2.0-1PIGSTY~jammy_arm64.deb pigsty 1.2.0 351.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.2.0-1PIGSTY~noble_amd64.deb pigsty 1.2.0 478.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.2.0-1PIGSTY~noble_arm64.deb pigsty 1.2.0 346.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_cardano_15 pg_cardano_15-1.2.0-1PIGSTY.el8.x86_64.rpm pigsty 1.2.0 518.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cardano_15-1.2.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_cardano_15 pg_cardano_15-1.2.0-1PIGSTY.el8.aarch64.rpm pigsty 1.2.0 379.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cardano_15-1.2.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_cardano_15 pg_cardano_15-1.2.0-1PIGSTY.el9.x86_64.rpm pigsty 1.2.0 536.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cardano_15-1.2.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_cardano_15 pg_cardano_15-1.2.0-1PIGSTY.el9.aarch64.rpm pigsty 1.2.0 403.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cardano_15-1.2.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_cardano_15 pg_cardano_15-1.2.0-1PIGSTY.el10.x86_64.rpm pigsty 1.2.0 536.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cardano_15-1.2.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_cardano_15 pg_cardano_15-1.2.0-1PIGSTY.el10.aarch64.rpm pigsty 1.2.0 403.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cardano_15-1.2.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.2.0-1PIGSTY~bookworm_amd64.deb pigsty 1.2.0 433.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.2.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.2.0-1PIGSTY~bookworm_arm64.deb pigsty 1.2.0 305.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.2.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.2.0-1PIGSTY~trixie_amd64.deb pigsty 1.2.0 433.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.2.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.2.0-1PIGSTY~trixie_arm64.deb pigsty 1.2.0 304.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.2.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.2.0-1PIGSTY~jammy_amd64.deb pigsty 1.2.0 483.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.2.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.2.0-1PIGSTY~jammy_arm64.deb pigsty 1.2.0 351.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.2.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.2.0-1PIGSTY~noble_amd64.deb pigsty 1.2.0 477.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.2.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.2.0-1PIGSTY~noble_arm64.deb pigsty 1.2.0 345.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.2.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 522.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_cardano_14-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 379.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_cardano_14-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 539.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_cardano_14-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 402.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_cardano_14-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 538.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_cardano_14-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 403.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_cardano_14-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 445.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 311.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 445.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 311.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 494.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 357.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 488.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 351.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_cardano` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_cardano         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_cardano` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_cardano;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_cardano -v 18  # PG 18
pig ext install -y pg_cardano -v 17  # PG 17
pig ext install -y pg_cardano -v 16  # PG 16
pig ext install -y pg_cardano -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_cardano_18       # PG 18
dnf install -y pg_cardano_17       # PG 17
dnf install -y pg_cardano_16       # PG 16
dnf install -y pg_cardano_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-cardano   # PG 18
apt install -y postgresql-17-pg-cardano   # PG 17
apt install -y postgresql-16-pg-cardano   # PG 16
apt install -y postgresql-15-pg-cardano   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_cardano;
```

## 用法

来源：[README](https://github.com/Fell-x27/pg_cardano/blob/master/README.md), [Cargo.toml version 1.2.0](https://github.com/Fell-x27/pg_cardano/blob/master/Cargo.toml)

`pg_cardano` 是一个 Rust 扩展，为 PostgreSQL 提供面向 Cardano 的二进制与加密工具。上游仓库没有发布 GitHub release 或 tag，但默认分支当前 crate 版本是 `1.2.0`。

```sql
CREATE EXTENSION pg_cardano;
```

### 核心能力

- Base58 编码与解码。
- Bech32 编码与解码。
- CBOR 与 `jsonb` 之间的双向转换，提供简单与扩展两套管线。
- Blake2b 哈希。
- Ed25519 签名与签名验证。
- CIP-105 与 CIP-129 的 dRep ID 辅助函数。
- Shelley 地址构造与解析。
- 资产名称解码与 CIP-88 pool key registration 验证。

### 常见模式

#### Base58 与 Bech32

```sql
SELECT cardano.base58_encode('Cardano'::bytea);
SELECT cardano.base58_decode('3Z6ioYHE3x');
SELECT cardano.bech32_encode('ada', 'is amazing'::bytea);
SELECT cardano.bech32_decode_prefix('ada1d9ejqctdv9axjmn8dypl4d');
SELECT cardano.bech32_decode_data('ada1d9ejqctdv9axjmn8dypl4d');
```

#### CBOR 转换

```sql
SELECT cardano.cbor_decode_jsonb('\xa3636164616b...'::bytea);
SELECT cardano.cbor_encode_jsonb('{"ada": "is amazing!", "bytes": "\\xdeadbeef"}'::jsonb);
SELECT cardano.cbor_decode_jsonb_ext('\xa3636164616b...'::bytea);
SELECT cardano.cbor_encode_jsonb_ext('{"type":"map","value":[...]}'::jsonb);
```

#### 哈希与签名

```sql
SELECT cardano.blake2b_hash('Cardano is amazing!'::bytea, 32);
SELECT cardano.ed25519_verify_signature(
  '\x432753BD...'::bytea,
  'Cardano is amazing!'::bytea,
  '\x74265f96...'::bytea
);
```

#### 地址与治理辅助函数

```sql
SELECT cardano.tools_drep_id_encode_cip105('\x28111ae1...'::bytea, FALSE);
SELECT cardano.tools_drep_id_encode_cip129('\x28111ae1...'::bytea, TRUE);
SELECT cardano.tools_shelley_address_build(
  '\x7415251f...'::bytea, FALSE,
  '\x7c3ae2f2...'::bytea, FALSE,
  0
);
SELECT cardano.tools_shelley_addr_get_type('addr_test1vp6p2fgl...');
```

### 注意事项

- 上游文档要求 PostgreSQL 12+，并通过 `pgrx` 在 Linux 上构建；crate feature 当前面向 PostgreSQL 15 到 18，默认 feature 是 `pg18`。
- 简单 CBOR 辅助函数会有意丢失部分 CBOR 结构信息；如果需要精确的结构往返，请使用 `*_ext` 函数。
