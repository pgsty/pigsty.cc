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

|                       内核                        |       关键特性        | 描述                                 |
|:-----------------------------------------------:|:-----------------:|:-----------------------------------|
|  [**PostgreSQL**](/docs/pgsql/kernel/postgres)  |   **原生内核，扩展齐备**   | 原版 PostgreSQL，配备 464 扩展            |
|   [**Supabase**](/docs/pgsql/kernel/supabase)   |     **后端即服务**     | 基于 PostgreSQL 的 BaaS，Firebase 替代方案 |
|      [**Citus**](/docs/pgsql/kernel/citus)      |  **水平分布式扩展，多租户**  | 通过原生扩展实现分布式 PostgreSQL             |
|  [**Babelfish**](/docs/pgsql/kernel/babelfish)  | **SQL Server 兼容** | SQL Server 线协议兼容（PG17）             |
|   [**IvorySQL**](/docs/pgsql/kernel/ivorysql)   |   **Oracle 兼容**   | Oracle 语法和 PL/SQL 兼容               |
|   [**OpenHalo**](/docs/pgsql/kernel/openhalo)   |   **MySQL 兼容**    | MySQL 线协议兼容                        |
|    [**Percona**](/docs/pgsql/kernel/percona)    |    **透明数据加密**     | 带有 pg_tde 的 Percona 发行版            |
|          [**FerretDB**](/docs/ferret)           |  **MongoDB 迁移**   | MongoDB 线协议兼容                      |
|   [**OrioleDB**](/docs/pgsql/kernel/orioledb)   |    **OLTP 优化**    | Zheap，无膨胀，S3 存储                    |
|    [**PolarDB**](/docs/pgsql/kernel/polardb)    | **Aurora 风格 RAC** | RAC，中国国产合规                         |
| [**Cloudberry**](/docs/pgsql/kernel/cloudberry) |  **MPP数仓与数据分析**   | 大规模并行处理数据仓库                        |
| [**AgensGraph**](/docs/pgsql/kernel/agensgraph) |    **图数据库内核**     | 基于 PostgreSQL 的图数据库分支              |
|     [**pgEdge**](/docs/pgsql/kernel/pgedge)     |   **多主复制，地理分布**   | 面向边缘场景的分布式 PostgreSQL 发行版          |
{.full-width}

![](/img/pigsty/pg-forks.webp)

## 版本

各个 PG 分支内核的版本号字符串（以 el9 为例），其中 citus, ferret, supabase 与原生 PostgreSQL 一致。

| 内核                                              | 描述                                                                                                                                                             |
|:------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**PostgreSQL**](/docs/pgsql)                   | `PostgreSQL 18.2 on x86_64-pc-linux-gnu, compiled by gcc (GCC) 11.5.0 20240719 (Red Hat 11.5.0-5), 64-bit`                                                     |
| [**Babelfish**](/docs/pgsql/kernel/babelfish)   | `Babelfish 17.7 on x86_64-pc-linux-gnu, compiled by gcc (GCC) 11.5.0 20240719 (Red Hat 11.5.0-11), 64-bit`                                                     |
| [**IvorySQL**](/docs/pgsql/kernel/ivorysql)     | `PostgreSQL 18.1 (IvorySQL 5.1) on x86_64-pc-linux-gnu, compiled by gcc (GCC) 9.5.0, 64-bit`                                                                   |
| [**OpenHalo**](/docs/pgsql/kernel/openhalo)     | `openHalo 1.0.14.18 (260226) on x86_64-pc-linux-gnu, compiled by gcc (GCC) 11.5.0 20240719 (Red Hat 11.5.0-11), 64-bit`                                        |
| [**Percona**](/docs/pgsql/kernel/percona)       | `PostgreSQL 18.1 - Percona Server for PostgreSQL 18.1.1 on x86_64-pc-linux-gnu, compiled by gcc (GCC) 11.5.0 20240719 (Red Hat 11.5.0-11.0.1), 64-bit`         |
| [**OrioleDB**](/docs/pgsql/kernel/orioledb)     | `PostgreSQL 17.6 (OrioleDB 1.6-beta14) on aarch64-unknown-linux-gnu, compiled by gcc (GCC) 11.5.0 20240719 (Red Hat 11.5.0-11), 64-bit`                        |
| [**PolarDB**](/docs/pgsql/kernel/polardb)       | `PostgreSQL 15.16 (PolarDB 15.16.5.0 build 710ce891) on x86_64-linux-gnu`                                                                                      |
| [**AgensGraph**](/docs/pgsql/kernel/agensgraph) | `PostgreSQL 16.9 (AgensGraph 2.16) on x86_64-pc-linux-gnu, compiled by gcc (GCC) 11.5.0 20240719 (Red Hat 11.5.0-11), 64-bit`                                  |
| [**pgEdge**](/docs/pgsql/kernel/pgedge)         | `PostgreSQL 17.7 (pgEdge 5.0.5) on x86_64-pc-linux-gnu, compiled by gcc (GCC) 11.5.0 20240719 (Red Hat 11.5.0-11), 64-bit`                                     |
| [**Cloudberry**](/docs/pgsql/kernel/cloudberry) | `PostgreSQL 14.4 (Apache Cloudberry 2.0.0-incubating build 1) on aarch64-unknown-linux-gnu, compiled by gcc (GCC) 11.5.0 20240719 (Red Hat 11.5.0-11), 64-bit` |

