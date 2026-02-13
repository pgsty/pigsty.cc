---
title: app/dify
weight: 875
description: 使用 Pigsty 托管的 PostgreSQL 部署 Dify AI 应用开发平台
icon: fa-solid fa-brain
categories: [参考]
---

`app/dify` 配置模板提供了自建 Dify AI 应用开发平台的参考配置，使用 Pigsty 托管的 PostgreSQL 和 pgvector 作为向量存储。

更多细节，请参考 **[Dify 部署教程](/docs/app/dify/)**


--------

## 配置概览

- 配置名称： `app/dify`
- 节点数量： 单节点
- 配置说明：使用 Pigsty 托管的 PostgreSQL 部署 Dify
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/dify [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/dify.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/dify.yml)

{{< readfile file="yaml/app/dify.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`app/dify` 模板提供了 Dify AI 应用开发平台的一键部署方案。

**Dify 是什么**：
- 开源的 LLM 应用开发平台
- 支持 RAG、Agent、Workflow 等 AI 应用模式
- 提供可视化的 Prompt 编排和应用构建界面
- 支持多种 LLM 后端（OpenAI、Claude、本地模型等）

**关键特性**：
- 使用 Pigsty 管理的 PostgreSQL 替代 Dify 自带的数据库
- 使用 pgvector 作为向量存储（替代 Weaviate/Qdrant）
- 支持 HTTPS 和自定义域名
- 数据持久化到独立目录 `/data/dify`

**访问方式**：

```bash
# Dify Web 界面
http://dify.pigsty:5001

# 或通过 Nginx 代理
https://dify.pigsty
```

**适用场景**：
- 企业内部 AI 应用开发平台
- RAG 知识库问答系统
- LLM 驱动的自动化工作流
- AI Agent 开发与部署

**注意事项**：
- 必须修改 `SECRET_KEY`，使用 `openssl rand -base64 42` 生成
- 需要配置 LLM API 密钥（如 OpenAI API Key）
- Docker 网络需要能访问 PostgreSQL（已配置 172.17.0.0/16 HBA 规则）
- 建议配置代理以加速 Python 包下载

