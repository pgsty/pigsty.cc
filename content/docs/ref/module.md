---
title: 模块列表
weight: 460
description: 本文列出了 Pigsty 中可用的功能模块，以及后续的功能模块规划。
icon: fa-solid fa-boxes-stacked
module: [PIGSTY]
categories: [参考]
---



----------------

## 核心模块

Pigsty 提供了四个 <span class="text-primary"><b>基础</b></span> 功能模块，对于提供完整高可用的 PostgreSQL 服务必不可少：

- [**`PGSQL`**](/docs/pgsql)：带有高可用，时间点恢复，IaC，SOP，监控系统，以及 [**444**](https://pgext.cloud/zh/list) 个扩展插件的自治的 PostgreSQL 集群。
- [**`INFRA`**](/docs/infra)：本地软件仓库、Prometheus、Grafana、Loki、AlertManager、PushGateway、Blackbox Exporter...
- [**`NODE`**](/docs/node)：调整节点到所需状态、名称、时区、NTP、ssh、sudo、haproxy、docker、vector、keepalived
- [**`ETCD`**](/docs/etcd)：分布式键值存储，用作高可用 Postgres 集群的 DCS：共识选主/配置管理/服务发现。

----------------

## 内核模块

Pigsty 提供了四个 <span class="text-danger"><b>内核</b></span> 功能模块 ，它们是 PostgreSQL 内核的可选原位替代，提供不同风味的数据库能力。

- [**`MSSQL`**](/docs/pgsql/kernel/babelfish)：微软 SQL Server 线缆协议兼容的 PG 内核，由 AWS, WiltonDB & Babelfish 出品！
- [**`IVORY`**](/docs/pgsql/kernel/ivorysql)：Oracle 兼容的 PostgreSQL 16 内核，由瀚高开源的 IvorySQL 项目提供。
- [**`POLAR`**](/docs/pgsql/kernel/polardb): 由阿里云开源的“云原生” PostgreSQL 内核，Aurora 风味的 RAC PostgreSQL Fork。
- [**`CITUS`**](/docs/pgsql/kernel/citus)：使用扩展实现分布式PostgreSQL集群（Azure Hyperscale），带有原生的 Patroni 高可用支持！

{{% alert title="国产化内核支持！" color="success" %}}

Pigsty [**专业版**](/docs/about/service) 提供国产化数据库内核支持：[**PolarDB-O v2**](/docs/pgsql/kernel/polardb-o) —— 基于 PolarPG 的 Oracle 兼容的国产化数据库内核

{{% /alert %}}


----------------

## 扩展模块

Pigsty 提供了四个 <span class="text-secondary"><b>扩展</b></span> 功能模块，它对于核心功能来说并非必须，但可以用于增强 PostgreSQL 的能力：

- [**`MINIO`**](/docs/minio)：S3 兼容的简单对象存储服务器，可作为可选的 PostgreSQL 数据库备份仓库，带有生产部署支持与监控。
- [**`REDIS`**](/docs/redis)：Redis 服务器，高性能数据结构服务器，支持独立主从、哨兵、集群模式生产部署，并带有完善的监控支持。
- [**`MONGO`**](/docs/ferret)：FerretDB 原生部署支持 —— 它为 PostgreSQL 添加了 MongoDB 线缆协议级别的 API 兼容支持！
- [**`DOCKER`**](/docs/docker)：Docker Daemon 服务，允许用户一键拉起容器化的无状态软件工具模板，为 Pigsty 加装各种功能！


----------------

## 外围模块

Pigsty 同时支持那些与 PostgreSQL 内核带有紧密联系的 <span class="text-success"><b>外围</b></span> 模块（扩展，分支，衍生，包装）：

- [**`DUCKDB`**](/docs/pilot/duckdb)：强大的嵌入式OLAP数据库，Pigsty提供二进制/动态库及相关PG扩展：`pg_duckdb`，`pg_lakehouse`与`duckdb_fdw`
- [**`SUPABASE`**](/docs/pgsql/kernel/supabase): Pigsty 允许用户在现有高可用 PostgreSQL 集群基础上，运行火爆的 Firebase 开源替代 —— Supabase ！
- [**`GREENPLUM`**](/docs/pgsql/kernel/greenplum)：基于 PostgreSQL 12 内核的 MPP 数据仓库，目前仅提供监控支持与 RPM 安装支持。(**Beta**)
- [**`CLOUDBERRY`**](/docs/pgsql/kernel/cloudberry)：Greenplum 闭源后原班开发者打造的开源分支，基于 PG 14 内核，目前仅提供RPM安装支持。(**Beta**)
- [**`NEON`**](/docs/pgsql/kernel/neon)：带有数据库分支功能特性的无服务器 PostgreSQL 内核 (**WIP**)


----------------

## 试点模块

Pigsty 正在支持一些与 PostgreSQL 生态相关的 <span class="text-info"><b>试点</b></span> 模块，它们可能会在未来成为 Pigsty 的正式模块：

- [**`KAFKA`**](/docs/pilot/kafka)：使用 Pigsty 部署由 KRaft 驱动的 Kafka 消息队列，并提供开箱即用的监控支持 (**Beta**)
- [**`MYSQL`**](/docs/pilot/mysql)：使用 Pigsty 部署高可用的 MySQL 8.0 集群，并提供开箱即用的监控支持（供批判/迁移评估之用） (**Beta**)
- [**`KUBE`**](/docs/pilot/kube/)：使用 SealOS 搭建开箱即用的生产级 Kubernetes 部署与监控支持 (**Alpha**).
- [**`VICTORIA`**](/docs/pilot/victoria)：基于 VictoriaMetrics 与 VictoriaLogs 的 Infra 替代选项，提供更好的性能与资源利用率（**Alpha**）
- [**`JUPYTER`**](/docs/pilot/jupyter)：开箱即用的 Jupyter Notebook 环境，用于数据分析与机器学习等场景（**Alpha**）


----------------

## 监控其他数据库

Pigsty 的 [**`INFRA`**](/docs/infra/) 模块可以独立使用，作为开箱即用的监控基础设施，监控其他节点或现有 PostgreSQL 数据库

- 现有 PostgreSQL 服务：Pigsty 可以监控外部的、非 Pigsty 托管的 PostgreSQL 服务，并仍可提供相对完整的监控支持。
- **`RDS PG`**：是云厂商提供的 PostgreSQL RDS 服务，将其视作标准的外部 Postgres 实例即可纳入监控
- **`PolarDB`**：是阿里云的云原生数据库，将其视作外部 PostgreSQL 11 / 14 实例即可纳入监控。
- **`KingBase`**： 是人大金仓提供的信创国产数据库，视作外部 PostgreSQL 12 实例即可纳入监控。
- **`Greenplum`** / **`YMatrixDB`** 监控，目前将其视作水平分片的 PostgreSQL 集群即可纳入监控。

