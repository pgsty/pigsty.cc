---
title: Mattermost：开源团队协作
weight: 595
description: 使用 Pigsty v4.1 部署 Mattermost，并将状态托管到外部 PostgreSQL。
module: [SOFTWARE]
categories: [参考]
---

[**Mattermost**](https://mattermost.com/) 是开源团队协作平台，可作为 Slack 的私有化替代方案。

Pigsty v4.1 提供 `app/mattermost` 配置模板（`conf/app/mattermost.yml`），默认将应用状态存放到外部 PostgreSQL，并将文件目录持久化到主机路径。

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

## 运维命令

```bash
cd /opt/mattermost
make up
make restart
make log
make stop
```

## 参考

- Mattermost 文档： https://docs.mattermost.com/
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/mattermost.yml
