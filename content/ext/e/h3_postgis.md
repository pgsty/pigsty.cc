---
title: "h3_postgis"
linkTitle: "h3_postgis"
description: "H3与PostGIS集成的扩展插件"
weight: 1531
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/zachasme/h3-pg">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">zachasme/h3-pg</div>
    <div class="ext-card__desc">https://github.com/zachasme/h3-pg</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_h3`**](/ext/e/h3) | `4.2.3` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1530  | [**`h3`**](/ext/e/h3) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1531  | [**`h3_postgis`**](/ext/e/h3_postgis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`h3`](/ext/e/h3) [`postgis`](/ext/e/postgis) [`postgis_raster`](/ext/e/postgis_raster) [`mobilitydb`](/ext/e/mobilitydb) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) [`address_standardizer_data_us`](/ext/e/address_standardizer_data_us) [`pgrouting`](/ext/e/pgrouting) [`pointcloud`](/ext/e/pointcloud) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> pgdg missing el8.x86.pg17 and el8.x86.pg18


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_h3` | `h3`, `postgis`, `postgis_raster` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.3` | {{< pgvers "18,17,16,15,14" >}} | `h3-pg_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-h3` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 |
| el8.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 |
| el9.x86_64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 |
| el9.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 | AVAIL PGDG 4.1.3 1 |
| el10.x86_64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.2 1 | AVAIL PGDG 4.2.2 1 | AVAIL PGDG 4.2.2 1 | AVAIL PGDG 4.2.2 1 |
| el10.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.2 1 | AVAIL PGDG 4.2.2 1 | AVAIL PGDG 4.2.2 1 | AVAIL PGDG 4.2.2 1 |
| d12.x86_64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
| d12.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
| d13.x86_64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
| d13.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
| u22.x86_64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
| u22.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
| u24.x86_64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
| u24.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_h3` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_h3;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_h3 -v 18  # PG 18
pig ext install -y pg_h3 -v 17  # PG 17
pig ext install -y pg_h3 -v 16  # PG 16
pig ext install -y pg_h3 -v 15  # PG 15
pig ext install -y pg_h3 -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y h3-pg_18       # PG 18
dnf install -y h3-pg_17       # PG 17
dnf install -y h3-pg_16       # PG 16
dnf install -y h3-pg_15       # PG 15
dnf install -y h3-pg_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-h3   # PG 18
apt install -y postgresql-17-h3   # PG 17
apt install -y postgresql-16-h3   # PG 16
apt install -y postgresql-15-h3   # PG 15
apt install -y postgresql-14-h3   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION h3_postgis CASCADE;  -- 依赖: h3, postgis, postgis_raster
```



## 用法

> [h3_postgis: H3 的 PostGIS 集成](https://github.com/zachasme/h3-pg)

`h3_postgis` 是将 H3 六边形层次空间索引与 PostGIS 集成的桥接扩展。它实现了 H3 索引与 PostGIS 几何类型之间的转换。

```sql
CREATE EXTENSION h3_postgis CASCADE;
```

该扩展需要同时安装 `h3` 和 `postgis`。它提供了在 H3 单元格索引与 PostGIS 几何体之间转换的函数，使得可以将 H3 的六边形网格系统与 PostGIS 的空间能力结合使用。

### 主要函数

```sql
-- 将 PostGIS 点转换为 H3 单元格索引
SELECT h3_latlng_to_cell(ST_MakePoint(-73.985, 40.748)::point, 9);

-- 获取 H3 单元格边界的 PostGIS 几何体
SELECT h3_cell_to_boundary_geometry('892a1008003ffff'::h3index);

-- 将 H3 单元格转换为 PostGIS 多边形用于可视化
SELECT h3_cell_to_geometry('892a1008003ffff'::h3index);
```
