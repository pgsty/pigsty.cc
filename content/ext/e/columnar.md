---
title: "columnar"
linkTitle: "columnar"
description: "开源列式存储扩展"
weight: 2410
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/hydradatabase/hydra">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">hydradatabase/hydra</div>
    <div class="ext-card__desc">https://github.com/hydradatabase/hydra</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/hydra-1.1.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">hydra-1.1.2.tar.gz</div>
    <div class="ext-card__desc">hydra-1.1.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`hydra`**](/ext/e/columnar) | `1.1.2` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license agpl30" href="/ext/license#agpl30">AGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2410  | [**`columnar`**](/ext/e/columnar) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`citus`](/ext/e/citus) [`citus_columnar`](/ext/e/citus_columnar) [`pg_mooncake`](/ext/e/pg_mooncake) [`timescaledb`](/ext/e/timescaledb) [`pg_analytics`](/ext/e/pg_analytics) [`pg_parquet`](/ext/e/pg_parquet) [`pg_duckdb`](/ext/e/pg_duckdb) [`duckdb_fdw`](/ext/e/duckdb_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> conflict with citus columnar, obsolete, no longer maintained


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.2` | {{< pgvers "16,15,14" >}} | `hydra` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.2` | {{< pgvers "16,15,14" >}} | `hydra_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.2` | {{< pgvers "16,15,14" >}} | `postgresql-$v-hydra` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el9.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el9.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d12.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d12.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u22.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u22.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u24.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u24.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
@ el8.x86_64 16 hydra_16 hydra_16-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 143.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hydra_16-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 hydra_16 hydra_16-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 136.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hydra_16-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 hydra_16 hydra_16-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 116.2KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hydra_16-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 hydra_16 hydra_16-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 112.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hydra_16-1.1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 hydra_16 hydra_16-1.1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.1.2 118.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hydra_16-1.1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 hydra_16 hydra_16-1.1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.1.2 113.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hydra_16-1.1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.1.2 354.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.1.2 409.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~trixie_amd64.deb pigsty 1.1.2 355.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~trixie_arm64.deb pigsty 1.1.2 347.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~jammy_amd64.deb pigsty 1.1.2 430.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~jammy_arm64.deb pigsty 1.1.2 425.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~noble_amd64.deb pigsty 1.1.2 359.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~noble_arm64.deb pigsty 1.1.2 363.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~resolute_amd64.deb pigsty 1.1.2 358.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-hydra postgresql-16-hydra_1.1.2-1PIGSTY~resolute_arm64.deb pigsty 1.1.2 355.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hydra/postgresql-16-hydra_1.1.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 hydra_15 hydra_15-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 146.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hydra_15-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 hydra_15 hydra_15-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 140.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hydra_15-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 hydra_15 hydra_15-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 136.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hydra_15-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 hydra_15 hydra_15-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 131.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hydra_15-1.1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 hydra_15 hydra_15-1.1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.1.2 138.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hydra_15-1.1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 hydra_15 hydra_15-1.1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.1.2 132.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hydra_15-1.1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.1.2 358.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.1.2 412.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~trixie_amd64.deb pigsty 1.1.2 359.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~trixie_arm64.deb pigsty 1.1.2 349.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~jammy_amd64.deb pigsty 1.1.2 449.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~jammy_arm64.deb pigsty 1.1.2 443.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~noble_amd64.deb pigsty 1.1.2 377.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~noble_arm64.deb pigsty 1.1.2 381.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~resolute_amd64.deb pigsty 1.1.2 375.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-hydra postgresql-15-hydra_1.1.2-1PIGSTY~resolute_arm64.deb pigsty 1.1.2 371.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hydra/postgresql-15-hydra_1.1.2-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 hydra_14 hydra_14-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 146.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hydra_14-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 hydra_14 hydra_14-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 140.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hydra_14-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 hydra_14 hydra_14-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 137.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hydra_14-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 hydra_14 hydra_14-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 131.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hydra_14-1.1.2-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 hydra_14 hydra_14-1.1.2-1PIGSTY.el10.x86_64.rpm pigsty 1.1.2 138.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hydra_14-1.1.2-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 hydra_14 hydra_14-1.1.2-1PIGSTY.el10.aarch64.rpm pigsty 1.1.2 133.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hydra_14-1.1.2-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.1.2 359.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.1.2 414.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~trixie_amd64.deb pigsty 1.1.2 360.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~trixie_arm64.deb pigsty 1.1.2 350.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~jammy_amd64.deb pigsty 1.1.2 451.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~jammy_arm64.deb pigsty 1.1.2 444.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~noble_amd64.deb pigsty 1.1.2 378.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~noble_arm64.deb pigsty 1.1.2 382.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~resolute_amd64.deb pigsty 1.1.2 376.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-hydra postgresql-14-hydra_1.1.2-1PIGSTY~resolute_arm64.deb pigsty 1.1.2 372.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hydra/postgresql-14-hydra_1.1.2-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `hydra` 扩展的 RPM / DEB 包：

