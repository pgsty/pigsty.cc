---
title: "babelfishpg_tsql"
linkTitle: "babelfishpg_tsql"
description: "SQL Server SQL语法兼容性扩展"
weight: 9310
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://babelfishpg.org/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://babelfishpg.org/</div>
    <div class="ext-card__desc">https://babelfishpg.org/</div>
  </a>
  <a class="ext-card ext-card--source" href="babelfishpg-17.8-5.5.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">babelfishpg-17.8-5.5.0.tar.gz</div>
    <div class="ext-card__desc">babelfishpg-17.8-5.5.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`babelfish`**](/ext/e/babelfishpg_tsql) | `5.5.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9300  | [**`babelfishpg_common`**](/ext/e/babelfishpg_common) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 9310  | [**`babelfishpg_tsql`**](/ext/e/babelfishpg_tsql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 9320  | [**`babelfishpg_tds`**](/ext/e/babelfishpg_tds) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 9330  | [**`babelfishpg_money`**](/ext/e/babelfishpg_money) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`babelfishpg_common`](/ext/e/babelfishpg_common) [`uuid-ossp`](/ext/e/uuid-ossp) [`babelfishpg_money`](/ext/e/babelfishpg_money) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`tds_fdw`](/ext/e/tds_fdw) [`session_variable`](/ext/e/session_variable) [`orafce`](/ext/e/orafce) [`pgtt`](/ext/e/pgtt) [`db_migrator`](/ext/e/db_migrator) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`babelfishpg_tds`](/ext/e/babelfishpg_tds) |
{.ext-table .ext-table--rel}


> special case: this extension only works on wiltondb kernel fork


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.5.0` | {{< pgvers "17" >}} | `babelfish` | `babelfishpg_common`, `uuid-ossp` |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.5.0` | {{< pgvers "17" >}} | `babelfish_$v` | `babelfishpg_$v`, `antlr4-runtime413` |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.5.0` | {{< pgvers "17" >}} | `babelfishpg-$v-babelfish` | `babelfishpg-$v`, `libantlr4-runtime413` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.5.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `babelfish` 扩展的 RPM / DEB 包：

```bash
pig build pkg babelfish         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `babelfish` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install babelfish;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y babelfish -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y babelfish_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y babelfishpg-17-babelfish   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION babelfishpg_tsql CASCADE;  -- 依赖: babelfishpg_common, uuid-ossp
```



## 用法

> [babelfishpg_tsql: SQL Server Transact SQL 兼容性](https://babelfishpg.org/)

`babelfishpg_tsql` 扩展作为 Babelfish 项目的一部分，为 PostgreSQL 提供 Microsoft SQL Server Transact-SQL（T-SQL）兼容性。为 SQL Server 编写的应用程序可以连接到 PostgreSQL 并运行查询，只需最小的更改。

### 启用

```sql
CREATE EXTENSION babelfishpg_tsql;
```

### 关键特性

- **T-SQL 语言支持**：理解 T-SQL 语法，包括存储过程、函数、触发器和批处理
- **SQL Server 线协议**：应用程序可以使用 TDS（表格数据流）协议在 1433 端口连接
- **系统过程**：常用的 `sp_` 系统存储过程可用
- **系统视图**：SQL Server 目录视图（如 `sys.tables`、`sys.columns`、`sys.objects`）
- **多数据库语义**：支持 SQL Server 风格的数据库/模式分离

### 支持的 T-SQL 特性

- `BEGIN...END` 块、`IF...ELSE`、`WHILE` 循环
- `TRY...CATCH` 错误处理
- 临时表（`#temp`、`##global_temp`）
- 表变量（`DECLARE @t TABLE (...)`）
- `IDENTITY` 列和 `@@IDENTITY` / `SCOPE_IDENTITY()`
- `TOP` 子句、`OUTPUT` 子句
- `MERGE` 语句
- 公共表表达式（CTE）
- 同一实例内的跨数据库查询
- `EXEC` / `EXECUTE` 动态 SQL
- SQL Server 风格字符串连接和 NULL 处理
- `PRINT` 和 `RAISERROR` 语句

### 通过 TDS 协议连接

应用程序可以使用 SQL Server 驱动程序（JDBC、ODBC、ADO.NET）连接到 TDS 监听端口（默认 1433）：

```
Server: hostname
Port: 1433
Database: mydb
```

### 注意事项

- 需要 `babelfishpg_common` 扩展
- Babelfish for PostgreSQL 项目的一部分（Apache 2.0 / PostgreSQL 许可证）
- 并非所有 T-SQL 特性都受支持；请查看 Babelfish 兼容性参考
