---
title: 应用
weight: 550
description: 基于 Pigsty 的应用模板与数据应用说明：使用 Docker Compose 拉起无状态应用，并将状态托管到外部 PostgreSQL / S3 兼容存储。
icon: fa-solid fa-chart-line
module: [APP]
categories: [参考]
---

Pigsty 的“应用”分为两类：

- **软件模板（Software Templates）**：`~/pigsty/app/<name>` 下的应用部署资源，主要使用 Docker Compose；[Hermes](/docs/app/hermes/) 提供独立的源码安装指南。
- **数据应用（Applets）**：基于 PostgreSQL + Grafana 的分析样例，偏教学/演示属性。

本节包含 v4.5.0 之后的模板更新；使用新增功能时，需要同步对应的 `app/<name>`、`conf/` 配置与升级脚本。

## 应用模型

推荐使用以下流程部署应用：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c <template>     # 例如 app/dify、app/immich、app/jumpserver、app/maybe、supabase
vi pigsty.yml                 # 修改密码、域名、IP、密钥
./deploy.yml                  # 部署基础设施与数据库
./docker.yml                  # 安装 Docker
./app.yml                     # 拉起应用
```

`app.yml` 会将 `app/<name>` 模板复制到 `/opt/<name>`，按 `apps.<name>.file` 准备目录，按 `apps.<name>.conf` 覆盖 `.env`，最后执行应用的 `make` 默认目标；`apps.<name>.args` 可指定其他 Make 目标。初始化步骤由各应用的 Makefile 与 Compose 定义控制。

`apps.<name>.conf` 中的值按字面量写入权限为 `0600` 的 `.env`，不会对 `${OTHER_VARIABLE}` 再次插值。需要派生连接串时，使用 Ansible/Jinja 先求值，提供最终值，或保留 Compose 内的默认派生逻辑。布尔值输出为小写 `true` / `false`，`null` 清空值；密码放入 URL 时仍需按 URL 规则编码。手动编辑的 `.env` 仍遵循 Compose 自身的插值规则。

## 维护中的配置模板

当前源码中提供了以下应用配置模板（`conf/app/*.yml`、`conf/supabase.yml` 与 `conf/app/supa.yml` 软链接）：

- `app/dify`
- `app/odoo`
- `app/teable`
- `app/mattermost`
- `app/electric`
- `app/maybe`
- `app/immich`
- `app/jumpserver`
- `app/registry`
- `app/insforge`
- `app/hindsight`
- [`app/silo`](/docs/conf/silo/)
- `supabase`

这些模板开箱即用，且与 `./configure -c ...`、`./app.yml` 工作流保持一致。

## 轻量 Compose 应用

对于 `bytebase`、`gitea`、`jupyter`、`kong`、`metabase`、`nocodb`、`pgadmin`、`pgweb`、`postgrest`、[`pg_exporter`](/docs/app/pg-exporter/)、`wiki` 等应用，也可直接使用对应目录下的 Compose 模板。原 `app/minio` 已由 [`app/silo`](/docs/app/silo/) 替代。
[FerretDB](/docs/app/ferretdb/) 是 [PostgreSQL Mongo 模式](/docs/conf/mongo/) 的 Docker APP 协议层，通过 `fork/mongo` 配置模板配合 `docker.yml` 与 `app.yml` 部署。

```bash
cd ~/pigsty/app/<name>
make up
```

如果你希望统一纳入 Pigsty IaC，可用 `app.yml` 指定应用目录：

```bash
./app.yml -e app=<name>
```

具体应用的数据库、目录与初始化要求见对应文档。Hermes 使用 Python 虚拟环境安装，没有 Compose / `app.yml` 部署入口。

## 关于历史 Applet

`pglog`、`covid`、`db-engine`、`sf-survey`、`cloud`、`isd` 等数据应用保留为参考示例，适合学习数据建模与可视化思路。

它们不再是主线“应用交付”方式；请优先使用上面的软件模板工作流。
