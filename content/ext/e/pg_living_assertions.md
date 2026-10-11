---
title: "pg_living_assertions"
linkTitle: "pg_living_assertions"
description: "保存可执行 SQL 检查、核验日期和断言变更历史"
weight: 5300
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Manuelreyesbravo/pg_living_assertions">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Manuelreyesbravo/pg_living_assertions</div>
    <div class="ext-card__desc">https://github.com/Manuelreyesbravo/pg_living_assertions</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_living_assertions-0.5.10.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_living_assertions-0.5.10.tar.gz</div>
    <div class="ext-card__desc">pg_living_assertions-0.5.10.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_living_assertions`**](/ext/e/pg_living_assertions) | `0.5.10` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5300  | [**`pg_living_assertions`**](/ext/e/pg_living_assertions) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `living_assertions` |
{.ext-table}

| **相关扩展** |  |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pg_grammar_guard`](/ext/e/pg_grammar_guard) |
{.ext-table .ext-table--rel}


> On-demand SQL checks run in a read-only subtransaction that is always rolled back; not per-write SQL ASSERTION constraints.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.10` | {{< pgvers "18,17,16,15,14" >}} | `pg_living_assertions` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.10` | {{< pgvers "18,17,16,15,14" >}} | `pg_living_assertions_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.10` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-living-assertions` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 | AVAIL PIGSTY 0.5.1 1 |
@ el8.x86_64 18 pg_living_assertions_18 pg_living_assertions_18-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_living_assertions_18-0.5.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_living_assertions_18 pg_living_assertions_18-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_living_assertions_18-0.5.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_living_assertions_18 pg_living_assertions_18-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_living_assertions_18-0.5.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_living_assertions_18 pg_living_assertions_18-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_living_assertions_18-0.5.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_living_assertions_18 pg_living_assertions_18-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_living_assertions_18-0.5.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_living_assertions_18 pg_living_assertions_18-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_living_assertions_18-0.5.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-living-assertions postgresql-18-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-18-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
@ el8.x86_64 17 pg_living_assertions_17 pg_living_assertions_17-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_living_assertions_17-0.5.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_living_assertions_17 pg_living_assertions_17-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_living_assertions_17-0.5.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_living_assertions_17 pg_living_assertions_17-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_living_assertions_17-0.5.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_living_assertions_17 pg_living_assertions_17-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_living_assertions_17-0.5.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_living_assertions_17 pg_living_assertions_17-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_living_assertions_17-0.5.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_living_assertions_17 pg_living_assertions_17-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_living_assertions_17-0.5.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-living-assertions postgresql-17-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-17-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
@ el8.x86_64 16 pg_living_assertions_16 pg_living_assertions_16-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_living_assertions_16-0.5.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_living_assertions_16 pg_living_assertions_16-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_living_assertions_16-0.5.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_living_assertions_16 pg_living_assertions_16-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_living_assertions_16-0.5.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_living_assertions_16 pg_living_assertions_16-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_living_assertions_16-0.5.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_living_assertions_16 pg_living_assertions_16-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_living_assertions_16-0.5.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_living_assertions_16 pg_living_assertions_16-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_living_assertions_16-0.5.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-living-assertions postgresql-16-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-16-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
@ el8.x86_64 15 pg_living_assertions_15 pg_living_assertions_15-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_living_assertions_15-0.5.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_living_assertions_15 pg_living_assertions_15-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_living_assertions_15-0.5.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_living_assertions_15 pg_living_assertions_15-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_living_assertions_15-0.5.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_living_assertions_15 pg_living_assertions_15-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_living_assertions_15-0.5.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_living_assertions_15 pg_living_assertions_15-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_living_assertions_15-0.5.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_living_assertions_15 pg_living_assertions_15-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_living_assertions_15-0.5.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-living-assertions postgresql-15-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-15-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
@ el8.x86_64 14 pg_living_assertions_14 pg_living_assertions_14-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_living_assertions_14-0.5.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 14 pg_living_assertions_14 pg_living_assertions_14-0.5.1-1PGSTY.el8.noarch.rpm pigsty 0.5.1 29.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_living_assertions_14-0.5.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 14 pg_living_assertions_14 pg_living_assertions_14-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_living_assertions_14-0.5.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 14 pg_living_assertions_14 pg_living_assertions_14-0.5.1-1PGSTY.el9.noarch.rpm pigsty 0.5.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_living_assertions_14-0.5.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 14 pg_living_assertions_14 pg_living_assertions_14-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_living_assertions_14-0.5.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 14 pg_living_assertions_14 pg_living_assertions_14-0.5.1-1PGSTY.el10.noarch.rpm pigsty 0.5.1 28.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_living_assertions_14-0.5.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb pigsty 0.5.1 23.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb pigsty 0.5.1 24.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pg-living-assertions postgresql-14-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb pigsty 0.5.1 23.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-living-assertions/postgresql-14-pg-living-assertions_0.5.1-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_living_assertions` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_living_assertions         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_living_assertions` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_living_assertions;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_living_assertions -v 18  # PG 18
pig ext install -y pg_living_assertions -v 17  # PG 17
pig ext install -y pg_living_assertions -v 16  # PG 16
pig ext install -y pg_living_assertions -v 15  # PG 15
pig ext install -y pg_living_assertions -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_living_assertions_18       # PG 18
dnf install -y pg_living_assertions_17       # PG 17
dnf install -y pg_living_assertions_16       # PG 16
dnf install -y pg_living_assertions_15       # PG 15
dnf install -y pg_living_assertions_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-living-assertions   # PG 18
apt install -y postgresql-17-pg-living-assertions   # PG 17
apt install -y postgresql-16-pg-living-assertions   # PG 16
apt install -y postgresql-15-pg-living-assertions   # PG 15
apt install -y postgresql-14-pg-living-assertions   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_living_assertions;
```

