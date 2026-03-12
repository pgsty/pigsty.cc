---
title: "xml2"
linkTitle: "xml2"
description: "XPath 查询和 XSLT"
weight: 3990
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/xml2.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/xml2.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/xml2.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`xml2`**](/ext/e/xml2) | `1.1` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3990  | [**`xml2`**](/ext/e/xml2) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgjq`](/ext/e/pgjq) [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> | <span class="ext-badge ext-badge--avail">1.1</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION xml2;
```



## 用法

> [xml2: XPath 查询与 XSLT 转换功能](https://www.postgresql.org/docs/current/xml2.html)

`xml2` 扩展提供了 XML 文档的 XPath 查询和 XSLT 转换函数。注意：该模块已被弃用，建议使用核心 SQL/XML 功能替代。

```sql
CREATE EXTENSION xml2;
```

### XML 验证

```sql
SELECT xml_valid('<doc><item>test</item></doc>');  -- true
```

### XPath 查询函数

```sql
-- 提取文本值
SELECT xpath_string('<doc><name>Alice</name></doc>', '/doc/name');

-- 提取数值
SELECT xpath_number('<doc><count>42</count></doc>', '/doc/count');

-- 提取布尔值
SELECT xpath_bool('<doc><active>true</active></doc>', '/doc/active');

-- 提取带标签的节点集
SELECT xpath_nodeset('<doc><a>1</a><a>2</a></doc>', '/doc/a', 'results', 'item');

-- 提取值为逗号分隔的列表
SELECT xpath_list('<doc><a>1</a><a>2</a></doc>', '/doc/a');  -- 1,2
```

### xpath_table 函数

对一组文档执行多个 XPath 查询：

```sql
SELECT * FROM
  xpath_table('id', 'xml_col', 'documents',
              '/doc/author|/doc/title',
              'true')
  AS t(id int, author text, title text);
```

参数说明：
- 键字段名（第一个输出列）
- XML 文档字段名
- 表/视图名
- 以 `|` 分隔的 XPath 表达式
- WHERE 子句（使用 `'true'` 表示所有行）

### XSLT 转换

```sql
-- 对文档应用 XSL 样式表
SELECT xslt_process(xml_document, xsl_stylesheet);

-- 带参数
SELECT xslt_process(xml_document, xsl_stylesheet, 'param1=value1,param2=value2');
```
