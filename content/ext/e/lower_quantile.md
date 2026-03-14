---
title: "lower_quantile"
linkTitle: "lower_quantile"
description: "Lower Quantile 聚合函数"
weight: 4620
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tvondra/lower_quantile">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tvondra/lower_quantile</div>
    <div class="ext-card__desc">https://github.com/tvondra/lower_quantile</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/lower_quantile-1.0.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">lower_quantile-1.0.3.tar.gz</div>
    <div class="ext-card__desc">lower_quantile-1.0.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`lower_quantile`**](/ext/e/lower_quantile) | `1.0.3` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4620  | [**`lower_quantile`**](/ext/e/lower_quantile) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`quantile`](/ext/e/quantile) [`topn`](/ext/e/topn) [`ddsketch`](/ext/e/ddsketch) [`omnisketch`](/ext/e/omnisketch) [`count_distinct`](/ext/e/count_distinct) [`first_last_agg`](/ext/e/first_last_agg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.3` | {{< pgvers "18,17,16,15,14" >}} | `lower_quantile` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.3` | {{< pgvers "18,17,16,15,14" >}} | `lower_quantile_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-lower-quantile` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 | AVAIL PIGSTY 1.0.3 1 |
@ el8.x86_64 18 lower_quantile_18 lower_quantile_18-1.0.3-1PIGSTY.el8.x86_64.rpm pigsty 1.0.3 15.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/lower_quantile_18-1.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 lower_quantile_18 lower_quantile_18-1.0.3-1PIGSTY.el8.aarch64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/lower_quantile_18-1.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 lower_quantile_18 lower_quantile_18-1.0.3-1PIGSTY.el9.x86_64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/lower_quantile_18-1.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 lower_quantile_18 lower_quantile_18-1.0.3-1PIGSTY.el9.aarch64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/lower_quantile_18-1.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 lower_quantile_18 lower_quantile_18-1.0.3-1PIGSTY.el10.x86_64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/lower_quantile_18-1.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 lower_quantile_18 lower_quantile_18-1.0.3-1PIGSTY.el10.aarch64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/lower_quantile_18-1.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-lower-quantile postgresql-18-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb pigsty 1.0.3 16.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-18-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-lower-quantile postgresql-18-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb pigsty 1.0.3 16.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-18-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-lower-quantile postgresql-18-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb pigsty 1.0.3 16.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-18-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-lower-quantile postgresql-18-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb pigsty 1.0.3 16.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-18-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-lower-quantile postgresql-18-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb pigsty 1.0.3 16.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-18-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-lower-quantile postgresql-18-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb pigsty 1.0.3 16.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-18-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-lower-quantile postgresql-18-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb pigsty 1.0.3 16.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-18-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-lower-quantile postgresql-18-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb pigsty 1.0.3 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-18-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 lower_quantile_17 lower_quantile_17-1.0.3-1PIGSTY.el8.x86_64.rpm pigsty 1.0.3 15.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/lower_quantile_17-1.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 lower_quantile_17 lower_quantile_17-1.0.3-1PIGSTY.el8.aarch64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/lower_quantile_17-1.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 lower_quantile_17 lower_quantile_17-1.0.3-1PIGSTY.el9.x86_64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/lower_quantile_17-1.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 lower_quantile_17 lower_quantile_17-1.0.3-1PIGSTY.el9.aarch64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/lower_quantile_17-1.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 lower_quantile_17 lower_quantile_17-1.0.3-1PIGSTY.el10.x86_64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/lower_quantile_17-1.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 lower_quantile_17 lower_quantile_17-1.0.3-1PIGSTY.el10.aarch64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/lower_quantile_17-1.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-lower-quantile postgresql-17-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb pigsty 1.0.3 16.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-17-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-lower-quantile postgresql-17-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb pigsty 1.0.3 16.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-17-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-lower-quantile postgresql-17-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb pigsty 1.0.3 16.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-17-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-lower-quantile postgresql-17-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb pigsty 1.0.3 16.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-17-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-lower-quantile postgresql-17-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb pigsty 1.0.3 17.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-17-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-lower-quantile postgresql-17-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb pigsty 1.0.3 17.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-17-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-lower-quantile postgresql-17-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb pigsty 1.0.3 17.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-17-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-lower-quantile postgresql-17-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb pigsty 1.0.3 16.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-17-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 lower_quantile_16 lower_quantile_16-1.0.3-1PIGSTY.el8.x86_64.rpm pigsty 1.0.3 15.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/lower_quantile_16-1.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 lower_quantile_16 lower_quantile_16-1.0.3-1PIGSTY.el8.aarch64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/lower_quantile_16-1.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 lower_quantile_16 lower_quantile_16-1.0.3-1PIGSTY.el9.x86_64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/lower_quantile_16-1.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 lower_quantile_16 lower_quantile_16-1.0.3-1PIGSTY.el9.aarch64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/lower_quantile_16-1.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 lower_quantile_16 lower_quantile_16-1.0.3-1PIGSTY.el10.x86_64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/lower_quantile_16-1.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 lower_quantile_16 lower_quantile_16-1.0.3-1PIGSTY.el10.aarch64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/lower_quantile_16-1.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-lower-quantile postgresql-16-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb pigsty 1.0.3 16.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-16-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-lower-quantile postgresql-16-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb pigsty 1.0.3 16.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-16-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-lower-quantile postgresql-16-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb pigsty 1.0.3 16.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-16-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-lower-quantile postgresql-16-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb pigsty 1.0.3 16.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-16-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-lower-quantile postgresql-16-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb pigsty 1.0.3 17.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-16-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-lower-quantile postgresql-16-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb pigsty 1.0.3 17.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-16-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-lower-quantile postgresql-16-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb pigsty 1.0.3 16.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-16-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-lower-quantile postgresql-16-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb pigsty 1.0.3 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-16-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 lower_quantile_15 lower_quantile_15-1.0.3-1PIGSTY.el8.x86_64.rpm pigsty 1.0.3 15.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/lower_quantile_15-1.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 lower_quantile_15 lower_quantile_15-1.0.3-1PIGSTY.el8.aarch64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/lower_quantile_15-1.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 lower_quantile_15 lower_quantile_15-1.0.3-1PIGSTY.el9.x86_64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/lower_quantile_15-1.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 lower_quantile_15 lower_quantile_15-1.0.3-1PIGSTY.el9.aarch64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/lower_quantile_15-1.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 lower_quantile_15 lower_quantile_15-1.0.3-1PIGSTY.el10.x86_64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/lower_quantile_15-1.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 lower_quantile_15 lower_quantile_15-1.0.3-1PIGSTY.el10.aarch64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/lower_quantile_15-1.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-lower-quantile postgresql-15-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb pigsty 1.0.3 16.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-15-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-lower-quantile postgresql-15-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb pigsty 1.0.3 16.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-15-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-lower-quantile postgresql-15-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb pigsty 1.0.3 16.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-15-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-lower-quantile postgresql-15-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb pigsty 1.0.3 16.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-15-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-lower-quantile postgresql-15-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb pigsty 1.0.3 17.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-15-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-lower-quantile postgresql-15-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb pigsty 1.0.3 17.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-15-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-lower-quantile postgresql-15-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb pigsty 1.0.3 16.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-15-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-lower-quantile postgresql-15-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb pigsty 1.0.3 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-15-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 lower_quantile_14 lower_quantile_14-1.0.3-1PIGSTY.el8.x86_64.rpm pigsty 1.0.3 15.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/lower_quantile_14-1.0.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 lower_quantile_14 lower_quantile_14-1.0.3-1PIGSTY.el8.aarch64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/lower_quantile_14-1.0.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 lower_quantile_14 lower_quantile_14-1.0.3-1PIGSTY.el9.x86_64.rpm pigsty 1.0.3 15.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/lower_quantile_14-1.0.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 lower_quantile_14 lower_quantile_14-1.0.3-1PIGSTY.el9.aarch64.rpm pigsty 1.0.3 15.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/lower_quantile_14-1.0.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 lower_quantile_14 lower_quantile_14-1.0.3-1PIGSTY.el10.x86_64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/lower_quantile_14-1.0.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 lower_quantile_14 lower_quantile_14-1.0.3-1PIGSTY.el10.aarch64.rpm pigsty 1.0.3 15.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/lower_quantile_14-1.0.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-lower-quantile postgresql-14-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb pigsty 1.0.3 16.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-14-lower-quantile_1.0.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-lower-quantile postgresql-14-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb pigsty 1.0.3 16.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/l/lower-quantile/postgresql-14-lower-quantile_1.0.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-lower-quantile postgresql-14-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb pigsty 1.0.3 16.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-14-lower-quantile_1.0.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-lower-quantile postgresql-14-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb pigsty 1.0.3 16.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/l/lower-quantile/postgresql-14-lower-quantile_1.0.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-lower-quantile postgresql-14-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb pigsty 1.0.3 17.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-14-lower-quantile_1.0.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-lower-quantile postgresql-14-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb pigsty 1.0.3 17.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/l/lower-quantile/postgresql-14-lower-quantile_1.0.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-lower-quantile postgresql-14-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb pigsty 1.0.3 16.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-14-lower-quantile_1.0.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-lower-quantile postgresql-14-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb pigsty 1.0.3 16.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/l/lower-quantile/postgresql-14-lower-quantile_1.0.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `lower_quantile` 扩展的 RPM / DEB 包：

```bash
pig build pkg lower_quantile         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `lower_quantile` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install lower_quantile;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y lower_quantile -v 18  # PG 18
pig ext install -y lower_quantile -v 17  # PG 17
pig ext install -y lower_quantile -v 16  # PG 16
pig ext install -y lower_quantile -v 15  # PG 15
pig ext install -y lower_quantile -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y lower_quantile_18       # PG 18
dnf install -y lower_quantile_17       # PG 17
dnf install -y lower_quantile_16       # PG 16
dnf install -y lower_quantile_15       # PG 15
dnf install -y lower_quantile_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-lower-quantile   # PG 18
apt install -y postgresql-17-lower-quantile   # PG 17
apt install -y postgresql-16-lower-quantile   # PG 16
apt install -y postgresql-15-lower-quantile   # PG 15
apt install -y postgresql-14-lower-quantile   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION lower_quantile;
```



## 用法

> [lower_quantile: PostgreSQL 的下分位数聚合函数](https://github.com/tvondra/lower_quantile)

实现了"下分位数"聚合，与 `percentile_disc` 略有不同，它返回在排序多重集中秩为 `floor(1 + q*(n-1))` 的值。

```sql
CREATE EXTENSION lower_quantile;
```

### 函数

| 函数 | 描述 |
|---|---|
| `lower_quantile(value, quantile float)` | 计算给定分位数值（0 到 1）的下分位数 |

### 示例

```sql
-- 计算下分位数中位数
SELECT lower_quantile(i, 0.5)
FROM generate_series(1, 1000) s(i);

-- 计算第 95 百分位下分位数
SELECT lower_quantile(i, 0.95)
FROM generate_series(1, 1000) s(i);
```

该定义被部分论文（例如 DDSketch 论文）用于表述精度保证。
