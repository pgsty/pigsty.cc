---
title: Maybe：个人财务管理
weight: 600
description: 使用 Pigsty v4.3 自建 Maybe，并将数据存储到外部 PostgreSQL。
module: [SOFTWARE]
categories: [参考]
---

[**Maybe**](https://github.com/maybe-finance/maybe) 是开源个人财务管理工具。

Pigsty v4.3 提供 `app/maybe` 配置模板（`conf/app/maybe.yml`）。该模板会把 Maybe 作为无状态容器部署，并将业务数据落到外部 PostgreSQL。

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/maybe
vi pigsty.yml                 # 必改：SECRET_KEY_BASE、数据库密码、域名
./deploy.yml
./docker.yml
./app.yml
```

默认访问地址：

- `http://<IP>:5002`
- `http://maybe.pigsty`

## 关键配置

在模板的 `apps.maybe.conf` 中重点关注：

- `SECRET_KEY_BASE`：必须替换为随机密钥（例如 `openssl rand -hex 64`）
- `DB_HOST/DB_PORT/DB_USERNAME/DB_PASSWORD/DB_DATABASE`
- `APP_DOMAIN` 与 `MAYBE_PORT`

## 运维命令

`app/maybe/Makefile` 默认在 `/opt/maybe` 工作，请在部署后执行：

```bash
cd /opt/maybe
make up
make restart
make log
make db-setup
```

## 参考

- Maybe 项目： https://github.com/maybe-finance/maybe
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/maybe.yml
