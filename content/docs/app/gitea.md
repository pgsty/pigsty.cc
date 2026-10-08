---
title: Gitea：自建简易代码托管平台
linkTitle: Gitea：简易代码托管
weight: 585
date: 2022-05-25
description: 使用 Pigsty 的 Compose 模板部署 Gitea，并接入外部 PostgreSQL。
module: [SOFTWARE]
categories: [参考]
---

[Gitea](https://gitea.io/) 是轻量级开源 Git 托管平台。

Pigsty 的 `app/gitea` 模板默认就是 **PostgreSQL 外部数据库模式**，通过 `.env` 中 `GITEA_DB_*` 参数连接数据库。

## 快速开始

```bash
cd ~/pigsty/app/gitea
vi .env         # 检查域名、端口、数据库连接
make up
```

默认入口：

- Web：`http://git.pigsty` 或 `http://<IP>:8889`
- SSH：`<IP>:222`

## 数据库准备

```bash
bin/pgsql-user pg-meta dbuser_gitea
bin/pgsql-db   pg-meta gitea
```

连接串示例：

```bash
postgres://dbuser_gitea:DBUser.Gitea@10.10.10.10:5432/gitea
```

## 反向代理与升级

Gitea 28 使用 `/-/ws` 提供通知，Nginx 入口需要开启 WebSocket：

```yaml
infra_portal:
  gitea: { domain: git.pigsty, endpoint: "127.0.0.1:8889", websocket: true }
```

升级前一并备份 PostgreSQL 和 `/data/gitea`，记录正在运行的镜像 digest；回滚时恢复配套的数据库与文件备份。Gitea 28 默认在 400 天后删除已完成的 Actions 运行、日志和制品，需长期保留时应检查保留设置。参见 [Gitea 28 发布说明](https://blog.gitea.com/release-of-28.0.0/)。

## 常用命令

```bash
make up
make log
make stop
make clean
```

## 参考

- Gitea 文档： https://docs.gitea.com/
- Pigsty 模板： https://github.com/pgsty/pigsty/tree/main/app/gitea
