---
title: 常见问题
weight: 3680
description: Pigsty MINIO 对象存储模块常见问题答疑
icon: fa-solid fa-circle-question
module: [MINIO]
categories: [参考]
---


----------------

## Pigsty 使用的 MinIO 是什么版本？

MinIO 于 2025-12-03 宣布进入 **维护模式**，不再发布新的功能版本，只会发布安全补丁与维护版本，并且在 2025-10-15 停止发布二进制 RPM/DEB。
所以 Pigsty fork 了自己的 [MinIO](https://github.com/pgsty/minio)，并使用 [`minio/pkger`](https://github.com/minio/pkger) 制作了最新的 2025-12-03 版本。

这一版本修复了 MinIO [**CVE-2025-62506**](https://nvd.nist.gov/vuln/detail/CVE-2025-62506) 安全漏洞，确保 Pigsty 用户的 MinIO 部署安全可靠。
您可以在 Pigsty Infra 仓库中找到 RPM/DEB 包以及构建使用的脚本。


----------------

## 为什么 MinIO 强制要求 HTTPS？

当 pgbackrest 使用对象存储作为备份仓库时，强制要求使用 HTTPS，以确保数据传输的安全性。
如果您的 MinIO 并非用于 pgbackrest 备份，您仍然可以选择使用 HTTP 协议。
可以通过修改参数 [`minio_https`](/docs/minio/param#minio_https) 来关闭 HTTPS。


----------------

## 从容器中访问 MinIO 提示证书无效？

除非您使用真正的企业 CA 颁发的证书，否则 MinIO 默认使用自签名证书，这会导致容器内的客户端工具（如 mc / rclone / awscli 等）无法验证 MinIO 服务器的身份，从而提示证书无效。

例如，对于 Node.js 应用程序，可以 MinIO 服务器的 CA 证书挂载到容器内，并通过环境变量 `NODE_EXTRA_CA_CERTS` 指定 CA 证书路径：

```yaml
    environment:
      NODE_EXTRA_CA_CERTS: /etc/pki/ca.crt
    volumes:
      - /etc/pki/ca.crt:/etc/pki/ca.crt:ro
```

当然，如果您的 MinIO 没有用作 pgbackrest 备份仓库的话，您也可以选择关闭 MinIO 的 HTTPS 支持，改用 HTTP 协议访问。


----------------

## 启动多节点/多盘 MinIO 集群失败怎么办？

在 [**单机多盘**](/docs/minio/config#单机多盘) 或 [**多机多盘**](/docs/minio/config#多机多盘) 模式下，如果数据目录不是有效的磁盘挂载点，MinIO 会拒绝启动。
请使用已挂载的磁盘作为 MinIO 的数据目录，而不是普通目录。您只能在 [**单机单盘**](/docs/minio/config#单机单盘) 模式下使用普通目录作为 MinIO 的数据目录，仅可用于开发测试或非关键场合。



----------------

## 如何向已有的 MinIO 集群中添加新的成员？

> 在部署之前，您最好规划 MinIO 集群容量，因为新增成员需要全局重启。

您可以通过向现有集群中添加新的服务器节点，打造一个新的存储池的方式，实现 MinIO 扩容。

请注意，MinIO 一旦部署，你无法修改现有集群的节点数量与磁盘数量！只能通过添加新的存储池来扩容。

详细步骤请参考 Pigsty 文档：[**集群扩容**](/docs/minio/admin#集群扩容)，以及 MinIO 官方文档：[**扩展 MinIO 部署**](https://min.io/docs/minio/linux/operations/install-deploy-manage/expand-minio-deployment.html)



----------------

## 如何移除 MinIO 集群？

从 Pigsty v3.6 开始，移除 MinIO 集群需要使用专用的 `minio-rm.yml` 剧本：

```bash
./minio-rm.yml -l minio                   # 移除 MinIO 集群
./minio-rm.yml -l minio -e minio_rm_data=false  # 移除集群但保留数据
```

如果您启用了 [`minio_safeguard`](/docs/minio/param#minio_safeguard) 保护，需要显式覆盖才能执行移除：

```bash
./minio-rm.yml -l minio -e minio_safeguard=false
```



----------------

## mcli 命令与 mc 命令有什么区别？

`mcli` 是 MinIO 官方客户端 `mc` 的重命名版本。在 Pigsty 中，我们使用 `mcli` 而不是 `mc`，以避免与 Midnight Commander（一个常见的文件管理器，也使用 `mc` 命令）产生冲突。

两者功能完全相同，只是命令名称不同。您可以在 [MinIO 客户端文档](https://min.io/docs/minio/linux/reference/minio-mc.html) 中找到完整的命令参考。



----------------

## 如何监控 MinIO 集群状态？

Pigsty 为 MinIO 提供了开箱即用的监控能力：

- **Grafana 面板**：[MinIO Overview](https://demo.pigsty.cc/d/minio-overview) 和 [MinIO Instance](https://demo.pigsty.cc/d/minio-instance)
- **告警规则**：包括 MinIO 宕机、节点离线、磁盘离线等告警
- **MinIO 内置控制台**：通过 `https://<minio-ip>:9001` 访问

详情请参阅 [监控告警](/docs/minio/monitor) 文档



