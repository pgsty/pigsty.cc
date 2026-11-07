---
title: build/dev
weight: 1060
description: Pigsty 七节点本地构建与开发配置
icon: fa-solid fa-hammer
categories: [参考]
---

`build/dev` 配置模板是 Pigsty 的七节点本地构建开发环境，用于在 EL9/10、Debian 12/13、Ubuntu 22/24/26 节点上验证仓库构建与包下载流程。

此配置仅供开发者和贡献者使用。


--------

## 配置概览

- 配置名称： `build/dev`
- 节点数量：七节点（`el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`）
- 配置说明：本地构建开发环境，默认 PostgreSQL 18，构建 `infra,node,pgsql` 模块
- 适用系统：`el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`build/oss`](/docs/conf/oss/)

启用方式：

```bash
cp conf/build/dev.yml pigsty.yml
```

> 备注：这是固定 IP 的开发构建模板，使用前需要按本地环境调整主机地址。


--------

## 配置内容

源文件地址：[`pigsty/conf/build/dev.yml`](https://github.com/pgsty/pigsty/blob/main/conf/build/dev.yml)

{{< include file="yaml/build/dev.yml" code=true lang="yaml" >}}


--------

## 配置解读

`build/dev` 主要用于验证 Pigsty 软件仓库构建链路，而不是面向普通生产安装。

**关键特性**：
- 默认 `pg_version: 18`
- 本地缓存目录为 `dist/${version}`
- 默认构建 `infra,node,pgsql` 三类模块
- 预置 PostgreSQL 18 全类别扩展包组
- 通过七个发行版节点覆盖 RPM 与 DEB 构建路径

**适用场景**：
- Pigsty 新版本构建验证
- 软件仓库与镜像源调试
- 扩展包下载与缓存测试
