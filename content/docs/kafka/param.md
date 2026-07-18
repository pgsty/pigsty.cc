---
title: 参数参考
weight: 5043
description: KAFKA 模块 15 项持久公开参数与临时受保护运维变量。
icon: fa-solid fa-sliders
module: [KAFKA]
categories: [参考]
aliases: [/docs/pilot/kafka/param]
---


KAFKA 角色刻意只公开 15 项持久参数。拓扑、Listener、安全实现、存储子目录、复制安全与 Exporter 放置等细节由角色统一推导，不能作为额外持久变量覆盖。


--------

## 参数概览

| 参数                                                    |  层级   | 默认值             | 说明                                 |
|:------------------------------------------------------|:-----:|:----------------|:-----------------------------------|
| [`kafka_cluster`](#kafka_cluster)                     |  集群   | 必填              | Kafka 集群身份                         |
| [`kafka_seq`](#kafka_seq)                             |  实例   | 必填              | 集群内唯一 KRaft `node.id`              |
| [`kafka_role`](#kafka_role)                           |  实例   | `combined`      | `combined`、`broker` 或 `controller` |
| [`kafka_cluster_id`](#kafka_cluster_id)               |  集群   | 未设置             | 接管/恢复断言；新集群随机生成                    |
| [`kafka_data`](#kafka_data)                           |  实例   | `/data/kafka`   | 角色自有数据根目录                          |
| [`kafka_heap_opts`](#kafka_heap_opts)                 |  实例   | `-Xms1G -Xmx1G` | Kafka JVM Heap                     |
| [`kafka_port`](#kafka_port)                           |  实例   | `9092`          | Broker/client 端口                   |
| [`kafka_controller_port`](#kafka_controller_port)     |  实例   | `9093`          | KRaft Controller 端口                |
| [`kafka_rack`](#kafka_rack)                           |  实例   | 未设置             | Broker 故障域标签                       |
| [`kafka_parameters`](#kafka_parameters)               | 集群/实例 | `{}`            | 非角色自有 Broker 参数                    |
| [`kafka_jmx_exporter_port`](#kafka_jmx_exporter_port) |  实例   | `9404`          | JMX Exporter HTTP 端口               |
| [`kafka_exporter_port`](#kafka_exporter_port)         |  实例   | `9308`          | 协议 Exporter HTTP 端口                |
| [`kafka_security`](#kafka_security)                   |  集群   | `plaintext`     | `plaintext` 或生产 `scram` 档位         |
| [`kafka_users`](#kafka_users)                         |  集群   | `[]`            | 用户凭据、ACL 与 Quota                   |
| [`kafka_topics`](#kafka_topics)                       |  集群   | `[]`            | 声明式 Topic                          |
{.full-width}

`kafka_cluster` 与 `kafka_seq` 必须定义；`kafka_role` 有真实默认值。集群角色要么全部省略，要么全部显式声明。


--------

## 身份与拓扑

### `kafka_cluster`

必填的集群身份。必须以字母或数字开头，只能包含字母、数字、下划线和连字符：

```yaml
kafka_cluster: kf-main
```

它用于发现完整集群成员、生成实例名和定位 Bootstrap Manifest。每次 `kafka.yml` 生命周期操作必须用精确 `-l` 选择该集群的全部成员。


### `kafka_seq`

必填的非负整数，在同一 `kafka_cluster` 中唯一，直接成为 KRaft `node.id`：

```yaml
10.10.10.11: { kafka_seq: 1 }
```

实例名派生为 `${kafka_cluster}-${kafka_seq}`。节点格式化后不要修改或复用仍有关联数据的序号。


### `kafka_role`

默认 `combined`，只接受：

| 值            | Kafka `process.roles` | 语义                     |
|:-------------|:----------------------|:-----------------------|
| `combined`   | `broker,controller`   | Broker 与 Controller 合设 |
| `broker`     | `broker`              | 纯 Broker               |
| `controller` | `controller`          | 纯 Controller           |
{.full-width}

集群所有成员都省略时一致使用 `combined`；只要任一成员显式设置，所有成员都必须显式设置。不提供旧角色别名。


### `kafka_cluster_id`

默认未设置，仅用于接管或恢复时断言现有集群身份，必须是 22 字符 Kafka UUID：

```yaml
kafka_cluster_id: MkU3OEVBNTcwNTJENDM2Qk
```

普通新建集群不要设置。角色会随机生成 Cluster ID，并写入每个成员的 `/etc/kafka/manifest.yml`。该参数不会重新标记现有数据；与 Manifest 或 `meta.properties` 冲突时会失败关闭。


### `kafka_rack`

可选的 Broker 故障域标签，渲染为 `broker.rack`：

```yaml
10.10.10.21: { kafka_seq: 4, kafka_role: broker, kafka_rack: az-a }
```

所有 Broker-capable 节点必须全部声明或全部省略。纯 Controller 不使用该值。修改 Rack 属于静态变化，会进入严格滚动，但不会重新分配既有副本。


--------

## 存储、JVM 与网络

### `kafka_data`

数据根目录，默认 `/data/kafka`：

```yaml
kafka_data: /data/kafka
```

角色固定派生 `${kafka_data}/data` 与 `${kafka_data}/metadata`。该路径必须是专用绝对路径，不能是 `/`、`/data`、`/var`、`/etc`、`/opt`、`/usr`、`/home`、`/root` 或 `/pg`。[`kafka-rm.yml`](/docs/kafka/playbook#集群下线) 默认会删除整个根目录，因此不要混放其他服务或业务文件。


### `kafka_heap_opts`

Kafka JVM Heap，默认：

```yaml
kafka_heap_opts: '-Xms1G -Xmx1G'
```

生产应根据负载与内存压测设置，通常保持 `Xms` 与 `Xmx` 相同，并为操作系统 Page Cache 与其他进程留出足够内存。


### `kafka_port`

Broker/client 监听端口，默认 `9092`，只在 Broker-capable 节点监听。`plaintext` 模式使用 PLAINTEXT；`scram` 模式使用 SASL_SSL + SCRAM-SHA-512。


### `kafka_controller_port`

KRaft Controller 监听端口，默认 `9093`（Kafka KRaft 惯例端口），只在 Controller-capable 节点监听。与其他服务共用节点时请自行确认端口无冲突，角色不会自动检测跨服务端口占用。


四个公开端口必须彼此不同。Broker listener 绑定 `0.0.0.0`，Controller listener、Broker advertised address 与 Controller bootstrap address 固定使用 `inventory_hostname`，不另设地址参数。


--------

## `kafka_parameters`

默认 `{}`，是唯一的 Kafka Broker 参数逃生舱，只渲染到 Broker-capable 节点：

```yaml
kafka_parameters:
  num.partitions: 12
  num.network.threads: 6
  num.io.threads: 16
  log.retention.hours: 168
  log.segment.bytes: 1073741824
```

以下键或模式由角色拥有，不能通过该映射覆盖：

```text
process.roles
node.id
controller.quorum.*
listeners
advertised.listeners
listener.security.protocol.map
inter.broker.listener.name
controller.listener.names
log.dirs
metadata.log.dir
min.insync.replicas
default.replication.factor
offsets.topic.replication.factor
transaction.state.log.replication.factor
transaction.state.log.min.isr
share.coordinator.state.topic.replication.factor
share.coordinator.state.topic.min.isr
broker.rack
authorizer.class.name
super.users
allow.everyone.if.no.acl.found
sasl.*
ssl.*
listener.*
```

身份、监听器、安全、存储与复制策略必须保持单一权威；包含保留键时预检会直接失败。


--------

## 可观测性

### `kafka_jmx_exporter_port`

JMX Exporter HTTP 端口，默认 `9404`。角色为每个 Kafka JVM 无条件注入 JMX Exporter Java Agent，并注册为 `job=kafka`；没有单独的开关参数。生命周期健康门禁使用角色自有 Kafka CLI/metadata 通道，不依赖 JMX。Infra 监控节点必须可以访问该端口；端点不因 `kafka_security: scram` 自动启用 HTTPS，应通过监控网络和防火墙保护。


### `kafka_exporter_port`

协议型 `kafka_exporter` HTTP 端口，默认 `9308`。角色只在按 `kafka_seq` 排序后的前两个 Broker-capable 节点配置、启动与注册；单 Broker 集群只运行一个。监控 Target 文件每次完整运行都会按当前放置刷新，但曾经被选中节点上的旧 Exporter 服务不会被普通剧本自动停止。

Exporter 使用的 Kafka 协议版本、TLS/SCRAM 参数和副本放置均为角色内部约定，没有额外公开开关或 options 参数。


--------

## 安全与资源

### `kafka_security`

默认 `plaintext`，只接受：

| 值           | Broker/client            | Controller | 授权                      | 用途        |
|:------------|:-------------------------|:-----------|:------------------------|:----------|
| `plaintext` | PLAINTEXT                | PLAINTEXT  | 无                       | 开发或可信隔离网络 |
| `scram`     | SASL_SSL + SCRAM-SHA-512 | 双向 TLS     | StandardAuthorizer，默认拒绝 | 生产安全基线    |
{.full-width}

`scram` 同时配置 Pigsty CA 签发的节点证书、角色自有管理/监控/内部身份、TLS/SCRAM 与 ACL 启用顺序。安全模式写入 Bootstrap Manifest；集群格式化后，普通重跑不能把 `plaintext` 切换成 `scram`，也不能反向切换。


### `kafka_users`

默认 `[]`，仅允许在 `scram` 模式声明。每个对象只接受 `name`、`password`、`acls`、`quota`：

```yaml
kafka_users:
  - name: order-service
    password: "{{ vault_kafka_order_password }}"
    acls:
      - resource: topic
        name: order.
        pattern: prefixed
        operations: [Read, Write, Describe]
      - resource: group
        name: order.
        pattern: prefixed
        operations: [Read]
      - resource: transactional_id
        name: order.
        pattern: prefixed
        operations: [Write, Describe]
    quota:
      producer_byte_rate: 10485760
      consumer_byte_rate: 20971520
```

约束：

- `name` 在列表中唯一；`password` 必填且至少 12 个字符，应引用秘密管理系统；
- ACL `resource` 为 `topic`、`group`、`transactional_id`、`cluster`；
- `pattern` 为 `literal`（默认）或 `prefixed`；
- 操作为 `Read`、`Write`、`Create`、`Delete`、`Alter`、`Describe`、`ClusterAction`、`DescribeConfigs`、`AlterConfigs`、`IdempotentWrite`；
- Quota 键为 `producer_byte_rate`、`consumer_byte_rate`、`request_percentage`、`controller_mutation_rate`。

角色为声明用户收敛 SCRAM 密码、完整 ACL 集合与显式给出的 Quota 字段。移除用户条目不会隐式删除 Principal 或凭据；删除/撤权需要独立受审操作。


### `kafka_topics`

默认 `[]`。每个对象只接受 `name`、`partitions`、`replication_factor`、`config`：

```yaml
kafka_topics:
  - name: order.events
    partitions: 12
    replication_factor: 3
    config:
      min.insync.replicas: 2
      cleanup.policy: delete
      retention.ms: 604800000
```

`name` 在列表中唯一；Partition 与 RF 都必须至少为 1，RF 不能超过当前 Broker 数。收敛语义是：

- Topic 不存在时幂等创建；
- Partition 只允许增加，减少会失败；
- RF 与现场不同时拒绝普通收敛，并要求显式 Reassignment；
- 只更新 `config` 中声明的键；
- 从列表中移除 Topic 永远不会删除 Topic。


--------

## 临时受保护运维变量

以下变量只通过命令行 `-e` 用于一次性运维动作，不属于 15 项持久 API，也不应写入 `pigsty.yml`：

| 动作     | 剧本             | 临时变量                                                                                | 保护条件                           |
|:-------|:---------------|:------------------------------------------------------------------------------------|:-------------------------------|
| 轮换内部凭据 | `kafka.yml`    | `kafka_rotate_credentials=true`、`kafka_rotate_confirm=<cluster>`                    | 健康、全员已格式化的 `scram` 集群          |
| 轮换证书   | `kafka.yml`    | `kafka_rotate_certificates=true`、`kafka_rotate_confirm=<cluster>`                   | 健康、全员已格式化的 `scram` 集群          |
| 下线集群   | `kafka-rm.yml` | `kafka_rm_data`（默认 `true`）、`kafka_rm_pkg`（默认 `false`）、`kafka_safeguard`（默认 `false`） | `kafka_safeguard=true` 时中止一切删除 |
{.full-width}

两种轮换动作互斥，且必须以精确完整集群为目标。`kafka-rm.yml` 默认删除数据目录与节点上的 `/etc/kafka` 恢复状态；`kafka_rm_data=false` 会同时保留二者。执行前必须显式确认目标集群与备份/重建意图，命令与完整语义见 [预置剧本](/docs/kafka/playbook)。
