---
title: supabase
weight: 805
description: 使用 Pigsty 托管的 PostgreSQL 自建 Supabase 开源 Firebase 替代方案
icon: fa-solid fa-bolt
categories: [参考]
---

`supabase` 配置模板提供了自建 Supabase 的参考配置，使用 Pigsty 托管的 PostgreSQL 作为底层存储。

更多细节，请参考 **[Supabase 自建教程](/docs/app/supabase/)**


--------

## 配置概览

- 配置名称： `supabase`
- 节点数量： 单节点
- 配置说明：使用 Pigsty 托管的 PostgreSQL 自建 Supabase
- 适用系统：`el8`, `el9`, `d12`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- PostgreSQL：`15`, `16`, `17`, `18`（模板默认 `18`）
- Supabase：`self-hosted/v0.8.2`（提交 `564eab8`，应用镜像按该版本配套）
- API 网关：默认 Envoy `1.39.1`，可选 Kong `3.9.3`
- 相关配置：[`meta`](/docs/conf/meta/)，[`rich`](/docs/conf/rich/)

启用方式：

```bash
./configure -c supabase [-i <primary_ip>]
```


--------

## 配置内容

开发版源文件：`conf/supabase.yml`，完整配置见下方。本文对应 Supabase `0.8.2`，需要配套的应用文件与迁移脚本，详见 [**应用说明**](/docs/app/supabase/)。

{{< include file="yaml/supabase.yml" code=true lang="yaml" >}}

--------

## 安装过程

{{< asciinema file="demo/supabase.cast" markers="0:检查环境,11:安装,43:配置,307:Docker,321:域名,340:App,350:检查" speed="1.3" autoplay="true" loop="true" >}}


--------

## 配置解读

`supabase` 模板提供了完整的 Supabase 自建方案，让您可以在自己的基础设施上运行这个开源 Firebase 替代品。

**架构组成**：
- **PostgreSQL**：Pigsty 托管的生产级 PostgreSQL（支持高可用）
- **Docker 容器**：Supabase 无状态服务（Auth、Storage、Realtime、Edge Functions 等）
- **API 网关**：默认 Envoy，使用 `api-gw` 服务提供 HTTP `8000` 入口
- **Silo**：由 MINIO 模块部署的 S3 兼容对象存储，用于文件存储和 PostgreSQL 备份
- **Nginx**：反向代理和 HTTPS 终止

**关键特性**：
- 使用 Pigsty 管理的 PostgreSQL 替代 Supabase 自带的数据库容器
- 默认使用 PG18，当前配套服务已在外置 PG18.6 上完成基本功能验证
- 支持 PostgreSQL 高可用（可扩展为三节点集群）
- 安装全部 Supabase 所需扩展（pg_net、pgjwt、pg_graphql、vector 等）
- 使用独立的 `_supabase` 数据库存储内部日志分析数据，并由 `supa-kick` 定时推进处理
- 集成 Silo 对象存储用于文件上传和备份
- 支持 HTTPS 和 Let's Encrypt 自动证书

**部署步骤**：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./configure -c supabase                   # 使用 supabase 配置模板
./deploy.yml                              # 安装 Pigsty、PostgreSQL、Silo
./docker.yml -l supabase                  # 在 supabase 组安装 Docker
./app.yml -l supabase                     # 在 supabase 组启动容器
```

**访问方式**：

```bash
# Supabase Studio
http://<IP>:8000
http://supa.pigsty   (用户名: supabase, 密码: pigsty)

# 直接连接 PostgreSQL
psql postgres://supabase_admin:DBUser.Supa@10.10.10.10:5432/postgres
```

**适用场景**：
- 需要自建 BaaS (Backend as a Service) 平台
- 希望完全掌控数据和基础设施
- 需要企业级 PostgreSQL 高可用和备份
- 对 Supabase 云服务有合规或成本考虑

**注意事项**：
- **必须修改 JWT_SECRET**：使用至少 32 字符的随机字符串，并重新生成 ANON_KEY 和 SERVICE_ROLE_KEY
- 需要配置正确的域名（`SITE_URL`、`API_EXTERNAL_URL`）
- 生产环境建议启用 HTTPS（可使用 certbot 自动签发证书）
- Docker 网络需要能访问 PostgreSQL（模板为 `postgres` 与 `_supabase` 配置了 `172.16.0.0/12` HBA 规则，应按实际网络收窄）
- 既有部署需按 [升级说明](/docs/app/supabase/#升级现有部署) 处理网关服务名变更与 `files/supabase-0.8.2.sql`，不要重放新库基线 `files/supabase.sql`
