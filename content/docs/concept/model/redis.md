---
title: REDIS 集群模型
weight: 1104
description: 介绍 Pigsty 中 Redis 集群的实体-关系模型，E-R 关系图，实体释义与命名规范。
icon: fa-solid fa-layer-group
module: [REDIS]
categories: [概念]
---


Redis 模块在生产环境中以**集群**的形式组织，这些**集群**是由一组 Redis **实例**组成的**逻辑实体**，部署在一个或多个**节点**上。

每个集群都是一个**自治**的高性能缓存/存储单元，由至少一个 **Redis 实例** 组成，通过端口向外暴露服务能力。

在 Pigsty 的 Redis 模块中有三种核心实体：

- **集群**（Cluster）：自治的 Redis 服务单元，用作其他实体的顶级命名空间。
- **实例**（Instance）：单个 Redis 服务器进程，在节点上的特定端口运行。
- **节点**（Node）：运行 Linux + Systemd 环境的硬件资源抽象，可以承载多个 Redis 实例，隐含式声明。

与 PostgreSQL 不同，Redis 采用 **单机多实例** 的部署模型：一个物理/虚拟机节点上通常会部署 **多个** Redis 实例，
以充分利用多核 CPU。因此，节点与实例是 **1:N** 的关系。此外，生产中通常不建议设置单个内存规模大于 12GB 的 Redis 实例。


----------------

## 工作模式

