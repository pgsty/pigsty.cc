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
  <a class="ext-card ext-card--source" href="pg_cardano-1.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_cardano-1.1.1.tar.gz</div>
    <div class="ext-card__desc">pg_cardano-1.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_cardano`**](/ext/e/pg_cardano) | `1.1.1` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
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
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_cardano` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_cardano_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-cardano` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 | AVAIL PIGSTY 1.1.1 1 |
@ el8.x86_64 18 pg_cardano_18 pg_cardano_18-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 523.1KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cardano_18-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_cardano_18 pg_cardano_18-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 378.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cardano_18-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_cardano_18 pg_cardano_18-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 540.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cardano_18-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_cardano_18 pg_cardano_18-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 402.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cardano_18-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_cardano_18 pg_cardano_18-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 539.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cardano_18-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_cardano_18 pg_cardano_18-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 403.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cardano_18-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 445.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 311.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 445.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 312.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 493.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 356.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 488.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-cardano postgresql-18-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 352.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-18-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_cardano_17 pg_cardano_17-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 522.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cardano_17-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_cardano_17 pg_cardano_17-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 379.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cardano_17-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_cardano_17 pg_cardano_17-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 540.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cardano_17-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_cardano_17 pg_cardano_17-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 402.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cardano_17-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_cardano_17 pg_cardano_17-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 539.7KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cardano_17-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_cardano_17 pg_cardano_17-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 403.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cardano_17-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 444.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 311.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 445.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 311.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 493.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 357.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 488.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-cardano postgresql-17-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 352.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-17-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_cardano_16 pg_cardano_16-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 522.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cardano_16-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_cardano_16 pg_cardano_16-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 378.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cardano_16-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_cardano_16 pg_cardano_16-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 539.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cardano_16-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_cardano_16 pg_cardano_16-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 402.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cardano_16-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_cardano_16 pg_cardano_16-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 539.3KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cardano_16-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_cardano_16 pg_cardano_16-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 403.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cardano_16-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 445.4KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 312.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 445.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 311.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 494.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 357.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 488.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-cardano postgresql-16-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 352.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-16-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_cardano_15 pg_cardano_15-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 522.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cardano_15-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_cardano_15 pg_cardano_15-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 379.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cardano_15-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_cardano_15 pg_cardano_15-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 539.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cardano_15-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_cardano_15 pg_cardano_15-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 402.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cardano_15-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_cardano_15 pg_cardano_15-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 538.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cardano_15-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_cardano_15 pg_cardano_15-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 403.7KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cardano_15-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 445.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 311.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 445.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 312.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 494.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 357.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 488.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-cardano postgresql-15-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 352.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-15-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el8.x86_64.rpm pigsty 1.1.1 522.9KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_cardano_14-1.1.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el8.aarch64.rpm pigsty 1.1.1 379.5KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_cardano_14-1.1.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el9.x86_64.rpm pigsty 1.1.1 539.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_cardano_14-1.1.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el9.aarch64.rpm pigsty 1.1.1 402.9KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_cardano_14-1.1.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el10.x86_64.rpm pigsty 1.1.1 538.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_cardano_14-1.1.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_cardano_14 pg_cardano_14-1.1.1-1PIGSTY.el10.aarch64.rpm pigsty 1.1.1 403.4KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_cardano_14-1.1.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb pigsty 1.1.1 445.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb pigsty 1.1.1 311.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb pigsty 1.1.1 445.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb pigsty 1.1.1 311.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb pigsty 1.1.1 494.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb pigsty 1.1.1 357.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb pigsty 1.1.1 488.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-cardano postgresql-14-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb pigsty 1.1.1 351.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-cardano/postgresql-14-pg-cardano_1.1.1-1PIGSTY~noble_arm64.deb
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
pig ext install -y pg_cardano -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_cardano_18       # PG 18
dnf install -y pg_cardano_17       # PG 17
dnf install -y pg_cardano_16       # PG 16
dnf install -y pg_cardano_15       # PG 15
dnf install -y pg_cardano_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-cardano   # PG 18
apt install -y postgresql-17-pg-cardano   # PG 17
apt install -y postgresql-16-pg-cardano   # PG 16
apt install -y postgresql-15-pg-cardano   # PG 15
apt install -y postgresql-14-pg-cardano   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_cardano;
```
