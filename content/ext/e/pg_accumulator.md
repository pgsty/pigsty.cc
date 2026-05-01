---
title: "pg_accumulator"
linkTitle: "pg_accumulator"
description: "PostgreSQL 中用于余额与周转跟踪的累积寄存器"
weight: 4845
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Treedo/pg_accumulator">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Treedo/pg_accumulator</div>
    <div class="ext-card__desc">https://github.com/Treedo/pg_accumulator</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_accumulator-1.1.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_accumulator-1.1.3.tar.gz</div>
    <div class="ext-card__desc">pg_accumulator-1.1.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_accumulator`**](/ext/e/pg_accumulator) | `1.1.3` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4845  | [**`pg_accumulator`**](/ext/e/pg_accumulator) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `accum` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`financial`](/ext/e/financial) [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) [`first_last_agg`](/ext/e/first_last_agg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_accumulator` | `plpgsql` |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_accumulator_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-accumulator` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| el8.aarch64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| el9.x86_64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| el9.aarch64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| el10.x86_64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| el10.aarch64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| d12.x86_64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| d12.aarch64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| d13.x86_64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| d13.aarch64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| u22.x86_64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| u22.aarch64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| u24.x86_64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| u24.aarch64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| u26.x86_64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
| u26.aarch64 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 | AVAIL PIGSTY 1.1.3 1 |
@ el8.x86_64 18 pg_accumulator_18 pg_accumulator_18-1.1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.1.3 56.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_accumulator_18-1.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_accumulator_18 pg_accumulator_18-1.1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.1.3 56.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_accumulator_18-1.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_accumulator_18 pg_accumulator_18-1.1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.1.3 54.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_accumulator_18-1.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_accumulator_18 pg_accumulator_18-1.1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.1.3 54.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_accumulator_18-1.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_accumulator_18 pg_accumulator_18-1.1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.1.3 54.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_accumulator_18-1.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_accumulator_18 pg_accumulator_18-1.1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.1.3 54.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_accumulator_18-1.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb pigsty 1.1.3 51.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb pigsty 1.1.3 50.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb pigsty 1.1.3 51.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb pigsty 1.1.3 50.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb pigsty 1.1.3 52.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb pigsty 1.1.3 52.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb pigsty 1.1.3 52.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb pigsty 1.1.3 51.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb pigsty 1.1.3 52.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-accumulator postgresql-18-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb pigsty 1.1.3 52.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-18-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_accumulator_17 pg_accumulator_17-1.1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.1.3 56.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_accumulator_17-1.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_accumulator_17 pg_accumulator_17-1.1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.1.3 56.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_accumulator_17-1.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_accumulator_17 pg_accumulator_17-1.1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.1.3 54.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_accumulator_17-1.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_accumulator_17 pg_accumulator_17-1.1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.1.3 54.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_accumulator_17-1.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_accumulator_17 pg_accumulator_17-1.1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.1.3 54.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_accumulator_17-1.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_accumulator_17 pg_accumulator_17-1.1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.1.3 54.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_accumulator_17-1.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb pigsty 1.1.3 51.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb pigsty 1.1.3 50.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb pigsty 1.1.3 51.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb pigsty 1.1.3 50.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb pigsty 1.1.3 54.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb pigsty 1.1.3 53.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb pigsty 1.1.3 52.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb pigsty 1.1.3 51.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb pigsty 1.1.3 52.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-accumulator postgresql-17-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb pigsty 1.1.3 52.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-17-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_accumulator_16 pg_accumulator_16-1.1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.1.3 56.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_accumulator_16-1.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_accumulator_16 pg_accumulator_16-1.1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.1.3 56.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_accumulator_16-1.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_accumulator_16 pg_accumulator_16-1.1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.1.3 54.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_accumulator_16-1.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_accumulator_16 pg_accumulator_16-1.1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.1.3 54.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_accumulator_16-1.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_accumulator_16 pg_accumulator_16-1.1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.1.3 54.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_accumulator_16-1.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_accumulator_16 pg_accumulator_16-1.1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.1.3 54.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_accumulator_16-1.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb pigsty 1.1.3 51.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb pigsty 1.1.3 50.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb pigsty 1.1.3 51.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb pigsty 1.1.3 51.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb pigsty 1.1.3 54.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb pigsty 1.1.3 53.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb pigsty 1.1.3 52.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb pigsty 1.1.3 51.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb pigsty 1.1.3 52.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-accumulator postgresql-16-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb pigsty 1.1.3 52.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-16-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_accumulator_15 pg_accumulator_15-1.1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.1.3 56.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_accumulator_15-1.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_accumulator_15 pg_accumulator_15-1.1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.1.3 56.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_accumulator_15-1.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_accumulator_15 pg_accumulator_15-1.1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.1.3 54.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_accumulator_15-1.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_accumulator_15 pg_accumulator_15-1.1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.1.3 54.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_accumulator_15-1.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_accumulator_15 pg_accumulator_15-1.1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.1.3 54.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_accumulator_15-1.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_accumulator_15 pg_accumulator_15-1.1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.1.3 54.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_accumulator_15-1.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb pigsty 1.1.3 51.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb pigsty 1.1.3 50.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb pigsty 1.1.3 51.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb pigsty 1.1.3 51.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb pigsty 1.1.3 54.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb pigsty 1.1.3 53.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb pigsty 1.1.3 52.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb pigsty 1.1.3 52.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb pigsty 1.1.3 52.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-accumulator postgresql-15-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb pigsty 1.1.3 52.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-15-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_accumulator_14 pg_accumulator_14-1.1.3-1PIGSTY.el8.x86_64.rpm pigsty 1.1.3 56.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_accumulator_14-1.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_accumulator_14 pg_accumulator_14-1.1.3-1PIGSTY.el8.aarch64.rpm pigsty 1.1.3 56.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_accumulator_14-1.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_accumulator_14 pg_accumulator_14-1.1.3-1PIGSTY.el9.x86_64.rpm pigsty 1.1.3 54.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_accumulator_14-1.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_accumulator_14 pg_accumulator_14-1.1.3-1PIGSTY.el9.aarch64.rpm pigsty 1.1.3 54.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_accumulator_14-1.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_accumulator_14 pg_accumulator_14-1.1.3-1PIGSTY.el10.x86_64.rpm pigsty 1.1.3 54.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_accumulator_14-1.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_accumulator_14 pg_accumulator_14-1.1.3-1PIGSTY.el10.aarch64.rpm pigsty 1.1.3 54.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_accumulator_14-1.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb pigsty 1.1.3 51.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb pigsty 1.1.3 50.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb pigsty 1.1.3 51.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb pigsty 1.1.3 51.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb pigsty 1.1.3 54.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb pigsty 1.1.3 53.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb pigsty 1.1.3 52.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb pigsty 1.1.3 52.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb pigsty 1.1.3 52.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-accumulator postgresql-14-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb pigsty 1.1.3 52.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-accumulator/postgresql-14-pg-accumulator_1.1.3-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_accumulator` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_accumulator         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_accumulator` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_accumulator;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_accumulator -v 18  # PG 18
pig ext install -y pg_accumulator -v 17  # PG 17
pig ext install -y pg_accumulator -v 16  # PG 16
pig ext install -y pg_accumulator -v 15  # PG 15
pig ext install -y pg_accumulator -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_accumulator_18       # PG 18
dnf install -y pg_accumulator_17       # PG 17
dnf install -y pg_accumulator_16       # PG 16
dnf install -y pg_accumulator_15       # PG 15
dnf install -y pg_accumulator_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-accumulator   # PG 18
apt install -y postgresql-17-pg-accumulator   # PG 17
apt install -y postgresql-16-pg-accumulator   # PG 16
apt install -y postgresql-15-pg-accumulator   # PG 15
apt install -y postgresql-14-pg-accumulator   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_accumulator CASCADE;  -- 依赖: plpgsql
```
