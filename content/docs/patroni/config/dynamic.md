---
title: "动态配置"
linkTitle: "动态配置"
weight: 10
icon: fa-solid fa-gauge-high
description: "存储在 DCS 中并应用于整个集群的动态配置参数。"
module: [PATRONI]
category: [Reference]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/dynamic_configuration.html

<a id="dynamic"></a>
动态配置存储在 DCS（分布式配置存储）中，并应用于集群的所有节点。

如需修改动态配置，可使用 [`patronictl edit-config`](/docs/patroni/patronictl#patronictl_edit_config) 工具或 Patroni [**REST API**](/docs/patroni/rest_api#rest_api)。

- **loop_wait**：主循环每轮的休眠秒数。默认值：10，最小值：1。
- **ttl**：获取领导者锁的 TTL（秒）。可以理解为触发自动故障转移前的等待时长。默认值：30，最小值：20。
- **retry_timeout**：DCS 和 PostgreSQL 操作的重试超时时间（秒）。若 DCS 或网络故障时长短于此值，Patroni 不会对主库执行降级。默认值：10，最小值：3。

> [!WARNING]
> 修改 **loop_wait**、**retry_timeout** 或 **ttl** 时，必须遵守以下约束：
>
> ```python
> loop_wait + 2 * retry_timeout <= ttl
> ```

- **maximum_lag_on_failover**：从库参与主库竞选所允许的最大落后字节数。
- **maximum_lag_on_syncnode**：同步从库在被健康的异步从库替代之前，允许落后的最大字节数。若存在多个从库，Patroni 取所有从库中最大的 LSN 作为参考；若只有一个从库，则使用主库当前的 WAL LSN。默认值为 -1；当该值为 0 或更低时，Patroni 不主动替换不健康的同步从库。请将此值设置得足够高，避免在高事务量期间 Patroni 频繁替换同步从库。
- **max_timelines_history**：DCS 中保留的时间线历史条目最大数量。默认值：0。设置为 0 时，保留完整历史记录。
- **primary_start_timeout**：主库在触发故障转移之前，允许从故障中恢复的时间（秒）。默认值为 300 秒。设置为 0 时，一旦检测到崩溃就立即执行故障转移（如果可能）。使用异步复制时，故障转移可能导致事务丢失。主库故障时的最长故障转移时间为 `loop_wait + primary_start_timeout + loop_wait`；若 `primary_start_timeout` 为零，则仅为 `loop_wait`。请根据持久性与可用性的取舍来设置该值。
- **primary_stop_timeout**：Patroni 停止 PostgreSQL 时允许等待的秒数，仅在启用 `synchronous_mode` 时生效。当该值大于 0 且启用了同步模式时，若停止操作运行时间超过 `primary_stop_timeout` 所设定的值，Patroni 会向 postmaster 发送 SIGKILL 信号。请根据持久性与可用性的取舍来设置该值。若该参数未设置或设置为 <= 0，则不生效。
- **synchronous_mode**：启用同步复制模式。可选值：`off`、`on`、`quorum`。在此模式下，主库负责管理 `synchronous_standby_names`，且只有最后已知的领导者或同步从库之一才被允许参与主库竞选。同步模式确保已成功提交的事务在故障转移时不会丢失，代价是当 Patroni 无法保证事务持久性时，写入操作将不可用。详见 [**复制模式文档**](/docs/patroni/replication_modes#replication_modes)。
- **synchronous_mode_strict**：当没有可用的同步从库时，禁止关闭同步复制，阻塞所有客户端对主库的写入。详见 [**复制模式文档**](/docs/patroni/replication_modes#replication_modes)。
- **synchronous_node_count**：启用 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 时，Patroni 使用此参数精确控制同步备库实例的数量，并随成员的加入和离开动态调整 DCS 中的状态及 PostgreSQL 的 `synchronous_standby_names` 参数。若设置值高于符合条件的节点数，将被自动调低。默认值为 `1`。
- **failsafe_mode**：启用 [**DCS 故障安全模式**](/docs/patroni/dcs_failsafe_mode#dcs_failsafe_mode)。默认值为 `false`。
- **postgresql**：
  - **use_pg_rewind**：是否使用 pg_rewind。默认值为 `false`。注意：集群必须以数据页校验和（`initdb` 的 `--data-checksums` 选项）初始化，且/或将 `wal_log_hints` 设置为 `on`，否则 `pg_rewind` 将无法工作。
  - **use_slots**：是否使用复制槽。在 PostgreSQL 9.4+ 上默认值为 `true`。
  - **recovery_conf**：配置从库时写入 `recovery.conf` 的附加配置项。PostgreSQL 12 已不再使用 `recovery.conf`，但仍可继续使用此节，Patroni 会透明地处理。
  - **parameters**：PostgreSQL 配置参数（GUC），格式为 `{max_connections: 100, wal_level: "replica", max_wal_senders: 10, wal_log_hints: "on"}`。其中许多参数是复制正常工作的必要条件。
  - **pg_hba**：Patroni 用于生成 `pg_hba.conf` 的规则列表。若 PostgreSQL 参数 `hba_file` 被设置为非默认值，Patroni 将忽略此参数。
    - **- host all all 0.0.0.0/0 md5**
    - **- host replication replicator 127.0.0.1/32 md5**：复制所必需的一行配置。
  - **pg_ident**：Patroni 用于生成 `pg_ident.conf` 的规则列表。若 PostgreSQL 参数 `ident_file` 被设置为非默认值，Patroni 将忽略此参数。
    - **- mapname1 systemname1 pguser1**
    - **- mapname1 systemname2 pguser2**
- **standby_cluster**：若定义了此节，表示要引导一个备用集群。
  - **host**：远端节点的地址。
  - **port**：远端节点的端口。
  - **primary_slot_name**：用于复制的远端节点槽名。此参数可选，默认值由实例名称派生（参见函数 `slot_name_from_member_name`）。
  - **create_replica_methods**：从远端主库引导备用领导者所用方法的有序列表，可与 [`postgresql_settings`](/docs/patroni/config/yaml#postgresql_settings) 中定义的列表不同。
  - **restore_command**：将 WAL 记录从远端主库恢复到备用集群节点的命令，可与 [`postgresql_settings`](/docs/patroni/config/yaml#postgresql_settings) 中定义的不同。
  - **archive_cleanup_command**：备用领导者的归档清理命令。
  - **recovery_min_apply_delay**：备用领导者实际应用 WAL 记录前的等待时长。
- **member_slots_ttl**：从库关闭后，其物理复制槽的保留时间。默认值：`30min`。若希望保留旧行为（成员键从 DCS 过期后立即删除槽），可将其设置为 `0`。此功能仅在 PostgreSQL 11 及以上版本中有效。
- **slots**：定义永久复制槽。这些复制槽在主从切换/故障转移期间会被保留，不存在的永久槽由 Patroni 负责创建。从 PostgreSQL 11 起，永久物理槽在所有节点上创建，其位置每 **loop_wait** 秒推进一次。对于 PostgreSQL 11 以下版本，永久物理复制槽仅在当前主库上维护。逻辑槽通过重启从主库复制到从库，此后其位置每 **loop_wait** 秒推进一次（如有必要）。逻辑槽文件的复制通过 `libpq` 连接完成，使用 rewind 或超级用户凭据（参见 **postgresql.authentication** 节）。从库上的逻辑槽位置可能略落后于原主库，因此应用程序应做好在故障转移后接收到重复消息的准备，最简便的处理方式是追踪 `confirmed_flush_lsn`。启用永久复制槽需要将 **postgresql.use_slots** 设置为 `true`。若定义了永久逻辑复制槽，Patroni 将自动启用 `hot_standby_feedback`。由于逻辑复制槽的故障转移在 PostgreSQL 9.6 及更低版本上不安全，且 PostgreSQL 10 缺少一些重要函数，该功能仅支持 PostgreSQL 11+。
  - **my_slot_name**：永久复制槽的名称。若槽名称与当前节点名称相同，该槽不会在此节点上创建。若添加的永久物理复制槽名称与某个 Patroni 成员名称相同，Patroni 将确保该槽不被删除，即使对应成员变得无响应（正常情况下这会导致 Patroni 删除该槽）。这在某些场景下很有用，例如希望成员所用的复制槽在临时故障期间持续存在，或将现有成员导入新的 Patroni 集群（详见 [**将独立实例转换为 Patroni 集群**](/docs/patroni/existing_data#existing_data)）。但运维人员应注意，当该槽不再需要时，须及时清除 DCS 中的名称冲突配置，否则会影响 Patroni 的正常运行。
    - **type**：槽类型，可为 `physical` 或 `logical`。逻辑槽需额外定义 `database` 和 `plugin`；物理槽可选择定义 `cluster_type`。
    - **database**：逻辑槽应创建所在的数据库名称。
    - **plugin**：逻辑槽使用的插件名称。
    - **cluster_type**：槽仅应创建于其上的集群类型（`primary` 或 `standby`），否则该槽不会被创建，或已存在的槽将被删除。
- **ignore_slots**：需要 Patroni 忽略的复制槽属性集合列表。当某些复制槽由 Patroni 以外的工具管理时，此配置非常有用。任何属性子集匹配都会导致该槽被忽略。
  - **name**：复制槽的名称。
  - **type**：槽类型，可为 `physical` 或 `logical`。逻辑槽可额外定义 `database` 和/或 `plugin`。
  - **database**：数据库名称（匹配 `logical` 槽时使用）。
  - **plugin**：逻辑解码插件（匹配 `logical` 槽时使用）。

注意：**slots** 是哈希映射，而 **ignore_slots** 是数组。示例如下：

```yaml
slots:
  permanent_logical_slot_name:
    type: logical
    database: my_db
    plugin: test_decoding
  permanent_physical_slot_name:
    type: physical
  ...
ignore_slots:
  - name: ignored_logical_slot_name
    type: logical
    database: my_db
    plugin: test_decoding
  - name: ignored_physical_slot_name
    type: physical
  ...
```

注意：当运行 PostgreSQL v11 或更新版本时，Patroni 在所有可能成为领导者的节点上维护物理复制槽，以便从库在其他节点可能需要时保留 WAL 段。若节点缺席且其在 DCS 中的成员键过期，对应的复制槽将在 `member_slots_ttl`（默认值为 `30min`）后被删除。可按需调整保留时间。另外，若集群拓扑固定（节点数量和名称不变），可为每个节点配置与节点名对应的永久物理复制槽，避免从库临时下线时槽被删除、WAL 文件被回收：

```yaml
slots:
  node_name1:
    type: physical
  node_name2:
    type: physical
  node_name3:
    type: physical
  ...
```

> [!WARNING]
> 永久复制槽仅从 `primary`/`standby_leader` 同步到从库，因此应用程序应仅在领导者节点上使用它们。在从库上使用永久复制槽会导致集群中所有其他节点的 `pg_wal` 无限增长。例外情况是与 Patroni 成员名称匹配的物理槽（由 Patroni 创建和维护），这些槽会在所有节点间同步，因为它们用于节点间的复制。

> [!WARNING]
> 在备库上设置 `nostream` 标签会禁用该节点自身及其所有级联从库上永久逻辑复制槽的复制和同步。
