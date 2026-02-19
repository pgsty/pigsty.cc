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
- SSH：`<IP>:2222`

## 数据库准备

```bash
bin/pgsql-user pg-meta dbuser_gitea
bin/pgsql-db   pg-meta gitea
```

连接串示例：

```bash
postgres://dbuser_gitea:DBUser.Gitea@10.10.10.10:5432/gitea
```

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
