---
title: PGAdmin：GUI 工具
weight: 630
date: 2022-04-25
description: 使用Docker拉起PgAdmin4，并加载Pigsty服务器列表
module: [SOFTWARE]
categories: [任务]
---

[pgAdmin](https://www.pgadmin.org/) 是最受欢迎且功能丰富的 PostgreSQL 开源管理和开发平台，PostgreSQL 是世界上最先进的开源数据库。

--------

## 快速开始

Pigsty 内置（但可选）支持 pgAdmin，它使用 [Docker](/docs/docker) Compose 启动 pgadmin：

```bash
./docker.yml
./app.yml -e app=pgadmin
```

pgadmin 的默认端口是 `8885`，您可以通过 IP:端口访问它：`http://10.10.10.10:8885`。

默认凭据在 [`.env`](https://github.com/pgsty/pigsty/blob/main/app/pgadmin/.env) 中定义，用户名：`admin@pigsty.cc`，密码：`pigsty`。

--------

## 自定义

在 `/opt/pgadmin/.env` 中自定义 pgadmin 配置并使用 `docker compose` 管理它。

您还可以自定义 `apps` 参数并使用以下方式覆盖默认 `.env` 配置：

```yaml
all:
  children:

    infra:
      hosts:
        10.10.10.10: { infra_seq: 1 }
      vars:
        docker_enabled: true
        app: pgadmin  # 指定要安装的应用程序名称（pgadmin）（在 apps 中）
        apps:         # 定义所有应用程序
          pgadmin:    # pgadmin 应用程序的定义
            conf:     # 覆盖 /opt/pgadmin/.env

              PGADMIN_DEFAULT_EMAIL: your@email.com
              PGADMIN_DEFAULT_PASSWORD: yourPassword

              PGADMIN_LISTEN_ADDRESS: 0.0.0.0
              PGADMIN_PORT: 8885
              PGADMIN_SERVER_JSON_FILE: /pgadmin4/servers.json
              PGADMIN_REPLACE_SERVERS_ON_STARTUP: true
```

要启动应用程序，运行：

```bash
./app.yml -l infra
```

--------

## 域名和证书

要通过 nginx（而不是直接访问端口 8885）访问 pgadmin，请使用以下方式配置 [基础设施门户](/docs/infra/admin/portal)：

```yaml
all:
  vars:
    infra_portal:
      home         : { domain: h.pigsty }
      grafana      : { domain: g.pigsty ,endpoint: "${admin_ip}:3000" , websocket: true }
      prometheus   : { domain: p.pigsty ,endpoint: "${admin_ip}:9058" }
      alertmanager : { domain: a.pigsty ,endpoint: "${admin_ip}:9059" }
      blackbox     : { endpoint: "${admin_ip}:9115" }
      loki         : { endpoint: "${admin_ip}:3100" }

      # 在此处添加 pgadmin 上游服务器定义
      pgadmin      : { domain: adm.pigsty  ,endpoint: "127.0.0.1:8885" }
```

然后运行 `make nginx` 更新 nginx 配置，并在 `/etc/hosts` 或 [本地](/docs/infra/admin/domain#内网动态解析) / [公共](/docs/infra/admin/domain#公网域名) DNS 服务器中配置 [本地静态 DNS](/docs/infra/admin/domain#本地静态解析) 记录 `<your_ip_address> adm.pigsty`。

Pigsty 将自动为 [`infra_portal`](/docs/infra/param#infra_portal) 中列出的域名签发自签名 SSL 证书。
如果您想使用真实域名，请定义 `certbot` 条目并运行 `make cert`，查看 [SSL 证书](/docs/infra/admin/cert) 了解详情。

```yaml
all:
  vars:        # 确保您的域名（adm.pigsty.cc）解析到您的公网 IP
    certbot_sign: true   # 使用 certbot 签发真实 HTTPS 证书（需要互联网访问！）
    infra_portal:
      pgadmin : { domain: adm.pigsty.cc  ,endpoint: "127.0.0.1:8885", certbot: adm.pigsty.cc }
```

--------

## 使用方法

Pigsty 的 Pgadmin 应用模板默认使用 8885 端口，您可以通过以下地址访问：

[http://adm.pigsty](http://adm.pigsty) 或 http://10.10.10.10:8885

默认用户名与密码: `admin@pigsty.cc` / `pigsty`

```bash
make up         # 使用 docker compose 启动 pgadmin
make run        # 使用 docker 启动 pgadmin
make view       # 打印 pgadmin 访问点
make log        # tail -f pgadmin 日志
make info       # 使用 jq 检查 pgadmin
make stop       # 停止 pgadmin 容器
make clean      # 移除 pgadmin 容器
make conf       # 使用 pigsty pg 服务器列表配置 pgadmin
make dump       # 从 pgadmin 容器导出 servers.json
make pull       # 拉取最新的 pgadmin 镜像
make rmi        # 移除 pgadmin 镜像
make save       # 保存 pgadmin 镜像到 /tmp/pgadmin.tgz
make load       # 从 /tmp 加载 pgadmin 镜像
```

--------

## Demo

公开 Demo 地址：[http://adm.pigsty.cc](http://adm.pigsty.cc)

默认用户名与密码: `admin@pigsty.cc` / `pigsty`

![](/img/docs/app/pgadmin.jpeg)

