---
title: app/teable
weight: 890
description: 使用 Pigsty 托管的 PostgreSQL 部署 Teable 开源 Airtable 替代品
icon: fa-solid fa-table-cells
categories: [参考]
---

`app/teable` 配置模板提供了部署 Teable 开源无代码数据库的参考配置，使用 Pigsty 托管的 PostgreSQL 作为数据库。


--------

## 配置概览

- 配置名称： `app/teable`
- 节点数量： 单节点
- 配置说明：使用 Pigsty 托管的 PostgreSQL 部署 Teable
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/teable [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/teable.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/teable.yml)

{{< readfile file="yaml/app/teable.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`app/teable` 模板提供了 Teable 开源无代码数据库的一键部署方案。

**Teable 是什么**：
- 开源的 Airtable 替代品
- 基于 PostgreSQL 的无代码数据库
- 支持表格、看板、日历、表单等多种视图
- 提供 API 和自动化工作流

**关键特性**：
- 使用 Pigsty 管理的 PostgreSQL 作为底层存储
- 数据实际存储在真实的 PostgreSQL 表中
- 支持 SQL 直接查询数据
- 可与其他 PostgreSQL 工具和扩展集成

**访问方式**：

```bash
# Teable Web 界面
http://tea.pigsty:8890

# 或通过 Nginx 代理
https://tea.pigsty

# 同时可以直接 SQL 访问底层数据
psql postgresql://dbuser_teable:DBUser.Teable@10.10.10.10:5432/teable
```

**适用场景**：
- 需要 Airtable 类似功能但希望自建
- 团队协作数据管理
- 需要同时支持 API 和 SQL 访问
- 希望数据存储在真实 PostgreSQL 中

**注意事项**：
- Teable 用户需要 superuser 权限
- 需要正确配置 `PUBLIC_ORIGIN` 为外部访问地址
- 支持邮件通知（可选配置 SMTP）

