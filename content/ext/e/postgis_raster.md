---
title: "postgis_raster"
linkTitle: "postgis_raster"
description: "PostGIS 光栅类型和函数"
weight: 1502
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://git.osgeo.org/gitea/postgis/postgis">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://git.osgeo.org/gitea/postgis/postgis</div>
    <div class="ext-card__desc">https://git.osgeo.org/gitea/postgis/postgis</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`postgis`**](/ext/e/postgis) | `3.6.2` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1500  | [**`postgis`**](/ext/e/postgis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 1501  | [**`postgis_topology`**](/ext/e/postgis_topology) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `topology` |
| 1502  | [**`postgis_raster`**](/ext/e/postgis_raster) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 1503  | [**`postgis_sfcgal`**](/ext/e/postgis_sfcgal) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1504  | [**`postgis_tiger_geocoder`**](/ext/e/postgis_tiger_geocoder) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `tiger` |
| 1505  | [**`address_standardizer`**](/ext/e/address_standardizer) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1506  | [**`address_standardizer_data_us`**](/ext/e/address_standardizer_data_us) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`pointcloud_postgis`](/ext/e/pointcloud_postgis) [`pointcloud`](/ext/e/pointcloud) [`pgrouting`](/ext/e/pgrouting) [`h3`](/ext/e/h3) [`q3c`](/ext/e/q3c) [`ogr_fdw`](/ext/e/ogr_fdw) [`geoip`](/ext/e/geoip) [`pg_polyline`](/ext/e/pg_polyline) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`h3_postgis`](/ext/e/h3_postgis) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.2` | {{< pgvers "18,17,16,15,14" >}} | `postgis` | `postgis` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.2` | {{< pgvers "18,17,16,15,14" >}} | `postgis36_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-postgis-3` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.6.1 2 | AVAIL PGDG 3.6.1 2 | AVAIL PGDG 3.6.1 2 | AVAIL PGDG 3.6.1 2 | AVAIL PGDG 3.6.1 2 |
| el8.aarch64 | AVAIL PGDG 3.6.1 3 | AVAIL PGDG 3.6.1 3 | AVAIL PGDG 3.6.1 3 | AVAIL PGDG 3.6.1 3 | AVAIL PGDG 3.6.1 3 |
| el9.x86_64 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 |
| el9.aarch64 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 | AVAIL PGDG 3.6.2 5 |
| el10.x86_64 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 |
| el10.aarch64 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 | AVAIL PGDG 3.6.2 4 |
| d12.x86_64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| d12.aarch64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| d13.x86_64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| d13.aarch64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| u22.x86_64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| u22.aarch64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| u24.x86_64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
| u24.aarch64 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 | AVAIL PGDG 3.6.2 1 |
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `postgis` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install postgis;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y postgis -v 18  # PG 18
pig ext install -y postgis -v 17  # PG 17
pig ext install -y postgis -v 16  # PG 16
pig ext install -y postgis -v 15  # PG 15
pig ext install -y postgis -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y postgis36_18       # PG 18
dnf install -y postgis36_17       # PG 17
dnf install -y postgis36_16       # PG 16
dnf install -y postgis36_15       # PG 15
dnf install -y postgis36_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-postgis-3   # PG 18
apt install -y postgresql-17-postgis-3   # PG 17
apt install -y postgresql-16-postgis-3   # PG 16
apt install -y postgresql-15-postgis-3   # PG 15
apt install -y postgresql-14-postgis-3   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION postgis_raster CASCADE;  -- 依赖: postgis
```



## 用法

> [PostGIS Raster：PostGIS 的栅格数据支持](https://github.com/postgis/postgis)

PostGIS Raster 为 PostGIS 扩展了栅格（网格）数据支持，可直接在 PostgreSQL 中存储栅格数据。它支持在 SQL 中进行栅格分析、栅格/矢量交互和地图代数运算。

- [栅格参考手册](https://postgis.net/docs/RT_reference.html)

### 安装

```sql
CREATE EXTENSION postgis_raster;
```

--------

## 加载栅格数据

`raster2pgsql` 命令行工具可将栅格文件（GeoTIFF 等）导入 PostgreSQL：

```bash
# 将 GeoTIFF 以 100x100 瓦片导入，创建空间索引，使用 COPY
raster2pgsql -s 4326 -t 100x100 -I -C -M elevation.tif public.dem | psql mydb

