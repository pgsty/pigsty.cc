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
当前版本中，`meta` 会原样透传给 `juicefs` 作为元数据引擎 URL，生产场景通常使用 PostgreSQL。
数据存储由 `data` 参数决定，该参数会作为选项传给 `juicefs format`。

JUICE 模块执行逻辑与关键命令：

```bash
# 格式化（仅首次创建有效）
juicefs format --no-update <data> "<meta>" "<name>"

# 挂载
juicefs mount <mount_opts> --cache-dir <juice_cache> --metrics 0.0.0.0:<port> <meta> <path>
```

说明：

- `--no-update` 确保已存在的文件系统不会被覆盖；同时 `juice_init` 会执行 `juicefs status <meta>` 校验已有元数据中的卷名（`Setting.Name`）必须与当前实例名一致，防止误挂载其他卷的元数据。
- `data` 仅用于 **首次格式化**，文件系统已存在时不会生效。
- `mount` 仅用于挂载阶段，可按需传入缓存与并发参数。
- 环境文件 `/etc/default/<unit>` 权限为 `0600`（systemd `EnvironmentFile` 格式，请勿当作普通 shell 脚本 `source`）；systemd 单元默认排在本机 `patroni` / `postgres` / `silo` / `minio` 之后、`code-server` / `jupyter` 之前启停。
- 挂载点目录不存在时由 `juicefs mount` 自动创建；`owner` / `group` / `mode` 在核验真实 JuiceFS 挂载就绪后作用于 **文件系统根目录**，而不是挂载点下面的本地目录。

--------

## 模块参数

JUICE 模块仅有两个参数：

| 参数                                                     |   类型   | 级别  | 说明                |
|:-------------------------------------------------------|:------:|:---:|:------------------|
| [`juice_cache`](/docs/juice/param#juice_cache)         | `path` | `C` | JuiceFS 共享缓存目录    |
| [`juice_instances`](/docs/juice/param#juice_instances) | `dict` | `I` | JuiceFS 实例字典（可为空） |
{.full-width}

- `juice_cache`：所有实例共享的本地缓存目录，默认 `/data/juice`
- `juice_instances`：通常在 **实例级别** 定义的实例字典，Key 为文件系统名称；空字典表示不管理实例，该主机会被剧本跳过

--------

## 实例配置

`juice_instances` 的每个条目代表一个 JuiceFS 实例，Key 为实例名，同时也是 JuiceFS 卷名：

| 字段      | 必选 | 默认值              | 说明                                 |
|:--------|:--:|:-----------------|:-----------------------------------|
| `path`  | 条件 | -                | 挂载点非根绝对路径，如 `/fs`（`create` 时必填，同节点唯一） |
| `meta`  | 条件 | -                | 元数据引擎 URL（`create` 时必填，建议 PostgreSQL） |
| `data`  | 否  | `''`             | `juicefs format` 选项（存储后端）          |
| `unit`  | 否  | `juicefs-<name>` | 裸 systemd 服务名（不含 `.service` 后缀）    |
| `mount` | 否  | `''`             | `juicefs mount` 额外参数               |
| `port`  | 否  | `9567`           | 指标端口（同节点活跃实例需唯一）                   |
| `owner` | 否  | `root`           | 文件系统根目录属主（挂载后设置）                   |
| `group` | 否  | `root`           | 文件系统根目录属组（挂载后设置）                   |
| `mode`  | 否  | `0755`           | 文件系统根目录权限（挂载后设置）                   |
| `state` | 否  | `create`         | `create` / `absent`                |
{.full-width .wide .expand}

> [!WARNING] 重要
> - 建议在 **首次格式化** 时显式设置 `data`，以明确存储后端。
> - 同一节点多个实例必须配置不同的 `port` 与 `path`。
> - 实例名须为 3–63 位小写字母、数字或连字符，且首尾不能是连字符：`jfs`、`pg-fs` 合法，`fs`、`pg_fs`、`JFS` 不合法。

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

## 配置校验

`juice.yml` 每次执行都会先由 `juice_id` 校验运行环境、`juice_cache` 与 `juice_instances`。校验任务带有 `always` 标签，任何标签组合下都会执行，不通过则直接失败：

- 控制端要求 `ansible-core >= 2.16`。
- `juice_cache` 必须是非根绝对路径（不含 `.` 或 `..`），且不能与任一 `state: create` 实例的 `path` 相同或互相包含（禁止目录重叠）。
- `juice_instances` 必须是字典；`state` 仅允许 `create`（默认）或 `absent`。
- `state: create` 的实例必须定义非根绝对路径 `path`（不含 `.` 或 `..`）与 `meta`，且实例名须符合 JuiceFS 卷名规则（`^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$`）。
- `unit` 必须是合法的裸 systemd 单元名（不含 `.service` 后缀），且 **同一节点上全部实例（包含 `state: absent` 实例）的 `unit` 互不冲突**，防止清理任务误停新建实例的服务。
- 同一节点上，`state: create` 的各实例之间 `port`（默认 `9567`）互不相同，`path` 也互不相同。

`state: absent` 的实例无需保留 `path` 或 `meta`（若原实例使用了自定义 `unit`，清理时需继续保留 `unit`），且豁免实例名规则以及 `port` / `path` 冲突检查。因此可以把旧实例标记为 `absent`，同时在原端口或挂载点上使用新实例名新建实例；名称不合规的旧条目也能正常清理。

--------

## 存储后端

`data` 字段直接拼接到 `juicefs format`，可配置任意支持的后端。
以下为常见示例：

### PostgreSQL 数据后端

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data: --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
```

JuiceFS 会在 `--bucket` 指定的数据库中创建 `jfs_blob` 表存储文件数据。
这里的 PostgreSQL 数据后端与 `meta` 元数据引擎是两个独立角色；它们可以使用同一个数据库，也可以分别部署。数据库和具有读写权限的用户必须预先存在。

### Silo / MinIO 兼容对象存储

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data: --storage minio --bucket https://sss.pigsty:9000/juice --access-key <s3_access_key> --secret-key <s3_secret_key>
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
    data: --storage minio --bucket https://sss.pigsty:9000/shared --access-key <s3_access_key> --secret-key <s3_secret_key>
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

更简洁的写法是在集群级别 `vars` 中定义一次 `juice_instances`，由所有成员共享：

```yaml
app:
  hosts:
    10.10.10.11: {}
    10.10.10.12: {}
  vars:
    juice_instances:
      shared: { path: /shared, meta: "postgres://...", port: 9567 }
```

`owner` / `group` / `mode` 作用于共享的文件系统根目录，各节点上这三项必须一致，否则每次执行都会互相覆盖。

--------

## 注意事项

- `port` 会暴露在 `0.0.0.0`，请结合防火墙或安全组控制访问。
- `data` 变更不会更新已存在的文件系统，如需切换后端请手动处理。
- `meta` 与 `data` 可能包含数据库或对象存储凭据；请限制 `pigsty.yml` 的读取权限，并使用独立的最小权限账号，生产环境不要沿用示例密码。
- 剧本默认输出中的循环项只显示实例名，格式化命令行也被隐藏；但以 `--diff` 执行时，环境文件的差异仍会显示 `meta`。
- 以 `--read-only` 挂载的客户端无法修改文件系统根目录属性。若实际值与 `owner` / `group` / `mode` 不一致，`juice_dir` 任务会失败，此时应让配置与实际值保持一致。
