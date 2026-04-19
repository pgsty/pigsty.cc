---
title: "postgis_tiger_geocoder"
linkTitle: "postgis_tiger_geocoder"
description: "PostGIS tiger 地理编码器和反向地理编码器"
weight: 1504
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

| **相关扩展** | [`postgis`](/ext/e/postgis) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`pgrouting`](/ext/e/pgrouting) [`pointcloud`](/ext/e/pointcloud) [`pointcloud_postgis`](/ext/e/pointcloud_postgis) [`h3`](/ext/e/h3) [`h3_postgis`](/ext/e/h3_postgis) [`q3c`](/ext/e/q3c) [`ogr_fdw`](/ext/e/ogr_fdw) [`geoip`](/ext/e/geoip) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.3` | {{< pgvers "18,17,16,15,14" >}} | `postgis` | `postgis`, `fuzzystrmatch` |
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
CREATE EXTENSION postgis_tiger_geocoder CASCADE;  -- 依赖: postgis, fuzzystrmatch
```



## 用法

> [PostGIS TIGER Geocoder：基于美国人口普查 TIGER/Line 数据的 PostGIS 地理编码](https://github.com/postgis/postgis)

PostGIS TIGER Geocoder 利用美国人口普查 TIGER/Line 数据提供地理编码和反向地理编码功能。它可以将地址字符串解析为标准化格式、查找地理坐标，以及将坐标反向解析为地址。

- [TIGER Geocoder 参考手册](https://postgis.net/docs/Extras.html)

### 安装

```sql
CREATE EXTENSION postgis_tiger_geocoder CASCADE;
```

这将创建包含地理编码器表和函数的 `tiger` 模式。

--------

## 加载 TIGER 数据

在进行地理编码之前，必须先加载所需州的 TIGER/Line 数据。该扩展提供了辅助函数来生成加载脚本：

```sql
-- 生成下载和加载某个州数据的脚本
-- （例如，马萨诸塞州 = 'MA'）
SELECT loader_generate_script(ARRAY['MA'], 'sh');
```

这会生成一个使用 `shp2pgsql` 加载 TIGER 形状文件的 shell 脚本。运行生成的脚本可将地址范围、边、面等数据填充到 `tiger_data` 模式中。

加载完成后：

```sql
-- 安装缺失的索引以提升性能
SELECT install_missing_indexes();

-- 更新统计信息
ANALYZE tiger.addr;
ANALYZE tiger.edges;
ANALYZE tiger.faces;
```

--------

## 地理编码

将美国地址字符串转换为地理坐标：

```sql
-- 基本地理编码
SELECT g.rating, ST_X(g.geomout) AS lon, ST_Y(g.geomout) AS lat,
       pprint_addy(g.addy) AS address
FROM geocode('1600 Pennsylvania Ave NW, Washington, DC 20500') AS g;
```

`rating` 表示匹配质量（越低越好，0 = 精确匹配）。

```sql
-- 限制返回结果数量的地理编码
SELECT g.rating, ST_AsText(g.geomout), pprint_addy(g.addy)
FROM geocode('100 Main St, Boston, MA', 3) AS g;

-- 从表中批量地理编码
SELECT a.id, g.rating, g.geomout, pprint_addy(g.addy)
FROM addresses a, LATERAL geocode(a.address_string, 1) AS g;
```

--------

## 反向地理编码

将坐标转换回街道地址：

```sql
SELECT pprint_addy(r.addy[1]) AS address
FROM reverse_geocode(ST_SetSRID(ST_MakePoint(-77.0365, 38.8977), 4326)) AS r;
```

--------

## 地址标准化

无需地理编码即可解析和标准化地址字符串：

```sql
SELECT *
FROM normalize_address('1600 Pennsylvania Avenue NW, Washington, DC 20500');
```

返回的组件包括：`address`（门牌号）、`predirAbbrev`、`streetName`、`streetTypeAbbrev`、`postdirAbbrev`、`internal`、`location`（城市）、`stateAbbrev`、`zip`、`parsed`。

```sql
-- 格式化输出标准化地址
SELECT pprint_addy(normalize_address('100 main street boston ma 02101'));
```

--------

## 配置

`tiger.geocode_settings` 表控制地理编码器的行为：

```sql
-- 查看当前设置
SELECT * FROM tiger.geocode_settings;

-- 调整设置（例如，增加调试级别）
UPDATE tiger.geocode_settings SET val = 'true' WHERE name = 'debug_geocode_address';
```
