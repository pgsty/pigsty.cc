---
title: AgensGraph
weight: 2115
description: 在 Pigsty 中使用 AgensGraph（PG16）图数据库内核，支持属性图与 Cypher/SQL 混合查询。
icon: fa-solid fa-project-diagram
module: [PGSQL]
categories: [概念]
---

> [AgensGraph](https://github.com/skaiworldwide-oss/agensgraph) 是基于 PostgreSQL 的多模型图数据库内核，支持属性图模型与 openCypher 查询。


--------

## 概览

在 Pigsty 中，AgensGraph 通过 `pg_mode: agens` 接入，核心特征如下：

- 内核包组：`agensgraph`
- 模式标识：`pg_mode: agens`
- 当前模板版本：`AgensGraph 2.16.0`（基于 `PostgreSQL 16`）
- 适用平台：`el8/el9/el10`、`d12/d13`、`u22/u24`
- 适用架构：`x86_64`、`aarch64`

Pigsty `v4.2.0`（发布于 `2026-02-27`）已将 `agensgraph` 纳入标准包映射与模板交付链路。


--------

## 安装

### 使用 Pigsty 模板安装（推荐）

```bash
./configure -c agens
./deploy.yml
```

`agens` 模板会自动启用 `pg_mode: agens` 并安装 `agensgraph` 内核包。


### 参考官方安装方式（源码编译）

如果你希望脱离 Pigsty 单独验证 AgensGraph，可参考官方安装流程：

```bash
git clone https://github.com/skaiworldwide-oss/agensgraph.git
cd agensgraph
./configure
make install-world
```

官方安装文档：<https://tech.skaiworldwide.com/docs/en/agensgraph/16/quick_guide/installation.html>


--------

## 配置

AgensGraph 在 Pigsty 中的关键配置如下：

```yaml
all:
  vars:
    node_repo_modules: node,infra,pgsql
    pg_version: 16

  children:
    pg-meta:
      vars:
        pg_mode: agens
        pg_packages: [ agensgraph, pgsql-common ]
```

图查询性能调优可参考官方建议，重点关注以下参数（位于 `postgresql.conf`）：

- `shared_buffers`
- `work_mem`
- `random_page_cost`（图查询场景建议下调）

更多参数说明请参考官方文档：<https://tech.skaiworldwide.com/docs/en/agensgraph/latest/operation_manual/configuration.html>


--------

## 使用

连接到数据库后，可先完成图创建与路径设置：

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

如需在 SQL 中混合调用 Cypher，可使用 `cypher()`：

```sql
SELECT *
FROM cypher('g', $$ MATCH (v:person) RETURN v.name $$) AS (name agtype);
```

以上语法与示例来自官方 Cypher 手册：<https://tech.skaiworldwide.com/docs/en/agensgraph/16/cypher_manual/cypher_manual.html>


--------

## 注意事项

- `agens` 默认模板为单节点快速启用，生产环境建议按需扩展为高可用拓扑。
- 并非所有 PostgreSQL 三方扩展都保证可直接用于 AgensGraph 内核，建议先做兼容性验证。
- 请结合业务图模型规模调优内存与代价参数，避免直接沿用默认值。
- 使用 AgensGraph 内核遇到兼容或语义问题时，建议优先对照官方手册与上游 Issue 排查。


--------

## 相关文档

- Pigsty 配置模板：[`conf/agens`](/docs/conf/agens/)
- Pigsty 内核模式参数：[/docs/pgsql/config/kernel/](/docs/pgsql/config/kernel/)
- AgensGraph 官方仓库：<https://github.com/skaiworldwide-oss/agensgraph>
- AgensGraph 官方手册：<https://tech.skaiworldwide.com/docs/en/agensgraph/latest/>
- AgensGraph 官方 Quick Guide：<https://tech.skaiworldwide.com/docs/en/agensgraph/16/quick_guide/index.html>
- AgensGraph 2.16.0 Release Notes：<https://tech.skaiworldwide.com/docs/en/agensgraph/latest/release_notes/agensgraph_release_notes_2_16_0.html>
