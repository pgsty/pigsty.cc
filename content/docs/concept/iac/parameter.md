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

按照当前源码与参数参考页对账，Pigsty 的 10 个正式模块共有 **373** 个公开参数，用于精细控制系统的各个方面；完整列表见 [**参考-参数列表**](/docs/ref/param)。原生 MySQL 8.4 试点模块的 13 个公开参数单列，不计入该合计。

| 模块                               | 参数组 | 参数数 | 说明                                   |
|:---------------------------------|:---:|:---:|:-------------------------------------|
| [**PGSQL**](/docs/pgsql/param)   |  9  | 124 | PostgreSQL 高可用集群配置                   |
| [**INFRA**](/docs/infra/param)   | 10  | 73  | 软件仓库与 Victoria 可观测基础设施               |
| [**NODE**](/docs/node/param)     | 11  | 73  | 节点初始化、系统调优与运维基线                      |
| [**ETCD**](/docs/etcd/param)     |  2  | 13  | ETCD 集群与移除保护参数                       |
| [**MINIO**](/docs/minio/param)   |  2  | 22  | Silo 部署、观测与移除参数                      |
| [**REDIS**](/docs/redis/param)   |  2  | 22  | Redis/Valkey 部署与移除参数                 |
| [**DOCKER**](/docs/docker/param) |  1  |  8  | Docker 引擎参数                          |
| [**JUICE**](/docs/juice/param)   |  1  |  2  | JuiceFS 实例与缓存参数                      |
| [**VIBE**](/docs/vibe/param)     |  1  | 18  | Code/Jupyter/Node.js/Claude/Codex 配置 |
| [**KAFKA**](/docs/kafka/param)   |  2  | 18  | Kafka 部署参数与移除保护参数                    |
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

除了 **身份参数** 外，每个参数都有适当的默认值，因此无需显式设置。


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

例外是 [**`etcd_cluster`**](/docs/etcd/param#etcd_cluster) 仍有默认值 `etcd`。
对象存储的 [**`minio_cluster`**](/docs/minio/param#minio_cluster) 已不再提供默认值，必须在每个对象存储集群的变量中显式定义；
不要放在 `all.vars` 中，否则会把所有主机标记为 MINIO 模块成员。
