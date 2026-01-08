---
title: app/odoo
weight: 870
description: 使用 Pigsty 托管的 PostgreSQL 部署 Odoo 开源 ERP 系统
icon: fa-solid fa-building
categories: [参考]
---

`app/odoo` 配置模板提供了自建 Odoo 开源 ERP 系统的参考配置，使用 Pigsty 托管的 PostgreSQL 作为数据库。

更多细节，请参考 **[Odoo 部署教程](/docs/app/odoo/)**


--------

## 配置概览

- 配置名称： `app/odoo`
- 节点数量： 单节点
- 配置说明：使用 Pigsty 托管的 PostgreSQL 部署 Odoo ERP
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/odoo [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/odoo.yml`](https://github.com/Vonng/pigsty/blob/main/conf/app/odoo.yml)

{{< readfile file="yaml/app/odoo.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`app/odoo` 模板提供了 Odoo 开源 ERP 系统的一键部署方案。

**Odoo 是什么**：
- 全球最流行的开源 ERP 系统
- 覆盖 CRM、销售、采购、库存、财务、HR 等企业管理模块
- 支持数千个社区和官方应用扩展
- 提供 Web 界面和移动端支持

**关键特性**：
- 使用 Pigsty 管理的 PostgreSQL 替代 Odoo 自带的数据库
- 支持 Odoo 19.0 最新版本
- 数据持久化到独立目录 `/data/odoo`
- 支持自定义插件目录 `/data/odoo/addons`

**访问方式**：

```bash
# Odoo Web 界面
http://odoo.pigsty:8069

# 默认管理员账号
用户名: admin
密码: admin (首次登录时设置)
```

**适用场景**：
- 中小企业 ERP 系统
- 替代 SAP、Oracle ERP 等商业解决方案
- 需要自定义业务流程的企业应用

**注意事项**：
- Odoo 容器以 uid=100, gid=101 运行，数据目录需要正确的权限
- 首次访问时需要创建数据库和设置管理员密码
- 生产环境建议启用 HTTPS
- 可通过 `/data/odoo/addons` 安装自定义模块

