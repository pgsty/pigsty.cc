---
title: 节点
linkTitle: 节点
weight: 161
description: 节点（node）是对硬件资源/操作系统的抽象，可以是物理机，裸金属、虚拟机、或者容器与 pods。
icon: fa-solid fa-server
categories: [概念]
---


**节点（node）** 是对硬件资源/操作系统的抽象，可以是物理机，裸金属、虚拟机、或者容器与 pods。

只要装着 Linux 操作系统（以及 systemd 守护进程），能使用 CPU/内存/磁盘/网络 等标准资源，即可视作节点。

节点上可以安装 [**模块**](/docs/ref/module)，Pigsty 中存在几种不同类型节点，主要区别就在于安装了不同的模块。

|            类型            | 说明                                     |
|:------------------------:|:---------------------------------------|
|    [**普通节点**](#普通节点)     | 被 Pigsty 管理的节点                         |
| [**ADMIN 节点**](#admin节点) | 使用 Ansible 发出管理指令的节点                   |
| [**INFRA 节点**](#infra节点) | 安装 [**INFRA**](/docs/infra/) 模块的基础设施节点 |
|  [**ETCD 节点**](#etcd节点)  | 安装 [**ETCD**](/docs/etcd/) 模块的分布式共识节点  |
| [**MINIO 节点**](#minio节点) | 安装 [**MINIO**](/docs/minio/) 模块的对象存储节点 |
| [**PGSQL 节点**](#pgsql节点) | 安装 [**PGSQL**](/docs/pgsql/) 模块的数据库节点  |
|            ……            | 安装了其他各类模块的节点……                         |
{.full-width}

在 [**单机部署**](/docs/setup/install) Pigsty 时，多者合而为一，当前节点将同时作为普通节点，管理节点、基础设施节点、ETCD 节点，以及数据库节点。


------

## 普通节点

使用 Pigsty 管理节点，可在其上安装模块。[**`node.yml`**](/docs/node/playbook#nodeyml) 剧本将调整节点至所需状态。
普通节点上可能会运行以下服务：

|            组件             |   端口   | 描述                   | 状态      |
|:-------------------------:|:------:|----------------------|---------|
|    **`node_exporter`**    | `9100` | 节点监控指标导出器            | ✅ 默认启用  |
|       **`haproxy`**       | `9101` | HAProxy 负载均衡器（管理端口）  | ✅ 默认启用  |
|       **`vector`**        | `9598` | 日志收集代理               | ✅ 默认启用  |
|       **`docker`**        | `9323` | 启用容器支持               | ⚠️ 按需启用 |
|     **`keepalived`**      | `n/a`  | 管理节点集群 L2 VIP        | ⚠️ 按需启用 |
| **`keepalived_exporter`** | `9650` | 监控 Keepalived 状态     | ⚠️ 按需启用 |
{.full-width}

这里，`node_exporter` 会向监控系统暴露主机上的各类监控指标，`vector` 会向日志收集系统发送日志，`haproxy` 则提供负载均衡功能，对外暴露服务。
这三项服务默认开启。而 [**Docker**](/docs/docker)，`keepalived` 及 `keepalived_exporter` 这三项服务作为可选项，可按需启用。


------

## ADMIN节点

一套 Pigsty 部署中有且只有一个 **管理节点**，管理节点是执行 Ansible 剧本，发起控制/部署命令的节点。

该节点拥有对所有其他节点的 `ssh/sudo` 访问权限。管理节点的安全至关重要，请确保它的访问受到严格控制。

在 [**单机安装**](/docs/setup/install) 的 [**配置过程**](/docs/concept/iac/configure) 中，当前安装节点就是管理节点。
但也有其他的可能，例如，如果你的笔记本可以 ssh 访问所有被管理节点，并且安装了 Ansible，那么在这种情况下，
您的笔记本电脑就可以作为一个管理节点 —— 尽管这对于生产环境来说不太合适。

例如，您使用自己的笔记本电脑，管理一台云端上部署了 Pigsty 的虚拟机，这时候，您的笔记本电脑就是管理节点。

在严肃的生产环境中，管理节点通常是 1-2 台 DBA 专用的 **管控机**。在资源受限的环境中，则通常会复用 [**INFRA节点**](#infra节点) 作为管理节点。
因为所有的 INFRA 节点上都默认安装了 Ansible，可以作为额外的备用的管理节点。


----------------

## INFRA节点

一套 Pigsty 部署可能有 **1** 个或多个 INFRA 节点，大型生产环境可能有 **2-3** 个。

配置清单中的 **`infra`** 分组指定哪些节点是 INFRA节点，这些节点上会部署 [**INFRA**](/docs/infra/) 模块，包含下列组件：

|         组件          |    端口    | 描述                 |
|:-------------------:|:--------:|--------------------|
|       `nginx`       | `80/443` | Web 图形界面，本地软件仓库    |
|      `grafana`      |  `3000`  | 可视化平台              |
|  `victoriaMetrics`  |  `8428`  | 时序数据库（收存监控指标）      |
|   `victoriaLogs`    |  `9428`  | 日志收集服务器            |
|  `victoriaTraces`   | `10428`  | 链路追踪收集服务器          |
|      `vmalert`      |  `8880`  | 告警与衍生指标计算规则        |
|   `alertmanager`    |  `9093`  | 告警聚合分发/屏蔽管理        |
| `blackbox_exporter` |  `9115`  | 黑盒探测，ping 节点 / vip |
|      `dnsmasq`      |   `53`   | 内部 DNS 域名解析        |
|      `chronyd`      |  `123`   | NTP 时间服务器          |
|      `ansible`      |   `-`    | 执行剧本，发起管理          |
{.full-width}

其中，Nginx 作为当前模块的入口，提供 Web 图形界面和本地软件仓库服务。
如果你部署多个 INFRA 节点，每个 Infra 节点上的服务是相互独立的。
但你确实可以从任意一个 Infra 节点上的 Grafana 访问所有的监控数据源。

请注意，[**INFRA**](/docs/infra) 模块受到 Grafana 传染，使用 [**AGPLv3**](/docs/about/license#pigsty-特殊模块) 许可证开源。
但作为例外，如果你只使用 Nginx / Victoria 全家桶等组件，而不使用 Grafana，实际上使用的是 [**Apache-2.0**](/docs/about/license#pigsty-许可证) 许可证。


----------------

## ETCD节点

[**ETCD**](/docs/etcd) 模块为 PostgreSQL 高可用提供分布式共识服务（DCS）。

[**配置清单**](/docs/concept/iac/inventory) 中的 **`etcd`** 分组指定哪些节点是 ETCD 节点，ETCD 节点上运行着 etcd 服务器，监听以下两个端口：

|     组件      |   端口   | 描述                       |
|:-----------:|:------:|--------------------------|
|   `etcd`    | `2379` | ETCD 分布式键值存储（客户端端口）      |
|   `etcd`    | `2380` | ETCD 集群 Peer 通信端口        |
{.full-width}


----------------

## MINIO节点

[**MINIOn**](/docs/minio) 模块为 PostgreSQL 提供了一个可选的 [**备份存储仓库**](/docs/pgsql/backup/repository)。

配置清单中的 **`minio`** 分组指定哪些节点是 MinIO 节点，这些节点上会运行 MinIO 服务器，监听以下端口：

|    组件     |   端口   | 描述                  |
|:---------:|:------:|---------------------|
|  `minio`  | `9000` | MinIO S3 API 服务端口   |
|  `minio`  | `9001` | MinIO 管理控制台端口       |
{.full-width}



----------------

## PGSQL节点

安装了 [**PGSQL**](/docs/pgsql/) 模块的节点被称为 PGSQL 节点。节点与 PostgreSQL 实例为 1:1 部署，也就是每个节点上只运行一个 PG 实例。

PGSQL 节点可从相应 PostgreSQL 实例借用 **身份** —— 由 [`node_id_from_pg`](/docs/node/param/#node_id_from_pg) 控制，默认为 `true`，即节点名会被设置为 PG 实例名。

PGSQL节点在 [**普通节点**](#普通节点) 的基础上，还会额外运行以下组件：

|                组件                |   端口   | 描述                                     | 状态      |
|:--------------------------------:|:------:|----------------------------------------|---------|
|          **`postgres`**          | `5432` | PostgreSQL 数据库服务器                      | ✅ 默认启用  |
|         **`pgbouncer`**          | `6432` | Pgbouncer 连接池                          | ✅ 默认启用  |
|          **`patroni`**           | `8008` | Patroni 高可用管理组件                        | ✅ 默认启用  |
|        **`pg_exporter`**         | `9630` | Postgres 监控指标导出器                       | ✅ 默认启用  |
|     **`pgbouncer_exporter`**     | `9631` | PGBouncer 监控指标导出器                      | ✅ 默认启用  |
|    **`pgbackrest_exporter`**     | `9854` | Pgbackrest 监控指标导出器                     | ✅ 默认启用  |
|        **`vip-manager`**         | `n/a`  | 将 L2 VIP 绑定在集群主库节点上                    | ⚠️ 按需启用 |
|  **`{{ pg_cluster }}-primary`**  | `5433` | 通过 `haproxy` 对外暴露数据库服务：主连接池：读/写服务      | ✅ 默认启用  |
|  **`{{ pg_cluster }}-replica`**  | `5434` | 通过 `haproxy` 对外暴露数据库服务：副本连接池：只读服务      | ✅ 默认启用  |
|  **`{{ pg_cluster }}-default`**  | `5436` | 通过 `haproxy` 对外暴露数据库服务：主直连服务           | ✅ 默认启用  |
|  **`{{ pg_cluster }}-offline`**  | `5438` | 通过 `haproxy` 对外暴露数据库服务：离线直连：离线读服务      | ✅ 默认启用  |
| **`{{ pg_cluster }}-<service>`** | `543x` | 通过 `haproxy` 对外暴露数据库服务：PostgreSQL 定制服务 | ⚠️按需定制  |
{.full-width}

其中，`vip-manager` 只有当用户配置了 **PG VIP** 时才会启用。
在 [**`pg_services`**](/docs/pgsql/service) 中可以定义更多的 [**自定义服务**](/docs/pgsql/service#定义服务)，这些服务会被 `haproxy` 对外暴露，并使用更多的服务端口。

