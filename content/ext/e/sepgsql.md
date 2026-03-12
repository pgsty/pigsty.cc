---
title: "sepgsql"
linkTitle: "sepgsql"
description: "基于SELinux标签的强制访问控制"
weight: 7960
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/sepgsql.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/sepgsql.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/sepgsql.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`sepgsql`**](/ext/e/sepgsql) | `-` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7960  | [**`sepgsql`**](/ext/e/sepgsql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_readonly`](/ext/e/pg_readonly) [`pg_permissions`](/ext/e/pg_permissions) [`set_user`](/ext/e/set_user) [`noset`](/ext/e/noset) [`pgaudit`](/ext/e/pgaudit) [`credcheck`](/ext/e/credcheck) [`login_hook`](/ext/e/login_hook) [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展




## 用法

> [sepgsql: PostgreSQL 基于 SELinux 标签的强制访问控制](https://www.postgresql.org/docs/current/sepgsql.html)

`sepgsql` 基于 SELinux 安全策略提供基于标签的强制访问控制（MAC）。它在 PostgreSQL 标准 SQL 权限之上增加了额外的安全检查层。

### 配置参数

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `sepgsql.permissive` | `off` | 无论系统 SELinux 设置如何都启用宽容模式 |
| `sepgsql.debug_audit` | `off` | 无论策略如何都强制记录所有可能的日志 |

### 函数

| 函数 | 返回类型 | 描述 |
|----------|---------|-------------|
| `sepgsql_getcon()` | `text` | 获取当前客户端安全标签 |
| `sepgsql_setcon(text)` | `boolean` | 将客户端域切换到新标签（NULL 恢复） |
| `sepgsql_mcstrans_in(text)` | `text` | 将限定 MLS/MCS 范围转换为原始格式 |
| `sepgsql_mcstrans_out(text)` | `text` | 将原始 MLS/MCS 范围转换为限定格式 |
| `sepgsql_restorecon(text)` | `boolean` | 为数据库中所有对象设置初始安全标签 |

### 安全标签

可以为模式、表、列、序列、视图和函数分配安全标签：

```sql
SECURITY LABEL ON COLUMN customer.credit
    IS 'system_u:object_r:sepgsql_secret_table_t:s0';
```

### 动态域转换

```sql
SELECT sepgsql_getcon();
-- unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023

SELECT sepgsql_setcon('unconfined_u:unconfined_r:unconfined_t:s0-s0:c1.c4');
-- t
```

### 可信过程

```sql
-- 创建函数以使用脱敏方式访问敏感数据
CREATE FUNCTION show_credit(int) RETURNS text
    AS 'SELECT regexp_replace(credit, ''-[0-9]+$'', ''-xxxx'', ''g'')
         FROM customer WHERE cid = $1'
    LANGUAGE sql;

-- 标记为可信过程
SECURITY LABEL ON FUNCTION show_credit(int)
    IS 'system_u:object_r:sepgsql_trusted_proc_exec_t:s0';
```

### 权限类别

DML 操作检查：`db_table:{select|insert|update|delete}` 和 `db_column:{select|update|insert}`。
DDL 操作检查：`create`、`drop`、`setattr`、`add_name`、`remove_name`。
模式访问需要：`db_schema:search`。
