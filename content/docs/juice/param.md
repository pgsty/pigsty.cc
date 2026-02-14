---
title: 参数列表
weight: 4520
description: JUICE 模块参数说明（共 2 项）。
icon: fa-solid fa-sliders
module: [JUICE]
categories: [参考]
---

JUICE 模块参数共 **2** 项：

- [`juice_cache`](#juice_cache)：共享缓存目录
- [`juice_instances`](#juice_instances)：实例定义字典

----------------

## 参数概览

| 参数 | 类型 | 级别 | 说明 |
|:-----|:----:|:----:|:-----|
| [`juice_cache`](#juice_cache) | `path` | `C` | JuiceFS 共享缓存目录 |
| [`juice_instances`](#juice_instances) | `dict` | `I` | JuiceFS 实例定义字典（可为空） |
{.full-width}

> **级别说明**：`C` 为集群级别，`I` 为实例级别。

--------

## 默认参数

参数定义于 [`roles/juice/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/v4.1.0/roles/juice/defaults/main.yml)：

```yaml
#-----------------------------------------------------------------
# JUICE
#-----------------------------------------------------------------
juice_cache: /data/juice
juice_instances: {}
```

--------

## `juice_cache`

参数名称：`juice_cache`，类型：`path`，级别：`C`

所有 JuiceFS 实例共享的本地缓存目录，默认 `/data/juice`。
JuiceFS 会在此目录下按文件系统 UUID 进行隔离。

```yaml
juice_cache: /data/juice
```

--------

## `juice_instances`

参数名称：`juice_instances`，类型：`dict`，级别：`I`

JuiceFS 实例定义字典，通常在实例级别定义。
默认值为空字典（表示不部署实例）；Key 为文件系统名称，Value 为实例配置对象。

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://u:p@h:5432/db
    data: --storage postgres --bucket ...
    port: 9567
```

实例字段说明：

| 字段 | 必选 | 默认值 | 说明 |
|:-----|:---:|:------|:-----|
| `path`  | 是 | - | 挂载点路径 |
| `meta`  | 是 | - | 元数据引擎 URL（建议 PostgreSQL） |
| `data`  | 否 | `''` | `juicefs format` 选项（仅首次创建生效） |
| `unit`  | 否 | `juicefs-<name>` | systemd 服务名 |
| `mount` | 否 | `''` | `juicefs mount` 额外参数 |
| `port`  | 否 | `9567` | 指标端口（同节点需唯一） |
| `owner` | 否 | `root` | 挂载点属主 |
| `group` | 否 | `root` | 挂载点属组 |
| `mode`  | 否 | `0755` | 挂载点权限 |
| `state` | 否 | `create` | `create` / `absent` |
{.full-width}

{{% alert title="注意" color="warning" %}}
- `data` 仅用于 `juicefs format`，文件系统创建后不会再更新。
- 同一节点多实例必须使用不同的 `port`。
{{% /alert %}}
