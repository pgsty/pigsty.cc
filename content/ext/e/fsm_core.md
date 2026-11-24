---
title: "fsm_core"
linkTitle: "fsm_core"
description: "PostgreSQL 有限状态机工具包"
weight: 2690
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgfsm/fsm/tree/main/packages/database-src-extension/fsm_core">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">database-src-extension/fsm_core</div>
    <div class="ext-card__desc">https://github.com/pgfsm/fsm/tree/main/packages/database-src-extension/fsm_core</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/fsm_core-1.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">fsm_core-1.2.0.tar.gz</div>
    <div class="ext-card__desc">fsm_core-1.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`fsm_core`**](/ext/e/fsm_core) | `1.2.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2690  | [**`fsm_core`**](/ext/e/fsm_core) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `fsm_core` |
{.ext-table .wide .expand}

| **相关扩展** | [`ltree`](/ext/e/ltree) [`pgmq`](/ext/e/pgmq) [`pgmq`](/ext/e/pgmq) [`ulak`](/ext/e/ulak) [`pgmb`](/ext/e/pgmb) [`pg_durable`](/ext/e/pg_durable) [`redis`](/ext/e/redis) [`pg_task`](/ext/e/pg_task) [`pg_background`](/ext/e/pg_background) [`pgq`](/ext/e/pgq) [`redis_fdw`](/ext/e/redis_fdw) [`tcn`](/ext/e/tcn) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG15+; requires ltree, pgmq, and pg_jsonschema


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "19,18,17,16,15" >}} | `fsm_core` | `ltree`, `pgmq` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "19,18,17,16,15" >}} | `fsm_core_$v` | `pgmq_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "19,18,17,16,15" >}} | `postgresql-$v-fsm-core` | `postgresql-$v-pgmq`, `postgresql-$v-pg-jsonschema` |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG19** | **PG18** | **PG17** | **PG16** | **PG15** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 | AVAIL PIGSTY 1.2.0 1 |
@ el9.x86_64 19 fsm_core_19 fsm_core_19-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fsm_core_19-1.2.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 19 fsm_core_19 fsm_core_19-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fsm_core_19-1.2.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 19 fsm_core_19 fsm_core_19-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fsm_core_19-1.2.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 19 fsm_core_19 fsm_core_19-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fsm_core_19-1.2.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ d13.aarch64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ u22.x86_64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u22.aarch64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u24.x86_64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u24.aarch64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u26.x86_64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~resolute_all.deb
@ u26.aarch64 19 postgresql-19-fsm-core postgresql-19-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-19-fsm-core_1.2.0-1PGSTY~resolute_all.deb
@ el8.x86_64 18 fsm_core_18 fsm_core_18-1.2.0-1PGSTY.el8.noarch.rpm pigsty 1.2.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fsm_core_18-1.2.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 fsm_core_18 fsm_core_18-1.2.0-1PGSTY.el8.noarch.rpm pigsty 1.2.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fsm_core_18-1.2.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 18 fsm_core_18 fsm_core_18-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fsm_core_18-1.2.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 fsm_core_18 fsm_core_18-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fsm_core_18-1.2.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 18 fsm_core_18 fsm_core_18-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fsm_core_18-1.2.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 fsm_core_18 fsm_core_18-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fsm_core_18-1.2.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-18-fsm-core_1.2.0-1PGSTY~resolute_all.deb
@ el8.x86_64 17 fsm_core_17 fsm_core_17-1.2.0-1PGSTY.el8.noarch.rpm pigsty 1.2.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fsm_core_17-1.2.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 fsm_core_17 fsm_core_17-1.2.0-1PGSTY.el8.noarch.rpm pigsty 1.2.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fsm_core_17-1.2.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 fsm_core_17 fsm_core_17-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fsm_core_17-1.2.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 fsm_core_17 fsm_core_17-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fsm_core_17-1.2.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 fsm_core_17 fsm_core_17-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fsm_core_17-1.2.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 fsm_core_17 fsm_core_17-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fsm_core_17-1.2.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-17-fsm-core_1.2.0-1PGSTY~resolute_all.deb
@ el8.x86_64 16 fsm_core_16 fsm_core_16-1.2.0-1PGSTY.el8.noarch.rpm pigsty 1.2.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fsm_core_16-1.2.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 fsm_core_16 fsm_core_16-1.2.0-1PGSTY.el8.noarch.rpm pigsty 1.2.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fsm_core_16-1.2.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 fsm_core_16 fsm_core_16-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fsm_core_16-1.2.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 fsm_core_16 fsm_core_16-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fsm_core_16-1.2.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 fsm_core_16 fsm_core_16-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fsm_core_16-1.2.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 fsm_core_16 fsm_core_16-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fsm_core_16-1.2.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-16-fsm-core_1.2.0-1PGSTY~resolute_all.deb
@ el8.x86_64 15 fsm_core_15 fsm_core_15-1.2.0-1PGSTY.el8.noarch.rpm pigsty 1.2.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fsm_core_15-1.2.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 fsm_core_15 fsm_core_15-1.2.0-1PGSTY.el8.noarch.rpm pigsty 1.2.0 63.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fsm_core_15-1.2.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 15 fsm_core_15 fsm_core_15-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fsm_core_15-1.2.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 fsm_core_15 fsm_core_15-1.2.0-1PGSTY.el9.noarch.rpm pigsty 1.2.0 58.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fsm_core_15-1.2.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 15 fsm_core_15 fsm_core_15-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fsm_core_15-1.2.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 fsm_core_15 fsm_core_15-1.2.0-1PGSTY.el10.noarch.rpm pigsty 1.2.0 58.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fsm_core_15-1.2.0-1PGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~bookworm_all.deb pigsty 1.2.0 52.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~trixie_all.deb pigsty 1.2.0 52.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~jammy_all.deb pigsty 1.2.0 53.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~noble_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.2.0-1PGSTY~resolute_all.deb pigsty 1.2.0 53.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-15-fsm-core_1.2.0-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `fsm_core` 扩展的 RPM / DEB 包：

