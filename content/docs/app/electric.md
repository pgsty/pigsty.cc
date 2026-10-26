---
title: Electric：PostgreSQL 同步引擎
weight: 645
description: 使用 Pigsty 自建 Electric，同步 PostgreSQL 数据到前端应用，支持部分复制与实时分发。
module: [SOFTWARE]
categories: [参考]
---

[**Electric**](https://electric-sql.com/) 是 PostgreSQL 同步引擎，专注于将数据库变更高效分发到前端/边缘应用。

Pigsty 提供了 `app/electric` 配置模板（`conf/app/electric.yml`），可一键完成数据库、容器与入口配置。

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

Prometheus 指标默认关闭。只有已经配置定期抓取时，才设置 `ELECTRIC_PROMETHEUS_PORT`，并按抓取端所在网络配置端口访问；默认 Compose 不发布指标端口。启用而不抓取的 reporter 会持续保留指标，可能耗尽内存。

## 关键配置

`conf/app/electric.yml` 会在 `apps.electric.conf` 中覆盖 `/opt/electric/.env`。常见参数：

- `DATABASE_URL`：Electric 使用的 PostgreSQL 连接串（需要复制权限）
- `ELECTRIC_PORT`：容器内 HTTP 监听端口，默认 `3000`
- `ELECTRIC_PUBLISH_PORT`：宿主机 HTTP 发布端口，默认 `8002`
- `ELECTRIC_PERSISTENT_STATE`：默认 `FILE`，持久化 shape 元数据
- `ELECTRIC_STORAGE`：默认 `FAST_FILE`，持久化 shape 日志；旧值 `FILE` 已不适用于当前模板验证的版本
- `ELECTRIC_STORAGE_DIR`：容器内绝对路径，默认 `/var/lib/electric`，`electric-data` 命名卷随此参数挂载
- `ELECTRIC_PROMETHEUS_PORT`：可选指标监听端口，默认不启用
- `ELECTRIC_INSECURE`：开发环境可设为 `true`，生产环境建议关闭并使用密钥

模板默认使用未固定标签的 `electricsql/electric` 镜像；源码记录的 2026-08-27 验证版本为 `1.7.12`。需要可控升级与回滚时，部署前固定经过验证的标签或摘要。

`electric-data` 卷保存缓存，PostgreSQL 保存权威业务数据。相同版本、相同 PostgreSQL 时间线下重建容器可以保留 shape；丢失缓存卷或 PostgreSQL 时间线、身份变化时，客户端仍须处理 `409` / `must-refetch`，清空本地 shape 后重新同步。数据库与缓存需要按各自用途管理。

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
