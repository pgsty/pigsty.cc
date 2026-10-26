---
title: 软件包
weight: 2203
description: 扩展包别名与类别命名规则
icon: fa-solid fa-box
module: [PGSQL]
categories: [参考]
---

Pigsty 使用 **包别名** 机制简化扩展的安装与管理。


--------

## 包别名机制

管理扩展涉及多个层面的名称映射：

| 层面     | 示例 `pgvector`            | 示例 `postgis`                       |
|:-------|:-------------------------|:-----------------------------------|
| 扩展名    | `vector`                 | `postgis`, `postgis_topology`, ... |
| 包别名    | `pgvector`               | `postgis`                          |
| RPM 包名 | `pgvector_18`            | `postgis36_18`                    |
| DEB 包名 | `postgresql-18-pgvector` | `postgresql-18-postgis-3`         |
{.full-width}

Pigsty 提供 **包别名** 抽象层，让用户无需关心具体的 RPM/DEB 包名：

```yaml
pg_extensions: [ pgvector, postgis, timescaledb ]  # 使用包别名
```

Pigsty 会根据操作系统和 PostgreSQL 版本自动翻译为正确的包名。

> 注意：`CREATE EXTENSION` 时使用的是 **扩展名**（如 `vector`），而非包别名（`pgvector`）。


--------

## 类别别名

所有扩展被划分为 16 个类别，可使用类别别名批量安装：

```yaml
# 使用通用类别别名（自动适配当前 PG 版本）
pg_extensions: [ pgsql-gis, pgsql-rag, pgsql-fts ]

# 或使用版本特定的类别别名
pg_extensions: [ pg18-gis, pg18-rag, pg18-fts ]
```

类别别名展开为各平台 `package_map` 中的包组，并不包含该类别的全部扩展，也不保证支持所有 PostgreSQL 版本。具体成员与版本支持见 [**别名映射**](/docs/pgsql/config/alias/) 和 [**可用性矩阵**](/ext/os/)。

扩展之间的依赖与兼容性应按所用版本核对。例如当前 [`pg_mooncake`](https://github.com/Mooncake-Labs/pg_mooncake/blob/main/pg_mooncake.control) 依赖 `pg_duckdb`，需要同时安装并预加载二者。


--------

## 类别列表

|   类别    | 说明  | 典型扩展                                           |
|:-------:|:----|:-----------------------------------------------|
| `time`  | 时序类 | timescaledb, pg_cron, periods                  |
|  `gis`  | 地理类 | postgis, h3, pgrouting                         |
|  `rag`  | 向量类 | pgvector, pgml, vchord                         |
|  `fts`  | 搜索类 | pg_trgm, zhparser, pgroonga                    |
| `olap`  | 分析类 | citus, pg_duckdb, pg_mooncake                  |
| `feat`  | 特性类 | age, pg_graphql, rum                           |
| `lang`  | 语言类 | plpython3u, pljava, plv8                       |
| `type`  | 类型类 | hstore, ltree, citext                          |
| `util`  | 工具类 | http, pg_net, pgjwt                            |
| `func`  | 函数类 | pgcrypto, uuid-ossp, pg_uuidv7                 |
| `admin` | 管理类 | pg_repack, pgagent, pg_squeeze                 |
| `stat`  | 统计类 | pg_stat_statements, pg_qualstats, auto_explain |
|  `sec`  | 安全类 | pgaudit, pgcrypto, pgsodium                    |
|  `fdw`  | 外部类 | postgres_fdw, mysql_fdw, oracle_fdw            |
|  `sim`  | 兼容类 | orafce, babelfishpg_tds                        |
|  `etl`  | 数据类 | pglogical, wal2json, decoderbufs               |
{.full-width}


--------

## 查阅扩展目录

您可以在 [Pigsty 扩展目录](/ext/list/) 网站上查阅所有可用扩展的详细信息，包括：

- 扩展名称、描述、版本
- 支持的 PostgreSQL 版本
- 支持的操作系统发行版
- 安装方式、预加载需求
- 许可证、来源仓库
