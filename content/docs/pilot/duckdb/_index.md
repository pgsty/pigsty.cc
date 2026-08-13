---
title: DuckDB
weight: 5070
description: 使用 Pigsty 安装 DuckDB，一个高性能，嵌入式的分析数据库组件。
icon: fas fa-crow
module: [PILOT]
categories: [参考]
---

[DuckDB](https://github.com/duckdb/duckdb/) 是一个高性能，嵌入式的分析数据库。

DuckDB 是嵌入式数据库，不需要部署与服务化，只需要在节点上安装 DuckDB 软件包即可使用。


--------

## 安装

当前 Pigsty 节点平台映射包含 `duckdb` 软件包，可通过 Infra 仓库直接安装：

```bash
./node.yml -t node_install  -e '{"node_repo_modules":"infra","node_packages":["duckdb"]}'
```

使用 pig 安装：

```bash
pig repo add infra -u      # 添加 Infra 仓库
pig install duckdb         # 安装 DuckDB 包
```

--------

## 相关资源

Pigsty 为 PostgreSQL 提供了一些 DuckDB 相关的扩展插件：

- [**`pg_duckdb`**](/ext/e/pg_duckdb)，由 DuckDB 官方提供的 PostgreSQL 扩展
- [**`pg_mooncake`**](/ext/e/pg_mooncake)，在 `pg_duckdb` 扩展的基础上更进一步提供列式存储引擎与同步功能。
- [`pg_analytics`](https://github.com/paradedb/pg_analytics)，旨在基于 DuckDB 提供高性能 OLAP 分析能力；该项目已归档，并已从当前 Pigsty 扩展目录移除
- [**`duckdb_fdw`**](/ext/e/duckdb_fdw)，DuckDB 外部数据源包装器，允许从 PostgreSQL 中读写 DuckDB 数据文件