Redis 有三种不同的工作模式，由 [**`redis_mode`**](/docs/redis/param#redis_mode) 参数指定：

|          模式           |      代号      | 说明                      | 高可用机制           |
|:---------------------:|:------------:|:------------------------|:----------------|
|   [**主从模式**](#主从集群)   | `standalone` | 经典主从复制，**默认模式**         | 需配合 Sentinel 实现 |
|   [**哨兵模式**](#哨兵集群)   |  `sentinel`  | 为主从模式提供高可用监控与自动故障转移     | 本身的多节点仲裁        |
| [**原生集群模式**](#原生集群) |  `cluster`   | Redis 原生分布式集群，无需哨兵即可高可用 | 内置自动故障转移        |
{.full-width}

- **主从模式**：默认模式，通过 `replica_of` 参数设置主从复制关系。需要额外的 Sentinel 集群提供高可用。
- **哨兵模式**：不存储业务数据，专门用于监控主从模式的 Redis 集群，实现自动故障转移，本身多节点即可高可用。
- **原生集群模式**：数据自动分片到多个主节点，每个主节点可以有多个从节点，内置高可用能力，无需哨兵支持。



----------------

## 具体样例

让我们来看三种模式的具体例子：

### 主从集群

一个节点上部署一主一从的经典主从集群：

```yaml
redis-ms:
  hosts:
    10.10.10.10:
      redis_node: 1
      redis_instances:
        6379: { }
        6380: { replica_of: '10.10.10.10 6379' }
  vars:
    redis_cluster: redis-ms
    redis_password: 'redis.ms'
    redis_max_memory: 64MB
```

| <span class="text-secondary">**集群**</span> | <span class="text-secondary">**Cluster**</span> |
|:------------------------------------------:|-------------------------------------------------|
|               **`redis-ms`**               | Redis 主从集群                                      |
|  <span class="text-danger">**节点**</span>   | <span class="text-danger">**Nodes**</span>      |
|              **`redis-ms-1`**              | `10.10.10.10`  1 号节点，承载 2 个实例                   |
|  <span class="text-success">**实例**</span>  | <span class="text-success">**Instance**</span>  |
|           **`redis-ms-1-6379`**            | 主库实例，监听 6379 端口                                 |
|           **`redis-ms-1-6380`**            | 从库实例，监听 6380 端口，复制自 6379                        |
{.full-width}


### 哨兵集群

一个节点上部署三个哨兵实例，用于监控主从集群。哨兵集群通过 [**`redis_sentinel_monitor`**](/docs/redis/param#redis_sentinel_monitor) 参数指定要监控的主从集群列表：

```yaml
redis-sentinel:
  hosts:
    10.10.10.11:
      redis_node: 1
      redis_instances: { 26379: {}, 26380: {}, 26381: {} }
  vars:
    redis_cluster: redis-sentinel
    redis_password: 'redis.sentinel'
    redis_mode: sentinel
    redis_max_memory: 16MB
    redis_sentinel_monitor:
      - { name: redis-ms, host: 10.10.10.10, port: 6379, password: redis.ms, quorum: 2 }
```


### 原生集群

下面的配置片段定义了由两个节点，六个实例组成的 Redis 原生分布式集群（最小规格，3主3从）：

```yaml
redis-test:
  hosts:
    10.10.10.12: { redis_node: 1, redis_instances: { 6379: {}, 6380: {}, 6381: {} } }
    10.10.10.13: { redis_node: 2, redis_instances: { 6379: {}, 6380: {}, 6381: {} } }
  vars:
    redis_cluster: redis-test
    redis_password: 'redis.test'
    redis_mode: cluster
    redis_max_memory: 32MB
```

该配置将创建一个 **3 主 3 从** 的原生 Redis 集群。

| <span class="text-secondary">**集群**</span> | <span class="text-secondary">**Cluster**</span> |
|:------------------------------------------:|-------------------------------------------------|
|              **`redis-test`**              | Redis 原生集群（3 主 3 从）                             |
|  <span class="text-success">**实例**</span>  | <span class="text-success">**Instance**</span>  |
|          **`redis-test-1-6379`**           | 节点 1 上的实例，监听 6379 端口                            |
|      **`redis-test-1-6380`**               | 节点 1 上的实例，监听 6380 端口                            |
|          **`redis-test-1-6381`**           | 节点 1 上的实例，监听 6381 端口                            |
|          **`redis-test-2-6379`**           | 节点 2 上的实例，监听 6379 端口                            |
|          **`redis-test-2-6380`**           | 节点 2 上的实例，监听 6380 端口                            |
|          **`redis-test-2-6381`**           | 节点 2 上的实例，监听 6381 端口                            |
|  <span class="text-danger">**节点**</span>   | <span class="text-danger">**Nodes**</span>      |
|             **`redis-test-1`**             | `10.10.10.12`  1 号节点，承载 3 个实例                   |
|             **`redis-test-2`**             | `10.10.10.13`  2 号节点，承载 3 个实例                   |
{.full-width}




----------------

## 身份参数

Pigsty 使用 [**`REDIS`**](/docs/redis/param#redis) 参数组为 Redis 模块的每个实体赋予确定的身份。以下三项为必选参数：

| 参数                                                         |    类型    |  级别  | 说明                 | 形式                              |
|:-----------------------------------------------------------|:--------:|:----:|:-------------------|:--------------------------------|
| [**`redis_cluster`**](/docs/redis/param#redis_cluster)     | `string` |  集群  | Redis 集群名称，必选身份参数  | 有效的 DNS 名称，满足 `[a-z][a-z0-9-]*` |
| [**`redis_node`**](/docs/redis/param#redis_node)           |  `int`   |  节点  | Redis 节点编号，必选身份参数  | 自然数，从 1 开始分配，集群内不重复             |
| [**`redis_instances`**](/docs/redis/param#redis_instances) |  `dict`  |  节点  | Redis 实例定义，必选身份参数  | JSON 对象，Key 为端口号，Value 为实例配置    |
{.full-width}

只要在集群层面定义了集群名称，节点层面分配了节点编号与实例定义，Pigsty 就能自动根据规则为每个实体生成唯一标识符。

| 实体     | 生成规则                                              | 示例                                  |
|--------|:--------------------------------------------------|:------------------------------------|
| **实例** | `{{ redis_cluster }}-{{ redis_node }}-{{ port }}` | `redis-ms-1-6379`，`redis-ms-1-6380` |
{.full-width}

Redis 模块不会为主机节点赋予额外的身份标识，节点使用其原有的主机名或 IP 地址进行标识。
[**`redis_node`**](/docs/redis/param#redis_node) 参数用于实例命名，而非主机节点的身份。


----------------

## 实例定义

[**`redis_instances`**](/docs/redis/param#redis_instances) 是一个 JSON 对象，Key 为 **端口号**，Value 为该实例的 **配置项**：

```yaml
redis_instances:
  6379: { }                                      # 主库实例，无需额外配置
  6380: { replica_of: '10.10.10.10 6379' }       # 从库实例，指定上游主库
  6381: { replica_of: '10.10.10.10 6379' }       # 从库实例，指定上游主库
```

每个 Redis 实例会监听一个唯一的端口，端口在节点上唯一不重复，您可以任意选择端口号，
但请不要使用系统保留端口（小于 1024），或者与 [**Pigsty 使用的端口**](/docs/ref/port/) 冲突。
实例配置中的 `replica_of` 参数用于在主从模式下设置复制关系，格式为 `'<ip> <port>'`，用于指定一个 Redis 从库的上游主库地址与端口。

此外，每个 Redis 节点上会运行一个 Redis Exporter，用于汇总采集当前节点上 **所有本地实例** 的监控指标：

| 端口   | 参数                                                                 | 用途                |
|:-----|:-------------------------------------------------------------------|:------------------|
| 9121 | [**`redis_exporter_port`**](/docs/redis/param#redis_exporter_port) | Redis Exporter 端口 |
{.full-width}

Redis 模块的单机多实例部署模型带有一些一些局限性：

- **节点独占**：一个节点只能属于一个 Redis 集群，不能同时分配给不同的 Redis 集群。
- **端口唯一**：同一节点上的 Redis 实例必须使用不同的端口号，避免端口冲突。
- **密码共享**：同一节点上的多个 Redis 实例无法设置不同的密码（受 redis_exporter 限制）。
- **手动高可用**：主从模式的 Redis 集群需要额外配置 Sentinel 才能实现自动故障转移。



----------------

## 监控标签体系

Pigsty 提供了一套开箱即用的监控系统，在这个系统中使用上面的 [**身份参数**](#身份参数) 来标识各个 Redis 实体对象。

```text
redis_up{cls="redis-ms", ins="redis-ms-1-6379", ip="10.10.10.10", job="redis"}
redis_up{cls="redis-ms", ins="redis-ms-1-6380", ip="10.10.10.10", job="redis"}
```

例如，上面的 `cls`，`ins`，`ip` 三个标签，分别对应集群名、实例名与节点 IP，这三个核心实体的标识符。
它们与 `job` 标签，在 **所有** [**VictoriaMetrics**](/docs/concept/arch/infra#victoriametrics) 采集的 Redis 监控指标中都会出现并可用。
采集 Redis 指标的 `job` 名固定为 `redis`。

