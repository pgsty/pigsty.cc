---
title: "h3_postgis"
linkTitle: "h3_postgis"
description: "H3与PostGIS集成的扩展插件"
weight: 1531
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/postgis/h3-pg">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">postgis/h3-pg</div>
    <div class="ext-card__desc">https://github.com/postgis/h3-pg</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/h3-pg-4.5.0.tar.gz h3-4.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">h3-pg-4.5.0.tar.gz h3-4.5.0.tar.gz</div>
    <div class="ext-card__desc">h3-pg-4.5.0.tar.gz h3-4.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_h3`**](/ext/e/h3) | `4.5.0` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1530  | [**`h3`**](/ext/e/h3) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1531  | [**`h3_postgis`**](/ext/e/h3_postgis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`h3`](/ext/e/h3) [`postgis`](/ext/e/postgis) [`postgis_raster`](/ext/e/postgis_raster) [`postgis`](/ext/e/postgis) [`qdgc`](/ext/e/qdgc) [`pg_geohash`](/ext/e/pg_geohash) [`pgrouting`](/ext/e/pgrouting) [`q3c`](/ext/e/q3c) [`pg_polyline`](/ext/e/pg_polyline) [`pg_eviltransform`](/ext/e/pg_eviltransform) [`earthdistance`](/ext/e/earthdistance) [`mobilitydb`](/ext/e/mobilitydb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> RPM and DEB 4.5.0 require h3, postgis and postgis_raster; point coordinates use longitude, latitude.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.5.0` | {{< pgvers "18,17,16,15,14" >}} | `pg_h3` | `h3`, `postgis`, `postgis_raster` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.5.0` | {{< pgvers "18,17,16,15,14" >}} | `h3-pg_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `4.5.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-h3` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 4.5.0 1 | AVAIL PIGSTY 4.5.0 1 | AVAIL PIGSTY 4.5.0 2 | AVAIL PIGSTY 4.5.0 2 | AVAIL PIGSTY 4.5.0 2 |
| el8.aarch64 | AVAIL PIGSTY 4.5.0 2 | AVAIL PIGSTY 4.5.0 2 | AVAIL PIGSTY 4.5.0 2 | AVAIL PIGSTY 4.5.0 2 | AVAIL PIGSTY 4.5.0 2 |
| el9.x86_64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| el9.aarch64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| el10.x86_64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| el10.aarch64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| d12.x86_64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| d12.aarch64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| d13.x86_64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| d13.aarch64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| u22.x86_64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| u22.aarch64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| u24.x86_64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| u24.aarch64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| u26.x86_64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
| u26.aarch64 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 | AVAIL PIGSTY 4.5.0 3 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_h3` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_h3         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_h3` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_h3;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_h3 -v 18  # PG 18
pig ext install -y pg_h3 -v 17  # PG 17
pig ext install -y pg_h3 -v 16  # PG 16
pig ext install -y pg_h3 -v 15  # PG 15
pig ext install -y pg_h3 -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y h3-pg_18       # PG 18
dnf install -y h3-pg_17       # PG 17
dnf install -y h3-pg_16       # PG 16
dnf install -y h3-pg_15       # PG 15
dnf install -y h3-pg_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-h3   # PG 18
apt install -y postgresql-17-h3   # PG 17
apt install -y postgresql-16-h3   # PG 16
apt install -y postgresql-15-h3   # PG 15
apt install -y postgresql-14-h3   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION h3_postgis CASCADE;  -- 依赖: h3, postgis, postgis_raster
```

## 用法

来源：

- [4.5.0 PostGIS API](https://github.com/postgis/h3-pg/blob/v4.5.0/docs/api.md)
- [Dependencies and extension definition](https://github.com/postgis/h3-pg/blob/v4.5.0/h3_postgis/CMakeLists.txt)
- [4.5.0 migration SQL](https://github.com/postgis/h3-pg/blob/v4.5.0/h3_postgis/sql/updates/h3_postgis--4.2.3--4.5.0.sql)
- [4.5.0 release](https://github.com/postgis/h3-pg/releases/tag/v4.5.0)

`h3_postgis` 将 H3 单元格与 PostGIS 几何、地理及栅格数据连接起来。它依赖 `h3`、`postgis` 和 `postgis_raster`，即便仅处理几何也需要这些依赖。输入几何必须使用 SRID 4326，坐标顺序为经度、纬度；这些函数不会自动重新投影输入。

### 点与单元格转换

```sql
CREATE EXTENSION h3_postgis CASCADE;
SET h3.strict = true;

SELECT h3_latlng_to_cell(
    ST_SetSRID(ST_MakePoint(-122.0553238, 37.3615593), 4326), 9
);
SELECT h3_cell_to_geometry('85283473fffffff'::h3index);
SELECT h3_cell_to_boundary_geometry('85283473fffffff'::h3index);
```

其他坐标系应先通过 PostGIS 转换到 SRID 4326，再调用 H3 函数。仅设置 SRID 标签不会转换坐标。

### 核心接口

| 任务 | 函数 |
| --- | --- |
| 点转单元格 | `h3_latlng_to_cell(geometry, integer)`、`h3_latlng_to_cell(geography, integer)` |
| 单元格中心 | `h3_cell_to_geometry`、`h3_cell_to_geography` |
| 单元格边界 | `h3_cell_to_boundary_geometry`、`h3_cell_to_boundary_geography` |
| 多边形覆盖 | `h3_polygon_to_cells`、`h3_cells_to_multi_polygon_geometry`、`h3_cells_to_multi_polygon_geography` |
| 连续栅格统计 | `h3_raster_summary`、`h3_raster_summary_stats_agg` |
| 分类栅格统计 | `h3_raster_class_summary`、`h3_raster_class_summary_item_agg` |

几何与分辨率之间的 `@` 运算符也能将位置映射到 H3 单元格。使用 `ST_IsValid()` 检查多边形；`ST_MakeValid()` 修复可能改变拓扑并产生几何集合，应在覆盖计算前提取并检查多边形部分。无效多边形的行为未定义。

### 汇总栅格数据

```sql
SELECT (summary).h3,
       (h3_raster_summary_stats_agg((summary).stats)).*
FROM (
    SELECT h3_raster_summary(rast, 8) AS summary
    FROM rasters
) AS r
GROUP BY (summary).h3;
```

默认汇总函数会自动选择方法，也可显式使用裁剪、像素中心或子像素变体控制像素如何分配到单元格。应结合栅格分辨率和目标 H3 分辨率检查所选方法。

### 升级与边界

```sql
ALTER EXTENSION h3 UPDATE TO '4.5.0';
ALTER EXTENSION h3_postgis UPDATE TO '4.5.0';
```

基础扩展更新会重建受影响的 btree 索引并刷新距离依赖对象，应先安排维护窗口，再更新伴随扩展。4.5.0 修复 PostgreSQL 17+ 受限搜索路径下的维护、表达式索引导出恢复，以及多项几何和多边形生成错误。两个扩展版本应保持一致。更新任一扩展前，先安装匹配的 4.5.0 软件包文件。

平面叠加运算通常应保持 `h3.extend_antimeridian` 为 false。两个扩展都可重定位；执行未限定模式的 SQL 时，应确保 H3 和 PostGIS 所在模式可见。两者均无需共享预加载。
