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
数据存储可以使用 PostgreSQL，或 [`MINIO`](/docs/minio) / S3 等对象存储。监控集成依赖 [`INFRA`](/docs/infra) 的 VictoriaMetrics。

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
    end

    subgraph Object["对象存储（可选）"]
        s3["S3 / MinIO"]
    end

    subgraph INFRA["INFRA（可选）"]
        vm["VictoriaMetrics"]
    end

    app --> jfs
    jfs --> meta
    jfs -.-> s3
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
- **多种数据后端**：支持 PostgreSQL、MinIO、S3 等
- **监控集成**每实例暴露 Prometheus / Victoria 指标端口
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