## 用法

来源：

- [README.md](https://api.pgxn.org/src/pg_living_assertions/pg_living_assertions-0.5.10/README.md)
- [pg_living_assertions.control](https://api.pgxn.org/src/pg_living_assertions/pg_living_assertions-0.5.10/pg_living_assertions.control)
- [CHANGELOG.md](https://api.pgxn.org/src/pg_living_assertions/pg_living_assertions-0.5.10/CHANGELOG.md)
- [pg_living_assertions--0.5.9--0.5.10.sql](https://api.pgxn.org/src/pg_living_assertions/pg_living_assertions-0.5.10/pg_living_assertions--0.5.9--0.5.10.sql)

`pg_living_assertions` 0.5.10 保存具名 SQL 断言、结果与替换历史。检查按需运行，并非每次写入都执行的约束。这是无需预加载的纯 SQL 扩展。

### 核心用法

```sql
CREATE EXTENSION pg_living_assertions;
SELECT living_assertions.declare(
  'simple_check', 'one equals one',
  $$SELECT 1 = 1 AS holds, 'arithmetic check'::text AS detail$$);
SELECT living_assertions.run('simple_check');
SELECT name, state, age FROM living_assertions.status;
```

### 运行边界

检查返回一个布尔列 `holds` 和可选文本列 `detail`。`living_assertions.run_all()` 执行注册表中的检查；`living_assertions.state()`、`living_assertions.status` 和 `living_assertions.stale()` 区分失效、未知、报错，以及过期或未执行的检查。`living_assertions.declare_unchanged()` 对规范化表达式计算指纹，原有值变成 NULL 时判为失效。检查以记录的作者身份，在只读且回滚的子事务中执行，采用作者搜索路径并将临时模式放在最后。调用者须有权 `SET ROLE` 到该作者。求值时取得的会话咨询锁会被释放，但外部副作用和临时序列变化不在沙箱控制范围内，只有可信作者应登记 SQL。注册和检查时间由服务器确定，表拒绝 TRUNCATE，退役与替换仅限作者或有权代理的角色。升级须安装完整匹配的 SQL 链；旧断言保留原有指纹算法。当前版本采用 Apache-2.0，截至 0.5.3 的已发布版本仍保留原来的 PostgreSQL License。

### 0.5.10 的角色隔离

0.5.10 在需要角色隔离时，将检查放入由记录作者拥有的临时 `SECURITY DEFINER` 函数。PostgreSQL 会拒绝在该执行环境中重置角色或会话授权；函数与只读检查在同一子事务中创建并回滚。需要该执行环境时，作者必须拥有数据库的 `TEMP` 权限，调用者仍须有权代理该作者。`SECURITY DEFINER` 调用者现可凭此权限执行其他作者的检查。这修复了 0.5.8/0.5.9 中重置角色的逃逸路径，但不会使外部副作用变得安全。
