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

| 参数                                    |   类型   | 级别  | 说明                  |
|:--------------------------------------|:------:|:---:|:--------------------|
| [`juice_cache`](#juice_cache)         | `path` | `C` | JuiceFS 共享缓存目录      |
| [`juice_instances`](#juice_instances) | `dict` | `I` | JuiceFS 实例定义字典（可为空） |
{.full-width}

> **级别说明**：`C` 为集群级别，`I` 为实例级别。

--------

## 默认参数

参数定义于 [`roles/juice/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/juice/defaults/main.yml)：

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
JuiceFS 会在此目录下按文件系统 UUID 进行隔离。该路径必须是非根绝对路径（不含 `.` 或 `..`），且不得与任一活跃实例的挂载路径 `path` 相同或互相包含。

```yaml
juice_cache: /data/juice
```

--------

## `juice_instances`

参数名称：`juice_instances`，类型：`dict`，级别：`I`

JuiceFS 实例定义字典，通常在实例级别定义。
默认值为空字典（表示不部署实例）；Key 为文件系统名称（即 JuiceFS 卷名），Value 为实例配置对象。
未定义该参数、其值为 `null` 或为空字典的主机（以及指定 `-e fsname=<name>` 但未命中的主机）会被 `juice.yml` 直接跳过，不会安装软件包、创建缓存目录或写入监控目标文件。

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://u:p@h:5432/db
    data: --storage postgres --bucket ...
    port: 9567
```

实例字段说明：

| 字段      | 必选 | 默认值              | 说明                                 |
|:--------|:--:|:-----------------|:-----------------------------------|
| `path`  | 条件 | -                | 挂载点非根绝对路径（`create` 时必填，同节点唯一）      |
| `meta`  | 条件 | -                | 元数据引擎 URL（`create` 时必填，建议 PostgreSQL） |
| `data`  | 否  | `''`             | `juicefs format` 选项（仅首次创建生效）       |
| `unit`  | 否  | `juicefs-<name>` | 裸 systemd 服务名（不含 `.service`，全实例唯一） |
| `mount` | 否  | `''`             | `juicefs mount` 额外参数               |
| `port`  | 否  | `9567`           | 指标端口（同节点活跃实例需唯一）                   |
| `owner` | 否  | `root`           | 文件系统根目录属主（挂载后设置）                   |
| `group` | 否  | `root`           | 文件系统根目录属组（挂载后设置）                   |
| `mode`  | 否  | `0755`           | 文件系统根目录权限（挂载后设置）                   |
| `state` | 否  | `create`         | `create` / `absent`                |
{.full-width .wide .expand}

> [!WARNING] 注意
> - `data` 仅用于 `juicefs format`，文件系统创建后不会再更新。
> - 同一节点多实例必须使用不同的 `port` 与 `path`。
> - 实例名须为 3–63 位小写字母、数字或连字符，且首尾不能是连字符；`state: absent` 的实例不受此限制，详见 [**配置校验**](/docs/juice/config#配置校验)。
