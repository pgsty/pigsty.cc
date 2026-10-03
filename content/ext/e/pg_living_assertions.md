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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_living_assertions-0.5.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_living_assertions-0.5.1.tar.gz</div>
    <div class="ext-card__desc">pg_living_assertions-0.5.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_living_assertions`**](/ext/e/pg_living_assertions) | `0.5.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
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
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_living_assertions` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_living_assertions_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.5.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-living-assertions` | - |
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

- [README.md](https://github.com/Manuelreyesbravo/pg_living_assertions/blob/7bf075c6de879b05ec0ed8d135304ece83519317/README.md)
- [pg_living_assertions.control](https://github.com/Manuelreyesbravo/pg_living_assertions/blob/7bf075c6de879b05ec0ed8d135304ece83519317/pg_living_assertions.control)
- [pg_living_assertions--0.4.1--0.5.0.sql](https://github.com/Manuelreyesbravo/pg_living_assertions/blob/7bf075c6de879b05ec0ed8d135304ece83519317/pg_living_assertions--0.4.1--0.5.0.sql)
- [pg_living_assertions--0.5.0--0.5.1.sql](https://github.com/Manuelreyesbravo/pg_living_assertions/blob/7bf075c6de879b05ec0ed8d135304ece83519317/pg_living_assertions--0.5.0--0.5.1.sql)
- [test/sql/read_only.sql](https://github.com/Manuelreyesbravo/pg_living_assertions/blob/7bf075c6de879b05ec0ed8d135304ece83519317/test/sql/read_only.sql)

`pg_living_assertions` 0.5.1 保存 SQL 检查、结论、核验时间与替换历史。检查按需运行，并非每次写入都求值的 SQL ASSERTION 约束。此扩展为纯 SQL 实现，无需预加载。

### 注册与核验

```sql
CREATE EXTENSION pg_living_assertions;
SELECT living_assertions.declare(
  'simple_check', 'one equals one',
  $$SELECT 1 = 1 AS holds, 'arithmetic check'::text AS detail$$);
SELECT living_assertions.run('simple_check');
SELECT name, state, age FROM living_assertions.status;
```

### 结果与历史

每个检查必须返回恰好一行，包含布尔列 `holds` 和可选文本列 `detail`。`living_assertions.run_all()` 执行已注册检查。`living_assertions.state()` 区分成立、失效、未知、报错、未检查、已退役与未注册；`living_assertions.stale()` 区分从未检查与结果过期。`living_assertions.declare_unchanged()` 保存表达式以供后续文本比较，因此作者必须自行规范化输出。定义通过附带原因的替换保留历史，结果与注册表数据包含在数据库备份中。

### 执行与权限

从 0.5.0 起，求值器以只读方式在始终回滚的子事务中执行，并保留检查结论。这修复了旧求值器仅依赖 STABLE、无法阻止易变函数副作用的问题。它不是不可信 SQL 的沙箱：临时序列变更、会话级咨询锁与外部副作用仍可能保留。仅应授权可信管理员注册检查；检查使用后续调用者的权限执行。注册表属于扩展所有者，写入函数默认撤销 `PUBLIC` 执行权限。

### 升级

安装匹配的文件后，执行 `ALTER EXTENSION pg_living_assertions UPDATE TO '0.5.1'`。0.4.1→0.5.0→0.5.1 升级链替换求值函数，不修改注册表结构。最后的补丁在 `run()` 中限定行类型名称，防止类型缓存失效后在断言自身的无关搜索路径中重新解析类型。

全新安装也使用较早的基础 SQL 脚本并依次应用包内升级链，因此必须安装完整且版本匹配的脚本集。
