---
title: meta
weight: 760
description: Pigsty 默认使用的配置模板，单节点，覆盖核心功能，标准单机配置，在线安装，本地备份仓库。
icon: fa-solid fa-cube
categories: [参考]
---

`meta` 配置模板是 Pigsty 默认使用的模板，它的目标是在当前单节点上完成 Pigsty 核心功能 —— PostgreSQL 的部署。

为了实现最好的兼容性，`meta` 模板仅下载安装包含 **最小必需** 软件集合，以便在所有操作系统发行版与芯片架构上实现这一目标。


--------

## 配置概览

- 配置名称： `meta`
- 节点数量： 单节点
- 配置说明：Pigsty 默认使用的单节点安装配置模板，带有较完善的关键配置参数说明，与最小可用功能集合。
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)，[`slim`](/docs/conf/slim/)，[`fat`](/docs/conf/fat/)，

使用方式：此配置模板为 Pigsty 默认配置模板，因此在 **[配置](/docs/setup/install#配置)** 时无需显式指定 `-c meta` 参数：

```bash
./configure [-i <primary_ip>]
```

例如，如果您想要安装 PG 17，而非默认的 PostgreSQL 18，可以在 `configure` 中使用 `-v` 参数：

```bash
./configure -v 17   # or 16,15,14,13....
```


--------

## 配置内容

源文件地址：[`pigsty/conf/meta.yml`](https://github.com/pgsty/pigsty/blob/main/conf/meta.yml)

{{< readfile file="yaml/meta.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`meta` 模板是 Pigsty 的 **默认入门配置**，专为快速上手设计。

**适用场景**：
- 首次体验 Pigsty 的用户
- 开发测试环境的快速部署
- 单机运行的小型生产环境
- 作为更复杂部署的基础模板

**关键特性**：
- 在线安装模式，不构建本地软件源（`repo_enabled: false`）
- 默认安装 PostgreSQL 18，带有 `postgis` 和 `pgvector` 扩展
- 包含完整的监控基础设施（Grafana、Prometheus、Loki 等）
- 预置 Docker 与 pgAdmin 应用示例
- MinIO 备份存储默认禁用，可按需启用

**注意事项**：
- 默认密码为示例密码，生产环境 **务必修改**
- 单节点模式的 etcd 无高可用保障，适合开发测试
- 如需构建本地软件源，请使用 [`rich`](/docs/conf/rich/) 模板

