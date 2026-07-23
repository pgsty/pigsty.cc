---
title: "ivorysql_ora"
linkTitle: "ivorysql_ora"
description: "Oracle 兼容扩展"
weight: 9140
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ivorysql_ora">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">contrib/ivorysql_ora</div>
    <div class="ext-card__desc">https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ivorysql_ora</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/ivorysql-5.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">ivorysql-5.4.tar.gz</div>
    <div class="ext-card__desc">ivorysql-5.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`ivorysql`**](/ext/e/ivorysql_ora) | `1.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9140  | [**`ivorysql_ora`**](/ext/e/ivorysql_ora) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `sys` |
| 9150  | [**`ora_btree_gin`**](/ext/e/ora_btree_gin) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `sys` |
| 9160  | [**`ora_btree_gist`**](/ext/e/ora_btree_gist) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `sys` |
| 9170  | [**`pg_get_functiondef`**](/ext/e/pg_get_functiondef) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9180  | [**`plisql`**](/ext/e/plisql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 9190  | [**`gb18030_2022`**](/ext/e/gb18030_2022) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
{.ext-table}

| **相关扩展** |  |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`ora_btree_gin`](/ext/e/ora_btree_gin) [`ora_btree_gist`](/ext/e/ora_btree_gist) |
{.ext-table .ext-table--rel}


> compatible with PostgreSQL 18.4


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18" >}} | `ivorysql` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.4` | {{< pgvers "18" >}} | `ivorysql-$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.4` | {{< pgvers "18" >}} | `ivorysql-$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 5.4 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 ivorysql-18 ivorysql-18-5.4-1PIGSTY.el8.x86_64.rpm pigsty 5.4 24.6MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/ivorysql-18-5.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 ivorysql-18 ivorysql-18-5.4-1PIGSTY.el8.aarch64.rpm pigsty 5.4 24.1MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/ivorysql-18-5.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 ivorysql-18 ivorysql-18-5.4-1PIGSTY.el9.x86_64.rpm pigsty 5.4 23.0MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/ivorysql-18-5.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 ivorysql-18 ivorysql-18-5.4-1PIGSTY.el9.aarch64.rpm pigsty 5.4 22.8MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/ivorysql-18-5.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 ivorysql-18 ivorysql-18-5.4-1PIGSTY.el10.x86_64.rpm pigsty 5.4 23.2MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/ivorysql-18-5.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 ivorysql-18 ivorysql-18-5.4-1PIGSTY.el10.aarch64.rpm pigsty 5.4 23.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/ivorysql-18-5.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~bookworm_amd64.deb pigsty 5.4 23.0MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~bookworm_arm64.deb pigsty 5.4 22.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~trixie_amd64.deb pigsty 5.4 20.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~trixie_arm64.deb pigsty 5.4 20.4MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~jammy_amd64.deb pigsty 5.4 25.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~jammy_arm64.deb pigsty 5.4 24.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~noble_amd64.deb pigsty 5.4 23.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~noble_arm64.deb pigsty 5.4 23.0MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~resolute_amd64.deb pigsty 5.4 22.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 ivorysql-18 ivorysql-18_5.4-1PIGSTY~resolute_arm64.deb pigsty 5.4 22.5MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/i/ivorysql-18/ivorysql-18_5.4-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `ivorysql` 扩展的 RPM / DEB 包：

```bash
pig build pkg ivorysql         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `ivorysql` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install ivorysql;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y ivorysql -v 18  # PG 18
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y ivorysql-18       # PG 18
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y ivorysql-18   # PG 18
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION ivorysql_ora;
```




## 用法

> [ivorysql_ora: PostgreSQL 数据库上的 Oracle 兼容扩展](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ivorysql_ora)

`ivorysql_ora` 扩展作为 IvorySQL 项目的一部分，为 PostgreSQL 提供 Oracle 兼容特性。它添加了 Oracle 兼容的数据类型、函数和 PL/SQL 行为。

### 启用

```sql
CREATE EXTENSION ivorysql_ora;
```

### Oracle 兼容数据类型

该扩展添加了 Oracle 风格的数据类型，包括：

- `NUMBER` / `NUMBER(p,s)` - Oracle 兼容的数值类型
- `VARCHAR2(n)` - Oracle 兼容的变长字符串
- `DATE` - 带时间部分的 Oracle 风格 DATE
- `BINARY_FLOAT` / `BINARY_DOUBLE` - IEEE 浮点类型

### Oracle 兼容函数

提供 Oracle 风格的字符串操作、日期运算、数值操作和类型转换内置函数，行为与 Oracle 语义一致。

### 兼容模式

IvorySQL 支持 Oracle 兼容模式，可更改解析器行为：

```sql
SET compatible_mode TO oracle;  -- 启用 Oracle 兼容
SET compatible_mode TO pg;      -- 恢复为标准 PostgreSQL
```

在 Oracle 模式下，SQL 解析器接受 Oracle 风格语法，包括：

- Oracle 风格外连接（`(+)` 语法）
- `CONNECT BY` 层次查询
- Oracle 风格序列（`sequence.NEXTVAL`）
- 包风格对象引用
