---
title: build/oss
weight: 925
description: Pigsty 开源版离线软件包构建环境配置
icon: fa-solid fa-hammer
categories: [参考]
---

`build/oss` 配置模板是 Pigsty 开源版离线软件包的构建环境配置，用于在多个操作系统上批量构建离线安装包。

此配置仅供开发者和贡献者使用。


--------

## 配置概览

- 配置名称： `build/oss`
- 节点数量： 六节点（el9, el10, d12, d13, u22, u24）
- 配置说明：Pigsty 开源版离线软件包构建环境
- 适用系统：`el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`

启用方式：

```bash
cp conf/build/oss.yml pigsty.yml
```

> 备注：这是一个固定 IP 地址的构建模板，仅供内部使用


--------

## 配置内容

源文件地址：[`pigsty/conf/build/oss.yml`](https://github.com/Vonng/pigsty/blob/main/conf/build/oss.yml)

{{< readfile file="yaml/build/oss.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`build/oss` 模板是 Pigsty 开源版离线软件包的构建配置。

**构建内容**：
- PostgreSQL 18 及所有分类扩展包
- 基础设施软件包（Prometheus、Grafana、Nginx 等）
- 节点软件包（监控代理、工具等）
- 额外模块（extra-modules）

**支持的操作系统**：
- EL9 (Rocky/Alma/RHEL 9)
- EL10 (Rocky 10 / RHEL 10)
- Debian 12 (Bookworm)
- Debian 13 (Trixie)
- Ubuntu 22.04 (Jammy)
- Ubuntu 24.04 (Noble)

**构建流程**：

```bash
# 1. 准备构建环境
cp conf/build/oss.yml pigsty.yml

# 2. 在各节点上下载软件包
./infra.yml -t repo_build

# 3. 打包离线安装包
make cache
```

**适用场景**：
- Pigsty 开发者构建新版本
- 贡献者测试新扩展
- 企业用户自定义离线包

