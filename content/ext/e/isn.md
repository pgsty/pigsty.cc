---
title: "isn"
linkTitle: "isn"
description: "用于国际产品编号标准的数据类型"
weight: 3930
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/isn.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/isn.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/isn.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`isn`**](/ext/e/isn) | `1.2` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3930  | [**`isn`**](/ext/e/isn) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) [`roaringbitmap`](/ext/e/roaringbitmap) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION isn;
```



## 用法

> [isn: ISBN、ISSN、EAN、UPC 产品编号类型](https://www.postgresql.org/docs/current/isn.html)

`isn` 扩展提供了符合国际产品编号标准的数据类型，支持验证和校验位核验。

```sql
CREATE EXTENSION isn;
```

### 数据类型

| 类型 | 描述 |
|------|------|
| `EAN13` | 欧洲商品编码（始终为 13 位） |
| `ISBN13` | 国际标准书号（13 位） |
| `ISMN13` | 国际标准音乐号（13 位） |
| `ISSN13` | 国际标准连续出版物号（13 位） |
| `ISBN` | 书号（可能时使用 10 位短格式） |
| `ISMN` | 音乐号（可能时使用 10 位短格式） |
| `ISSN` | 连续出版物号（可能时使用 10 位短格式） |
| `UPC` | 通用产品代码 |

### 示例

```sql
SELECT isbn('978-0-393-04002-9');
SELECT isbn13('0901690546');
SELECT issn('1436-4522');

-- 创建带 ISBN 列的表
CREATE TABLE books (id isbn);
INSERT INTO books VALUES ('9780393040029');

-- 使用 ? 自动计算校验位
INSERT INTO books VALUES ('220500896?');

-- 类型转换
SELECT ean13('0901690546'::isbn);
```

### 弱模式

启用弱模式可接受无效校验位（适用于 OCR/数据清理场景）：

```sql
SET isn.weak TO true;
INSERT INTO books VALUES ('978-0-11-000533-4');
SET isn.weak TO false;

-- 查找无效条目
SELECT id FROM books WHERE NOT is_valid(id);

-- 修复无效条目
UPDATE books SET id = make_valid(id) WHERE id = '2-205-00876-X!';
```

### 函数

| 函数 | 描述 |
|------|------|
| `is_valid(isn)` | 检查值是否具有有效校验位 |
| `make_valid(isn)` | 清除无效校验位标志 |
| `isn_weak()` | 返回当前弱模式状态 |
| `isn_weak(boolean)` | 设置弱模式 |

### 运算符与索引

支持标准比较运算符（`=`、`<`、`>`、`<=`、`>=`、`<>`），以及 B-tree 和 Hash 索引。
