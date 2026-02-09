---
title: 模块：Kafka
weight: 5040
description: 使用 Pigsty 拉起 Kafka Kraft 集群，一个开源的分布式流处理平台。
icon: fas fa-share-nodes
module: [KAFKA]
categories: [参考]
---


> [Kafka](https://kafka.apache.org/) 是一个开源的分布式流处理平台：[安装](#安装) | [配置](#配置) | [管理](#管理) | [剧本](#剧本) | [监控](#监控) | [参数](#参数) | [资源](#资源)


--------

## 概览

Kafka 模块本身目前仅在 Pigsty 专业版中提供 Beta 试用预览。


--------

## 安装

如果您使用开源版 Pigsty，可以使用以下命令，在指定节点上安装 Kafka 及其 Java 依赖。

Pigsty 在官方 Infra 仓库中提供了 Kafka 3.8.0 的 RPM 与 DEB 安装包，如果需要使用，可以直接下载安装。

```bash
./node.yml -t node_install  -e '{"node_repo_modules":"infra","node_packages":["kafka"]}'
```

Kafka 依赖 Java 运行环境，因此在安装 Kafka 时，需要安装可用的 JDK （默认使用 OpenJDK 17，但其他 JDK 与版本，例如 8，11 都可以使用）

```bash
# EL7 (没有 JDK 17 支持)
./node.yml -t node_install  -e '{"node_repo_modules":"node","node_packages":["java-11-openjdk-headless"]}'

# EL8 / EL9 (使用 OpenJDK 17 )
./node.yml -t node_install  -e '{"node_repo_modules":"node","node_packages":["java-17-openjdk-headless"]}'

# Debian / Ubuntu (使用 OpenJDK 17)
./node.yml -t node_install  -e '{"node_repo_modules":"node","node_packages":["openjdk-17-jdk"]}'
```


--------

## 配置

单节点 Kafka 配置样例，请注意，在 Pigsty 单机部署模式下，管理节点上的 9093 端口默认已经被 AlertManager 占用。

建议在管理节点上安装 Kafka 时，Peer Poort 使用其他端口，例如（9095）。

```yaml
kf-main:
  hosts:
    10.10.10.10: { kafka_seq: 1, kafka_role: controller }
  vars:
    kafka_cluster: kf-main
    kafka_data: /data/kafka
    kafka_peer_port: 9095     # 9093 is already hold by alertmanager
```

三节点 Kraft 模式 Kafka 集群配置样例：

```yaml
kf-test:
  hosts:
    10.10.10.11: { kafka_seq: 1, kafka_role: controller   }
    10.10.10.12: { kafka_seq: 2, kafka_role: controller   }
    10.10.10.13: { kafka_seq: 3, kafka_role: controller   }
  vars:
    kafka_cluster: kf-test
```



---------

## 管理 

以下是基本的 Kafka 集群基本管理操作：

使用 `kafka.yml` 创建 Kafka 集群：

```bash
./kafka.yml -l kf-main
./kafka.yml -l kf-test
```

创建一个名为 `test` 的 Topic：

```bash
kafka-topics.sh --create --topic test --partitions 1 --replication-factor 1 --bootstrap-server localhost:9092
```

这里 `--replication-factor 1` 表示每个数据只会复制一次，`--partitions 1` 表示只创建一个分区。


使用以下命令，查看 Kafka 中的 Topic 列表：

```bash
kafka-topics.sh --bootstrap-server localhost:9092 --list
```

使用 Kafka 自带的消息生产者，向 `test` Topic 发送消息：

```bash
kafka-console-producer.sh --topic test --bootstrap-server localhost:9092
>haha
>xixi
>hoho
>hello
>world
> ^D
```

使用 Kafka 自带的消费者，从 `test` Topic 中读取消息：

```bash
kafka-console-consumer.sh --topic test --from-beginning --bootstrap-server localhost:9092
```





----------------

## 剧本

Pigsty 提供了两个与 KAFKA 模块相关的剧本，分别用于纳管与移除节点。

* [`node.yml`](/docs/node/playbook#nodeyml)：纳管节点，并调整节点到期望的状态
* [`node-rm.yml`](/docs/node/playbook#node-rmyml)：从 pigsty 中移除纳管节点

此外， Pigsty 还提供了两个包装命令工具：`node-add` 与 `node-rm`，用于快速调用剧本。


----------------

### `kafka.yml`

用于部署 Kafka KRaft 模式集群的 [`kafka.yml`](https://github.com/pgsty/pigsty/blob/main/node.yml) 剧本包含以下子任务：

```bash
kafka-id       : generate kafka instance identity
kafka_clean    : remove existing kafka instance (DANGEROUS)
kafka_user     : create os user kafka
kafka_pkg      : install kafka rpm/deb packages
kafka_link     : create symlink to /usr/kafka
kafka_path     : add kafka bin path to /etc/profile.d
kafka_svc      : install kafka systemd service
kafka_dir      : create kafka data & conf dir
kafka_config   : generate kafka config file
kafka_boot     : bootstrap kafka cluster
kafka_launch   : launch kafka service
kafka_exporter : launch kafka exporter
kafka_register : register kafka service to prometheus
```






----------------

## 监控

Pigsty 提供了两个与 [`KAFKA`](/docs/pilot/kafka) 模块有关的监控面板：

[KAFKA Overview](https://demo.pigsty.cc/d/kafka-overview) 展示了 Kafka 集群的整体监控指标。

[KAFKA Instance](https://demo.pigsty.cc/d/kafka-instance) 展示了单个 Kafka 实例的监控指标详情





--------

## 参数

Kafka 的可用配置项：

```yaml
#kafka_cluster:           #CLUSTER  # kafka cluster name, required identity parameter
#kafka_role: controller   #INSTANCE # kafka role, controller, broker, or controller-only
#kafka_seq: 0             #INSTANCE # kafka instance seq number, required identity parameter
kafka_clean: false                  # cleanup kafka during init? false by default
kafka_data: /data/kafka             # kafka data directory, `/data/kafka` by default
kafka_version: 3.8.0                # kafka version string
scala_version: 2.13                 # kafka binary scala version
kafka_port: 9092                    # kafka broker listen port
kafka_peer_port: 9093               # kafka broker peer listen port, 9093 by default (conflict with alertmanager)
kafka_exporter_port: 9308           # kafka exporter listen port, 9308 by default
kafka_parameters:                   # kafka parameters to be added to server.properties
  num.network.threads: 3
  num.io.threads: 8
  socket.send.buffer.bytes: 102400
  socket.receive.buffer.bytes: 102400
  socket.request.max.bytes: 104857600
  num.partitions: 1
  num.recovery.threads.per.data.dir: 1
  offsets.topic.replication.factor: 1
  transaction.state.log.replication.factor: 1
  transaction.state.log.min.isr: 1
  log.retention.hours: 168
  log.segment.bytes: 1073741824
  log.retention.check.interval.ms: 300000
  #log.retention.bytes: 1073741824
  #log.flush.interval.ms: 1000
  #log.flush.interval.messages: 10000

```



--------

## 资源

Pigsty 为 PostgreSQL 提供了一些 Kafka 相关的扩展插件：

- [**`kafka_fdw`**](/docs/pgsql/ext/)，一个有趣的 FDW，允许用户直接从 PostgreSQL 中读写 Kafka Topic 数据
- [**`wal2json`**](/docs/pgsql/ext/)，用于从 PostgreSQL 中逻辑解码 WAL 日志，生成 JSON 格式的变更数据
- [**`wal2mongo`**](/docs/pgsql/ext/)，用于从 PostgreSQL 中逻辑解码 WAL 日志，生成 BSON 格式的变更数据
- [**`decoder_raw`**](/docs/pgsql/ext/)，用于从 PostgreSQL 中逻辑解码 WAL 日志，生成 SQL 格式的变更数据
- [**`test_decoding`**](/docs/pgsql/ext/)，用于从 PostgreSQL 中逻辑解码 WAL 日志，生成 RAW 格式的变更数据

