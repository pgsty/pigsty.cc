---
title: 集群配置
weight: 4510
description: JUICE 模块配置说明：实例定义、存储后端与挂载参数。
icon: fa-solid fa-code
module: [JUICE]
categories: [参考]
---

--------

## 概念与实现

JuiceFS 由 **元数据引擎** 与 **数据存储** 两部分组成。
在 Pigsty 中，元数据引擎固定使用 PostgreSQL（`meta` URL），而数据存储通过 `data` 参数传入 `juicefs format` 选项决定。

JUICE 模块执行逻辑与关键命令：

```bash
# 格式化（仅首次创建有效）
juicefs format --no-update <data> "<meta>" "<name>"

# 挂载
juicefs mount <mount> --cache-dir <juice_cache> --metrics 0.0.0.0:<port> <meta> <path>
```

说明：

- `--no-update` 确保已存在的文件系统不会被覆盖。
- `data` 仅用于 **首次格式化**，文件系统已存在时不会生效。
- `mount` 仅用于挂载阶段，可按需传入缓存与并发参数。

--------

## 模块参数

JUICE 模块仅有两个参数：

| 参数 | 类型 | 级别 | 说明 |
|:-----|:----:|:----:|:-----|
| [`juice_cache`](param#juice_cache) | `path` | `C` | JuiceFS 共享缓存目录 |
| [`juice_instances`](param#juice_instances) | `dict` | `I` | JuiceFS 实例字典（必选） |
{.full-width}

- `juice_cache`：所有实例共享的本地缓存目录，默认 `/data/juice`
- `juice_instances`：在**实例级别**定义的实例字典，Key 为文件系统名称

--------

## 实例配置

`juice_instances` 的每个条目代表一个 JuiceFS 实例：

| 字段 | 必选 | 默认值 | 说明 |
|:-----|:---:|:------|:-----|
| `path`  | 是 | - | 挂载点路径，如 `/fs` |
| `meta`  | 是 | - | 元数据引擎 URL（PostgreSQL） |
| `data`  | 否 | `''` | `juicefs format` 选项（存储后端） |
| `unit`  | 否 | `juicefs-<name>` | systemd 服务名 |
| `mount` | 否 | `''` | `juicefs mount` 额外参数 |
| `port`  | 否 | `9567` | 指标端口（同节点需唯一） |
| `owner` | 否 | `root` | 挂载点属主 |
| `group` | 否 | `root` | 挂载点属组 |
| `mode`  | 否 | `0755` | 挂载点权限 |
| `state` | 否 | `create` | `create` / `absent` |
{.full-width}

{{% alert title="重要" color="warning" %}}
- `data` 在 **首次格式化** 时必不可少，否则无法创建文件系统。
- 同一节点多个实例必须配置不同的 `port`。
{{% /alert %}}

配置示例：

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data: --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
    port: 9567
```

--------

## 存储后端

`data` 字段直接拼接到 `juicefs format`，可配置任意支持的后端。
以下为常见示例：

### PostgreSQL 大对象

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data: --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
```

### MinIO 对象存储

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data: --storage minio --bucket http://10.10.10.10:9000/juice --access-key minioadmin --secret-key minioadmin
```

### S3 兼容存储

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data: --storage s3 --bucket https://s3.amazonaws.com/my-bucket --access-key AKIAXXXXXXXX --secret-key XXXXXXXXXX
```

--------

## 典型配置

### 多实例（同节点）

```yaml
juice_instances:
  pgfs:
    path: /pgfs
    meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data: --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
    port: 9567
  shared:
    path: /shared
    meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/shared
    data: --storage minio --bucket http://10.10.10.10:9000/shared
    port: 9568
    owner: postgres
    group: postgres
```

### 多节点共享挂载

多个节点挂载同一个 JuiceFS：

```yaml
app:
  hosts:
    10.10.10.11: { juice_instances: { shared: { path: /shared, meta: "postgres://...", port: 9567 } } }
    10.10.10.12: { juice_instances: { shared: { path: /shared, meta: "postgres://...", port: 9567 } } }
```

第一次格式化由任一节点执行即可，其余节点会通过 `--no-update` 自动跳过。

--------

## 注意事项

- `port` 会暴露在 `0.0.0.0`，请结合防火墙或安全组控制访问。
- `data` 变更不会更新已存在的文件系统，如需切换后端请手动处理。
