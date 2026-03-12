---
title: "quantile"
linkTitle: "quantile"
description: "Quantile聚合函数"
weight: 4610
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tvondra/quantile">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tvondra/quantile</div>
    <div class="ext-card__desc">https://github.com/tvondra/quantile</div>
  </a>
  <a class="ext-card ext-card--source" href="quantile-1.1.8.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">quantile-1.1.8.tar.gz</div>
    <div class="ext-card__desc">quantile-1.1.8.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`quantile`**](/ext/e/quantile) | `1.1.8` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4610  | [**`quantile`**](/ext/e/quantile) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`lower_quantile`](/ext/e/lower_quantile) [`topn`](/ext/e/topn) [`ddsketch`](/ext/e/ddsketch) [`omnisketch`](/ext/e/omnisketch) [`count_distinct`](/ext/e/count_distinct) [`first_last_agg`](/ext/e/first_last_agg) [`aggs_for_arrays`](/ext/e/aggs_for_arrays) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.8` | {{< pgvers "18,17,16,15,14" >}} | `quantile` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.8` | {{< pgvers "18,17,16,15,14" >}} | `quantile_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.8` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-quantile` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 | AVAIL PIGSTY 1.1.8 1 |
@ el8.x86_64 18 quantile_18 quantile_18-1.1.8-1PIGSTY.el8.x86_64.rpm pigsty 1.1.8 18.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/quantile_18-1.1.8-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 quantile_18 quantile_18-1.1.8-1PIGSTY.el8.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/quantile_18-1.1.8-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 quantile_18 quantile_18-1.1.8-1PIGSTY.el9.x86_64.rpm pigsty 1.1.8 18.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/quantile_18-1.1.8-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 quantile_18 quantile_18-1.1.8-1PIGSTY.el9.aarch64.rpm pigsty 1.1.8 17.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/quantile_18-1.1.8-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 quantile_18 quantile_18-1.1.8-1PIGSTY.el10.x86_64.rpm pigsty 1.1.8 18.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/quantile_18-1.1.8-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 quantile_18 quantile_18-1.1.8-1PIGSTY.el10.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/quantile_18-1.1.8-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-quantile postgresql-18-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.1.8 21.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-18-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-quantile postgresql-18-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.1.8 21.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-18-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-quantile postgresql-18-quantile_1.1.8-1PIGSTY~trixie_amd64.deb pigsty 1.1.8 21.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-18-quantile_1.1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-quantile postgresql-18-quantile_1.1.8-1PIGSTY~trixie_arm64.deb pigsty 1.1.8 21.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-18-quantile_1.1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-quantile postgresql-18-quantile_1.1.8-1PIGSTY~jammy_amd64.deb pigsty 1.1.8 22.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-18-quantile_1.1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-quantile postgresql-18-quantile_1.1.8-1PIGSTY~jammy_arm64.deb pigsty 1.1.8 21.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-18-quantile_1.1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-quantile postgresql-18-quantile_1.1.8-1PIGSTY~noble_amd64.deb pigsty 1.1.8 22.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-18-quantile_1.1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-quantile postgresql-18-quantile_1.1.8-1PIGSTY~noble_arm64.deb pigsty 1.1.8 22.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-18-quantile_1.1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 quantile_17 quantile_17-1.1.8-1PIGSTY.el8.x86_64.rpm pigsty 1.1.8 18.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/quantile_17-1.1.8-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 quantile_17 quantile_17-1.1.8-1PIGSTY.el8.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/quantile_17-1.1.8-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 quantile_17 quantile_17-1.1.8-1PIGSTY.el9.x86_64.rpm pigsty 1.1.8 18.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/quantile_17-1.1.8-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 quantile_17 quantile_17-1.1.8-1PIGSTY.el9.aarch64.rpm pigsty 1.1.8 17.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/quantile_17-1.1.8-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 quantile_17 quantile_17-1.1.8-1PIGSTY.el10.x86_64.rpm pigsty 1.1.8 18.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/quantile_17-1.1.8-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 quantile_17 quantile_17-1.1.8-1PIGSTY.el10.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/quantile_17-1.1.8-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-quantile postgresql-17-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.1.8 21.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-17-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-quantile postgresql-17-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.1.8 20.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-17-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-quantile postgresql-17-quantile_1.1.8-1PIGSTY~trixie_amd64.deb pigsty 1.1.8 21.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-17-quantile_1.1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-quantile postgresql-17-quantile_1.1.8-1PIGSTY~trixie_arm64.deb pigsty 1.1.8 21.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-17-quantile_1.1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-quantile postgresql-17-quantile_1.1.8-1PIGSTY~jammy_amd64.deb pigsty 1.1.8 23.9KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-17-quantile_1.1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-quantile postgresql-17-quantile_1.1.8-1PIGSTY~jammy_arm64.deb pigsty 1.1.8 23.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-17-quantile_1.1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-quantile postgresql-17-quantile_1.1.8-1PIGSTY~noble_amd64.deb pigsty 1.1.8 22.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-17-quantile_1.1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-quantile postgresql-17-quantile_1.1.8-1PIGSTY~noble_arm64.deb pigsty 1.1.8 22.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-17-quantile_1.1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 quantile_16 quantile_16-1.1.8-1PIGSTY.el8.x86_64.rpm pigsty 1.1.8 18.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/quantile_16-1.1.8-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 quantile_16 quantile_16-1.1.8-1PIGSTY.el8.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/quantile_16-1.1.8-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 quantile_16 quantile_16-1.1.8-1PIGSTY.el9.x86_64.rpm pigsty 1.1.8 18.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/quantile_16-1.1.8-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 quantile_16 quantile_16-1.1.8-1PIGSTY.el9.aarch64.rpm pigsty 1.1.8 17.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/quantile_16-1.1.8-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 quantile_16 quantile_16-1.1.8-1PIGSTY.el10.x86_64.rpm pigsty 1.1.8 18.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/quantile_16-1.1.8-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 quantile_16 quantile_16-1.1.8-1PIGSTY.el10.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/quantile_16-1.1.8-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-quantile postgresql-16-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.1.8 21.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-16-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-quantile postgresql-16-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.1.8 20.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-16-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-quantile postgresql-16-quantile_1.1.8-1PIGSTY~trixie_amd64.deb pigsty 1.1.8 21.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-16-quantile_1.1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-quantile postgresql-16-quantile_1.1.8-1PIGSTY~trixie_arm64.deb pigsty 1.1.8 21.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-16-quantile_1.1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-quantile postgresql-16-quantile_1.1.8-1PIGSTY~jammy_amd64.deb pigsty 1.1.8 23.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-16-quantile_1.1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-quantile postgresql-16-quantile_1.1.8-1PIGSTY~jammy_arm64.deb pigsty 1.1.8 23.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-16-quantile_1.1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-quantile postgresql-16-quantile_1.1.8-1PIGSTY~noble_amd64.deb pigsty 1.1.8 22.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-16-quantile_1.1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-quantile postgresql-16-quantile_1.1.8-1PIGSTY~noble_arm64.deb pigsty 1.1.8 21.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-16-quantile_1.1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 quantile_15 quantile_15-1.1.8-1PIGSTY.el8.x86_64.rpm pigsty 1.1.8 18.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/quantile_15-1.1.8-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 quantile_15 quantile_15-1.1.8-1PIGSTY.el8.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/quantile_15-1.1.8-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 quantile_15 quantile_15-1.1.8-1PIGSTY.el9.x86_64.rpm pigsty 1.1.8 18.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/quantile_15-1.1.8-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 quantile_15 quantile_15-1.1.8-1PIGSTY.el9.aarch64.rpm pigsty 1.1.8 17.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/quantile_15-1.1.8-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 quantile_15 quantile_15-1.1.8-1PIGSTY.el10.x86_64.rpm pigsty 1.1.8 18.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/quantile_15-1.1.8-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 quantile_15 quantile_15-1.1.8-1PIGSTY.el10.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/quantile_15-1.1.8-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-quantile postgresql-15-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.1.8 21.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-15-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-quantile postgresql-15-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.1.8 20.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-15-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-quantile postgresql-15-quantile_1.1.8-1PIGSTY~trixie_amd64.deb pigsty 1.1.8 21.2KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-15-quantile_1.1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-quantile postgresql-15-quantile_1.1.8-1PIGSTY~trixie_arm64.deb pigsty 1.1.8 21.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-15-quantile_1.1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-quantile postgresql-15-quantile_1.1.8-1PIGSTY~jammy_amd64.deb pigsty 1.1.8 23.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-15-quantile_1.1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-quantile postgresql-15-quantile_1.1.8-1PIGSTY~jammy_arm64.deb pigsty 1.1.8 22.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-15-quantile_1.1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-quantile postgresql-15-quantile_1.1.8-1PIGSTY~noble_amd64.deb pigsty 1.1.8 22.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-15-quantile_1.1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-quantile postgresql-15-quantile_1.1.8-1PIGSTY~noble_arm64.deb pigsty 1.1.8 21.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-15-quantile_1.1.8-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 quantile_14 quantile_14-1.1.8-1PIGSTY.el8.x86_64.rpm pigsty 1.1.8 18.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/quantile_14-1.1.8-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 quantile_14 quantile_14-1.1.8-1PIGSTY.el8.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/quantile_14-1.1.8-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 quantile_14 quantile_14-1.1.8-1PIGSTY.el9.x86_64.rpm pigsty 1.1.8 18.1KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/quantile_14-1.1.8-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 quantile_14 quantile_14-1.1.8-1PIGSTY.el9.aarch64.rpm pigsty 1.1.8 17.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/quantile_14-1.1.8-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 quantile_14 quantile_14-1.1.8-1PIGSTY.el10.x86_64.rpm pigsty 1.1.8 18.1KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/quantile_14-1.1.8-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 quantile_14 quantile_14-1.1.8-1PIGSTY.el10.aarch64.rpm pigsty 1.1.8 17.8KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/quantile_14-1.1.8-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-quantile postgresql-14-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb pigsty 1.1.8 21.3KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-14-quantile_1.1.8-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-quantile postgresql-14-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb pigsty 1.1.8 21.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/q/quantile/postgresql-14-quantile_1.1.8-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-quantile postgresql-14-quantile_1.1.8-1PIGSTY~trixie_amd64.deb pigsty 1.1.8 21.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-14-quantile_1.1.8-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-quantile postgresql-14-quantile_1.1.8-1PIGSTY~trixie_arm64.deb pigsty 1.1.8 21.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/q/quantile/postgresql-14-quantile_1.1.8-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-quantile postgresql-14-quantile_1.1.8-1PIGSTY~jammy_amd64.deb pigsty 1.1.8 23.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-14-quantile_1.1.8-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-quantile postgresql-14-quantile_1.1.8-1PIGSTY~jammy_arm64.deb pigsty 1.1.8 22.7KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/q/quantile/postgresql-14-quantile_1.1.8-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-quantile postgresql-14-quantile_1.1.8-1PIGSTY~noble_amd64.deb pigsty 1.1.8 22.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-14-quantile_1.1.8-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-quantile postgresql-14-quantile_1.1.8-1PIGSTY~noble_arm64.deb pigsty 1.1.8 22.0KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/q/quantile/postgresql-14-quantile_1.1.8-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `quantile` 扩展的 RPM / DEB 包：

```bash
pig build pkg quantile         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `quantile` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install quantile;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y quantile -v 18  # PG 18
pig ext install -y quantile -v 17  # PG 17
pig ext install -y quantile -v 16  # PG 16
pig ext install -y quantile -v 15  # PG 15
pig ext install -y quantile -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y quantile_18       # PG 18
dnf install -y quantile_17       # PG 17
dnf install -y quantile_16       # PG 16
dnf install -y quantile_15       # PG 15
dnf install -y quantile_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-quantile   # PG 18
apt install -y postgresql-17-quantile   # PG 17
apt install -y postgresql-16-quantile   # PG 16
apt install -y postgresql-15-quantile   # PG 15
apt install -y postgresql-14-quantile   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION quantile;
```



## 用法

> [quantile: PostgreSQL 的分位数聚合函数](https://github.com/tvondra/quantile)

提供计算分位数的聚合函数，支持 `int`、`bigint`、`double precision` 和 `numeric` 类型的重载。

```sql
CREATE EXTENSION quantile;
```

### 函数

| 函数 | 描述 |
|---|---|
| `quantile(value, quantile float)` | 计算单个分位数（0 到 1） |
| `quantile(value, quantiles float[])` | 一次计算多个分位数，返回数组 |

### 示例

```sql
-- 计算中位数（0.5 分位数）
SELECT quantile(i, 0.5) FROM generate_series(1, 1000) s(i);
-- 500

-- 计算第 95 百分位数
SELECT quantile(i, 0.95) FROM generate_series(1, 1000) s(i);

-- 一次计算所有四分位数（比分别调用更高效）
SELECT quantile(i, ARRAY[0.25, 0.5, 0.75])
FROM generate_series(1, 1000) s(i);
-- {250, 500, 750}
```

注意：自 PostgreSQL 9.4 起，内置的 `percentile_cont` 和 `percentile_disc` 函数已经可用。建议优先使用内置函数，仅在该扩展对您的工作负载有明显性能优势时才使用它。
