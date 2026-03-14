---
title: "ddsketch"
linkTitle: "ddsketch"
description: "实现DDSketch数据结构，实现在线的Quantile聚合"
weight: 4650
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tvondra/ddsketch">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tvondra/ddsketch</div>
    <div class="ext-card__desc">https://github.com/tvondra/ddsketch</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/ddsketch-1.0.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">ddsketch-1.0.1.tar.gz</div>
    <div class="ext-card__desc">ddsketch-1.0.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`ddsketch`**](/ext/e/ddsketch) | `1.0.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4650  | [**`ddsketch`**](/ext/e/ddsketch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`omnisketch`](/ext/e/omnisketch) [`quantile`](/ext/e/quantile) [`lower_quantile`](/ext/e/lower_quantile) [`topn`](/ext/e/topn) [`count_distinct`](/ext/e/count_distinct) [`hll`](/ext/e/hll) [`first_last_agg`](/ext/e/first_last_agg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `ddsketch` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `ddsketch_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-ddsketch` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 | AVAIL PIGSTY 1.0.1 1 |
@ el8.x86_64 18 ddsketch_18 ddsketch_18-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddsketch_18-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 ddsketch_18 ddsketch_18-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddsketch_18-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 ddsketch_18 ddsketch_18-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 34.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddsketch_18-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 ddsketch_18 ddsketch_18-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 32.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddsketch_18-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 ddsketch_18 ddsketch_18-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddsketch_18-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 ddsketch_18 ddsketch_18-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 33.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddsketch_18-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-ddsketch postgresql-18-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 60.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-18-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-ddsketch postgresql-18-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 60.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-18-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-ddsketch postgresql-18-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 60.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-18-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-ddsketch postgresql-18-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 60.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-18-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-ddsketch postgresql-18-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 64.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-18-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-ddsketch postgresql-18-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 65.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-18-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-ddsketch postgresql-18-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 63.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-18-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-ddsketch postgresql-18-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 64.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-18-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 ddsketch_17 ddsketch_17-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddsketch_17-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 ddsketch_17 ddsketch_17-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddsketch_17-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 ddsketch_17 ddsketch_17-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 34.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddsketch_17-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 ddsketch_17 ddsketch_17-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 32.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddsketch_17-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 ddsketch_17 ddsketch_17-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddsketch_17-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 ddsketch_17 ddsketch_17-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 33.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddsketch_17-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-ddsketch postgresql-17-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 60.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-17-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-ddsketch postgresql-17-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 60.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-17-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-ddsketch postgresql-17-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 60.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-17-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-ddsketch postgresql-17-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 60.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-17-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-ddsketch postgresql-17-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 69.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-17-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-ddsketch postgresql-17-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 69.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-17-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-ddsketch postgresql-17-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 63.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-17-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-ddsketch postgresql-17-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 64.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-17-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 ddsketch_16 ddsketch_16-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddsketch_16-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 ddsketch_16 ddsketch_16-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddsketch_16-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 ddsketch_16 ddsketch_16-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 34.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddsketch_16-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 ddsketch_16 ddsketch_16-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 32.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddsketch_16-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 ddsketch_16 ddsketch_16-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddsketch_16-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 ddsketch_16 ddsketch_16-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 33.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddsketch_16-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-ddsketch postgresql-16-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 60.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-16-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-ddsketch postgresql-16-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 60.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-16-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-ddsketch postgresql-16-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 60.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-16-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-ddsketch postgresql-16-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 60.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-16-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-ddsketch postgresql-16-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 69.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-16-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-ddsketch postgresql-16-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 69.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-16-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-ddsketch postgresql-16-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 63.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-16-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-ddsketch postgresql-16-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 64.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-16-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 ddsketch_15 ddsketch_15-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddsketch_15-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 ddsketch_15 ddsketch_15-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddsketch_15-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 ddsketch_15 ddsketch_15-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 34.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddsketch_15-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 ddsketch_15 ddsketch_15-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 32.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddsketch_15-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 ddsketch_15 ddsketch_15-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddsketch_15-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 ddsketch_15 ddsketch_15-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 33.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddsketch_15-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-ddsketch postgresql-15-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 60.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-15-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-ddsketch postgresql-15-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 60.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-15-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-ddsketch postgresql-15-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 60.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-15-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-ddsketch postgresql-15-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 60.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-15-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-ddsketch postgresql-15-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 69.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-15-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-ddsketch postgresql-15-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 69.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-15-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-ddsketch postgresql-15-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 63.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-15-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-ddsketch postgresql-15-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 64.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-15-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 ddsketch_14 ddsketch_14-1.0.1-1PIGSTY.el8.x86_64.rpm pigsty 1.0.1 34.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ddsketch_14-1.0.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 ddsketch_14 ddsketch_14-1.0.1-1PIGSTY.el8.aarch64.rpm pigsty 1.0.1 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ddsketch_14-1.0.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 ddsketch_14 ddsketch_14-1.0.1-1PIGSTY.el9.x86_64.rpm pigsty 1.0.1 34.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ddsketch_14-1.0.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 ddsketch_14 ddsketch_14-1.0.1-1PIGSTY.el9.aarch64.rpm pigsty 1.0.1 32.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ddsketch_14-1.0.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 ddsketch_14 ddsketch_14-1.0.1-1PIGSTY.el10.x86_64.rpm pigsty 1.0.1 34.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ddsketch_14-1.0.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 ddsketch_14 ddsketch_14-1.0.1-1PIGSTY.el10.aarch64.rpm pigsty 1.0.1 33.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ddsketch_14-1.0.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-ddsketch postgresql-14-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb pigsty 1.0.1 60.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-14-ddsketch_1.0.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-ddsketch postgresql-14-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb pigsty 1.0.1 60.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/d/ddsketch/postgresql-14-ddsketch_1.0.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-ddsketch postgresql-14-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb pigsty 1.0.1 60.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-14-ddsketch_1.0.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-ddsketch postgresql-14-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb pigsty 1.0.1 60.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/d/ddsketch/postgresql-14-ddsketch_1.0.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-ddsketch postgresql-14-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb pigsty 1.0.1 69.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-14-ddsketch_1.0.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-ddsketch postgresql-14-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb pigsty 1.0.1 69.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/d/ddsketch/postgresql-14-ddsketch_1.0.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-ddsketch postgresql-14-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb pigsty 1.0.1 63.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-14-ddsketch_1.0.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-ddsketch postgresql-14-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb pigsty 1.0.1 63.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/d/ddsketch/postgresql-14-ddsketch_1.0.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `ddsketch` 扩展的 RPM / DEB 包：

```bash
pig build pkg ddsketch         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `ddsketch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install ddsketch;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y ddsketch -v 18  # PG 18
pig ext install -y ddsketch -v 17  # PG 17
pig ext install -y ddsketch -v 16  # PG 16
pig ext install -y ddsketch -v 15  # PG 15
pig ext install -y ddsketch -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y ddsketch_18       # PG 18
dnf install -y ddsketch_17       # PG 17
dnf install -y ddsketch_16       # PG 16
dnf install -y ddsketch_15       # PG 15
dnf install -y ddsketch_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-ddsketch   # PG 18
apt install -y postgresql-17-ddsketch   # PG 17
apt install -y postgresql-16-ddsketch   # PG 16
apt install -y postgresql-15-ddsketch   # PG 15
apt install -y postgresql-14-ddsketch   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION ddsketch;
```



