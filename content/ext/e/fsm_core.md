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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/fsm_core-1.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">fsm_core-1.1.0.tar.gz</div>
    <div class="ext-card__desc">fsm_core-1.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`fsm_core`**](/ext/e/fsm_core) | `1.1.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2690  | [**`fsm_core`**](/ext/e/fsm_core) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `fsm_core` |
{.ext-table}

| **相关扩展** | [`ltree`](/ext/e/ltree) [`pgmq`](/ext/e/pgmq) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`pgmq`](/ext/e/pgmq) [`ulak`](/ext/e/ulak) [`pgmb`](/ext/e/pgmb) [`pg_durable`](/ext/e/pg_durable) [`redis`](/ext/e/redis) [`pg_task`](/ext/e/pg_task) [`pg_background`](/ext/e/pg_background) [`pgq`](/ext/e/pgq) [`redis_fdw`](/ext/e/redis_fdw) [`tcn`](/ext/e/tcn) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG15+; requires ltree, pgmq, and pg_jsonschema


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "15,16,17,18" >}} | `fsm_core` | `ltree`, `pgmq`, `pg_jsonschema` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "15,16,17,18" >}} | `fsm_core_$v` | `pgmq_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.0` | {{< pgvers "15,16,17,18" >}} | `postgresql-$v-fsm-core` | `postgresql-$v-pgmq`, `postgresql-$v-pg-jsonschema` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | N/A PIGSTY - 0 |
@ el8.x86_64 18 fsm_core_18 fsm_core_18-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fsm_core_18-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 fsm_core_18 fsm_core_18-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fsm_core_18-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 fsm_core_18 fsm_core_18-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fsm_core_18-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 fsm_core_18 fsm_core_18-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 30.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fsm_core_18-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 fsm_core_18 fsm_core_18-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fsm_core_18-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 fsm_core_18 fsm_core_18-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fsm_core_18-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-fsm-core postgresql-18-fsm-core_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-18-fsm-core_1.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 fsm_core_17 fsm_core_17-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fsm_core_17-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 fsm_core_17 fsm_core_17-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fsm_core_17-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 fsm_core_17 fsm_core_17-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 30.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fsm_core_17-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 fsm_core_17 fsm_core_17-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 30.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fsm_core_17-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 fsm_core_17 fsm_core_17-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fsm_core_17-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 fsm_core_17 fsm_core_17-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fsm_core_17-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-fsm-core postgresql-17-fsm-core_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-17-fsm-core_1.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 fsm_core_16 fsm_core_16-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fsm_core_16-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 fsm_core_16 fsm_core_16-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fsm_core_16-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 fsm_core_16 fsm_core_16-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fsm_core_16-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 fsm_core_16 fsm_core_16-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 30.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fsm_core_16-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 fsm_core_16 fsm_core_16-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fsm_core_16-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 fsm_core_16 fsm_core_16-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fsm_core_16-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-fsm-core postgresql-16-fsm-core_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-16-fsm-core_1.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 fsm_core_15 fsm_core_15-1.1.0-1PIGSTY.el8.x86_64.rpm pigsty 1.1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/fsm_core_15-1.1.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 fsm_core_15 fsm_core_15-1.1.0-1PIGSTY.el8.aarch64.rpm pigsty 1.1.0 33.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/fsm_core_15-1.1.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 fsm_core_15 fsm_core_15-1.1.0-1PIGSTY.el9.x86_64.rpm pigsty 1.1.0 30.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/fsm_core_15-1.1.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 fsm_core_15 fsm_core_15-1.1.0-1PIGSTY.el9.aarch64.rpm pigsty 1.1.0 30.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/fsm_core_15-1.1.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 fsm_core_15 fsm_core_15-1.1.0-1PIGSTY.el10.x86_64.rpm pigsty 1.1.0 30.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/fsm_core_15-1.1.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 fsm_core_15 fsm_core_15-1.1.0-1PIGSTY.el10.aarch64.rpm pigsty 1.1.0 30.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/fsm_core_15-1.1.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~trixie_all.deb pigsty 1.1.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~jammy_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~noble_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-fsm-core postgresql-15-fsm-core_1.1.0-1PIGSTY~resolute_all.deb pigsty 1.1.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/f/fsm-core/postgresql-15-fsm-core_1.1.0-1PIGSTY~resolute_all.deb
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
pig ext install -y fsm_core -v 18  # PG 18
pig ext install -y fsm_core -v 17  # PG 17
pig ext install -y fsm_core -v 16  # PG 16
pig ext install -y fsm_core -v 15  # PG 15
```

