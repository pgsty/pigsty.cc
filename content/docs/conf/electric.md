---
title: app/electric
weight: 880
description: 使用 Pigsty 托管的 PostgreSQL 部署 Electric 实时同步服务
icon: fa-solid fa-bolt-lightning
categories: [参考]
---

`app/electric` 配置模板提供了部署 Electric SQL 实时同步服务的参考配置，实现 PostgreSQL 到客户端的实时数据同步。


--------

## 配置概览

- 配置名称： `app/electric`
- 节点数量： 单节点
- 配置说明：使用 Pigsty 托管的 PostgreSQL 部署 Electric 实时同步
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/electric [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/electric.yml`](https://github.com/Vonng/pigsty/blob/main/conf/app/electric.yml)

{{< readfile file="yaml/app/electric.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`app/electric` 模板提供了 Electric SQL 实时同步服务的一键部署方案。

**Electric 是什么**：
- PostgreSQL 到客户端的实时数据同步服务
- 支持离线优先 (Local-first) 应用架构
- 通过逻辑复制实时同步数据变更
- 提供 HTTP API 供前端应用消费

**关键特性**：
- 使用 Pigsty 管理的 PostgreSQL 作为数据源
- 通过逻辑复制 (Logical Replication) 捕获数据变更
- 支持 SSL 加密连接
- 内置 Prometheus 指标端点

**访问方式**：

```bash
# Electric API 端点
http://elec.pigsty:8002

# Prometheus 指标
http://elec.pigsty:8003/metrics
```

**适用场景**：
- 构建离线优先 (Local-first) 应用
- 需要实时数据同步到客户端
- 移动应用和 PWA 的数据同步
- 协作应用的实时更新

**注意事项**：
- Electric 用户需要 `replication` 权限
- 需要启用 PostgreSQL 逻辑复制
- 生产环境建议使用 SSL 连接（已配置 `sslmode=require`）

