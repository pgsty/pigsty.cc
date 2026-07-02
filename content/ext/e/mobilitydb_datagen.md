---
title: "mobilitydb_datagen"
linkTitle: "mobilitydb_datagen"
description: "MobilityDB随机数据生成函数"
weight: 1651
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/MobilityDB/MobilityDB">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">MobilityDB/MobilityDB</div>
    <div class="ext-card__desc">https://github.com/MobilityDB/MobilityDB</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`mobilitydb`**](/ext/e/mobilitydb) | `1.3.0` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1650  | [**`mobilitydb`**](/ext/e/mobilitydb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1651  | [**`mobilitydb_datagen`**](/ext/e/mobilitydb_datagen) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`mobilitydb`](/ext/e/mobilitydb) [`mobilitydb`](/ext/e/mobilitydb) [`postgis`](/ext/e/postgis) [`timescaledb`](/ext/e/timescaledb) [`pgrouting`](/ext/e/pgrouting) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.0` | {{< pgvers "18,17,16,15,14" >}} | `mobilitydb` | `mobilitydb` |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.3.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-mobilitydb` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| d12.aarch64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| d13.x86_64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| d13.aarch64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| u22.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 |
| u22.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 |
| u24.x86_64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| u24.aarch64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| u26.x86_64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
| u26.aarch64 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 | AVAIL PGDG 1.3.0 3 |
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `mobilitydb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install mobilitydb;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y mobilitydb -v 18  # PG 18
pig ext install -y mobilitydb -v 17  # PG 17
pig ext install -y mobilitydb -v 16  # PG 16
pig ext install -y mobilitydb -v 15  # PG 15
pig ext install -y mobilitydb -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-mobilitydb   # PG 18
apt install -y postgresql-17-mobilitydb   # PG 17
apt install -y postgresql-16-mobilitydb   # PG 16
apt install -y postgresql-15-mobilitydb   # PG 15
apt install -y postgresql-14-mobilitydb   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION mobilitydb_datagen CASCADE;  -- 依赖: mobilitydb
```




## 用法

来源：[repository](https://github.com/MobilityDB/MobilityDB), [synthetic data generator docs](https://docs.mobilitydb.com/MobilityDB/develop/apb.html), [control file](https://github.com/MobilityDB/MobilityDB/blob/master/mobilitydb/datagen/mobilitydb_datagen.in.control), [temporal generators](https://github.com/MobilityDB/MobilityDB/blob/master/mobilitydb/datagen/temporal/random_temporal.sql), [temporal point generators](https://github.com/MobilityDB/MobilityDB/blob/master/mobilitydb/datagen/geo/random_tpoint.sql)

`mobilitydb_datagen` 提供 PL/pgSQL 函数，用来生成合成的 PostgreSQL、PostGIS 和 MobilityDB 值。它主要适用于需要随机 temporal value 或轨迹的回归数据、演示和基准测试 fixture。

```sql
-- After the main MobilityDB extension is loaded:
CREATE EXTENSION mobilitydb_datagen;
```

### 生成随机 Temporal 值

```sql
-- A random temporal float sequence.
SELECT random_tfloat_seq(
    -100.0, 100.0,                                  -- value bounds
    '2025-06-01 00:00+00', '2025-06-02 00:00+00',  -- time bounds
    10.0,                                           -- max value delta
    10,                                             -- max minutes between instants
    5, 10                                           -- min/max instants
);

-- Step interpolation instead of the default linear interpolation.
SELECT random_tfloat_seq(
    -100.0, 100.0,
    '2025-06-01 00:00+00', '2025-06-02 00:00+00',
    10.0, 10, 5, 10,
    false
);

-- A random temporal geometry point sequence.
SELECT asEWKT(
    random_tgeompoint_contseq(
        2.20, 2.50, 48.80, 48.95,                  -- x/y bounds
        '2025-06-01 08:00+00', '2025-06-01 18:00+00',
        0.02, 5, 20, 40,                           -- max delta, max minutes, min/max instants
        srid => 4326
    )
);
```

其他已确认的生成器家族包括 `random_bool`、`random_int`、`random_float`、`random_text`、`random_timestamptz` 等标量辅助函数；数组、集合、span 和 range 辅助函数；`random_tbool_inst`、`random_tint_discseq`、`random_tfloat_seq`、`random_tfloat_seqset` 等 temporal 辅助函数；以及 `random_geom_point`、`random_geom_linestring`、`random_tgeompoint_contseq`、`random_tgeompoint_seqset`、`random_tgeogpoint_contseq`、`random_tgeogpoint_seqset` 等空间/temporal-point 辅助函数。

### 生成测试数据集

为 trip 查询基准测试创建批量测试数据：

```sql
CREATE TABLE trip_samples AS
SELECT
    vehicle_id,
    random_tgeompoint_contseq(
        2.20, 2.50, 48.80, 48.95,
        '2025-06-01 08:00+00', '2025-06-01 18:00+00',
        0.02, 5, 20, 40,
        srid => 4326
    ) AS trip
FROM generate_series(1, 1000) AS vehicle_id;
```

### 注意事项

- control file 要求主 `mobilitydb` 扩展已存在；`mobilitydb_datagen` 不是独立扩展。
- `db/extension.csv` 中的包行列出版本 `1.3.0`、package `mobilitydb`，并支持 PostgreSQL 14 到 18。
- 上游文档有意省略许多生成器函数的详细参数列表，并让用户查看 SQL 源文件确认精确签名。
