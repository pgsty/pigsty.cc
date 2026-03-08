---
title: "count_distinct"
linkTitle: "count_distinct"
description: "COUNT(DISTINCT …) 聚合的替代方案"
weight: 4630
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/tvondra/count_distinct">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">tvondra/count_distinct</div>
    <div class="ext-card__desc">https://github.com/tvondra/count_distinct</div>
  </a>
  <a class="ext-card ext-card--source" href="count_distinct-3.0.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">count_distinct-3.0.2.tar.gz</div>
    <div class="ext-card__desc">count_distinct-3.0.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`count_distinct`**](/ext/e/count_distinct) | `3.0.2` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4630  | [**`count_distinct`**](/ext/e/count_distinct) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`topn`](/ext/e/topn) [`hll`](/ext/e/hll) [`omnisketch`](/ext/e/omnisketch) [`ddsketch`](/ext/e/ddsketch) [`quantile`](/ext/e/quantile) [`lower_quantile`](/ext/e/lower_quantile) [`first_last_agg`](/ext/e/first_last_agg) [`aggs_for_arrays`](/ext/e/aggs_for_arrays) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> no pg14 on el8/9 pgdg


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | `3.0.2` | {{< pgvers "18,17,16,15,14" >}} | `count_distinct` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.2` | {{< pgvers "18,17,16,15,14" >}} | `count_distinct_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `3.0.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-count-distinct` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 |
| el8.aarch64 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 |
| el9.x86_64 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 1 |
| el9.aarch64 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 |
| el10.x86_64 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 |
| el10.aarch64 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 | AVAIL PIGSTY 3.0.2 2 |
| d12.x86_64 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 |
| d12.aarch64 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 |
| d13.x86_64 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 |
| d13.aarch64 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 |
| u22.x86_64 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 |
| u22.aarch64 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 |
| u24.x86_64 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 |
| u24.aarch64 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 | AVAIL PIGSTY 3.0.2 1 |
@ el8.x86_64 18 count_distinct_18 count_distinct_18-3.0.2-1PIGSTY.el8.x86_64.rpm pigsty 3.0.2 16.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/count_distinct_18-3.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 count_distinct_18 count_distinct_18-3.0.2-1PGDG.rhel8.x86_64.rpm pgdg 3.0.2 23.1KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/count_distinct_18-3.0.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 count_distinct_18 count_distinct_18-3.0.2-1PIGSTY.el8.aarch64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/count_distinct_18-3.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 count_distinct_18 count_distinct_18-3.0.2-1PGDG.rhel8.aarch64.rpm pgdg 3.0.2 22.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/count_distinct_18-3.0.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 count_distinct_18 count_distinct_18-3.0.2-1PIGSTY.el9.x86_64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/count_distinct_18-3.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 count_distinct_18 count_distinct_18-3.0.2-1PGDG.rhel9.x86_64.rpm pgdg 3.0.2 22.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/count_distinct_18-3.0.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 count_distinct_18 count_distinct_18-3.0.2-1PIGSTY.el9.aarch64.rpm pigsty 3.0.2 16.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/count_distinct_18-3.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 count_distinct_18 count_distinct_18-3.0.2-1PGDG.rhel9.aarch64.rpm pgdg 3.0.2 22.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/count_distinct_18-3.0.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 count_distinct_18 count_distinct_18-3.0.2-1PIGSTY.el10.x86_64.rpm pigsty 3.0.2 16.7KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/count_distinct_18-3.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 count_distinct_18 count_distinct_18-3.0.2-1PGDG.rhel10.x86_64.rpm pgdg 3.0.2 23.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/count_distinct_18-3.0.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 count_distinct_18 count_distinct_18-3.0.2-1PIGSTY.el10.aarch64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/count_distinct_18-3.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 count_distinct_18 count_distinct_18-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 22.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/count_distinct_18-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-count-distinct postgresql-18-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb pigsty 3.0.2 34.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-18-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-count-distinct postgresql-18-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb pigsty 3.0.2 34.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-18-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-count-distinct postgresql-18-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb pigsty 3.0.2 34.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-18-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-count-distinct postgresql-18-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb pigsty 3.0.2 34.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-18-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-count-distinct postgresql-18-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb pigsty 3.0.2 36.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-18-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-count-distinct postgresql-18-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb pigsty 3.0.2 36.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-18-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-count-distinct postgresql-18-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb pigsty 3.0.2 35.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-18-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-count-distinct postgresql-18-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb pigsty 3.0.2 35.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-18-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 count_distinct_17 count_distinct_17-3.0.2-1PIGSTY.el8.x86_64.rpm pigsty 3.0.2 16.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/count_distinct_17-3.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 count_distinct_17 count_distinct_17-3.0.1-6PGDG.rhel8.x86_64.rpm pgdg 3.0.1 20.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/count_distinct_17-3.0.1-6PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 count_distinct_17 count_distinct_17-3.0.2-1PIGSTY.el8.aarch64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/count_distinct_17-3.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 count_distinct_17 count_distinct_17-3.0.1-6PGDG.rhel8.aarch64.rpm pgdg 3.0.1 20.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/count_distinct_17-3.0.1-6PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 count_distinct_17 count_distinct_17-3.0.2-1PIGSTY.el9.x86_64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/count_distinct_17-3.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 count_distinct_17 count_distinct_17-3.0.1-6PGDG.rhel9.x86_64.rpm pgdg 3.0.1 20.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/count_distinct_17-3.0.1-6PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 count_distinct_17 count_distinct_17-3.0.2-1PIGSTY.el9.aarch64.rpm pigsty 3.0.2 16.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/count_distinct_17-3.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 count_distinct_17 count_distinct_17-3.0.1-6PGDG.rhel9.aarch64.rpm pgdg 3.0.1 20.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/count_distinct_17-3.0.1-6PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 count_distinct_17 count_distinct_17-3.0.2-1PIGSTY.el10.x86_64.rpm pigsty 3.0.2 16.7KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/count_distinct_17-3.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 count_distinct_17 count_distinct_17-3.0.2-1PGDG.rhel10.x86_64.rpm pgdg 3.0.2 23.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/count_distinct_17-3.0.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 count_distinct_17 count_distinct_17-3.0.2-1PIGSTY.el10.aarch64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/count_distinct_17-3.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 count_distinct_17 count_distinct_17-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 22.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/count_distinct_17-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-count-distinct postgresql-17-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb pigsty 3.0.2 34.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-17-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-count-distinct postgresql-17-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb pigsty 3.0.2 34.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-17-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-count-distinct postgresql-17-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb pigsty 3.0.2 34.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-17-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-count-distinct postgresql-17-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb pigsty 3.0.2 34.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-17-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-count-distinct postgresql-17-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb pigsty 3.0.2 37.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-17-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-count-distinct postgresql-17-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb pigsty 3.0.2 37.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-17-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-count-distinct postgresql-17-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb pigsty 3.0.2 35.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-17-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-count-distinct postgresql-17-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb pigsty 3.0.2 35.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-17-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 count_distinct_16 count_distinct_16-3.0.2-1PIGSTY.el8.x86_64.rpm pigsty 3.0.2 16.8KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/count_distinct_16-3.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 count_distinct_16 count_distinct_16-3.0.1-5PGDG.rhel8.x86_64.rpm pgdg 3.0.1 20.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/count_distinct_16-3.0.1-5PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 count_distinct_16 count_distinct_16-3.0.2-1PIGSTY.el8.aarch64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/count_distinct_16-3.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 count_distinct_16 count_distinct_16-3.0.1-5PGDG.rhel8.aarch64.rpm pgdg 3.0.1 20.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/count_distinct_16-3.0.1-5PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 count_distinct_16 count_distinct_16-3.0.2-1PIGSTY.el9.x86_64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/count_distinct_16-3.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 count_distinct_16 count_distinct_16-3.0.1-5PGDG.rhel9.x86_64.rpm pgdg 3.0.1 20.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/count_distinct_16-3.0.1-5PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 count_distinct_16 count_distinct_16-3.0.2-1PIGSTY.el9.aarch64.rpm pigsty 3.0.2 16.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/count_distinct_16-3.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 count_distinct_16 count_distinct_16-3.0.1-5PGDG.rhel9.aarch64.rpm pgdg 3.0.1 19.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/count_distinct_16-3.0.1-5PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 count_distinct_16 count_distinct_16-3.0.2-1PIGSTY.el10.x86_64.rpm pigsty 3.0.2 16.7KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/count_distinct_16-3.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 count_distinct_16 count_distinct_16-3.0.2-1PGDG.rhel10.x86_64.rpm pgdg 3.0.2 23.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/count_distinct_16-3.0.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 count_distinct_16 count_distinct_16-3.0.2-1PIGSTY.el10.aarch64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/count_distinct_16-3.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 count_distinct_16 count_distinct_16-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 22.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/count_distinct_16-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-count-distinct postgresql-16-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb pigsty 3.0.2 34.7KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-16-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-count-distinct postgresql-16-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb pigsty 3.0.2 34.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-16-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-count-distinct postgresql-16-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb pigsty 3.0.2 34.7KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-16-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-count-distinct postgresql-16-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb pigsty 3.0.2 34.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-16-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-count-distinct postgresql-16-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb pigsty 3.0.2 37.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-16-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-count-distinct postgresql-16-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb pigsty 3.0.2 37.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-16-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-count-distinct postgresql-16-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb pigsty 3.0.2 35.7KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-16-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-count-distinct postgresql-16-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb pigsty 3.0.2 35.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-16-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 count_distinct_15 count_distinct_15-3.0.2-1PIGSTY.el8.x86_64.rpm pigsty 3.0.2 16.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/count_distinct_15-3.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 count_distinct_15 count_distinct_15-3.0.1-3.rhel8.x86_64.rpm pgdg 3.0.1 31.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/count_distinct_15-3.0.1-3.rhel8.x86_64.rpm
@ el8.aarch64 15 count_distinct_15 count_distinct_15-3.0.2-1PIGSTY.el8.aarch64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/count_distinct_15-3.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 count_distinct_15 count_distinct_15-3.0.1-3.rhel8.aarch64.rpm pgdg 3.0.1 31.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/count_distinct_15-3.0.1-3.rhel8.aarch64.rpm
@ el9.x86_64 15 count_distinct_15 count_distinct_15-3.0.2-1PIGSTY.el9.x86_64.rpm pigsty 3.0.2 16.7KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/count_distinct_15-3.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 count_distinct_15 count_distinct_15-3.0.1-3.rhel9.x86_64.rpm pgdg 3.0.1 32.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/count_distinct_15-3.0.1-3.rhel9.x86_64.rpm
@ el9.aarch64 15 count_distinct_15 count_distinct_15-3.0.2-1PIGSTY.el9.aarch64.rpm pigsty 3.0.2 16.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/count_distinct_15-3.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 count_distinct_15 count_distinct_15-3.0.1-3.rhel9.aarch64.rpm pgdg 3.0.1 31.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/count_distinct_15-3.0.1-3.rhel9.aarch64.rpm
@ el10.x86_64 15 count_distinct_15 count_distinct_15-3.0.2-1PIGSTY.el10.x86_64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/count_distinct_15-3.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 count_distinct_15 count_distinct_15-3.0.2-1PGDG.rhel10.x86_64.rpm pgdg 3.0.2 23.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/count_distinct_15-3.0.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 count_distinct_15 count_distinct_15-3.0.2-1PIGSTY.el10.aarch64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/count_distinct_15-3.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 count_distinct_15 count_distinct_15-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 22.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/count_distinct_15-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-count-distinct postgresql-15-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb pigsty 3.0.2 34.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-15-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-count-distinct postgresql-15-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb pigsty 3.0.2 34.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-15-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-count-distinct postgresql-15-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb pigsty 3.0.2 34.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-15-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-count-distinct postgresql-15-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb pigsty 3.0.2 34.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-15-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-count-distinct postgresql-15-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb pigsty 3.0.2 37.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-15-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-count-distinct postgresql-15-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb pigsty 3.0.2 37.1KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-15-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-count-distinct postgresql-15-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb pigsty 3.0.2 35.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-15-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-count-distinct postgresql-15-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb pigsty 3.0.2 35.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-15-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 count_distinct_14 count_distinct_14-3.0.2-1PIGSTY.el8.x86_64.rpm pigsty 3.0.2 16.7KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/count_distinct_14-3.0.2-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 count_distinct_14 count_distinct_14-3.0.1-3.rhel8.x86_64.rpm pgdg 3.0.1 32.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/count_distinct_14-3.0.1-3.rhel8.x86_64.rpm
@ el8.aarch64 14 count_distinct_14 count_distinct_14-3.0.2-1PIGSTY.el8.aarch64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/count_distinct_14-3.0.2-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 count_distinct_14 count_distinct_14-3.0.1-3.rhel8.aarch64.rpm pgdg 3.0.1 31.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/count_distinct_14-3.0.1-3.rhel8.aarch64.rpm
@ el9.x86_64 14 count_distinct_14 count_distinct_14-3.0.2-1PIGSTY.el9.x86_64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/count_distinct_14-3.0.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 count_distinct_14 count_distinct_14-3.0.2-1PIGSTY.el9.aarch64.rpm pigsty 3.0.2 16.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/count_distinct_14-3.0.2-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 count_distinct_14 count_distinct_14-3.0.1-3.rhel9.aarch64.rpm pgdg 3.0.1 31.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/count_distinct_14-3.0.1-3.rhel9.aarch64.rpm
@ el10.x86_64 14 count_distinct_14 count_distinct_14-3.0.2-1PIGSTY.el10.x86_64.rpm pigsty 3.0.2 16.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/count_distinct_14-3.0.2-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 count_distinct_14 count_distinct_14-3.0.2-1PGDG.rhel10.x86_64.rpm pgdg 3.0.2 23.2KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/count_distinct_14-3.0.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 count_distinct_14 count_distinct_14-3.0.2-1PIGSTY.el10.aarch64.rpm pigsty 3.0.2 16.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/count_distinct_14-3.0.2-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 count_distinct_14 count_distinct_14-3.0.2-1PGDG.rhel10.aarch64.rpm pgdg 3.0.2 22.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/count_distinct_14-3.0.2-1PGDG.rhel10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-count-distinct postgresql-14-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb pigsty 3.0.2 34.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-14-count-distinct_3.0.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-count-distinct postgresql-14-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb pigsty 3.0.2 34.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/c/count-distinct/postgresql-14-count-distinct_3.0.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-count-distinct postgresql-14-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb pigsty 3.0.2 34.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-14-count-distinct_3.0.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-count-distinct postgresql-14-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb pigsty 3.0.2 34.3KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/c/count-distinct/postgresql-14-count-distinct_3.0.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-count-distinct postgresql-14-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb pigsty 3.0.2 37.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-14-count-distinct_3.0.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-count-distinct postgresql-14-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb pigsty 3.0.2 37.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/c/count-distinct/postgresql-14-count-distinct_3.0.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-count-distinct postgresql-14-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb pigsty 3.0.2 35.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-14-count-distinct_3.0.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-count-distinct postgresql-14-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb pigsty 3.0.2 35.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/c/count-distinct/postgresql-14-count-distinct_3.0.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `count_distinct` 扩展的 RPM / DEB 包：

```bash
pig build pkg count_distinct         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `count_distinct` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install count_distinct;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y count_distinct -v 18  # PG 18
pig ext install -y count_distinct -v 17  # PG 17
pig ext install -y count_distinct -v 16  # PG 16
pig ext install -y count_distinct -v 15  # PG 15
pig ext install -y count_distinct -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y count_distinct_18       # PG 18
dnf install -y count_distinct_17       # PG 17
dnf install -y count_distinct_16       # PG 16
dnf install -y count_distinct_15       # PG 15
dnf install -y count_distinct_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-count-distinct   # PG 18
apt install -y postgresql-17-count-distinct   # PG 17
apt install -y postgresql-16-count-distinct   # PG 16
apt install -y postgresql-15-count-distinct   # PG 15
apt install -y postgresql-14-count-distinct   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION count_distinct;
```
