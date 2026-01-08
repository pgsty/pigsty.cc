---
title: 配置参数
weight: 213
description: 使用配置参数对 Pigsty 进行精细化定制
icon: fa-solid fa-code
module: [PIGSTY]
categories: [概念]
---

在 **配置清单** 中，您可以使用各种参数对 Pigsty 进行精细化定制。这些参数涵盖了从基础设施设置到数据库配置的各个方面。


------

## 参数列表

Pigsty 提供了约 **380+** 个配置参数，分布在 8 个默认模块中，用于精细控制系统的各个方面，完整列表见 [**参考-参数列表**](/docs/ref/param) 。

| 模块                               | 参数组 | 参数数 | 说明                                |
|:---------------------------------|:---:|:---:|:----------------------------------|
| [**PGSQL**](/docs/pgsql/param)   |  9  | 123 | PostgreSQL 数据库集群的核心配置             |
| [**INFRA**](/docs/infra/param)   | 10  | 82  | 基础设施组件：软件源、Nginx、DNS、监控、Grafana 等 |
| [**NODE**](/docs/node/param)     | 11  | 83  | 主机节点调优：身份、DNS、包、调优、安全、管理员、时间、VIP等 |
| [**ETCD**](/docs/etcd/param)     |  2  | 13  | 分布式配置存储与服务发现                      |
| [**REDIS**](/docs/redis/param)   |  1  | 21  | Redis 缓存与数据结构服务器                  |
| [**MINIO**](/docs/minio/param)   |  2  | 21  | S3 兼容对象存储服务                       |
| [**FERRET**](/docs/ferret/param) |  1  |  9  | MongoDB 兼容数据库 FerretDB            |
| [**DOCKER**](/docs/docker/param) |  1  |  8  | Docker 容器引擎                       |
{.stretch-last}


------

## 参数形式

**参数** 是用于描述实体的 **键值对**。**键**（Key）是字符串，**值**（Value）可以是五种类型之一：布尔值、字符串、数字、数组或对象。

```yaml
all:                            # <------- 顶级对象：all
  vars: 
    admin_ip: 10.10.10.10       # <------- 全局配置参数
  children:
    pg-meta:                    # <------- pg-meta 分组
      vars:
        pg_cluster: pg-meta     # <------- 集群级别参数
      hosts:
        10.10.10.10:            # <------- 主机节点 IP
          pg_seq: 1
          pg_role: primary      # <------- 实例级别参数
  
```

------

## 参数优先级

参数可以在不同级别设置，具有以下优先级：

| 级别        | 位置                         | 描述           | 优先级    |
|:----------|:---------------------------|:-------------|:-------|
| **命令行**   | `-e` 命令行参数                 | 通过命令行传入      | 最高 (5) |
| **主机/实例** | `<group>.hosts.<host>`     | 特定于单个主机的参数   | 较高 (4) |
| **分组/集群** | `<group>.vars`             | 组/集群中主机共享的参数 | 中等 (3) |
| **全局**    | `all.vars`                 | 所有主机共享的参数    | 较低 (2) |
| **默认**    | `<roles>/default/main.yml` | 角色实现默认值      | 最低 (1) |

以下是关于参数优先级的一些示例：

- 执行剧本时，使用命令行参数 [**`-e grafana_clean=true`**](/docs/infra/param#grafana_clean) 来抹除 Grafana 数据
- 使用主机变量上的实例级别参数 `pg_role` 覆盖 pg 实例角色
- 使用组变量上的集群级别参数 `pg_cluster` 覆盖 pg 集群名称。
- 使用全局变量上的全局参数 `node_ntp_servers` 指定全局 NTP 服务器
- 如果没有设置 [**`pg_version`**](/docs/pgsql/param#pg_version)，Pigsty 将使用 [**`pgsql`**](https://github.com/pgsty/pigsty/blob/main/roles/pgsql/defaults/main.yml#L42) 角色实现的默认值（默认为 `18`）

除了**身份参数** 外，每个参数都有适当的默认值，因此无需显式设置。


------

## 身份参数

身份参数是特殊的参数，它们会作为实体的 ID 标识符，因此 **没有默认值**，必须 **显式设置**。

| 模块                                        | 身份参数                                             |
|:------------------------------------------|:-------------------------------------------------|
| [**`PGSQL`**](/docs/pgsql/param#pg_id)    | `pg_cluster`, `pg_seq`, `pg_role`, ...           |
| [**`NODE`**](/docs/node/param#node_id)    | `nodename`, `node_cluster`                       |
| [**`ETCD`**](/docs/etcd/param#etcd)       | `etcd_cluster`, `etcd_seq`                       |
| [**`MINIO`**](/docs/minio/param#minio)    | `minio_cluster`, `minio_seq`                     |
| [**`REDIS`**](/docs/redis/param/)         | `redis_cluster`, `redis_node`, `redis_instances` |
| [**`INFRA`**](/docs/infra/param#infra_id) | `infra_seq`                                      |

例外是，[**`etcd_cluster`**](/docs/etcd/param#etcd_cluster) 与 [**`minio_cluster`**](/docs/minio/param#minio_cluster) 有默认值。
它假设每套部署只有一套 etcd 集群用于 DCS，和一套可选 MinIO 集群用于集中备份存储，因此为其分配了默认的集群名称 `etcd` 与 `minio`。
但您依然可以使用其他名称部署多套 etcd 或 MinIO 集群。