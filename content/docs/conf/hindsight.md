---
title: app/hindsight
weight: 890
description: 使用 Pigsty 托管的 PostgreSQL 部署 Hindsight AI 长期记忆服务
icon: fa-solid fa-brain
categories: [参考]
---

`app/hindsight` 配置模板用于部署 Hindsight，并将其内置开发数据库替换为 Pigsty 托管的外部 PostgreSQL。

更多细节请参考：**[Hindsight 部署教程](/docs/app/hindsight/)**


--------

## 配置概览

- 配置名称： `app/hindsight`
- 节点数量：单节点
- 配置说明：部署 Hindsight all-in-one 容器，创建外部 PostgreSQL 数据库，并配置 UI/API 两个入口
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/hindsight [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/hindsight.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/hindsight.yml)

{{< readfile file="yaml/app/hindsight.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`app/hindsight` 模板默认部署：

- Hindsight 容器：`ghcr.io/vectorize-io/hindsight:latest`
- UI 端口：`9999`
- API 端口：`8888`
- PostgreSQL 数据库：`hindsight`
- 默认向量扩展：`vector`
- Nginx 入口：`hs.pigsty` -> `9999`，`hs-api.pigsty` -> `8888`

**访问方式**：

```bash
http://hs.pigsty
http://hs-api.pigsty
http://<IP>:9999
http://<IP>:8888
```

模板默认 `HINDSIGHT_API_LLM_PROVIDER=none`，服务可以先启动，但事实抽取、反思等功能需要再配置真实 LLM 后端。
