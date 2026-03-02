---
title: "复制模式"
weight: 70
icon: fa-solid fa-share-nodes
description: "Patroni 管理的异步与同步复制模式。"
module: [PATRONI]
category: [Concept]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/replication_modes.html

<a id="replication_modes"></a>
Patroni 使用 PostgreSQL 流复制。关于流复制的更多信息，请参阅 [Postgres 文档](http://www.postgresql.org/docs/current/static/warm-standby.html#STREAMING-REPLICATION)。默认情况下，Patroni 将 PostgreSQL 配置为异步复制。选择哪种复制方案取决于你的业务需求。建议同时研究异步和同步复制，以及其他高可用方案，以确定最适合自己的解决方案。

--------

## 异步模式的持久性

在异步模式下，集群允许丢失部分已提交的事务以保证可用性。当主库故障或因任何其他原因变得不可用时，Patroni 会自动将一个足够健康的备库提升为主库。尚未复制到该备库的事务将残留在主库的"分叉时间线"中，实际上无法恢复[^1]。

可能丢失的事务量通过 **`maximum_lag_on_failover`** 参数控制。由于主库事务日志位置不是实时采样的，故障转移时实际丢失数据量的最坏情况上限为：**`maximum_lag_on_failover`** 字节的事务日志，加上最后 **`ttl`** 秒内写入的数据量（平均情况约为 **`loop_wait`**/2 秒内的写入量）。然而，在典型的稳定状态下，复制延迟通常远低于一秒。

默认情况下，执行领导者选举时，Patroni 不考虑从库的当前时间线，这在某些情况下可能并不合适。将 **`check_timeline`** 参数改为 **`true`**，可以防止时间线与前主库不同的节点成为新的领导者。

--------

## PostgreSQL 同步复制

你可以将 Postgres 的 [同步复制](http://www.postgresql.org/docs/current/static/warm-standby.html#SYNCHRONOUS-REPLICATION) 与 Patroni 配合使用。同步复制通过确认写入已写到从库后再向客户端返回成功，来保证集群的一致性。代价是写入延迟增加、写入吞吐量降低——吞吐量完全取决于网络性能。

在托管数据中心环境（如 AWS、Rackspace 或任何你无法控制的网络）中，同步复制会显著增加写入性能的波动性。如果从库无法从主库访问，主库实际上将变为只读。

要启用简单的同步复制测试，请在 YAML 配置文件的 **`parameters`** 节中添加如下内容：

```yaml
synchronous_commit: "on"
synchronous_standby_names: "*"
```

使用 PostgreSQL 同步复制时，建议至少使用三个 Postgres 数据节点，以确保一台主机故障时写入仍然可用。

在所有情况下，使用 PostgreSQL 同步复制并不能保证零事务丢失。当主库和当前充当同步从库的备库同时故障时，可能会提升一个不包含所有事务的第三个节点。

<a id="synchronous_mode"></a>

--------

## 同步模式

对于不允许丢失已提交事务的使用场景，你可以开启 Patroni 的 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode)。开启后，Patroni 只有在确认备库包含所有可能已向客户端返回成功提交状态的事务后，才会将其提升为主库[^2]。这意味着即使部分服务器可用，系统也可能无法进行写入。系统管理员仍然可以使用手动故障转移命令来提升备库，即使这会导致事务丢失。

开启 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 并不能在所有情况下保证多节点的提交持久性。当没有合适的备库可用时，主库仍然会接受写入，但不保证数据已复制。此模式下主库故障时不会有备库被自动提升。当原主库重新上线后，它会被自动提升，除非系统管理员执行了手动故障转移。这一行为使得同步模式可以在两节点集群中使用。

[`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 开启时，若备库崩溃，提交操作将阻塞，直到 Patroni 下一次迭代运行并将主库切换为独立模式（写入最坏延迟为 **`ttl`** 秒，平均情况约为 **`loop_wait`**/2 秒）。手动关闭或重启备库不会导致提交服务中断——备库会在 PostgreSQL 关闭启动前通知主库解除其同步备库职责。

当绝对有必要保证每次写入都持久存储在至少两个节点上时，请在开启 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 的同时启用 **`synchronous_mode_strict`**。该参数防止 Patroni 在没有同步备库候选节点时关闭主库上的同步复制。其缺点是，在至少一个同步从库上线之前，主库将不可用于写入（除非 Postgres 事务显式关闭 **`synchronous_commit`**），所有客户端写入请求都会被阻塞。

将 **`nosync`** 标签设为 **`true`** 可以确保某个备库永远不会成为同步备库。建议对位于低速网络连接后方、成为同步备库时会导致性能下降的备库设置此标签。将 **`nostream`** 标签设为 **`true`** 也有相同效果。

同步模式可以通过 **`patronictl edit-config`** 命令或 Patroni REST 接口来开启和关闭。详见 [**动态配置**](/docs/patroni/config/dynamic#dynamic) 中的说明。

注意：由于 PostgreSQL 中同步复制的实现方式，即使使用 **`synchronous_mode_strict`**，仍然有可能丢失事务。如果 PostgreSQL 后端在等待确认复制时被取消（由于客户端超时或后端故障导致的数据包取消），事务变更对其他后端已经可见。此类变更尚未完成复制，在备库提升的情况下可能会丢失。

--------

## 同步复制因子

参数 **`synchronous_node_count`** 用于 Patroni 管理同步备库数量，默认值为 **`1`**。当 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 设置为 **`off`** 时，此参数无效。启用后，Patroni 根据 **`synchronous_node_count`** 精确管理同步备库数量，并随着成员的加入和离开调整 DCS 中的状态及 PostgreSQL 中的 **`synchronous_standby_names`**。如果该参数设置的值高于符合条件的节点数，Patroni 将自动降低该值。

--------

## 同步节点的最大延迟

默认情况下，Patroni 会坚持使用根据 **`pg_stat_replication`** 视图已声明为 **`synchronous`** 的节点，即使存在其他进度更靠前的节点。这样做是为了尽量减少 **`synchronous_standby_names`** 的变更次数。要改变此行为，可以使用 **`maximum_lag_on_syncnode`** 参数，它控制从库最多可以落后多少，仍被视为"同步"状态。

Patroni 在存在多个备库时使用最大从库 LSN，否则使用主库当前的 WAL LSN。默认值为 **`-1`**，当该值设置为 **`0`** 或更小时，Patroni 不会替换不健康的同步备库。请将该值设置得足够大，以避免在高事务量期间 Patroni 频繁切换同步备库。

--------

## 同步模式的实现原理

在同步模式下，Patroni 在 DCS 的 **`/sync`** 键中维护同步状态，其中包含最新的主库及当前的同步备库。该状态的更新遵循严格的顺序约束，以确保以下不变式：

- 节点能够接受写事务时，必须被标记为最新的领导者。Patroni 崩溃或 PostgreSQL 未正常关闭可能导致违反此不变式。
- 只要节点在 DCS 的 **`/sync`** 键中被发布为同步备库，它就必须在 PostgreSQL 中被设置为同步备库。
- 既不是领导者也不是当前同步备库的节点，不允许自动提升自身。

Patroni 将根据 **`synchronous_node_count`** 参数，仅将一个或多个同步备库分配给 **`synchronous_standby_names`**。

在每次 HA 循环迭代中，Patroni 都会重新评估同步备库的选择。如果当前同步备库列表处于连接状态，且没有请求解除其同步状态，则继续保留。否则，将选择可用于同步且复制进度最靠前的集群成员。

### 示例：

#### DCS 中的 **`/config`** 键

```yaml
synchronous_mode: on
synchronous_node_count: 2
...
```

#### DCS 中的 **`/sync`** 键

```json
{
    "leader": "node0",
    "sync_standby": "node1,node2"
}
```

#### postgresql.conf

```ini
synchronous_standby_names = 'FIRST 2 (node1,node2)'
```

在上述示例中，只有 **`node1`** 和 **`node2`** 被认为是同步节点，并被允许在主库（**`node0`**）故障时自动提升。

<a id="quorum_mode"></a>

--------

## 法定人数提交模式

从 PostgreSQL v10 起，Patroni 支持基于法定人数的同步复制。

在此模式下，Patroni 在 DCS 中维护同步状态，包含最新已知的主库、达成法定人数所需的节点数以及当前有资格投票的节点。在稳定状态下，参与法定人数投票的节点为主库和所有同步备库。该状态的更新遵循严格的顺序约束（涉及节点提升和 **`synchronous_standby_names`**），以确保任何时刻能够达成法定人数的投票者子集中，至少包含一个拥有最新成功提交的节点。

在每次 HA 循环迭代中，Patroni 根据节点可用性和请求的集群配置，重新评估同步备库的选择和法定人数。在 PostgreSQL 9.6 以上版本中，所有符合条件的节点一旦复制追上主库，就会被添加为同步备库。

法定人数提交有助于降低最坏情况的延迟，即使在正常运行期间也是如此——某个备库的高复制延迟可以由其他备库来补偿。

基于法定人数的同步模式可以通过 **`patronictl edit-config`** 命令或 Patroni REST 接口，将 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 设置为 **`quorum`** 来启用。详见 [**动态配置**](/docs/patroni/config/dynamic#dynamic) 中的说明。

其他参数如 **`synchronous_node_count`**、**`maximum_lag_on_syncnode`** 和 **`synchronous_mode_strict`**，在 **`synchronous_mode=on`** 下的工作方式与此相同。

### 示例：

#### DCS 中的 **`/config`** 键

```yaml
synchronous_mode: quorum
synchronous_node_count: 2
...
```

#### DCS 中的 **`/sync`** 键

```json
{
    "leader": "node0",
    "sync_standby": "node1,node2,node3",
    "quorum": 1
}
```

#### postgresql.conf

```ini
synchronous_standby_names = 'ANY 2 (node1,node2,node3)'
```

在上述示例中，如果主库（**`node0`**）故障，**`node1`**、**`node2`**、**`node3`** 中会有两个节点收到了最新的事务，但我们不知道是哪两个。要确认 **`node1`** 是否收到了最新事务，需要将其 LSN 与 **`node2`** 和 **`node3`** 中**至少**一个节点（**`/sync`** 键中的 **`quorum=1`**）的 LSN 进行比较。如果 **`node1`** 的 LSN 不落后于其中至少一个节点，则可以保证提升 **`node1`** 时不会有用户可见的数据丢失。

[^1]: 数据仍然存在，但恢复它需要数据恢复专家进行手动操作。当 Patroni 允许使用 **`use_pg_rewind`** 进行回卷时，分叉时间线将被自动清除，使故障主库重新加入集群。但为使 **`use_pg_rewind`** 正常工作，集群初始化时必须启用 **`data page checksums`**（**`initdb`** 的 **`--data-checksums`** 选项），和/或将 **`wal_log_hints`** 设置为 **`on`**。

[^2]: 客户端可以通过 PostgreSQL 的 **`synchronous_commit`** 设置按事务更改此行为。**`synchronous_commit`** 值为 **`off`** 和 **`local`** 的事务在故障转移时可能丢失，但不会因复制延迟而阻塞。
