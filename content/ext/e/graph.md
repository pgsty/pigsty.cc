---
title: "graph"
linkTitle: "graph"
description: "PostgreSQL 图查询与遍历扩展"
weight: 2630
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/evokoa/pggraph">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">evokoa/pggraph</div>
    <div class="ext-card__desc">https://github.com/evokoa/pggraph</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pggraph-1.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pggraph-1.2.0.tar.gz</div>
    <div class="ext-card__desc">pggraph-1.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pggraph`**](/ext/e/graph) | `1.2.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2630  | [**`graph`**](/ext/e/graph) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`pg_liquid`](/ext/e/pg_liquid) [`onesparse`](/ext/e/onesparse) [`pgrdf`](/ext/e/pgrdf) [`ltree`](/ext/e/ltree) [`sparql`](/ext/e/sparql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGXN distribution and package are pggraph; installed extension name is graph.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pggraph` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `pggraph_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.2.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pggraph` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 pggraph_18 pggraph_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 4.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pggraph_18 pggraph_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pggraph_18 pggraph_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pggraph_18 pggraph_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pggraph_18 pggraph_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pggraph_18 pggraph_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-18-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pggraph_17 pggraph_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 4.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pggraph_17 pggraph_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pggraph_17 pggraph_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pggraph_17 pggraph_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pggraph_17 pggraph_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pggraph_17 pggraph_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-17-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pggraph_16 pggraph_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 4.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pggraph_16 pggraph_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pggraph_16 pggraph_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pggraph_16 pggraph_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pggraph_16 pggraph_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pggraph_16 pggraph_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-16-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pggraph_15 pggraph_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 4.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pggraph_15 pggraph_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pggraph_15 pggraph_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pggraph_15 pggraph_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pggraph_15 pggraph_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pggraph_15 pggraph_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-15-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pggraph_14 pggraph_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 4.0MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pggraph_14 pggraph_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 3.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pggraph_14 pggraph_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pggraph_14 pggraph_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pggraph_14 pggraph_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 3.9MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pggraph_14 pggraph_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 3.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 2.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 3.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 3.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 3.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-14-pggraph_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pggraph` 扩展的 RPM / DEB 包：

```bash
pig build pkg pggraph         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pggraph` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pggraph;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pggraph -v 18  # PG 18
pig ext install -y pggraph -v 17  # PG 17
pig ext install -y pggraph -v 16  # PG 16
pig ext install -y pggraph -v 15  # PG 15
pig ext install -y pggraph -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pggraph_18       # PG 18
dnf install -y pggraph_17       # PG 17
dnf install -y pggraph_16       # PG 16
dnf install -y pggraph_15       # PG 15
dnf install -y pggraph_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pggraph   # PG 18
apt install -y postgresql-17-pggraph   # PG 17
apt install -y postgresql-16-pggraph   # PG 16
apt install -y postgresql-15-pggraph   # PG 15
apt install -y postgresql-14-pggraph   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION graph;
```




## 用法

来源：

- [pgGraph v1.2.0 README](https://github.com/Evokoa/pgGraph/blob/v1.2.0/README.md)
- [v1.2.0 发行说明](https://github.com/Evokoa/pgGraph/releases/tag/v1.2.0)
- [SQL API 参考](https://github.com/Evokoa/pgGraph/blob/v1.2.0/docs/user_guide/api-reference.mdx)
- [Schema 注册](https://github.com/Evokoa/pgGraph/blob/v1.2.0/docs/user_guide/schema-registration.mdx)
- [管理与安全](https://github.com/Evokoa/pgGraph/blob/v1.2.0/docs/user_guide/administration-and-security.mdx)
- [故障排查](https://github.com/Evokoa/pgGraph/blob/v1.2.0/docs/user_guide/troubleshooting.mdx)
- [扩展控制文件](https://github.com/Evokoa/pgGraph/blob/v1.2.0/graph/graph.control)
- [v1.1.0 到 v1.2.0 升级 SQL](https://github.com/Evokoa/pgGraph/blob/v1.2.0/graph/sql/graph--1.1.0--1.2.0.sql)

`pggraph` 是包名与 PGXN 发行名，但安装到 PostgreSQL 中的扩展名是 `graph`。它从普通 PostgreSQL 表构建派生图产物，并以源表作为事实来源，通过 `graph` schema 提供图搜索、遍历、最短路径、GQL 风格读取，以及部分映射式写入。

版本 1.2.0 支持 PostgreSQL 14-18、命名图、按图隔离的授权与配额、持久同步、有界遍历与分析、维护任务，以及选定的 GQL 读写 profile。它还通过有边界的开放词汇类型字典，移除了历史上 254 个关系标签的上限。它不声明支持完整 ISO GQL、完整 openCypher 或公开 SQL/PGQ `GRAPH_TABLE` surface。标准 PostgreSQL SQLSTATE 会与稳定的 `PGxxx` detail 配对，供应用诊断。

### 基本图构建

```sql
CREATE EXTENSION IF NOT EXISTS graph;
SELECT graph.reset();

CREATE TABLE companies (
  id   text PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE people (
  id         text PRIMARY KEY,
  name       text NOT NULL,
  company_id text REFERENCES companies(id)
);

INSERT INTO companies VALUES
  ('c1', 'Acme Bank'),
  ('c2', 'Northwind Trading');

INSERT INTO people VALUES
  ('p1', 'Alice', 'c1'),
  ('p2', 'Bob', 'c1'),
  ('p3', 'Carol', 'c2');

SELECT * FROM graph.auto_discover('public');
SELECT * FROM graph.build();

SELECT node_count, edge_count, edge_types
FROM graph.status();
```

`graph.auto_discover('public')` 会扫描该 schema 中的主键与外键，注册发现到的源表和边，并为 `graph.build()` 准备图。生产 schema 建议显式注册，确保标签、搜索列、过滤列、权重、租户行为和图身份都经过设计。

### 手工注册与命名图

```sql
SELECT graph.create_graph('customer_360', namespace := 'analytics');
SELECT graph.set_current_graph('customer_360', namespace := 'analytics');

SELECT graph.add_table(
  table_name := 'public.people'::regclass,
  id_column  := 'id',
  columns    := ARRAY['name'],
  tenant_column := NULL
);

SELECT graph.add_table_to_graph(
  graph_name := 'customer_360',
  table_name := 'public.companies'::regclass,
  id_column  := 'id',
  columns    := ARRAY['name'],
  graph_namespace := 'analytics'
);

SELECT graph.add_edge_to_graph(
  graph_name := 'customer_360',
  from_table := 'public.people'::regclass,
  from_column := 'company_id',
  to_table := 'public.companies'::regclass,
  to_column := 'id',
  label := 'works_at',
  bidirectional := true,
  graph_namespace := 'analytics'
);

SELECT * FROM graph.build_graph('customer_360', graph_namespace := 'analytics');
```

除非使用显式的 `*_to_graph` / `*_from_graph` 辅助函数，注册操作会作用于当前选中的图。节点标识符必须匹配主键，或匹配唯一的 `NOT NULL` 索引。`columns` 控制可搜索和可被 GQL 读取的属性；遍历过滤下推需要通过 `graph.add_filter_column()` 单独注册。边表和 junction table 形式的关系也受支持，`label_column` 可在文档规定的公开上限内提供动态边标签。

### 搜索、遍历与路径

```sql
SELECT node_table_name, node_id, node
FROM graph.search(
  property_key   := 'name',
  property_value := 'Alice',
  table_filter   := 'public.people'::regclass,
  mode           := 'exact',
  hydrate        := true
);

SELECT depth, node_table_name, node_id, edge_path
FROM graph.traverse(
  'public.people'::regclass,
  'p1',
  2,
  hydrate := false
);

SELECT step, node_table_name, node_id, edge_label
FROM graph.shortest_path(
  'public.people'::regclass,
  'p1',
  'public.companies'::regclass,
  'c1',
  hydrate := false
);
```

`hydrate := false` 返回紧凑的图坐标。启用 hydration 后，源表行的可见性仍由 PostgreSQL ACL 与 RLS 控制。过期坐标会失败关闭，而不会伪造行。

### 关系类型与注册恢复

版本 1.2.0 允许单个图包含最多 1,000,000 种关系类型。每个 UTF-8 标签上限为 1,024 字节，字典累计上限为 256 MiB，关系类型过滤数组在分配前受 4,096 项和 4 MiB 限制。`graph.status()` 只会按稳定 ID 顺序预览前 64 个已提交类型；要分页读取完整有效字典，请使用：

```sql
SELECT type_id, label
FROM graph.edge_types(after_type_id := 0, max_rows := 1000);
```

通过触发器同步提交的动态标签会由 `graph.apply_sync()` 加入字典，无需全量重建。不存在的关系类型会返回无匹配，而端点映射存在歧义时会失败关闭。

无参形式会删除选中图的派生引擎与产物，但保留注册。只在表重建或逻辑恢复导致 relation identity 过期时，才使用 boolean 重载：

```sql
SELECT graph.reset();

-- This also clears table, edge, and filter registrations for the selected graph.
SELECT graph.reset(true);
-- Reapply reviewed graph.add_table(...), graph.add_edge(...), and
-- graph.add_filter_column(...) calls before rebuilding.
SELECT * FROM graph.build();
```

两种形式都不会修改 PostgreSQL 源表或其他命名图。`graph.reset(true)` 会清空选中图的注册目录，因此使用前必须保留已审核的注册 SQL。

### GQL 查询与关系写入

```sql
SELECT row
FROM graph.gql(
  'MATCH (p:people)-[:works_at]->(c:companies)
   WHERE p.name = $name
   RETURN p.id AS person_id, c.name AS company
   ORDER BY company',
  params  := '{"name":"Alice"}'::jsonb,
  hydrate := true
);
```

`graph.gql()` 为每条 SQL 行返回一个 `jsonb` 对象。节点标签映射到已注册表名，关系类型映射到已注册边标签。受支持的可变 GQL profile 包含已注册关系创建：映射式写入仍通过 PostgreSQL 源表 DML 执行，源表依然是权威数据。未支持的 openCypher 或 SQL/PGQ 形状会返回显式能力错误，而不是部分执行。

### 管理与运维

```sql
GRANT USAGE, CREATE ON SCHEMA graph TO graph_admin;

SELECT * FROM graph.grant_graph('customer_360', 'app_reader', 'read', namespace := 'analytics');
SELECT * FROM graph.set_graph_quota('owner', 'max_named_graphs', 25, scope_key := 'app_owner');
SELECT * FROM graph.select_graph('customer_360', namespace := 'analytics');
SELECT * FROM graph.add_sync_policy('customer_360', schedule_interval_secs := 300, graph_namespace := 'analytics');
SELECT * FROM graph.run_due_jobs();
SELECT * FROM graph.projection_status();
```

图管理覆盖 catalog 变更、构建、同步回放、维护、配额、运行时图加载和全局分析。命名图权限包括 `read`、`write`、`build`、`admin`，但图级 `read` 本身不够：hydrated 读取仍需要源表 `SELECT` 权限。选中图的 tenant 也会默认约束遍历、搜索、GQL 与 Cypher 调用，除非显式传入匹配的 tenant。

### 升级到 1.2.0

1.1.0 到 1.2.0 的 catalog 更新是加法式的：它会安装 `graph.edge_types()` 和 `graph.reset(boolean)`，但不替换已有函数对象、owner 或显式授权。

```sql
ALTER EXTENSION graph UPDATE TO '1.2.0';

SELECT extversion
FROM pg_extension
WHERE extname = 'graph';
```

已有 v6 产物仍可读取。新构建会发布 v7 产物；当基础产物本身需要表示超过 254 种关系类型时，应重新构建。不支持就地降级，因为 1.1 binary 无法读取 v7 产物。回滚需要使用匹配的 1.1.0 软件包恢复升级前的 PostgreSQL 备份，再从恢复后的源表重建派生图状态。

### 注意事项

- 源表仍是事实来源。图产物、projection 文件、同步状态和运行时引擎都是派生状态，可从源表重建。
- 注册信息变化后需要运行 `graph.build()` 或图级构建辅助函数；依赖增量 projection 时，应使用 sync/maintenance API。
- `graph._graphs`、授权、配额、任务、同步日志、projection 元数据等内部表是实现细节，应用代码应使用公开 SQL 函数。
- 版本 1.2.0 源码构建使用 Rust 1.96 与 `cargo-pgrx` 0.19.1。上游支持 PostgreSQL 14 到 18，默认 release gate 目标是 PostgreSQL 17。
