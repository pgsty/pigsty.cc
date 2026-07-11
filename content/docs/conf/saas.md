---
title: demo/saas
weight: 1080
description: 传统单节点 SaaS 组件组合示例，包含 PostgreSQL、MinIO、Redis 与多应用入口
icon: fa-solid fa-layer-group
categories: [参考]
---

`demo/saas` 是一个传统的功能丰富单节点示例，预置多组业务用户、数据库和应用入口，用于展示 PostgreSQL、MinIO、Redis、Docker 与 Portal 的组合方式。


--------

## 配置概览

- 配置名称：`demo/saas`
- 节点数量：单节点
- 模块：INFRA、ETCD、MINIO、PGSQL、REDIS、DOCKER
- 相关配置：[`rich`](/docs/conf/rich/)、[`supabase`](/docs/conf/supabase/)

```bash
./configure -c demo/saas [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/saas.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/saas.yml)

{{< readfile file="yaml/demo/saas.yml" code="true" lang="yaml" >}}


--------

## 配置解读

模板预置 Grafana、Bytebase、Kong、Gitea、Wiki、NocoDB 与 Odoo 等数据库账号/数据库占位项，使用 MinIO 作为 pgBackRest 仓库，并提供 Redis 主从示例和多个 Portal 域名。

这是兼容与参考用途的组合模板，并不等于所有应用都会自动安装。新部署优先选用 [`rich`](/docs/conf/rich/) 与对应的 `app/*` 专用模板；部署前删除不需要的账号、数据库和入口并更换所有密码。
