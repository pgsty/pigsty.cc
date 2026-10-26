---
title: Mattermost：开源团队协作
weight: 595
description: 使用 Pigsty 部署 Mattermost，并将状态托管到外部 PostgreSQL。
module: [SOFTWARE]
categories: [参考]
---

[**Mattermost**](https://mattermost.com/) 是开源团队协作平台，可作为 Slack 的私有化替代方案。

Pigsty 提供 `app/mattermost` 配置模板（`conf/app/mattermost.yml`），默认将应用状态存放到外部 PostgreSQL，并将文件目录持久化到主机路径。

默认镜像为 `mattermost/mattermost-team-edition:latest`。已核对的 Team Edition 11.10.1 镜像仅提供 `linux/amd64`，使用该版本时需要 x86-64 主机；生产部署应固定镜像版本。

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
- Bleve 容器内目录：应将 `MM_BLEVESETTINGS_INDEXDIR` 设为 `/mattermost/bleve-indexes`，不要填写宿主机路径

直接运行 `app/mattermost` 时，数据默认放在 `./volumes`；通过配置模板部署时，`app.yml` 按 `apps.mattermost.file` 创建 `/data/mattermost/*` 并设置 UID/GID `2000:2000`。`make up` 只准备默认 `./volumes`，自定义路径时需自行确认目录和权限。

## Calls 与版本差异

Compose 未发布 Calls 媒体端口。需要通话功能时，在 `mattermost` 服务的 `ports` 中保留 Web 映射，并增加：

```yaml
  - "8443:8443/tcp"
  - "8443:8443/udp"
```

公网 Calls 通话需同时放行 TCP 和 UDP 媒体端口，或配置 TURN。`node_firewall_public_port` 通用参数仅打开 TCP，不能单独满足 UDP 通话流量需求。

开发模板增加了 `CALLS_PORT`、按实际挂载准备目录的脚本和 `make health`，使用时需同步更新配套文件。

## 运维命令

```bash
cd /opt/mattermost
make up
make restart
make log
make stop
```

11.10.1 镜像不含 shell 或 `curl`，可通过 `docker compose exec -T mattermost /mattermost/bin/mmctl system status --local` 检查状态。升级前同时备份 PostgreSQL、配置、数据、插件与 Bleve 目录；回滚时恢复匹配的数据备份，不能直接用旧镜像访问已升级数据库。

## 参考

- Mattermost 文档： https://docs.mattermost.com/
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/mattermost.yml
