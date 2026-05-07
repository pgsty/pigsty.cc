---
title: app/insforge
weight: 880
description: 使用 Pigsty 托管的 PostgreSQL 部署 InsForge 后端即服务平台
icon: fa-solid fa-layer-group
categories: [参考]
---

`app/insforge` 配置模板用于部署 InsForge OSS，并使用 Pigsty 托管的 PostgreSQL 作为外部数据库。

更多细节请参考：**[InsForge 部署教程](/docs/app/insforge/)**


--------

## 配置概览

- 配置名称： `app/insforge`
- 节点数量：单节点
- 配置说明：部署 InsForge App、PostgREST、Deno Runtime，并创建所需 PostgreSQL 用户、角色、数据库与扩展
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)、[`supabase`](/docs/conf/supabase/)

启用方式：

```bash
./configure -c app/insforge [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/insforge.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/insforge.yml)

{{< readfile file="yaml/app/insforge.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`app/insforge` 模板默认部署：

- InsForge 主服务：`ghcr.io/insforge/insforge-oss:v2.0.1`，端口 `7130`
- PostgREST：`postgrest/postgrest:v12.2.12`，端口 `5430`
- Deno Runtime：端口 `7133`
- PostgreSQL 数据库：`insforge`
- 扩展：`pgcrypto`、`http`、`pg_cron`
- Nginx 入口：`isf.pigsty` -> `10.10.10.10:7130`

**访问方式**：

```bash
http://<IP>:7130
http://isf.pigsty
```

默认管理员账号为 `admin@example.com` / `pigsty`，生产环境必须修改 `JWT_SECRET`、`ADMIN_PASSWORD` 与数据库密码。
