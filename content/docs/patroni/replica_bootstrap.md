---
title: "从库镜像与引导"
linkTitle: "引导从库"
weight: 60
icon: fa-solid fa-boxes-stacked
description: "从库镜像、引导及自定义从库创建工作流。"
module: [PATRONI]
categories: [任务]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/replica_bootstrap.html

<a id="replica_imaging_and_bootstrap"></a>
Patroni 支持自定义新从库的创建方式，也支持定义全新空集群在引导时的行为。两者有明确区别：只有当 DCS 中存在 **`initialize`** 键时，Patroni 才会创建从库。若不存在该键，Patroni 将在第一个抢到初始化锁的节点上独占执行引导流程。

<a id="custom_bootstrap"></a>

--------

## 引导（Bootstrap）

PostgreSQL 提供了 **`initdb`** 命令来初始化新集群，Patroni 默认即调用此命令。在某些场景下——尤其是将现有集群复制一份来创建新集群时——有必要用自定义操作替换内置方式。Patroni 支持执行用户自定义脚本来引导新集群，并向脚本传入若干必需参数，如集群名称和数据目录路径。相关配置位于 Patroni 配置的 **`bootstrap`** 节，示例如下：

```yaml
bootstrap:
    method: <custom_bootstrap_method_name>
    <custom_bootstrap_method_name>:
        command: <path_to_custom_bootstrap_script> [param1 [, ...]]
        keep_existing_recovery_conf: False
        no_params: False
        recovery_conf:
            recovery_target_action: promote
            recovery_target_timeline: latest
            restore_command: <method_specific_restore_command>
```

每种引导方法至少需要定义 **`name`** 和 **`command`**。内置的 **`initdb`** 方法可触发默认行为，此时 **`method`** 参数可以完全省略。**`command`** 可以使用绝对路径，也可以使用相对于 **`patroni`** 命令位置的相对路径。除了配置文件中定义的固定参数外，Patroni 还会额外传入两个集群相关的参数：

**`--scope`**
待引导集群的名称

**`--datadir`**
待引导集群实例的数据目录路径

将 **`no_params`** 设为 **`True`** 可禁止传递这两个附加参数。

如果引导脚本返回 **`0`**，Patroni 会尝试配置并启动由该脚本生成的 PostgreSQL 实例。若中间任何步骤失败，或脚本返回非零值，Patroni 将认为引导失败，执行清理并释放初始化锁，以便其他节点有机会执行引导。

如果在自定义引导方法的同一配置节中定义了 **`recovery_conf`** 块，Patroni 会在启动新引导的实例之前生成 **`recovery.conf`**（PostgreSQL >= 12 则是在 Postgres 配置中设置恢复参数）。通常，这样的恢复配置至少应包含一个 **`recovery_target_*`** 参数，以及设为 **`promote`** 的 **`recovery_target_action`**。

如果 **`keep_existing_recovery_conf`** 被设为 **`True`**，Patroni 将不会删除已存在的 **`recovery.conf`** 文件（PostgreSQL <= 11）。同样，Patroni 也不会删除已存在的 **`recovery.signal`** 或 **`standby.signal`**，也不会覆盖已配置的恢复参数（PostgreSQL >= 12）。在使用 pgBackRest 等备份工具从备份引导时，这非常有用——这类工具会自动生成相应的恢复配置。

此外，自定义引导方法配置中定义的其他任意键值对，都会以 **`--name=value`** 格式作为参数传递给 **`command`**。例如：

```yaml
bootstrap:
    method: <custom_bootstrap_method_name>
    <custom_bootstrap_method_name>:
        command: <path_to_custom_bootstrap_script>
        arg1: value1
        arg2: value2
```

以上配置会让 **`command`** 额外附带 **`--arg1=value1 --arg2=value2`** 命令行参数被调用。

> > [!NOTE]
> > 引导方法之间不会链式调用，主方法失败时也不会回退到默认方法。

举个例子，你可以用如下配置从 Barman 备份引导一个全新的 Patroni 集群：

```yaml
bootstrap:
    method: barman
    barman:
        keep_existing_recovery_conf: true
        command: patroni_barman --api-url https://barman-host:7480 recover
        barman-server: my_server
        ssh-command: ssh postgres@patroni-host
```

> [!NOTE]
> **`patroni_barman recover`** 需要在 Barman 主机上同时配置好 Barman 和 **`pg-backup-api`**，以便通过备份 API 远程执行 **`barman recover`**。上面的示例仅使用了部分可用参数。运行 **`patroni_barman recover --help`** 可获取更多信息。

<a id="custom_replica_creation"></a>

--------

## 构建从库

