---
title: "seg"
linkTitle: "seg"
description: "表示线段或浮点间隔的数据类型"
weight: 3940
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/seg.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/seg.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/seg.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`seg`**](/ext/e/seg) | `1.4` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3940  | [**`seg`**](/ext/e/seg) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`cube`](/ext/e/cube) [`intarray`](/ext/e/intarray) [`intagg`](/ext/e/intagg) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.4</span> | <span class="ext-badge ext-badge--avail">1.4</span> | <span class="ext-badge ext-badge--avail">1.4</span> | <span class="ext-badge ext-badge--avail">1.4</span> | <span class="ext-badge ext-badge--avail">1.4</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION seg;
```



## 用法

> [seg: 线段/浮点区间数据类型](https://www.postgresql.org/docs/current/seg.html)

`seg` 扩展提供了一种数据类型，用于表示线段或浮点区间，适合表示带有不确定性的测量值。

```sql
CREATE EXTENSION seg;
```

### 输入格式

```sql
SELECT '5.0'::seg;           -- 零长度区间（点）
SELECT '5.0 .. 7.0'::seg;    -- 从 5.0 到 7.0 的区间
SELECT '5(+-)0.3'::seg;      -- 区间 4.7 .. 5.3
SELECT '50 ..'::seg;          -- 开区间 >= 50
SELECT '.. 0'::seg;           -- 开区间 <= 0
```

精度指示符（`<`、`>`、`~`）可以前置，但仅作为注释使用，运算符会忽略它们。

### 运算符

**空间运算符（支持 GiST 索引）：**

| 运算符 | 描述 |
|--------|------|
| `<<` | 完全在左侧 |
| `>>` | 完全在右侧 |
| `&<` | 未超出右侧 |
| `&>` | 未超出左侧 |
| `=` | 相等 |
| `&&` | 重叠 |
| `@>` | 包含 |
| `<@` | 被包含 |

**比较运算符**（`<`、`<=`、`>`、`>=`）可用于排序。

### 索引支持

```sql
CREATE INDEX idx ON measurements USING gist (reading);
```

### 精度

值以 32 位浮点数对存储，保留最多 7 位有效数字。尾部零会被保留。
