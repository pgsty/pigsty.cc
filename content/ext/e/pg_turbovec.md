---
title: "pg_turbovec"
linkTitle: "pg_turbovec"
description: "基于 TurboQuant 压缩量化的 PostgreSQL 向量类型与 ANN 索引访问方法。"
weight: 1980
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://codeberg.org/gregburd/pg_turbovec">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://codeberg.org/gregburd/pg_turbovec</div>
    <div class="ext-card__desc">https://codeberg.org/gregburd/pg_turbovec</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_turbovec-1.29.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_turbovec-1.29.0.tar.gz</div>
    <div class="ext-card__desc">pg_turbovec-1.29.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_turbovec`**](/ext/e/pg_turbovec) | `1.29.0` | <a class="ext-badge ext-badge--cate rag" href="/ext/cate/rag">RAG</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1980  | [**`pg_turbovec`**](/ext/e/pg_turbovec) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `turbovec` |
{.ext-table}

| **相关扩展** | `pg_turboquant` [`vector`](/ext/e/vector) [`vchord`](/ext/e/vchord) [`vectorscale`](/ext/e/vectorscale) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Upstream v1.29.0 supports PostgreSQL 13-18 with PG19 experimental; PIGSTY RPM and DEB ship 1.29.0 for PostgreSQL 14-18, built with pgrx 0.19.1 against OpenBLAS.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.29.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_turbovec` | - |
| [**RPM**](/ext/rpm#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.29.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_turbovec_$v` | `openblas` |
| [**DEB**](/ext/deb#rag) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.29.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-turbovec` | `libopenblas0` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 | AVAIL PIGSTY 1.29.0 1 |
@ el8.x86_64 18 pg_turbovec_18 pg_turbovec_18-1.29.0-1PIGSTY.el8.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_turbovec_18-1.29.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_turbovec_18 pg_turbovec_18-1.29.0-1PIGSTY.el8.aarch64.rpm pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_turbovec_18-1.29.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_turbovec_18 pg_turbovec_18-1.29.0-1PIGSTY.el9.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_turbovec_18-1.29.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_turbovec_18 pg_turbovec_18-1.29.0-1PIGSTY.el9.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_turbovec_18-1.29.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_turbovec_18 pg_turbovec_18-1.29.0-1PIGSTY.el10.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_turbovec_18-1.29.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_turbovec_18 pg_turbovec_18-1.29.0-1PIGSTY.el10.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_turbovec_18-1.29.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb pigsty 1.29.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb pigsty 1.29.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-turbovec postgresql-18-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-18-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_turbovec_17 pg_turbovec_17-1.29.0-1PIGSTY.el8.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_turbovec_17-1.29.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_turbovec_17 pg_turbovec_17-1.29.0-1PIGSTY.el8.aarch64.rpm pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_turbovec_17-1.29.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_turbovec_17 pg_turbovec_17-1.29.0-1PIGSTY.el9.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_turbovec_17-1.29.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_turbovec_17 pg_turbovec_17-1.29.0-1PIGSTY.el9.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_turbovec_17-1.29.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_turbovec_17 pg_turbovec_17-1.29.0-1PIGSTY.el10.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_turbovec_17-1.29.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_turbovec_17 pg_turbovec_17-1.29.0-1PIGSTY.el10.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_turbovec_17-1.29.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb pigsty 1.29.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb pigsty 1.29.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-turbovec postgresql-17-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-17-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_turbovec_16 pg_turbovec_16-1.29.0-1PIGSTY.el8.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_turbovec_16-1.29.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_turbovec_16 pg_turbovec_16-1.29.0-1PIGSTY.el8.aarch64.rpm pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_turbovec_16-1.29.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_turbovec_16 pg_turbovec_16-1.29.0-1PIGSTY.el9.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_turbovec_16-1.29.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_turbovec_16 pg_turbovec_16-1.29.0-1PIGSTY.el9.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_turbovec_16-1.29.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_turbovec_16 pg_turbovec_16-1.29.0-1PIGSTY.el10.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_turbovec_16-1.29.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_turbovec_16 pg_turbovec_16-1.29.0-1PIGSTY.el10.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_turbovec_16-1.29.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb pigsty 1.29.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb pigsty 1.29.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-turbovec postgresql-16-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-16-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_turbovec_15 pg_turbovec_15-1.29.0-1PIGSTY.el8.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_turbovec_15-1.29.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_turbovec_15 pg_turbovec_15-1.29.0-1PIGSTY.el8.aarch64.rpm pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_turbovec_15-1.29.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_turbovec_15 pg_turbovec_15-1.29.0-1PIGSTY.el9.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_turbovec_15-1.29.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_turbovec_15 pg_turbovec_15-1.29.0-1PIGSTY.el9.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_turbovec_15-1.29.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_turbovec_15 pg_turbovec_15-1.29.0-1PIGSTY.el10.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_turbovec_15-1.29.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_turbovec_15 pg_turbovec_15-1.29.0-1PIGSTY.el10.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_turbovec_15-1.29.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb pigsty 1.29.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb pigsty 1.29.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pg-turbovec postgresql-15-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-15-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_turbovec_14 pg_turbovec_14-1.29.0-1PIGSTY.el8.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_turbovec_14-1.29.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_turbovec_14 pg_turbovec_14-1.29.0-1PIGSTY.el8.aarch64.rpm pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_turbovec_14-1.29.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_turbovec_14 pg_turbovec_14-1.29.0-1PIGSTY.el9.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_turbovec_14-1.29.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_turbovec_14 pg_turbovec_14-1.29.0-1PIGSTY.el9.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_turbovec_14-1.29.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_turbovec_14 pg_turbovec_14-1.29.0-1PIGSTY.el10.x86_64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_turbovec_14-1.29.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_turbovec_14 pg_turbovec_14-1.29.0-1PIGSTY.el10.aarch64.rpm pigsty 1.29.0 2.1MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_turbovec_14-1.29.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb pigsty 1.29.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb pigsty 1.29.0 1.8MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb pigsty 1.29.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb pigsty 1.29.0 2.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pg-turbovec postgresql-14-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb pigsty 1.29.0 1.9MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-turbovec/postgresql-14-pg-turbovec_1.29.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_turbovec` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_turbovec         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_turbovec` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install pg_turbovec;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_turbovec -v 18  # PG 18
pig ext install -y pg_turbovec -v 17  # PG 17
pig ext install -y pg_turbovec -v 16  # PG 16
pig ext install -y pg_turbovec -v 15  # PG 15
pig ext install -y pg_turbovec -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_turbovec_18       # PG 18
dnf install -y pg_turbovec_17       # PG 17
dnf install -y pg_turbovec_16       # PG 16
dnf install -y pg_turbovec_15       # PG 15
dnf install -y pg_turbovec_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-turbovec   # PG 18
apt install -y postgresql-17-pg-turbovec   # PG 17
apt install -y postgresql-16-pg-turbovec   # PG 16
apt install -y postgresql-15-pg-turbovec   # PG 15
apt install -y postgresql-14-pg-turbovec   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_turbovec;
```

## 用法

来源：

- [pg_turbovec v1.29.0 README](https://codeberg.org/gregburd/pg_turbovec/src/tag/v1.29.0/README.md)
- [pg_turbovec v1.29.0 变更日志](https://codeberg.org/gregburd/pg_turbovec/src/tag/v1.29.0/CHANGELOG.md)
- [pg_turbovec v1.29.0 控制文件](https://codeberg.org/gregburd/pg_turbovec/src/tag/v1.29.0/pg_turbovec.control)
- [分区扩展指南](https://codeberg.org/gregburd/pg_turbovec/src/tag/v1.29.0/docs/PARTITIONED_SCALE.md)
- [过滤指南](https://codeberg.org/gregburd/pg_turbovec/src/tag/v1.29.0/docs/FILTERING.md)
- [Pigsty 软件包矩阵](https://pgext.cloud/ext/pg_turbovec)

`pg_turbovec` 1.29.0 提供稠密的 `turbovec.vector` 类型和 `turbovec` 最近邻索引访问方法。它将浮点坐标量化为 2、3 或 4 位，并使用堆向量对候选项重新排序。适合存储受限的余弦或内积搜索；应有意识地选择索引种类，因为默认平坦扫描的成本随行数线性增长。

### 创建与查询向量

```sql
CREATE EXTENSION pg_turbovec;
SET search_path = public, turbovec;

CREATE TABLE items (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  embedding turbovec.vector
);

INSERT INTO items (embedding)
VALUES ('[1,2,3]'), ('[4,5,6]');

SELECT id, embedding <=> '[3,1,2]'::turbovec.vector AS cosine_distance
FROM items
ORDER BY embedding <=> '[3,1,2]'::turbovec.vector
LIMIT 10;
```

距离操作符包括：`<->` 表示 L2，`<#>` 表示负内积，`<=>` 表示余弦距离，`<+>` 表示 L1。当前索引支持按内积和余弦排序；L2 与 L1 只能执行精确运算。

`turbovec.vector` 类型接受 1–16,000 个坐标。建立索引的向量必须具有固定维度，且维度是 8 的倍数；当列本身是变长维度时，应使用检查约束或应用层校验。

### 选择并构建索引种类

```sql
-- Default flat quantized scan
CREATE INDEX items_embedding_flat_idx ON items
USING turbovec (embedding vec_cosine_ops)
WITH (bit_width = 4);

-- Out-of-core IVF alternative
CREATE INDEX items_embedding_ivf_idx ON items
USING turbovec (embedding vec_cosine_ops)
WITH (bit_width = 4, lists = 1024);

-- Navigable-graph alternative
CREATE INDEX items_embedding_graph_idx ON items
USING turbovec (embedding vec_cosine_ops)
WITH (bit_width = 4, graph = true);

SET turbovec.probes = 32;

SELECT id
FROM items
ORDER BY embedding <=> '[3,1,2]'::turbovec.vector
LIMIT 10;
```

这些 `CREATE INDEX` 语句是可选方案，不表示建议同时保留三种索引。默认平坦种类执行 `O(n * dim)` 量化扫描，经堆重排后可以达到精确召回，但在大行数下并非良好的延迟选择。`WITH (lists = N)` 启用可完全流出内存的 IVF 层；`WITH (graph = true)` 启用 Vamana 图，以便在中等规模下实现更低延迟的 ANN。

将 `vec_cosine_ops` 与 `<=>` 搭配，或将 `vec_ip_ops` 与 `<#>` 搭配。`bit_width = 4` 是默认值，通常更有利于召回率；2 位索引更小，但需要针对具体工作负载测试召回率。也支持三位索引。支持 `CREATE INDEX CONCURRENTLY`。

重要的调优控制项包括 `turbovec.probes`、`turbovec.search_k`、`turbovec.oversample`、`turbovec.hi_dim_rerank`、`turbovec.iterative_scan` 和 `turbovec.cache_size_mb`。每次只改变一个维度，并将近似结果与精确基线进行比较。

### 过滤与分区

对于稳定的过滤值，使用 PostgreSQL 部分索引；对于显式候选允许列表，使用文档所述的 `turbovec.knn(..., allowed)` 接口；对于普通的带过滤条件 `ORDER BY ... LIMIT` 查询，则使用迭代扫描。

版本 1.29 记录了如何使用原生 PostgreSQL 分区来处理超出单表规模的数据集。父表查询可在各分区的 TurboVec 索引之间使用 `Merge Append`：

```sql
SELECT id
FROM partitioned_items
ORDER BY embedding <=> $1::turbovec.vector
LIMIT 20;
```

应分别为每个分区执行构建、vacuum 和 reindex。基于粗粒度向量量化器的分区裁剪在 1.29.0 中仅是设计方案，并非已经交付的功能。

### 版本与完整性边界

- 控制文件将对象安装到模式 `turbovec`，不可重定位，且不要求 `shared_preload_libraries` 或重启服务器。
- 上游 v1.29 面向 PostgreSQL 13-18，并将 PostgreSQL 19 支持标记为实验性；当前 Pigsty 1.29.0 软件包覆盖 PostgreSQL 14-18，并提供匹配的 OpenBLAS 链接二进制文件。
- 上游 1.28.4 修复了持久化行数漂移问题，该问题可能破坏索引 ID 表；同时新增 `turbovec.turbovec_check(regclass)`。已经损坏的索引仍须通过 `REINDEX` 或删除后重建来恢复。
- 版本 1.29.0 是增量更新，保持 wire format 7；从健康的 1.28.4 索引升级时不要求重建。安装新文件后，执行 `ALTER EXTENSION pg_turbovec UPDATE TO '1.29.0'` 即可。
- 虽然 1.29 的 reloption 解析器接受 `bit_width = 1`，但端到端一位索引尚未实现，`CREATE INDEX` 会主动报错。请使用 `bit_width = 2`、`bit_width = 3` 或 `bit_width = 4`。
- 磁盘上的 ID 表在非正常关机后仍存在有文档记录的崩溃安全缺口。应认真处理完整性错误，并遵循上游恢复指南。

```sql
SELECT *
FROM turbovec.turbovec_check('items_embedding_flat_idx'::regclass);

REINDEX INDEX CONCURRENTLY items_embedding_flat_idx;
```

只有索引所有者可以运行完整性检查器。应针对 `is_corrupt` 告警；当检查器或扫描报告损坏时，重建受影响的索引。成功升级版本不会修复已经损坏的索引。
