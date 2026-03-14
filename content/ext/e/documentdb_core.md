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
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/documentdb-0.109-0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">documentdb-0.109-0.tar.gz</div>
    <div class="ext-card__desc">documentdb-0.109-0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`documentdb`**](/ext/e/documentdb) | `0.109` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9000  | [**`documentdb`**](/ext/e/documentdb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9010  | [**`documentdb_core`**](/ext/e/documentdb_core) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9020  | [**`documentdb_distributed`**](/ext/e/documentdb_distributed) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9030  | [**`documentdb_extended_rum`**](/ext/e/documentdb_extended_rum) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`mongo_fdw`](/ext/e/mongo_fdw) [`rum`](/ext/e/rum) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_cron`](/ext/e/pg_cron) [`postgis`](/ext/e/postgis) [`vector`](/ext/e/vector) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`documentdb`](/ext/e/documentdb) [`documentdb_distributed`](/ext/e/documentdb_distributed) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.109` | {{< pgvers "18,17,16,15" >}} | `documentdb` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.109` | {{< pgvers "18,17,16,15" >}} | `documentdb_$v` | `postgresql$v-contrib`, `pg_cron_$v`, `pgvector_$v`, `rum_$v` |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.109` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-documentdb` | `postgresql-$v-cron`, `postgresql-$v-pgvector`, `postgresql-$v-rum` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.107 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.107 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.107 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.107 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.107 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.107 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.109 2 | AVAIL PIGSTY 0.109 2 | AVAIL PIGSTY 0.109 2 | AVAIL PIGSTY 0.109 2 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.109 2 | AVAIL PIGSTY 0.109 2 | AVAIL PIGSTY 0.109 2 | AVAIL PIGSTY 0.109 2 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | AVAIL PIGSTY 0.109 1 | MISS PIGSTY - 0 |
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

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install documentdb;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y documentdb -v 18  # PG 18
pig ext install -y documentdb -v 17  # PG 17
pig ext install -y documentdb -v 16  # PG 16
pig ext install -y documentdb -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y documentdb_18       # PG 18
dnf install -y documentdb_17       # PG 17
dnf install -y documentdb_16       # PG 16
dnf install -y documentdb_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-documentdb   # PG 18
apt install -y postgresql-17-documentdb   # PG 17
apt install -y postgresql-16-documentdb   # PG 16
apt install -y postgresql-15-documentdb   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_documentdb, pg_documentdb_core';
```


**创建扩展**：

```sql
CREATE EXTENSION documentdb_core;
```



## 用法

> [documentdb_core: DocumentDB for PostgreSQL 的核心 API 接口](https://github.com/documentdb/documentdb)

DocumentDB 在 PostgreSQL 上提供 MongoDB 兼容的文档数据库功能。`documentdb_core` 扩展为原生 Postgres 引入了 BSON 数据类型支持和操作。

### BSON 数据类型

该扩展为 PostgreSQL 添加了原生 BSON（二进制 JSON）数据类型，支持 MongoDB 风格文档的存储和操作。

### 基本文档操作

文档通过 DocumentDB API 层的 MongoDB 兼容 CRUD 操作进行管理：

```python
import pymongo

client = pymongo.MongoClient(
    'mongodb://user:pass@localhost:10260/?tls=true&tlsAllowInvalidCertificates=true'
)

db = client["myDatabase"]
collection = db.create_collection("myCollection")

# 插入文档
collection.insert_one({
    'name': 'John Doe',
    'email': 'john@email.com',
    'address': '123 Main St'
})

collection.insert_many([
    {'name': 'Jane Smith', 'email': 'jane@email.com'},
    {'name': 'Alice Johnson', 'email': 'alice@email.com'}
])

# 查询文档
for doc in collection.find():
    print(doc)

single = collection.find_one({'name': 'John Doe'})
```

### 聚合管道

```python
pipeline = [
    {'$match': {'name': 'Alice Johnson'}},
    {'$project': {'_id': 0, 'name': 1, 'email': 1}}
]

results = collection.aggregate(pipeline)
for doc in results:
    print(doc)
```

### 组件

- **documentdb_core**：原生 Postgres 的 BSON 数据类型支持和操作
- **documentdb (pg_documentdb)**：提供 CRUD 功能的公共 API 接口
- **pg_documentdb_gw**：网关协议转换层（MongoDB 线协议到 PostgreSQL）

该扩展支持对 BSON 文档的全文搜索、地理空间查询和向量搜索。
