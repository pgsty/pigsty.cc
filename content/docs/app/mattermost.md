---
title: Mattermost：开源团队协作
weight: 595
description: 使用 Pigsty 部署 Mattermost，并将状态托管到外部 PostgreSQL。
module: [SOFTWARE]
categories: [参考]
---

[**Mattermost**](https://mattermost.com/) 是开源团队协作平台，可作为 Slack 的私有化替代方案。

Pigsty 提供 `app/mattermost` 配置模板（`conf/app/mattermost.yml`），默认将应用状态存放到外部 PostgreSQL，并将文件目录持久化到主机路径。

默认镜像为 `mattermost/mattermost-team-edition:latest`，源码记录的 2026-08-27 验证版本为 `11.10.1`。官方 Team Edition 镜像仅提供 `linux/amd64`，生产部署使用 x86-64 主机；ARM64 上的 QEMU 模拟测试不代表原生支持。

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/mattermost
vi pigsty.yml                 # 修改密码、域名
./deploy.yml
./docker.yml
./app.yml
```

默认访问地址：

- `http://<IP>:8065`
- `http://mm.pigsty`

首次访问需要在 Web 页面初始化管理员账号。

## 默认存储与连接

模板默认配置：

- PostgreSQL 连接：`POSTGRES_URL=postgres://dbuser_mattermost:DBUser.Mattermost@<IP>:5432/mattermost?...`
- 持久化目录：`/data/mattermost/{config,data,logs,plugins,client/plugins,bleve-indexes}`
- Calls 媒体端口：`8443/TCP` 与 `8443/UDP`，通过 `CALLS_PORT` 调整
- Bleve 容器内目录：`MM_BLEVESETTINGS_INDEXDIR=/mattermost/bleve-indexes`

直接运行 `app/mattermost` 时，数据默认放在 `./volumes`；通过配置模板部署时使用 `/data/mattermost/*`。`make up` 会先按 Compose 实际配置创建持久目录并设置 UID/GID `2000:2000`，需要 Python 3 与相应目录管理权限；请使用专用子目录。

公网 Calls 通话需同时放行 TCP 和 UDP 媒体端口，或配置 TURN。`node_firewall_public_port` 通用参数仅打开 TCP，不能单独满足 UDP 通话流量需求。

## 运维命令

```bash
cd /opt/mattermost
make up
make restart
make log
make health   # 通过 mmctl 本地 socket 检查状态
make stop
```

源码验证的 `11.10.1` 镜像不含 shell 或 `curl`，健康检查使用 `mmctl system status --local`。升级前同时备份 PostgreSQL、配置、数据、插件与 Bleve 目录，并记录当前镜像版本；需要回滚时恢复匹配的数据备份，不能直接用旧镜像访问已升级数据库。

## 参考

- Mattermost 文档： https://docs.mattermost.com/
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/mattermost.yml
