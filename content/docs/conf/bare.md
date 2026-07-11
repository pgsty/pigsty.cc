---
title: demo/bare
weight: 1005
description: 只声明 INFRA、ETCD 与单节点 PostgreSQL 的最小可读配置示例
icon: fa-solid fa-seedling
categories: [参考]
---

`demo/bare` 是最小化的 Pigsty 配置示例，只保留三个核心分组和三个全局参数，用于展示一份可工作的 Inventory 骨架。


--------

## 配置概览

- 配置名称：`demo/bare`
- 节点数量：单节点
- 模块：INFRA、ETCD、PGSQL
- 相关配置：[`meta`](/docs/conf/meta/)、[`slim`](/docs/conf/slim/)

```bash
./configure -c demo/bare [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/bare.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/bare.yml)

{{< readfile file="yaml/demo/bare.yml" code="true" lang="yaml" >}}


--------

## 配置解读

该模板依赖 Pigsty 参数默认值，没有预置业务用户、数据库、扩展、备份策略或安全加固。它适合学习配置层级或作为最小定制起点；正式环境应显式补齐密码、HBA、备份与防护参数。
