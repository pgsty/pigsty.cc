---
title: 组件与交互
weight: 1102
description: 介绍 Pigsty 中 PostgreSQL 集群中的组件，以及它们之间的交互行为与依赖关系。
icon: fas fa-gears
module: [PGSQL]
categories: [概念]
---

## 总览

以下是 PostgreSQL 模块组件及其相互作用的详细描述，从上至下分别为：

- 集群 DNS 由 infra 节点上的 DNSMASQ 负责解析
- 集群 VIP 由 `vip-manager` 组件管理，它负责将 [`pg_vip_address`](/docs/pgsql/param#pg_vip_address) 绑定到集群主库节点上。
  - `vip-manager` 从 `etcd` 集群获取由 `patroni` 写入的集群领导者信息
- 集群服务由节点上的 Haproxy 对外暴露，不同服务通过节点的不同端口（543x）区分。
  - Haproxy 端口 9101：监控指标 & 统计 & 管理页面
  - Haproxy 端口 5433：默认路由至主 pgbouncer：[读写服务](/docs/pgsql/service/#primary服务)
  - Haproxy 端口 5434：默认路由至从库 pgbouncer：[只读服务](/docs/pgsql/service/#replica服务)
  - Haproxy 端口 5436：默认路由至主 postgres：[默认服务](/docs/pgsql/service/#default服务)
  - Haproxy 端口 5438：默认路由至离线 postgres：[离线服务](/docs/pgsql/service/#offline服务)
  - HAProxy 将根据 `patroni` 提供的健康检查信息路由流量。
- Pgbouncer 是一个连接池中间件，默认监听6432端口，可以缓冲连接、暴露额外的指标，并提供额外的灵活性。
  - Pgbouncer 是无状态的，并通过本地 Unix 套接字以 1:1 的方式与 Postgres 服务器部署。
  - 生产流量（主/从）将默认通过 pgbouncer（可以通过[`pg_default_service_dest`](/docs/pgsql/param#pg_default_service_dest)指定跳过）
  - 默认/离线服务将始终绕过 pgbouncer ，并直接连接到目标 Postgres。
- PostgreSQL 监听5432端口，提供关系型数据库服务
  - 在多个节点上安装 PGSQL 模块，并使用同一集群名，将自动基于流式复制组成高可用集群
  - PostgreSQL 进程默认由 `patroni` 管理。
- Patroni 默认监听端口 8008，监管着 PostgreSQL 服务器进程
  - Patroni 将 Postgres 服务器作为子进程启动
  - Patroni 使用 `etcd` 作为 DCS：存储配置、故障检测和领导者选举。
  - Patroni 通过健康检查提供 Postgres 信息（比如主/从），HAProxy 通过健康检查使用该信息分发服务流量
  - Patroni 指标将被 infra 节点上的 Prometheus 抓取
- PG Exporter 在 9630 端口对外暴露 postgres 架空指标
  - PostgreSQL 指标将被 infra 节点上的 Prometheus 抓取
- Pgbouncer Exporter 在端口 9631 暴露 pgbouncer 指标
  - Pgbouncer 指标将被 infra 节点上的 Prometheus 抓取
- pgBackRest 默认在使用本地备份仓库 （`pgbackrest_method` = `local`）
  - 如果使用 `local`（默认）作为备份仓库，pgBackRest 将在主库节点的[`pg_fs_bkup`](/docs/pgsql/param#pg_fs_bkup) 下创建本地仓库
  - 如果使用 `minio` 作为备份仓库，pgBackRest 将在专用的 MinIO 集群上创建备份仓库：[`pgbackrest_repo`.`minio`](/docs/pgsql/param#pgbackrest_repo)
- Postgres 相关日志（postgres, pgbouncer, patroni, pgbackrest）由 vector 负责收集
  - vector 监听 9598 端口，也对 infra 节点上的 VictoriaMetrics 暴露自身的监控指标
  - vector 将日志发送至 infra 节点上的 VictoriaLogs

## 集群 DNS

集群 DNS 服务由 infra 节点的 DNSMASQ 维护，为每个 [`pg_cluster`](/docs/pgsql/param#pg_cluster) 提供稳定的 FQDN（`<cluster>.<pg_dns_suffix>`）。DNS 记录会指向主库或 VIP，供业务侧、自动化流程与跨集群的数据服务访问，不需要直接关心节点的实时 IP。DNS 依赖部署期写入的库存信息，运行期只在 VIP 或主节点漂移时更新，其上游是 `vip-manager` 与 etcd 中的主节点状态。

DNS 的下游是客户端与第三方服务入口，它也为 HAProxy 等中间层提供统一的目标地址。组件可选；当集群运行在独立网络或业务端直接使用 IP 时可以跳过，但绝大多数生产环境建议启用，以避免硬编码节点地址。

**关键参数**

- [`pg_dns_suffix`](/docs/pgsql/param#pg_dns_suffix)：定义集群 DNS 记录的统一后缀。
- [`pg_dns_target`](/docs/pgsql/param#pg_dns_target)：控制解析目标指向 VIP、主库或显式 IP。

## 主库虚拟 IP（vip-manager）

`vip-manager` 在每个 PG 节点上运行，通过监视 etcd 中由 Patroni 写入的领导者键，把 [`pg_vip_address`](/docs/pgsql/param#pg_vip_address) 绑定到当前主节点上，实现透明的 L2 漂移。它依赖 DCS 的健康状态，并要求目标网络接口可被当前节点控制，从而在故障转移时立即释放并重绑 VIP，保障旧主机不会继续响应。

VIP 的下游包含 DNS、自建客户端、遗留系统等需要固定端点的访问者。该组件可选：只在 `pg_vip_enabled` 为 `true` 且业务需要静态地址时启用。启用后必须保证所有参与节点都具备相同的 VLAN 接入，否则 VIP 无法正确漂移。

**关键参数**

- [`pg_vip_enabled`](/docs/pgsql/param#pg_vip_enabled)：控制是否启用 L2 VIP。
- [`pg_vip_interface`](/docs/pgsql/param#pg_vip_interface)：指定监听和漂移 VIP 的网络接口。
- [`pg_vip_address`](/docs/pgsql/param#pg_vip_address)：定义 VIP IPv4/掩码。
- [`pg_namespace`](/docs/pgsql/param#pg_namespace)：etcd 中的命名空间，Patroni 与 vip-manager 共享。

## 服务入口与流量调度（HAProxy）

HAProxy 安装在 PG 节点（或专用服务节点），统一对外暴露数据库服务端口组：`5433/5434`（读写/只读，通过 Pgbouncer），`5436/5438`（直连主库/离线库），以及 `9101` 管理接口。每个后端池依靠 `patroni` REST API 提供的角色与健康信息做路由判断，并把流量转发到对应实例或连接池。

该组件是整个集群的入口，下游直接面向应用、ETL 与管理工具。可将 `pg_service_provider` 指向专用 HA 节点以承载更高流量，也可在实例本地进行发布。HAProxy 对 VIP 无依赖，但通常与 DNS 和 VIP 联动，打造统一访问口。服务定义由 `pg_default_services` 与 `pg_services` 组合而成，可精细化配置端口、负载均衡策略与目标。

**关键参数**

- [`pg_default_services`](/docs/pgsql/param#pg_default_services)：定义全局默认服务端口、目标与检查方式。
- [`pg_services`](/docs/pgsql/param#pg_services)：为特定集群追加或覆盖业务服务。
- [`pg_service_provider`](/docs/pgsql/param#pg_service_provider)：指定发布服务的 HAProxy 节点组（留空代表本地）。
- [`pg_default_service_dest`](/docs/pgsql/param#pg_default_service_dest)：决定默认服务是转发到 Pgbouncer 还是 Postgres。
- [`pg_weight`](/docs/pgsql/param#pg_weight)：配置单实例在特定服务中的权重。

## 连接池（Pgbouncer）

Pgbouncer 在每个实例上以无状态方式运行，优先通过本地 Unix Socket 连接 PostgreSQL，用于吸收瞬时连接、稳定会话与提供额外指标。Pigsty 默认让生产流量（`5433/5434`）经由 Pgbouncer，只有默认/离线服务绕过它直连 PostgreSQL。Pgbouncer 不依赖 VIP，可与 HAProxy、Patroni 独立伸缩，在 Pgbouncer 停止时 PostgreSQL 仍可提供直连服务。

Pgbouncer 的下游是大量短连接客户端，以及统一入口 HAProxy。它允许基于 `auth_query` 的动态用户加载，并可按需配置 SSL。组件可选，通过 `pgbouncer_enabled` 关闭时，默认服务将直接指向 PostgreSQL，需要相应调整连接数与会话管理策略。

**关键参数**

- [`pgbouncer_enabled`](/docs/pgsql/param#pgbouncer_enabled)：决定是否启用本地连接池。
- [`pgbouncer_port`](/docs/pgsql/param#pgbouncer_port)：监听端口（默认 6432）。
- [`pgbouncer_poolmode`](/docs/pgsql/param#pgbouncer_poolmode)：连接池模式，控制事务或会话级复用。
- [`pgbouncer_auth_query`](/docs/pgsql/param#pgbouncer_auth_query)：是否从 PostgreSQL 动态拉取凭据。
- [`pgbouncer_sslmode`](/docs/pgsql/param#pgbouncer_sslmode)：客户端到连接池的 SSL 策略。
- [`pg_default_service_dest`](/docs/pgsql/param#pg_default_service_dest)：影响默认服务是否经由 Pgbouncer。

## 数据库实例（PostgreSQL）

PostgreSQL 进程是整个模块的核心，默认监听 `5432` 并由 Patroni 托管。以同一 [`pg_cluster`](/docs/pgsql/param#pg_cluster) 在多节点安装 PGSQL 模块，将自动构建基于物理流复制的主从拓扑；`primary/replica/offline` 角色由 [`pg_role`](/docs/pgsql/param#pg_role) 控制，必要时可通过 `pg_instances` 在同一节点运行多实例。实例依赖本地数据盘、操作系统内核调优与 NODE 模块提供的系统服务。

该组件的下游是业务读写流量、pgBackRest、pg_exporter 等服务；上游是 Patroni、Ansible 引导脚本，以及 etcd 中的元数据。可根据 `pg_conf` 模板切换 OLTP/OLAP 配置，并通过 `pg_upstream` 定义级联复制。若使用 citus/gpsql，需进一步设置 `pg_shard` 与 `pg_group`。`pg_hba_rules` 与 `pg_default_hba_rules` 决定访问控制策略。

**关键参数**

- [`pg_mode`](/docs/pgsql/param#pg_mode)：实例运行模式（标准 PG、Citus、MSSQL 兼容等）。
- [`pg_seq`](/docs/pgsql/param#pg_seq)：实例序号，用于锁定复制拓扑与服务权重。
- [`pg_role`](/docs/pgsql/param#pg_role)：定义实例角色（primary/replica/offline）。
- [`pg_instances`](/docs/pgsql/param#pg_instances)：在单节点部署多实例的映射。
- [`pg_upstream`](/docs/pgsql/param#pg_upstream)：级联备库的复制源。
- [`pg_conf`](/docs/pgsql/param#pg_conf)：加载的配置模板，决定资源与连接上限。
- [`pg_hba_rules`](/docs/pgsql/param#pg_hba_rules) / [`pg_default_hba_rules`](/docs/pgsql/param#pg_default_hba_rules)：访问控制列表。

## 高可用控制器（Patroni + etcd）

Patroni 监听 `8008`，接管 PostgreSQL 的启动、配置与健康状态，将领导者、成员信息写入 etcd（命名空间由 [`pg_namespace`](/docs/pgsql/param#pg_namespace) 定义）。它负责自动故障转移、保持复制因子、协调参数，以及提供 REST API 供 HAProxy、监控与管理员查询。Patroni 可启用看门狗强制隔离旧主机，以避免脑裂。

Patroni 的上游是 etcd 集群与系统服务（systemd、Keepalive），下游包括 vip-manager、HAProxy、Pgbackrest 与监控组件。可以通过 `patroni_mode` 切换为 pause/remove 模式，以便维护或删除集群。禁用 Patroni 仅在管理外部 PG 实例时使用。

**关键参数**

- [`patroni_enabled`](/docs/pgsql/param#patroni_enabled)：决定是否由 Patroni 管理 PostgreSQL。
- [`patroni_mode`](/docs/pgsql/param#patroni_mode)：设置运行模式（default/pause/remove）。
- [`patroni_port`](/docs/pgsql/param#patroni_port)：REST API 端口。
- [`patroni_ssl_enabled`](/docs/pgsql/param#patroni_ssl_enabled)：是否为 REST API 启用 SSL。
- [`patroni_watchdog_mode`](/docs/pgsql/param#patroni_watchdog_mode)：看门狗策略。
- [`patroni_username`](/docs/pgsql/param#patroni_username) / [`patroni_password`](/docs/pgsql/param#patroni_password)：访问 REST API 的凭据。

## 备份子系统（pgBackRest）

pgBackRest 在主库上创建本地或远程仓库，用于全量/增量备份与 WAL 归档。它与 PostgreSQL 配合执行控制命令，支持本地磁盘（默认）、MinIO 等多种目标，能够覆盖 PITR、备份链条验证与远程拉起。上游是主库的数据与归档流，下游是对象存储或本地备份盘，以及 `pgbackrest_exporter` 提供的可观测性。

组件可择时运行，通常在初始化完成后立即发起一次全量备份；也支持关闭（实验环境或外部备份系统）。启用 `minio` 仓库时需要可达的对象存储服务与凭据。恢复过程与 Patroni 集成，可通过 `pgbackrest` 命令将副本引导为新的主库或备库。

**关键参数**

- [`pgbackrest_enabled`](/docs/pgsql/param#pgbackrest_enabled)：控制是否安装与激活备份子系统。
- [`pgbackrest_method`](/docs/pgsql/param#pgbackrest_method)：仓库类型（local/minio/自定义）。
- [`pgbackrest_repo`](/docs/pgsql/param#pgbackrest_repo)：仓库定义与访问凭据。
- [`pgbackrest_init_backup`](/docs/pgsql/param#pgbackrest_init_backup)：初始化后是否自动执行全量备份。
- [`pgbackrest_clean`](/docs/pgsql/param#pgbackrest_clean)：初始化时是否清理旧备份目录。
- [`pgbackrest_log_dir`](/docs/pgsql/param#pgbackrest_log_dir)：日志输出路径。
- [`pg_fs_bkup`](/docs/pgsql/param#pg_fs_bkup)：本地备份盘的挂载点。

## PostgreSQL 指标（pg_exporter）

pg_exporter 运行在 PG 节点上，使用本地 socket 登录，导出覆盖会话、缓冲命中、复制延迟、事务率等指标供 infra 节点上的 Prometheus 抓取。它与 PostgreSQL 紧耦合，重启 PostgreSQL 时会自动重连，对外监听 `9630`（默认）。Exporter 不依赖 VIP，与 HA 拓扑解耦。

**关键参数**

- [`pg_exporter_enabled`](/docs/pgsql/param#pg_exporter_enabled)：启用或关闭 exporter。
- [`pg_exporter_port`](/docs/pgsql/param#pg_exporter_port)：HTTP 监听端口。
- [`pg_exporter_config`](/docs/pgsql/param#pg_exporter_config)：采集配置模板。
- [`pg_exporter_cache_ttls`](/docs/pgsql/param#pg_exporter_cache_ttls)：各采集器的缓存 TTL。

## 连接池指标（pgbouncer_exporter）

pgbouncer_exporter 启动在节点上，读取 Pgbouncer 的统计视图，提供连接池利用率、等待队列与命中率指标。它依赖 Pgbouncer 的 admin 用户，并通过独立端口暴露给 Prometheus。若禁用 Pgbouncer，本组件应同时关闭。

**关键参数**

- [`pgbouncer_exporter_enabled`](/docs/pgsql/param#pgbouncer_exporter_enabled)：控制是否启用导出器。
- [`pgbouncer_exporter_port`](/docs/pgsql/param#pgbouncer_exporter_port)：监听端口（默认 9631）。
- [`pgbouncer_exporter_url`](/docs/pgsql/param#pgbouncer_exporter_url)：覆盖自动生成的 DSN。
- [`pgbouncer_exporter_options`](/docs/pgsql/param#pgbouncer_exporter_options)：可追加命令行参数。

## 备份指标（pgbackrest_exporter）

pgbackrest_exporter 解析该节点的 pgBackRest 状态，生成最近备份时间、大小、类型等指标。Prometheus 通过 `9854`（默认）采集这些指标，结合告警策略即可快速发现备份过期或失败。组件依赖 pgBackRest 元数据目录，关闭备份系统时也应禁用它。

**关键参数**

- [`pgbackrest_exporter_enabled`](/docs/pgsql/param#pgbackrest_exporter_enabled)：是否收集备份指标。
- [`pgbackrest_exporter_port`](/docs/pgsql/param#pgbackrest_exporter_port)：HTTP 监听端口。
- [`pgbackrest_exporter_options`](/docs/pgsql/param#pgbackrest_exporter_options)：额外命令行参数。

## 日志采集（Vector）

Vector 常驻在节点上，跟踪 PostgreSQL、Pgbouncer、Patroni 与 pgBackRest 的日志目录，

**关键参数（位于 [`NODE`](/docs/node) 模块的 VECTOR 组件）**


[![pigsty-arch](/img/pigsty/arch.png)](/docs/infra/)
