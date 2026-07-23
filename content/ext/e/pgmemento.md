---
title: "pgmemento"
linkTitle: "pgmemento"
description: "基于事务日志的审计追踪、模式版本管理与数据恢复"
weight: 7190
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgMemento/pgMemento">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgMemento/pgMemento</div>
    <div class="ext-card__desc">https://github.com/pgMemento/pgMemento</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgmemento-0.7.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmemento-0.7.4.tar.gz</div>
    <div class="ext-card__desc">pgmemento-0.7.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmemento`**](/ext/e/pgmemento) | `0.7.4` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7190  | [**`pgmemento`**](/ext/e/pgmemento) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgmemento` |
{.ext-table}

| **相关扩展** | [`table_log`](/ext/e/table_log) [`table_version`](/ext/e/table_version) [`ddl_historization`](/ext/e/ddl_historization) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Packages upgrade scripts from 0.7, 0.7.1, 0.7.2, and 0.7.3 to 0.7.4.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.7.4` | {{< pgvers "18,17,16,15,14" >}} | `pgmemento` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.7.4` | {{< pgvers "18,17,16,15,14" >}} | `pgmemento_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.7.4` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmemento` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| el8.aarch64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| el9.x86_64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| el9.aarch64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| el10.x86_64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| el10.aarch64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| d12.x86_64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| d12.aarch64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| d13.x86_64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| d13.aarch64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| u22.x86_64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| u22.aarch64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| u24.x86_64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| u24.aarch64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| u26.x86_64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
| u26.aarch64 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 | AVAIL PIGSTY 0.7.4 1 |
@ el8.x86_64 18 pgmemento_18 pgmemento_18-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmemento_18-0.7.4-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 pgmemento_18 pgmemento_18-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmemento_18-0.7.4-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 pgmemento_18 pgmemento_18-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmemento_18-0.7.4-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 pgmemento_18 pgmemento_18-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmemento_18-0.7.4-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 pgmemento_18 pgmemento_18-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmemento_18-0.7.4-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 pgmemento_18 pgmemento_18-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmemento_18-0.7.4-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pgmemento postgresql-18-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-18-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 pgmemento_17 pgmemento_17-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmemento_17-0.7.4-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 pgmemento_17 pgmemento_17-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmemento_17-0.7.4-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 pgmemento_17 pgmemento_17-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmemento_17-0.7.4-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 pgmemento_17 pgmemento_17-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmemento_17-0.7.4-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 pgmemento_17 pgmemento_17-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmemento_17-0.7.4-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 pgmemento_17 pgmemento_17-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmemento_17-0.7.4-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pgmemento postgresql-17-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-17-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 pgmemento_16 pgmemento_16-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmemento_16-0.7.4-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 pgmemento_16 pgmemento_16-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmemento_16-0.7.4-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 pgmemento_16 pgmemento_16-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmemento_16-0.7.4-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 pgmemento_16 pgmemento_16-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmemento_16-0.7.4-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 pgmemento_16 pgmemento_16-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmemento_16-0.7.4-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 pgmemento_16 pgmemento_16-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmemento_16-0.7.4-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pgmemento postgresql-16-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-16-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 pgmemento_15 pgmemento_15-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmemento_15-0.7.4-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 pgmemento_15 pgmemento_15-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmemento_15-0.7.4-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 pgmemento_15 pgmemento_15-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmemento_15-0.7.4-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 pgmemento_15 pgmemento_15-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmemento_15-0.7.4-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 pgmemento_15 pgmemento_15-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmemento_15-0.7.4-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 pgmemento_15 pgmemento_15-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmemento_15-0.7.4-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pgmemento postgresql-15-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-15-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 pgmemento_14 pgmemento_14-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmemento_14-0.7.4-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 pgmemento_14 pgmemento_14-0.7.4-1PIGSTY.el8.noarch.rpm pigsty 0.7.4 46.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmemento_14-0.7.4-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 pgmemento_14 pgmemento_14-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmemento_14-0.7.4-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 pgmemento_14 pgmemento_14-0.7.4-1PIGSTY.el9.noarch.rpm pigsty 0.7.4 43.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmemento_14-0.7.4-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 pgmemento_14 pgmemento_14-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmemento_14-0.7.4-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 pgmemento_14 pgmemento_14-0.7.4-1PIGSTY.el10.noarch.rpm pigsty 0.7.4 43.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmemento_14-0.7.4-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~trixie_all.deb pigsty 0.7.4 34.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~jammy_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~noble_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pgmemento postgresql-14-pgmemento_0.7.4-1PIGSTY~resolute_all.deb pigsty 0.7.4 35.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmemento/postgresql-14-pgmemento_0.7.4-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgmemento` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgmemento         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgmemento` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgmemento;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgmemento -v 18  # PG 18
pig ext install -y pgmemento -v 17  # PG 17
pig ext install -y pgmemento -v 16  # PG 16
pig ext install -y pgmemento -v 15  # PG 15
pig ext install -y pgmemento -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgmemento_18       # PG 18
dnf install -y pgmemento_17       # PG 17
dnf install -y pgmemento_16       # PG 16
dnf install -y pgmemento_15       # PG 15
dnf install -y pgmemento_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgmemento   # PG 18
apt install -y postgresql-17-pgmemento   # PG 17
apt install -y postgresql-16-pgmemento   # PG 16
apt install -y postgresql-15-pgmemento   # PG 15
apt install -y postgresql-14-pgmemento   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgmemento;
```

