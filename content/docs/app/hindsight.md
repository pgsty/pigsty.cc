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

- `HINDSIGHT_API_PORT`：容器内 API 监听端口，默认 `8888`（控制面连接地址 `HINDSIGHT_CP_DATAPLANE_API_URL` 默认自动联动此端口）
- `HINDSIGHT_API_PUBLISH_PORT`：API 宿主机发布端口，默认 `8888`
- `HINDSIGHT_UI_PUBLISH_PORT`：UI 宿主机发布端口，默认 `9999`
- `HINDSIGHT_DB_HOST` / `HINDSIGHT_DB_PORT` / `HINDSIGHT_DB_NAME` / `HINDSIGHT_DB_USER` / `HINDSIGHT_DB_PASSWORD`
- `HINDSIGHT_API_VECTOR_EXTENSION`：默认 `pgvector`
- `HINDSIGHT_API_TEXT_SEARCH_EXTENSION`：默认 `native`
- `HINDSIGHT_API_LLM_PROVIDER`：默认 `none`
- `HF_HUB_OFFLINE`：默认 `1`，直接使用官方镜像内预置的本地模型，避免运行时请求 Hugging Face Hub；如需下载未缓存的新模型，将其设为 `0` 并开放出站网络

默认 `none` LLM Provider 可以保留文本并使用本地 embedding/reranker 模型召回；事实抽取、反思与整合能力需要配置 Ollama 或 OpenAI 兼容 API。

Compose 将命名卷 `hindsight-cache` 挂载到 `/home/hindsight/.cache`，利用 Docker 命名卷的首次 copy-up 机制保留镜像内预置模型并在容器重建后持久化缓存。

数据库需启用 `vector` 以及安装在 `public` 模式下的 `pg_trgm`（上游 trigram 索引迁移依赖 `public` 模式）。`conf/app/hindsight.yml` 已默认声明 `extensions: [ vector, { name: pg_trgm, schema: public } ]`；若接入已有数据库，请确认 `pg_trgm` 位于 `public`（`CREATE EXTENSION IF NOT EXISTS` 不会移动已安装在其他模式中的扩展）。

## 运维命令

```bash
cd /opt/hindsight
make up
make health
make log
make info
make down
make pull
```

容器内置健康检查与 `make health` 会同时探测 API 的 `/health/ready` 和 UI 代理的 `/api/banks?limit=1`，确认数据面就绪且控制面能够正常连接 API。

## 参考

- Hindsight 项目： https://github.com/vectorize-io/hindsight
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/hindsight.yml
