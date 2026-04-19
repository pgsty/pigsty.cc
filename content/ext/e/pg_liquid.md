---
title: "pg_liquid"
linkTitle: "pg_liquid"
description: "受 Liquid 启发的 Datalog 图查询扩展"
weight: 2610
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/michael-golfi/pg_liquid">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">michael-golfi/pg_liquid</div>
    <div class="ext-card__desc">https://github.com/michael-golfi/pg_liquid</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_liquid-0.1.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_liquid-0.1.7.tar.gz</div>
    <div class="ext-card__desc">pg_liquid-0.1.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_liquid`**](/ext/e/pg_liquid) | `0.1.7` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2610  | [**`pg_liquid`**](/ext/e/pg_liquid) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `liquid` |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`jsquery`](/ext/e/jsquery) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`pg_search`](/ext/e/pg_search) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_liquid` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.7` | {{< pgvers "18,17,16,15,14" >}} | `pg_liquid_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.7` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-liquid` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
@ el8.x86_64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 64.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_liquid_18-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 62.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_liquid_18-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 62.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_18-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 61.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_18-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 65.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_18-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 62.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_18-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb pigsty 0.1.7 383.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb pigsty 0.1.7 378.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb pigsty 0.1.7 383.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb pigsty 0.1.7 378.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb pigsty 0.1.7 429.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb pigsty 0.1.7 427.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb pigsty 0.1.7 407.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb pigsty 0.1.7 402.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 64.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_liquid_17-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 62.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_liquid_17-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 62.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_17-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 61.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_17-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 65.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_17-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 62.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_17-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb pigsty 0.1.7 379.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb pigsty 0.1.7 376.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb pigsty 0.1.7 379.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb pigsty 0.1.7 377.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb pigsty 0.1.7 450.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb pigsty 0.1.7 450.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb pigsty 0.1.7 400.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb pigsty 0.1.7 401.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 64.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_liquid_16-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 62.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_liquid_16-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 62.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_16-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 61.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_16-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 64.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_16-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 62.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_16-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb pigsty 0.1.7 372.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb pigsty 0.1.7 368.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb pigsty 0.1.7 372.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb pigsty 0.1.7 368.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb pigsty 0.1.7 437.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb pigsty 0.1.7 436.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb pigsty 0.1.7 393.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb pigsty 0.1.7 391.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_liquid_15-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 62.5KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_liquid_15-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 64.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_15-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 62.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_15-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 66.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_15-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 63.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_15-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb pigsty 0.1.7 370.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb pigsty 0.1.7 367.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb pigsty 0.1.7 370.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb pigsty 0.1.7 368.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb pigsty 0.1.7 434.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb pigsty 0.1.7 435.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb pigsty 0.1.7 391.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb pigsty 0.1.7 391.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_liquid_14 pg_liquid_14-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 65.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_liquid_14-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_liquid_14 pg_liquid_14-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 62.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_liquid_14-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_liquid_14 pg_liquid_14-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 64.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_14-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_liquid_14 pg_liquid_14-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 62.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_14-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_liquid_14 pg_liquid_14-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 66.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_14-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_liquid_14 pg_liquid_14-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 63.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_14-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-liquid postgresql-14-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb pigsty 0.1.7 366.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-14-pg-liquid_0.1.7-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-liquid postgresql-14-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb pigsty 0.1.7 363.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-14-pg-liquid_0.1.7-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-liquid postgresql-14-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb pigsty 0.1.7 367.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-14-pg-liquid_0.1.7-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-liquid postgresql-14-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb pigsty 0.1.7 364.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-14-pg-liquid_0.1.7-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-liquid postgresql-14-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb pigsty 0.1.7 427.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-14-pg-liquid_0.1.7-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-liquid postgresql-14-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb pigsty 0.1.7 429.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-14-pg-liquid_0.1.7-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-liquid postgresql-14-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb pigsty 0.1.7 387.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-14-pg-liquid_0.1.7-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-liquid postgresql-14-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb pigsty 0.1.7 388.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-14-pg-liquid_0.1.7-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_liquid` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_liquid         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_liquid` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_liquid;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_liquid -v 18  # PG 18
pig ext install -y pg_liquid -v 17  # PG 17
pig ext install -y pg_liquid -v 16  # PG 16
pig ext install -y pg_liquid -v 15  # PG 15
pig ext install -y pg_liquid -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_liquid_18       # PG 18
dnf install -y pg_liquid_17       # PG 17
dnf install -y pg_liquid_16       # PG 16
dnf install -y pg_liquid_15       # PG 15
dnf install -y pg_liquid_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-liquid   # PG 18
apt install -y postgresql-17-pg-liquid   # PG 17
apt install -y postgresql-16-pg-liquid   # PG 16
apt install -y postgresql-15-pg-liquid   # PG 15
apt install -y postgresql-14-pg-liquid   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_liquid;
```

## 用法

来源：[Docs site](https://michael-golfi.github.io/pg_liquid/)，[README](https://github.com/michael-golfi/pg_liquid/blob/main/README.md)，[Release v0.1.7](https://github.com/michael-golfi/pg_liquid/releases/tag/v0.1.7)，[SQL install script](https://github.com/michael-golfi/pg_liquid/blob/main/sql/pg_liquid--0.1.7.sql)

`pg_liquid` 将 Liquid 风格的 graph 与 compound query 引入 PostgreSQL。它在 `liquid` schema 中存储 graph state，并提供普通 query、principal-bound query 与 least-privilege read 的 SQL 入口。

### 核心查询接口

```sql
CREATE EXTENSION pg_liquid;

SELECT *
FROM liquid.query($$
  Edge("a","b").
  Edge("b","c").
  Path(X,Y) :- Edge(X,Y).
  Path(X,Y) :- Edge(X,Z), Path(Z,Y).
  Path("a",Y)?
$$) AS t(y text);
```

- `liquid.query(program text)`：执行 Liquid facts、rules 和一个最终 query。
- `liquid.query_as(principal text, program text)`：以 principal 绑定方式执行。
- `liquid.read_as(principal text, program text)`：最小权限读取封装，面向应用侧读取。

### 语言与建模特性

- 以 `.` 结尾的 facts 和 rules
- 每个 program 只能有一个最终 `?` query
- 通过 `Edge(...)` 表示 graph edges
- 形如 `Type@(role=value, ...)` 的 typed compounds
- query-local recursive rules
- 内建策略 compound，例如 `CompoundReadByRole` 与 `liquid/acts_for`

### 行规范化器

```sql
SELECT liquid.create_row_normalizer(
  'account_profiles'::regclass,
  'account_profile_normalizer',
  'AccountProfile',
  '{"account_id":"id","display_name":"display_name","tier":"tier"}'::jsonb,
  true
);
```

- `liquid.create_row_normalizer(...)`：将关系行投影为 Liquid compounds。
- `liquid.rebuild_row_normalizer(...)`：在表结构变化后重新生成绑定。
- `liquid.drop_row_normalizer(...)`：删除规范化器，并可选清理已生成绑定。

### 注意事项

- 上游在 PostgreSQL 14 到 18 上验证该扩展。
- 随附 SQL 会从 `PUBLIC` 撤销 `query_as` 与 `read_as`；应按需显式授权。
- 当客户端不应声明新 facts 时，`read_as(...)` 是更安全的应用入口。
