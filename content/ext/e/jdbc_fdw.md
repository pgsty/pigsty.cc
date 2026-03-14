---
title: "jdbc_fdw"
linkTitle: "jdbc_fdw"
description: "访问JDBC可访问的任何外部数据源"
weight: 8530
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgspider/jdbc_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgspider/jdbc_fdw</div>
    <div class="ext-card__desc">https://github.com/pgspider/jdbc_fdw</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`jdbc_fdw`**](/ext/e/jdbc_fdw) | `0.4.0` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8530  | [**`jdbc_fdw`**](/ext/e/jdbc_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`odbc_fdw`](/ext/e/odbc_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`mysql_fdw`](/ext/e/mysql_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`db2_fdw`](/ext/e/db2_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> missing el.aarch64


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.4.0` | {{< pgvers "16,15,14" >}} | `jdbc_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.4.0` | {{< pgvers "16,15,14" >}} | `jdbc_fdw_$v` | `java-11-openjdk-headless` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 0.4.0 1 | AVAIL PGDG 0.4.0 1 | AVAIL PGDG 0.4.0 1 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 0.4.0 1 | AVAIL PGDG 0.4.0 1 | AVAIL PGDG 0.4.0 1 |
| el9.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 16 jdbc_fdw_16 jdbc_fdw_16-0.4.0-1PGDG.rhel8.x86_64.rpm pgdg 0.4.0 49.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/jdbc_fdw_16-0.4.0-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 16 jdbc_fdw_16 jdbc_fdw_16-0.4.0-1PGDG.rhel9.x86_64.rpm pgdg 0.4.0 49.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/jdbc_fdw_16-0.4.0-1PGDG.rhel9.x86_64.rpm
@ el8.x86_64 15 jdbc_fdw_15 jdbc_fdw_15-0.4.0-1PGDG.rhel8.x86_64.rpm pgdg 0.4.0 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/jdbc_fdw_15-0.4.0-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 15 jdbc_fdw_15 jdbc_fdw_15-0.4.0-1PGDG.rhel9.x86_64.rpm pgdg 0.4.0 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/jdbc_fdw_15-0.4.0-1PGDG.rhel9.x86_64.rpm
@ el8.x86_64 14 jdbc_fdw_14 jdbc_fdw_14-0.4.0-1PGDG.rhel8.x86_64.rpm pgdg 0.4.0 50.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/jdbc_fdw_14-0.4.0-1PGDG.rhel8.x86_64.rpm
@ el9.x86_64 14 jdbc_fdw_14 jdbc_fdw_14-0.4.0-1PGDG.rhel9.x86_64.rpm pgdg 0.4.0 52.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/jdbc_fdw_14-0.4.0-1PGDG.rhel9.x86_64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `jdbc_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install jdbc_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y jdbc_fdw -v 16  # PG 16
pig ext install -y jdbc_fdw -v 15  # PG 15
pig ext install -y jdbc_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y jdbc_fdw_16       # PG 16
dnf install -y jdbc_fdw_15       # PG 15
dnf install -y jdbc_fdw_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION jdbc_fdw;
```



## 用法

> [jdbc_fdw: 通过 JDBC 访问远程服务器的外部数据包装器](https://github.com/pgspider/jdbc_fdw)

### 创建服务器

```sql
CREATE EXTENSION jdbc_fdw;

CREATE SERVER jdbc_server FOREIGN DATA WRAPPER jdbc_fdw
  OPTIONS (
    drivername 'org.postgresql.Driver',
    url 'jdbc:postgresql://remotehost:5432/mydb',
    jarfile '/usr/share/java/postgresql.jar',
    maxheapsize '256'
  );
```

**服务器选项：** `drivername`（必填，JDBC 驱动类）、`url`（必填，JDBC 连接 URL）、`jarfile`（必填，JDBC 驱动 JAR 的绝对路径）、`querytimeout`（查询超时秒数）、`maxheapsize`（JVM 堆大小 MB，最小 1）。

### 创建用户映射

```sql
CREATE USER MAPPING FOR CURRENT_USER SERVER jdbc_server
  OPTIONS (username 'dbuser', password 'dbpass');
```

### 创建外部表

```sql
CREATE FOREIGN TABLE remote_table (
  id integer OPTIONS (key 'true'),
  name text,
  value numeric
)
SERVER jdbc_server
OPTIONS (table_name 'schema.tablename');
```

在主键列上设置 `key 'true'` 以启用 UPDATE 和 DELETE 操作。

### 查询远程数据

```sql
SELECT * FROM remote_table WHERE id > 100;
```

### 使用 jdbc_exec 执行任意 SQL

`jdbc_exec` 函数在远程数据库上执行 SQL 并返回结果集：

```sql
SELECT * FROM jdbc_exec('jdbc_server', 'SELECT id, name FROM remote_schema.remote_table WHERE status = 1')
  AS t(id integer, name text);
```

这对于执行超出外部表定义范围的查询很有用，包括在远程服务器上执行 DDL 或复杂查询。
