---
title: Hindsight：AI 长期记忆
weight: 567
description: 使用 Pigsty 自建 Hindsight，并使用外部 PostgreSQL 存储长期记忆。
module: [SOFTWARE]
categories: [参考]
---

[**Hindsight**](https://github.com/vectorize-io/hindsight) 是面向 AI Agent 的 PostgreSQL-native 长期记忆服务。

Pigsty 提供 `app/hindsight` 配置模板（`conf/app/hindsight.yml`），默认使用 Pigsty 托管的 PostgreSQL，而不是 Hindsight 内置的开发数据库。

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/hindsight
vi pigsty.yml                 # 修改域名、数据库密码与 LLM 设置
./deploy.yml
./docker.yml
./app.yml
```

默认访问地址：

- UI：`http://hs.pigsty` 或 `http://<IP>:9999`
- API：`http://hs-api.pigsty` 或 `http://<IP>:8888`

## 关键配置

`conf/app/hindsight.yml` 会在 `apps.hindsight.conf` 中覆盖 `/opt/hindsight/.env`。重点参数：

- `HINDSIGHT_API_PUBLISH_PORT`：API 对外端口，默认 `8888`
- `HINDSIGHT_UI_PUBLISH_PORT`：UI 对外端口，默认 `9999`
- `HINDSIGHT_DB_HOST` / `HINDSIGHT_DB_PORT` / `HINDSIGHT_DB_NAME` / `HINDSIGHT_DB_USER` / `HINDSIGHT_DB_PASSWORD`
- `HINDSIGHT_API_VECTOR_EXTENSION`：默认 `pgvector`
- `HINDSIGHT_API_TEXT_SEARCH_EXTENSION`：默认 `native`
- `HINDSIGHT_API_LLM_PROVIDER`：默认 `none`

默认 `none` LLM Provider 只保证服务可启动；事实抽取、反思与整合能力需要配置 Ollama 或 OpenAI 兼容 API。

## 运维命令

```bash
cd /opt/hindsight
make up
make log
make info
make down
make pull
```

## 参考

- Hindsight 项目： https://github.com/vectorize-io/hindsight
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/hindsight.yml
