---
title: 常见问题
weight: 3680
description: Pigsty MINIO 对象存储模块常见问题答疑
icon: fa-solid fa-circle-question
module: [MINIO]
categories: [参考]
---


----------------

## MINIO 模块默认部署哪个引擎？

v4.5.0 当前源码部署并且只部署 Silo，`minio_type` 唯一合法值是 `silo`。MINIO 是兼容模块名，不表示运行 MinIO 服务端。

- 新建集群建议显式写出 `minio_type: silo`。
- `minio_type: minio` 与 `minio_type: rustfs` 都会在身份检查阶段失败。
- 外部 MinIO、RustFS 或其他 S3 服务仍可作为 pgBackRest 仓库，但不由当前 MINIO 角色管理。
- 升级由旧版本管理的 MinIO 集群前，必须先验证 MinIO → Silo 的数据兼容性、备份和回滚流程。


----------------

## Pigsty 仓库为什么仍有 MinIO 或 RustFS 软件包？

MinIO 上游在 [2025-10-15 改为仅分发源码](https://github.com/minio/minio/commit/9e49d5e)，在 [2025-12-03 将代码库标记为维护模式](https://github.com/minio/minio/commit/27742d4)，并于 [2026-04-25 归档仓库](https://github.com/minio/minio)。这里的“仅分发源码”是停止提供新的社区预编译二进制，而不只是停止 RPM/DEB。

Pigsty 因此曾维护自己的 [MinIO 分支](https://github.com/pgsty/minio) 与软件包。MinIO [**CVE-2025-62506**](https://nvd.nist.gov/vuln/detail/CVE-2025-62506) 影响 `RELEASE.2025-10-15T17-29-55Z` 之前的版本，并在该版本修复；Pigsty 后续 MinIO 分支和当前 Silo 代码都包含这一修复。

您仍可以在 Pigsty Infra 仓库中找到 MinIO/RustFS 的 RPM/DEB 包以及构建脚本，但“仓库提供软件包”不等于“v4.5 MINIO 模块支持该后端”。当前角色只接受 Silo；其他服务需要自行部署和维护。


----------------

## 为什么对象存储默认启用 HTTPS？

Pigsty 默认的 pgBackRest `minio` 仓库配置使用 HTTPS，并通过 `/etc/pki/ca.crt` 校验证书，以保护备份流量。pgBackRest 并非绝对禁止 HTTP；如果明确选择 HTTP，除了关闭 [`minio_https`](/docs/minio/param#minio_https)，还必须同步修改 `pgbackrest_repo` 的 TLS 选项，不能只改服务端开关。


----------------

## 从容器中访问 Silo 提示证书无效？

对象存储服务端证书默认由 Pigsty 私有 CA 签发；它不是服务端自签名证书，但容器镜像通常不信任这套私有 CA，因此 `mcli`、rclone、AWS CLI 等客户端会提示证书链无效。

例如，对于 Node.js 应用程序，可以把 Pigsty CA 证书挂载到容器内，并通过环境变量 `NODE_EXTRA_CA_CERTS` 指定路径：

```yaml
    environment:
      NODE_EXTRA_CA_CERTS: /etc/pki/ca.crt
    volumes:
      - /etc/pki/ca.crt:/etc/pki/ca.crt:ro
```

如果 Silo 没有用作 pgBackRest 备份仓库，也可以选择关闭 HTTPS、改用 HTTP；同时应评估明文传输风险。


----------------

## Silo 数据目录可以使用普通目录吗？

`minio_data` 填写的是目录路径，不是裸磁盘设备。`/data/minio` 可以是普通子目录，但在多节点或多盘部署中，它背后必须是非根盘的独立持久文件系统。

- 如果 `/data` 已经挂载到独立本地盘、云盘、分区或 LVM 逻辑卷，那么 `/data/minio` 可以直接使用。
- 如果 `/data/minio` 只是根文件系统 `/` 下创建的目录，分布式 Silo 会将其标记为根盘并拒绝使用，错误为 `drive is part of root drive, will not be used`。
- 单机多盘的每个路径都应对应独立文件系统，不能用同一块盘上的多个目录模拟多盘。
- 只有 [单机单盘](/docs/minio/config#单机单盘) 模式可以直接使用根文件系统中的普通目录，且仅适合开发测试或非关键场合。

使用下面的命令检查实际挂载点：

```bash
findmnt -T /
findmnt -T /data/minio
```

详细说明参见 [集群配置：存储路径与挂载](/docs/minio/config#存储路径与挂载)；三节点单盘拓扑参见 [多机单盘](/docs/minio/config#多机单盘)。



----------------

## 如何向已有的 Silo 集群中添加新的成员？

> 在部署之前应规划好 Silo 集群容量，因为新增存储池需要全局重启。

可以通过为现有集群增加一组服务器节点，创建新的存储池来扩容。

不能直接修改既有存储池的节点数与磁盘数，只能通过添加新存储池扩容。

详细步骤请参考 Pigsty 文档：[**集群扩容**](/docs/minio/admin#集群扩容)，以及 MinIO 官方文档：[**扩展 MinIO 部署**](https://min.io/docs/minio/linux/operations/install-deploy-manage/expand-minio-deployment.html)



----------------

## 如何移除 Silo 集群？

从 Pigsty v3.6 开始，移除 MinIO 集群需要使用专用的 `minio-rm.yml` 剧本：

```bash
./minio-rm.yml -l minio -e minio_type=silo                         # 移除 Silo 集群
./minio-rm.yml -l minio -e minio_type=silo -e minio_rm_data=false  # 移除集群但保留数据
```

删除角色也把 `minio_type` 默认为 `silo`，其他取值会被拒绝。示例仍显式写出该值，方便删除前连同集群身份和路径一起复核。

`minio_rm_data` 默认为 `true`，而移除角色会容忍部分清理错误。真实执行前应核对精确的 `-l` 目标和近期备份，执行后再检查服务、数据目录、DNS 与监控目标，不能只凭剧本返回状态判断清理完成。

如果您启用了 [`minio_safeguard`](/docs/minio/param#minio_safeguard) 保护，需要显式覆盖才能执行移除：

```bash
./minio-rm.yml -l minio -e minio_type=silo -e minio_safeguard=false
```



----------------

## mcli 命令与 mc 命令有什么区别？

Pigsty 将兼容的 MinIO 客户端以 `mcli` 命令和软件包名交付，而不是使用上游的 `mc` 名称，从而避免与同名的 Midnight Commander 文件管理器冲突。

`mcli` 是 Pigsty 对兼容客户端的交付名称，CLI 接口沿用 `mc`；具体版本仍可能随 Pigsty 打包更新。您可以在 [MinIO 客户端文档](https://min.io/docs/minio/linux/reference/minio-mc.html) 中查阅命令参考。



----------------

## 如何监控 Silo 集群状态？

Pigsty 为 Silo 提供了开箱即用的监控能力；面板与指标仍保留 MinIO 兼容命名：

- **Grafana 面板**：[MinIO Overview](https://demo.pigsty.cc/d/minio-overview) 和 [MinIO Instance](https://demo.pigsty.cc/d/minio-instance)
- **告警规则**：包括 MinIO 宕机、节点离线、磁盘离线等告警
- **Silo 内置控制台**：通过 `https://<minio-ip>:9001` 访问

详情请参阅 [监控告警](/docs/minio/monitor) 文档
