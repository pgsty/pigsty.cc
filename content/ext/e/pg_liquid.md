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
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2610  | [**`pg_liquid`**](/ext/e/pg_liquid) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `liquid` |
{.ext-table .wide .expand}

| **相关扩展** | [`age`](/ext/e/age) [`onesparse`](/ext/e/onesparse) [`graph`](/ext/e/graph) [`pgrdf`](/ext/e/pgrdf) [`ltree`](/ext/e/ltree) [`sparql`](/ext/e/sparql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.7` | {{< pgvers "19,18,17,16,15" >}} | `pg_liquid` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.7` | {{< pgvers "19,18,17,16,15" >}} | `pg_liquid_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.7` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-pg-liquid` | - |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
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
| u26.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
@ el9.x86_64 19 pg_liquid_19 pg_liquid_19-0.1.7-1PGSTY.el9.x86_64.rpm pigsty 0.1.7 412.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_19-0.1.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 19 pg_liquid_19 pg_liquid_19-0.1.7-1PGSTY.el9.aarch64.rpm pigsty 0.1.7 412.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_19-0.1.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 19 pg_liquid_19 pg_liquid_19-0.1.7-1PGSTY.el10.x86_64.rpm pigsty 0.1.7 401.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_19-0.1.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 19 pg_liquid_19 pg_liquid_19-0.1.7-1PGSTY.el10.aarch64.rpm pigsty 0.1.7 401.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_19-0.1.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb pigsty 0.1.7 373.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb pigsty 0.1.7 371.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb pigsty 0.1.7 374.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb pigsty 0.1.7 372.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb pigsty 0.1.7 417.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb pigsty 0.1.7 418.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb pigsty 0.1.7 395.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb pigsty 0.1.7 397.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb pigsty 0.1.7 392.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 19 postgresql-19-pg-liquid postgresql-19-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb pigsty 0.1.7 393.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-19-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb
@ el8.x86_64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PGSTY.el8.x86_64.rpm pigsty 0.1.7 396.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_liquid_18-0.1.7-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PGSTY.el8.aarch64.rpm pigsty 0.1.7 409.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_liquid_18-0.1.7-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PGSTY.el9.x86_64.rpm pigsty 0.1.7 420.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_18-0.1.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PGSTY.el9.aarch64.rpm pigsty 0.1.7 421.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_18-0.1.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PGSTY.el10.x86_64.rpm pigsty 0.1.7 410.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_18-0.1.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_liquid_18 pg_liquid_18-0.1.7-1PGSTY.el10.aarch64.rpm pigsty 0.1.7 410.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_18-0.1.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb pigsty 0.1.7 383.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb pigsty 0.1.7 378.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb pigsty 0.1.7 383.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb pigsty 0.1.7 378.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb pigsty 0.1.7 429.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb pigsty 0.1.7 427.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb pigsty 0.1.7 407.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb pigsty 0.1.7 403.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb pigsty 0.1.7 400.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-liquid postgresql-18-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb pigsty 0.1.7 400.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-18-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PGSTY.el8.x86_64.rpm pigsty 0.1.7 396.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_liquid_17-0.1.7-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PGSTY.el8.aarch64.rpm pigsty 0.1.7 410.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_liquid_17-0.1.7-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PGSTY.el9.x86_64.rpm pigsty 0.1.7 420.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_17-0.1.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PGSTY.el9.aarch64.rpm pigsty 0.1.7 422.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_17-0.1.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PGSTY.el10.x86_64.rpm pigsty 0.1.7 410.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_17-0.1.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_liquid_17 pg_liquid_17-0.1.7-1PGSTY.el10.aarch64.rpm pigsty 0.1.7 409.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_17-0.1.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb pigsty 0.1.7 379.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb pigsty 0.1.7 376.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb pigsty 0.1.7 379.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb pigsty 0.1.7 377.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb pigsty 0.1.7 450.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb pigsty 0.1.7 450.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb pigsty 0.1.7 400.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb pigsty 0.1.7 401.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb pigsty 0.1.7 400.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-liquid postgresql-17-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb pigsty 0.1.7 399.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-17-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PGSTY.el8.x86_64.rpm pigsty 0.1.7 384.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_liquid_16-0.1.7-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PGSTY.el8.aarch64.rpm pigsty 0.1.7 398.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_liquid_16-0.1.7-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PGSTY.el9.x86_64.rpm pigsty 0.1.7 409.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_16-0.1.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PGSTY.el9.aarch64.rpm pigsty 0.1.7 409.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_16-0.1.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PGSTY.el10.x86_64.rpm pigsty 0.1.7 399.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_16-0.1.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_liquid_16 pg_liquid_16-0.1.7-1PGSTY.el10.aarch64.rpm pigsty 0.1.7 400.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_16-0.1.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb pigsty 0.1.7 372.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb pigsty 0.1.7 367.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb pigsty 0.1.7 372.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb pigsty 0.1.7 368.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb pigsty 0.1.7 437.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb pigsty 0.1.7 436.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb pigsty 0.1.7 394.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb pigsty 0.1.7 391.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb pigsty 0.1.7 391.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-liquid postgresql-16-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb pigsty 0.1.7 388.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-16-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PGSTY.el8.x86_64.rpm pigsty 0.1.7 383.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_liquid_15-0.1.7-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PGSTY.el8.aarch64.rpm pigsty 0.1.7 398.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_liquid_15-0.1.7-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PGSTY.el9.x86_64.rpm pigsty 0.1.7 408.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_liquid_15-0.1.7-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PGSTY.el9.aarch64.rpm pigsty 0.1.7 410.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_liquid_15-0.1.7-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PGSTY.el10.x86_64.rpm pigsty 0.1.7 400.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_liquid_15-0.1.7-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_liquid_15 pg_liquid_15-0.1.7-1PGSTY.el10.aarch64.rpm pigsty 0.1.7 398.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_liquid_15-0.1.7-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb pigsty 0.1.7 370.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb pigsty 0.1.7 367.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb pigsty 0.1.7 371.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb pigsty 0.1.7 368.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb pigsty 0.1.7 434.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb pigsty 0.1.7 435.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb pigsty 0.1.7 391.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb pigsty 0.1.7 391.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb pigsty 0.1.7 389.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-liquid postgresql-15-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb pigsty 0.1.7 387.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-liquid/postgresql-15-pg-liquid_0.1.7-1PGSTY~resolute_arm64.deb
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

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_liquid;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_liquid -v 19  # PG 19
pig ext install -y pg_liquid -v 18  # PG 18
pig ext install -y pg_liquid -v 17  # PG 17
pig ext install -y pg_liquid -v 16  # PG 16
pig ext install -y pg_liquid -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_liquid_19       # PG 19
dnf install -y pg_liquid_18       # PG 18
dnf install -y pg_liquid_17       # PG 17
dnf install -y pg_liquid_16       # PG 16
dnf install -y pg_liquid_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-pg-liquid   # PG 19
apt install -y postgresql-18-pg-liquid   # PG 18
apt install -y postgresql-17-pg-liquid   # PG 17
apt install -y postgresql-16-pg-liquid   # PG 16
apt install -y postgresql-15-pg-liquid   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION pg_liquid;
```




## 用法

来源：[文档站点](https://michael-golfi.github.io/pg_liquid/)，[README](https://github.com/michael-golfi/pg_liquid/blob/main/README.md)，[v0.1.7 发行版](https://github.com/michael-golfi/pg_liquid/releases/tag/v0.1.7)，[SQL 安装脚本](https://github.com/michael-golfi/pg_liquid/blob/main/sql/pg_liquid--0.1.7.sql)

`pg_liquid` 将 Liquid 风格的图与复合查询引入 PostgreSQL。它在 `liquid` 模式中存储图状态，并提供普通查询、绑定主体的查询与最小权限读取的 SQL 入口。

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

- `liquid.query(program text)`：执行 Liquid 事实、规则和一个最终查询。
- `liquid.query_as(principal text, program text)`：以主体绑定方式执行。
- `liquid.read_as(principal text, program text)`：最小权限读取封装，面向应用侧读取。

### 语言与建模特性

- 以 `.` 结尾的事实和规则
- 每个程序只能有一个最终 `?` 查询
- 通过 `Edge(...)` 表示图边
- 形如 `Type@(role=value, ...)` 的类型化复合项
- 查询局部递归规则
- 内建策略复合项，例如 `CompoundReadByRole` 与 `liquid/acts_for`

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

- `liquid.create_row_normalizer(...)`：将关系行投影为 Liquid 复合项。
- `liquid.rebuild_row_normalizer(...)`：在表结构变化后重新生成绑定。
- `liquid.drop_row_normalizer(...)`：删除规范化器，并可选清理已生成绑定。

### 注意事项

- 上游在 PostgreSQL 14 到 18 上验证该扩展。
- 随附 SQL 会从 `PUBLIC` 撤销 `query_as` 与 `read_as`；应按需显式授权。
- 当客户端不应声明新事实时，`read_as(...)` 是更安全的应用入口。
