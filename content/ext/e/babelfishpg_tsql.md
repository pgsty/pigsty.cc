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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/babelfish-17-17.7-5.4.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">babelfish-17-17.7-5.4.0.tar.gz</div>
    <div class="ext-card__desc">babelfish-17-17.7-5.4.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`babelfish`**](/ext/e/babelfishpg_common) | `5.4.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
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
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.4.0` | {{< pgvers "18,17" >}} | `babelfish` | `babelfishpg_common`, `uuid-ossp` |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `6.0.0` | {{< pgvers "18,17" >}} | `babelfish-$v` | `antlr4-runtime413` |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `6.0.0` | {{< pgvers "18,17" >}} | `babelfish-$v` | `libantlr4-runtime413` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 6.0.0 1 | AVAIL PIGSTY 5.4.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
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
pig ext install -y babelfish -v 18  # PG 18
pig ext install -y babelfish -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y babelfish-18       # PG 18
dnf install -y babelfish-17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y babelfish-18   # PG 18
apt install -y babelfish-17   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION babelfishpg_tsql CASCADE;  -- 依赖: babelfishpg_common, uuid-ossp
```

## 用法

来源：

- [Babelfish扩展BABEL_5_4_0 README](https://github.com/babelfish-for-postgresql/babelfish_extensions/blob/BABEL_5_4_0/README.md)
- [安装指南](https://github.com/babelfish-for-postgresql/babelfish_extensions/blob/BABEL_5_4_0/INSTALLING.md.tmpl)
- [`babelfishpg_tsql`控制文件](https://github.com/babelfish-for-postgresql/babelfish_extensions/blob/BABEL_5_4_0/contrib/babelfishpg_tsql/babelfishpg_tsql.control.in)
- [Babelfish限制](https://babelfishpg.org/docs/limitations/limitations-of-babelfish/)
- [处理T-SQL](https://babelfishpg.org/docs/usage/handling-tsql/)

`babelfishpg_tsql`实现了T-SQL语言和SQL Server兼容的系统目录行为，这是Babelfish数据库的一个组成部分，而不是一个可以独立添加到标准PostgreSQL中的兼容层：完整的堆栈需要带有Babelfish补丁的PostgreSQL引擎加上公共、TDS和T-SQL扩展。

### 核心工作流程

为预加载配置TDS协议扩展并重启Babelfish服务器：

```conf
shared_preload_libraries = 'babelfishpg_tds'
```

使用`CASCADE`创建TDS扩展，以便安装其依赖项，包括`babelfishpg_tsql`。在初始化前选择迁移模式。

```sql
CREATE EXTENSION IF NOT EXISTS babelfishpg_tds CASCADE;

ALTER SYSTEM SET babelfishpg_tsql.database_name = 'babelfish_db';
ALTER SYSTEM SET babelfishpg_tsql.migration_mode = 'multi-db';

CALL sys.initialize_babelfish('babelfish_user');
```

按照安装指南重新加载配置后，SQL Server客户端连接到通常位于端口1433的TDS监听器，并在Babelfish创建的逻辑数据库中发出T-SQL语句。

### 组件和对象索引

- `babelfishpg_tsql`提供T-SQL解析器、过程语言、系统对象、兼容函数以及T-SQL配置变量。
- `babelfishpg_tds`提供表格数据流监听器，也是常规安装入口点。
- `babelfishpg_common`提供共享的数据类型和函数。它和`uuid-ossp`是`babelfishpg_tsql`的声明依赖项。
- `babelfishpg_money`提供与堆栈相关的货币相关兼容对象。
- `sys.initialize_babelfish(login_name)`为Babelfish目录和服务初始化登录。
- `sys.sp_babelfish_configure`控制文档化的兼容性开关。
- `babelfishpg_tsql.database_name`标识托管Babelfish的物理PostgreSQL数据库。
- `babelfishpg_tsql.migration_mode`选择`single-db`或`multi-db`逻辑数据库映射。

### 运行边界

安装需要超级用户权限和与扩展版本匹配的Babelfish构建。不要单独安装`babelfishpg_tsql`并期望获得TDS连接性。迁移模式是一个配置决策，在数据库初始化后不应更改。

Babelfish实现了大量但不完整的SQL Server功能集。在迁移前，请根据官方限制验证应用程序语法、数据类型、系统目录假设、驱动程序和开关设置。PostgreSQL和T-SQL连接可以观察不同的命名和事务语义。

从5.5.0到5.4.0的目录更改是官方`BABEL_5_4_0`发布线的一个版本修正，而不是新功能或自动降级过程的证据。
