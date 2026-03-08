---
title: "duckdb_fdw"
linkTitle: "duckdb_fdw"
description: "DuckDB 外部数据源包装器"
weight: 2470
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/alitrack/duckdb_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">alitrack/duckdb_fdw</div>
    <div class="ext-card__desc">https://github.com/alitrack/duckdb_fdw</div>
  </a>
  <a class="ext-card ext-card--source" href="duckdb_fdw-1.1.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">duckdb_fdw-1.1.3.tar.gz</div>
    <div class="ext-card__desc">duckdb_fdw-1.1.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`duckdb_fdw`**](/ext/e/duckdb_fdw) | `1.1.2` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2470  | [**`duckdb_fdw`**](/ext/e/duckdb_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_analytics`](/ext/e/pg_analytics) [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_mooncake`](/ext/e/pg_mooncake) [`pg_parquet`](/ext/e/pg_parquet) [`wrappers`](/ext/e/wrappers) [`citus_columnar`](/ext/e/citus_columnar) [`columnar`](/ext/e/columnar) [`citus`](/ext/e/citus) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> conflict on libduckdb with pg_duckdb


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.2` | {{< pgvers "17,16,15,14" >}} | `duckdb_fdw` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.2` | {{< pgvers "17,16,15,14" >}} | `duckdb_fdw_$v` | `libduckdb` |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.1.2` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-duckdb-fdw` | `libduckdb` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el8.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el9.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el9.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u24.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
| u24.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 | AVAIL PIGSTY 1.1.2 1 |
@ el8.x86_64 17 duckdb_fdw_17 duckdb_fdw_17-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 83.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/duckdb_fdw_17-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 duckdb_fdw_17 duckdb_fdw_17-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 76.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/duckdb_fdw_17-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 duckdb_fdw_17 duckdb_fdw_17-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 80.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/duckdb_fdw_17-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 duckdb_fdw_17 duckdb_fdw_17-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 78.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/duckdb_fdw_17-1.1.2-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.1.2 256.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.1.2 249.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~jammy_amd64.deb pigsty 1.1.2 266.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~jammy_arm64.deb pigsty 1.1.2 262.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~noble_amd64.deb pigsty 1.1.2 217.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-duckdb-fdw postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~noble_arm64.deb pigsty 1.1.2 214.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-17-duckdb-fdw_1.1.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 duckdb_fdw_16 duckdb_fdw_16-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 83.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/duckdb_fdw_16-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 duckdb_fdw_16 duckdb_fdw_16-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 76.0KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/duckdb_fdw_16-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 duckdb_fdw_16 duckdb_fdw_16-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 80.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/duckdb_fdw_16-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 duckdb_fdw_16 duckdb_fdw_16-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 78.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/duckdb_fdw_16-1.1.2-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.1.2 255.1KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.1.2 248.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~jammy_amd64.deb pigsty 1.1.2 265.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~jammy_arm64.deb pigsty 1.1.2 261.8KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~noble_amd64.deb pigsty 1.1.2 217.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-duckdb-fdw postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~noble_arm64.deb pigsty 1.1.2 214.9KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-16-duckdb-fdw_1.1.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 duckdb_fdw_15 duckdb_fdw_15-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 86.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/duckdb_fdw_15-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 duckdb_fdw_15 duckdb_fdw_15-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 78.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/duckdb_fdw_15-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 duckdb_fdw_15 duckdb_fdw_15-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 84.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/duckdb_fdw_15-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 duckdb_fdw_15 duckdb_fdw_15-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 82.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/duckdb_fdw_15-1.1.2-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.1.2 258.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.1.2 252.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~jammy_amd64.deb pigsty 1.1.2 277.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~jammy_arm64.deb pigsty 1.1.2 273.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~noble_amd64.deb pigsty 1.1.2 229.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-duckdb-fdw postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~noble_arm64.deb pigsty 1.1.2 227.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-15-duckdb-fdw_1.1.2-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 duckdb_fdw_14 duckdb_fdw_14-1.1.2-1PIGSTY.el8.x86_64.rpm pigsty 1.1.2 86.0KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/duckdb_fdw_14-1.1.2-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 duckdb_fdw_14 duckdb_fdw_14-1.1.2-1PIGSTY.el8.aarch64.rpm pigsty 1.1.2 78.6KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/duckdb_fdw_14-1.1.2-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 duckdb_fdw_14 duckdb_fdw_14-1.1.2-1PIGSTY.el9.x86_64.rpm pigsty 1.1.2 84.5KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/duckdb_fdw_14-1.1.2-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 duckdb_fdw_14 duckdb_fdw_14-1.1.2-1PIGSTY.el9.aarch64.rpm pigsty 1.1.2 82.3KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/duckdb_fdw_14-1.1.2-1PIGSTY.el9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~bookworm_amd64.deb pigsty 1.1.2 258.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~bookworm_arm64.deb pigsty 1.1.2 252.2KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~bookworm_arm64.deb
@ u22.x86_64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~jammy_amd64.deb pigsty 1.1.2 277.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~jammy_arm64.deb pigsty 1.1.2 273.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~noble_amd64.deb pigsty 1.1.2 229.1KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-duckdb-fdw postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~noble_arm64.deb pigsty 1.1.2 227.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/d/duckdb-fdw/postgresql-14-duckdb-fdw_1.1.2-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `duckdb_fdw` 扩展的 DEB 包：

