---
title: 扩展简介
weight: 2202
description: PostgreSQL 扩展的核心概念与 Pigsty 扩展生态
icon: fas fa-info-circle
module: [PGSQL]
categories: [参考]
---

扩展是 PostgreSQL 的灵魂所在。Pigsty 收录了 440+ 个预编译、开箱即用的扩展插件，充分释放 PostgreSQL 的潜能。


--------

## 扩展是什么

PostgreSQL 扩展（Extension）是一种模块化机制，允许在不修改核心代码的情况下增强数据库功能。
一个扩展通常包含三部分：

- **控制文件**（`.control`）：必需，包含扩展元数据
- **SQL 脚本**（`.sql`）：可选，定义函数、类型、操作符等数据库对象
- **动态库**（`.so`）：可选，提供 C 语言实现的高性能功能

扩展可以为 PostgreSQL 添加：新数据类型、索引方法、函数与操作符、外部数据访问、过程语言、性能监控、安全审计等能力。


--------

## 核心扩展

Pigsty 收录的扩展中，以下是最具代表性的：

| 扩展 | 说明 |
|:-----|:-----|
| [**PostGIS**](https://postgis.net/) | 地理空间数据类型与索引，GIS 事实标准 |
| [**TimescaleDB**](https://www.timescale.com/) | 时序数据库，支持持续聚合、列存储、自动压缩 |
| [**PGVector**](https://github.com/pgvector/pgvector) | 向量数据类型与 HNSW/IVFFlat 索引，AI 应用必备 |
| [**Citus**](https://www.citusdata.com/) | 分布式数据库，水平分片扩展能力 |
| [**pg_duckdb**](https://github.com/duckdb/pg_duckdb) | 嵌入 DuckDB 分析引擎，OLAP 加速 |
| [**ParadeDB**](https://www.paradedb.com/) | ElasticSearch 级别的全文搜索能力 |
| [**Apache AGE**](https://age.apache.org/) | 图数据库，支持 OpenCypher 查询语言 |
| [**pg_graphql**](https://github.com/supabase/pg_graphql) | 原生 GraphQL 查询支持 |

绝大多数扩展可以并存甚至组合使用，产生 1+1 远大于 2 的协同效应。


--------

## 扩展类别

Pigsty 将扩展划分为 16 个类别：

| 类别 | 别名 | 说明 | 典型扩展 |
|:----:|:-----|:-----|:--------|
| 时序 | `time` | 时序数据处理 | timescaledb, pg_cron, periods |
| 地理 | `gis` | 地理空间数据 | postgis, h3, pgrouting |
| 向量 | `rag` | 向量检索与 AI | pgvector, vchord, pg_vectorize |
| 搜索 | `fts` | 全文检索 | pgroonga, zhparser, pg_bigm |
| 分析 | `olap` | OLAP 与分析 | pg_duckdb, pg_mooncake, citus |
| 特性 | `feat` | 功能增强 | age, pg_graphql, hll, rum |
| 语言 | `lang` | 过程语言 | plpython3u, pljava, plv8 |
| 类型 | `type` | 数据类型 | hstore, ltree, ip4r |
| 工具 | `util` | 实用工具 | http, pg_net, pgjwt |
| 函数 | `func` | 函数库 | pg_uuidv7, topn, tdigest |
| 管理 | `admin` | 运维管理 | pg_repack, pg_squeeze, pgagent |
| 统计 | `stat` | 监控统计 | pg_stat_statements, pg_qualstats, auto_explain |
| 安全 | `sec` | 安全审计 | pgaudit, pgsodium, pg_tde |
| 外联 | `fdw` | 外部数据访问 | postgres_fdw, mysql_fdw, oracle_fdw |
| 兼容 | `sim` | 数据库兼容 | orafce, babelfish |
| 同步 | `etl` | 数据同步 | pglogical, wal2json, decoderbufs |

使用类别别名可以批量安装整个类别的扩展，例如 `pg_extensions: [ pgsql-gis, pgsql-rag ]`。


--------

## 预定义扩展集

Pigsty 提供了若干预定义的扩展集（Stack），方便按场景选用：

| 扩展集 | 包含扩展 |
|:-------|:---------|
| `gis-stack` | postgis, pgrouting, pointcloud, h3, q3c, ogr_fdw |
| `rag-stack` | pgvector, vchord, pgvectorscale, pg_similarity, pg_tiktoken |
| `fts-stack` | pgroonga, pg_bigm, zhparser, hunspell |
| `olap-stack` | pg_duckdb, pg_mooncake, timescaledb, pg_partman, plproxy |
| `feat-stack` | age, hll, rum, pg_graphql, pg_jsonschema, jsquery |
| `stat-stack` | pg_show_plans, pg_stat_kcache, pg_qualstats, pg_wait_sampling |
| `supa-stack` | pg_graphql, pg_jsonschema, wrappers, pgvector, pgsodium, vault |

在 `pg_extensions` 中直接使用这些名称即可安装整套扩展。


--------

## 扩展资源

- [**扩展目录**](https://pgext.cloud/zh/list)：查阅所有可用扩展的详细信息
- [**扩展仓库**](https://pgext.cloud/zh/repo/)：Pigsty 扩展软件仓库
- [**pig 包管理器**](https://pgext.cloud/pig)：命令行扩展管理工具
- [**GitHub Pigsty**](https://github.com/pgsty/pigsty)：Pigsty 源代码仓库

