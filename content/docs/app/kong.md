---
title: Kong：API 网关
weight: 610
date: 2022-05-21
description: 使用 Pigsty Compose 模板部署 Kong（PostgreSQL 后端）。
module: [SOFTWARE]
categories: [参考]
---

[Kong](https://konghq.com/) 是开源 API Gateway。

Pigsty 的 `app/kong` 模板使用 PostgreSQL 作为配置存储。新空库需要显式执行一次 `kong-migration` 初始化任务，日常启动不会自动运行该任务。

## 快速开始

Admin API 默认发布到宿主机所有接口。启动前，将 `docker-compose.yml` 中 Admin API 的端口映射改为 `"127.0.0.1:${KONG_ADMIN_PORT}:${KONG_ADMIN_PORT}"`，保留另外两个代理端口映射。

```bash
cd ~/pigsty/app/kong
vi .env         # 检查 KONG_PG_* 与端口配置
vi docker-compose.yml # 限制 Admin API 的宿主机监听地址
make bootstrap  # 仅首次初始化全新空库时执行
make up
```

完成上述修改后的端口：

- Proxy HTTP：`8000`
- Proxy HTTPS：`8443`
- Admin API：`127.0.0.1:8001`，仅宿主机回环地址，远程管理使用 SSH 隧道

`make bootstrap` 对应 `kong migrations bootstrap`，不能用作已有数据库的升级命令。模板默认使用 `kong:latest`；升级前记录镜像版本、备份数据库，并按对应版本的 Kong 迁移流程处理。

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
