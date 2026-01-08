---
title: slim
weight: 770
description: 精简安装配置模板，不部署监控基础设施，直接从互联网安装 PostgreSQL
icon: fa-solid fa-feather
categories: [参考]
---

`slim` 配置模板提供 **精简安装** 能力，在不部署 Infra 监控基础设施的前提下，直接从互联网安装 PostgreSQL 高可用集群。

当您只需要一个可用的数据库实例，不需要监控系统时，可以考虑使用 **[精简安装](/docs/setup/slim/)** 模式。


--------

## 配置概览

- 配置名称： `slim`
- 节点数量： 单节点
- 配置说明：精简安装配置模板，不部署监控基础设施，直接安装 PostgreSQL
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c slim [-i <primary_ip>]
./slim.yml   # 执行精简安装
```


--------

## 配置内容

源文件地址：[`pigsty/conf/slim.yml`](https://github.com/Vonng/pigsty/blob/main/conf/slim.yml)

{{< readfile file="yaml/slim.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`slim` 模板是 Pigsty 的 **精简安装配置**，专为快速部署裸 PostgreSQL 集群设计。

**适用场景**：
- 仅需要 PostgreSQL 数据库，不需要监控系统
- 资源有限的小型服务器或边缘设备
- 快速部署测试用的临时数据库
- 已有监控系统，只需要 PostgreSQL 高可用集群

**关键特性**：
- 使用 `slim.yml` 剧本而非 `deploy.yml` 进行安装
- 从互联网直接安装软件，不构建本地软件源
- 保留核心 PostgreSQL 高可用能力（Patroni + etcd + HAProxy）
- 最小化软件包下载，加快安装速度
- 默认使用 PostgreSQL 18

**与 meta 的区别**：
- `slim` 使用专用的 `slim.yml` 剧本，跳过 Infra 模块安装
- 安装速度更快，资源占用更少
- 适合"只要数据库"的场景

**注意事项**：
- 精简安装后无法通过 Grafana 查看数据库状态
- 如需监控功能，请使用 [`meta`](/docs/conf/meta/) 或 [`rich`](/docs/conf/rich/) 模板
- 可按需添加从库实现高可用

