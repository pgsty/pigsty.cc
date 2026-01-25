---
title: 模块：DuckDB
weight: 5050
description: 使用 Pigsty 安装 DuckDB，一个高性能，嵌入式的分析数据库组件。
icon: fas fa-crow
module: [PILOT]
categories: [参考]
---

> [DuckDB](https://github.com/duckdb/duckdb/) 是一个高性能，嵌入式的分析数据库：[安装](#安装) | [资源](#资源)

--------

## 概览

DuckDB 是一个嵌入式数据库，所以不需要部署与服务化，只需要在节点上安装 DuckDB 软件包即可使用。


--------

## 安装

Pigsty 在 Infra 软件仓库中已经提供了 DuckDB 软件包 （RPM / DEB），使用以下命令即可完成安装：

```bash
./node.yml -t node_install  -e '{"node_repo_modules":"infra","node_packages":["duckdb"]}'
```


--------

## 相关资源

Pigsty 为 PostgreSQL 提供了一些 DuckDB 相关的扩展插件：

- [**`pg_analytics`**](/docs/pgsql/ext/)，旨在基于 DuckDB 提供高性能 OLAP 分析能力
- [**`pg_lakehouse`**](/docs/pgsql/ext/)，由 ParadeDB 出品的数据湖仓插件，封装了 DuckDB。（目前计划重命名回 `pg_analytics` ）
- [**`duckdb_fdw`**](/docs/pgsql/ext/)，DuckDB 外部数据源包装器，允许从PG中读写 DuckDB 数据文件
- [**`pg_duckdb`**](/docs/pgsql/ext/)，由 DuckDB 官方 MotherDuck 和 Hydra 出品的扩展插件，WIP （仅在 EL 系统中提供试点）

