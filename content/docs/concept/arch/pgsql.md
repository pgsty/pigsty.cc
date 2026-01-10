---
title: PGSQL 架构
weight: 203
description: PostgreSQL 模块的组件交互与数据流。
icon: fas fa-database
module: [PGSQL]
categories: [概念]
---

PGSQL 模块在生产环境中以 **集群** 的形式组织，这些 **集群** 是由一组通过 **主-备** 关联的数据库 **实例** 组成的 **逻辑实体**。


--------

## 概览

[**PGSQL 模块**](/docs/pgsql) 包含下列组件，协同提供生产级 PostgreSQL 高可用集群服务：

| 组件                                                | 简介    | 描述                                       |
|:--------------------------------------------------|-------|:-----------------------------------------|
| [**`postgres`**](#postgresql)                     | 数据库   | 世界上最先进的开源关系型数据库，PGSQL 模块的核心。             |
| [**`patroni`**](#patroni)                         | 高可用   | 托管 PostgreSQL 进程，协调故障转移、选主、配置变更。         |
| [**`pgbouncer`**](#pgbouncer)                     | 连接池   | 轻量级连接池中间件，复用连接、降低开销、提供额外灵活性。             |
| [**`pgbackrest`**](#pgbackrest)                   | 备份恢复  | 全量/增量备份与 WAL 归档，支持本地与对象存储。               |
| [**`pg_exporter`**](#pg_exporter)                 | 指标导出  | 导出 PostgreSQL 监控指标供 Prometheus 抓取。       |
| [**`pgbouncer_exporter`**](#pgbouncer_exporter)   | 指标导出  | 导出 [**Pgbouncer**](#pgbouncer) 连接池指标。    |
| [**`pgbackrest_exporter`**](#pgbackrest_exporter) | 指标导出  | 导出 [**pgBackrest**](#pgbackrest) 备份状态指标。 |
| [**`vip-manager`**](#vip-manager)                 | VIP管理 | 将 L2 VIP 绑定到当前主库节点，实现透明漂移。【可选】           |
{.full-width}

其中 [**`vip-manager`**](#vip-manager) 为按需启用的组件。此外，PGSQL 还会使用到其他模块中的组件：

| 组件                        | 模块                     | 简介   | 描述                                                                  |
|---------------------------|:-----------------------|------|:--------------------------------------------------------------------|
| [**`haproxy`**](#haproxy) | [**NODE**](/docs/node) | 负载均衡 | 对外暴露服务端口，根据角色分发流量至主库或从库。                                            |
| [**`vector`**](#vector)   | [**NODE**](/docs/node) | 日志采集 | 收集 PostgreSQL、[Patroni](#patroni)、[Pgbouncer](#pgbouncer) 等日志推送至中心。 |
| [**`etcd`**](#etcd)       | [**ETCD**](/docs/etcd) | DCS  | 分布式一致性存储，用于保存集群元数据与领导者信息。                                           |
{.full-width}

如果用类比来形容，[PostgreSQL](#postgresql) 数据库内核就是 CPU，而整个 PGSQL 模块将其封装为一台完整的计算机。
[Patroni](#patroni) 与 [Etcd](#etcd) 组成 [高可用子系统](#高可用子系统)，[pgBackRest](#pgbackrest) 与 MinIO 组成 [备份恢复子系统](#备份恢复子系统)。
[HAProxy](#haproxy) 与 [Pgbouncer](#pgbouncer)、[vip-manager](#vip-manager) 组成 [接入子系统](#服务接入子系统)。
各种 Exporter 与 [Vector](#vector) 构成 [可观测性子系统](#可观测性子系统)；
最后还可以替换不同的 [**内核 CPU**](/docs/pgsql/kernel) 与 [**扩展卡**](/docs/pgsql/ext)。

![](/img/pigsty/motherboard.gif)


| 子系统                     | 组件                                                                                                                                        | 功能                 |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| [**高可用子系统**](#高可用子系统)   | [Patroni](#patroni) + [etcd](#etcd)                                                                                                       | 故障检测、自动切换、配置管理     |
| [**接入子系统**](#服务接入子系统)   | [HAProxy](#haproxy) + [Pgbouncer](#pgbouncer) + [vip-manager](#vip-manager)                                                               | 服务暴露、负载均衡、连接池、VIP  |
| [**备份恢复子系统**](#备份恢复子系统) | [pgBackRest](#pgbackrest)（+ MinIO）                                                                                                        | 全量/增量备份、WAL归档、PITR |
| [**可观测性子系统**](#可观测性子系统) | [pg_exporter](#pg_exporter) / [pgbouncer_exporter](#pgbouncer_exporter) / [pgbackrest_exporter](#pgbackrest_exporter) + [Vector](#vector) | 指标采集、日志收集          |
{.full-width}


--------

## 组件交互

[![pigsty-arch](/img/pigsty/arch.png)](/docs/infra/)

- 集群 DNS 由 infra 节点上的 [**DNSMASQ**](/docs/concept/arch/infra#dnsmasq) 负责解析
- 集群 VIP 由 [**vip-manager**](#vip-manager) 组件管理，它负责将 [`pg_vip_address`](/docs/pgsql/param#pg_vip_address) 绑定到集群主库节点上。
    - [vip-manager](#vip-manager) 从 [etcd](#etcd) 集群获取由 [patroni](#patroni) 写入的集群领导者信息
- 集群服务由节点上的 [**HAProxy**](#haproxy) 对外暴露，不同服务通过节点的不同端口（543x）区分。
    - HAProxy 端口 9101：监控指标 & 统计 & 管理页面
    - HAProxy 端口 5433：默认路由至主 [pgbouncer](#pgbouncer)：[读写服务](/docs/pgsql/service/#primary服务)
    - HAProxy 端口 5434：默认路由至从库 [pgbouncer](#pgbouncer)：[只读服务](/docs/pgsql/service/#replica服务)
    - HAProxy 端口 5436：默认路由至主 [postgres](#postgresql)：[默认服务](/docs/pgsql/service/#default服务)
    - HAProxy 端口 5438：默认路由至离线 [postgres](#postgresql)：[离线服务](/docs/pgsql/service/#offline服务)
    - [HAProxy](#haproxy) 将根据 [patroni](#patroni) 提供的健康检查信息路由流量。
- [**Pgbouncer**](#pgbouncer) 是连接池中间件，默认监听 6432 端口，可以缓冲连接、暴露额外的指标，并提供额外的灵活性。
    - [Pgbouncer](#pgbouncer) 是无状态的，并通过本地 Unix 套接字以 1:1 的方式与 [Postgres](#postgresql) 服务器部署。
    - 生产流量（主/从）将默认通过 [pgbouncer](#pgbouncer)（可以通过 [`pg_default_service_dest`](/docs/pgsql/param#pg_default_service_dest) 指定跳过）
    - 默认/离线服务将始终绕过 [pgbouncer](#pgbouncer)，并直接连接到目标 [Postgres](#postgresql)。
- [**PostgreSQL**](#postgresql) 监听 5432 端口，提供关系型数据库服务
    - 在多个节点上安装 PGSQL 模块，并使用同一集群名，将自动基于流式复制组成高可用集群
    - [PostgreSQL](#postgresql) 进程默认由 [patroni](#patroni) 管理。
- [**Patroni**](#patroni) 默认监听端口 8008，监管着 [PostgreSQL](#postgresql) 服务器进程
    - [Patroni](#patroni) 将 [Postgres](#postgresql) 服务器作为子进程启动
    - [Patroni](#patroni) 使用 [etcd](#etcd) 作为 DCS：存储配置、故障检测和领导者选举。
    - [Patroni](#patroni) 通过健康检查提供 Postgres 信息（比如主/从），[HAProxy](#haproxy) 通过健康检查使用该信息分发服务流量
- [**pg_exporter**](#pg_exporter) 在 9630 端口对外暴露 [postgres](#postgresql) 监控指标
- [**pgbouncer_exporter**](#pgbouncer_exporter) 在端口 9631 暴露 [pgbouncer](#pgbouncer) 指标
- [**pgBackRest**](#pgbackrest) 默认使用本地备份仓库 （`pgbackrest_method` = `local`）
    - 如果使用 `local`（默认）作为备份仓库，[pgBackRest](#pgbackrest) 将在主库节点的 [`pg_fs_bkup`](/docs/pgsql/param#pg_fs_bkup) 下创建本地仓库
    - 如果使用 `minio` 作为备份仓库，[pgBackRest](#pgbackrest) 将在专用的 MinIO 集群上创建备份仓库
- [**Vector**](#vector) 负责收集 Postgres 相关日志（postgres, pgbouncer, patroni, pgbackrest）
    - [vector](#vector) 监听 9598 端口，也对 infra 节点上的 VictoriaMetrics 暴露自身的监控指标
    - [vector](#vector) 将日志发送至 infra 节点上的 VictoriaLogs


--------

## 高可用子系统

[**高可用**](/docs/concept/ha) 子系统由 [**Patroni**](#patroni) 与 [**etcd**](#etcd) 组成，负责 PostgreSQL 集群的故障检测、自动切换与配置管理。

**工作原理**：[Patroni](#patroni) 在每个节点上运行，托管本地 [PostgreSQL](#postgresql) 进程，并将集群状态（领导者、成员、配置）写入 [etcd](#etcd)。
当主库故障时，[Patroni](#patroni) 通过 [etcd](#etcd) 协调选举，选出最健康的从库提升为新主库，整个过程自动完成，RTO 通常在 30 秒内。

**关键交互**：
- **[PostgreSQL](#postgresql)**：作为父进程启动、停止、重载 PG，控制其生命周期
- **[etcd](#etcd)**：外部依赖，写入/监视领导者键，实现分布式共识与故障检测
- **[HAProxy](#haproxy)**：通过 REST API（`:8008`）提供健康检查，告知实例角色
- **[vip-manager](#vip-manager)**：监视 [etcd](#etcd) 中的领导者键，自动漂移 VIP

更多信息请参阅：[**高可用**](/docs/concept/ha/) 与 [**配置：PGSQL - PG_BOOTSTRAP**](/docs/pgsql/param/#pg_bootstrap)


--------

## 服务接入子系统

接入子系统由 [**HAProxy**](#haproxy)、[**Pgbouncer**](#pgbouncer) 与 [**vip-manager**](#vip-manager) 组成，负责对外暴露服务、路由流量与连接池化。

有多种不同的接入方法，一种典型的流量路径是：`客户端 → DNS/VIP → HAProxy (543x) → Pgbouncer (6432) → PostgreSQL (5432)`

| 层级      | 组件                            | 端口   | 职责                   |
|:--------|:------------------------------|:-----|:---------------------|
| L2 VIP  | [vip-manager](#vip-manager)   | -    | 将 L2 VIP 绑定到主库节点（可选） |
| L4 负载均衡 | [HAProxy](#haproxy)           | 543x | 服务暴露、负载均衡、健康检查       |
| L7 连接池  | [Pgbouncer](#pgbouncer)       | 6432 | 连接复用、会话管理、事务池化       |
{.full-width}

**服务端口**：
- `5433` primary：读写服务，路由至主库 [Pgbouncer](#pgbouncer)
- `5434` replica：只读服务，路由至从库 [Pgbouncer](#pgbouncer)
- `5436` default：默认服务，直连主库（绕过连接池）
- `5438` offline：离线服务，直连离线从库（ETL/分析）

**关键特性**：
- [HAProxy](#haproxy) 通过 [Patroni](#patroni) REST API 判断实例角色，自动路由流量
- [Pgbouncer](#pgbouncer) 采用事务级池化，吸收连接峰值，降低 PG 连接开销
- [vip-manager](#vip-manager) 监视 [etcd](#etcd) 领导者键，故障切换时自动漂移 VIP

更多信息请参阅：[**服务接入**](/docs/pgsql/service/) 与 [**配置：PGSQL - PG_ACCESS**](/docs/pgsql/param/#pg_access)


--------

## 备份恢复子系统

备份恢复子系统由 [**pgBackRest**](#pgbackrest) 组成（可选配 **MinIO** 作为远程仓库），负责数据备份与时间点恢复（[**PITR**](/docs/concept/pitr)）。

**备份类型**：
- **全量备份**：完整的数据库副本
- **增量/差异备份**：仅备份变更的数据块
- **WAL 归档**：持续归档事务日志，支持任意时间点恢复

**存储后端**：
- `local`（默认）：本地磁盘，备份存储在 [`pg_fs_bkup`](/docs/pgsql/param#pg_fs_bkup) 挂载点
- `minio`：S3 兼容对象存储，支持集中化备份管理与异地容灾

**关键交互**：
- **[pgBackRest](#pgbackrest) → [PostgreSQL](#postgresql)**：执行备份命令，管理 WAL 归档
- **[pgBackRest](#pgbackrest) → [Patroni](#patroni)**：恢复时可将副本引导为新的主库或备库
- **[pgbackrest_exporter](#pgbackrest_exporter) → Prometheus**：导出备份状态指标，监控备份健康

更多信息请参阅：[**PITR**](/docs/concept/pitr/)、[**备份恢复**](/docs/pgsql/backup/) 与 [**配置：PGSQL - PG_BACKUP**](/docs/pgsql/param/#pg_backup)


--------

## 可观测性子系统

可观测性子系统由三个 **Exporter** 与 [**Vector**](#vector) 组成，负责指标采集与日志收集。

| 组件                                            | 端口     | 采集对象                                                                                | 关键指标            |
|:----------------------------------------------|:-------|:------------------------------------------------------------------------------------|:----------------|
| [pg_exporter](#pg_exporter)                   | `9630` | [PostgreSQL](#postgresql)                                                           | 会话、事务、复制延迟、缓冲命中 |
| [pgbouncer_exporter](#pgbouncer_exporter)     | `9631` | [Pgbouncer](#pgbouncer)                                                             | 连接池利用率、等待队列、命中率 |
| [pgbackrest_exporter](#pgbackrest_exporter)   | `9854` | [pgBackRest](#pgbackrest)                                                           | 最近备份时间、大小、类型    |
| [vector](#vector)                             | `9598` | [postgres](#postgresql)/[patroni](#patroni)/[pgbouncer](#pgbouncer) 日志              | 结构化日志流          |

**数据流向**：
- **指标**：Exporter → VictoriaMetrics（INFRA）→ Grafana 仪表盘
- **日志**：[Vector](#vector) → VictoriaLogs（INFRA）→ Grafana 日志查询

[pg_exporter](#pg_exporter) / [pgbouncer_exporter](#pgbouncer_exporter) 通过本地 Unix Socket 连接目标服务，与 HA 拓扑解耦。在 [**精简安装**](/docs/setup/slim) 模式下，可禁用这些组件。

更多信息请参阅：[**配置：PGSQL - PG_MONITOR**](/docs/pgsql/param/#pg_monitor)


--------

## PostgreSQL

[**PostgreSQL**](https://www.postgresql.org/) 是 PGSQL 模块的核心，默认监听 `5432` 端口提供关系型数据库服务，采用与 [**节点**](/docs/node) 1:1 对应的部署模型。

Pigsty 目前支持 PostgreSQL 14 - 18（生命周期内的大版本），使用 [**PGDG 官方仓库**](/docs/repo/pgdg/) 提供的二进制包安装。
Pigsty 还允许您使用其他的 [**PG 内核分支**](/docs/pgsql/kernel) 替换默认的 PostgreSQL 内核，
并在 PG 内核上加装多达 [**440**](/docs/pgsql/ext) 个扩展插件。

**PostgreSQL** 进程默认由 [**高可用**](/docs/concept/ha) Agent —— [**Patroni**](#patroni) 托管拉起。
当一个集群中只有一个节点时，该实例即为主库；当集群包含多个节点时，其余实例会自动作为从库加入：
通过物理复制，实时从主库同步数据变更。从库可以承载只读请求，并在主库故障时自动接管。

[![pigsty-ha.png](/img/pigsty/ha.png)](/docs/concept/ha)

您可以直接访问 PostgreSQL，或者通过 [HAProxy](#haproxy) 与 [Pgbouncer](#pgbouncer) 连接池来访问。

更多信息请参阅：[**配置：PGSQL - PG_BOOTSTRAP**](/docs/pgsql/param/#pg_bootstrap)


--------

## Patroni

[**Patroni**](https://patroni.readthedocs.io/) 是 PostgreSQL 高可用控制组件，默认监听 `8008` 端口。

**Patroni** 接管 [**PostgreSQL**](#postgresql) 的启动、停止、配置与健康状态，将领导者、成员信息写入 [**etcd**](#etcd)。
它负责自动故障转移、保持复制因子、协调参数变更，并提供 REST API 供 [**HAProxy**](#haproxy)、监控与管理员查询。

[**HAProxy**](#haproxy) 通过 **Patroni** 健康检查端点判断实例角色，将流量路由至正确的主库或从库。
[**vip-manager**](#vip-manager) 监视 [**etcd**](#etcd) 中的领导者键，在主库切换时自动漂移 VIP。

[![patroni](/img/dashboard/pgsql-patroni.webp)](/docs/concept/ha)

更多信息请参阅：[**配置：PGSQL - PG_BOOTSTRAP**](/docs/pgsql/param/#patroni_mode)


--------

## Pgbouncer

[**Pgbouncer**](https://www.pgbouncer.org/) 是轻量级连接池中间件，默认监听 `6432` 端口，与 [PostgreSQL](#postgresql) 数据库与节点保持 1:1 部署。

**Pgbouncer** 以无状态方式运行在每个实例上，通过本地 Unix Socket 连接 [**PostgreSQL**](#postgresql)，默认通过 Transaction Pooling 的方式
对 PG 连接进行池化管理，能够吸收大量客户端的瞬时连接请求，稳定数据库会话，降低锁征用，显著提升高并发状态下的性能表现。

Pigsty 默认让生产流量（读写服务 `5433` / 只读服务 `5434`）经由 **Pgbouncer**，
仅默认服务（`5436`）与离线服务（`5438`）绕过连接池直连 [**PostgreSQL**](#postgresql)。

连接池模式由 [`pgbouncer_poolmode`](/docs/pgsql/param#pgbouncer_poolmode) 控制，默认为 `transaction`（事务级复用），可通过 [`pgbouncer_enabled`](/docs/pgsql/param#pgbouncer_enabled) 关闭连接池。

[![pgbouncer.png](/img/dashboard/pgsql-pgbouncer.webp)](https://demo.pigsty.cc/ui/d/pgsql-pgbouncer)

更多信息请参阅：[**配置：PGSQL - PG_ACCESS**](/docs/pgsql/param/#pg_access)


--------

## pgBackRest

[**pgBackRest**](https://pgbackrest.org/) 是专业的 PostgreSQL 备份恢复工具，也是 PG 生态的最强备份工具之一，支持全量/增量/差异备份与 WAL 归档。

Pigsty 使用 pgBackRest 实现 PostgreSQL 的 [**PITR**](/docs/concept/pitr) 能力，
您可以在备份保留的时间窗口内，将集群回滚到任意时间点。

**pgBackRest** 与 [**PostgreSQL**](#postgresql) 配合，在主库上创建备份仓库，执行备份与归档任务。
默认使用本地备份仓库（[**`pgbackrest_method`**](/docs/pgsql/param#pgbackrest_method) = `local`），也可配置为 MinIO 等对象存储，实现集中化备份管理。

初始化完成后可通过 [**`pgbackrest_init_backup`**](/docs/pgsql/param#pgbackrest_init_backup) 自动发起首次全量备份。
恢复过程与 [**Patroni**](#patroni) 集成，支持将副本引导为新的主库或备库。

[![pgbackrest](/img/dashboard/pgsql-pitr.webp)](/docs/concept/pitr)

更多信息请参阅：[**备份恢复**](/docs/pgsql/backup/) 与 [**配置：PGSQL - PG_BACKUP**](/docs/pgsql/param/#pg_backup)


--------

## HAProxy

[**HAProxy**](http://www.haproxy.org/) 是服务入口与负载均衡器，对外暴露多个数据库服务端口。

| 端口     | 服务名     | 目标                           | 说明                  |
|:-------|:--------|:-----------------------------|:--------------------|
| `9101` | 管理接口    | -                            | HAProxy 统计与管理页面     |
| `5433` | primary | 主库 [Pgbouncer](#pgbouncer)   | 读写服务，路由至主库连接池       |
| `5434` | replica | 从库 [Pgbouncer](#pgbouncer)   | 只读服务，路由至从库连接池       |
| `5436` | default | 主库 [Postgres](#postgresql)   | 默认服务，直连主库（绕过连接池）    |
| `5438` | offline | 离线库 [Postgres](#postgresql)  | 离线服务，直连离线从库（ETL/分析） |

**HAProxy** 通过 [**Patroni**](#patroni) REST API 提供的健康检查信息判断实例角色，将流量路由至对应的主库或从库。
服务定义由 [**`pg_default_services`**](/docs/pgsql/param#pg_default_services) 与 [**`pg_services`**](/docs/pgsql/param#pg_services) 组合而成。

可通过 [**`pg_service_provider`**](/docs/pgsql/param#pg_service_provider) 指定专用的 HAProxy 节点组承载更高流量，
默认使用本地节点上的 **HAProxy** 对外发布服务。

[![haproxy](/img/dashboard/node-haproxy.webp)](/docs/concept/ha/svc)

更多信息请参阅：[**服务接入**](/docs/pgsql/service/) 与 [**配置：PGSQL - PG_ACCESS**](/docs/pgsql/param/#pg_access)


--------

## vip-manager

[**vip-manager**](https://github.com/cybertec-postgresql/vip-manager) 负责将 L2 VIP 绑定到当前主库节点，这是一个可选的组件，如果您的网络支持 L2 VIP，可以考虑启用。

**vip-manager** 在每个 PG 节点上运行，监视 [**etcd**](#etcd) 中由 [**Patroni**](#patroni) 写入的领导者键，
将 [**`pg_vip_address`**](/docs/pgsql/param#pg_vip_address) 绑定到当前主库节点的网卡上。
当集群发生故障转移时，**vip-manager** 会立即释放旧主机上的 VIP，并在新主机上重新绑定，从而将流量切换到新的主库。

该组件可选，通过 [**`pg_vip_enabled`**](/docs/pgsql/param#pg_vip_enabled) 启用。
启用后需确保所有节点处于同一 VLAN，否则 VIP 无法正确漂移。
通常公有云网络环境不支持 L2 VIP，建议仅在本地自建环境与私有云环境中启用。

[![node-vip](/img/dashboard/node-vip.webp)](/docs/concept/ha/svc)

更多信息请参阅：[**教程：VIP 配置**](/docs/pgsql/tutorial/pg-vip/) 与 [**配置：PGSQL - PG_ACCESS**](/docs/pgsql/param/#pg_access)


--------

## pg_exporter

[**pg_exporter**](https://github.com/Vonng/pg_exporter) 导出 [PostgreSQL](#postgresql) 监控指标，默认监听 `9630` 端口。

**pg_exporter** 运行在每个 PG 节点上，通过本地 Unix Socket 连接 [**PostgreSQL**](#postgresql)，
导出覆盖会话、缓冲命中、复制延迟、事务率等丰富指标，供 INFRA 节点上的 **VictoriaMetrics** 抓取。

采集配置由 [**`pg_exporter_config`**](/docs/pgsql/param#pg_exporter_config) 指定，
支持自动数据库发现（[**`pg_exporter_auto_discovery`**](/docs/pgsql/param#pg_exporter_auto_discovery)），
并可通过 [**`pg_exporter_cache_ttls`**](/docs/pgsql/param#pg_exporter_cache_ttls) 配置阶梯式缓存策略。

您可以通过参数禁用这个组件，在 [**精简安装**](/docs/setup/slim) 中，这个组件不会被启用。

[![pg-exporter](/img/dashboard/pgsql-exporter.webp)](https://demo.pigsty.cc/ui/d/pgsql-exporter)

更多信息请参阅：[**配置：PGSQL - PG_MONITOR**](/docs/pgsql/param/#pg_monitor)


--------

## pgbouncer_exporter

**pgbouncer_exporter** 导出 [Pgbouncer](#pgbouncer) 连接池指标，默认监听 `9631` 端口。

`pgbouncer_exporter` 使用的同样是 [**pg_exporter**](#pg_exporter) 的二进制程序，但是使用专用的指标配置文件，支持 pgbouncer 1.8 - 1.25+ 。
**pgbouncer_exporter** 读取 [**Pgbouncer**](#pgbouncer) 的统计视图，提供连接池利用率、等待队列与命中率指标。

若禁用 [**Pgbouncer**](#pgbouncer)，本组件也同时关闭。在 [**精简安装**](/docs/setup/slim) 中，这个组件也不会被启用。

更多信息请参阅：[**配置：PGSQL - PG_MONITOR**](/docs/pgsql/param/#pg_monitor)


--------

## pgbackrest_exporter

**pgbackrest_exporter** 导出备份状态指标，默认监听 `9854` 端口。

**pgbackrest_exporter** 解析 [**pgBackRest**](#pgbackrest) 状态，生成最近备份时间、大小、类型等指标。结合告警策略可快速发现备份过期或失败，保障数据安全。
请注意，当备份很多，或者使用大型网络存储库时，采集过程开销较大，因此 **pgbackrest_exporter** 默认设置了 2分钟的采集间隔。
最慢情况下，您可能要在一个备份完成后的 2 分钟后，才能在监控系统中看到最新的备份状态。

更多信息请参阅：[**配置：PGSQL - PG_MONITOR**](/docs/pgsql/param/#pg_monitor)


--------

## etcd

[**etcd**](/docs/etcd) 是分布式一致性存储（DCS），为 [**Patroni**](#patroni) 提供集群元数据存储与领导者选举能力。

etcd 由独立的 [**ETCD 模块**](/docs/etcd) 部署管理，不属于 PGSQL 模块本身，但对 PostgreSQL 高可用至关重要。
[Patroni](#patroni) 将集群状态、领导者信息、配置参数写入 etcd，所有节点通过 etcd 达成共识。
[vip-manager](#vip-manager) 也从 etcd 读取领导者键，实现 VIP 的自动漂移。

更多信息请参阅：[**ETCD 模块**](/docs/etcd/)


--------

## vector

[**Vector**](https://vector.dev/) 是高性能日志采集组件，由 [**NODE 模块**](/docs/node) 部署，负责收集 PostgreSQL 相关日志。

Vector 常驻在节点上，跟踪 [PostgreSQL](#postgresql)、[Pgbouncer](#pgbouncer)、[Patroni](#patroni) 与 [pgBackRest](#pgbackrest) 的日志目录，
将结构化日志发送至 INFRA 节点上的 VictoriaLogs 进行集中存储与查询。

更多信息请参阅：[**NODE 模块**](/docs/node/)
