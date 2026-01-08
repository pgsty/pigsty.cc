---
title: PGSQL 架构
weight: 203
description: PostgreSQL 模块的组件交互与数据流。
icon: fa-brands fa-space-awesome
module: [PGSQL]
categories: [概念]
---


PGSQL 模块在生产环境中以 **集群** 的形式组织，这些 **集群** 是由一组通过 **主-备** 关联的数据库 **实例** 组成的 **逻辑实体**。

每个集群都是一个 **自治** 的业务单元，由至少一个 **主库实例** 组成，并通过服务向外暴露能力。

在 Pigsty 的 PGSQL 模块中有四种核心实体：

- **集群**（Cluster）：自治的 PostgreSQL 业务单元，用作其他实体的顶级命名空间。
- **服务**（Service）：对外暴露能力的命名抽象，路由流量，并使用节点端口暴露服务。
- **实例**（Instance）：由在单个节点上的运行进程和数据库文件组成的单一 PostgreSQL 服务器。
- **节点**（Node）：运行 Linux + Systemd 环境的硬件资源抽象，可以是裸机、VM、容器或 Pod。

辅以"数据库""角色"两个业务实体，共同组成完整的逻辑视图。如下图所示：

![pigsty-er.jpg](/img/pigsty/er.jpg)

**命名约定**

- 集群名应为有效的 DNS 域名，不包含任何点号，正则表达式为：`[a-zA-Z0-9-]+`
- 服务名应以集群名为前缀，并以特定单词作为后缀：`primary`、`replica`、`offline`、`delayed`，中间用 `-` 连接。
- 实例名以集群名为前缀，以正整数实例号为后缀，用 `-` 连接，例如 `${cluster}-${seq}`。
- 节点由其首要内网 IP 地址标识，因为 PGSQL 模块中数据库与主机 1:1 部署，所以主机名通常与实例名相同。


--------

## 概览

下图是 PGSQL 模块的架构示意图，展示了各组件之间的交互关系：

