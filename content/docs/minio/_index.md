---
title: 模块：MINIO
weight: 3600
description: 使用 MINIO 兼容模块部署 Silo S3 对象存储，并作为 PostgreSQL 备份仓库。
icon: fas fa-boxes-stacked
module: [MINIO]
categories: [参考]
---


`MINIO` 是 Pigsty 中 S3 兼容对象存储的兼容模块名。当前角色部署 [**Silo**](https://github.com/pgsty/silo)，并且 [`minio_type`](/docs/minio/param#minio_type) 只接受 `silo`。

Silo 沿用 MinIO 的 S3/Admin API、`MINIO_*` 环境变量、磁盘格式与 `mcli` 客户端接口，可用作 PostgreSQL [**pgBackRest 备份仓库**](/docs/pgsql/backup/repository/)。模块名、参数前缀和监控 `job` 继续使用 `MINIO` / `minio_*`，以保持现有清单和运维入口兼容。

> [!IMPORTANT]
> `minio` 与 `rustfs` 不再是有效的 `minio_type`，会在身份检查阶段失败。升级由旧版本管理的 MinIO 集群前，必须先完成备份、MinIO → Silo 兼容性验证与回滚演练；不能把软件包替换当作已经验收的数据迁移。外部 MinIO、RustFS 或其他 S3 服务仍可作为 pgBackRest 仓库，但不由当前 MINIO 角色管理。

MINIO 是 [**可选模块**](/docs/ref/module)。若将它用作 pgBackRest 的 S3 仓库，应在 [`PGSQL`](/docs/pgsql) 模块之前部署；TLS 证书与主机基线由 [`NODE`](/docs/node) / CA 能力提供。


--------

## 快速开始

以下配置显式定义一个单节点 Silo 集群。`minio_cluster` 与 `minio_seq` 都是必填身份参数；生产清单应显式写出 `minio_type: silo`。

```yaml
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 }
  vars:
    minio_cluster: minio
    minio_type: silo
```

```bash
./minio.yml -l minio    # 在 minio 分组上部署 Silo
```

清单分组名可以与 `minio_cluster` 不同，角色按每台主机的 `minio_cluster` 身份计算实际成员。不要在 `all.vars` 中定义 `minio_cluster`，否则所有主机都会被视为对象存储成员。

部署完成后可通过以下入口访问：

- **S3 API**：`https://sss.pigsty:9000`（域名需要显式配置 DNS 或 `/etc/hosts`）
- **管理界面**：`https://<node-ip>:9001`
- **命令行**：`mcli ls sss/`（管理节点与集群成员上会写入预配置别名）

默认管理员凭证为 `minioadmin` / `S3User.MinIO`，只适合演示；生产部署前必须修改。


--------

## 部署模式

Silo 使用以下 Pigsty 清单部署模式：

| 模式                                        | 说明           | 适用场景       |
|:------------------------------------------|:-------------|:-----------|
| [**单机单盘**](/docs/minio/config#单机单盘)（SNSD） | 单节点、单个数据目录   | 开发、测试、演示   |
| [**单机多盘**](/docs/minio/config#单机多盘)（SNMD） | 单节点、多块磁盘     | 资源受限的小规模部署 |
| [**多机单盘**](/docs/minio/config#多机单盘)（MNSD） | 多节点、每节点一个数据盘 | 紧凑高可用部署    |
| [**多机多盘**](/docs/minio/config#多机多盘)（MNMD） | 多节点、每节点多块磁盘  | **生产环境推荐** |
{.full-width}

`minio_data` 始终是目录路径。分布式与多盘部署要求这些目录位于非根盘的独立持久文件系统上；例如 `/data/minio` 可以是独立挂载点 `/data` 下的子目录，但不能只是根文件系统中的普通目录。

`minio_volumes` 的多池扩容语义来自 Silo 保留的 MinIO 兼容接口；生产扩缩容前仍应按实际 Silo 版本验证操作与回滚流程。


--------

## 核心能力

- **兼容接口**：Silo 沿用 `minio_*` 参数、S3 端口、TLS 和 `mcli` 置备流程
- **高可用拓扑**：支持单节点、多节点单盘与多节点多盘部署，可在同一清单中定义多套独立集群
- **备份仓库**：可作为 pgBackRest 的 S3 远程仓库
- **安全基线**：默认启用 HTTPS，并由 Pigsty CA 为每个实例签发证书
- **可观测性**：通过 `/minio/metrics/v3` 采集 Silo 指标，并提供 Grafana 面板与告警
- **兼容运维**：模块名、目标目录、监控标签和客户端别名保留 MINIO 命名空间
