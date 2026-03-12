---
title: "insert_username"
linkTitle: "insert_username"
description: "用于跟踪谁更改了表的函数"
weight: 4882
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-INSERT-USERNAME">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-INSERT-USERNAME</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-INSERT-USERNAME</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`insert_username`**](/ext/e/insert_username) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4882  | [**`insert_username`**](/ext/e/insert_username) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_idkit`](/ext/e/pg_idkit) [`pgx_ulid`](/ext/e/pgx_ulid) [`pg_uuidv7`](/ext/e/pg_uuidv7) [`permuteseq`](/ext/e/permuteseq) [`pg_hashids`](/ext/e/pg_hashids) [`sequential_uuids`](/ext/e/sequential_uuids) [`topn`](/ext/e/topn) [`quantile`](/ext/e/quantile) |
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
CREATE EXTENSION insert_username;
```



## 用法

> [insert_username: 记录修改表行的用户](https://www.postgresql.org/docs/current/contrib-spi.html)

提供将当前用户名存储到指定文本列的触发器函数。

```sql
CREATE EXTENSION insert_username;
```

### 触发器函数

| 函数 | 说明 |
|---|---|
| `insert_username()` | 将当前用户名存储到指定列 |

参数：用于存储用户名的文本列名。

### 示例

```sql
CREATE TABLE audit_log (
  id serial PRIMARY KEY,
  data text,
  modified_by text
);

-- 记录插入者
CREATE TRIGGER set_insert_user
  BEFORE INSERT ON audit_log
  FOR EACH ROW
  EXECUTE FUNCTION insert_username('modified_by');

-- 记录更新者
CREATE TRIGGER set_update_user
  BEFORE UPDATE ON audit_log
  FOR EACH ROW
  EXECUTE FUNCTION insert_username('modified_by');

INSERT INTO audit_log (data) VALUES ('test');
SELECT modified_by FROM audit_log;  -- 返回当前用户
```
