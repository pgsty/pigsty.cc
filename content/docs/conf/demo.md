---
title: demo/demo
weight: 915
description: Pigsty 公开演示站点配置，展示如何配置 SSL 证书、暴露域名、安装全部扩展
icon: fa-solid fa-globe
categories: [参考]
---

`demo/demo` 配置模板是 Pigsty 公开演示站点使用的配置文件，展示了如何对外暴露网站、配置 SSL 证书、安装全部扩展插件。

如果您希望在云服务器上搭建自己的公开服务，可以参考此配置模板。


--------

## 配置概览

- 配置名称： `demo/demo`
- 节点数量： 单节点
- 配置说明：Pigsty 公开演示站点配置
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`
- 相关配置：[`meta`](/docs/conf/meta/)，[`rich`](/docs/conf/rich/)

启用方式：

```bash
./configure -c demo/demo [-i <primary_ip>]
```


--------

## 主要特性

此模板在 `meta` 基础上进行了以下增强：

- 配置 SSL 证书和自定义域名（如 `pigsty.cc`）
- 下载并安装 PostgreSQL 18 所有可用扩展
- 启用 Docker 并配置镜像加速
- 部署 MinIO 对象存储
- 预置多个业务数据库和用户
- 添加 Redis 主从实例示例
- 添加 FerretDB MongoDB 兼容集群
- 添加 Kafka 样例集群


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/demo.yml`](https://github.com/Vonng/pigsty/blob/main/conf/demo/demo.yml)

{{< readfile file="yaml/demo/demo.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`demo/demo` 模板是 Pigsty 的 **公开演示配置**，展示了完整的生产级部署示例。

**关键特性**：
- 配置 HTTPS 证书和自定义域名
- 安装所有可用的 PostgreSQL 扩展
- 集成 Redis、FerretDB、Kafka 等组件
- 配置 Docker 镜像加速

**适用场景**：
- 搭建公开演示站点
- 需要完整功能展示的场景
- 学习 Pigsty 高级配置

**注意事项**：
- 需要准备 SSL 证书文件
- 需要配置 DNS 解析
- 部分扩展在 ARM64 架构不可用

