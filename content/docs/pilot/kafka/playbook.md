---
title: 预置剧本
weight: 5045
description: 使用 kafka.yml 执行 dynamic KRaft 生命周期、严格滚动、资源收敛、轮换与清理。
icon: fa-solid fa-scroll
module: [KAFKA]
categories: [任务]
---


KAFKA 模块提供 [`kafka.yml`](https://github.com/pgsty/pigsty/blob/main/kafka.yml)，用于部署 Apache Kafka 4.x dynamic KRaft 集群并收敛其安全、资源与监控状态。

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

## 五个执行阶段

`kafka.yml` 把生命周期拆成五个 Play；只有准入与严格滚动阶段使用 `serial: 1`：

| 阶段 | 并发/串行 | 作用 |
|:---|:---|:---|
| `KAFKA PREPARE` | 全集群准备 | 身份/拓扑预检、软件包、安全材料、Manifest、配置渲染、现场健康与静态指纹判定 |
| `KAFKA CONVERGE` | 按角色收敛 | 不健康/停止集群先启动 Controller 并验证 dynamic quorum，再暴露纯 Broker |
| `KAFKA BROKER ADMISSION` | `serial: 1` | 健康集群逐个准入新格式化的纯 Broker，并验证注册/非 Fenced |
| `KAFKA STRICT ROLLING` | `serial: 1` | 健康集群静态变化时逐节点执行前置门禁、重启、追平与后置门禁 |
| `KAFKA FINALIZE` | 全集群收尾 | 收敛动态配置、Topic/User/ACL/Quota、Exporter 放置和 VictoriaMetrics Target |
{.full-width}

所有 Play 都使用 `any_errors_fatal: true`。某个阶段失败时，后续危险推进会停止；修正原因后可以重跑完整集群，角色会从现场状态和持久指纹恢复，而不是盲目重复格式化。


--------

## 生命周期路径

PREPARE 使用一套角色自有管理通道判断集群健康，并选择唯一后续路径：

### 冷启动、首次部署或修复

当集群停止或健康谓词不通过时，进入 Converge：

1. 启动所有 Controller-capable 节点；
2. 等待 Controller listener 与 dynamic quorum Leader；
3. 验证初始 Controller Directory ID 仍在现场 quorum；
4. 启动纯 Broker；
5. 等待 Broker listener 并要求完整集群健康；
6. 只有配置已证明成功运行后，才持久化静态指纹。

JMX 不参与生命周期门禁，因此关闭 JMX 不会改变 Kafka 的启动判定，但会显著降低观测能力。


### 健康集群增加纯 Broker

角色只自动准入新格式化的 `kafka_role: broker`。每次处理一个新 Broker，并要求它已经注册且未 Fenced 后才继续。新增 Controller 或 combined 节点不能走该捷径。

准入只证明服务加入；已有 Partition 不会自动迁移到新 Broker，必须另行执行显式 Reassignment。


### 健康集群静态变化

当渲染后的静态指纹变化时，Strict Rolling 每次只处理一个节点：

- 重启前检查 Controller 多数派、全部 Voter 零 Lag 且最近完成追平、Offline Partition、Under Replicated、Under Min ISR，以及移除目标后每个 Partition 的有效 ISR；
- 重启后要求目标 Controller 回到 Voter 且重新追平、目标 Broker 注册且未 Fenced、其副本重新进入 ISR；
- 任一门禁失败立即停止后续节点。

如果故障修复与静态变化同时存在，Converge 只启动已停止的 Controller，不并行重启仍在线成员；quorum 恢复并追平后，尚未加载的静态变化继续进入 Strict Rolling。

如果静态指纹没有变化，Kafka 不重启。动态资源变化仍会在 Finalize 在线收敛。


--------

## 任务标签

| 标签 | 阶段/作用 |
|:---|:---|
| `kafka-id` | 始终执行的身份、完整集群与拓扑派生 |
| `kafka_prepare` | PREPARE 总入口 |
| `kafka_pkg` | 平台映射、Java 与 `kafka-stack` 软件包 |
| `kafka_config` | Manifest、安全材料、配置、Systemd 与静态指纹准备 |
| `kafka_boot` | KRaft Identity、Manifest 与一次性格式化保护 |
| `kafka_converge` | 不健康/停止集群收敛 |
| `kafka_admission` | 健康集群纯 Broker 串行准入 |
| `kafka_rolling` | 健康集群严格单节点滚动 |
| `kafka_launch` | Converge/Admission/Rolling 的服务与健康动作 |
| `kafka_finalize` | FINALIZE 总入口 |
| `kafka_resource` | 动态 minISR、Topic、User、ACL 与 Quota 收敛 |
| `kafka_exporter` | 最多两个协议 Exporter 的放置与清理 |
| `kafka_register` | JMX/协议 Exporter 文件发现 Target |
| `kafka_clean` | 带 `never` 的危险清理入口 |
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

活集群是运行事实权威，但普通剧本不会在冲突时擅自改写任何一方：

- 健康 dynamic 集群缺失 Manifest 时可从现场重建；
- Manifest 存在而所有数据盘为空时失败关闭；
- Cluster ID、安全模式或 Controller Identity 冲突时失败关闭；
- inventory 中新增的非初始 Controller 不会自动成为 Voter。

不要删除 `meta.properties`、Manifest 或 Secret 来绕过保护。


--------

## 静态指纹与可恢复重跑

角色对影响 Kafka 进程的静态文件计算期望指纹，并只在以下条件之一成立后写入 `/etc/kafka/.pigsty-applied-static.sha256`：

- Converge 已经成功启动并通过全局健康检查；
- Strict Rolling 已经让该节点重启、追平并通过后置门禁。

如果执行中断，未被证明生效的变化不会被记成“已应用”。下一次完整重跑仍能识别待处理的静态重启。


--------

## Finalize 与资源收敛

完整健康后，Finalize：

1. 收敛角色拥有的动态 cluster minISR；
2. 幂等处理 `kafka_users` 的凭据、ACL 与声明 Quota；
3. 幂等处理 `kafka_topics` 的创建、Partition 增长与显式配置；
4. 检查内部 Topic RF 漂移，但不自动 Reassignment；
5. 在按 `kafka_seq` 排序后的前两个 Broker-capable 节点部署协议 Exporter；
6. 停止并删除落选节点的 Exporter Unit、环境、CA 副本和 Target；
7. 在全部 Infra 节点生成或清理 JMX/Exporter 文件发现 Target。

监控目标路径：

```text
/infra/targets/kafka/<kafka_instance>.yml
/infra/targets/kafka_exporter/<kafka_instance>.yml
```


--------

## 受保护轮换

轮换变量是一次性 extra-vars，不应写入 `pigsty.yml`。两种动作互斥，且只允许在已格式化、健康的 `scram` 集群执行。

### 内部凭据轮换

```bash
./kafka.yml --check -l kf-main \
  -e kafka_rotate_credentials=true \
  -e kafka_rotate_confirm=kf-main

./kafka.yml -l kf-main \
  -e kafka_rotate_credentials=true \
  -e kafka_rotate_confirm=kf-main
```

角色使用 active/standby 内部身份：先通过活管理通道更新非活动凭据，再原子切换本地受保护记录，并进入正常 Strict Rolling。旧 active 保留为下一轮 standby，使中断后的重跑可恢复。


### 证书轮换

```bash
./kafka.yml --check -l kf-main \
  -e kafka_rotate_certificates=true \
  -e kafka_rotate_confirm=kf-main

./kafka.yml -l kf-main \
  -e kafka_rotate_certificates=true \
  -e kafka_rotate_confirm=kf-main
```

角色先要求管理端与节点 UTC 时钟偏差不超过 30 秒，在隔离 staging 目录生成并验证完整证书集合，全部通过后才提升为 active，随后重建 Keystore 并严格滚动。时钟或生成预检失败不会替换当前有效证书集。


--------

## 危险清理

清理任务带有 Ansible `never` 标签，且要求：

1. 精确完整集群 `-l`；
2. `--tags kafka_clean`；
3. `kafka_clean=true`；
4. `kafka_clean_confirm` 与 `kafka_cluster` 完全一致；
5. `kafka_data` 是受保护规则允许的专用绝对路径。

先检查命令：

```bash
./kafka.yml --check -l kf-main --tags kafka_clean \
  -e kafka_clean=true \
  -e kafka_clean_confirm=kf-main
```

真实清理命令仅供经批准的运行手册使用：

```bash
./kafka.yml -l kf-main --tags kafka_clean \
  -e kafka_clean=true \
  -e kafka_clean_confirm=kf-main
```

{{% alert title="永久删除" color="danger" %}}
清理会停止 Kafka，并删除所选集群的数据/KRaft 元数据、节点本地安全状态、监控 Target、Bootstrap Manifest 与角色自有 Secret/PKI。执行前必须确认精确集群、验证可恢复备份或明确重建意图、评估生产者/消费者影响，并取得操作者对目标集群名的再次确认。
{{% /alert %}}

身份冲突、Exporter 异常或一般启动失败都不是清理理由。


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

这些操作需要独立的生产运行手册。日常只读检查和资源管理见 [日常管理](/docs/pilot/kafka/admin)。
