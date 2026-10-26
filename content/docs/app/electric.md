---
title: Electric：PostgreSQL 同步引擎
weight: 645
description: 使用 Pigsty 自建 Electric，同步 PostgreSQL 数据到前端应用，支持部分复制与实时分发。
module: [SOFTWARE]
categories: [参考]
---

[**Electric**](https://electric-sql.com/) 是 PostgreSQL 同步引擎，专注于将数据库变更高效分发到前端/边缘应用。

Pigsty 提供 `app/electric` 配置模板（`conf/app/electric.yml`），用于配置数据库、容器与访问入口。

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

模板默认还启用并发布 `8003` 指标端口。应配置定期抓取；不需要指标时，在启动前从 `pigsty.yml` 与应用 `.env` 中移除 `ELECTRIC_PROMETHEUS_PORT`，并删除 Compose 对应的端口映射。启用而不抓取的 reporter 可能持续积累指标。

## 关键配置

`conf/app/electric.yml` 会在 `apps.electric.conf` 中覆盖 `/opt/electric/.env`。常见参数：

- `DATABASE_URL`：Electric 使用的 PostgreSQL 连接串（需要复制权限）
- `ELECTRIC_PORT`：容器监听端口与宿主机发布端口，默认均为 `8002`
- `ELECTRIC_PROMETHEUS_PORT`：默认启用的指标端口，值为 `8003`
- `ELECTRIC_INSECURE`：开发环境可设为 `true`，生产环境建议关闭并使用密钥

模板使用未固定标签的 `electricsql/electric` 镜像，部署前应固定与配置兼容的版本或摘要。

## 缓存与版本差异

Compose 没有配置缓存持久卷。需要在容器重建后保留 shape 缓存时，应同时设置存储参数和卷挂载，不能只在 `.env` 中指定目录。

开发模板增加了 `electric-data` 卷，将容器监听端口设为 `3000`、宿主机端口设为 `ELECTRIC_PUBLISH_PORT=8002`，并默认关闭指标端口，需要配套更新 Compose。其 Electric 1.7.12 配置使用 `ELECTRIC_PERSISTENT_STATE=FILE`、`ELECTRIC_STORAGE=FAST_FILE` 和 `ELECTRIC_STORAGE_DIR=/var/lib/electric`；该版本不接受旧的 `ELECTRIC_STORAGE=FILE`。

PostgreSQL 保存权威业务数据，缓存卷不能替代数据库备份。缓存丢失或 PostgreSQL 时间线变化时，客户端仍须处理 `409` / `must-refetch` 并重新同步。

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
