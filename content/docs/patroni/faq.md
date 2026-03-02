---
title: "常见问题"
weight: 180
icon: fa-solid fa-circle-question
description: "关于 Patroni 运维与故障排查的常见问题解答。"
module: [PATRONI]
category: [Reference]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/faq.html

<a id="faq"></a>
本节收录了关于 Patroni 最常见问题的解答，各子节聚焦于不同类别的问题。

希望这些内容能帮你解答大多数疑问。如果仍有疑问或遇到意外问题，请参阅 [chatting](/docs/patroni/contributing/contributing_guidelines#chatting) 和 [reporting_bugs](/docs/patroni/contributing/contributing_guidelines#reporting_bugs)，了解如何获取帮助或提交问题报告。

--------

## 与其他高可用方案的比较

**为什么 Patroni 需要独立的 DCS 节点集群，而 `repmgr` 等其他方案不需要？**

实现高可用方案有多种不同方式，各有优缺点。

`repmgr` 等软件通过节点间通信来决定何时采取行动。

而 Patroni 则依赖存储在 DCS 中的状态，DCS 是 Patroni 决策的唯一可信来源。

虽然独立的 DCS 集群会使架构变得复杂，但这种方式也降低了 Postgres 集群发生脑裂（split-brain）的可能性。

**Patroni 与其他高可用方案在 Postgres 管理方面有何不同？**

Patroni 不仅管理 Postgres 集群的高可用，还全面管理 Postgres 本身。

如果 Postgres 节点尚不存在，Patroni 会负责引导主库和备库节点，并管理各节点的 Postgres 配置。如果 Postgres 节点已存在，Patroni 将接管集群的管理。

除此之外，Patroni 还具备自愈能力。若主库节点故障，Patroni 不仅会故障转移到从库，还会尝试将原主库以从库身份重新加入新主库。同样，若从库故障，Patroni 也会尝试重新加入该从库。

这就是我们将 Patroni 称为"高可用方案模板"的原因——它不仅仅管理物理复制，而是对 Postgres 进行整体管理。

--------

## DCS

**可以使用同一个 `etcd` 集群存储两个或多个 Patroni 集群的数据吗？**

可以！

Patroni 集群的信息以 `namespace` 和 `scope` 为路径前缀存储在 DCS 中。

只要不同 Patroni 集群之间的 namespace 和 scope 不冲突，就可以使用同一个 DCS 集群存储多个 Patroni 集群的信息。

**如果为指向同一 DCS 集群的不同 Patroni 集群使用相同的 `namespace` 和 `scope` 组合，会发生什么？**

第二个尝试使用相同 `namespace` 和 `scope` 的 Patroni 集群将无法管理 Postgres，因为它会在 DCS 中找到与该组合相关的信息，但 Postgres 系统标识符不匹配。系统标识符不匹配会导致 Patroni 中止对第二个集群的管理——Patroni 会认为这是一个不同的集群，用户配置了错误的 Patroni。

在处理共享同一 DCS 集群的不同 Patroni 集群时，请确保使用不同的 `namespace` / `scope`。

**DCS 集群丢失了会怎样？**

DCS 主要用于存储 Patroni 集群的状态和动态配置。

最直接的后果是，所有依赖该 DCS 的 Patroni 集群将进入只读模式——除非启用了 [dcs_failsafe_mode](/docs/patroni/dcs_failsafe_mode#dcs_failsafe_mode)。

**DCS 集群丢失后该怎么做？**

丢失 DCS 集群后有三种可能的处置方式：

1. DCS 集群完全恢复：Patroni 侧无需任何操作。DCS 集群恢复后，Patroni 也应能自动恢复；
2. DCS 集群在原地重建，端点保持不变：Patroni 侧无需任何变更；
3. 新建一个端点不同的 DCS 集群：需要在每个 Patroni 节点的配置中更新 DCS 端点。

如果遇到第 `2.` 或第 `3.` 种情况，Patroni 会根据集群当前状态重新创建状态信息，并基于存储在每个 Patroni 集群成员 Postgres 数据目录中名为 `patroni.dynamic.json` 的备份文件，在 DCS 中重建动态配置。

**DCS 集群丧失多数节点会怎样？**

DCS 将变得无响应，这会导致 Patroni 将当前的读写 Postgres 节点降级。

请记住：Patroni 依赖 DCS 的状态来对集群采取行动。

你可以使用 [dcs_failsafe_mode](/docs/patroni/dcs_failsafe_mode#dcs_failsafe_mode) 来缓解这种情况。

--------

## patronictl

**必须在 Patroni 主机上运行 [patronictl](/docs/patroni/patronictl#patronictl) 吗？**

不需要。

在 Patroni 主机上运行 [patronictl](/docs/patroni/patronictl#patronictl) 很方便，因为可以直接使用 `patroni` 代理的配置文件。

但 [patronictl](/docs/patroni/patronictl#patronictl) 本质上是一个客户端，可以从远程机器上执行。只需提供足够的配置，使其能够访问 DCS 和 Patroni 成员的 REST API 即可。

**为什么 [patronictl_list](/docs/patroni/patronictl#patronictl_list) 命令的输出中，某个 Patroni 成员的信息消失了？**

[patronictl_list](/docs/patroni/patronictl#patronictl_list) 显示的信息基于 DCS 的内容。

如果某个成员的信息从 DCS 中消失，很可能是该节点上的 Patroni 代理已停止运行，或者无法与 DCS 通信。

由于该成员无法更新其信息，信息最终会从 DCS 中过期，该成员也就不再出现在 [patronictl_list](/docs/patroni/patronictl#patronictl_list) 的输出中。

**为什么 [patronictl_list](/docs/patroni/patronictl#patronictl_list) 命令输出中某个 Patroni 成员的信息不是最新的？**

[patronictl_list](/docs/patroni/patronictl#patronictl_list) 显示的信息基于 DCS 的内容。

默认情况下，该信息由 Patroni 大约每 `loop_wait` 秒更新一次。换句话说，即使一切正常，你仍可能看到 DCS 中存储的信息有最多 `loop_wait` 秒的"延迟"。

但请注意，这并不是一成不变的规则。Patroni 执行的某些操作会立即更新 DCS 信息。

--------

## 配置

**动态配置与本地配置有什么区别？**

动态配置（或全局配置）是存储在 DCS 中的配置，适用于 Patroni 集群的所有成员，是存储配置的首选位置。

特定于某个节点的配置，或希望覆盖全局配置的配置，应仅在目标 Patroni 成员上设置为本地配置。本地配置可以通过配置文件或环境变量来指定。

更多详情请参阅 [config](/docs/patroni/config#config)。

**Patroni 的配置类型有哪些？优先级如何？**

配置类型包括：

- 动态配置：适用于所有成员；
- 本地配置：适用于本地成员，覆盖动态配置；
- 环境配置：适用于本地成员，覆盖动态配置和本地配置。

**注意：** 某些 Postgres GUC 只能全局设置，即通过动态配置。此外，还有一些 GUC 的值由 Patroni 强制硬编码。

更多详情请参阅 [config](/docs/patroni/config#config)。

**有没有工具可以帮我创建 Patroni 配置文件？**

有的。

你可以使用 `patroni --generate-sample-config` 或 `patroni --generate-config` 命令，分别生成示例 Patroni 配置文件，或基于现有 Postgres 实例生成 Patroni 配置文件。

详情请参阅 [generate_sample_config](/docs/patroni/config#generate_sample_config) 和 [generate_config](/docs/patroni/config#generate_config)。

**我修改了 `bootstrap.dcs` 下的参数，但 Patroni 没有将更改应用到集群成员。哪里出了问题？**

`bootstrap.dcs` 下配置的值仅在引导全新集群时使用，这些值会在引导过程中写入 DCS。

引导阶段完成后，只能通过 DCS 来修改动态配置。

请参阅下一个问题了解更多详情。

**如何修改动态配置？**

需要在 DCS 中修改配置，可以通过以下方式实现：

- [patronictl_edit_config](/docs/patroni/patronictl#patronictl_edit_config)；或
- 向 [config_endpoint](/docs/patroni/rest_api#config_endpoint) 发送 `PATCH` 请求。

**如何修改本地配置？**

需要修改对应 Patroni 成员的配置文件，并向 Patroni 代理发送 `SIGHUP` 信号。可以通过以下任一方式实现：

- 向 REST API 的 [reload_endpoint](/docs/patroni/rest_api#reload_endpoint) 发送 `POST` 请求；或

- 运行 [patronictl_reload](/docs/patroni/patronictl#patronictl_reload)；或

- 在本地向 Patroni 进程发送 `SIGHUP` 信号：

  > - 如果通过 systemd 启动了 Patroni，可以使用命令 `systemctl reload PATRONI_UNIT.service`，其中 `PATRONI_UNIT` 为 Patroni 服务的名称；或
  > - 如果通过其他方式启动了 Patroni，需要找到 `patroni` 进程并运行 `kill -s HUP PID`，其中 `PID` 为 `patroni` 进程的进程 ID。

**注意：** 在以下情况下，通过 [patronictl_reload](/docs/patroni/patronictl#patronictl_reload) 进行重载可能无法正常工作：

- REST API 证书过期：可以使用 [patronictl](/docs/patroni/patronictl#patronictl) 的 `-k` 选项来规避；
- 凭据错误：例如在配置文件中修改了 `restapi` 或 `ctl` 凭据，而 Patroni 和 [patronictl](/docs/patroni/patronictl#patronictl) 使用了同一份配置文件。

**如何修改环境配置？**

环境配置只在 Patroni 启动时读取。

因此，修改环境配置后需要重启相应的 Patroni 代理。

注意不要导致集群发生故障转移！你可能需要先查看 [patronictl_pause](/docs/patroni/patronictl#patronictl_pause)。

**修改需要重载的 Postgres GUC 时会发生什么？**

当你按照上述方法修改动态配置或本地配置时，Patroni 会自动帮你重载 Postgres 配置。

**修改需要重启的 Postgres GUC 时会发生什么？**

Patroni 会在受影响的成员上标记 `pending restart` 标志。

由你决定何时以何种方式重启成员。可以通过以下方式实现：

- [patronictl_restart](/docs/patroni/patronictl#patronictl_restart)；或
- 向 [restart_endpoint](/docs/patroni/rest_api#restart_endpoint) 发送 `POST` 请求。

**注意：** 某些 Postgres GUC 在重启 Postgres 节点的顺序上需要特别处理。详情请参阅 [shared_memory_gucs](/docs/patroni/config#shared_memory_gucs)。

**Patroni 配置中 `etcd` 和 `etcd3` 有什么区别？**

`etcd` 使用 etcd 的 API 版本 2，而 `etcd3` 使用 API 版本 3。

请注意，API 版本 2 存储的信息不能由 API 版本 3 管理，反之亦然。

我们建议配置 `etcd3` 而不是 `etcd`，原因如下：

- API 版本 2 从 Etcd v3.4 起默认禁用；
- API 版本 2 将在 Etcd v3.6 中被完全移除。

**我在 Patroni 配置中启用了 `use_slots`，但当集群某个成员下线一段时间后，其在上游节点上使用的复制槽被删除了。如何避免这个问题？**

有两种方案：

1. 调整 `member_slots_ttl`（默认值 `30min`，自 Patroni `4.0.0` 和 PostgreSQL 11 起可用）。当成员的停机时间短于配置的阈值时，缺席成员的复制槽不会被删除。
2. 为成员配置永久物理复制槽。

自 Patroni `3.2.0` 起，成员槽可以作为由 Patroni 管理的永久槽存在。

Patroni 会在所有节点上创建永久物理复制槽，确保不删除这些槽，并根据成员已消费的 LSN 在所有节点上推进槽的 LSN。

之后，如果你决定移除相应成员，需要**由你负责**调整永久槽配置，否则 Patroni 将永久保留这些槽。

**注意：** 在 Patroni `3.2.0` 之前的版本中，成员槽仍可配置为永久物理复制槽，但仅由当前主库管理。也就是说，在故障转移/主从切换时，这些槽会在新主库上创建，但不能保证新主库拥有缺席节点所需的全部 WAL 段。

**注意：** 即使使用 Patroni `3.2.0`，也可能存在小的竞态条件。在最初阶段，从库上创建的槽可能领先于主库上的同名槽，如果没有人消费该槽，在故障转移后仍有可能缺少某些文件。因此建议配置持续归档，以便能够恢复所需的 WAL 或执行 PITR。

**`loop_wait`、`retry_timeout` 和 `ttl` 有什么区别？**

Patroni 会定期执行我们所称的 HA 循环。在每次 HA 循环中，它会对集群执行一系列检查以判断其健康状态，并根据状态采取相应行动，例如故障转移到备库。

`loop_wait` 决定 Patroni 在执行下一次 HA 检查循环前应休眠多少秒。

`retry_timeout` 设置 DCS 和 Postgres 上重试操作的超时时间。例如：如果 DCS 无响应超过 `retry_timeout` 秒，Patroni 可能会将主库节点降级作为安全措施。

`ttl` 设置 DCS 中 `leader` 锁的租约时间。如果当前集群主库在多于 `ttl` 秒的 HA 循环中无法续租，租约将过期，并触发集群中的 `leader race`（领导者竞选）。

**注意：** 修改这些配置时，请记住 Patroni 在 [dynamic](/docs/patroni/config/dynamic#dynamic) 文档节中规定了最小值和强制规则。

--------

## Postgres 管理

**可以直接在 Postgres 配置文件中修改 Postgres GUC 吗？**

可以，但不建议这样做。

Postgres 配置由 Patroni 管理，直接编辑配置文件的尝试可能会因 Patroni 最终覆盖它们而徒劳无功。

有几种方式可以绕过 Patroni 的管理：

- 通过 `$PGDATA/postgresql.base.conf` 修改 Postgres GUC；或
- 定义一个 `postgresql.custom_conf`，用于替代 `postgresql.base.conf`，以便在外部管理；或
- 使用 `ALTER SYSTEM` / `ALTER DATABASE` / `ALTER USER` 修改 GUC。

更多信息请参阅 [important_configuration_rules](/docs/patroni/config#important_configuration_rules) 节。

无论如何，我们建议通过 Patroni 统一管理所有 Postgres 配置。这样可以集中管理，并在需要调试 Patroni 时更加方便。

**可以直接重启 Postgres 节点吗？**

不，你**不应该**直接管理 Postgres！

任何绕过 Patroni 直接重启 Postgres 服务器的尝试都可能导致集群发生故障转移。

如果需要管理 Postgres 服务器，请通过 Patroni 提供的方式进行操作。

**Patroni 能接管对已有 Postgres 集群的管理吗？**

可以！

详细操作说明请参阅 [existing_data](/docs/patroni/existing_data#existing_data)。

**Patroni 如何管理 Postgres？**

Patroni 通过运行 Postgres 二进制文件（如 `pg_ctl` 和 `postgres`）来负责启动和停止 Postgres。

因此，你**必须**禁用所有其他可能管理 Postgres 集群的来源，例如 systemd 单元 `postgresql.service`。只有 Patroni 才能启动、停止和提升集群中的 Postgres 实例。不这样做可能导致脑裂场景。例如：如果运行主库的节点故障，而 `postgresql.service` 单元已启用，它可能会将 Postgres 重新启动并导致脑裂。

--------

## 概念与要求

**Patroni 包含哪些应用？**

Patroni 主要包含以下几个应用：

- `patroni`：Patroni 代理，负责管理一个 Postgres 节点；
- [patronictl](/docs/patroni/patronictl#patronictl)：命令行工具，用于与 Patroni 集群交互（执行主从切换、重启、配置变更等）。更多信息请参阅 [patronictl](/docs/patroni/patronictl#patronictl)。

**Patroni 中的"备用集群"（standby cluster）是什么？**

备用集群是指没有任何主库 Postgres 节点运行的集群，即集群中没有可读写的成员。

这类集群的作用是从另一个集群复制数据，通常用于跨数据中心的数据复制场景。

集群中会有一个领导者节点，该节点作为备库负责从远程 Postgres 节点复制变更。集群中其他备库则通过级联复制从该领导者成员同步数据。

**注意：** 备用集群对其复制来源的集群一无所知——它甚至可以使用 `restore_command` 而非 WAL 流复制，并且可以使用完全独立的 DCS 集群。

更多详情请参阅 [standby_cluster](/docs/patroni/standby_cluster#standby_cluster)。

**Patroni 中的"领导者"（leader）是什么？**

Patroni 中的 `leader` 类似于集群的协调者。

在普通 Patroni 集群中，`leader` 是可读写的节点。

在备用 Patroni 集群中，`leader`（又称 `standby leader`）负责从远程 Postgres 节点复制数据，并将这些变更级联给备用集群的其他成员。

**Patroni 对集群中 Postgres 节点数量有最低要求吗？**

没有，Patroni 可以在任意数量的 Postgres 节点上运行。

请记住：Patroni 与 DCS 是解耦的。

**Patroni 中的 [pause](/docs/patroni/pause#pause) 是什么意思？**

暂停（pause）是 Patroni 提供的一项操作，允许用户要求 Patroni 在 Postgres 管理方面退后一步。

这在需要对集群进行维护时非常有用，可以避免 Patroni 在你停止主库时做出故障转移等高可用决策。

更多信息请参阅 [pause](/docs/patroni/pause#pause)。

--------

## 自动故障转移

**Patroni 的自动故障转移机制是如何工作的？**

Patroni 的自动故障转移基于我们所称的 `leader race`（领导者竞选）。

Patroni 将集群状态存储在 DCS 中，其中包含一个 `leader` 锁，保存着当前集群 `leader` 的成员名称。

该 `leader` 锁具有关联的生存时间（TTL）。如果主库节点未能及时续租 `leader` 锁，该键最终会从 DCS 中过期。

`leader` 锁过期后，会触发 Patroni 所称的 `leader race`：所有节点开始执行检查，以确定自己是否是接管 `leader` 角色的最佳候选人。这些检查包括调用所有其他 Patroni 成员的 REST API。

所有认为自己是接管 `leader` 锁最佳候选人的 Patroni 成员都会尝试获取该锁。第一个成功获取 `leader` 锁的成员将把自身提升为可读写节点（或 `standby leader`），其他节点则被配置为跟随它。

**可以临时禁用 Patroni 集群的自动故障转移吗？**

可以！

可以通过暂时暂停集群来实现。这在执行维护操作时非常有用。

当需要恢复集群的自动故障转移时，只需取消暂停即可。

更多信息请参阅 [pause](/docs/patroni/pause#pause)。

--------

## 引导与从库创建

**Patroni 如何创建主库 Postgres 节点？从库 Postgres 节点又是如何创建的？**

默认情况下，Patroni 使用 `initdb` 引导全新集群，并使用 `pg_basebackup` 从 `leader` 成员创建备库节点。

你可以通过编写自定义引导方法和自定义从库创建方法来改变这一行为。

自定义方法在需要恢复由 pgBackRest 或 Barman 等备份工具创建的备份时尤为有用。

详细信息请参阅 [custom_bootstrap](/docs/patroni/replica_bootstrap#custom_bootstrap) 和 [custom_replica_creation](/docs/patroni/replica_bootstrap#custom_replica_creation)。

--------

## 监控

**如何监控我的 Patroni 集群？**

Patroni 在其 [rest_api](/docs/patroni/rest_api#rest_api) 中提供了几个便捷端点：

- `/metrics`：以 Prometheus 可使用的格式提供监控指标；
- `/patroni`：以 JSON 格式提供集群状态信息，与 `/metrics` 端点显示的信息非常相似。

你可以使用这些端点来实现监控检查。
