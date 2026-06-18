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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pggraph-0.1.7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pggraph-0.1.7.tar.gz</div>
    <div class="ext-card__desc">pggraph-0.1.7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pggraph`**](/ext/e/graph) | `0.1.7` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2630  | [**`graph`**](/ext/e/graph) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`agtype`](/ext/e/agtype) [`pg_graphql`](/ext/e/pg_graphql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGXN distribution and package are pggraph; installed extension name is graph.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.7` | {{< pgvers "14,15,16,17,18" >}} | `pggraph` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.7` | {{< pgvers "14,15,16,17,18" >}} | `pggraph_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.7` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-pggraph` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 | AVAIL PIGSTY 0.1.7 1 |
@ el8.x86_64 18 pggraph_18 pggraph_18-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_18-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pggraph_18 pggraph_18-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_18-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pggraph_18 pggraph_18-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_18-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pggraph_18 pggraph_18-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_18-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pggraph_18 pggraph_18-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 3.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_18-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pggraph_18 pggraph_18-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_18-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~noble_amd64.deb pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~noble_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pggraph postgresql-18-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-18-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pggraph_17 pggraph_17-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_17-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pggraph_17 pggraph_17-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_17-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pggraph_17 pggraph_17-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_17-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pggraph_17 pggraph_17-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_17-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pggraph_17 pggraph_17-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_17-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pggraph_17 pggraph_17-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_17-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~noble_amd64.deb pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~noble_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pggraph postgresql-17-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-17-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pggraph_16 pggraph_16-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_16-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pggraph_16 pggraph_16-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_16-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pggraph_16 pggraph_16-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_16-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pggraph_16 pggraph_16-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_16-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pggraph_16 pggraph_16-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_16-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pggraph_16 pggraph_16-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_16-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~noble_amd64.deb pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~noble_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pggraph postgresql-16-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-16-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pggraph_15 pggraph_15-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_15-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pggraph_15 pggraph_15-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_15-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pggraph_15 pggraph_15-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_15-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pggraph_15 pggraph_15-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_15-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pggraph_15 pggraph_15-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_15-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pggraph_15 pggraph_15-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_15-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~noble_amd64.deb pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~noble_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pggraph postgresql-15-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb pigsty 0.1.7 2.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-15-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pggraph_14 pggraph_14-0.1.7-1PIGSTY.el8.x86_64.rpm pigsty 0.1.7 3.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pggraph_14-0.1.7-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pggraph_14 pggraph_14-0.1.7-1PIGSTY.el8.aarch64.rpm pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pggraph_14-0.1.7-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pggraph_14 pggraph_14-0.1.7-1PIGSTY.el9.x86_64.rpm pigsty 0.1.7 3.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pggraph_14-0.1.7-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pggraph_14 pggraph_14-0.1.7-1PIGSTY.el9.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pggraph_14-0.1.7-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pggraph_14 pggraph_14-0.1.7-1PIGSTY.el10.x86_64.rpm pigsty 0.1.7 3.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pggraph_14-0.1.7-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pggraph_14 pggraph_14-0.1.7-1PIGSTY.el10.aarch64.rpm pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pggraph_14-0.1.7-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb pigsty 0.1.7 2.1MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb pigsty 0.1.7 2.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb pigsty 0.1.7 2.5MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~noble_amd64.deb pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~noble_arm64.deb pigsty 0.1.7 2.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb pigsty 0.1.7 2.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pggraph postgresql-14-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb pigsty 0.1.7 2.4MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pggraph/postgresql-14-pggraph_0.1.7-2PIGSTY~resolute_arm64.deb
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pggraph;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pggraph -v 18  # PG 18
pig ext install -y pggraph -v 17  # PG 17
pig ext install -y pggraph -v 16  # PG 16
pig ext install -y pggraph -v 15  # PG 15
pig ext install -y pggraph -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pggraph_18       # PG 18
dnf install -y pggraph_17       # PG 17
dnf install -y pggraph_16       # PG 16
dnf install -y pggraph_15       # PG 15
dnf install -y pggraph_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pggraph   # PG 18
apt install -y postgresql-17-pggraph   # PG 17
apt install -y postgresql-16-pggraph   # PG 16
apt install -y postgresql-15-pggraph   # PG 15
apt install -y postgresql-14-pggraph   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION graph;
```

来源：[pgGraph v0.1.7 README](https://github.com/Evokoa/pgGraph/blob/v0.1.7/README.md)、[Quickstart](https://github.com/Evokoa/pgGraph/blob/v0.1.7/docs/quickstart.mdx)、[SQL API Reference](https://github.com/Evokoa/pgGraph/blob/v0.1.7/docs/user_guide/api-reference.mdx)、[Schema Registration](https://github.com/Evokoa/pgGraph/blob/v0.1.7/docs/user_guide/schema-registration.mdx)、[Configuration](https://github.com/Evokoa/pgGraph/blob/v0.1.7/docs/user_guide/configuration.mdx)。

## 用法

`pggraph` 是包名与 PGXN 发行名，但安装到 PostgreSQL 中的扩展名是 `graph`。该扩展会从普通 PostgreSQL 表构建派生图索引，并以这些表作为事实来源，通过 `graph` schema 提供图搜索、遍历、GQL 风格模式读取和路径函数。

上游项目将 v0.1.7 标记为早期 alpha。建议先在可丢弃或开发数据库中使用，并从源表重建图，而不是把生成的图产物当作权威数据。

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

SELECT node_count, edge_count, edge_types
FROM graph.status();
```

