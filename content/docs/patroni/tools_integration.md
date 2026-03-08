---
title: "与其他工具的集成"
linkTitle: "工具集成"
weight: 150
icon: fas fa-puzzle-piece
description: "Patroni 与外部备份及编排工具的集成方法。"
module: [PATRONI]
categories: [概念]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/tools_integration.html

<a id="tools_integration"></a>
Patroni 能够与技术栈中的其他工具集成。本节列举了一些集成示例，并不详尽，但希望能为您提供参考和启发。

--------

## Barman

Patroni 提供了一个名为 **`patroni_barman`** 的应用程序，内含与 **`pg-backup-api`** 通信的逻辑，可用于远程执行 Barman 操作。

该应用程序目前包含两个子命令：**`recover`** 和 **`config-switch`**。

### patroni_barman recover

**`recover`** 子命令可用作自定义引导方法或自定义从库创建方法。详情请参阅 [**replica_imaging_and_bootstrap**](/docs/patroni/replica_bootstrap#replica_imaging_and_bootstrap)。

### patroni_barman config-switch

**`config-switch`** 子命令设计用于作为 Patroni 的 **`on_role_change`** 回调。举例来说，假设您正在将 WAL 从当前主库流式传输到 Barman 主机，当集群发生故障转移时，需要切换为从新主库流式传输 WAL。将 **`patroni_barman config-switch`** 设置为 **`on_role_change`** 回调即可实现这一需求。

> [!NOTE]
> 该子命令依赖于 **`barman config-switch`** 命令，该命令通过在 Barman 服务器配置之上应用预定义模型来覆盖其配置，自 Barman 3.10 起可用。更多详情请参阅 Barman 文档。

以下示例展示了如何配置 Patroni，使其在节点被提升为主库时应用一个配置模型：

```yaml
postgresql:
    callbacks:
        on_role_change: >
            patroni_barman
                --api-url YOUR_API_URL
                config-switch
                --barman-server YOUR_BARMAN_SERVER_NAME
                --barman-model YOUR_BARMAN_MODEL_NAME
                --switch-when promoted
```

> [!NOTE]
> **`patroni_barman config-switch`** 要求在 Barman 主机上同时配置好 Barman 和 **`pg-backup-api`**，以便通过备份 API 远程执行 **`barman config-switch`**，同时还需预先配置好待应用的 Barman 模型。以上示例仅使用了部分可用参数，完整参数说明可运行 **`patroni_barman config-switch --help`** 查看，或参阅 Barman 文档。
