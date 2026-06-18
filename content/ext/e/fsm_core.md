---
title: "fsm_core"
linkTitle: "fsm_core"
description: "PostgreSQL 有限状态机工具包"
weight: 2690
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Nirajkashyap/fsm/tree/main/packages/database-src-extension/fsm_core">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">database-src-extension/fsm_core</div>
    <div class="ext-card__desc">https://github.com/Nirajkashyap/fsm/tree/main/packages/database-src-extension/fsm_core</div>
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

| **相关扩展** | [`ltree`](/ext/e/ltree) [`pgmq`](/ext/e/pgmq) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`pgmq`](/ext/e/pgmq) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`pg_task`](/ext/e/pg_task) [`pg_later`](/ext/e/pg_later) [`pg_cron`](/ext/e/pg_cron) |
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
| el8.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | AVAIL PIGSTY 1.1.0 1 | MISS PIGSTY - 0 |
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install fsm_core;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y fsm_core -v 18  # PG 18
pig ext install -y fsm_core -v 17  # PG 17
pig ext install -y fsm_core -v 16  # PG 16
pig ext install -y fsm_core -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y fsm_core_18       # PG 18
dnf install -y fsm_core_17       # PG 17
dnf install -y fsm_core_16       # PG 16
dnf install -y fsm_core_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-fsm-core   # PG 18
apt install -y postgresql-17-fsm-core   # PG 17
apt install -y postgresql-16-fsm-core   # PG 16
apt install -y postgresql-15-fsm-core   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION fsm_core CASCADE;  -- 依赖: ltree, pgmq, pg_jsonschema
```

来源：[fsm_core PGXN README](https://github.com/Nirajkashyap/fsm/blob/main/packages/database-src/pgxn-dist/README.md)、[control file](https://github.com/Nirajkashyap/fsm/blob/main/packages/database-src/pgxn-dist/fsm_core.control)、[1.1.0 SQL definition](https://github.com/Nirajkashyap/fsm/blob/main/packages/database-src/pgxn-dist/fsm_core--1.1.0.sql)、[example definitions README](https://github.com/Nirajkashyap/fsm/blob/main/apps/fsm-core-example/README.md)。

## 用法

`fsm_core` 是一个有限状态机工具包，用于在 PostgreSQL 中保存 FSM 定义、实例、转换、队列事件和事件日志。机器定义从 JSON 加载，实例按名称和版本创建，事件通过 SQL 函数发送，并可选择使用 `pgmq` 队列。

该扩展在本地 catalog 中为 PG15+。控制文件要求 `ltree` 和 `pgmq`；上游 README 还列出 `pg_jsonschema` 作为要求，Pigsty 包依赖也包含 `postgresql-$v-pg-jsonschema`。

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

`load_fsm_from_json_v2()` 会用 `fsm_core.fsm_json_schema()` 校验 JSON，把原始定义缓存到 `fsm_json`，然后展开状态和转换。上游示例使用不可变版本目录，例如 `fsm/creditCheck/v01/xstate-fsm.json` 和 `fsm/creditCheck/v02/xstate-fsm.json`；部署后的版本应保持不可变，使已有实例继续按原始定义运行。

### 创建实例

```sql
SELECT fsm_core.create_fsm_instance_from_name_v2(
  input_fsm_name     := 'creditCheck',
  input_fsm_version  := 'v01',
  input_fsm_context  := '{"applicant_id":"a-42"}'::jsonb,
  create_pgmq_queue  := true
);
```

该函数会检查指定名称的 FSM 是否存在，插入一条 `fsm_instance`，为该实例复制转换授权行，并在 `create_pgmq_queue` 为 true 时创建一个以实例 UUID 命名的 `pgmq` 队列，然后发送 `initialTransition_event`。

返回的 JSON 包含 `queue_created`、`fsm_name`、`fsm_version`、`fsm_instance_id`、`fsm_instance_context`、`send_event_result`、`message` 和 `extra_message`。

### 发送事件

```sql
SELECT fsm_core.send_event_to_fsm_queue_with_event_logs_v2(
  input_fsm_instance_id                 := '00000000-0000-0000-0000-000000000000'::uuid,
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

### 依赖与来源注意事项

- 在 `fsm_core` 前启用 `ltree` 和 `pgmq`；同时考虑 `pg_jsonschema`，因为上游要求和 Pigsty 包依赖都列出了它。
- `pgmq` 队列是异步执行模型的一部分，因此队列名称和保留策略应按应用数据来运维。
- 上游仓库没有 `1.1.0` release tag；本 stub 的权威打包来源是 `packages/database-src/pgxn-dist` 中的 SQL/control 文件集以及 PGXN README。
- 相比 SQL 接口，公开文档较为稀疏。除非 SQL 定义或示例应用展示了用途，否则应把未列出的辅助函数视为内部函数。
