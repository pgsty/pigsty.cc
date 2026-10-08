---
title: app/odoo
weight: 810
description: 使用 Pigsty 托管的 PostgreSQL 部署 Odoo 开源 ERP 系统
icon: fa-solid fa-building
categories: [参考]
---

`app/odoo` 配置模板提供了自建 Odoo Community 19 开源 ERP 系统的参考配置，使用 Pigsty 托管的 PostgreSQL 作为数据库。

更多细节，请参考 **[Odoo 部署教程](/docs/app/odoo/)**


--------

## 配置概览

- 配置名称： `app/odoo`
- 节点数量： 单节点
- 配置说明：使用 Pigsty 托管的 PostgreSQL 部署 Odoo ERP
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/odoo [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/odoo.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/odoo.yml)

{{< include file="yaml/app/odoo.yml" code=true lang="yaml" >}}


--------

## 配置解读

此单节点模板使用 Docker 运行 Odoo Community 19，由 Pigsty 管理 PostgreSQL。

**关键特性**：

- 使用 Odoo `19.0` 镜像和 PostgreSQL 18，预建专用角色、数据库及 `unaccent`、`pg_trgm` 扩展
- 默认监听所有地址的 8069 端口，支持直接访问和 Nginx 门户访问
- 文件存储位于 `/data/odoo/webdata`，插件目录为 `/data/odoo/addons`

**访问方式**：

```bash
http://<ip>:8069
http://odoo.pigsty
```

将 `odoo.pigsty` 解析到 Nginx 主机。应用初始登录为 `admin` / `admin`，首次登录后修改密码。

**注意事项**：

- 部署前修改数据库密码和 `ODOO_ADMIN_PASSWORD`；数据库管理主密码与应用登录密码不同
- `./app.yml` 初始化已有空库后启动 Web 容器，数据库管理页面默认关闭
- `ODOO_PORT` 只填写发布端口号；修改后同步调整 Nginx `endpoint` 端口
- 代理访问使用 `ODOO_PROXY_MODE=true`，仅直连时设为 `false`；生产环境使用 HTTPS
- 数据目录归属 uid=100、gid=101
- 文件存储和插件目录由用户自行使用 Restic 或 PGFS 备份
