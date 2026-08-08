---
title: "pg_describe"
linkTitle: "pg_describe"
description: "不执行查询即可报告其参数与结果列元数据"
weight: 4350
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/sajonaro/pg_describe">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">sajonaro/pg_describe</div>
    <div class="ext-card__desc">https://github.com/sajonaro/pg_describe</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_describe-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_describe-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_describe-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_describe`**](/ext/e/pg_describe) | `1.0.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4350  | [**`pg_describe`**](/ext/e/pg_describe) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | `describe_resultset` `colnames` [`ddlx`](/ext/e/ddlx) [`pg_readme`](/ext/e/pg_readme) [`pglinter`](/ext/e/pglinter) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Uses PostgreSQL parser and analyzer without invoking the executor; upstream and PIGSTY packages require PostgreSQL 17 or newer.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "17,18" >}} | `pg_describe` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17" >}} | `pg_describe_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-describe` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_describe_18 pg_describe_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 34.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_describe_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_describe_18 pg_describe_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 34.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_describe_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_describe_18 pg_describe_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_describe_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_describe_18 pg_describe_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_describe_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_describe_18 pg_describe_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_describe_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_describe_18 pg_describe_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_describe_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 35.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 35.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 35.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 35.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 37.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 37.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 37.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 36.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-describe postgresql-18-pg-describe_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 37.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-describe/postgresql-18-pg-describe_1.0.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_describe_17 pg_describe_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 34.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_describe_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_describe_17 pg_describe_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 34.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_describe_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_describe_17 pg_describe_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_describe_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_describe_17 pg_describe_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 33.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_describe_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_describe_17 pg_describe_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 33.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_describe_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_describe_17 pg_describe_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 34.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_describe_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 35.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 35.7KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 35.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 35.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 40.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 40.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 36.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-describe postgresql-17-pg-describe_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 37.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-describe/postgresql-17-pg-describe_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_describe` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_describe         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_describe` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_describe;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_describe -v 18  # PG 18
pig ext install -y pg_describe -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_describe_18       # PG 18
dnf install -y pg_describe_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-describe   # PG 18
apt install -y postgresql-17-pg-describe   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_describe;
```

## 用法

来源：

- [pg_describe 1.0.0 README](https://api.pgxn.org/src/pg_describe/pg_describe-1.0.0/README.md)
- [pg_describe 文档](https://sajonaro.github.io/pg_describe/)
- [pg_describe 1.0.0 控制文件](https://api.pgxn.org/src/pg_describe/pg_describe-1.0.0/pg_describe.control)
- [pg_describe 1.0.0 SQL](https://api.pgxn.org/src/pg_describe/pg_describe-1.0.0/sql/pg_describe--1.0.0.sql)

`pg_describe` 可以在不执行 SQL 语句的情况下报告其参数和结果列。它使用 PostgreSQL 的解析和分析能力，推断参数类型、线路协议可见的结果类型、源列来源，以及考虑外连接后的可空性。适用于代码生成、迁移检查和查询契约工具。

### 描述查询

```sql
CREATE EXTENSION pg_describe;

SELECT *
FROM pg_describe(
  'SELECT id, email FROM users WHERE id = $1'
);
```

`kind = 'param'` 的行描述 `$1`、`$2` 以及后续参数。`kind = 'column'` 的行描述结果列顺序、名称、类型 OID/名称、源表/列、基础 `NOT NULL` 状态，以及最终表达式是否确定为非空。

### 检查连接可空性

```sql
SELECT *
FROM pg_describe($query$
  SELECT o.id, c.email
  FROM orders AS o
  LEFT JOIN customers AS c ON c.id = o.customer_id
  WHERE o.placed_at >= $1
$query$);
```

即使 `customers.email` 声明为 `NOT NULL`，`result_not_null` 仍为 false，因为左连接可能以空值扩展该行。生成可空客户端类型时，这一区别很有用。

### 执行与安全边界

- 语句会被解析和分析，但不会执行。描述 `DELETE`、易变函数调用或高开销查询不会运行该语句。
- 正常的名称解析和权限检查仍然适用。调用者不能使用 `pg_describe` 检查其自身无权引用的对象。
- 参数类型必须能够从上下文推断；有歧义的 `$n` 参数仍会产生 PostgreSQL 分析错误。
- 结果描述的是 PostgreSQL 分析后的输出，而不是应用稍后组装的动态 SQL。

### 要求与注意事项

- 上游 1.0.0 要求 PostgreSQL 17；PostgreSQL 16 被描述为可能可用但未经测试。Pigsty 软件包面向 PostgreSQL 17 和 18。
- 扩展可重定位，不需要预加载或重启。
- 配套的 `pg-describe-gen` TypeScript 工具是独立的 npm 软件包。PostgreSQL 扩展无需它也能工作。
- 这是一个较新的 API。请在 CI 中固定扩展/工具版本，并在模式迁移时一并审查生成的变更。
