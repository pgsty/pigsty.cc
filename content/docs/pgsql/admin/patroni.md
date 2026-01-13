---
title: Patroni 高可用管理
linkTitle: 高可用管理
weight: 15
description: 使用 Patroni 管理 PG 集群高可用，包括，修改参数，查看状态，主从切换，重启，重做从库等操作。
icon: fa-solid fa-infinity
module: [PGSQL]
categories: [任务]
---

## 概览

Pigsty 使用 Patroni 管理 PostgreSQL 集群，它可以用来修改集群配置，查看集群状态，执行主从切换，重启集群，重做从库等操作。

要使用 Patroni 进行管理，您需要有以下两种身份之一：

- 从 [**INFRA 节点**](/docs/concept/node#管理节点) 上使用 [**管理员用户**](/docs/deploy/admin) ，可以管理环境中的所有集群。
- 从 [**PGSQL节点**](/docs/concept/node#pgsql节点) 上使用 [**`pg_dbsu`**](/docs/pgsql/param#pg_dbsu) （默认为 `postgres`），可以管理当前集群。

Patroni 提供了 [**`patronictl`**](https://patroni.readthedocs.io/en/latest/patronictl.html) 命令行工具用于管理，Pigsty 提供了封装的快捷命令 `pg` 来简化其操作。

<details><summary>通过 pg 别名使用 patronictl</summary>

```bash
pg ()
{
    local patroni_conf="/infra/conf/patronictl.yml";
    if [ ! -r ${patroni_conf} ]; then
        patroni_conf="/etc/patroni/patroni.yml";
        if [ ! -r ${patroni_conf} ]; then
            echo "error: patronictl config not found";
            return 1;
        fi;
    fi;
    patronictl -c ${patroni_conf} "$@"
}
```

</details>


----------------

## 可用命令

| 命令                         | 功能     | 说明                             |
|----------------------------|--------|--------------------------------|
| [**`edit-config`**](#修改配置) | 修改配置   | 交互式修改集群的 Patroni/PostgreSQL 配置 |
| [**`list`**](#查看状态)        | 查看状态   | 列出集群成员及其状态                     |
| [**`switchover`**](#主动切换)  | 主动切换   | 将主库角色切换到指定从库（计划内维护）            |
| [**`failover`**](#故障切换)    | 故障切换   | 强制故障转移到指定从库（紧急情况）              |
| [**`restart`**](#重启实例)     | 重启实例   | 重启 PostgreSQL 实例以应用需要重启的参数     |
| [**`reload`**](#重载配置)      | 重载配置   | 重载 Patroni 配置（无需重启）            |
| [**`reinit`**](#重做从库)      | 重做从库   | 重新初始化从库（擦除数据并重新复制）             |
| [**`pause`**](#暂停自动切换)     | 暂停自动切换 | 暂停 Patroni 的自动故障转移功能           |
| [**`resume`**](#恢复自动切换)    | 恢复自动切换 | 恢复 Patroni 的自动故障转移功能           |
| [**`history`**](#查看历史)     | 查看历史   | 显示集群的故障转移历史记录                  |
| [**`show-config`**](#显示配置) | 显示配置   | 显示集群当前的配置（只读）                  |
| [**`query`**](#执行查询)       | 执行查询   | 在集群成员上执行 SQL 查询                |
| [**`topology`**](#查看拓扑)    | 查看拓扑   | 显示集群的复制拓扑结构                    |
| [**`version`**](#查看版本)     | 查看版本   | 显示 Patroni 版本信息                |
| [**`remove`**](#移除成员)      | 移除成员   | 从 DCS 中移除集群成员（危险操作）            |
{.full-width}


----------------

## 修改配置

使用 [**`edit-config`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-edit-config) 子命令可以交互式修改集群的 Patroni 与 PostgreSQL 配置。该命令会打开一个编辑器，让您修改存储在 DCS（分布式配置存储）中的集群配置，修改后会自动应用到所有集群成员。您可以更改 Patroni 本身的参数（如 `ttl`、`loop_wait`、`synchronous_mode` 等），以及 `postgresql.parameters` 中的 PostgreSQL 参数。

```bash
pg edit-config <cls>                  # 交互式编辑集群配置
pg edit-config <cls> --force          # 跳过确认提示直接应用
pg edit-config <cls> -p <k>=<v>       # 修改 PostgreSQL 参数（--pg 简写）
pg edit-config <cls> -s <k>=<v>       # 修改 Patroni 参数（--set 简写）
```

{{< asciinema file="demo/pgsql-config.cast" markers="7:修改配置,9:应用生效,11:检验结果,13:API修改,14:API修改验证" speed="1.2" autoplay="true" loop="true" >}}

以下是一些常见的配置修改示例：

```bash
# 修改 PostgreSQL 参数：慢查询阈值（会询问是否应用）
pg edit-config pg-test -p log_min_duration_statement=1000

# 修改 PostgreSQL 参数并跳过确认
pg edit-config pg-test -p log_min_duration_statement=1000 --force

# 修改多个 PostgreSQL 参数
pg edit-config pg-test -p work_mem=256MB -p maintenance_work_mem=1GB --force

# 修改 Patroni 参数：增大故障检测时间窗口（增大 RTO）
pg edit-config pg-test -s loop_wait=15 -s ttl=60 --force

# 修改 Patroni 参数：启用同步复制模式
pg edit-config pg-test -s synchronous_mode=true --force

# 修改 Patroni 参数：启用严格同步模式（至少一个同步从库才允许写入）
pg edit-config pg-test -s synchronous_mode_strict=true --force

# 修改需要重启的参数（修改后需执行 pg restart）
pg edit-config pg-test -p shared_buffers=4GB --force
pg edit-config pg-test -p shared_preload_libraries='timescaledb, pg_stat_statements' --force
pg edit-config pg-test -p max_connections=200 --force
```

部分参数修改后需要重启 PostgreSQL 才能生效，您可以使用 `pg list` 检查集群状态，带 `*` 标记的实例表示需要重启。然后使用 `pg restart` 命令重启集群使配置生效。
您也可以使用 `curl` 或编写程序直接调用 Patroni 提供的 [**REST API**](https://patroni.readthedocs.io/en/latest/rest_api.html) 来修改配置：

```bash
# 查看当前配置
curl -s 10.10.10.11:8008/config | jq .

# 通过 API 修改参数（需要认证）
curl -u 'postgres:Patroni.API' \
     -d '{"postgresql":{"parameters": {"log_min_duration_statement":200}}}' \
     -s -X PATCH http://10.10.10.11:8008/config | jq .
```



----------------

## 查看状态

使用 [**`list`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-list) 子命令可以查看集群成员及其状态。输出结果会显示每个实例的名称、主机地址、角色、运行状态、时间线和复制延迟等信息。这是日常运维中最常用的命令之一，用于快速了解集群的健康状况。

```bash
pg list <cls>                         # 查看指定集群的状态
pg list                               # 列出所有集群（需要在管理节点上执行）
pg list <cls> -e                      # 显示扩展信息（--extended）
pg list <cls> -t                      # 显示时间戳（--timestamp）
pg list <cls> -f json                 # 以 JSON 格式输出（--format）
pg list <cls> -W 5                    # 每 5 秒刷新一次（--watch）
```

输出示例：

```
+ Cluster: pg-test (7322261897169354773) -----+----+--------------+
| Member    | Host        | Role    | State   | TL | Lag in MB    |
+-----------+-------------+---------+---------+----+--------------+
| pg-test-1 | 10.10.10.11 | Leader  | running |  1 |              |
| pg-test-2 | 10.10.10.12 | Replica | running |  1 |            0 |
| pg-test-3 | 10.10.10.13 | Replica | running |  1 |            0 |
+-----------+-------------+---------+---------+----+--------------+
```

输出列说明：**Member** 是实例名称，由 `pg_cluster`-`pg_seq` 组成；**Host** 是实例所在主机的 IP 地址；**Role** 表示角色，包括 Leader（主库）、Replica（从库）、Sync Standby（同步从库）、Standby Leader（级联复制的级联主库）等；**State** 表示运行状态，常见值包括 `running`（正常运行）、`streaming`（流复制中）、`in archive recovery`（归档恢复中）、`starting`（启动中）、`stopped`（已停止）等；**TL** 是时间线编号（Timeline），每次主从切换后会递增；**Lag in MB** 是复制延迟，以 MB 为单位，主库不显示此值。

如果某个实例需要重启才能应用配置更改，实例名称后会显示 `*` 标记：

```
+ Cluster: pg-test (7322261897169354773) -------+----+--------------+
| Member      | Host        | Role    | State   | TL | Lag in MB    |
+-------------+-------------+---------+---------+----+--------------+
| pg-test-1 * | 10.10.10.11 | Leader  | running |  1 |              |
| pg-test-2 * | 10.10.10.12 | Replica | running |  1 |            0 |
+-------------+-------------+---------+---------+----+--------------+
```



----------------

## 主动切换

使用 [**`switchover`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-switchover) 子命令可以执行计划内的主从切换。Switchover 是一种优雅的切换方式：Patroni 会先确保从库完全同步，然后让主库降级为从库，最后提升目标从库为新主库。这个过程通常只需要几秒钟，期间会有短暂的写入不可用。适用于主库所在主机需要维护、升级、或者需要将主库迁移到性能更好的节点等场景。

```bash
pg switchover <cls>                   # 交互式切换，会提示选择目标从库
pg switchover <cls> --leader <old>    # 指定当前主库名称
pg switchover <cls> --candidate <new> # 指定目标从库名称
pg switchover <cls> --scheduled <time> # 定时切换，格式如 2024-12-01T03:00
pg switchover <cls> --force           # 跳过确认提示
```

执行切换前请确保所有从库复制状态正常（状态为 `running` 或 `streaming`），复制延迟在可接受范围内，并已通知相关业务方。

```bash
# 交互式切换（推荐，会显示当前拓扑并提示选择）
$ pg switchover pg-test
Current cluster topology
+ Cluster: pg-test (7322261897169354773) -----+----+--------------+
| Member    | Host        | Role    | State   | TL | Lag in MB    |
+-----------+-------------+---------+---------+----+--------------+
| pg-test-1 | 10.10.10.11 | Leader  | running |  1 |              |
| pg-test-2 | 10.10.10.12 | Replica | running |  1 |            0 |
| pg-test-3 | 10.10.10.13 | Replica | running |  1 |            0 |
+-----------+-------------+---------+---------+----+--------------+
Primary [pg-test-1]:
Candidate ['pg-test-2', 'pg-test-3'] []: pg-test-2
When should the switchover take place (e.g. 2024-01-01T12:00) [now]:
Are you sure you want to switchover cluster pg-test, demoting current leader pg-test-1? [y/N]: y

# 非交互式切换（指定主库和候选从库）
pg switchover pg-test --leader pg-test-1 --candidate pg-test-2 --force

# 定时切换（在凌晨 3 点执行，适合维护窗口）
pg switchover pg-test --leader pg-test-1 --candidate pg-test-2 --scheduled "2024-12-01T03:00"
```

切换完成后，请使用 `pg list` 确认新的集群拓扑。



----------------

## 故障切换

使用 [**`failover`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-failover) 子命令可以执行紧急故障切换。与 `switchover` 不同，`failover` 用于主库已经不可用的紧急情况。它会直接提升一个从库为新主库，而不等待原主库的确认。由于从库可能尚未完全同步所有数据，使用 `failover` 可能会导致少量数据丢失。因此，在非紧急情况下请优先使用 `switchover`。

```bash
pg failover <cls>                     # 交互式故障切换
pg failover <cls> --leader <old>      # 指定原主库（用于验证，可选）
pg failover <cls> --candidate <new>   # 指定要提升的从库
pg failover <cls> --force             # 跳过确认提示
```

故障切换示例：

```bash
# 交互式故障切换
$ pg failover pg-test
Candidate ['pg-test-2', 'pg-test-3'] []: pg-test-2
Are you sure you want to failover cluster pg-test? [y/N]: y
Successfully failed over to "pg-test-2"

# 非交互式故障切换（紧急情况快速执行）
pg failover pg-test --candidate pg-test-2 --force

# 指定原主库进行验证（如果原主库名称不匹配会报错）
pg failover pg-test --leader pg-test-1 --candidate pg-test-2 --force
```

**Switchover 与 Failover 的区别**：Switchover 用于计划内维护，要求原主库在线，执行前会确保数据完全同步，不会丢失数据；Failover 用于紧急故障恢复，原主库可以离线，会直接提升从库，可能丢失未同步的数据。日常维护、升级请使用 Switchover；只有在主库彻底故障无法恢复时才使用 Failover。



----------------

## 重启实例

使用 [**`restart`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-restart) 子命令可以重启 PostgreSQL 实例，通常用于应用需要重启才能生效的参数更改。Patroni 会协调重启过程，对于整个集群的重启会采用滚动方式：先重启从库，最后重启主库，以最小化服务中断。

```bash
pg restart <cls>                      # 重启整个集群的所有实例
pg restart <cls> <member>             # 重启指定实例
pg restart <cls> --role leader        # 仅重启主库
pg restart <cls> --role replica       # 仅重启所有从库
pg restart <cls> --pending            # 仅重启标记为需要重启的实例
pg restart <cls> --scheduled <time>   # 定时重启
pg restart <cls> --timeout <sec>      # 设置重启超时时间（秒）
pg restart <cls> --force              # 跳过确认提示
```

当您修改了需要重启才能生效的参数（如 `shared_buffers`、`shared_preload_libraries`、`max_connections`、`max_worker_processes` 等）后，需要使用此命令重启实例。

```bash
# 查看哪些实例需要重启（名称后带 * 标记）
$ pg list pg-test
+ Cluster: pg-test (7322261897169354773) -------+----+--------------+
| Member      | Host        | Role    | State   | TL | Lag in MB    |
+-------------+-------------+---------+---------+----+--------------+
| pg-test-1 * | 10.10.10.11 | Leader  | running |  1 |              |
| pg-test-2 * | 10.10.10.12 | Replica | running |  1 |            0 |
+-------------+-------------+---------+---------+----+--------------+

# 重启单个从库实例
pg restart pg-test pg-test-2

# 重启整个集群（滚动重启，先从库后主库）
pg restart pg-test --force

# 仅重启需要重启的实例
pg restart pg-test --pending --force

# 仅重启所有从库
pg restart pg-test --role replica --force

# 定时重启（在维护窗口执行）
pg restart pg-test --scheduled "2024-12-01T03:00"

# 设置重启超时时间为 300 秒
pg restart pg-test --timeout 300 --force
```



----------------

## 重载配置

使用 [**`reload`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-reload) 子命令可以重载 Patroni 配置，无需重启 PostgreSQL。该命令会让 Patroni 重新读取配置文件，并将不需要重启的参数变更应用到 PostgreSQL（通过 `pg_reload_conf()`）。相比 `restart`，`reload` 更加轻量，不会中断数据库连接和正在执行的查询。

```bash
pg reload <cls>                       # 重载整个集群的配置
pg reload <cls> <member>              # 重载指定实例的配置
pg reload <cls> --role leader         # 仅重载主库
pg reload <cls> --role replica        # 仅重载所有从库
pg reload <cls> --force               # 跳过确认提示
```

大多数 PostgreSQL 参数可以通过 `reload` 生效，只有少数参数（位于 postmaster 上下文的参数，例如 `shared_buffers`、`max_connections`、`shared_preload_libraries`，`archive_mode` 等）需要重启 PostgreSQL 才能生效。

```bash
# 重载整个集群
pg reload pg-test

# 重载单个实例
pg reload pg-test pg-test-1

# 强制重载，跳过确认
pg reload pg-test --force
```



----------------

## 重做从库

使用 [**`reinit`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-reinit) 子命令可以重新初始化从库。该操作会删除从库上的所有数据，然后从主库重新执行 `pg_basebackup` 进行完整的数据复制。适用于从库数据损坏无法修复、从库落后太多导致 WAL 已被清理无法追赶、或从库配置错误需要重置等场景。

```bash
pg reinit <cls> <member>              # 重新初始化指定从库
pg reinit <cls> <member> --force      # 跳过确认提示
pg reinit <cls> <member> --wait       # 等待重建完成后再返回
```

> ⚠️ **警告**：此操作会删除目标实例的所有数据！只能对从库执行，不能对主库执行。

```bash
# 重新初始化从库（会提示确认）
$ pg reinit pg-test pg-test-2
Are you sure you want to reinitialize members pg-test-2? [y/N]: y
Success: reinitialize for member pg-test-2

# 强制重新初始化，跳过确认
pg reinit pg-test pg-test-2 --force

# 重新初始化并等待完成
pg reinit pg-test pg-test-2 --force --wait
```

重建过程中，可以使用 `pg list` 查看进度。从库状态会显示为 `creating replica`：

```
+ Cluster: pg-test (7322261897169354773) --------------+----+------+
| Member    | Host        | Role    | State            | TL | Lag  |
+-----------+-------------+---------+------------------+----+------+
| pg-test-1 | 10.10.10.11 | Leader  | running          |  2 |      |
| pg-test-2 | 10.10.10.12 | Replica | creating replica |    |    ? |
+-----------+-------------+---------+------------------+----+------+
```



----------------

## 暂停自动切换

使用 [**`pause`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-pause) 子命令可以暂停 Patroni 的自动故障转移功能。暂停后，即使主库故障，Patroni 也不会自动提升从库为新主库。适用于计划内维护窗口（避免维护操作误触发切换）、调试问题时防止集群状态变化、或需要手动控制切换时机等场景。

```bash
pg pause <cls>                        # 暂停自动故障转移
pg pause <cls> --wait                 # 暂停并等待所有成员确认
```

> ⚠️ **警告**：暂停期间如果主库故障，集群将不会自动恢复！请确保在维护完成后及时使用 `resume` 恢复。

```bash
# 暂停自动切换
$ pg pause pg-test
Success: cluster management is paused

# 查看集群状态（底部会显示 Maintenance mode: on）
$ pg list pg-test
+ Cluster: pg-test (7322261897169354773) -----+----+--------------+
| Member    | Host        | Role    | State   | TL | Lag in MB    |
+-----------+-------------+---------+---------+----+--------------+
| pg-test-1 | 10.10.10.11 | Leader  | running |  1 |              |
| pg-test-2 | 10.10.10.12 | Replica | running |  1 |            0 |
+-----------+-------------+---------+---------+----+--------------+
 Maintenance mode: on
```



----------------

## 恢复自动切换

使用 [**`resume`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-resume) 子命令可以恢复 Patroni 的自动故障转移功能。维护完成后应立即执行此命令，以确保集群在主库故障时能够自动恢复。

```bash
pg resume <cls>                       # 恢复自动故障转移
pg resume <cls> --wait                # 恢复并等待所有成员确认
```

```bash
# 恢复自动切换
$ pg resume pg-test
Success: cluster management is resumed

# 确认已恢复（Maintenance mode 提示消失）
$ pg list pg-test
```



----------------

## 查看历史

使用 [**`history`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-history) 子命令可以查看集群的故障转移历史记录。每次主从切换（无论是自动故障转移还是手动切换）都会生成一条新的时间线记录。

```bash
pg history <cls>                      # 显示故障转移历史
pg history <cls> -f json              # 以 JSON 格式输出
pg history <cls> -f yaml              # 以 YAML 格式输出
```

```bash
$ pg history pg-test
+----+-----------+------------------------------+---------------------------+
| TL |       LSN | Reason                       | Timestamp                 |
+----+-----------+------------------------------+---------------------------+
|  1 | 0/5000060 | no recovery target specified | 2024-01-15T10:30:00+08:00 |
|  2 | 0/6000000 | switchover to pg-test-2      | 2024-01-20T14:00:00+08:00 |
|  3 | 0/7000028 | failover to pg-test-1        | 2024-01-25T09:15:00+08:00 |
+----+-----------+------------------------------+---------------------------+
```

输出列说明：**TL** 是时间线编号（Timeline），每次切换后递增，用于区分不同的主库历史；**LSN** 是切换时的日志序列号（Log Sequence Number），标识切换发生时的 WAL 位置；**Reason** 是切换原因，可能是 `switchover to xxx`（手动切换）、`failover to xxx`（故障转移）或 `no recovery target specified`（初始化）；**Timestamp** 是切换发生的时间戳。



----------------

## 显示配置

使用 [**`show-config`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-show-config) 子命令可以查看集群当前存储在 DCS 中的配置。这是一个只读操作，如需修改配置请使用 `edit-config` 命令。

```bash
pg show-config <cls>                  # 显示集群配置
```

```bash
$ pg show-config pg-test
loop_wait: 10
maximum_lag_on_failover: 1048576
postgresql:
  parameters:
    archive_command: pgbackrest --stanza=pg-test archive-push %p
    max_connections: 100
    shared_buffers: 256MB
    log_min_duration_statement: 1000
  use_pg_rewind: true
  use_slots: true
retry_timeout: 10
ttl: 30
synchronous_mode: false
```



----------------

## 执行查询

使用 [**`query`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-query) 子命令可以在集群成员上快速执行 SQL 查询。这是一个方便的调试工具，适合快速检查集群状态或执行简单查询。生产环境中的复杂查询建议使用 `psql` 或应用程序连接。

```bash
pg query <cls> -c "<sql>"             # 在主库上执行查询
pg query <cls> -c "<sql>" -m <member> # 在指定实例上执行（--member）
pg query <cls> -c "<sql>" -r leader   # 在主库上执行（--role）
pg query <cls> -c "<sql>" -r replica  # 在所有从库上执行
pg query <cls> -f <file>              # 从文件读取 SQL 执行
pg query <cls> -c "<sql>" -U <user>   # 指定用户名（--username）
pg query <cls> -c "<sql>" -d <db>     # 指定数据库（--dbname）
pg query <cls> -c "<sql>" --format json  # 以 JSON 格式输出
```

```bash
# 查看主库当前连接数
pg query pg-test -c "SELECT count(*) FROM pg_stat_activity"

# 查看 PostgreSQL 版本
pg query pg-test -c "SELECT version()"

# 在所有从库上查看复制状态
pg query pg-test -c "SELECT pg_is_in_recovery(), pg_last_wal_replay_lsn()" -r replica

# 在指定实例上执行
pg query pg-test -c "SELECT pg_is_in_recovery()" -m pg-test-2

# 使用指定用户和数据库
pg query pg-test -c "SELECT current_user, current_database()" -U postgres -d postgres

# 以 JSON 格式输出结果
pg query pg-test -c "SELECT * FROM pg_stat_replication" --format json
```



----------------

## 查看拓扑

使用 [**`topology`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-topology) 子命令可以以树形结构查看集群的复制拓扑。与 `list` 相比，`topology` 更直观地展示了主从复制关系，特别适合级联复制（Cascading Replication）场景。

```bash
pg topology <cls>                     # 显示复制拓扑
```

```bash
$ pg topology pg-test
+ Cluster: pg-test (7322261897169354773) -------+----+--------------+
| Member      | Host        | Role    | State   | TL | Lag in MB    |
+-------------+-------------+---------+---------+----+--------------+
| pg-test-1   | 10.10.10.11 | Leader  | running |  1 |              |
| + pg-test-2 | 10.10.10.12 | Replica | running |  1 |            0 |
| + pg-test-3 | 10.10.10.13 | Replica | running |  1 |            0 |
+-------------+-------------+---------+---------+----+--------------+
```

在级联复制场景中，拓扑图会清晰展示复制链路层级，例如 `pg-test-3` 从 `pg-test-2` 复制，而 `pg-test-2` 从主库 `pg-test-1` 复制。



----------------

## 查看版本

使用 [**`version`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-version) 子命令可以查看 patronictl 的版本信息。

```bash
pg version                            # 显示 patronictl 版本
```

```bash
$ pg version
patronictl version 4.1.0
```



----------------

## 移除成员

使用 [**`remove`**](https://patroni.readthedocs.io/en/latest/patronictl.html#patronictl-remove) 子命令可以从 DCS（分布式配置存储）中移除集群或成员的元数据。这是一个危险操作，仅移除 DCS 中的元数据，不会停止 PostgreSQL 服务或删除数据文件。错误使用可能导致集群状态不一致。

```bash
pg remove <cls>                       # 从 DCS 中移除整个集群的元数据
```

通常情况下您不需要使用此命令。如需正确移除集群或实例，请使用 Pigsty 提供的 [**`bin/pgsql-rm`**](/docs/pgsql/admin/cluster#销毁集群) 脚本或 [**`pgsql-rm.yml`**](/docs/pgsql/playbook#pgsql-rmyml) 剧本。
只有在以下特殊情况下才考虑使用 `remove`：DCS 中存在孤立的元数据需要清理（例如节点已物理移除但元数据残留），或集群已通过其他方式销毁需要清理残留信息。

```bash
# 移除整个集群的元数据（需要多次确认）
$ pg remove pg-test
Please confirm the cluster name to remove: pg-test
You are about to remove all information in DCS for pg-test, please type: "Yes I am aware": Yes I am aware
```