`graph.auto_discover('public')` 会扫描该 schema 中的主键和外键，注册发现到的源表与边，然后构建图。对于生产 schema，建议使用显式注册，确保标签、搜索列、权重和租户行为都经过有意设计。

### 手工注册

```sql
SELECT graph.reset();

SELECT graph.add_table(
  table_name := 'public.people'::regclass,
  id_column  := 'id',
  columns    := ARRAY['name']
);

SELECT graph.add_table(
  table_name := 'public.companies'::regclass,
  id_column  := 'id',
  columns    := ARRAY['name']
);

SELECT graph.add_edge(
  from_table    := 'public.people'::regclass,
  from_column   := 'company_id',
  to_table      := 'public.companies'::regclass,
  to_column     := 'id',
  label         := 'works_at',
  bidirectional := true
);

SELECT * FROM graph.build();
```

节点标识符必须匹配主键，或匹配唯一的 `NOT NULL` 索引。`columns` 控制可用于搜索和 GQL 的源表属性。遍历过滤下推需要通过单独的 `graph.add_filter_column()` 注册。

### 搜索、遍历与路径

```sql
SELECT node_table_name, node_id, node
FROM graph.search(
  property_key  := 'name',
  property_value := 'Alice',
  table_filter  := 'public.people'::regclass,
  mode          := 'exact',
  hydrate       := true
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

`hydrate := false` 返回紧凑的图坐标。启用 hydration 后，源行可见性仍由 PostgreSQL ACL 和 RLS 控制，过期坐标会失败关闭，而不会伪造行。

### GQL 查询

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

`graph.gql()` 为每条 SQL 行返回一个 `jsonb` 对象。节点标签映射到已注册的表名，关系类型映射到已注册的边标签。支持的 GQL/openCypher 子集覆盖常见读取、有界路径、部分聚合，以及在启用 mutable overlay 时的窄范围映射写入。

### 运维注意事项

- 注册信息变更后，或源表发生所选同步模式未覆盖的变化后，需要用 `graph.build()` 重建。
- 动态边标签使用紧凑 ID；v0.1.7 最多支持 254 个面向用户的边标签。
- 加权最短路径需要数值型 `weight_column`；缺失或 NULL 的权重默认为 `1`。
- 重要 GUC 包括 `graph.max_nodes`、`graph.max_frontier`、`graph.memory_limit_mb`、`graph.query_freshness`、`graph.default_projection_mode` 和 `graph.mutable_enabled`。
- 映射式 GQL 写入需要 `graph.default_projection_mode = 'mutable_overlay'` 且 `graph.mutable_enabled = on`。
