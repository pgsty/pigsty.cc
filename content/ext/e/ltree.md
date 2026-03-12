---
title: "ltree"
linkTitle: "ltree"
description: "用于表示分层树状结构的数据类型"
weight: 3960
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/ltree.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/ltree.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/ltree.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`ltree`**](/ext/e/ltree) | `1.3` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3960  | [**`ltree`**](/ext/e/ltree) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`prefix`](/ext/e/prefix) [`semver`](/ext/e/semver) [`citext`](/ext/e/citext) [`unit`](/ext/e/unit) [`pgpdf`](/ext/e/pgpdf) [`pglite_fusion`](/ext/e/pglite_fusion) [`md5hash`](/ext/e/md5hash) [`asn1oid`](/ext/e/asn1oid) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`ltree_plpython3u`](/ext/e/ltree_plpython3u) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION ltree;
```



## 用法

> [ltree: 层次树状标签数据类型](https://www.postgresql.org/docs/current/ltree.html)

`ltree` 扩展提供了用于层次树状结构数据的数据类型，具有丰富的搜索功能。

```sql
CREATE EXTENSION ltree;
```

### 数据类型

- **`ltree`**：标签路径（例如 `Top.Science.Astronomy`）
- **`lquery`**：用于匹配 ltree 值的正则式模式
- **`ltxtquery`**：类似全文搜索的模式

### 基本用法

```sql
CREATE TABLE categories (path ltree);
INSERT INTO categories VALUES
    ('Top'), ('Top.Science'), ('Top.Science.Astronomy'),
    ('Top.Hobbies'), ('Top.Collections.Pictures');

-- 查找后代
SELECT path FROM categories WHERE path <@ 'Top.Science';

-- 模式匹配
SELECT path FROM categories WHERE path ~ '*.Astronomy.*';

-- 全文搜索
SELECT path FROM categories WHERE path @ 'Science & !Pictures';
```

### 运算符

| 运算符 | 描述 |
|--------|------|
| `@>` | 是祖先（或相等） |
| `<@` | 是后代（或相等） |
| `~` | 匹配 lquery 模式 |
| `?` | 匹配数组中的任一 lquery |
| `@` | 匹配 ltxtquery |
| `\|\|` | 连接路径 |

### lquery 模式

```sql
'*.Science.*'           -- 包含 Science 的任意路径
'Top.*{1,2}.Astronomy'  -- Top 和 Astronomy 之间有 1-2 个标签
'*.astro*'              -- 前缀匹配
'*.Astro*@'             -- 不区分大小写的前缀匹配
```

### 函数

```sql
SELECT nlevel('Top.Science.Astronomy');                     -- 3
SELECT subltree('Top.Science.Astronomy', 1, 2);            -- Science
SELECT subpath('Top.Science.Astronomy', 1);                 -- Science.Astronomy
SELECT index('a.b.c.d', 'b.c');                             -- 1
SELECT lca('1.2.3', '1.2.3.4.5');                          -- 1.2
SELECT lca(ARRAY['1.2.3'::ltree, '1.2.4'::ltree]);        -- 1.2
```

### 索引支持

```sql
-- GiST 索引（支持 @>、<@、~、?、@）
CREATE INDEX path_gist_idx ON categories USING gist (path);

-- B-tree 索引（支持 <、<=、=、>=、>）
CREATE INDEX path_idx ON categories USING btree (path);
```