# 追加到已有表
raster2pgsql -s 4326 -t 100x100 -a more_data.tif public.dem | psql mydb
```

关键参数：
- `-s <srid>` -- 设置 SRID
- `-t <width>x<height>` -- 将栅格切分为瓦片
- `-I` -- 创建 GiST 空间索引
- `-C` -- 应用栅格约束
- `-M` -- 加载后执行 vacuum analyze

--------

## 查询栅格数据

### 栅格元数据

```sql
-- 获取栅格尺寸和像素大小
SELECT rid,
    ST_Width(rast) AS width,
    ST_Height(rast) AS height,
    ST_ScaleX(rast) AS pixel_size_x,
    ST_ScaleY(rast) AS pixel_size_y,
    ST_NumBands(rast) AS bands,
    ST_SRID(rast) AS srid
FROM dem LIMIT 5;
```

### 像素值

```sql
-- 获取指定点的值
SELECT ST_Value(rast, ST_SetSRID(ST_MakePoint(-73.985, 40.748), 4326)) AS elevation
FROM dem
WHERE ST_Intersects(rast, ST_SetSRID(ST_MakePoint(-73.985, 40.748), 4326));

-- 获取列/行位置的值（波段 1）
SELECT ST_Value(rast, 1, 10, 20) FROM dem WHERE rid = 1;
```

### 波段统计

```sql
SELECT (ST_SummaryStats(rast)).*
FROM dem WHERE rid = 1;
-- 返回：count、sum、mean、stddev、min、max
```

--------

## 栅格处理

### 按矢量几何裁剪栅格

```sql
-- 将栅格裁剪到多边形边界
SELECT ST_Clip(rast, geom) AS clipped_rast
FROM dem, boundaries
WHERE ST_Intersects(rast, geom);
```

### 地图代数

逐像素运算：

```sql
-- 单栅格地图代数：高程分类
SELECT ST_MapAlgebra(rast, 1, NULL,
    'CASE WHEN [rast] > 100 THEN 1 WHEN [rast] > 50 THEN 2 ELSE 3 END') AS classified
FROM dem;

-- 双栅格地图代数：两个 DEM 的差值
SELECT ST_MapAlgebra(a.rast, 1, b.rast, 1, '[rast1] - [rast2]') AS diff
FROM dem_old a, dem_new b
WHERE ST_Intersects(a.rast, b.rast);
```

### 栅格/矢量交互

```sql
-- 将栅格像素转换为矢量点
SELECT (ST_PixelAsPoints(rast)).*
FROM dem WHERE rid = 1;

-- 将栅格转换为多边形（每个唯一值一个）
SELECT (ST_DumpAsPolygons(rast)).*
FROM dem WHERE rid = 1;

-- 栅格与矢量相交并获取值
SELECT p.name, ST_Value(d.rast, p.geom) AS elevation
FROM dem d, points p
WHERE ST_Intersects(d.rast, p.geom);
```

### 重采样与重投影

```sql
-- 重采样为不同的像素大小
SELECT ST_Rescale(rast, 0.001, -0.001) FROM dem;

-- 重投影到不同的 SRID
SELECT ST_Transform(rast, 3857) FROM dem;
```

--------

## 导出栅格

```sql
-- 导出为 GeoTIFF（二进制）
SELECT ST_AsTIFF(rast) FROM dem WHERE rid = 1;

-- 导出为 PNG
SELECT ST_AsPNG(rast) FROM dem WHERE rid = 1;

-- 导出为 JPEG
SELECT ST_AsJPEG(rast) FROM dem WHERE rid = 1;
```
