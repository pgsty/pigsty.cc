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

Prometheus 指标端点默认关闭且未发布端口。除非已配置定期抓取，否则不要启用 `ELECTRIC_PROMETHEUS_PORT`：启用但未被抓取的 reporter 会持续保留指标，最终可能耗尽内存。

## 关键配置

`conf/app/electric.yml` 会在 `apps.electric.conf` 中覆盖 `/opt/electric/.env`。常见参数：

- `DATABASE_URL`：Electric 使用的 PostgreSQL 连接串（需要 `REPLICATION` 权限）
- `ELECTRIC_PORT`：容器内监听端口，默认 `3000`
- `ELECTRIC_PUBLISH_PORT`：宿主机发布端口，默认 `8002`
- `ELECTRIC_PERSISTENT_STATE`：默认 `FILE`，在容器重建时保留同步状态
- `ELECTRIC_STORAGE`：默认 `FAST_FILE`（Electric 1.7.12+ 接受 `MEMORY` 或 `FAST_FILE`，旧值 `FILE` 启动会失败）
- `ELECTRIC_STORAGE_DIR`：容器内持久化绝对路径，默认 `/var/lib/electric`
- `ELECTRIC_INSECURE`：开发环境默认为 `true`；生产环境暴露前必须设为 `false` 并配置 `ELECTRIC_SECRET`

模板默认跟随上游未固定标签的 `electricsql/electric` 镜像（验证快照对应 sync-service `1.7.12`）；需要受控升级窗口的生产环境建议显式固定镜像版本或摘要。

## 缓存与持久化

Compose 默认将命名卷 `electric-data` 挂载到 `ELECTRIC_STORAGE_DIR`（默认 `/var/lib/electric`），在同版本容器重建且 PostgreSQL 时间线未变时保留 shape 句柄与日志数据。

PostgreSQL 保存权威业务数据，Electric 缓存卷不能替代数据库备份。当缓存卷丢失或 PostgreSQL 实例身份/时间线发生变化时，缓存的 shape 会失效，客户端仍须处理 `409` / `must-refetch` 控制消息并丢弃本地缓存重新同步。

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
