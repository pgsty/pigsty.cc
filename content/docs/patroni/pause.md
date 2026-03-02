---
title: "集群的暂停/恢复模式"
linkTitle: "暂停/恢复集群"
weight: 100
icon: fa-solid fa-stopwatch
description: "Patroni 集群管理中的暂停与恢复模式行为说明。"
module: [PATRONI]
category: [Task]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/pause.html

<a id="pause"></a>

--------

## 目标

在某些特殊情况下，Patroni 需要临时退出对集群的管理，同时仍在 DCS 中保留集群状态。典型使用场景包括对集群执行一些不常见的操作，例如大版本升级或数据损坏恢复。在此类操作期间，节点往往会因 Patroni 未知的原因频繁启停，某些节点甚至可能被临时提升为主库，从而打破"同一时间只能有一个主库"的假设。为此，Patroni 需要具备从运行中的集群"脱离"的能力，实现类似 Pacemaker 维护模式的效果。

--------

## 实现机制

当 Patroni 处于暂停模式时，它不会更改 PostgreSQL 的状态，以下情况除外：

- 每个节点在 DCS 中的成员键会更新为集群的当前信息，Patroni 因此会对运行中的成员节点执行只读查询。
- 对于持有领导者锁的 PostgreSQL 主库，Patroni 会持续更新该锁。若持有领导者锁的节点不再是主库（即被手动降级），Patroni 将释放该锁，而不是将该节点重新提升为主库。
- 允许执行手动非计划重启、手动非计划故障转移/主从切换以及重新初始化操作；不允许执行任何计划任务。手动主从切换仅在指定了目标节点时才被允许。
- 若 Patroni 检测到存在"并行"主库，会发出警告，但不会对没有领导者锁的主库执行降级操作。
- 若集群中不存在领导者锁，正在运行的主库将获取该锁；若存在多个主库，则第一个获取锁的主库胜出。若完全没有主库，Patroni 不会尝试提升任何从库。此规则有一个例外：若领导者锁不存在的原因是旧主库因手动提升而自行降级，则只有提升请求中指定的候选节点才能获取领导者锁。新的领导者锁授予后（即从库被手动提升后），Patroni 会确保原先从旧主库拉取流复制的从库切换到新主库。
- 当 PostgreSQL 停止后，Patroni 不会尝试重新启动它；当 Patroni 停止后，也不会尝试停止其所管理的 PostgreSQL 实例。
- Patroni 不会尝试删除既不代表其他集群成员、也未在永久复制槽配置中列出的复制槽。

--------

## 使用指南

[**patronictl**](/docs/patroni/patronictl#patronictl) 支持 [`pause`](/docs/patroni/patronictl#patronictl_pause) 和 [`resume`](/docs/patroni/patronictl#patronictl_resume) 命令。

也可以向 **`{namespace}/{cluster}/config`** 键发送携带 **`{"pause": true/false/null}`** 的 **`PATCH`** 请求来实现同等效果。
