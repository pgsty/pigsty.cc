---
title: Teable：AI 无代码数据库
weight: 580
description: 使用 Pigsty 自建 Teable，并接入外部 PostgreSQL 与 Silo。
module: [SOFTWARE]
categories: [参考]
---

[**Teable**](https://teable.io/) 是面向团队协作的无代码数据库平台。

Pigsty 提供 `app/teable` 模板（`conf/app/teable.yml`），使用 **PostgreSQL + Silo + Docker**。Compose 只定义 Teable 应用，未附带 Redis；所选 Teable 版本需要缓存时，须另外提供 Redis。

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

使用外部 Redis 时，将 `BACKEND_CACHE_PROVIDER=redis` 与完整的 `BACKEND_CACHE_REDIS_URI` 写入应用配置，并按 URI 规则编码密码。`.env` 使用 Compose 插值规则；不会自动创建 Redis 服务。

## 开发版缓存模板

开发版增加了应用专用 Redis（`redis:7-alpine`），通过 `REDIS_PASSWORD` 配置认证，使用 `teable-cache` 卷保存 AOF，不发布 Redis 宿主机端口；Compose 会生成缓存 URI，并等待 Redis 就绪后启动 Teable。

这套缓存配置需要配套的 Compose，单独增加 `REDIS_VERSION` 或 `REDIS_PASSWORD` 不会启用它。无论采用哪种部署方式，启动前都应修改演示密码，备份 PostgreSQL 与 `TEABLE_DATA` 目录，并检查应用 `/health` 状态。

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
