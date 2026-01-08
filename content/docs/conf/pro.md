---
title: build/pro
weight: 930
description: Pigsty 专业版离线软件包构建环境配置（多版本）
icon: fa-solid fa-crown
categories: [参考]
---

`build/pro` 配置模板是 Pigsty 专业版离线软件包的构建环境配置，包含 PostgreSQL 13-18 全版本及额外商业组件。

此配置仅供开发者和贡献者使用。


--------

## 配置概览

- 配置名称： `build/pro`
- 节点数量： 六节点（el9, el10, d12, d13, u22, u24）
- 配置说明：Pigsty 专业版离线软件包构建环境（多版本）
- 适用系统：`el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`

启用方式：

```bash
cp conf/build/pro.yml pigsty.yml
```

> 备注：这是一个固定 IP 地址的构建模板，仅供内部使用


--------

## 配置内容

源文件地址：[`pigsty/conf/build/pro.yml`](https://github.com/Vonng/pigsty/blob/main/conf/build/pro.yml)

{{< readfile file="yaml/build/pro.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`build/pro` 模板是 Pigsty 专业版离线软件包的构建配置，比开源版包含更多内容。

**与 OSS 版的区别**：
- 包含 PostgreSQL 13-18 全部六个大版本
- 包含额外商业/企业组件：Kafka、PolarDB、IvorySQL 等
- 包含 Java 运行时和 Sealos 等工具
- 输出目录为 `dist/${version}/pro/`

**构建内容**：
- PostgreSQL 13、14、15、16、17、18 全版本
- 每个版本的全部分类扩展包
- Kafka 消息队列
- PolarDB 和 IvorySQL 内核
- TigerBeetle 分布式数据库
- Sealos 容器平台

**适用场景**：
- 企业客户需要多版本支持
- 需要 Oracle/MySQL 兼容内核
- 需要 Kafka 消息队列集成
- 需要长期支持版本（LTS）

**构建流程**：

```bash
# 1. 准备构建环境
cp conf/build/pro.yml pigsty.yml

# 2. 在各节点上下载软件包
./infra.yml -t repo_build

# 3. 打包离线安装包
make cache-pro
```

