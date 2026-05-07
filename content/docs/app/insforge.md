---
title: InsForge：AI 后端即服务
weight: 566
description: 使用 Pigsty v4.3 自建 InsForge OSS，并将状态托管到外部 PostgreSQL。
module: [SOFTWARE]
categories: [参考]
---

[**InsForge**](https://github.com/InsForge/InsForge) 是面向 AI 编程代理的开源 Backend-as-a-Service 平台，提供认证、REST API、边缘函数、实时订阅与 LLM Gateway。

Pigsty v4.3 提供 `app/insforge` 配置模板（`conf/app/insforge.yml`），默认使用外部 PostgreSQL，并通过 Docker Compose 拉起无状态服务。

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/insforge
vi pigsty.yml                 # 必改：JWT_SECRET、管理员密码、数据库密码、域名
./deploy.yml
./docker.yml
./app.yml
```

默认访问地址：

- `http://<IP>:7130`
- `http://isf.pigsty`

默认管理员账号为 `admin@example.com` / `pigsty`，生产环境必须修改。

## 关键配置

`conf/app/insforge.yml` 会在 `apps.insforge.conf` 中覆盖 `/opt/insforge/.env`。重点参数：

- `JWT_SECRET`：JWT 签名密钥，必须替换为 32 字符以上随机值
- `ADMIN_EMAIL` / `ADMIN_PASSWORD`：初始管理员账号
- `POSTGRES_HOST` / `POSTGRES_PORT` / `POSTGRES_DB` / `POSTGRES_USER` / `POSTGRES_PASSWORD`
- `OPENROUTER_API_KEY`：可选 LLM Gateway 配置
- `AWS_*` / `S3_*`：可选对象存储配置

默认服务端口：

- InsForge App + Dashboard：`7130`
- PostgREST：`5430`
- Auth：`7132`
- Deno Runtime：`7133`

## 运维命令

```bash
cd /opt/insforge
make up
make view
make log
make stop
```

## 参考

- InsForge 项目： https://github.com/InsForge/InsForge
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/insforge.yml
