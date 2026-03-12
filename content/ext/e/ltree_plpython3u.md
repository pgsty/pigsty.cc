---
title: "ltree_plpython3u"
linkTitle: "ltree_plpython3u"
description: "在 ltree 和 plpython3u 之间转换"
weight: 3292
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/plpython.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/plpython.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/plpython.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plpython3u`**](/ext/e/plpython3u) | `1.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3290  | [**`plpython3u`**](/ext/e/plpython3u) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 3291  | [**`jsonb_plpython3u`**](/ext/e/jsonb_plpython3u) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 3292  | [**`ltree_plpython3u`**](/ext/e/ltree_plpython3u) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 3293  | [**`hstore_plpython3u`**](/ext/e/hstore_plpython3u) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`ltree`](/ext/e/ltree) [`plpython3u`](/ext/e/plpython3u) [`faker`](/ext/e/faker) [`plperl`](/ext/e/plperl) [`plpgsql`](/ext/e/plpgsql) [`pg_tle`](/ext/e/pg_tle) |
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
CREATE EXTENSION ltree_plpython3u;
```



## 用法

> [ltree_plpython3u: ltree 与 PL/Python3 之间的类型转换](https://www.postgresql.org/docs/current/ltree.html)

为 PL/Python3U 提供 `ltree` 类型的转换支持。加载后，`ltree` 值会自动转换为 Python 字符串，反之亦然。

```sql
CREATE EXTENSION ltree_plpython3u;

CREATE FUNCTION ltree_depth(val ltree) RETURNS integer
LANGUAGE plpython3u TRANSFORM FOR TYPE ltree AS $$
  # val 现在是一个 Python 字符串，如 "a.b.c"
  return len(val.split('.'))
$$;

CREATE FUNCTION ltree_leaf(val ltree) RETURNS text
LANGUAGE plpython3u TRANSFORM FOR TYPE ltree AS $$
  return val.split('.')[-1]
$$;

SELECT ltree_depth('top.science.astronomy'::ltree);  -- 3
SELECT ltree_leaf('top.science.astronomy'::ltree);    -- astronomy
```
