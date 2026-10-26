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
make view                  # 检查默认 /metrics 入口
```

默认镜像为 `pgsty/pg_exporter`，未固定版本。`.env` 使用 `dbuser_dba`，建议改用具备监控权限的 `dbuser_monitor`；默认指标入口为 `http://127.0.0.1:9632/metrics`，宿主机端口映射并不限于回环地址。

## 端口与指标

```dotenv
PG_EXPORTER_PORT=9632
PG_EXPORTER_LISTEN_ADDRESS=:9630
PG_EXPORTER_TELEMETRY_PATH=/metrics
PG_EXPORTER_URL=postgres://dbuser_monitor:DBUser.Monitor@10.10.10.10:5432/postgres?sslmode=disable
```

`PG_EXPORTER_PORT` 控制宿主机发布端口，Compose 的容器目标端口固定为 `9630`。若要修改容器监听端口，应在 Compose 中显式设置二进制的 `--web.listen-address` 参数，并同步修改端口映射，不能只改 `.env`。

`make view` 读取 `.env` 中的发布端口，但路径固定为 `/metrics`。修改后用 `docker compose config` 检查映射，并直接请求实际指标地址。

开发模板才会联动 `PG_EXPORTER_LISTEN_ADDRESS`（要求 `:PORT` 格式）与 Compose 端口，并让 `make view` 根据最终配置选择地址和路径。

数据库账号需具备所选采集器需要的监控权限。部署前替换示例口令，按实际网络设置 TLS 与 HBA，并限制指标端口的访问来源。
