---
title: Electric：PostgreSQL 同步引擎
weight: 645
description: 使用 Pigsty v4.1 自建 Electric，同步 PostgreSQL 数据到前端应用，支持部分复制与实时分发。
module: [SOFTWARE]
categories: [参考]
---

[**Electric**](https://electric-sql.com/) 是 PostgreSQL 同步引擎，专注于将数据库变更高效分发到前端/边缘应用。

Pigsty 在 v4.1 提供了 `app/electric` 配置模板（`conf/app/electric.yml`），可一键完成数据库、容器与入口配置。

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/electric
vi pigsty.yml                 # 修改域名、密码、密钥
./deploy.yml
./docker.yml
./app.yml
```

默认访问地址：

- `http://<IP>:8002`
- `http://elec.pigsty`（按模板默认域名）

指标端口默认 `8003`（`ELECTRIC_PROMETHEUS_PORT`）。

## 关键配置

`conf/app/electric.yml` 会在 `apps.electric.conf` 中覆盖 `/opt/electric/.env`。常见参数：

- `DATABASE_URL`：Electric 使用的 PostgreSQL 连接串（需要复制权限）
- `ELECTRIC_PORT`：Electric HTTP 服务端口（默认 `8002`）
- `ELECTRIC_PROMETHEUS_PORT`：指标端口（默认 `8003`）
- `ELECTRIC_INSECURE`：开发环境可设为 `true`，生产环境建议关闭并使用密钥

## 运维命令

```bash
cd /opt/electric
make up
make logs
make down
```

## 参考

- Electric 官网： https://electric-sql.com/
- Electric 文档： https://electric-sql.com/docs
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/electric.yml
