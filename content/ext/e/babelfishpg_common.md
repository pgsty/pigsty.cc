---
title: "babelfishpg_common"
linkTitle: "babelfishpg_common"
description: "SQL Server 数据类型兼容扩展"
weight: 9300
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
| [**`babelfish`**](/ext/e/babelfishpg_common) | `5.5.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9300  | [**`babelfishpg_common`**](/ext/e/babelfishpg_common) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 9310  | [**`babelfishpg_tsql`**](/ext/e/babelfishpg_tsql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 9320  | [**`babelfishpg_tds`**](/ext/e/babelfishpg_tds) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 9330  | [**`babelfishpg_money`**](/ext/e/babelfishpg_money) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`tds_fdw`](/ext/e/tds_fdw) [`babelfishpg_tds`](/ext/e/babelfishpg_tds) [`babelfishpg_money`](/ext/e/babelfishpg_money) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`uuid-ossp`](/ext/e/uuid-ossp) [`session_variable`](/ext/e/session_variable) [`orafce`](/ext/e/orafce) [`pgtt`](/ext/e/pgtt) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) |
{.ext-table .ext-table--rel}


> special case: this extension only works on wiltondb kernel fork


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.5.0` | {{< pgvers "17" >}} | `babelfish` | - |
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
@ el8.x86_64 17 babelfish_17 babelfish_17-5.5.0-1PIGSTY.el8.x86_64.rpm pigsty 5.5.0 2.5MiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/babelfish_17-5.5.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 babelfish_17 babelfish_17-5.5.0-1PIGSTY.el8.aarch64.rpm pigsty 5.5.0 2.3MiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/babelfish_17-5.5.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 babelfish_17 babelfish_17-5.5.0-1PIGSTY.el9.x86_64.rpm pigsty 5.5.0 2.4MiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/babelfish_17-5.5.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 babelfish_17 babelfish_17-5.5.0-1PIGSTY.el9.aarch64.rpm pigsty 5.5.0 2.3MiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/babelfish_17-5.5.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 babelfish_17 babelfish_17-5.5.0-1PIGSTY.el10.x86_64.rpm pigsty 5.5.0 2.2MiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/babelfish_17-5.5.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 babelfish_17 babelfish_17-5.5.0-1PIGSTY.el10.aarch64.rpm pigsty 5.5.0 2.2MiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/babelfish_17-5.5.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 babelfishpg-17-babelfish babelfishpg-17-babelfish_5.5.0-2PIGSTY~bookworm_amd64.deb pigsty 5.5.0 2.0MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/babelfishpg-17-babelfish/babelfishpg-17-babelfish_5.5.0-2PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 babelfishpg-17-babelfish babelfishpg-17-babelfish_5.5.0-2PIGSTY~bookworm_arm64.deb pigsty 5.5.0 1.8MiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/b/babelfishpg-17-babelfish/babelfishpg-17-babelfish_5.5.0-2PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 babelfishpg-17-babelfish babelfishpg-17-babelfish_5.5.0-2PIGSTY~trixie_amd64.deb pigsty 5.5.0 2.0MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/babelfishpg-17-babelfish/babelfishpg-17-babelfish_5.5.0-2PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 babelfishpg-17-babelfish babelfishpg-17-babelfish_5.5.0-2PIGSTY~trixie_arm64.deb pigsty 5.5.0 1.9MiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/b/babelfishpg-17-babelfish/babelfishpg-17-babelfish_5.5.0-2PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 babelfishpg-17-babelfish babelfishpg-17-babelfish_5.5.0-2PIGSTY~jammy_amd64.deb pigsty 5.5.0 2.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/babelfishpg-17-babelfish/babelfishpg-17-babelfish_5.5.0-2PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 babelfishpg-17-babelfish babelfishpg-17-babelfish_5.5.0-2PIGSTY~jammy_arm64.deb pigsty 5.5.0 2.1MiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/b/babelfishpg-17-babelfish/babelfishpg-17-babelfish_5.5.0-2PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 babelfishpg-17-babelfish babelfishpg-17-babelfish_5.5.0-2PIGSTY~noble_amd64.deb pigsty 5.5.0 2.2MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/babelfishpg-17-babelfish/babelfishpg-17-babelfish_5.5.0-2PIGSTY~noble_amd64.deb
@ u24.aarch64 17 babelfishpg-17-babelfish babelfishpg-17-babelfish_5.5.0-2PIGSTY~noble_arm64.deb pigsty 5.5.0 2.1MiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/b/babelfishpg-17-babelfish/babelfishpg-17-babelfish_5.5.0-2PIGSTY~noble_arm64.deb
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
CREATE EXTENSION babelfishpg_common;
```



## 用法

> [babelfishpg_common: SQL Server Transact SQL 数据类型支持](https://babelfishpg.org/)

`babelfishpg_common` 扩展作为 Babelfish 项目的一部分，为 PostgreSQL 提供 SQL Server 兼容的数据类型支持，使 PostgreSQL 能够理解和使用 Microsoft SQL Server 数据类型。

### 启用

```sql
CREATE EXTENSION babelfishpg_common;
```

### SQL Server 数据类型

该扩展添加了以下 SQL Server 兼容数据类型：

- **TINYINT** - 1 字节无符号整数（0 到 255）
- **SMALLMONEY** - 小型货币值
- **MONEY** - 货币值（另见 `babelfishpg_money`）
- **DATETIME** - SQL Server 风格日期时间
- **DATETIME2** - 扩展精度日期时间
- **SMALLDATETIME** - 低精度日期时间
- **DATETIMEOFFSET** - 带时区偏移的日期和时间
- **BIT** - SQL Server 兼容布尔值
- **NCHAR** / **NVARCHAR** - Unicode 字符类型
- **UNIQUEIDENTIFIER** - SQL Server 风格 UUID
- **VARBINARY** - 变长二进制数据
- **IMAGE** - 旧版二进制数据类型
- **SQL_VARIANT** - 通用数据类型容器
- **XML** - SQL Server 兼容 XML 类型
- **SYSNAME** - 系统名称类型（nvarchar(128)）

### 关键特性

- 提供 SQL Server 和 PostgreSQL 类型之间的隐式和显式类型转换
- 支持 SQL Server 风格的排序行为
- 处理 SQL Server 特定的类型强制规则
- 与 `babelfishpg_tsql` 配合实现完整的 T-SQL 兼容性

该扩展通常作为完整 Babelfish for PostgreSQL 安装的一部分部署，是 `babelfishpg_tsql` 的前置依赖。
