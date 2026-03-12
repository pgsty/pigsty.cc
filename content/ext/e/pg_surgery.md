---
title: "pg_surgery"
linkTitle: "pg_surgery"
description: "对损坏的关系进行手术"
weight: 5990
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgsurgery.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgsurgery.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgsurgery.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_surgery`**](/ext/e/pg_surgery) | `1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5990  | [**`pg_surgery`**](/ext/e/pg_surgery) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_dirtyread`](/ext/e/pg_dirtyread) [`amcheck`](/ext/e/amcheck) [`pageinspect`](/ext/e/pageinspect) [`pg_checksums`](/ext/e/pg_checksums) [`pg_catcheck`](/ext/e/pg_catcheck) [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs) [`pagevis`](/ext/e/pagevis) [`pg_visibility`](/ext/e/pg_visibility) |
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
CREATE EXTENSION pg_surgery;
```



## 用法

> [pg_surgery: 对损坏的关系执行手术修复的扩展](https://www.postgresql.org/docs/current/pgsurgery.html)

`pg_surgery` 扩展提供对损坏关系执行底层手术修复的函数。这些是最后手段的工具，误用可能导致数据损坏。

### 函数

#### heap_force_kill

将行指针标记为"死亡"而不检查元组，强制移除不可访问的元组。

```sql
heap_force_kill(regclass, tid[]) RETURNS void
```

```sql
-- 元组在访问时导致错误
SELECT * FROM t1 WHERE ctid = '(0, 1)';
-- ERROR: could not access status of transaction 4007513275

-- 强制杀死有问题的元组
SELECT heap_force_kill('t1'::regclass, ARRAY['(0, 1)']::tid[]);

-- 元组现在已被移除
SELECT * FROM t1 WHERE ctid = '(0, 1)';
-- (0 rows)
```

#### heap_force_freeze

将元组标记为已冻结而不检查元组数据，使可见性信息损坏的元组变为可访问。

```sql
heap_force_freeze(regclass, tid[]) RETURNS void
```

```sql
-- VACUUM 因可见性信息损坏而失败
VACUUM t1;
-- ERROR: found xmin 507 from before relfrozenxid 515

-- 找到有问题的元组
SELECT ctid FROM t1 WHERE xmin = 507;
--  ctid
-- -------
--  (0,3)

-- 强制冻结元组
SELECT heap_force_freeze('t1'::regclass, ARRAY['(0, 3)']::tid[]);

-- 元组现在已冻结（xmin 变为 2 = FrozenTransactionId）
SELECT ctid FROM t1 WHERE xmin = 2;
--  ctid
-- -------
--  (0,3)
```

### 何时使用

- `heap_force_kill`：当元组因事务状态损坏导致访问错误，且数据可以丢弃时
- `heap_force_freeze`：当 VACUUM 因元组的 xmin 早于 relfrozenxid 而失败时，或当元组因可见性信息损坏而不可见时

这些函数在设计上是不安全的，只应在正常恢复方法失败后作为最后手段使用。
