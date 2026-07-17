---
title: 运维 SOP 索引
linkTitle: SOP
weight: 620
description: 面向新手用户的 Pigsty 与 PostgreSQL 运维文档索引：按常见任务找到应读文档。
icon: fa-solid fa-list-check
module: [PIGSTY, PGSQL]
categories: [教程, 参考]
---


## 上手路线

| 顺序 | 要解决的问题          | 入口                                                                                                                                                   |
|:---|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | Pigsty 由哪些模块组成？ | [**积木式架构**](/docs/concept/arch/)，[**PGSQL 架构**](/docs/concept/arch/pgsql/)，[**PGSQL 集群模型**](/docs/concept/model/pgsql/)                              |
| 2  | 怎么先跑起来？         | [**快速上手**](/docs/setup/install/)，[**图形界面**](/docs/setup/webui/)，[**快速上手 PostgreSQL**](/docs/setup/pgsql/)                                            |
| 3  | 配置文件该怎么看？       | [**声明式配置**](/docs/concept/iac/)，[**配置清单**](/docs/setup/config/)，[**配置参数**](/docs/concept/iac/parameter/)                                             |
| 4  | 生产部署要准备什么？      | [**架构规划**](/docs/deploy/planning/)，[**资源准备**](/docs/deploy/prepare/)，[**管理机制**](/docs/deploy/admin/)                                                 |
| 5  | 怎么部署多节点集群？      | [**生产部署**](/docs/deploy/install/)，[**执行剧本**](/docs/setup/playbook/)，[**PGSQL 剧本**](/docs/pgsql/playbook/)                                            |
| 6  | 日常怎么管库？         | [**PGSQL 日常管理**](/docs/pgsql/admin/)，[**集群管理**](/docs/pgsql/admin/cluster/)，[**用户管理**](/docs/pgsql/admin/user/)，[**数据库管理**](/docs/pgsql/admin/db/)   |
| 7  | 怎么验证可靠性？        | [**PG 高可用**](/docs/concept/ha/)，[**Patroni 管理**](/docs/pgsql/admin/patroni/)，[**备份恢复**](/docs/pgsql/backup/)，[**恢复操作**](/docs/pgsql/backup/restore/) |


----------------

## 任务索引

