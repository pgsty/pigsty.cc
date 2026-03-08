---
title: "patronictl 命令行"
weight: 50
icon: fa-solid fa-terminal
description: "patronictl 的配置说明、语法参考与子命令完整参考。"
module: [PATRONI]
categories: [参考]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/patronictl.html

<a id="patronictl_version_description"></a>
<a id="patronictl_version_parameters"></a>
<a id="patronictl_version_examples"></a>
<a id="patronictl"></a>
Patroni 提供了 [patronictl](/docs/patroni/patronictl#patronictl) 命令行工具，用于与 Patroni 的 REST API 和 DCS 交互，旨在简化集群操作，适合人工操作或脚本调用。

<a id="patronictl_configuration"></a>

--------

## 配置

[patronictl](/docs/patroni/patronictl#patronictl) 使用以下 3 个配置节：

- **`ctl`**：用于对 Patroni REST API 进行认证以及验证服务器身份，详见 [ctl 配置参数](/docs/patroni/config/yaml#patronictl_settings)；
- **`restapi`**：同样用于认证和验证服务器身份，仅在 **`ctl`** 配置不足时作为补充。[patronictl](/docs/patroni/patronictl#patronictl) 主要使用 **`restapi.authentication`** 节（当 **`ctl.authentication`** 缺失时）和 **`restapi.cafile`**（当 **`ctl.cacert`** 缺失时），详见 [REST API 配置参数](/docs/patroni/config/yaml#restapi_settings)；
- DCS（如 **`etcd`**）：如何连接和认证 Patroni 所使用的 DCS。

这些配置可通过环境变量或配置文件提供。具体设置方式请参阅 [环境变量配置参数](/docs/patroni/config/env#env) 或 [YAML 配置参数](/docs/patroni/config/yaml#yaml) 中的相应章节。

若使用环境变量，方式直接——patronictl 读取环境变量并使用其值即可。

若使用配置文件，可通过多种方式告知 [patronictl](/docs/patroni/patronictl#patronictl) 应加载哪个文件。默认情况下，[patronictl](/docs/patroni/patronictl#patronictl) 会尝试加载名为 **`patronictl.yaml`** 的配置文件，根据操作系统不同，该文件的默认路径如下：

- Mac OS X：**`~/Library/Application Support/patroni`**
- Mac OS X（POSIX）：**`~/.patroni`**
- Unix：**`~/.config/patroni`**
- Unix（POSIX）：**`~/.patroni`**
- Windows（漫游）：**`C:\Users\<user>\AppData\Roaming\patroni`**
- Windows（非漫游）：**`C:\Users\<user>\AppData\Local\patroni`**

可通过以下方式覆盖默认配置文件路径：

- 设置环境变量 **`PATRONICTL_CONFIG_FILE`**，指向自定义配置文件；
- 使用 [patronictl](/docs/patroni/patronictl#patronictl) 的 **`-c`** / **`--config-file`** 命令行参数。

> [!NOTE]
> 若在运行 **`patroni`** 守护进程的同一主机上运行 [patronictl](/docs/patroni/patronictl#patronictl)，可直接复用相同的配置文件，前提是该文件包含 [patronictl](/docs/patroni/patronictl#patronictl) 所需的所有配置节。

<a id="patronictl_usage"></a>

--------

## 用法

[patronictl](/docs/patroni/patronictl#patronictl) 提供了若干便捷操作，本节将逐一介绍。

各子命令介绍之前，先了解 [patronictl](/docs/patroni/patronictl#patronictl) 自身的命令行参数：

**`-c`** / **`--config-file`**
为 [patronictl](/docs/patroni/patronictl#patronictl) 指定配置文件路径，用法如前所述。

**`-d`** / **`--dcs-url`** / **`--dcs`**
提供 Patroni 所用 DCS 的连接字符串。

可用于覆盖 [patronictl](/docs/patroni/patronictl#patronictl) 配置中的 DCS 和 **`namespace`** 设置，也可在配置中缺少这些设置时直接定义。

值的格式为 **`DCS://HOST:PORT/NAMESPACE`**，例如 **`etcd3://localhost:2379/service`**，表示连接本机上的 etcd v3，Patroni 集群存储在 **`service`** namespace 下。缺少的部分将由配置文件中的值或默认值补充。

**`-k`** / **`--insecure`**
跳过 REST API 服务器 SSL 证书验证。

以下是 [patronictl](/docs/patroni/patronictl#patronictl) 命令的使用语法：

```
patronictl [ { -c | --config-file } CONFIG_FILE ]
  [ { -d | --dcs-url | --dcs } DCS_URL ]
  [ { -k | --insecure } ]
  SUBCOMMAND
```

> [!NOTE]
> 语法约定：
>
> - 方括号 **`[ ]`** 内的选项为可选项；
> - 花括号 **`{ }`** 内的选项表示从中选择其一；
> - 带有 **`[, ... ]`** 的选项可多次指定；
> - 大写字母表示需要赋值的占位符。
>
> 以下各小节描述子命令时均使用相同语法，子命令语法说明可视为上述语法中 **`SUBCOMMAND`** 的替换内容。

以下各小节介绍 [patronictl](/docs/patroni/patronictl#patronictl) 的每个子命令，示例均使用 Patroni GitHub 仓库中的配置文件（**`postgres0.yml`**、**`postgres1.yml`** 和 **`postgres2.yml`**）。

<a id="patronictl_dsn"></a>
### patronictl dsn

<a id="patronictl_dsn_synopsis"></a>
#### 语法

```
dsn
  [ CLUSTER_NAME ]
  [ { { -r | --role } { leader | primary | standby-leader | replica | standby | any } | { -m | --member } MEMBER_NAME } ]
  [ --group CITUS_GROUP ]
```

<a id="patronictl_dsn_description"></a>
#### 描述

**`patronictl dsn`** 获取 Patroni 集群指定成员的连接字符串。

若多个成员符合条件，将优先返回主库的连接字符串。

<a id="patronictl_dsn_parameters"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`-r`** / **`--role`**
选择具有指定角色的成员。

角色可以是以下之一：

- **`leader`**：普通 Patroni 集群或备用 Patroni 集群的领导者；
- **`primary`**：普通 Patroni 集群的领导者；
- **`standby-leader`**：备用 Patroni 集群的领导者；
- **`replica`**：Patroni 集群的从库；
- **`standby`**：同 **`replica`**；
- **`any`**：任意角色，与省略此参数效果相同。

**`-m`** / **`--member`**
选择具有指定名称的集群成员。

**`MEMBER_NAME`** 为成员的名称。

**`--group`**
选择属于指定 Citus 组的成员。

**`CITUS_GROUP`** 为 Citus 组 ID。

<a id="patronictl_dsn_examples"></a>
#### 示例

获取主库的 DSN：

``` bash
$ patronictl -c postgres0.yml dsn batman -r primary
host=127.0.0.1 port=5432
```

获取名为 **`postgresql1`** 的节点的 DSN：

``` bash
$ patronictl -c postgres0.yml dsn batman --member postgresql1
host=127.0.0.1 port=5433
```

<a id="patronictl_edit_config"></a>
### patronictl edit-config

<a id="patronictl_edit_config_synopsis"></a>
#### 语法

```
edit-config
  [ CLUSTER_NAME ]
  [ --group CITUS_GROUP ]
  [ { -q | --quiet } ]
  [ { -s | --set } CONFIG="VALUE" [, ... ] ]
  [ { -p | --pg } PG_CONFIG="PG_VALUE" [, ... ] ]
  [ { --apply | --replace } CONFIG_FILE ]
  [ --force ]
```

<a id="patronictl_edit_config_description"></a>
#### 描述

**`patronictl edit-config`** 修改集群的动态配置并将其更新到 DCS。

> [!NOTE]
> 通过 TTY 调用时，该命令会通过分页器显示动态配置的差异，默认使用 **`less`** 或 **`more`**。若需要使用其他分页器，请通过 **`PAGER`** 环境变量指定。

<a id="patronictl_edit_config_parameters"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
修改指定 Citus 组的动态配置。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`citus.group`** 配置中获取（如果存在）。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`-q`** / **`--quiet`**
跳过显示配置差异的标志。

**`-s`** / **`--set`**
将指定的动态配置选项设置为给定值。

**`CONFIG`** 为动态配置在 YAML 树中的路径，各层级之间以 **`.`** 分隔。

**`VALUE`** 为 **`CONFIG`** 的值。若值为 **`null`**，则从动态配置中删除该项。

**`-p`** / **`--pg`**
设置指定的动态 PostgreSQL 配置参数。

本质上是 **`-s`** / **`--set`** 的简写，会自动在 **`CONFIG`** 前添加 **`postgresql.parameters.`** 前缀。

**`PG_CONFIG`** 为要设置的 PostgreSQL 参数名称。

**`PG_VALUE`** 为 **`PG_CONFIG`** 的值。若值为 **`null`**，则从动态配置中删除该参数。

**`--apply`**
从指定文件应用动态配置。

效果等同于对文件中每项配置分别指定 **`-s`** / **`--set`** 选项。

**`CONFIG_FILE`** 为包含待应用动态配置的文件路径（YAML 格式），使用 **`-`** 从 stdin 读取。

**`--replace`**
用指定文件中的动态配置完整替换 DCS 中的现有配置。

**`CONFIG_FILE`** 为包含新动态配置的文件路径（YAML 格式），使用 **`-`** 从 stdin 读取。

**`--force`**
跳过确认提示，适合在脚本中使用。

<a id="patronictl_edit_config_examples"></a>
#### 示例

修改 **`max_connections`** Postgres GUC 参数：

``` diff
patronictl -c postgres0.yml edit-config batman --pg max_connections="150" --force
---
+++
@@ -1,6 +1,8 @@
loop_wait: 10
maximum_lag_on_failover: 1048576
postgresql:
+  parameters:
+    max_connections: 150
  pg_hba:
  - host replication replicator 127.0.0.1/32 md5
  - host all all 0.0.0.0/0 md5

Configuration changed
```

修改 **`loop_wait`** 和 **`ttl`** 配置：

``` diff
patronictl -c postgres0.yml edit-config batman --set loop_wait="15" --set ttl="45" --force
---
+++
@@ -1,4 +1,4 @@
-loop_wait: 10
+loop_wait: 15
maximum_lag_on_failover: 1048576
postgresql:
  pg_hba:
@@ -6,4 +6,4 @@
  - host all all 0.0.0.0/0 md5
  use_pg_rewind: true
retry_timeout: 10
-ttl: 30
+ttl: 45

Configuration changed
```

从动态配置中删除 **`maximum_lag_on_failover`** 配置项：

``` diff
patronictl -c postgres0.yml edit-config batman --set maximum_lag_on_failover="null" --force
---
+++
@@ -1,5 +1,4 @@
loop_wait: 10
-maximum_lag_on_failover: 1048576
postgresql:
  pg_hba:
  - host replication replicator 127.0.0.1/32 md5

Configuration changed
```

### patronictl failover

#### 语法

```
failover
  [ CLUSTER_NAME ]
  [ --group CITUS_GROUP ]
  --candidate CANDIDATE_NAME
  [ --force ]
```

#### 描述

**`patronictl failover`** 在集群中执行手动故障转移。

此命令适用于集群不健康的场景，例如：

- 集群没有领导者；
- 同步集群中没有可用的同步备库。

也可用于在同步模式下将故障转移到异步节点。

> [!NOTE]
> 健康集群中也可运行 **`patronictl failover`**，但此类情况下建议使用 **`patronictl switchover`**。

> [!WARNING]
> 故障转移可能导致数据丢失，具体取决于被提升的从库与主库的同步程度。

<a id="patronictl_failover"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
在指定 Citus 组中执行故障转移。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`--candidate`**
指定故障转移时要提升为主库的节点。

**`CANDIDATE_NAME`** 为目标节点名称。

**`--force`**
跳过确认提示，适合在脚本中使用。

<a id="patronictl_failover_synopsis"></a>
#### 示例

故障转移到节点 **`postgresql2`**：

``` bash
$ patronictl -c postgres0.yml failover batman --candidate postgresql2 --force
Current cluster topology
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  3 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  3 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  3 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
2023-09-12 11:52:27.50978 Successfully failed over to "postgresql2"
+ Cluster: batman (7277694203142172922) -+---------+----+-------------+---------+------------+---------+
| Member      | Host           | Role    | State   | TL | Receive LSN |     Lag | Replay LSN |     Lag |
+-------------+----------------+---------+---------+----+-------------+---------+------------+---------+
| postgresql0 | 127.0.0.1:5432 | Replica | stopped |    |     unknown | unknown |    unknown | unknown |
| postgresql1 | 127.0.0.1:5433 | Replica | running |  3 |   0/4000188 |       0 |  0/4000188 |       0 |
| postgresql2 | 127.0.0.1:5434 | Leader  | running |  3 |             |         |            |         |
+-------------+----------------+---------+---------+----+-------------+---------+------------+---------+
```

<a id="patronictl_failover_description"></a>
### patronictl flush

<a id="patronictl_failover_parameters"></a>
#### 语法

```
flush
  CLUSTER_NAME
  [ MEMBER_NAME [, ... ] ]
  { restart | switchover }
  [ --group CITUS_GROUP ]
  [ { -r | --role } { leader | primary | standby-leader | replica | standby | any } ]
  [ --force ]
```

<a id="patronictl_failover_examples"></a>
#### 描述

**`patronictl flush`** 取消已调度的事件。

<a id="patronictl_flush"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

**`MEMBER_NAME`**
取消指定成员的已调度事件，可同时指定多个成员，不指定则针对所有成员。

> [!NOTE]
> 此参数仅在取消已调度的重启事件时使用。

**`restart`**
取消已调度的重启事件。

**`switchover`**
取消已调度的主从切换事件。

**`--group`**
取消指定 Citus 组的已调度事件。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`-r`** / **`--role`**
取消具有指定角色的成员的已调度事件。

角色可以是以下之一：

- **`leader`**：普通集群或备用集群的领导者；
- **`primary`**：普通集群的领导者；
- **`standby-leader`**：备用集群的领导者；
- **`replica`**：集群从库；
- **`standby`**：同 **`replica`**；
- **`any`**：任意角色，与省略此参数效果相同。

> [!NOTE]
> 此参数仅在取消已调度的重启事件时使用。

**`--force`**
跳过确认提示，适合在脚本中使用。

<a id="patronictl_flush_synopsis"></a>
#### 示例

取消已调度的主从切换事件：

``` bash
$ patronictl -c postgres0.yml flush batman switchover --force
Success: scheduled switchover deleted
```

取消所有备库的已调度重启：

``` bash
$ patronictl -c postgres0.yml flush batman restart -r replica --force
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+---------------------------+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag | Scheduled restart         |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+---------------------------+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  5 |             |     |            |     | 2025-03-23T18:00:00-03:00 |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  5 |   0/4000400 |   0 |  0/4000400 |   0 | 2025-03-23T18:00:00-03:00 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  5 |   0/4000400 |   0 |  0/4000400 |   0 | 2025-03-23T18:00:00-03:00 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+---------------------------+
Success: flush scheduled restart for member postgresql1
Success: flush scheduled restart for member postgresql2
```

取消节点 **`postgresql0`** 和 **`postgresql1`** 的已调度重启：

``` bash
$ patronictl -c postgres0.yml flush batman postgresql0 postgresql1 restart --force
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+---------------------------+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag | Scheduled restart         |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+---------------------------+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  5 |             |     |            |     | 2025-03-23T18:00:00-03:00 |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  5 |   0/4000400 |   0 |  0/4000400 |   0 | 2025-03-23T18:00:00-03:00 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  5 |   0/4000400 |   0 |  0/4000400 |   0 | 2025-03-23T18:00:00-03:00 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+---------------------------+
Success: flush scheduled restart for member postgresql0
Success: flush scheduled restart for member postgresql1
```

<a id="patronictl_flush_description"></a>
### patronictl history

<a id="patronictl_flush_parameters"></a>
#### 语法

```
history
  [ CLUSTER_NAME ]
  [ --group CITUS_GROUP ]
  [ { -f | --format } { pretty | tsv | json | yaml } ]
```

<a id="patronictl_flush_examples"></a>
#### 描述

**`patronictl history`** 显示集群故障转移和主从切换事件的历史记录。

输出包含以下信息：

**`TL`**
事件发生时的 Postgres 时间线。

**`LSN`**
事件发生时的 Postgres LSN。

**`Reason`**
来自 PostgreSQL **`.history`** 文件的切换原因。

**`Timestamp`**
事件发生的时间。

**`New Leader`**
在事件中被提升的 Patroni 成员。

<a id="patronictl_history"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
显示指定 Citus 组的事件历史。

**`CITUS_GROUP`** 为 Citus 组 ID。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`citus.group`** 配置中获取（如果存在）。

**`-f`** / **`--format`**
输出中事件列表的格式。

格式可以是以下之一：

- **`pretty`**：以美观的表格形式打印历史记录；
- **`tsv`**：以表格形式打印历史记录，列之间以 **`\t`** 分隔；
- **`json`**：以 JSON 格式打印历史记录；
- **`yaml`**：以 YAML 格式打印历史记录。

默认为 **`pretty`**。

<a id="patronictl_history_synopsis"></a>
#### 示例

显示事件历史记录：

``` bash
$ patronictl -c postgres0.yml history batman
+----+----------+------------------------------+----------------------------------+-------------+
| TL |      LSN | Reason                       | Timestamp                        | New Leader  |
+----+----------+------------------------------+----------------------------------+-------------+
|  1 | 24392648 | no recovery target specified | 2023-09-11T22:11:27.125527+00:00 | postgresql0 |
|  2 | 50331864 | no recovery target specified | 2023-09-12T11:34:03.148097+00:00 | postgresql0 |
|  3 | 83886704 | no recovery target specified | 2023-09-12T11:52:26.948134+00:00 | postgresql2 |
|  4 | 83887280 | no recovery target specified | 2023-09-12T11:53:09.620136+00:00 | postgresql0 |
+----+----------+------------------------------+----------------------------------+-------------+
```

以 YAML 格式显示事件历史记录：

``` bash
$ patronictl -c postgres0.yml history batman -f yaml
- LSN: 24392648
  New Leader: postgresql0
  Reason: no recovery target specified
  TL: 1
  Timestamp: '2023-09-11T22:11:27.125527+00:00'
- LSN: 50331864
  New Leader: postgresql0
  Reason: no recovery target specified
  TL: 2
  Timestamp: '2023-09-12T11:34:03.148097+00:00'
- LSN: 83886704
  New Leader: postgresql2
  Reason: no recovery target specified
  TL: 3
  Timestamp: '2023-09-12T11:52:26.948134+00:00'
- LSN: 83887280
  New Leader: postgresql0
  Reason: no recovery target specified
  TL: 4
  Timestamp: '2023-09-12T11:53:09.620136+00:00'
```

<a id="patronictl_history_description"></a>
### patronictl list

<a id="patronictl_history_parameters"></a>
#### 语法

```
list
  [ CLUSTER_NAME [, ... ] ]
  [ --group CITUS_GROUP ]
  [ { -e | --extended } ]
  [ { -t | --timestamp } ]
  [ { -f | --format } { pretty | tsv | json | yaml } ]
  [ { -W | { -w | --watch } TIME } ]
```

<a id="patronictl_history_examples"></a>
#### 描述

**`patronictl list`** 显示 Patroni 集群及其成员的信息。

输出包含以下信息：

**`Cluster`**
Patroni 集群名称。

**`Member`**
Patroni 成员名称。

**`Host`**
成员所在主机。

**`Role`**
成员当前角色。

可以是以下之一：

- **`Leader`**：普通 Patroni 集群的当前领导者；
- **`Standby Leader`**：Patroni 备用集群的当前领导者；
- **`Sync Standby`**：启用同步模式的 Patroni 集群的同步备库；
- **`Replica`**：Patroni 集群的普通备库。

**`State`**
该 Patroni 成员上 PostgreSQL 的当前运行状态。

常见状态值：

- **`running`**：PostgreSQL 正常运行；
- **`streaming`**：从库，正通过流复制从主库接收 WAL；
- **`in archive recovery`**：从库，正通过归档恢复获取 WAL；
- **`stopped`**：PostgreSQL 已停止；
- **`crashed`**：PostgreSQL 已崩溃。

**`TL`**
该 Patroni 成员上 PostgreSQL 的当前时间线编号。

**`Receive LSN`**
通过流复制接收并已同步到磁盘的最后一个 WAL 位置（**`pg_catalog.pg_last_(xlog|wal)_receive_(location|lsn)()`**）。

**`Receive Lag`**
该成员 **`Receive LSN`** 与其上游之间的复制延迟（MB）。

**`Replay LSN`**
恢复期间已重放的最后一个 WAL 位置（**`pg_catalog.pg_last_(xlog|wal)_replay_(location|lsn)()`**）。

**`Replay Lag`**
该成员 **`Replay LSN`** 与其上游之间的复制延迟（MB）。

此外，以下信息也可能出现在输出中：

**`System identifier`**
PostgreSQL 系统标识符。

> [!NOTE]
> 显示在表格标题中，仅在输出格式为 **`pretty`** 时显示。

**`Group`**
Citus 组 ID。

> [!NOTE]
> 显示在表格标题中，仅在 Citus 集群中显示。

**`Pending restart`**
**`*`** 表示节点需要重启以使某些 PostgreSQL 配置生效，空值表示无需重启。

> [!NOTE]
> 显示为成员属性。在以下情况下显示：
>
> - 以 **`pretty`** 或 **`tsv`** 格式输出且启用了扩展输出；或
> - 节点有待应用的配置变更需要重启。

**`Scheduled restart`**
为该成员管理的 PostgreSQL 实例调度重启的时间戳，空值表示该成员没有已调度的重启。

> [!NOTE]
> 显示为成员属性。在以下情况下显示：
>
> - 以 **`pretty`** 或 **`tsv`** 格式输出且启用了扩展输出；或
> - 节点有已调度的重启。

**`Tags`**
该 Patroni 成员设置的标签，空值表示未配置任何标签或标签均为默认值。

> [!NOTE]
> 显示为成员属性。在以下情况下显示：
>
> - 以 **`pretty`** 或 **`tsv`** 格式输出且启用了扩展输出；或
> - 节点有自定义标签，或有使用非默认值的内置标签。

**`Scheduled switchover`**
为 Patroni 集群调度主从切换的时间戳。

> [!NOTE]
> 显示在表格底部，仅在有已调度的主从切换且输出格式为 **`pretty`** 时显示。

**`Maintenance mode`**
集群自动故障转移当前是否已暂停。

> [!NOTE]
> 显示在表格底部，仅在集群已暂停且输出格式为 **`pretty`** 时显示。

<a id="patronictl_list"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
显示指定 Citus 组成员的信息。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`-e`** / **`--extended`**
显示扩展信息，强制显示 **`Pending restart`**、**`Scheduled restart`** 和 **`Tags`** 属性，即使其值为空。

> [!NOTE]
> 仅适用于 **`pretty`** 和 **`tsv`** 输出格式。

**`-t`** / **`--timestamp`**
在打印集群及成员信息之前打印时间戳。

**`-f`** / **`--format`**
输出格式，可以是：

- **`pretty`**：以美观的表格形式打印；
- **`tsv`**：以 **`\t`** 分隔的表格形式打印；
- **`json`**：JSON 格式；
- **`yaml`**：YAML 格式。

默认为 **`pretty`**。

**`-W`**
每 2 秒自动刷新信息。

**`-w`** / **`--watch`**
按指定间隔（秒）自动刷新信息。

<a id="patronictl_list_synopsis"></a>
#### 示例

以美观表格格式显示集群信息：

``` bash
$ patronictl -c postgres0.yml list batman
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  5 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
```

以美观表格格式显示集群信息（含扩展列）：

``` bash
$ patronictl -c postgres0.yml list batman -e
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+-----------------+------------------------+-------------------+------+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag | Pending restart | Pending restart reason | Scheduled restart | Tags |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+-----------------+------------------------+-------------------+------+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  5 |             |     |            |     |                 |                        |                   |      |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |                 |                        |                   |      |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |                 |                        |                   |      |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+-----------------+------------------------+-------------------+------+
```

以 YAML 格式显示集群信息，并附带执行时间戳：

``` bash
$ patronictl -c postgres0.yml list batman -f yaml -t
2023-09-12 13:30:48
- Cluster: batman
  Host: 127.0.0.1:5432
  Member: postgresql0
  Role: Leader
  State: running
  TL: 5
- Cluster: batman
  Host: 127.0.0.1:5433
  Receive LSN: 0/40004E8
  Receive Lag: 0
  Replay LSN: 0/40004E8
  Replay Lag: 0
  Member: postgresql1
  Role: Replica
  State: streaming
  TL: 5
- Cluster: batman
  Host: 127.0.0.1:5434
  Receive LSN: 0/40004E8
  Receive Lag: 0
  Replay LSN: 0/40004E8
  Replay Lag: 0
  Member: postgresql2
  Role: Replica
  State: streaming
  TL: 5
```

<a id="patronictl_list_description"></a>
### patronictl pause

<a id="patronictl_list_parameters"></a>
#### 语法

```
pause
  [ CLUSTER_NAME ]
  [ --group CITUS_GROUP ]
  [ --wait ]
```

<a id="patronictl_list_examples"></a>
#### 描述

**`patronictl pause`** 将 Patroni 集群临时置于维护模式，暂停自动故障转移。

<a id="patronictl_pause"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
暂停指定 Citus 组。

**`CITUS_GROUP`** 为 Citus 组 ID。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`citus.group`** 配置中获取（如果存在）。

**`--wait`**
等待所有 Patroni 成员均进入暂停状态后再返回。

<a id="patronictl_pause_synopsis"></a>
#### 示例

将集群置于维护模式，并等待所有节点都完成暂停：

``` bash
$ patronictl -c postgres0.yml pause batman --wait
'pause' request sent, waiting until it is recognized by all nodes
Success: cluster management is paused
```

<a id="patronictl_pause_description"></a>
### patronictl query

<a id="patronictl_pause_parameters"></a>
#### 语法

```
query
  [ CLUSTER_NAME ]
  [ --group CITUS_GROUP ]
  [ { { -r | --role } { leader | primary | standby-leader | replica | standby | any } | { -m | --member } MEMBER_NAME } ]
  [ { -d | --dbname } DBNAME ]
  [ { -U | --username } USERNAME ]
  [ --password ]
  [ --format { pretty | tsv | json | yaml } ]
  [ { { -f | --file } FILE_NAME | { -c | --command } SQL_COMMAND } ]
  [ --delimiter ]
  [ { -W | { -w | --watch } TIME } ]
```

<a id="patronictl_pause_examples"></a>
#### 描述

**`patronictl query`** 在 Patroni 集群指定成员上执行 SQL 命令或脚本。

<a id="patronictl_query"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
查询指定 Citus 组。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`-r`** / **`--role`**
选择具有指定角色的成员。

角色可以是以下之一：

- **`leader`**：普通 Patroni 集群或备用 Patroni 集群的领导者；
- **`primary`**：普通 Patroni 集群的领导者；
- **`standby-leader`**：备用 Patroni 集群的领导者；
- **`replica`**：Patroni 集群的从库；
- **`standby`**：同 **`replica`**；
- **`any`**：任意角色，与省略此参数效果相同。

**`-m`** / **`--member`**
选择具有指定名称的成员。

**`MEMBER_NAME`** 为要选择的成员名称。

**`-d`** / **`--dbname`**
连接并执行查询的目标数据库，未指定时默认使用 **`USERNAME`**。

**`-U`** / **`--username`**
连接数据库使用的用户名，未指定时默认使用运行 **`patronictl query`** 的操作系统用户。

**`--password`**
提示输入连接密码。也可通过 **`~/.pgpass`** 文件或 **`PGPASSWORD`** 环境变量提供密码（Patroni 使用 **`libpq`**）。

**`--format`**
查询输出格式，可以是：

- **`pretty`**：美观的表格形式；
- **`tsv`**：**`\t`** 分隔的表格形式；
- **`json`**：JSON 格式；
- **`yaml`**：YAML 格式。

默认为 **`tsv`**。

**`-f`** / **`--file`**
从指定文件读取并执行 SQL 命令。

**`-c`** / **`--command`**
执行指定的 SQL 命令。

**`--delimiter`**
以 **`tsv`** 格式输出时使用的列分隔符，默认为 **`\t`**。

**`-W`**
每 2 秒自动重新执行查询。

**`-w`** / **`--watch`**
按指定间隔（秒）自动重新执行查询。

<a id="patronictl_query_synopsis"></a>
#### 示例

以 **`postgres`** 用户执行 SQL 命令，并要求输入密码：

``` bash
$ patronictl -c postgres0.yml query batman -U postgres --password -c "SELECT now()"
Password:
now
2023-09-12 18:10:53.228084+00:00
```

以 **`postgres`** 用户执行 SQL 命令，从 **`libpq`** 环境变量获取密码：

``` bash
$ PGPASSWORD=patroni patronictl -c postgres0.yml query batman -U postgres -c "SELECT now()"
now
2023-09-12 18:11:37.639500+00:00
```

执行 SQL 命令并以 **`pretty`** 格式每 2 秒打印一次：

``` bash
$ patronictl -c postgres0.yml query batman -c "SELECT now()" --format pretty -W
+----------------------------------+
| now                              |
+----------------------------------+
| 2023-09-12 18:12:16.716235+00:00 |
+----------------------------------+
+----------------------------------+
| now                              |
+----------------------------------+
| 2023-09-12 18:12:18.732645+00:00 |
+----------------------------------+
+----------------------------------+
| now                              |
+----------------------------------+
| 2023-09-12 18:12:20.750573+00:00 |
+----------------------------------+
```

在数据库 **`test`** 上执行 SQL 命令并以 YAML 格式打印输出：

``` bash
$ patronictl -c postgres0.yml query batman -d test -c "SELECT now() AS column_1, 'test' AS column_2" --format yaml
- column_1: 2023-09-12 18:14:22.052060+00:00
  column_2: test
```

在成员 **`postgresql2`** 上执行 SQL 命令：

``` bash
$ patronictl -c postgres0.yml query batman -m postgresql2 -c "SHOW port"
port
5434
```

在任意备库上执行 SQL 命令：

``` bash
$ patronictl -c postgres0.yml query batman -r replica -c "SHOW port"
port
5433
```

<a id="patronictl_query_description"></a>
### patronictl reinit

<a id="patronictl_query_parameters"></a>
#### 语法

```
reinit
  CLUSTER_NAME
  [ MEMBER_NAME [, ... ] ]
  [ --group CITUS_GROUP ]
  [ --wait ]
  [ --force ]
  [ --from-leader ]
```

<a id="patronictl_query_examples"></a>
#### 描述

**`patronictl reinit`** 重新初始化 Patroni 集群从库成员管理的 PostgreSQL 备库实例。

<a id="patronictl_reinit"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

**`MEMBER_NAME`**
要重新初始化的从库成员名称，可同时指定多个，不指定则命令不执行任何操作。

**`--group`**
重新初始化指定 Citus 组的从库成员。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`--wait`**
等待备库重新初始化完成后再返回。

**`--force`**
跳过确认提示，适合在脚本中使用。

**`--from-leader`**
直接从领导者节点获取基础备份。

<a id="patronictl_reinit_synopsis"></a>
#### 示例

重新初始化集群所有从库成员（不等待完成）：

``` bash
$ patronictl -c postgres0.yml reinit batman postgresql1 postgresql2 --force
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  5 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
Success: reinitialize for member postgresql1
Success: reinitialize for member postgresql2
```

重新初始化 **`postgresql2`** 并等待完成：

``` bash
$ patronictl -c postgres0.yml reinit batman postgresql2 --wait --force
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  5 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
Success: reinitialize for member postgresql2
Waiting for reinitialize to complete on: postgresql2
Reinitialize is completed on: postgresql2
```

重新初始化 **`postgresql2`** 并直接从领导者节点获取基础备份：

``` bash
$ patronictl -c postgres0.yml reinit batman postgresql2 --from-leader
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  5 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
Success: reinitialize for member postgresql2
```

<a id="patronictl_reinit_description"></a>
### patronictl reload

<a id="patronictl_reinit_parameters"></a>
#### 语法

```
reload
  CLUSTER_NAME
  [ MEMBER_NAME [, ... ] ]
  [ --group CITUS_GROUP ]
  [ { -r | --role } { leader | primary | standby-leader | replica | standby | any } ]
  [ --force ]
```

<a id="patronictl_reinit_examples"></a>
#### 描述

**`patronictl reload`** 请求一个或多个 Patroni 成员重载本地配置。

同时也会对被管理的 PostgreSQL 实例触发 **`pg_ctl reload`**，即使没有配置发生变化。

<a id="patronictl_reload"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

**`MEMBER_NAME`**
请求指定成员重载本地配置，可同时指定多个，不指定则针对所有成员。

**`--group`**
请求指定 Citus 组的成员重载。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`-r`** / **`--role`**
按角色筛选目标成员，角色可以是：

- **`leader`**：普通集群或备用集群的领导者；
- **`primary`**：普通集群的领导者；
- **`standby-leader`**：备用集群的领导者；
- **`replica`**：集群从库；
- **`standby`**：同 **`replica`**；
- **`any`**：任意角色（默认）。

**`--force`**
跳过确认提示，适合在脚本中使用。

<a id="patronictl_reload_synopsis"></a>
#### 示例

重载集群所有成员的本地配置：

``` bash
$ patronictl -c postgres0.yml reload batman --force
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  5 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
Reload request received for member postgresql0 and will be processed within 10 seconds
Reload request received for member postgresql1 and will be processed within 10 seconds
Reload request received for member postgresql2 and will be processed within 10 seconds
```

<a id="patronictl_reload_description"></a>
### patronictl remove

<a id="patronictl_reload_parameters"></a>
#### 语法

```
remove
  CLUSTER_NAME
  [ --group CITUS_GROUP ]
  [ { -f | --format } { pretty | tsv | json | yaml } ]
```

<a id="patronictl_reload_examples"></a>
#### 描述

**`patronictl remove`** 从 DCS 中删除指定集群的所有信息，为交互式操作。

> [!WARNING]
> 此操作将永久清除 DCS 中该 Patroni 集群的所有数据。

<a id="patronictl_remove"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

**`--group`**
删除与指定 Citus 组相关的 Patroni 集群信息。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`-f`** / **`--format`**
确认提示中成员列表的输出格式，可以是 **`pretty`**（默认）、**`tsv`**、**`json`** 或 **`yaml`**。

<a id="patronictl_remove_synopsis"></a>
#### 示例

从 DCS 中删除 Patroni 集群 **`batman`** 的信息：

``` bash
$ patronictl -c postgres0.yml remove batman
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  5 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  5 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
Please confirm the cluster name to remove: batman
You are about to remove all information in DCS for batman, please type: "Yes I am aware": Yes I am aware
This cluster currently is healthy. Please specify the leader name to continue: postgresql0
```

<a id="patronictl_remove_description"></a>
### patronictl restart

<a id="patronictl_remove_parameters"></a>
#### 语法

```
restart
  CLUSTER_NAME
  [ MEMBER_NAME [, ...] ]
  [ --group CITUS_GROUP ]
  [ { -r | --role } { leader | primary | standby-leader | replica | standby | any } ]
  [ --any ]
  [ --pg-version PG_VERSION ]
  [ --pending ]
  [ --timeout TIMEOUT ]
  [ --scheduled TIMESTAMP ]
  [ --force ]
```

<a id="patronictl_remove_examples"></a>
#### 描述

**`patronictl restart`** 请求重启 Patroni 集群指定成员管理的 PostgreSQL 实例，可以立即执行，也可以调度在稍后执行。

<a id="patronictl_restart"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

**`--group`**
重启指定 Citus 组的成员。

**`-r`** / **`--role`**
按角色筛选目标成员，角色可以是：

- **`leader`**：普通集群或备用集群的领导者；
- **`primary`**：普通集群的领导者；
- **`standby-leader`**：备用集群的领导者；
- **`replica`**：集群从库；
- **`standby`**：同 **`replica`**；
- **`any`**：任意角色（默认）。

**`--any`**
从符合筛选条件的节点中随机选择一个进行重启。

**`--pg-version`**
仅选择 PostgreSQL 版本低于指定版本的成员。

**`--pending`**
仅选择标记为 **`Pending restart`** 的成员。

**`--timeout`**
若重启超过指定秒数，则中止重启，并在问题发生在主库时触发故障转移。

**`--scheduled`**
在指定时间戳调度重启，须以明确的格式指定（建议包含时区信息），也可使用字面量 **`now`** 立即执行。

**`--force`**
跳过确认提示，适合在脚本中使用。

<a id="patronictl_restart_synopsis"></a>
#### 示例

立即重启集群所有成员：

``` bash
$ patronictl -c postgres0.yml restart batman --force
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  6 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  6 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  6 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
Success: restart on member postgresql0
Success: restart on member postgresql1
Success: restart on member postgresql2
```

立即重启集群中的一个随机成员：

``` bash
$ patronictl -c postgres0.yml restart batman --any --force
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  6 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  6 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  6 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
Success: restart on member postgresql1
```

调度在 **`2023-09-13T18:00-03:00`** 执行重启：

``` bash
$ patronictl -c postgres0.yml restart batman --scheduled 2023-09-13T18:00-03:00 --force
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  6 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  6 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  6 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
Success: restart scheduled on member postgresql0
Success: restart scheduled on member postgresql1
Success: restart scheduled on member postgresql2
```

<a id="patronictl_restart_description"></a>
### patronictl resume

<a id="patronictl_restart_parameters"></a>
#### 语法

```
resume
  [ CLUSTER_NAME ]
  [ --group CITUS_GROUP ]
  [ --wait ]
```

<a id="patronictl_restart_examples"></a>
#### 描述

**`patronictl resume`** 将 Patroni 集群从维护模式中恢复，重新启用自动故障转移。

<a id="patronictl_resume"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
恢复指定 Citus 组。

**`CITUS_GROUP`** 为 Citus 组 ID。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`citus.group`** 配置中获取（如果存在）。

**`--wait`**
等待所有 Patroni 成员均退出暂停状态后再返回。

<a id="patronictl_resume_synopsis"></a>
#### 示例

将集群从维护模式中恢复：

``` bash
$ patronictl -c postgres0.yml resume batman --wait
'resume' request sent, waiting until it is recognized by all nodes
Success: cluster management is resumed
```

<a id="patronictl_resume_description"></a>
### patronictl show-config

<a id="patronictl_resume_parameters"></a>
#### 语法

```
show-config
  [ CLUSTER_NAME ]
  [ --group CITUS_GROUP ]
```

<a id="patronictl_resume_examples"></a>
#### 描述

**`patronictl show-config`** 显示存储在 DCS 中的集群动态配置。

<a id="patronictl_show_config"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
显示指定 Citus 组的动态配置。

**`CITUS_GROUP`** 为 Citus 组 ID。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`citus.group`** 配置中获取（如果存在）。

<a id="patronictl_show_config_synopsis"></a>
#### 示例

显示集群 **`batman`** 的动态配置：

``` bash
$ patronictl -c postgres0.yml show-config batman
loop_wait: 10
postgresql:
  parameters:
    max_connections: 250
  pg_hba:
  - host replication replicator 127.0.0.1/32 md5
  - host all all 0.0.0.0/0 md5
  use_pg_rewind: true
retry_timeout: 10
ttl: 30
```

<a id="patronictl_show_config_description"></a>
### patronictl switchover

<a id="patronictl_show_config_parameters"></a>
#### 语法

```
switchover
  [ CLUSTER_NAME ]
  [ --group CITUS_GROUP ]
  [ { --leader | --primary } LEADER_NAME ]
  --candidate CANDIDATE_NAME
  [ --force ]
```

<a id="patronictl_show_config_examples"></a>
#### 描述

**`patronictl switchover`** 在集群中执行主从切换，适用于集群健康的场景（存在领导者，同步集群中有可用的同步备库）。

> [!NOTE]
> 若集群不健康，可考虑使用 **`patronictl failover`**。

<a id="patronictl_switchover"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
在指定 Citus 组中执行主从切换。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`--leader`** / **`--primary`**
指定切换时要降级的当前领导者名称。

**`--candidate`**
指定要提升为主库的候选节点名称。

**`--scheduled`**
在指定时间戳调度主从切换，须以明确的格式指定（建议包含时区信息），也可使用字面量 **`now`** 立即执行。

**`--force`**
跳过确认提示，适合在脚本中使用。

<a id="patronictl_switchover_synopsis"></a>
#### 示例

切换到节点 **`postgresql2`**：

``` bash
$ patronictl -c postgres0.yml switchover batman --leader postgresql0 --candidate postgresql2 --force
Current cluster topology
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  6 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  6 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  6 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
2023-09-13 14:15:23.07497 Successfully switched over to "postgresql2"
+ Cluster: batman (7277694203142172922) -+---------+----+-------------+---------+------------+---------+
| Member      | Host           | Role    | State   | TL | Receive LSN |     Lag | Replay LSN |     Lag |
+-------------+----------------+---------+---------+----+-------------+---------+------------+---------+
| postgresql0 | 127.0.0.1:5432 | Replica | stopped |    |     unknown | unknown |    unknown | unknown |
| postgresql1 | 127.0.0.1:5433 | Replica | running |  6 |   0/4000188 |       0 |  0/4000188 |       0 |
| postgresql2 | 127.0.0.1:5434 | Leader  | running |  6 |             |         |            |         |
+-------------+----------------+---------+---------+----+-------------+---------+------------+---------+
```

调度 **`postgresql0`** 和 **`postgresql2`** 之间的主从切换于 **`2023-09-13T18:00:00-03:00`** 执行：

``` bash
$ patronictl -c postgres0.yml switchover batman --leader postgresql0 --candidate postgresql2 --scheduled 2023-09-13T18:00-03:00 --force
Current cluster topology
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  8 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  8 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  8 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
2023-09-13 14:18:11.20661 Switchover scheduled
+ Cluster: batman (7277694203142172922) -+-----------+----+-------------+-----+------------+-----+
| Member      | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0 | 127.0.0.1:5432 | Leader  | running   |  8 |             |     |            |     |
| postgresql1 | 127.0.0.1:5433 | Replica | streaming |  8 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| postgresql2 | 127.0.0.1:5434 | Replica | streaming |  8 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+-------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
Switchover scheduled at: 2023-09-13T18:00:00-03:00
                    from: postgresql0
                    to: postgresql2
```

<a id="patronictl_switchover_description"></a>
### patronictl topology

<a id="patronictl_switchover_parameters"></a>
#### 语法

```
topology
  [ CLUSTER_NAME [, ... ] ]
  [ --group CITUS_GROUP ]
  [ { -W | { -w | --watch } TIME } ]
```

<a id="patronictl_switchover_examples"></a>
#### 描述

**`patronictl topology`** 以树形视图显示 Patroni 集群及其成员的信息，按复制关系呈现节点层级。

输出字段含义与 **`patronictl list`** 相同，以下为 **`topology`** 特有的说明：

**`Member`**
Patroni 成员名称。根据复制连接关系以树形视图显示成员层级。

**`System identifier`**
PostgreSQL 系统标识符，显示在表格标题中。

**`Pending restart`**
**`*`** 表示节点需要重启以应用某些 PostgreSQL 配置变更，在节点有待重启时显示。

**`Scheduled restart`**
为该成员调度重启的时间戳，在节点有已调度重启时显示。

**`Tags`**
该成员设置的标签，在节点有自定义标签或非默认值的内置标签时显示。

**`Scheduled switchover`**
已调度主从切换的时间戳，显示在表格底部，仅在有已调度切换时显示。

**`Maintenance mode`**
集群自动故障转移当前是否已暂停，显示在表格底部，仅在集群已暂停时显示。

<a id="patronictl_topology"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

若未指定，[patronictl](/docs/patroni/patronictl#patronictl) 将尝试从 **`scope`** 配置中获取（如果存在）。

**`--group`**
显示指定 Citus 组成员的信息。

**`CITUS_GROUP`** 为 Citus 组 ID。

**`-W`**
每 2 秒自动刷新信息。

**`-w`** / **`--watch`**
按指定间隔（秒）自动刷新信息。

<a id="patronictl_topology_synopsis"></a>
#### 示例

显示集群 **`batman`** 的拓扑结构（**`postgresql1`** 和 **`postgresql2`** 均从 **`postgresql0`** 复制）：

``` bash
$ patronictl -c postgres0.yml topology batman
+ Cluster: batman (7277694203142172922) ---+-----------+----+-------------+-----+------------+-----+
| Member        | Host           | Role    | State     | TL | Receive LSN | Lag | Replay LSN | Lag |
+---------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
| postgresql0   | 127.0.0.1:5432 | Leader  | running   |  8 |             |     |            |     |
| + postgresql1 | 127.0.0.1:5433 | Replica | streaming |  8 |   0/40004E8 |   0 |  0/40004E8 |   0 |
| + postgresql2 | 127.0.0.1:5434 | Replica | streaming |  8 |   0/40004E8 |   0 |  0/40004E8 |   0 |
+---------------+----------------+---------+-----------+----+-------------+-----+------------+-----+
```

<a id="patronictl_topology_description"></a>
### patronictl version

<a id="patronictl_topology_parameters"></a>
#### 语法

```
version
  [ CLUSTER_NAME [, ... ] ]
  [ MEMBER_NAME [, ... ] ]
  [ --group CITUS_GROUP ]
```

<a id="patronictl_topology_examples"></a>
#### 描述

**`patronictl version`** 显示 [patronictl](/docs/patroni/patronictl#patronictl) 自身的版本，也可同时显示 Patroni 集群及其成员的版本信息。

<a id="patronictl_version"></a>
#### 参数

**`CLUSTER_NAME`**
Patroni 集群名称。

**`MEMBER_NAME`**
Patroni 集群成员名称。

**`--group`**
仅查询指定 Citus 组的集群版本信息。

**`CITUS_GROUP`** 为 Citus 组 ID。

<a id="patronictl_version_synopsis"></a>
#### 示例

获取 [patronictl](/docs/patroni/patronictl#patronictl) 自身的版本：

``` bash
$ patronictl -c postgres0.yml version
patronictl version 4.0.0
```

获取 [patronictl](/docs/patroni/patronictl#patronictl) 版本及集群 **`batman`** 所有成员的版本：

``` bash
$ patronictl -c postgres0.yml version batman
patronictl version 4.0.0

postgresql0: Patroni 4.0.0 PostgreSQL 16.4
postgresql1: Patroni 4.0.0 PostgreSQL 16.4
postgresql2: Patroni 4.0.0 PostgreSQL 16.4
```

获取 [patronictl](/docs/patroni/patronictl#patronictl) 版本及集群 **`batman`** 中成员 **`postgresql1`** 和 **`postgresql2`** 的版本：

``` bash
$ patronictl -c postgres0.yml version batman postgresql1 postgresql2
patronictl version 4.0.0

postgresql1: Patroni 4.0.0 PostgreSQL 16.4
postgresql2: Patroni 4.0.0 PostgreSQL 16.4
```
