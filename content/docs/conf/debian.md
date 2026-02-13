---
title: demo/debian
weight: 910
description: Debian/Ubuntu 专用配置模板
icon: fa-brands fa-debian
categories: [参考]
---

`demo/debian` 配置模板是针对 Debian 和 Ubuntu 发行版优化的配置模板。


--------

## 配置概览

- 配置名称： `demo/debian`
- 节点数量： 单节点
- 配置说明：Debian/Ubuntu 专用配置模板
- 适用系统：`d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)，[`demo/el`](/docs/conf/el/)

启用方式：

```bash
./configure -c demo/debian [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/debian.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/debian.yml)

{{< readfile file="yaml/demo/debian.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`demo/debian` 模板是针对 Debian 和 Ubuntu 发行版优化的配置。

**支持的发行版**：
- Debian 12 (Bookworm)
- Debian 13 (Trixie)
- Ubuntu 22.04 LTS (Jammy)
- Ubuntu 24.04 LTS (Noble)

**关键特性**：
- 使用 PGDG APT 软件源
- 针对 APT 包管理器优化
- 支持 Debian/Ubuntu 特定的软件包名称

**适用场景**：
- 云服务器（Ubuntu 广泛使用）
- 容器环境（Debian 常用作基础镜像）
- 开发测试环境

