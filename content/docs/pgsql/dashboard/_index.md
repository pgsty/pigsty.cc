---
title: 监控面板
weight: 1901
description: Pigsty 为 PostgreSQL 提供了诸多开箱即用的 Grafana 监控仪表盘
icon: fa-solid fa-gauge-simple-high
module: [PGSQL]
categories: [参考]
---

> Pigsty 为 PostgreSQL 提供了诸多开箱即用的 Grafana 监控仪表盘： [Demo](https://demo.pigsty.cc/ui/d/pgsql-overview) & [Gallery](https://github.com/pgsty/pigsty/wiki/Gallery)。

当前源码共提供 31 个 PostgreSQL 相关面板：`files/grafana/pgsql` 中有 29 个 PostgreSQL / PGCAT 面板，`files/grafana/app` 中另有 2 个 PGLOG 面板。它们按层次分为总览、集群、实例、数据库四大类，按数据来源分为 [PGSQL](#总览)、[PGCAT](#pgcat)、[PGLOG](#pglog) 三类。

![pigsty-dashboard.jpg](/img/pigsty/dashboard.jpg)

----------------

## 总览

|                              总览                              |                                 集群                                 |                               实例                               |                             数据库                              |
|:------------------------------------------------------------:|:------------------------------------------------------------------:|:--------------------------------------------------------------:|:------------------------------------------------------------:|
| [PGSQL Overview](https://demo.pigsty.cc/ui/d/pgsql-overview) |     [PGSQL Cluster](https://demo.pigsty.cc/ui/d/pgsql-cluster)     |  [PGSQL Instance](https://demo.pigsty.cc/ui/d/pgsql-instance)  | [PGSQL Database](https://demo.pigsty.cc/ui/d/pgsql-database) |
|    [PGSQL Alert](https://demo.pigsty.cc/ui/d/pgsql-alert)    |     [PGRDS Cluster](https://demo.pigsty.cc/ui/d/pgrds-cluster)     |  [PGRDS Instance](https://demo.pigsty.cc/ui/d/pgrds-instance)  | [PGCAT Database](https://demo.pigsty.cc/ui/d/pgcat-database) |
|    [PGSQL Shard](https://demo.pigsty.cc/ui/d/pgsql-shard)    |    [PGSQL Activity](https://demo.pigsty.cc/ui/d/pgsql-activity)    |  [PGCAT Instance](https://demo.pigsty.cc/ui/d/pgcat-instance)  |   [PGSQL Tables](https://demo.pigsty.cc/ui/d/pgsql-tables)   |
|                                                              | [PGSQL Replication](https://demo.pigsty.cc/ui/d/pgsql-replication) |   [PGSQL Persist](https://demo.pigsty.cc/ui/d/pgsql-persist)   |    [PGSQL Table](https://demo.pigsty.cc/ui/d/pgsql-table)    |
|                                                              |     [PGSQL Service](https://demo.pigsty.cc/ui/d/pgsql-service)     |     [PGSQL Proxy](https://demo.pigsty.cc/ui/d/pgsql-proxy)     |    [PGCAT Table](https://demo.pigsty.cc/ui/d/pgcat-table)    |
|                                                              |   [PGSQL Databases](https://demo.pigsty.cc/ui/d/pgsql-databases)   | [PGSQL Pgbouncer](https://demo.pigsty.cc/ui/d/pgsql-pgbouncer) |    [PGSQL Query](https://demo.pigsty.cc/ui/d/pgsql-query)    |
|                                                              |     [PGSQL Patroni](https://demo.pigsty.cc/ui/d/pgsql-patroni)     |   [PGSQL Session](https://demo.pigsty.cc/ui/d/pgsql-session)   |    [PGCAT Query](https://demo.pigsty.cc/ui/d/pgcat-query)    |
|                                                              |        [PGSQL PITR](https://demo.pigsty.cc/ui/d/pgsql-pitr)        |     [PGSQL Xacts](https://demo.pigsty.cc/ui/d/pgsql-xacts)     |    [PGCAT Locks](https://demo.pigsty.cc/ui/d/pgcat-locks)    |
|                                                              |                                                                    |  [PGSQL Exporter](https://demo.pigsty.cc/ui/d/pgsql-exporter)  |   [PGCAT Schema](https://demo.pigsty.cc/ui/d/pgcat-schema)   |
{.full-width}


**概览**

- [pgsql-overview](https://demo.pigsty.cc/ui/d/pgsql-overview)：PGSQL 模块的主仪表板
- [pgsql-alert](https://demo.pigsty.cc/ui/d/pgsql-alert)：PGSQL 的全局关键指标和警报事件
- [pgsql-shard](https://demo.pigsty.cc/ui/d/pgsql-shard)：关于水平分片的 PGSQL 集群的概览，例如 citus / gpsql 集群

**集群**

- [pgsql-cluster](https://demo.pigsty.cc/ui/d/pgsql-cluster)：一个 PGSQL 集群的主仪表板
- [pgrds-cluster](https://demo.pigsty.cc/ui/d/pgrds-cluster)：PGSQL Cluster 的 RDS 版本，专注于所有 PostgreSQL 本身的指标
- [pgsql-activity](https://demo.pigsty.cc/ui/d/pgsql-activity)：关注 PGSQL 集群的会话/负载/QPS/TPS/锁定情况
- [pgsql-replication](https://demo.pigsty.cc/ui/d/pgsql-replication)：关注 PGSQL 集群复制、插槽和发布/订阅
- [pgsql-service](https://demo.pigsty.cc/ui/d/pgsql-service)：关注 PGSQL 集群服务、代理、路由和负载均衡
- [pgsql-databases](https://demo.pigsty.cc/ui/d/pgsql-databases)：关注所有实例的数据库 CRUD、慢查询和表统计信息
- [pgsql-patroni](https://demo.pigsty.cc/ui/d/pgsql-patroni)：关注集群高可用状态，Patroni 组件状态
- [pgsql-pitr](https://demo.pigsty.cc/ui/d/pgsql-pitr)：关注集群 PITR 过程的上下文，用于辅助时间点恢复

**实例**

- [pgsql-instance](https://demo.pigsty.cc/ui/d/pgsql-instance)：单个 PGSQL 实例的主仪表板
- [pgrds-instance](https://demo.pigsty.cc/ui/d/pgrds-instance)：PGSQL Instance 的 RDS 版本，专注于所有 PostgreSQL 本身的指标
- [pgcat-instance](https://demo.pigsty.cc/ui/d/pgcat-instance)：直接从数据库目录获取的实例信息
- [pgsql-proxy](https://demo.pigsty.cc/ui/d/pgsql-proxy)：单个 haproxy 负载均衡器的详细指标
- [pgsql-pgbouncer](https://demo.pigsty.cc/ui/d/pgsql-pgbouncer)：单个 Pgbouncer 连接池实例中的指标总览
- [pgsql-persist](https://demo.pigsty.cc/ui/d/pgsql-persist)：持久性指标：WAL、XID、检查点、存档、IO
- [pgsql-session](https://demo.pigsty.cc/ui/d/pgsql-session)：单个实例中的会话和活动/空闲时间的指标
- [pgsql-xacts](https://demo.pigsty.cc/ui/d/pgsql-xacts)：关于事务、锁、TPS/QPS 相关的指标
- [pgsql-exporter](https://demo.pigsty.cc/ui/d/pgsql-exporter)：Postgres 与 Pgbouncer 监控组件自我监控指标



**数据库**

- [pgsql-database](https://demo.pigsty.cc/ui/d/pgsql-database)：单个 PGSQL 数据库的主仪表板
- [pgcat-database](https://demo.pigsty.cc/ui/d/pgcat-database)：直接从数据库目录获取的数据库信息
- [pgsql-tables](https://demo.pigsty.cc/ui/d/pgsql-tables)：单个数据库内的表/索引访问指标
- [pgsql-table](https://demo.pigsty.cc/ui/d/pgsql-table)：单个表的详细信息（QPS/RT/索引/序列...）
- [pgcat-table](https://demo.pigsty.cc/ui/d/pgcat-table)：直接从数据库目录获取的单个表的详细信息（统计/膨胀...）
- [pgsql-query](https://demo.pigsty.cc/ui/d/pgsql-query)：单个查询的详细信息（QPS/RT）
- [pgcat-query](https://demo.pigsty.cc/ui/d/pgcat-query)：直接从数据库目录获取的单个查询的详细信息（SQL/统计）
- [pgcat-schema](https://demo.pigsty.cc/ui/d/pgcat-schema)：直接从数据库目录获取关于模式的信息（表/索引/序列...）
- [pgcat-locks](https://demo.pigsty.cc/ui/d/pgcat-locks)：直接从数据库目录获取的关于活动与锁等待的信息


-------------------

## 总览

[PGSQL Overview](https://demo.pigsty.cc/ui/d/pgsql-overview)：PGSQL 模块的主仪表板

> [!DETAILS]- PGSQL Overview
> [![pgsql-overview.jpg](/img/dashboard/pgsql-overview.jpg)](https://demo.pigsty.cc/ui/d/pgsql-overview)


[PGSQL Alert](https://demo.pigsty.cc/ui/d/pgsql-alert)：PGSQL 全局核心指标总览与告警事件一览

> [!DETAILS]- PGSQL Alert
> [![pgsql-alert.jpg](/img/dashboard/pgsql-alert.jpg)](https://demo.pigsty.cc/ui/d/pgsql-alert)


[PGSQL Shard](https://demo.pigsty.cc/ui/d/pgsql-shard)：展示一个 PGSQL 水平分片集群内的横向指标对比：例如 CITUS / GPSQL 集群。

> [!DETAILS]- PGSQL Shard
> [![pgsql-shard.jpg](/img/dashboard/pgsql-shard.jpg)](https://demo.pigsty.cc/ui/d/pgsql-shard)



-------------------

## 集群

[PGSQL Cluster](https://demo.pigsty.cc/ui/d/pgsql-cluster)：一个 PGSQL 集群的主仪表板

> [!DETAILS]- PGSQL Cluster
> [![pgsql-cluster.jpg](/img/dashboard/pgsql-cluster.jpg)](https://demo.pigsty.cc/ui/d/pgsql-cluster)


[PGRDS Cluster](https://demo.pigsty.cc/ui/d/pgrds-cluster)：PGSQL Cluster 的 RDS 版本，专注于所有 PostgreSQL 本身的指标

> [!DETAILS]- PGRDS Cluster
> [![pgrds-cluster.jpg](/img/dashboard/pgrds-cluster.jpg)](https://demo.pigsty.cc/ui/d/pgrds-cluster)


[PGSQL Service](https://demo.pigsty.cc/ui/d/pgsql-service)：关注 PGSQL 集群服务、代理、路由和负载均衡。

> [!DETAILS]- PGSQL Service
> [![pgsql-service.jpg](/img/dashboard/pgsql-service.jpg)](https://demo.pigsty.cc/ui/d/pgsql-service)

[PGSQL Activity](https://demo.pigsty.cc/ui/d/pgsql-activity)：关注 PGSQL 集群的会话/负载/QPS/TPS/锁定情况

> [!DETAILS]- PGSQL Activity
> [![pgsql-activity.jpg](/img/dashboard/pgsql-activity.jpg)](https://demo.pigsty.cc/ui/d/pgsql-activity)

[PGSQL Replication](https://demo.pigsty.cc/ui/d/pgsql-replication)：关注 PGSQL 集群复制、插槽和发布/订阅。

> [!DETAILS]- PGSQL Replication
> [![pgsql-replication.jpg](/img/dashboard/pgsql-replication.jpg)](https://demo.pigsty.cc/ui/d/pgsql-replication)


[PGSQL Databases](https://demo.pigsty.cc/ui/d/pgsql-databases)：关注所有实例的数据库 CRUD、慢查询和表统计信息。

> [!DETAILS]- PGSQL Databases
> [![pgsql-databases.jpg](/img/dashboard/pgsql-databases.jpg)](https://demo.pigsty.cc/ui/d/pgsql-databases)


[PGSQL Patroni](https://demo.pigsty.cc/ui/d/pgsql-patroni)：关注集群高可用状态，Patroni 组件状态

> [!DETAILS]- PGSQL Patroni
> [![pgsql-patroni.jpg](/img/dashboard/pgsql-patroni.jpg)](https://demo.pigsty.cc/ui/d/pgsql-patroni)


[PGSQL PITR](https://demo.pigsty.cc/ui/d/pgsql-pitr)：关注集群 PITR 过程的上下文，用于辅助时间点恢复

> [!DETAILS]- PGSQL PITR
> [![pgsql-patroni.jpg](/img/dashboard/pgsql-pitr.jpg)](https://demo.pigsty.cc/ui/d/pgsql-pitr)



-------------------

## 实例

[PGSQL Instance](https://demo.pigsty.cc/ui/d/pgsql-instance)：单个 PGSQL 实例的主仪表板

> [!DETAILS]- PGSQL Instance
> [![pgsql-instance.jpg](/img/dashboard/pgsql-instance.jpg)](https://demo.pigsty.cc/ui/d/pgsql-instance)


[PGRDS Instance](https://demo.pigsty.cc/ui/d/pgrds-instance)：PGSQL Instance 的 RDS 版本，专注于所有 PostgreSQL 本身的指标

> [!DETAILS]- PGRDS Instance
> [![pgrds-instance.jpg](/img/dashboard/pgrds-instance.jpg)](https://demo.pigsty.cc/ui/d/pgrds-instance)


[PGSQL Proxy](https://demo.pigsty.cc/ui/d/pgsql-proxy)：单个 haproxy 负载均衡器的详细指标

> [!DETAILS]- PGSQL Proxy
> [![pgsql-proxy.jpg](/img/dashboard/pgsql-proxy.jpg)](https://demo.pigsty.cc/ui/d/pgsql-proxy)


[PGSQL Pgbouncer](https://demo.pigsty.cc/ui/d/pgsql-pgbouncer)：单个 Pgbouncer 连接池实例中的指标总览

> [!DETAILS]- PGSQL Pgbouncer
> [![pgsql-pgbouncer.jpg](/img/dashboard/pgsql-pgbouncer.jpg)](https://demo.pigsty.cc/ui/d/pgsql-pgbouncer)


[PGSQL Persist](https://demo.pigsty.cc/ui/d/pgsql-persist)：持久性指标：WAL、XID、检查点、存档、IO

> [!DETAILS]- PGSQL Persist
> [![pgsql-persist.jpg](/img/dashboard/pgsql-persist.jpg)](https://demo.pigsty.cc/ui/d/pgsql-persist)


[PGSQL Xacts](https://demo.pigsty.cc/ui/d/pgsql-xacts)：关于事务、锁、TPS/QPS 相关的指标

> [!DETAILS]- PGSQL Xacts
> [![pgsql-xacts.jpg](/img/dashboard/pgsql-xacts.jpg)](https://demo.pigsty.cc/ui/d/pgsql-xacts)


[PGSQL Session](https://demo.pigsty.cc/ui/d/pgsql-session)：单个实例中的会话和活动/空闲时间的指标

> [!DETAILS]- PGSQL Session
> [![pgsql-session.jpg](/img/dashboard/pgsql-session.jpg)](https://demo.pigsty.cc/ui/d/pgsql-session)


[PGSQL Exporter](https://demo.pigsty.cc/ui/d/pgsql-exporter)：Postgres/Pgbouncer 监控组件自我监控指标

> [!DETAILS]- PGSQL Exporter
> [![pgsql-exporter.jpg](/img/dashboard/pgsql-exporter.jpg)](https://demo.pigsty.cc/ui/d/pgsql-exporter)




-------------------

## 数据库


[PGSQL Database](https://demo.pigsty.cc/ui/d/pgsql-database)：单个 PGSQL 数据库的主仪表板

> [!DETAILS]- PGSQL Database
> [![pgsql-database.jpg](/img/dashboard/pgsql-database.jpg)](https://demo.pigsty.cc/ui/d/pgsql-database)


[PGSQL Tables](https://demo.pigsty.cc/ui/d/pgsql-tables)：单个数据库内的表/索引访问指标

> [!DETAILS]- PGSQL Tables
> [![pgsql-tables.jpg](/img/dashboard/pgsql-tables.jpg)](https://demo.pigsty.cc/ui/d/pgsql-tables)


[PGSQL Table](https://demo.pigsty.cc/ui/d/pgsql-table)：单个表的详细信息（QPS/RT/索引/序列...）

> [!DETAILS]- PGSQL Table
> [![pgsql-table.jpg](/img/dashboard/pgsql-table.jpg)](https://demo.pigsty.cc/ui/d/pgsql-table)


[PGSQL Query](https://demo.pigsty.cc/ui/d/pgsql-query)：单类查询的详细信息（QPS/RT）

> [!DETAILS]- PGSQL Query
> [![pgsql-query.jpg](/img/dashboard/pgsql-query.jpg)](https://demo.pigsty.cc/ui/d/pgsql-query)




-------------------

## PGCAT

[PGCAT Instance](https://demo.pigsty.cc/ui/d/pgcat-instance)：直接从数据库目录获取的实例信息

> [!DETAILS]- PGCAT Instance
> [![pgcat-instance.jpg](/img/dashboard/pgcat-instance.jpg)](https://demo.pigsty.cc/ui/d/pgcat-instance)


[PGCAT Database](https://demo.pigsty.cc/ui/d/pgcat-database)：直接从数据库目录获取的数据库信息

> [!DETAILS]- PGCAT Database
> [![pgcat-database.jpg](/img/dashboard/pgcat-database.jpg)](https://demo.pigsty.cc/ui/d/pgcat-database)



[PGCAT Schema](https://demo.pigsty.cc/ui/d/pgcat-schema)：直接从数据库目录获取关于模式的信息（表/索引/序列...）

> [!DETAILS]- PGCAT Schema
> [![pgcat-schema.jpg](/img/dashboard/pgcat-schema.jpg)](https://demo.pigsty.cc/ui/d/pgcat-schema)




[PGCAT Table](https://demo.pigsty.cc/ui/d/pgcat-table)：直接从数据库目录获取的单个表的详细信息（统计/膨胀...）

> [!DETAILS]- PGCAT Table
> [![pgcat-table.jpg](/img/dashboard/pgcat-table.jpg)](https://demo.pigsty.cc/ui/d/pgcat-table)



[PGCAT Query](https://demo.pigsty.cc/ui/d/pgcat-query)：直接从数据库目录获取的单类查询的详细信息（SQL/统计）

> [!DETAILS]- PGCAT Query
> [![pgcat-query.jpg](/img/dashboard/pgcat-query.jpg)](https://demo.pigsty.cc/ui/d/pgcat-query)



[PGCAT Locks](https://demo.pigsty.cc/ui/d/pgcat-locks)：直接从数据库目录获取的关于活动与锁等待的信息

> [!DETAILS]- PGCAT Locks
> [![pgcat-locks.jpg](/img/dashboard/pgcat-locks.jpg)](https://demo.pigsty.cc/ui/d/pgcat-locks)



-------------------

## PGLOG

[PGLOG Overview](https://demo.pigsty.cc/ui/d/pglog-overview)：总览 Pigsty CMDB 中的 CSV 日志样本

> [!DETAILS]- PGLOG Overview
> [![pglog-overview.jpg](/img/dashboard/pglog-overview.jpg)](https://demo.pigsty.cc/ui/d/pglog-overview)



[PGLOG Overview](https://demo.pigsty.cc/ui/d/pglog-overview)：Pigsty CMDB 中的 CSV 日志样本中某一条会话的日志详情

> [!DETAILS]- PGLOG Session
> [![pglog-session.jpg](/img/dashboard/pglog-session.jpg)](https://demo.pigsty.cc/ui/d/pglog-session)





----------------

## 画廊

详情请参考 [pigsty/wiki/gallery](https://github.com/pgsty/pigsty/wiki/Gallery)。

> [!DETAILS]- PGSQL Overview
> [![pgsql-overview.jpg](/img/dashboard/pgsql-overview.jpg)](https://demo.pigsty.cc/ui/d/pgsql-overview)


> [!DETAILS]- PGSQL Shard
> [![pgsql-shard.jpg](/img/dashboard/pgsql-shard.jpg)](https://demo.pigsty.cc/ui/d/pgsql-shard)


> [!DETAILS]- PGSQL Cluster
> [![pgsql-cluster.jpg](/img/dashboard/pgsql-cluster.jpg)](https://demo.pigsty.cc/ui/d/pgsql-cluster)


> [!DETAILS]- PGSQL Service
> [![pgsql-service.jpg](/img/dashboard/pgsql-service.jpg)](https://demo.pigsty.cc/ui/d/pgsql-service)


> [!DETAILS]- PGSQL Activity
> [![pgsql-activity.jpg](/img/dashboard/pgsql-activity.jpg)](https://demo.pigsty.cc/ui/d/pgsql-activity)


> [!DETAILS]- PGSQL Replication
> [![pgsql-replication.jpg](/img/dashboard/pgsql-replication.jpg)](https://demo.pigsty.cc/ui/d/pgsql-replication)


> [!DETAILS]- PGSQL Databases
> [![pgsql-databases.jpg](/img/dashboard/pgsql-databases.jpg)](https://demo.pigsty.cc/ui/d/pgsql-databases)


> [!DETAILS]- PGSQL Instance
> [![pgsql-instance.jpg](/img/dashboard/pgsql-instance.jpg)](https://demo.pigsty.cc/ui/d/pgsql-instance)


> [!DETAILS]- PGSQL Proxy
> [![pgsql-proxy.jpg](/img/dashboard/pgsql-proxy.jpg)](https://demo.pigsty.cc/ui/d/pgsql-proxy)


> [!DETAILS]- PGSQL Pgbouncer
> [![pgsql-pgbouncer.jpg](/img/dashboard/pgsql-pgbouncer.jpg)](https://demo.pigsty.cc/ui/d/pgsql-pgbouncer)


> [!DETAILS]- PGSQL Session
> [![pgsql-session.jpg](/img/dashboard/pgsql-session.jpg)](https://demo.pigsty.cc/ui/d/pgsql-session)


> [!DETAILS]- PGSQL Xacts
> [![pgsql-xacts.jpg](/img/dashboard/pgsql-xacts.jpg)](https://demo.pigsty.cc/ui/d/pgsql-xacts)


> [!DETAILS]- PGSQL Persist
> [![pgsql-persist.jpg](/img/dashboard/pgsql-persist.jpg)](https://demo.pigsty.cc/ui/d/pgsql-persist)


> [!DETAILS]- PGSQL Database
> [![pgsql-database.jpg](/img/dashboard/pgsql-database.jpg)](https://demo.pigsty.cc/ui/d/pgsql-database)


> [!DETAILS]- PGSQL Tables
> [![pgsql-tables.jpg](/img/dashboard/pgsql-tables.jpg)](https://demo.pigsty.cc/ui/d/pgsql-tables)


> [!DETAILS]- PGSQL Table
> [![pgsql-table.jpg](/img/dashboard/pgsql-table.jpg)](https://demo.pigsty.cc/ui/d/pgsql-table)


> [!DETAILS]- PGSQL Query
> [![pgsql-query.jpg](/img/dashboard/pgsql-query.jpg)](https://demo.pigsty.cc/ui/d/pgsql-query)


> [!DETAILS]- PGCAT Instance
> [![pgcat-instance.jpg](/img/dashboard/pgcat-instance.jpg)](https://demo.pigsty.cc/ui/d/pgcat-instance)


> [!DETAILS]- PGCAT Database
> [![pgcat-database.jpg](/img/dashboard/pgcat-database.jpg)](https://demo.pigsty.cc/ui/d/pgcat-database)


> [!DETAILS]- PGCAT Schema
> [![pgcat-schema.jpg](/img/dashboard/pgcat-schema.jpg)](https://demo.pigsty.cc/ui/d/pgcat-schema)


> [!DETAILS]- PGCAT Table
> [![pgcat-table.jpg](/img/dashboard/pgcat-table.jpg)](https://demo.pigsty.cc/ui/d/pgcat-table)


> [!DETAILS]- PGCAT Lock
> [![pgcat-locks.jpg](/img/dashboard/pgcat-locks.jpg)](https://demo.pigsty.cc/ui/d/pgcat-locks)


> [!DETAILS]- PGCAT Query
> [![pgcat-query.jpg](/img/dashboard/pgcat-query.jpg)](https://demo.pigsty.cc/ui/d/pgcat-query)



> [!DETAILS]- PGLOG Overview
> [![pglog-overview.jpg](/img/dashboard/pglog-overview.jpg)](https://demo.pigsty.cc/ui/d/pglog-overview)


> [!DETAILS]- PGLOG Session
> [![pglog-session.jpg](/img/dashboard/pglog-session.jpg)](https://demo.pigsty.cc/ui/d/pglog-session)
