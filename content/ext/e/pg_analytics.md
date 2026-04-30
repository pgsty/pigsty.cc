---
title: "pg_analytics"
linkTitle: "pg_analytics"
description: "由 DuckDB 驱动的数据分析引擎"
weight: 2420
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/paradedb/pg_analytics">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">paradedb/pg_analytics</div>
    <div class="ext-card__desc">https://github.com/paradedb/pg_analytics</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_analytics`**](/ext/e/pg_analytics) | `0.3.7` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2420  | [**`pg_analytics`**](/ext/e/pg_analytics) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `paradedb` |
{.ext-table}

| **相关扩展** | [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_mooncake`](/ext/e/pg_mooncake) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_parquet`](/ext/e/pg_parquet) [`columnar`](/ext/e/columnar) [`citus_columnar`](/ext/e/citus_columnar) [`orioledb`](/ext/e/orioledb) [`citus`](/ext/e/citus) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> archived, no longer maintained


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.7` | {{< pgvers "17,16,15,14" >}} | `pg_analytics` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.7` | {{< pgvers "17,16,15,14" >}} | `pg_analytics_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.7` | {{< pgvers "17,16,15,14" >}} | `postgresql-$v-pg-analytics` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| el8.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| el9.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| el9.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| u24.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| u24.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 | AVAIL PIGSTY 0.3.7 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 17 pg_analytics_17 pg_analytics_17-0.3.7-1PARADEDB.el8.x86_64.rpm pigsty 0.3.7 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_analytics_17-0.3.7-1PARADEDB.el8.x86_64.rpm
@ el8.aarch64 17 pg_analytics_17 pg_analytics_17-0.3.7-1PARADEDB.el8.aarch64.rpm pigsty 0.3.7 9.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_analytics_17-0.3.7-1PARADEDB.el8.aarch64.rpm
@ el9.x86_64 17 pg_analytics_17 pg_analytics_17-0.3.7-1PARADEDB.el9.x86_64.rpm pigsty 0.3.7 11.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_analytics_17-0.3.7-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 17 pg_analytics_17 pg_analytics_17-0.3.7-1PARADEDB.el9.aarch64.rpm pigsty 0.3.7 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_analytics_17-0.3.7-1PARADEDB.el9.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-analytics postgresql-17-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-17-pg-analytics/postgresql-17-pg-analytics_0.3.7_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-analytics postgresql-17-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 8.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-17-pg-analytics/postgresql-17-pg-analytics_0.3.7_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-analytics postgresql-17-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-17-pg-analytics/postgresql-17-pg-analytics_0.3.7_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-analytics postgresql-17-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 9.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-17-pg-analytics/postgresql-17-pg-analytics_0.3.7_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-analytics postgresql-17-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-17-pg-analytics/postgresql-17-pg-analytics_0.3.7_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-analytics postgresql-17-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 9.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-17-pg-analytics/postgresql-17-pg-analytics_0.3.7_arm64.deb
@ el8.x86_64 16 pg_analytics_16 pg_analytics_16-0.3.7-1PARADEDB.el8.x86_64.rpm pigsty 0.3.7 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_analytics_16-0.3.7-1PARADEDB.el8.x86_64.rpm
@ el8.aarch64 16 pg_analytics_16 pg_analytics_16-0.3.7-1PARADEDB.el8.aarch64.rpm pigsty 0.3.7 9.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_analytics_16-0.3.7-1PARADEDB.el8.aarch64.rpm
@ el9.x86_64 16 pg_analytics_16 pg_analytics_16-0.3.7-1PARADEDB.el9.x86_64.rpm pigsty 0.3.7 11.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_analytics_16-0.3.7-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 16 pg_analytics_16 pg_analytics_16-0.3.7-1PARADEDB.el9.aarch64.rpm pigsty 0.3.7 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_analytics_16-0.3.7-1PARADEDB.el9.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-analytics postgresql-16-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-16-pg-analytics/postgresql-16-pg-analytics_0.3.7_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-analytics postgresql-16-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 8.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-16-pg-analytics/postgresql-16-pg-analytics_0.3.7_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-analytics postgresql-16-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-16-pg-analytics/postgresql-16-pg-analytics_0.3.7_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-analytics postgresql-16-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 9.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-16-pg-analytics/postgresql-16-pg-analytics_0.3.7_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-analytics postgresql-16-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-16-pg-analytics/postgresql-16-pg-analytics_0.3.7_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-analytics postgresql-16-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 9.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-16-pg-analytics/postgresql-16-pg-analytics_0.3.7_arm64.deb
@ el8.x86_64 15 pg_analytics_15 pg_analytics_15-0.3.7-1PARADEDB.el8.x86_64.rpm pigsty 0.3.7 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_analytics_15-0.3.7-1PARADEDB.el8.x86_64.rpm
@ el8.aarch64 15 pg_analytics_15 pg_analytics_15-0.3.7-1PARADEDB.el8.aarch64.rpm pigsty 0.3.7 9.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_analytics_15-0.3.7-1PARADEDB.el8.aarch64.rpm
@ el9.x86_64 15 pg_analytics_15 pg_analytics_15-0.3.7-1PARADEDB.el9.x86_64.rpm pigsty 0.3.7 11.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_analytics_15-0.3.7-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 15 pg_analytics_15 pg_analytics_15-0.3.7-1PARADEDB.el9.aarch64.rpm pigsty 0.3.7 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_analytics_15-0.3.7-1PARADEDB.el9.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-analytics postgresql-15-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-15-pg-analytics/postgresql-15-pg-analytics_0.3.7_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-analytics postgresql-15-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 8.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-15-pg-analytics/postgresql-15-pg-analytics_0.3.7_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-analytics postgresql-15-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-15-pg-analytics/postgresql-15-pg-analytics_0.3.7_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-analytics postgresql-15-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 9.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-15-pg-analytics/postgresql-15-pg-analytics_0.3.7_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-analytics postgresql-15-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-15-pg-analytics/postgresql-15-pg-analytics_0.3.7_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-analytics postgresql-15-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 9.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-15-pg-analytics/postgresql-15-pg-analytics_0.3.7_arm64.deb
@ el8.x86_64 14 pg_analytics_14 pg_analytics_14-0.3.7-1PARADEDB.el8.x86_64.rpm pigsty 0.3.7 11.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_analytics_14-0.3.7-1PARADEDB.el8.x86_64.rpm
@ el8.aarch64 14 pg_analytics_14 pg_analytics_14-0.3.7-1PARADEDB.el8.aarch64.rpm pigsty 0.3.7 9.7MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_analytics_14-0.3.7-1PARADEDB.el8.aarch64.rpm
@ el9.x86_64 14 pg_analytics_14 pg_analytics_14-0.3.7-1PARADEDB.el9.x86_64.rpm pigsty 0.3.7 11.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_analytics_14-0.3.7-1PARADEDB.el9.x86_64.rpm
@ el9.aarch64 14 pg_analytics_14 pg_analytics_14-0.3.7-1PARADEDB.el9.aarch64.rpm pigsty 0.3.7 10.2MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_analytics_14-0.3.7-1PARADEDB.el9.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-analytics postgresql-14-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.2MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-14-pg-analytics/postgresql-14-pg-analytics_0.3.7_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-analytics postgresql-14-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 8.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/postgresql-14-pg-analytics/postgresql-14-pg-analytics_0.3.7_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-analytics postgresql-14-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.3MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-14-pg-analytics/postgresql-14-pg-analytics_0.3.7_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-analytics postgresql-14-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 9.0MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/postgresql-14-pg-analytics/postgresql-14-pg-analytics_0.3.7_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-analytics postgresql-14-pg-analytics_0.3.7_amd64.deb pigsty 0.3.7 10.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-14-pg-analytics/postgresql-14-pg-analytics_0.3.7_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-analytics postgresql-14-pg-analytics_0.3.7_arm64.deb pigsty 0.3.7 9.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/postgresql-14-pg-analytics/postgresql-14-pg-analytics_0.3.7_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_analytics` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_analytics;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_analytics -v 17  # PG 17
pig ext install -y pg_analytics -v 16  # PG 16
pig ext install -y pg_analytics -v 15  # PG 15
pig ext install -y pg_analytics -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_analytics_17       # PG 17
dnf install -y pg_analytics_16       # PG 16
dnf install -y pg_analytics_15       # PG 15
dnf install -y pg_analytics_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-17-pg-analytics   # PG 17
apt install -y postgresql-16-pg-analytics   # PG 16
apt install -y postgresql-15-pg-analytics   # PG 15
apt install -y postgresql-14-pg-analytics   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_analytics';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_analytics;
```


