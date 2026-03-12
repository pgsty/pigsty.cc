---
title: "unaccent"
linkTitle: "unaccent"
description: "删除重音的文本搜索字典"
weight: 4990
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/unaccent.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/unaccent.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/unaccent.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`unaccent`**](/ext/e/unaccent) | `1.1` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4990  | [**`unaccent`**](/ext/e/unaccent) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_trgm`](/ext/e/pg_trgm) [`fuzzystrmatch`](/ext/e/fuzzystrmatch) [`citext`](/ext/e/citext) [`btree_gist`](/ext/e/btree_gist) [`btree_gin`](/ext/e/btree_gin) [`prefix`](/ext/e/prefix) [`dict_xsyn`](/ext/e/dict_xsyn) [`dict_int`](/ext/e/dict_int) |
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
CREATE EXTENSION unaccent;
```



## 用法

> [unaccent: 用于去除重音的全文搜索词典](https://www.postgresql.org/docs/current/unaccent.html)

去除文本中的重音符号（变音符号）。可用作全文搜索词典或独立函数。

```sql
CREATE EXTENSION unaccent;
```

### 函数

| 函数 | 说明 |
|---|---|
| `unaccent(text)` | 使用默认词典去除重音 |
| `unaccent(dictionary regdictionary, text)` | 使用指定词典去除重音 |

### 全文搜索用法

```sql
-- 测试词典
SELECT ts_lexize('unaccent', 'Hôtel');
-- {Hotel}

-- 创建不区分重音的法语文本搜索配置
CREATE TEXT SEARCH CONFIGURATION fr (COPY = french);
ALTER TEXT SEARCH CONFIGURATION fr
  ALTER MAPPING FOR hword, hword_part, word
  WITH unaccent, french_stem;

SELECT to_tsvector('fr', 'Hôtels de la Mer');
-- 'hotel':1 'mer':4

-- 不区分重音的搜索
SELECT to_tsvector('fr', 'Hôtel de la Mer') @@ to_tsquery('fr', 'Hotels');
-- true
```

### 独立函数用法

```sql
SELECT unaccent('Hôtel');           -- Hotel
SELECT unaccent('café');            -- cafe
SELECT unaccent('résumé');          -- resume
SELECT unaccent('niño');            -- nino
```
