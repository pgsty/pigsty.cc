---
title: demo/minio
weight: 920
description: 四节点 x 四盘位的高可用多节点多盘 MinIO 集群演示
icon: fa-solid fa-box-archive
categories: [参考]
---

`demo/minio` 配置模板演示了如何部署一套四节点 x 四盘位、总计十六盘的高可用 MinIO 集群，提供 S3 兼容的对象存储服务。

更多教程，请参考 **[MINIO](/docs/minio/)** 模块文档。


--------

## 配置概览

- 配置名称： `demo/minio`
- 节点数量： 四节点
- 配置说明：高可用多节点多盘 MinIO 集群演示
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c demo/minio
```

> 备注：这是一个四节点模版，您需要在生成配置后修改其他三个节点的 IP 地址


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/minio.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/minio.yml)

{{< readfile file="yaml/demo/minio.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`demo/minio` 模板是 MinIO 生产级部署的参考配置，展示了多节点多盘 (MNMD) 架构。

**关键特性**：
- **多节点多盘架构**：4 节点 × 4 盘 = 16 盘纠删码组
- **L2 VIP 高可用**：通过 Keepalived 绑定虚拟 IP
- **HAProxy 负载均衡**：9002 端口统一访问入口
- **细粒度权限**：为不同应用创建独立用户和存储桶

**访问方式**：

```bash
# 使用 mcli 配置 MinIO 别名（通过 HAProxy 负载均衡）
mcli alias set sss https://sss.pigsty:9002 minioadmin S3User.MinIO

# 列出存储桶
mcli ls sss/

# 使用控制台
# 访问 https://m.pigsty 或 https://m10-m13.pigsty
```

**适用场景**：
- 需要 S3 兼容对象存储的环境
- PostgreSQL 备份存储（pgBackRest 远程仓库）
- 大数据和 AI 工作负载的数据湖
- 需要高可用对象存储的生产环境

**注意事项**：
- 每个节点需要准备 4 块独立磁盘挂载到 `/data1` - `/data4`
- 生产环境建议至少 4 节点以实现纠删码冗余
- VIP 需要正确配置网络接口（`vip_interface`）