> [!WARNING] 此扩展已于 2025 年 3 月归档，不再维护。ParadeDB 的分析功能已整合到 pg_search 中。建议使用 pg_duckdb 或 pg_mooncake 作为数据湖分析的替代方案。

## 用法

https://github.com/paradedb/pg_analytics

示例：从 S3 读取 Parquet 文件：

```bash
CREATE EXTENSION pg_analytics;
CREATE FOREIGN DATA WRAPPER parquet_wrapper HANDLER parquet_fdw_handler VALIDATOR parquet_fdw_validator;

-- 提供 S3 凭证
CREATE SERVER parquet_server FOREIGN DATA WRAPPER parquet_wrapper;

-- 创建外部表并自动生成表结构
CREATE FOREIGN TABLE trips ()
SERVER parquet_server
OPTIONS (files 's3://paradedb-benchmarks/yellow_tripdata_2024-01.parquet');

-- 完成！现在可以像查询普通 PostgreSQL 表一样查询远程 Parquet 文件
SELECT COUNT(*) FROM trips;
  count
---------
 2964624
(1 row)
```

该外部数据包装器目前仅支持只读操作。



----

## Iceberg 支持

```sql
CREATE EXTENSION pg_analytics;

CREATE FOREIGN DATA WRAPPER iceberg_wrapper
    HANDLER iceberg_fdw_handler
    VALIDATOR iceberg_fdw_validator;

CREATE SERVER iceberg_server
    FOREIGN DATA WRAPPER iceberg_wrapper;

-- 请将示例中的占位结构替换为实际的表结构定义
CREATE FOREIGN TABLE iceberg_table (x INT)
    SERVER iceberg_server
    OPTIONS (files 's3://bucket/iceberg_folder');

-- 完成！现在可以查询 Iceberg 表了
SELECT COUNT(*) FROM iceberg_table;
```
