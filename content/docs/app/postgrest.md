---
title: PostgREST：自动 API
weight: 640
date: 2022-05-21
description: 使用 Pigsty Compose 模板部署 PostgREST，基于 PostgreSQL 模式自动生成 REST API。
module: [SOFTWARE]
categories: [参考]
---

[PostgREST](https://postgrest.org/) 可以将 PostgreSQL schema 直接暴露为 REST API。

Pigsty 提供 `app/postgrest` 模板，默认端口 `8884`。

## 快速开始

```bash
cd ~/pigsty/app/postgrest
vi .env         # 检查 DB_URI / DB_SCHEMA / JWT
make up
```

默认入口：

- `http://<IP>:8884`
- 若配置了入口域名，可通过 `http://api.pigsty` 访问

## 关键配置

`.env` 常用参数：

- `POSTGREST_DB_URI`：数据库连接串
- `POSTGREST_DB_SCHEMA`：暴露的 schema（默认 `pigsty`）
- `POSTGREST_DB_ANON_ROLE`：匿名角色
- `POSTGREST_JWT_SECRET`：JWT 密钥

## Swagger UI（可选）

可单独拉起 Swagger UI 预览 API：

```bash
docker run --rm --name swagger -p 8882:8080 \
  -e API_URL=http://10.10.10.10:8884 \
  swaggerapi/swagger-ui
```

访问 `http://<IP>:8882`。

## 常用命令

```bash
make up
make log
make stop
make clean
```

## 参考

- PostgREST 文档： https://postgrest.org/en/stable/
- Pigsty 模板： https://github.com/pgsty/pigsty/tree/main/app/postgrest
