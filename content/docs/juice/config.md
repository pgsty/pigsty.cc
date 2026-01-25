---
title: 集群配置
weight: 4510
description: 根据需求场景选择合适的存储后端，配置 JuiceFS 文件系统实例
icon: fa-solid fa-code
module: [JUICE]
categories: [参考]
---


-------

## 概念

JuiceFS 是一款高性能的 POSIX 文件系统，由元数据引擎和数据存储两部分组成。在 Pigsty 中，我们使用 PostgreSQL 作为元数据引擎，这意味着文件系统的元数据（目录结构、文件属性等）存储在 PostgreSQL 数据库中，可以充分利用 PostgreSQL 的高可用和备份恢复能力。

JUICE 模块的核心特点：

- **多实例支持**：每个节点可以挂载多个 JuiceFS 文件系统实例
- **PostgreSQL 元数据**：利用 PostgreSQL 的可靠性和 PITR 能力
- **监控集成**：每个实例暴露 Prometheus 指标端口
- **灵活的存储后端**：支持 PostgreSQL 大对象、MinIO、S3 等多种数据存储


-------

## 模块参数

JUICE 模块有 **2** 个参数：

| 参数                                          |   类型   |  级别  | 说明                        |
|:------------------------------------------|:------:|:----:|:--------------------------|
| [`juice_cache`](param#juice_cache)        | `path` | `C`  | JuiceFS 共享缓存目录            |
| [`juice_instances`](param#juice_instances)| `dict` | `H`  | JuiceFS 实例定义字典，**必选参数**   |
{.full-width}

- [`juice_cache`](param#juice_cache)：所有实例共享的本地缓存目录，默认 `/data/juice`
- [`juice_instances`](param#juice_instances)：必须在**节点级别**（Host）定义的字典，Key 为文件系统名称，Value 为实例配置对象


--------

## 实例配置

[`juice_instances`](param#juice_instances) 是一个字典，其中每个键值对定义一个 JuiceFS 文件系统实例：

- **Key**：文件系统名称（实例标识），如 `jfs`、`pgfs`、`shared`
- **Value**：实例配置对象，包含以下字段：

| 字段      | 必选  | 默认值              | 说明                                    |
|:--------|:---:|:-----------------|:--------------------------------------|
| `path`  | **是** | -                | 挂载点路径，如 `/fs`、`/pgfs`                |
| `meta`  | **是** | -                | 元数据引擎 URL，通常为 PostgreSQL 连接串          |
| `data`  | 否   | `''`             | `juicefs format` 存储后端选项               |
| `unit`  | 否   | `juicefs-<name>` | systemd 服务名称                          |
| `mount` | 否   | `''`             | `juicefs mount` 额外参数                  |
| `port`  | 否   | `9567`           | Prometheus 指标端口（**同节点不同实例必须唯一**）       |
| `owner` | 否   | `root`           | 挂载点目录属主                               |
| `group` | 否   | `root`           | 挂载点目录属组                               |
| `mode`  | 否   | `0755`           | 挂载点目录权限                               |
| `state` | 否   | `create`         | `create` 创建实例，`absent` 移除实例           |
{.full-width}

配置结构示例：

```yaml
juice_instances:          # 节点级参数（字典）
  jfs:                    # Key：文件系统名称
    path  : /fs           # Value：实例配置对象
    meta  : postgres://u:p@h:5432/db
    port  : 9567
  shared:                 # 第二个文件系统
    path  : /shared
    meta  : postgres://u:p@h:5432/shared
    port  : 9568          # 端口必须唯一
```

{{% alert title="端口冲突检测" color="warning" %}}
同一节点上的多个 JuiceFS 实例必须使用不同的 `port`，剧本会在执行前检测端口冲突并报错。
{{% /alert %}}


--------

## 存储后端

JuiceFS 支持多种数据存储后端，通过 `data` 字段配置 `juicefs format` 命令参数：

### PostgreSQL 大对象存储

使用 PostgreSQL 作为数据存储后端，文件数据以大对象形式存储在数据库中：

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data  : --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
    port  : 9567
```

这种模式的优势是数据和元数据统一管理，可以利用 PostgreSQL 的备份恢复能力实现文件系统的 PITR。

### MinIO 对象存储

使用 MinIO 作为数据存储后端：

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data  : --storage minio --bucket http://10.10.10.10:9000/juice --access-key minioadmin --secret-key minioadmin
    port  : 9567
```

### S3 兼容存储

使用 AWS S3 或兼容 S3 协议的对象存储：

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data  : --storage s3 --bucket https://s3.amazonaws.com/my-bucket --access-key AKIAXXXXXXXX --secret-key XXXXXXXXXX
    port  : 9567
```


--------

## 典型配置示例

### 单实例配置

最简单的单实例配置，使用 PostgreSQL 作为元数据和数据存储：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          juice_instances:
            jfs:
              path  : /fs
              meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
              data  : --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
```

### 多实例配置

同一节点挂载多个文件系统，注意端口必须唯一：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          juice_instances:
            pgfs:
              path  : /pgfs
              meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
              data  : --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
              port  : 9567
            shared:
              path  : /data/shared
              meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/shared_meta
              data  : --storage minio --bucket http://10.10.10.10:9000/shared
              port  : 9568    # 必须与其他实例不同
              owner : postgres
              group : postgres
```

### 多节点共享文件系统

多个节点挂载同一个 JuiceFS 文件系统，实现共享存储：

```yaml
all:
  children:
    app:
      hosts:
        10.10.10.11: { juice_instances: { shared: { path: /shared, meta: "postgres://...", port: 9567 } } }
        10.10.10.12: { juice_instances: { shared: { path: /shared, meta: "postgres://...", port: 9567 } } }
        10.10.10.13: { juice_instances: { shared: { path: /shared, meta: "postgres://...", port: 9567 } } }
```

### AI 编程沙箱配置

用于 AI 辅助编程的完整配置示例（对应 `conf/vibe.yml`）：

```yaml
all:
  children:
    infra: { hosts: { 10.10.10.10: { infra_seq: 1 }} ,vars: { repo_enabled: false }}
    etcd:  { hosts: { 10.10.10.10: { etcd_seq: 1  }} ,vars: { etcd_cluster: etcd  }}
    pgsql: { hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } } ,vars: { pg_cluster: pgsql }}

  vars:
    # PGSQL 配置
    pg_version: 18
    pg_users:
      - { name: dbuser_meta ,password: DBUser.Meta ,pgbouncer: true ,roles: [dbrole_admin] }
    pg_databases:
      - { name: meta, comment: pigsty meta database }

    # JUICE 配置：使用 PostgreSQL 作为元数据和数据存储
    juice_instances:
      jfs:
        path  : /fs
        meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
        data  : --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
        port  : 9567

    # VIBE 配置：Code-Server、JupyterLab 和 Claude Code
    code_enabled: true
    code_password: Code.Server
    jupyter_enabled: true
    jupyter_password: Jupyter.Lab
    claude_enabled: true
```

部署步骤：

```bash
./deploy.yml     # 部署基础设施和 PostgreSQL
./juice.yml      # 部署 JuiceFS
./vibe.yml       # 部署 VIBE 模块（Code-Server、JupyterLab、Claude Code）
```


--------

## 局限性

- JuiceFS 实例的 `port` 在同一节点上必须唯一，用于暴露 Prometheus 指标
- 使用 PostgreSQL 作为数据存储时，文件数据存储为大对象，可能不适合超大文件场景
- 文件系统格式化（`juicefs format`）是一次性操作，修改存储后端需要重新格式化


