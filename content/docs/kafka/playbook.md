---
title: 预置剧本
weight: 5045
description: 使用 kafka.yml 与 kafka-rm.yml 执行 dynamic KRaft 生命周期、严格滚动、资源收敛、轮换与下线。
icon: fa-solid fa-scroll
module: [KAFKA]
categories: [任务]
aliases: [/docs/pilot/kafka/playbook]
---


KAFKA 模块提供两个剧本：[`kafka.yml`](https://github.com/pgsty/pigsty/blob/main/kafka.yml) 用于部署 Apache Kafka 4.x dynamic KRaft 集群并收敛其安全、
资源与监控状态；[`kafka-rm.yml`](https://github.com/pgsty/pigsty/blob/main/kafka-rm.yml) 用于下线集群或移除成员。

{{% alert title="精确完整集群约束" color="warning" %}}
每次生命周期操作必须用 `-l/--limit` 选择同一 `kafka_cluster` 的全部成员。缺少 Limit、只选部分成员或跨集群选择都会在写入前失败。先对完全相同的目标执行 `--check`；真实运行前仍需人工核验备份/重建意图、容量、业务窗口、回退方案与变更批准。
{{% /alert %}}


--------

## 基本用法

```bash
./kafka.yml --check -l kf-main
./kafka.yml -l kf-main
```

检查模式验证公开 API、完整集群、角色、Rack、端口、Manifest 与可检查的文件变化，但会跳过格式化、服务启动和实时健康验收。因此 `--check` 成功不等于运行时一定成功。


--------

## 执行阶段

`kafka.yml` 本身是一个薄封装：单一 Play 依次执行 `node_id` 与 `kafka` 两个角色，与 `pgsql.yml` 的结构一致。角色内部把生命周期拆成六个任务阶段；所有跨节点排序（并行 Bootstrap、逐个 Broker 准入、严格逐节点滚动）由启动阶段统一负责：

| 阶段   | 标签                | 作用                                                     |
|:-----|:------------------|:-------------------------------------------------------|
| 身份预检 | `kafka-id`        | 派生并断言身份、完整集群 Limit、角色、Rack、端口与保留键                      |
| 安装   | `kafka_install`   | 创建 `kafka` 系统用户，安装 `java-runtime` 与 `kafka-stack` 软件包  |
| 配置   | `kafka_config`    | 读取/恢复/创建 Manifest，签发安全材料，渲染配置，计算静态指纹，格式化空存储，判定生命周期路径   |
| 启动   | `kafka_launch`    | 收敛不健康集群、逐个准入新 Broker、严格逐节点滚动，确认 Manifest 与已生效静态状态      |
| 资源收敛 | `kafka_provision` | 收敛动态 minISR、用户凭据、ACL、Quota 与声明式 Topic，报告内部 Topic RF 漂移 |
| 监控   | `kafka_monitor`   | 配置协议 Exporter 并注册 VictoriaMetrics Target               |
{.full-width}

Play 使用 `any_errors_fatal: true`。某个阶段失败时，后续危险推进会停止；修正原因后可以重跑完整集群，角色会从现场状态和持久指纹恢复，而不是盲目重复格式化。


--------

## 生命周期路径

配置阶段使用角色自有管理通道判断集群健康，并选择唯一后续路径：

### 冷启动、首次部署或修复

当集群停止或健康谓词不通过时，进入 Converge：

1. 启动所有 Controller-capable 节点；
2. 等待 Controller listener 与 dynamic quorum Leader；
3. 验证初始 Controller Directory ID 仍在现场 quorum；
4. 启动纯 Broker；
5. 等待 Broker listener 并要求完整集群健康；
6. 只有配置已证明成功运行后，才持久化静态指纹。

JMX 不参与生命周期门禁：启动、准入与滚动的判定完全基于角色自有的 Kafka CLI/metadata 管理通道。


### 健康集群增加纯 Broker

角色只自动准入新格式化的 `kafka_role: broker`。每次处理一个新 Broker，并要求它已经注册且未 Fenced 后才继续。新增 Controller 或 combined 节点不能走该捷径。

准入只证明服务加入；已有 Partition 不会自动迁移到新 Broker，必须另行执行显式 Reassignment。


### 健康集群静态变化

当渲染后的静态指纹变化时，严格滚动每次只处理一个节点：

- 重启前检查 Controller 多数派、全部 Voter 零 Lag 且最近完成追平、Offline Partition、Under Replicated、Under Min ISR，以及移除目标后每个 Partition 的有效 ISR；
- 重启后要求目标 Controller 回到 Voter 且重新追平、目标 Broker 注册且未 Fenced、其副本重新进入 ISR；
- 任一门禁失败立即停止后续节点。

如果故障修复与静态变化同时存在，Converge 只启动已停止的成员，不并行重启仍在线成员；quorum 恢复并追平后，尚未加载的静态变化继续进入严格滚动。

如果静态指纹没有变化，Kafka 不重启。动态资源变化仍会在资源收敛阶段在线生效。


--------

## 任务标签

| 标签                                            | 阶段/作用                                               |
|:----------------------------------------------|:----------------------------------------------------|
| `kafka-id`                                    | 始终执行的身份、完整集群与拓扑派生断言                                 |
| `kafka_install`                               | 安装阶段总入口                                             |
| `kafka_user`                                  | 创建 `kafka` 系统用户与用户组                                 |
| `kafka_pkg`                                   | 按平台映射安装 `java-runtime` 与 `kafka-stack` 软件包          |
| `kafka_config`                                | Manifest、安全材料、配置渲染、静态指纹、存储格式化与路径判定                  |
| `kafka_launch`                                | Converge、纯 Broker 串行准入、严格单节点滚动与 Manifest Commission |
| `kafka_provision`                             | 动态 minISR、Topic、User、ACL 与 Quota 收敛                 |
| `kafka_monitor` / `monitor`                   | 协议 Exporter 配置与监控注册总入口                              |
| `kafka_register` / `register` / `add_metrics` | 仅刷新 VictoriaMetrics 文件发现 Target                     |
{.full-width}

正常配置变更应运行完整 `kafka.yml`，让角色自行选择生命周期路径。阶段标签主要用于开发、诊断和受控修复；不能用 `-t kafka_config` 或只限制单节点来绕过完整状态机。


--------

## Identity、格式化与 Manifest

角色在写配置前校验：

- Limit 精确包含一个 Kafka 集群的所有成员；
- `kafka_seq` 唯一，角色全部省略或全部显式；
- 至少一个 Controller 和一个 Broker；
- Rack 在所有 Broker-capable 节点上全有或全无；
- 端口有效、互不冲突，角色自有键未被 `kafka_parameters` 覆盖；
- Manifest、安全模式、`meta.properties` 与现场集群身份一致。

新集群随机生成 Cluster ID 和初始 Controller Directory ID，并以明确 dynamic 模式格式化每个节点。已有 `${kafka_data}/metadata/meta.properties` 时只验证 Cluster ID、Node ID 与 Directory ID，不会自动重新格式化。

Bootstrap Manifest 位于：

```text
files/kafka/<kafka_cluster>/manifest.yml
```

每个集群成员还保留一份权威副本 `/etc/kafka/manifest.yml`（`scram` 集群另有 `/etc/kafka/secrets.yml`）。活集群是运行事实权威，但普通剧本不会在冲突时擅自改写任何一方：

- 管理节点缓存丢失时，自动从任一成员的节点副本恢复，不会重新格式化；
- 管理节点与所有成员都没有 Manifest 而存储已格式化时，失败关闭并提示先恢复 Manifest；
- Manifest 存在而所有数据盘为空时失败关闭；
- Cluster ID、安全模式或 Controller Identity 冲突时失败关闭；
- inventory 中新增的非初始 Controller 不会自动成为 Voter。

不要删除 `meta.properties`、Manifest 或 Secret 来绕过保护。


--------

## 静态指纹与可恢复重跑

角色对影响 Kafka 进程的静态文件计算期望指纹，并只在以下条件之一成立后写入 `/etc/kafka/.pigsty-applied-static.sha256`：

- Converge 已经成功启动并通过全局健康检查；
- 严格滚动已经让该节点重启、追平并通过后置门禁。

如果执行中断，未被证明生效的变化不会被记成“已应用”。下一次完整重跑仍能识别待处理的静态重启。


--------

## 资源收敛与监控注册

完整健康后，资源收敛与监控阶段依次：

1. 收敛角色拥有的动态 cluster minISR；
2. 幂等处理 `kafka_users` 的凭据、ACL 与声明 Quota；
3. 幂等处理 `kafka_topics` 的创建、Partition 增长与显式配置；
4. 检查内部 Topic RF 漂移，但不自动 Reassignment；
5. 在按 `kafka_seq` 排序后的前两个 Broker-capable 节点配置并启动协议 Exporter；
6. 在全部 Infra 节点刷新文件发现 Target。

每个实例对应一个 Target 文件，JMX 目标与（被选中节点的）协议 Exporter 目标都在同一 `kafka` 采集任务下：

```text
/infra/targets/kafka/<kafka_instance>.yml
```

Target 文件每次完整运行按当前 Exporter 放置刷新；Target 的删除由 `kafka-rm.yml` 的注销步骤完成。


--------

## 受保护轮换

轮换变量是一次性 extra-vars，不应写入 `pigsty.yml`。两种动作互斥，每次只能执行其一；前提是所有成员已格式化、集群健康、安全模式为 `scram`、角色自有 Secret 材料存在，且 `kafka_rotate_confirm` 与集群名完全一致。

### 内部凭据轮换

```bash
./kafka.yml --check -l kf-main \
  -e kafka_rotate_credentials=true \
  -e kafka_rotate_confirm=kf-main

./kafka.yml -l kf-main \
  -e kafka_rotate_credentials=true \
  -e kafka_rotate_confirm=kf-main
```

角色使用 active/standby 内部身份：先通过活管理通道更新非活动凭据，再原子切换本地受保护记录，并进入正常严格滚动。旧 active 保留为下一轮 standby，使中断后的重跑可恢复。


### 证书轮换

```bash
./kafka.yml --check -l kf-main \
  -e kafka_rotate_certificates=true \
  -e kafka_rotate_confirm=kf-main

./kafka.yml -l kf-main \
  -e kafka_rotate_certificates=true \
  -e kafka_rotate_confirm=kf-main
```

角色废弃管理节点缓存中已签发的节点证书，用同一 Pigsty CA 为每个节点重新签发私钥与证书，更新节点上的 PEM 证书包并进入严格滚动。新旧证书由同一 CA 签发、彼此互信，因此不需要分阶段互换信任；健康预检失败时不会开始轮换，节点上的现有证书保持不变。


--------

## 集群下线

集群移除不在 `kafka.yml` 中，而是使用独立的 [`kafka-rm.yml`](https://github.com/pgsty/pigsty/blob/main/kafka-rm.yml) 剧本：

```bash
./kafka-rm.yml -l kf-main                          # 移除集群：注销监控、停服务、删配置，默认删除数据与 Manifest
./kafka-rm.yml -l kf-main -e kafka_rm_data=false   # 保留磁盘数据，只移除服务与配置
./kafka-rm.yml -l kf-main -e kafka_rm_pkg=true     # 同时卸载 kafka-stack 软件包（共享的 Java 运行时不会卸载）
```

执行顺序为：注销 VictoriaMetrics Target（`kafka_deregister`）→ 停止并禁用 `kafka`/`kafka_exporter` 服务（`kafka`）→ 删除配置、Systemd Unit 与辅助脚本（`kafka_config`）→ 删除数据目录与管理节点 Manifest/Secret/PKI 缓存（`kafka_data`，受 `kafka_rm_data` 控制）→ 可选卸载软件包（`kafka_pkg`，受 `kafka_rm_pkg` 控制）。

防误删开关是 `kafka_safeguard`：设置为 `true`（命令行或清单中）时剧本直接中止，不删除任何东西。

{{% alert title="永久删除" color="danger" %}}
`kafka_rm_data` 默认为 `true`：一次默认参数的 `kafka-rm.yml` 就会删除所选节点的数据/KRaft 元数据、节点安全状态与管理节点上的 Bootstrap Manifest、Secret 与 PKI 缓存。剧本没有确认字符串等额外闸门，执行前必须人工核对 `-l` 目标、备份或明确重建意图，并评估生产者/消费者影响。
{{% /alert %}}

`kafka-rm.yml` 也可以只选择单个成员用于缩容（如 `-l 10.10.10.13`）。但移除 Controller-capable 成员属于 quorum 成员变更，必须先完成显式 `remove-controller` 流程并确认新多数派；身份冲突、Exporter 异常或一般启动失败都不是删除数据的理由。


--------

## 剧本边界

`kafka.yml` 当前不会自动完成：

- Controller `add-controller` / `remove-controller` 成员流程；
- 新 Broker 加入后的既有 Partition Reassignment、退役 Drain 与数据均衡；
- 已有 Topic RF 变化、Topic 删除或用户删除；
- 已格式化集群 `plaintext` 与 `scram` 之间的在线迁移；
- Kafka 版本升级、Feature Level 终结、跨版本迁移与回滚；
- Kafka 数据备份、恢复编排与灾难演练；
- Connect、Schema Registry、MirrorMaker、Cruise Control 等生态组件。

这些操作需要独立的生产运行手册。日常只读检查和资源管理见 [日常管理](/docs/kafka/admin)。