## 用法

来源：

- [pgMemento v0.7.4 README](https://github.com/pgMemento/pgMemento/blob/v0.7.4/README.md)
- [pgMemento v0.7.4 control file](https://github.com/pgMemento/pgMemento/blob/v0.7.4/extension/pgmemento.control)
- [pgMemento wiki](https://github.com/pgMemento/pgMemento/wiki)
- [Changes from v0.7.3 to v0.7.4](https://github.com/pgMemento/pgMemento/compare/v0.7.3...v0.7.4)

pgmemento 是一个基于触发器的 PostgreSQL 审计跟踪扩展。它记录 DML 变更作为 JSONB 差异，按事务和表事件分组，并追踪审计后的模式变更，提供恢复和回滚辅助功能。当需要在 PostgreSQL 内查询行历史和事务上下文时，请使用此扩展。

### 创建与初始化

    CREATE EXTENSION pgmemento;
    SELECT pgmemento.init('public');

init 会为选定模式中的可跟踪表添加审计标识，并增加用于追踪行历史的 pgmemento_audit_id 身份列。首次在测试副本上运行此命令：审计表定义变更并安装事件和行触发器。

使用 start 和 stop 控制模式下的审计活动，当有意移除 pgMemento 的功能时，请参阅文档中的 drop 函数。不要手动删除扩展的触发器或审计标识符。

### 检查审计跟踪

中心数据模型包括：

- transaction_log：事务元数据和可选的应用程序上下文。
- table_event_log：事务内的表级事件。
- row_log：与表事件关联的 JSONB 行差异。
- audited_schema 和 audited_table 元数据：追踪的模式、表、列及其版本。

典型的调查会将事务与其表事件及行差异进行连接：

    SELECT t.id,
           t.txid_time,
           e.table_operation,
           r.audit_id,
           r.old_data,
           r.new_data
    FROM pgmemento.transaction_log AS t
    JOIN pgmemento.table_event_log AS e
      ON e.transaction_id = t.id
    JOIN pgmemento.row_log AS r
      ON r.event_key = e.event_key
    WHERE t.id = 12345;

在嵌入此查询之前，请先检查安装的视图和列名，因为审计模式细节可能因 pgmemento 版本而异。

### 恢复与回滚

pgmemento 提供了恢复函数，可以从审计跟踪中重构表状态，并提供了 revert_transaction 或相关辅助函数来应用补偿变更。将这些操作视为恢复操作：

1. 备份并验证备份；
2. 识别确切的事务及其依赖变更；
3. 尽可能预览重构的数据；
4. 在受控事务中运行此操作；
5. 验证约束、序列和应用程序不变量。

### 版本 0.7.4

版本 0.7.4 改变了行序列化方式，以避免 PostgreSQL 的 jsonb_build_object 参数限制对非常宽的负载，并增加了对 PostgreSQL 15 的支持。升级时，请在测试特定版本的升级脚本后使用 ALTER EXTENSION pgmemento UPDATE。

### 运营边界

- 审计触发器会增加每个跟踪变更的延迟和写入量。监控 row_log 增长及索引维护。
- 审计跟踪位于同一数据库中，不是备份、WAL 归档或防篡改外部审计存储的替代品。
- 模式初始化和 DDL 跟踪会改变应用程序表。与 pgmemento 协调迁移，而不是绕过其事件触发器。
- 限制直接写入 pgmemento 模式，并保护可能包含用户或应用信息的事务元数据。
