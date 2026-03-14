---
title: "cube"
linkTitle: "cube"
description: "用于存储多维立方体的数据类型"
weight: 3950
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/cube.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/cube.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/cube.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`cube`**](/ext/e/cube) | `1.5` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3950  | [**`cube`**](/ext/e/cube) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`seg`](/ext/e/seg) [`intarray`](/ext/e/intarray) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`earthdistance`](/ext/e/earthdistance) [`pg4ml`](/ext/e/pg4ml) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.5</span> | <span class="ext-badge ext-badge--avail">1.5</span> | <span class="ext-badge ext-badge--avail">1.5</span> | <span class="ext-badge ext-badge--avail">1.5</span> | <span class="ext-badge ext-badge--avail">1.5</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION cube;
```



## 用法

> [cube: 多维立方体数据类型](https://www.postgresql.org/docs/current/cube.html)

`cube` 扩展提供了一种数据类型，用于表示多维立方体（最多支持 100 维）。

```sql
CREATE EXTENSION cube;
```

### 输入格式

```sql
SELECT '(1,2),(3,4)'::cube;         -- 二维立方体
SELECT '(1,2,3)'::cube;              -- 三维点（零体积）
SELECT cube(1.0, 2.0);               -- 从 1 到 2 的一维立方体
SELECT cube(ARRAY[1,2], ARRAY[3,4]); -- 从数组创建的二维立方体
```

### 运算符

| 运算符 | 描述 |
|--------|------|
| `&&` | 重叠 |
| `@>` | 包含 |
| `<@` | 被包含 |
| `->` | 提取第 n 个坐标 |
| `<->` | 欧氏距离 |
| `<#>` | 曼哈顿距离（L-1） |
| `<=>` | 切比雪夫距离（L-inf） |

### 函数

```sql
SELECT cube_dim('(1,2),(3,4)'::cube);                  -- 2
SELECT cube_ll_coord('(1,2),(3,4)'::cube, 1);          -- 1
SELECT cube_ur_coord('(1,2),(3,4)'::cube, 1);          -- 3
SELECT cube_is_point(cube(1,1));                        -- true
SELECT cube_distance('(1,2)'::cube, '(3,4)'::cube);    -- 2.828...
SELECT cube_union('(1,2)'::cube, '(3,4)'::cube);       -- (1,2),(3,4)
SELECT cube_inter('(0,0),(2,2)'::cube, '(1,1),(3,3)'::cube);
SELECT cube_subset(cube('(1,3,5),(6,7,8)'), ARRAY[2]); -- (3),(7)
SELECT cube_enlarge('(1,2),(3,4)'::cube, 0.5, 2);      -- 按半径扩展
```

### GiST 索引与 KNN 搜索

```sql
CREATE INDEX idx ON points USING gist (location);

-- 查找最近的点（距 (0.5, 0.5, 0.5) 最近）
SELECT * FROM points
ORDER BY location <-> cube(ARRAY[0.5, 0.5, 0.5])
LIMIT 1;
```

### 维度处理

当对不同维度的立方体进行运算时，低维立方体的缺失坐标将被视为零。
