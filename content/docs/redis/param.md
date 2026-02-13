---
title: 参数列表
weight: 3820
description: REDIS 模块提供了 18 个部署参数 + 3 个移除参数
icon: fa-solid fa-sliders
categories: [参考]
---

REDIS 模块的参数列表，共有 **21** 个参数，分为两个部分：

- [**`REDIS`**](#redis)：18 个参数，用于 Redis 集群的部署与配置
- [**`REDIS_REMOVE`**](#redis_remove)：3 个参数，控制 Redis 集群的移除

{{% alert title="架构变化：Pigsty v3.6+" color="info" %}}
自 Pigsty v3.6 起，`redis.yml` 剧本不再包含移除功能，移除相关参数已迁移至独立的 `redis_remove` 角色和 `redis-rm.yml` 剧本。
{{% /alert %}}


----------------

## 参数概览

[`REDIS`](#redis) 参数组用于 Redis 集群的部署与配置，包括身份标识、实例定义、工作模式、内存配置、持久化以及监控。

| 参数                                                  |     类型     |   级别    | 说明                                    |
|:----------------------------------------------------|:----------:|:-------:|:--------------------------------------|
| [`redis_cluster`](#redis_cluster)                   |  `string`  |   `C`   | Redis数据库集群名称，必选身份参数                   |
| [`redis_instances`](#redis_instances)               |   `dict`   |   `I`   | Redis节点上的实例定义                         |
| [`redis_node`](#redis_node)                         |   `int`    |   `I`   | Redis节点编号，正整数，集群内唯一，必选身份参数            |
| [`redis_fs_main`](#redis_fs_main)                   |   `path`   |   `C`   | Redis主数据目录，默认为 `/data`                |
| [`redis_exporter_enabled`](#redis_exporter_enabled) |   `bool`   |   `C`   | Redis Exporter 是否启用？                  |
| [`redis_exporter_port`](#redis_exporter_port)       |   `port`   |   `C`   | Redis Exporter监听端口                    |
| [`redis_exporter_options`](#redis_exporter_options) |  `string`  |  `C/I`  | Redis Exporter命令参数                    |
| [`redis_mode`](#redis_mode)                         |   `enum`   |   `C`   | Redis集群模式：sentinel，cluster，standalone |
| [`redis_conf`](#redis_conf)                         |  `string`  |   `C`   | Redis配置文件模板，sentinel 除外               |
| [`redis_bind_address`](#redis_bind_address)         |    `ip`    |   `C`   | Redis监听地址，默认值 `0.0.0.0`，留空则绑定主机IP       |
| [`redis_max_memory`](#redis_max_memory)             |   `size`   |  `C/I`  | Redis可用的最大内存                          |
| [`redis_mem_policy`](#redis_mem_policy)             |   `enum`   |   `C`   | Redis内存逐出策略                           |
| [`redis_password`](#redis_password)                 | `password` |   `C`   | Redis密码，默认留空则禁用密码                     |
| [`redis_rdb_save`](#redis_rdb_save)                 | `string[]` |   `C`   | Redis RDB 保存指令，字符串列表，空数组则禁用RDB        |
| [`redis_aof_enabled`](#redis_aof_enabled)           |   `bool`   |   `C`   | Redis AOF 是否启用？                       |
| [`redis_rename_commands`](#redis_rename_commands)   |   `dict`   |   `C`   | Redis危险命令重命名列表                        |
| [`redis_cluster_replicas`](#redis_cluster_replicas) |   `int`    |   `C`   | Redis原生集群中每个主库配几个从库？                  |
| [`redis_sentinel_monitor`](#redis_sentinel_monitor) | `master[]` |   `C`   | Redis哨兵监控的主库列表，只在哨兵集群上使用              |
{.full-width}

[`REDIS_REMOVE`](#redis_remove) 参数组控制 Redis 集群的移除行为，包括防误删保险、数据清理以及软件包卸载。

| 参数                                    |   类型   |   级别    | 说明                         |
|:--------------------------------------|:------:|:-------:|:---------------------------|
| [`redis_safeguard`](#redis_safeguard) | `bool` | `G/C/A` | 禁止移除正在运行的Redis实例           |
| [`redis_rm_data`](#redis_rm_data)     | `bool` | `G/C/A` | 移除Redis实例时是否一并移除数据目录？      |
| [`redis_rm_pkg`](#redis_rm_pkg)       | `bool` | `G/C/A` | 移除Redis实例时是否卸载Redis软件包？    |
{.full-width}



--------

## 默认参数

`REDIS`：18 个参数，定义于 [`roles/redis/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/redis/defaults/main.yml)

```yaml
#-----------------------------------------------------------------
# REDIS
#-----------------------------------------------------------------
#redis_cluster:             <集群> # Redis数据库集群名称，必选身份参数
#redis_node: 1              <节点> # Redis节点编号，正整数，集群内唯一，必选身份参数
#redis_instances: {}        <节点> # Redis节点上的实例定义
redis_fs_main: /data              # Redis主数据目录，默认为 `/data`
redis_exporter_enabled: true      # Redis Exporter 是否启用？
redis_exporter_port: 9121         # Redis Exporter监听端口
redis_exporter_options: ''        # Redis Exporter命令参数
redis_mode: standalone            # Redis集群模式：sentinel，cluster，standalone
redis_conf: redis.conf            # Redis配置文件模板，sentinel 除外
redis_bind_address: '0.0.0.0'     # Redis监听地址，默认 `0.0.0.0`，留空则会绑定主机IP
redis_max_memory: 1GB             # Redis可用的最大内存
redis_mem_policy: allkeys-lru     # Redis内存逐出策略
redis_password: ''                # Redis密码，默认留空则禁用密码
redis_rdb_save: ['1200 1']        # Redis RDB 保存指令，字符串列表，空数组则禁用RDB
redis_aof_enabled: false          # Redis AOF 是否启用？
redis_rename_commands: {}         # Redis危险命令重命名列表
redis_cluster_replicas: 1         # Redis原生集群中每个主库配几个从库？
redis_sentinel_monitor: []        # Redis哨兵监控的主库列表，仅用于哨兵集群
```

`REDIS_REMOVE`：3 个参数，定义于 [`roles/redis_remove/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/redis_remove/defaults/main.yml)

```yaml
#-----------------------------------------------------------------
# REDIS_REMOVE
#-----------------------------------------------------------------
redis_safeguard: false            # 禁止移除正在运行的Redis实例
redis_rm_data: true               # 移除Redis实例时是否一并移除数据目录？
redis_rm_pkg: false               # 移除Redis实例时是否卸载Redis软件包？
```



--------

## `REDIS`

本节包含 [`redis`](https://github.com/pgsty/pigsty/blob/main/roles/redis/defaults/main.yml) 角色的参数，
这些是 [`redis.yml`](/docs/redis/playbook#redisyml) 剧本使用的操作标志参数。


### `redis_cluster`

参数名称： `redis_cluster`， 类型： `string`， 层次：`C`

身份参数，必选参数，必须显式在集群层面配置，将用作集群内资源的命名空间。

需要遵循特定命名规则：`[a-z][a-z0-9-]*`，以兼容不同约束对身份标识的要求，建议使用`redis-`作为集群名前缀。





### `redis_node`

参数名称： `redis_node`， 类型： `int`， 层次：`I`

Redis节点序列号，身份参数，必选参数，必须显式在节点（Host）层面配置。

自然数，在集群中应当是唯一的，用于区别与标识集群内的不同节点，从0或1开始分配。





### `redis_instances`

参数名称： `redis_instances`， 类型： `dict`， 层次：`I`

当前 Redis 节点上的 Redis 实例定义，必选参数，必须显式在节点（Host）层面配置。

内容为JSON KV对象格式。Key为数值类型端口号，Value为该实例特定的JSON配置项。

```yaml
redis-test: # redis native cluster: 3m x 3s
  hosts:
    10.10.10.12: { redis_node: 1 ,redis_instances: { 6379: { } ,6380: { } ,6381: { } } }
    10.10.10.13: { redis_node: 2 ,redis_instances: { 6379: { } ,6380: { } ,6381: { } } }
  vars: { redis_cluster: redis-test ,redis_password: 'redis.test' ,redis_mode: cluster, redis_max_memory: 32MB }
```

每一个Redis实例在对应节点上监听一个唯一端口，实例配置项中`replica_of` 用于设置一个实例的上游主库地址，构建主从复制关系。

```yaml
redis_instances:
    6379: {}
    6380: { replica_of: '10.10.10.13 6379' }
    6381: { replica_of: '10.10.10.13 6379' }
```






### `redis_fs_main`

参数名称： `redis_fs_main`， 类型： `path`， 层次：`C`

Redis使用的主数据盘挂载点，默认为`/data`，Pigsty会在该目录下创建`redis`目录，用于存放Redis数据。

所以实际存储数据的目录为 `/data/redis`，该目录的属主为操作系统用户 `redis`，内部结构详情请参考 [FHS：Redis](/docs/ref/fhs#redis-fhs)





### `redis_exporter_enabled`

参数名称： `redis_exporter_enabled`， 类型： `bool`， 层次：`C`

是否启用Redis监控组件 Redis Exporter？

默认启用，在每个Redis节点上部署一个，默认监听 [`redis_exporter_port`](#redis_exporter_port) `9121` 端口。所有本节点上 Redis 实例的监控指标都由它负责抓取。

将此参数设为 `false` 时，`roles/redis/tasks/exporter.yml` 仍会渲染配置文件，但会跳过 `redis_exporter` systemd 服务的启动步骤（`redis_exporter_launch` 任务带有 `when: redis_exporter_enabled|bool` 判断），可用于在节点上保留手工配置的 exporter。





### `redis_exporter_port`

参数名称： `redis_exporter_port`， 类型： `port`， 层次：`C`

Redis Exporter监听端口，默认值为：`9121`





### `redis_exporter_options`

参数名称： `redis_exporter_options`， 类型： `string`， 层次：`C/I`

传给 Redis Exporter 的额外命令行参数，会被渲染到 `/etc/default/redis_exporter` 中（参见 `roles/redis/tasks/exporter.yml`），默认为空字符串。`REDIS_EXPORTER_OPTS` 最终会附加到 systemd 服务的 `ExecStart=/bin/redis_exporter $REDIS_EXPORTER_OPTS`，可用于配置额外的抓取目标或过滤行为。






### `redis_mode`

参数名称： `redis_mode`， 类型： `enum`， 层次：`C`

Redis集群的工作模式，有三种选项：`standalone`, `cluster`, `sentinel`，默认值为 `standalone`

* `standalone`：默认，独立的Redis主从模式
* `cluster`： Redis原生集群模式
* `sentinel`：Redis高可用组件：哨兵

当使用`standalone`模式时，Pigsty会根据 `replica_of` 参数设置Redis主从复制关系。

当使用`cluster`模式时，Pigsty会根据 [`redis_cluster_replicas`](#redis_cluster_replicas) 参数使用所有定义的实例创建原生Redis集群。

当 `redis_mode=sentinel` 时，`redis.yml` 会执行 `redis-ha` 阶段（`redis.yml` 第 80~130 行）将 [`redis_sentinel_monitor`](#redis_sentinel_monitor) 中的目标批量下发到所有哨兵；当 `redis_mode=cluster` 时还会执行 `redis-join` 阶段（`redis.yml` 第 134~180 行）调用 `redis-cli --cluster create --cluster-yes ... --cluster-replicas {{ redis_cluster_replicas }}`。这两个阶段均在普通 `./redis.yml -l <cluster>` 中自动触发，也可以通过 `-t redis-ha` 或 `-t redis-join` 单独运行。





### `redis_conf`

参数名称： `redis_conf`， 类型： `string`， 层次：`C`

Redis 配置模板路径，Sentinel除外。

默认值：`redis.conf`，这是一个模板文件，位于 [`roles/redis/templates/redis.conf`](https://github.com/pgsty/pigsty/blob/main/roles/redis/templates/redis.conf)。

如果你想使用自己的 Redis 配置模板，你可以将它放在 `templates/` 目录中，并设置此参数为模板文件名。

注意： Redis Sentinel 使用的是另一个不同的模板文件，即 [`roles/redis/templates/redis-sentinel.conf`](https://github.com/pgsty/pigsty/blob/main/roles/redis/templates/redis-sentinel.conf)。





### `redis_bind_address`

参数名称： `redis_bind_address`， 类型： `ip`， 层次：`C`

Redis服务器绑定的IP地址，空字符串将使用配置清单中定义的主机名。

默认值：`0.0.0.0`，这将绑定到此主机上的所有可用 IPv4 地址。

在生产环境中出于安全性考虑，建议仅绑定内网 IP，即将此值设置为空字符串 `''`

当该值为空字符串时，模板 [`roles/redis/templates/redis.conf`](https://github.com/pgsty/pigsty/blob/main/roles/redis/templates/redis.conf) 
会使用 `inventory_hostname` 渲染 `bind <ip>`，从而绑定到清单中声明的管理地址。






### `redis_max_memory`

参数名称： `redis_max_memory`， 类型： `size`， 层次：`C/I`

每个 Redis 实例使用的最大内存配置，默认值：`1GB`。





### `redis_mem_policy`

参数名称： `redis_mem_policy`， 类型： `enum`， 层次：`C`

Redis 内存回收策略，默认值：`allkeys-lru`，

- `noeviction`：内存达限时不保存新值：当使用主从复制时仅适用于主库
- `allkeys-lru`：保持最近使用的键；删除最近最少使用的键（LRU）
- `allkeys-lfu`：保持频繁使用的键；删除最少频繁使用的键（LFU）
- `volatile-lru`：删除带有真实过期字段的最近最少使用的键
- `volatile-lfu`：删除带有真实过期字段的最少频繁使用的键
- `allkeys-random`：随机删除键以为新添加的数据腾出空间
- `volatile-random`：随机删除带有过期字段的键
- `volatile-ttl`：删除带有真实过期字段和最短剩余生存时间（TTL）值的键。

详情请参阅 [Redis内存回收策略](https://redis.io/docs/ref/eviction/)。





### `redis_password`

参数名称： `redis_password`， 类型： `password`， 层次：`C/N`

Redis 密码，空字符串将禁用密码，这是默认行为。

注意，由于 redis_exporter 的实现限制，您每个节点只能设置一个 `redis_password`。这通常不是问题，因为 pigsty 不允许在同一节点上部署两个不同的 Redis 集群。

Pigsty 会自动将此密码写入 `/etc/default/redis_exporter`（`REDIS_PASSWORD=...`）并在 `redis-ha` 阶段用于 `redis-cli -a <password>`，因此无需重复配置 exporter 或 Sentinel 的认证口令。

> 请在生产环境中使用强密码




### `redis_rdb_save`

参数名称： `redis_rdb_save`， 类型： `string[]`， 层次：`C`

Redis RDB 保存指令，使用空列表则禁用 RDB。

默认值是 `["1200 1"]`：如果最近20分钟至少有1个键更改，则将数据集转储到磁盘。

详情请参考 [Redis持久化](https://redis.io/docs/management/persistence/)。




### `redis_aof_enabled`

参数名称： `redis_aof_enabled`， 类型： `bool`， 层次：`C`

启用 Redis AOF 吗？默认值是 `false`，即不使用 AOF。





### `redis_rename_commands`

参数名称： `redis_rename_commands`， 类型： `dict`， 层次：`C`

重命名 Redis 危险命令，这是一个 k:v 字典：`old: new`，old是待重命名的命令名称，new是重命名后的名字。

默认值：`{}`，你可以通过设置此值来隐藏像 `FLUSHDB` 和 `FLUSHALL` 这样的危险命令，下面是一个例子：

```yaml
{
  "keys": "op_keys",
  "flushdb": "op_flushdb",
  "flushall": "op_flushall",
  "config": "op_config"  
}
```




### `redis_cluster_replicas`

参数名称： `redis_cluster_replicas`， 类型： `int`， 层次：`C`

在 Redis 原生集群中，应当为一个 Master/Primary 实例配置多少个从库？默认值为： `1`，即每个主库配一个从库。



### `redis_sentinel_monitor`

参数名称： `redis_sentinel_monitor`， 类型： `master[]`， 层次：`C`

Redis哨兵监控的主库列表，只在哨兵集群上使用。每个待纳管的主库定义方式如下所示：

```yaml
redis_sentinel_monitor:  # primary list for redis sentinel, use cls as name, primary ip:port
  - { name: redis-src, host: 10.10.10.45, port: 6379 ,password: redis.src, quorum: 1 }
  - { name: redis-dst, host: 10.10.10.48, port: 6379 ,password: redis.dst, quorum: 1 }
```

其中，`name`，`host` 是必选参数，`port`，`password`，`quorum` 是可选参数，`quorum` 用于设置判定主库失效所需的法定人数数，通常大于哨兵实例数的一半（默认为1）。

从 Pigsty 4.0 开始还可以为某个条目添加 `remove: true`，此时 `redis-ha` 阶段只会执行 `SENTINEL REMOVE <name>`，用于清理不再需要的目标。


--------

## `REDIS_REMOVE`

本节包含 [`redis_remove`](https://github.com/pgsty/pigsty/blob/main/roles/redis_remove/defaults/main.yml) 角色的参数，
这些是 [`redis-rm.yml`](/docs/redis/playbook#redis-rmyml) 剧本使用的操作标志参数。


### `redis_safeguard`

参数名称： `redis_safeguard`， 类型： `bool`， 层次：`G/C/A`

Redis 的防误删安全保险开关：打开后 `redis-rm.yml` 剧本无法移除正在运行的 Redis 实例。

默认值为 `false`，如果设置为 `true`，那么 `redis-rm.yml` 剧本会拒绝执行，防止误删正在运行的 Redis 实例。

可以通过命令行参数 `-e redis_safeguard=false` 强制覆盖此保护。


### `redis_rm_data`

参数名称： `redis_rm_data`， 类型： `bool`， 层次：`G/C/A`

移除 Redis 实例时，是否一并移除 Redis 数据目录？默认为 `true`。

数据目录（`/data/redis/`）包含了 Redis 的 RDB 与 AOF 文件，如果不移除它们，那么新部署的 Redis 实例将会从这些备份文件中加载数据。

设置为 `false` 可以保留数据目录用于后续恢复。


### `redis_rm_pkg`

参数名称： `redis_rm_pkg`， 类型： `bool`， 层次：`G/C/A`

移除 Redis 实例时，是否一并卸载 Redis 与 redis_exporter 软件包？默认为 `false`。

通常情况下不需要卸载软件包，仅当需要彻底清理节点时才需要启用此选项。
