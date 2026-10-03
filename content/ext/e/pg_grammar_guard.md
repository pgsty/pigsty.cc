---
title: "pg_grammar_guard"
linkTitle: "pg_grammar_guard"
description: "根据实时目录生成语法并检测已批准语法的漂移"
weight: 1890
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Manuelreyesbravo/pg_grammar_guard">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Manuelreyesbravo/pg_grammar_guard</div>
    <div class="ext-card__desc">https://github.com/Manuelreyesbravo/pg_grammar_guard</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_grammar_guard-0.4.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_grammar_guard-0.4.1.tar.gz</div>
    <div class="ext-card__desc">pg_grammar_guard-0.4.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_grammar_guard`**](/ext/e/pg_grammar_guard) | `0.4.1` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1890  | [**`pg_grammar_guard`**](/ext/e/pg_grammar_guard) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `grammar_guard` |
{.ext-table}

| **相关扩展** | [`pg_living_assertions`](/ext/e/pg_living_assertions) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires pg_living_assertions, despite older README text claiming no dependencies.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_grammar_guard` | `pg_living_assertions` |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.1` | {{< pgvers "18,17,16,15,14" >}} | `pg_grammar_guard_$v` | `pg_living_assertions_$v` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-grammar-guard` | `postgresql-$v-pg-living-assertions` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d12.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d12.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d13.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| d13.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u22.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u22.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u24.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u24.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u26.x86_64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
| u26.aarch64 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 | AVAIL PIGSTY 0.4.1 1 |
@ el8.x86_64 18 pg_grammar_guard_18 pg_grammar_guard_18-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_grammar_guard_18-0.4.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_grammar_guard_18 pg_grammar_guard_18-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_grammar_guard_18-0.4.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_grammar_guard_18 pg_grammar_guard_18-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_grammar_guard_18-0.4.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_grammar_guard_18 pg_grammar_guard_18-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_grammar_guard_18-0.4.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_grammar_guard_18 pg_grammar_guard_18-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_grammar_guard_18-0.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_grammar_guard_18 pg_grammar_guard_18-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_grammar_guard_18-0.4.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ d13.aarch64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ u22.x86_64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u22.aarch64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u24.x86_64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u24.aarch64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u26.x86_64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
@ u26.aarch64 18 postgresql-18-pg-grammar-guard postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-18-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
@ el8.x86_64 17 pg_grammar_guard_17 pg_grammar_guard_17-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_grammar_guard_17-0.4.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_grammar_guard_17 pg_grammar_guard_17-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_grammar_guard_17-0.4.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_grammar_guard_17 pg_grammar_guard_17-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_grammar_guard_17-0.4.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_grammar_guard_17 pg_grammar_guard_17-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_grammar_guard_17-0.4.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_grammar_guard_17 pg_grammar_guard_17-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_grammar_guard_17-0.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_grammar_guard_17 pg_grammar_guard_17-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_grammar_guard_17-0.4.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ d13.aarch64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ u22.x86_64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u22.aarch64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u24.x86_64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u24.aarch64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u26.x86_64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
@ u26.aarch64 17 postgresql-17-pg-grammar-guard postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-17-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
@ el8.x86_64 16 pg_grammar_guard_16 pg_grammar_guard_16-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_grammar_guard_16-0.4.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_grammar_guard_16 pg_grammar_guard_16-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_grammar_guard_16-0.4.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_grammar_guard_16 pg_grammar_guard_16-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_grammar_guard_16-0.4.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_grammar_guard_16 pg_grammar_guard_16-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_grammar_guard_16-0.4.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_grammar_guard_16 pg_grammar_guard_16-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_grammar_guard_16-0.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_grammar_guard_16 pg_grammar_guard_16-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_grammar_guard_16-0.4.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ d13.aarch64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ u22.x86_64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u22.aarch64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u24.x86_64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u24.aarch64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u26.x86_64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
@ u26.aarch64 16 postgresql-16-pg-grammar-guard postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-16-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
@ el8.x86_64 15 pg_grammar_guard_15 pg_grammar_guard_15-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_grammar_guard_15-0.4.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_grammar_guard_15 pg_grammar_guard_15-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_grammar_guard_15-0.4.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_grammar_guard_15 pg_grammar_guard_15-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_grammar_guard_15-0.4.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_grammar_guard_15 pg_grammar_guard_15-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_grammar_guard_15-0.4.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_grammar_guard_15 pg_grammar_guard_15-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_grammar_guard_15-0.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_grammar_guard_15 pg_grammar_guard_15-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_grammar_guard_15-0.4.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ d13.aarch64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ u22.x86_64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u22.aarch64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u24.x86_64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u24.aarch64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u26.x86_64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
@ u26.aarch64 15 postgresql-15-pg-grammar-guard postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-15-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
@ el8.x86_64 14 pg_grammar_guard_14 pg_grammar_guard_14-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_grammar_guard_14-0.4.1-1PGSTY.el8.noarch.rpm
@ el8.aarch64 14 pg_grammar_guard_14 pg_grammar_guard_14-0.4.1-1PGSTY.el8.noarch.rpm pigsty 0.4.1 27.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_grammar_guard_14-0.4.1-1PGSTY.el8.noarch.rpm
@ el9.x86_64 14 pg_grammar_guard_14 pg_grammar_guard_14-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_grammar_guard_14-0.4.1-1PGSTY.el9.noarch.rpm
@ el9.aarch64 14 pg_grammar_guard_14 pg_grammar_guard_14-0.4.1-1PGSTY.el9.noarch.rpm pigsty 0.4.1 27.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_grammar_guard_14-0.4.1-1PGSTY.el9.noarch.rpm
@ el10.x86_64 14 pg_grammar_guard_14 pg_grammar_guard_14-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_grammar_guard_14-0.4.1-1PGSTY.el10.noarch.rpm
@ el10.aarch64 14 pg_grammar_guard_14 pg_grammar_guard_14-0.4.1-1PGSTY.el10.noarch.rpm pigsty 0.4.1 27.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_grammar_guard_14-0.4.1-1PGSTY.el10.noarch.rpm
@ d12.x86_64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d12.aarch64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~bookworm_all.deb
@ d13.x86_64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ d13.aarch64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb pigsty 0.4.1 21.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~trixie_all.deb
@ u22.x86_64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u22.aarch64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb pigsty 0.4.1 22.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~jammy_all.deb
@ u24.x86_64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u24.aarch64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~noble_all.deb
@ u26.x86_64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
@ u26.aarch64 14 postgresql-14-pg-grammar-guard postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb pigsty 0.4.1 22.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-grammar-guard/postgresql-14-pg-grammar-guard_0.4.1-1PGSTY~resolute_all.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_grammar_guard` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_grammar_guard         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_grammar_guard` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_grammar_guard;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_grammar_guard -v 18  # PG 18
pig ext install -y pg_grammar_guard -v 17  # PG 17
pig ext install -y pg_grammar_guard -v 16  # PG 16
pig ext install -y pg_grammar_guard -v 15  # PG 15
pig ext install -y pg_grammar_guard -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_grammar_guard_18       # PG 18
dnf install -y pg_grammar_guard_17       # PG 17
dnf install -y pg_grammar_guard_16       # PG 16
dnf install -y pg_grammar_guard_15       # PG 15
dnf install -y pg_grammar_guard_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-grammar-guard   # PG 18
apt install -y postgresql-17-pg-grammar-guard   # PG 17
apt install -y postgresql-16-pg-grammar-guard   # PG 16
apt install -y postgresql-15-pg-grammar-guard   # PG 15
apt install -y postgresql-14-pg-grammar-guard   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_grammar_guard CASCADE;  -- 依赖: pg_living_assertions
```

## 用法

来源：

- [PGXN 0.4.1](https://pgxn.org/dist/pg_grammar_guard/0.4.1/)

`pg_grammar_guard` 根据目录中的标识符生成 GBNF 或 JSON Schema，并检测已批准语法的漂移。它是无需预加载的纯 SQL 扩展，本包支持 PostgreSQL 14–18。control 文件明确依赖 `pg_living_assertions`。

### 生成语法

```sql
CREATE EXTENSION pg_grammar_guard CASCADE;
CREATE TABLE public.grammar_demo (id integer, label text);
SELECT grammar_guard.grammar_for_json(ARRAY[
  ROW('column', 'enum',
      grammar_guard.catalog_columns('public.grammar_demo'), true)
]::grammar_guard.grammar_field[]);
```

目录辅助函数枚举实际存在的表、列和枚举标签。生成器支持嵌套对象和有界数组；任意 SQL、文件路径等开放集合仍需单独验证。

### 检测变化

`grammar_guard.watch()` 保存用于重建语法的查询，`grammar_guard.check_grammar()` 依据实时目录执行检查。可通过 `living_assertions.status` 查看结果及其年龄。

只有受信任的管理员才应登记基线 SQL。语法能限制合法标识符，无法证明选择的表、关联或答案在语义上正确。旧 0.2 系列基线缺少原始生成查询，升级时需要人工重新批准。
