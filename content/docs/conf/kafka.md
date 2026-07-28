---
title: demo/kafka
weight: 1046
description: 四节点 dynamic KRaft 示例：单节点明文开发集群与三节点 TLS/SCRAM 高可用基线
icon: fa-solid fa-stream
categories: [参考]
---

`demo/kafka` 在四个节点上声明两套 Kafka 4.x dynamic KRaft 集群：单节点明文开发集群 `kf-meta`，以及三节点 TLS/SCRAM/ACL 演示集群 `kf-test`。


--------

## 配置概览

- 配置名称：`demo/kafka`
- 节点数量：4 个
- `kf-meta`：单节点 combined Broker/Controller，明文模式
- `kf-test`：3 个 combined 节点，TLS/SCRAM/ACL，Topic 副本数 3、`min.insync.replicas=2`
- 模块状态：KAFKA BETA

```bash
./configure -c demo/kafka -s
./deploy.yml
./kafka.yml -l kf-meta
./kafka.yml -l kf-test
```

`deploy.yml` 只部署核心链路，并不会自动执行 KAFKA 剧本。每次 `kafka.yml` 运行都应选择一个完整的 Kafka 集群；角色会拒绝只选中部分成员的收敛操作。


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/kafka.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/kafka.yml)

{{< readfile file="yaml/demo/kafka.yml" code="true" lang="yaml" >}}


--------

## 配置解读

- `kf-meta` 创建 `quickstart.events`，用于单机开发与连通性测试。
- `kf-test` 创建 `test-app` SCRAM 用户、前缀 ACL 与 `test.events` 三副本 Topic。
- 在线安装时由平台映射安装 `kafka-stack` 与 `java-runtime`；若只使用本地仓库，必须先把这两个包组完整纳入仓库。
- 模板中的地址和密码均为演示值，部署前应按实际拓扑与安全要求修改。

更多操作、安全与扩缩容约束参见 [KAFKA 模块](/docs/kafka/)。
