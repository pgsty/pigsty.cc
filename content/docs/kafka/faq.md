---
title: 常见问题
weight: 4908
description: Pigsty Kafka 4.1+ 动态 KRaft 模块常见问题与故障排查。
icon: fa-solid fa-circle-question
module: [KAFKA]
categories: [参考]
aliases: [/docs/pilot/kafka/faq]
---


## 当前 KAFKA 模块是什么成熟度？

当前角色已实现生产级 v1 基线：动态 KRaft、完整集群护栏、冷启动/修复、Broker 串行准入与 Controller 动态加入、成员退役（含死节点）、故障节点三步替换、严格滚动、TLS/SCRAM/ACL、Topic/User 声明式收敛、内部凭据/证书轮换以及完整监控链路。

它不是托管 Kafka 产品。生产仍需使用 `kafka_security: scram`、奇数 Controller、足够 Broker/RF/minISR，并补充容量规划、Reassignment/数据均衡、升级、备份、恢复与故障演练。默认 `plaintext` 只适合开发或可信隔离网络。


--------

## 为什么没有 ZooKeeper，也没有 `controller.quorum.voters`？

本模块面向 Kafka 4.1+，使用原生动态 KRaft，不安装 ZooKeeper，也不创建静态 Quorum。所有成员渲染 `controller.quorum.bootstrap.servers`；新集群显式使用 `--initial-controllers`/`--no-initial-controllers` 格式化，启动后角色会校验初始 Controller 的 Directory ID 已进入现场 Quorum。

初始 Controller Identity 写入 Bootstrap Manifest，但它只是"出生证明"：集群首次 Commission 之后，现场 Quorum 的成员关系以 Raft 自身为准。后续 Controller 的增删由剧本编排完成——新增走 `kafka.yml` 的 Observer 追平 + `add-controller` 加入流程，删除走 `kafka-rm.yml` 真子集退役（自动 `remove-controller`）——你只需要编辑 inventory 并运行对应剧本。


--------

## `combined`、`broker`、`controller` 有什么区别？

- `combined`：同时承担 Broker 与 Controller，监听 `9092` 和 `9093`，是默认值；
- `broker`：纯数据面，只监听 `9092`；
- `controller`：纯控制面，只监听 `9093`。

集群角色要么全部省略并一致使用 `combined`，要么全部显式声明。不再提供旧角色别名。


--------

## Controller 端口 9093 会和 Alertmanager 冲突吗？

