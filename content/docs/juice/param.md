---
title: 参数列表
weight: 4520
description: JUICE 模块提供了 2 个参数用于 JuiceFS 部署与配置
icon: fa-solid fa-sliders
module: [JUICE]
categories: [参考]
---

JUICE 模块的参数列表，共有 **2** 个参数：

- [`juice_cache`](#juice_cache)：JuiceFS 缓存目录
- [`juice_instances`](#juice_instances)：JuiceFS 实例定义字典


----------------

## 参数概览

| 参数                                        |   类型   |  级别  | 说明                        |
|:------------------------------------------|:------:|:----:|:--------------------------|
| [`juice_cache`](#juice_cache)             | `path` | `C`  | JuiceFS 共享缓存目录            |
| [`juice_instances`](#juice_instances)     | `dict` | `H`  | JuiceFS 实例定义字典，**必选参数**   |
{.full-width}

> **参数级别说明**：`C` 表示 Cluster 级别，可在全局或集群中统一配置；`H` 表示 Host 级别，必须在节点层面定义。


--------

## 默认参数

`JUICE`：2 个参数，定义于 [`roles/juice/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/juice/defaults/main.yml)

```yaml
#-----------------------------------------------------------------
# JUICE
#-----------------------------------------------------------------
juice_cache: /data/juice              # JuiceFS 共享缓存目录
juice_instances: {}                   # JuiceFS 实例定义字典
```


--------

## `JUICE`

本节包含 [`juice`](https://github.com/pgsty/pigsty/blob/main/roles/juice/defaults/main.yml) 角色的参数，
这些是 [`juice.yml`](/docs/juice/playbook#juiceyml) 剧本使用的配置参数。


### `juice_cache`

参数名称： `juice_cache`， 类型： `path`， 层次：`C`

JuiceFS 所有实例共享的本地缓存目录，默认为 `/data/juice`。

JuiceFS 会在此目录下按文件系统 UUID 隔离各实例的缓存数据，用于加速频繁访问的文件读取。

```yaml
juice_cache: /data/juice
```


### `juice_instances`

参数名称： `juice_instances`， 类型： `dict`， 层次：`H`

JuiceFS 实例定义字典，**必选参数**，必须在**节点（Host）层面**显式配置。

内容为 JSON/YAML 字典格式，Key 为文件系统名称（实例标识），Value 为该实例的配置对象。

```yaml
juice_instances:
  jfs:                                          # 文件系统名称
    path  : /fs                                 # [必选] 挂载点路径
    meta  : postgres://u:p@h:5432/db            # [必选] 元数据引擎 URL
    data  : --storage postgres --bucket ...    # 存储后端选项
    unit  : juicefs-jfs                         # systemd 服务名
    mount : ''                                  # 额外挂载选项
    port  : 9567                                # 指标端口（同节点必须唯一）
    owner : root                                # 挂载点属主
    group : root                                # 挂载点属组
    mode  : '0755'                              # 挂载点权限
    state : create                              # create | absent
```

每个实例的配置项说明：

| 字段      | 必选  | 默认值              | 说明                                    |
|:--------|:---:|:-----------------|:--------------------------------------|
| `path`  | 是   | -                | 挂载点路径，如 `/fs`、`/pgfs`                 |
| `meta`  | 是   | -                | 元数据引擎 URL，通常为 PostgreSQL 连接串          |
| `data`  | 否   | `''`             | `juicefs format` 存储后端参数               |
| `unit`  | 否   | `juicefs-<name>` | systemd 服务单元名称                        |
| `mount` | 否   | `''`             | `juicefs mount` 额外参数                  |
| `port`  | 否   | `9567`           | Prometheus 指标端口，**同节点多实例必须唯一**        |
| `owner` | 否   | `root`           | 挂载点目录属主                               |
| `group` | 否   | `root`           | 挂载点目录属组                               |
| `mode`  | 否   | `0755`           | 挂载点目录权限                               |
| `state` | 否   | `create`         | `create` 创建实例，`absent` 移除实例           |
{.full-width}

**配置示例**：

使用 PostgreSQL 作为元数据和数据存储：

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data  : --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
    port  : 9567
```

使用 MinIO 作为数据存储：

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data  : --storage minio --bucket http://10.10.10.10:9000/juice --access-key minioadmin --secret-key minioadmin
    port  : 9567
```

多实例配置（注意端口唯一）：

```yaml
juice_instances:
  pgfs:
    path  : /pgfs
    meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data  : --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
    port  : 9567
  shared:
    path  : /shared
    meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/shared
    port  : 9568    # 必须与 pgfs 不同
    owner : postgres
    group : postgres
```

{{% alert title="端口冲突" color="warning" %}}
同一节点上的多个 JuiceFS 实例必须配置不同的 `port` 值，否则剧本会在验证阶段报错并终止执行。
{{% /alert %}}


