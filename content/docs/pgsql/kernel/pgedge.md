---
title: pgEdge
weight: 2116
description: 在 Pigsty 中使用 pgEdge（PG17）内核，提供面向边缘场景的多主分布式 PostgreSQL 能力。
icon: fa-solid fa-network-wired
module: [PGSQL]
categories: [概念]
---

> [**pgEdge**](https://www.pgedge.com/) 是面向边缘场景的分布式 PostgreSQL 发行版，核心能力建立在 [**Spock**](https://docs.pgedge.com/spock-v5) 多主逻辑复制之上。


--------

## 概览

在 Pigsty 中，`pgEdge` 通过 `pg_mode: pgedge` 接入，默认交付以下核心组件：

- `pgedge`：PG17 兼容内核，这是一个打过补丁的 PG 17.9 内核
- `spock`：多主（active-active）逻辑复制
- `snowflake`：分布式唯一序列
- `lolor`：大对象逻辑复制兼容层

`pgedge` 集群仍然复用 Pigsty 的标准能力：HA、备份恢复、监控告警、访问控制、IaC 配置管理。


--------

## 安装

使用 Pigsty 内置模板：

```bash
./configure -c pgedge
./deploy.yml
```

部署完成后可检查内核与扩展：

```bash
psql -d meta -c "SELECT version();"
psql -d meta -c "SELECT extname, extversion FROM pg_extension WHERE extname IN ('spock','snowflake','lolor') ORDER BY 1;"
```

> 模板与完整参数见：[`pgedge` 配置模板](/docs/conf/pgedge/)。


--------

## 配置

`pgedge` 模式的关键参数如下（与 `conf/pgedge.yml` 一致）：

```yaml
pg_mode: pgedge
pg_version: 17
pg_packages: [ pgedge, pgsql-common ]
pg_extensions: [ spock, snowflake, lolor ]
pg_libs: 'spock, lolor, pg_stat_statements, auto_explain'
```

对于多节点多主场景，建议显式配置 `snowflake.node`（每个节点唯一）：

```yaml
pg_parameters:
  'snowflake.node': 1
```

PGEDGE 官方文档建议 Spock 使用逻辑复制相关参数（`wal_level=logical`、足够的 `max_wal_senders/max_replication_slots`）。Pigsty 的 `oltp/olap/tiny/crit` 配置模板默认已覆盖这类基础参数。


--------

## 使用

在 Pigsty 中，常见使用路径是“先单节点验证内核，再扩展为多节点 Spock 复制拓扑”。

### 1. 启用扩展

```sql
CREATE EXTENSION IF NOT EXISTS spock;
CREATE EXTENSION IF NOT EXISTS snowflake;
CREATE EXTENSION IF NOT EXISTS lolor;
```

### 2. 配置 Spock 多主复制

可使用 Spock SQL API（如 `node_create`、`sub_create`）或 pgEdge CLI 进行节点与订阅管理，官方入口文档：

- [Installing and Configuring Spock](https://docs.pgedge.com/platform/spock_ext/install_spock)
- [Replication Set Management](https://docs.pgedge.com/spock-v5/development/managing/repsets)
- [Node Management](https://docs.pgedge.com/spock-v5/development/managing/nodes)

### 3. 使用 Snowflake 序列（推荐）

官方明确建议在分布式多主场景优先使用 Snowflake 序列，而不是传统序列。可以通过 Spock/Snowflake 工具将现有序列转换为 Snowflake 序列。

- [Snowflake Sequences](https://docs.pgedge.com/platform/snowflake)
- [Using Spock with Snowflake Sequences](https://docs.pgedge.com/spock-v5/development/managing/snowflake)
- [LOLOR（Large Objects）](https://docs.pgedge.com/platform/lolor)


--------

## 注意事项

根据 PGEDGE 官方限制说明，生产使用前请重点评估：

- Spock 配置与管理通常需要超级用户权限。
- `UNLOGGED`/`TEMPORARY` 表不会参与复制。
- 复制是按数据库配置的，不是整实例一次性全库复制。
- 复制表应具备 `PRIMARY KEY` 或有效 `REPLICA IDENTITY`。
- 跨地域多主场景建议优先使用 `snowflake` 管理序列。
- 若业务依赖大对象复制，请使用 `lolor`，原生 large object 逻辑复制存在限制。

详见官方限制文档：[Spock Limitations](https://docs.pgedge.com/spock-v5/development/limitations/)。


--------

## 相关文档

- [PGSQL 内核总览](/docs/pgsql/kernel/)
- [`pgedge` 配置模板](/docs/conf/pgedge/)
- [PGSQL 内核模式参数](/docs/pgsql/config/kernel/)
- [pgEdge 官方文档首页](https://docs.pgedge.com/)
- [pgEdge Platform Release Notes](https://docs.pgedge.com/platform/pgedge_rel_notes)
