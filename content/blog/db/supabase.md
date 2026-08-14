---
title: "自建 Supabase：创业出海的首选数据库"
linkTitle: "Supabase 自建指南"
date: 2024-11-25
lastmod: 2026-08-14
author: 冯若航
summary: >
  使用 Pigsty v4.5 的 supabase 模板，在自有 Linux 服务器上部署 PostgreSQL、Silo 与 Supabase 无状态服务。
tags: [数据库, Supabase]
---

Supabase 是以 PostgreSQL 为核心的开源 BaaS，提供身份认证、Realtime、Edge Functions、对象存储，以及由数据库模式生成的 REST API；按需启用 `pg_graphql` 后也可提供 GraphQL API。

当你需要掌控数据与基础设施、满足隔离或合规要求，或者希望自行选择 PostgreSQL 版本与扩展时，可以考虑自托管。Supabase 的 [官方自托管文档](https://supabase.com/docs/guides/self-hosting) 推荐 Docker，并明确指出自托管方负责服务器、安全加固、数据库维护、高可用、备份和监控。Pigsty 是独立的社区集成，目前不在该官方页面的社区项目列表中。

Pigsty v4.5 的 `supabase` 模板把有状态组件交给 Pigsty 管理：PostgreSQL 由 PGSQL 模块托管，对象存储由 MINIO 模块当前部署的 Silo 提供；Auth、Storage、Realtime、Studio 等无状态组件使用 Docker Compose 运行。模板支持 PostgreSQL 15-18（默认 18），并可使用 Pigsty 当前收录的 {{< param pgext_count >}} 个 PostgreSQL 扩展。

> 本文原发于 2024-11-25，命令和事实已于 2026-08-14 按 Pigsty v4.5 当前源码重新校准。持续更新的完整说明位于 [Supabase 企业级自建](/docs/app/supabase/)；该参考页是部署参数与操作步骤的唯一维护入口。


------

## 快速开始

完整 Supabase 栈至少需要 2 核 CPU 与 4 GB 内存，建议 4 核与 8 GB 以上。准备受支持的 [Linux 系统](/docs/ref/linux/)，下载当前公开稳定版 Pigsty，生成配置后务必先修改域名、密码和密钥：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./configure -c supabase
vi pigsty.yml
./deploy.yml
./docker.yml -l supabase
./app.yml -l supabase
```

`deploy.yml` 是标准单机部署入口；`docker.yml` 与 `app.yml` 使用 `-l supabase` 限定目标组。安装完成后，可以通过 `http://<node-ip>:8000` 访问 Supabase Studio。模板中的 `supabase` / `pigsty` 仅为演示凭据，生产环境不得保留。

![Supabase](/img/pigsty/supabase.webp)

请在运行前核对以下事项：

- `JWT_SECRET`、`ANON_KEY`、`SERVICE_ROLE_KEY`、Dashboard、Logflare、Realtime 与 S3 凭据均已重新生成；
- `API_EXTERNAL_URL` 保留 `/auth/v1` 后缀，而 `SITE_URL` 与 `SUPABASE_PUBLIC_URL` 使用站点根 URL；
- PostgreSQL 业务用户密码与 `POSTGRES_PASSWORD` 一致，对象存储用户与 S3 配置一致；
- 公网或 OAuth 场景使用真实域名与 HTTPS；
- 已用 `pig pb info` 验证备份，并实际做过恢复演练。

具体变量、长度约束、模板路径和重新加载命令见 [安全加固](/docs/app/supabase/#进阶主题安全加固)。


------

## 架构与能力边界

Pigsty 模板不启动上游 Compose 的 `db` 与 `supavisor` 容器。无状态容器直接访问 Pigsty 管理的 PostgreSQL 服务；单节点模板默认使用 `5436` 服务端口，它始终路由到当前主库。

Logflare / Analytics 使用独立的 `_supabase` 数据库及 `_analytics` 模式。Studio 的 Query Performance 通过 `extensions` 模式中的兼容对象读取 `pg_stat_statements`，而实际扩展仍位于 `monitor` 模式，以兼容 Pigsty 监控。

默认单节点模板适合评估、小型工作负载与起步部署，但它不是高可用拓扑。若只有一台服务器，建议使用外部 S3 同时承载 Supabase Storage 与 PostgreSQL 备份，以降低本机整体故障风险。实际 RPO 取决于可恢复备份、WAL 归档和对象存储状态，不能用固定数据量承诺。

生产级高可用通常需要：

- 至少三节点的 ETCD DCS；
- 多节点 PostgreSQL，并按目标明确选择同步策略；
- 多节点 Silo 或独立的高可用 S3 服务；
- 多副本 Supabase 无状态容器，以及 DNS、VIP 或 HAProxy 接入；
- 对备份恢复、故障切换和证书续期进行周期性演练。

默认 `norm` 预设的目标 RTO 是 45 秒以内，异步复制不承诺 RPO=0。若目标是 RTO 低于 30 秒且已确认事务在切换时不丢失，需要显式使用 `fast` RTO 预设与 `crit.yml` 严格同步策略，并以实际故障演练结果为准。详情见 [高可用](/docs/concept/ha/) 与 [部署规划](/docs/deploy/planning/)。


------

## 域名、对象存储与邮件

生产部署应在 `infra_portal.supa` 配置域名、反向代理和证书，并同步设置 `apps.supabase.conf` 下的三个外部 URL。使用 `make cert` 申请证书后，通过下列命令只更新 Supabase 应用配置与容器：

```bash
./app.yml -l supabase -t app_config,app_launch
```

Supabase Storage 可以连接 Silo、云 S3 或其他 S3 兼容服务。切换 PostgreSQL 的 pgBackRest 仓库是有状态变更：必须先检查现有备份，再在明确授权后运行目标限定的 `./pgsql.yml -t pg_backup -l <cluster>`，最后立即创建并验证新仓库中的全量备份。旧仓库数据不会自动迁移，详见 [切换备份仓库](/docs/pgsql/backup/repository/#切换仓库)。

Auth 发信需要生产可用的 SMTP 服务。`SMTP_HOST` 只填写主机名，端口单独写入 `SMTP_PORT`；修改后同样用目标限定的 `app.yml` 重新加载。

完整配置样例、阿里云 OSS 字段和 SMTP 参数见 [Supabase 企业级自建](/docs/app/supabase/)。


------

## 为什么选择 Pigsty

Supabase 官方当前预配置 50 多个扩展，具体清单随平台更新；Pigsty v4.5 的扩展目录包含 {{< param pgext_count >}} 个条目，并提供 Supabase 使用的 `pg_graphql`、`pg_jsonschema`、`wrappers`、`index_advisor`、`pg_net`、`supabase_vault`、`pgjwt`、`pgsodium`、`supautils` 与 `plan_filter` 等包。

自建的价值不是“零运维”，而是把版本、扩展、数据、备份和可用性策略的决定权交回用户。相应地，服务器维护、安全补丁、密钥管理、容量规划、备份验证和故障演练也由部署方负责。开始前请通读 [Supabase 参考手册](/docs/app/supabase/)、[安全指南](/docs/setup/security/) 与 [备份机制](/docs/pgsql/backup/)。