| 组件                                        | 种类     | 描述                                              |
|:------------------------------------------|--------|:------------------------------------------------|
| [**PostgreSQL**](#postgresql)             | 数据库    | 世界上最先进的开源关系型数据库，PGSQL 模块的核心。                    |
| [**Patroni**](#patroni)                   | 高可用    | 托管 PostgreSQL 进程，协调故障转移、选主、配置变更。                 |
| [**etcd**](/docs/etcd/)                   | DCS    | 分布式一致性存储，用于保存集群元数据与领导者信息。                       |
| [**Pgbouncer**](#pgbouncer)               | 连接池    | 轻量级连接池中间件，复用连接、降低开销、提供额外灵活性。                    |
| [**HAProxy**](#haproxy)                   | 负载均衡   | 对外暴露服务端口，根据角色分发流量至主库或从库。                        |
| [**vip-manager**](#vip-manager)           | VIP管理  | 将 L2 VIP 绑定到当前主库节点，实现透明漂移。【可选】                   |
| [**pgBackRest**](#pgbackrest)             | 备份恢复   | 全量/增量备份与 WAL 归档，支持本地与对象存储。                       |
| [**pg_exporter**](#pg_exporter)           | 指标导出   | 导出 PostgreSQL 监控指标供 Prometheus 抓取。              |
| [**pgbouncer_exporter**](#pgbouncer_exporter) | 指标导出   | 导出 Pgbouncer 连接池指标。                             |
| [**pgbackrest_exporter**](#pgbackrest_exporter) | 指标导出   | 导出备份状态指标。                                       |
| [**Vector**](/docs/node/)                 | 日志采集   | 收集 PostgreSQL、Patroni、Pgbouncer 等日志推送至中心。       |

[![pigsty-arch](/img/pigsty/arch.png)](/docs/pgsql/)


----------------

## PostgreSQL

**PostgreSQL** 是 PGSQL 模块的核心，默认监听 `5432` 端口提供关系型数据库服务。

| 协议  | 端口     | 说明                  |
|:----|:-------|:--------------------|
| TCP | `5432` | PostgreSQL 数据库服务端口  |

在多个节点上以相同 [**`pg_cluster`**](/docs/pgsql/param#pg_cluster) 安装 PGSQL 模块，将自动基于流式复制组成高可用集群。
实例角色由 [**`pg_role`**](/docs/pgsql/param#pg_role) 定义：`primary`（主库）、`replica`（从库）、`offline`（离线从库）。

**PostgreSQL** 进程默认由 **Patroni** 托管，可根据 [**`pg_conf`**](/docs/pgsql/param#pg_conf) 模板切换 OLTP/OLAP/CRIT/TINY 配置，
并通过 [**`pg_parameters`**](/docs/pgsql/param#pg_parameters) 覆盖任意参数。

更多信息请参阅：[**配置：PGSQL - PG_BOOTSTRAP**](/docs/pgsql/param/#pg_bootstrap)


----------------

## Patroni

**Patroni** 是 PostgreSQL 高可用控制器，默认监听 `8008` 端口提供 REST API。

| 协议  | 端口     | 说明                       |
|:----|:-------|:-------------------------|
| TCP | `8008` | Patroni REST API / 健康检查  |

**Patroni** 接管 **PostgreSQL** 的启动、停止、配置与健康状态，将领导者、成员信息写入 **etcd**。
它负责自动故障转移、保持复制因子、协调参数变更，并提供 REST API 供 **HAProxy**、监控与管理员查询。

**HAProxy** 通过 **Patroni** 健康检查端点判断实例角色，将流量路由至正确的主库或从库。
**vip-manager** 监视 **etcd** 中的领导者键，在主库切换时自动漂移 VIP。

更多信息请参阅：[**配置：PGSQL - PG_BOOTSTRAP**](/docs/pgsql/param/#pg_bootstrap)


----------------

## Pgbouncer

**Pgbouncer** 是轻量级连接池中间件，默认监听 `6432` 端口。

| 协议  | 端口     | 说明              |
|:----|:-------|:----------------|
| TCP | `6432` | Pgbouncer 连接池端口 |

**Pgbouncer** 以无状态方式运行在每个实例上，通过本地 Unix Socket 连接 **PostgreSQL**，
用于吸收瞬时连接、稳定会话并提供额外指标。

Pigsty 默认让生产流量（读写服务 `5433` / 只读服务 `5434`）经由 **Pgbouncer**，
仅默认服务（`5436`）与离线服务（`5438`）绕过连接池直连 **PostgreSQL**。

连接池模式由 [**`pgbouncer_poolmode`**](/docs/pgsql/param#pgbouncer_poolmode) 控制，默认为 `transaction`（事务级复用）。
可通过 [**`pgbouncer_enabled`**](/docs/pgsql/param#pgbouncer_enabled) 关闭连接池。

更多信息请参阅：[**配置：PGSQL - PG_ACCESS**](/docs/pgsql/param/#pg_access)


----------------

## HAProxy

**HAProxy** 是服务入口与负载均衡器，对外暴露多个数据库服务端口。

| 端口     | 服务名       | 目标           | 说明                  |
|:-------|:----------|:-------------|:--------------------|
| `9101` | 管理接口      | -            | HAProxy 统计与管理页面     |
| `5433` | primary   | 主库 Pgbouncer | 读写服务，路由至主库连接池       |
| `5434` | replica   | 从库 Pgbouncer | 只读服务，路由至从库连接池       |
| `5436` | default   | 主库 Postgres  | 默认服务，直连主库（绕过连接池）    |
| `5438` | offline   | 离线库 Postgres | 离线服务，直连离线从库（ETL/分析） |

**HAProxy** 通过 **Patroni** REST API 提供的健康检查信息判断实例角色，将流量路由至对应的主库或从库。
服务定义由 [**`pg_default_services`**](/docs/pgsql/param#pg_default_services) 与 [**`pg_services`**](/docs/pgsql/param#pg_services) 组合而成。

可通过 [**`pg_service_provider`**](/docs/pgsql/param#pg_service_provider) 指定专用的 HAProxy 节点组承载更高流量，
默认使用本地节点上的 **HAProxy** 对外发布服务。

更多信息请参阅：[**服务接入**](/docs/pgsql/service/) 与 [**配置：PGSQL - PG_ACCESS**](/docs/pgsql/param/#pg_access)


----------------

## vip-manager

**vip-manager** 负责将 L2 VIP 绑定到当前主库节点，实现透明漂移。

| 协议   | 说明                         |
|:-----|:---------------------------|
| L2   | 虚拟 IP 绑定至主库节点网卡            |

**vip-manager** 在每个 PG 节点上运行，监视 **etcd** 中由 **Patroni** 写入的领导者键，
将 [**`pg_vip_address`**](/docs/pgsql/param#pg_vip_address) 绑定到当前主库节点的网络接口上。

当发生故障转移时，**vip-manager** 会立即释放旧主机上的 VIP，并在新主机上重新绑定，
保障旧主机不会继续响应请求，避免脑裂。

该组件可选，通过 [**`pg_vip_enabled`**](/docs/pgsql/param#pg_vip_enabled) 启用。
启用后需确保所有节点处于同一 VLAN，否则 VIP 无法正确漂移。

更多信息请参阅：[**教程：VIP 配置**](/docs/pgsql/tutorial/pg-vip/) 与 [**配置：PGSQL - PG_ACCESS**](/docs/pgsql/param/#pg_access)


----------------

## pgBackRest

**pgBackRest** 是专业的 PostgreSQL 备份恢复工具，支持全量/增量/差异备份与 WAL 归档。

| 功能    | 说明                              |
|:------|:--------------------------------|
| 全量备份  | 完整数据库备份                         |
| 增量备份  | 仅备份变化的数据块                       |
| WAL归档 | 持续归档 WAL 日志，支持 PITR             |
| 仓库    | 本地磁盘（默认）或 MinIO 等对象存储           |

**pgBackRest** 与 **PostgreSQL** 配合，在主库上创建备份仓库，执行备份与归档任务。
默认使用本地备份仓库（[**`pgbackrest_method`**](/docs/pgsql/param#pgbackrest_method) = `local`），
也可配置为 MinIO 等对象存储，实现集中化备份管理。

初始化完成后可通过 [**`pgbackrest_init_backup`**](/docs/pgsql/param#pgbackrest_init_backup) 自动发起首次全量备份。
恢复过程与 **Patroni** 集成，支持将副本引导为新的主库或备库。

更多信息请参阅：[**备份恢复**](/docs/pgsql/backup/) 与 [**配置：PGSQL - PG_BACKUP**](/docs/pgsql/param/#pg_backup)


----------------

## pg_exporter

**pg_exporter** 导出 PostgreSQL 监控指标，默认监听 `9630` 端口。

| 协议  | 端口     | 说明                        |
|:----|:-------|:--------------------------|
| TCP | `9630` | pg_exporter 指标端口          |

**pg_exporter** 运行在每个 PG 节点上，通过本地 Unix Socket 连接 **PostgreSQL**，
导出覆盖会话、缓冲命中、复制延迟、事务率等丰富指标，供 INFRA 节点上的 **VictoriaMetrics** 抓取。

采集配置由 [**`pg_exporter_config`**](/docs/pgsql/param#pg_exporter_config) 指定，
支持自动数据库发现（[**`pg_exporter_auto_discovery`**](/docs/pgsql/param#pg_exporter_auto_discovery)），
并可通过 [**`pg_exporter_cache_ttls`**](/docs/pgsql/param#pg_exporter_cache_ttls) 配置阶梯式缓存策略。

更多信息请参阅：[**配置：PGSQL - PG_MONITOR**](/docs/pgsql/param/#pg_monitor)


----------------

## pgbouncer_exporter

**pgbouncer_exporter** 导出 Pgbouncer 连接池指标，默认监听 `9631` 端口。

| 协议  | 端口     | 说明                            |
|:----|:-------|:------------------------------|
| TCP | `9631` | pgbouncer_exporter 指标端口       |

**pgbouncer_exporter** 读取 **Pgbouncer** 的统计视图，提供连接池利用率、等待队列与命中率指标。
若禁用 **Pgbouncer**，本组件也应同时关闭。

更多信息请参阅：[**配置：PGSQL - PG_MONITOR**](/docs/pgsql/param/#pg_monitor)


----------------

## pgbackrest_exporter

**pgbackrest_exporter** 导出备份状态指标，默认监听 `9854` 端口。

| 协议  | 端口     | 说明                              |
|:----|:-------|:--------------------------------|
| TCP | `9854` | pgbackrest_exporter 指标端口        |

**pgbackrest_exporter** 解析 **pgBackRest** 状态，生成最近备份时间、大小、类型等指标。
结合告警策略可快速发现备份过期或失败，保障数据安全。

更多信息请参阅：[**配置：PGSQL - PG_MONITOR**](/docs/pgsql/param/#pg_monitor)


----------------

## 总结

PGSQL 模块为 Pigsty 提供生产级 PostgreSQL 高可用集群，是整个系统的核心。

| 组件                  | 端口     | 说明                    |
|:--------------------|:-------|:----------------------|
| PostgreSQL          | `5432` | 数据库服务                 |
| Patroni             | `8008` | 高可用控制器 REST API       |
| Pgbouncer           | `6432` | 连接池                   |
| HAProxy             | `543x` | 服务入口与负载均衡             |
| vip-manager         | -      | L2 VIP 管理（可选）         |
| pgBackRest          | -      | 备份恢复                  |
| pg_exporter         | `9630` | PostgreSQL 指标导出       |
| pgbouncer_exporter  | `9631` | Pgbouncer 指标导出        |
| pgbackrest_exporter | `9854` | 备份状态指标导出              |

典型的访问路径：客户端 → DNS/VIP → HAProxy（服务端口） → Pgbouncer → PostgreSQL。

**Patroni** 与 **etcd** 协同实现自动故障转移，**pgBackRest** 保障数据可恢复，
三个 Exporter 配合 **VictoriaMetrics** 提供完整的可观测性。

更多信息请参阅：[**PGSQL 模块**](/docs/pgsql/) 与 [**组件与交互**](/docs/pgsql/arch/parts/)