不冲突。Pigsty 的 Alertmanager 监听 [`alertmanager_port`](/docs/infra/param#alertmanager_port) `9059`，集群端口为 `9094`，与 KRaft Controller 的惯例端口 `9093` 错开。若你改动过这些端口而发生碰撞，为该集群调整 [`kafka_controller_port`](/docs/kafka/param#kafka_controller_port) 即可——角色只强制 `9092`、`9093`、`9308`、`9404` 四者互不相同，不会检测与其他服务的端口占用。


--------

## 服务已启动，但远程客户端连不上？

Broker 的 `advertised.listeners` 固定使用 `inventory_hostname`。客户端连接 Bootstrap Server 后，还必须解析并访问元数据返回的每一个 Broker 地址。

依次检查：

```bash
grep '^advertised.listeners' /etc/kafka/server.properties
ss -lntp | grep ':9092'
getent hosts <inventory-hostname>
```

`scram` 客户端还要检查 CA、SASL mechanism、用户名/密码与 ACL。当前 v1 不提供自定义 advertised address、多 Listener 或 NAT/公网映射；如果客户端不能直接路由 `inventory_hostname`，该网络模型不在当前核心契约内，不能用 `kafka_parameters` 覆盖 raw listener 绕过。


--------

## 为什么提示 Cluster ID、Node ID 或 Directory ID 不匹配？

角色会交叉校验 Bootstrap Manifest、`${kafka_data}/metadata/meta.properties`、inventory 与现场动态 Quorum。常见原因包括：

- 修改了 `kafka_cluster` 或 `kafka_seq`；
- 把其他集群的数据盘挂载到当前节点；
- 恢复/接管时给出了错误的 `kafka_cluster_id`；
- Controller 数据目录或 Directory ID 与现场 Voter 记录不一致；
- 选错了目标集群或使用了过期 Manifest。

这是保护性失败。不要删除 `meta.properties`、Manifest 或直接执行 `kafka-rm.yml`。先确认数据归属、剩余副本、真实 Cluster/Node/Directory Identity 与恢复目标。


--------

## Manifest 丢失或只剩旧 Manifest 会怎样？

每个集群成员都保留一份 Manifest 权威副本 `/etc/kafka/manifest.yml`（`scram` 集群另有 `/etc/kafka/secrets.yml`），管理节点不保存任何 Kafka 状态，每次运行时从任一成员副本解析，因此换管理节点或丢失本地检出都不影响集群管理。只有当所有成员的副本都丢失、而存储已经格式化时，角色才失败关闭并提示先在任一成员上恢复该文件；已格式化的 `scram` 集群在所有成员都找不到 Secret 副本时同样失败关闭。签发的节点证书缓存在 `files/pki/kafka/`，丢失时直接由 Pigsty CA 重签。

反过来，如果 Manifest 存在而全部 Kafka 数据盘为空，角色会失败关闭，避免用旧身份意外复活已消失的集群。确实要重建时必须先执行 `kafka-rm.yml` 和明确的重建流程。


--------

## 为什么 `kafka_parameters` 中的某些键被拒绝？

身份、动态 Quorum、Listener、存储、复制、Rack 与安全必须保持单一权威，因此这些键由角色拥有：出现任意一个，身份预检都会在写文件前失败。完整保留列表见 [`kafka_parameters`](/docs/kafka/param#kafka_parameters)。

请改用对应的公开参数。角色不提供地址、路径子目录、Listener Map 或 Exporter options 变量。


--------

## 如何启用 TLS、SCRAM 与 ACL？

新集群设置：

```yaml
kafka_security: scram
```

这会一次启用 Pigsty CA 节点证书、Controller mTLS、Broker/client SASL_SSL + SCRAM-SHA-512、StandardAuthorizer 与默认拒绝。应用用户通过 `kafka_users` 声明密码、ACL 和可选 Quota。

安全模式是 Bootstrap-only 属性。已格式化集群不能通过普通剧本从 `plaintext` 在线切换到 `scram`；这需要独立迁移状态机。健康 `scram` 集群可以使用受保护动作轮换内部凭据或证书。


--------

## `kafka_topics` 与 `kafka_users` 会删除资源吗？

不会因为从清单移除条目而隐式删除 Topic 或用户。

Topic 会幂等创建、Partition 只增加、只更新声明的配置；RF 变化要求显式 Reassignment。声明用户会收敛密码、完整 ACL 集合与给出的 Quota 字段。Topic 删除、用户删除或彻底撤权都是独立受审操作。


--------

## JMX Exporter 与 kafka_exporter 有什么区别？

JMX Exporter 注入每个 Kafka JVM，采集 JVM、Broker、复制、请求路径与 KRaft 内部指标，注册为带 `role` 标签的 `job=kafka` 目标。

`kafka_exporter` 通过 Kafka 协议查询逻辑集群、Topic、Partition、Offset、Consumer Group 与 Lag，注册为同一 `job=kafka` 下不带 `role` 标签的目标。角色只在按 `kafka_seq` 排序后的前两个 Broker-capable 节点运行；单 Broker 集群运行一个，纯 Controller 不运行。

两者互补。生命周期健康门禁使用角色自有 Kafka CLI/metadata 通道，不依赖任一 Exporter。


--------

## 为什么某个 Broker 或纯 Controller 没有 kafka_exporter？

这是预期的派生放置。协议 Exporter 返回的是整个逻辑集群视图，不是节点指标；最多两个副本可以避免监控单点，同时控制重复采集成本。

检查当前目标（每实例一个文件，被选中节点的文件里含 `:9308` 的协议 Exporter 目标）：

```bash
ls -l /infra/targets/kafka/
grep 9308 /infra/targets/kafka/*.yml
```

完整运行会按当前放置刷新每个实例的 Target 文件，不应只针对单节点运行注册标签。注意：若 Exporter 放置因拓扑变化而转移，曾被选中节点上的旧 `kafka_exporter` 服务不会被普通剧本自动停止，需要手工或通过 `kafka-rm.yml` 清理。


--------

## 为什么 JMX 端点可访问，但 `jmx_scrape_error=1`？

HTTP 可访问只说明 Java Agent 已加载；`jmx_scrape_error=1` 表示本轮 MBean 采集失败：

```bash
journalctl -u kafka --since '-30 min' --no-pager
curl -fsS http://<kafka-ip>:9404/metrics | head -n 40
```

检查 `/etc/kafka/jmx_exporter.yml` 与当前 Kafka/JMX Exporter 包是否匹配，以及 JVM 是否已经过 `startDelaySeconds`。真实启动验收要求 `jmx_scrape_error 0.0`、JVM 指标和至少一项与角色匹配的 `kafka_` 指标。


--------

## 为什么 Consumer Lag 没有数据？

常见原因：Consumer 没使用 Group、未向 Kafka 提交 Offset、把 Offset 存在外部系统、Group 尚未消费目标 Topic，或协议 Exporter 的 TLS/SCRAM/ACL/网络异常。

```bash
/opt/kafka/bin/kafka-consumer-groups.sh \
  --bootstrap-server <broker>:9092 \
  --command-config /etc/kafka/admin.properties \
  --describe --group <group>
```

再检查 `kafka_exporter_up`、Exporter 日志、Dashboard 变量和原始 `kafka_consumergroup_*` 指标。端点存活以 Prometheus 原生 `up` 为准，不要用抓取失败后可能短暂保留的自定义指标代替。


--------

## 为什么两个 kafka_exporter 的集群指标不能相加？

两个 Exporter 查询同一逻辑集群，可能返回相同 Topic/Partition/Consumer Group 状态；直接求和会重复计算。Pigsty 的 `kafka:cls:*` Recording Rule 会先跨 Exporter 副本去重，再聚合到集群。


--------

## 应用要经过 HAProxy、Keepalived VIP 或 LB 吗？

不要。Kafka Producer/Consumer 是集群感知的智能客户端：连上 `bootstrap.servers` 中任一种子取得元数据后，它直接连接各 Partition Leader。VIP 或通用 TCP LB 既不理解 Partition Leader，也不会改写元数据中的 Broker 地址，放在数据面只会增加长连接状态、故障点与排障复杂度。

若平台强制要求统一发现入口，DNS 或 TCP LB 可以只承担 bootstrap，但 `advertised.listeners` 仍返回每个 Broker 的可达地址，应用网络必须直达全部 Broker。跨 NAT、公网、多网络或 Kubernetes 暴露需要为每个 Broker 设计独立外部地址与额外 Listener，当前模块固定宣告清单地址，不支持这类映射。

详见 [快速上手：为什么应用应直连多个 Broker](/docs/kafka/start#3-为什么应用应直连多个-broker) 与 [集群配置：网络与监听器](/docs/kafka/config#网络与监听器)。


--------

## 可以直接增删 Broker 或 Controller 吗？

可以。编辑 inventory 后由剧本编排完成 [KRaft 成员变更](https://kafka.apache.org/43/operations/kraft/#controller-membership-changes) 的全部步骤：

- **增加**：在 inventory 中声明新成员（`broker`、`combined`、`controller` 均可），以 **完整集群** 为目标运行 `./kafka.yml -l <cls>`（不能只 `-l` 新节点）。纯 Broker 逐个格式化、启动并验证注册；Combined/Controller 以 `--no-initial-controllers` 格式化，Observer 追平后 `add-controller` 提升为 Voter。全程逐节点、全程健康门禁。
- **移除**：`./kafka-rm.yml -l <ip>`（集群真子集）经幸存成员执行 `remove-controller` 与 Broker 注销，节点不可达也能完成，随后从 inventory 删除该成员。

仍需自行保证：变更后 Controller 保持奇数且多数派存活；一次只做一个方向的成员变更；被移除 Broker 上的 Partition 副本先行排空（或由同 `kafka_seq` 的替换节点接管）。加入后既有 Partition 不会自动迁移，需独立执行并监控 Reassignment——“Broker 已注册”不等于“容量已均衡”。


--------

## 软件包版本由哪个参数控制？

角色使用 `package_map['java-runtime']` 与 `package_map['kafka-stack']`，不提供 `kafka_version`、`scala_version` 或 Exporter 版本参数。实际版本由目标平台的 Pigsty 仓库和已安装包决定。

2026-07-16 验证的载荷为 Kafka 4.3.1、`kafka_exporter` 1.9.0、JMX Exporter 1.6.0。升级仍需单独评审兼容性、备份/回退、滚动顺序与 Feature Level，不能只替换包。


--------

## 如何安全清空 Kafka 数据？

`kafka.yml` 永远不执行清理，删除动作只在独立的 `kafka-rm.yml` 中：`-l` 选中整个集群（或裸跑选中全部集群）即为集群下线，选中真子集则是成员退役。默认 `kafka_rm_data=true` 会永久删除数据/KRaft 元数据、节点上的 `/etc/kafka` 恢复状态与监控 Target；`kafka_rm_data=false` 保留数据与恢复状态，`kafka_safeguard=true` 中止一切删除。

该剧本没有确认字符串等额外闸门，执行前必须人工确认精确 `-l` 目标、可恢复备份或明确重建意图与业务停用状态。完整语义见 [预置剧本：`kafka-rm.yml`](/docs/kafka/playbook#kafka-rmyml)。
