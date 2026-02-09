---
title: 模块：PGSQL
weight: 1000
description: "如何使用 Pigsty 部署并管理世界上最先进的开源关系型数据库 —— PostgreSQL，按需定制，开箱即用！"
icon: fas fa-database fa-bounce
module: [PGSQL]
categories: [参考]
sidebar_root_for: self
---



> **世界上最先进的开源关系型数据库！**
>
> 而 Pigsty 帮它进入全盛状态：开箱即用、可靠、可观测、可维护、可伸缩！ [配置](/docs/pgsql/config) | [管理](/docs/pgsql/admin) | [剧本](/docs/pgsql/playbook) | [监控](/docs/pgsql/monitor) | [参数](#参数)


----------------

## 概览

> 了解关于 PostgreSQL 的重要主题与概念。

- [系统架构](/docs/concept/arch/pgsql)
- [集群配置](/docs/pgsql/config)
- [扩展插件](/docs/ref/extension)
- [用户/角色](/docs/pgsql/config/user)
- [数据库](/docs/pgsql/config/db)
- [服务/接入](/docs/pgsql/service/)
- [认证/HBA](/docs/pgsql/config/hba)
- [访问控制](/docs/concept/sec/ac/)
- [管理预案](/docs/pgsql/admin)
- [备份恢复](/docs/pgsql/tutorial/pitr)
- [监控接入](/docs/pgsql/monitor)
- [集群迁移](/docs/pgsql/migration)
- [仪表盘](/docs/pgsql/monitor)


----------------

## 配置

> [描述](/docs/pgsql/config) 你想要的 PostgreSQL 集群

- [身份参数](/docs/concept/model/pgsql#身份参数)：定义PostgreSQL集群的身份参数
- [读写主库](/docs/pgsql/config/cluster#读写主库)：创建由单一主库构成的单实例“集群“
- [只读从库](/docs/pgsql/config/cluster#只读从库)：创建一主一从的两节点基础高可用集群
- [离线从库](/docs/pgsql/config/cluster#离线从库)：创建专用于OLAP/ETL/交互式查询的特殊只读实例
- [同步备库](/docs/pgsql/config/cluster#同步备库)：启用同步提交，以确保没有数据丢失
- [法定人数](/docs/pgsql/config/cluster#法定人数提交)：使用法定人数同步提交以获得更高的一致性级别
- [备份集群](/docs/pgsql/config/cluster#备份集群)：克隆现有集群，并保持同步（异地灾备集群）
- [延迟集群](/docs/pgsql/config/cluster#延迟集群)：克隆现有集群，并延迟重放，用于紧急数据恢复
- [Citus集群](/docs/pgsql/config/cluster#citus集群)：定义并创建 Citus 水平分布式数据库集群
- [大版本切换](/docs/pgsql/config/kernel#大版本与软件包)：使用不同的 PostgreSQL 大版本部署集群


----------------

## 管理

> [管理](/docs/pgsql/admin) 您所创建的 PostgreSQL 集群。

- [命令速查](/docs/pgsql/admin/component#命令速查)
- [创建集群](/docs/pgsql/admin/cluster#创建集群)
- [创建用户](/docs/pgsql/admin/user#创建用户)
- [创建数据库](/docs/pgsql/admin/db#创建数据库)
- [重载服务](/docs/pgsql/admin/cluster#刷新服务)
- [重载HBA](/docs/pgsql/admin/cluster#刷新hba)
- [配置集群](/docs/pgsql/admin/cluster#配置集群)
- [添加实例](/docs/pgsql/admin/cluster#扩容集群)
- [移除实例](/docs/pgsql/admin/cluster#缩容集群)
- [下线集群](/docs/pgsql/admin/cluster#销毁集群)
- [主动切换](/docs/pgsql/admin/patroni#主动切换)
- [备份集群](/docs/pgsql/admin/cluster#克隆集群)
- [恢复集群](/docs/pgsql/backup/restore)
- [疑难杂症](/docs/pgsql/faq/)


----------------

## 剧本

> 使用幂等的 [剧本](/docs/pgsql/playbook)，将您的描述变为现实。

- [`pgsql.yml`](/docs/pgsql/playbook#pgsqlyml) ：初始化PostgreSQL集群或添加新的从库。
- [`pgsql-rm.yml`](/docs/pgsql/playbook#pgsql-rmyml) ：移除PostgreSQL集群，或移除某个实例
- [`pgsql-user.yml`](/docs/pgsql/playbook#pgsql-useryml) ：在现有的PostgreSQL集群中添加新的业务用户
- [`pgsql-db.yml`](/docs/pgsql/playbook#pgsql-dbyml) ：在现有的PostgreSQL集群中添加新的业务数据库
- [`pgsql-monitor.yml`](/docs/pgsql/playbook#pgsql-monitoryml) ：将远程postgres实例纳入监控中
- [`pgsql-migration.yml`](/docs/pgsql/playbook#pgsql-migrationyml) ：为现有的PostgreSQL集群生成迁移手册和脚本

----------------

## 监控

>  在 Grafana [仪表盘](/docs/pgsql/monitor) 中查阅 PostgreSQL 的详情状态。

在 Pigsty 中共有 26 个与 PostgreSQL 相关的监控面板：

|                            总览                             |                               集群                                |                             实例                              |                            数据库                            |
|:---------------------------------------------------------:|:---------------------------------------------------------------:|:-----------------------------------------------------------:|:---------------------------------------------------------:|
| [PGSQL Overview](https://demo.pigsty.cc/d/pgsql-overview) |     [PGSQL Cluster](https://demo.pigsty.cc/d/pgsql-cluster)     |  [PGSQL Instance](https://demo.pigsty.cc/d/pgsql-instance)  | [PGSQL Database](https://demo.pigsty.cc/d/pgsql-database) |
|    [PGSQL Alert](https://demo.pigsty.cc/d/pgsql-alert)    |     [PGRDS Cluster](https://demo.pigsty.cc/d/pgrds-cluster)     |  [PGRDS Instance](https://demo.pigsty.cc/d/pgrds-instance)  | [PGCAT Database](https://demo.pigsty.cc/d/pgcat-database) |
|    [PGSQL Shard](https://demo.pigsty.cc/d/pgsql-shard)    |    [PGSQL Activity](https://demo.pigsty.cc/d/pgsql-activity)    |  [PGCAT Instance](https://demo.pigsty.cc/d/pgcat-instance)  |   [PGSQL Tables](https://demo.pigsty.cc/d/pgsql-tables)   |
|                                                           | [PGSQL Replication](https://demo.pigsty.cc/d/pgsql-replication) |   [PGSQL Persist](https://demo.pigsty.cc/d/pgsql-persist)   |    [PGSQL Table](https://demo.pigsty.cc/d/pgsql-table)    |
|                                                           |     [PGSQL Service](https://demo.pigsty.cc/d/pgsql-service)     |     [PGSQL Proxy](https://demo.pigsty.cc/d/pgsql-proxy)     |    [PGCAT Table](https://demo.pigsty.cc/d/pgcat-table)    |
|                                                           |   [PGSQL Databases](https://demo.pigsty.cc/d/pgsql-databases)   | [PGSQL Pgbouncer](https://demo.pigsty.cc/d/pgsql-pgbouncer) |    [PGSQL Query](https://demo.pigsty.cc/d/pgsql-query)    |
|                                                           |     [PGSQL Patroni](https://demo.pigsty.cc/d/pgsql-patroni)     |   [PGSQL Session](https://demo.pigsty.cc/d/pgsql-session)   |    [PGCAT Query](https://demo.pigsty.cc/d/pgcat-query)    |
|                                                           |        [PGSQL PITR](https://demo.pigsty.cc/d/pgsql-pitr)        |     [PGSQL Xacts](https://demo.pigsty.cc/d/pgsql-xacts)     |    [PGCAT Locks](https://demo.pigsty.cc/d/pgcat-locks)    |
|                                                           |                                                                 |  [PGSQL Exporter](https://demo.pigsty.cc/d/pgsql-exporter)  |   [PGCAT Schema](https://demo.pigsty.cc/d/pgcat-schema)   |


----------------

## 参数

> [PGSQL](/docs/pgsql/param) 模块的配置参数列表

- [`PG_ID`](/docs/pgsql/param#pg_id) : 计算和校验 PostgreSQL 实例身份
- [`PG_BUSINESS`](/docs/pgsql/param#pg_business) : PostgreSQL业务对象定义
- [`PG_INSTALL`](/docs/pgsql/param#pg_install) : 安装 PostgreSQL 内核，支持软件包与扩展插件
- [`PG_BOOTSTRAP`](/docs/pgsql/param#pg_bootstrap) : 使用 Patroni 初始化高可用 PostgreSQL 集群
- [`PG_PROVISION`](/docs/pgsql/param#pg_provision) : 创建 PostgreSQL 用户、数据库和其他数据库内对象
- [`PG_BACKUP`](/docs/pgsql/param#pg_backup) : 使用 pgbackrest 设置备份仓库
- [`PG_ACCESS`](/docs/pgsql/param#pg_access) : 暴露 PostgreSQL 服务，绑定 VIP （可选），以及注册DNS
- [`PG_MONITOR`](/docs/pgsql/param#pg_monitor) : 为 PostgreSQL 实例添加监控，并注册至基础设施中。
- [`PG_REMOVE`](/docs/pgsql/param#pg_remove) : 移除 PostgreSQL 集群，实例和相关资源。


----------------

## 教程

> 一些使用/管理 Pigsty中 PostgreSQL 数据库的教程。

- 克隆一套现有的 PostgreSQL 集群
- 创建一套现有 PostgreSQL 集群的在线备份集群。
- 创建一套现有 PostgreSQL 集群的延迟备份集群
- 监控一个已有的 postgres 实例？
- 使用逻辑复制从外部 PostgreSQL 迁移至 Pigsty 托管的 PostgreSQL 实例？
- 使用 MinIO 作为集中的 pgBackRest 备份仓库。
- 使用专门的 etcd 集群作为 PostgreSQL / Patroni 的 DCS ？
- 使用专用的 haproxy 负载均衡器集群对外暴露暴露 PostgreSQL 服务。
- 使用 pg-meta CMDB 替代 pigsty.yml 作为配置清单源。
- 使用 PostgreSQL 作为 Grafana 的后端存储数据库？
- 使用 PostgreSQL 作为 Prometheus 后端存储数据库？
