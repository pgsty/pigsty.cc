---
title: 模块：PGSQL
weight: 1000
description: 使用 Pigsty v4.5 声明、部署、接入、监控、备份与管理 PostgreSQL 集群。
icon: fab fa-postgresql
module: [PGSQL]
categories: [参考]
hide_feedback: true
---

PGSQL 是 Pigsty 的核心模块：通过 Ansible 清单声明 PostgreSQL 集群，以 Patroni 与 etcd 提供高可用编排，以 pgBackRest 提供备份/PITR，并通过 HAProxy、VIP、DNS、PgBouncer 与完整可观测性栈提供数据库服务。

本页按 Pigsty v4.5.0 源码组织入口。具体默认值只在 [参数参考](/docs/pgsql/param/) 中维护，避免在模块首页复制一份会漂移的参数快照。


----------------

## 建模与配置

- [集群模型](/docs/concept/model/pgsql/)：集群、实例、身份与角色。
- [架构](/docs/concept/arch/pgsql/)：Patroni、etcd、服务接入与可观测性关系。
- [集群配置](/docs/pgsql/config/)：主库、副本、离线实例、同步提交、备份集群、延迟集群与 Citus。
- [内核](/docs/pgsql/config/kernel/)：PostgreSQL 大版本、发行版与软件包选择。
- [用户](/docs/pgsql/config/user/)、[数据库](/docs/pgsql/config/db/)、[HBA](/docs/pgsql/config/hba/) 与 [ACL](/docs/pgsql/config/acl/)：业务对象与访问控制。
- [服务接入](/docs/pgsql/service/)：读写/只读服务、HAProxy、VIP、DNS 与连接池。
- [扩展目录](/ext/list/)：当前打包的 575 个扩展及平台覆盖。


----------------

## 部署与管理

| 任务                 | 入口                                                                                               |
|:-------------------|:-------------------------------------------------------------------------------------------------|
| 初始化集群或添加实例         | [集群管理](/docs/pgsql/admin/cluster/) · [`pgsql.yml`](/docs/pgsql/playbook/#pgsqlyml)               |
| 创建或变更用户            | [用户管理](/docs/pgsql/admin/user/) · [`pgsql-user.yml`](/docs/pgsql/playbook/#pgsql-useryml)        |
| 创建或变更数据库           | [数据库管理](/docs/pgsql/admin/db/) · [`pgsql-db.yml`](/docs/pgsql/playbook/#pgsql-dbyml)             |
| HBA 与参数变更          | [HBA 管理](/docs/pgsql/admin/hba/) · [组件管理](/docs/pgsql/admin/component/)                          |
| Patroni 切换、维护与故障处理 | [Patroni 管理](/docs/pgsql/admin/patroni/)                                                         |
| 扩展安装、创建、升级与移除      | [扩展管理](/docs/pgsql/admin/ext/)                                                                   |
| 外部实例监控接入           | [`pgsql-monitor.yml`](/docs/pgsql/playbook/#pgsql-monitoryml)                                    |
| 迁移准备               | [迁移](/docs/pgsql/migration/) · [`pgsql-migration.yml`](/docs/pgsql/playbook/#pgsql-migrationyml) |
| 移除实例或集群            | [安全移除流程](/docs/pgsql/admin/cluster/#销毁集群) · [`pgsql-rm.yml`](/docs/pgsql/playbook/#pgsql-rmyml)  |
{.full-width}

`pgsql.yml`、`pgsql-user.yml`、`pgsql-db.yml` 等真实执行会修改目标环境；`pgsql-rm.yml` 默认可能删除数据与备份。执行前先核对精确集群/节点与近期备份；移除操作还必须由操作者输入并确认精确目标。


----------------

## 备份与恢复

- [备份与恢复总览](/docs/pgsql/backup/)：恢复能力、边界与入口。
- [机制](/docs/pgsql/backup/mechanism/) 与 [策略](/docs/pgsql/backup/policy/)：基础备份、WAL、恢复窗口与保留策略。
- [仓库](/docs/pgsql/backup/repository/)：本地、S3/Silo 与其他 pgBackRest 仓库。
- [日常管理](/docs/pgsql/backup/admin/)：备份状态、检查、调度与清理。
- [恢复操作](/docs/pgsql/backup/restore/)：集群级 `pgsql-pitr.yml`、单节点 `pig pitr` 和低层 `pig pb restore`。
- [手工演练](/docs/pgsql/tutorial/pitr/)：在可丢弃沙箱中分阶段验证 PITR。

恢复是破坏性操作；生产环境必须保留独立、近期且验证过的备份，并把停服、恢复、数据验证、时间线提升、DCS 重建、副本重建和新全量备份当作不同关卡。


----------------

## 监控

当前源码 `files/grafana/pgsql` 包含 29 个 PostgreSQL/PGCAT 仪表盘，覆盖全局、集群、实例、数据库、表、查询、会话、事务、复制、服务、PgBouncer、PITR 与告警。

- [监控入口](/docs/pgsql/monitor/)
- [监控与仪表盘说明](/docs/pgsql/monitor/)
- [指标参考](/docs/pgsql/metric/)
- [故障排查](/docs/pgsql/faq/)


----------------

## 参数组

[PGSQL 参数参考](/docs/pgsql/param/) 是 v4.5.0 默认值与语义的唯一文档入口：

- `PG_ID`：集群/实例身份。
- `PG_BUSINESS`：用户、数据库、服务等业务对象。
- `PG_INSTALL`：内核、软件包与扩展。
- `PG_BOOTSTRAP`：Patroni 引导、复制与数据库初始化。
- `PG_PROVISION`：库内对象与权限置备。
- `PG_BACKUP`：pgBackRest 与备份仓库。
- `PG_ACCESS`：PgBouncer、服务、VIP 与 DNS。
- `PG_MONITOR`：exporter、监控注册与指标采集。
- `PG_REMOVE`：移除保险与清理范围。


----------------

## 延伸阅读

- [性能模板](/docs/pgsql/template/)
- [PostgreSQL 内核变体](/docs/pgsql/kernel/)
- [扩展使用指南](/docs/pgsql/ext/)
- [运维教程](/docs/pgsql/tutorial/)
- [Playbook 参考](/docs/pgsql/playbook/)
