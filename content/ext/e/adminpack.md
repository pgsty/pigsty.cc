---
title: "adminpack"
linkTitle: "adminpack"
description: "PostgreSQL 管理函数集合"
weight: 5970
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/16/adminpack.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/16/adminpack.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/16/adminpack.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`adminpack`**](/ext/e/adminpack) | `2.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5970  | [**`adminpack`**](/ext/e/adminpack) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`fio`](/ext/e/fio) [`lo`](/ext/e/lo) [`file_fdw`](/ext/e/file_fdw) [`ddlx`](/ext/e/ddlx) [`pgdd`](/ext/e/pgdd) [`pg_catcheck`](/ext/e/pg_catcheck) [`pg_cheat_funcs`](/ext/e/pg_cheat_funcs) [`pg_repack`](/ext/e/pg_repack) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--miss">✗</span> | <span class="ext-badge ext-badge--miss">✗</span> | <span class="ext-badge ext-badge--avail">2.1</span> | <span class="ext-badge ext-badge--avail">2.1</span> | <span class="ext-badge ext-badge--avail">2.1</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION adminpack;
```



## 用法

> [adminpack: PostgreSQL 管理函数](https://www.postgresql.org/docs/16/adminpack.html)

`adminpack` 扩展提供服务器端文件管理和日志访问函数，主要由 pgAdmin 和其他管理工具使用。所有函数默认仅限超级用户使用。

### 文件操作

```sql
-- 将文本写入文件（append=false: 文件必须不存在；append=true: 追加）
SELECT pg_file_write('/tmp/test.txt', 'Hello World', false);   -- 返回写入的字节数

-- 追加到已有文件
SELECT pg_file_write('/tmp/test.txt', E'\nMore data', true);

-- 将文件同步到磁盘
SELECT pg_file_sync('/tmp/test.txt');

-- 重命名文件
SELECT pg_file_rename('/tmp/old.txt', '/tmp/new.txt');

-- 带归档的重命名（先将已有的 newname 移至归档）
SELECT pg_file_rename('/tmp/old.txt', '/tmp/new.txt', '/tmp/archive.txt');

-- 删除文件
SELECT pg_file_unlink('/tmp/test.txt');   -- 成功返回 true
```

### 日志文件访问

```sql
-- 列出服务器日志文件（需要默认的 log_filename 格式）
SELECT * FROM pg_logdir_ls();
```

返回 `log_directory` 中日志文件的时间戳和路径。

### 函数参考

| 函数 | 返回 | 描述 |
|----------|---------|-------------|
| `pg_file_write(filename, data, append)` | bigint | 将文本写入文件；返回写入的字节数 |
| `pg_file_sync(filename)` | void | 将文件或目录刷写到磁盘 |
| `pg_file_rename(old, new [, archive])` | boolean | 重命名文件，可选归档已有目标 |
| `pg_file_unlink(filename)` | boolean | 删除文件 |
| `pg_logdir_ls()` | setof record | 列出带时间戳的日志文件 |

### 访问控制

- 所有函数默认仅限超级用户访问
- 可以通过 `GRANT` 将权限授予非超级用户
- 文件访问限制在数据库集群目录内，除非用户拥有 `pg_read_server_files` 或 `pg_write_server_files` 角色

注意：`adminpack` 已在 PostgreSQL 17 中移除。仅适用于 PostgreSQL 16 及更早版本。
