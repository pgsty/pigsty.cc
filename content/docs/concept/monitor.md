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

Pigsty 监控系统由指标、日志与告警三部分组成，默认随部署开箱可用。
它既可以监控由 Pigsty 托管的数据库集群，也可以监控已有 PostgreSQL 集群与外部 RDS 服务。


--------

## 监控目标

Pigsty 监控覆盖的核心对象包括：

- PostgreSQL 集群与实例（SQL 性能、连接、复制、事务、检查点、WAL）
- 基础设施组件（Grafana、VictoriaMetrics、Alertmanager、Nginx 等）
- 宿主机节点（CPU、内存、磁盘、网络、内核）
- 关键中间件（ETCD、MINIO、REDIS、FERRET、JUICE、VIBE 等）


--------

## 技术栈

| 组件 | 作用 |
|:-----|:-----|
| [**Grafana**](/docs/infra/admin/grafana/) | 可视化监控面板、统一入口、告警视图 |
| [**VictoriaMetrics**](/docs/infra/) | 时序指标采集、存储与查询 |
| [**VictoriaLogs**](/docs/infra/) | 结构化日志采集、索引与检索 |
| [**VMAlert + Alertmanager**](/docs/infra/monitor/) | 告警规则执行与消息通知 |
| [**Exporter / Agent**](/docs/pgsql/monitor/) | 业务与系统指标暴露、日志转发 |
{.full-width}


--------

## 纳管方式

Pigsty 支持三种监控纳管方式：

| 模式 | 适用场景 | 入口 |
|:-----|:---------|:-----|
| `FULL` | 数据库由 Pigsty 直接部署与托管 | [PGSQL 监控系统](/docs/pgsql/monitor/) |
| `MANAGED` | 现有 PostgreSQL 集群，节点可 SSH 管理 | [监控现有集群](/docs/pgsql/monitor/#监控现有集群) |
| `RDS` | 仅能通过连接串访问的云数据库 | [监控 RDS](/docs/pgsql/monitor/#监控rds) |
{.full-width}


--------

## 继续阅读

- [**PGSQL 监控系统**](/docs/pgsql/monitor/)：数据库指标、日志、告警与面板
- [**INFRA 监控告警**](/docs/infra/monitor/)：监控系统自身可用性
- [**NODE 监控告警**](/docs/node/monitor/)：主机资源与系统健康状态
- [**ETCD 监控告警**](/docs/etcd/monitor/)：一致性与可用性监控
- [**MINIO 监控告警**](/docs/minio/monitor/)：对象存储集群监控
- [**REDIS 监控告警**](/docs/redis/monitor/)：缓存集群运行状态监控
