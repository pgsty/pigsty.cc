---
title: "dict_int"
linkTitle: "dict_int"
description: "用于整数的文本搜索字典模板"
weight: 4980
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/dict-int.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/dict-int.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/dict-int.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`dict_int`**](/ext/e/dict_int) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4980  | [**`dict_int`**](/ext/e/dict_int) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`dict_xsyn`](/ext/e/dict_xsyn) [`unaccent`](/ext/e/unaccent) [`pg_similarity`](/ext/e/pg_similarity) [`smlar`](/ext/e/smlar) [`pg_summarize`](/ext/e/pg_summarize) [`pg_search`](/ext/e/pg_search) [`pgroonga`](/ext/e/pgroonga) [`pg_bigm`](/ext/e/pg_bigm) |
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
CREATE EXTENSION dict_int;
```



## 用法

> [dict_int: 全文搜索的整数词典](https://www.postgresql.org/docs/current/dict-int.html)

控制全文搜索中整数的索引方式，防止因唯一词过多导致搜索性能下降。

```sql
CREATE EXTENSION dict_int;
```

### 配置参数

| 参数 | 说明 | 默认值 |
|---|---|---|
| `maxlen` | 允许的最大位数 | 6 |
| `rejectlong` | 为 `true` 时拒绝超长整数（作为停用词），为 `false` 时截断 | `false` |
| `absval` | 为 `true` 时在应用 maxlen 之前去除前导 `+`/`-` | `false` |

### 示例

```sql
-- 测试默认词典
SELECT ts_lexize('intdict', '12345678');
-- {123456}  （默认截断为 6 位）

-- 配置为拒绝过长整数
ALTER TEXT SEARCH DICTIONARY intdict (MAXLEN = 4, REJECTLONG = true);
SELECT ts_lexize('intdict', '12345');
-- {}  （作为停用词被拒绝）

SELECT ts_lexize('intdict', '1234');
-- {1234}  （接受）

-- 应用到文本搜索配置
ALTER TEXT SEARCH CONFIGURATION english
  ALTER MAPPING FOR int, uint WITH intdict;
```
