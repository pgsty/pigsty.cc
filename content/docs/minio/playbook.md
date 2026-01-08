---
title: 预置剧本
weight: 3640
description: 如何使用预置的 ansible 剧本来管理 MinIO 集群，常用管理命令速查。
icon: fa-solid fa-scroll
module: [MINIO]
categories: [任务]
---


MinIO 模块提供了两个内置剧本用于集群管理：

- [`minio.yml`](#minioyml)：用于安装 MinIO 集群
- [`minio-rm.yml`](#minio-rmyml)：用于移除 MinIO 集群


--------

## `minio.yml`

剧本 [`minio.yml`](https://github.com/pgsty/pigsty/blob/main/minio.yml) 用于在节点上安装 MinIO 模块。

- `minio-id`        : 生成/校验 minio 身份参数
- `minio_install`   : 安装 minio
  - `minio_os_user` : 创建操作系统用户 minio
  - `minio_pkg`     : 安装 minio/mcli 软件包
  - `minio_dir`     : 创建 minio 目录
- `minio_config`    : 生成 minio 配置
  - `minio_conf`    : minio 主配置文件
  - `minio_cert`    : minio SSL 证书签发
  - `minio_dns`     : minio DNS 记录插入
- `minio_launch`    : minio 服务启动
- `minio_register`  : minio 纳入监控
- `minio_provision` : 创建 minio 别名/存储桶/业务用户
  - `minio_alias`   : 创建 minio 客户端别名（管理节点上）
  - `minio_bucket`  : 创建 minio 存储桶
  - `minio_user`    : 创建 minio 业务用户

在执行剧本前，请先在 [配置清单](/docs/setup/config) 中，完成 MinIO 集群的 [配置](config)。

{{% alert title="执行条件" color="primary" %}}
剧本会自动跳过未定义 [`minio_seq`](/docs/minio/param#minio_seq) 的主机。这意味着您可以安全地在混合主机组上执行剧本，只有真正的 MinIO 节点才会被处理。
{{% /alert %}}

{{% alert title="架构变更：Pigsty v3.6+" color="info" %}}
从 Pigsty v3.6 开始，**minio.yml** 剧本专注于集群安装。所有移除操作已迁移至专用的 **minio-rm.yml** 剧本，使用 **minio_remove** 角色执行。
{{% /alert %}}


--------

## `minio-rm.yml`

剧本 [`minio-rm.yml`](https://github.com/pgsty/pigsty/blob/main/minio-rm.yml) 用于移除 MinIO 集群。

- `minio-id`          : 生成 minio 身份参数用于移除操作（启用 `any_errors_fatal`，身份验证失败时立即停止）
- `minio_safeguard`   : 安全检查，防止意外删除（默认：`false`）
- `minio_pause`       : 暂停 3 秒，允许用户中止操作（Ctrl+C 可取消）
- `minio_deregister`  : 从 Victoria/Prometheus 监控中移除目标，清理 DNS 记录
- `minio_svc`         : 停止并禁用 minio systemd 服务
- `minio_data`        : 移除 minio 数据目录（可通过 `minio_rm_data=false` 禁用）
- `minio_pkg`         : 卸载 minio 软件包（可通过 `minio_rm_pkg=true` 启用）

{{% alert title="执行条件与安全机制" color="primary" %}}
- 剧本会自动跳过未定义 [`minio_seq`](/docs/minio/param#minio_seq) 的主机，防止误操作非 MinIO 节点
- 身份验证阶段启用了 `any_errors_fatal`，一旦检测到无效的 MinIO 身份，剧本会立即停止
- 移除前会暂停 3 秒，给用户提供中止操作的机会
{{% /alert %}}

移除剧本使用 **minio_remove** 角色，支持以下[可配置参数](/docs/minio/param)：

- [`minio_safeguard`](/docs/minio/param#minio_safeguard)：设置为 `true` 时阻止意外删除
- [`minio_rm_data`](/docs/minio/param#minio_rm_data)：控制是否删除 MinIO 数据（默认 `true`）
- [`minio_rm_pkg`](/docs/minio/param#minio_rm_pkg)：控制是否卸载 MinIO 软件包（默认 `false`）


----------------

## 命令速查

MINIO 剧本常用命令：

```bash
./minio.yml -l <cls>                      # 在 <cls> 分组上安装 MINIO 模块
./minio.yml -l minio -t minio_install     # 在节点上安装 MinIO 服务，准备数据目录，但不配置启动
./minio.yml -l minio -t minio_config      # 重新配置 MinIO 集群
./minio.yml -l minio -t minio_launch      # 重启 MinIO 集群
./minio.yml -l minio -t minio_provision   # 重新执行资源置备（创建存储桶和用户）

./minio-rm.yml -l minio                   # 移除 MinIO 集群（使用专用移除剧本）
./minio-rm.yml -l minio -e minio_rm_data=false  # 移除集群但保留数据
./minio-rm.yml -l minio -e minio_rm_pkg=true    # 移除集群并卸载软件包
```



--------

## 保护机制

出于防止误删的目的，Pigsty 的 MINIO 模块提供了防误删保险，由参数 [`minio_safeguard`](/docs/minio/param#minio_safeguard) 控制。

默认情况下，`minio_safeguard` 为 `false`，允许执行移除操作。如果您希望保护 MinIO 集群不被意外删除，可以在配置清单中启用此保险：

```yaml
minio_safeguard: true   # 启用后，minio-rm.yml 将拒绝执行
```

如果您确实需要移除受保护的集群，可以在执行时使用命令行参数覆盖：

```bash
./minio-rm.yml -l minio -e minio_safeguard=false
```

--------

## 执行演示

[![asciicast](https://asciinema.org/a/566415.svg)](https://asciinema.org/a/566415)
