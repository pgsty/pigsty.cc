---
title: Teable：AI 无代码数据库
weight: 580
description: 使用 Pigsty 自建 Teable，并接入外部 PostgreSQL 与 Silo。
module: [SOFTWARE]
categories: [参考]
---

[**Teable**](https://teable.io/) 是面向团队协作的无代码数据库平台。

Pigsty 提供 `app/teable` 模板（`conf/app/teable.yml`），使用 **PostgreSQL + Docker**，并在 Compose 中内置应用专用认证 Redis 缓存服务（`teable-cache`）。

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/teable
vi pigsty.yml                 # 修改数据库密码、REDIS_PASSWORD、域名与邮件参数
./deploy.yml                  # 安装基础设施与 PostgreSQL
./docker.yml
./app.yml
```

默认入口：

- `http://<IP>:8890`
- `http://tea.pigsty`

## 关键配置

模板会将以下参数写入 `/opt/teable/.env`：

- `POSTGRES_HOST` / `POSTGRES_PORT` / `POSTGRES_DB` / `POSTGRES_USER` / `POSTGRES_PASSWORD`
- `PRISMA_DATABASE_URL`
- `PUBLIC_ORIGIN`（对外访问地址）
- `PUBLIC_DATABASE_PROXY`
- `TEABLE_PORT`（默认 `8890`）
- `TEABLE_DATA`（默认 `/data/teable`，用于持久化应用资产）
- `REDIS_VERSION`（默认 `7-alpine`）与 `REDIS_PASSWORD`（内置 Redis 缓存口令，部署前必须修改）

## 缓存与健康检查

Compose 默认启动应用专用的 `teable-cache`（`redis:7-alpine`），通过 `REDIS_PASSWORD` 启用密码认证，使用命名卷 `teable-cache` 持久化 AOF，且不向宿主机发布 Redis 端口。Compose 会根据 `REDIS_PASSWORD` 与 `REDIS_PORT` 自动组装 `BACKEND_CACHE_REDIS_URI`，等待 Redis 健康检查通过后再启动 Teable，并对 Teable 后端 `/health` 执行就绪探测。

如需改用外部 Redis，可在配置中显式设置完整的 `BACKEND_CACHE_REDIS_URI`（密码中的特殊字符需按 URI 规则编码）。从旧版手工 `.env` 升级时，请移除旧 `.env` 中写死的派生 `BACKEND_CACHE_REDIS_URI` 行，以免覆盖新的 `REDIS_PASSWORD` 或端口配置。同时请将 PostgreSQL 数据库与 `TEABLE_DATA` 资产目录一并纳入备份。

## 运维命令

```bash
cd /opt/teable
make up
make log
make down
```

## 参考

- Teable 文档： https://help.teable.io/
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/teable.yml
