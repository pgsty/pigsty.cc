---
title: 模块：MINIO
weight: 3600
description: Pigsty 内置了 MinIO 支持，一个本地 S3 对象存储开源替代，可用于 PGSQL 模块冷备份存储。
icon: fas fa-boxes-stacked
module: [MINIO]
categories: [参考]
---


[MinIO](https://min.io/) 是一个兼容 AWS S3 的多云对象存储软件。

MinIO 可以用来存储文档、图片、视频和备份。Pigsty 原生支持部署各种 MinIO 集群，具备原生多节点多磁盘高可用支持，易于扩展、安全且开箱即用，
并且有过 10PB+ 级别的大规模生产环境部署用例。

MinIO 是 Pigsty 中的一个 [**可选模块**](/docs/ref/module)。您可以将 MinIO 用作 PostgreSQL [**备份**](/docs/pgsql/backup/repository/) 的可选存储仓库，作为默认本地 POSIX 文件系统仓库的补充。
如果使用 MinIO 备份仓库，`MINIO` 模块应在任何 [`PGSQL`](/docs/pgsql) 模块之前安装。MinIO 需要受信任的 CA 证书才能工作，因此它依赖 [`NODE`](/docs/node) 模块。


--------

## 快速开始

以下是一个最简单的 MinIO 单机单盘部署示例：

```yaml
# 在配置清单中定义 MinIO 集群
minio: { hosts: { 10.10.10.10: { minio_seq: 1 } }, vars: { minio_cluster: minio } }
```

```bash
./minio.yml -l minio    # 在 minio 分组上部署 MinIO 模块
```

部署完成后，您可以通过以下方式访问 MinIO：

- **S3 API**：`https://sss.pigsty:9000`（使用域名需要配置 DNS 解析）
- **Web 控制台**：`https://<minio-ip>:9001`（默认用户名/密码：`minioadmin` / `S3User.MinIO`）
- **命令行**：`mcli ls sss/`（管理节点上已预配置别名）



--------

## 部署模式

MinIO 支持三种主要部署模式：

| 模式 | 说明 | 适用场景 |
|:-----|:-----|:---------|
| [**单机单盘**](/docs/minio/config#单机单盘) (SNSD) | 单节点，单个数据目录 | 开发、测试、演示 |
| [**单机多盘**](/docs/minio/config#单机多盘) (SNMD) | 单节点，多块磁盘 | 资源受限的小规模部署 |
| [**多机多盘**](/docs/minio/config#多机多盘) (MNMD) | 多节点，每节点多块磁盘 | **生产环境推荐** |
{.full-width}

此外，您还可以使用 [多池部署](/docs/minio/config#多池部署) 来扩容现有集群，或部署 [多套集群](/docs/minio/config#多套集群)。


--------

## 核心特性

- **S3 兼容**：完全兼容 AWS S3 API，可与各种 S3 客户端和工具无缝集成
- **高可用**：原生支持多节点多磁盘部署，容忍节点和磁盘故障
- **安全**：默认启用 HTTPS 加密传输，支持服务端加密
- **监控**：开箱即用的 Grafana 监控面板和 Prometheus 告警规则
- **易用**：预配置的 `mcli` 客户端别名，一键部署和管理


