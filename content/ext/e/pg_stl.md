---
title: "pg_stl"
linkTitle: "pg_stl"
description: "PostgreSQL 时间序列分析函数"
weight: 1130
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/nadyaloseva/pg_ts_analysis">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">nadyaloseva/pg_ts_analysis</div>
    <div class="ext-card__desc">https://github.com/nadyaloseva/pg_ts_analysis</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_stl-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_stl-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_stl-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stl`**](/ext/e/pg_stl) | `1.0.0` | <a class="ext-badge ext-badge--cate time" href="/ext/cate/time">TIME</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1130  | [**`pg_stl`**](/ext/e/pg_stl) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`timescaledb`](/ext/e/timescaledb) [`timeseries`](/ext/e/timeseries) [`periods`](/ext/e/periods) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> ACF, PACF, STL decomposition, and Holt-Winters forecasting.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "16,17,18" >}} | `pg_stl` | - |
| [**RPM**](/ext/rpm#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "16,17,18" >}} | `pg_stl_$v` | - |
| [**DEB**](/ext/deb#time) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "16,17,18" >}} | `postgresql-$v-pg-stl` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_stl_18 pg_stl_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stl_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_stl_18 pg_stl_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stl_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_stl_18 pg_stl_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stl_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_stl_18 pg_stl_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stl_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_stl_18 pg_stl_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stl_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_stl_18 pg_stl_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 19.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stl_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 24.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 25.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-stl postgresql-18-pg-stl_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stl/postgresql-18-pg-stl_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_stl_17 pg_stl_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stl_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_stl_17 pg_stl_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stl_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_stl_17 pg_stl_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stl_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_stl_17 pg_stl_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stl_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_stl_17 pg_stl_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stl_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_stl_17 pg_stl_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 19.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stl_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 24.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-stl postgresql-17-pg-stl_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stl/postgresql-17-pg-stl_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_stl_16 pg_stl_16-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 19.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_stl_16-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_stl_16 pg_stl_16-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 18.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_stl_16-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_stl_16 pg_stl_16-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 19.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stl_16-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_stl_16 pg_stl_16-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 19.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stl_16-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_stl_16 pg_stl_16-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 19.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stl_16-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_stl_16 pg_stl_16-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 19.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stl_16-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 24.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 24.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 24.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 24.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 25.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 25.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-stl postgresql-16-pg-stl_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 25.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stl/postgresql-16-pg-stl_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_stl` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_stl         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_stl` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_stl;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_stl -v 18  # PG 18
pig ext install -y pg_stl -v 17  # PG 17
pig ext install -y pg_stl -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_stl_18       # PG 18
dnf install -y pg_stl_17       # PG 17
dnf install -y pg_stl_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-stl   # PG 18
apt install -y postgresql-17-pg-stl   # PG 17
apt install -y postgresql-16-pg-stl   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_stl;
```




## 用法

- 来源：[pg_ts_analysis README](https://github.com/nadyaloseva/pg_ts_analysis)，[SQL definitions](https://github.com/nadyaloseva/pg_ts_analysis/blob/main/pg_stl--1.0.sql)，[control file](https://github.com/nadyaloseva/pg_ts_analysis/blob/main/pg_stl.control)

`pg_stl` 为 PostgreSQL 提供时间序列分析函数：自相关、偏自相关、STL 分解和 Holt-Winters 预测。上游 README 和 SQL 定义面向 PostgreSQL 16+。

### 自相关

`acf_array(data double precision[], lags integer)` 返回 lag `1..lags` 的自相关值：

```sql
CREATE EXTENSION pg_stl;

SELECT acf_array(
  array_agg(revenue ORDER BY date)::double precision[],
  28
)
FROM daily_sales;
```

README 描述了如何把 `7`、`14`、`21` 等 lag 上的峰值作为周周期性的信号。当序列太短、`lags < 1` 或 `lags >= n` 时，该函数返回 `NULL`。

### 偏自相关

`pacf_array(data double precision[], lags integer)` 使用 Durbin-Levinson 递推返回偏自相关值：

```sql
WITH series AS (
  SELECT array_agg(value ORDER BY ts)::double precision[] AS values
  FROM measurements
)
SELECT
  unnest(acf_array(values, 20)) AS acf,
  unnest(pacf_array(values, 20)) AS pacf
FROM series;
```

当你想在扣除较短 lag 的影响后观察某个 lag 的直接关系时，可以使用 PACF。

### STL 分解

`stl_decompose` 会把序列分解为 trend、seasonal 和 residual 三个数组：

```sql
WITH data AS (
  SELECT array_agg(revenue ORDER BY month)::double precision[] AS values
  FROM monthly_revenue
),
decomposed AS (
  SELECT (stl_decompose(values, 12)).*
  FROM data
)
SELECT
  unnest(trend) AS trend,
  unnest(seasonal) AS seasonal,
  unnest(residual) AS residual
FROM decomposed;
```

SQL 定义中的函数签名为：

```sql
stl_decompose(
  y double precision[],
  period integer,
  seasonal integer DEFAULT 7,
  robust boolean DEFAULT true,
  trend integer DEFAULT 0,
  low_pass integer DEFAULT 0,
  inner_iter integer DEFAULT 2,
  outer_iter integer DEFAULT 0
) RETURNS stl_result
```

只需要单个分量时，可以使用便捷函数：

```sql
SELECT stl_trend(values, 12) FROM series;
SELECT stl_seasonal(values, 12) FROM series;
SELECT stl_residual(values, 12) FROM series;
```

### 有序聚合辅助函数

SQL 文件还定义了 `stl_collect_ordered(tbl regclass, val text, ord text)`，用于按顺序把某一列收集为 `double precision[]`：

```sql
SELECT stl_decompose(
  stl_collect_ordered('monthly_revenue'::regclass, 'revenue', 'month'),
  12
);
```

### Holt-Winters 预测

`holt_winters_predict(seasonal_type text, period_length int, start_data_array real[])` 会向前预测一个季节周期。`seasonal_type` 为 `'mult'` 时表示乘法季节性，为 `'add'` 时表示加法季节性：

```sql
SELECT *
FROM holt_winters_predict(
  'mult',
  4,
  (SELECT array_agg(revenue ORDER BY date)::real[] FROM sales)
);
```

SQL 实现会自动选择平滑系数：先进行 500 次随机初始化，再以 `0.001` 步长细化搜索，以最小化平方误差。辅助函数 `holt_winters_mse(...)` 作为预测器使用的误差计算例程一并提供。

### 注意事项

- `stl_decompose` 需要一个不含 `NULL` 的 `double precision[]`。
- README 说明序列长度至少应为 `2 * period`。
- `seasonal` 必须是不小于 `3` 的奇数。
- Holt-Winters 需要 `real[]` 输入，并且只支持 `'mult'` 和 `'add'` 两种季节类型。
