---
title: "address_standardizer"
linkTitle: "address_standardizer"
description: "地址标准化函数。"
weight: 1505
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

| **相关扩展** | [`pgrouting`](/ext/e/pgrouting) [`pointcloud`](/ext/e/pointcloud) [`pointcloud_postgis`](/ext/e/pointcloud_postgis) [`h3`](/ext/e/h3) [`h3_postgis`](/ext/e/h3_postgis) [`q3c`](/ext/e/q3c) [`ogr_fdw`](/ext/e/ogr_fdw) [`geoip`](/ext/e/geoip) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `3.6.3` | {{< pgvers "18,17,16,15,14" >}} | `postgis` | - |
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
CREATE EXTENSION address_standardizer;
```



## 用法

> [Address Standardizer：PostGIS 的地址解析与标准化](https://github.com/postgis/postgis)

Address Standardizer 是一个 PostGIS 扩展，使用可配置的词典、语法和规则表将单行地址字符串解析为结构化形式。它是 TIGER 地理编码器中内置 `normalize_address` 函数的更灵活替代方案。

- [Address Standardizer 参考手册](https://postgis.net/docs/Extras.html#Address_Standardizer)

### 安装

```sql
CREATE EXTENSION address_standardizer;
```

--------

## 标准化地址

核心函数接收一个地址字符串和三个表引用（lex、gaz、rules）：

```sql
SELECT *
FROM standardize_address(
    'us_lex',        -- 词典表
    'us_gaz',        -- 地名表
    'us_rules',      -- 规则表
    '1600 Pennsylvania Ave NW, Washington, DC 20500'
);
```

返回结果包含以下结构化字段：

| 字段 | 描述 |
|------|------|
| `building` | 建筑名称或标识 |
| `house_num` | 门牌号 |
| `predir` | 前缀方向（N、S、E、W） |
| `qual` | 限定符 |
| `pretype` | 前缀类型 |
| `name` | 街道名称 |
| `suftype` | 后缀类型（St、Ave、Blvd） |
| `sufdir` | 后缀方向 |
| `ruralroute` | 乡村路线 |
| `extra` | 附加信息 |
| `city` | 城市名 |
| `state` | 州 |
| `country` | 国家 |
| `postcode` | 邮政编码 |
| `box` | 邮政信箱 |
| `unit` | 单元/公寓号 |

--------

## 词典、地名和规则表

标准化器由三个用户可配置的表驱动：

**词典（lex）** -- 将输入词元映射为标准化形式和词元类别：

```sql
CREATE TABLE us_lex (
    id serial PRIMARY KEY,
    seq integer,
    word text,
    stdword text,
    token integer
);
```

**地名表（gaz）** -- 将地名（城市、州）映射为标准形式：

```sql
CREATE TABLE us_gaz (
    id serial PRIMARY KEY,
    seq integer,
    word text,
    stdword text,
    token integer
);
```

**规则（rules）** -- 定义地址解析的语法规则：

```sql
CREATE TABLE us_rules (
    id serial PRIMARY KEY,
    rule text
);
```

对于美国地址，`address_standardizer_data_us` 扩展提供了这些表的预置数据。