Patroni 默认使用久经考验的 **`pg_basebackup`** 来创建新从库。其缺点是需要一个运行中的主库，同时也缺乏对备份数据的即时压缩功能，也没有内置的过期文件清理机制。一些用户倾向于使用其他备份方案，如 **`WAL-E`**、**`pgBackRest`**、**`Barman`** 等，或者自己编写脚本。为了适应这些使用场景，Patroni 支持运行自定义脚本来克隆新从库。相关配置位于 **`postgresql`** 配置块中：

```yaml
postgresql:
    create_replica_methods:
        - <method name>
    <method name>:
        command: <command name>
        keep_data: True
        no_params: True
        no_leader: 1
```

示例：wal_e

```yaml
postgresql:
    create_replica_methods:
        - wal_e
        - basebackup
    wal_e:
        command: patroni_wale_restore
        no_leader: 1
        envdir: {{WALE_ENV_DIR}}
        use_iam: 1
    basebackup:
        max-rate: '100M'
```

示例：pgbackrest

```yaml
postgresql:
    create_replica_methods:
        - pgbackrest
        - basebackup
    pgbackrest:
        command: /usr/bin/pgbackrest --stanza=<scope> --delta restore
        keep_data: True
        no_params: True
    basebackup:
        max-rate: '100M'
```

示例：Barman

```yaml
postgresql:
    create_replica_methods:
        - barman
        - basebackup
    barman:
        command: patroni_barman --api-url https://barman-host:7480 recover
        barman-server: my_server
        ssh-command: ssh postgres@patroni-host
    basebackup:
        max-rate: '100M'
```

> [!NOTE]
> **`patroni_barman recover`** 需要在 Barman 主机上同时配置好 Barman 和 **`pg-backup-api`**，以便通过备份 API 远程执行 **`barman recover`**。上面的示例仅使用了部分可用参数。运行 **`patroni_barman recover --help`** 可获取更多信息。

**`create_replica_methods`** 定义了可用的从库创建方法及其执行顺序。Patroni 在第一个返回 **`0`** 的方法处停止。每种方法都应在配置文件中有独立的配置节，列出要执行的命令以及要传递给该命令的自定义参数。所有参数均以 **`--name=value`** 格式传递。除用户自定义参数外，Patroni 还会传入以下几个集群相关的参数：

**`--scope`**
该从库所属的集群名称

**`--datadir`**
从库的数据目录路径

**`--role`**
始终为 **`replica`**

**`--connstring`**
用于连接被克隆集群成员（主库或其他从库）的连接字符串。连接字符串中的用户可以执行 SQL 和复制协议命令。

特殊参数 **`no_leader`** 若已定义，允许 Patroni 即使在没有运行中的主库或从库时也能调用从库创建方法，此时连接字符串将传入空字符串。这对于从二进制备份恢复曾经运行的集群非常有用。

特殊参数 **`keep_data`** 若已定义，会指示 Patroni 在调用恢复之前不清空 PGDATA 目录。

特殊参数 **`no_params`** 若已定义，会限制向自定义命令传递参数。

**`basebackup`** 方法是特殊情况：当 **`create_replica_methods`** 为空时也会使用它，当然也可以在 **`create_replica_methods`** 中显式列出。该方法使用 **`pg_basebackup`** 初始化新从库，基础备份默认从主库获取，除非存在带有 **`clonefrom`** 标签的从库——此时将以其中某个从库作为 **`pg_basebackup`** 的来源。它无需任何配置即可工作，但也可以指定 **`basebackup`** 配置节。与其他方法的配置规则相同，即只应在此处指定长选项（带 **`--`**）。并非所有参数都有意义——如果覆盖了连接字符串，或提供了创建 tar 包或压缩备份的选项，Patroni 将无法基于此创建从库。传递给 **`basebackup`** 配置节的参数名称或值不会进行校验。另请注意，如果 WAL 目录使用了符号链接，需要用户自行指定正确的 **`--waldir`** 路径选项，以确保从库构建或重新初始化后符号链接仍然有效。此选项仅从 v10 起支持。

**`basebackup`** 参数可以指定为映射（键值对）或元素列表，每个元素可以是键值对或单个键（用于不接受任何值的选项，例如 **`--verbose`**）。以下是两种写法：

```yaml
postgresql:
    basebackup:
        max-rate: '100M'
        checkpoint: 'fast'
```

以及

```yaml
postgresql:
    basebackup:
        - verbose
        - max-rate: '100M'
        - waldir: /pg-wal-mount/external-waldir
```

如果所有从库创建方法均失败，Patroni 将在下一个事件循环周期中重新按顺序尝试所有方法。