| 任务               | 先看                                                                                                     | 操作入口                                                                               |
|:-----------------|:-------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| 准备服务器、磁盘、网络、VIP  | [**资源准备**](/docs/deploy/prepare/)，[**架构规划**](/docs/deploy/planning/)，[**Linux 兼容性**](/docs/ref/linux/) | [**生产部署**](/docs/deploy/install/)                                                  |
| 准备 SSH、Sudo、管理用户 | [**管理机制**](/docs/deploy/admin/)                                                                        | [**生产部署**](/docs/deploy/install/)                                                  |
| 本地或云上搭沙箱         | [**沙箱环境**](/docs/deploy/sandbox/)                                                                      | [**Vagrant**](/docs/deploy/vagrant/)，[**Terraform**](/docs/deploy/terraform/)      |
| 单机体验             | [**快速上手**](/docs/setup/install/)                                                                       | `./configure -g`，`./deploy.yml`                                                    |
| 多节点生产部署          | [**部署**](/docs/deploy/)，[**生产部署**](/docs/deploy/install/)                                              | `./deploy.yml`，`./pgsql.yml`                                                       |
| 离线环境部署           | [**离线安装**](/docs/setup/offline/)                                                                       | [**软件仓库管理**](/docs/infra/admin/repo/)                                              |
| 选择配置模板           | [**配置模板**](/docs/concept/iac/template/)，[**模板列表**](/docs/conf/)                                        | `./configure -c <template>`                                                        |
| 规划集群名、库名、用户名     | [**PGSQL 集群模型**](/docs/concept/model/pgsql/)                                                           | `pg_cluster`，`pg_databases`，`pg_users`                                             |
| 创建数据库集群          | [**集群实例配置**](/docs/pgsql/config/cluster/)                                                              | [**集群管理**](/docs/pgsql/admin/cluster/)，`./pgsql.yml -l <cluster>`                  |
| 新增业务用户           | [**用户/角色配置**](/docs/pgsql/config/user/)                                                                | [**用户管理**](/docs/pgsql/admin/user/)，`./pgsql-user.yml -l <cluster>`                |
| 新增业务数据库          | [**数据库配置**](/docs/pgsql/config/db/)                                                                    | [**数据库管理**](/docs/pgsql/admin/db/)，`./pgsql-db.yml -l <cluster>`                   |
| 配置访问入口           | [**服务/接入**](/docs/pgsql/service/)                                                                      | `pg_services`，`pg_default_services`                                                |
| 修改 HBA           | [**HBA 配置**](/docs/pgsql/config/hba/)                                                                  | [**HBA 管理**](/docs/pgsql/admin/hba/)                                               |
| 主从切换             | [**Patroni 管理**](/docs/pgsql/admin/patroni/)                                                           | `patronictl switchover`                                                            |
| HA 故障演练          | [**PG 高可用**](/docs/concept/ha/)，[**RPO**](/docs/concept/ha/rpo/)，[**RTO**](/docs/concept/ha/rto/)      | [**3坏2应急处理**](/docs/pgsql/tutorial/drill/)                                         |
| 配置 VIP           | [**HA 服务接入**](/docs/concept/ha/svc/)                                                                   | [**配置 PG VIP**](/docs/pgsql/tutorial/pg-vip/)                                      |
| 配置备份策略           | [**备份策略**](/docs/pgsql/backup/policy/)                                                                 | [**备份管理命令**](/docs/pgsql/backup/admin/)                                            |
| 做 PITR 时间点恢复     | [**时间点恢复**](/docs/concept/pitr/)                                                                       | [**恢复操作**](/docs/pgsql/backup/restore/)                                            |
| 误删数据、表、库         | [**误删处理**](/docs/pgsql/tutorial/drop/)                                                                 | [**手工恢复**](/docs/pgsql/tutorial/pitr/)                                             |
| 克隆恢复集群           | [**克隆数据库集群**](/docs/pgsql/backup/cluster/)                                                             | [**Fork 实例**](/docs/pgsql/tutorial/pg-fork/)                                       |
| 使用 MinIO 存备份     | [**MINIO 模块**](/docs/minio/)                                                                           | [**MinIO 配置**](/docs/minio/config/)，[**备份仓库**](/docs/pgsql/backup/repository/)     |
| 查看监控告警           | [**监控系统**](/docs/concept/monitor/)                                                                     | [**PGSQL 监控**](/docs/pgsql/monitor/)，[**PGSQL 仪表盘**](/docs/pgsql/dashboard/)       |
| 排查数据库故障          | [**PGSQL 常见问题**](/docs/pgsql/faq/)                                                                     | [**故障排查**](/docs/pgsql/tutorial/failure/)，[**组件管理**](/docs/pgsql/admin/component/) |
| 扩容、缩容 PG 集群      | [**集群实例配置**](/docs/pgsql/config/cluster/)                                                              | [**集群管理**](/docs/pgsql/admin/cluster/)                                             |
| 升级 PostgreSQL    | [**版本升级**](/docs/pgsql/admin/upgrade/)                                                                 | [**内核版本**](/docs/pgsql/config/kernel/)                                             |
| 安装或启用扩展          | [**扩展插件**](/docs/pgsql/ext/)                                                                           | [**扩展管理**](/docs/pgsql/admin/ext/)                                                 |
| 迁移已有数据库          | [**数据迁移**](/docs/pgsql/migration/)                                                                     | [**迁移剧本**](/docs/pgsql/playbook/#pgsql-migrationyml)                               |
| 做安全加固            | [**安全考量**](/docs/deploy/security/)                                                                     | [**访问控制**](/docs/concept/sec/ac)，[**CA 与证书**](/docs/concept/sec/ca)                 |
| 管理域名与 Web 入口     | [**域名管理**](/docs/infra/admin/domain/)                                                                  | [**Nginx 管理**](/docs/infra/admin/portal/)                                          |
| 维护基础设施           | [**INFRA 管理预案**](/docs/infra/admin/)                                                                   | `infra.yml`，`infra-rm.yml`                                                         |
| 维护 Etcd          | [**ETCD 配置**](/docs/etcd/config/)                                                                      | [**ETCD 管理**](/docs/etcd/admin/)，[**ETCD FAQ**](/docs/etcd/faq/)                   |
| 部署应用模板           | [**应用**](/docs/app/)                                                                                   | [**Docker 模块**](/docs/docker/usage/)，`./app.yml`                                   |


----------------

## 准备与部署

生产部署先看 [**架构规划**](/docs/deploy/planning/) 和 [**资源准备**](/docs/deploy/prepare/)。这两篇解决节点数量、磁盘、文件系统、网络、VIP、域名、软件源这些问题。

机器准备好以后，看 [**管理机制**](/docs/deploy/admin/)：管理用户、免密 SSH、Sudo、可达性、防火墙都在这里。系统版本和架构看 [**Linux 兼容性**](/docs/ref/linux/)。

第一次安装走 [**快速上手**](/docs/setup/install/)。多节点生产环境走 [**生产部署**](/docs/deploy/install/)。没有互联网访问时，看 [**离线安装**](/docs/setup/offline/) 和 [**软件仓库管理**](/docs/infra/admin/repo/)。

模板选择不用一开始想太复杂：单机默认看 [**`meta`**](/docs/conf/meta/)；三节点 HA 看 [**`ha/trio`**](/docs/conf/trio/)；更完整的 HA 看 [**`ha/full`**](/docs/conf/full/)；强调一致性看 [**`ha/safe`**](/docs/conf/safe/)；资源紧张时看 [**`ha/dual`**](/docs/conf/dual/) 和 [**`ha/simu`**](/docs/conf/simu/)。


----------------

## 命名与配置

先分清三个名字：集群名、数据库名、服务名。

`pg_cluster` 是 Pigsty 管理 PostgreSQL 集群的顶层名字，会影响实例名、服务名、备份 stanza、监控标签和很多文件路径。它不是一个可以随手改的显示名。命名规则看 [**PGSQL 集群模型**](/docs/concept/model/pgsql/)；不同实例角色看 [**集群实例配置**](/docs/pgsql/config/cluster/)；服务名和连接入口看 [**服务/接入**](/docs/pgsql/service/)。

数据库名和用户名是 PostgreSQL 里的逻辑对象。库名看 [**数据库配置**](/docs/pgsql/config/db/) 和 [**数据库管理**](/docs/pgsql/admin/db/)；用户和角色看 [**用户/角色配置**](/docs/pgsql/config/user/) 和 [**用户管理**](/docs/pgsql/admin/user/)；权限模型看 [**访问控制**](/docs/concept/sec/ac) 与 [**ACL 配置**](/docs/pgsql/config/acl/)。

经验上，集群名用小写字母、数字、短横线，例如 `pg-meta`、`pg-test`、`pg-user-prod`。数据库对象名用 `snake_case`，别用中文、空格、大小写混用和 SQL 关键字。更完整的命名背景可以读 [**数据库集群管理概念与实体命名规范**](https://vonng.com/pg/entity-and-naming/) 和 [**PostgreSQL 规约（2024版）**](https://vonng.com/pg/pg-convention/)。

配置变更遵循一个习惯：先改 `pigsty.yml`，再执行对应剧本。配置结构看 [**声明式配置**](/docs/concept/iac/) 和 [**配置清单**](/docs/setup/config/)；参数含义看 [**配置参数**](/docs/concept/iac/parameter/) 与 [**参数列表**](/docs/ref/param/)；剧本入口看 [**执行剧本**](/docs/setup/playbook/) 和 [**剧本列表**](/docs/ref/playbook/)。


----------------

## 日常管理

数据库管理的总入口是 [**PGSQL 日常管理**](/docs/pgsql/admin/)。

| 操作                                       | 文档                                                                        |
|:-----------------------------------------|:--------------------------------------------------------------------------|
| 创建、扩容、缩容、下线、克隆集群                         | [**集群管理**](/docs/pgsql/admin/cluster/)                                    |
| 创建、修改、删除业务用户                             | [**用户管理**](/docs/pgsql/admin/user/)                                       |
| 创建、修改、删除、重建数据库                           | [**数据库管理**](/docs/pgsql/admin/db/)                                        |
| 刷新和排查 HBA                                | [**HBA 管理**](/docs/pgsql/admin/hba/)                                      |
| 查看 HA 状态、切换、重启、重做从库                      | [**Patroni 管理**](/docs/pgsql/admin/patroni/)                              |
| 管理连接池                                    | [**Pgbouncer 管理**](/docs/pgsql/admin/pgbouncer/)                          |
| 启停 PostgreSQL、Patroni、Pgbouncer、Exporter | [**组件管理**](/docs/pgsql/admin/component/)                                  |
| 管理备份、校验、清理、恢复                            | [**pgBackRest 管理**](/docs/pgsql/admin/pgbackrest/)                        |
| 配置备份、Vacuum、Analyze 等定时任务                | [**定时任务**](/docs/pgsql/admin/crontab/)                                    |
| 升级版本与扩展                                  | [**版本升级**](/docs/pgsql/admin/upgrade/)，[**扩展管理**](/docs/pgsql/admin/ext/) |

PostgreSQL 例行维护的背景文章可以看 [**PostgreSQL 例行维护**](https://vonng.com/pg/routine-maintain/)。


----------------

## 高可用演练

理解 HA 先看 [**PG 高可用**](/docs/concept/ha/)。不要只看“能不能自动切换”，还要看 [**RPO**](/docs/concept/ha/rpo/) 和 [**RTO**](/docs/concept/ha/rto/)：前者是最多能丢多少数据，后者是多久恢复服务。

接入层看 [**HA 服务接入**](/docs/concept/ha/svc/) 和 [**服务/接入**](/docs/pgsql/service/)；组件关系看 [**PGSQL 架构**](/docs/concept/arch/pgsql/)；Etcd 的角色看 [**ETCD 配置**](/docs/etcd/config/)。

演练入口集中在三处：主动切换看 [**Patroni 管理**](/docs/pgsql/admin/patroni/)；服务状态看 [**组件管理**](/docs/pgsql/admin/component/)；极端故障看 [**3坏2应急处理**](/docs/pgsql/tutorial/drill/)。需要 VIP 时，再看 [**配置 PG VIP**](/docs/pgsql/tutorial/pg-vip/)。

背景文章可读 [**PostgreSQL 高可用到底怎么做？**](https://vonng.com/pg/pg-ha-sota/)。


----------------

## 备份与恢复

PITR 先读 [**时间点恢复**](/docs/concept/pitr/)，再读 [**工作原理**](/docs/concept/pitr/mechanism/)、[**实现架构**](/docs/concept/pitr/arch/)、[**策略权衡**](/docs/concept/pitr/tradeoff/)、[**声明式恢复**](/docs/concept/pitr/restore/) 和 [**典型场景**](/docs/concept/pitr/scenarios/)。

配置和维护看 [**备份恢复**](/docs/pgsql/backup/)、[**备份策略**](/docs/pgsql/backup/policy/)、[**备份机制**](/docs/pgsql/backup/mechanism/)、[**备份仓库**](/docs/pgsql/backup/repository/) 和 [**备份管理命令**](/docs/pgsql/backup/admin/)。

真正恢复时，自动方式看 [**恢复操作**](/docs/pgsql/backup/restore/)，手工演练看 [**手工恢复**](/docs/pgsql/tutorial/pitr/)。误删数据、表、库，看 [**误删处理**](/docs/pgsql/tutorial/drop/)。不想直接动原集群时，先看 [**克隆数据库集群**](/docs/pgsql/backup/cluster/) 或 [**Fork 实例**](/docs/pgsql/tutorial/pg-fork/)。

恢复前至少确认四件事：目标时间点或恢复点是否明确；备份和 WAL 是否连续；业务是否已经停写；是在原集群恢复，还是先拉一个新集群验数据。

背景文章可读 [**备份恢复手段概览**](https://vonng.com/pg/backup-overview/) 和 [**PgBackRest2中文文档**](https://vonng.com/pg/pgbackrest/)。


----------------

## 监控与排障

监控总览看 [**监控系统**](/docs/concept/monitor/)。入口和域名看 [**图形界面**](/docs/setup/webui/)。数据库指标、日志、告警看 [**PGSQL 监控**](/docs/pgsql/monitor/) 和 [**PGSQL 仪表盘**](/docs/pgsql/dashboard/)。

非数据库模块的监控分别看 [**INFRA 监控**](/docs/infra/monitor/)、[**NODE 监控**](/docs/node/monitor/)、[**ETCD 监控**](/docs/etcd/monitor/) 和 [**MINIO 监控**](/docs/minio/monitor/)。

排障先看 [**PGSQL 常见问题**](/docs/pgsql/faq/)，再看 [**故障排查**](/docs/pgsql/tutorial/failure/)。连接认证问题看 [**HBA 管理**](/docs/pgsql/admin/hba/)；HA 状态问题看 [**Patroni 管理**](/docs/pgsql/admin/patroni/)；进程状态问题看 [**组件管理**](/docs/pgsql/admin/component/)。

PostgreSQL 通用排障文章：[**PG 服务器日志常规配置**](https://vonng.com/pg/logging/)、[**PostgreSQL 宏观查询优化之 `pg_stat_statements`**](https://vonng.com/pg/pgss/)、[**故障档案：PostgreSQL 事务号回卷**](https://vonng.com/pg/xid-wrap-around/)、[**查找虚假索引**](https://vonng.com/pg/find-dummy-index/) 和 [**表膨胀治理**](https://vonng.com/pg/bloat/)。


----------------

## 扩缩容、升级、迁移

容量和拓扑设计看 [**架构规划**](/docs/deploy/planning/)、[**资源准备**](/docs/deploy/prepare/) 和 [**PGSQL 集群模型**](/docs/concept/model/pgsql/)。

按模块扩缩容时，PGSQL 看 [**集群管理**](/docs/pgsql/admin/cluster/)；NODE 看 [**NODE 管理**](/docs/node/admin/)；ETCD 看 [**ETCD 管理**](/docs/etcd/admin/)；MINIO 看 [**MINIO 管理**](/docs/minio/admin/)；INFRA 看 [**INFRA 管理预案**](/docs/infra/admin/)；REDIS 看 [**REDIS 管理**](/docs/redis/admin/)。

升级 PostgreSQL 看 [**版本升级**](/docs/pgsql/admin/upgrade/) 和 [**内核版本**](/docs/pgsql/config/kernel/)。扩展相关看 [**扩展插件**](/docs/pgsql/ext/)、[**扩展管理**](/docs/pgsql/admin/ext/)、[**扩展仓库**](/docs/pgsql/ext/repo/) 和 [**软件包别名**](/docs/pgsql/config/alias/)。

迁移已有 PostgreSQL 看 [**数据迁移**](/docs/pgsql/migration/) 和 [**PGSQL 迁移剧本**](/docs/pgsql/playbook/#pgsql-migrationyml)。低停机迁移的思路可以参考 [**迁移不停机**](https://vonng.com/pg/migration-without-downtime/)。

需要水平扩展时，再读 [**Citus 集群部署**](/docs/pgsql/tutorial/citus/) 和 [**Citus 内核分支**](/docs/pgsql/kernel/citus/)。


----------------

## 安全与入口

部署安全先看 [**安全考量**](/docs/deploy/security/)，安全模型看 [**安全与合规**](/docs/concept/sec/)。PostgreSQL 权限看 [**访问控制**](/docs/concept/sec/ac) 和 [**ACL 配置**](/docs/pgsql/config/acl/)；认证规则看 [**身份认证**](/docs/concept/sec/auth)、[**HBA 配置**](/docs/pgsql/config/hba/) 和 [**HBA 管理**](/docs/pgsql/admin/hba/)。

证书看 [**CA 与证书**](/docs/infra/admin/cert/)。域名、Nginx、Web 入口看 [**域名管理**](/docs/infra/admin/domain/) 和 [**Nginx 管理**](/docs/infra/admin/portal/)。

生产环境至少要改默认密码，收紧 HBA，明确业务用户和管理用户边界，确认备份仓库的保留、加密和访问权限。


----------------

## 应用接入

应用连接数据库前，先读 [**服务/接入**](/docs/pgsql/service/) 和 [**快速上手 PostgreSQL**](/docs/setup/pgsql/)。连接池行为看 [**Pgbouncer 管理**](/docs/pgsql/admin/pgbouncer/)。

使用 Pigsty 托管数据库、再部署无状态应用时，看 [**应用模板**](/docs/app/) 和 [**Docker 模块**](/docs/docker/usage/)。


----------------

## 常见误区

| 误区                         | 该看哪里                                                                                                          |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------|
| 把 `pg_cluster` 当成可以随便改的显示名 | [**PGSQL 集群模型**](/docs/concept/model/pgsql/)                                                                  |
| 把数据库名、集群名、服务名混为一谈          | [**命名与配置**](#命名与配置)，[**服务/接入**](/docs/pgsql/service/)                                                         |
| 只部署主库，不演练恢复                | [**手工恢复**](/docs/pgsql/tutorial/pitr/)，[**恢复操作**](/docs/pgsql/backup/restore/)                                |
| 以为 HA 就一定不丢数据              | [**RPO**](/docs/concept/ha/rpo/)，[**RTO**](/docs/concept/ha/rto/)                                             |
| 第一次故障切换直接在生产做              | [**沙箱环境**](/docs/deploy/sandbox/)，[**3坏2应急处理**](/docs/pgsql/tutorial/drill/)                                  |
| 忽略 Etcd                    | [**ETCD 模块**](/docs/etcd/)，[**ETCD FAQ**](/docs/etcd/faq/)                                                    |
| 只看备份成功，不验证恢复               | [**备份恢复**](/docs/pgsql/backup/)，[**克隆数据库集群**](/docs/pgsql/backup/cluster/)                                    |
| 改 HBA、证书、服务入口时没有回滚路径       | [**安全合规**](/docs/concept/sec/)，[**HBA 管理**](/docs/pgsql/admin/hba/)，[**Nginx 管理**](/docs/infra/admin/portal/) |


----------------

## 延伸阅读

| 主题              | 文章                                                                                                                              |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------|
| 命名与实体模型         | [**数据库集群管理概念与实体命名规范**](https://vonng.com/pg/entity-and-naming/)                                                                 |
| PostgreSQL 使用规约 | [**PostgreSQL 规约（2024版）**](https://vonng.com/pg/pg-convention/)                                                                 |
| 高可用             | [**PostgreSQL 高可用到底怎么做？**](https://vonng.com/pg/pg-ha-sota/)                                                                    |
| 备份恢复            | [**备份恢复手段概览**](https://vonng.com/pg/backup-overview/)，[**PgBackRest2中文文档**](https://vonng.com/pg/pgbackrest/)                   |
| 日常维护            | [**PostgreSQL 例行维护**](https://vonng.com/pg/routine-maintain/)                                                                   |
| 连接池             | [**Pgbouncer 快速上手**](https://vonng.com/pg/pgbouncer-usage/)                                                                     |
| 查询与负载           | [**PostgreSQL 宏观查询优化之 `pg_stat_statements`**](https://vonng.com/pg/pgss/)，[**PostgreSQL 的 KPI**](https://vonng.com/pg/pg-load/) |
| 日志与故障           | [**PG 服务器日志常规配置**](https://vonng.com/pg/logging/)，[**故障档案：PostgreSQL 事务号回卷**](https://vonng.com/pg/xid-wrap-around/)            |
| 生态与扩展           | [**PostgreSQL 正在吞噬数据库世界**](https://vonng.com/pg/pg-eat-db-world/)，[**小猪骑大象：PG内核与扩展包管理神器**](https://vonng.com/pg/pig/)           |
