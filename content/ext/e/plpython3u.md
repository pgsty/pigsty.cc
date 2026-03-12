---
title: "plpython3u"
linkTitle: "plpython3u"
description: "PL/Python3 存储过程语言（未受信/高权限）"
weight: 3290
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

| **相关扩展** | [`faker`](/ext/e/faker) [`plv8`](/ext/e/plv8) [`pllua`](/ext/e/pllua) [`plluau`](/ext/e/plluau) [`pltcl`](/ext/e/pltcl) [`pltclu`](/ext/e/pltclu) [`plperl`](/ext/e/plperl) [`plperlu`](/ext/e/plperlu) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`hstore_plpython3u`](/ext/e/hstore_plpython3u) [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) [`ltree_plpython3u`](/ext/e/ltree_plpython3u) [`omni_python`](/ext/e/omni_python) [`pg4ml`](/ext/e/pg4ml) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION plpython3u;
```



## 用法

> [plpython3u: PL/Python3 不受信过程语言](https://www.postgresql.org/docs/current/plpython.html)

PL/Python3U 允许使用 Python 3 编写 PostgreSQL 函数。作为不受信语言，它可以完全访问 Python 生态系统。只有超级用户可以创建函数。

```sql
CREATE EXTENSION plpython3u;

-- 简单函数
CREATE FUNCTION py_hello(name text) RETURNS text
LANGUAGE plpython3u AS $$
  return f"Hello, {name}!"
$$;

SELECT py_hello('world');

-- 使用 Python 标准库
CREATE FUNCTION py_sha256(data text) RETURNS text
LANGUAGE plpython3u AS $$
  import hashlib
  return hashlib.sha256(data.encode()).hexdigest()
$$;

-- 返回复合类型
CREATE TYPE address AS (street text, city text, zip text);

CREATE FUNCTION parse_address(raw text) RETURNS address
LANGUAGE plpython3u AS $$
  import re
  m = re.match(r'(.+),\s*(.+)\s+(\d{5})', raw)
  if m:
    return (m.group(1), m.group(2), m.group(3))
  return None
$$;

-- 集合返回函数
CREATE FUNCTION py_generate_dates(start text, days int) RETURNS SETOF date
LANGUAGE plpython3u AS $$
  from datetime import datetime, timedelta
  d = datetime.strptime(start, '%Y-%m-%d')
  for i in range(days):
    yield (d + timedelta(days=i)).strftime('%Y-%m-%d')
$$;

-- 通过 plpy 访问数据库
CREATE FUNCTION py_row_count(table_name text) RETURNS bigint
LANGUAGE plpython3u AS $$
  result = plpy.execute(f"SELECT count(*) AS cnt FROM {table_name}")
  return result[0]['cnt']
$$;

-- 使用外部包（必须在服务器上安装）
CREATE FUNCTION py_parse_json(url text) RETURNS jsonb
LANGUAGE plpython3u AS $$
  import json, urllib.request
  response = urllib.request.urlopen(url)
  data = json.loads(response.read())
  return json.dumps(data)
$$;
```
