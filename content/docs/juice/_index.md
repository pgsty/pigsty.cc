---
title: 模块：JUICE
weight: 4500
description: 使用 JuiceFS 分布式文件系统，以 PostgreSQL 作为元数据引擎，提供支持 PITR 的共享存储。
icon: fas fa-folder-tree
module: [JUICE]
categories: [参考]
---

[JuiceFS](https://juicefs.com/) 是一款高性能的 POSIX 兼容分布式文件系统，可以使用 PostgreSQL 作为元数据引擎。

Pigsty 中的 JUICE 模块提供了完整的 JuiceFS 部署与管理方案，支持多实例配置、自动化安装、监控集成，以及利用 PostgreSQL 的备份恢复能力实现文件系统的时间点恢复（PITR）。


--------

## 模块特点

- **PostgreSQL 元数据引擎**：利用 PostgreSQL 存储文件系统元数据，享受高可用与 PITR 能力
- **灵活的数据存储**：支持 PostgreSQL 大对象、MinIO、S3 等多种后端存储
- **多实例支持**：单节点可挂载多个独立的 JuiceFS 文件系统
- **PITR 能力**：利用 PostgreSQL 的备份恢复能力实现文件系统时间点恢复
- **监控集成**：自动集成到 VictoriaMetrics 监控系统


--------

## 配置示例

以下是一个典型的 JuiceFS 配置示例，使用 PostgreSQL 作为元数据和数据存储：

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data  : --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
    port  : 9567
```


--------

## 使用场景

JUICE 模块适用于以下场景：

- **AI 编程沙箱**：为 Code-Server、Jupyter Lab 提供持久化存储
- **共享存储**：多节点挂载同一文件系统，实现文件共享
- **数据湖存储**：为数据分析、机器学习任务提供大容量存储
- **备份归档**：利用对象存储后端实现低成本的数据归档


--------

## 文档导航

- [**集群配置**](config)：配置 JuiceFS 实例、存储后端和挂载选项
- [**参数列表**](param)：JUICE 模块的参数说明
- [**预置剧本**](playbook)：部署和管理 JuiceFS 的剧本使用指南
- [**管理预案**](admin)：JuiceFS 管理 SOP，包括扩容、PITR 恢复等
- [**监控告警**](monitor)：JuiceFS 监控指标与 Grafana 仪表盘
- [**常见问题**](faq)：JuiceFS 模块的常见问题解答


