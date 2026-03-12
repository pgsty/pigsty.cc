---
title: "pgrowlocks"
linkTitle: "pgrowlocks"
description: "显示行级锁信息"
weight: 6910
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgrowlocks.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgrowlocks.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgrowlocks.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgrowlocks`**](/ext/e/pgrowlocks) | `1.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6910  | [**`pgrowlocks`**](/ext/e/pgrowlocks) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_profile`](/ext/e/pg_profile) [`pg_tracing`](/ext/e/pg_tracing) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) [`pg_track_settings`](/ext/e/pg_track_settings) |
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
CREATE EXTENSION pgrowlocks;
```




## 用法

> [pgrowlocks: 显示行级锁信息](https://www.postgresql.org/docs/current/pgrowlocks.html)

pgrowlocks 显示表中哪些行当前被锁定、被哪些事务锁定以及锁模式。

### 函数

```sql
SELECT * FROM pgrowlocks('my_table');

 locked_row | locker | multi | xids  |     modes      |  pids
------------+--------+-------+-------+----------------+--------
 (0,1)      |    609 | f     | {609} | {"For Share"}  | {3161}
 (0,2)      |    609 | f     | {609} | {"For Share"}  | {3161}
 (0,3)      |    607 | f     | {607} | {"For Update"} | {3107}
```

### 返回列

| 列名 | 类型 | 描述 |
|--------|------|-------------|
| `locked_row` | tid | 被锁定行的元组 ID |
| `locker` | xid | 事务 ID（或多事务 ID） |
| `multi` | boolean | 如果 locker 是多事务则为 true |
| `xids` | xid[] | 所有锁持有者的事务 ID |
| `modes` | text[] | 锁模式：`For Key Share`、`For Share`、`For No Key Update`、`For Update` 等 |
| `pids` | integer[] | 锁持有后端的进程 ID |

### 查看被锁定行的内容

```sql
SELECT * FROM accounts AS a, pgrowlocks('accounts') AS p
WHERE p.locked_row = a.ctid;
```

### 访问权限

限制为超级用户、拥有 `pg_stat_scan_tables` 角色的成员以及对目标表有 `SELECT` 权限的用户。

### 注意事项

- 对目标表获取 `AccessShareLock`
- 不保证产生自洽的快照
- 对大表可能较慢
