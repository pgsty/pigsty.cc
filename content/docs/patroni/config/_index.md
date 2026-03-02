---
title: "Patroni 配置"
weight: 30
icon: fa-solid fa-code
description: "Patroni 配置模型、优先级规则与验证工具。"
sidebar_expanded: true
module: [PATRONI]
category: [Reference]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/patroni_configuration.html

<a id="config"></a>
Patroni 的配置分为 3 种类型：

- 全局 [**动态配置**](/docs/patroni/config/dynamic#dynamic)。
  这些选项存储在 DCS（分布式配置存储）中，并应用于集群的所有节点。动态配置可以随时通过 [`patronictl edit-config`](/docs/patroni/patronictl#patronictl_edit_config) 工具或 Patroni [**REST API**](/docs/patroni/rest_api#rest_api) 进行设置。如果更改的选项不属于启动配置，它们将异步地（在下一个唤醒周期时）应用到每个节点，随后触发重载。如果节点需要重启才能应用配置（对于上下文为 postmaster 且值已更改的 [PostgreSQL 参数](https://www.postgresql.org/docs/current/view-pg-settings.html)），则会在成员数据 JSON 中设置一个特殊标志 `pending_restart`，同时节点状态也会通过 `"restart_pending": true` 来体现这一情况。

- 本地 [**YAML 配置文件**](/docs/patroni/config/yaml#yaml)（patroni.yml）。
  这些选项定义在配置文件中，优先级高于动态配置。`patroni.yml` 可以在运行时通过向 Patroni 进程发送 SIGHUP 信号、执行 `POST /reload` REST API 请求或运行 [`patronictl reload`](/docs/patroni/patronictl#patronictl_reload) 来更改和重载（无需重启 Patroni）。本地配置可以是单个 YAML 文件，也可以是一个目录。当配置为目录时，该目录下的所有 YAML 文件会按排序顺序逐个加载。如果某个键在多个文件中定义，以最后一个文件中的值为准。

- [**环境变量配置**](/docs/patroni/config/env#env)。
  可以通过环境变量设置/覆盖部分"本地"配置参数。环境配置在动态环境中非常有用——当某些参数事先无法确定时（例如在 `docker` 容器内运行时无法预知外部 IP 地址）。

<a id="important_configuration_rules"></a>

--------

## 重要规则

### 由 Patroni 控制的 PostgreSQL 参数

某些 PostgreSQL 参数**必须在主库和从库上保持相同的值**。对于这些参数，**在本地 Patroni 配置文件或通过环境变量设置的值不会生效**。要修改或设置这些参数的值，必须通过 DCS 修改共享配置。以下是这类参数的列表，包含默认值和最小值：

- **max_connections**：默认值 100，最小值 25
- **max_locks_per_transaction**：默认值 64，最小值 32
- **max_worker_processes**：默认值 8，最小值 2
- **max_prepared_transactions**：默认值 0，最小值 0
- **wal_level**：默认值 hot_standby，可接受值：hot_standby、replica、logical
- **track_commit_timestamp**：默认值 off

对于下列参数，PostgreSQL 不要求主库和所有从库的值相同。但考虑到从库随时可能成为主库，将它们设置为不同值实际上没有意义；因此，**Patroni 限制只能通过** [**动态配置**](/docs/patroni/config/dynamic#dynamic) **来设置这些参数的值**。

- **max_wal_senders**：默认值 10，最小值 3
- **max_replication_slots**：默认值 10，最小值 4
- **wal_keep_segments**：默认值 8，最小值 1
- **wal_keep_size**：默认值 128MB，最小值 16MB
- **wal_log_hints**：on

这些参数会经过校验，以确保其合理性或满足最小值要求。

还有一些其他由 Patroni 控制的 Postgres 参数：

- **listen_addresses** - 从 `postgresql.listen` 或 `PATRONI_POSTGRESQL_LISTEN` 环境变量中设置
- **port** - 从 `postgresql.listen` 或 `PATRONI_POSTGRESQL_LISTEN` 环境变量中设置
- **cluster_name** - 从 `scope` 或 `PATRONI_SCOPE` 环境变量中设置
- **hot_standby: on**

为安全起见，上述列表中的参数会被写入 `postgresql.conf`，并作为参数列表传递给 `postgres`，赋予其最高优先级（`wal_keep_segments` 和 `wal_keep_size` 除外），甚至高于 [ALTER SYSTEM](https://www.postgresql.org/docs/current/static/sql-altersystem.html)。

还有一些参数如 **postgresql.listen**、**postgresql.data_dir**，**只能在本地设置**，即在 Patroni [**YAML 配置文件**](/docs/patroni/config/yaml#yaml) 中或通过 [**环境变量配置**](/docs/patroni/config/env#env) 环境变量设置。在大多数情况下，本地配置会覆盖动态配置。

应用本地或动态配置选项时，会执行以下操作：

- 节点首先检查是否存在 `postgresql.base.conf` 文件，或是否设置了 `custom_conf` 参数。
- 如果设置了 `custom_conf` 参数，则使用其指定的文件作为基础配置，忽略 `postgresql.base.conf` 和 `postgresql.conf`。
- 如果未设置 `custom_conf` 且存在 `postgresql.base.conf`，则它包含重命名后的"原始"配置，并作为基础配置使用。
- 如果既无 `custom_conf` 也无 `postgresql.base.conf`，原始的 `postgresql.conf` 会被重命名为 `postgresql.base.conf` 并作为基础配置使用。
- 动态选项（除上述例外）会被写入 `postgresql.conf`，并在 `postgresql.conf` 中设置 include 指向基础配置（`postgresql.base.conf` 或 `custom_conf` 指定的文件）。这样就能在不重新读取配置文件来检查 include 是否存在的情况下，直接应用新选项。
- 对于 Patroni 管理集群所必需的某些参数，会通过命令行进行覆盖。
- 如果某个需要重启的选项被更改（需查看 `pg_settings` 中的上下文以及这些选项的实际值），则会在该节点上设置 `pending_restart` 标志。该标志在任何重启时都会被清除。

参数按以下顺序应用（运行时参数优先级最高）：

1. 从 `postgresql.base.conf` 文件（或 `custom_conf` 文件，如已设置）中加载参数
2. 从 `postgresql.conf` 文件中加载参数
3. 从 `postgresql.auto.conf` 文件中加载参数
4. 使用 `-o --name=value` 传入运行时参数

这种设计允许为所有节点统一配置（2），通过 `ALTER SYSTEM` 为特定节点配置（3），确保 Patroni 运行所必需的参数得到执行（4），同时为直接管理 `postgresql.conf` 而不涉及 Patroni 的配置工具预留空间（1）。

<a id="shared_memory_gucs"></a>
### 影响共享内存的 PostgreSQL 参数

PostgreSQL 有一些参数决定了其使用的共享内存大小：

- **max_connections**
- **max_prepared_transactions**
- **max_locks_per_transaction**
- **max_wal_senders**
- **max_worker_processes**

更改这些参数需要重启 PostgreSQL 才能生效，且从库上的共享内存结构不能小于主库上的对应结构。

如前所述，Patroni 限制只能通过 [**动态配置**](/docs/patroni/config/dynamic#dynamic) 修改这些参数的值，通常操作流程为：

1. 通过 [`patronictl edit-config`](/docs/patroni/patronictl#patronictl_edit_config)（或通过 REST API 的 `/config` 端点）应用更改
2. 通过 [`patronictl restart`](/docs/patroni/patronictl#patronictl_restart)（或通过 REST API 的 `/restart` 端点）重启节点

**注意：** 请记住，应通过 [`patronictl restart`](/docs/patroni/patronictl#patronictl_restart) 命令或 REST API 的 `/restart` 端点来重启 PostgreSQL 节点。尝试通过重启 Patroni 守护进程来重启 PostgreSQL（例如执行 `systemctl restart patroni`），如果重启的是主库，可能会导致集群发生故障转移。

由于这些设置管理共享内存，重启节点时需要格外注意：

- 若要**增大**上述任一设置的值：

  > 1. 先重启所有从库
  > 2. 之后再重启主库

- 若要**减小**上述任一设置的值：

  > 1. 先重启主库
  > 2. 之后再重启所有从库

**注意：** 如果在**减小**上述任一设置值后尝试一次性重启所有节点，Patroni 将忽略该变更并用原始设置值重启从库，从而需要之后再次重启从库。Patroni 这样处理是为了防止从库进入无限崩溃循环，因为如果尝试将上述任一参数设置为低于从库的 `pg_controldata` 中可见值的值，PostgreSQL 会以 `FATAL` 消息退出。换句话说，只有当从库的 `pg_controldata` 与主库关于这些更改保持一致后，才能在从库上减小该设置。

更多信息请参阅 [PostgreSQL 管理员概述](https://www.postgresql.org/docs/current/hot-standby.html#HOT-STANDBY-ADMIN)。

### Patroni 配置参数

以下 Patroni 配置选项**只能通过动态配置方式修改**：

- **ttl**：30
- **loop_wait**：10
- **retry_timeouts**：10
- **maximum_lag_on_failover**：1048576
- **max_timelines_history**：0
- **check_timeline**：false
- **postgresql.use_slots**：true

修改这些选项后，Patroni 会读取存储在 DCS 中的配置相关部分，并更新其运行时值。

Patroni 节点会在每次配置变更时，将 DCS 选项的状态以文件形式写入 Postgres 数据目录中名为 `patroni.dynamic.json` 的文件。只有主库才被允许在 DCS 中这些选项完全缺失或无效时，从磁盘上的文件恢复这些选项。

<a id="validate_generate_config"></a>

--------

## 配置生成与验证

Patroni 提供了用于生成和验证 Patroni [**本地配置文件**](/docs/patroni/config/yaml#yaml) 的命令行工具。使用 `patroni` 可执行文件，你可以：

- 生成示例本地 Patroni 配置；
- 为本地运行的 PostgreSQL 实例生成 Patroni 配置文件（例如作为 [**Patroni 集成**](/docs/patroni/existing_data#existing_data) 的准备步骤）；
- 验证给定的 Patroni 配置文件。

<a id="generate_sample_config"></a>
### 示例 Patroni 配置

```
patroni --generate-sample-config [configfile]
```

#### 说明

以 `yaml` 格式生成示例 Patroni 配置文件。参数值通过 [**环境变量配置**](/docs/patroni/config/env#env) 定义，如果未设置，则使用 Patroni 的默认值，或对用户需要自行定义的值使用 `#FIXME` 字符串。

部分默认值根据本地环境确定：

> - **postgresql.listen**：当前机器主机名通过 `gethostname` 调用返回的 IP 地址，以及标准的 `5432` 端口。
> - **postgresql.connect_address**：当前机器主机名通过 `gethostname` 调用返回的 IP 地址，以及标准的 `5432` 端口。
> - **postgresql.authentication.rewind**：仅当能够从二进制文件中确定 PostgreSQL 版本且版本为 11 或更高时才定义。
> - **restapi.listen**：当前机器主机名通过 `gethostname` 调用返回的 IP 地址，以及标准的 `8008` 端口。
> - **restapi.connect_address**：当前机器主机名通过 `gethostname` 调用返回的 IP 地址，以及标准的 `8008` 端口。

#### 参数

`configfile` - 用于存储结果的配置文件完整路径。如果不提供，结果将输出到 `stdout`。

<a id="generate_config"></a>
### 为运行中实例生成 Patroni 配置

```
patroni --generate-config [--dsn DSN] [configfile]
```

#### 说明

为本地运行的 PostgreSQL 实例以 `yaml` 格式生成 Patroni 配置。将使用提供的 DSN（优先）或 PostgreSQL [环境变量](https://www.postgresql.org/docs/current/libpq-envars.html) 建立 PostgreSQL 连接。如果未提供密码，则通过提示符输入。

源 Postgres 实例中定义的所有非内部 GUC，无论是通过配置文件、postmaster 命令行还是环境变量设置，都将作为以下 Patroni 配置参数的来源：

> - **scope**：`cluster_name` GUC 的值；
> - **postgresql.listen**：`listen_addresses` 和 `port` GUC 的值；
> - **postgresql.datadir**：`data_directory` GUC 的值；
> - **postgresql.parameters**：`archive_command`、`restore_command`、`archive_cleanup_command`、`recovery_end_command`、`ssl_passphrase_command`、`hba_file`、`ident_file`、`config_file` GUC 的值；
> - **bootstrap.dcs**：所有其他收集到的 PostgreSQL GUC。

如果 `scope`、`postgresql.listen` 或 `postgresql.datadir` 未能从 Postgres GUC 中设置，则使用相应的 [**环境变量配置**](/docs/patroni/config/env#env) 值。

其他值定义规则：

> - **name**：若设置了 `PATRONI_NAME` 环境变量则使用该值，否则使用当前机器的主机名。
> - **postgresql.bin_dir**：从运行中实例收集到的 Postgres 二进制文件路径。
> - **postgresql.connect_address**：当前机器主机名通过 `gethostname` 调用返回的 IP 地址，以及用于实例连接的端口或 `port` GUC 的值。
> - **postgresql.authentication.superuser**：用于实例连接的配置；
> - **postgresql.pg_hba**：从源实例的 `hba_file` 收集的内容。
> - **postgresql.pg_ident**：从源实例的 `ident_file` 收集的内容。
> - **restapi.listen**：当前机器主机名通过 `gethostname` 调用返回的 IP 地址，以及标准的 `8008` 端口。
> - **restapi.connect_address**：当前机器主机名通过 `gethostname` 调用返回的 IP 地址，以及标准的 `8008` 端口。

通过 [**环境变量配置**](/docs/patroni/config/env#env) 定义的其他参数也会包含在配置中。

#### 参数

`configfile`
用于存储结果的配置文件完整路径。如果不提供，结果将输出到 `stdout`。

`dsn`
用于从本地 PostgreSQL 实例获取 GUC 值的可选 DSN 字符串。

### 验证 Patroni 配置

```
patroni --validate-config [configfile] [--ignore-listen-port | -i]
```

#### 说明

验证给定的 Patroni 配置，并打印失败检查项的相关信息。

#### 参数

`configfile`
待检查配置文件的完整路径。如果未提供或文件不存在，将尝试从 `PATRONI_CONFIG_VARIABLE` 环境变量中读取，如果也未设置，则从 [**Patroni 环境变量**](/docs/patroni/config/env#env) 中读取。

`--ignore-listen-port | -i`
可选标志，在验证 `configfile` 时忽略已在使用中的 `listen` 端口的绑定失败。

`--print | -p`
可选标志，在成功验证后打印本地配置（包含环境配置覆盖项）。