```bash
pig build pkg fsm_core         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `fsm_core` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install fsm_core;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y fsm_core -v 19  # PG 19
pig ext install -y fsm_core -v 18  # PG 18
pig ext install -y fsm_core -v 17  # PG 17
pig ext install -y fsm_core -v 16  # PG 16
pig ext install -y fsm_core -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y fsm_core_19       # PG 19
dnf install -y fsm_core_18       # PG 18
dnf install -y fsm_core_17       # PG 17
dnf install -y fsm_core_16       # PG 16
dnf install -y fsm_core_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-19-fsm-core   # PG 19
apt install -y postgresql-18-fsm-core   # PG 18
apt install -y postgresql-17-fsm-core   # PG 17
apt install -y postgresql-16-fsm-core   # PG 16
apt install -y postgresql-15-fsm-core   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION fsm_core CASCADE;  -- 依赖: ltree, pgmq
```

## 用法

来源：

- [fsm_core-v1.2.0](https://github.com/pgfsm/fsm/releases/tag/fsm_core-v1.2.0)
- [README.md](https://github.com/pgfsm/fsm/blob/fsm_core-v1.2.0/packages/database-src/README.md)
- [fsm_core-1.2.0.zip](https://github.com/pgfsm/fsm/releases/download/fsm_core-v1.2.0/fsm_core-1.2.0.zip)


`fsm_core` 1.2.0 在 PostgreSQL 中保存有限状态机定义、实例、转换和事件历史。其 SQL 接口用于加载经过校验的 JSON、按名称和版本创建实例，并通过 `pgmq` 队列提交事件。

### 安装与配置

本版本要求 PostgreSQL 15 及以上，发布测试覆盖 15–18。必需扩展为 `ltree` 1.2+、`pgmq` 1.4.4+ 和 `pg_cron` 1.5+。将 `pg_cron` 加入现有 `shared_preload_libraries`，修改预加载配置后重启 PostgreSQL，并安装到 `cron.database_name` 指定的数据库。

安装匹配的扩展文件后，超级用户可以创建固定且不可迁移的 `fsm_core` 模式：

```sql
CREATE EXTENSION fsm_core CASCADE;
SELECT fsm_core.version();
```

安装会创建 `fsm_*` 角色及每五秒运行一次的 `fsm_schedule_all_pending` 调度任务。开放应用访问前，应检查角色成员关系、队列权限和调度器。`pg_jsonschema` 为可选依赖：如果它的校验函数存在于 `fsm_core` 中，加载器会报告模式问题，但不会仅凭该检查拒绝定义。

### 加载定义

先用上游编译器验证状态机，并将 JSON 设置到 psql 变量 fsm_json，再执行此调用。1.2.0 的函数签名不再包含 input_fsm_type 参数：

```sql
SELECT fsm_core.load_fsm_from_json_v2(
  json_input        := :'fsm_json'::jsonb,
  root_node_text    := 'root',
  input_fsm_name    := 'creditCheck',
  input_fsm_version := 'v01'
);
```

同一名称和版本的并发加载由事务级咨询锁串行化。相同 JSON 会返回缓存定义；在已有名称和版本下提交不同 JSON 会报错。修改机器定义时应使用新版本。可选参数 input_dependent_children 用于记录子状态机依赖。

### 创建实例并发送事件

```sql
SELECT fsm_core.create_fsm_instance_from_name_v2(
  input_fsm_name    := 'creditCheck',
  input_fsm_version := 'v01',
  input_fsm_context := '{"applicant_id":"a-42"}'::jsonb,
  create_pgmq_queue := true
) AS creation_result
\gset
SELECT :'creation_result'::jsonb AS creation_status;
SELECT :'creation_result'::jsonb ->> 'fsm_instance_id' AS fsm_instance_id
\gset
```

返回的 JSON 包含 `fsm_instance_id`、`queue_created`、`send_event_result`、`message` 和 `extra_message`。提交工作前应检查这些字段，因为队列创建和初始事件发送失败可能记录在返回结果中。初始上下文与定义中的静态上下文进行浅合并，调用时提供的对象键优先。

对于此顶层状态机，发送其定义中声明的事件：

```sql
SELECT fsm_core.send_event_to_fsm_queue_with_event_logs_v2(
  input_fsm_instance_id            := :'fsm_instance_id'::uuid,
  input_fsm_instance_id_fsm_type   := 'fsm',
  input_fsm_instance_id_fsm_version := 'v01',
  input_event_name                 := 'APPROVE',
  input_event_action_type          := 'user',
  input_event_data                 := '{"approved_by":"manager"}'::jsonb,
  input_event_delay                := 0
);
```

该函数将事件入队并写入事件历史。本版本的签名已去掉旧的父队列参数。事件入队不代表工作进程已经处理它，应监控调度器活动、队列积压和实例状态。

### 对象与升级边界

`fsm_json`、`fsm_states` 和 `fsm_transitions` 保存定义；`fsm_instance` 保存实例；`fsm_instance_queue_event_logs` 记录队列事件。`resolve_state_value_v2` 和 `macrostep_v2` 提供较底层的状态解析和转换逻辑。优先使用经过核对的 v2 入口，并限制对安全定义者函数和底层表的访问。

发布说明描述了由 `require_version` 保护的逐版本升级脚本，但本次核对的 1.2.0 ZIP 只有完整安装脚本，没有版本间升级脚本。升级已有实例前应保留数据，并取得经过核验的升级制品。不能重新执行完整安装脚本，也不能假定 `ALTER EXTENSION ... UPDATE` 已有可用的升级路径。
