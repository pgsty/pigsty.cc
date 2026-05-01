---
title: "weighted_statistics"
linkTitle: "weighted_statistics"
description: "针对稀疏数据的高性能加权统计量计算"
weight: 4680
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/schmidni/pg_weighted_statistics">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">schmidni/pg_weighted_statistics</div>
    <div class="ext-card__desc">https://github.com/schmidni/pg_weighted_statistics</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_weighted_statistics-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_weighted_statistics-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_weighted_statistics-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_weighted_statistics`**](/ext/e/weighted_statistics) | `1.0.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4680  | [**`weighted_statistics`**](/ext/e/weighted_statistics) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_weighted_statistics` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_weighted_statistics_$v` | - |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-weighted-statistics` | - |
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
@ el8.x86_64 18 pg_weighted_statistics_18 pg_weighted_statistics_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_weighted_statistics_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_weighted_statistics_18 pg_weighted_statistics_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_weighted_statistics_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_weighted_statistics_18 pg_weighted_statistics_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 26.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_weighted_statistics_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_weighted_statistics_18 pg_weighted_statistics_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 26.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_weighted_statistics_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_weighted_statistics_18 pg_weighted_statistics_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 26.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_weighted_statistics_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_weighted_statistics_18 pg_weighted_statistics_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 26.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_weighted_statistics_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 34.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 34.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 34.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 33.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 35.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 35.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 35.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 34.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 34.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-weighted-statistics postgresql-18-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 34.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-18-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_weighted_statistics_17 pg_weighted_statistics_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_weighted_statistics_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_weighted_statistics_17 pg_weighted_statistics_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_weighted_statistics_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_weighted_statistics_17 pg_weighted_statistics_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 26.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_weighted_statistics_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_weighted_statistics_17 pg_weighted_statistics_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 26.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_weighted_statistics_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_weighted_statistics_17 pg_weighted_statistics_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 26.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_weighted_statistics_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_weighted_statistics_17 pg_weighted_statistics_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 26.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_weighted_statistics_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 34.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 34.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 34.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 33.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 36.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 36.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 35.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 34.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 34.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-weighted-statistics postgresql-17-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 34.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-17-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_weighted_statistics_16 pg_weighted_statistics_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_weighted_statistics_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_weighted_statistics_16 pg_weighted_statistics_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_weighted_statistics_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_weighted_statistics_16 pg_weighted_statistics_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 26.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_weighted_statistics_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_weighted_statistics_16 pg_weighted_statistics_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 26.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_weighted_statistics_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_weighted_statistics_16 pg_weighted_statistics_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 26.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_weighted_statistics_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_weighted_statistics_16 pg_weighted_statistics_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 26.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_weighted_statistics_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 34.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 34.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 34.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 33.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 36.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 36.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 35.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 34.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 34.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-weighted-statistics postgresql-16-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 34.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-16-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pg_weighted_statistics_15 pg_weighted_statistics_15-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_weighted_statistics_15-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_weighted_statistics_15 pg_weighted_statistics_15-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_weighted_statistics_15-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_weighted_statistics_15 pg_weighted_statistics_15-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_weighted_statistics_15-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_weighted_statistics_15 pg_weighted_statistics_15-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 25.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_weighted_statistics_15-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_weighted_statistics_15 pg_weighted_statistics_15-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 26.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_weighted_statistics_15-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_weighted_statistics_15 pg_weighted_statistics_15-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 25.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_weighted_statistics_15-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 34.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 34.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 34.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 33.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 35.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 35.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 35.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 34.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 34.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-weighted-statistics postgresql-15-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 34.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-15-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pg_weighted_statistics_14 pg_weighted_statistics_14-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_weighted_statistics_14-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_weighted_statistics_14 pg_weighted_statistics_14-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 24.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_weighted_statistics_14-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_weighted_statistics_14 pg_weighted_statistics_14-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_weighted_statistics_14-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_weighted_statistics_14 pg_weighted_statistics_14-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 25.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_weighted_statistics_14-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_weighted_statistics_14 pg_weighted_statistics_14-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 26.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_weighted_statistics_14-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_weighted_statistics_14 pg_weighted_statistics_14-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 25.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_weighted_statistics_14-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 34.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 34.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 34.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 33.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 35.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 35.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 35.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 34.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 34.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-weighted-statistics postgresql-14-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 34.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-weighted-statistics/postgresql-14-weighted-statistics_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_weighted_statistics` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_weighted_statistics         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_weighted_statistics` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_weighted_statistics;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_weighted_statistics -v 18  # PG 18
pig ext install -y pg_weighted_statistics -v 17  # PG 17
pig ext install -y pg_weighted_statistics -v 16  # PG 16
pig ext install -y pg_weighted_statistics -v 15  # PG 15
pig ext install -y pg_weighted_statistics -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_weighted_statistics_18       # PG 18
dnf install -y pg_weighted_statistics_17       # PG 17
dnf install -y pg_weighted_statistics_16       # PG 16
dnf install -y pg_weighted_statistics_15       # PG 15
dnf install -y pg_weighted_statistics_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-weighted-statistics   # PG 18
apt install -y postgresql-17-weighted-statistics   # PG 17
apt install -y postgresql-16-weighted-statistics   # PG 16
apt install -y postgresql-15-weighted-statistics   # PG 15
apt install -y postgresql-14-weighted-statistics   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION weighted_statistics;
```



## 用法

> [weighted_statistics: PostgreSQL 的加权统计函数](https://github.com/schmidni/pg_weighted_statistics)

高性能 C 扩展，提供加权统计函数，具有自动稀疏数据处理能力（当 `sum(weights) < 1.0` 时）。

```sql
CREATE EXTENSION weighted_statistics;
```

### 函数

| 函数 | 描述 |
|---|---|
| `weighted_mean(values[], weights[])` | 加权平均值 |
| `weighted_variance(values[], weights[], ddof)` | 加权方差（ddof：0=总体，1=样本） |
| `weighted_std(values[], weights[], ddof)` | 加权标准差 |
| `weighted_quantile(values[], weights[], quantiles[])` | 经验 CDF 分位数 |
| `wquantile(values[], weights[], quantiles[])` | 第 7 类（Hyndman-Fan）分位数 |
| `whdquantile(values[], weights[], quantiles[])` | Harrell-Davis 分位数 |
| `weighted_median(values[], weights[])` | 第 50 百分位数快捷方式（经验 CDF） |

### 示例

```sql
-- 加权平均值
SELECT weighted_mean(ARRAY[1.0, 2.0, 3.0], ARRAY[0.2, 0.3, 0.5]);
-- 2.3

-- 加权分位数
SELECT weighted_quantile(ARRAY[10.0, 20.0, 30.0], ARRAY[0.3, 0.4, 0.3], ARRAY[0.25, 0.5, 0.75]);
-- {15.0, 20.0, 25.0}

-- 稀疏数据（当 sum(weights) < 1.0 时自动添加隐式零值）
SELECT weighted_mean(ARRAY[10, 20], ARRAY[0.2, 0.3]);
-- 8.0（等价于 weighted_mean(ARRAY[10, 20, 0, 0], ARRAY[0.2, 0.3, 0.25, 0.25])）

-- 多种统计量
SELECT weighted_mean(vals, weights),
       weighted_std(vals, weights, 1),
       weighted_quantile(vals, weights, ARRAY[0.05, 0.95])
FROM (SELECT array_agg(val) AS vals, array_agg(weight) AS weights FROM data) t;
```
