---
title: 模块：MINIO
weight: 3600
description: 使用统一的 MINIO 模块部署 Silo、MinIO 或 RustFS S3 兼容对象存储，并作为 PostgreSQL 备份仓库。
icon: fas fa-boxes-stacked
module: [MINIO]
categories: [参考]
---


`MINIO` 是 Pigsty 中 S3 兼容对象存储的兼容模块名，不再限定服务端必须是 MinIO。当前源码通过 [`minio_type`](/docs/minio/param#minio_type) 选择 **Silo**、**MinIO** 或 **RustFS**，新建集群默认部署 **Silo**。

三种引擎共用同一套清单模型、TLS 证书、S3 端口、`mcli` 客户端别名、存储桶与用户置备接口，可用作 PostgreSQL [**pgBackRest 备份仓库**](/docs/pgsql/backup/repository/)。模块名、参数前缀和监控 `job` 继续使用 `MINIO` / `minio_*`，以保持现有清单和运维入口兼容。

| 引擎 | `minio_type` | 当前定位 | 监控方式 |
|:---|:---:|:---|:---|
| [Silo](https://github.com/pgsty/silo) | `silo` | **当前源码默认值**；沿用 MinIO 的 S3/Admin API、`MINIO_*` 环境变量与磁盘格式 | 拉取 `/minio/metrics/v3` |
| [MinIO](https://github.com/pgsty/minio) | `minio` | 兼容旧部署；升级已有 MinIO 集群时应显式保留 | 拉取 `/minio/metrics/v3` |
| [RustFS](https://github.com/rustfs/rustfs) | `rustfs` | 可选引擎；S3/API 兼容，但二进制、配置、证书目录和数据格式独立 | 原生 OTLP 推送 + HTTPS 就绪探测 |
{.full-width}

> [!IMPORTANT]
> S3 API 兼容不等于数据目录可以原地互换。已有 MinIO 集群升级时应先设置 `minio_type: minio`；切换 Silo 或 RustFS 必须按经过验证的迁移与回滚方案执行，不能把换包或改参数当作自动数据迁移。

MINIO 是 [**可选模块**](/docs/ref/module)。若将它用作 pgBackRest 的 S3 仓库，应在 [`PGSQL`](/docs/pgsql) 模块之前部署；TLS 证书与主机基线由 [`NODE`](/docs/node) / CA 能力提供。


--------

## 快速开始

以下配置显式定义一个单节点 Silo 集群。`minio_cluster` 与 `minio_seq` 都是必填身份参数；即使当前默认引擎是 Silo，也建议在生产清单中显式写出 `minio_type`，避免升级时语义漂移。

```yaml
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 }
  vars:
    minio_cluster: minio
    minio_type: silo
```

```bash
./minio.yml -l minio    # 在 minio 分组上部署所选对象存储引擎
```

清单分组名可以与 `minio_cluster` 不同，角色按每台主机的 `minio_cluster` 身份计算实际成员。不要在 `all.vars` 中定义 `minio_cluster`，否则所有主机都会被视为对象存储成员。

部署完成后可通过以下入口访问：

- **S3 API**：`https://sss.pigsty:9000`（域名需要显式配置 DNS 或 `/etc/hosts`）
- **管理界面**：`https://<node-ip>:9001`；RustFS 控制台位于该端口的 `/rustfs/console/`
- **命令行**：`mcli ls sss/`（管理节点与集群成员上会写入预配置别名）

默认管理员凭证为 `minioadmin` / `S3User.MinIO`，只适合演示；生产部署前必须修改。


--------

## 部署模式

三种引擎使用相同的 Pigsty 清单模型：

| 模式 | 说明 | 适用场景 |
|:---|:---|:---|
| [**单机单盘**](/docs/minio/config#单机单盘)（SNSD） | 单节点、单个数据目录 | 开发、测试、演示 |
| [**单机多盘**](/docs/minio/config#单机多盘)（SNMD） | 单节点、多块磁盘 | 资源受限的小规模部署 |
| [**多机多盘**](/docs/minio/config#多机多盘)（MNMD） | 多节点、每节点多块磁盘 | **生产环境推荐** |
{.full-width}

`minio_volumes` 的多池扩容语义来自 MinIO/Silo 兼容接口；对 RustFS 做存储池扩缩容前，应另外核对所用版本的上游支持与数据迁移约束。


--------

## 核心能力

- **统一接口**：三种引擎共用 `minio_*` 参数、S3 端口、TLS 和 `mcli` 置备流程
- **高可用拓扑**：支持单节点与多节点多盘部署，可在同一清单中定义多套独立集群
- **备份仓库**：可作为 pgBackRest 的 S3 远程仓库
- **安全基线**：默认启用 HTTPS，并由 Pigsty CA 为每个实例签发证书
- **可观测性**：Silo/MinIO 使用 Metrics V3；RustFS 使用原生 OTLP、独立就绪探测与专用 Grafana 仪表盘
- **兼容运维**：模块名、目标目录、监控标签和客户端别名保留 MINIO 命名空间
