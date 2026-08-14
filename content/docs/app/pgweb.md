---
title: PGWeb：网页客户端
weight: 635
date: 2022-03-18
description: 使用 Docker 拉起 PGWEB，以便从浏览器进行小批量在线数据查询
module: [SOFTWARE]
categories: [参考]
---

## PGWeb 客户端

[PGWeb](https://github.com/sosedoff/pgweb) 是一款基于浏览器的 PostgreSQL 客户端。Pigsty 在 `app/pgweb` 中提供了一个小型 Docker Compose 模板，把容器的 `8081` 端口发布到主机的 `8886` 端口。

```bash
cd ~/pigsty/app/pgweb
make up                    # docker compose up -d
```

当 `cli.pigsty` 门户项解析到 Infra 节点时，可打开 [http://cli.pigsty](http://cli.pigsty)，也可以直接访问 `http://10.10.10.10:8886`。公开演示地址为 [http://cli.pigsty.cc](http://cli.pigsty.cc)。

PGWeb 会要求输入 PostgreSQL 连接 URL，例如：

```text
postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta?sslmode=disable
postgres://test:test@10.10.10.11:5432/test?sslmode=disable
```

这些字符串包含公开的演示默认密码并关闭 TLS。实际部署应使用最小权限账户、非默认密码和合适的 `sslmode`，
不要把未加额外访问控制的 PGWeb 容器或数据库凭据暴露给不可信网络。

![PGWeb](/img/docs/app/pgweb.jpeg)


## 快捷方式

模板附带的 `Makefile` 提供：

```bash
make up         # 使用 docker compose 启动
make run        # 使用 docker run 启动
make view       # 打印本地访问入口与示例 URL
make log        # 跟踪容器日志
make info       # 使用 jq 检查容器
make stop       # 停止容器
make clean      # 停止并删除容器
make pull       # 拉取当前未固定版本的 sosedoff/pgweb 镜像
make rmi        # 删除本地镜像
make save       # 将镜像保存到 /tmp/docker/pgweb.tgz
make load       # 从 /tmp/docker/pgweb.tgz 加载镜像
```

当前模板使用未固定版本的 `sosedoff/pgweb` 镜像；若正式环境要求部署可复现，应在 `app/pgweb/docker-compose.yml` 中固定镜像版本或摘要。
