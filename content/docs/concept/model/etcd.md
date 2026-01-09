---
title: ETCD 集群模型
weight: 1102
description: 介绍 Pigsty 中 ETCD 集群的实体-关系模型，E-R 关系图，实体释义与命名规范。
icon: fa-solid fa-gears
module: [ETCD]
categories: [概念]
---


ETCD 模块在生产环境中以**集群**的形式组织，这些**集群**是由一组通过 **Raft** 共识协议关联的 ETCD **实例**组成的**逻辑实体**。

每个集群都是一个**自治**的分布式键值存储单元，由至少一个 **ETCD 实例** 组成，通过客户端端口向外暴露服务能力。

在 Pigsty 的 ETCD 模块中有三种核心实体：

- **集群**（Cluster）：自治的 ETCD 服务单元，用作其他实体的顶级命名空间。
- **实例**（Instance）：单个 ETCD 服务器进程，在节点上运行，参与 Raft 共识。
- **节点**（Node）：运行 Linux + Systemd 环境的硬件资源抽象，隐含式声明。

相比于 PostgreSQL 集群，ETCD 集群模型更为简单，没有服务（Service）和复杂的角色（Role）区分。
所有 ETCD 实例在功能上是对等的，通过 Raft 协议选举出 Leader，其余为 Follower。
在扩容的中间状态，还允许不参与投票的 Learner 实例成员存在。

----------------

## 具体样例

让我们来看一个具体的例子，以三节点的 ETCD 集群为例：

```yaml
etcd:
  hosts:
    10.10.10.10: { etcd_seq: 1 }
    10.10.10.11: { etcd_seq: 2 }
    10.10.10.12: { etcd_seq: 3 }
  vars:
    etcd_cluster: etcd
```

上面的配置片段定义了一个如下所示的三节点 ETCD 集群，该集群中的相关实体包括：

| <span class="text-secondary">**集群**</span> | <span class="text-secondary">**Cluster**</span> |
|:------------------------------------------:|-------------------------------------------------|
|                 **`etcd`**                 | ETCD 三节点高可用集群                                   |
|  <span class="text-success">**实例**</span>  | <span class="text-success">**Instance**</span>  |
|                **`etcd-1`**                | 1 号 ETCD 实例                                     |
|                **`etcd-2`**                | 2 号 ETCD 实例                                     |
|                **`etcd-3`**                | 3 号 ETCD 实例                                     |
|  <span class="text-danger">**节点**</span>   | <span class="text-danger">**Nodes**</span>      |
|             **`10.10.10.10`**              | 1 号节点，对应 `etcd-1` 实例                            |
|             **`10.10.10.11`**              | 2 号节点，对应 `etcd-2` 实例                            |
|             **`10.10.10.12`**              | 3 号节点，对应 `etcd-3` 实例                            |
{.full-width}


----------------

## 身份参数

Pigsty 使用 [**`ETCD`**](/docs/etcd/param#etcd) 参数组为 ETCD 模块的每个实体赋予确定的身份。以下两项为必选参数：

| 参数                                                  |    类型    | 级别 | 说明               | 形式                       |
|:----------------------------------------------------|:--------:|:--:|:-----------------|:-------------------------|
| [**`etcd_cluster`**](/docs/etcd/param#etcd_cluster) | `string` | 集群 | ETCD 集群名称，必选身份参数 | 有效的 DNS 名称，默认为固定值 `etcd` |
| [**`etcd_seq`**](/docs/etcd/param#etcd_seq)         |  `int`   | 实例 | ETCD 实例编号，必选身份参数 | 自然数，从 1 开始分配，集群内不重复      |
{.full-width}

只要在集群层面定义了集群名称，实例层面分配了实例编号，Pigsty 就能自动根据规则为每个实体生成唯一标识符。

| 实体     | 生成规则                                | 示例                         |
|--------|:------------------------------------|:---------------------------|
| **实例** | `{{ etcd_cluster }}-{{ etcd_seq }}` | `etcd-1`，`etcd-2`，`etcd-3` |
{.full-width}

ETCD 模块不会为主机节点赋予额外的身份标识，节点使用其原有的主机名或 IP 地址进行标识。


----------------

## 端口协议

每个 ETCD 实例会监听以下两个端口：

| 端口   | 参数                                                      | 用途                                 |
|:-----|:--------------------------------------------------------|:-----------------------------------|
| **2379** | [**`etcd_port`**](/docs/etcd/param#etcd_port)           | 客户端端口，供 Patroni、vip-manager 等客户端访问 |
| **2380** | [**`etcd_peer_port`**](/docs/etcd/param#etcd_peer_port) | 节点间通信端口，用于 Raft 共识协议               |
{.full-width}

ETCD 集群默认启用 TLS 加密通信，并使用 RBAC 认证机制。客户端需要使用正确的证书和密码才能访问 ETCD 服务。


----------------

## 集群规模

ETCD 作为分布式协调服务，集群规模直接影响其可用性，需要有超过半数（仲裁数）的节点存活才能维持服务。

| 集群规模 | 仲裁数  | 容忍故障数  | 适用场景     |
|:----:|:----:|:------:|:---------|
| 1 节点 |  1   |   0    | 开发、测试、演示 |
| 3 节点 |  2   |   1    | 中小规模生产环境 |
| 5 节点 |  3   |   2    | 大规模生产环境  |
{.full-width}

因此，偶数节点的 ETCD 集群没有意义，超过五节点的 ETCD 集群并不常见，因此通常使用的规格就是单节点、三节点、五节点。



----------------

## 监控标签体系

Pigsty 提供了一套开箱即用的监控系统，在这个系统中使用上面的 [**身份参数**](#身份参数) 来标识各个 ETCD 实体对象。

```text
etcd_up{cls="etcd", ins="etcd-1", ip="10.10.10.10", job="etcd"}
etcd_up{cls="etcd", ins="etcd-2", ip="10.10.10.11", job="etcd"}
etcd_up{cls="etcd", ins="etcd-3", ip="10.10.10.12", job="etcd"}
```

例如，上面的 `cls`，`ins`，`ip` 三个标签，分别对应集群名、实例名与节点 IP，这三个核心实体的标识符。
它们与 `job` 标签，在 **所有** [**VictoriaMetrics**](/docs/concept/arch/infra#victoriametrics) 采集的 ETCD 监控指标中都会出现并可用。
采集 ETCD 指标的 `job` 名固定为 `etcd`。


