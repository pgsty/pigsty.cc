---
title: "postgis_topology"
linkTitle: "postgis_topology"
description: "PostGIS 拓扑空间类型和函数"
weight: 1501
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
CREATE EXTENSION postgis_topology CASCADE;  -- 依赖: postgis
```



## 用法

> [PostGIS Topology：PostGIS 的拓扑数据模型支持](https://github.com/postgis/postgis)

PostGIS Topology 为 PostgreSQL 实现了 SQL/MM 拓扑模型。它将空间数据表示为节点、边和面的图结构，确保共享边界只存储一次，并强制保证几何一致性。

- [拓扑参考手册](https://postgis.net/docs/Topology.html)

### 安装

```sql
CREATE EXTENSION postgis_topology;
```

这将创建包含管理表和函数的 `topology` 模式。

--------

## 创建拓扑

拓扑是一个具有指定 SRID 和捕捉容差的命名模式：

```sql
-- 创建名为 'city_topo' 的拓扑，SRID 4326，容差 0.00001 度
SELECT topology.CreateTopology('city_topo', 4326, 0.00001);
```

列出所有拓扑：

```sql
SELECT * FROM topology.topology;
```

--------

## 构建拓扑基元

### 添加边

边是基本构建单元。节点会在边的端点处自动创建。

```sql
-- 添加孤立节点
SELECT topology.ST_AddIsoNode('city_topo', NULL, ST_Point(-73.98, 40.75));

-- 添加两点之间的边（如需要会自动创建节点）
SELECT topology.ST_AddEdgeModFace('city_topo',
    ST_MakeLine(ST_Point(-73.99, 40.74), ST_Point(-73.98, 40.74)));

SELECT topology.ST_AddEdgeModFace('city_topo',
    ST_MakeLine(ST_Point(-73.98, 40.74), ST_Point(-73.98, 40.75)));

SELECT topology.ST_AddEdgeModFace('city_topo',
    ST_MakeLine(ST_Point(-73.98, 40.75), ST_Point(-73.99, 40.75)));

SELECT topology.ST_AddEdgeModFace('city_topo',
    ST_MakeLine(ST_Point(-73.99, 40.75), ST_Point(-73.99, 40.74)));
```

### 查看基元

```sql
-- 列出节点
SELECT node_id, ST_AsText(geom) FROM city_topo.node;

-- 列出边
SELECT edge_id, ST_AsText(geom) FROM city_topo.edge_data;

-- 列出面（face_id 0 是全局面）
SELECT face_id, ST_AsText(mbr) FROM city_topo.face;

-- 获取面的几何形状
SELECT topology.ST_GetFaceGeometry('city_topo', 1);
```

--------

## 拓扑几何（TopoGeometry）

拓扑几何是通过引用拓扑基元而非坐标来定义的空间对象。这确保了共享边界始终保持一致。

### 创建拓扑几何图层

```sql
-- 创建包含拓扑几何列的表
CREATE TABLE city_topo.blocks (
    id serial PRIMARY KEY,
    name text
);

-- 注册拓扑几何列（返回 layer_id）
SELECT topology.AddTopoGeometryColumn('city_topo', 'city_topo', 'blocks', 'topo', 'POLYGON');
```

### 赋值拓扑几何

```sql
-- 从常规几何创建拓扑几何（捕捉到已有拓扑）
INSERT INTO city_topo.blocks (name, topo) VALUES
    ('Block A', topology.toTopoGeom(
        ST_GeomFromText('POLYGON((-73.99 40.74,-73.98 40.74,-73.98 40.75,-73.99 40.75,-73.99 40.74))', 4326),
        'city_topo', 1));

-- 将拓扑几何转换回常规几何
SELECT name, topo::geometry FROM city_topo.blocks;
```

### 验证拓扑

```sql
-- 验证整个拓扑
SELECT * FROM topology.ValidateTopology('city_topo');

-- 检查拓扑错误
SELECT error FROM topology.ValidateTopology('city_topo')
WHERE error IS NOT NULL;
```

--------

## 清理

```sql
-- 删除拓扑及其所有对象
SELECT topology.DropTopology('city_topo');
```
