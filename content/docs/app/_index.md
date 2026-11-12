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

请使用同一版本配套的 `app.yml`、`app/<name>/` 与 `conf/`，避免混用不同发布版本的模板与初始化脚本。

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

`app.yml` 会将 `app/<name>` 模板复制到 `/opt/<name>`（或 `apps.<name>.dest` 指定的路径），按 `apps.<name>.file` 准备目录，按 `apps.<name>.conf` 生成权限为 `0600` 的 `.env`，最后执行应用的 `make` 默认目标；`apps.<name>.args` 可指定其他 Make 目标。拉起应用时会自动透传 `proxy_env` 代理环境变量，并在 `--check` 预检模式下安全跳过实际的 `make` 启动执行。

`apps.<name>.conf` 中的值会被确定性地按 **字面量** 写入 `.env`：`null` 输出为空值，布尔值输出为小写 `true` / `false`，`$` 会自动转义为 `$$`，任何包含 `$`、空白符、引号、`#`、`\` 或非 ASCII 字符的字符串都会用 JSON 双引号包裹。因此，写在 `apps.<name>.conf` 中的密码、哈希串或 `${OTHER_VARIABLE}` **不会** 发生 Docker Compose 二次变量展开；需要动态拼装的连接串可先通过 Ansible/Jinja 求值（密码中的特殊字符仍需按 URL 规则编码），只有手工直接编辑 `.env` 未转义行时才会保留 Compose 插值。

## 维护中的配置模板

Pigsty 提供以下应用配置模板（`conf/app/*.yml`、`conf/supabase.yml` 与 `conf/app/supa.yml` 软链接）：

- `app/dify`
- `app/odoo`
- `app/teable`
- `app/mattermost`
- `app/electric`
- `app/maybe`
- `app/immich`
- `app/jumpserver`
- `app/registry`
- `app/silo`
- `app/insforge`
- `app/hindsight`
- `app/discourse`
- `supabase`

这些模板使用 `./configure -c ...`、`./app.yml` 工作流；部署前按应用说明检查数据库、目录与镜像版本。

## 轻量 Compose 应用

对于 `bytebase`、`gitea`、`jupyter`、`kong`、`metabase`、`nocodb`、`pgadmin`、`pgweb`、`postgrest`、[`pg_exporter`](/docs/app/pg-exporter/)、`wiki` 等应用，也可直接使用对应目录下的 Compose 模板。多节点高可用对象存储部署见 [**MINIO 模块**](/docs/minio/)；单节点容器化对象存储可使用 [`app/silo`](/docs/app/silo/) 模板。
[FerretDB](/docs/app/ferretdb/) 是 [PostgreSQL Mongo 模式](/docs/conf/mongo/) 的 Docker APP 协议层，通过 `mongo`（`fork/mongo`）配置模板配合 `docker.yml` 与 `app.yml` 部署。

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
