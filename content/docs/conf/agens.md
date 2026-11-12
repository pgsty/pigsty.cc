---
title: agens
weight: 450
description: AgensGraph 内核模板，提供属性图模型与 Cypher 查询能力
icon: fa-solid fa-project-diagram
categories: [参考]
---

`fork/agens` 配置模板（`conf/fork/agens.yml`，可通过 `-c agens` 或 `-c fork/agens` 选择）使用 AgensGraph 2.18（PG18）数据库内核替代原生 PostgreSQL，提供属性图模型与 Cypher 查询能力。

完整教程请参考：**[AgensGraph 内核使用说明](/docs/pgsql/kernel/agensgraph/)**


--------

## 配置概览

- 配置名称：`fork/agens`
- 节点数量： 单节点
- 配置说明：AgensGraph（PG18）图数据库内核配置
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)、[`pgsql`](/docs/conf/pgsql/)

启用方式：

```bash
./configure -c agens [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/fork/agens.yml`](https://github.com/pgsty/pigsty/blob/main/conf/fork/agens.yml)

{{< include file="yaml/fork/agens.yml" code=true lang="yaml" >}}


--------

## 配置解读

`fork/agens` 模板在 `pg-meta` 集群中启用 `pg_mode: agens`，并使用 `agensgraph` 内核包替换标准 PostgreSQL 内核。

**关键特性**：
- 属性图模型能力（Vertex / Edge）
- 支持 Cypher 查询语法，可与 SQL 混合使用
- 兼容 PostgreSQL 生态与常规运维方式
- 默认基于 PostgreSQL 18 兼容内核

**适用场景**：
- 图关系分析与路径查询
- 社交关系、风控关联、知识图谱等图数据场景
- 需要在 PostgreSQL 体系中引入图查询能力

**注意事项**：
- 模板默认使用 `pg_version: 18`，`agensgraph` 包别名解析为 `agensgraph-18`。
- 该默认值调整仅针对新部署；现有 PG17 集群需要执行主版本升级，不能直接复用数据目录。
- 默认模板为单节点快速启用，生产场景建议按需扩展高可用拓扑
- 图模型与 Cypher 语义请结合 AgensGraph 官方文档进行设计
