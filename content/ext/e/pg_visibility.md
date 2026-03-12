---
title: "pg_visibility"
linkTitle: "pg_visibility"
description: "检查可见性图（VM）和页面级可见性信息"
weight: 6960
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgvisibility.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgvisibility.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgvisibility.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_visibility`**](/ext/e/pg_visibility) | `1.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6960  | [**`pg_visibility`**](/ext/e/pg_visibility) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`amcheck`](/ext/e/amcheck) [`pageinspect`](/ext/e/pageinspect) [`pg_freespacemap`](/ext/e/pg_freespacemap) [`pgstattuple`](/ext/e/pgstattuple) [`pgfincore`](/ext/e/pgfincore) [`pg_checksums`](/ext/e/pg_checksums) [`pg_catcheck`](/ext/e/pg_catcheck) [`pgcozy`](/ext/e/pgcozy) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION pg_visibility;
```




## 用法

> [pg_visibility: 检查可见性映射](https://www.postgresql.org/docs/current/pgvisibility.html)

pg_visibility 提供函数来检查和验证可见性映射（VM），VM 追踪哪些页面仅包含对所有事务可见的元组。

### 函数

**单页可见性：**

```sql
-- 特定块的 VM 位
SELECT * FROM pg_visibility_map('my_table', 0);
-- 返回：all_visible、all_frozen

-- VM 位加上页面的 PD_ALL_VISIBLE 标志
SELECT * FROM pg_visibility('my_table', 0);
-- 返回：all_visible、all_frozen、pd_all_visible
```

**所有页面的可见性：**

```sql
-- 每个页面的 VM 位
SELECT * FROM pg_visibility_map('my_table');
-- 返回：blkno、all_visible、all_frozen

-- 每个页面的 VM 位加上 PD_ALL_VISIBLE
SELECT * FROM pg_visibility('my_table');
-- 返回：blkno、all_visible、all_frozen、pd_all_visible
```

**汇总：**

```sql
SELECT * FROM pg_visibility_map_summary('my_table');
-- 返回：all_visible（计数）、all_frozen（计数）
```

### 损坏检测

```sql
-- 查找 all-frozen 页面上实际未冻结的元组
SELECT * FROM pg_check_frozen('my_table');

-- 查找 all-visible 页面上实际非全可见的元组
SELECT * FROM pg_check_visible('my_table');
```

如果任一函数返回行，则可见性映射已损坏。

### 修复

```sql
-- 截断可见性映射（强制完整 VACUUM 重建）
SELECT pg_truncate_visibility_map('my_table');
-- 然后执行：VACUUM my_table;
```

### 访问权限

函数需要超级用户或 `pg_stat_scan_tables` 角色。`pg_truncate_visibility_map` 需要超级用户。
