---
title: Kong：API 网关
weight: 610
date: 2022-05-21
description: 使用 Pigsty Compose 模板部署 Kong（PostgreSQL 后端）。
module: [SOFTWARE]
categories: [参考]
---

[Kong](https://konghq.com/) 是开源 API Gateway。

Pigsty 的 `app/kong` 模板使用 PostgreSQL 作为配置存储，并自动执行一次迁移任务（`kong-migration`）。

## 快速开始

```bash
cd ~/pigsty/app/kong
vi .env         # 检查 KONG_PG_* 与端口配置
make
```

默认端口：

- Proxy HTTP：`8000`
- Proxy HTTPS：`8443`
- Admin API：`8001`

## 数据库准备

```bash
bin/pgsql-user pg-meta dbuser_kong
bin/pgsql-db   pg-meta kong
```

连接串示例：

```bash
postgres://dbuser_kong:DBUser.Kong@10.10.10.10:5432/kong
```

## 常用命令

```bash
make log
make stop
make clean
make pull
```

## 参考

- Kong 文档： https://docs.konghq.com/
- Pigsty 模板： https://github.com/pgsty/pigsty/tree/main/app/kong
