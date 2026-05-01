---
title: "documentdb_distributed"
linkTitle: "documentdb_distributed"
description: "DocumentDB多节点模式的API层"
weight: 9020
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

| **相关扩展** | [`citus`](/ext/e/citus) [`documentdb_core`](/ext/e/documentdb_core) [`documentdb`](/ext/e/documentdb) [`citus`](/ext/e/citus) [`mongo_fdw`](/ext/e/mongo_fdw) [`plproxy`](/ext/e/plproxy) [`postgres_fdw`](/ext/e/postgres_fdw) [`rum`](/ext/e/rum) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.110` | {{< pgvers "18,17,16,15" >}} | `documentdb` | `citus`, `documentdb_core`, `documentdb` |
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
shared_preload_libraries = 'citus, pg_documentdb, pg_documentdb_core';
```


**创建扩展**：

```sql
CREATE EXTENSION documentdb_distributed CASCADE;  -- 依赖: citus, documentdb_core, documentdb
```



## 用法

> [documentdb_distributed: DocumentDB 的多节点 API 接口](https://github.com/documentdb/documentdb)

`documentdb_distributed` 扩展为 PostgreSQL 上的 DocumentDB 提供多节点分布式能力。它扩展了核心 DocumentDB 功能以支持跨多个 PostgreSQL 节点的水平扩展。

### 概述

该扩展与 `documentdb_core` 配合使用，提供分布式文档数据库操作。它支持：

- 将文档集合分片到多个节点
- 分布式查询执行，用于 MongoDB 兼容操作
- 大规模文档工作负载的水平扩展

### 前置条件

`documentdb_distributed` 扩展需要：

- 已安装并配置 `documentdb_core` 扩展
- 多节点 PostgreSQL 集群（通常使用 Citus 进行分布）

### 启用

```sql
CREATE EXTENSION documentdb_distributed;
```

分布式层透明地将 CRUD 操作和聚合管道路由到集群节点，同时保持 MongoDB 线协议兼容性。