```bash {tab="dnf" value="dnf"}
dnf install -y fsm_core_18       # PG 18
dnf install -y fsm_core_17       # PG 17
dnf install -y fsm_core_16       # PG 16
dnf install -y fsm_core_15       # PG 15
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-fsm-core   # PG 18
apt install -y postgresql-17-fsm-core   # PG 17
apt install -y postgresql-16-fsm-core   # PG 16
apt install -y postgresql-15-fsm-core   # PG 15
```


**创建扩展**：

```sql
CREATE EXTENSION fsm_core CASCADE;  -- 依赖: ltree, pgmq, pg_jsonschema
```

## 用法

来源：

- [Official PGXN1.1.0 distribution](https://pgxn.org/dist/fsm_core/1.1.0/)
- [1.1.0 README](https://api.pgxn.org/src/fsm_core/fsm_core-1.1.0/README.md)
- [1.1.0 control](https://api.pgxn.org/src/fsm_core/fsm_core-1.1.0/fsm_core.control)
- [1.1.0 SQL](https://api.pgxn.org/src/fsm_core/fsm_core-1.1.0/fsm_core--1.1.0.sql)
- [1.1.0 metadata](https://api.pgxn.org/src/fsm_core/fsm_core-1.1.0/META.json)

`fsm_core` 是一个有限状态机工具包，用于在 PostgreSQL 中保存 FSM 定义、实例、转换和事件日志。机器定义从 JSON 加载，实例按名称和版本创建，事件通过 SQL 函数发送，并可选择使用 `pgmq` 队列。

本文描述 PGXN 1.1.0 发行版，要求 PostgreSQL 15 及以上、`ltree` 1.2 及以上，以及 `pgmq` 1.4.4 及以上。固定模式为 `fsm_core`，安装需要超级用户。这个 SQL 扩展不要求预加载或重启。当前仓库迁移是另外的来源，可能提供不同的 API。

### 核心表与类型

`fsm_core` 会创建枚举 `fsm_state_type`，包含 `atomic`、`compound`、`parallel`、`final` 和 `history`，并创建下列表：

- `fsm_core.fsm_json`：加载后的 FSM 定义。
- `fsm_core.fsm_states`：展开后的状态节点和 ltree 路径。
- `fsm_core.fsm_transitions`：转换规则。
- `fsm_core.fsm_instance`：运行中的实例。
- `fsm_core.fsm_instance_lock`：advisory/concurrency 状态。
- `fsm_core.fsm_instance_queue_event_logs` 和 `fsm_core.fsm_promise_queue_event_logs`：队列事件历史。

### 加载机器定义

```sql
SELECT fsm_core.load_fsm_from_json_v2(
  json_input        := :'fsm_json'::jsonb,
  root_node_text    := 'root',
  input_fsm_type    := 'workflow',
  input_fsm_name    := 'creditCheck',
  input_fsm_version := 'v01'
);
```

`load_fsm_from_json_v2()` 使用 `fsm_core.fsm_json_schema()` 检查 JSON，展开状态和转换，然后把原始定义缓存到 `fsm_json`。在 1.1.0 中，违反 JSON 模式只会产生 NOTICE，加载仍会继续；模式校验的异常语句已被注释。应在加载前验证定义，不能依赖这个检查拒绝所有无效定义。部署后的定义和版本标识应保持稳定，使已有实例继续按原始定义运行。执行示例前，应将经过校验的状态机 JSON 设置到 psql 变量 fsm_json。

### 创建实例

```sql
SELECT fsm_core.create_fsm_instance_from_name_v2(
  input_fsm_name     := 'creditCheck',
  input_fsm_version  := 'v01',
  input_fsm_context  := '{"applicant_id":"a-42"}'::jsonb,
  create_pgmq_queue  := true
) AS creation_result
\gset
SELECT :'creation_result'::jsonb AS creation_status;
SELECT :'creation_result'::jsonb ->> 'fsm_instance_id' AS fsm_instance_id
\gset
```

PGXN 1.1.0 函数会检查指定名称的 FSM 是否存在，插入一条 `fsm_instance`，并为该实例复制转换授权行。在 `create_pgmq_queue` 为 true 时，它尝试创建以实例 UUID 命名的 `pgmq` 队列，并发送 `initialTransition_event`。队列创建和初始事件发送失败会被捕获，并记录在返回的 JSON 中。发送后续事件前，必须确认 `queue_created` 为 true，并检查 `send_event_result`、`message` 和 `extra_message`，确认初始事件发送成功。psql 示例保留返回的 `fsm_instance_id`，供下一次调用使用。

### 发送事件

```sql
SELECT fsm_core.send_event_to_fsm_queue_with_event_logs_v2(
  input_fsm_instance_id                 := :'fsm_instance_id'::uuid,
  input_fsm_instance_id_fsm_type         := 'workflow',
  input_fsm_instance_id_fsm_version      := 'v01',
  input_send_to_parent_queue_id          := fsm_core.pg_system_queue_uuid(),
  input_send_to_parent_queue_type        := fsm_core.pg_system_queue_type(),
  input_send_to_parent_queue_id_event_name := fsm_core.pg_system_event_name(),
  input_event_name                       := 'APPROVE',
  input_event_action_type                := 'user',
  input_event_data                       := '{"approved_by":"manager"}'::jsonb,
  input_event_delay                      := 0
);
```

这个辅助函数会用 `pgmq.send()` 写入实例队列，并在 `fsm_instance_queue_event_logs` 中记录事件。对于嵌套 FSM 和 promise 流，`send_event_to_queue_from_fsm_instance_id_v2()` 会根据 `fsmtype` 分派到子 FSM 或 promise 队列辅助函数。

### 解析并推进状态

```sql
SELECT fsm_core.resolve_state_value_v2(
  input_json        := '{"value":"pending"}'::jsonb,
  input_fsm_name    := 'creditCheck',
  input_fsm_version := 'v01'
);

SELECT fsm_core.macrostep_v2(
  event_name        := 'APPROVE',
  input_state_value := ARRAY['pending']::text[],
  fsm_name_param    := 'creditCheck',
  fsm_version_param := 'v01'
);
```

SQL 接口还包括较底层的 `microstep_v2()`、`fsm_worker_v2()`、锁辅助函数、归档辅助函数和 v1 兼容函数。当两个版本都存在时，新用法应优先选择 v2 入口点。

### 依赖与运行

安装 `fsm_core` 前启用 `ltree` 和 `pgmq`。发行版 README 还要求 `pg_jsonschema` 0.3.3 及以上，但控制文件和 META 的依赖列表没有列出它。JSON 加载器调用 `fsm_core.jsonschema_validation_errors`，而发行版 SQL 脚本没有定义这个函数；加载定义前应确认该模式下已有上游要求的 JSON 模式校验辅助函数。仅将依赖安装到其他模式，并不能提供这个带模式限定的函数。

队列事件作为应用数据持久保存。设置 `create_pgmq_queue => true` 会请求创建实例队列及其初始事件；继续操作前应检查返回状态。仍需要消费者处理队列工作。发送事件本身不保证异步工作进程已经执行转换。应一并检查队列保留策略、消费者和权限。

向应用角色开放机器创建或任意事件提交前，应检查函数和表授权。SQL 接口还包含旧 v1 和较底层的辅助函数；本版本应使用已经核实的 v2 入口。
