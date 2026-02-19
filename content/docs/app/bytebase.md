---
title: ByteBase：模式迁移
weight: 625
date: 2022-05-20
description: 使用 Pigsty 提供的 Docker Compose 模板部署 Bytebase，并接入外部 PostgreSQL。
module: [SOFTWARE]
categories: [任务]
---

[Bytebase](https://bytebase.com/) 是数据库 Schema 变更与版本管理工具。

Pigsty 在 `app/bytebase` 中提供了可直接使用的 Compose 模板，默认监听 `8887`，并通过 `BB_PGURL` 连接外部 PostgreSQL。

## 快速开始

```bash
cd ~/pigsty/app/bytebase
vi .env         # 检查 BB_PORT / BB_DOMAIN / BB_PGURL
make up
```

访问：

- `http://ddl.pigsty`
- `http://<IP>:8887`

首次启动后，请按 Bytebase 向导初始化管理员账号。

## 外部 PostgreSQL

默认连接串示例：

```bash
postgresql://dbuser_bytebase:DBUser.Bytebase@10.10.10.10:5432/bytebase?sslmode=prefer
```

可先在 Pigsty 中创建业务用户与数据库：

```bash
bin/pgsql-user pg-meta dbuser_bytebase
bin/pgsql-db   pg-meta bytebase
```

## 常用命令

```bash
make up
make log
make info
make stop
make clean
```

## 参考

- Bytebase 文档： https://www.bytebase.com/docs/
- Pigsty 模板： https://github.com/pgsty/pigsty/tree/main/app/bytebase
