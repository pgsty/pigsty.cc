---
title: PostgREST：自动 API
weight: 640
date: 2022-05-21
description: 使用 Pigsty Compose 模板部署 PostgREST，基于 PostgreSQL 模式自动生成 REST API。
module: [SOFTWARE]
categories: [参考]
---

[PostgREST](https://postgrest.org/) 可以将 PostgreSQL schema 直接暴露为 REST API。

Pigsty 提供 `app/postgrest` 模板，以只读用户 `dbuser_view` 提供 Pigsty CMDB API 示例。默认将 `8884` 端口发布到宿主机所有接口；下面先将其限制到回环地址。

## 快速开始

```bash
cd ~/pigsty/app/postgrest
vi .env         # 检查 DB_URI / DB_SCHEMA / JWT
vi docker-compose.yml
```

将 `postgrest` 服务的端口映射替换为：

```yaml
ports:
  - "127.0.0.1:${POSTGREST_SERVER_PORT}:${POSTGREST_SERVER_PORT}"
```

再执行 `make up`。完成上述修改后的入口：

- `http://127.0.0.1:8884`
- 远程访问使用 SSH 隧道，或配置带认证的 Nginx 门户 `http://api.pigsty`

## 关键配置

`.env` 常用参数：

- `POSTGREST_DB_URI`：数据库连接串
- `POSTGREST_DB_SCHEMA`：暴露的 schema（默认 `pigsty`）
- `POSTGREST_DB_ANON_ROLE`：匿名角色
- `POSTGREST_JWT_SECRET`：JWT 密钥

将 `POSTGREST_JWT_SECRET` 改为至少 32 字符的随机值。配置 JWT 密钥本身不会禁止匿名访问；`POSTGREST_DB_ANON_ROLE` 仍决定未认证请求的数据库权限。使用 `make up` 启动以应用 Compose 配置；`make run` 是独立的 `docker run` 命令，不会采用上面修改的端口映射。

## Swagger UI（可选）

可单独拉起 Swagger UI 预览 API：

```bash
docker run --rm --name swagger -p 127.0.0.1:8883:8080 \
  -e API_URL=http://127.0.0.1:8884 \
  swaggerapi/swagger-ui
```

访问 `http://127.0.0.1:8883`。服务位于远程主机时，先转发两个端口：

```bash
ssh -L 8883:127.0.0.1:8883 -L 8884:127.0.0.1:8884 your-server
```

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
