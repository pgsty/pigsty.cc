---
title: Silo：S3 对象存储
weight: 615
description: 使用 Docker Compose 部署独立 Silo 对象存储，提供 S3 API 与 Web 控制台。
module: [SOFTWARE]
categories: [参考]
---

[**Silo**](https://github.com/pgsty/silo) 是 Pigsty 维护的 S3 兼容对象存储。`app/silo` 自 2026 年 8 月起替代原 `app/minio`，适合应用专用的单节点存储。共享备份仓库、存储桶与用户初始化、监控、TLS 或多节点集群使用 [**MINIO 模块**](/docs/minio/)。

本模板尚未包含在 v4.5.0 发布包中，需要配套的开发版 `app/silo/` 与 `conf/app/silo.yml`。

## 使用配置模板

[`app/silo` 配置模板](/docs/conf/silo/) 提供单节点部署：

```bash
./configure -c app/silo
vi pigsty.yml              # 修改口令、域名、数据目录
./deploy.yml
./docker.yml -l silo
./app.yml -l silo
```

默认 S3 API 为 `http://<IP>:9000`，Web 控制台为 `http://<IP>:9001`。配置好 DNS 后，还可通过 `sss.pigsty` 与 `silo.pigsty` 门户访问。

## 直接运行 Compose

在已安装 Docker Compose 的主机上：

```bash
cd ~/pigsty/app/silo
vi .env
make up
make health
```

| 参数 | 默认值 | 用途 |
|:-----|:-------|:-----|
| `SILO_IMAGE` | `docker.io/pgsty/silo:latest` | 应用镜像，可按升级需要固定标签或摘要 |
| `SILO_ROOT_USER` | `siloadmin` | 根用户，部署前修改 |
| `SILO_ROOT_PASSWORD` | `S3User.Silo` | 根口令，部署前修改 |
| `SILO_DATA` | `/data/silo` | 宿主机持久化对象目录 |
| `SILO_PORT` | `9000` | S3 API 宿主机端口 |
| `SILO_CONSOLE_PORT` | `9001` | 控制台宿主机端口 |
| `SILO_BROWSER_REDIRECT_URL` | 空字符串 | 控制台的完整外部 URL |

当控制台通过非默认端口或反向代理访问时，设置 `SILO_BROWSER_REDIRECT_URL`，例如 `https://silo.example.com` 或 `http://silo.example.com:19001`。容器无法自动推断外部主机名与发布端口。

APP 对外使用 `SILO_*` 参数，Compose 会将凭据映射为兼容的 `MINIO_ROOT_*` 容器变量。若与原生 MINIO 模块共用主机，必须使用独立的数据目录与端口。

## 运维与数据

```bash
make view     # 显示访问入口
make log      # 查看日志
make info     # 查看容器状态
make health   # 检查 S3 就绪状态与控制台 HTTP 入口
make stop     # 停止服务
make clean    # 删除容器，保留宿主机数据
make pull     # 拉取配置的镜像
make save     # 保存镜像到 /tmp/docker/silo.tgz
make load     # 加载该镜像缓存
```

对象保存在 `SILO_DATA` 中，需单独备份；容器重建不等于数据备份。迁移旧 `app/minio` 时先保留原数据与配置，再准备新部署并验证对象读写，不要让两个服务同时使用同一个数据目录。
