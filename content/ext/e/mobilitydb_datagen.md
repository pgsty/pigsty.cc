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
| d12.x86_64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| d12.aarch64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| d13.x86_64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| d13.aarch64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| u22.x86_64 | MISS PGDG - 0 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 |
| u22.aarch64 | MISS PGDG - 0 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 | AVAIL PGDG 1.2.0 1 |
| u24.x86_64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
| u24.aarch64 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 | AVAIL PGDG 1.3.0 2 |
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

> [mobilitydb_datagen: MobilityDB 的合成移动数据生成器](https://github.com/MobilityDB/MobilityDB)

MobilityDB DataGen 提供用于生成合成移动数据的函数，用于测试和基准测试 MobilityDB 工作负载。它可以创建随机的时态值，包括行程、轨迹和时变测量数据。

### 生成随机时态值

```sql
-- 在时间跨度内生成随机时态浮点数
SELECT random_tfloat(
    '2025-06-01 00:00+00', '2025-06-02 00:00+00',  -- 时间跨度
    0.0, 100.0,                                      -- 值范围
    10                                               -- 瞬时值数量
);

-- 生成随机时态几何点（轨迹）
SELECT random_tgeompoint(
    '2025-06-01 08:00+00', '2025-06-01 18:00+00',   -- 时间跨度
    ST_MakeEnvelope(2.2, 48.8, 2.4, 48.9, 4326),    -- 空间范围
    20                                               -- 瞬时值数量
);
```

### 生成测试数据集

批量创建测试数据用于行程查询基准测试：

```sql
INSERT INTO trips (vehicle_id, trip, trip_date)
SELECT
    i,
    random_tgeompoint(
        '2025-06-01 08:00+00', '2025-06-01 18:00+00',
        ST_MakeEnvelope(2.2, 48.8, 2.5, 48.9, 4326),
        50
    ),
    '2025-06-01'
FROM generate_series(1, 1000) AS i;
```
