---
title: "版本历史"
weight: 190
icon: fa-solid fa-scroll
description: "Patroni 各版本发布说明与变更历史。"
module: [PATRONI]
categories: [参考]
---

> 原始页面：https://patroni.readthedocs.io/en/latest/releases.html

<a id="releases"></a>

--------

## Version 4.1.0

发布于 2025-09-23

**新特性**

- 添加对 systemd "notify" 单元类型的支持（Ronan Dunklau）

  如果没有 notify 单元类型，在使用 systemd 时，有可能在 Patroni 启动后立即向其发送 SIGHUP 信号，从而在其设置信号处理程序之前将其终止。

- 在 API 和 ctl 中提供接收和重放 LSN/延迟信息（Polina Bungina）

  Patroni REST API 的 **`/cluster`** 端点和 **`patronictl list`** 命令现在为每个副本成员提供接收 LSN、重放 LSN、接收延迟和重放延迟信息。

- 确保干净地降级为备用集群（Polina Bungina）

  确保在动态配置中引入 [`standby_cluster`](/docs/patroni/standby_cluster#standby_cluster) 部分能够实现干净的集群降级。

- 实现 **`patronictl demote-cluster`** 和 **`promote-cluster`** 命令（Polina Bungina）

  用于集群降级和提升的新命令，可同时处理动态配置编辑和结果状态检查。

- 实现 **`sync_priority`** 标签（Polina Bungina）

  此参数控制当 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 设置为 **`on`** 时，成员在同步副本选择过程中应具有的优先级。

- 实现 **`--validate-config`** 的 **`--print`** 选项（Polina Bungina）

  在本地配置（包括环境配置覆盖）成功验证后将其打印输出。

- 实现 **`kubernetes.bootstrap_labels`**（Polina Bungina）

  此功能允许您定义标签，这些标签将在成员 Pod 处于 **`initializing new cluster`**、**`running custom bootstrap script`**、**`starting after custom bootstrap`** 或 **`creating replica`** 状态时被分配给该 Pod。

- 添加抑制重复心跳日志的配置选项（Michael Morris）

  如果设置为 **`true`**，连续相同的心跳日志将不会被重复输出。

- 为永久复制槽添加可选的 **`cluster_type`** 属性（Michael Banck）

  这允许您设置特定的永久复制槽是应该始终创建，还是仅在主集群或备用集群上创建。

- 使 HTTP Server 头可配置（David Grierson）

  引入 **`restapi.server_tokens`** 配置参数，允许您限制 HTTP Server 头中公开的信息。

- 为副本成员实现复制就绪 API 检查（Ants Aasma）

  之前的实现在 PostgreSQL 启动后就认为副本已就绪。此更改后，只有当 PostgreSQL 正在进行复制且落后主节点不太远时，副本 Pod 才被视为就绪。

**改进**

- 降低 watchdog 配置失败的日志级别（Ants Aasma）

  将 **`Could not activate Linux watchdog device`** 日志行在 debug 日志级别显示，除非 watchdog 配置为 **`required`** 模式。此前该日志在 info 级别显示。

- 利用 **`pg_stat_wal_receiver`** 中的 **`written_lsn`** 和 **`latest_end_lsn`**（Alexander Kukushkin）

  **`written_lsn`**（实际写入 LSN）现在优先于 **`pg_last_wal_receive_lsn()`** 返回的值使用，后者实际上是刷新 LSN。**`latest_end_lsn`** 指向源主机上的 WAL 刷新位置。对于主节点，这允许更好地计算重放延迟，因为存储在 DCS 中的值仅每 **`loop_wait`** 秒更新一次。

- 避免与使用 **`failover=true`** 选项创建的槽交互（Alexander Kukushkin）

  此更改是使逻辑故障转移槽功能完全正常运行所必需的。

- 在 **`/metrics`** REST API 端点中添加 PostgreSQL 状态（Ivan Filianin）

  PostgreSQL 实例状态信息现在可通过 **`/metrics`** REST API 端点的 Prometheus 格式输出获取。

--------

## Version 4.0.7

发布于 2025-09-22

**新特性**

- 添加对 PostgreSQL 18 RC1 的支持（Alexander Kukushkin）

  GUC 验证规则已扩展。Patroni 现在可以正确处理新的后台 I/O 工作进程。

**错误修复**

- 修复 Windows 上 localhost 解析为 IPv6 的潜在问题（András Váczi）

  在 PostgreSQL 中配置 **`listen_addresses`** 时，使用 **`0.0.0.0`** 或 **`127.0.0.1`** 将限制仅监听 IPv4，排除 IPv6。然而在典型的 Windows 系统上，**`localhost`** 通常默认解析为 IPv6 地址 **`::1`**。为确保兼容性，Patroni 现在在 Windows 系统上将 PostgreSQL 配置为监听 **`127.0.0.1`** 而非 **`localhost`**。

- 仅当 DCS 中存在 **`/config`** 键时才返回全局配置（Alexander Kukushkin）

  此前，当 DCS 中缺少 **`/config`** 键时，Patroni REST API 返回的是空配置而不是抛出错误。

- 修复 Etcd 不可用时故障安全模式未被触发的问题（Alexander Kukushkin）

  Patroni 并非总能正确处理 **`etcd3`** 异常，导致故障安全模式未被触发。

- 修复信号处理程序重入死锁（Waynerv）

  在 Docker 容器中以 **`PID=1`** 运行的 Patroni 在某些特殊情况下，收到 **`SIGCHLD`** 后会发生死锁。

- 当（永久）物理槽未保留 WAL 时重新创建（Israel Barth Rubio）

  在 Patroni 作用域之外创建的、未保留 WAL 的永久物理复制槽会导致 **`replication slot cannot be advanced`** 错误。为避免此问题，Patroni 现在会重新创建这些槽。

- 正确处理 **`etcd3`** 中的 watch 取消消息（Alexander Kukushkin）

  当 **`etcd3`** 向 watch 通道发送取消消息时，它不会关闭连接。这导致 Patroni 使用过期的数据。Patroni 现在通过中断分块响应的读取循环并在 Patroni 端关闭连接来解决此问题。

- 处理 **`HTTPConnection`** 套接字被 **`pyopenssl`** 包装的情况（Alexander Kukushkin）

  Patroni 未正确使用 **`python-etcd`** 中强制使用的 **`pyopenssl`** 接口。

**文档改进**

- 改进双节点集群指南（Nikolay Samokhvalov）

  澄清故障转移期间的行为和 DCS 要求。

--------

## Version 4.0.6

发布于 2025-06-06

**错误修复**

- 修复从具有更高优先级的主节点故障转移的错误（Alexander Kukushkin）

  确保 Patroni 在具有更高优先级的旧主节点报告与当前节点相同的 **`LSN`** 时忽略该旧主节点。

- 修复在 **`PGDATA`** 外创建的 **`postgresql.conf`** 文件的权限问题（Michael Banck）

  在 **`PGDATA`** 目录外创建 **`postgresql.conf`** 文件时尊重系统级 umask 值。

- 修复 **`synchronous_mode=quorum`** 下切换的错误（Alexander Kukushkin）

  当指定了候选节点时，不检查 quorum 要求。

- 通过比较集群 term 来忽略过期的 Etcd 节点（Alexander Kukushkin）

  记录 Etcd 集群最后已知的 "raft_term"，并在执行客户端请求时将其与 Etcd 节点报告的 "raft_term" 进行比较。

- 在 **`SIGHUP`** 时更新 PostgreSQL 配置文件（Alexander Kukushkin）

  此前，Patroni 仅在检测到全局或本地配置发生更改时才替换 PostgreSQL 配置文件。

- 正确处理 **`etcd3`** 抛出的 **`Unavailable`** 异常（Alexander Kukushkin）

  Patroni 过去会在同一个 **`etcd3`** 节点上重试此类请求，而切换到另一个节点是更好的策略。

- 改进 **`etcd3`** 租约处理（Alexander Kukushkin）

  确保 Patroni 每个 HA 循环至少刷新一次 **`etcd3`** 租约。

- 尝试获取主节点锁时在 409 状态码下重新检查注解（Alexander Kukushkin）

  实现与 Patroni 4.0.3 版本中对主节点对象读取所做的相同行为。

- 在推进槽时考虑 **`replay_lsn`**（Polina Bungina）

  不要尝试在副本上将槽推进到超过 **`replay_lsn`** 的位置。此外，如果槽已经超过了该副本上此槽的 **`confirmed_flush_lsn`**，但副本尚未重放该槽在主节点上的实际 **`LSN`**，则将槽推进到 **`replay_lsn`** 位置。

- 确保在提升后执行 **`CHECKPOINT`**（Alexander Kukushkin）

  由于 **`CHECKPOINT`** 尚未完成，检查点任务有可能在降级时未被重置。这导致在下一次提升触发时使用了过期的 **`result`**。

- 避免并发运行"离线"降级（Alexander Kukushkin）

  在缓慢关闭的情况下，可能会出现下一个心跳循环再次触发 DCS 错误处理方法的情况，导致 **`AsyncExecutor is busy, demoting from the main thread`** 警告并再次启动离线降级。

- 在初始化失败时重命名数据目录前规范化 **`data_dir`** 值（Waynerv）

  防止 **`data_dir`** 参数值中的尾部斜杠破坏初始化失败后的重命名过程。

- 检查 **`synchronous_standby_names`** 是否包含预期值（Alexander Kukushkin）

  此前，实现非 quorum 同步复制的状态机机制未检查 **`synchronous_standby_names`** 的实际值，导致当 **`pg_stat_replication`** 是 **`synchronous_standby_names`** 的子集时使用了过期的 **`synchronous_standby_names`** 值。

--------

## Version 4.0.5

发布于 2025-02-20

**稳定性改进**

- 兼容 **`python-json-logger>=3.1`**（Alexander Kukushkin）

  消除旧 API 用法产生的警告。

- 兼容 Python 3.13（Alexander Kukushkin）

  在 Python 3.13 上运行测试。

- 兼容 **`pyinstaller>=4.4`**（Joe Jensen）

  当 **`pyinstaller`** 的 **`toc`** 属性不存在时，回退到默认的 **`iter_modules`**。

- 修复 PostgreSQL 9.5 支持的问题（Alexander Kukushkin）

  - 正确处理 **`pg_rewind`** 输出格式。
  - 考虑 **`synchronous_standby_names`** 格式不支持 "num" 规范。

- 兼容 **`urlparse`** 的最新变更（Alexander Kukushkin）

  **`urlparse`** 不再接受 URL 中包含 **`[]`** 字符的多主机地址。为解决此问题，尽可能切换到 **`libpq`** 的 **`PQconninfoParse()`** 原生包装器，仅对链接了旧版 **`libpq`** 的较旧 **`psycopg2`** 版本使用我们自己的实现。

**错误修复**

- 仅显示待重启的成员以进行重启确认（András Váczi）

  此前，执行 **`patronictl restart <clustername> --pending`** 时，确认列表会列出所有成员，而不管其是否有待处理的重启。

- 在 Patroni 停止时取消长时间运行的任务，并在副本引导失败时删除数据目录（Alexander Kukushkin）

  此前，Patroni 可能在进行副本引导时停止，而 **`pg_basebackup`** / **`wal-g`** / **`pgBackRest`** / **`barman`** 或类似工具仍在继续运行。

- 正确处理 **`patronictl edit-config`** 中包含斜杠的集群名称（Antoni Mur）

  将 **`cluster_name`** 中的正斜杠替换为下划线。

- 避免过早删除物理槽（Alexander Kukushkin）

  在故障转移后推迟删除包含 **`xmin`** 的物理复制槽：在新主节点上——直到该成员被提升，在副本上——直到集群中有主节点。

- 处理 **`controldata()`** 中 subprocess 抛出的所有异常（Alexander Kukushkin）

  Patroni 未正确处理调用 **`pg_controldata`** 工具时可能抛出的所有异常。

- 修复故障转移时旧主节点的槽未被保留的错误（Alexander Kukushkin）

  避免错误地依赖 DCS 中存在的成员信息，因为在故障转移时旧主节点的 **`/member`** 键可能恰好同时过期。

- 修复 quorum 状态机中的几个错误（Alexander Kukushkin）

  - 在评估是否有健康节点可用于主节点选举时，降级前需要考虑 quorum 要求。否则，旧主节点可能最终在异步节点包围下处于恢复状态。
  - **`QuorumStateResolver`** 未正确处理副本节点快速加入又断开连接的情况。

**改进**

- 改进空配置文件或非字典配置文件的错误提示（Julian）

  在验证 Patroni 配置文件是否包含有效的 **`Mapping`** 对象时，抛出更明确的异常。

--------

## Version 4.0.4

发布于 2024-11-22

**稳定性改进**

- 添加对 **`py-consul`** 模块的兼容性（Alexander Kukushkin）

  **`python-consul`** 模块已长期未维护，而 **`py-consul`** 是其官方替代品。保留了对 python-consul 的向后兼容性。

- 添加对 **`prettytable>=3.12.0`** 模块的兼容性（Alexander Kukushkin）

  处理弃用警告。

- 兼容 **`ydiff==1.4.2`** 模块（Alexander Kukushkin）

  修复最新版本的兼容性问题，在 **`requirements.txt`** 中约束版本，并引入最新版本兼容性测试。

**错误修复**

- 在主节点恢复失败后运行 **`on_role_change`** 回调（Polina Bungina、Alexander Kukushkin）

  额外为崩溃后启动失败的主节点运行 **`on_role_change`** 回调，以增加回调被执行的机会，即使后续以副本身份启动也失败。

- 修复 **`patronictl list -W`** 中的线程泄漏（Alexander Kukushkin）

  缓存 DCS 实例对象以避免线程泄漏。

- 确保只有受支持的参数写入连接字符串（Alexander Kukushkin）

  Patroni 过去会将新版本中引入的参数传递到连接字符串中，导致连接错误。

--------
## Version 4.0.3

发布于 2024-10-18

**错误修复**

- 创建用户时禁用 **`pgaudit`** 以避免暴露密码（kviset）

  当启用 **`pgaudit`** 扩展时，Patroni 会在创建 **`superuser`**、**`replication`** 和 **`rewind`** 用户时记录其密码。

- 修复混合部署的问题：主节点运行 Patroni v4 之前版本而副本运行 v4+ 版本（Alexander Kukushkin）

  如果主节点运行的 Patroni 版本低于 4.0.0，则使用从 **`/members`** 键中提取的 **`xlog_location`**，而不是尝试从 **`/status`** 键获取成员的槽位置。不这样做会导致副本上 WAL 的累积。

- 不要忽略没有 Patroni 验证器但有效的 PostgreSQL GUC（Polina Bungina）

  即使 GUC 没有 Patroni 验证器，仍然通过 **`postgres --describe-config`** 进行检查，前提是它实际上是一个有效的 GUC。

**改进**

- 在 K8s 中读取 leader 对象时，遇到 409 状态码时重新检查注解（Alexander Kukushkin）

  避免在 **`PATCH`** 请求被 Patroni 取消但请求实际上已成功更新目标时执行额外的更新。

- 添加对 **`sslnegotiation`** 客户端连接选项的支持（Alexander Kukushkin）

  **`sslnegotiation`** 已添加到 PostgreSQL 17 正式版中。

--------

## Version 4.0.2

发布于 2024-09-17

**错误修复**

- 处理发现配置验证文件时的异常（Alexander Kukushkin）

  跳过 Patroni 没有足够权限执行列表操作的目录。

- 确保不活跃的热物理复制槽不持有 **`xmin`**（Alexander Kukushkin、Polina Bungina）

  自 3.2.0 版本以来，Patroni 在副本上为所有成员创建物理复制槽，并使用 **`pg_replication_slot_advance()`** 函数定期推进这些槽。但如果由于某种原因启用了 **`hot_standby_feedback`** 并且主节点被降级为副本，那么现在不活跃的槽会将非空的 **`xmin`** 值传播回新的主节点。这导致 **`xmin`** 水位无法前移，vacuum 无法清理死元组。通过此修复，Patroni 会重新创建那些应该不活跃但具有非空 **`xmin`** 值的物理复制槽。

- 修复启动阶段未处理的 **`DCSError`**（Waynerv）

  在尝试检查节点名称唯一性之前，确保 DCS 连接可用。

- 查询 **`pg_settings`** 时显式包含 **`CMDLINE_OPTIONS`** GUC（Alexander Kukushkin）

  确保当 Patroni 加入正在运行的备用节点时，所有作为命令行参数传递给 postmaster 的 GUC 都被恢复。这是 Patroni 3.2.2 中修复的错误的后续处理。

- 修复 **`synchronous_standby_names`** 引号逻辑中的错误（Alexander Kukushkin）

  根据 PostgreSQL 文档，**`ANY`** 和 **`FIRST`** 关键字应该使用双引号括起来，而 Patroni 此前未这样做。

- 修复 keepalive 连接值超出范围的问题（hadizamani021）

  确保基于 **`ttl`** 设置计算的 **`keepalive`** 选项值不超过当前平台允许的最大值。

--------

## Version 4.0.1

发布于 2024-08-30

**错误修复**

- Patroni 为自身创建了不必要的复制槽（Alexander Kukushkin）

  当 **`name`** 包含大写字母或特殊字符时会发生此问题。

--------

## Version 4.0.0

发布于 2024-08-29

> [!WARNING]
> - 此版本完成了将 "master" 术语替换为 "primary" 的工作。这意味着有一些破坏性变更，请仔细阅读发行说明。升级到 Patroni 4+ 仅在运行 Patroni 3.1.0 或更新版本时才能可靠工作。从更旧的版本直接升级到 4+ 是可能的，但如果在其余节点运行其他 Patroni 版本时主节点发生故障，可能会导致意外行为。

**破坏性变更**

- 在消除非包容性 "master" 术语的过程中引入了以下破坏性变更：
  - 在 Kubernetes 上，Patroni 默认将 **`role`** 标签设置为 **`primary`**。如果您希望保持旧行为以避免停机或冗长复杂的迁移，可以将 **`kubernetes.leader_label_value`** 和 **`kubernetes.standby_leader_label_value`** 参数配置为 **`master`**。更多信息请参阅 [**此处**](/docs/patroni/kubernetes#kubernetes_role_values)。
  - Patroni 角色在 DCS 中写入为 **`primary`** 而非 **`master`**。
  - Patroni REST API 返回的角色已从 **`master`** 更改为 **`primary`**。
  - Patroni REST API 不再接受 **`/switchover`**、**`/failover`**、**`/restart`** 端点请求中的 **`role=master`**。
  - **`/metrics`** REST API 端点将不再报告 **`patroni_master`** 指标。
  - [`patronictl`](/docs/patroni/patronictl#patronictl) 不再接受任何命令的 **`--master`** 选项。应使用 **`--leader`** 或 **`--primary`** 选项替代。
  - 自定义副本创建方法声明式配置中的 **`no_master`** 选项不再作为特殊选项处理，请使用 **`no_leader`** 替代。
  - **`patroni_wale_restore`** 脚本不再接受 **`--no_master`** 选项。
  - **`patroni_barman`** 脚本不再接受 **`--role=master`** 选项。
  - 所有回调脚本现在传递 **`role=primary`** 选项而非 **`role=master`**。
- **`patronictl failover`** 不再接受自 Patroni 3.2.0 起已弃用的 **`--leader`** 选项。
- 自 Patroni 3.2.0 起已弃用的用户创建功能（**`bootstrap.users`** 配置部分）已被移除。

**新特性**

- 基于 quorum 的故障转移（Ants Aasma、Alexander Kukushkin）

  此功能实现了基于 quorum 的同步复制（从 PostgreSQL v10 开始可用），有助于降低最坏情况下的延迟，即使在正常运行期间也是如此，因为复制到某个备用节点的较高延迟可以由其他备用节点补偿。Patroni 实现了额外的安全保障，通过根据接收到的最新事务选择故障转移候选节点来防止任何用户可见的数据丢失。

- 在 **`pg_dist_node`** 中注册 Citus 从节点（Alexander Kukushkin）

  Patroni 现在在 **`pg_dist_node`** 中维护具有 **`role==replica`**、**`state==running`** 且没有 **`noloadbalance`** [标签](/docs/patroni/config/yaml#tags_settings) 的节点列表。

- 可配置的成员复制槽保留时间（Alexander Kukushkin）

  实现了 **`member_slots_ttl`** 全局配置参数的支持，用于控制当成员键不存在时，成员复制槽应保留多长时间。

- 使 Patroni 创建的日志文件权限可配置（Alexander Kukushkin）

  允许为 Patroni 创建的日志文件设置特定权限。如果未指定，权限将根据当前 **`umask`** 值设置。

- 兼容 PostgreSQL 17 beta3（Alexander Kukushkin）

  GUC 验证规则已扩展。Patroni 在关闭期间处理所有新的辅助后端进程，并在 **`primary_conninfo`** 中设置 **`dbname`**，因为这是逻辑复制槽同步所必需的。

- 为 Patroni 配置验证实现 **`--ignore-listen-port`** 选项（Sahil Naphade）

  使在运行 **`patroni --validate-config`** 时可以忽略已绑定的端口。

**改进**

- 使 **`wal_log_hints`** 可配置（Paul_Kim）

  允许在 **`use_pg_rewind`** 设置为 **`off`** 的情况下避免启用 **`wal_log_hints`** 配置的开销。

- 在 **`DEBUG`** 级别记录 **`pg_basebackup`** 命令（Waynerv）

  便于调试失败的初始化。

**错误修复**

- 在故障安全模式下推进级联节点的永久槽（Alexander Kukushkin）

  确保在激活故障安全模式时，级联副本的槽在主节点上被正确推进。通过在 **`POST /failsafe`** REST API 请求的副本响应中扩展其 **`xlog_location`** 来实现。

- 不要让当前节点被选为同步节点（Alexander Kukushkin）

  可能存在某些进程从当前主节点进行流复制，其 **`application_name`** 与当前主节点的名称匹配。Patroni 此前未正确处理此情况，可能导致主节点被声明为同步节点，从而阻塞切换操作。

- 对 POST /failsafe 忽略 **`restapi.allowlist_include_members`**（Alexander Kukushkin）

- 改进 GUC 验证（Polina Bungina）

  由于通过运行 **`postgres --describe-config`** 命令进行额外验证，此前无法通过 Patroni 配置设置未在其中列出的 GUC。此限制现已移除。

- 当检测到 Unix 套接字时，在 **`.pgpass`** 文件中添加包含 **`localhost`** 的行（Alexander Kukushkin）

  如果指定的 **`host`** 参数以 **`/`** 字符开头，Patroni 将在 **`.pgpass`** 文件中添加一行额外记录。这可以覆盖 **`host`** 与默认套接字目录路径匹配的边界情况。

- 修复日志问题（Waynerv）

  在故障安全处理日志中定义了正确的请求 URL，并修复了 postmaster 检查日志中时间戳的顺序。

--------
## Version 3.3.2

发布于 2024-07-11

**错误修复**

- 修复原生 Postgres 同步复制模式（Israel Barth Rubio）

  自从 Patroni 引入 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 以来，原生 Postgres 同步复制一直无法正常工作。通过此修复，当 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 被禁用时，如果用户已配置 **`synchronous_standby_names`**，Patroni 会按照用户配置的值进行设置。

- 处理备用节点上逻辑槽的失效（Polina Bungina）

  自 PG16 起，备用节点上的逻辑复制槽可能因为水位原因而失效：从现在起，Patroni 会强制复制（即重新创建）失效的槽。

- 修复逻辑槽推进和复制之间的竞态条件（Alexander Kukushkin）

  由于此错误，可能出现失效的逻辑复制槽在 PostgreSQL 重启时被多次复制的情况。

--------

## Version 3.3.1

发布于 2024-06-17

**稳定性改进**

- 兼容 Python 3.12（Alexander Kukushkin）

  处理 **`logging.LogRecord`** 中新增的属性。

**错误修复**

- 修复 **`replicatefrom`** 标签处理中的无限递归（Alexander Kukushkin）

  作为此修复的一部分，还改进了 **`is_physical_slot()`** 检查并调整了文档。

- 修复备用集群中错误的角色报告（Alexander Kukushkin）

  **`synchronous_standby_names`** 和同步复制仅在真正的主节点上工作，在级联复制的情况下会被 Postgres 直接忽略。在此修复之前，**`patronictl list`** 和 **`GET /cluster`** 错误地将某些节点报告为同步节点。

- 修复 **`allow_in_place_tablespaces`** GUC 的可用性问题（Polina Bungina）

  **`allow_in_place_tablespaces`** 不仅添加到了 PostgreSQL 15 中，还被回移到了 PostgreSQL 10-14。

--------

## Version 3.3.0

发布于 2024-04-04

> [!WARNING]
> 所有较旧的 Patroni 版本与 **`ydiff>=1.3`** 不兼容。
>
> 有以下可用选项来"修复"此问题：
>
> 1.  将 Patroni 升级到最新版本
> 2.  在安装 Patroni 后安装 **`ydiff<1.3`**
> 3.  安装 **`cdiff`** 模块

**新特性**

- 添加向 Zookeeper 客户端传递 **`auth_data`** 的能力（Aras Mumcuyan）

  允许指定用于连接的认证凭据。

- 添加用于 **`Barman`** 集成的 contrib 脚本（Israel Barth Rubio）

  提供一个 **`patroni_barman`** 应用程序，允许远程执行 **`Barman`** 操作，可用作自定义引导/自定义副本方法或 **`on_role_change`** 回调。更多信息请参阅 [**此处**](/docs/patroni/tools_integration#tools_integration)。

- 支持 **`JSON`** 日志格式（alisalemmi）

  除了 **`plain`**（默认）外，Patroni 现在还支持 **`json`** 日志格式。需要安装 **`python-json-logger>=2.0.2`** 库。

- 显示 **`pending_restart_reason`** 信息（Polina Bungina）

  提供关于导致 **`pending_restart`** 标志被设置的 PostgreSQL 参数的扩展信息。**`patronictl list`** 和 **`/patroni`** REST API 端点现在都显示参数名称及其差异（"diff"）作为 **`pending_restart_reason`**。

- 实现 **`nostream`** 标签（Grigory Smolkin）

  如果 **`nostream`** 标签设置为 **`true`**，该节点将不使用复制协议来流式传输 WAL，而是依赖归档恢复（如果配置了 **`restore_command`**）。它还会禁用该节点本身及其所有级联副本上永久逻辑复制槽的复制和同步。

**改进**

- 实现 **`log`** 部分的验证（Alexander Kukushkin）

  此前验证器未检查所提供的日志配置的正确性。

- 改进 PostgreSQL 参数变更的日志记录（Polina Bungina）

  将旧值转换为人类可读的格式，并记录 **`pg_controldata`** 与 Patroni 全局配置不匹配的信息。

**错误修复**

- 正确过滤不允许的 **`pg_basebackup`** 选项（Israel Barth Rubio）

  由于错误，当以 **`- setting: value`** 格式提供时，Patroni 未正确过滤为 **`basebackup`** 副本引导方法配置的不允许的选项。

- 修复 **`etcd3`** 认证错误处理（Alexander Kukushkin）

  如果在执行请求之前未进行认证，则始终在 **`etcd3`** 认证错误时重试一次。此外，在重新认证时不重启 watcher。

- 改进验证器文件发现逻辑（Waynerv）

  尽可能使用 **`importlib`** 库（适用于 Python 3.9+）来发现包含可用配置参数的文件。此实现更加稳定，不会破坏基于 **`zip`** 归档的 Patroni 发行版。

- 仅当 [`standby_cluster`](/docs/patroni/standby_cluster#standby_cluster) 部分中指定了多个主机时才使用 **`target_session_attrs`**（Alexander Kukushkin）

  **`target_session_attrs=read-write`** 现在仅在 **`standby_cluster.host`** 部分包含以逗号分隔的多个主机时，才添加到备用主节点的 **`primary_conninfo`** 中。

- 添加 **`ydiff`** 库 1.3+ 版本的兼容代码（Alexander Kukushkin）

  Patroni 依赖 **`ydiff`** 的一些非公开 API，因为它本应只是一个终端工具而非 Python 模块。不幸的是，1.3 版本的 API 变更破坏了旧版 Patroni。

--------

## Version 3.2.2

发布于 2024-01-17

**错误修复**

- 当 DCS 被清除时，不允许副本恢复初始化键（Alexander Kukushkin）

  这发生在 Patroni 原本应该接管独立 PG 集群的方法中。

- 从 Consul 获取刚更新的 sync 键时使用一致性读取（Alexander Kukushkin）

  Consul 不提供任何接口来立即获取刚更新的键的 **`ModifyIndex`**，因此我们必须执行显式读取操作。由于默认允许过期读取，我们有时会获取到键的过期版本。

- 如果需要重启的参数被重置为原始值，则重新加载 Postgres 配置（Polina Bungina）

  此前 Patroni 只重置了 **`pending_restart`**，而没有更新配置。

- 修复在同步模式下故障转移到异步候选节点时确认提示消息的逻辑反转错误（Polina Bungina）

  此问题仅存在于 [`patronictl`](/docs/patroni/patronictl#patronictl) 中。

- 在 [`patronictl`](/docs/patroni/patronictl#patronictl) 中将主节点从故障转移候选中排除（Polina Bungina）

  如果集群健康，故障转移到现有主节点是无操作的。

- 以幂等方式创建 Citus 数据库和扩展（Alexander Kukushkin、Zhao Junwang）

  如果需要向 Citus 数据库添加更多依赖项，这将允许在 **`post_bootstrap`** 脚本中创建它们。

- 不要过滤掉矛盾的 **`nofailover`** 标签（Polina Bungina）

  在节点上设置的配置 **`{nofailover: false, failover_priority: 0}`** 不允许其参与选举，但实际上应该允许，因为 **`nofailover`** 标签应该具有更高的优先级。

- 修复 PyInstaller 冻结问题（Sophia Ruan）

  **`freeze_support()`** 在 **`argparse`** 之后被调用，导致 Patroni 无法启动 Postgres。

- 修复 [`patronictl`](/docs/patroni/patronictl#patronictl) 和 [Citus](/docs/patroni/citus#citus) 配置的配置生成器中的错误（Israel Barth Rubio）

  该错误阻止了通过环境变量设置的 [`patronictl`](/docs/patroni/patronictl#patronictl) 和 [Citus](/docs/patroni/citus#citus) 配置参数被写入生成的配置中。

- 在加入运行中的备用节点时恢复 GUC 和一些 Patroni 管理的参数（Alexander Kukushkin）

  Patroni 在 Postgres v12 及以上版本中无法重启，报告内部结构中缺少 **`port`** 的错误。

- 围绕 **`pending_restart`** 标志的修复（Polina Bungina）

  在使用 **`recovery_target_action = promote`** 进行自定义引导时，或当某人使用例如 **`ALTER SYSTEM`** 更改了 **`hot_standby`** 或 **`wal_log_hints`** 时，不要暴露 **`pending_restart`**。

--------

## Version 3.2.1

发布于 2023-11-30

**错误修复**

- 限制 [`patronictl`](/docs/patroni/patronictl#patronictl) 中 **`--format`** 参数的可接受值（Alexander Kukushkin）

  此前它接受任意字符串，当值未被识别时不产生任何输出。

- 在关闭时释放主节点键之前，验证副本节点已接收到检查点 LSN（Alexander Kukushkin）

  此前在某些情况下，我们使用的是 SWITCH 记录的 LSN，该记录后面跟着 CHECKPOINT（如果启用了归档模式）。因此，旧主节点有时不得不执行 **`pg_rewind`**，但不会涉及数据丢失。

- 执行节点名称唯一性检查时进行真正的 HTTP 请求（Alexander Kukushkin）

  在容器中运行 Patroni 时，流量可能通过 **`docker-proxy`** 路由，后者监听端口并接受传入连接。这会导致误报。

- 修复 Etcd v2 下的 Citus 支持（Alexander Kukushkin）

  Patroni 在使用 Etcd v2 部署新的 Citus 集群时会失败。

- 修复 Postgres v16+ 下的 **`pg_rewind`** 行为（Alexander Kukushkin）

  **`pg_waldump`** 的错误消息格式在 v16 中发生了变化，导致 Patroni 在不必要时也调用 **`pg_rewind`**。

- 修复自定义引导的错误（Alexander Kukushkin）

  Patroni 错误地应用了 **`--command`** 参数，该参数本身就是引导命令。

- 修复 REST API 健康检查端点的问题（Sophia Ruan）

  Postgres 重启后，由于连接未正确关闭，有可能返回 Postgres 的 **`unknown`** 状态。

- 缓存 **`postgres --describe-config`** 输出结果（Waynerv）

  这些结果用于确定哪些 GUC 可用于验证 PostgreSQL 配置，我们不期望在 Patroni 运行期间此列表会发生变化。

--------
## Version 3.2.0

发布于 2023-10-25

**废弃通知**

- **`bootstrap.users`** 支持将在 4.0.0 版本中移除。如果你需要在部署新集群后创建用户，请使用 **`bootstrap.post_bootstrap`** 钩子来完成。

**破坏性变更**

- 强制执行 **`loop_wait + 2*retry_timeout <= ttl`** 规则并硬编码最小可能值（Alexander Kukushkin）

  最小值：**`loop_wait=2`**，**`retry_timeout=3`**，**`ttl=20`**。如果值更小或违反规则，它们将被调整，并在 Patroni 日志中写入警告。

**新特性**

- 故障转移优先级（Mark Pekala）

  借助 **`tags.failover_priority`**，现在可以使某个节点在领导者竞选中更受青睐。更多详情请参阅文档（ref tags）。

- 实现了 **`patroni --generate-config [--dsn DSN]`** 和 **`patroni --generate-sample-config`**（Polina Bungina）

  允许为正在运行的 PostgreSQL 集群生成配置文件，或为新的 Patroni 集群生成示例配置文件。

- 为 Patroni REST API 使用专用的 Postgres 连接（Alexander Kukushkin）

  这有助于在系统压力较大时避免阻塞主心跳循环。

- 在部分端点中丰富节点的 **`name`** 信息（sskserk）

  对于监控端点，**`name`** 被添加到 **`scope`** 旁边；对于指标端点，**`name`** 被添加到标签中。

- 确保严格区分故障转移/切换（Polina Bungina）

  在日志消息中更加精确，并允许在健康的同步集群中故障转移到异步节点。

- 使永久物理复制槽的行为类似于永久逻辑槽（Alexander Kukushkin）

  在所有允许成为领导者的节点上创建永久物理复制槽，并使用 **`pg_replication_slot_advance()`** 函数来推进备用节点上槽的 **`restart_lsn`**。

- 在 [patronictl](/docs/patroni/patronictl#patronictl) 中添加通过 **`--dcs`** 参数指定命名空间的功能（Israel Barth Rubio）

  当 [patronictl](/docs/patroni/patronictl#patronictl) 在没有配置文件的情况下使用时，这会很方便。

- 在自定义引导配置中添加对额外参数的支持（Israel Barth Rubio）

  之前只能向 **`command`** 添加自定义参数，现在可以将它们作为映射列出。

**改进**

- 将 **`citus.local_hostname`** GUC 设置为与 Patroni 连接 Postgres 时使用的相同值（Alexander Kukushkin）

  有些情况下 Citus 需要连接到本地 Postgres。默认情况下它使用 **`localhost`**，但这并不总是可用的。

**错误修复**

- 在备用集群中忽略 [synchronous_mode](/docs/patroni/replication_modes#synchronous_mode) 设置（Polina Bungina）

  Postgres 不支持级联同步复制，不忽略 [synchronous_mode](/docs/patroni/replication_modes#synchronous_mode) 会导致备用集群中的切换失败。

- 处理 **`on_reload`** 回调的 SIGCHLD 信号（Alexander Kukushkin）

  不这样做会导致僵尸进程，只有在下一次 **`on_reload`** 执行时才会被回收。

- 处理使用 Etcd v3 时的 **`AuthOldRevision`** 错误（Alexander Kukushkin，Kenny Do）

  当 Etcd 配置为使用 JWT 且 Etcd 中的用户数据库被更新时，会引发此错误。

--------

## Version 3.1.2

发布于 2023-09-26

**错误修复**

- 修复了 **`wal_keep_size`** 检查的错误（Alexander Kukushkin）

  **`wal_keep_size`** 是一个通常带有单位的 GUC，Patroni 无法将其值转换为 **`int`**。因此，**`bootstrap.dcs`** 的值随后不会被写入 **`/config`** 键。

- 检测并解决 **`/sync`** 键与 **`synchronous_standby_names`** 之间的不一致（Alexander Kukushkin）

  通常，Patroni 以非常特定的顺序更新 **`/sync`** 和 **`synchronous_standby_names`**，但在出现错误或有人手动重置 **`synchronous_standby_names`** 的情况下，Patroni 会进入不一致状态。结果可能导致故障转移到异步节点。

- 加入运行中的 Postgres 时读取 GUC 的值（Alexander Kukushkin）

  在 [暂停](/docs/patroni/pause#pause) 模式中重启时，Patroni 会丢弃 **`postgresql.conf`** 中的 **`synchronous_standby_names`** GUC。为了解决这个问题并避免类似问题，Patroni 在加入已运行的 Postgres 时会读取 GUC 的值。

- 消除检查节点唯一性时的烦人警告（Alexander Kukushkin）

  如果 Patroni 快速重启，**`urllib3`** 会产生 **`WARNING`** 消息。

--------

## Version 3.1.1

发布于 2023-09-20

**错误修复**

- 在提升时重置故障安全状态（ChenChangAo）

  如果切换/故障转移发生在故障安全模式激活后不久，新提升的主节点会在故障安全变为非活动状态后降级自己。

- 消除 [patronictl](/docs/patroni/patronictl#patronictl) 中无用的警告（Alexander Kukushkin）

  如果 [patronictl](/docs/patroni/patronictl#patronictl) 使用与 Patroni 相同的 patroni.yaml 文件并可以访问 **`PGDATA`** 目录，它可能会显示关于全局配置中值不正确的烦人警告。

- 针对边界情况显式启用同步模式（Alexander Kukushkin）

  如果没有副本从主节点进行流复制，同步模式实际上从未被激活。

- 修复了 **`0`** 整数值验证的错误（Israel Barth Rubio）

  在大多数情况下，这不会导致任何问题，只是产生警告。

- 不为备用集群返回逻辑槽（Alexander Kukushkin）

  Patroni 无法在备用集群中创建逻辑复制槽，因此如果在全局配置中定义了逻辑槽，应忽略它们。

- 避免在 **`patronictl --help`** 输出中显示文档字符串（Israel Barth Rubio）

  **`click`** 模块需要获得特殊提示才能实现。

- 修复了 **`kubernetes.standby_leader_label_value`** 的错误（Alexander Kukushkin）

  此功能实际上从未工作过。

- 将集群系统标识符恢复到 **`patronictl list`** 输出中（Polina Bungina）

  此问题是在实现 Citus 支持时引入的，当时我们需要隐藏标识符，因为协调器和所有工作节点的标识符不同。

- 在 Kubernetes 实现中覆盖 **`write_leader_optime`** 方法（Alexander Kukushkin）

  该方法应在没有健康副本可用于成为新主节点时，将关闭 LSN 写入领导者的 Endpoint/ConfigMap。

- 在暂停模式下不启动已停止的 postgres（Alexander Kukushkin）

  由于竞争条件，Patroni 错误地认为备用节点应该重启，因为某些恢复参数（**`primary_conninfo`** 或类似参数）已更改。

- 修复了 **`patronictl query`** 命令的错误（Israel Barth Rubio）

  当只提供 **`-m`** 参数或未提供 **`-r`** 和 **`-m`** 参数时，该命令无法工作。

- 正确处理用于启动 postgres 命令行中的整数参数（Polina Bungina）

  如果值以字符串形式提供而未转换为整数，会导致 Citus 集群中基于 **`max_connections`** 的 **`max_prepared_transactions`** 计算不正确。

- 在决定 **`pg_rewind`** 时不依赖 **`pg_stat_wal_receiver`**（Alexander Kukushkin）

  **`pg_stat_wal_receiver`** 报告的 **`received_tli`** 可能领先于实际重放的时间线，而通过复制连接由 **`IDENTIFY_SYSTEM`** 报告的时间线始终是正确的。

--------

## Version 3.1.0

发布于 2023-08-03

**破坏性变更**

- 更改了 **`restapi.keyfile`** 和 **`restapi.certfile`** 的语义（Alexander Kukushkin）

  之前，如果 **`ctl`** 部分中没有相应的配置参数，Patroni 会使用 **`restapi.keyfile`** 和 **`restapi.certfile`** 作为客户端证书的后备。

> [!WARNING]
> 如果你启用了客户端证书验证（**`restapi.verify_client`** 设置为 **`required`**），你还**必须**在 **`ctl.certfile`**、**`ctl.keyfile`**、**`ctl.keyfile_password`** 中提供**有效的客户端证书**。如果未提供，Patroni 将无法正常工作。

**新特性**

- 使 Pod 角色标签可配置（Waynerv）

  可以使用 **`kubernetes.leader_label_value`**、**`kubernetes.follower_label_value`** 和 **`kubernetes.standby_leader_label_value`** 参数自定义值。当我们将 **`master`** 角色更改为 **`primary`** 时，此功能将非常有用。你可以在 [此处](/docs/patroni/kubernetes#kubernetes_role_values) 阅读更多关于此功能和迁移步骤的信息。

**改进**

- **`patroni --validate-config`** 的各种改进（Alexander Kukushkin）

  改进了不同 DCS、**`bootstrap.dcs`**、**`ctl`**、**`restapi`** 和 [watchdog](/docs/patroni/watchdog#watchdog) 部分的参数验证。

- 如果 Postgres 在 Patroni 运行期间于恢复过程中崩溃，则不以恢复模式启动 Postgres（Alexander Kukushkin）

  这可以减少恢复时间，并有助于防止不必要的时间线递增。

- 避免不必要地更新 **`/status`** 键（Alexander Kukushkin）

  当没有永久逻辑槽时，即使主节点上的 LSN 没有向前移动，Patroni 也会在每次心跳循环中更新 **`/status`**。

- 不允许过期的主节点赢得领导者竞选（Alexander Kukushkin）

  如果 Patroni 由于资源不足而挂起了很长时间，它会在获取领导者锁之前额外检查是否有其他节点已经提升了 Postgres。

- 实现了某些 PostgreSQL 参数验证的可见性（Alexander Kukushkin，Feike Steenbergen）

  如果 **`max_connections`**、**`max_wal_senders`**、**`max_prepared_transactions`**、**`max_locks_per_transaction`**、**`max_replication_slots`** 或 **`max_worker_processes`** 的验证失败，Patroni 之前会使用某个合理的默认值。现在除此之外，它还会显示警告。

- 为 **`PGDATA`** 中创建的文件和目录设置权限（Alexander Kukushkin）

  Patroni 创建的所有文件之前只有所有者读/写权限。此行为会破坏在不同用户下运行并依赖组读权限的备份工具。现在 Patroni 会遵循 **`PGDATA`** 上的权限，并正确设置其在 **`PGDATA`** 内创建的所有目录和文件的权限。

**错误修复**

- 通过 shell 运行 **`archive_command`**（Waynerv）

  Patroni 可能会在单用户模式下进行崩溃恢复之前或 **`pg_rewind`** 之前归档一些 WAL 段。如果 archive_command 包含某些 shell 运算符（如 **`&&`**），它在 Patroni 中无法工作。

- 修复了"切换时"关闭检查（Polina Bungina）

  可能出现指定的候选节点仍在流复制且未收到关闭检查的情况，但由于其他一些节点是健康的，领导者键被移除了。

- 修复了"是否为主节点"检查（Alexander Kukushkin）

  在领导者竞选期间，副本无法识别旧领导者上的 Postgres 仍在作为主节点运行。

- 修复了 **`patronictl list`**（Alexander Kukushkin）

  在 **`tsv`**、**`json`** 和 **`yaml`** 输出格式中缺少集群名称字段。

- 修复了暂停后的 **`pg_rewind`** 行为（Alexander Kukushkin）

  在某些条件下，从维护模式退出后，Patroni 无法使用 **`pg_rewind`** 将误判的主节点重新加入集群。

- 修复了 Etcd v3 实现中的错误（Alexander Kukushkin）

  如果使用 **`create_revision`**/**`mod_revision`** 字段执行键更新时由于版本不匹配，则使内部 KV 缓存无效。

- 修复了暂停模式下备用集群中副本的行为（Alexander Kukushkin）

  当领导者键过期时，备用集群中的副本不会跟随远程节点，而是保持 **`primary_conninfo`** 不变。

--------
## Version 3.0.4

发布于 2023-07-13

**新特性**

- 使备用节点的复制状态可见（Alexander Kukushkin）

  对于 PostgreSQL 9.6+，Patroni 将在备用节点从其他节点流复制时报告复制状态为 **`streaming`**，或在没有复制连接且设置了 **`restore_command`** 时报告为 **`in archive recovery`**。该状态在 DCS 中的 **`member`** 键、REST API 以及 **`patronictl list`** 输出中可见。

**改进**

- 改进了 Etcd v3 的错误消息（Alexander Kukushkin）

  当 Etcd v3 集群不可访问时，Patroni 之前报告无法访问 **`/v2`** 端点。

- 如果可能，在 [patronictl](/docs/patroni/patronictl#patronictl) 中使用仲裁读取（Alexander Kukushkin）

  Etcd 或 Consul 集群可能降级为只读状态，但从 [patronictl](/docs/patroni/patronictl#patronictl) 的视角来看一切正常。现在它将报错失败。

- 防止配置中的重复名称导致脑裂（Mark Pekala）

  启动 Patroni 时将检查 DCS 中是否已注册同名节点，并尝试查询其 REST API。如果 REST API 可访问，Patroni 将报错退出。这有助于防止人为错误。

- 如果 Postgres 在 Patroni 运行期间崩溃，则不以恢复模式启动 Postgres（Alexander Kukushkin）

  这可以减少恢复时间，并有助于防止不必要的时间线递增。

**错误修复**

- REST API SSL 证书在收到 SIGHUP 后未重新加载（Israel Barth Rubio）

  此回退在3.0.3中引入。

- 修复了 **`max_connections`** 等参数的整数 GUC 验证（Feike Steenbergen）

  Patroni 不接受带引号的数值。此回退在3.0.3中引入。

- 修复了 [synchronous_mode](/docs/patroni/replication_modes#synchronous_mode) 的问题（Alexander Kukushkin）

  使用 **`synchronous_commit=off`** 执行 **`txid_current()`**，以避免在启用 **`synchronous_mode_strict`** 时意外等待不存在的同步备用节点。

--------

## Version 3.0.3

发布于 2023-06-22

**新特性**

- 兼容 PostgreSQL 16 beta1（Alexander Kukushkin）

  扩展了 GUC 验证器规则。

- 使 PostgreSQL GUC 验证器可扩展（Israel Barth Rubio）

  验证器规则从位于 **`patroni/postgresql/available_parameters/`** 目录中的 YAML 文件加载。文件按字母顺序排列并依次应用。这使得为非标准 Postgres 发行版提供自定义验证器成为可能。

- 添加了 **`restapi.request_queue_size`** 选项（Andrey Zhidenkov，Aleksei Sukhov）

  设置 Patroni REST API 所用 TCP 套接字的请求队列大小。一旦队列已满，后续请求将收到"连接被拒绝"错误。默认值为5。

- 初始化新集群时直接调用 **`initdb`**（Matt Baker）

  之前是通过 **`pg_ctl`** 调用的，这需要对传递给 **`initdb`** 的参数进行特殊引用。

- 添加了停止前钩子（Le Duane）

  该钩子可通过 **`postgresql.before_stop`** 配置，在 **`pg_ctl stop`** 之前执行。退出代码不影响关闭过程。

- 添加了对自定义 Postgres 二进制文件名的支持（Israel Barth Rubio，Polina Bungina）

  当使用自定义 Postgres 发行版时，Postgres 二进制文件可能使用与社区 Postgres 发行版不同的名称编译。自定义二进制文件名可通过 **`postgresql.bin_name.*`** 和 **`PATRONI_POSTGRESQL_BIN_*`** 环境变量配置。

**改进**

- **`patroni --validate-config`** 的各种改进（Polina Bungina）

  - 使 **`bootstrap.initdb`** 可选。它仅在新集群中需要，但 **`patroni --validate-config`** 之前在配置中缺少它时会报错。
  - 当 **`postgresql.bin_dir`** 为空或未设置时不报错。改为尝试先在默认 PATH 中查找 Postgres 二进制文件。
  - 使 **`postgresql.authentication.rewind`** 部分可选。如果缺少，Patroni 将使用超级用户。

- 改进了 [patronictl](/docs/patroni/patronictl#patronictl) 中的错误报告（Israel Barth Rubio）

  **`\n`** 符号被原样渲染，而不是实际的换行符。

**错误修复**

- 修复了 Citus 支持中的问题（Alexander Kukushkin）

  如果在切换期间从已提升的工作节点到协调器的 REST API 调用失败，它会导致给定的 Citus 组在无限期内被阻塞。

- 允许在 [patronictl](/docs/patroni/patronictl#patronictl) 的 **`--dcs-url`** 选项中使用 **`etcd3`** URL（Israel Barth Rubio）

  如果用户尝试通过 [patronictl](/docs/patroni/patronictl#patronictl) 的 **`--dcs-url`** 选项传递 **`etcd3`** URL，将会遇到异常。

--------

## Version 3.0.2

发布于 2023-03-24

> [!WARNING]
> 3.0.2版本放弃了对 Python 3.6以下版本的支持。

**新特性**

- 在 **`/metrics`** 端点中添加了同步备用副本状态（Thomas von Dein，Alexander Kukushkin）

  之前只报告 **`primary`**/**`standby_leader`**/**`replica`**。

- 在 [patronictl](/docs/patroni/patronictl#patronictl) 中用户友好地处理 **`PAGER`**（Israel Barth Rubio）

  使分页器可通过 **`PAGER`** 环境变量配置，覆盖默认的 **`less`** 和 **`more`**。

- 使 K8s 可重试的 HTTP 状态码可配置（Alexander Kukushkin）

  在某些托管平台上，可能会收到 **`401 Unauthorized`** 状态码，有时在几次重试后可以解决。

**改进**

- 仅在 **`recovery_target_action`** 设置为 **`promote`** 时，在自定义引导期间将 **`hot_standby`** 设置为 **`off`**（Alexander Kukushkin）

  这对于使 **`recovery_target_action=pause`** 正确工作是必要的。

- 不允许 **`on_reload`** 回调终止其他回调（Alexander Kukushkin）

  **`on_start`**/**`on_stop`**/**`on_role_change`** 通常用于添加/移除虚拟 IP，**`on_reload`** 不应干扰它们。

- 在 aws 回调示例脚本中切换到 **`IMDSFetcher`**（Polina Bungina）

  **`IMDSv2`** 需要令牌才能工作，**`IMDSFetcher`** 可以透明地处理它。

**错误修复**

- 修复了在 Kubernetes 上运行的 Citus 集群的 **`patronictl switchover`**（Lukáš Lalinský）

  对于 **`default`** 以外的命名空间无法工作。

- 如果主版本未知，则不写入 **`PGDATA`**（Alexander Kukushkin）

  如果启动后 **`PGDATA`** 为空（可能尚未挂载），Patroni 会错误地假设 PostgreSQL 版本，并在实际主版本为 v10+ 时错误地创建 **`recovery.conf`** 文件。

- 修复了协调器故障转移后的 Citus 元数据错误（Alexander Kukushkin）

  **`citus_set_coordinator_host()`** 调用不会导致元数据同步，更改在工作节点上不可见。该问题通过切换到 **`citus_update_node()`** 来解决。

- 当所有 etcd 节点"失败"时，使用配置文件中列出的 etcd 主机作为后备（Alexander Kukushkin）

  etcd 集群可能随时间改变拓扑，Patroni 会尝试跟踪它。如果在某个时刻所有节点都不可达，Patroni 将在尝试重新连接时使用配置中的节点与最后已知拓扑的组合。

--------

## Version 3.0.1

发布于 2023-02-16

**错误修复**

- 向 **`on_role_change`** 回调脚本传递正确的角色名称（Alexander Kukushkin，Polina Bungina）

  Patroni 之前在提升时错误地向 **`on_role_change`** 回调脚本传递了 **`promoted`** 角色。传递的角色名称已恢复为 **`master`**。此回退在3.0.0中引入。

--------
## Version 3.0.0

发布于 2023-01-30

此版本添加了与 [Citus](https://www.citusdata.com) 的集成，使得在临时 DCS 中断期间无需降级主节点即可存活。

> [!WARNING]
> - 3.0.0版本是支持 Python 2.7的最后一个版本。即将发布的版本将放弃对 Python 3.7以下版本的支持。
>
> - RAFT 支持已废弃。我们将尽力维护它，但不保证也不对可能出现的问题负责。
> - 此版本是逐步淘汰"master"、改用"primary"的第一步。只有运行了至少3.0.0版本，升级到下一个主版本才能可靠地工作。

**新特性**

- DCS 故障安全模式（Alexander Kukushkin，Polina Bungina）

  如果启用此功能，它将允许 Patroni 集群在临时 DCS 中断期间存活。你可以在 [文档](/docs/patroni/dcs_failsafe_mode#dcs_failsafe_mode) 中找到更多详情。

- Citus 支持（Alexander Kukushkin，Polina Bungina，Jelte Fennema）

  Patroni 使 [Citus](https://www.citusdata.com) 集群的高可用部署和管理变得简单。请查看 [此处](/docs/patroni/citus#citus) 获取更多信息。

**改进**

- 在删除未知但活跃的复制槽时抑制重复错误（Michael Banck）

  Patroni 仍会写入这些日志，但仅在 DEBUG 级别。

- 每个 HA 循环只运行一个监控查询（Alexander Kukushkin）

  在启用同步复制的情况下之前不是这样。

- 仅保留最新的失败数据目录（William Albertus Dembo）

  如果引导失败，Patroni 过去会将$PGDATA 文件夹重命名并添加时间戳后缀。从现在起，后缀将为 **`.failed`**，如果此类文件夹已存在，则在重命名前将其删除。

- 改进了同步复制连接的检查（Alexander Kukushkin）

  当新主机被添加到 **`synchronous_standby_names`** 时，只有在它成功追上主节点且 **`pg_stat_replication.sync_state = 'sync'`** 的情况下，才会在 DCS 中设置为同步。

**移除的功能**

- 移除 **`patronictl scaffold`**（Alexander Kukushkin）

  保留它的唯一原因是作为运行备用集群的一种临时方案。

--------

## Version 2.1.7

发布于 2023-01-04

**错误修复**

- 修复了与旧版 Python 模块的一些小不兼容问题（Alexander Kukushkin）

  它们导致无法在 Debian buster/Ubuntu bionic 上构建/运行 Patroni。

--------

## Version 2.1.6

发布于 2022-12-30

**改进**

- 修复了 SSL 套接字关闭时的烦人异常（Alexander Kukushkin）

  HAProxy 在获得 HTTP 状态码后立即关闭连接，没有给 Patroni 留出正确关闭 SSL 连接的时间。

- 调整 arm64 的示例 Dockerfile（Polina Bungina）

  移除显式的 **`amd64`** 和 **`x86_64`**，不删除 **`libnss_files.so.*`**。

**安全改进**

- 为非复制连接强制设置 **`search_path=pg_catalog`**（Alexander Kukushkin）

  由于 Patroni 严重依赖超级用户连接，我们希望保护它免受使用 **`public`** 模式中与 **`pg_catalog`** 中相应对象具有相同名称和签名的用户定义函数和/或运算符进行的潜在攻击。为此，Patroni 创建的所有连接（复制连接除外）均强制设置 **`search_path=pg_catalog`**。

- 防止密码被记录在 **`pg_stat_statements`** 中（Feike Steenbergen）

  通过在创建用户时设置 **`pg_stat_statements.track_utility=off`** 来实现。

**错误修复**

- 将 **`proxy_address`** 声明为可选项（Denis Laxalde）

  因为它实际上是一个非必需选项。

- 改进 insecure 选项的行为（Alexander Kukushkin）

  当使用客户端证书进行 REST API 请求时，Ctl 的 **`insecure`** 选项无法正常工作。

- 引导新集群时从 **`bootstrap.dcs`** 获取 watchdog 配置（Matt Baker）

  Patroni 过去在引导新集群时使用默认值初始化 watchdog 配置，而不是使用用于引导 DCS 的配置。

- 修复了 WIN32 中查找可执行文件时处理文件扩展名的方式（Martín Marqués）

  仅在文件名没有扩展名时才添加 **`.exe`**。

- 修复了 Consul TTL 设置（Alexander Kukushkin）

  在 HTTPClient 上设置值时我们使用了 **`ttl/2.0`**，但忘记在类的属性中将当前值乘以2。这导致 Consul TTL 偏差了两倍。

**移除的功能**

- 移除 **`patronictl configure`**（Polina Bungina）

  不再需要单独创建 [patronictl](/docs/patroni/patronictl#patronictl) 配置。

--------

## Version 2.1.5

发布于 2022-11-28

此版本增强了与 PostgreSQL 15的兼容性，并宣布 Etcd v3 支持已达到生产就绪状态。Patroni on Raft 仍处于 Beta 阶段。

**新特性**

- 改进 **`patroni --validate-config`**（Denis Laxalde）

  如果配置无效则以代码1退出，并将错误打印到 stderr。

- 在暂停模式下不删除复制槽（Alexander Kukushkin）

  Patroni 会在成员加入/离开集群时自动创建/移除物理复制槽。在暂停模式下将不再移除槽。

- 支持监控端点的 **`HEAD`** 请求方法（Robert Cutajar）

  如果用 **`HEAD`** 代替 **`GET`**，Patroni 将仅返回 HTTP 状态码。

- 支持在 Windows 上运行 behave 测试（Alexander Kukushkin）

  通过引入新的 REST API 端点 **`POST /sigterm`** 在 Windows 上模拟 Patroni 的优雅关闭（**`SIGTERM`**）。

- 引入 **`postgresql.proxy_address`**（Alexander Kukushkin）

  它将作为 **`proxy_url`** 写入 DCS 中的成员键，可用于服务发现。

**稳定性改进**

- 从线程中调用 **`pg_replication_slot_advance()`**（Alexander Kukushkin）

  在具有许多逻辑复制槽的繁忙集群上，**`pg_replication_slot_advance()`** 调用会影响主 HA 循环，可能导致成员键过期。

- 在旧主节点上调用 **`pg_rewind`** 之前归档可能缺失的 WAL（Polina Bungina）

  如果主节点崩溃并停机了相当长时间，归档和新主节点中可能缺少一些 WAL 文件。**`pg_rewind`** 可能会从旧主节点上删除这些 WAL 文件，使其无法作为备用节点启动。通过归档 **`ready`** 状态的 WAL 文件，我们不仅缓解了这个问题，而且总体上改善了持续归档体验。

- 在尝试创建 Kubernetes Service 时忽略 **`403`** 错误（Nick Hudson，Polina Bungina）

  Patroni 之前会因为尝试创建可能已存在的服务而频繁输出失败日志。

- 改进存活探针（Alexander Kukushkin）

  如果心跳循环在主节点上运行时间超过 **`ttl`** 或在副本上超过 **`2*ttl`**，存活探针将开始失败。这将使我们能够在 Kubernetes 上将其作为 [watchdog](/docs/patroni/watchdog#watchdog) 的替代方案使用。

- 确保切换时只有同步节点尝试获取锁（Alexander Kukushkin，Polina Bungina）

  之前在不指定目标的情况下执行手动切换时，有很小的概率异步但数据最新的成员可能成为领导者。

- 避免在引导运行时进行克隆（Ants Aasma）

  不允许在集群引导运行时触发不需要领导者的创建副本方法。

- 与 kazoo-2.9.0 的兼容性（Alexander Kukushkin）

  根据 Python 版本，如果在已关闭的套接字上调用 **`select()`**，**`SequentialThreadingHandler.select()`** 方法可能会引发 **`TypeError`** 和 **`IOError`** 异常。

- 在套接字关闭前显式关闭 SSL 连接（Alexander Kukushkin）

  不这样做会导致 OpenSSL 3.0出现 **`unexpected eof while reading`** 错误。

- 与 **`prettytable>=2.2.0`** 的兼容性（Alexander Kukushkin）

  由于内部 API 更改，集群名称标题显示在了不正确的行上。

**错误修复**

- 处理 Etcd lease_grant 的过期令牌（monsterxx03）

  在出错时获取新令牌并重试请求。

- 修复了 **`GET /read-only-sync`** 端点的错误（Alexander Kukushkin）

  它在上一个版本中引入，实际上从未工作过。

- 处理数据目录存储消失的情况（Alexander Kukushkin）

  Patroni 会定期检查 PGDATA 是否存在且非空，但在存储出现问题时，**`os.listdir()`** 会引发 **`OSError`** 异常，从而中断心跳循环。

- 在等待用户后端关闭时应用 **`master_stop_timeout`**（Alexander Kukushkin）

  看起来像用户后端的东西实际上可能是无法停止的后台工作进程（例如 Citus Maintenance Daemon）。

- 为 **`postgresql.listen`** 接受 **`*:<port>`** 格式（Denis Laxalde）

  **`patroni --validate-config`** 之前会报告其无效。

- Raft 中的超时修复（Alexander Kukushkin）

  当 Patroni 或 patronictl 启动时，它们会尝试从已知成员获取 Raft 集群拓扑。这些调用之前没有设置适当的超时。

- 在令牌更改时强制更新 consul 服务（John A. Lotoski）

  不这样做会导致"rpc error making call: rpc error making call: ACL not found"错误。

--------
## Version 2.1.4

发布于 2022-06-01

**新特性**

- 改进 **`pg_rewind`** 在典型 Debian/Ubuntu 系统上的行为（Gunnar "Nick" Bluth）

  在将 **`postgresql.conf`** 保存在数据目录之外的 Postgres 安装方式中（例如 Ubuntu/Debian 软件包），**`pg_rewind --restore-target-wal`** 无法正确获取 **`restore_command`** 的值。

- 允许在 Consul 服务检查中设置 **`TLSServerName`**（Michael Gmelin）

  当检查通过 IP 进行且 Consul 的 **`node_name`** 不是 FQDN 时非常有用。

- 在 watchdog 中添加 **`ppc64le`** 支持（Jean-Michel Scheiwiler）

  同时修复了某些非 x86 平台上的 watchdog 支持。

- 将 aws.py 回调从 **`boto`** 切换到 **`boto3`**（Alexander Kukushkin）

> **`boto`** 2.x 自2018年起已被弃用，且在 Python 3.9上运行失败。

- 定期刷新 K8s 上的服务账户令牌（Haitao Li）

  自 Kubernetes v1.21 起，服务账户令牌会在1小时后过期。

- 添加 **`/read-only-sync`** 监控端点（Dennis4b）

  类似于 **`/read-only`**，但仅包含同步副本。

**稳定性改进**

- 当逻辑解码配置与主库不匹配时，不再将逻辑复制槽复制到副本（Alexander Kukushkin）

  如果槽的 **`plugin`** 或 **`database`** 配置选项不匹配，副本将不再从主库复制逻辑复制槽。此前，在副本复制槽并启动之后才会检查槽是否匹配这些配置选项，导致不必要的重复重启。

- 对 PostgreSQL v12+ 的恢复配置参数进行特殊处理（Alexander Kukushkin）

  作为副本启动时，Patroni 应该能够在领导者地址发生变化时更新 **`postgresql.conf`** 并重启/重新加载，方法是缓存当前参数值，而不是从 **`pg_settings`** 中查询。

- 改进 **`postgresql.listen`** 参数中 IPv6 地址的处理（Alexander Kukushkin）

  由于 **`listen`** 参数包含端口，用户会尝试将 IPv6 地址放在方括号中，但当列表中有多个 IP 时，方括号无法被正确剥离。

- 仅在 PostgreSQL v10 及更早版本上执行分歧检查时使用 **`replication`** 凭据（Alexander Kukushkin）

  如果启用了 **`rewind`**，Patroni 将在较新的 Postgres 版本上重新使用 **`superuser`** 或 **`rewind`** 凭据。

**错误修复**

- 修复 **`dateutil.parser`** 缺失导入的问题（Wesley Mendes）

  测试之前没有失败，只是因为其他模块也导入了该模块。

- 确保 **`optime`** 注解为字符串类型（Sebastian Hasler）

  在某些情况下，Patroni 会尝试将其作为数值传递。

- 改进 **`pg_rewind`** 失败时的处理（Alexander Kukushkin）

  如果主库在 **`pg_rewind`** 期间变得不可用，**`$PGDATA`** 将处于损坏状态。随后，即使配置不允许，Patroni 也会删除数据目录。

- 当 PostgreSQL 未就绪时，不要从领导者 **`ConfigMap`**/**`Endpoint`** 中移除 **`slots`** 注解（Alexander Kukushkin）

  如果未传递 **`slots`** 值，注解将保持当前值。

- 处理 K8s API watcher 的并发问题（Alexander Kukushkin）

  在某些（未知的）条件下，watcher 可能会变得过时；因此，**`attempt_to_acquire_leader()`** 方法可能由于 HTTP 状态码409而失败。在这种情况下，我们会重置 watcher 连接并从头开始。

--------

## Version 2.1.3

发布于 2022-02-18

**新特性**

- 为 [patronictl](/docs/patroni/patronictl#patronictl) 添加加密 TLS 密钥支持（Alexander Kukushkin）

  可通过 **`ctl.keyfile_password`** 或 **`PATRONI_CTL_KEYFILE_PASSWORD`** 环境变量进行配置。

- 向/metrics 端点添加更多指标（Alexandre Pereira）

  具体包括 **`patroni_pending_restart`** 和 **`patroni_is_paused`**。

- 支持在备用集群配置中指定多个主机（Michael Banck）

  如果备用集群从 Patroni 集群进行复制，利用自 PostgreSQL v10 起 **`libpq`** 中可用的客户端故障转移功能会很方便。即在备用领导者的 **`primary_conninfo`** 和 **`pg_rewind`** 设置中的连接字符串里设置 **`target_session_attrs=read-write`**。**`pgpass`** 文件将生成多行内容（每个主机一行），备用集群不会在主集群节点上调用 **`CHECKPOINT`**，而是等待 **`pg_control`** 更新。

**稳定性改进**

- 兼容旧版 **`psycopg2`**（Alexander Kukushkin）

  例如，从 Ubuntu 18.04软件包安装的 **`psycopg2`** 还没有 **`UndefinedFile`** 异常。

- 当所有 Etcd 节点无响应时重启 **`etcd3`** watcher（Alexander Kukushkin）

  如果 watcher 仍然存活，即使所有 Etcd 节点都出现故障，**`get_cluster()`** 方法仍会继续返回过时的信息。

- 暂停状态下不要移除备用集群的领导者锁（Alexander Kukushkin）

  此前，锁仅由作为主库运行的节点维护，而非备用领导者。

**错误修复**

- 修复备用领导者引导中的错误（Alexander Kukushkin）

  如果 Postgres 在60秒后未开始接受连接，Patroni 会认为引导失败。此错误在2.1.2版本中引入。

- 修复故障转移到级联备库时的错误（Alexander Kukushkin）

  在确定应在级联备库上创建哪些槽时，我们忘记考虑领导者可能不存在的情况。

- 修复 Postgres 配置验证器中的小问题（Alexander Kukushkin）

  PostgreSQL v14 中引入的整数参数验证失败，因为 validator.py 中的最小值和最大值被加了引号。

- 检查领导者状态时使用复制凭据（Alexander Kukushkin）

  可能存在设置了 **`remove_data_directory_on_diverged_timelines`** 但未定义 **`rewind_credentials`** 且不允许节点间超级用户访问的情况。

- 修复 REST API 证书替换时的"端口被占用"错误（Ants Aasma）

  切换证书时，与并发 API 请求之间存在竞态条件。如果在替换期间有一个活跃的请求，替换将因端口被占用错误而失败，导致 Patroni 陷入没有活跃 API 服务器的状态。

- 修复密码包含 **`%`** 字符时集群引导的错误（Bastien Wirtz）

  引导方法执行 **`DO`** 代码块时所有参数都已正确引用，但 **`cursor.execute()`** 方法不接受传递空参数列表。

- 修复"AttributeError: no attribute 'leader'"异常（Hrvoje Milković）

  当启用同步模式且 DCS 内容被清除时可能发生此错误。

- 修复分歧时间线检查中的错误（Alexander Kukushkin）

  Patroni 错误地判断时间线已经分歧。对于 pg_rewind 来说这不会造成问题，但如果不允许 pg_rewind 且设置了 **`remove_data_directory_on_diverged_timelines`**，则会导致前领导者被重新初始化。

--------

## Version 2.1.2

发布于 2021-12-03

**新特性**

- 兼容 **`psycopg>=3.0`**（Alexander Kukushkin）

  默认优先使用 **`psycopg2`**。仅当 **`psycopg2`** 不可用或版本过旧时才会使用 **`psycopg>=3.0`**。

- 向 REST API 添加 **`dcs_last_seen`** 字段（Michael Banck）

  此字段记录集群成员最后一次成功与 DCS 通信的时间（Unix 时间戳）。这对于识别和/或分析网络分区非常有用。

- 当 **`pg_controldata`** 报告"shut down"时释放领导者锁（Alexander Kukushkin）

  为解决 **`archive_command`** 缓慢/失败时切换/关闭速度慢的问题，Patroni 会在 **`pg_controldata`** 开始报告 PGDATA 已干净 **`shut down`** 且验证至少有一个副本接收了所有变更后，立即移除领导者键。如果没有满足此条件的副本，则不会移除领导者键，保持旧的行为，即 Patroni 将继续更新锁。

- 添加 **`sslcrldir`** 连接参数支持（Kostiantyn Nemchenko）

  该新连接参数在 PostgreSQL v14 中引入。

- 允许为 Zookeeper 中的 ZNode 设置 ACL（Alwyn Davis）

  引入新配置选项 **`zookeeper.set_acls`**，使 Kazoo 为其创建的每个 ZNode 应用默认 ACL。

**稳定性改进**

- 将下一次恢复尝试延迟到下一个 HA 循环（Alexander Kukushkin）

  如果 Postgres 因磁盘空间不足（例如）而崩溃并因此无法启动，Patroni 会过于频繁地尝试恢复，导致日志泛滥。

- 在降级之前添加日志，因为降级可能需要一些时间（Michael Banck）

  降级完成可能需要一些时间，仅从日志中可能不太明显正在发生什么。

- 改进"I am"状态消息（Michael Banck）

  **`no action. I am a secondary ({0})`** 对比 **`no action. I am ({0}), a secondary`**

- 将 **`wal_keep_segments`** 转换为 **`wal_keep_size`** 时转换为整数（Jorge Solórzano）

  可以在全局 [动态配置](/docs/patroni/config/dynamic#dynamic) 中将 **`wal_keep_segments`** 指定为字符串，由于 Python 是动态类型语言，字符串会被简单地重复。例如：**`wal_keep_segments: "100"`** 会被转换为 **`100100100100100100100100100100100100100100100100MB`**。

- 启用同步复制时仅允许切换到同步节点（Alexander Kukushkin）

  此外，领导者选举也仅在已知的同步节点之间进行。

- 当 Postgres 响应缓慢时使用缓存的角色作为回退（Alexander Kukushkin）

  在某些极端情况下，Postgres 可能非常慢，以至于正常的监控查询无法在几秒钟内完成。**`statement_timeout`** 异常未被正确处理可能导致当领导者键过期或更新失败时 Postgres 未能及时降级。在出现此类异常时，Patroni 将使用缓存的 **`role`** 来确定 Postgres 是否以主库身份运行。

- 避免不必要的成员 ZNode 更新（Alexander Kukushkin）

  如果成员数据中没有值发生变化，则不应进行更新。

- 优化提升后的检查点（Alexander Kukushkin）

  如果最新时间线已存储在 **`pg_control`** 中，则避免执行 **`CHECKPOINT`**。这有助于避免在使用 **`initdb`** 初始化新集群后立即执行不必要的 **`CHECKPOINT`**。

- 选择同步节点时优先选择没有 **`nofailover`** 标签的成员（Alexander Kukushkin）

  此前，同步节点仅基于复制延迟进行选择，因此带有 **`nofailover`** 标签的节点与其他节点有相同的机会成为同步节点。这种行为既令人困惑又危险，因为在主库故障时无法自动进行故障转移。

- 从 etcd 机器缓存中移除重复主机（Michael Banck）

  etcd 集群中的已公布客户端 URL 可能配置错误。在 Patroni 中移除重复项是一个简单的改进。

**错误修复**

- 在槽管理时跳过临时复制槽（Alexander Kukushkin）

  从 v10 开始，**`pg_basebackup`** 会为 WAL 流创建一个临时复制槽，而 Patroni 会因为槽名称未知而尝试删除它。为修复此问题，我们在查询 **`pg_stat_replication_slots`** 视图时跳过所有临时槽。

- 确保 **`pg_replication_slot_advance()`** 不会超时（Alexander Kukushkin）

  Patroni 在此情况下使用默认的 **`statement_timeout`**，一旦调用失败，很可能永远无法恢复，导致 **`pg_wal`** 体积增大和 **`pg_catalog`** 膨胀。

- **`/status`** 在降级时未更新（Alexander Kukushkin）

  降级 PostgreSQL 后，旧领导者会更新 DCS 中的最后 LSN。从 **`2.1.0`** 开始引入了新的 **`/status`** 键，但 optime 仍然被写入 **`/optime/leader`**。

- 处理降级时的 DCS 异常（Alexander Kukushkin）

  在由于更新领导者锁失败而降级主库时，可能发生 DCS 完全宕机的情况，导致 **`get_cluster()`** 调用抛出异常。未被正确处理会导致 Postgres 保持停止状态直到 DCS 恢复。

- **`use_unix_socket_repl`** 在某些情况下不生效（Alexander Kukushkin）

  具体来说，当未设置 **`postgresql.unix_socket_directories`** 时。在这种情况下，Patroni 应该使用 **`libpq`** 的默认值。

- 修复 Patroni REST API 中的若干问题（Alexander Kukushkin）

  **`clusters_unlocked`** 有时可能未定义，导致 **`GET /metrics`** 端点出现异常。此外，错误处理方法假设 **`connect_address`** 元组总是包含两个元素，但实际上在 IPv6 的情况下可能有更多元素。

- 等待新提升的节点完成恢复后再决定是否进行 rewind（Alexander Kukushkin）

  实际提升发生和新时间线创建之前可能需要一些时间。如果不等待，副本可能会错误地判断不需要 rewind。

- 处理决定是否进行 rewind 时历史文件中缺失时间线的情况（Alexander Kukushkin）

  如果主库上的历史文件中缺少当前副本的时间线，副本会错误地认为不需要 rewind。

--------

## Version 2.1.1

发布于 2021-08-19

**新特性**

- 支持 ETCD SRV 名称后缀（David Pavlicek）

  Etcd 允许在同一域下区分多个 Etcd 集群，Patroni 现在也支持此功能。

- 丰富历史记录，包含新领导者信息（huiyalin525）

  为 **`patronictl history`** 输出添加了新列。

- 使集群内 Kubernetes 配置的 CA 证书包可配置（Aron Parsons）

  默认情况下，Patroni 使用 **`/var/run/secrets/kubernetes.io/serviceaccount/ca.crt`**，此新功能允许指定自定义的 **`kubernetes.cacert`**。

- 支持动态注册/注销 Consul 服务和更改标签（Tommy Li）

  此前需要重启 Patroni。

**错误修复**

- 避免不必要的 REST API 重新加载（Alexander Kukushkin）

  前一版本添加了在磁盘上证书变更时重新加载 REST API 证书的功能。不幸的是，重新加载在启动后会无条件地发生。

- 设置 **`etcd.use_proxies`** 时不要解析集群成员（Alexander Kukushkin）

  启动时 Patroni 通过查询成员列表来检查 Etcd 集群的健康状况。此外，它还尝试解析主机名，但在通过代理使用 Etcd 时这是不必要的，并会导致不必要的警告。

- 跳过 **`pg_stat_replication`** 中包含 NULL 值的行（Alexander Kukushkin）

  **`pg_stat_replication`** 视图似乎可能在 **`state = 'streaming'`** 时，**`replay_lsn`**、**`flush_lsn`** 或 **`write_lsn`** 字段中包含 NULL 值。

--------
## Version 2.1.0

发布于 2021-07-06

此版本添加了与 PostgreSQL v14 的兼容性，使逻辑复制槽在故障转移/切换中得以保留，实现了 REST API 的允许列表支持，并将日志减少到每次心跳一行。

**新特性**

- 兼容 PostgreSQL v14（Alexander Kukushkin）

  如果 Patroni 本身不处于"暂停"模式，则取消暂停 WAL 回放。WAL 回放可能因为主库上某些参数（例如 **`max_connections`**）的更改而被"暂停"。

- 逻辑槽故障转移（Alexander Kukushkin）

  使逻辑复制槽在 PostgreSQL v11+ 上的故障转移/切换中得以保留。复制槽在重启时从主库复制到副本，然后使用 [pg_replication_slot_advance()](https://www.postgresql.org/docs/11/functions-admin.html#id-1.5.8.31.8.5.2.2.8.1.1) 函数将其向前推进。因此，槽在故障转移之前就已存在，不会丢失任何事件，但有可能某些事件会被重复投递。

- 为 Patroni REST API 实现允许列表（Alexander Kukushkin）

  配置后，只有匹配规则的 IP 才被允许调用不安全的端点。此外，还可以自动将集群成员的 IP 添加到列表中。

- 添加通过 Unix 套接字进行复制连接的支持（Mohamad El-Rifai）

  此前，Patroni 始终使用 TCP 进行复制连接，这可能导致 SSL 验证问题。使用 Unix 套接字可以使复制用户免于 SSL 验证。

- 基于用户定义标签的健康检查（Arman Jafari Tehrani）

  除 [预定义标签](/docs/patroni/config/yaml#tags_settings) 外，还可以指定任意数量的自定义标签，这些标签在 **`patronictl list`** 输出和 REST API 中可见。现在可以在健康检查中使用自定义标签。

- 添加 Prometheus **`/metrics`** 端点（Mark Mercado、Michael Banck）

  该端点暴露与 **`/patroni`** 相同的指标。

- 减少 Patroni 日志的冗余度（Alexander Kukushkin）

  当一切正常时，每次 HA 循环运行只写入一行日志。

**破坏性变更**

- 旧的 **`permanent logical replication slots`** 功能将不再适用于 PostgreSQL v10 及更早版本（Alexander Kukushkin）

  在提升后创建逻辑槽的策略无法保证不丢失逻辑事件，因此已被禁用。

- **`/leader`** 端点在节点持有锁时始终返回200（Alexander Kukushkin）

  提升备用集群需要更新负载均衡器健康检查，这不太方便且容易遗忘。为解决此问题，我们更改了 **`/leader`** 健康检查端点的行为。它将返回200，而不考虑集群是普通集群还是 [备用集群](/docs/patroni/standby_cluster#standby_cluster)。

**Raft 支持改进**

- 可靠的 Raft 流量加密支持（Alexander Kukushkin）

  由于 **`PySyncObj`** 中的各种问题，加密支持非常不稳定。

- 处理 Raft 实现中的 DNS 问题（Alexander Kukushkin）

  如果 **`self_addr`** 和/或 **`partner_addrs`** 使用 DNS 名称而非 IP 配置，**`PySyncObj`** 实际上只在对象创建时进行一次解析。当同一节点以不同 IP 重新上线时会导致问题。

**稳定性改进**

- 兼容 **`psycopg2-2.9+`**（Alexander Kukushkin）

  在 **`psycopg2`** 中，**`autocommit = True`** 在 **`with connection`** 代码块中被忽略，这会破坏复制协议连接。

- 修复 Zookeeper 下过多的 HA 循环运行（Alexander Kukushkin）

  成员 ZNode 的更新会引发连锁反应，导致 HA 循环连续运行多次。

- 当磁盘上的 REST API 证书发生变更时进行重新加载（Michael Todorovic）

  如果 REST API 证书文件被就地更新，Patroni 不会执行重新加载。

- 使用 Kerberos 认证时不创建 pgpass 目录（Kostiantyn Nemchenko）

  Kerberos 和密码认证是互斥的。

- 修复自定义引导中的小问题（Alexander Kukushkin）

  仅在执行 PITR 时以 **`hot_standby=off`** 启动 Postgres，并在 PITR 完成后重启。

**错误修复**

- 兼容 **`kazoo-2.7+`**（Alexander Kukushkin）

  由于 Patroni 自行处理重试，它依赖于 **`kazoo`** 的旧行为，即在没有可用连接时立即丢弃对 Zookeeper 集群的请求。

- 当已知通过代理连接时，显式请求 Etcd v3 集群的版本（Alexander Kukushkin）

  Patroni 通过 gRPC-gateway 与 Etcd v3 集群交互，根据集群版本需要使用不同的端点（**`/v3`**、**`/v3beta`** 或 **`/v3alpha`**）。版本仅在与集群拓扑一起解析时获取，但通过代理连接时从未进行过拓扑解析。

--------

## Version 2.0.2

发布于 2021-02-22

**新特性**

- 能够忽略外部管理的复制槽（James Coleman）

  Patroni 会尝试移除任何它不认识的复制槽，但确实存在复制槽应由外部管理的情况。现在可以配置不应被移除的槽。

- 为 REST API 添加密码套件限制支持（Gunnar "Nick" Bluth）

  可通过 **`restapi.ciphers`** 或 **`PATRONI_RESTAPI_CIPHERS`** 环境变量进行配置。

- 为 REST API 添加加密 TLS 密钥支持（Jonathan S. Katz）

  可通过 **`restapi.keyfile_password`** 或 **`PATRONI_RESTAPI_KEYFILE_PASSWORD`** 环境变量进行配置。

- REST API 认证凭据的常量时间比较（Alex Brasetvik）

  使用 **`hmac.compare_digest()`** 替代 **`==`**，后者容易受到时序攻击。

- 基于复制延迟选择同步节点（Krishna Sarabu）

  如果同步节点上的复制延迟开始超过配置的阈值，它可能被降级为异步节点和/或被其他节点替换。行为通过 **`maximum_lag_on_syncnode`** 控制。

**稳定性改进**

- 执行自定义引导时以 **`hot_standby = off`** 启动 Postgres（Igor Yanchenko）

  在自定义引导期间，Patroni 恢复基础备份、启动 Postgres 并等待恢复完成。备库上的某些 PostgreSQL 参数不能小于主库上的值，如果新值（从 WAL 恢复）高于配置值，Postgres 会 panic 并停止。为避免此行为，我们将在没有 **`hot_standby`** 模式的情况下执行自定义引导。

- 当所需的 watchdog 不健康时警告用户（Nicolas Thauvin）

  当 watchdog 设备在必需模式下不可写或缺失时，成员无法被提升。添加了警告以向用户展示在哪里查找此配置错误。

- 改进单用户模式恢复的详细输出（Alexander Kukushkin）

  如果 Patroni 注意到 PostgreSQL 未正常关闭，在某些情况下会通过以单用户模式启动 Postgres 来执行崩溃恢复。恢复可能失败（例如由于磁盘空间不足），但错误被吞没了。

- 添加与 **`python-consul2`** 模块的兼容性（Alexander Kukushkin、Wilfried Roset）

  老旧的 **`python-consul`** 已数年未维护，因此有人创建了一个包含新功能和错误修复的分支。

- 运行 [patronictl](/docs/patroni/patronictl#patronictl) 时不使用 **`bypass_api_service`**（Alexander Kukushkin）

  当 K8s Pod 在非 **`default`** 命名空间中运行时，它不一定有足够的权限查询 [kubernetes](/docs/patroni/kubernetes#kubernetes) 端点。在这种情况下，Patroni 会显示警告并忽略 **`bypass_api_service`** 设置。对于 [patronictl](/docs/patroni/patronictl#patronictl) 来说，这个警告有些烦人。

- 如果 **`raft.data_dir`** 不存在则创建，或确保其可写（Mark Mercado）

  改善用户友好性和可用性。

**错误修复**

- 在暂停状态下丢失领导者锁时不中断重启或提升（Alexander Kukushkin）

  在暂停状态下，允许在没有锁的情况下以主库身份运行 Postgres。

- 修复 REST API 中 **`shutdown_request()`** 的问题（Nicolas Limage）

  为改善 SSL 连接处理并延迟握手直到线程启动，Patroni 重写了 **`HTTPServer`** 中的几个方法。**`shutdown_request()`** 方法被遗漏了。

- 修复使用 Zookeeper 时睡眠时间的问题（Alexander Kukushkin）

  Patroni 有可能在 HA 代码运行之间睡眠长达两倍的时间。

- 修复引导失败后移动数据目录时无效的 **`os.symlink()`** 调用（Andrew L'Ecuyer）

  如果引导失败，Patroni 会重命名数据目录、pg_wal 和所有表空间。之后更新符号链接以保持文件系统一致。符号链接创建失败是因为 **`src`** 和 **`dst`** 参数被交换了。

- 修复 post_bootstrap()方法中的错误（Alexander Kukushkin）

  如果未配置超级用户密码，Patroni 无法调用 **`post_init`** 脚本，因此整个引导过程失败。

- 修复备用集群中 pg_rewind 的问题（Alexander Kukushkin）

  如果超级用户名称与 Postgres 不同，备用集群中的 **`pg_rewind`** 会因为连接字符串中不包含数据库名称而失败。

- 仅在 Etcd v3 认证明确失败时才退出（Alexander Kukushkin）

  启动时 Patroni 执行 Etcd 集群拓扑发现并在必要时进行认证。可能其中一台 etcd 服务器不可访问，Patroni 尝试在此服务器上进行认证并失败，而不是重试下一个节点。

- 处理 psutil cmdline()返回空列表的情况（Alexander Kukushkin）

  僵尸进程仍然是 postmaster 的子进程，但它们没有 cmdline()。

- 将 **`PATRONI_KUBERNETES_USE_ENDPOINTS`** 环境变量视为布尔值（Alexander Kukushkin）

  不这样做会导致无法通过环境变量禁用 **`kubernetes.use_endpoints`**。

- 改进并发端点更新错误的处理（Alexander Kukushkin）

  Patroni 将显式查询当前端点对象，验证当前 Pod 仍持有领导者锁，然后重复更新。

--------

## Version 2.0.1

发布于 2020-10-01

**新特性**

- 在 **`patronictl edit-config`** 中，如果 **`less`** 不可用，则使用 **`more`** 作为分页器（Pavel Golub）

  在 Windows 上将使用 **`more.com`**。此外，**`requirements.txt`** 中的 **`cdiff`** 已更改为 **`ydiff`**，但 [patronictl](/docs/patroni/patronictl#patronictl) 仍然为兼容性同时支持两者。

- 添加 **`raft`** 的 **`bind_addr`** 和 **`password`** 支持（Alexander Kukushkin）

  **`raft.bind_addr`** 在 NAT 后运行时可能很有用。**`raft.password`** 启用流量加密（需要 **`cryptography`** 模块）。

- 添加 **`sslpassword`** 连接参数支持（Kostiantyn Nemchenko）

  该连接参数在 PostgreSQL 13中引入。

**稳定性改进**

- 更改暂停模式下的行为（Alexander Kukushkin）

  1. 如果 **`PGDATA`** 目录缺失/为空，Patroni 将不会调用 **`bootstrap`** 方法。
  2. Patroni 在暂停模式下不会因 sysid 不匹配而退出，仅记录警告。
  3. 如果 Postgres 未在恢复模式下运行（接受写入）但 sysid 与初始化键不匹配，节点将不会在暂停模式下尝试获取领导者键。

- 执行崩溃恢复时应用 **`master_start_timeout`**（Alexander Kukushkin）

  如果 Postgres 在领导者节点上崩溃，Patroni 通过以单用户模式启动 Postgres 来执行崩溃恢复。在崩溃恢复期间，领导者锁会持续更新。如果崩溃恢复未在 **`master_start_timeout`** 秒内完成，Patroni 将强制停止并释放领导者锁。

- 从 **`urllib3`** 依赖中移除 **`secure`** 额外项（Alexander Kukushkin）

  添加它的唯一原因是 Python 2.7的 **`ipaddress`** 依赖。

**错误修复**

- 修复 **`Kubernetes.update_leader()`** 中的错误（Alexander Kukushkin）

  一个未处理的异常阻止了在更新领导者对象失败时降级主库。

- 修复使用 RAFT 时 [patronictl](/docs/patroni/patronictl#patronictl) 挂起的问题（Alexander Kukushkin）

  使用 Patroni 配置运行 [patronictl](/docs/patroni/patronictl#patronictl) 时，**`self_addr`** 应被添加到 **`partner_addrs`** 中。

- 修复 **`get_guc_value()`** 中的错误（Alexander Kukushkin）

  Patroni 无法在 PostgreSQL 12上获取 **`restore_command`** 的值，因此为 **`pg_rewind`** 获取缺失 WAL 的功能不起作用。

--------
## Version 2.0.0

发布于 2020-09-02

此版本增强了与 PostgreSQL 13 的兼容性，添加了对多个同步备用节点的支持，对 **`pg_rewind`** 的处理进行了重大改进，添加了对 Etcd v3 和纯 RAFT 模式下 Patroni（不依赖 Etcd、Consul 或 Zookeeper）的支持，并使得可选调用 **`pre_promote`**（隔离）脚本成为可能。

**PostgreSQL 13 支持**

- 提升为 **`standby_leader`** 时不触发 **`on_reload`**，适用于 PostgreSQL 13+（Alexander Kukushkin）

  提升为 **`standby_leader`** 时我们会更改 **`primary_conninfo`**，更新角色并重新加载 Postgres。由于 **`on_role_change`** 和 **`on_reload`** 实际上是重复的，Patroni 将只调用 **`on_role_change`**。

- 添加对 **`gssencmode`** 和 **`channel_binding`** 连接参数的支持（Alexander Kukushkin）

  PostgreSQL 12 引入了 **`gssencmode`**，13 引入了 **`channel_binding`** 连接参数，如果在 **`postgresql.authentication`** 部分中定义，现在可以使用它们。

- 处理 **`wal_keep_segments`** 重命名为 **`wal_keep_size`** 的情况（Alexander Kukushkin）

  在配置错误的情况下（在 13 上使用 **`wal_keep_segments`** 或在旧版本上使用 **`wal_keep_size`**），Patroni 将自动调整配置。

- 在 13 上尽可能使用带有 **`--restore-target-wal`** 选项的 **`pg_rewind`**（Alexander Kukushkin）

  在 PostgreSQL 13 上，Patroni 检查是否配置了 **`restore_command`** 并告知 **`pg_rewind`** 使用它。

**新特性**

- \[BETA\] 实现纯 RAFT 模式下的 Patroni 支持（Alexander Kukushkin）

  这使得可以在没有第三方依赖（如 Etcd、Consul 或 Zookeeper）的情况下运行 Patroni。为实现高可用，您需要运行三个 Patroni 节点，或者两个 Patroni 节点加一个运行 **`patroni_raft_controller`** 的节点。更多信息请参阅 [**文档**](/docs/patroni/config/yaml#raft_settings)。

- \[BETA\] 通过 gRPC-gateway 实现对 Etcd v3 协议的支持（Alexander Kukushkin）

  Etcd 3.0 在四年多前发布，Etcd 3.4 默认禁用了 v2。v2 也有可能从 Etcd 中被完全移除，因此我们在 Patroni 中实现了对 Etcd v3 的支持。要开始使用它，您必须在 Patroni 配置文件中显式创建 **`etcd3`** 部分。

- 支持多个同步备用节点（Krishna Sarabu）

  允许运行具有多个同步副本的集群。同步副本的最大数量由新参数 **`synchronous_node_count`** 控制。它默认设置为 1，当 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 设置为 **`off`** 时无效。

- 添加调用 **`pre_promote`** 脚本的可能性（Sergey Dudoladov）

  与回调不同，**`pre_promote`** 脚本在获取主节点锁之后、提升 Postgres 之前同步调用。如果脚本失败或以非零退出码退出，当前节点将释放主节点锁。

- 添加对配置目录的支持（Floris van Nee）

  目录中的 YAML 文件按字母顺序加载和应用。

- PostgreSQL 参数的高级验证（Alexander Kukushkin）

  如果特定参数不受当前 PostgreSQL 版本支持或其值不正确，Patroni 将完全移除该参数或尝试修复该值。

- 强制检查点完成后唤醒主线程（Alexander Kukushkin）

  副本通过 DCS 中主节点的成员键等待检查点指示。该键通常仅每个 HA 循环更新一次。不唤醒主线程的话，副本将不得不多等待最多 **`loop_wait`** 秒。

- 在 9.6+ 上使用 **`pg_stat_wal_receiver`** 视图（Alexander Kukushkin）

  该视图包含 **`primary_conninfo`** 和 **`primary_slot_name`** 的最新值，而 **`recovery.conf`** 的内容可能已过期。

- 改进 Patroni 配置文件中 IPv6 地址的处理（Mateusz Kowalski）

  IPv6 地址应该用方括号括起来，但 Patroni 之前期望的是纯格式。现在两种格式都受支持。

- 添加 Consul **`service_tags`** 配置参数（Robert Edström）

  它们对于动态服务发现很有用，例如供负载均衡器使用。

- 为 Zookeeper 实现 SSL 支持（Kostiantyn Nemchenko）

  需要 **`kazoo>=2.6.0`**。

- 为自定义引导方法实现 **`no_params`** 选项（Kostiantyn Nemchenko）

  允许直接调用 **`wal-g`**、**`pgBackRest`** 和其他备份工具，无需将它们包装在 shell 脚本中。

- 初始化失败后移动 WAL 和表空间（Feike Steenbergen）

  执行 **`reinit`** 时，Patroni 已经在移除 **`PGDATA`** 的同时移除符号链接的 WAL 目录和表空间。现在 **`move_data_directory()`** 方法将执行类似的工作，即重命名 WAL 目录和表空间并更新 PGDATA 中的符号链接。

**`改进 pg_rewind 支持`**

- 改进时间线分歧检查（Alexander Kukushkin）

  当副本上的重放位置未超过切换点，或者旧主节点上检查点记录的结尾与切换点相同时，我们不需要执行 rewind。为了获取检查点记录的结尾，我们使用 **`pg_waldump`** 并解析其输出。

- 如果 **`pg_rewind`** 报告缺少 WAL，尝试获取缺失的 WAL（Alexander Kukushkin）

  **`pg_rewind`** 所需的 WAL 段可能已不存在于 **`pg_wal`** 目录中，因此 **`pg_rewind`** 无法找到分歧点之前的检查点位置。从 PostgreSQL 13 开始，**`pg_rewind`** 可以使用 **`restore_command`** 来获取缺失的 WAL。对于较旧的 PostgreSQL 版本，Patroni 解析失败的 rewind 尝试的错误信息，并尝试通过自行调用 **`restore_command`** 来获取缺失的 WAL。

- 检测备用集群中的新时间线，并在必要时触发 rewind/重新初始化（Alexander Kukushkin）

  [`standby_cluster`](/docs/patroni/standby_cluster#standby_cluster) 与主集群解耦，因此不会立即知道主节点选举和时间线切换。为了检测这一事实，**`standby_leader`** 会定期检查 **`pg_wal`** 中的新历史文件。

- 缩短和美化历史日志输出（Alexander Kukushkin）

  当 Patroni 尝试确定是否需要 **`pg_rewind`** 时，它可能会将主节点的历史文件内容写入日志。历史文件随着每次故障转移/切换而增长，最终占据太多行，其中大部分并不是很有用。Patroni 现在不再显示原始数据，而是只显示当前副本时间线之前的 3 行和之后的 2 行。

**K8s 改进**

- 去除 [kubernetes](/docs/patroni/kubernetes#kubernetes) Python 模块依赖（Alexander Kukushkin）

  官方 Python kubernetes 客户端包含大量自动生成的代码，因此非常臃肿。Patroni 只使用 K8s API 端点的一小部分，实现对它们的支持并不困难。

- 使绕过 [kubernetes](/docs/patroni/kubernetes#kubernetes) 服务成为可能（Alexander Kukushkin）

  在 K8s 上运行时，Patroni 通常通过 [kubernetes](/docs/patroni/kubernetes#kubernetes) 服务与 K8s API 通信，其地址通过 **`KUBERNETES_SERVICE_HOST`** 环境变量公开。与其他服务一样，[kubernetes](/docs/patroni/kubernetes#kubernetes) 服务由 **`kube-proxy`** 处理，后者根据配置依赖用户空间程序或 **`iptables`** 进行流量路由。跳过中间组件直接连接到 K8s 主节点，使我们能够实现更好的重试策略，并在 K8s 主节点升级时降低 Postgres 降级的风险。

- 同步 Patroni 集群所有 Pod 的 HA 循环（Alexander Kukushkin）

  不这样做会将故障检测时间从 **`ttl`** 增加到 **`ttl + loop_wait`**。

- 在 K8s 上填充子集地址中的 **`references`** 和 **`nodename`**（Alexander Kukushkin）

  一些负载均衡器依赖此信息。

- 修复 **`update_leader()`** 中可能的竞态条件（Alexander Kukushkin）

  在 Patroni 外部发生的 leader configmap 或 endpoint 的并发更新可能导致 **`update_leader()`** 调用失败。在这种情况下，Patroni 会重新检查当前节点是否仍持有主节点锁并重复更新。

- 显式禁止修补不存在的配置（Alexander Kukushkin）

  对于 [kubernetes](/docs/patroni/kubernetes#kubernetes) 以外的 DCS，PATCH 调用会因为 **`cluster.config`** 为 **`None`** 而引发异常失败，但在 Kubernetes 上它会愉快地创建配置注解并阻止在引导完成后写入引导配置。

- 修复 [暂停](/docs/patroni/pause#pause) 中的错误（Alexander Kukushkin）

  当主节点键不存在时，副本会删除 **`primary_conninfo`** 并重启 Postgres，但它们应该什么都不做。

**REST API 改进**

- 将 TLS 握手延迟到工作线程启动后（Alexander Kukushkin、Ben Harris）

  如果 TLS 握手在 API 线程中完成且客户端未发送任何数据，API 线程将被阻塞（存在 DoS 风险）。

- 在 REST API 中独立于客户端证书检查 **`basic-auth`**（Alexander Kukushkin）

  此前只验证客户端证书。独立执行两项检查是完全有效的用例。

- 在 **`OPTIONS`** 请求的 HTTP 头后写入双 **`CRLF`**（Sergey Burladyan）

  HAProxy 对单个 **`CRLF`** 没有问题，但 Consul 健康检查会抱怨连接断开和意外的 EOF。

- **`GET /cluster`** 对 Zookeeper 显示过期的成员信息（Alexander Kukushkin）

  该端点使用的是 Patroni 内部集群视图。对于 Patroni 本身不会造成任何问题，但当暴露给外部时，我们需要显示最新的信息，特别是复制延迟。

- 修复备用集群的健康检查（Alexander Kukushkin）

  对主节点的 **`GET /standby-leader`** 和对 **`standby_leader`** 的 **`GET /master`** 错误地响应 200。

- 实现 **`DELETE /switchover`**（Alexander Kukushkin）

  此 REST API 调用删除已计划的切换。

- 创建 **`/readiness`** 和 **`/liveness`** 端点（Alexander Kukushkin）

  当 K8s 服务使用标签选择器时，它们可用于从子集地址中排除"不健康"的 Pod。

- 增强 **`GET /replica`** 和 **`GET /async`** REST API 健康检查（Krishna Sarabu、Alexander Kukushkin）

  检查现在支持可选的关键字 **`?lag=<max-lag>`**，仅当延迟小于提供的值时才响应 200。如果依赖此功能，请注意关于主节点 WAL 位置的信息仅每 **`loop_wait`** 秒更新一次！

- 添加对 REST API 响应中用户自定义 HTTP 头的支持（Yogesh Sharma）

  如果请求来自浏览器，此功能可能很有用。

**patronictl 改进**

- 在 **`patronictl pause`** 中不要尝试调用不存在的 leader（Alexander Kukushkin）

  在 K8s 上暂停没有 leader 的集群时，[`patronictl`](/docs/patroni/patronictl#patronictl) 会显示成员 "None" 无法访问的警告。

- 处理成员 **`conn_url`** 缺失的情况（Alexander Kukushkin）

  在 K8s 上，Pod 可能因为 Patroni 尚未运行而没有必要的注解。这会导致 [`patronictl`](/docs/patroni/patronictl#patronictl) 失败。

- 添加打印 ASCII 集群拓扑的能力（Maxim Fedotov、Alexander Kukushkin）

  对于查看具有级联复制的集群概览非常有用。

- 实现 **`patronictl flush switchover`**（Alexander Kukushkin）

  在此之前，**`patronictl flush`** 仅支持取消计划的重启。

**错误修复**

- 使用现有 PGDATA 引导集群时的属性错误（Krishna Sarabu）

  在尝试创建/更新 **`/history`** 键时，Patroni 访问了尚未在 DCS 中创建的 **`ClusterConfig`** 对象。

- 改进 Consul 中的异常处理（Alexander Kukushkin）

  **`touch_member()`** 方法中未处理的异常导致整个 Patroni 进程崩溃。

- 对 **`post_init`** 脚本强制执行 **`synchronous_commit=local`**（Alexander Kukushkin）

  Patroni 在创建用户（**`replication`**、**`rewind`**）时已经这样做了，但在 **`post_init`** 的情况下遗漏了。因此，如果脚本本身没有在内部执行此操作，[`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 下的引导将无法完成。

- 增加 Consul 连接池管理器中的 **`maxsize`**（ponvenkates）

  使用默认的 **`size=1`** 会生成一些警告。

- Patroni 错误地报告 Postgres 正在运行（Alexander Kukushkin）

  例如当 Postgres 因磁盘空间不足错误而崩溃时，状态未被更新。

- 在 **`pgpass`** 中用 **`*`** 替代缺失或空的值（Alexander Kukushkin）

  例如当未指定 **`standby_cluster.port`** 时，**`pgpass`** 文件生成不正确。

- 跳过为名称包含特殊字符的主节点创建物理复制槽（Krishna Sarabu）

  当名称包含特殊字符（如 '-'，例如 "abc-us-1"）时，Patroni 似乎在为主节点创建休眠槽（当定义了 **`slots`** 时）。

- 避免在自定义引导中删除不存在的 **`pg_hba.conf`**（Krishna Sarabu）

  如果自定义引导后 **`pg_hba.conf`** 恰好位于 **`pgdata`** 目录之外，Patroni 会失败。

--------

## Version 1.6.5

发布于 2020-08-23

**新特性**

- 主节点停止超时（Krishna Sarabu）

  Patroni 在停止 Postgres 时允许等待的秒数。仅在启用 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 时有效。当设置为大于 0 的值且 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 已启用时，如果停止操作运行时间超过 **`master_stop_timeout`** 设置的值，Patroni 将向 postmaster 发送 **`SIGKILL`**。请根据您的持久性/可用性权衡来设置该值。如果未设置此参数或设置为非正值，**`master_stop_timeout`** 不会生效。

- 不为主节点名称创建永久物理槽（Alexander Kukushkin）

  一个常见问题是当副本宕机时主节点回收 WAL 段。现在我们为静态集群提供了一个好的解决方案，即节点数量固定且名称永不改变的集群。您只需在 **`slots`** 中列出所有节点的名称，这样当节点宕机（未在 DCS 中注册）时主节点就不会移除该槽。

- 配置验证器的初步版本（Igor Yanchenko）

  使用 **`patroni --validate-config patroni.yaml`** 来验证 Patroni 配置。

- 可配置时间线历史最大长度的可能性（Krishna Sarabu）

  Patroni 将故障转移/切换的历史记录写入 DCS 中的 **`/history`** 键。随着时间推移，该键的大小会变大，但大多数情况下只有最后几行是有意义的。**`max_timelines_history`** 参数允许指定在 DCS 中保留的最大时间线历史条目数。

- Kazoo 2.7.0 兼容性（Danyal Prout）

  Kazoo 中一些非公开方法更改了签名，但 Patroni 依赖于它们。

**patronictl 改进**

- 显示成员标签（Kostiantyn Nemchenko、Alexander Kukushkin）

  标签是为每个节点单独配置的，此前没有简便方法来查看它们的概览。

- 改进成员输出（Alexander Kukushkin）

  冗余的集群名称不再在每行显示，仅在表头中显示。

``` bash
$ patronictl list
+ Cluster: batman (6813309862653668387) +---------+----+-----------+---------------------+
|    Member   |      Host      |  Role  |  State  | TL | Lag in MB | Tags                |
+-------------+----------------+--------+---------+----+-----------+---------------------+
| postgresql0 | 127.0.0.1:5432 | Leader | running |  3 |           | clonefrom: true     |
|             |                |        |         |    |           | noloadbalance: true |
|             |                |        |         |    |           | nosync: true        |
+-------------+----------------+--------+---------+----+-----------+---------------------+
| postgresql1 | 127.0.0.1:5433 |        | running |  3 |       0.0 |                     |
+-------------+----------------+--------+---------+----+-----------+---------------------+
```

- 显式指定配置文件但未找到时报错（Kaarel Moppel）

  此前 [`patronictl`](/docs/patroni/patronictl#patronictl) 仅报告一条 **`DEBUG`** 消息。

- 解决未初始化的 K8s Pod 导致 patronictl 崩溃的问题（Alexander Kukushkin）

  Patroni 依赖 K8s 上的某些 Pod 注解。当某个 Patroni Pod 正在停止或启动时，尚未有有效的注解，[`patronictl`](/docs/patroni/patronictl#patronictl) 会因异常而失败。

**稳定性改进**

- 如果对 K8s API 服务器的 LIST 调用失败，应用 1 秒退避（Alexander Kukushkin）

  这主要是为了避免日志泛滥，同时也有助于防止主线程的饥饿。

- 如果 K8s API 返回 **`retry-after`** HTTP 头则重试（Alexander Kukushkin）

  如果 K8s API 服务器被请求淹没，它可能会要求重试。

- 从 postmaster 中清除 **`KUBERNETES_`** 环境变量（Feike Steenbergen）

  **`KUBERNETES_`** 环境变量对 PostgreSQL 不是必需的，但将它们暴露给 postmaster 也会将它们暴露给后端和普通数据库用户（例如使用 pl/perl）。

- 重新初始化时清理表空间（Krishna Sarabu）

  在 reinit 期间，Patroni 仅删除 **`PGDATA`** 而保留用户定义的表空间目录。这导致 Patroni 在 reinit 中循环。之前的解决方法是实现 [自定义引导](/docs/patroni/replica_bootstrap#custom_bootstrap) 脚本。

- 提升后显式执行 **`CHECKPOINT`**（Alexander Kukushkin）

  这有助于缩短新主节点可用于 **`pg_rewind`** 之前的时间。

- 智能刷新 Etcd 成员（Alexander Kukushkin）

  如果 Patroni 未能在 Etcd 集群的所有成员上执行请求，Patroni 将在下次重试之前重新检查 **`A`** 或 **`SRV`** 记录以获取 IP/主机的变更。

- 跳过 **`pg_controldata`** 中缺失的值（Feike Steenbergen）

  当尝试使用与 PGDATA 版本不匹配的二进制文件时，值会缺失。Patroni 仍会尝试启动 Postgres，Postgres 会抱怨主版本不匹配并以错误中止。

**错误修复**

- 在需要时为 Consul 禁用 SSL 验证（Julien Riou）

  从 **`urllib3`** 的某个版本开始，必须显式将 **`cert_reqs`** 设置为 **`ssl.CERT_NONE`** 才能有效禁用 SSL 验证。

- 避免在 HA 循环的每个周期都打开复制连接（Alexander Kukushkin）

  回归问题在 1.6.4 中引入。

- 在失败的主节点上调用 **`on_role_change`** 回调（Alexander Kukushkin）

  在某些情况下，这可能导致虚拟 IP 仍然挂载在旧主节点上。回归问题在 1.4.5 中引入。

- 如果 pg_rewind 成功后 postgres 已启动，则重置 rewind 状态（Alexander Kukushkin）

  由于此错误，Patroni 在暂停模式下会启动手动关闭的 postgres。

- 检查 **`recovery.conf`** 时将 **`recovery_min_apply_delay`** 转换为 **`ms`**

  如果在 PostgreSQL 12 之前的版本上配置了 **`recovery_min_apply_delay`**，Patroni 会无限重启副本。

- PyInstaller 兼容性（Alexander Kukushkin）

  PyInstaller 将 Python 应用程序冻结（打包）为独立可执行文件。当我们将 **`multiprocessing`** 的启动方法从 **`fork`** 切换为 **`spawn`** 时，兼容性被破坏。

--------

## Version 1.6.4

发布于 2020-01-27

**新特性**

- 为 **`patronictl reinit`** 实现 **`--wait`** 选项（Igor Yanchenko）

  使用 **`--wait`** 选项时，patronictl 将等待 **`reinit`** 完成。

- 进一步改进 Windows 支持（Igor Yanchenko、Alexander Kukushkin）

  1.  所有用于集成测试的 shell 脚本均已用 Python 重写
  2.  在非 POSIX 系统上将使用 **`pg_ctl kill`** 来停止 postgres
  3.  不再尝试使用 Unix 域套接字

**稳定性改进**

- 确保 **`unix_socket_directories`** 和 **`stats_temp_directory`** 存在（Igor Yanchenko）

  在 Patroni 和 Postgres 启动时，确保 **`unix_socket_directories`** 和 **`stats_temp_directory`** 存在或尝试创建它们。如果创建失败，Patroni 将退出。

- 确保 **`postgresql.pgpass`** 位于 Patroni 有写入权限的位置（Igor Yanchenko）

  如果没有写入权限，Patroni 将抛出异常并退出。

- 默认禁用 Consul **`serfHealth`** 检查（Kostiantyn Nemchenko）

  即使在轻微的网络问题情况下，失败的 **`serfHealth`** 也会导致与该节点关联的所有会话失效。因此，主节点键会比 **`ttl`** 更早丢失，导致副本不必要的重启，甚至可能导致主节点降级。

- 为到 K8s API 的连接配置 TCP keepalive（Alexander Kukushkin）

  如果在 TTL 秒后从套接字未收到任何数据，可以认为它已死。

- 避免在创建用户时记录密码（Alexander Kukushkin）

  如果密码被拒绝或日志配置为 verbose 或完全未配置，密码可能会被写入 postgres 日志。为避免这种情况，Patroni 在尝试创建/更新用户之前会将 **`log_statement`**、**`log_min_duration_statement`** 和 **`log_min_error_statement`** 更改为安全值。

**错误修复**

- 在级联副本上使用 [`standby_cluster`](/docs/patroni/standby_cluster#standby_cluster) 配置中的 **`restore_command`**（Alexander Kukushkin）

  **`standby_leader`** 从该功能存在之初就已经这样做了。不在副本上做同样的事情可能会阻止它们跟上 standby leader。

- 更新备用集群报告的时间线（Alexander Kukushkin）

  在时间线切换的情况下，备用集群正确地从主节点复制，但 [`patronictl`](/docs/patroni/patronictl#patronictl) 报告的是旧时间线。

- 允许在 custom_conf 中定义某些恢复参数（Alexander Kukushkin）

  在副本上验证恢复参数时，如果 **`archive_cleanup_command`**、**`promote_trigger_file`**、**`recovery_end_command`**、**`recovery_min_apply_delay`** 和 **`restore_command`** 未在 patroni 配置中定义但在 **`postgresql.auto.conf`** 或 **`postgresql.conf`** 以外的文件中定义，Patroni 将跳过它们。

- 改进对名称中包含句号的 PostgreSQL 参数的处理（Alexander Kukushkin）

  此类参数可以由扩展定义，其中单位不一定是字符串。更改值可能需要重启（例如 **`pg_stat_statements.max`**）。

- 改进关闭期间的异常处理（Alexander Kukushkin）

  在关闭期间，Patroni 会尝试更新其在 DCS 中的状态。如果 DCS 不可访问，可能会引发异常。缺少异常处理会阻止日志线程停止。

--------

## Version 1.6.3

发布于 2019-12-05

**错误修复**

- 运行 **`pg_rewind`** 时不暴露密码（Alexander Kukushkin）

  此错误在 [#1301](https://github.com/patroni/patroni/pull/1301) 中引入。

- 将 **`postgresql.authentication`** 中指定的连接参数应用到 **`pg_basebackup`** 和自定义副本创建方法（Alexander Kukushkin）

  它们依赖于类 URL 的连接字符串，因此参数从未被应用。

--------

## Version 1.6.2

发布于 2019-12-05

**新特性**

- 实现 **`patroni --version`**（Igor Yanchenko）

  打印当前 Patroni 版本并退出。

- 为所有 HTTP 请求设置 **`user-agent`** HTTP 头（Alexander Kukushkin）

  Patroni 通过 HTTP 协议与 Consul、Etcd 和 Kubernetes API 通信。拥有特别定制的 **`user-agent`**（例如：**`Patroni/1.6.2 Python/3.6.8 Linux`**）可能对调试和监控有用。

- 使异常追踪的日志级别可配置（Igor Yanchenko）

  如果设置 **`log.traceback_level=DEBUG`**，追踪信息仅在 **`log.level=DEBUG`** 时可见。默认行为保持不变。

**稳定性改进**

- 搜索配置文件所需的模块时，避免导入所有 DCS 模块（Alexander Kukushkin）

  如果我们只需要例如 Zookeeper，则无需导入 Etcd、Consul 和 Kubernetes 的模块。这有助于减少内存使用并解决 **`Failed to import smth`** 的 INFO 消息问题。

- 从显式依赖中移除 Python **`requests`** 模块（Alexander Kukushkin）

  它不用于任何关键功能，但在新版本的 **`urllib3`** 发布时会导致很多问题。

- 改进将 **`etcd.hosts`** 写为逗号分隔字符串而非 YAML 数组时的处理（Igor Yanchenko）

  此前当以 **`host1:port1, host2:port2`** 格式（逗号后有空格）书写时会失败。

**易用性改进**

- 在 [`patronictl`](/docs/patroni/patronictl#patronictl) 中不强迫用户从空列表中选择成员（Igor Yanchenko）

  如果用户提供了错误的集群名称，我们将引发异常而不是要求从空列表中选择成员。

- 如果 REST API 无法绑定，使错误消息更有帮助（Igor Yanchenko）

  对于没有经验的用户来说，可能很难从 Python 堆栈跟踪中弄清楚出了什么问题。

**错误修复**

- 修复 **`wal_buffers`** 的计算（Alexander Kukushkin）

  基本单位在 PostgreSQL 11 中从 8 kB 块更改为字节。

- 仅在 PostgreSQL 10+ 上在 **`primary_conninfo`** 中使用 **`passfile`**（Alexander Kukushkin）

  在较旧版本上，除非安装了最新版本的 **`libpq`**，否则无法保证 **`passfile`** 能正常工作。

--------
## Version 1.6.1

发布于 2019-11-15

**新特性**

- 新增 **`PATRONICTL_CONFIG_FILE`** 环境变量（msvechla）

  它允许通过环境变量配置 [patronictl](/docs/patroni/patronictl#patronictl) 的 **`--config-file`** 参数。

- 实现 **`patronictl history`**（Alexander Kukushkin）

  显示故障转移/切换的历史记录。

- 执行 **`pg_rewind`** 时在 **`PGOPTIONS`** 中传入 **`-c statement_timeout=0`**（Alexander Kukushkin）

  这可以防止服务器上 **`statement_timeout`** 设置为较小值时，pg_rewind 执行的某些语句被取消的问题。

- 允许 PostgreSQL 配置使用更小的值（Soulou）

  Patroni 之前不允许某些 PostgreSQL 配置参数设置为低于某些硬编码值。现在允许的最小值更小了，默认值保持不变。

- 允许基于证书的认证（Jonathan S. Katz）

  此功能为超级用户、复制、rewind 账户启用了基于证书的认证，并允许用户指定希望使用的 **`sslmode`**。

- 在 **`primary_conninfo`** 中使用 **`passfile`** 代替密码（Alexander Kukushkin）

  这避免了在 postgresql.conf 上设置 **`600`** 权限的需要。

- 无论配置是否变更都执行 **`pg_ctl reload`**（Alexander Kukushkin）

  有些配置文件可能不受 Patroni 管控。当有人通过 REST API 或向 Patroni 进程发送 SIGHUP 进行 reload 时，通常期望 Postgres 也会被 reload。之前当 Patroni 配置的 **`postgresql`** 部分没有变更时，这不会发生。

- 比较所有恢复参数，而不仅仅是 **`primary_conninfo`**（Alexander Kukushkin）

  之前 **`check_recovery_conf()`** 方法只检查 **`primary_conninfo`** 是否变更，从未考虑其他恢复参数。

- 支持不重启即可应用某些恢复参数（Alexander Kukushkin）

  从 PostgreSQL 12 开始，以下恢复参数可以不重启即可更改：**`archive_cleanup_command`**、**`promote_trigger_file`**、**`recovery_end_command`** 和 **`recovery_min_apply_delay`**。在未来的 Postgres 版本中此列表将会扩展，Patroni 将自动支持。

- 支持在线更改 **`use_slots`**（Alexander Kukushkin）

  之前需要重启 Patroni 并手动删除 slots。

- 启动 Postgres 时只移除 **`PATRONI_`** 前缀的环境变量（Cody Coons）

  这将解决运行各种外部数据包装器时遇到的许多问题。

**稳定性改进**

- 与 K8s API 交互时使用 LIST + WATCH（Alexander Kukushkin）

  它可以高效地接收对象变更（pods、endpoints/configmaps），减轻 K8s 主节点的压力。

- 改进 bootstrap 时 PGDATA 非空的处理流程（Alexander Kukushkin）

  根据 **`initdb`** 源代码，当 PGDATA 中只有 **`lost+found`** 和 **`.dotfiles`** 时会被视为空目录。现在 Patroni 做了相同的处理。如果 **`PGDATA`** 恰好非空，同时从 **`pg_controldata`** 的角度看又无效，Patroni 将报错并退出。

- 避免在每次 HA 循环中调用开销较大的 **`os.listdir()`**（Alexander Kukushkin）

  当系统处于 IO 压力下时，**`os.listdir()`** 可能需要几秒（甚至几分钟）才能执行完毕，严重影响 Patroni 的 HA 循环。这甚至可能因缺少更新导致 leader 键从 DCS 中消失。现在有一种更好、开销更小的方式来检查 PGDATA 是否非空——检查 PGDATA 中 **`global/pg_control`** 文件是否存在。

- 日志基础设施的一些改进（Alexander Kukushkin）

  之前由于日志线程是 **`daemon`** 线程，在关闭时可能会丢失最后几行日志。

- 在 python 3.4+ 上使用 **`spawn`** 多进程启动方法（Maciej Kowalczyk）

  Python 中线程和多进程混合使用存在已知 [问题](https://bugs.python.org/issue6721)。从默认的 **`fork`** 方法切换到 **`spawn`** 是推荐的解决方案。不这样做可能导致 Postmaster 启动进程挂起，Patroni 无限报告 **`INFO: restarting after failure in progress`**，而实际上 Postgres 已经在正常运行。

**REST API 改进**

- 支持在 REST API 中检查客户端证书（Alexander Kukushkin）

  如果 **`verify_client`** 设置为 **`required`**，Patroni 将对所有 REST API 调用检查客户端证书。设置为 **`optional`** 时，只对所有不安全的 REST API 端点检查客户端证书。

- 当 Postgres 未运行时，**`GET /replica`** 健康检查请求返回 503 响应码（Alexander Anikin）

  Postgres 在开始接受客户端连接之前可能需要花费大量时间进行恢复。

- 实现 **`/history`** 和 **`/cluster`** 端点（Alexander Kukushkin）

  **`/history`** 端点显示 DCS 中 **`history`** 键的内容。**`/cluster`** 端点显示所有集群成员以及一些服务信息，如待处理和已计划的重启或切换。

**Etcd 支持改进**

- 在 Etcd RAFT 内部错误时重试（Alexander Kukushkin）

  当 Etcd 节点正在关闭时，它会发送 **`response code=300, data='etcdserver: server stopped'`**，这之前会导致 Patroni 降级主节点。

- 不要过早放弃 Etcd 请求重试（Alexander Kukushkin）

  当出现网络问题时，Patroni 之前会很快耗尽 Etcd 节点列表并放弃，而没有用完整个 **`retry_timeout`**，这可能导致主节点被降级。

**错误修复**

- 在向 **`pg_rewind`** 用户授予执行权限时禁用 **`synchronous_commit`**（kremius）

  如果 bootstrap 时使用了 **`synchronous_mode_strict: true`**，由于没有可用的同步节点，**`GRANT EXECUTE`** 语句会无限期等待。

- 修复 python 3.7 上的内存泄漏（Alexander Kukushkin）

  Patroni 使用 **`ThreadingMixIn`** 来处理 REST API 请求，而 python 3.7 默认将每个请求生成的线程设为非守护线程。

- 修复异步操作中的竞争条件（Alexander Kukushkin）

  **`patronictl reinit --force`** 有可能被恢复已停止的 Postgres 的尝试所覆盖。这最终会导致 Patroni 在 basebackup 运行时尝试启动 Postgres。

- 修复 **`postmaster_start_time()`** 方法中的竞争条件（Alexander Kukushkin）

  如果该方法从 REST API 线程执行，则需要创建一个单独的游标对象。

- 修复名称包含大写字母的同步备库无法被提升的问题（Alexander Kukushkin）

  我们将名称转换为小写，因为 Postgres 在将 **`application_name`** 与 **`synchronous_standby_names`** 中的值进行比较时也是这样做的。

- 在启动新回调之前，连同回调进程一起终止所有子进程（Alexander Kukushkin）

  不这样做会使在 bash 中实现回调变得困难，最终可能导致两个回调同时运行的情况。

- 修复"start failed"问题（Alexander Kukushkin）

  在某些条件下，尽管 Postgres 正在运行，其状态可能被设置为"start failed"。

--------

## Version 1.6.0

发布于 2019-08-05

此版本增加了对 PostgreSQL 12 的兼容性，使得在 PostgreSQL 11 及更新版本上无需超级用户即可运行 pg_rewind，并启用了 IPv6 支持。

**新特性**

- 将 Psycopg2 从依赖项中移除，必须独立安装（Alexander Kukushkin）

  从 2.8.0 开始，**`psycopg2`** 被拆分为两个不同的包：**`psycopg2`** 和 **`psycopg2-binary`**，它们可以同时安装到文件系统的相同位置。为了减少依赖冲突问题，我们让用户自行选择安装方式。有几个可选方案，请参阅 [文档](/docs/patroni/installation#psycopg2_install_options)。

- 兼容 PostgreSQL 12（Alexander Kukushkin）

  从 PostgreSQL 12 开始不再有 **`recovery.conf`**，所有原来的恢复参数都被转换为 [GUC](https://www.enterprisedb.com/blog/what-is-a-guc-variable)。为了防止 **`ALTER SYSTEM SET primary_conninfo`** 或类似操作，Patroni 将解析 **`postgresql.auto.conf`** 并从中删除所有备库和恢复参数。Patroni 配置保持向后兼容。例如，尽管 **`restore_command`** 是一个 GUC，仍然可以在 **`postgresql.recovery_conf.restore_command`** 部分中指定它，Patroni 会将其写入 PostgreSQL 12 的 **`postgresql.conf`** 中。

- 支持在 PostgreSQL 11 及更新版本上无需超级用户使用 **`pg_rewind`**（Alexander Kukushkin）

  如果要使用此功能，请在 Patroni 配置文件的 **`postgresql.authentication.rewind`** 部分定义 **`username`** 和 **`password`**。对于已存在的集群，需要手动创建用户并 **`GRANT EXECUTE`** 若干函数的权限。更多详情请参阅 PostgreSQL [文档](https://www.postgresql.org/docs/11/app-pgrewind.html#id-1.9.5.8.8)。

- 对副本上实际和期望的 **`primary_conninfo`** 值进行智能比较（Alexander Kukushkin）

  这有助于在将已有的主备集群转换为 Patroni 管理时避免副本重启。

- IPv6 支持（Alexander Kukushkin）

  有两个主要问题。Patroni REST API 服务之前只监听 **`0.0.0.0`**，且在 **`api_url`** 和 **`conn_url`** 中使用的 IPv6 IP 地址没有被正确引用。

- Kerberos 支持（Ajith Vilas，Alexander Kukushkin）

  使得可以在 Postgres 节点之间使用 Kerberos 认证，而无需在 Patroni 配置文件中定义密码。

- 管理 **`pg_ident.conf`**（Alexander Kukushkin）

  此功能的工作方式与 **`pg_hba.conf`** 类似：如果在配置文件或 DCS 中定义了 **`postgresql.pg_ident`**，Patroni 将把其值写入 **`pg_ident.conf`**；但如果定义了 **`postgresql.parameters.ident_file`**，Patroni 将认为 **`pg_ident`** 由外部管理，不会更新该文件。

**REST API 改进**

- 新增 **`/health`** 端点（Wilfried Roset）

  仅在 PostgreSQL 正在运行时返回 HTTP 状态码。

- 新增 **`/read-only`** 和 **`/read-write`** 端点（Julien Riou）

  **`/read-only`** 端点实现跨副本和主节点的读取负载均衡。**`/read-write`** 端点是 **`/primary`**、**`/leader`** 和 **`/master`** 的别名。

- 使用 **`SSLContext`** 包装 REST API 套接字（Julien Riou）

  **`ssl.wrap_socket()`** 已被弃用，且仍然允许即将弃用的协议（如 TLS 1.1）。

**日志改进**

- 两阶段日志记录（Alexander Kukushkin）

  所有日志消息首先写入内存队列，然后由单独的线程异步刷新到 stderr 或文件中。最大队列大小有限制（可配置）。如果达到限制，Patroni 将开始丢失日志，但这仍然比阻塞 HA 循环要好。

- 为 GET/OPTIONS API 调用及其延迟启用调试日志（Jan Tomsa）

  这有助于调试 HAProxy、Consul 或其他用于判断哪个节点是主节点/副本的工具所执行的健康检查。

- 记录 Retry 中捕获的异常（Daniel Kucera）

  当达到尝试次数或超时时记录最终异常。这有望帮助调试与 DCS 通信失败时的一些问题。

**patronictl 改进**

- 增强计划切换和重启的对话交互（Rafia Sabih）

  之前的对话没有考虑到计划操作，因此具有误导性。

- 检查配置文件是否存在（Wilfried Roset）

  当给定的文件名不存在时，明确提示配置文件信息，而不是静默忽略（这可能导致误解）。

- 为 **`EDITOR`** 添加回退值（Wilfried Roset）

  当 **`EDITOR`** 环境变量未定义时，**`patronictl edit-config`** 会因 **`PatroniCtlException`** 而失败。新的策略是尝试 **`editor`** 然后 **`vi`**，这在大多数系统上应该都可用。

**Consul 支持改进**

- 允许指定 Consul 一致性模式（Jan Tomsa）

  您可以在 [这里](https://www.consul.io/api/features/consistency.html) 阅读更多关于一致性模式的信息。

- 在 SIGHUP 时重新加载 Consul 配置（Cameron Daniel Kucera，Alexander Kukushkin）

  当有人更改 **`token`** 的值时特别有用。

**错误修复**

- 修复切换/故障转移中的边界情况（Sharoon Thomas）

  如果 REST API 不可访问且我们使用 DCS 作为回退时，变量 **`scheduled_at`** 可能未定义。

- 自定义 bootstrap 期间在 **`pg_hba.conf`** 中对 localhost 开放信任认证（Alexander Kukushkin）

  之前只对 unix_socket 开放，这导致了大量错误：**`FATAL:  no pg_hba.conf entry for replication connection from host "127.0.0.1", user "replicator"`**

- 即使前任 leader 领先也将同步节点视为健康（Alexander Kukushkin）

  如果主节点失去对 DCS 的访问，它会以只读模式重启 Postgres，但其他节点可能仍然可以通过 REST API 访问旧主节点。这种情况导致同步备库无法提升，因为旧主节点报告的 WAL 位置领先于同步备库。

- 备用集群错误修复（Alexander Kukushkin）

  使得在 standby_leader 不可访问时可以在备用集群中引导副本，以及其他一些小修复。

--------

## Version 1.5.6

发布于 2019-08-03

**新特性**

- 支持通过一组代理与 etcd 集群通信（Alexander Kukushkin）

  可能存在 etcd 集群无法直接访问但可以通过一组代理访问的情况。在这种情况下，Patroni 不会执行 etcd 拓扑发现，而只是在代理主机之间轮询。此行为由 **`etcd.use_proxies`** 控制。

- 更改节点角色变化时的回调行为（Alexander Kukushkin）

  如果角色从 **`master`** 或 **`standby_leader`** 变为 **`replica`**，或从 **`replica`** 变为 **`standby_leader`**，将不再调用 **`on_restart`** 回调，而是调用 **`on_role_change`** 回调。

- 更改 Postgres 的启动方式（Alexander Kukushkin）

  使用 **`multiprocessing.Process`** 替代执行自身，使用 **`multiprocessing.Pipe`** 将 postmaster pid 传输给 Patroni 进程。之前我们使用管道，这会导致 postmaster 进程的 stdin 被关闭。

**错误修复**

- 修复 REST API 为 standby leader 返回的角色（Alexander Kukushkin）

  之前错误地返回 **`replica`** 而不是 **`standby_leader`**。

- 如果回调无法被终止则等待其结束（Julien Tachoires）

  Patroni 没有足够的权限终止在 **`sudo`** 下运行的回调脚本，这会取消新的回调。如果运行中的脚本无法被终止，Patroni 将等待其完成然后运行下一个回调。

- 减少 dcs.get_cluster 方法的锁持有时间（Alexander Kukushkin）

  由于锁被持有，DCS 的慢速会影响 REST API 的健康检查，导致误报。

- 改进当 **`pg_wal`**/**`pg_xlog`** 是符号链接时清理 PGDATA 的行为（Julien Tachoires）

  在这种情况下，Patroni 将显式删除目标目录中的文件。

- 移除不必要的 os.path.relpath 使用（Ants Aasma）

  它依赖于能够解析工作目录，如果 Patroni 在一个后来从文件系统中取消链接的目录中启动，这将失败。

- 与 Etcd 通信时不强制 ssl 版本（Alexander Kukushkin）

  由于某些未知原因，debian 和 ubuntu 上的 python3-etcd 不是基于最新版本的包，因此它强制使用 Etcd v3 不支持的 TLSv1。我们在 Patroni 端解决了这个问题。

--------

## Version 1.5.5

发布于 2019-02-15

此版本引入了前主节点自动重新初始化的功能，改进了 patronictl list 的输出，并修复了若干错误。

**新特性**

- 新增 **`PATRONI_ETCD_PROTOCOL`**、**`PATRONI_ETCD_USERNAME`** 和 **`PATRONI_ETCD_PASSWORD`** 环境变量支持（Étienne M）

  之前只能在配置文件中或作为 **`PATRONI_ETCD_URL`** 的一部分来配置它们，这并不总是方便的。

- 支持自动重新初始化前主节点（Alexander Kukushkin）

  如果 pg_rewind 被禁用或无法使用，前主节点可能因时间线分叉而无法作为新副本启动。在这种情况下，唯一的修复方法是清除数据目录并重新初始化。此行为可以通过设置 **`postgresql.remove_data_directory_on_diverged_timelines`** 来更改。设置后，Patroni 将自动清除数据目录并重新初始化前主节点。

- 在 patronictl list 中显示时间线信息（Alexander Kukushkin）

  这有助于检测过时的副本。此外，如果端口值不是默认值或有多个成员运行在同一主机上，**`Host`** 将包含 ':{port}'。

- 创建与 \$SCOPE-config 端点关联的 headless service（Alexander Kukushkin）

  "config" 端点保存集群范围的 Patroni 和 Postgres 配置、历史文件，以及最重要的 **`initialize`** 键。当 Kubernetes 主节点重启或升级时，它会删除没有 service 的 endpoints。headless service 将防止其被删除。

**错误修复**

- 调整 leader watch 阻塞查询的读取超时（Alexander Kukushkin）

  根据 Consul 文档，实际响应超时会增加少量随机的额外等待时间，以分散并发请求的唤醒时间。它在最大持续时间上增加最多 **`wait / 16`** 的额外时间。在我们的情况下，我们添加 **`wait / 15`** 或 1 秒，取较大值。

- 通过复制协议连接 postgres 时始终使用 replication=1（Alexander Kukushkin）

  从 Postgres 10 开始，pg_hba.conf 中 database=replication 的行不接受 replication=database 参数的连接。

- 不要为仅使用 WAL 的备用集群将 primary_conninfo 写入 recovery.conf（Alexander Kukushkin）

  尽管在 [standby_cluster](/docs/patroni/standby_cluster#standby_cluster) 配置中既没有定义 **`host`** 也没有定义 **`port`**，Patroni 之前仍然将 **`primary_conninfo`** 写入 **`recovery.conf`**，这是无用的并且会产生大量错误。

--------

## Version 1.5.4

发布于 2019-01-15

此版本实现了灵活的日志记录功能并修复了若干错误。

**新特性**

- 日志基础设施改进（Alexander Kukushkin，Lucas Capistrant，Alexander Anikin）

  日志配置不仅可以通过环境变量，还可以从 Patroni 配置文件中进行配置。这使得可以通过更新配置并执行 reload 或向 Patroni 进程发送 SIGHUP 来在运行时更改日志配置。默认情况下 Patroni 将日志写入 stderr，但现在可以直接将日志写入文件并在达到一定大小时轮转。此外还增加了对自定义日期格式的支持以及对每个 Python 模块日志级别进行微调的功能。

- 支持在 leader 选举时考虑当前时间线（Alexander Kukushkin）

  可能会出现节点认为自己是最健康的，但实际上不在最新已知时间线上的情况。在某些情况下我们希望避免提升此类节点，这可以通过将 **`check_timeline`** 参数设置为 **`true`** 来实现（默认行为保持不变）。

- 放宽超级用户凭证要求

  Libpq 允许在不显式指定用户名或密码的情况下打开连接。根据情况，它依赖于 pgpass 文件或 pg_hba.conf 中的 trust 认证方法。由于 pg_rewind 也使用 libpq，它将以相同的方式工作。

- 实现通过环境变量配置 Consul Service 注册和检查间隔的功能（Alexander Kukushkin）

  Consul 中的服务注册在 1.5.0 中添加，但到目前为止只能通过 patroni.yaml 来启用。

**稳定性改进**

- 在自定义 bootstrap 期间将 archive_mode 设置为 off（Alexander Kukushkin）

  我们希望在集群完全运行之前避免归档 WAL 和历史文件。如果自定义 bootstrap 涉及 pg_upgrade，这确实很有帮助。

- 启动时加载全局配置时应用五秒退避（Alexander Kukushkin）

  这有助于避免在 Patroni 刚启动时频繁请求 DCS。

- 减少关闭时产生的错误消息数量（Alexander Kukushkin）

  这些消息是无害的，但相当烦人，有时还很吓人。

- 在创建 recovery.conf 时显式设置 rw 权限（Lucas Capistrant）

  我们不希望除 patroni/postgres 用户之外的任何人读取此文件，因为它包含复制用户和密码。

- 将 HTTPServer 异常重定向到 logger（Julien Riou）

  默认情况下，此类异常会记录到标准输出，干扰常规日志。

**错误修复**

- 移除 pg_ctl 进程中的 stderr 到 stdout 管道重定向（Cody Coons）

  从主 Patroni 进程继承 stderr 允许所有 Postgres 日志与所有 Patroni 日志一起查看。这在容器环境中非常有用，因为 Patroni 和 Postgres 日志可以使用标准工具（docker logs、kubectl 等）来查看。此外，此更改修复了当 Postgres 向 stderr 写入一些警告时 Patroni 无法捕获 postmaster pid 的错误。

- 以 Go 时间格式设置 Consul service check 注销超时（Pavel Kirillov）

  没有明确指定时间单位时注册会失败。

- 放宽 standby_cluster 集群配置检查（Dmitry Dolgov，Alexander Kukushkin）

  之前只接受字符串作为有效值，因此无法将端口指定为整数，也无法将 create_replica_methods 指定为列表。

--------

## Version 1.5.3

发布于 2018-12-03

兼容性和错误修复版本。

- 改进在 python3 下与 zookeeper 运行时的稳定性（Alexander Kukushkin）

  更改 **`loop_wait`** 会导致 Patroni 断开与 zookeeper 的连接且再也无法重新连接。

- 修复与 postgres 9.3 的兼容性问题（Alexander Kukushkin）

  打开复制连接时应指定 replication=1，因为 9.3 不理解 replication='database'。

- 确保每次 HA 循环至少刷新一次 Consul 会话，并改进 consul 会话异常处理（Alexander Kukushkin）

  重启本地 consul agent 会使与该节点相关的所有会话失效。未及时调用会话刷新以及未正确处理会话错误会导致主节点被降级。

--------

## Version 1.5.2

发布于 2018-11-26

兼容性和错误修复版本。

- 兼容 kazoo-2.6.0（Alexander Kukushkin）

  为了确保请求以适当的超时执行，Patroni 重新定义了 python-kazoo 模块中的 create_connection 方法。kazoo 的最新版本稍微改变了 create_connection 方法的调用方式。

- 修复 Consul 集群失去 leader 时 Patroni 崩溃的问题（Alexander Kukushkin）

  崩溃是由于 touch_member 方法的不正确实现导致的，它应该返回布尔值而不是抛出任何异常。

--------

## Version 1.5.1

发布于 2018-11-01

此版本实现了对永久复制槽的支持，增加了对 pgBackRest 的支持，并修复了若干错误。

**新特性**

- 永久复制槽（Alexander Kukushkin）

  永久复制槽在故障转移/切换时被保留，即新主节点上的 Patroni 在完成提升后会立即创建配置的复制槽。可以借助 **`patronictl edit-config`** 配置槽。初始配置也可以在 [bootstrap.dcs](/docs/patroni/config/yaml#yaml) 中完成。

- 新增 pgbackrest 支持（Yogesh Sharma）

  pgBackrest 可以在现有的 \$PGDATA 文件夹中恢复，这使得恢复速度更快，因为自上次备份以来未更改的文件会被跳过。为了支持此功能，引入了新参数 **`keep_data`**。更多示例请参阅 [副本创建方法](/docs/patroni/replica_bootstrap#custom_replica_creation) 部分。

**错误修复**

- "备用集群"工作流中的若干错误修复（Alexander Kukushkin）

  更多详情请参阅 <https://github.com/patroni/patroni/pull/823>。

- 修复集群管理暂停且 DCS 不可访问时 REST API 健康检查的问题（Alexander Kukushkin）

  回归问题引入于 <https://github.com/patroni/patroni/commit/90cf930036a9d5249265af15d2b787ec7517cf57>。

--------

## Version 1.5.0

发布于 2018-09-20

此版本使 Patroni HA 集群能够以备用模式运行，引入了对 Windows 运行的实验性支持，并提供了在 Consul 中注册 PostgreSQL 服务的新配置参数。

**新特性**

- 备用集群（Dmitry Dolgov）

  一个或多个 Patroni 节点可以组成一个备用集群，与主集群并行运行（即在另一个数据中心），由从主集群中的 master 复制的备用节点组成。备用集群中的所有 PostgreSQL 节点都是副本；其中一个副本选举自己直接从远程 master 复制，而其他副本则以级联方式从它复制。此功能的更详细描述和一些配置示例可以在 [这里](/docs/patroni/standby_cluster#standby_cluster) 找到。

- 在 Consul 中注册服务（Pavel Kirillov，Alexander Kukushkin）

  如果在 consul [配置](/docs/patroni/config/yaml#consul_settings) 中启用了 **`register_service`** 参数，节点将注册一个名为 **`scope`** 的服务，标签为 **`master`**、**`replica`** 或 **`standby-leader`**。

- 实验性 Windows 支持（Pavel Golub）

  从现在起可以在 Windows 上运行 Patroni，尽管 Windows 支持是全新的，还没有像 Linux 版本那样经过大量实际测试。欢迎您的反馈！

**patronictl 改进**

- 为 patronictl 添加 -k/--insecure 标志并支持 restapi 证书（Wilfried Roset）

  过去如果 REST API 由自签名证书保护，[patronictl](/docs/patroni/patronictl#patronictl) 将无法验证它们。没有办法禁用该验证。现在可以配置 [patronictl](/docs/patroni/patronictl#patronictl) 完全跳过证书验证，或在配置的 [ctl:](/docs/patroni/config/yaml#patronictl_settings) 部分提供 CA 和客户端证书。

- 从 patronictl switchover/failover 输出中排除带有 nofailover 标签的成员（Alexander Anikin）

  之前，通过 patronictl 执行交互式切换或故障转移时，这些成员被错误地建议为候选者。

**稳定性改进**

- 避免解析 pg_controldata 的非键值对输出行（Alexander Anikin）

  在某些情况下 pg_controldata 会输出没有冒号字符的行。这会在解析 pg_controldata 输出的 Patroni 代码中触发错误，隐藏了实际问题；通常这些行是 pg_controldata 在常规输出之前以警告形式发出的，即当二进制主版本与 PostgreSQL 数据目录的版本不匹配时。

- 在 leader 选举期间将成员名称添加到错误消息中（Jan Mussler）

  在 leader 选举期间，Patroni 连接到集群的所有已知成员并请求其状态。该状态写入 Patroni 日志并包含成员名称。之前，如果成员不可访问，错误消息不会显示其名称，只包含 URL。

- 在创建复制槽时立即保留 WAL 位置（Alexander Kukushkin）

  从 9.6 开始，**`pg_create_physical_replication_slot`** 函数提供了一个额外的布尔参数 **`immediately_reserve`**。当它设置为 **`false`**（也是默认值）时，槽在收到第一个客户端连接之前不会保留 WAL 位置，在槽创建和初始客户端连接之间的时间窗口内可能会丢失客户端所需的一些段。

- 修复严格同步复制中的错误（Alexander Kukushkin）

  当以 **`synchronous_mode_strict: true`** 运行时，在某些情况下 Patroni 会将 **`\*`** 放入 **`synchronous_standby_names`** 中，将大多数复制连接的同步状态更改为 **`potential`**。之前，Patroni 无法在这种情况下选择同步候选者，因为它只考虑状态为 **`async`** 的候选者。

--------

## Version 1.4.6

发布于 2018-08-14

**错误修复和稳定性改进**

此版本修复了 Patroni API /master 端点在非 master 节点上返回 200 的关键问题。这是一个报告问题，不是实际的脑裂，但在某些情况下客户端可能被定向到只读节点。

- 在降级时重置 is_leader 状态（Alexander Kukushkin，Oleksii Kliukin）

  确保被降级的集群成员停止在 /master API 调用上以 200 状态码响应。

- 在 API 输出中添加新的 "cluster_unlocked" 字段（Dmitry Dolgov）

  该字段指示集群是否有正在运行的 master。当无法查询除某个副本之外的任何其他节点时，它可以被使用。

--------

## Version 1.4.5

发布于 2018-08-03

**新特性**

- 改进应用新 postgres 配置时的日志记录（Don Seiler）

  Patroni 会记录已更改的参数名称和值。

- Python 3.7 兼容性（Christoph Berg）

  async 是 python3.7 中的保留关键字。

- 成员关闭时在 DCS 中将状态设置为 "stopped"（Tony Sorrentino）

  这会在 "patronictl list" 命令中将成员状态显示为 "stopped"。

- 改进当过时的 postmaster.pid 匹配到运行中的进程时记录的消息（Ants Aasma）

  之前的消息非常令人困惑。

- 实现 patronictl reload 功能（Don Seiler）

  之前只能通过调用 REST API 或向 Patroni 进程发送 SIGHUP 信号来重新加载配置。

- 作为副本启动时从 controldata 获取并应用某些参数（Alexander Kukushkin）

  在全局配置中设置的 **`max_connections`** 和其他一些参数的值可能低于主节点实际使用的值；当发生这种情况时，副本无法启动且需要手动修复。Patroni 现在通过从 **`pg_controldata`** 读取并应用值、启动 postgres 并设置 **`pending_restart`** 标志来处理这个问题。

- 如果设置了 LD_LIBRARY_PATH 则在启动 postgres 时使用它（Chris Fraser）

  启动 Postgres 时，Patroni 之前会传递已设置的 PATH、LC_ALL 和 LANG 环境变量。现在对 LD_LIBRARY_PATH 也做了相同处理。如果有人将 PostgreSQL 安装到非标准位置，这应该会有所帮助。

- 将 create_replica_method 重命名为 create_replica_methods（Dmitry Dolgov）

  为了明确它实际上是一个数组。旧名称仍然支持以保持向后兼容。

**错误修复和稳定性改进**

- 修复暂停状态下因 pg_rewind 导致副本启动的条件（Oleksii Kliukin）

  避免启动之前已经执行过 pg_rewind 的副本。

- 仅在 update_lock 成功时才对 master 健康检查响应 200（Alexander Kukushkin）

  防止在 DCS 分区时，Patroni 在前（已降级的）master 上将自己报告为 master。

- 修复与新 consul 模块的兼容性（Alexander Kukushkin）

  从 v1.1.0 开始，python-consul 更改了内部 API，开始使用 **`list`** 而不是 **`dict`** 来传递查询参数。

- 捕获关闭期间 Patroni REST API 线程的异常（Alexander Kukushkin）

  那些未捕获的异常会导致 PostgreSQL 在关闭时继续运行。

- 仅当 Postgres 作为 master 运行时才执行崩溃恢复（Alexander Kukushkin）

  要求 **`pg_controldata`** 报告 'in production' 或 'shutting down' 或 'in crash recovery'。在所有其他情况下不需要崩溃恢复。

- 改进配置错误处理（Henning Jacobs，Alexander Kukushkin）

  可以通过更新 Patroni 配置文件并向 Patroni 进程发送 SIGHUP 来在运行时更改许多参数（包括 **`restapi.listen`**）。此修复消除了当某些参数收到无效值时 'restapi' 线程中的晦涩异常。

--------

## Version 1.4.4

发布于 2018-05-22

**稳定性改进**

- 修复 poll_failover_result 中的竞争条件（Alexander Kukushkin）

  它没有直接影响故障转移或切换，但在某些罕见情况下，当前任 leader 释放锁时会过早地报告成功，产生 'Failed over to "None"' 而不是 'Failed over to "desired-node"' 的消息。

- 将 Postgres 参数名称视为不区分大小写（Alexander Kukushkin）

  大多数 Postgres 参数使用 snake_case 命名，但有三个例外：DateStyle、IntervalStyle 和 TimeZone。Postgres 接受以不同大小写编写的这些参数（例如 timezone = 'some/tzn'）；但是，Patroni 无法在 pg_settings 中找到这些参数名称的不区分大小写匹配，因此忽略了这些参数。

- 如果附加到运行中的 postgres 但集群未初始化则中止启动（Alexander Kukushkin）

  Patroni 可以附加到已经运行的 Postgres 实例。在处理副本之前，必须先在主节点上启动 Patroni。

- 修复 patronictl scaffold 的行为（Alexander Kukushkin）

  向 touch_member 传递 dict 对象而不是 json 编码的字符串，DCS 实现会负责编码。

- 暂停状态下更新 leader 键失败时不降级 master（Alexander Kukushkin）

  在维护期间，DCS 可能开始拒绝写请求但继续响应读请求。在这种情况下，Patroni 之前会在 DCS 中更新 leader 锁失败后将 Postgres 主节点置为只读模式。

- 当 Patroni 注意到新的 postmaster 进程时同步复制槽（Alexander Kukushkin）

  如果 Postgres 已重启，Patroni 必须确保复制槽列表符合其预期。

- 退出暂停后验证 sysid 并同步复制槽（Alexander Kukushkin）

  在 **`maintenance`** 模式期间，数据目录可能被完全重写，因此我们必须确保 **`Database system identifier`** 仍然属于我们的集群，且复制槽与 Patroni 预期同步。

- 修复在存在 postmaster 锁文件的数据目录上无法启动未运行的 Postgres 的问题（Alexander Kukushkin）

  检测 postmaster 锁文件中 PID 的重用。如果在 docker 容器中运行 Patroni 和 Postgres，更容易遇到此问题。

- 改进 DCS 被意外清除时的保护（Alexander Kukushkin）

  Patroni 有大量逻辑来防止在这种情况下发生故障转移；它还可以恢复所有键；但是，在此更改之前，意外删除 /config 键会在 1 个 HA 循环周期内关闭暂停模式。

- 遇到无效系统 ID 时不退出（Oleksii Kliukin）

  当集群系统 ID 为空或未通过验证检查时不退出。在这种情况下，集群很可能需要重新初始化；在结果消息中提及这一点。避免终止 Patroni，否则无法进行重新初始化。

**兼容 Kubernetes 1.10+**

- 添加空子集检查（Cody Coons）

  Kubernetes 1.10.0+ 开始返回 **`Endpoints.subsets`** 为 **`None`** 而不是 **`\[\]`**。

**Bootstrap 改进**

- 使删除 recovery.conf 变为可选（Brad Nicholson）

  如果定义了 <span class="title-ref">bootstrap.\<custom_bootstrap_method_name\>.keep_existing_recovery_conf</span> 并设置为 **`True`**，Patroni 将不会删除现有的 **`recovery.conf`** 文件。当使用 pgBackRest 等工具从备份引导时，这很有用，因为这些工具会为您生成适当的 **`recovery.conf`**。

- 允许为内置 basebackup 方法提供选项（Oleksii Kliukin）

  现在可以通过在配置中定义 **`basebackup`** 部分来为内置 basebackup 方法提供选项，类似于为自定义副本创建方法定义选项的方式。不同之处在于 **`basebackup`** 部分接受的格式：由于 pg_basebackup 接受 **`--key=value`** 和 **`--key`** 两种选项，该部分的内容可以是键值对的字典，也可以是单元素字典或仅包含键的列表（对于不接受值的选项）。更多示例请参阅 [副本创建方法](/docs/patroni/replica_bootstrap#custom_replica_creation) 部分。

--------

## Version 1.4.3

发布于 2018-03-05

**日志改进**

- 允许从环境变量配置日志级别（Andy Newton，Keyvan Hedayati）

  **`PATRONI_LOGLEVEL`** - 设置通用日志级别；**`PATRONI_REQUESTS_LOGLEVEL`** - 设置所有 HTTP 请求（例如 Kubernetes API 调用）的日志级别。有关可用日志级别名称，请参阅 <span class="title-ref">Python logging 文档 \<https://docs.python.org/3.6/library/logging.html#levels\></span>。

**稳定性改进和错误修复**

- 当 watch 超时时不重新发现 etcd 集群拓扑（Alexander Kukushkin）

  如果 etcd 配置中只有一个主机且正好这个主机不可访问，Patroni 之前会开始发现集群拓扑但永远不会成功。相反，它应该只是切换到下一个可用节点。

- 自定义 bootstrap 后将 bootstrap.pg_hba 的内容写入 pg_hba.conf（Alexander Kukushkin）

  现在其行为与使用 **`initdb`** 进行常规 bootstrap 时类似。

- 单用户模式会等待用户输入而永不结束（Alexander Kukushkin）

  回归问题引入于 <https://github.com/patroni/patroni/pull/576>。

--------

## Version 1.4.2

发布于 2018-01-30

**patronictl 改进**

- 将 scheduled failover 重命名为 scheduled switchover（Alexander Kukushkin）

  故障转移和切换功能在 1.4 版本中已分离，但 **`patronictl list`** 仍然报告 **`Scheduled failover`** 而不是 **`Scheduled switchover`**。

- 显示待重启信息（Alexander Kukushkin）

  为了应用某些配置更改，有时需要重启 postgres。Patroni 之前已经在 REST API 和写入 DCS 的节点状态中给出了提示，但没有简便的方式来显示它。

- 使 show-config 与配置文件中的 cluster_name 一起工作（Alexander Kukushkin）

  其工作方式类似于 **`patronictl edit-config`**。

**稳定性改进**

- 避免在 bootstrap 期间调用 pg_controldata（Alexander Kukushkin）

  在 initdb 或自定义 bootstrap 期间，存在一个 pgdata 不为空但 pg_controldata 尚未写入的时间窗口。在这种情况下，pg_controldata 调用会因错误消息而失败。

- 处理 psutil 抛出的异常（Alexander Kukushkin）

  每次调用 **`cmdline()`** 方法时都会读取和解析 cmdline。被检查的进程可能已经消失，在这种情况下会抛出 **`NoSuchProcess`**。

**Kubernetes 支持改进**

- 不要吞掉 k8s API 的错误（Alexander Kukushkin）

  对 Kubernetes API 的调用可能因多种原因而失败。在某些情况下应重试此类调用，在其他情况下我们应记录错误消息和异常堆栈跟踪。此更改将有助于调试 Kubernetes 权限问题。

- 更新 Kubernetes 示例 Dockerfile 以从 master 分支安装 Patroni（Maciej Szulik）

  之前使用的是 **`feature/k8s`**，该分支已经过时。

- 添加适当的 RBAC 以在 k8s 上运行 patroni（Maciej Szulik）

  添加分配给集群 pod 的 Service account、仅包含必要权限的 role，以及连接 Service account 和 Role 的 rolebinding。

--------
## Version 1.4.1

发布于 2018-01-17

**patronictl 修复**

- 不在建议的故障转移目标成员列表中显示当前领导者（Alexander Kukushkin）

  当集群中存在领导者时，patronictl failover 仍然可以工作，应将其从可以故障转移到的成员列表中排除。

- 使 patronictl switchover 与旧版 Patroni API 兼容（Alexander Kukushkin）

  如果 POST /switchover REST API 调用以状态码501失败，它将再次请求，但调用/failover 端点。

--------

## Version 1.4

发布于 2018-01-10

此版本添加了使用 Kubernetes 作为 DCS 的支持，允许 Patroni 作为云原生代理在 Kubernetes 中运行，无需额外部署 Etcd、Zookeeper 或 Consul。

**升级须知**

通过 pip 安装 Patroni 将不再自动引入依赖项（如 Etcd、Zookeeper、Consul 或 Kubernetes 的库，或 AWS 支持）。要启用它们，需要在 pip install 命令中显式列出，例如 **`pip install patroni[etcd,kubernetes]`**。

**Kubernetes 支持**

实现了基于 Kubernetes 的 DCS。使用 Endpoints 的元数据来存储配置和领导者键。Pod 定义中的元数据字段用于存储成员相关数据。除了使用 Endpoints，Patroni 还支持 ConfigMaps。你可以在 [文档的Kubernetes章节](/docs/patroni/kubernetes#kubernetes) 中找到关于此功能的更多信息。

**稳定性改进**

- 将 postmaster 进程分离为独立对象（Ants Aasma）

  该对象通过 pid 和启动时间标识正在运行的 postmaster 进程，简化了对 postmaster 在后台被重启或 postgres 目录从文件系统中消失的情况的检测（和解决）。

- 最小化 Patroni 在每次 HA 循环迭代中发出的 SELECT 数量（Alexander Kukushkin）

  在 HA 循环的每次迭代中，Patroni 需要知道恢复状态和绝对 WAL 位置。从现在起，Patroni 将只运行单个 SELECT 来获取此信息，而不是在副本上运行两个、在主节点上运行三个。

- 仅在持有锁时才在关闭时移除领导者键（Ants Aasma）

  无条件移除会产生不必要和误导性的异常。

**patronictl 改进**

- 为 patronictl 添加 version 命令（Ants Aasma）

  它将显示已安装的 Patroni 版本和正在运行的 Patroni 实例的版本（如果指定了集群名称）。

- 使某些 patronictl 命令的 cluster_name 参数可选（Alexander Kukushkin，Ants Aasma）

  如果 patronictl 使用定义了 **`scope`** 的常规 Patroni 配置文件，则可以工作。

- 显示有关计划切换和维护模式的信息（Alexander Kukushkin）

  在此之前，只能从 Patroni 日志或直接从 DCS 获取此信息。

- 改进 **`patronictl reinit`**（Alexander Kukushkin）

  有时 **`patronictl reinit`** 在 Patroni 忙于其他操作（即尝试启动 postgres）时会拒绝继续。 [patronictl](/docs/patroni/patronictl#patronictl) 没有提供任何命令来取消此类长时间运行的操作，唯一（危险的）解决方法是手动删除数据目录。新的 **`reinit`** 实现会在继续 reinit 之前强制取消其他长时间运行的操作。

- 在 **`patronictl pause`** 和 **`patronictl resume`** 中实现 **`--wait`** 标志（Alexander Kukushkin）

  它将使 [patronictl](/docs/patroni/patronictl#patronictl) 等待直到集群中所有节点确认请求的操作。此行为通过在 DCS 和 REST API 中为每个节点公开 [暂停](/docs/patroni/pause#pause) 标志来实现。

- 将 **`patronictl failover`** 重命名为 **`patronictl switchover`**（Alexander Kukushkin）

  之前的 **`failover`** 实际上只能执行切换；在没有领导者的集群中它会拒绝继续。

- 更改 **`patronictl failover`** 的行为（Alexander Kukushkin）

  即使没有领导者它也能工作，但在这种情况下你必须显式指定一个应成为新领导者的节点。

**公开时间线和历史信息**

- 在 DCS 和 API 中公开当前时间线（Alexander Kukushkin）

  为集群的每个成员存储当前时间线的信息。此信息可通过 API 访问并存储在 DCS 中。

- 在 DCS 的/history 键中存储提升历史（Alexander Kukushkin）

  此外，在 DCS 的/history 键中存储包含相应提升时间戳的时间线历史，并在每次提升时更新它。

**添加获取同步和异步副本的端点**

- 添加新的/sync 和/async 端点（Alexander Kukushkin，Oleksii Kliukin）

> 这些端点（也可通过/synchronous 和/asynchronous 访问）分别仅对同步和异步副本返回200（不包括标记为 **`noloadbalance`** 的副本）。

**允许 Etcd 配置多个主机**

- 为 Etcd 配置添加新的 **`hosts`** 参数（Alexander Kukushkin）

  此参数应包含初始主机列表，用于发现和填充正在运行的 etcd 集群成员列表。如果在工作期间由于某种原因已发现的主机列表被耗尽（该列表中没有可用主机），Patroni 将返回到 **`hosts`** 参数中的初始列表。

--------

## Version 1.3.6

发布于 2017-11-10

**稳定性改进**

- 在检查 postgres 是否正在运行时验证进程启动时间（Ants Aasma）

  在未清理 postmaster.pid 的崩溃后，可能存在具有相同 pid 的新进程，导致 is_running()误报，从而引发各种异常行为。

- 当丢失数据目录时，在引导前关闭 postgresql（ainlolcat）

  当主节点上的数据目录被强制删除时，postgres 进程可能仍然存活一段时间，阻止在该前主节点位置创建的副本启动或复制。此修复使 Patroni 缓存 postmaster 的 pid 及其启动时间，并在相应数据目录被删除后终止仍在运行的旧 postmaster。

- 如果 postgres 主进程死亡，则在单用户模式下执行崩溃恢复（Alexander Kukushkin）

  如果 postgres 没有干净关闭，立即作为备用节点启动是不安全的，也无法运行 **`pg_rewind`**。单用户崩溃恢复仅在启用了 **`pg_rewind`** 或当前没有主节点时才会触发。

**Consul 改进**

- 使得为 Consul 提供数据中心配置成为可能（Vilius Okockis，Alexander Kukushkin）

  在此之前，Patroni 始终与其运行所在主机的数据中心通信。

- 始终在 X-Consul-Token HTTP 头中发送令牌（Alexander Kukushkin）

  如果在 Patroni 配置中定义了 **`consul.token`**，我们将始终在'X-Consul-Token' HTTP 头中发送它。python-consul 模块试图与 Consul REST API 保持"一致"，后者不接受令牌作为 [会话API](https://www.consul.io/api/session.html) 的查询参数，但它仍然可以使用'X-Consul-Token'头。

- 如果提供的值小于最小可能值，则调整会话 TTL（Stas Fomin，Alexander Kukushkin）

  Patroni 配置中提供的 TTL 可能小于 Consul 支持的最小值。在这种情况下，Consul 代理无法创建新会话。没有会话，Patroni 就无法在 Consul KV 存储中创建成员和领导者键，导致集群不健康。

**其他改进**

- 通过环境变量 **`PATRONI_LOGFORMAT`** 定义自定义日志格式（Stas Fomin）

  如果时间戳和其他类似字段已由系统日志记录器添加（通常在 Patroni 作为服务运行时），允许在 Patroni 日志中禁用它们。

--------

## Version 1.3.5

发布于 2017-10-12

**错误修复**

- 如果数据目录被删除，则将角色设置为'uninitialized'（Alexander Kukushkin）

  如果节点作为主节点运行，这会阻止故障转移。

**稳定性改进**

- 如果尝试启动 postgres 失败，则尝试在单用户模式下运行 postmaster（Alexander Kukushkin）

  通常这种问题发生在作为主节点运行的节点被终止且时间线出现分歧时。如果 **`recovery.conf`** 定义了 **`restore_command`**，postgres 极有可能中止启动并保持 controldata 不变。这使得无法使用需要干净关闭的 **`pg_rewind`**。

**Consul 改进**

- 使得在创建会话时指定健康检查成为可能（Alexander Kukushkin）

  如果未指定，Consul 将使用"serfHealth"。一方面它允许快速检测隔离的主节点，但另一方面它使 Patroni 无法容忍短暂的网络延迟。

**错误修复**

- 修复 Python 3上的 watchdog（Ants Aasma）

  对 ioctl()调用接口的误解。如果 mutable=False，则 fcntl.ioctl()实际上会返回 arg 缓冲区。这在 Python2 上意外地工作了，因为 int 和 str 的比较不会返回错误。错误报告在 Python2 上通过引发 IOError 完成，在 Python3 上通过引发 OSError 完成。

--------

## Version 1.3.4

发布于 2017-09-08

**各种 Consul 改进**

- 将 consul 令牌作为头部传递（Andrew Colin Kissa）

  头部现在是向 consul [API](https://www.consul.io/api/index.html#authentication) 传递令牌的首选方式。

- Consul 的高级配置（Alexander Kukushkin）

  可以指定 **`scheme`**、**`token`**、客户端和 CA 证书的 [详细信息](/docs/patroni/config/yaml#consul_settings)。

- 与 python-consul-0.7.1 及以上版本的兼容性（Alexander Kukushkin）

  新的 python-consul 模块更改了某些方法的签名。

- "Could not take out TTL lock"消息从未被记录（Alexander Kukushkin）

  不是关键错误，但缺乏适当的日志记录会使出现问题时的调查变得复杂。

**使用 quote_ident 引用 synchronous_standby_names**

- 将 **`synchronous_standby_names`** 写入 **`postgresql.conf`** 时，其值必须被正确引用（Alexander Kukushkin）

  如果未正确引用，PostgreSQL 将实际上禁用同步复制并继续工作。

**围绕暂停状态的各种修复，主要与 watchdog 相关**（Alexander Kukushkin）

- 如果 watchdog 未激活，则不发送 keepalive
- 避免在暂停模式下激活 watchdog
- 在暂停模式下设置正确的 postgres 状态
- 如果 postgres 已停止，则不要尝试从 API 运行查询

--------

## Version 1.3.3

发布于 2017-08-04

**错误修复**

- 即使开启了 synchronous_mode_strict，同步复制也会在提升后不久被禁用（Alexander Kukushkin）
- 如果从备份恢复后缺少 **`pg_ident.conf`** 文件，则创建空文件（Alexander Kukushkin）
- 在 **`pg_hba.conf`** 中对所有数据库开放访问，而不仅仅是 postgres（Franco Bellagamba）

--------

## Version 1.3.2

发布于 2017-07-31

**错误修复**

- patronictl edit-config 无法与 ZooKeeper 配合工作（Alexander Kukushkin）

--------

## Version 1.3.1

发布于 2017-07-28

**错误修复**

- 由于 **`_MemberStatus`** 的更改，通过 API 进行的故障转移被破坏（Alexander Kukushkin）

--------
## Version 1.3

发布于 2017-07-27

Version 1.3增加了自定义引导功能，显著改进了对 pg_rewind 的支持，增强了同步模式支持，为 patronictl 添加了配置编辑功能，并在 Linux 上实现了 watchdog 支持。此外，这是第一个能正确支持 PostgreSQL 10的版本。

**升级须知**

目前没有已知的新版本兼容性问题。Version 1.2的配置应无需任何更改即可使用。升级方式为安装新软件包后重启 Patroni（会导致 PostgreSQL 重启），或者先将 Patroni 置于 [**暂停模式**](/docs/patroni/pause#pause)，然后在集群所有节点上重启 Patroni（暂停模式下的 Patroni 不会尝试停止/启动 PostgreSQL），最后退出暂停模式。

**自定义引导**

- 使集群引导过程可配置（Alexander Kukushkin）

  允许在初始化集群的第一个节点时使用自定义引导脚本代替 `initdb`。引导命令接收集群名称和数据目录路径。生成的集群可配置为执行恢复，从而可以从备份引导并进行时间点恢复。更多详细说明请参阅 [**文档页面**](/docs/patroni/replica_bootstrap#custom_bootstrap)。

**`更智能的pg_rewind支持`**

- 通过查看与当前主节点的时间线差异来决定是否运行 pg_rewind（Alexander Kukushkin）

  此前，Patroni 有一组固定条件来触发 pg_rewind，即在启动前主节点时、在对集群中每个其他节点进行切换到指定节点的操作时，或当存在带有 nofailover 标签的副本时。所有这些情况的共同点是某些副本可能领先于新主节点。在某些情况下 pg_rewind 没有执行任何操作，在另一些情况下它在需要时却未运行。Patroni 不再依赖这个有限的规则列表，而是比较主节点和副本的 WAL 位置（使用流复制协议），以可靠地决定副本是否需要 rewind。

**同步复制严格模式**

- 通过添加严格模式增强同步复制支持（James Sewell，Alexander Kukushkin）

  通常，当启用 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 且没有副本连接到主节点时，Patroni 会禁用同步复制以保持主节点可写。`synchronous_mode_strict` 选项改变了这一行为，设置后 Patroni 在缺少副本时不会禁用同步复制，实际上会阻止所有客户端向主节点写入数据。除了同步模式保证自动故障转移不丢失任何数据外，严格模式还确保每次写入要么持久存储在两个节点上，要么在集群只有一个节点时完全不发生。

**使用 patronictl 编辑配置**

- 为 patronictl 添加配置编辑功能（Ants Aasma，Alexander Kukushkin）

  为 patronictl 添加编辑存储在 DCS 中的动态集群配置的能力。支持从命令行指定参数/值、调用$EDITOR，或从 yaml 文件应用配置。

**Linux watchdog 支持**

- 为 Linux 实现 watchdog 支持（Ants Aasma）

  支持 Linux 软件 watchdog，以在 Patroni 未运行或无响应时（例如由于高负载）重启节点。Linux 软件 watchdog 会重启无响应的节点。可以从 Patroni 配置的 watchdog 部分配置要使用的 watchdog 设备（默认为 `/dev/watchdog`）和模式（on、automatic、off）。更多信息请参阅 [**watchdog文档**](/docs/patroni/watchdog#watchdog)。

**`添加PostgreSQL 10支持`**

- Patroni 兼容迄今为止发布的所有 PostgreSQL 10 beta 版本，我们预期在 PostgreSQL 10正式发布时也将兼容。

**`PostgreSQL相关的小改进`**

- 通过 Patroni 配置文件或 DCS 中的动态配置定义 pg_hba.conf（Alexander Kukushkin）

  允许在配置的 `postgresql` 部分的 `pg_hba` 子部分中定义 `pg_hba.conf` 的内容。这简化了在多个节点上管理 `pg_hba.conf` 的工作，因为只需在 DCS 中定义一次，而无需登录每个节点手动更改并重载配置。

  定义后，此部分的内容将完全替换当前的 `pg_hba.conf`。如果设置了 `hba_file` PostgreSQL 参数，Patroni 将忽略此配置。

- 支持通过 UNIX 套接字连接到本地 PostgreSQL 集群（Alexander Kukushkin）

  在 Patroni 配置的 `postgresql` 部分添加 `use_unix_socket` 选项。设置为 true 且 PostgreSQL 的 `unix_socket_directories` 选项不为空时，Patroni 将使用其第一个值连接到本地 PostgreSQL 集群。如果未定义 `unix_socket_directories`，Patroni 将假定其默认值，并在 PostgreSQL 连接字符串中完全省略 `host` 参数。

- 支持在重载时更改超级用户和复制凭据（Alexander Kukushkin）

- 支持将配置文件存储在 PostgreSQL 数据目录之外（@jouir）

  添加新的 `postgresql` 配置指令 `config_dir`。默认为数据目录，必须可被 Patroni 写入。

**错误修复和稳定性改进**

- 处理 EtcdEventIndexCleared 和 EtcdWatcherCleared 异常（Alexander Kukushkin）

  通过避免无用的重试，在 watch 操作被 Etcd 终止时更快恢复。

- 消除 Etcd 故障时的错误自旋并减少日志垃圾（Ants Aasma）

  避免在第二次及后续 Etcd 连接失败时立即重试和在日志中输出堆栈跟踪。

- 在 fork PostgreSQL 进程时导出 locale 变量（Oleksii Kliukin）

  避免在使用 NLS 构建的 PostgreSQL 的非英语 locale 下出现 `postmaster became multithreaded during startup` 致命错误。

- 删除复制槽时的额外检查（Alexander Kukushkin）

  在某些情况下，WAL 发送者会阻止 Patroni 删除复制槽。

- 将复制槽名称截断为63（NAMEDATALEN - 1）个字符以符合 PostgreSQL 命名规则（Nick Scott）

- 修复导致 Patroni 向 PostgreSQL 集群打开额外连接的竞态条件（Alexander Kukushkin）

- 当节点以空数据目录重启时释放领导者键（Alex Kerney）

- 在没有领导者的情况下运行引导时将异步执行器设置为忙碌状态（Alexander Kukushkin）

  未能执行此操作可能导致错误，声明节点属于不同的集群，因为 Patroni 在通过不需要集群中存在领导者的引导方法引导时继续执行正常业务。

- 改进 WAL-E 副本创建方法（Joar Wandborg，Alexander Kukushkin）

  - 在解析 WAL-E 基础备份时使用 csv.DictReader，接受以空格分隔日期和时间的 ISO 日期格式。
  - 支持从副本获取当前 WAL 位置以估算需要恢复的 WAL 量。此前，代码使用的系统信息函数仅在主节点上可用。

--------

## Version 1.2

发布于 2016-12-13

此版本在同步复制处理方面引入了重大改进，使启动过程和故障转移更加可靠，添加了 PostgreSQL 9.6支持并修复了大量错误。此外，包括这些发布说明在内的文档已迁移至 </docs/patroni>。

**同步复制**

- 添加同步复制支持（Ants Aasma）

  添加了新的配置变量 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode)。启用后，Patroni 将在有健康的备用节点可用时管理 `synchronous_standby_names` 以启用同步复制。当启用同步模式时，Patroni 仅会自动故障转移到在主节点故障时正在进行同步复制的备用节点。这实际上意味着在这种情况下不会丢失任何用户可见的事务。详细说明和实现细节请参阅 [**功能文档**](/docs/patroni/replication_modes#synchronous_mode)。

**可靠性改进**

- 当 PostgreSQL 不是100%健康时，不尝试更新存储在 `leader optime` 键中的领导者位置。当领导者键更新失败时立即降级。（Alexander Kukushkin）

- 将不健康的节点从克隆新副本的目标列表中排除。（Alexander Kukushkin）

- 为 Consul 实现类似于 Etcd 的重试和超时策略。（Alexander Kukushkin）

- 使 `--dcs` 和 `--config-file` 适用于 [patronictl](/docs/patroni/patronictl#patronictl) 中的所有选项。（Alexander Kukushkin）

- 将所有 postgres 参数写入 postgresql.conf。（Alexander Kukushkin）

  这允许仅使用 `pg_ctl` 启动由 Patroni 配置的 PostgreSQL。

- 避免在配置中没有用户时出现异常。（Kirill Pushkin）

- 允许暂停不健康的集群。在此修复之前，如果尝试执行暂停操作的节点不健康，[patronictl](/docs/patroni/patronictl#patronictl) 会中止操作。（Alexander Kukushkin）

- 改进领导者监视功能。（Alexander Kukushkin）

  此前，副本始终监视领导者键（休眠直到超时或领导者键变更）。此更改后，它们仅在副本的 PostgreSQL 处于 `running` 状态时监视，而不在 PostgreSQL 停止/启动或重启时监视。

- 避免在作为 PID 1处理 SIGCHILD 时遇到竞态条件。（Alexander Kukushkin）

  此前，在 Docker 容器内运行时可能出现竞态条件，因为 Patroni 内部的同一进程既生成新进程又处理来自它们的 SIGCHILD 信号。此更改对 Patroni 使用 fork/exec，将原始 PID 1进程保留为处理子进程信号的专用进程。

- 修复 WAL-E 恢复。（Oleksii Kliukin）

  此前，WAL-E 恢复使用 `no_master` 标志来完全避免与主节点协商，使 Patroni 总是选择从 WAL 恢复而非 `pg_basebackup`。此更改将其恢复为 `no_master` 的原始含义，即当主节点未运行时可以选择 Patroni WAL-E 恢复作为复制方法。后者通过检查传递给方法的连接字符串来判断。此外，使重试机制更加健壮并处理了其他细节问题。

- 实现异步 DNS 解析器缓存。（Alexander Kukushkin）

  避免在 DNS 暂时不可用时（例如，由于节点接收的流量过大）出现故障。

- 实现启动状态和主节点启动超时。（Ants Aasma，Alexander Kukushkin）

  此前，`pg_ctl` 等待超时后便认为 PostgreSQL 正在运行。这导致 PostgreSQL 在列表中显示为运行状态但实际并非如此，并引发竞态条件，结果要么是故障转移，要么是崩溃恢复，要么是被故障转移中断的崩溃恢复和错过的 rewind。此更改添加了 `master_start_timeout` 参数，并为主 HA 循环引入了新状态：`starting`。当 `master_start_timeout` 为0时，只要有故障转移候选者，主节点崩溃后将立即进行故障转移。否则，Patroni 将在尝试在主节点上启动 PostgreSQL 后等待超时时长；超时后如果可能则进行故障转移。即使在超时到期之前，主节点崩溃期间也会响应手动故障转移请求。

  为 `restart` API 端点和 [patronictl](/docs/patroni/patronictl#patronictl) 引入 `timeout` 参数。设置后，如果重启时间超过超时值，PostgreSQL 将被视为不健康，其他节点将有资格获取领导者锁。

- 修复暂停模式下的 `pg_rewind` 行为。（Ants Aasma）

  避免在暂停模式下 Patroni 认为需要 rewind 但无法执行 rewind 时（即 `pg_rewind` 不存在）进行不必要的重启。如果 `pg_rewind` 相关的 Patroni 配置部分中缺少 `superuser` 认证信息，则回退到 `libpq` 的默认 `superuser`（默认操作系统用户）值。

- 序列化回调执行。当新的同类型回调即将运行时，终止之前的回调。修复运行回调时产生僵尸进程的问题。（Alexander Kukushkin）

- 当领导者键已在 DCS 中设置但更新此领导者键失败时，避免提升前主节点。（Alexander Kukushkin）

  这避免了当前主节点与 Etcd 中少数节点一起被分区时继续保持其角色的问题，以及允许"不一致读取"的其他 DCS 中的类似问题。

**杂项**

- 在引导时添加 `post_init` 配置选项。（Alejandro Martínez）

  Patroni 将在对新集群运行 `initdb` 并启动 PostgreSQL 后，立即调用此选项的脚本参数。该脚本接收包含 `superuser` 的连接 URL，并将 `PGPASSFILE` 设置为指向包含密码的 `.pgpass` 文件。如果脚本失败，Patroni 初始化也将失败。这对于在新集群中添加新用户或创建扩展非常有用。

- 实现 PostgreSQL 9.6支持。（Alexander Kukushkin）

  使用 `wal_level = replica` 作为 `hot_standby` 的同义词，避免在两者之间切换时出现 pending_restart 标志。（Alexander Kukushkin）

**文档改进**

- 添加 Patroni 主 [循环工作流程图](https://raw.githubusercontent.com/patroni/patroni/master/docs/ha_loop_diagram.png)。（Alejandro Martínez，Alexander Kukushkin）

- 改进 README，添加 Helm chart 和发布说明链接。（Lauri Apple）

- 将 Patroni 文档迁移至 **`Read the Docs`**。最新文档可在 </docs/patroni> 查阅。（Oleksii Kliukin）

  使文档可在不同设备（包括智能手机）上轻松查看和搜索。

- 将软件包迁移至语义版本控制。（Oleksii Kliukin）

  Patroni 将遵循 major.minor.patch 版本方案，以避免对小但关键的错误修复发布新的 minor 版本。我们将仅发布 minor 版本的发布说明，其中包含所有补丁。

--------

## Version 1.1

发布于 2016-09-07

此版本通过引入暂停模式改进了 Patroni 集群的管理，通过计划性和条件性重启改善了维护体验，使 Patroni 与 Etcd 或 Zookeeper 的交互更加健壮，并大幅增强了 patronictl。

**升级须知**

从1.0以下版本升级时，请阅读1.0发布说明中关于凭据和配置格式变更的内容。

**暂停模式**

- 引入暂停模式，暂时使 Patroni 脱离对 PostgreSQL 实例的管理（Murat Kabilov，Alexander Kukushkin，Oleksii Kliukin）。

  此前，必须向 Patroni 发送 SIGKILL 信号才能在不终止 PostgreSQL 的情况下停止它。新的暂停模式在集群范围内使 Patroni 脱离 PostgreSQL 管理，而不终止 Patroni。这类似于 Pacemaker 中的维护模式。Patroni 仍负责更新 DCS 中的成员和领导者键，但在此过程中不会启动、停止或重启 PostgreSQL 服务器。有一些例外情况，例如手动故障转移、重新初始化和重启仍然允许。详细说明请参阅 [**此功能的详细描述**](/docs/patroni/pause#pause)。

此外，patronictl 支持新的 [**pause**](/docs/patroni/pause#pause) 和 `resume` 命令来切换暂停模式。

**计划性和条件性重启**

- 为 restart API 命令添加条件（Oleksii Kliukin）

  此更改通过添加一些可验证的条件来增强 Patroni 重启功能。这些条件包括当 PostgreSQL 角色为主节点或副本时重启、检查 PostgreSQL 版本号，或仅在需要重启以应用配置更改时才重启。

- 添加计划性重启（Oleksii Kliukin）

  现在可以安排在未来执行重启。每个节点仅支持一个计划性重启。如果不再需要，可以取消计划性重启。支持计划性和条件性重启的组合，例如可以安排在夜间进行 PostgreSQL 小版本升级，仅重启运行过时小版本的实例，而无需在管理脚本中添加 PostgreSQL 特定的逻辑。

- 为 patronictl 添加条件性和计划性重启支持（Murat Kabilov）。

  patronictl restart 支持多个新选项。还有 patronictl flush 命令用于清理计划的操作。

**健壮的 DCS 交互**

- 根据 loop_wait 设置 Kazoo 超时（Alexander Kukushkin）

  最初，ping_timeout 和 connect_timeout 值是从协商的会话超时计算得出的。未考虑 Patroni 的 loop_wait。因此，单次重试可能花费超过会话超时的时间，迫使 Patroni 释放锁并降级。

  此更改将 ping 和 connect 超时设置为 loop_wait 值的一半，加快连接问题的检测速度，并留出足够时间在丢失锁之前重试连接。

- 仅在原始请求成功后更新 Etcd 拓扑（Alexander Kukushkin）

  将更新客户端已知的 Etcd 拓扑推迟到原始请求完成之后。在检索集群拓扑时，根据 Etcd 集群中已知的节点数量实现重试超时。这使我们的客户端优先获取请求结果，而非拥有最新的节点列表。

  这两项更改使 Patroni 在面对网络问题时与 DCS 的连接更加健壮。

**`patronictl、监控和配置`**

- 通过 API 返回流复制副本的信息（Feike Steenbergen）

此前，没有可靠的方法查询 Patroni 关于无法流式传输变更的 PostgreSQL 实例（例如由于连接问题）。此更改通过/patroni 端点公开 pg_stat_replication 的内容。

- 添加 patronictl scaffold 命令（Oleksii Kliukin）

  添加在 Etcd 中创建集群结构的命令。使用用户指定的 sysid 和领导者创建集群，领导者键和成员键都设置为持久化。此命令对于创建所谓的无主配置非常有用，其中仅由副本组成的 Patroni 集群从不感知 Patroni 的外部主节点进行复制。随后，可以删除领导者键，提升其中一个 Patroni 节点，用基于 Patroni 的 HA 集群替换原始主节点。

- 添加配置选项 `bin_dir` 以定位 PostgreSQL 二进制文件（Ants Aasma）

  当 Linux 发行版支持同时安装多个 PostgreSQL 版本时，能够显式指定 PostgreSQL 二进制文件的位置非常有用。

- 允许使用 `custom_conf` 覆盖配置文件路径（Alejandro Martínez）

  允许自定义配置文件路径，该路径不受 Patroni 管理， [**详情**](/docs/patroni/config/yaml#postgresql_settings)。

**错误修复和代码改进**

- 使 Patroni 兼容 PostgreSQL 10及更高版本中的新版本号格式（Feike Steenbergen）

  确保 Patroni 在基于 PostgreSQL 版本执行条件性重启时能理解两位数版本号。

- 使用 pkgutil 查找 DCS 模块（Alexander Kukushkin）

  使用专用的 Python 模块而非手动遍历目录来查找 DCS 模块。

- 启动 Patroni 时始终调用 on_start 回调（Alexander Kukushkin）

  此前，当连接到已经以正确角色运行的节点时，Patroni 不会调用任何回调。由于回调通常用于路由客户端连接，这可能导致无法在连接路由方案中注册正在运行的节点。此修复使 Patroni 即使在连接到已运行的节点时也会调用 on_start 回调。

- 不删除活跃的复制槽（Murat Kabilov，Oleksii Kliukin）

  避免在主节点上删除活跃的物理复制槽。PostgreSQL 本身也无法删除此类槽。此更改使得可以在主节点上运行非 Patroni 管理的副本/消费者。

- 在 PostgreSQL 实例启动期间关闭 Patroni 连接（Alexander Kukushkin）

  强制 Patroni 在 PostgreSQL 节点启动时关闭所有先前的连接。避免在 postmaster 被 SIGKILL 终止后复用先前连接的陷阱。

- 从成员名称构造槽名称时替换无效字符（Ants Aasma）

  确保不符合槽命名规则的备用名称不会导致槽创建和备用启动失败。将槽名称中的短横线替换为下划线，将槽名称中不允许的所有其他字符替换为其 unicode 码点。

--------
## Version 1.0

发布于 2016-07-05

此版本引入了全局动态配置，允许对整个 HA 集群的 PostgreSQL 和 Patroni 配置参数进行动态更改。同时还修复了大量错误。

**升级须知**

从 v0.90 或更低版本升级时，请始终先升级所有副本，再升级主节点。由于我们不再在 DCS 中存储复制凭据，旧版本的副本将无法连接到新版本的主节点。

**动态配置**

- 实现全局动态配置（Alexander Kukushkin）

  引入新的 REST API 端点/config，用于提供应在整个 HA 集群（主节点和所有副本）中全局设置的 PostgreSQL 和 Patroni 配置参数。这些参数设置在 DCS 中，在很多情况下可以在不中断 PostgreSQL 或 Patroni 的情况下应用。当某些值需要重启 PostgreSQL 时，Patroni 会设置一个通过 API 可见的特殊标志"pending restart"。在这种情况下，需要通过 API 手动发起重启。

  向 Patroni 发送 SIGHUP 或 POST 到/reload 将使其重新读取配置文件。

  关于哪些参数可以更改以及不同配置源的处理顺序，请参阅 [**Patroni配置**](/docs/patroni/config#config)。

  自 v0.90 以来配置文件格式*已更改*。Patroni 仍兼容旧的配置文件，但要利用引导参数需要进行更改。建议用户参考 [**动态配置文档页面**](/docs/patroni/config/dynamic#dynamic) 进行更新。

**更灵活的配置**\*

- 使 PostgreSQL 配置和 Patroni 连接的数据库名可配置（Misja Hoebe）

  引入 `database` 和 `config_base_name` 配置参数。除其他功能外，它使得可以在 PipelineDB 和其他 PostgreSQL 分支上运行 Patroni。

- 实现通过环境变量配置部分 Patroni 配置参数的功能（Alexander Kukushkin）

  这些参数包括 scope、节点名称和 namespace，以及密钥信息，使得在动态环境（即 Kubernetes）中运行 Patroni 更加容易。更多详情请参阅 [**支持的环境变量**](/docs/patroni/config/env#env)。

- 更新内置的 Patroni Docker 容器以利用基于环境变量的配置（Feike Steenbergen）。

- 为 Patroni Docker 镜像添加 Zookeeper 支持（Alexander Kukushkin）

- 拆分 Zookeeper 和 Exhibitor 配置选项（Alexander Kukushkin）

- 使 patronictl 复用 Patroni 的代码来读取配置（Alexander Kukushkin）

  这使 patronictl 能够利用基于环境变量的配置。

- 在 primary_conninfo 中将应用名称设置为节点名称（Alexander Kukushkin）

  这简化了给定节点同步复制的识别和配置。

**稳定性、安全性和可用性改进**

- 在备份恢复进行中时重置 sysid 并且不调用 pg_controldata（Alexander Kukushkin）

  此更改减少了在从备份进行漫长初始化期间 Patroni API 健康检查产生的噪音。

- 修复一系列 pg_rewind 边界情况（Alexander Kukushkin）

  避免在源集群不是主节点时运行 pg_rewind。

  此外，避免在 rewind 不成功时删除数据目录，除非新参数 *remove_data_directory_on_rewind_failure* 设置为 true。默认为 false。

- 从 DCS 中的复制连接字符串中移除密码（Alexander Kukushkin）

  此前，Patroni 始终使用 DCS 中 PostgreSQL URL 的复制凭据。现已更改为从 Patroni 配置中获取凭据。密钥信息（复制用户名和密码）不再在 DCS 中暴露。

- 修复降级调用相关的异步机制（Alexander Kukushkin）

  降级现在完全异步运行，不会阻塞 DCS 交互。

- 在配置了授权的情况下，使 patronictl 始终发送授权头（Alexander Kukushkin）

  这允许 patronictl 在 Patroni 配置为需要授权时发出"受保护的"请求，如重启或重新初始化。

- 正确处理 SystemExit 异常（Alexander Kukushkin）

  避免 Patroni 在收到 SIGTERM 时无法正确停止的问题。

- 用于 confd 的 haproxy 模板示例（Alexander Kukushkin）

  使用 confd 从 DCS 中的 Patroni 状态生成并动态更改 haproxy 配置。

- 改进和重组文档使其对新用户更友好（Lauri Apple）

- API 必须在 pg_ctl stop 期间报告 role=master（Alexander Kukushkin）

  使回调调用更加可靠，特别是在集群停止的情况下。此外，引入 `pg_ctl_timeout` 选项来设置通过 `pg_ctl` 进行启动、停止和重启调用的超时时间。

- 修复 etcd 中的重试逻辑（Alexander Kukushkin）

  使重试更可预测和健壮。

- 使 Zookeeper 代码对短暂网络故障更具弹性（Alexander Kukushkin）

  减少连接超时以使 Zookeeper 连接尝试更频繁。

--------

## Version 0.90

发布于 2016-04-27

此版本添加了对 Consul 的支持，包含新的 *noloadbalance* 标签，更改了 *clonefrom* 标签的行为，改进了 *pg_rewind* 处理并改进了 *patronictl* 控制程序。

**Consul 支持**

- 实现 Consul 支持（Alexander Kukushkin）

  Patroni 除了支持 Etcd 和 Zookeeper 外，还可以对接 Consul 运行。连接参数可在 YAML 文件中配置。

**新标签和改进的标签**

- 实现 *noloadbalance* 标签（Alexander Kukushkin）

  此标签使 Patroni 始终向负载均衡器返回该副本不可用。

- 更改 *clonefrom* 标签的实现（Alexander Kukushkin）

  此前，必须向 *clonefrom* 提供节点名称，强制带标签的副本从指定节点克隆。新实现将 *clonefrom* 改为布尔标签：如果设置为 true，该副本将成为其他副本从其克隆的候选者。当存在多个候选者时，副本会随机选择一个。

**稳定性和安全性改进**

- 大量可靠性改进（Alexander Kukushkin）

  移除一些虚假的错误消息，提高故障转移的稳定性，解决从 DCS 读取数据、关闭、降级和前领导者重新连接的一些边界情况。

- 改进系统脚本以避免在停止时终止 Patroni 子进程（Jan Keirse，Alexander Kukushkin）

  此前，在停止 Patroni 时，*systemd* 也会向 PostgreSQL 发送信号。由于 Patroni 本身也尝试停止 PostgreSQL，导致发送两个不同的关闭请求（smart 关闭后跟 fast 关闭）。这导致副本过早断开连接，前主节点在降级后无法重新加入。由 Jan 修复，Alexander 进行了前期研究。

- 消除前主节点在作为副本重新加入前无法调用 pg_rewind 的一些情况（Oleksii Kliukin）

  此前，我们仅在前主节点崩溃时才调用 *pg_rewind*。现更改为只要系统中存在 pg_rewind 就始终对前主节点运行 pg_rewind。这修复了主节点在副本获取最新变更之前被关闭的情况（即在"smart"关闭期间）。

- 对单元测试和验收测试进行大量改进，特别是启用了对 Zookeeper 和 Consul 的支持（Alexander Kukushkin）。

- 加速 Travis CI 并实现对 Zookeeper（Exhibitor）和 Consul 运行测试的支持（Alexander Kukushkin）

  单元测试和验收测试在每次提交或拉取请求时自动对 Etcd、Zookeeper 和 Consul 运行。

- 从 Patroni 调用 PostgreSQL 命令前清除环境变量（Feike Steenbergen）

  这防止了通过连接到 Patroni 管理的 PostgreSQL 集群来读取系统环境变量的可能性。

**配置和控制变更**

- 统一 patronictl 和 Patroni 配置（Feike Steenbergen）

  patronictl 可以使用与 Patroni 本身相同的配置文件。

- 使 Patroni 能够从环境变量读取配置（Oleksii Kliukin）

  这简化了自动生成 Patroni 配置或从不同来源合并单一配置的工作。

- 在 API 返回的信息中包含数据库系统标识符（Feike Steenbergen）

- 为所有可用的 DCS 实现 *delete_cluster*（Alexander Kukushkin）

  在 patronictl 中启用对 Etcd 以外的 DCS 的支持。

--------

## Version 0.80

发布于 2016-03-14

此版本添加了对*级联复制*的支持，并通过提供*计划性故障转移*简化了 Patroni 管理。可以将旧版本的 Patroni（特别是0.78）与此版本组合使用以迁移到新版本。请注意，计划性故障转移和级联复制相关功能仅适用于 Patroni 0.80及以上版本。

**级联复制**

> - 为 Patroni 节点添加 *replicatefrom* 和 *clonefrom* 标签支持（Oleksii Kliukin）。
>
> *replicatefrom* 标签允许副本使用任意节点作为源，不必是主节点。*clonefrom* 对初始备份做同样的事情。它们共同使 Patroni 完全支持级联复制。

- 添加运行复制方法来初始化副本的支持，即使没有运行中的复制连接也可以（Oleksii Kliukin）。

> 这对于从 S3 或 FTP 上存储的快照创建副本非常有用。不需要运行中复制连接的复制方法应在 yaml 配置中提供 *no_master: true*。如果存在复制连接，这些脚本仍会按顺序调用。

**patronictl、API 和 DCS 改进**

- 实现计划性故障转移（Feike Steenbergen）。

  故障转移可以安排在未来的特定时间发生，使用 patronictl 或 API 调用均可。

- 为 patronictl 添加 *dbuser* 和 *password* 参数支持（Feike Steenbergen）。

- 在健康检查输出中添加 PostgreSQL 版本信息（Feike Steenbergen）。

- 改进 patronictl 中的 Zookeeper 支持（Oleksandr Shulgin）

- 迁移到 python-etcd 0.43（Alexander Kukushkin）

**配置**

- 添加 Patroni 的系统配置脚本示例（Jan Keirse）。
- 修复 Patroni 忽略配置文件中指定的超级用户名进行数据库连接的问题（Alexander Kukushkin）。
- 修复 CTRL-C 的处理，为 Patroni 启动的 postmaster 创建单独的会话 ID 和进程组（Alexander Kukushkin）。

**测试**

- 添加使用 *behave* 的验收测试，以检查运行 Patroni 的真实场景（Alexander Kukushkin，Oleksii Kliukin）。

  测试可以使用 *behave* 命令手动启动。它们也会在拉取请求和提交后自动运行。

  一些旧版本的发布说明可以在 [**项目的GitHub页面**](https://github.com/patroni/patroni/releases) 上找到。
