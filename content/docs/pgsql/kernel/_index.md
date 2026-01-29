---
title: 内核分支
weight: 2200
description: 如何在 Pigsty 中使用其他 PostgreSQL 内核分支？例如 Citus，Babelfish，IvorySQL，PolarDB 等
icon: fas fa-heart
module: [PGSQL]
categories: [参考, 概念]
---

在 Pigsty 中，您可以使用不同 "**风味**" 的 PostgreSQL 分支替换 "原生PG内核"，实现特殊的功能与效果。

Pigsty 支持各种 PostgreSQL 内核和兼容分支，使您能够模拟不同的数据库系统，同时利用 PostgreSQL 的生态系统。每个内核都能提供独特的功能和兼容性层。

| 内核                                              | 关键特性              | 描述                                 |
|:------------------------------------------------|:------------------|:-----------------------------------|
| [**PostgreSQL**](/docs/pgsql)                   | **444扩展**        | 原版 PostgreSQL，配备 444 扩展            |
| [**Citus**](/docs/pgsql/kernel/citus)           | **水平扩展**          | 通过原生扩展实现分布式 PostgreSQL             |
| [**WiltonDB**](/docs/pgsql/kernel/babelfish)    | **SQL Server 兼容** | SQL Server 线协议兼容                   |
| [**IvorySQL**](/docs/pgsql/kernel/ivorysql)     | **Oracle 兼容**     | Oracle 语法和 PL/SQL 兼容               |
| [**OpenHalo**](/docs/pgsql/kernel/openhalo)     | **MySQL 兼容**      | MySQL 线协议兼容                        |
| [**Percona**](/docs/pgsql/kernel/percona)       | **透明数据加密**        | 带有 pg_tde 的 Percona 发行版            |
| [**FerretDB**](/docs/ferret)                    | **MongoDB 迁移**    | MongoDB 线协议兼容                      |
| [**OrioleDB**](/docs/pgsql/kernel/orioledb)     | **OLTP 优化**       | Zheap，无膨胀，S3 存储                    |
| [**PolarDB**](/docs/pgsql/kernel/polardb)       | **Aurora 风格 RAC** | RAC，中国国产合规                         |
| [**Supabase**](/docs/pgsql/kernel/supabase)     | **后端即服务**         | 基于 PostgreSQL 的 BaaS，Firebase 替代方案 |
| [**Cloudberry**](/docs/pgsql/kernel/cloudberry) | **MPP数仓与数据分析**    | 大规模并行处理数据仓库                        |
{.full-width}
