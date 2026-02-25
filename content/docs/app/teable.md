---
title: Teable：AI 无代码数据库
weight: 580
description: 使用 Pigsty v4.2 自建 Teable，并接入外部 PostgreSQL 与 MinIO。
module: [SOFTWARE]
categories: [参考]
---

[**Teable**](https://teable.io/) 是面向团队协作的无代码数据库平台。

Pigsty v4.2 提供 `app/teable` 模板（`conf/app/teable.yml`），默认依赖 **PostgreSQL + MinIO + Docker**（不依赖 Redis）。

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/teable
vi pigsty.yml                 # 修改密码、域名、邮件参数
./deploy.yml                  # 安装基础设施、PostgreSQL、MinIO
./docker.yml
./app.yml
```

默认入口：

- `http://<IP>:8890`
- `http://tea.pigsty`

## 关键配置

模板会将以下参数写入 `/opt/teable/.env`：

- `POSTGRES_HOST/POSTGRES_PORT/POSTGRES_DB/POSTGRES_USER/POSTGRES_PASSWORD`
- `PRISMA_DATABASE_URL`
- `PUBLIC_ORIGIN`（对外访问地址）
- `PUBLIC_DATABASE_PROXY`
- `TEABLE_PORT`（默认 `8890`）

## 运维命令

```bash
cd /opt/teable
make up
make log
make down
```

## 参考

- Teable 文档： https://help.teable.io/
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/teable.yml
