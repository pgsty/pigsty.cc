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
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
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


> [!WARNING] 该扩展已归档，不再维护。
