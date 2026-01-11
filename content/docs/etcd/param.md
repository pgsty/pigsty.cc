---
title: 参数列表
weight: 3420
description: ETCD 模块提供了 13 个配置参数，用于精细控制集群的行为表现。
icon: fa-solid fa-sliders
categories: [参考]
---

ETCD 模块的参数列表，共有 **13** 个参数，分为两个部分：

- [**`ETCD`**](#etcd)：10 个参数，用于 etcd 集群的部署与配置
- [**`ETCD_REMOVE`**](#etcd_remove)：3 个参数，控制 etcd 集群的移除

{{% alert title="架构变化：Pigsty v3.6+" color="info" %}}
自 Pigsty v3.6 起，`etcd.yml` 剧本不再包含移除功能，移除相关参数已迁移至独立的 `etcd_remove` 角色。v4.0 起默认启用 RBAC 认证，新增 `etcd_root_password` 参数。
{{% /alert %}}


----------------

## 参数概览

[`ETCD`](#etcd) 参数组用于 etcd 集群的部署与配置，包括实例标识、集群名称、数据目录、端口以及认证密码。

| 参数                                                    |     类型     |  级别  | 说明                         |
|:------------------------------------------------------|:----------:|:----:|:---------------------------|
| [`etcd_seq`](#etcd_seq)                               |   `int`    | `I`  | etcd 实例标识符，必填              |
| [`etcd_cluster`](#etcd_cluster)                       |  `string`  | `C`  | etcd 集群名，默认固定为 etcd        |
| [`etcd_learner`](#etcd_learner)                       |   `bool`   | `I/A`| 是否以 learner 模式初始化 etcd 实例？ |
| [`etcd_data`](#etcd_data)                             |   `path`   | `C`  | etcd 数据目录，默认为 /data/etcd   |
| [`etcd_port`](#etcd_port)                             |   `port`   | `C`  | etcd 客户端端口，默认为 2379        |
| [`etcd_peer_port`](#etcd_peer_port)                   |   `port`   | `C`  | etcd 同伴端口，默认为 2380         |
| [`etcd_init`](#etcd_init)                             |   `enum`   | `C`  | etcd 初始集群状态，新建或已存在         |
| [`etcd_election_timeout`](#etcd_election_timeout)     |   `int`    | `C`  | etcd 选举超时，默认为 1000ms       |
| [`etcd_heartbeat_interval`](#etcd_heartbeat_interval) |   `int`    | `C`  | etcd 心跳间隔，默认为 100ms        |
| [`etcd_root_password`](#etcd_root_password)           | `password` | `G`  | etcd root 用户密码，用于 RBAC 认证  |
{.full-width}

[`ETCD_REMOVE`](#etcd_remove) 参数组控制 etcd 集群的移除行为，包括防误删保险、数据清理以及软件包卸载。

| 参数                                  |   类型   |   级别    | 说明                            |
|:------------------------------------|:------:|:-------:|:------------------------------|
| [`etcd_safeguard`](#etcd_safeguard) | `bool` | `G/C/A` | etcd 防误删保险，阻止清除正在运行的 etcd 实例？ |
| [`etcd_rm_data`](#etcd_rm_data)     | `bool` | `G/C/A` | 移除时是否删除 etcd 数据？默认为 true      |
| [`etcd_rm_pkg`](#etcd_rm_pkg)       | `bool` | `G/C/A` | 移除时是否卸载 etcd 软件包？默认为 false    |
{.full-width}



--------

## `ETCD`

本节包含 [`etcd`](https://github.com/pgsty/pigsty/blob/main/roles/etcd/defaults/main.yml) 角色的参数，
这些是 [`etcd.yml`](/docs/etcd/playbook#etcdyml) 剧本使用的操作标志参数。

相关参数定义于 [`roles/etcd/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/etcd/defaults/main.yml)

```yaml
#etcd_seq: 1                      # etcd 实例标识符，需要显式指定（必填）
etcd_cluster: etcd                # etcd 集群和组名称，默认为 etcd
etcd_learner: false               # etcd 实例是否以 learner 模式运行？默认为 false
etcd_data: /data/etcd             # etcd 数据目录，默认为 /data/etcd
etcd_port: 2379                   # etcd 客户端端口，默认为 2379
etcd_peer_port: 2380              # etcd 对等端口，默认为 2380
etcd_init: new                    # etcd 初始集群状态，new 或 existing
etcd_election_timeout: 1000       # etcd 选举超时，默认为 1000ms
etcd_heartbeat_interval: 100      # etcd 心跳间隔，默认为 100ms
etcd_root_password: Etcd.Root     # etcd root 用户密码，用于 RBAC 认证（请修改！）
```



### `etcd_seq`

参数名称： `etcd_seq`， 类型： `int`， 层次：`I`

etcd 实例标号， 这是必选参数，必须为每一个 etcd 实例指定一个唯一的标号。

以下是一个3节点etcd集群的示例，分配了 1 ～ 3 三个标号。

```yaml
etcd: # dcs service for postgres/patroni ha consensus
  hosts:  # 1 node for testing, 3 or 5 for production
    10.10.10.10: { etcd_seq: 1 }  # etcd_seq required
    10.10.10.11: { etcd_seq: 2 }  # assign from 1 ~ n
    10.10.10.12: { etcd_seq: 3 }  # use odd numbers
  vars: # cluster level parameter override roles/etcd
    etcd_cluster: etcd  # mark etcd cluster name etcd
    etcd_safeguard: false # safeguard against purging
```



### `etcd_cluster`

参数名称： `etcd_cluster`， 类型： `string`， 层次：`C`

etcd 集群 & 分组名称，默认值为硬编码值 `etcd`。

当您想要部署另外的 etcd 集群备用时，可以修改此参数并使用其他集群名。




### `etcd_learner`

参数名称： `etcd_learner`， 类型： `bool`， 层次：`I/A`

是否以 learner 模式初始化 etcd 实例？默认值为 `false`。

当设置为 `true` 时，etcd 实例将以 learner（学习者）模式初始化，这意味着该实例不能在 etcd 集群中参与投票选举。

**使用场景**：

- **集群扩容**：向现有集群添加新成员时，使用 learner 模式可以避免在数据同步完成前影响集群的仲裁
- **安全迁移**：在滚动升级或迁移场景中，先以 learner 模式加入，确认数据同步完成后再提升

**操作流程**：

1. 设置 `etcd_learner: true`，以 learner 模式初始化新成员
2. 等待数据同步完成（通过 `etcdctl endpoint status` 检查）
3. 使用 `etcdctl member promote <member_id>` 将其提升为正式成员

{{% alert title="注意" color="info" %}}
Learner 实例不计入集群仲裁成员数。例如，3 节点集群中有 1 个 learner，实际投票成员数为 2，不能容忍任何节点故障。
{{% /alert %}}






### `etcd_data`

参数名称： `etcd_data`， 类型： `path`， 层次：`C`

etcd 数据目录，默认为`/data/etcd` 。






### `etcd_port`

参数名称： `etcd_port`， 类型： `port`， 层次：`C`

etcd 客户端端口号，默认为`2379`。





### `etcd_peer_port`

参数名称： `etcd_peer_port`， 类型： `port`， 层次：`C`

etcd peer 端口，默认为 `2380` 。





### `etcd_init`

参数名称： `etcd_init`， 类型： `enum`， 层次：`C`

etcd 初始集群状态，可以是 `new` 或 `existing`，默认值：`new`。

**可选值说明**：

| 值          | 说明           | 使用场景       |
|:-----------|:-------------|:-----------|
| `new`      | 创建新的 etcd 集群 | 首次部署、集群重建  |
| `existing` | 加入现有 etcd 集群 | 集群扩容、添加新成员 |
{.full-width}

**重要说明**：

{{% alert title="扩容时必须使用 existing" color="warning" %}}
向现有 etcd 集群添加新成员时，**必须**设置 `etcd_init=existing`。否则新实例会尝试创建独立的新集群，导致脑裂或初始化失败。
{{% /alert %}}

**使用示例**：

```bash
# 创建新集群（默认行为）
./etcd.yml

# 向现有集群添加新成员
./etcd.yml -l <new_ip> -e etcd_init=existing

# 或使用便捷脚本（自动设置 etcd_init=existing）
bin/etcd-add <new_ip>
```





### `etcd_election_timeout`

参数名称： `etcd_election_timeout`， 类型： `int`， 层次：`C`

etcd 选举超时，默认为 `1000` (毫秒)，也就是 1 秒。





### `etcd_heartbeat_interval`

参数名称： `etcd_heartbeat_interval`， 类型： `int`， 层次：`C`

etcd心跳间隔，默认为 `100` (毫秒)。




### `etcd_root_password`

参数名称： `etcd_root_password`， 类型： `password`， 层次：`G`

etcd root 用户密码，用于 RBAC 认证，默认值为 `Etcd.Root`。

Pigsty v4.0 默认启用 etcd 的 RBAC（基于角色的访问控制）认证机制。在集群初始化时，`etcd_auth` 任务会自动创建 root 用户并启用认证。

**密码存储位置**：

- 密码存储在 `/etc/etcd/etcd.pass` 文件中
- 文件权限为 `0640`（root 所有，etcd 组可读）
- etcdctl 环境变量脚本 `/etc/profile.d/etcdctl.sh` 会自动读取此文件

**与其他组件的配合**：

- Patroni 通过 [`pg_etcd_password`](/docs/pgsql/param#pg_etcd_password) 参数配置连接 etcd 的密码
- 如果 `pg_etcd_password` 为空，Patroni 会使用集群名称作为密码（不推荐）
- VIP-Manager 也需要使用相同的认证信息连接 etcd

**安全建议**：

{{% alert title="生产环境安全" color="warning" %}}
在生产环境中，**强烈建议修改默认密码** `Etcd.Root`。可以在全局配置或集群配置中设置：

```yaml
etcd_root_password: 'YourSecurePassword'
```

使用 `configure -g` 参数可以自动生成并替换 `etcd_root_password`

{{% /alert %}}





--------

## `ETCD_REMOVE`

本节包含 [`etcd_remove`](https://github.com/pgsty/pigsty/blob/main/roles/etcd_remove/defaults/main.yml) 角色的参数，
这些是 [`etcd-rm.yml`](/docs/etcd/playbook#etcd-rmyml) 剧本使用的操作标志参数。

相关参数定义于 [`roles/etcd_remove/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/etcd_remove/defaults/main.yml)

```yaml
etcd_safeguard: false             # 防误删保险，阻止移除正在运行的 etcd 实例？
etcd_rm_data: true                # 移除时是否删除 etcd 数据和配置文件？
etcd_rm_pkg: false                # 移除时是否卸载 etcd 软件包？
```



### `etcd_safeguard`

参数名称： `etcd_safeguard`， 类型： `bool`， 层次：`G/C/A`

防误删保险参数，防止清除正在运行的 etcd 实例？默认值为 `false`。

如果启用安全保险，[`etcd-rm.yml`](/docs/etcd/playbook#etcd-rmyml) 剧本在检测到正在运行的 etcd 实例时会主动中止，从而避免意外删除正在使用的 etcd 集群。

**使用建议**：

| 环境    | 建议值     | 说明          |
|:------|:--------|:------------|
| 开发/测试 | `false` | 方便快速重建和测试   |
| 生产环境  | `true`  | 防止误操作导致服务中断 |
{.full-width}

紧急情况下，可以使用命令行参数覆盖配置：

```bash
./etcd-rm.yml -e etcd_safeguard=false
```




### `etcd_rm_data`

参数名称： `etcd_rm_data`， 类型： `bool`， 层次：`G/C/A`

移除时是否删除 etcd 数据和配置文件？默认值为 `true`。

启用此选项后，[`etcd-rm.yml`](/docs/etcd/playbook#etcd-rmyml) 剧本在移除集群或成员时会同时删除以下内容：

- `/etc/etcd/` - 配置目录（包括证书和密码文件）
- `/var/lib/etcd/` - 备用数据目录
- `{{ etcd_data }}` - 主数据目录（默认 `/data/etcd`）
- `{{ systemd_dir }}/etcd.service` - Systemd 服务单元文件
- `/etc/profile.d/etcdctl.sh` - 客户端环境变量脚本
- `/etc/vector/etcd.yaml` - Vector 日志采集配置

**使用场景**：

| 场景 | 建议值 | 说明 |
|:----|:------|:-----|
| 彻底移除 | `true`（默认） | 完全清理，释放磁盘空间 |
| 仅停止服务 | `false` | 保留数据，便于故障排查或恢复 |
{.full-width}

```bash
# 仅停止服务，保留数据
./etcd-rm.yml -e etcd_rm_data=false
```




### `etcd_rm_pkg`

参数名称： `etcd_rm_pkg`， 类型： `bool`， 层次：`G/C/A`

移除时是否卸载 etcd 软件包？默认值为 `false`。

启用此选项后，[`etcd-rm.yml`](/docs/etcd/playbook#etcd-rmyml) 剧本在移除集群或成员时会同时卸载 etcd 软件包。

**使用场景**：

| 场景   | 建议值         | 说明           |
|:-----|:------------|:-------------|
| 常规移除 | `false`（默认） | 保留软件包，便于快速重建 |
| 彻底清理 | `true`      | 完全卸载，节省磁盘空间  |
{.full-width}

```bash
# 移除时同时卸载软件包
./etcd-rm.yml -e etcd_rm_pkg=true
```

{{% alert title="提示" color="info" %}}
通常不需要卸载 etcd 软件包。保留软件包可以加快后续的重新部署速度，因为不需要重新下载和安装。
{{% /alert %}}


