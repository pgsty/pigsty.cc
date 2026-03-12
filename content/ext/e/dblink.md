---
title: "dblink"
linkTitle: "dblink"
description: "从数据库内连接到其他 PostgreSQL 数据库"
weight: 8970
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/dblink.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/dblink.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/dblink.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`dblink`**](/ext/e/dblink) | `1.2` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8970  | [**`dblink`**](/ext/e/dblink) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plproxy`](/ext/e/plproxy) [`pgbouncer_fdw`](/ext/e/pgbouncer_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) [`citus`](/ext/e/citus) [`wrappers`](/ext/e/wrappers) [`pgspider_ext`](/ext/e/pgspider_ext) [`pglogical`](/ext/e/pglogical) [`repmgr`](/ext/e/repmgr) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`emaj`](/ext/e/emaj) [`mimeo`](/ext/e/mimeo) [`omni_schema`](/ext/e/omni_schema) [`omni_test`](/ext/e/omni_test) [`omni_vfs`](/ext/e/omni_vfs) [`pg_jobmon`](/ext/e/pg_jobmon) [`pg_profile`](/ext/e/pg_profile) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION dblink;
```



## 用法

> [dblink: 从数据库内部连接到其他 PostgreSQL 数据库](https://www.postgresql.org/docs/current/dblink.html)

### 连接到远程数据库

```sql
CREATE EXTENSION dblink;

-- 未命名连接（只允许一个）
SELECT dblink_connect('dbname=remotedb host=remotehost options=-csearch_path=');

-- 命名连接（允许多个）
SELECT dblink_connect('myconn', 'dbname=remotedb host=remotehost');
```

或通过外部服务器定义连接：

```sql
CREATE SERVER remote_srv FOREIGN DATA WRAPPER dblink_fdw
  OPTIONS (hostaddr '192.168.1.10', dbname 'remotedb');
CREATE USER MAPPING FOR local_user SERVER remote_srv
  OPTIONS (user 'remote_user', password 'secret');

SELECT dblink_connect('myconn', 'remote_srv');
```

### 查询远程数据库

```sql
-- 临时连接
SELECT * FROM dblink(
  'dbname=remotedb host=remotehost',
  'SELECT id, name, value FROM remote_table'
) AS t(id int, name text, value numeric);

-- 使用命名连接
SELECT * FROM dblink(
  'myconn',
  'SELECT id, name FROM remote_table WHERE status = 1'
) AS t(id int, name text);
```

必须始终在 `AS` 子句中指定列定义列表。

### 执行命令（无结果集）

```sql
-- 在远程数据库上执行 INSERT、UPDATE、DELETE、DDL
SELECT dblink_exec('myconn', 'INSERT INTO remote_table VALUES (1, ''test'', 42)');
SELECT dblink_exec('myconn', 'UPDATE remote_table SET value = 100 WHERE id = 1');
SELECT dblink_exec('myconn', 'DELETE FROM remote_table WHERE id = 1');
```

返回命令状态字符串（例如 `INSERT 0 1`）。

### 基于游标的访问

```sql
SELECT dblink_open('myconn', 'mycursor', 'SELECT * FROM large_table');
SELECT * FROM dblink_fetch('myconn', 'mycursor', 100) AS t(id int, data text);
SELECT dblink_close('myconn', 'mycursor');
```

### 连接管理

```sql
SELECT dblink_get_connections();    -- 列出打开的命名连接
SELECT dblink_disconnect('myconn'); -- 关闭命名连接
```

### 创建视图以方便使用

```sql
CREATE VIEW remote_data AS
  SELECT * FROM dblink(
    'dbname=remotedb host=remotehost',
    'SELECT id, name, value FROM data_table'
  ) AS t(id int, name text, value numeric);

SELECT * FROM remote_data WHERE value > 100;
```

### 关键函数

| 函数 | 描述 |
|----------|-------------|
| `dblink_connect(connstr)` | 打开未命名持久连接 |
| `dblink_connect(name, connstr)` | 打开命名持久连接 |
| `dblink_disconnect(name)` | 关闭命名连接 |
| `dblink(connstr, sql)` | 执行查询，返回行 |
| `dblink_exec(connstr, sql)` | 执行命令，返回状态 |
| `dblink_open(name, cursor, sql)` | 在远程数据库上打开游标 |
| `dblink_fetch(name, cursor, count)` | 从远程游标获取行 |
| `dblink_close(name, cursor)` | 关闭远程游标 |
| `dblink_get_connections()` | 列出所有打开的命名连接 |
