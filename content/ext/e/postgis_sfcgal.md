---
title: "postgis_sfcgal"
linkTitle: "postgis_sfcgal"
description: "PostGIS SFCGAL 函数"
weight: 1503
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
| [**`postgis`**](/ext/e/postgis) | `3.6.3` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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

| **相关扩展** | [`postgis`](/ext/e/postgis) [`pgrouting`](/ext/e/pgrouting) [`pointcloud`](/ext/e/pointcloud) [`pointcloud_postgis`](/ext/e/pointcloud_postgis) [`h3`](/ext/e/h3) [`h3_postgis`](/ext/e/h3_postgis) [`q3c`](/ext/e/q3c) [`ogr_fdw`](/ext/e/ogr_fdw) [`geoip`](/ext/e/geoip) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.3` | {{< pgvers "18,17,16,15,14" >}} | `postgis` | `postgis` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.3` | {{< pgvers "18,17,16,15,14" >}} | `postgis36_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-postgis-3` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 3.6.3 3 | AVAIL PGDG 3.6.3 3 | AVAIL PGDG 3.6.3 3 | AVAIL PGDG 3.6.3 3 | AVAIL PGDG 3.6.3 3 |
| el8.aarch64 | AVAIL PGDG 3.6.3 4 | AVAIL PGDG 3.6.3 4 | AVAIL PGDG 3.6.3 4 | AVAIL PGDG 3.6.3 4 | AVAIL PGDG 3.6.3 4 |
| el9.x86_64 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 |
| el9.aarch64 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 | AVAIL PGDG 3.6.3 6 |
| el10.x86_64 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 |
| el10.aarch64 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 | AVAIL PGDG 3.6.3 5 |
| d12.x86_64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| d12.aarch64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| d13.x86_64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| d13.aarch64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u22.x86_64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u22.aarch64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u24.x86_64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u24.aarch64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u26.x86_64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
| u26.aarch64 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 | AVAIL PGDG 3.6.3 2 |
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
CREATE EXTENSION postgis_sfcgal CASCADE;  -- 依赖: postgis
```



## 用法

> [PostGIS SFCGAL：基于 SFCGAL 的三维几何与高级操作](https://github.com/postgis/postgis)

PostGIS SFCGAL 通过封装 [SFCGAL](https://sfcgal.gitlab.io/SFCGAL/) 库，提供高级的二维和三维空间操作。它增加了对三维几何运算、体积计算、拉伸、三角剖分等核心 PostGIS GEOS 后端不支持的功能。

- [SFCGAL 函数参考手册](https://postgis.net/docs/reference_sfcgal.html)

### 安装

```sql
CREATE EXTENSION postgis_sfcgal;
```

--------

## 三维操作

### 三维交集与差集

```sql
-- 两个实体的三维交集
SELECT ST_3DIntersection(
    ST_GeomFromText('POLYHEDRALSURFACE Z(((0 0 0,1 0 0,1 1 0,0 1 0,0 0 0)),((0 0 1,1 0 1,1 1 1,0 1 1,0 0 1)),((0 0 0,0 1 0,0 1 1,0 0 1,0 0 0)),((1 0 0,1 1 0,1 1 1,1 0 1,1 0 0)),((0 0 0,1 0 0,1 0 1,0 0 1,0 0 0)),((0 1 0,1 1 0,1 1 1,0 1 1,0 1 0)))'),
    ST_GeomFromText('POLYHEDRALSURFACE Z(((0.5 0.5 0.5,1.5 0.5 0.5,1.5 1.5 0.5,0.5 1.5 0.5,0.5 0.5 0.5)),((0.5 0.5 1.5,1.5 0.5 1.5,1.5 1.5 1.5,0.5 1.5 1.5,0.5 0.5 1.5)),((0.5 0.5 0.5,0.5 1.5 0.5,0.5 1.5 1.5,0.5 0.5 1.5,0.5 0.5 0.5)),((1.5 0.5 0.5,1.5 1.5 0.5,1.5 1.5 1.5,1.5 0.5 1.5,1.5 0.5 0.5)),((0.5 0.5 0.5,1.5 0.5 0.5,1.5 0.5 1.5,0.5 0.5 1.5,0.5 0.5 0.5)),((0.5 1.5 0.5,1.5 1.5 0.5,1.5 1.5 1.5,0.5 1.5 1.5,0.5 1.5 0.5)))')
);

-- 三维差集
SELECT ST_3DDifference(solid_a, solid_b) FROM solids;

-- 三维并集
SELECT ST_3DUnion(solid_a, solid_b) FROM solids;
```

### 三维度量

```sql
-- 曲面的三维面积
SELECT ST_3DArea(geom) FROM surfaces;

-- 实体的体积
SELECT ST_Volume(geom) FROM solids;
```

### 拉伸

```sql
-- 将二维多边形拉伸为三维实体
SELECT ST_Extrude(
    ST_GeomFromText('POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))'),
    0, 0, 10  -- dx, dy, dz
);
```

### 细分与三角剖分

```sql
-- 将多边形细分为三角形
SELECT ST_Tesselate(
    ST_GeomFromText('POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))')
);

-- 约束 Delaunay 三角剖分
SELECT ST_ConstrainedDelaunayTriangles(
    ST_GeomFromText('POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))')
);
```

### 其他函数

```sql
-- 多边形的直骨架
SELECT ST_StraightSkeleton(
    ST_GeomFromText('POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))')
);

-- 近似中轴线
SELECT ST_ApproximateMedialAxis(
    ST_GeomFromText('POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))')
);

-- 闵可夫斯基和
SELECT ST_MinkowskiSum(
    ST_GeomFromText('LINESTRING(0 0, 4 0)'),
    ST_GeomFromText('POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))')
);

-- 检查曲面是否为平面
SELECT ST_IsPlanar(geom) FROM surfaces;
```
