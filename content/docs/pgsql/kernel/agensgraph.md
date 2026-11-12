---
title: AgensGraph
weight: 2115
description: 在 Pigsty 中使用 AgensGraph（PG18）图数据库内核，在 PostgreSQL 体系内获得属性图与 Cypher/SQL 混合查询能力。
icon: fa-solid fa-project-diagram
module: [PGSQL]
categories: [概念]
---

[AgensGraph](https://github.com/skaiworldwide-oss/agensgraph) 是基于 PostgreSQL 的属性图数据库内核，支持 openCypher 查询，并允许 Cypher 与 SQL 混合使用。


--------

## 概览

Pigsty 通过 `pg_mode: agens` 接入 AgensGraph，并保留标准 PostgreSQL 集群的大部分运维体验。

- 内核包别名：`agensgraph`，在 PG18 模板中解析为 `agensgraph-18`
- 模式标识：`pg_mode: agens`
- 当前软件包基线：`AgensGraph 2.18.6.1`（基于 `PostgreSQL 18.6`，`agensgraph-18`）
- 版本字符串示例：`PostgreSQL 18.6 (AgensGraph 2.18.6.1)`，实际补丁版本以安装包与 `SELECT version()` 为准
- 配置模板：[`fork/agens`](https://github.com/pgsty/pigsty/blob/main/conf/fork/agens.yml)（`-c agens` 与 `-c fork/agens` 等价）
- 适用场景：关系数据之上叠加图关系分析、路径查询、知识图谱、风控关联

对客户端来说，AgensGraph 仍然暴露 PostgreSQL 线缆协议，常规 PG 客户端、驱动与连接池都可以直接接入。
AgensGraph 增加了图模型对象、Cypher 语法，以及顶点、边等图对象；属性使用 JSONB 表示。


--------

## 安装

使用 Pigsty 内置的 [`fork/agens`](/docs/conf/agens/) 配置模板（[`conf/fork/agens.yml`](https://github.com/pgsty/pigsty/blob/main/conf/fork/agens.yml)，默认选择 AgensGraph 2.18 / PostgreSQL 18）：

```bash
./configure -c fork/agens
./deploy.yml
```

`fork/agens` 模板会自动启用 `pg_mode: agens` 并安装 `agensgraph` 内核包。部署完成后可直接核对内核版本：

```bash
psql -d meta -c "SELECT version();"
```


--------

## 配置

AgensGraph 在 Pigsty 中的关键配置如下：

```yaml
all:
  vars:
    node_repo_modules: node,infra,pgsql
    pg_version: 18

  children:
    pg-meta:
      vars:
        pg_mode: agens
        pg_packages: [ agensgraph, pgsql-common ]
```

AgensGraph 不需要像 pgEdge / Babelfish 那样额外预加载一组专有库，因此大多数 Pigsty 的标准 HA、备份、监控、访问控制与 IaC 用法都保持不变。针对备份与恢复，当 `pg_mode: agens` 时，Pigsty 会在 `/etc/pgbackrest/pgbackrest.conf` 与 PITR 临时配置中自动注入 `pg-version-force=18`（匹配 `pg_version`），并在 `pgbackrest.conf` 中设置 `checksum-page=n`（因 AgensGraph 在数据库目录 `base/<oid>/AG_VERSION` 下存放纯文本图元数据而非标准 PostgreSQL 数据页，开启页级校验会导致备份报错）。
如果你的负载以图遍历和复杂路径查询为主，通常应重点关注 `work_mem`、`shared_buffers` 与代价参数，而不是简单沿用默认 OLTP 习惯。


--------

## 使用

连接到数据库后，通常先创建图并设置 `graph_path`：

```sql
CREATE GRAPH g;
SET graph_path = g;
```

创建标签、顶点和边：

```sql
CREATE VLABEL person;
CREATE ELABEL knows;

CREATE (:person {name: 'Jack'});
CREATE (:person {name: 'Emily'})-[:knows]->(:person {name: 'Tom'});
```

执行图查询与更新：

```sql
MATCH (:person {name: 'Emily'})-[:knows]->(v:person)
RETURN v.name;

MATCH (v:person {name: 'Jack'})
SET v.age = '24';
```

如需在 SQL 中处理 Cypher 的结果，可把图查询作为 `FROM` 子查询，参见 [**AgensGraph 混合查询手册**](https://tech.skaiworldwide.com/docs/en/agensgraph/latest/querying/combining-sql-and-cypher.html)：

```sql
SELECT name #>> '{}' AS name
FROM (MATCH (v:person) RETURN v.name AS name) AS people
ORDER BY name;
```

在实际项目里，更常见的做法是把“关系表 + 图标签 + Cypher 查询”混合使用：
普通事务、权限与备份仍沿用 PostgreSQL 的工作流，图分析使用 AgensGraph 的 Cypher 与 SQL 混合语法。Apache AGE 扩展的 `cypher()` / `agtype` 用法属于另一套接口，不能直接套用。


--------

## 注意事项

- `fork/agens` 模板面向 AgensGraph 2.18 / PG18 部署。PG17 数据目录不能直接交给 PG18；现有集群应按 [**上游升级指南**](https://tech.skaiworldwide.com/docs/en/agensgraph/latest/release_notes/upgrade-to-2.18.html) 评估 `pg_upgrade` 或逻辑导出导入，并验证查询兼容性。
- 若从早期未启用 `checksum-page=n` 的配置升级而来，且历史备份曾因 `AG_VERSION` 页校验产生异常或告警，升级配置后建议立即重新执行一次全量备份（`pg-backup full`）。
- `fork/agens` 默认模板为单节点快速启用，生产环境建议按需扩展为高可用拓扑。
- 并非所有 PostgreSQL 三方扩展都保证可直接用于 AgensGraph 内核，建议先做兼容性验证。
- 图对象与关系对象可以共存于同一数据库中，但生产上通常更建议规划清晰的数据库或命名约定，避免图模型与普通业务对象互相污染。
- 请结合业务图模型规模调优内存与代价参数，避免直接沿用默认值。
- 使用 AgensGraph 内核遇到兼容或语义问题时，建议优先对照官方手册与上游 Issue 排查。


--------

## 相关文档

- Pigsty 配置模板：[`conf/agens`](/docs/conf/agens/)
- [PGSQL 内核模式参数](/docs/pgsql/config/kernel/)
- AgensGraph 官方仓库：<https://github.com/skaiworldwide-oss/agensgraph>
- AgensGraph 官方手册：<https://tech.skaiworldwide.com/docs/en/agensgraph/latest/>
- AgensGraph 官方 Quick Guide：<https://tech.skaiworldwide.com/docs/en/agensgraph/latest/get_started/index.html>
- AgensGraph 2.18 Release Notes：<https://tech.skaiworldwide.com/docs/en/agensgraph/latest/release_notes/2.18.html>


--------

## 可用扩展

以下列出部分非 Contrib 扩展供参考；实际可用性与版本请在目标实例上 [**查询确认**](/docs/pgsql/kernel/#版本)。

| 扩展名                 | 版本号   | 说明                               |
|:--------------------|:------|:---------------------------------|
| [meta](/ext/e/meta) | `1.0` | Utility functions for agensgraph |
{.full-width}
