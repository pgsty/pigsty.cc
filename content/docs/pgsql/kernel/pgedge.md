---
title: pgEdge
weight: 2116
description: 在 Pigsty 中使用 pgEdge（PG18）内核，借助 Spock 多主逻辑复制构建面向边缘场景的分布式 PostgreSQL。
icon: fa-solid fa-network-wired
module: [PGSQL]
categories: [概念]
---

[**pgEdge**](https://www.pgedge.com/) 是面向边缘场景的分布式 PostgreSQL 发行版，核心能力建立在 [**Spock**](https://docs.pgedge.com/spock-v5) 多主逻辑复制之上。


--------

## 概览

Pigsty 通过 `pg_mode: pgedge` 接入 pgEdge，并用标准 PG 集群编排流程交付其核心组件：

- `pgedge`：PG18 兼容内核
- [`spock`](/ext/e/spock/)：多主（active-active）逻辑复制
- [`snowflake`](/ext/e/snowflake/)：分布式唯一序列
- [`lolor`](/ext/e/lolor/)：大对象逻辑复制兼容层

当前 Pigsty 仓库中，pgEdge PG18 对应包为 `pgedge-18 18.3`，并同时提供 `spock 5.0.6`、`snowflake 2.4` 与 `lolor 1.2.2`。PG17 包仍可作为过渡版本保留，但 `pgedge` 配置模板已经默认使用 `pg_version: 18`。
对客户端来说，pgEdge 仍然是 PostgreSQL 线缆协议，`psql`、JDBC/ODBC、DBeaver 等工具都可以直接接入。

Pigsty 提供的是“先验证单节点内核，再扩展到多节点复制拓扑”的交付路径：
模板会开箱即用地完成内核、扩展、监控、备份与访问控制，但真正的多主拓扑编排仍需要你根据业务一致性和冲突策略来设计。


--------

## 安装

使用 Pigsty 内置模板：

```bash
./configure -c pgedge
./deploy.yml
```

模板默认在 `meta` 数据库预装 `spock`、`snowflake`、`lolor`。部署完成后可用以下命令核对版本和扩展：

```bash
psql -d meta -c "SELECT version();"
psql -d meta -c "SELECT extname, extversion FROM pg_extension WHERE extname IN ('spock','snowflake','lolor') ORDER BY 1;"
```

> 模板与完整参数见：[`pgedge` 配置模板](/docs/conf/pgedge/)。


--------

## 配置

`pgedge` 模板的关键参数如下（与 `conf/pgedge.yml` 一致）：

```yaml
pg_mode: pgedge
pg_version: 18
pg_packages: [ pgedge, pgsql-common ]
pg_extensions: [ spock, snowflake, lolor ]
pg_libs: 'spock, lolor, pg_stat_statements, auto_explain'
pg_databases:
  - { name: meta ,baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty] ,extensions: [spock, snowflake, lolor] }
```

如果计划扩展为多节点多主，建议额外显式配置逻辑复制容量和 `snowflake.node`：

```yaml
pg_parameters:
  wal_level: logical
  max_replication_slots: 16
  max_wal_senders: 16
  'snowflake.node': 1
```

其中 `snowflake.node` 必须在每个写节点上保持唯一，否则分布式 ID 会冲突。


--------

## 使用

在 Pigsty 中，常见使用路径是“先单节点验证内核，再扩展为多节点 Spock 复制拓扑”。

如果你在业务数据库中也需要这些能力，请先创建扩展：

```sql
CREATE EXTENSION IF NOT EXISTS spock;
CREATE EXTENSION IF NOT EXISTS snowflake;
CREATE EXTENSION IF NOT EXISTS lolor;
```

随后再使用 Spock SQL API 或 pgEdge CLI 建立节点、复制集和订阅关系。
对于已有使用 `serial` / `identity` 的业务表，建议在多主写入前先完成 `snowflake` 序列规划，否则跨节点写入很容易出现主键冲突。


--------

## 注意事项

- pgEdge 的复制是“按数据库”组织的，不是一次性把整个实例自动变成全库多主。
- 参与复制的表应具备 `PRIMARY KEY` 或合适的 `REPLICA IDENTITY`。
- `UNLOGGED` 与 `TEMPORARY` 表不会进入 Spock 逻辑复制。
- Spock 的配置与运维通常需要超级用户权限，生产环境应明确权限边界。
- 如果业务依赖 large object 复制，应显式使用 `lolor`，不要假定原生 large object 会自动正确同步。
- 跨地域多主不是“开关一开即可用”的功能，网络时延、冲突解决策略与写入模型都要先评估。


--------

## 相关文档

- [PGSQL 内核总览](/docs/pgsql/kernel/)
- [`pgedge` 配置模板](/docs/conf/pgedge/)
- [PGSQL 内核模式参数](/docs/pgsql/config/kernel/)
- [`spock` 扩展](/ext/e/spock/)
- [`snowflake` 扩展](/ext/e/snowflake/)
- [`lolor` 扩展](/ext/e/lolor/)
- [pgEdge 官方文档首页](https://docs.pgedge.com/)
- [Spock Limitations](https://docs.pgedge.com/spock-v5/development/limitations/)
- [Snowflake Sequences](https://docs.pgedge.com/platform/snowflake)
