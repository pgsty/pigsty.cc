---
title: "documentdb_extended_rum"
linkTitle: "documentdb_extended_rum"
description: "DocumentDB扩展RUM索引访问方法"
weight: 9030
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/documentdb/documentdb">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">documentdb/documentdb</div>
    <div class="ext-card__desc">https://github.com/documentdb/documentdb</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/documentdb-0.110-0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">documentdb-0.110-0.tar.gz</div>
    <div class="ext-card__desc">documentdb-0.110-0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`documentdb`**](/ext/e/documentdb) | `0.110` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9000  | [**`documentdb`**](/ext/e/documentdb) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9010  | [**`documentdb_core`**](/ext/e/documentdb_core) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9020  | [**`documentdb_distributed`**](/ext/e/documentdb_distributed) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 9030  | [**`documentdb_extended_rum`**](/ext/e/documentdb_extended_rum) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`rum`](/ext/e/rum) [`documentdb`](/ext/e/documentdb) [`documentdb_core`](/ext/e/documentdb_core) [`documentdb_distributed`](/ext/e/documentdb_distributed) [`mongo_fdw`](/ext/e/mongo_fdw) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.110` | {{< pgvers "18,17,16,15" >}} | `documentdb` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.110` | {{< pgvers "18,17,16,15" >}} | `documentdb_$v` | `postgresql$v-contrib`, `pg_cron_$v`, `pgvector_$v`, `rum_$v`, `postgis36_$v` |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.110` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-documentdb` | `postgresql-$v-cron`, `postgresql-$v-pgvector`, `postgresql-$v-rum`, `postgresql-$v-postgis-3` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | AVAIL PIGSTY 0.110 1 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | AVAIL PIGSTY 0.110 2 | MISS PIGSTY - 0 |
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
shared_preload_libraries = 'pg_documentdb_extended_rum';
```


**创建扩展**：

```sql
CREATE EXTENSION documentdb_extended_rum;
```



## 用法

> [documentdb_extended_rum: DocumentDB 扩展 RUM 索引访问方法](https://github.com/documentdb/documentdb)

`documentdb_extended_rum` 扩展为 PostgreSQL 上的 DocumentDB 提供增强的 RUM（递归联合归并）索引访问方法，改善基于文档的工作负载查询性能。

### 概述

该扩展扩展了 RUM 索引类型，以更好地支持 DocumentDB 中的 BSON 文档索引。它提供了以下优化的索引访问方法：

- 文档字段的全文搜索
- BSON 数据的复合索引操作
- 索引文档属性的高效范围查询和排序

### 前置条件

需要安装 `documentdb_core`。

### 启用

```sql
CREATE EXTENSION documentdb_extended_rum;
```

扩展的 RUM 索引在文档查询模式适合时由 DocumentDB 查询规划器自动使用。
