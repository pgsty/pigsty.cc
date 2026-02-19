---
title: 应用
weight: 550
description: 基于 Pigsty v4.1 的应用模板与数据应用说明：使用 Docker Compose 拉起无状态应用，并将状态托管到外部 PostgreSQL / MinIO。
icon: fa-solid fa-chart-line
module: [APP]
categories: [参考]
---

Pigsty v4.1 的“应用”分为两类：

- **软件模板（Software Templates）**：`~/pigsty/app/<name>` 下的 Docker Compose 模板，用于拉起无状态业务组件。
- **数据应用（Applets）**：基于 PostgreSQL + Grafana 的分析样例，偏教学/演示属性。

## v4.1 应用模型

在 v4.1 中，推荐使用以下流程部署应用：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c <template>     # 例如 app/dify、app/odoo、app/registry、supabase
vi pigsty.yml                 # 修改密码、域名、IP、密钥
./deploy.yml                  # 部署基础设施与数据库
./docker.yml                  # 安装 Docker
./app.yml                     # 拉起应用
```

`app.yml` 会将 `app/<name>` 模板复制到 `/opt/<name>`，并按 `apps.<name>.conf` 覆盖 `.env`，最后执行 `docker compose up -d`。

## 维护中的配置模板

当前 v4.1 在源码中提供了以下应用配置模板（`conf/app/*.yml` 与 `conf/supabase.yml`）：

- `app/dify`
- `app/odoo`
- `app/teable`
- `app/mattermost`
- `app/electric`
- `app/maybe`
- `app/registry`
- `supabase`

这些模板开箱即用，且与 `./configure -c ...`、`./app.yml` 工作流保持一致。

## 轻量 Compose 应用

对于 `gitea`、`postgrest`、`pgweb`、`wiki`、`kong`、`bytebase` 等应用，也可直接使用对应目录下的 Compose 模板：

```bash
cd ~/pigsty/app/<name>
make up
```

如果你希望统一纳入 Pigsty IaC，可使用：

```bash
./app.yml -e app=<name>
```

## 关于历史 Applet

`pglog`、`covid`、`db-engine`、`sf-survey`、`cloud`、`isd` 等数据应用保留为参考示例，适合学习数据建模与可视化思路。

它们不再是 v4.1 的主线“应用交付”方式；请优先使用上面的软件模板工作流。
