---
title: demo/el
weight: 905
description: Enterprise Linux (RHEL/Rocky/Alma) 专用配置模板
icon: fa-brands fa-redhat
categories: [参考]
---

`demo/el` 配置模板是针对 Enterprise Linux 系列发行版（RHEL、Rocky Linux、Alma Linux、Oracle Linux）优化的配置模板。


--------

## 配置概览

- 配置名称： `demo/el`
- 节点数量： 单节点
- 配置说明：Enterprise Linux 专用配置模板
- 适用系统：`el8`, `el9`, `el10`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)，[`demo/debian`](/docs/conf/debian/)

启用方式：

```bash
./configure -c demo/el [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/el.yml`](https://github.com/Vonng/pigsty/blob/main/conf/demo/el.yml)

{{< readfile file="yaml/demo/el.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`demo/el` 模板是针对 Enterprise Linux 系列发行版优化的配置。

**支持的发行版**：
- RHEL 8/9/10
- Rocky Linux 8/9/10
- Alma Linux 8/9/10
- Oracle Linux 8/9

**关键特性**：
- 使用 EPEL 和 PGDG 软件源
- 针对 YUM/DNF 包管理器优化
- 支持 EL 系列特定的软件包名称

**适用场景**：
- 企业生产环境（推荐 RHEL/Rocky/Alma）
- 需要长期支持和稳定性保障
- 使用红帽生态系统的环境

