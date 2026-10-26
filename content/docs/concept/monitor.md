---
title: 监控系统
weight: 220
description: Pigsty 的监控系统是如何架构与实现的，被监控的目标对象又是如何被自动纳入管理的。
icon: fa-solid fa-binoculars
module: [INFRA]
categories: [概念]
toc_hide: True
hide_summary: True
---

Pigsty 监控系统由指标、日志与告警三部分组成，默认随部署开箱可用；其中日志与告警也是 [**审计与追溯**](/docs/concept/sec/data#审计与追溯) 的重要输入。
它既可以监控由 Pigsty 托管的数据库集群，也可以监控已有 PostgreSQL 集群与外部 RDS 服务。


--------

## 监控目标

Pigsty 监控覆盖的核心对象包括：

- PostgreSQL 集群与实例（SQL 性能、连接、复制、事务、检查点、WAL）
- 基础设施组件（Grafana、VictoriaMetrics、Alertmanager、Nginx 等）
- 宿主机节点（CPU、内存、磁盘、网络、内核）
- 其他服务模块（ETCD、MINIO/Silo、REDIS/Valkey、KAFKA、MYSQL、JUICE、VIBE 等）


--------

## 监控规模与统计口径

Pigsty v4.5.0 的 [**仪表盘目录**](https://github.com/pgsty/pigsty/tree/v4.5.0/files/grafana) 与 [**Victoria 规则目录**](https://github.com/pgsty/pigsty/tree/v4.5.0/files/victoria/rules) 包含以下配置：

| 源码分组 | 仪表盘 | 预计算规则 | 告警规则 |
|:-----|-------:|-----------:|---------:|
| PGSQL | 29 | 402 | 16 |
| NODE | 10 | 163 | 16 |
| INFRA | 11 | 2 | 2 |
| ETCD | 0 | 9 | 5 |
| REDIS | 3 | 96 | 6 |
| MINIO / Silo | 2 | 0 | 5 |
| KAFKA | 4 | 19 | 15 |
| MYSQL | 5 | 68 | 27 |
| APP | 2 | 0 | 0 |
| Pigsty 总览 | 1 | 0 | 0 |
| Agent 存活检测 | 0 | 14 | 0 |
| **合计** | **67** | **773** | **92** |

仪表盘按 `files/grafana/**/*.json` 文件计数；ETCD 仪表盘归入 INFRA 目录。预计算规则与告警规则分别统计 `files/victoria/rules/*.yml` 中的 `record` 与 `alert` 条目，并加上 [**`agent.yml`**](https://github.com/pgsty/pigsty/blob/v4.5.0/roles/infra/templates/victoria/agent.yml) 模板生成的 14 条存活记录规则，即 759 + 14 = 773。它们是随源码交付的配置数量，实际加载范围取决于部署模块与配置。

Exporter 的原始指标与时间序列数量随组件版本、采集器和监控对象变化，以运行环境的采集端点为准。


--------

## 技术栈

| 组件                                                 | 作用                |
|:---------------------------------------------------|:------------------|
| [**Grafana**](/docs/infra/admin/grafana/)          | 可视化监控面板、统一入口、告警视图 |
| [**VictoriaMetrics**](/docs/infra/)                | 时序指标采集、存储与查询      |
| [**VictoriaLogs**](/docs/infra/)                   | 结构化日志采集、索引与检索     |
| [**VMAlert + Alertmanager**](/docs/infra/monitor/) | 告警规则执行与消息通知       |
| [**Exporter / Agent**](/docs/pgsql/monitor/)       | 业务与系统指标暴露、日志转发    |
{.full-width}


--------

## 纳管方式

Pigsty 支持三种监控纳管方式：

| 模式        | 适用场景                        | 入口                                    |
|:----------|:----------------------------|:--------------------------------------|
| `FULL`    | 数据库由 Pigsty 直接部署与托管         | [PGSQL 监控系统](/docs/pgsql/monitor/)    |
| `MANAGED` | 现有 PostgreSQL 集群，节点可 SSH 管理 | [监控现有集群](/docs/pgsql/monitor/#监控现有集群) |
| `RDS`     | 仅能通过连接串访问的云数据库              | [监控 RDS](/docs/pgsql/monitor/#监控rds)  |
{.full-width}


--------

## 继续阅读

- [**PGSQL 监控系统**](/docs/pgsql/monitor/)：数据库指标、日志、告警与面板
- [**INFRA 监控告警**](/docs/infra/monitor/)：监控系统自身可用性
- [**NODE 监控告警**](/docs/node/monitor/)：主机资源与系统健康状态
- [**ETCD 监控告警**](/docs/etcd/monitor/)：一致性与可用性监控
- [**MINIO 监控告警**](/docs/minio/monitor/)：对象存储集群监控
- [**REDIS 监控告警**](/docs/redis/monitor/)：缓存集群运行状态监控
- [**KAFKA 监控告警**](/docs/kafka/monitor/)：Broker、Topic、Consumer 与可选 JMX 指标
- [**MYSQL 监控告警**](/docs/mysql/monitor/)：实例、集群与复制状态
