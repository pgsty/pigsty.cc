---
title: pgedge
weight: 814
description: pgEdge 内核模板，提供面向边缘场景的多主分布式 PostgreSQL 能力
icon: fa-solid fa-network-wired
categories: [参考]
---

`pgedge` 配置模板使用 pgEdge 数据库内核替代原生 PostgreSQL，提供面向边缘场景的分布式与多主复制能力。

完整教程请参考：**[pgEdge 内核使用说明](/docs/pgsql/kernel/pgedge/)**


--------

## 配置概览

- 配置名称： `pgedge`
- 节点数量： 单节点
- 配置说明：pgEdge（PG17）分布式内核配置模板
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)、[`pgsql`](/docs/conf/pgsql/)

启用方式：

```bash
./configure -c pgedge [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/pgedge.yml`](https://github.com/pgsty/pigsty/blob/main/conf/pgedge.yml)

{{< readfile file="yaml/pgedge.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`pgedge` 模板在 `pg-meta` 集群中启用 `pg_mode: pgedge`，并预装 pgEdge 核心扩展用于逻辑复制与边缘分布式场景。

**关键特性**：
- 使用 `pgedge` 内核包替代标准 PostgreSQL（兼容 PG17）
- 默认安装 `spock`、`snowflake`、`lolor` 扩展
- 默认预加载 `spock` 与 `lolor`，便于后续多主复制配置
- 保留 Pigsty 的标准备份、监控与运维能力

**适用场景**：
- 多地域边缘部署与就近写入
- 需要多主逻辑复制与冲突处理能力
- 从单节点验证逐步扩展到分布式拓扑

**注意事项**：
- 当前模板用于单节点内核验证，生产多主需额外规划节点拓扑与复制策略
- 默认 `pg_version: 17`，建议与目标集群版本保持一致
- 进行跨地域复制前，请先评估网络时延与冲突处理策略
