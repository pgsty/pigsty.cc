---
title: 集群配置
weight: 3810
description: 根据需求场景选择合适的 Redis 模式，并通过配置清单表达您的需求
icon: fa-solid fa-code
module: [REDIS]
categories: [参考]
---


-------

## 概念

Redis的实体概念模型与 [PostgreSQL](/docs/concept/model/pgsql#具体样例) 几乎相同，同样包括 **集群（Cluster）** 与 **实例（Instance）** 的概念。注意这里的Cluster指的不是Redis原生集群方案中的集群。

REDIS模块与PGSQL模块核心的区别在于，Redis通常采用 **单机多实例** 部署，而不是 PostgreSQL 的 1:1 部署：一个物理/虚拟机节点上通常会部署 **多个** Redis实例，以充分利用多核CPU。因此 [配置](/docs/redis/config/) 和 [管理](/docs/redis/admin/) Redis实例的方式与PGSQL稍有不同。

在Pigsty管理的Redis中，节点完全隶属于集群，即目前尚不允许在一个节点上部署两个不同集群的Redis实例，但这并不影响您在一个节点上部署多个独立 Redis 主从实例。当然这样也会有一些局限性，例如在这种情况下您就无法为同一个节点上的不同实例指定不同的密码了。


-------

## 身份参数

Redis [**身份参数**](/docs/redis/config#身份参数) 是定义Redis集群时必须提供的信息，包括：

|                              名称                               |     属性      |  说明  |            例子             |
|:-------------------------------------------------------------:|:-----------:|:----:|:-------------------------:|
|   [`redis_cluster`](/docs/redis/param#redis_cluster)   | **必选**，集群级别 | 集群名  |       `redis-test`        |
|      [`redis_node`](/docs/redis/param#redis_node)      | **必选**，节点级别 | 节点号  |          `1`,`2`          |
| [`redis_instances`](/docs/redis/param#redis_instances) | **必选**，节点级别 | 实例定义 | `{ 6001 : {} ,6002 : {}}` |
{.full-width}

- [`redis_cluster`](/docs/redis/param#redis_cluster)：Redis集群名称，作为集群资源的顶层命名空间。
- [`redis_node`](/docs/redis/param#redis_node)：Redis节点标号，整数，在集群内唯一，用于区分不同节点。
- [`redis_instances`](/docs/redis/param#redis_instances)：JSON对象，Key为实例端口号，Value为包含实例其他配置JSON对象。


-------- 

## 工作模式

Redis有三种不同的工作模式，由 [`redis_mode`](/docs/redis/param#redis_mode) 参数指定：

* `standalone`：默认的独立主从模式
* `cluster`：Redis原生分布式集群模式
* `sentinel`：哨兵模式，可以为主从模式的 Redis 提供高可用能力

下面给出了三种Redis集群的定义样例：

* 一个1节点，一主一从的 Redis Standalone 集群：`redis-ms`
* 一个1节点，3实例的Redis Sentinel集群：`redis-sentinel`
* 一个2节点，6实例的 Redis Cluster集群： `redis-cluster`

```yaml
redis-ms: # redis 经典主从集群
  hosts: { 10.10.10.10: { redis_node: 1 , redis_instances: { 6379: { }, 6380: { replica_of: '10.10.10.10 6379' } } } }
  vars: { redis_cluster: redis-ms ,redis_password: 'redis.ms' ,redis_max_memory: 64MB }

redis-meta: # redis 哨兵 x 3
  hosts: { 10.10.10.11: { redis_node: 1 , redis_instances: { 26379: { } ,26380: { } ,26381: { } } } }
  vars:
    redis_cluster: redis-meta
    redis_password: 'redis.meta'
    redis_mode: sentinel
    redis_max_memory: 16MB
    redis_sentinel_monitor: # primary list for redis sentinel, use cls as name, primary ip:port
      - { name: redis-ms, host: 10.10.10.10, port: 6379 ,password: redis.ms, quorum: 2 }

redis-test: # redis 原生集群： 3主 x 3从
  hosts:
    10.10.10.12: { redis_node: 1 ,redis_instances: { 6379: { } ,6380: { } ,6381: { } } }
    10.10.10.13: { redis_node: 2 ,redis_instances: { 6379: { } ,6380: { } ,6381: { } } }
  vars: { redis_cluster: redis-test ,redis_password: 'redis.test' ,redis_mode: cluster, redis_max_memory: 32MB }
```


--------

## 局限性

* 一个节点只能属于一个 Redis 集群，这意味着您不能将一个节点同时分配给两个不同的Redis集群。
* 在每个 Redis 节点上，您需要为 Redis实例 分配唯一的端口号，避免端口冲突。
* 通常同一个 Reids 集群会使用同一个密码，但一个 Redis节点上的多个 Redis 实例无法设置不同的密码（因为 redis_exporter 只允许使用一个密码）
* Redis Cluster自带高可用，而Redis主从的高可用需要在 Sentinel 中额外进行手工配置：因为我们不知道您是否会部署 Sentinel。
* 好在配置 Redis 主从实例的高可用非常简单，可以通过Sentinel进行配置，详情请参考 [管理-设置Redis主从高可用](/docs/redis/admin#设置redis主从高可用)


--------

## 典型配置示例

以下是一些常见场景的 Redis 配置示例：

### 缓存集群（纯内存）

适用于对数据持久性要求不高的纯缓存场景：

```yaml
redis-cache:
  hosts:
    10.10.10.10: { redis_node: 1 , redis_instances: { 6379: { }, 6380: { } } }
    10.10.10.11: { redis_node: 2 , redis_instances: { 6379: { }, 6380: { } } }
  vars:
    redis_cluster: redis-cache
    redis_password: 'cache.password'
    redis_max_memory: 2GB
    redis_mem_policy: allkeys-lru    # 内存满时淘汰最近最少使用的Key
    redis_rdb_save: []               # 禁用 RDB 持久化
    redis_aof_enabled: false         # 禁用 AOF 持久化
```

### Session 存储集群

适用于 Web 应用 Session 存储，需要一定的持久性：

```yaml
redis-session:
  hosts:
    10.10.10.10: { redis_node: 1 , redis_instances: { 6379: { }, 6380: { replica_of: '10.10.10.10 6379' } } }
  vars:
    redis_cluster: redis-session
    redis_password: 'session.password'
    redis_max_memory: 1GB
    redis_mem_policy: volatile-lru   # 只淘汰设置了过期时间的Key
    redis_rdb_save: ['300 1']        # 5分钟至少1个变更时保存
    redis_aof_enabled: false
```

### 消息队列集群

适用于简单的消息队列场景，需要较高的数据可靠性：

```yaml
redis-queue:
  hosts:
    10.10.10.10: { redis_node: 1 , redis_instances: { 6379: { }, 6380: { replica_of: '10.10.10.10 6379' } } }
  vars:
    redis_cluster: redis-queue
    redis_password: 'queue.password'
    redis_max_memory: 4GB
    redis_mem_policy: noeviction     # 内存满时拒绝写入，不淘汰数据
    redis_rdb_save: ['60 1']         # 1分钟至少1个变更时保存
    redis_aof_enabled: true          # 启用 AOF 获得更好的持久性
```

### 高可用主从集群

带有 Sentinel 自动故障转移的主从集群：

```yaml
# 主从集群
redis-ha:
  hosts:
    10.10.10.10: { redis_node: 1 , redis_instances: { 6379: { } } }                              # 主库
    10.10.10.11: { redis_node: 2 , redis_instances: { 6379: { replica_of: '10.10.10.10 6379' } } } # 从库1
    10.10.10.12: { redis_node: 3 , redis_instances: { 6379: { replica_of: '10.10.10.10 6379' } } } # 从库2
  vars:
    redis_cluster: redis-ha
    redis_password: 'ha.password'
    redis_max_memory: 8GB

# 哨兵集群（管理上述主从集群）
redis-sentinel:
  hosts:
    10.10.10.10: { redis_node: 1 , redis_instances: { 26379: { } } }
    10.10.10.11: { redis_node: 2 , redis_instances: { 26379: { } } }
    10.10.10.12: { redis_node: 3 , redis_instances: { 26379: { } } }
  vars:
    redis_cluster: redis-sentinel
    redis_password: 'sentinel.password'
    redis_mode: sentinel
    redis_max_memory: 64MB
    redis_sentinel_monitor:
      - { name: redis-ha, host: 10.10.10.10, port: 6379, password: 'ha.password', quorum: 2 }
```

### 大容量原生集群

适用于大数据量、高吞吐场景的原生分布式集群：

```yaml
redis-cluster:
  hosts:
    10.10.10.10: { redis_node: 1 , redis_instances: { 6379: { }, 6380: { }, 6381: { } } }
    10.10.10.11: { redis_node: 2 , redis_instances: { 6379: { }, 6380: { }, 6381: { } } }
    10.10.10.12: { redis_node: 3 , redis_instances: { 6379: { }, 6380: { }, 6381: { } } }
    10.10.10.13: { redis_node: 4 , redis_instances: { 6379: { }, 6380: { }, 6381: { } } }
  vars:
    redis_cluster: redis-cluster
    redis_password: 'cluster.password'
    redis_mode: cluster
    redis_cluster_replicas: 1        # 每个主分片1个从库
    redis_max_memory: 16GB           # 每个实例最大内存
    redis_rdb_save: ['900 1']
    redis_aof_enabled: false

# 这将创建一个 6主6从 的原生集群
# 总容量约 96GB (6 * 16GB)
```

### 安全加固配置

生产环境推荐的安全配置：

```yaml
redis-secure:
  hosts:
    10.10.10.10: { redis_node: 1 , redis_instances: { 6379: { } } }
  vars:
    redis_cluster: redis-secure
    redis_password: 'StrongP@ssw0rd!'  # 使用强密码
    redis_bind_address: ''             # 绑定到内网IP而非 0.0.0.0
    redis_max_memory: 4GB
    redis_rename_commands:             # 重命名危险命令
      FLUSHDB: 'DANGEROUS_FLUSHDB'
      FLUSHALL: 'DANGEROUS_FLUSHALL'
      DEBUG: ''                        # 禁用命令
      CONFIG: 'ADMIN_CONFIG'
```


