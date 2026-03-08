---
title: "备用集群"
weight: 80
icon: fa-solid fa-clone
description: "备用集群的搭建、行为及从远程主库复制的说明。"
module: [PATRONI]
categories: [任务]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/standby_cluster.html

<a id="standby_cluster"></a>
Patroni 还支持通过"备用集群"功能向远程数据中心（Region）运行级联复制。这类集群具有以下特点：

- **备用领导者**（standby leader）：行为与普通集群领导者基本相同，区别在于它从远程节点进行复制。
- **级联从库**：从备用领导者进行复制。

备用领导者在 DCS 中持有并更新领导者锁。若领导者锁过期，级联从库将通过选举从备用节点中选出新的领导者。

备用集群与其所复制的主集群之间没有其他关联。特别是，若双方使用同一个 DCS，则不能共享相同的 DCS 作用域（scope）。双方除复制信息外互不了解。此外，备用集群不会出现在主集群的 [`patronictl list`](/docs/patroni/patronictl#patronictl_list) 或 [`patronictl topology`](/docs/patroni/patronictl#patronictl_topology) 输出中。

为了提高灵活性，可以在 [`standby_cluster`](/docs/patroni/standby_cluster#standby_cluster) 配置节中提供 [`create_replica_methods`](/docs/patroni/replica_bootstrap#custom_replica_creation) 键，来指定集群处于"备用模式"时创建从库和恢复 WAL 记录的方法。这与集群脱离备用模式、作为普通集群运行时创建从库的方式不同，后者由 **`postgresql`** 配置节中的 **`create_replica_methods`** 控制。"备用模式"和"普通模式"的 **`create_replica_methods`** 均引用 **`postgresql`** 配置节中的键。

要配置备用集群，需要在 Patroni 配置中指定 [`standby_cluster`](/docs/patroni/standby_cluster#standby_cluster) 配置节：

```yaml
bootstrap:
    dcs:
        standby_cluster:
            host: 1.2.3.4
            port: 5432
            primary_slot_name: patroni
            create_replica_methods:
            - basebackup
```

请注意，这些选项仅在集群引导期间生效一次，之后只能通过 DCS 修改。

Patroni 会在远程主库的 PGDATA 目录中查找 **`postgresql.conf`** 或 **`postgresql.conf.backup`**，若在 basebackup 后找不到该文件，Patroni 将无法启动。如果远程主库将 **`postgresql.conf`** 存放在其他位置，需要手动将其复制到 PGDATA 目录。

若在备用集群上使用复制槽，还必须在主集群上手动创建对应的复制槽——备用集群不会自动完成此操作。可以在主集群上使用 Patroni 的永久复制槽功能，维护一个与 **`primary_slot_name`** 同名的复制槽（若未设置 **`primary_slot_name`**，则使用其默认值）。

如果远端站点没有提供连接到主库的单一端点，可以在 **`standby_cluster.host`** 中列出源集群的所有主机地址。当 **`standby_cluster.host`** 包含多个以逗号分隔的主机时，Patroni 将：

- 在备用领导者节点的 **`primary_conninfo`** 中添加 **`target_session_attrs=read-write`**。
- 在判断是否需要执行 **`pg_rewind`** 以及在备用集群所有节点上执行 **`pg_rewind`** 时，使用 **`target_session_attrs=read-write`**。
- 注意：要使 **`pg_rewind`** 正常运行，集群必须在初始化时启用了 **`data page checksums`**（即 **`initdb`** 的 **`--data-checksums`** 选项）和/或将 **`wal_log_hints`** 设置为 **`on`**，否则 **`pg_rewind`** 将无法正常工作。

备用集群也可以配置为从另一个备用集群或主集群的备库成员进行复制：只需在 **`standby_cluster.host`** 中定义单个主机即可。但请注意，这种情况下 **`pg_rewind`** 将无法在备用集群上执行。
