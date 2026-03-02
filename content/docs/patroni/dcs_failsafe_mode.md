---
title: "DCS 故障安全模式"
weight: 110
icon: fa-solid fa-shield-halved
description: "DCS 故障安全模式的行为机制、启用条件与操作注意事项。"
module: [PATRONI]
category: [Concept]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/dcs_failsafe_mode.html

<a id="dcs_failsafe_mode"></a>

--------

## 问题背景

Patroni 高度依赖分布式配置存储（DCS）来完成领导者选举和检测网络分区。具体而言，节点只有在能够成功更新 DCS 中的领导者锁时，才被允许以主库身份运行 PostgreSQL。一旦领导者锁更新失败，PostgreSQL 将立即被降级并以只读模式启动。触发该"问题"的概率因所使用的 DCS 而异——例如，当 Etcd 专用于 Patroni 时，发生概率接近于零；而当使用以 Etcd 为后端的 Kubernetes API 时，则可能更为频繁。

--------

## 现有实现的设计原因

领导者锁更新失败通常由以下两种原因导致：

1.  网络分区
2.  DCS 宕机

单个节点通常无法区分这两种情况，因此 Patroni 默认假设最坏情况——网络分区。在网络分区的情形下，Patroni 集群的其他节点可能成功获取领导者锁并将 PostgreSQL 提升为主库。为避免脑裂，旧主库将在领导者锁过期之前主动降级。

--------

## DCS 故障安全模式

我们引入了一个新的特殊选项：`failsafe_mode`。该选项只能通过存储在 DCS `/config` 键中的全局 [**动态配置**](/docs/patroni/config/dynamic#dynamic) 来启用。启用故障安全模式后，若领导者锁更新失败的原因并非版本/值/索引不匹配，且主库能够通过 Patroni REST API 访问集群中所有已知成员，则 PostgreSQL 可以继续以主库身份运行。

--------

## 底层实现细节

- 在 DCS 中引入一个新的永久键 `/failsafe`。
- `/failsafe` 键记录给定时刻该 Patroni 集群所有已知成员的信息。
- 由当前领导者节点负责维护 `/failsafe` 键。
- 只有出现在 `/failsafe` 键中的成员才有资格参与领导者竞选并成为新的领导者。
- 若集群仅有单个节点，`/failsafe` 键将只包含该节点。
- 当 DCS 发生"中断"时，现有主库通过 `POST /failsafe` REST API 联系 `/failsafe` 键中所有成员，若所有从库均确认其存活，则主库可以继续运行。
- 若任何一个成员无响应，主库将被降级。
- 从库将收到的 `POST /failsafe` REST API 请求作为主库仍然存活的信号，该信息将被缓存 `ttl` 秒。

--------

## 常见问题

- **为什么当前主库必须能访问所有其他成员？不能依赖法定人数吗？**

  这是一个很好的问题！问题在于，DCS 和 Patroni 对法定人数的"视图"可能存在差异。DCS 节点必须均匀分布在各可用区，但 Patroni 节点没有这样的规则，更重要的是，目前也没有引入和强制执行此规则的机制。如果多数 Patroni 节点（包括主库）落在网络分区的失败侧，而少数节点在成功侧，那么主库就必须被降级。只有检查所有其他成员，才能发现这种情况。

- **如果在 DCS 宕机期间某个节点/Pod 被终止，会发生什么？**

  当 DCS 不可访问时，"所有其他集群成员是否均可访问？"的检查将在每次心跳循环（每 `loop_wait` 秒一次）中执行。若某个 Pod/节点被终止，该检查将失败，PostgreSQL 将被降级为只读，并在 DCS 恢复之前保持该状态。

- **如果在 DCS 宕机期间 Patroni 集群的所有成员全部丢失，会发生什么？**

  Patroni 可以配置为在集群无领导者时从备份中创建新的从库。但如果新成员不在 `/failsafe` 键中，它将无法获取领导者锁并执行提升操作。

- **如果主库失去了对 DCS 的访问权限，而从库没有，会发生什么？**

  主库将执行故障安全代码，联系所有已知从库。从库将把这一信息视为主库仍然存活的信号，即使 DCS 中的领导者锁已经过期，它们也不会发起领导者竞选。

- **如何启用故障安全模式？**

  在启用 `failsafe_mode` 之前，请确保所有成员上的 Patroni 版本都是最新的。之后，可以使用 `PATCH /config` [**REST API**](/docs/patroni/rest_api#rest_api) 或执行 [`patronictl edit-config -s failsafe_mode=true`](/docs/patroni/patronictl#patronictl_edit_config_parameters) 命令来启用该功能。