```bash
pig build pkg duckdb_fdw         # 构建 DEB 包
```


## 安装

您可以直接安装 `duckdb_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install duckdb_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y duckdb_fdw -v 17  # PG 17
pig ext install -y duckdb_fdw -v 16  # PG 16
pig ext install -y duckdb_fdw -v 15  # PG 15
pig ext install -y duckdb_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y duckdb_fdw_17       # PG 17
dnf install -y duckdb_fdw_16       # PG 16
dnf install -y duckdb_fdw_15       # PG 15
dnf install -y duckdb_fdw_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-17-duckdb-fdw   # PG 17
apt install -y postgresql-16-duckdb-fdw   # PG 16
apt install -y postgresql-15-duckdb-fdw   # PG 15
apt install -y postgresql-14-duckdb-fdw   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION duckdb_fdw;
```



> [!WARNING] 此扩展目前存在问题，与 pg_duckdb 和 pg_mooncake 存在冲突

## 用法

### 创建扩展

安装 `duckdb_fdw` yum 软件包后，可以在 PostgreSQL 数据库中创建该扩展：

```sql
-- 创建扩展
CREATE EXTENSION duckdb_fdw;

-- 创建 duckdb_fdw 外部服务器
CREATE SERVER duckdb_server FOREIGN DATA WRAPPER duckdb_fdw OPTIONS (database '/tmp/duck.db');

-- 创建用户映射 [可选]
-- GRANT USAGE ON FOREIGN SERVER duckdb_server TO PUBLIC;

SELECT duckdb_fdw_version();

-- 可以使用 `duckdb_execute` 执行 duckdb 命令，例如在 duckdb 中创建一张表：
-- 在 duckdb 中创建表
SELECT duckdb_execute('duckdb_server', 'CREATE TABLE t1 (a integer,b varchar);');

-- 创建映射到 duckdb 表的外部表
CREATE FOREIGN TABLE t1 (
    a integer,
    b text
) SERVER duckdb_server OPTIONS (
    table 't1'
);

-- 写入数据并读取
INSERT INTO t1 SELECT i AS a,i::text AS b FROM generate_series(1,10) i;
SELECT * FROM t1;
```


也可以从 duckdb 服务器导入外部模式，例如，先使用 duckdb 命令行工具创建一张表：

```bash
duckdb /tmp/duck.db

CREATE TABLE t1 (
  a integer,
  b text
);

INSERT INTO t1 VALUES (1, 'a'), (2 , 'b'), (3, 'c');
SELECT * FROM t1;
```

然后将该模式导入 PostgreSQL：

```sql
IMPORT FOREIGN SCHEMA public FROM SERVER duckdb_server INTO public;
```

### 其他资源

- [DuckDB 官网](https://duckdb.org/)
- [GitHub: duckdb_fdw](https://github.com/alitrack/duckdb_fdw/)
- [构建 libduckdb](https://github.com/digoal/blog/blob/master/202401/20240124_01.md)
