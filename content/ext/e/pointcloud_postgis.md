---
title: "pointcloud_postgis"
linkTitle: "pointcloud_postgis"
description: "将激光雷达点云与PostGIS几何类型相集成"
weight: 1521
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgpointcloud/pointcloud">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgpointcloud/pointcloud</div>
    <div class="ext-card__desc">https://github.com/pgpointcloud/pointcloud</div>
  </a>
  <a class="ext-card ext-card--source" href="pointcloud-1.2.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pointcloud-1.2.5.tar.gz</div>
    <div class="ext-card__desc">pointcloud-1.2.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pointcloud`**](/ext/e/pointcloud) | `1.2.5` | <a class="ext-badge ext-badge--cate gis" href="/ext/cate/gis">GIS</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 1520  | [**`pointcloud`**](/ext/e/pointcloud) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 1521  | [**`pointcloud_postgis`**](/ext/e/pointcloud_postgis) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`postgis`](/ext/e/postgis) [`pointcloud`](/ext/e/pointcloud) [`postgis_raster`](/ext/e/postgis_raster) [`postgis_topology`](/ext/e/postgis_topology) [`postgis_sfcgal`](/ext/e/postgis_sfcgal) [`postgis_tiger_geocoder`](/ext/e/postgis_tiger_geocoder) [`address_standardizer`](/ext/e/address_standardizer) [`address_standardizer_data_us`](/ext/e/address_standardizer_data_us) [`pgrouting`](/ext/e/pgrouting) [`h3`](/ext/e/h3) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `pointcloud` | `postgis`, `pointcloud` |
| [**RPM**](/ext/rpm#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `pointcloud_$v` | - |
| [**DEB**](/ext/deb#gis) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `1.2.5` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pointcloud` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el8.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el9.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el9.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el10.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| el10.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| d12.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| d12.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| d13.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| d13.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| u22.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| u22.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| u24.x86_64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
| u24.aarch64 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 | AVAIL PGDG 1.2.5 1 |
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pointcloud` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pointcloud;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pointcloud -v 18  # PG 18
pig ext install -y pointcloud -v 17  # PG 17
pig ext install -y pointcloud -v 16  # PG 16
pig ext install -y pointcloud -v 15  # PG 15
pig ext install -y pointcloud -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pointcloud_18       # PG 18
dnf install -y pointcloud_17       # PG 17
dnf install -y pointcloud_16       # PG 16
dnf install -y pointcloud_15       # PG 15
dnf install -y pointcloud_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pointcloud   # PG 18
apt install -y postgresql-17-pointcloud   # PG 17
apt install -y postgresql-16-pointcloud   # PG 16
apt install -y postgresql-15-pointcloud   # PG 15
apt install -y postgresql-14-pointcloud   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pointcloud_postgis CASCADE;  -- 依赖: postgis, pointcloud
```



## 用法

> [pointcloud_postgis: pgPointcloud 的 PostGIS 集成](https://github.com/pgpointcloud/pointcloud)

`pointcloud_postgis` 是将 pgPointcloud 扩展与 PostGIS 集成的桥接扩展。它实现了点云几何类型与 PostGIS 几何类型之间的转换。

```sql
CREATE EXTENSION pointcloud_postgis;
```

该扩展需要同时安装 `pointcloud` 和 `postgis`。它添加了在 `pcpoint`/`pcpatch` 类型与 PostGIS `geometry` 类型之间转换的函数，使得可以使用 PostGIS 运算符和函数对点云数据进行空间查询。
