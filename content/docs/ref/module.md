---
title: 模块列表
weight: 460
description: 本文列出了 Pigsty 中可用的功能模块，以及后续的功能模块规划。
icon: fa-solid fa-boxes-stacked
module: [PIGSTY]
categories: [参考]
---


----------------

## 正式模块

|              模块               |   类别   |  状态   |      文档入口       | 简介                                                        |
|:-----------------------------:|:------:|:-----:|:---------------:|:----------------------------------------------------------|
|  [**`PGSQL`**](/docs/pgsql)   | **核心** |  GA   |  `/docs/pgsql`  | 高可用 PostgreSQL 集群，内置备份、监控、SOP 与扩展生态。                      |
|  [**`INFRA`**](/docs/infra)   | **核心** |  GA   |  `/docs/infra`  | 本地软件仓库 + VictoriaMetrics/Logs/Traces + Grafana 等基础设施。     |
|   [**`NODE`**](/docs/node)    | **核心** |  GA   |  `/docs/node`   | 节点初始化与收敛：系统调优、管理员、HAProxy、Vector、Docker 等。                |
|   [**`ETCD`**](/docs/etcd)    | **核心** |  GA   |  `/docs/etcd`   | PostgreSQL 高可用 DCS（服务发现、配置、选主元数据）。                        |
|  [**`MINIO`**](/docs/minio)   |   扩展   |  GA   |  `/docs/minio`  | S3 兼容对象存储，可作为 PostgreSQL 备份仓库。                            |
|  [**`REDIS`**](/docs/redis)   |   扩展   |  GA   |  `/docs/redis`  | Redis 独立/哨兵/集群模式部署与监控。                                    |
| [**`FERRET`**](/docs/ferret)  |   扩展   |  GA   | `/docs/ferret`  | FerretDB 模块（`MONGO` API 兼容），为 PG 提供 MongoDB 协议访问。         |
| [**`DOCKER`**](/docs/docker)  |   扩展   |  GA   | `/docs/docker`  | Docker Daemon 及容器化应用运行基础能力。                               |
|  [**`JUICE`**](/docs/juice)   |   扩展   | BETA  |  `/docs/juice`  | JuiceFS 分布式文件系统，使用 PostgreSQL 作为元数据引擎。                    |
|   [**`VIBE`**](/docs/vibe)    |   扩展   | BETA  |  `/docs/vibe`   | 浏览器化开发环境，集成 Code-Server、JupyterLab、Node.js 与 Claude Code。 |
{.stretch-last}


----------------

## 核心模块

Pigsty 提供了四个 <span class="text-primary"><b>基础</b></span> 功能模块，对于提供完整高可用的 PostgreSQL 服务非常重要：

- [**`PGSQL`**](/docs/pgsql)：带有高可用，时间点恢复，IaC，SOP，监控系统，以及 [**444**](https://pgext.cloud/zh/list) 个扩展插件的自治的 PostgreSQL 集群。
- [**`INFRA`**](/docs/infra)：本地软件仓库、Prometheus、Grafana、Loki、AlertManager、PushGateway、Blackbox Exporter...
- [**`NODE`**](/docs/node)：调整节点到所需状态、名称、时区、NTP、ssh、sudo、haproxy、docker、vector、keepalived
- [**`ETCD`**](/docs/etcd)：分布式键值存储，用作高可用 Postgres 集群的 DCS：共识选主/配置管理/服务发现。

尽管这四个模块通常会同时安装，但单独使用也是可行的 —— 只有 NODE 模块通常是必选的。


----------------

## 扩展模块

Pigsty 提供了六个 <span class="text-secondary"><b>扩展</b></span> 功能模块，它们对于核心功能来说并非必须，但可以用于增强 PostgreSQL 的能力：

- [**`MINIO`**](/docs/minio)：S3 兼容的简单对象存储服务器，可作为可选的 PostgreSQL 数据库备份仓库，带有生产部署支持与监控。
- [**`REDIS`**](/docs/redis)：Redis 服务器，高性能数据结构服务器，支持独立主从、哨兵、集群模式生产部署，并带有完善的监控支持。
- [**`MONGO`**](/docs/ferret)：FerretDB 原生部署支持 —— 它为 PostgreSQL 添加了 MongoDB 线缆协议级别的 API 兼容支持！
- [**`DOCKER`**](/docs/docker)：Docker Daemon 服务，允许用户一键拉起容器化的无状态软件工具模板，为 Pigsty 加装各种功能！
- [**`JUICE`**](/docs/juice)：JuiceFS 分布式文件系统模块，以 PostgreSQL 作为元数据引擎，提供可共享的 POSIX 存储能力。
- [**`VIBE`**](/docs/vibe)：浏览器化开发环境模块，集成 Code-Server、JupyterLab、Node.js 与 Claude Code，开箱即用。


----------------

## 生态模块

以下模块与 PostgreSQL 生态紧密相关，属于可选生态能力，不计入上述 10 个正式模块：

- [**`SUPABASE`**](/docs/pgsql/kernel/supabase)、[**`DUCKDB`**](/docs/pilot/duckdb)：外围生态整合能力。
- [**`MSSQL`**](/docs/pgsql/kernel/babelfish)、[**`IVORY`**](/docs/pgsql/kernel/ivorysql)、[**`POLAR`**](/docs/pgsql/kernel/polardb)、[**`CITUS`**](/docs/pgsql/kernel/citus)：内核替代/分布式形态。
- [**`GREENPLUM`**](/docs/pgsql/kernel/greenplum)、[**`CLOUDBERRY`**](/docs/pgsql/kernel/cloudberry)、[**`NEON`**](/docs/pgsql/kernel/neon)：保留历史文档，不再作为默认开放能力。
- [**`KAFKA`**](/docs/pilot/kafka)、[**`MYSQL`**](/docs/pilot/mysql)、[**`KUBE`**](/docs/pilot/kube/)、[**`VICTORIA`**](/docs/pilot/victoria)、[**`JUPYTER`**](/docs/pilot/jupyter)：试点模块，当前不对外开放使用。