## 用法

> [ddsketch: PostgreSQL 的 DDSketch 分位数估计](https://github.com/tvondra/ddsketch)

实现了 DDSketch，一种完全可合并的分位数草图，提供相对误差保证。比 `percentile_cont` 快得多，并支持并行处理。

```sql
CREATE EXTENSION ddsketch;
```

### 直接聚合函数

| 函数 | 描述 |
|---|---|
| `ddsketch_percentile(value, alpha, nbuckets, quantile)` | 估计单个百分位数 |
| `ddsketch_percentile(value, alpha, nbuckets, quantiles[])` | 估计多个百分位数 |
| `ddsketch_percentile_of(value, alpha, nbuckets, value)` | 估计某个值的百分位排名 |
| `ddsketch_percentile_of(value, alpha, nbuckets, values[])` | 估计多个值的百分位排名 |

### 预聚合函数

| 函数 | 描述 |
|---|---|
| `ddsketch(value, alpha, nbuckets)` | 从值构建 ddsketch |
| `ddsketch_percentile(sketch, quantile)` | 从预构建的草图估计百分位数 |
| `ddsketch_percentile(sketch, quantiles[])` | 从预构建的草图估计多个百分位数 |

### 工具函数

| 函数 | 描述 |
|---|---|
| `ddsketch_count(sketch)` | 返回草图中的项目数量 |
| `ddsketch_sum(sketch, low, high)` | 指定值范围内的截断求和 |
| `ddsketch_avg(sketch, low, high)` | 指定值范围内的截断平均值 |

### 参数

- `alpha` -- 控制精度和草图大小（越小越精确，但体积越大）
- `nbuckets` -- 最大桶数（每个 8 字节）

### 示例

```sql
-- 替代：SELECT percentile_cont(0.95) WITHIN GROUP (ORDER BY a) FROM t;
SELECT ddsketch_percentile(a, 0.05, 1024, 0.95) FROM t;

-- 一次估计多个百分位数
SELECT ddsketch_percentile(a, 0.05, 1024, ARRAY[0.5, 0.95, 0.99]) FROM t;

-- 预聚合以加速重复查询
CREATE TABLE p AS SELECT a, b, ddsketch(c, 0.05, 1024) AS d FROM t GROUP BY a, b;

-- 查询预聚合数据（约 1.5ms vs 精确计算约 7s）
SELECT a, ddsketch_percentile(d, 0.95) FROM p GROUP BY a ORDER BY a;
```
