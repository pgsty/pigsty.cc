---
title: 模块：JUICE
weight: 4500
description: 使用 JuiceFS 分布式文件系统，以 PostgreSQL 作为元数据引擎，提供可共享的 POSIX 存储。
icon: fas fa-folder-tree
module: [JUICE]
categories: [参考]
---

[JuiceFS](https://juicefs.com/) 是一款高性能、POSIX 兼容的分布式文件系统，可以将对象存储/数据库挂载为本地文件系统。

`JUICE` 模块依赖 [`NODE`](/docs/node) 的基础设施与软件仓库，通常使用 [`PGSQL`](/docs/pgsql) 作为元数据引擎。
数据存储可以使用 PostgreSQL（数据写入 `jfs_blob` 表），或 [`MINIO`](/docs/minio) 模块提供的 Silo / S3 等对象存储。监控集成依赖 [`INFRA`](/docs/infra) 的 VictoriaMetrics。

```mermaid
flowchart LR
    subgraph Client["应用/用户"]
        app["POSIX 访问"]
    end

    subgraph JUICE["JUICE"]
        jfs["JuiceFS Mount"]
    end

    subgraph PGSQL["PGSQL"]
        meta["Metadata DB"]
        blob["Data DB / jfs_blob（可选）"]
    end

    subgraph Object["对象存储（可选）"]
        s3["Silo / S3"]
    end

    subgraph INFRA["INFRA（可选）"]
        vm["VictoriaMetrics"]
    end

    app --> jfs
    jfs --> meta
    jfs -.->|二选一的数据后端| blob
    jfs -.->|二选一的数据后端| s3
    jfs -->|/metrics| vm

    style JUICE fill:#5B9CD5,stroke:#4178a8,color:#fff
    style PGSQL fill:#3E668F,stroke:#2d4a66,color:#fff
    style Object fill:#FCDB72,stroke:#d4b85e,color:#333
    style INFRA fill:#999,stroke:#666,color:#fff
```

--------

## 模块特点

- **PostgreSQL 元数据**：元数据存储于 PostgreSQL，便于管理与备份
- **多实例**：单节点可挂载多个独立文件系统实例
- **多种数据后端**：支持 PostgreSQL、Silo/MinIO、S3 等；元数据与文件数据是两个独立角色
- **监控集成** 每实例暴露 Prometheus / Victoria 格式指标端口
- **配置简洁**：以 [**`juice_instances`**](/docs/juice/param#juice_instances) 字典描述实例

--------

## 快速开始

最小配置示例（单实例）：

```yaml
juice_instances:
  jfs:
    path: /fs
    meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data: --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
    port: 9567
```

部署：

```bash
./juice.yml -l <host>
```
