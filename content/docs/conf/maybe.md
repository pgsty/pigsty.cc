---
title: app/maybe
weight: 885
description: 使用 Pigsty 托管的 PostgreSQL 部署 Maybe 个人财务管理系统
icon: fa-solid fa-wallet
categories: [参考]
---

`app/maybe` 配置模板提供了部署 Maybe 开源个人财务管理系统的参考配置，使用 Pigsty 托管的 PostgreSQL 作为数据库。


--------

## 配置概览

- 配置名称： `app/maybe`
- 节点数量： 单节点
- 配置说明：使用 Pigsty 托管的 PostgreSQL 部署 Maybe 财务管理
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/maybe [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/maybe.yml`](https://github.com/Vonng/pigsty/blob/main/conf/app/maybe.yml)

{{< readfile file="yaml/app/maybe.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`app/maybe` 模板提供了 Maybe 开源个人财务管理系统的一键部署方案。

**Maybe 是什么**：
- 开源的个人和家庭财务管理系统
- 支持多账户、多币种资产追踪
- 提供投资组合分析和净值计算
- 美观现代的 Web 界面

**关键特性**：
- 使用 Pigsty 管理的 PostgreSQL 替代 Maybe 自带的数据库
- 数据持久化到独立目录 `/data/maybe`
- 支持 HTTPS 和自定义域名
- 提供多用户权限管理

**访问方式**：

```bash
# Maybe Web 界面
http://maybe.pigsty:5002

# 或通过 Nginx 代理
https://maybe.pigsty
```

**适用场景**：
- 个人或家庭财务管理
- 投资组合追踪和分析
- 多账户资产汇总
- 替代 Mint、YNAB 等商业服务

**注意事项**：
- 必须修改 `SECRET_KEY_BASE`，使用 `openssl rand -hex 64` 生成
- 首次访问时需要注册管理员账号
- 可选配置 Synth API 以获取股票价格数据

