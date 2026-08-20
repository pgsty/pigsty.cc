---
title: "qdgc_postgis"
linkTitle: "qdgc_postgis"
description: "为 QDGC 增加 PostGIS geometry/geography 绑定与区域到网格单元的填充能力。"
weight: 1710
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://pgxn.org/dist/qdgc/0.1.0/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://pgxn.org/dist/qdgc/0.1.0/</div>
    <div class="ext-card__desc">https://pgxn.org/dist/qdgc/0.1.0/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/qdgc-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">qdgc-0.1.0.tar.gz</div>
    <div class="ext-card__desc">qdgc-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`qdgc`**](/ext/e/qdgc) | `0.1.0` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1700  | [**`qdgc`**](/ext/e/qdgc) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 1710  | [**`qdgc_postgis`**](/ext/e/qdgc_postgis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`qdgc`](/ext/e/qdgc) [`postgis`](/ext/e/postgis) [`postgis`](/ext/e/postgis) [`h3`](/ext/e/h3) [`pg_geohash`](/ext/e/pg_geohash) [`pgrouting`](/ext/e/pgrouting) [`q3c`](/ext/e/q3c) [`pg_polyline`](/ext/e/pg_polyline) [`pg_eviltransform`](/ext/e/pg_eviltransform) [`earthdistance`](/ext/e/earthdistance) [`mobilitydb`](/ext/e/mobilitydb) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `qdgc` | `qdgc`, `postgis` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `qdgc_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-qdgc` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `qdgc` 扩展的 RPM / DEB 包：

```bash
pig build pkg qdgc         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `qdgc` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="tab1-pig-dnf-apt" value="tab1"}
pig install qdgc;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y qdgc -v 18  # PG 18
pig ext install -y qdgc -v 17  # PG 17
pig ext install -y qdgc -v 16  # PG 16
pig ext install -y qdgc -v 15  # PG 15
pig ext install -y qdgc -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y qdgc_18       # PG 18
dnf install -y qdgc_17       # PG 17
dnf install -y qdgc_16       # PG 16
dnf install -y qdgc_15       # PG 15
dnf install -y qdgc_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-qdgc   # PG 18
apt install -y postgresql-17-qdgc   # PG 17
apt install -y postgresql-16-qdgc   # PG 16
apt install -y postgresql-15-qdgc   # PG 15
apt install -y postgresql-14-qdgc   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION qdgc_postgis CASCADE;  -- 依赖: qdgc, postgis
```

## 用法

来源：

- [PGXN qdgc 0.1.0 发布页](https://pgxn.org/dist/qdgc/0.1.0/)
- [官方 0.1.0 README](https://api.pgxn.org/src/qdgc/qdgc-0.1.0/README.md)
- [官方 qdgc_postgis 控制文件](https://api.pgxn.org/src/qdgc/qdgc-0.1.0/qdgc_postgis.control)
- [官方 qdgc_postgis 0.1.0 扩展 SQL](https://api.pgxn.org/src/qdgc/qdgc-0.1.0/qdgc_postgis--0.1.0.sql)

`qdgc_postgis` 0.1.0 是纯 SQL 核心扩展 `qdgc` 的 PostGIS 伴生扩展。它可以在 QDGC 单元与 PostGIS 点、多边形之间转换，按 WGS84 椭球计算单元面积，并用 QDGC 单元填充任意 geometry。该扩展同时依赖 `qdgc` 与 `postgis`，不能替代其中任何一个。

### 核心流程

```sql
CREATE EXTENSION postgis;
CREATE EXTENSION qdgc;
CREATE EXTENSION qdgc_postgis;

SELECT qdgc_latlng_to_cell(
    ST_SetSRID(ST_MakePoint(31.4, 2.7), 4326),
    5
);

SELECT qdgc_cell_to_geometry('E031N02ADBAC');
SELECT qdgc_cell_to_boundary_geometry('E031N02ADBAC');
SELECT qdgc_cell_area_km2('E031N02ADBAC');
```

点 geometry 重载会把非零且非 4326 的 SRID 转换到 EPSG:4326；SRID 为零时，则假定输入已经是经纬度坐标。

### 填充关注区域

执行深层级填充前，应先估算结果规模：

```sql
WITH area AS (
    SELECT ST_GeomFromText(
        'POLYGON((31.0 2.0, 31.5 2.0, 31.5 2.5, 31.0 2.5, 31.0 2.0))',
        4326
    ) AS geom
)
SELECT qdgc_estimate_cell_count(geom, 7)
FROM area;

WITH area AS (
    SELECT ST_GeomFromText(
        'POLYGON((31.0 2.0, 31.5 2.0, 31.5 2.5, 31.0 2.5, 31.0 2.0))',
        4326
    ) AS geom
)
SELECT cell
FROM area
CROSS JOIN LATERAL qdgc_polygon_to_cells(
    geom,
    7,
    'intersects'
) AS cell;
```

谓词可选值如下：

- `intersects` 是默认值，返回与输入 geometry 相交的单元；
- `centroid` 返回中心点位于输入 geometry 内的单元；
- `contains` 返回完全位于输入 geometry 内的单元。

实现采用可剪枝四叉树逐层下降，而不是测试 geometry 完整包围盒中的每个单元。多部件 geometry 会按部件分别填充，再合并单元集合。

### 重要对象

- `qdgc_latlng_to_cell(geometry, level)` 及其 `geography` 重载用于编码 PostGIS 点。
- `qdgc_cell_to_geometry` 与 `qdgc_cell_to_geography` 返回单元中心点。
- `qdgc_cell_to_boundary_geometry` 与 `qdgc_cell_to_boundary_geography` 返回矩形单元边界。
- `qdgc_cell_area_km2` 在 WGS84 椭球上测量单元边界对应的 geography 面积。
- `qdgc_polygon_to_cells` 按三种已记录谓词之一填充区域。
- `qdgc_estimate_cell_count` 在真正生成填充结果前提供受包围盒上限约束的低成本估算。

### 运维说明

- `qdgc_postgis.control` 声明了 `requires = 'qdgc,postgis'` 与 `relocatable = true`。应先由具备相应权限的角色安装 PostGIS，再把伴生扩展的使用交给普通用户。
- 不需要 `shared_preload_libraries`、`LOAD` 或重启。该扩展自身只有 SQL，但其 PostGIS 依赖包含本地代码。
- `qdgc`、`qdgc_postgis` 及其被调用依赖应安装到当前 `search_path` 可见的模式中，因为这些可迁移 SQL 函数使用未限定名称调用彼此。
- 上游测试了 PostgreSQL 13–17；不能因为该扩展没有编译代码就推断 PostgreSQL 18 已获支持。
- 即使采用剪枝，深层级区域填充仍可能生成巨量结果。应把 `qdgc_estimate_cell_count` 作为运维保护，并在调用 `qdgc_polygon_to_cells` 前施加应用侧规模限制。
