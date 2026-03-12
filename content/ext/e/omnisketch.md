---
title: "omnisketch"
linkTitle: "omnisketch"
description: "实现OmniSketch数据结构，实现近似摘要聚合"
weight: 4640
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tvondra/omnisketch">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tvondra/omnisketch</div>
    <div class="ext-card__desc">https://github.com/tvondra/omnisketch</div>
  </a>
  <a class="ext-card ext-card--source" href="omnisketch-1.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">omnisketch-1.0.2.tar.gz</div>
    <div class="ext-card__desc">omnisketch-1.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`omnisketch`**](/ext/e/omnisketch) | `1.0.2` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4640  | [**`omnisketch`**](/ext/e/omnisketch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`ddsketch`](/ext/e/ddsketch) [`hll`](/ext/e/hll) [`count_distinct`](/ext/e/count_distinct) [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) [`lower_quantile`](/ext/e/lower_quantile) [`first_last_agg`](/ext/e/first_last_agg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `omnisketch` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `omnisketch_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-omnisketch` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 | AVAIL PIGSTY 1.0.2 1 |
@ el8.x86_64 18 omnisketch_18 omnisketch_18-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 20.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/omnisketch_18-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 omnisketch_18 omnisketch_18-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 20.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/omnisketch_18-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 omnisketch_18 omnisketch_18-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/omnisketch_18-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 omnisketch_18 omnisketch_18-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 20.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/omnisketch_18-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 omnisketch_18 omnisketch_18-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/omnisketch_18-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 omnisketch_18 omnisketch_18-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 20.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/omnisketch_18-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-omnisketch postgresql-18-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-18-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-omnisketch postgresql-18-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-18-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-omnisketch postgresql-18-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 26.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-18-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-omnisketch postgresql-18-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-18-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-omnisketch postgresql-18-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 27.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-18-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-omnisketch postgresql-18-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 27.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-18-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-omnisketch postgresql-18-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 27.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-18-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-omnisketch postgresql-18-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 27.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-18-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 omnisketch_17 omnisketch_17-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 20.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/omnisketch_17-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 omnisketch_17 omnisketch_17-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 20.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/omnisketch_17-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 omnisketch_17 omnisketch_17-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/omnisketch_17-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 omnisketch_17 omnisketch_17-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/omnisketch_17-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 omnisketch_17 omnisketch_17-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/omnisketch_17-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 omnisketch_17 omnisketch_17-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 20.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/omnisketch_17-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-omnisketch postgresql-17-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-17-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-omnisketch postgresql-17-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-17-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-omnisketch postgresql-17-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-17-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-omnisketch postgresql-17-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-17-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-omnisketch postgresql-17-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 28.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-17-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-omnisketch postgresql-17-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 28.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-17-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-omnisketch postgresql-17-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 27.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-17-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-omnisketch postgresql-17-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 27.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-17-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 omnisketch_16 omnisketch_16-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 20.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/omnisketch_16-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 omnisketch_16 omnisketch_16-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 20.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/omnisketch_16-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 omnisketch_16 omnisketch_16-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/omnisketch_16-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 omnisketch_16 omnisketch_16-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/omnisketch_16-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 omnisketch_16 omnisketch_16-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/omnisketch_16-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 omnisketch_16 omnisketch_16-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 20.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/omnisketch_16-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-omnisketch postgresql-16-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-16-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-omnisketch postgresql-16-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-16-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-omnisketch postgresql-16-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-16-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-omnisketch postgresql-16-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-16-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-omnisketch postgresql-16-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 28.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-16-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-omnisketch postgresql-16-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 28.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-16-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-omnisketch postgresql-16-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 27.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-16-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-omnisketch postgresql-16-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 27.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-16-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 omnisketch_15 omnisketch_15-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 20.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/omnisketch_15-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 omnisketch_15 omnisketch_15-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 20.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/omnisketch_15-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 omnisketch_15 omnisketch_15-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/omnisketch_15-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 omnisketch_15 omnisketch_15-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/omnisketch_15-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 omnisketch_15 omnisketch_15-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/omnisketch_15-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 omnisketch_15 omnisketch_15-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 20.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/omnisketch_15-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-omnisketch postgresql-15-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 26.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-15-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-omnisketch postgresql-15-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-15-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-omnisketch postgresql-15-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-15-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-omnisketch postgresql-15-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-15-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-omnisketch postgresql-15-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 28.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-15-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-omnisketch postgresql-15-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 28.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-15-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-omnisketch postgresql-15-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 27.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-15-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-omnisketch postgresql-15-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 27.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-15-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 omnisketch_14 omnisketch_14-1.0.2-1PIGSTY.el8.x86_64.rpm pigsty 1.0.2 20.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/omnisketch_14-1.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 omnisketch_14 omnisketch_14-1.0.2-1PIGSTY.el8.aarch64.rpm pigsty 1.0.2 20.3KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/omnisketch_14-1.0.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 omnisketch_14 omnisketch_14-1.0.2-1PIGSTY.el9.x86_64.rpm pigsty 1.0.2 20.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/omnisketch_14-1.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 omnisketch_14 omnisketch_14-1.0.2-1PIGSTY.el9.aarch64.rpm pigsty 1.0.2 20.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/omnisketch_14-1.0.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 omnisketch_14 omnisketch_14-1.0.2-1PIGSTY.el10.x86_64.rpm pigsty 1.0.2 20.2KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/omnisketch_14-1.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 omnisketch_14 omnisketch_14-1.0.2-1PIGSTY.el10.aarch64.rpm pigsty 1.0.2 20.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/omnisketch_14-1.0.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-omnisketch postgresql-14-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb pigsty 1.0.2 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-14-omnisketch_1.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-omnisketch postgresql-14-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb pigsty 1.0.2 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/o/omnisketch/postgresql-14-omnisketch_1.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-omnisketch postgresql-14-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb pigsty 1.0.2 26.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-14-omnisketch_1.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-omnisketch postgresql-14-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb pigsty 1.0.2 26.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/o/omnisketch/postgresql-14-omnisketch_1.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-omnisketch postgresql-14-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb pigsty 1.0.2 28.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-14-omnisketch_1.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-omnisketch postgresql-14-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb pigsty 1.0.2 28.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/o/omnisketch/postgresql-14-omnisketch_1.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-omnisketch postgresql-14-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb pigsty 1.0.2 27.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-14-omnisketch_1.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-omnisketch postgresql-14-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb pigsty 1.0.2 27.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/o/omnisketch/postgresql-14-omnisketch_1.0.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `omnisketch` 扩展的 RPM / DEB 包：

```bash
pig build pkg omnisketch         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `omnisketch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install omnisketch;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y omnisketch -v 18  # PG 18
pig ext install -y omnisketch -v 17  # PG 17
pig ext install -y omnisketch -v 16  # PG 16
pig ext install -y omnisketch -v 15  # PG 15
pig ext install -y omnisketch -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y omnisketch_18       # PG 18
dnf install -y omnisketch_17       # PG 17
dnf install -y omnisketch_16       # PG 16
dnf install -y omnisketch_15       # PG 15
dnf install -y omnisketch_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-omnisketch   # PG 18
apt install -y postgresql-17-omnisketch   # PG 17
apt install -y postgresql-16-omnisketch   # PG 16
apt install -y postgresql-15-omnisketch   # PG 15
apt install -y postgresql-14-omnisketch   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION omnisketch;
```




## 用法

> [omnisketch: 嵌入式数据库分析草图](https://docs.omnigres.org/omnisketch/)

`omnisketch` 扩展在 Omnigres 生态系统中提供用于近似查询处理的数据分析草图（sketch）功能。
