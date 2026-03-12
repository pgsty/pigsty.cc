---
title: "dict_xsyn"
linkTitle: "dict_xsyn"
description: "用于扩展同义词处理的文本搜索字典模板"
weight: 4900
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/dict-xsyn.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/dict-xsyn.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/dict-xsyn.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`dict_xsyn`**](/ext/e/dict_xsyn) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4900  | [**`dict_xsyn`**](/ext/e/dict_xsyn) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`dict_int`](/ext/e/dict_int) [`unaccent`](/ext/e/unaccent) [`pg_similarity`](/ext/e/pg_similarity) [`smlar`](/ext/e/smlar) [`pg_summarize`](/ext/e/pg_summarize) [`pg_search`](/ext/e/pg_search) [`pgroonga`](/ext/e/pgroonga) [`pg_bigm`](/ext/e/pg_bigm) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION dict_xsyn;
```



## 用法

> [dict_xsyn: 全文搜索的扩展同义词词典](https://www.postgresql.org/docs/current/dict-xsyn.html)

提供用于全文搜索的扩展同义词词典模板，将词语替换为同义词组。

```sql
CREATE EXTENSION dict_xsyn;
```

### 配置参数

| 参数 | 说明 | 默认值 |
|---|---|---|
| `matchorig` | 接受原始词语 | `true` |
| `matchsynonyms` | 接受同义词作为输入 | `false` |
| `keeporig` | 在输出中包含原始词语 | `true` |
| `keepsynonyms` | 在输出中包含同义词 | `true` |
| `rules` | `$SHAREDIR/tsearch_data/` 目录下同义词文件的基本名称（`.rules` 扩展名） | -- |

### 规则文件格式

```
word syn1 syn2 syn3
```

以 `#` 开头的行为注释。

### 示例

```sql
-- 配置词典
ALTER TEXT SEARCH DICTIONARY xsyn (RULES='my_rules', KEEPORIG=true);

-- 测试词典
SELECT ts_lexize('xsyn', 'word');
-- {word,syn1,syn2,syn3}

-- 同时将同义词作为输入进行匹配
ALTER TEXT SEARCH DICTIONARY xsyn (RULES='my_rules', MATCHSYNONYMS=true);
SELECT ts_lexize('xsyn', 'syn1');
-- {syn1,syn2,syn3}

-- 在文本搜索配置中使用
ALTER TEXT SEARCH CONFIGURATION english
  ALTER MAPPING FOR word, asciiword WITH xsyn, english_stem;
```
