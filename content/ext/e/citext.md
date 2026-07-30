---
title: "citext"
linkTitle: "citext"
description: "提供大小写不敏感的字符串类型"
weight: 3980
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/citext.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/citext.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/citext.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`citext`**](/ext/e/citext) | `1.6` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3980  | [**`citext`**](/ext/e/citext) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`unaccent`](/ext/e/unaccent) [`icu_ext`](/ext/e/icu_ext) [`pg_trgm`](/ext/e/pg_trgm) [`pg_xenophile`](/ext/e/pg_xenophile) [`gb18030_2022`](/ext/e/gb18030_2022) [`pg_cjk_parser`](/ext/e/pg_cjk_parser) [`dict_xsyn`](/ext/e/dict_xsyn) [`pgroonga`](/ext/e/pgroonga) [`pg_tokenizer`](/ext/e/pg_tokenizer) [`pgpcre`](/ext/e/pgpcre) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.6</span> | <span class="ext-badge ext-badge--avail">1.6</span> | <span class="ext-badge ext-badge--avail">1.6</span> | <span class="ext-badge ext-badge--avail">1.6</span> | <span class="ext-badge ext-badge--avail">1.6</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION citext;
```




## 用法

> [citext: 大小写不敏感的字符串类型](https://www.postgresql.org/docs/current/citext.html)

`citext` 扩展提供了一种大小写不敏感的文本类型，无需在查询中调用 `lower()` 函数。

```sql
CREATE EXTENSION citext;
```

### 基本用法

```sql
CREATE TABLE users (
    nick citext PRIMARY KEY,
    pass text NOT NULL
);

INSERT INTO users VALUES ('Larry', 'secret123');

-- 大小写不敏感匹配
SELECT * FROM users WHERE nick = 'larry';   -- 匹配 'Larry'
SELECT * FROM users WHERE nick = 'LARRY';   -- 匹配 'Larry'
```

### 行为特性

`citext` 通过内部将字符串转为小写来进行比较。以下操作在使用 `citext` 时不区分大小写：

- 比较运算符：`=`、`<>`、`<`、`>`、`<=`、`>=`
- 模式匹配：`LIKE`、`ILIKE`、`~~`、`~~*`
- 正则表达式：`~`、`~*`、`!~`、`!~*`

### 大小写不敏感函数

当参数为 `citext` 时，以下函数执行大小写不敏感匹配：

`regexp_match()`、`regexp_matches()`、`regexp_replace()`、`regexp_split_to_array()`、`regexp_split_to_table()`、`replace()`、`split_part()`、`strpos()`、`translate()`

### 相比 lower() 的优势

- 无需在 WHERE 子句中编写冗长的 `lower()` 调用
- 支持大小写不敏感的 PRIMARY KEY 和 UNIQUE 约束
- 无需创建函数索引
- 所有操作中透明地进行大小写折叠

### 局限性

- 大小写折叠取决于数据库创建时的 `LC_CTYPE` 设置
- 效率略低于 `text`（存在复制和转换开销）
- 不支持 B-tree 去重
- 如需更好的 Unicode 处理，建议使用非确定性排序规则
