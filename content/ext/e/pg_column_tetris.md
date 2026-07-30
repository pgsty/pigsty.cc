---
title: "pg_column_tetris"
linkTitle: "pg_column_tetris"
description: "强制采用最优列对齐顺序，以减少 PostgreSQL 行数据中的填充浪费。"
weight: 5280
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rogerwelin/pg_column_tetris">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rogerwelin/pg_column_tetris</div>
    <div class="ext-card__desc">https://github.com/rogerwelin/pg_column_tetris</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_column_tetris-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_column_tetris-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_column_tetris-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_column_tetris`**](/ext/e/pg_column_tetris) | `0.1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5280  | [**`pg_column_tetris`**](/ext/e/pg_column_tetris) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `column_tetris` |
{.ext-table}

| **相关扩展** | [`plpgsql`](/ext/e/plpgsql) [`pg_repack`](/ext/e/pg_repack) [`pgstattuple`](/ext/e/pgstattuple) [`pg_squeeze`](/ext/e/pg_squeeze) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_dirtyread`](/ext/e/pg_dirtyread) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Upstream has no release or tag; source archive is normalized from commit e70f9867c63e932cdaf87b2d34b6504adad9ce12.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_column_tetris` | `plpgsql` |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_column_tetris_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pg-column-tetris` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
@ el8.x86_64 18 pg_column_tetris_18 pg_column_tetris_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_column_tetris_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_column_tetris_18 pg_column_tetris_18-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_column_tetris_18-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_column_tetris_18 pg_column_tetris_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_column_tetris_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_column_tetris_18 pg_column_tetris_18-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_column_tetris_18-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_column_tetris_18 pg_column_tetris_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_column_tetris_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_column_tetris_18 pg_column_tetris_18-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_column_tetris_18-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-column-tetris postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-18-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 17 pg_column_tetris_17 pg_column_tetris_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_column_tetris_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_column_tetris_17 pg_column_tetris_17-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_column_tetris_17-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_column_tetris_17 pg_column_tetris_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_column_tetris_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_column_tetris_17 pg_column_tetris_17-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_column_tetris_17-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_column_tetris_17 pg_column_tetris_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_column_tetris_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_column_tetris_17 pg_column_tetris_17-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_column_tetris_17-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-column-tetris postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-17-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 16 pg_column_tetris_16 pg_column_tetris_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_column_tetris_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_column_tetris_16 pg_column_tetris_16-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_column_tetris_16-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_column_tetris_16 pg_column_tetris_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_column_tetris_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_column_tetris_16 pg_column_tetris_16-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_column_tetris_16-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_column_tetris_16 pg_column_tetris_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_column_tetris_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_column_tetris_16 pg_column_tetris_16-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_column_tetris_16-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-column-tetris postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-16-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 15 pg_column_tetris_15 pg_column_tetris_15-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_column_tetris_15-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_column_tetris_15 pg_column_tetris_15-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_column_tetris_15-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_column_tetris_15 pg_column_tetris_15-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_column_tetris_15-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_column_tetris_15 pg_column_tetris_15-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_column_tetris_15-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_column_tetris_15 pg_column_tetris_15-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_column_tetris_15-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_column_tetris_15 pg_column_tetris_15-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_column_tetris_15-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-column-tetris postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-15-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
@ el8.x86_64 14 pg_column_tetris_14 pg_column_tetris_14-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 15.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_column_tetris_14-0.1.0-1PIGSTY.el8.noarch.rpm
@ el8.aarch64 14 pg_column_tetris_14 pg_column_tetris_14-0.1.0-1PIGSTY.el8.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_column_tetris_14-0.1.0-1PIGSTY.el8.noarch.rpm
@ el9.x86_64 14 pg_column_tetris_14 pg_column_tetris_14-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_column_tetris_14-0.1.0-1PIGSTY.el9.noarch.rpm
@ el9.aarch64 14 pg_column_tetris_14 pg_column_tetris_14-0.1.0-1PIGSTY.el9.noarch.rpm pigsty 0.1.0 14.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_column_tetris_14-0.1.0-1PIGSTY.el9.noarch.rpm
@ el10.x86_64 14 pg_column_tetris_14 pg_column_tetris_14-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_column_tetris_14-0.1.0-1PIGSTY.el10.noarch.rpm
@ el10.aarch64 14 pg_column_tetris_14 pg_column_tetris_14-0.1.0-1PIGSTY.el10.noarch.rpm pigsty 0.1.0 14.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_column_tetris_14-0.1.0-1PIGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb pigsty 0.1.0 9.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pg-column-tetris postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb pigsty 0.1.0 9.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-column-tetris/postgresql-14-pg-column-tetris_0.1.0-1PIGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_column_tetris` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_column_tetris         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_column_tetris` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_column_tetris;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_column_tetris -v 18  # PG 18
pig ext install -y pg_column_tetris -v 17  # PG 17
pig ext install -y pg_column_tetris -v 16  # PG 16
pig ext install -y pg_column_tetris -v 15  # PG 15
pig ext install -y pg_column_tetris -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_column_tetris_18       # PG 18
dnf install -y pg_column_tetris_17       # PG 17
dnf install -y pg_column_tetris_16       # PG 16
dnf install -y pg_column_tetris_15       # PG 15
dnf install -y pg_column_tetris_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-column-tetris   # PG 18
apt install -y postgresql-17-pg-column-tetris   # PG 17
apt install -y postgresql-16-pg-column-tetris   # PG 16
apt install -y postgresql-15-pg-column-tetris   # PG 15
apt install -y postgresql-14-pg-column-tetris   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_column_tetris CASCADE;  -- 依赖: plpgsql
```

