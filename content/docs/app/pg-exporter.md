---
title: PG Exporter：容器化指标采集
weight: 655
description: 使用独立 Docker Compose 模板运行 PG Exporter，配置数据库连接、监听端口与指标路径。
module: [SOFTWARE]
categories: [参考]
---

[`app/pg_exporter`](https://github.com/pgsty/pigsty/tree/main/app/pg_exporter) 提供独立的 PG Exporter 容器示例，用于采集外部 PostgreSQL 指标。Pigsty PGSQL 模块自身已管理原生 exporter，使用本模板时选择独立端口，避免与已有服务冲突。

## 快速开始

```bash
cd ~/pigsty/app/pg_exporter
vi .env                    # 修改数据库连接与端口
make up
make view                  # 请求实际发布端口上的指标
```

默认镜像为 `pgsty/pg_exporter`，未固定版本；默认通过 `dbuser_monitor` 连接 `10.10.10.10:5432/postgres`，指标入口为 `http://127.0.0.1:9632/metrics`。

## 端口与指标

```dotenv
PG_EXPORTER_PORT=9632
PG_EXPORTER_LISTEN_ADDRESS=:9630
PG_EXPORTER_TELEMETRY_PATH=/metrics
PG_EXPORTER_URL=postgres://dbuser_monitor:DBUser.Monitor@10.10.10.10:5432/postgres?sslmode=disable
```

`PG_EXPORTER_PORT` 控制宿主机发布端口，`PG_EXPORTER_LISTEN_ADDRESS` 控制容器监听端口，并同时传给二进制的 `--web.listen-address` 参数与 Compose 的目标端口。此模板要求监听地址使用 `:PORT` 格式，例如 `:9730`，不要在其中填写 IP 或主机名。

`make view` 需要 Python 3，会请求实际发布端口与指标路径。修改后可用 `docker compose config` 检查端口映射，再将该地址加入监控采集配置。

数据库账号需具备所选采集器需要的监控权限。部署前替换示例口令，按实际网络设置 TLS 与 HBA，并限制指标端口的访问来源。
