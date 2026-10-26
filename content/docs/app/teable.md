---
title: Teable：AI 无代码数据库
weight: 580
description: 使用 Pigsty 自建 Teable，并接入外部 PostgreSQL 与 Silo。
module: [SOFTWARE]
categories: [参考]
---

[**Teable**](https://teable.io/) 是面向团队协作的无代码数据库平台。

Pigsty 提供 `app/teable` 模板（`conf/app/teable.yml`），使用 **PostgreSQL + Silo + Docker**，并由 Compose 启动应用专用 Redis 缓存，无需单独部署 `REDIS` 模块。

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/teable
vi pigsty.yml                 # 修改密码、域名、邮件参数
./deploy.yml                  # 安装基础设施、PostgreSQL、Silo
./docker.yml
./app.yml
```

默认入口：

- `http://<IP>:8890`
- `http://tea.pigsty`

## 关键配置

模板会将以下参数写入 `/opt/teable/.env`：

- `POSTGRES_HOST/POSTGRES_PORT/POSTGRES_DB/POSTGRES_USER/POSTGRES_PASSWORD`
- `PRISMA_DATABASE_URL`
- `PUBLIC_ORIGIN`（对外访问地址）
- `PUBLIC_DATABASE_PROXY`
- `TEABLE_PORT`（默认 `8890`）
- `TEABLE_DATA`（默认 `/data/teable`，用于持久化应用资产）
- `REDIS_VERSION`（默认 `7-alpine`）、`REDIS_PASSWORD`、`BACKEND_CACHE_PROVIDER=redis`

Compose 根据最终的 `REDIS_HOST`、`REDIS_PORT`、`REDIS_PASSWORD` 与 `REDIS_DB` 生成 `BACKEND_CACHE_REDIS_URI`。升级时移除旧 `.env` 中由其他变量拼接出的 URI，除非确实需要提供完整的外部 Redis 连接串；在 `apps.teable.conf` 中写入 `${...}` 不会再次展开。

Redis 启用密码认证与 AOF，保存在 `teable-cache` 命名卷中，不发布宿主机端口。启动前修改演示密码；Teable 会等待 Redis 健康后启动，并通过应用的 `/health` 端点判断就绪状态。备份时同时保留 PostgreSQL 数据库与 `TEABLE_DATA` 目录。

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
