---
title: "documentdb_core"
linkTitle: "documentdb_core"
description: "微软DocumentDB的核心API层实现"
weight: 9010
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/documentdb/documentdb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">documentdb/documentdb</div>
    <div class="ext-card__desc">https://github.com/documentdb/documentdb</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/documentdb-1.0-0.tar.gz intelrdfpmath-applied-2.0u3-1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">documentdb-1.0-0.tar.gz intelrdfpmath-applied-2.0u3-1.tar.gz</div>
    <div class="ext-card__desc">documentdb-1.0-0.tar.gz intelrdfpmath-applied-2.0u3-1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`documentdb`**](/ext/e/documentdb) | `1.0` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9000  | [**`documentdb`**](/ext/e/documentdb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `documentdb_api` |
| 9010  | [**`documentdb_core`**](/ext/e/documentdb_core) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `documentdb_core` |
| 9020  | [**`documentdb_distributed`**](/ext/e/documentdb_distributed) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9030  | [**`documentdb_extended_rum`**](/ext/e/documentdb_extended_rum) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | `documentdb_extended_rum_catalog` |
{.ext-table}

| **相关扩展** | [`mongo_fdw`](/ext/e/mongo_fdw) [`pg_projection`](/ext/e/pg_projection) [`pgbson`](/ext/e/pgbson) [`jsquery`](/ext/e/jsquery) [`pgjq`](/ext/e/pgjq) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsonschema`](/ext/e/jsonschema) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`documentdb`](/ext/e/documentdb) [`documentdb_distributed`](/ext/e/documentdb_distributed) |
{.ext-table .ext-table--rel}


> DocumentDB 1.0 packages install SQL 1.0-0. PGSTY supports PostgreSQL 16-18; PG15 is excluded due to the libbson allocation alignment failure. The OSS package includes documentdb, documentdb_core and documentdb_extended_rum only. External RUM is a package dependency on PG16/17 only, not PG18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16" >}} | `documentdb` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16" >}} | `documentdb_$v` | `postgresql$v-contrib`, `pg_cron_$v`, `pgvector_$v`, `rum_$v`, `postgis36_$v` |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-documentdb` | `postgresql-$v-cron`, `postgresql-$v-pgvector`, `postgresql-$v-rum`, `postgresql-$v-postgis-3` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 1.0 1 | AVAIL PIGSTY 0.117 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | AVAIL PGDG 1.0 4 | N/A PIGSTY - 0 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `documentdb` 扩展的 RPM / DEB 包：

```bash
pig build pkg documentdb         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `documentdb` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install documentdb;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y documentdb -v 18  # PG 18
pig ext install -y documentdb -v 17  # PG 17
pig ext install -y documentdb -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y documentdb_18       # PG 18
dnf install -y documentdb_17       # PG 17
dnf install -y documentdb_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-documentdb   # PG 18
apt install -y postgresql-17-documentdb   # PG 17
apt install -y postgresql-16-documentdb   # PG 16
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_documentdb_core';
```


**创建扩展**：

```sql
CREATE EXTENSION documentdb_core;
```

## 用法

来源：

- [DocumentDB v1.0-0 README](https://github.com/documentdb/documentdb/blob/v1.0-0/README.md)
- [`documentdb_core` 控制文件](https://github.com/documentdb/documentdb/blob/v1.0-0/pg_documentdb_core/documentdb_core.control)
- [BSON SQL定义](https://github.com/documentdb/documentdb/blob/v1.0-0/pg_documentdb_core/sql/udfs/bson_io/bson_io--latest.sql)
- [官方预加载助手](https://github.com/documentdb/documentdb/blob/v1.0-0/scripts/preload_libraries.sh)

`documentdb_core` 是DocumentDB使用的低层BSON类型和操作符层。通常它作为 `documentdb` 的依赖项安装，自身不提供集合CRUD、MongoDB网络协议或网关。

### 配置与安装

必须通过 `shared_preload_libraries` 加载 `pg_documentdb_core`，然后重启PostgreSQL：

```ini
shared_preload_libraries = 'pg_documentdb_core'
```

对于完整的单节点堆栈，官方助手还会预加载 `pg_cron` 和 `pg_documentdb`。在常规部署中安装父扩展：

```sql
CREATE EXTENSION documentdb CASCADE;
```

直接安装仅适用于低层BSON工作：

```sql
CREATE EXTENSION documentdb_core;
```

该扩展为超级用户专用且不可重定位。

### BSON 工作流

```sql
SELECT '{"name":"Ada","score":42}'::documentdb_core.bson;

SELECT documentdb_core.bson_get_value_text(
  '{"name":"Ada","score":42}'::documentdb_core.bson,
  'name'
);
```

除非 `documentdb_core` 在 `search_path` 中，否则请显式使用模式限定名。

### 重要对象

- `documentdb_core.bson` 存储BSON文档。
- `documentdb_core.bsonquery` 表示用于DocumentDB计划器和操作符层的BSON查询值。
- `documentdb_core.bsonsequence` 表示BSON值序列。
- `bson_get_value` 和 `bson_get_value_text`，通过 `->` 和 `->>` 也暴露出来，从BSON文档中提取路径。
- `bson_from_bytea`, `bson_to_bytea`, `bson_json_to_bson` 和 `bson_to_json_string` 支持序列化边界。
- `bson_btree_ops` 和 `bson_hash_ops` 提供更高层所需的比较和哈希支持。

### 操作边界

BSON比较、索引和数值语义遵循DocumentDB的实现，不应假设与PostgreSQL `jsonb` 匹配。大多数对象是 `documentdb` 的基础架构；寻求集合和MongoDB命令的应用程序应使用父扩展或网关而非直接构建在内部类型上。

使用 SQL 扩展版本 1.0-0，并与其他 DocumentDB 组件保持匹配。核心层仍提供 BSON 基础能力，集合操作和网关工作流由上层扩展承担。
