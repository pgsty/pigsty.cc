---
title: "odbc_fdw"
linkTitle: "odbc_fdw"
description: "访问ODBC可访问的任何外部数据源"
weight: 8520
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CartoDB/odbc_fdw">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CartoDB/odbc_fdw</div>
    <div class="ext-card__desc">https://github.com/CartoDB/odbc_fdw</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`odbc_fdw`**](/ext/e/odbc_fdw) | `0.5.1` | <a class="ext-badge ext-badge--cate fdw" href="/ext/cate/fdw">FDW</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 8520  | [**`odbc_fdw`**](/ext/e/odbc_fdw) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`wrappers`](/ext/e/wrappers) [`multicorn`](/ext/e/multicorn) [`jdbc_fdw`](/ext/e/jdbc_fdw) [`mysql_fdw`](/ext/e/mysql_fdw) [`oracle_fdw`](/ext/e/oracle_fdw) [`tds_fdw`](/ext/e/tds_fdw) [`db2_fdw`](/ext/e/db2_fdw) [`postgres_fdw`](/ext/e/postgres_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.5.1` | {{< pgvers "17,16,15,14" >}} | `odbc_fdw` | - |
| [**RPM**](/ext/rpm#fdw) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.5.1` | {{< pgvers "17,16,15,14" >}} | `odbc_fdw_$v` | `unixODBC` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 |
| el8.aarch64 | MISS PGDG - 0 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 |
| el9.x86_64 | MISS PGDG - 0 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 |
| el9.aarch64 | MISS PGDG - 0 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 |
| el10.x86_64 | MISS PGDG - 0 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 |
| el10.aarch64 | MISS PGDG - 0 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 | AVAIL PGDG 0.5.1 1 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-2PGDG.rhel8.x86_64.rpm pgdg 0.5.1 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/odbc_fdw_17-0.5.1-2PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-2PGDG.rhel8.aarch64.rpm pgdg 0.5.1 25.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/odbc_fdw_17-0.5.1-2PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-2PGDG.rhel9.x86_64.rpm pgdg 0.5.1 26.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/odbc_fdw_17-0.5.1-2PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-2PGDG.rhel9.aarch64.rpm pgdg 0.5.1 25.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/odbc_fdw_17-0.5.1-2PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-3PGDG.rhel10.x86_64.rpm pgdg 0.5.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/odbc_fdw_17-0.5.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 odbc_fdw_17 odbc_fdw_17-0.5.1-3PGDG.rhel10.aarch64.rpm pgdg 0.5.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/odbc_fdw_17-0.5.1-3PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-1PGDG.rhel8.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/odbc_fdw_16-0.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-1PGDG.rhel8.aarch64.rpm pgdg 0.5.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/odbc_fdw_16-0.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-1PGDG.rhel9.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/odbc_fdw_16-0.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-1PGDG.rhel9.aarch64.rpm pgdg 0.5.1 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/odbc_fdw_16-0.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-3PGDG.rhel10.x86_64.rpm pgdg 0.5.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/odbc_fdw_16-0.5.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 odbc_fdw_16 odbc_fdw_16-0.5.1-3PGDG.rhel10.aarch64.rpm pgdg 0.5.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/odbc_fdw_16-0.5.1-3PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-1PGDG.rhel8.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/odbc_fdw_15-0.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-1PGDG.rhel8.aarch64.rpm pgdg 0.5.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/odbc_fdw_15-0.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-1PGDG.rhel9.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/odbc_fdw_15-0.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-1PGDG.rhel9.aarch64.rpm pgdg 0.5.1 25.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/odbc_fdw_15-0.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-3PGDG.rhel10.x86_64.rpm pgdg 0.5.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/odbc_fdw_15-0.5.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 odbc_fdw_15 odbc_fdw_15-0.5.1-3PGDG.rhel10.aarch64.rpm pgdg 0.5.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/odbc_fdw_15-0.5.1-3PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-1PGDG.rhel8.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/odbc_fdw_14-0.5.1-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-1PGDG.rhel8.aarch64.rpm pgdg 0.5.1 25.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/odbc_fdw_14-0.5.1-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-1PGDG.rhel9.x86_64.rpm pgdg 0.5.1 26.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/odbc_fdw_14-0.5.1-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-1PGDG.rhel9.aarch64.rpm pgdg 0.5.1 25.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/odbc_fdw_14-0.5.1-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-3PGDG.rhel10.x86_64.rpm pgdg 0.5.1 27.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/odbc_fdw_14-0.5.1-3PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 odbc_fdw_14 odbc_fdw_14-0.5.1-3PGDG.rhel10.aarch64.rpm pgdg 0.5.1 26.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/odbc_fdw_14-0.5.1-3PGDG.rhel10.aarch64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `odbc_fdw` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install odbc_fdw;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y odbc_fdw -v 17  # PG 17
pig ext install -y odbc_fdw -v 16  # PG 16
pig ext install -y odbc_fdw -v 15  # PG 15
pig ext install -y odbc_fdw -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y odbc_fdw_17       # PG 17
dnf install -y odbc_fdw_16       # PG 16
dnf install -y odbc_fdw_15       # PG 15
dnf install -y odbc_fdw_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION odbc_fdw;
```



## 用法

> [odbc_fdw: 通过 ODBC 访问远程数据库的外部数据包装器](https://github.com/CartoDB/odbc_fdw)

### 创建服务器

使用 ODBC 配置中定义的 DSN 连接：

```sql
CREATE EXTENSION odbc_fdw;

CREATE SERVER odbc_server
  FOREIGN DATA WRAPPER odbc_fdw
  OPTIONS (dsn 'test');
```

或者不使用 DSN，直接指定连接属性：

```sql
CREATE SERVER odbc_server
  FOREIGN DATA WRAPPER odbc_fdw
  OPTIONS (
    odbc_DRIVER 'MySQL',
    odbc_SERVER '192.168.1.17',
    encoding 'iso88591'
  );
```

**服务器选项：** `dsn`（ODBC 数据源名称）、`driver`（ODBC 驱动名称，无 DSN 时必填）、`odbc_*`（驱动特定属性）、`encoding`（远程数据库字符编码）。

驱动特定选项需加 `odbc_` 前缀。属性 DSN、DRIVER、UID 和 PWD 会自动转为大写。

### 创建用户映射

```sql
CREATE USER MAPPING FOR postgres
  SERVER odbc_server
  OPTIONS (odbc_UID 'root', odbc_PWD '');
```

### 创建外部表

```sql
CREATE FOREIGN TABLE odbc_table (
  id integer,
  name varchar(255),
  description text,
  users float4,
  created timestamp
)
SERVER odbc_server
OPTIONS (
  odbc_DATABASE 'mydb',
  schema 'test',
  sql_query 'SELECT id, name, description, created, users FROM test.mytable',
  sql_count 'SELECT count(id) FROM test.mytable'
);

SELECT * FROM odbc_table;
```

**表选项：** `schema`（远程模式）、`table`（远程表名）、`sql_query`（自定义 SQL 查询，覆盖 `table`）、`sql_count`（自定义计数 SQL）。

### 导入外部模式

```sql
IMPORT FOREIGN SCHEMA test
  FROM SERVER odbc_server
  INTO public
  OPTIONS (odbc_DATABASE 'mydb');
```
