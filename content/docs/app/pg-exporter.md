---
title: PG Exporter：容器化指标采集
aliases: [/docs/app/pg_exporter/]
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
make view                  # 请求配置的指标入口
```

默认镜像为 `pgsty/pg_exporter`（未固定版本标签）。`.env` 默认使用最小权限监控账号 `dbuser_monitor`；默认指标入口为 `http://127.0.0.1:9632/metrics`，宿主机端口映射默认绑定所有网卡接口。

## 端口与指标

```dotenv
PG_EXPORTER_PORT="9632"
PG_EXPORTER_LISTEN_ADDRESS=":9630"
PG_EXPORTER_TELEMETRY_PATH="/metrics"
PG_EXPORTER_URL="postgres://dbuser_monitor:DBUser.Monitor@10.10.10.10:5432/postgres?sslmode=disable"
```

`PG_EXPORTER_PORT` 控制宿主机发布端口。容器监听地址 `PG_EXPORTER_LISTEN_ADDRESS` 必须使用 `:PORT` 格式（例如 `:9730`，不能带 IP 或主机名）：Compose 会将其同时传给二进制的 `--web.listen-address` 参数与容器目标端口映射，保持监听与映射一致。

`make view` 通过 Python 3 解析最终生效的 Compose 配置（含环境变量或 `COMPOSE_ENV_FILES` 覆盖），自动请求实际发布端口与 `PG_EXPORTER_TELEMETRY_PATH` 指标路径。

数据库账号需具备所选采集器需要的监控权限。部署前替换示例口令，按实际网络设置 TLS 与 HBA，并限制指标端口的访问来源。