```bash
pig build pkg hydra         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `hydra` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install hydra;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y hydra -v 16  # PG 16
pig ext install -y hydra -v 15  # PG 15
pig ext install -y hydra -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y hydra_16       # PG 16
dnf install -y hydra_15       # PG 15
dnf install -y hydra_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-16-hydra   # PG 16
apt install -y postgresql-15-hydra   # PG 15
apt install -y postgresql-14-hydra   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION columnar;
```




## 用法

来源：

- [Hydra v1.1.2 README](https://github.com/hydradatabase/columnar/blob/v1.1.2/README.md)
- [Hydra Columnar README](https://github.com/hydradatabase/columnar/blob/v1.1.2/columnar/README.md)
- [Columnar storage README](https://github.com/hydradatabase/columnar/blob/v1.1.2/columnar/src/backend/columnar/README.md)
- [columnar.control](https://github.com/hydradatabase/columnar/blob/v1.1.2/columnar/src/backend/columnar/columnar.control)
- [CHANGELOG 1.1.2](https://github.com/hydradatabase/columnar/blob/v1.1.2/CHANGELOG.md)

> [!WARNING]
> `columnar` 是 PostgreSQL 扩展名，Pigsty 中的包名是 `hydra`。Pigsty 元数据已将该扩展标记为 obsolete / no longer maintained；本地包仅保留 PostgreSQL 14-16。新项目应优先选择仍在维护的分析类扩展。

Hydra Columnar 是 PostgreSQL 的列式表访问方法。它把指定表存为列式格式，用于降低分析扫描、压缩型数据集、少量列投影和聚合查询的 I/O 成本。该扩展源自 Citus Columnar，并通过 `CREATE EXTENSION columnar` 暴露。

### 创建列式表

```sql
CREATE EXTENSION IF NOT EXISTS columnar;

CREATE TABLE events_columnar (
  event_id     bigint,
  account_id   bigint,
  event_time   timestamptz,
  event_type   text,
  amount       numeric
) USING columnar;

INSERT INTO events_columnar
SELECT
  g,
  g % 10000,
  now() - (g || ' seconds')::interval,
  CASE WHEN g % 10 = 0 THEN 'purchase' ELSE 'view' END,
  (g % 1000)::numeric / 10
FROM generate_series(1, 1000000) AS g;

SELECT event_type, count(*), sum(amount)
FROM events_columnar
WHERE event_time >= now() - interval '1 day'
GROUP BY event_type;
```

创建表或物化视图时使用 `USING columnar`。读取和批量写入仍使用普通 PostgreSQL SQL，但底层存储更适合大规模分析扫描，不适合作为高频 OLTP 表的默认选择。

### 表选项

```sql
SELECT columnar.alter_columnar_table_set(
  'events_columnar'::regclass,
  compression           => 'zstd',
  compression_level     => 3,
  stripe_row_limit      => 150000,
  chunk_group_row_limit => 10000
);

SELECT * FROM columnar.options;

SELECT columnar.alter_columnar_table_reset(
  'events_columnar'::regclass,
  compression => true,
  stripe_row_limit => true
);
```

可配置项包括 `compression`、`compression_level`、`stripe_row_limit` 和 `chunk_group_row_limit`。可用压缩算法取决于构建方式，文档中列出的值包括 `none`、`pglz`、`zstd`、`lz4` 和 `lz4hc`。表选项变化只影响之后写入的数据；已有 stripe 不会自动重写。

也可以用 GUC 设置新建列式表的默认值：

```sql
SET columnar.compression = 'zstd';
SET columnar.compression_level = 3;
SET columnar.stripe_row_limit = 150000;
SET columnar.chunk_group_row_limit = 10000;
```

这些 GUC 影响新建表，而不是已有表后续生成的新 stripe。

### 转换已有表

```sql
CREATE TABLE events_heap (
  event_id bigint,
  payload  jsonb
);

INSERT INTO events_heap
SELECT g, jsonb_build_object('kind', 'view', 'seq', g)
FROM generate_series(1, 10000) AS g;

SELECT columnar.alter_table_set_access_method('events_heap', 'columnar');
SELECT columnar.alter_table_set_access_method('events_heap', 'heap');
```

`columnar.alter_table_set_access_method(table, method)` 会把 heap 表重写为 columnar 存储，或把 columnar 表改回 heap 存储。转换前应检查外键、identity 列、行级安全策略、触发器、索引、约束、继承关系和存储选项；辅助函数会拒绝或跳过它无法安全重建的特性。

### 分区表

```sql
CREATE TABLE measurements (
  ts timestamptz,
  device_id bigint,
  value double precision
) PARTITION BY RANGE (ts);

CREATE TABLE measurements_2024 PARTITION OF measurements
  FOR VALUES FROM ('2024-01-01') TO ('2025-01-01')
  USING columnar;

CREATE TABLE measurements_hot PARTITION OF measurements
  FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
```

分区表可以混用行存与列存分区。只命中行存分区的操作可以使用普通行表行为；如果操作可能触及列存分区，就必须遵守 columnar 的限制。常见做法是把近期可变数据放在 heap 分区，把较老的分析历史放在 columnar 分区。

### 维护与查看

```sql
VACUUM VERBOSE events_columnar;
VACUUM FULL events_columnar;

SELECT * FROM columnar.stats('events_columnar'::regclass);
SELECT columnar.vacuum('events_columnar'::regclass);
SELECT columnar.vacuum_full('public', 0.1, 25);
```

`VACUUM VERBOSE` 会报告列式存储统计信息，例如文件大小、压缩率、行数、stripe 数和 chunk 数。`columnar.stats()` 暴露 stripe 级元数据。`columnar.vacuum()` 与 `columnar.vacuum_full()` 用于增量压缩列式存储；普通 `VACUUM` 主要扫描元数据，成本低于完整重写。

### 注意事项

- Pigsty 元数据中该扩展已 obsolete，并且与 `citus` / `citus_columnar` 一类列式存储存在冲突。除非已验证具体组合，否则不要在同一 PostgreSQL 大版本中混装多个冲突的列式表访问方法。
- Pigsty 仅为 PostgreSQL 14-16 保留 `hydra` / `columnar` 包；本地已将 PostgreSQL 17 和 18 标记为不支持。
- Hydra 1.1.x 已改进 update/delete 与 upsert 支持，但项目文档仍明确列式存储不适合频繁大规模更新、小事务和 OLTP 单行读写负载。
- 受限或不支持的场景包括 logical decoding、unlogged columnar table、serializable isolation、部分 scan 类型，以及许多非 btree / hash 索引。依赖约束和索引型约束前应先实测。
- `columnar` schema 中包含 `columnar.options`、`columnar.stripe`、`columnar.chunk_group`、`columnar.chunk` 等内部元数据表。可以通过公开函数查看，但不要直接修改这些元数据表。
