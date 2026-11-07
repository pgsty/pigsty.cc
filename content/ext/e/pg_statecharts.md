---
title: "pg_statecharts"
linkTitle: "pg_statecharts"
description: "层次状态机与事务性事件处理"
weight: 2695
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/kronor-io/statecharts">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">kronor-io/statecharts</div>
    <div class="ext-card__desc">https://github.com/kronor-io/statecharts</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_statecharts-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_statecharts-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_statecharts-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_statecharts`**](/ext/e/pg_statecharts) | `0.1.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2695  | [**`pg_statecharts`**](/ext/e/pg_statecharts) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `fsm` |
| 2696  | [**`pg_statecharts_dev`**](/ext/e/pg_statecharts_dev) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `fsm` |
{.ext-table .wide .expand}

| **相关扩展** | [`ltree`](/ext/e/ltree) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pg_statecharts_dev`](/ext/e/pg_statecharts_dev) |
{.ext-table .ext-table--rel}


> ltree in public


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "16,17,18" >}} | `pg_statecharts` | `ltree` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "16,17,18" >}} | `pg_statecharts_$v` | `postgresql$v-contrib` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "16,17,18" >}} | `postgresql-$v-pg-statecharts` | `postgresql-$v` |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_statecharts_18 pg_statecharts_18-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statecharts_18-0.1.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_statecharts_18 pg_statecharts_18-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statecharts_18-0.1.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_statecharts_18 pg_statecharts_18-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statecharts_18-0.1.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_statecharts_18 pg_statecharts_18-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statecharts_18-0.1.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_statecharts_18 pg_statecharts_18-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statecharts_18-0.1.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_statecharts_18 pg_statecharts_18-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statecharts_18-0.1.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-statecharts postgresql-18-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statecharts/postgresql-18-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 17 pg_statecharts_17 pg_statecharts_17-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statecharts_17-0.1.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_statecharts_17 pg_statecharts_17-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statecharts_17-0.1.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_statecharts_17 pg_statecharts_17-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statecharts_17-0.1.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_statecharts_17 pg_statecharts_17-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statecharts_17-0.1.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_statecharts_17 pg_statecharts_17-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statecharts_17-0.1.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_statecharts_17 pg_statecharts_17-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statecharts_17-0.1.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-statecharts postgresql-17-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statecharts/postgresql-17-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb
@ el8.x86_64 16 pg_statecharts_16 pg_statecharts_16-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_statecharts_16-0.1.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_statecharts_16 pg_statecharts_16-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 31.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_statecharts_16-0.1.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_statecharts_16 pg_statecharts_16-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_statecharts_16-0.1.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_statecharts_16 pg_statecharts_16-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_statecharts_16-0.1.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_statecharts_16 pg_statecharts_16-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_statecharts_16-0.1.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_statecharts_16 pg_statecharts_16-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_statecharts_16-0.1.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb pigsty 0.1.0 25.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb pigsty 0.1.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~noble_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-statecharts postgresql-16-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb pigsty 0.1.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-statecharts/postgresql-16-pg-statecharts_0.1.0-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_statecharts` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_statecharts         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_statecharts` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_statecharts;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_statecharts -v 18  # PG 18
pig ext install -y pg_statecharts -v 17  # PG 17
pig ext install -y pg_statecharts -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_statecharts_18       # PG 18
dnf install -y pg_statecharts_17       # PG 17
dnf install -y pg_statecharts_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-statecharts   # PG 18
apt install -y postgresql-17-pg-statecharts   # PG 17
apt install -y postgresql-16-pg-statecharts   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION pg_statecharts CASCADE;  -- 依赖: ltree
```

## 用法

来源：

- [PGXN 0.1.0 发行包](https://pgxn.org/dist/pg_statecharts/0.1.0/)
- [官方资料](https://github.com/kronor-io/statecharts/blob/472349e864440c39a30863a0db815050391804c7/pg_statecharts/README.md)
- [官方资料](https://github.com/kronor-io/statecharts/blob/472349e864440c39a30863a0db815050391804c7/pg_statecharts/pg_statecharts.control)
- [官方资料](https://github.com/kronor-io/statecharts/blob/472349e864440c39a30863a0db815050391804c7/pg_statecharts/sql/function/start_machine_with_latest_statechart.sql)
- [官方资料](https://github.com/kronor-io/statecharts/blob/472349e864440c39a30863a0db815050391804c7/pg_statecharts/sql/table/state_machine_event.sql)

`pg_statecharts` 0.1.0 在 PostgreSQL 事务内执行层次状态机及其事件。本版本为纯 SQL 实现，测试覆盖 PostgreSQL 16–18，无需预加载或重启。

### 核心流程

将 `ltree` 安装在 `public` 模式，再使用具备所需对象创建权限的角色安装扩展：

```sql
CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;
CREATE EXTENSION pg_statecharts;
```

启动机器前，应先通过 SQL 迁移或开发工具扩展部署状态图定义。对于已经部署且名为 order 的状态图，以下操作启动最新版本并返回状态机记录：

```sql
SELECT * FROM fsm.start_machine_with_latest_statechart(1, 'order', '{}');
```

向 `fsm.state_machine_event` 插入分片、状态机标识、事件名称和 JSON 数据即可提交事件。触发器会在插入事务内处理事件，并运行进入与退出回调。调用者必须具备对应表和函数的权限；状态图回调属于应用代码，需要单独审查。

### 目录与版本

定义与运行中的状态机位于 `fsm` 模式。`fsm.to_semver` 解析数字版本，`fsm.semver_text` 将其格式化；版本以整数数组存储，原生排序保持数值顺序。需要比较版本先后时，不应按格式化后的文本排序。

### 备份与旧版迁移

本次核对的 0.1.0 源码将状态表与序列登记为数据库转储对象。事件收件箱有意排除，以免恢复时重复执行回调。0.0.0 版本产生的备份不含状态机数据；升级后应重新备份并验证恢复。

较早安装的 0.1.0 可能尚未登记转储对象，因此应检查实际目录，不能只看版本字符串。不要为了刷新登记而删除含有数据的扩展。旧 Rust 或 Sqitch 部署的迁移需要超级用户操作，转换期间还依赖旧 semver 扩展；应遵循迁移指南并在恢复副本上演练。上游已不再单独测试旧 0.0.0 迁移路径。