## 用法

来源：

- [项目 README](https://github.com/rogerwelin/pg_column_tetris/blob/e70f9867c63e932cdaf87b2d34b6504adad9ce12/README.md)
- [扩展 control 文件](https://github.com/rogerwelin/pg_column_tetris/blob/e70f9867c63e932cdaf87b2d34b6504adad9ce12/pg_column_tetris.control)
- [0.1.0 版 SQL 实现](https://github.com/rogerwelin/pg_column_tetris/blob/e70f9867c63e932cdaf87b2d34b6504adad9ce12/pg_column_tetris--0.1.0.sql)

`pg_column_tetris` 0.1.0 是适用于 PostgreSQL 14 至 18 的纯 SQL 扩展。它通过事件触发器在 `CREATE TABLE` 后估算对齐填充，并可对低效列顺序发出警告或拒绝建表；还提供检查和重写建议函数。

### 检查并选择执行模式

默认模式为 `warn`；`strict` 会拒绝估算结果不佳的新表，`off` 则禁用事件触发器检查。

```sql
CREATE EXTENSION pg_column_tetris;

SELECT column_tetris.mode();
SELECT * FROM column_tetris.check('public.measurement'::regclass);
SELECT column_tetris.padding_wasted('public.measurement'::regclass);

SELECT column_tetris.set_mode('warn');
```

对不应检查的表使用 `column_tetris.exclude()`。临时表和系统表会被跳过，事件触发器检查建表操作，而不是每一次后续修改。

### 将估算与重写视为建议

估算器会模拟元组头和类型对齐，但无法完整预测 null 位图、变长或 TOAST 值、压缩以及工作负载特定行分布的实际存储。因此，报告的字节节省是设计信号，不是实测磁盘回收量。

`column_tetris.suggest_rewrite()` 返回迁移脚本；它不会保留每个外键、索引、触发器或默认值。生成的流程会重命名原表、创建并复制替代表，最后删除旧表，可能需要排他锁和停机。审查依赖对象、权限、identity 与序列行为、复制、回退并在真实的预演环境测试之前，绝不能执行该输出。列顺序还可能属于应用契约，例如按位置插入和行解码。
